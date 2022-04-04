import { Popup } from './Popup';

export class Embedded extends Popup {
  initialize() {
    super.initialize();
    this.makeBorder();
    this.makeShadow();
    this.applicableStyles.display = {
      default: 'none',
    };
  }

  makeBorder() {
    const {
      borderEnabled,
      borderWidth,
      borderColor,
    } = this.data.appearance || {};

    if (borderEnabled) {
      this.applicableStyles.border = {
        default: `${borderWidth}px solid ${borderColor}`,
      };
    }
  }

  makeShadow() {
    const {
      shadowEnabled,
      shadowOffsetX,
      shadowOffsetY,
      shadowBlur,
      shadowSpread,
      shadowColor,
    } = this.data.appearance || {};

    if (shadowEnabled) {
      this.applicableStyles['box-shadow'] = {
        default: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px ${shadowSpread}px ${shadowColor}`,
      };
    }
  }

  activate(options) {
    if (options.el) {
      super.activate(options);
      return;
    }

    const el = document.querySelector(`[data-sendsay-form-root="${options.formId}"]`);

    if (!el) {
      return;
    }

    el.innerHTML = '';

    super.activate({
      ...options,
      el,
    });
  }

  handleWheel() {
    return false;
  }

  handleKeyPress(event) {
    const canClose = this.data.settings?.canClose;
    if (event.keyCode === 27 && ((this.curStep === 0) || (this.curStep === 1 && !canClose))) {
      return;
    }
    super.handleKeyPress(event);
  }
}
