import { Field } from './Field';
import { CheckBox } from './CheckBox';

export class MultipleChoiseField extends Field {
  initialize() {
    super.initialize();
    this.template =
      '<div class="[%classes%]" style="[%style%]">' +
      '<label for="[%label%]" class="sendsay-label">[%label%]</label>' +
      '<div class="sendsay-container"></div>' +
      '<div type="text" class="sendsay-error"></div>' +
      '</div>';
    this.curValues = this.data.field.default || [];
    this.baseClass = 'sendsay-field';
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.applicableStyles = {
      'padding-bottom': { param: 'paddingBottom', postfix: 'px' },
      'padding-top': { param: 'paddingTop', postfix: 'px' },
      'padding-left': { param: 'paddingLeft', postfix: 'px' },
      'padding-right': { param: 'paddingRight', postfix: 'px' },
      color: { param: 'labelTextColor' },
      'font-family': { param: 'labelFontFamily' },
      'font-size': { param: 'labelFontSize', postfix: 'px' },
    };
  }

  build() {
    super.build();
    this.elements = [];
    const body = this.el.querySelector('.sendsay-container');
    const field = this.data.field || {};

    if (this.data.field.answers) {
      const { answers } = field;
      // eslint-disable-next-line
      for (const key in answers) {
        const newEl = new CheckBox(
          {
            field: {
              qid: field.id || field.qid || '',
            },
            content: {
              label: answers[key],
              value: key,
              checked: this.curValues.indexOf(key) !== -1,
            },
          },
          this
        );
        if (newEl) {
          newEl.el.addEventListener('sendsay-form-change', this.handleChangeValue);
          this.elements.push(newEl);
          body.appendChild(newEl.el);
        }
      }
    }
    return this.el;
  }

  handleChangeValue(event) {
    const data = event.detail.extra;
    if (data.checked) {
      if (this.curValues.indexOf(data.value) === -1) {
        this.curValues.push(data.value);
      }
    } else if (this.curValues.indexOf(data.value) !== -1) {
      this.curValues.splice(this.curValues.indexOf(data.value), 1);
    }
  }

  getValue() {
    return this.curValues;
  }

  validate() {
    this.removeErrorMessage();
    if (this.data.field.required && this.getValue().length === 0) {
      this.showErrorMessageById('validation__required-field');
      return false;
    }
    return true;
  }
}
