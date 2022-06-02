import { DOMObject } from './DOMObject';

export class ImageElement extends DOMObject {
  initialize() {
    this.template =
      '<div class="[%classes%]" style="[%wrapperstyle%]">' +
      '<img src="[%url%]" style="[%style%]/>" />' +
      '</div>';
    this.wrapperApplStyles = {
      'padding-bottom': { param: 'paddingBottom', postfix: 'px' },
      'padding-top': { param: 'paddingTop', postfix: 'px' },
      'padding-left': { param: 'paddingLeft', postfix: 'px' },
      'padding-right': { param: 'paddingRight', postfix: 'px' },
    };

    this.baseClass = 'sendsay-image';
  }

  addEvents() {
    if (this.el) {
      this.el.querySelector('img').onload = this.handleLoad.bind(this);
    }
  }

  handleLoad() {
    this.trigger('sendsay-image-load');
  }

  makeStyles() {
    const styleObj = super.makeStyles();
    const data = this.data.appearance || {};
    if (data.extended) {
      styleObj.width = '100%';
    } else {
      styleObj['max-width'] = '100%';
    }
    return styleObj;
  }

  makeSettings() {
    const data = this.data.content || {};
    const settings = super.makeSettings();
    settings.wrapperstyle = this.makeWrapperStyle();
    settings.url = data.url;
    return settings;
  }

  makeWrapperStyle() {
    let style = {};
    const data = this.data.appearance || {};

    style['text-align'] = data.align;
    style = this.extend(style, this.applyStyles(this.wrapperApplStyles));
    return this.convertStyles(style);
  }
}
