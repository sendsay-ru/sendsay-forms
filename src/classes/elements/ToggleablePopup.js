import {Popup} from "./Popup.js";
import {MediaQuery} from "./../MediaQuery.js";



export class ToggleablePopup extends Popup {

	constructor(data, parent) {
		super(data, parent);
	}

	initialize() {
		let appearance = this.data.appearance || {};
		this.noWrapper = false;
		this.data.appearance.position = 'toggleable';
		this.template = (!this.noWrapper ? '<div class = "sendsay-wrapper [%wrapperClasses%]">' : '') +
						'<div class = "[%classes%]" style="[%style%]"">' +
							'<div class = "sendsay-close">×</div>' +
							'<div class = "sendsay-toggler">[%maintext%]</div>' +
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
			'color': { param: 'textColor'}
		};

		this.maintextApplStyle = {
			'font-family': { param: 'font' },
			'font-size': { param: 'fontSize', postfix: 'px' },
			'text-align': { param: 'text-align', postfix: 'px'}
		};

		let width =  800;

		let mediaQuery = new MediaQuery({  
			conditions: ['screen', '(min-width: 320px)', '(max-width:' + (+width + 100) + 'px)'],
			selectors: {
				'.sendsay-popup.sendsay-toggleable': {
					 'width': '150px !important',
					'-webkit-flex-direction': 'column',
					'-ms-flex-direction': 'column',
					'flex-direction': 'column',
					'animation': 'none',
					'bottom': '50px',
					'right': '50px'
				},
				'.sendsay-popup.sendsay-toggleable .sendsay-toggler': {
					'opacity': 0,
					'overflow': 'hidden'
				},
				'.sendsay-popup.sendsay-toggleable .sendsay-toggler:before': {
					'content': '"Hello world"'
				},
				'.sendsay-popup.sendsay-toggleable .sendsay-content': { 
					'display': 'none',
					'transition': 'none'
				},
				'.sendsay-popup.sendsay-toggleable.sendsay-opened': {
					 'width': '150px !important',
					'-webkit-flex-direction': 'column',
					'-ms-flex-direction': 'column',
					'flex-direction': 'column',
					'animation': 'none',
					'bottom': '50px',
					'right': '50px'
				},
				'.sendsay-popup.sendsay-toggleable.sendsay-opened .sendsay-content': { 
					'display': 'block',
					'transition': 'none'
				},
				'.sendsay-popup.sendsay-toggleable.sendsay-opened': {
					'top': '50%',
					'left': '50%',
					'transform': 'translate(-50%, -50%)',
					'bottom': 'initial',
					'right': 'initial',
					'width': '300px !important',
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

	makeSettings() {
		let settings = super.makeSettings();
		settings.maintext = this.data.content.mainText;
		return settings;
	}

	addEvents() {
		super.addEvents();
		if(this.el) {
			this.el.querySelector('.sendsay-toggler').addEventListener('click', this.handleTogglerClick.bind(this));
		}
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
			contentEl.style.maxHeight = contentEl.scrollHeight + 'px';
		}
	}



}
