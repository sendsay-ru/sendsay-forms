import {DOMObject} from "./DOMObject.js";


export class Text extends DOMObject {
	constructor(data) {
		super();
		this.data = data;
		this.template = '<div class = "sendsay-text" style="[%style%]"">' +
							'[%text%]' + 
						'</div>';
		this.baseClass = 'sendsay-text';
		this.build();
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
}