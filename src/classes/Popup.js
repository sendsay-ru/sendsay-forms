import {DOMObject} from "./DOMObject.js";
import {Field} from "./Field.js";
import {Button} from "./Button.js";



export class Popup extends DOMObject {

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
