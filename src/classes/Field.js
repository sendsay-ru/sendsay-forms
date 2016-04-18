import {DOMObject} from "./DOMObject.js";


export class Field extends DOMObject {

	constructor(data) {
		super();
		this.data = data;
		this.template = '<div class = "sendsay-field" style="[%style%]"">' +
						'<label for="[%name%]" class = "sendsay-label">[%label%]</label>' +
						'<input name="[%name%]" type="text" class="sendsay-input"/>' + 
						'</div>';
	}

	build() {
		return super.build();
	}
	makeSettings() {
		let data = this.data,
			settings = super.makeSettings();
		settings.name = data.name || '';
		settings.label = data.label || '';
		
		return settings;
	}

}