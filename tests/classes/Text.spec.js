import { Text } from '../../src/classes/elements/Text';

describe('Text.spec.js', () => {
  const json = {
    type: 'text',
    content: {
      text: '<b style="font-size: 16 px;">Подписка на рассылку</b>',
    },
  };

  it('Cheking text render', () => {
    const dom = new Text(json);
    dom.render();
  });

  it('Cheking text makeStyles', () => {
    const dom = new Text(json);
    expect(dom.makeStyles()).toEqual({
      'text-align': 'left',
      'line-height': 'normal',
    });
  });
});
