import {DOMObject} from "./DOMObject.js";


export class Text extends DOMObject {
	constructor(data, parent) {
		super(data, parent);
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
		this.render();
	}

	build() {
		return super.build();
	}

	makeSettings() {
		let data = this.data,
			settings = super.makeSettings();
		settings.text = data.text || '';
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