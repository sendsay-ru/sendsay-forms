import { ConditionWatcher } from './ConditionWatcher';
import { Cookies } from './Cookies';
import { Popup } from './elements/Popup';
import { PopupBar } from './elements/PopupBar';
import { Embedded } from './elements/Embedded';
import { ToggleablePopup } from './elements/ToggleablePopup';
import { LeaveCounter } from '../utils';
import NotificationService from './NotificationService';
import ClickTrigger from './ClickTrigger';

export class Form {
  constructor(connector, options) {
    this.options = options || {};
    this.connector = connector;
    const promise = connector.load();

    if (promise) {
      promise.then(this.runWatcher.bind(this), this.handleFail.bind(this));
    }
  }

  processConditionsSettings() {
    const settings = this.connector.data.settings || {};
    const conditions = JSON.parse(JSON.stringify(settings));
    conditions.showCondition = conditions.showCondition || {};
    if (this.options.instant) {
      conditions.showCondition.instant = true;
    }
    if (this.options.ignoreState) {
      conditions.ignoreState = true;
    }
    if (this.options.ignoreCookie) {
      conditions.ignoreCookie = true;
    }
    conditions.active = this.connector.data.active;
    return conditions;
  }

  setFrequencyCookie(data) {
    if (!data) {
      return;
    }
    if (data && data.settings && data.settings.frequency) {
      Cookies.set(`__sendsay_forms_${data.id}`, data.settings.frequency, data.settings.frequency);
    }
  }

  setCountCookie(data) {
    if (!data) {
      return;
    }
    const count = +Cookies.get(`__sendsay_forms_count_${data.id}`) || 0;
    if (data) {
      Cookies.set(`__sendsay_forms_count_${data.id}`, count + 1, 94608000);
    }
  }

  setSubmitCookie(data) {
    if (!data) {
      return;
    }
    if (data) {
      Cookies.set(`__sendsay_forms_submit_${data.id}`, true, 94608000);
    }
  }

  runWatcher() {
    const { data, id, formId, login } = this.connector;

    if (this.connector.errors) {
      const clickTrigger = new ClickTrigger();
      clickTrigger.watch(() => {
        NotificationService.show();
      });
      return;
    }

    this.enable = true;
    const conditions = this.processConditionsSettings();
    const watcher = new ConditionWatcher(conditions, {
      id,
      formId,
      login,
    });
    let DomConstructor = null;

    watcher.watch(
      (event) => {
        if (!this.enable) {
          return;
        }

        // eslint-disable-next-line default-case
        switch (data.type) {
          case 'popup':
            DomConstructor = Popup;
            break;
          case 'bar':
            DomConstructor = PopupBar;
            break;
          case 'widget':
            DomConstructor = ToggleablePopup;
            break;
          case 'embedded':
            DomConstructor = Embedded;
            break;
        }

        if (!DomConstructor || this.domObj?.isShow) {
          return;
        }

        this.domObj = null;

        // eslint-disable-next-line new-cap
        this.domObj = new DomConstructor({
          ...data,
          id,
          formId,
          login,
        });
        this.domObj.activate(this.options);
        this.domObj.el.addEventListener('sendsay-form-success', this.handleSubmit.bind(this));

        this.setFrequencyCookie(this.connector.data);
        this.setCountCookie(this.connector.data);

        if (data.type === 'widget' && ['scroll', 'delay', 'click', 'instant'].includes(event)) {
          this.domObj.handleTogglerClick();
        }
      },
      () => {}
    );
  }

  stopWatcher() {
    const { id } = this.connector;

    LeaveCounter.decrement(id);

    this.enable = false;
  }

  handleFail() {}

  handleSubmit(event) {
    if (this.options.fakeSubmit) {
      return this.handleSuccessSubmit();
    }
    const params = event.detail.extra;
    const promise = this.connector.submit(params);

    if (promise) {
      promise.then(this.handleSuccessSubmit.bind(this), this.handleFailSubmit.bind(this));
    }
  }

  handleSuccessSubmit() {
    this.domObj.showEndDialog();
    this.setSubmitCookie(this.connector.data);

    const data = this.domObj.gainedData;
    const email = data._member_email;

    this.domObj.trigger('sendsay-form-sent', data);

    if (window.sndsyApi && window.sndsyApi.setEmail && email) {
      window.sndsyApi.setEmail(email);
    }
  }

  handleFailSubmit() {
    this.domObj.onSubmitFail();

    const { error } = this.connector;

    if (!error) {
      return;
    }

    if (this.findInErrors(error, 'wrong_member_email') || this.findInErrors(error, 'error/email')) {
      this.domObj.showErrorFor('_member_email', 'submit-error__wrong-email-format');
    }

    if (this.findInErrors(error, 'only_once')) {
      this.domObj.showErrorFor('_member_email', 'submit-error__same-email');
    }
  }

  findInErrors(errors, errorId) {
    for (let i = 0; i < errors.length; i++) {
      if (errors[i].id.includes(errorId)) {
        return true;
      }
    }
    return false;
  }
}
