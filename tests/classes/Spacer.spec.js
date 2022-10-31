import { Spacer } from '../../src/classes/elements/Spacer';

describe('Spacer.spec.js', () => {
  const json = {
    type: 'spacer',
    appearance: {
      height: 38,
    },
  };

  it('Cheking Spacer render', () => {
    const dom = new Spacer(json);
    dom.render();
  });
});
