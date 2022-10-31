import { NumberField } from '../../src/classes/elements/NumberField';

describe('NumberField.spec.js', () => {
  const json = {
    type: 'intField',
    field: {
      aid: 'a596',
      qid: 'q349',
    },
    content: {
      placeholder: '',
      label: 'Возраст',
    },
    appearance: {
      hidden: false,
    },
  };

  it('Cheking NumberField render', () => {
    const dom = new NumberField(json);
    dom.render();
  });

  it('Cheking not required empty NumberField validation', () => {
    const dom = new NumberField(json);

    expect(dom.validate()).toEqual(true);
  });

  it('Cheking NumberField with valid number validation', () => {
    const dom = new NumberField(json);
    dom.el.querySelector('input').value = '234';
    expect(dom.validate()).toEqual(true);
  });

  it('Cheking NumberField with invalid number validation', () => {
    const dom = new NumberField(json);
    dom.el.querySelector('input').value = '2d34';
    expect(dom.validate()).toEqual(false);
  });
});
