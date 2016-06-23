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

    makeSettings() {
        let field = this.data.field || {},
            content = this.data.content || {},
            appearance = this.data.appearance || {},
            settings = super.makeSettings();

        settings.label = this.escapeHTML(content.label || '');
        settings.placeholder = this.escapeHTML(content.placeholder || '');
        settings.qid = field.id || field.qid || '';
        settings.value = field.default || '';

        if (appearance.hidden) {
            settings.classes += ' sendsay-field-hidden';
        }
        if (field.required) {
            settings.label += '*';
        }

        return settings;
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
