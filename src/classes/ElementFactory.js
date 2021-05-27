import { Field } from './elements/Field';
import { NumberField } from './elements/NumberField';
import { Button } from './elements/Button';
import { Text } from './elements/Text';
import { Spacer } from './elements/Spacer';
import { ImageElement } from './elements/ImageElement';
import { SingleChoiseField } from './elements/SingleChoiseField';
import { MultipleChoiseField } from './elements/MultipleChoiseField';
import { DateField } from './elements/DateField';

class Factory {
  make() {
    return {};
  }
}

export class ElementFactory extends Factory {
  make(data, parent) {
    // eslint-disable-next-line default-case
    switch (data.type) {
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
        switch (data.subtype) {
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
      case 'button':
        return new Button(data, parent);
    }
  }
}
