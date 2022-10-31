import { CheckBox } from '../../src/classes/elements/CheckBox';

describe('CheckBox.spec.js', () => {
  const json = {
    field: {
      qid: 'test',
    },
    content: {
      label: 'Label',
      value: 'hw',
      checked: true,
    },
  };

  it('Cheking CheckBox render', () => {
    const dom = new CheckBox(json);
    dom.render();
  });
});
