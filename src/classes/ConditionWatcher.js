import { Cookies } from './Cookies';
import { getHostName, toNumber, LeaveCounter } from '../utils';
import ClickTrigger from './ClickTrigger';

export class ConditionWatcher {
  constructor(rawConditions, { id, formId, login }) {
    this.globCond = rawConditions;
    // eslint-disable-next-line no-multi-assign
    const conditions = (this.conditions = rawConditions.showCondition);
    this.id = id;
    this.login = login;
    this.formId = formId;
    // eslint-disable-next-line eqeqeq
    this.instant = conditions.instant != undefined ? conditions.instant : true;
    this.pageScroll = toNumber(conditions.onPageScroll);
    this.onLeave = conditions.onLeave || false;
    this.delay = toNumber(conditions.delay);
    this.active = rawConditions.active;
    this.leaveWatcher = this.leaveWatcher.bind(this);
    this.scrollWatcher = this.scrollWatcher.bind(this);
  }

  watch(resolve, reject) {
    this.resolve = resolve;
    this.reject = reject;
    this.isDone = false;

    if (!this.active) {
      return;
    }

    const clickTrigger = new ClickTrigger();
    clickTrigger.watch((attr) => {
      if (attr === `${this.login}/${this.formId}`) {
        resolve('click');
      }
    });

    if (this.isRejectByCookie()) {
      reject();
      return;
    }

    if (this.instant) {
      resolve('instant');
      return;
    }

    if (this.pageScroll) {
      document.addEventListener('scroll', this.scrollWatcher);
      this.scrollWatcher();
      if (this.isDone) {
        return;
      }
    }

    if (this.onLeave) {
      if (document.body) {
        document.body.addEventListener('mouseleave', this.leaveWatcher);
      } else {
        document.addEventListener('mouseleave', this.leaveWatcher);
      }

      const { id } = this;

      LeaveCounter.increment(id);

      window.onbeforeunload = () => {
        LeaveCounter.decrement(id);
      };
    }

    if (this.delay) {
      this.timeoutID = setTimeout(this.delayWatcher.bind(this), this.delay * 1000);
    }
  }

  isRejectByCookie() {
    if (this.globCond.ignoreCookie) {
      return false;
    }
    if (Cookies.has(`__sendsay_forms_${this.id}`)) {
      if (Cookies.get(`__sendsay_forms_${this.id}`) === this.globCond.frequency) {
        return true;
      }
      if (this.globCond.frequency) {
        Cookies.set(
          `__sendsay_forms_${this.id}`,
          this.globCond.frequency,
          this.globCond.frequency,
          '/',
          getHostName()
        );
        return true;
      }
      Cookies.remove(`__sendsay_forms_${this.id}`);
    }

    if (
      // eslint-disable-next-line eqeqeq
      this.conditions.multipleSubmit != undefined &&
      !this.conditions.multipleSubmit
    ) {
      if (Cookies.has(`__sendsay_forms_submit_${this.id}`)) {
        return true;
      }
    }

    if (this.conditions.maxCount) {
      if (
        Cookies.has(`__sendsay_forms_count_${this.id}`) &&
        +Cookies.get(`__sendsay_forms_count_${this.id}`) >= +this.conditions.maxCount
      ) {
        return true;
      }
    }
    return false;
  }

  scrollWatcher() {
    const curScroll = document.documentElement.scrollTop || window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const showScroll = this.pageScroll;
    if (maxScroll <= 0 || showScroll <= (curScroll / maxScroll) * 100) {
      this.satisfyCondition('scroll');
    }
  }

  leaveWatcher() {
    const opened = LeaveCounter.get(this.id);

    if (!opened || toNumber(opened) < 2) {
      this.satisfyCondition('leave');
    }
  }

  removeLeaveWatcher() {
    if (document.body) {
      document.body.removeEventListener('mouseleave', this.leaveWatcher);
    } else {
      document.removeEventListener('mouseleave', this.leaveWatcher);
    }
  }

  delayWatcher() {
    this.satisfyCondition('delay');
  }

  satisfyCondition(event) {
    this.isDone = true;

    this.stopWatch();

    this.resolve(event);
  }

  stopWatch() {
    document.removeEventListener('scroll', this.scrollWatcher);
    this.removeLeaveWatcher();

    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
  }
}
