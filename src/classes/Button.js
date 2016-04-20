import {DOMObject} from "./DOMObject.js";


export class Button extends DOMObject {
	constructor(data) {
		super();
		this.data = data;
		this.template = '<div class = "[%classes%]">' +
							'<input type="button"  value="[%text%]"  style="[%style%]" />' + 
						'</div>';
		this.baseClass = 'sendsay-button';
		this.build();
	}

	build() {
		return super.build();
	}

	makeStyles() {
		let styleObj = super.makeStyles(),
			data = this.data;
		styleObj['background-color'] = data.backgroundColor || styleObj['background-color'];
		styleObj['color'] = data.textColor || styleObj['color'];
		return styleObj;
	}

	makeSettings() {
		let data = this.data,
			settings = super.makeSettings();
		settings.text = data.text || 'Unknown';
		return settings;
	}
}