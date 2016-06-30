import {Popup} from "./Popup.js";
import {MediaQuery} from "./../MediaQuery.js";

export class PopupBar extends Popup {

	constructor(data, parent) {
		super(data, parent);
	}

	initialize() {
		let appearance = this.data.appearance || {};
		this.noWrapper = false;

		this.noWrapper = !appearance.overlayEnabled;
		this.steps = this.data.steps;
		this.curStep = 0;
		this.gainedData = {};

		this.template = (!this.noWrapper ? '<div class = "sendsay-wrapper [%wrapperClasses%]"  style="[%overlayStyles%]">' : '') +
						'<div class = "[%classes%]" style="[%style%]"">' +
							'<div class = "sendsay-close">×</div>' +
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
			'color': { param: 'textColor'}
		};

		this.maintextApplStyle = {
			'font-family': { param: 'font-family' },
			'font-size': { param: 'fontSize', postfix: 'px' },
			'text-align': { param: 'text-align', postfix: 'px'}
		};

		this.applOverlayStyles = {
			'background-color': { param: 'overlayColor' }
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
				'.sendsay-popup.sendsay-type-bar.sendsay-top, .sendsay-popup.sendsay-type-bar.sendsay-bottom': {
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
				'.sendsay-popup.sendsay-type-bar.sendsay-top  .sendsay-column > *, .sendsay-popup.sendsay-type-bar.sendsay-bottom .sendsay-column > *': {
					'padding-bottom': '20px',
					'padding-left': '0px'
				},
				'.sendsay-popup.sendsay-type-bar.sendsay-top.sendsay-animation-slidetop': {
					'animation': 'none'
				},
				'.sendsay-popup.sendsay-type-bar.sendsay-bottom.sendsay-animation-slidebottom': {
					'animation': 'none'
				}
			}
		});
		this.mediaQuery = mediaQuery;
		appearance.position = appearance.position || 'centered';

		this.general = {};
		this.general.appearance = {}
		this.general.appearance.textColor = this.data.appearance.textColor;
		this.general.appearance.labelTextColor = this.data.appearance.labelTextColor;
		this.general.appearance.labelFontSize = this.data.appearance.labelFontSize;
		this.general.appearance.labelFontFamily = this.escapeStyle(this.data.appearance.labelFontFamily);


	}

}
