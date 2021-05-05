import { Field } from './Field';

export class NumberField extends Field {
  validate() {
    let isValid = super.validate();
    if (isValid) {
      const value = this.getValue();
      // eslint-disable-next-line no-restricted-globals
      isValid = !value.match(/[\.xXeE]/) && !isNaN(+value);
      if (!isValid) { this.showErrorMessage('Неверный формат целого числа'); }
    }
    return isValid;
  }
}
