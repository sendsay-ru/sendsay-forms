import {DOMObject} from "./DOMObject.js";
import {Field} from "./Field.js";
import {NumberField} from "./NumberField.js";
import {Button} from "./Button.js";
import {Text} from "./Text.js";



export class Popup extends DOMObject {

	constructor(data, parent) {
		super(data, parent);
		this.template = '<div class = "sendsay-wrapper [%wrapperClasses%]">' +
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
		this.makeEndDialogData();
		if(data.active)
			this.render();
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
					if(newEl.data.type == 'button') 
						newEl.el.addEventListener('sendsay-click', this.handleButtonClick.bind(this));

					this.elements.push(newEl);
					popupBody.appendChild(newEl.el);
				} 
			}
		}
		if(this.demo)
			this.el.style.position = 'absolute';
		return this.el; 
	}

	addEvents() {
		if(this.el) {
			this.el.addEventListener('click', this.handleWrapperClick.bind(this));
			this.el.querySelector('.sendsay-popup').addEventListener('click', this.handlePopupClick.bind(this));
			document.addEventListener('keyup', this.handleKeyPress.bind(this));
		}
	}

	removeEvents() {
		if(this.el) {
			this.el.removeEventListener('click', this.handleWrapperClick.bind(this));
			this.el.querySelector('.sendsay-popup').removeEventListener('click', this.handlePopupClick.bind(this));
			document.removeEventListener('keyup', this.handleKeyPress.bind(this));
		}
	}

	makeSettings() {
		let settings = super.makeSettings();
		settings.wrapperClasses = this.data.noAnimation ? 'sendsay-noanimation' : '';
		return settings;
	}

	makeClasses() {
		let classes = super.makeClasses();
		classes += this.data.endDialog ? ' sendsay-enddialog' : '';
		return classes;
	}

	activate(options) {
		this.demo = options && options.demo;
		if(this.data.active) {
			if(!options || !options.instant) {
				setTimeout(this.show.bind(this, options), this.data.displaySettings && this.data.displaySettings.delay || 1000 );
			} else {
				this.show(options);
			}
		}
	}

	makeEndDialogData() {
		let data = this.data;
		this.submitData = this.extend({ 
			noAnimation: true,
			endDialog: true
		}, data);
		delete this.submitData.elements;
		let button;
		for(let i=0; i < data.elements.length; i++) {
			let element = data.elements[i];
			if(element.type == 'button') {	
				button = this.extend({}, element);
				button.text = 'Закрыть';
			}
		}
		this.submitData.elements = [
			{
				type: 'text',
				text: data.endDialogMessage || 'Спасибо за заполнение формы',
				paddingTop: '10',
				paddingBottom: '20'
			},
			button
		];
	}

	showEndDialog() {
		this.data = this.submitData;
		this.render();
	}

	show(options) {

		if(!options || !options.el)
			document.querySelector('body').appendChild(this.el);
		else {
			this.el.style.position = 'absolute';
			options.el.appendChild(this.el); 
		}
	}

	hide() {
		if(this.el.parentNode)
			this.el.parentNode.removeChild(this.el);
		
	}

	submit() {
		let elements = this.elements;
		let isValid = true,
			data = {}

		if(elements) {
			for(let i = 0; i < elements.length; i++) {
				let element = elements[i];
				if(element instanceof Field ) {

					data[element.data.name] = element.getValue();
					isValid = element.validate() && isValid;
				}
			}
		}
		this.isSubmitted = isValid;
		if(isValid) {
			this.trigger('sendsay-success', data);
		}
		return isValid;
	}

	handleWrapperClick() {
		this.hide();
	}

	handlePopupClick(event) {
		event.stopPropagation() 
	}

	handleButtonClick(event) {
		if(this.isSubmitted)
			this.hide();
		else {
			if(this.submit() && this.demo)
					this.showEndDialog();
		}
	}

	handleKeyPress(event) {
		switch(event.keyCode) {
			case 13: //Enter
				if(this.isSubmitted)
					this.hide();
				else {
					if(this.submit() && this.demo)
							this.showEndDialog();
				}
				break;
			case 27: //Esc
				this.hide();
				break;
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
				return new NumberField(data, parent);
			case 'free':
				return new Field(data, parent);
			case 'field':
				switch(data.subtype) {
					case 'int': 
						return new NumberField(data, parent);
					case 'free':
					default:
						return new Field(data, parent);	
				}
				break;
			case 'button':
				return new Button(data, parent);
		}
	} 
}
