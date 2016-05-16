import {Cookies} from "./Cookies.js";

export class Form {

	constructor(domConstructor, connector) {
		if(!Cookies.has('__sendsay_forms')) {
			this.domConstructor = domConstructor;
			this.connector = connector;
			let promise = connector.load();
			if(promise)
				promise.then(this.handleSuccess.bind(this), this.handleFail.bind(this));
		}
	}

	handleSuccess() {

		this.domObj = new (this.domConstructor)(this.connector.data);
		this.domObj.activate();
		this.domObj.el.addEventListener('sendsay-success', this.handleSubmit.bind(this));
	}

	handleFail() {

	}

	handleSubmit(event) {

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