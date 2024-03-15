import { Field } from './Field';
import { RadioButton } from './RadioButton';

export class SingleChoiseField extends Field {
  initialize() {
    super.initialize();
    this.template =
      '<div class="[%classes%]" style="[%style%]">' +
      '<label for="[%label%]" class="sendsay-label">[%label%]</label>' +
      '<div class="sendsay-container"></div>' +
      '<div type="text" class="sendsay-error"></div>' +
      '</div>';
    const field = this.data.field || {};
    this.curValue = field.default || '';
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
    const field = this.data.field || {};
    const body = this.el.querySelector('.sendsay-container');
    if (field.answers) {
      const { answers } = field;
      // eslint-disable-next-line
      for (const key in answers) {
        const newEl = new RadioButton(
          {
            field: {
              qid: field.id || field.qid || '',
            },
            content: {
              label: answers[key],
              value: key,
              checked: key === this.curValue,
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
    this.curValue = data.value;
  }

  getValue() {
    return this.curValue;
  }
}
