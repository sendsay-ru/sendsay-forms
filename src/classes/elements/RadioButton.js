import {DOMObject} from "./DOMObject.js";


export class RadioButton extends DOMObject {

	constructor(data, parent) {
		super(data, parent);
	}

	initialize() {
		this.template = '<div class = "[%classes%]" style="[%style%]">' +						
							'<input [%checked%] name="[%qid%]" value="[%value%]" type="radio" class="sendsay-radioinput"/>' +
							(this.data.content.label ? '<label for="[%qid%]" class = "sendsay-label">[%label%]</label>' : '') +
						'</div>';
		this.baseClass = 'sendsay-radio';
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.applicableStyles = {
			'color': { param: 'labelTextColor'},
			'font-family': { param: 'labelFontFamily'},
			'font-size': { param: 'labelFontSize', postfix: 'px'}
		};
	}

	build() {
		return super.build();
	}
	makeSettings() {
		let data = this.data,
			settings = super.makeSettings();
		let content = data.content || {},
			field = data.field || {},
			appearance = data.appearance || {};


		settings.label = this.escapeHTML(content.label || '');
		settings.qid = field.qid || '';
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
			if(this.data.content.label)
				this.el.querySelector('label').addEventListener('click', this.handleClick);
		}
	}

	removeEvents() {
		if(this.el) {
			this.el.querySelector('input').removeEventListener('change', this.handleChange);
			if(this.data.content.label)
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
		input.checked = true;
		this.trigger('sendsay-change', {
			checked: input.checked,
			value: input.value
		});

	}

}