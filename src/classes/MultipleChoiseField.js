import {Field} from "./Field.js";
import {CheckBox} from "./CheckBox.js";

export class MultipleChoiseField extends Field {


	constructor(data, parent) {
		super(data, parent);
	}

	initialize() {
		this.template = '<div class = "[%classes%]" style="[%style%]"">' +
						'<label for="[%label%]" class = "sendsay-label">[%label%]</label>' + 
						'<div type="text" class="sendsay-error"></div>' + 
						'</div>';
		this.curValues = this.data.field.default || [];
		this.handleChangeValue = this.handleChangeValue.bind(this);		
	}

	build() {
		super.build();
		this.elements = [];
		let body = this.el;
		let field = this.data.field || {};

		if(this.data.field.answers) {
			let answers = field.answers;
			for(var key in answers) {

				let newEl = new CheckBox({
					field: {
						qid: field.id || field.qid || ''
					},
					content: {
						label: answers[key],
						value: key,
						checked: this.curValues.indexOf(key) !== -1
					}
				}, this);
				if(newEl) {
					newEl.el.addEventListener('sendsay-change', this.handleChangeValue);
					this.elements.push(newEl);
					body.appendChild(newEl.el);
				} 
			}
		}
		return this.el; 
	}

	handleChangeValue(event) {
		var data = event.detail.extra;
		if(data.checked) {
			if(this.curValues.indexOf(data.value) === -1)
				this.curValues.push(data.value);
		} else {
			if(this.curValues.indexOf(data.value) !== -1)
				this.curValues.splice(this.curValues.indexOf(data.value), 1);
		}
	}

	getValue() {
		var res = '';
		for(var i=0; i < this.curValues.length; i++ ) {
			if(i > 0)
				res += ' ';
			res += this.curValues[i];
		}
		return res;
	}

	validate() {
		this.removeErrorMessage();
		if(this.data.field.required && this.getValue().length > 0) {
			this.showErrorMessage("Обязательное поле")
			return false;
		}
		return true;
	}
}
