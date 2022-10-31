import { Field } from '../../src/classes/elements/Field';

describe('Field.spec.js', () => {
  const json = {
    type: 'textField',
    content: {
      label: 'Адрес подписчика',
      placeholder: '',
    },
    appearance: {
      hidden: false,
    },
    field: {
      qid: '_member_email',
      aid: 'member',
      required: true,
      default: '',
    },
  };

  it('Cheking Field render', () => {
    const dom = new Field(json);
    dom.render();
  });

  it('Cheking not required Field validation', () => {
    json.field.required = false;
    const dom = new Field(json);

    expect(dom.validate()).toEqual(true);
  });

  it('Cheking required empty Field validation', () => {
    json.field.required = true;
    const dom = new Field(json);

    expect(dom.validate()).toEqual(false);
  });

  it('Cheking required not empty Field validation', () => {
    json.field.required = true;
    const dom = new Field(json);
    dom.el.querySelector('input').value = 'test';
    expect(dom.validate()).toEqual(true);
  });
});
