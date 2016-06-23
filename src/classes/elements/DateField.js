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
        this.dateTemplate = 'dd/dd/dddd';
        switch(this.data.content.accuracy) {
            case 'ys':
                this.dateTemplate = 'dd/dd/dddd dd:dd:dd';
                break;
            case 'ym':
                this.dateTemplate = 'dd/dd/dddd dd:dd';
                break;
            case 'yh':
                this.dateTemplate = 'dd/dd/dddd dd';
                break;
            case 'yd':
                this.dateTemplate = 'dd/dd/dddd';
                break;
        }

    }

    validate() {
        let isValid = super.validate();
        if (isValid) {
            let value = this.getValue();
            isValid = !value.match(/[\.xXeE]/) && !isNaN(+value);
            if (!isValid)
                this.showErrorMessage("Неверный формат целого числа");
        }
        return isValid;
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

        this.setCursor( isFull ? start : this.findCursorPosition(event.target.value.split(''), [key], start));

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
            if(parts[i] == 'd') {
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
