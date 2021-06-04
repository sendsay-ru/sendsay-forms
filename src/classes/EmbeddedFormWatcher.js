import { ATTRIBUTES } from './attributes';

class EmbeddedFormWatcher {
  constructor(activatePopup) {
    this.activatePopup = activatePopup;
  }

  start = () => {
    this.checkEmbeddedForms();
    document.addEventListener('DOMContentLoaded', this.checkEmbeddedForms);
    this.embeddedFormWatcher();
  };

  checkEmbeddedForms = () => {
    const elements = document.querySelectorAll(`[${ATTRIBUTES.EMBEDDED}]`);
    elements.forEach((el) => {
      const formId = el.getAttribute(ATTRIBUTES.EMBEDDED);
      if (!formId || el.hasAttribute(ATTRIBUTES.INIT)) {
        return;
      }
      el.setAttribute(ATTRIBUTES.INIT, true);
      this.activatePopup(`https://sendsay.ru/form/${formId}`, { el });
    });
  };

  embeddedFormWatcher = () => {
    const callback = (mutationsList) => {
      // eslint-disable-next-line no-restricted-syntax
      for (const { type, addedNodes } of mutationsList) {
        if (type !== 'childList' || !addedNodes) {
          return;
        }
        this.checkEmbeddedForms();
      }
    };

    const observer = new MutationObserver(callback);

    observer.observe(document, {
      attributes: false,
      childList: true,
      subtree: true,
    });
  };
}

export default EmbeddedFormWatcher;
