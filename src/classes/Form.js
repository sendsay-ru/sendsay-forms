
import {ConditionWatcher} from "./ConditionWatcher.js";
import {Cookies} from "./Cookies.js";

export class Form {

	constructor(domConstructor, connector, options) {
		this.options = options || {};
		this.domConstructor = domConstructor;
		this.connector = connector;
		let promise = connector.load();
		if(promise)
			promise.then(this.handleSuccess.bind(this), this.handleFail.bind(this));
	}

	processConditionsSettings() {
		let settings = this.connector.data.settings || {};
		let conditions = JSON.parse(JSON.stringify(settings));
		if(this.options.instant)
			conditions.showConditions.instant = true;
		if(this.options.ignoreState)
			conditions.ignoreState = true;
		if(this.options.ignoreCookie)
			conditions.ignoreCookie = true;
		conditions.active = this.connector.data.active;
		return conditions;
	}


	handleSuccess() {
		let self = this,
			id = self.connector.data.id;
		let conditions = this.processConditionsSettings();
		let watcher = new ConditionWatcher(conditions, id);

		watcher.watch().then(function() {

			self.domObj = new (self.domConstructor)(self.connector.data);
			self.domObj.activate(self.options);
			self.domObj.el.addEventListener('sendsay-success', self.handleSubmit.bind(self));

			Cookies.set('__sendsay_forms_' + id, 'true', 60*60);	
		}, function() {
			console.log('rejected');
		});
	}

	handleFail() {

	}

	handleSubmit(event) {
		if(this.options.fakeSubmit)
			return this.handleSuccessSubmit();
		var params = event.detail.extra;
		let promise = this.connector.submit(params);
		if(promise)
			promise.then(this.handleSuccessSubmit.bind(this),
											this.handleFailSubmit.bind(this));
	}

	handleSuccessSubmit() {
		this.domObj.showEndDialog();
	}

	handleFailSubmit() {
		this.domObj.onSubmitFail();
		let error = this.connector.error;
		if(error.specific && error.specific === 'Неправильно заполнено поле email.')
			this.domObj.showErrorFor('_member_email', 'Неверный формат email адреса');
	}

}