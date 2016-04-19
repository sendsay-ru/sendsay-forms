import {DOMObject} from "./DOMObject.js";


export class Field extends DOMObject {

	constructor(data) {
		super();
		this.data = data;
		this.template = '<div class = "sendsay-field [%classes%]" style="[%style%]"">' +
						'<label for="[%name%]" class = "sendsay-label">[%label%]</label>' +
						'<input name="[%name%]" placeholder=[%placeholder%] type="text" class="sendsay-input"/>' + 
						'</div>';
		this.build();
	}

	build() {
		return super.build();
	}
	makeSettings() {
		let data = this.data,
			settings = super.makeSettings();
		settings.classes = '';
		settings.name = data.name || '';
		settings.label = data.label || data.name || '';
		settings.placeholder = data.placeholder || '';
		if(data.hidden) {
			settings.classes = 'sendsay-field-hidden';
		}
		if(data.required) {
			settings.label += '*';
		}
		
		return settings;
	}

	validate() {
		if(this.data.required && this.el.querySelector('input').value.trim() == '') {
			this.el.classList.add('sendsay-field-invalid');
			return false;
		}
		return true;
	}

}