(function() {

	class Loader {

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

	class DOMObject {
		constructor() {
			this.template = '<div></div>';
		}

		makeElement() {
			let div = document.createElement('div'),
				element = this.applySettings(this.makeSettings());
			div.innerHTML = element;
			return div.firstChild;
		}

		makeSettings() {
			let data = this.data,
				settings = {};
			settings.style = this.makeStyles();
			return settings;
		}

		applySettings(settings) {
			let string = this.template;
			for(var key in settings) {
				string = string.replace('[%' + key + '%]', settings[key]);
			}
			return string;
		}

		build() {
			this.el = this.makeElement();
			this.el.core = this;
			return this.el;
		}


		makeStyles() {
			let styleString = '';
			if(this.data && this.data.styles) {
				let styles = this.data.styles;
				for(var key in styles)
					styleString += key + ':' + styles[key] + ';';
			}
			return styleString;
		}



	}

	class Popup extends DOMObject {

		constructor(data) {
			super();
			this.data = data;
			this.template = '<div class = "sendsay-wrapper">' +
							'<div class = "sendsay-popup" style="[%style%]"">' +
							'' +
							'</div>' +
							'</div>';
		}

		build() {
			super.build();
			let factory = new ElementFactory();
			let popupBody = this.el.querySelector('.sendsay-popup');
			if(this.data.elements) {
				let elements = this.data.elements;
				for(var i=0; i < elements.length; i++) {
					let newEl = factory.make(elements[i]).build();
					popupBody.appendChild(newEl); 
				}
			}
			return this.el; 
		}

		makeSettings() {
			let data = this.data,
				settings = super.makeSettings();
			settings.title = data.title || '';
			return settings;
		}

		activate() {
			setTimeout(this.show.bind(this), this.data.displaySettings && this.data.displaySettings.delay || 1000 );
		}

		addEvents() {
			this.el.addEventListener('click', this.handleWrapperClick.bind(this));
			this.el.querySelector('.sendsay-popup').addEventListener('click', this.handlePopupClick.bind(this));
		}

		removeEvents() {
			this.el.removeEventListener('click', this.handleWrapperClick.bind(this));
			this.el.querySelector('.sendsay-popup').removeEventListener('click', this.handlePopupClick.bind(this));
		}

		handleWrapperClick() {
			this.hide();
		}

		handlePopupClick(event) {
			event.stopPropagation() 
		}

		show() {
			this.build();
			this.addEvents();
			document.querySelector('body').appendChild(this.el); 
		}

		hide() {
			this.removeEvents();
			this.el.parentNode.removeChild(this.el);
			
		}


	}

	class Field extends DOMObject {

		constructor(data) {
			super();
			this.data = data;
			this.template = '<div class = "sendsay-field" style="[%style%]"">' +
							'<label for="[%name%]" class = "sendsay-label">[%label%]</label>' +
							'<input name="[%name%]" type="text" class="sendsay-input"/>' + 
							'</div>';
		}

		build() {
			return super.build();
		}
		makeSettings() {
			let data = this.data,
				settings = super.makeSettings();
			settings.name = data.name || '';
			settings.label = data.label || '';
			
			return settings;
		}

	}

	class Button extends DOMObject {
		constructor(data) {
			super();
			this.data = data;
			this.template = '<div class = "sendsay-button" style="[%style%]"">' +
								'<input type="button"  value=[%value%] />' + 
							'</div>';
		}

		build() {
			return super.build();
		}

		makeSettings() {
			let data = this.data,
				settings = super.makeSettings();
			settings.value = data.value || 'Unknown';
			return settings;
		}
	}

	class Factory {
		constructor() {

		}

		make() {
			return {};
		}
	}

	class ElementFactory extends Factory {
		constructor() {
			super();
		}

		make(data) {
			switch(data.type) {
				case 'text': 
					return new Field(data);
				case 'button':
					return new Button(data);
			}
		} 
	}




	this.activatePopup  = function(id) {
		let popup = new Popup ({
		elements: [
				{
					type: 'text',
					label: 'Hello world'
				},
				{
					type: 'button',
					value: 'Submit'
				}
			],
			styles: {
				width: '400px'
			},
			displaySettings: {
				delay: 5000
			}
		});
		popup.activate();
	};
	window.SENDSAY = {
		activatePopup: this.activatePopup
	};
})();