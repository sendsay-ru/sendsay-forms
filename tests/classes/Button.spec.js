import { Button } from '../../src/classes/elements/Button';

describe('Button.spec.js', () => {
  const json = {
    textColor: '#ffffff',
    align: 'justify',
    text: 'Подписаться',
    type: 'button',
    backgroundColor: '#000000',
    borderRadius: 5,
  };

  it('Cheking Button render', () => {
    const dom = new Button(json);
    dom.render();
  });
});
