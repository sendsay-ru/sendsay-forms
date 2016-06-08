import {Popup} from "./Popup.js";
import {MediaQuery} from "./../MediaQuery.js";



export class PopupBar extends Popup {

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
				'.sendsay-popup.sendsay-bar': {
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
				'.sendsay-popup.sendsay-bar  .sendsay-column > *': {
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

}
