import {Field} from "./elements/Field.js";
import {NumberField} from "./elements/NumberField.js";
import {Button} from "./elements/Button.js";
import {Text} from "./elements/Text.js";
import {Spacer} from "./elements/Spacer.js";
import {ImageElement} from "./elements/ImageElement.js";
import {SingleChoiseField} from "./elements/SingleChoiseField.js";
import {MultipleChoiseField} from "./elements/MultipleChoiseField.js";
import {DateField} from "./elements/DateField.js";

class Factory {
	constructor() {

	}

	make() {
		return {};
	}
}

export class ElementFactory extends Factory {
	constructor() {
		super();
	}

	make(data, parent) {
		switch(data.type) {
			case 'text':
				return new Text(data, parent);
			case 'intField':
				return new NumberField(data, parent);
			case 'textField':
				return new Field(data, parent);
			case 'radioField':
				return new SingleChoiseField(data, parent);
			case 'checkboxField':
				return new MultipleChoiseField(data, parent);
			case 'dateField':
				return new DateField(data, parent);
			case 'int':
				return new NumberField(data, parent);
			case 'free':
				return new Field(data, parent);
			case 'image':
				return new ImageElement(data, parent);
			case 'spacer':
				return new Spacer(data, parent);
			case 'field':
				switch(data.subtype) {
					case 'int': 
						return new NumberField(data, parent);
					case '1m':
						return new SingleChoiseField(data, parent);
					case 'nm':
						return new MultipleChoiseField(data, parent);
					case 'free':
					default:
						return new Field(data, parent);	
				}
				break;
			case 'button':
				return new Button(data, parent);
		}
	} 
}
