import { DOMObject } from './DOMObject';

export class CheckBox extends DOMObject {
  initialize() {
    this.template = `${
      '<div class="[%classes%]" style="[%style%]">' +
      '<input [%checked%] name="[%qid%]" value="[%value%]" type="checkbox" class="sendsay-checkinput"/>'
    }${
      this.data.content.label
        ? '<label for="[%label%]" class="sendsay-label">[%label%]</label>'
        : ''
    }</div>`;
    this.baseClass = 'sendsay-checkbox';
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.applicableStyles = {
      color: { param: 'labelTextColor' },
      'font-family': { param: 'labelFontFamily' },
      'font-size': { param: 'labelFontSize', postfix: 'px' },
    };
  }

  build() {
    return super.build();
  }

  makeSettings() {
    const content = this.data.content || {};
    const field = this.data.field || {};
    const appearance = this.data.appearance || {};
    const settings = super.makeSettings();

    settings.label = this.escapeHTML(content.label || content.name || '');
    settings.qid = field.qid || field.name || '';
    settings.value = content.value || '';
    settings.checked = content.checked ? 'checked' : '';
    if (appearance.hidden) {
      settings.classes += ' sendsay-field-hidden';
    }
    return settings;
  }

  addEvents() {
    if (this.el) {
      this.el.querySelector('input').addEventListener('change', this.handleChange);
      if (this.el.querySelector('label')) {
        this.el.querySelector('label').addEventListener('click', this.handleClick);
      }
    }
  }

  removeEvents() {
    if (this.el) {
      this.el.querySelector('input').removeEventListener('change', this.handleChange);
      if (this.el.querySelector('label')) {
        this.el.querySelector('label').removeEventListener('click', this.handleClick);
      }
    }
  }

  handleChange(event) {
    event.stopPropagation();
    this.trigger('sendsay-change', {
      checked: event.target.checked,
      value: event.target.value,
    });
  }

  handleClick(event) {
    event.stopPropagation();
    const input = this.el.querySelector('input');
    input.checked = !input.checked;
    this.trigger('sendsay-change', {
      checked: input.checked,
      value: input.value,
    });
  }

  makeStyles() {
    const styleObj = super.makeStyles();
    return styleObj;
  }
}
