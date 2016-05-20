import {DOMObject} from "./DOMObject.js";


export class CheckBox extends DOMObject {

	constructor(data, parent) {
		super(data, parent);
	}

	initialize() {

		this.template = '<div class = "[%classes%]" style="[%style%]"">' +						
							'<input [%checked%] name="[%qid%]" value="[%value%]" type="checkbox" class="sendsay-checkinput"/>' +
							(this.data.content.label ? '<label for="[%label%]" class = "sendsay-label">[%label%]</label>' : '') +
						'</div>';
		this.baseClass = 'sendsay-checkbox';
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);		
	}

	build() {
		return super.build();
	}
	makeSettings() {

		let content = this.data.content || {},
			field = this.data.field || {},
			appearance = this.data.appearance || {},
			settings = super.makeSettings();

		settings.label = content.label || content.name || '';
		settings.qid = field.qid || field.name || '';
		settings.value = content.value || '';
		settings.checked = content.checked ? 'checked' : '';
		if(appearance.hidden) {
			settings.classes += ' sendsay-field-hidden';
		}
		return settings;
	}

	addEvents() {
		if(this.el) {
			this.el.querySelector('input').addEventListener('change', this.handleChange);
			if(this.el.querySelector('label')) {
				this.el.querySelector('label').addEventListener('click', this.handleClick);
			}
		}
	}

	removeEvents() {
		if(this.el) {
			this.el.querySelector('input').removeEventListener('change', this.handleChange);
			if(this.el.querySelector('label')) {
				this.el.querySelector('label').removeEventListener('click', this.handleClick);
			}
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
		this.trigger('sendsay-change', {
			checked: input.checked,
			value: input.value
		});

	}

	makeStyles() {
		let styleObj = super.makeStyles();
		// 	data = this.data;
		// if(this.parent && this.parent.data && this.parent.data.textColor)
		// 	styleObj.color = this.parent.data.textColor;
		return styleObj;
	}

}
