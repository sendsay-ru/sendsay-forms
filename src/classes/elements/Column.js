import { DOMObject } from './DOMObject';
import { ElementFactory } from '../ElementFactory';

export class Column extends DOMObject {
  initialize() {
    this.template =
      '<div class="sendsay-columnwrapper" style = "width:100%; [%wrapperstyle%]">' +
      '<div class="[%classes%]" style="[%style%]">' +
      '</div></div>';
    this.baseClass = 'sendsay-column';
    this.applicableStyles = {
      'background-color': { param: 'backgroundColor' },
      'padding-bottom': { param: 'paddingBottom', postfix: 'px' },
      'padding-top': { param: 'paddingTop', postfix: 'px' },
      'padding-left': { param: 'paddingLeft', postfix: 'px' },
      'padding-right': { param: 'paddingRight', postfix: 'px' },
    };

    this.wrapperApplStyles = {
      flex: { param: 'flex' },
    };
  }

  build() {
    super.build();
    this.elements = [];
    const factory = new ElementFactory();
    const popupBody = this.el.querySelector('.sendsay-column');
    if (this.data.elements) {
      const { elements } = this.data;
      for (let i = 0; i < elements.length; i++) {
        const newEl = factory.make(elements[i], this);
        if (newEl) {
          this.elements.push(newEl);
          popupBody.appendChild(newEl.el);
        }
      }
    }
    return this.el;
  }

  makeSettings() {
    const settings = super.makeSettings();
    settings.wrapperstyle = this.makeWrapperStyle();
    return settings;
  }

  makeWrapperStyle() {
    let style = {};
    style = this.extend(style, this.applyStyles(this.wrapperApplStyles));
    return this.convertStyles(style);
  }
}
