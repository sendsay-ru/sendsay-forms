
import {ConditionWatcher} from "./ConditionWatcher.js";
import {Cookies} from "./Cookies.js";
import {Popup} from "./elements/Popup.js";
import {PopupBar} from "./elements/PopupBar.js";
import {ToggleablePopup} from "./elements/ToggleablePopup.js";
import { getHostName } from "./utils.js";

export class Form {

	constructor(connector, options) {
		this.options = options || {};
		this.connector = connector;
		let promise = connector.load();
		if(promise)
			promise.then(this.handleSuccess.bind(this), this.handleFail.bind(this));
	}

	processConditionsSettings() {
		let settings = this.connector.data.settings || {};
		let conditions = JSON.parse(JSON.stringify(settings));
		conditions.showCondition = conditions.showCondition || {};
		if(this.options.instant)
			conditions.showCondition.instant = true;
		if(this.options.ignoreState)
			conditions.ignoreState = true;
		if(this.options.ignoreCookie)
			conditions.ignoreCookie = true;
		conditions.active = this.connector.data.active;
		return conditions;
	}

	setFrequencyCookie(data) {
		if(!data)
			return;
		if(data && data.settings && data.settings.frequency)
			Cookies.set('__sendsay_forms_' + data.id, data.settings.frequency, data.settings.frequency, '/', getHostName());
	}

	setCountCookie(data) {
		if(!data)
			return;
		var count = +Cookies.get('__sendsay_forms_count_' + data.id) || 0;
		if(data) {
			 Cookies.set('__sendsay_forms_count_' + data.id, count+1, 94608000, '/', getHostName());
		}
	}

	setSubmitCookie(data) {
		if(!data)
			return;
		if(data) {
			 Cookies.set('__sendsay_forms_submit_' + data.id, true, 94608000, '/', getHostName());
		}
	}


	handleSuccess() {
		if (this.connector.errors) {
			return;
		}

		let self = this,
			id = self.connector.data.id,
			data = self.connector.data;
		let conditions = this.processConditionsSettings();
		let watcher = new ConditionWatcher(conditions, id);


		watcher.watch().then(function() {
			switch(data.type) {
				case 'popup':
					self.domConstructor = Popup;
					break;
				case 'bar':
					self.domConstructor = PopupBar;
					break;
				case 'widget':
					self.domConstructor = ToggleablePopup;
					break;
			}

			self.domObj = new (self.domConstructor)(self.connector.data);
			self.domObj.activate(self.options);
			self.domObj.el.addEventListener('sendsay-success', self.handleSubmit.bind(self));

			self.setFrequencyCookie(self.connector.data);
			self.setCountCookie(self.connector.data);
		}, function() {
		});
	}

	handleFail() {

	}

	handleSubmit(event) {
		if(this.options.fakeSubmit)
			return this.handleSuccessSubmit();
		var params = event.detail.extra;
		let promise = this.connector.submit(params);

		if (promise) {
			promise
				.then(this.handleSuccessSubmit.bind(this), this.handleFail.bind(this));
		}
	}

	handleSuccessSubmit() {
		this.domObj.showEndDialog();
		this.setSubmitCookie(this.connector.data);
	}

	handleFailSubmit() {
		this.domObj.onSubmitFail();

		let error = this.connector.error;
		if(error && this.findInErrors(error, 'wrong_member_email'))
			this.domObj.showErrorFor('_member_email', 'Неверный формат email адреса');
	}

	findInErrors(errors, errorId) {
		for(let i=0; i < errors.length; i++) {
			if(errors[i].id == errorId)
				return true;
		}
		return false;

	}

}