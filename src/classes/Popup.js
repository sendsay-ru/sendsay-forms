import {DOMObject} from "./DOMObject.js";
import {Field} from "./Field.js";
import {NumberField} from "./NumberField.js";
import {Button} from "./Button.js";
import {Text} from "./Text.js";
import {Spacer} from "./Spacer.js";
import {ImageElement} from "./ImageElement.js";
import {SingleChoiseField} from "./SingleChoiseField.js";
import {MultipleChoiseField} from "./MultipleChoiseField.js";
import {Cookies} from "./Cookies.js";



export class Popup extends DOMObject {

	constructor(data, parent) {
		super(data, parent);
	}

	initialize() {
		let appearance = this.data.appearance || {};
		this.noWrapper = false;
		this.template = (!this.noWrapper ? '<div class = "sendsay-wrapper [%wrapperClasses%]">' : '') +
						'<div class = "[%classes%]" style="[%style%]"">' +
						'<div class = "sendsay-close">×</div>' +
						'' +
						'</div>'+
						(!this.noWrapper ? '</div>' : '');

		this.baseClass = 'sendsay-popup';
		this.applicableStyles = {
			'background-color': { param: 'backgroundColor' },
			'border-radius': { param: 'borderRadius', postfix: 'px' },
			'padding-bottom': { param: 'paddingBottom', postfix: 'px'},
			'padding-top': { param: 'paddingTop', postfix: 'px'},
			'padding-left': { param: 'paddingLeft', postfix: 'px'},
			'padding-right': { param: 'paddingRight', postfix: 'px'}
		};
		appearance.position = appearance.position || 'centered';
		this.makeEndDialogData();	


	}

	build() {

		super.build();
		this.elements = [];
		let factory = new ElementFactory();
		let popupBody = this.el.classList.contains('sendsay-popup') ? this.el : this.el.querySelector('.sendsay-popup');
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
		if(this.demo || this.container)
			this.el.style.position = 'absolute';
		return this.el; 
	}

	addEvents() {
		if(this.el) {
			var popup = this.el.classList.contains('sendsay-popup') ? this.el : this.el.querySelector('.sendsay-popup');
			if(!this.noWrapper) {
				this.el.addEventListener('click', this.handleWrapperClick.bind(this));
				
			}
			this.el.addEventListener('wheel', this.handleWheel.bind(this));
			this.el.addEventListener('DOMMouseScroll', this.handleWheel.bind(this));
			popup.addEventListener('click', this.handlePopupClick.bind(this));
			this.el.querySelector('.sendsay-close').addEventListener('click', this.handleClose.bind(this));
			document.addEventListener('keyup', this.handleKeyPress.bind(this));

		}
	}

	removeEvents() {
		if(this.el) {
			var popup = this.el.classList.contains('sendsay-popup') ? this.el : this.el.querySelector('.sendsay-popup');
			if(!this.noWrapper) {
				this.el.removeEventListener('click', this.handleWrapperClick.bind(this));
		
			}
			this.el.removeEventListener('wheel', this.handleWheel.bind(this));
			this.el.removeEventListener('DOMMouseScroll', this.handleWheel.bind(this));	
			this.el.removeEventListener('wheel', this.handleWheel.bind(this));
			popup.removeEventListener('click', this.handlePopupClick.bind(this));
			document.removeEventListener('keyup', this.handleKeyPress.bind(this));
		}
	}

	makeSettings() {
		let settings = super.makeSettings();
		settings.wrapperClasses = this.data.noAnimation ? 'sendsay-noanimation' : '';
		return settings;
	}

	makeClasses() {
		let appearance = this.data.appearance || {};
		let classes = super.makeClasses();
		classes += this.data.endDialog ? ' sendsay-enddialog' : '';

		classes += ' sendsay-'+ (appearance.position || 'center');
		return classes;
	}

	activate(options) {
		this.demo = options && options.demo;
		this.container = options && options.el;
		this.ignoreKeyboard = options && options.ignoreKeyboard;
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
				button.content = {
					text: 'Закрыть'
				};
			}
		}
		this.submitData.elements = [
			{
				type: 'text',
				content: {
					text: data.endDialogMessage || 'Спасибо за заполнение формы',
				},
				appearance: {
					paddingTop: '10',
					paddingBottom: '20'
				}
			},
			button
		];
	}

	showEndDialog() {
		this.isSubmitted = true;
		this.data = this.submitData;
		this.render();
	}

	onSubmitFail() {


	}

	show(options) {
		Cookies.set('__sendsay_forms', 'true', 60*60);

		if(!this.container)
			document.querySelector('body').appendChild(this.el);
		else {
			this.el.style.position = 'absolute';
			if(!this.noWrapper)
				this.el.querySelector('.sendsay-popup').style.position = 'absolute';
			this.container.appendChild(this.el); 
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
		let button;
		if(elements) {
			for(let i = 0; i < elements.length; i++) {
				let element = elements[i];
				if(element instanceof Field ) {
					data[element.data.field.id || element.data.field.qid] = element.getValue();
					isValid = element.validate() && isValid;
				}
				if(element instanceof Button) {
					button = element;
				}
			}
		}
		if(isValid) {
			button.el.querySelector('input').classList.add('sendsay-loading');
			this.trigger('sendsay-success', data);
		}
		return isValid;
	}

	onSubmitFail() {
		let elements = this.elements;
		if(elements) {
			for(let i = 0; i < elements.length; i++) {
				let element = elements[i];
				if(element instanceof Button) {
					element.el.querySelector('input').classList.remove('sendsay-loading');
				}
			}
		}
	}

	showErrorFor(qid, message) {
		let elements = this.elements;
		for(let i = 0; i < elements.length; i++) {
			let element = elements[i];
			if(element.data.field && element.data.field.qid == qid ) {
				element.showErrorMessage(message);
			}
		}
	}

	handleWrapperClick() {
		//this.hide();
	}

	handleWheel(event) {
		var delta = Math.sign(event.wheelDelta);
		if(event.target.classList.contains('sendsay-wrapper')) {
			event.preventDefault();
		} else {
			var el = this.noWrapper ? this.el : this.el.querySelector('.sendsay-popup');
			if(delta == -1 && (el.clientHeight + el.scrollTop == el.scrollHeight) || delta == 1 && el.scrollTop == 0)
				event.preventDefault();
		}
		return false;
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
		if(!this.ignoreKeyboard)
			return;
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

	handleClose(event) {
		this.hide();
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
			case 'intField':
				return new NumberField(data, parent);
			case 'textField':
				return new Field(data, parent);
			case 'radioField':
				return new SingleChoiseField(data, parent);
			case 'checkboxField':
				return new MultipleChoiseField(data, parent);
			case 'int':
				return new NumberField(data, parent);
			case 'free':
				return new Field(data, parent);
			case 'image':
				return new ImageElement(data, parent);
			case 'spacer':
				return new Spacer(data, parent);
			case 'field':
				switch(data.subtype) {
					case 'int': 
						return new NumberField(data, parent);
					case '1m':
						return new SingleChoiseField(data, parent);
					case 'nm':
						return new MultipleChoiseField(data, parent);
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
