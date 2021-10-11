import { Field } from './Field';

export class DateField extends Field {
  initialize() {
    this.template = '<div class="[%classes%]" style="[%style%]">'
      + '<label for="[%label%]" class="sendsay-label">[%label%]</label>'
      + '<input name="[%qid%]" placeholder="[%placeholder%]" value="[%value%]" type="text" class="sendsay-input"/>'
      + '<div type="text" class="sendsay-error"></div>'
      + '</div>';
    this.baseClass = 'sendsay-field';
    this.applicableStyles = {
      'padding-bottom': { param: 'paddingBottom', postfix: 'px' },
      'padding-top': { param: 'paddingTop', postfix: 'px' },
      'padding-left': { param: 'paddingLeft', postfix: 'px' },
      'padding-right': { param: 'paddingRight', postfix: 'px' },
      color: { param: 'labelTextColor' },
      'font-family': { param: 'labelFontFamily' },
      'font-size': { param: 'labelFontSize', postfix: 'px' },
    };
    this.accuracy = this.data.content.accuracy;
    this.dateTemplate = 'dd/dd/dddd';
    // eslint-disable-next-line default-case
    switch (this.accuracy) {
      case 'ys':
        this.dateTemplate = 'dd.MM.yyyy hh:mm:ss';
        break;
      case 'ym':
        this.dateTemplate = 'dd.MM.yyyy hh:mm';
        break;
      case 'yh':
        this.dateTemplate = 'dd.MM.yyyy hh';
        break;
      case 'yd':
        this.dateTemplate = 'dd.MM.yyyy';
        break;
    }

    this.types = ['d', 'M', 'm', 'y', 'h', 's'];
  }

  getValue() {
    const dateObj = this.extractAndSeparateValue();
    const { accuracy } = this;
    if (dateObj === '') {
      return '';
    }
    let date = '';
    if (dateObj) {
      date = `${this.normalizeValue(dateObj.year, 4)
      }-${
        this.normalizeValue(dateObj.month, 2)
      }-${
        this.normalizeValue(dateObj.day, 2)}`;
      if (accuracy === 'ys' || accuracy === 'ym' || accuracy === 'yh') {
        date += ` ${this.normalizeValue(dateObj.hour, 2)}`;
        if (accuracy === 'ys' || accuracy === 'ym') {
          date += `:${this.normalizeValue(dateObj.minute, 2)}`;
          if (accuracy === 'ys') {
            date += `:${this.normalizeValue(dateObj.second, 2)}`;
          }
        }
      }
    }
    return date;
  }

  normalizeValue(value, length) {
    if (value === null) { return '00'; }
    let str = `${value}`;
    const leng = str.length;
    for (let i = 0; i < length - leng; i++) { str = `0${str}`; }
    return str;
  }

  validate() {
    let isValid = super.validate();
    const dateObj = this.extractAndSeparateValue();
    const rawValue = this.el.querySelector('input').value;
    if (rawValue.trim() === '') {
      return true;
    }
    if (!rawValue || !rawValue[rawValue.length - 1].match(/[0-9]/)) { isValid = false; }
    if (isValid && dateObj) {
      const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (!dateObj.year) { isValid = false; }
      if (!dateObj.month || dateObj.month < 1 || dateObj.month > 12) { isValid = false; }
      if (
        isValid
        && (!dateObj.day
          || dateObj.day < 1
          || dateObj.day > months[dateObj.month - 1])
      ) { isValid = false; }
      if (['yh', 'ym', 'ys'].indexOf(this.accuracy) !== -1) {
        if (dateObj.hour !== null && (dateObj.hour < 0 || dateObj.hour > 23)) { isValid = false; }
        if (['ym', 'ys'].indexOf(this.accuracy) !== -1) {
          if (
            dateObj.minute !== null
            && (dateObj.minute < 0 || dateObj.minute > 59)
          ) { isValid = false; }
          if (this.accuracy === 'ys') {
            if (
              dateObj.second !== null
              && (dateObj.second < 0 || dateObj.second > 59)
            ) { isValid = false; }
          }
        }
      }
    } else { isValid = false; }
    if (!isValid) {
      this.showErrorMessage('Введена неверная дата');
    }
    return isValid;
  }

