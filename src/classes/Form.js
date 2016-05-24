import {Cookies} from "./Cookies.js";
import {ConditionWatcher} from "./ConditionWatcher.js";

export class Form {

	constructor(domConstructor, connector, options) {
		this.options = options || {};
		if(this.options.ignoreCookie || !Cookies.has('__sendsay_forms')) {
			this.domConstructor = domConstructor;
			this.connector = connector;
			let promise = connector.load();
			if(promise)
				promise.then(this.handleSuccess.bind(this), this.handleFail.bind(this));
		}
	}

	handleSuccess() {

		let conditions = this.connector.data.settings;
		let watcher = new ConditionWatcher(conditions);
		let self = this;
		watcher.watch().then(function() {
			console.log('condition satisfied');
			self.domObj = new (self.domConstructor)(self.connector.data);
			self.domObj.activate(self.options);
			self.domObj.el.addEventListener('sendsay-success', self.handleSubmit.bind(self));	
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