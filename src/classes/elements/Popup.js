import {DOMObject} from "./DOMObject.js";
import {Cookies} from "./../Cookies.js";
import {MediaQuery} from "./../MediaQuery.js";
import {ElementFactory} from "./../ElementFactory.js"
import {Column} from "./Column.js"
import {Field} from "./Field.js";
import {Button} from "./Button.js";



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
			'padding-right': { param: 'paddingRight', postfix: 'px'},
			'width': { param: 'width', postfix: 'px'},
			'color': { param: 'textColor'}
		};
		let width = this.data.appearance.width;

		let mediaQuery = new MediaQuery({
			conditions: ['screen', '(min-width: 320px)', '(max-width:' + (+width + 100) + 'px)'],
			selectors: {
				'.sendsay-popup': {
					 'width': '300px !important',
					'-webkit-flex-direction': 'column',
					'-ms-flex-direction': 'column',
					'flex-direction': 'column'
				},
				'.sendsay-popup.sendsay-left': {
					'top': '50%',
					'left': '50%',
					'transform': 'translate(-50%, -50%)',
					'animation': 'sendsay-popup-animate-center',
					'animation-duration': '300ms',
					'animation-timing-function': 'cubic-bezier(.175,.885,.32,1.275)'
				},
				'.sendsay-popup.sendsay-right': {
					'top': '50%',
					'left': '50%',
					'transform': 'translate(-50%, -50%)',
					'animation': 'sendsay-popup-animate-center',
					'animation-duration': '300ms',
					'animation-timing-function': 'cubic-bezier(.175,.885,.32,1.275)'
				}
			}
		});
		this.mediaQuery = mediaQuery;
		appearance.position = appearance.position || 'centered';

		this.general = {};
		this.general.appearance = {}
		this.general.appearance.textColor = this.data.appearance.textColor;
		this.makeEndDialogData();	


	}

	build() {

		super.build();
		this.columns = [];
		let popupBody = this.el.classList.contains('sendsay-popup') ? this.el : this.el.querySelector('.sendsay-popup');
		if(this.data.columns) {
			let columns = this.data.columns;
			for(var i=0; i < columns.length; i++) {
				let newEl = new Column(columns[i], this);
				if(newEl) {

					this.columns.push(newEl);
					popupBody.appendChild(newEl.el);
				} 
			}
		}
		if(this.demo || this.container) {
			let el = this.el.querySelector('.sendsay-popup');
			this.el.style.position = 'absolute';
			if(el)
				el.style.position = 'absolute';
		}

		return this.el; 
	}

	addEvents() {
		let self = this;
		if(this.el) {
			this.el.addEventListener('DOMNodeRemovedFromDocument', function() {
				if(self.mediaQuery) {
					document.head.removeChild(self.mediaQuery.el);
				}
			});
			var popup = this.el.classList.contains('sendsay-popup') ? this.el : this.el.querySelector('.sendsay-popup');
			if(!this.noWrapper) {
				this.el.addEventListener('click', this.handleWrapperClick.bind(this));
				
			}
			console.log('test', this.el);
			this.el.querySelector('.sendsay-button').addEventListener('sendsay-click', this.handleButtonClick.bind(this));
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
		classes += ' sendsay-animation-' + (appearance.animation || 'none');
		classes += ' sendsay-'+ (appearance.position || 'center');
		return classes;
	}

	activate(options) {
		this.demo = options && options.demo;
		this.container = options && options.el;
		this.ignoreKeyboard = options && options.ignoreKeyboard;
		this.show(options);
	}

	searchForElements(comparator, inData) {
		let found = [];
		if(!comparator || typeof comparator !== 'function')
			return found;
		let columns =  inData ? this.data.columns : this.columns;
		for(let i=0; i < columns.length; i++) {
			let column = columns[i],
				elements = column.elements;
			for(let j=0; j < elements.length; j++) {
				comparator(elements[j]) && found.push(elements[j]);
			}
		}
		return found;
	}

	makeEndDialogData() {
		let data = this.data;
		this.submitData = this.extend({ 
			noAnimation: true,
			endDialog: true
		}, data);
		console.log(this.submitData, this.data);
		delete this.submitData.elements;
		let button;
		let found = this.searchForElements(function(elem) {
			return elem.type == 'button';
		}, true);

		if(found[0]) {

			button = this.extend({}, found[0]);
		} else {
			button = { type:"button", content: {}}
		}
		button.content = {
			text: 'Закрыть'
		};

		this.submitData.columns = [{
			elements: [{
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
			],
			appearance: {}
		}];
	}

	showEndDialog() {
		this.isSubmitted = true;
		this.data = this.submitData;
		this.render();
	}

	onSubmitFail() {


	}

	show(options) {
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
		let elements = this.searchForElements(function(element) {

			return (element instanceof Field || element instanceof Button);
		});
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
		let elements = this.searchForElements(function(element) {
			return (element instanceof Button);
		});
		if(elements[0]) {
			elements[0].el.querySelector('input').classList.remove('sendsay-loading');
		}
	}

	showErrorFor(qid, message) {
		let elements = this.searchForElements(function(element) {
			return element instanceof Field;
		});
		for(let i = 0; i < elements.length; i++) {
			let element = elements[i];
			if(element.data.field && (element.data.field.qid == qid  || element.data.field.id == qid) ) {
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
