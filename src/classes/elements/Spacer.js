import { DOMObject } from './DOMObject';

export class Spacer extends DOMObject {
  initialize() {
    this.template = '<div class="[%classes%]" style="[%style%]"></div>';

    this.baseClass = 'sendsay-spacer';
    this.applicableStyles = {
      height: { param: 'height', postfix: 'px' },
    };
  }
}
