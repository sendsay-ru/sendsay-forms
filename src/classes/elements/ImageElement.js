import {DOMObject} from "./DOMObject.js";


export class ImageElement extends DOMObject {
	constructor(data, parent) {
		super(data, parent);
	}

	initialize() {
		this.template = '<div class = "[%classes%]" style="[%wrapperstyle%]">' +
							'<img src="[%url%]" style="[%style%]/>" />' + 
						'</div>';

		this.baseClass = 'sendsay-image';		
	}

	makeStyles() {
		let styleObj = super.makeStyles(),
			data = this.data.appearance || {};
		if(data.extended) 
			styleObj.width = '100%';
		else
			styleObj['max-width'] = '100%';
		return styleObj;
	}

	makeSettings() {
		let data = this.data.content || {},
			settings = super.makeSettings();
		settings.wrapperstyle = this.makeWrapperStyle();
		settings.url = data.url;
		return settings;
	}

	makeWrapperStyle() {
		let style = {},
			data = this.data.appearance || {};

		style['text-align'] = data.align;

		return this.convertStyles(style)
	}

}