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

		this.noWrapper = !appearance.overlayEnabled;
		this.steps = this.data.steps;
		this.curStep = 0;
		this.gainedData = {};


		this.template = (!this.noWrapper ? '<div class = "sendsay-wrapper [%wrapperClasses%]" style="[%overlayStyles%]">' : '') +
						'<div class = "[%classes%]" style="[%style%]"">' +
							'<div class = "sendsay-close">×</div>' +
							'<div class = "sendsay-content">' +
							'</div>' +
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

		this.applOverlayStyles = {
			'background-color': { param: 'overlayColor' }
		};

		let width = appearance.width;

		let mediaQuery = new MediaQuery({
			conditions: ['screen', '(min-width: 320px)', '(max-width:' + (+width + 100) + 'px)'],
			selectors: {
				'.sendsay-popup': {
					 'width': '300px !important',
					'-webkit-flex-direction': 'column',
					'-ms-flex-direction': 'column',
					'flex-direction': 'column',
					'animation': 'none'
				},
				'.sendsay-popup.sendsay-left, .sendsay-popup.sendsay-right': {
					'top': '50%',
					'left': '50%',
					'transform': 'translate(-50%, -50%)',
					'animation': 'none',
					'bottom': 'initial'
				}
			}
		});
		this.mediaQuery = mediaQuery;
		appearance.position = appearance.position || 'centered';

		this.general = {};
		this.general.appearance = {}
		this.general.appearance.textColor = this.data.appearance.textColor;

	}

	build() {

		super.build();
		this.columns = [];
		let curStep = this.steps[this.curStep];
		let popupBody = this.el.querySelector('.sendsay-content');
		if(curStep.columns) {
			let columns = curStep.columns;
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

		this.addEvent('DOMNodeRemovedFromDocument', function() {
			if(self.mediaQuery) {
				document.head.removeChild(self.mediaQuery.el);
			}
		});
		if(!this.noWrapper) {
			this.addEvent('click', this.handleWrapperClick.bind(this));
			this.addEvent('click', '.sendsay-popup', this.handlePopupClick.bind(this));	
		} else
			this.addEvent('click', this.handlePopupClick.bind(this));	
		this.addEvent('sendsay-click', '.sendsay-button', this.handleButtonClick.bind(this));
		this.addEvent('wheel', this.handleWheel.bind(this));
		this.addEvent('DOMMouseScroll', this.handleWheel.bind(this));
		
		this.addEvent('click', '.sendsay-close', this.handleClose.bind(this));
		document.addEventListener('keyup', this.handleKeyPress.bind(this));
	}

	removeEvents() {
		if(!this.noWrapper) {
			this.removeEvent('click', this.handleWrapperClick.bind(this));
			this.removeEvent('click', '.sendsay-popup', this.handlePopupClick.bind(this));	
		} else
			this.removeEvent('click', this.handlePopupClick.bind(this));	
		this.removeEvent('sendsay-click', '.sendsay-button', this.handleButtonClick.bind(this));
		this.removeEvent('wheel', this.handleWheel.bind(this));
		this.removeEvent('DOMMouseScroll', this.handleWheel.bind(this));		
		this.removeEvent('click', '.sendsay-close', this.handleClose.bind(this));
		document.removeEventListener('keyup', this.handleKeyPress.bind(this));
	}

	makeSettings() {
		let settings = super.makeSettings();
		settings.wrapperClasses = this.data.noAnimation ? 'sendsay-noanimation' : '';
		settings.overlayStyles = this.convertStyles(this.applyStyles(this.applOverlayStyles));
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

	searchForElements(comparator) {
		let found = [];
		if(!comparator || typeof comparator !== 'function')
			return found;
		let columns =  this.columns;
		for(let i=0; i < columns.length; i++) {
			let column = columns[i],
				elements = column.elements;
			for(let j=0; j < elements.length; j++) {
				comparator(elements[j]) && found.push(elements[j]);
			}
		}
		return found;
	}


	showEndDialog() {
		this.isSubmitted = true;
		this.proceedToNextStep();
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
			this.extend(this.gainedData, data);
			if(this.steps.length - 2 !== this.curStep) {
				this.proceedToNextStep();
			} else {
				button.el.querySelector('input').classList.add('sendsay-loading');
				this.trigger('sendsay-success', this.gainedData);
			}
		}
		return isValid;
	}

	proceedToNextStep() {
		this.curStep++;
		this.render();
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
