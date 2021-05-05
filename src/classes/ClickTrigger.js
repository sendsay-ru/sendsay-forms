export default class ClickTrigger {
  constructor() {
    this.attributes = ['data-sendsay-form-subscribe'];
  }

  watch(resolve) {
    document.addEventListener('click', (e) => {
      if (this.attributes.some(attr => e.target.hasAttribute(attr))) {
        resolve('click');
      }
    });
  }
}
