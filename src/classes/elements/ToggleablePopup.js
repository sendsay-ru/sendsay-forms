import {Popup} from "./Popup.js";
import {MediaQuery} from "./../MediaQuery.js";



export class ToggleablePopup extends Popup {

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
				'.sendsay-popup': {
					 'width': '300px !important',
					'-webkit-flex-direction': 'column',
					'-ms-flex-direction': 'column',
					'flex-direction': 'column',
					'animation': 'none'
				},
				'.sendsay-popup.sendsay-barUp, .sendsay-popup.sendsay-barDown': {
					'top': '50%',
					'left': '50%',
					'transform': 'translate(-50%, -50%)',
					'animation': 'none',
					'bottom': 'initial'
				},
				'.sendsay-column': {
					'height': 'auto !important',
					'flex-direction': 'column'
				},
				'.sendsay-popup.sendsay-barUp  .sendsay-column > *, .sendsay-popup.sendsay-barDown .sendsay-column > *': {
					'padding-bottom': '20px',
					'padding-left': '0px'
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
		var el = super.build();
		var textEl = document.createElement('div');
		textEl.style = this.convertStyles(this.applyStyles(this.maintextApplStyle));;
		textEl.innerHTML = this.data.content.mainText;
		textEl.className = 'sendsay-text';
		let column = el.querySelector('.sendsay-column'),
			firstChild = column.querySelector('*');
		column.insertBefore(textEl, firstChild);
		return el;
	}



}
