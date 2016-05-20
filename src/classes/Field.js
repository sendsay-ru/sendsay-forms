import {DOMObject} from "./DOMObject.js";


export class Field extends DOMObject {

	constructor(data, parent) {
		super(data, parent);
	}

	initialize() {
		this.template = '<div class = "[%classes%]" style="[%style%]"">' +
				'<label for="[%label%]" class = "sendsay-label">[%label%]</label>' +
				'<input name="[%qid%]" placeholder="[%placeholder%]" value="[%value%]" type="text" class="sendsay-input"/>' +
				'<div type="text" class="sendsay-error"></div>' +  
				'</div>';
		this.baseClass = 'sendsay-field';
	}

	
	makeSettings() {
		let field = this.data.field || {},
			content = this.data.content || {},
			appearance = this.data.appearance || {},
			settings = super.makeSettings();

		settings.label = content.label || '';
		settings.placeholder = content.placeholder || '';
		settings.qid = field.id || field.qid || '';
		settings.value = field.default || '';
		if(appearance.hidden) {
			settings.classes += ' sendsay-field-hidden';
		}
		if(field.required) {
			settings.label += '*';
		}
		
		return settings;
	}

	makeStyles() {
		let styleObj = super.makeStyles(),
			data = this.data;
		if(this.parent && this.parent.data.appearance && this.parent.data.appearance.textColor)
			styleObj.color = this.parent.data.appearance.textColor;
		return styleObj;
	}

	validate() {
		this.removeErrorMessage();

		if(this.data.field.required && this.getValue() == '') {
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