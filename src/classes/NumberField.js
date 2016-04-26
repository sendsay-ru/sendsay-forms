import {Field} from "./Field.js";
export class NumberField extends Field {
	constructor(data, parent) {
		super(data, parent);
	}

	validate() {
		let isValid = super.validate();
		if(isValid) {
			let value = this.getValue();
			isValid = !value.match(/[\.xXeE]/) && !isNaN(+value);
			if(!isValid)
				this.showErrorMessage("Неверный формат целого числа");
		}
		return isValid;
	}
}
