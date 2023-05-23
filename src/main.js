/* eslint-disable func-names */
import { Popup } from './classes/elements/Popup';
import { PopupBar } from './classes/elements/PopupBar';
import { ToggleablePopup } from './classes/elements/ToggleablePopup';
import { Embedded } from './classes/elements/Embedded';
import { Connector } from './classes/Connector';
import { Form } from './classes/Form';
import EmbeddedFormWatcher from './classes/EmbeddedFormWatcher';

const DEFAULT_CONFIG = {
  forms: {
    css: {
      url: 'DEFAULT_PATH_TO_CSS',
    },
  },
};

(function () {
  const config = { ...DEFAULT_CONFIG, ...(window.SENDSAY_FORMS_CONFIG?.() || {}) };
  const loadCss = (callback) => {
    const cssId = '_sendsay-styles';

    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      let loaded = false;

      link.id = cssId;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = config.forms.css.url;
      link.media = 'all';

      const sibling = document.querySelector('#sendsay-generated-sheet');

      if (sibling) {
        document.head.insertBefore(link, sibling);
      } else {
        document.head.appendChild(link);
      }

      link.addEventListener('load', () => {
        link.removeEventListener('load', callback);

        if (!loaded) {
          loaded = true;

          callback();
        }
      });
    } else if (typeof callback === 'function') {
      callback();
    }
  };

  const activatePopup = function (url, options) {
    // eslint-disable-next-line compat/compat
    return new Promise((resolve) => {
      loadCss(() => {
        const connector = new Connector(url);
        const form = new Form(connector, options);

        resolve({
          runWatcher: () => form.runWatcher(),
          stopWatcher: () => form.stopWatcher(),
        });
      });
    });
  };

  const showPopup = function (data, options) {
    const localData = { ...data };

    return loadCss(() => {
      let DomConstructor;
      // eslint-disable-next-line default-case
      switch (localData.type) {
        case 'popup':
          DomConstructor = Popup;
          break;
        case 'bar':
          DomConstructor = PopupBar;
          break;
        case 'widget':
          localData.openedByDefault = true;

          DomConstructor = ToggleablePopup;
          break;
        case 'embedded':
          DomConstructor = Embedded;
          break;
      }

      const popup = new DomConstructor(localData);

      popup.activate(options);
    });
  };

  const embeddedFormWatcher = new EmbeddedFormWatcher(activatePopup);
  embeddedFormWatcher.start();

  window.SENDSAY = {
    config,
    activatePopup,
    showPopup,
  };
})();
