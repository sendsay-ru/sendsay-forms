import {DOMObject} from "./DOMObject.js";


export class CheckBox extends DOMObject {

	constructor(data, parent) {
		super(data, parent);
	}

	initialize() {
		this.template = '<div class = "[%classes%]" style="[%style%]"">' +						
							'<input [%checked%] name="[%qid%]" value="[%value%]" type="checkbox" class="sendsay-checkinput"/>' +
							(this.data.label ? '<label for="[%label%]" class = "sendsay-label">[%label%]</label>' : '') +
						'</div>';
		this.baseClass = 'sendsay-checkbox';
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);		
	}

	build() {
		return super.build();
	}
	makeSettings() {
		let data = this.data,
			settings = super.makeSettings();

		settings.label = data.label || data.name || '';
		settings.qid = data.qid || data.name || '';
		settings.value = data.value || '';
		settings.checked = data.checked ? 'checked' : '';
		if(data.hidden) {
			settings.classes += ' sendsay-field-hidden';
		}
		return settings;
	}

	addEvents() {
		if(this.el) {
			this.el.querySelector('input').addEventListener('change', this.handleChange);
			this.el.querySelector('label').addEventListener('click', this.handleClick);
		}
	}

	removeEvents() {
		if(this.el) {
			this.el.querySelector('input').removeEventListener('change', this.handleChange);
			this.el.querySelector('label').removeEventListener('click', this.handleClick);
		}
	}

	handleChange(event) {
		event.stopPropagation();
		this.trigger('sendsay-change', {
			checked: event.target.checked,
			value: event.target.value
		});
	}

	handleClick(event) {

		event.stopPropagation();
		let input = this.el.querySelector('input');
		input.checked = !input.checked;

	}

	makeStyles() {
		let styleObj = super.makeStyles();
		// 	data = this.data;
		// if(this.parent && this.parent.data && this.parent.data.textColor)
		// 	styleObj.color = this.parent.data.textColor;
		return styleObj;
	}

}
