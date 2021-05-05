import { DOMObject } from './DOMObject';

export class Text extends DOMObject {
  initialize() {
    this.template = '<div class = "sendsay-text" style="[%style%]"">[%text%]</div>';
    this.baseClass = 'sendsay-text';
    this.applicableStyles = {
      'text-align': { param: 'align', default: 'left' },
      'line-height': { param: 'lineHeight', default: 'normal' },
      'padding-bottom': { param: 'paddingBottom', postfix: 'px' },
      'padding-top': { param: 'paddingTop', postfix: 'px' },
      'padding-left': { param: 'paddingLeft', postfix: 'px' },
      'padding-right': { param: 'paddingRight', postfix: 'px' },
      color: { param: 'textColor' },
    };
  }

  build() {
    return super.build();
  }

  makeSettings() {
    const content = this.data.content || {};
    const settings = super.makeSettings();
    settings.text = content.text || '';
    return settings;
  }
}
