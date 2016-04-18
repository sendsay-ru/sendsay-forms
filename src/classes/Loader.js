export class Loader {

	constructor() {
		this.request = new XMLHttpRequest();
		this.request.open('GET', 'https://sendsay.ru/form/x_1445438168224221/2/', true);
	}

	stateWatcher() {
		
	}

	handleSuccess() {
		console.log('success');
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
					resolve(true);
				} else {
					self.handleFail();
					reject(false);
				}
			}
		}
		this.request.send(null);
	}
}