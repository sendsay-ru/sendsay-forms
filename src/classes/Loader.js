export class Loader {

	constructor(id) {
		this.request = new XMLHttpRequest();
		this.request.open('POST', 'https://sendsay.ru/form/x_1445438168224221/2/', true);
		this.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		let jsonRequest = '{"id":' + id + ' }';
		this.params = 'apiversion=' + encodeURIComponent(100) + '&json=1&request=' + encodeURIComponent(jsonRequest);
	}

	stateWatcher() {
		
	}

	handleSuccess() {
		var rawJson = '{'+
						'"fields": {' +
							'"q43": {' +
								'"type": "free",' +
								'"name": "First field",' +
								'"questionnaire": "SomeQuest"' +
							'},' +
							'"q46": {' +
								'"type": "free",' +
								'"name": "Second field",' +
								'"questionnaire": "SomeQuest"' +
							'},' +
							'"q48": {' +
								'"type": "number",' +
								'"name": "Third field",' +
								'"questionnaire": "SomeQuest"' +
							'}' +
						'},' +
						'"name": "Important form",' +
						'"active": true' +	
		'}';
		var json = JSON.parse(rawJson);
		this.transformAnswer(json);
		console.log('success');
	}

	transformAnswer(json) {
		this.data = {};
		this.data.elements = [];
		this.data.active = json.active || false;
		if(json.fields) {
			let fields = json.fields;
			for(var key in fields) {
				let field = fields[key];
				this.data.elements.push({
					type: field.type,
					name: '_' + field.questionnaire + '_' + key,
					label: field.name
				})
			}
			this.data.elements.push({
					type: 'button',
					text: 'submit'
				});
		}
		if(json.name)
			this.data.title = json.name;

	}

	handleFail() {
		console.log('fail');
	}

	load() {
		return new Promise(this.promiseHandler.bind(this));
	}

	promiseHandler(resolve, reject) {
		var self = this;
		this.request.onreadystatechange = function() {
			if(self.request.readyState == 4) {
				if(self.request.status == 200 ) {
					self.handleSuccess();
					resolve(this.data);
				} else {
					// self.handleFail();
					// reject(false);
					self.handleSuccess();
					resolve(this.data);
				}
			}
		}
		console.log(this.params);
		this.request.send(this.params);
	}
}