export class Connector {

	constructor(url) {
		this.url = url;
	}

	handleLoadSuccess() {
		var rawJson = '{'+
						'"fields": {' +
							'"q43": {' +
								'"type": "field",' +
								'"subtype": "int",' +
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
	}

	handleLoadFail() {
	}

	transformAnswer(json) {
		this.data = {
			backgroundColor: '#000',
			textColor: '#fff',
			endDialogMessage: 'Раз-два-три'
		};
		this.data.elements = [];
		this.data.active = json.active || false;
		if(json.fields) {
			let fields = json.fields;
			for(var key in fields) {
				let field = fields[key];
				this.data.elements.push({
					type: field.type,
					name: '_' + field.questionnaire + '_' + key,
					label: field.name,
					subtype: field.subtype
				})
			}
			this.data.elements.push({
					type: 'button',
					text: 'submit',
					backgroundColor: '#f00'
				});
		}
		if(json.name)
			this.data.title = json.name;

	}


	load() {
		this.request = new XMLHttpRequest();
		this.request.open('GET', this.url + '?render=json', true);
		this.request.setRequestHeader('Content-Type', 'application/json');
		return (new Promise(this.promiseHandler.bind(this))).then(this.handleLoadSuccess.bind(this),
																	this.handleLoadFail.bind(this));
	}

	submit(params) {
		this.request = new XMLHttpRequest();
		this.request.open('POST', this.url, true);
		this.request.setRequestHeader('Content-Type', 'application/json');
		this.params = '';
		for(let key in params) {
			if(this.params === '')
				this.params += '&';
			this.params += key + '=' + params[key];
		}
		this.params = encodeURIComponent(this.params);

		return (new Promise(this.promiseHandler.bind(this)));
	}

	promiseHandler(resolve, reject) {
		var self = this;
		this.request.onreadystatechange = function() {
			if(self.request.readyState == 4) {

				if(self.request.status == 200 ) {

					resolve(this.data);
				} else {
					// reject(false);
					resolve(this.data);
				}
			}
		}
		this.request.send(this.params);
	}
}