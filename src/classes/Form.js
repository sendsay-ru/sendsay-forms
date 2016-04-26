export class Form {

	constructor(domConstructor, connector) {
		this.domConstructor = domConstructor;
		this.connector = connector;
		connector.load().then(this.handleSuccess.bind(this), this.handleFail.bind(this));
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
		this.connector.submit(params).then(this.handleSuccessSubmit.bind(this),
											this.handleFailSubmit.bind(this));
	}

	handleSuccessSubmit() {
		console.log('Success submit');
	}

	handleFailSubmit() {
		console.log('Fail submit');
	}

}