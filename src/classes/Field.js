import {DOMObject} from "./DOMObject.js";


export class Field extends DOMObject {

	constructor(data, parent) {
		super(data, parent);
		this.template = '<div class = "[%classes%]" style="[%style%]"">' +
						'<label for="[%label%]" class = "sendsay-label">[%label%]</label>' +
						'<input name="[%qid%]" placeholder="[%placeholder%]" value="[%value%]" type="text" class="sendsay-input"/>' +
						'<div type="text" class="sendsay-error"></div>' +  
						'</div>';
		this.baseClass = 'sendsay-field';
		this.render();
	}

	build() {
		return super.build();
	}
	makeSettings() {
		let data = this.data,
			settings = super.makeSettings();
		settings.name = data.name || '';
		settings.label = data.label || data.name || '';
		settings.placeholder = data.placeholder || '';
		settings.qid = data.qid || data.name || '';
		settings.value = data.default || '';
		if(data.hidden) {
			settings.classes += ' sendsay-field-hidden';
		}
		if(data.required) {
			settings.label += '*';
		}
		
		return settings;
	}

	makeStyles() {
		let styleObj = super.makeStyles(),
			data = this.data;
		if(this.parent && this.parent.data && this.parent.data.textColor)
			styleObj.color = this.parent.data.textColor;
		return styleObj;
	}

	validate() {
		this.removeErrorMessage();
		if(this.data.required && this.el.querySelector('input').value == '') {
			this.showErrorMessage("Обязательное поле")
			return false;
		}
		return true;
	}
	showErrorMessage(message) {
		this.el.classList.add('sendsay-field-invalid');
		this.el.querySelector('.sendsay-error').innerHTML = message;
	}

	removeErrorMessage() {
		this.el.classList.remove('sendsay-field-invalid');
		this.el.querySelector('.sendsay-error').innerHTML = '';
	}

	getValue() {
		return this.el.querySelector('input').value;
	}


}