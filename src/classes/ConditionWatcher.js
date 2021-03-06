import {Cookies} from "./Cookies.js";
import {SendsayPromise} from "./SendsayPromise.js";
import { getHostName } from "./utils.js";

export class ConditionWatcher {

	constructor(rawConditions, formID) {
		this.globCond = rawConditions;
		let conditions = this.conditions = rawConditions.showCondition;
		this.id = formID;
		this.instant = conditions.instant != undefined ? conditions.instant : true;
		this.pageScroll = +conditions.onPageScroll || 0;
		this.onLeave = conditions.onLeave || false;
		this.delay = +conditions.delay || 0;
		this.active = rawConditions.active;

		this.leaveWatcher = this.leaveWatcher.bind(this);
		this.scrollWatcher = this.scrollWatcher.bind(this);
	}

	watch() {
		return (new SendsayPromise(this.promiseCore.bind(this)));
	}

	promiseCore(resolve, reject) {
		this.resolve = resolve;
		this.reject = reject;
		this.isDone = false;

		if(!this.active) {
			reject();
			return;
		}

		if(this.isRejectByCookie()) {
			reject();
			return;
		}

		if(this.instant) {
			resolve();
			return;
		}

		if(this.pageScroll) {
			document.addEventListener('scroll', this.scrollWatcher);
			this.scrollWatcher();
			if(this.isDone)
				return;
		}

		if(this.onLeave) {
			if (document.body) {
				document.body.addEventListener('mouseleave', this.leaveWatcher);
			} else {
				document.addEventListener('mouseleave', this.leaveWatcher);
			}

      var id = this.id;

      localStorage['sendsay-form-' + id] = ((parseInt(localStorage['sendsay-form-' + id]) + 1) || 1);

      window.onbeforeunload = function () {
        localStorage['sendsay-form-' + id] = ((parseInt(localStorage['sendsay-form-' + id]) - 1) || 0);
      };
		}

		if(this.delay)
			this.timeoutID = setTimeout(this.delayWatcher.bind(this), this.delay * 1000);
	}

	isRejectByCookie() {
		if(this.globCond.ignoreCookie) {
			return false;
		}
		if(Cookies.has('__sendsay_forms_' + this.id)) {
			if(Cookies.get('__sendsay_forms_' + this.id) == this.globCond.frequency)
				return true
			else if(this.globCond.frequency) {
				Cookies.set('__sendsay_forms_' + this.id, this.globCond.frequency, this.globCond.frequency, '/', getHostName());
				return true;
			} else {
				Cookies.remove('__sendsay_forms_' + this.id);
			}
		}

		if(this.conditions.multipleSubmit != undefined && !this.conditions.multipleSubmit) {
			if(Cookies.has('__sendsay_forms_submit_' + this.id))
				return true;
		}

		if(this.conditions.maxCount) {
			if(Cookies.has('__sendsay_forms_count_' + this.id) && +Cookies.get('__sendsay_forms_count_' + this.id) >= +this.conditions.maxCount)
				return true;
		}
		return false;
	}

	scrollWatcher(event) {
		let curScroll = document.documentElement.scrollTop || window.pageYOffset,
			maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight,
			showScroll = this.pageScroll;
		if(maxScroll <= 0 || showScroll <= curScroll/maxScroll * 100) {
			this.satisfyCondition();
		}}


	leaveWatcher(event) {
    var opened = localStorage['sendsay-form-' + this.id];

    if (!opened || parseInt(opened) < 2) {
      this.satisfyCondition();
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
    this.satisfyCondition();
	}

	satisfyCondition() {
		this.isDone = true;

		this.stopWatch();

		this.resolve();
	}

	stopWatch() {
		document.removeEventListener('scroll', this.scrollWatcher);
		this.removeLeaveWatcher();

		if(this.timeoutID)
			clearTimeout(this.timeoutID);
	}



}