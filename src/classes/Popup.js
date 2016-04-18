import {DOMObject} from "./DOMObject.js";
import {Field} from "./Field.js";
import {Button} from "./Button.js";



export class Popup extends DOMObject {

	constructor(data) {
		super();
		this.data = data;
		this.template = '<div class = "sendsay-wrapper">' +
						'<div class = "sendsay-popup" style="[%style%]"">' +
						(data.title ? '<div class = "sendsay-title">[%title%]</div>' : '') +
						'' +
						'</div>' +
						'</div>';
		if(data.active)
			this.build();
	}

	build() {
		if(!this.data.active)
			return false;
		super.build();
		this.elements = [];

		let factory = new ElementFactory();
		let popupBody = this.el.querySelector('.sendsay-popup');
		if(this.data.elements) {
			let elements = this.data.elements;
			for(var i=0; i < elements.length; i++) {
				let newEl = factory.make(elements[i]);
				this.elements.push(newEl);
				popupBody.appendChild(newEl.el); 
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
		if(this.data.active)
			setTimeout(this.show.bind(this), this.data.displaySettings && this.data.displaySettings.delay || 1000 );
	}

	addEvents() {
		this.el.addEventListener('click', this.handleWrapperClick.bind(this));
		this.el.querySelector('.sendsay-popup').addEventListener('click', this.handlePopupClick.bind(this));
		this.el.querySelector('.sendsay-button input').addEventListener('click', this.handleSubmit.bind(this));
		document.addEventListener('keyup', this.handleKeyPress.bind(this));
	}

	removeEvents() {
		this.el.removeEventListener('click', this.handleWrapperClick.bind(this));
		this.el.querySelector('.sendsay-popup').removeEventListener('click', this.handlePopupClick.bind(this));
		this.el.querySelector('.sendsay-button input').removeEventListener('click', this.handleSubmit.bind(this));
		document.removeEventListener('keyup', this.handleKeyPress.bind(this));
	}

	handleWrapperClick() {
		this.hide();
	}

	handlePopupClick(event) {
		event.stopPropagation() 
	}

	handleSubmit(event) {
		console.log('submit');
		this.hide();
	}

	handleKeyPress(event) {
		switch(event.keyCode) {
			case 13: //Enter
				console.log('enter');
				break;
			case 27: //Esc
				this.hide()
				break;
		}
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
			case 'number':
			case 'free': 
				return new Field(data);
			case 'button':
				return new Button(data);
		}
	} 
}
