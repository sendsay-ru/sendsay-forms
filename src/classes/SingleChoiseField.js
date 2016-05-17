import {Field} from "./Field.js";
import {RadioButton} from "./RadioButton.js";
export class SingleChoiseField extends Field {


	constructor(data, parent) {
		super(data, parent);
	}

	initialize() {
		this.template = '<div class = "[%classes%]" style="[%style%]"">' +
				'<label for="[%label%]" class = "sendsay-label">[%label%]</label>' + 
				'<div type="text" class="sendsay-error"></div>' + 
				'</div>';
		let field = this.data.field || {};
		this.curValue = field.default || '';
		this.handleChangeValue = this.handleChangeValue.bind(this);
	}

	build() {
		super.build();
		this.elements = [];
		let field = this.data.field || {};
		let body = this.el;
		if(field.answers) {
			let answers = field.answers;
			for(var key in answers) {
				let newEl = new RadioButton({
					field: {
						qid: field.id || field.qid || ''
					},
					content: { 
						label: answers[key],
						value: key,
						checked: key === this.curValue
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
		this.curValue = data.value;
	}

	getValue() {
		return this.curValue;
	}
}
