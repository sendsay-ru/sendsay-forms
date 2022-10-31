import { SingleChoiseField } from '../../src/classes/elements/SingleChoiseField';

describe('SingleChoiseField.spec.js', () => {
  const json = {
    type: 'radioField',
    field: {
      aid: 'a596',
      qid: 'q575',
      answers: {
        1: 'Мужчина',
        2: 'Женщина',
      },
      order: [1, 2],
    },
    appearance: {
      hidden: false,
    },
    content: {
      label: 'Пол',
    },
  };

  it('Cheking SingleChoiseField render', () => {
    const dom = new SingleChoiseField(json);
    dom.render();
  });
});
