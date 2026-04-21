/* eslint-env jasmine */
import EmbeddedFormWatcher from '../../src/classes/EmbeddedFormWatcher';

describe('EmbeddedFormWatcher.spec.js', () => {
  afterEach(() => {
    delete window.__sendsayTMInstance;
  });

  it('Does not start watcher when sendsay-tm instance exists', () => {
    const watcher = new EmbeddedFormWatcher(() => {});

    window.__sendsayTMInstance = {
      destroy() {},
    };

    spyOn(watcher, 'checkEmbeddedForms');
    spyOn(watcher, 'embeddedFormWatcher');
    spyOn(document, 'addEventListener');

    watcher.start();

    expect(watcher.checkEmbeddedForms).not.toHaveBeenCalled();
    expect(document.addEventListener).not.toHaveBeenCalled();
    expect(watcher.embeddedFormWatcher).not.toHaveBeenCalled();
  });
});
