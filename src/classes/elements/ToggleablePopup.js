import {Popup} from "./Popup.js";
import {MediaQuery} from "./../MediaQuery.js";



export class ToggleablePopup extends Popup {

	constructor(data, parent) {
		super(data, parent);
	}

	initialize() {
		let appearance = this.data.appearance || {};

		this.noWrapper = !appearance.overlayEnabled;
		this.steps = this.data.steps;
		this.curStep = 0;
		this.gainedData = {};
	
		this.template = (!this.noWrapper ? '<div class = "sendsay-wrapper [%wrapperClasses%]"  style="[%overlayStyles%]">' : '') +
						'<div class = "[%classes%]" style="[%style%]"">' +
							'<div class = "sendsay-close">×</div>' +
							'<div class = "sendsay-toggler" style=[%togglerStyle%]>' +
								'<span class="sendsay-toggler-desktop">[%maintext%]</span>' +
								'<span class="sendsay-toggler-mobile">[%mobilemaintext%]</span>' +
							'</div>' +
							'<div class = "sendsay-content">' +
							'</div>' +
						'</div>'+
						(!this.noWrapper ? '</div>' : '');


		this.baseClass = 'sendsay-popup';

		this.applicableStyles = {
			'background-color': { param: 'backgroundColor' },
			'padding-bottom': { param: 'paddingBottom', postfix: 'px'},
			'padding-top': { param: 'paddingTop', postfix: 'px'},
			'padding-left': { param: 'paddingLeft', postfix: 'px'},
			'padding-right': { param: 'paddingRight', postfix: 'px'},
			'color': { param: 'textColor'},
			'width': { param: 'width', prefix: 'px'}
		};

		this.maintextApplStyle = {
			'font-family': { param: 'font-family' },
			'font-size': { param: 'fontSize', postfix: 'px' },
			'text-align': { param: 'text-align', postfix: 'px'}
		};

		this.applOverlayStyles = {
			'background-color': { param: 'overlayColor' }
		};

		let width =  appearance.width;

		let mediaQuery = new MediaQuery({  
			conditions: ['screen', '(min-width: 320px)', '(max-width:' + (+width + 100) + 'px)'],
			selectors: {
				'.sendsay-popup.sendsay-type-widget': {
					 'width': '150px !important',
					'-webkit-flex-direction': 'column',
					'-ms-flex-direction': 'column',
					'flex-direction': 'column',
					'animation': 'none',
					'bottom': '50px',
					'right': '50px'
				},
				'.sendsay-popup.sendsay-type-widget .sendsay-content': { 
					'display': 'none',
					'transition': 'none'
				},
				'.sendsay-popup.sendsay-type-widget .sendsay-toggler ': { 
					'font-size': '14px !important'
				},
				'.sendsay-popup.sendsay-type-widget.sendsay-opened  .sendsay-toggler': { 
					'display': 'none'
				},
				'.sendsay-popup.sendsay-type-widget.sendsay-opened .sendsay-content': { 
					'display': 'block',
					'transition': 'none'
				},
				'.sendsay-popup.sendsay-type-widget.sendsay-opened': {
					'top': '50%',
					'left': '50%',
					'transform': 'translate(-50%, -50%)',
					'bottom': 'initial',
					'right': 'initial',
					'width': '300px !important',
				},
				'.sendsay-popup.sendsay-type-widget.sendsay-opened .sendsay-close': {
					'display': 'block'
				},
				'.sendsay-popup.sendsay-type-widget.sendsay-right .sendsay-toggler .sendsay-toggler-mobile, .sendsay-popup.sendsay-type-widget.sendsay-left .sendsay-toggler .sendsay-toggler-mobile': { 
					'display': 'block'
				},
				'.sendsay-popup.sendsay-type-widget.sendsay-right .sendsay-toggler .sendsay-toggler-desktop, .sendsay-popup.sendsay-type-widget.sendsay-left .sendsay-toggler .sendsay-toggler-desktop': { 
					'display': 'none'
				},
			}
		});
		this.mediaQuery = mediaQuery;
		appearance.position = appearance.position || 'centered';

		this.general = {};
		this.general.appearance = {}
		this.general.appearance.textColor = this.data.appearance.textColor;
	}

	makeSettings() {
		let settings = super.makeSettings();
		settings.maintext = this.data.content.mainText;
		settings.mobilemaintext = this.data.content.mobilemainText || 'Телефон';
		settings.togglerStyle = this.convertStyles(this.applyStyles(this.maintextApplStyle));
		return settings;
	}

	addEvents() {
		super.addEvents();
		if(this.el) {
			this.el.querySelector('.sendsay-toggler').addEventListener('click', this.handleTogglerClick.bind(this));
		}
		this.addEvent('resize', function() {
			console.log('resize');
		})
	}

	removeEvents() {
		super.addEvents();
		if(this.el) {
			this.el.querySelector('.sendsay-toggler').removeEventListener('click', this.handleTogglerClick.bind(this));
		}
	}

	handleTogglerClick() {

		let el = this.noWrapper ? this.el : this.el.querySelector('.sendsay-popup');
		let contentEl = el.querySelector('.sendsay-content');

		if(el.classList.contains('sendsay-opened')) {
			el.classList.remove('sendsay-opened');
			contentEl.style.maxHeight = 0 + 'px';
		} else {
			el.classList.add('sendsay-opened');
			this.setSaneMaxHeight();
		}
	}

	submit() {
		let temp = super.submit();
		this.setSaneMaxHeight();
		return temp;
	}

	setSaneMaxHeight() {
		let el = this.noWrapper ? this.el : this.el.querySelector('.sendsay-popup');
		let contentEl = el.querySelector('.sendsay-content');
		contentEl.style.maxHeight = contentEl.scrollHeight + 'px';
	}

	showErrorFor(qid, message) {
		super.showErrorFor(qid, message);
		this.setSaneMaxHeight();
	}

	handleClose() {
		let el = this.noWrapper ? this.el : this.el.querySelector('.sendsay-popup');
		let contentEl = el.querySelector('.sendsay-content');

		if(el.classList.contains('sendsay-opened')) {
			el.classList.remove('sendsay-opened');
			contentEl.style.maxHeight = 0 + 'px';
		} else {
			this.hide();
		}
	}



}
