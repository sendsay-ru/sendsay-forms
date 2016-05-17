import {DOMObject} from "./DOMObject.js";


export class Text extends DOMObject {
	constructor(data, parent) {
		super(data, parent);
	}

	initialize() {
		this.template = '<div class = "sendsay-text" style="[%style%]"">' +
							'[%text%]' + 
						'</div>';
		this.baseClass = 'sendsay-text';
		this.applicableStyles = {
			'text-align': { param: 'align', default: 'left' },
			'line-height': { param: 'lineHeight', default: 'normal' },
			'padding-bottom': { param: 'paddingBottom', postfix: 'px'},
			'padding-top': { param: 'paddingTop', postfix: 'px'},
			'padding-left': { param: 'paddingLeft', postfix: 'px'},
			'padding-right': { param: 'paddingRight', postfix: 'px'}

		}		
	}

	build() {
		return super.build();
	}

	makeSettings() {
		let content = this.data.content || {},
			settings = super.makeSettings();
		settings.text = content.text || '';
		return settings;
	}

	makeStyles() {
		let styleObj = super.makeStyles(),
			data = this.data;
		if(this.parent && this.parent.data && this.parent.data.textColor)
			styleObj.color = this.parent.data.textColor;
		return styleObj;
	}
}