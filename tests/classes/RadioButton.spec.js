import { RadioButton } from '../../src/classes/elements/RadioButton.js';

describe('RadioButton.spec.js', function () {
  var json = {
    field: {
      qid: 'test',
    },
    content: {
      label: 'Label',
      value: 'hw',
      checked: true,
    },
  };

  it('Cheking RadioButton render', function () {
    var dom = new RadioButton(json);
    dom.render();
  });
});
