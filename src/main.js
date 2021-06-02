/* eslint-disable func-names */
import { Popup } from './classes/elements/Popup';
import { PopupBar } from './classes/elements/PopupBar';
import { ToggleablePopup } from './classes/elements/ToggleablePopup';
import { Embedded } from './classes/elements/Embedded';
import { Connector } from './classes/Connector';
import { Form } from './classes/Form';
import { ATTRIBUTES } from './classes/attributes';

const DEFAULT_CONFIG = {
  forms: {
    css: {
      url: 'https://image.sendsay.ru/app/js/forms/forms.css',
    },
  },
};

(function () {
  const config = { ...DEFAULT_CONFIG, ...window.SENDSAY_FORMS_CONFIG?.() || {} };
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
    loadCss(() => {
      const connector = new Connector(url);
      const form = new Form(connector, options);
      return form;
    });
  };

  const showPopup = function (data, options) {
    loadCss(() => {
      let DomConstructor;
      // eslint-disable-next-line default-case
      switch (data.type) {
        case 'popup':
          DomConstructor = Popup;
          break;
        case 'bar':
          DomConstructor = PopupBar;
          break;
        case 'widget':
          DomConstructor = ToggleablePopup;
          break;
        case 'embedded':
          DomConstructor = Embedded;
          break;
      }
      const popup = new DomConstructor(data);
      popup.activate(options);
    });
  };

  const checkEmbeddedForms = () => {
    const elements = document.querySelectorAll(`[${ATTRIBUTES.EMBEDDED}]`);
    elements.forEach((el) => {
      const formId = el.getAttribute(ATTRIBUTES.EMBEDDED);
      if (!formId || el.hasAttribute(ATTRIBUTES.INIT)) {
        return;
      }
      el.setAttribute(ATTRIBUTES.INIT, true);
      activatePopup(`https://sendsay.ru/form/${formId}`, { el });
    });
  };

  const embeddedFormWatcher = () => {
    const callback = (mutationsList) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const { type, addedNodes } of mutationsList) {
        if (type !== 'childList' || !addedNodes) {
          return;
        }
        checkEmbeddedForms();
      }
    };

    const observer = new MutationObserver(callback);

    observer.observe(document, {
      attributes: false,
      childList: true,
      subtree: true,
    });
  };

  checkEmbeddedForms();
  embeddedFormWatcher();

  window.SENDSAY = {
    config,
    activatePopup,
    showPopup,
  };
}());
