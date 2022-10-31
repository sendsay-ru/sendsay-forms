import { MultipleChoiseField } from '../../src/classes/elements/MultipleChoiseField';

describe('MultipleChoiseField.spec.js', () => {
  const json = {
    type: 'checkboxField',
    field: {
      aid: 'a596',
      qid: 'q244',
      answers: {
        1: 'Iphone',
        2: 'Samsung',
        3: 'LG',
        4: 'Nokia',
      },
      order: [1, 2, 3, 4],
      default: ['1', '3'],
    },
    appearance: {
      hidden: false,
    },
    content: {
      label: 'Любимая техника',
    },
  };

  it('Cheking MultipleChoiseField render', () => {
    const dom = new MultipleChoiseField(json);
    dom.render();
  });

  it('Cheking MultipleChoiseField getValue from defaults', () => {
    const dom = new MultipleChoiseField(json);
    expect(dom.getValue()).toEqual(['1', '3']);
  });

  it('Cheking MultipleChoiseField getValue validation with values', () => {
    const local = JSON.parse(JSON.stringify(json));
    local.field.required = true;
    const dom = new MultipleChoiseField(local);
    expect(dom.validate()).toEqual(true);
  });

  it('Cheking MultipleChoiseField getValue validation without values', () => {
    const local = JSON.parse(JSON.stringify(json));
    local.field.required = true;
    local.field.default = [];
    const dom = new MultipleChoiseField(local);
    expect(dom.validate()).toEqual(false);
  });

  it('Cheking MultipleChoiseField getValue validation without values 2', () => {
    const local = JSON.parse(JSON.stringify(json));
    local.field.required = true;
    delete local.field.default;
    const dom = new MultipleChoiseField(local);
    expect(dom.validate()).toEqual(false);
  });
});
