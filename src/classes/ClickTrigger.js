import { ATTRIBUTES } from './attributes';

export default class ClickTrigger {
  constructor() {
    this.attributes = [ATTRIBUTES.SUBSCRIBE];
  }

  watch(resolve) {
    document.addEventListener('click', (e) => {
      const attr = e.target.getAttribute(ATTRIBUTES.SUBSCRIBE);
      if (!attr) {
        return;
      }
      resolve(attr);
    });
  }
}
