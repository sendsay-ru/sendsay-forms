import { Field } from "./Field.js";

export class DateField extends Field {
    constructor(data, parent) {
        super(data, parent);
    }

    initialize() {
        this.template = '<div class = "[%classes%]" style="[%style%]"">' +
            '<label for="[%label%]" class = "sendsay-label">[%label%]</label>' +
            '<input name="[%qid%]" placeholder="[%placeholder%]" value="[%value%]" type="text" class="sendsay-input"/>' +
            '<div type="text" class="sendsay-error"></div>' +
            '</div>';
        this.baseClass = 'sendsay-field';
        this.applicableStyles = {
            'padding-bottom': { param: 'paddingBottom', postfix: 'px' },
            'padding-top': { param: 'paddingTop', postfix: 'px' },
            'padding-left': { param: 'paddingLeft', postfix: 'px' },
            'padding-right': { param: 'paddingRight', postfix: 'px' },
            'color': { param: 'textColor' }
        };
        this.accuracy = this.data.content.accuracy;
        this.dateTemplate = 'dd/dd/dddd';
        switch(this.accuracy) {
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

        this.types = ['d', 'M', 'm', 'y', 'h' ,'s'];

    }

    getValue() {
        let dateObj = this.extractAndSeparateValue(),
            accuracy = this.accuracy;
        let date = '';
        if(dateObj) {
            date = this.normalizeValue(dateObj.year, 4) + '-' + this.normalizeValue(dateObj.month, 2) + '-' + this.normalizeValue(dateObj.day, 2);
            if(accuracy == 'ys' || accuracy == 'ym' || accuracy == 'yh'){
                date += ' ' + this.normalizeValue(dateObj.hour, 2);
                if(accuracy == 'ys' || accuracy == 'ym') {
                    date += ':' + this.normalizeValue(dateObj.minute, 2);
                    if(accuracy == 'ys') {
                        date += ':' + this.normalizeValue(dateObj.second, 2);
                    }
                }
            }
        }
        return date;
    }

    normalizeValue(value, length) {
        if(value === null)
            return false;
        let str = '' + value,
            leng = str.length;
        for(let i = 0; i < length - leng; i++)
            str = '0' + str;
        return str;
    }

    validate() {
        let isValid = super.validate();
        let dateObj = this.extractAndSeparateValue();
        if(dateObj) {
            let months = [31,29,31,30,31,30,31,31,30,31,30,31];
            if(!dateObj.year)
                isValid = false;
            if(!dateObj.month || dateObj.month < 1 || dateObj.month > 12)
                isValid = false;
            if(isValid && (!dateObj.day || dateObj.day < 1 || dateObj.day > months[dateObj.month - 1]))
                isValid = false;
            if(['yh', 'ym', 'ys'].indexOf(this.accuracy) !== -1) {
                if(!dateObj.hour === null || dateObj.hour < 0 || dateObj.hour > 23)
                    isValid = false;
                if(['ym', 'ys'].indexOf(this.accuracy) !== -1) {
                    if(!dateObj.minute === null || dateObj.minute < 0 || dateObj.minute > 59)
                        isValid = false;
                    if(this.accuracy == 'ys') {
                        if(!dateObj.second === null || dateObj.second < 0 || dateObj.second > 59)
                            isValid = false;
                    }
                }
            }
        } else 
            isValid = false;
        if(!isValid) {
            this.showErrorMessage("Введена неверная дата")    
        }
        return isValid;
        
    }

    extractAndSeparateValue() {
        let regexStr = this.dateTemplate.replace(/[mMdyhs]/g, '\\d');
        let rawValue = this.el.querySelector('input').value;
        if(!rawValue.match(new RegExp(regexStr))) 
            return false;
        let template = this.dateTemplate;
        let year = template.match(/y+/),
            month = template.match(/M+/),
            day = template.match(/d+/),
            hour = template.match(/h+/),
            minute = template.match(/m+/),
            second = template.match(/s+/);
        let dateObj = {};
        dateObj.year = year && +rawValue.substr(year.index, year[0].length);
        dateObj.month = month && +rawValue.substr(month.index, month[0].length);
        dateObj.day = day && +rawValue.substr(day.index, day[0].length);
        dateObj.hour = hour && +rawValue.substr(hour.index, hour[0].length);
        dateObj.minute = minute && +rawValue.substr(minute.index, minute[0].length);
        dateObj.second = second && +rawValue.substr(second.index, second[0].length);
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
        if(event.keyCode !== 8 && event.keyCode !== 46)
            return true;
        let valueArr = event.target.value.split('');
        let start = this.getSelectionStart(),
            end = this.getSelectionEnd(),
            key = event.key;

        if(key == 'Backspace') {
            key = undefined;

            if(start > 0 && start == end)
                start--;
        } else if(key == 'Delete') {
            key = undefined;
            if(start == end)
                end++;
        }

        valueArr.splice(start, end - start);

        this.updateInput(valueArr);
        event.stopPropagation();
        event.preventDefault();
        this.setCursor(start);
    }

    handlePaste(event) {
    
        var clipboardData, pastedData;   
        clipboardData = event.clipboardData || window.clipboardData;
        pastedData = clipboardData.getData('Text');
        let valueArr = event.target.value.split('');
        let start = this.getSelectionStart(),
            end = this.getSelectionEnd();
        valueArr.splice.apply(valueArr, [start, end - start].concat(pastedData.split('')));
        this.updateInput(valueArr);
        let pastedArr = pastedData.replace(/[^\d]/g, '').split('');
        this.setCursor(this.findCursorPosition(event.target.value.split(''), pastedArr, start));
        event.stopPropagation();
        event.preventDefault();
    }

    handleKeyPress(event) {
        let isFull = event.target.value.length === this.dateTemplate.length;
        let start = this.getSelectionStart(),
            end = this.getSelectionEnd();
        let valueArr = event.target.value.split(''),
            key = event.key;

        if(!event.key.match(/\d/)) {
            key = undefined;
        }


        valueArr.splice(start, end - start, key);
        this.updateInput(valueArr);
        event.preventDefault();
        event.stopPropagation();

        this.setCursor( isFull && start == end ? start : this.findCursorPosition(event.target.value.split(''), [key], start));

        return false;
    }

    handleDrop(event) {
        event.preventDefault();
        event.stopPropagation();

        return false;
    }

    updateInput(formattedArr) {
        let input = this.el.querySelector('input');
        let tempValue = formattedArr.join('').replace(/[^\d]/g, ''),
            res = this.applyDateTemplate(this.dateTemplate, tempValue),
            delta = res.length - tempValue.length;
        input.value = res;
    }

    applyDateTemplate(template, rawNumber) {
        let digits = rawNumber.split('');
        let parts = template.split('');
        let applied = template;
        let i = 0;
        for(let j = 0; i < parts.length && j < digits.length; i++) {
            if(this.types.indexOf(parts[i]) !== -1) {
                parts[i] = digits[j];
                j++;
            }
        }
        parts.splice(i, 1000);
        return parts.join('');
    }

    countBefore(array, regex, index) {

        let count = 0;
        if(index == undefined)
            index = 100000;
        for(let i = 0; i < index && i < array.length; i++) {
            if(array[i].match(regex)) {
                count++;
            }
        }
        return count;
    }

    findCursorPosition(valueArr, insertedArr, start) {
        let i,j;
        for(i = start, j = 0; i < valueArr.length && j < insertedArr.length; i++) {
            if(valueArr[i] == insertedArr[j])
                j++;
        }
        return i;
    }

    setCursor(position) {
        let input = this.el.querySelector('input');
        let value = input.value;
        if(value.length >= position) {
           input.setSelectionRange(position, position);
        }
    }

    getSelectionEnd() {
        let input = this.el.querySelector('input');
        return input.selectionEnd;
        
    }

    getSelectionStart() {
        let input = this.el.querySelector('input');
        return input.selectionStart;
    }

    selection() {
        let selection = window.getSelection() || document.getSelection();

    }
}
