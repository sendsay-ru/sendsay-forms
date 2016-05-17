import {DOMObject} from "./DOMObject.js";


export class Button extends DOMObject {
	constructor(data, parent) {
		super(data, parent);
	}

	initialize() {
		this.template = '<div class = "[%classes%]" style="[%wrapperstyle%]">' +
							'<input type="button"  value="[%text%]"  style="[%style%]" />' + 
						'</div>';

		this.baseClass = 'sendsay-button';
		this.applicableStyles = {
			'background-color': { param: 'backgroundColor' },
			'border-radius': { param: 'borderRadius', postfix: 'px' },
			'color': { param: 'textColor'},
			'line-height': { param: 'lineHeighFt' ,default: 'normal'}
		};		
	}

	addEvents() {
		if(this.el) {
			this.el.querySelector('input').addEventListener('click', this.handleClick.bind(this));
		}
	}

	handleClick() {
		this.trigger('sendsay-click');
	}

	removeEvents() {
		if(this.el) {
			this.el.querySelector('input').removeEventListener('click', this.handleClick.bind(this));
		}
	}

	makeStyles() {
		let styleObj = super.makeStyles(),
			data = this.data.appearance || {};
		if(data.align === 'justify')
			styleObj.width = '100%';
		return styleObj;
	}

	makeSettings() {
		let data = this.data.content || {},
			settings = super.makeSettings();
		settings.text = data.text || 'Unknown';
		settings.wrapperstyle = this.makeWrapperStyle();
		return settings;
	}

	makeWrapperStyle() {
		let style = {},
			data = this.data.appearance || {};

		if(data.align !== 'justify')
			style['text-align'] = data.align;

		return this.convertStyles(style)
	}

}