  extractAndSeparateValue() {
    const rawValue = this.el.querySelector('input').value;
    if (rawValue.trim() === '') {
      return '';
    }
    const template = this.dateTemplate;
    const year = template.match(/y+/);
    const month = template.match(/M+/);
    const day = template.match(/d+/);
    const hour = template.match(/h+/);
    const minute = template.match(/m+/);
    const second = template.match(/s+/);
    const dateObj = {};
    dateObj.year = year && +rawValue.substr(year.index, year[0].length);
    dateObj.month = month && +rawValue.substr(month.index, month[0].length);
    dateObj.day = day && +rawValue.substr(day.index, day[0].length);
    dateObj.hour = hour && +rawValue.substr(hour.index, hour[0].length);
    dateObj.minute = minute && +rawValue.substr(minute.index, minute[0].length);
    dateObj.second = second && +rawValue.substr(second.index, second[0].length);
    // eslint-disable-next-line
    for (const key in dateObj) { dateObj[key] = dateObj[key] || null; }
    return dateObj;
  }

  addEvents() {
    super.addEvents();
    this.addEvent('keypress', 'input', this.handleKeyPress.bind(this));
    this.addEvent('keydown', 'input', this.handleKeyDown.bind(this));
    this.addEvent('paste', 'input', this.handlePaste.bind(this));
    this.addEvent('drop', 'input', this.handleDrop.bind(this));
  }

  handleKeyDown(event) {
    if (event.keyCode !== 8 && event.keyCode !== 46) { return true; }
    const valueArr = event.target.value.split('');
    let start = this.getSelectionStart();
    let end = this.getSelectionEnd();
    let { key } = event;

    if (key === 'Backspace') {
      key = undefined;

      if (start > 0 && start === end) { start--; }
    } else if (key === 'Delete') {
      key = undefined;
      if (start === end) { end++; }
    }

    valueArr.splice(start, end - start);

    this.updateInput(valueArr);
    event.stopPropagation();
    event.preventDefault();
    this.setCursor(start);
  }

  handlePaste(event) {
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('Text');
    const valueArr = event.target.value.split('');
    const start = this.getSelectionStart();
    const end = this.getSelectionEnd();
    // eslint-disable-next-line prefer-spread
    valueArr.splice.apply(
      valueArr,
      [start, end - start].concat(pastedData.split('')),
    );
    this.updateInput(valueArr);
    const pastedArr = pastedData.replace(/[^\d]/g, '').split('');
    this.setCursor(
      this.findCursorPosition(event.target.value.split(''), pastedArr, start),
    );
    event.stopPropagation();
    event.preventDefault();
  }

  handleKeyPress(event) {
    const isFull = event.target.value.length === this.dateTemplate.length;
    const start = this.getSelectionStart();
    const end = this.getSelectionEnd();
    const valueArr = event.target.value.split('');
    let { key } = event;

    if (!event.key.match(/\d/)) {
      key = undefined;
    }

    valueArr.splice(start, end - start, key);
    this.updateInput(valueArr);
    event.preventDefault();
    event.stopPropagation();

    this.setCursor(
      isFull && start === end
        ? start
        : this.findCursorPosition(event.target.value.split(''), [key], start),
    );

    return false;
  }

  handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    return false;
  }

  updateInput(formattedArr) {
    const input = this.el.querySelector('input');
    const tempValue = formattedArr.join('').replace(/[^\d]/g, '');
    const res = this.applyDateTemplate(this.dateTemplate, tempValue);
    input.value = res;
  }

  applyDateTemplate(template, rawNumber) {
    const digits = rawNumber.split('');
    const parts = template.split('');
    let i = 0;
    for (let j = 0; i < parts.length && j < digits.length; i++) {
      if (this.types.indexOf(parts[i]) !== -1) {
        parts[i] = digits[j];
        j++;
      }
    }
    parts.splice(i, 1000);
    return parts.join('');
  }

  countBefore(array, regex, index) {
    let count = 0;
    // eslint-disable-next-line
    if (index == undefined) { index = 100000; }
    for (let i = 0; i < index && i < array.length; i++) {
      if (array[i].match(regex)) {
        count++;
      }
    }
    return count;
  }

  findCursorPosition(valueArr, insertedArr, start) {
    let i; let
      j;
    for (i = start, j = 0; i < valueArr.length && j < insertedArr.length; i++) {
      if (valueArr[i] === insertedArr[j]) { j++; }
    }
    return i;
  }

  setCursor(position) {
    const input = this.el.querySelector('input');
    const { value } = input;
    if (value.length >= position) {
      input.setSelectionRange(position, position);
    }
  }

  getSelectionEnd() {
    const input = this.el.querySelector('input');
    return input.selectionEnd;
  }

  getSelectionStart() {
    const input = this.el.querySelector('input');
    return input.selectionStart;
  }

  selection() {
    return window.getSelection() || document.getSelection();
  }
}
