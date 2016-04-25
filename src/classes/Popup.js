import {DOMObject} from "./DOMObject.js";
import {Field} from "./Field.js";
import {Button} from "./Button.js";
import {Text} from "./Text.js";



export class Popup extends DOMObject {

	constructor(data, parent) {
		super(data, parent);

		this.template = '<div class = "sendsay-wrapper">' +
						'<div class = "[%classes%]" style="[%style%]"">' +
						'' +
						'</div>' +
						'</div>';
		this.baseClass = 'sendsay-popup';
		this.applicableStyles = {
			'background-color': { param: 'backgroundColor' },
			'border-radius': { param: 'borderRadius', postfix: 'px' },
			'padding-bottom': { param: 'paddingBottom', postfix: 'px'},
			'padding-top': { param: 'paddingTop', postfix: 'px'},
			'padding-left': { param: 'paddingLeft', postfix: 'px'},
			'padding-right': { param: 'paddingRight', postfix: 'px'}
		};
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
				let newEl = factory.make(elements[i], this);
				if(newEl) {
					this.elements.push(newEl);
					popupBody.appendChild(newEl.el);
				} 
			}
		}
		return this.el; 
	}

	activate(options) {

		if(this.data.active) {
			if(!options || !options.instant) {
				setTimeout(this.show.bind(this, options), this.data.displaySettings && this.data.displaySettings.delay || 1000 );
			} else {
				this.show(options);
			}
		}
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
		this.submit();
	}

	handleKeyPress(event) {
		switch(event.keyCode) {
			case 13: //Enter
				this.submit();

				break;
			case 27: //Esc
				this.hide();
				break;
		}
	}

	show(options) {
		this.build();
		this.addEvents();
		if(!options || !options.el)
			document.querySelector('body').appendChild(this.el);
		else {
			this.el.style.position = 'absolute';
			options.el.appendChild(this.el); 
		}
	}

	hide() {
		this.removeEvents();
		if(this.el.parentNode)
			this.el.parentNode.removeChild(this.el);
		
	}

	submit() {
		let elements = this.elements;
		let isValid = true
		if(elements) {
			for(let i =1; i < elements.length; i++) {
				let element = elements[i];
				if(element instanceof Field )
					isValid = isValid && element.validate();
			}
		}
		if(isValid) {
			console.log('submitted');
			this.hide();
		}
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

	make(data, parent) {
		switch(data.type) {
			case 'text':
				return new Text(data, parent);
			case 'number':
			case 'free':
			case 'field': 
				return new Field(data, parent);
			case 'button':
				return new Button(data, parent);
		}
	} 
}
