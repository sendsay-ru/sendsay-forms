import {DOMObject} from "./DOMObject.js";


export class Button extends DOMObject {
	constructor(data) {
		super();
		this.data = data;
		this.template = '<div class = "sendsay-button" style="[%style%]"">' +
							'<input type="button"  value=[%text%] />' + 
						'</div>';
		this.build();
	}

	build() {
		return super.build();
	}

	makeSettings() {
		let data = this.data,
			settings = super.makeSettings();
		settings.text = data.text || 'Unknown';
		return settings;
	}
}