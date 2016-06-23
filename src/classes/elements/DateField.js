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
}
