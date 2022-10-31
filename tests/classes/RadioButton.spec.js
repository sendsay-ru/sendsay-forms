import { RadioButton } from '../../src/classes/elements/RadioButton';

describe('RadioButton.spec.js', () => {
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

  it('Cheking RadioButton render', () => {
    const dom = new RadioButton(json);
    dom.render();
  });
});
