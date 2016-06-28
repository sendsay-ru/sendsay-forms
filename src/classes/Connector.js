import {SendsayPromise} from "./SendsayPromise.js";

export class Connector {

	constructor(url) {
		this.url = url;
		this.id = this.extractID(this.url) || '';
	}

	extractID(url) {
		let res = url.match(/[^/s\/]*\/[^/s\/]*\/?$/)
		if(res) {
			let parts = res[0].split('/');
			return parts[0] + '-' + parts[1];
		}

	}


	promiseHandler(resolve, reject) {
		var self = this;
		this.request.onreadystatechange = function() {
			if(self.request.readyState == 4) {
				self.pending = false;
				var success = true;
				if(self.request.onReady)
					success = self.request.onReady.apply(self);
				if(self.request.status == 200 && success ) {
					resolve(self.data);
				} else {
					reject(false);
				}
			}
		}
		this.pending = true;
		this.request.send(this.params);
	}


	load() {
		if(this.pending)
			return;
		this.request = new XMLHttpRequest();
		this.request.open('GET', this.url, true);
		this.request.setRequestHeader('Content-Type', 'application/json');
		this.request.setRequestHeader('Accept', 'application/json');
		return (new SendsayPromise(this.promiseHandler.bind(this))).then(this.handleLoadSuccess.bind(this),
																	this.handleLoadFail.bind(this));
	}



	transformAnswer(json) {
		if(json.obj && json.obj.settings) {
			this.data = json.obj.settings;
			this.data.id = this.id;
			if(json.obj.state && +json.obj.state === 1)
				this.data.active = true;
			return;
		};
		this.data = {
			endDialogMessage: 'Спасибо за заполнение формы!',
			elements: [
				{
					type: 'text',
					text: '<div style="font-size: 16px; padding-bottom: 10px; font-weight: bold;">Подписка на рассылку</div>'
				}
			],
			id: this.id
		};

		this.data.active = json.state == '1' || false;
		if(json.fields) {
			let fields = json.fields;
			for(var key in fields) {
				let field = fields[key];
				if(field.type !== 'submit') {
					this.data.elements.push({
						type: field.type == 'text' ? 'field' : field.type,
						field: {
							id: field.name,
							required: field.required == '1',
							answers: field.answers,
							order: field.order
						},
						content: {
							label: field.label
						},
						appearance: {
							hidden: field.hidden
						},
						subtype: field['data_type']
						
					});
				}
			}
			this.data.elements.push({
					type: 'button',
					content: {
						text: 'Подписаться',
					},
					appearance: {
						align: 'justify'
					}
				});
		}
		if(json.name)
			this.data.title = json.name;

	}

	submit(params) {
		if(this.pending)
			return;
		this.request = new XMLHttpRequest();
		this.request.open('POST', this.url , true);
		this.request.setRequestHeader('Content-Type', 'application/json');
		this.request.setRequestHeader('Accept', 'application/json');
		this.request.onReady = this.handleSubmitResult;

		this.params = JSON.stringify(params);


		return (new Promise(this.promiseHandler.bind(this)));
	}

	handleSubmitResult() {

		let el = document.createElement('div'),
			json;
		el.innerHTML = this.request.responseText;
		try {
			json = JSON.parse(this.request.responseText);
		} catch(e) {
			console.log(e);
			return false;
		}
		this.error = json.errors;
		if(json.errors)
			return false;

		return true;

	}

	handleLoadSuccess() {

		var rawJson = this.request.responseText;
		var json = JSON.parse(rawJson);
		this.transformAnswer(json);
	}

	handleLoadFail() {

	}
}