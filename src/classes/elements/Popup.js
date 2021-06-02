import { DOMObject } from './DOMObject';
import { MediaQuery } from '../MediaQuery';
import { Column } from './Column';
import { Field } from './Field';
import { Button } from './Button';
import closeIcon from '../../icons/close';

export class Popup extends DOMObject {
  initialize() {
    this.isShow = false;
    const appearance = this.data.appearance || {};

    this.noWrapper = !appearance.overlayEnabled;
    this.steps = this.data.steps;
    this.curStep = 0;
    this.gainedData = {};
    this.template = `${`${!this.noWrapper
      ? '<div class = "sendsay-wrapper [%wrapperClasses%]" style="[%overlayStyles%]">'
      : ''
    }<div class = "[%classes%]" style="[%style%]"">`
      + '<div class = "sendsay-close sendsay-close--with-icon">'}${
      closeIcon
    }</div>`
      + '<div class = "sendsay-content">'
      + '</div>'
      + `</div>${
        !this.noWrapper ? '</div>' : ''}`;

    this.baseClass = 'sendsay-popup';
    this.applicableStyles = {
      'background-color': { param: 'backgroundColor' },
      'border-radius': { param: 'borderRadius', postfix: 'px' },
      'padding-bottom': { param: 'paddingBottom', postfix: 'px' },
      'padding-top': { param: 'paddingTop', postfix: 'px' },
      'padding-left': { param: 'paddingLeft', postfix: 'px' },
      'padding-right': { param: 'paddingRight', postfix: 'px' },
      width: { param: 'width', postfix: 'px' },
      color: { param: 'textColor' },
    };

    this.applOverlayStyles = {
      'background-color': { param: 'overlayColor' },
    };

    appearance.position = appearance.position || 'centered';

    this.general = {};
    this.general.appearance = {};
    this.general.appearance.textColor = this.data.appearance.textColor;
    this.general.appearance.labelTextColor = this.data.appearance.labelTextColor;
    this.general.appearance.labelFontSize = this.data.appearance.labelFontSize;
    this.general.appearance.labelFontFamily = this.escapeStyle(
      this.data.appearance.labelFontFamily,
    );
  }

  makeMediaQuery() {
    const appearance = this.data.appearance || {};
    const { width } = appearance;

    const mediaQuery = new MediaQuery({
      conditions: [
        'screen',
        '(min-width: 320px)',
        `(max-width:${+width + 100}px)`,
      ],
      selectors: {
        '.sendsay-popup': {
          width: '300px !important',
          '-webkit-flex-direction': 'column',
          '-ms-flex-direction': 'column',
          'flex-direction': 'column',
          animation: 'none',
        },
        '.sendsay-popup.sendsay-left, .sendsay-popup.sendsay-right': {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animation: 'none',
          bottom: 'initial',
        },
        '.sendsay-popup .sendsay-content': {
          '-webkit-flex-direction': 'column',
          '-ms-flex-direction': 'column',
          'flex-direction': 'column',
        },
      },
    });
    this.mediaQuery = mediaQuery;
  }

  build() {
    super.build();
    this.columns = [];
    if (this.steps?.length > 0) {
      const curStep = this.steps[this.curStep];
      const popupBody = this.el.querySelector('.sendsay-content');
      if (curStep.columns) {
        const { columns } = curStep;
        for (let i = 0; i < columns.length; i++) {
          const newEl = new Column(columns[i], this);
          if (newEl) {
            this.columns.push(newEl);
            popupBody.appendChild(newEl.el);
          }
        }
      }
    }
    if (this.demo || this.container) {
      const el = this.el.querySelector('.sendsay-popup');
      this.el.style.position = 'absolute';
      if (el) { el.style.position = 'absolute'; }
    }

    return this.el;
  }

  addEvents() {
    if (!this.noWrapper) {
      this.addEvent('click', this.handleWrapperClick.bind(this));
      this.addEvent(
        'click',
        '.sendsay-popup',
        this.handlePopupClick.bind(this),
      );
    } else { this.addEvent('click', this.handlePopupClick.bind(this)); }
    this.addEvent(
      'sendsay-click',
      '.sendsay-button',
      this.handleButtonClick.bind(this),
    );
    this.addEvent('wheel', this.handleWheel.bind(this));
    this.addEvent('DOMMouseScroll', this.handleWheel.bind(this));

    this.addEvent('click', '.sendsay-close', this.handleClose.bind(this));
    this.addEvent('keyup', this.handleKeyPress.bind(this));
  }

  removeEvents() {
    if (!this.noWrapper) {
      this.removeEvent('click', this.handleWrapperClick.bind(this));
      this.removeEvent(
        'click',
        '.sendsay-popup',
        this.handlePopupClick.bind(this),
      );
    } else { this.removeEvent('click', this.handlePopupClick.bind(this)); }
    this.removeEvent(
      'sendsay-click',
      '.sendsay-button',
      this.handleButtonClick.bind(this),
    );
    this.removeEvent('wheel', this.handleWheel.bind(this));
    this.removeEvent('DOMMouseScroll', this.handleWheel.bind(this));
    this.removeEvent('click', '.sendsay-close', this.handleClose.bind(this));
    this.removeEvent('keyup', this.handleKeyPress.bind(this));
  }

  makeSettings() {
    const settings = super.makeSettings();
    settings.wrapperClasses = this.data.noAnimation
      ? 'sendsay-noanimation'
      : '';
    settings.overlayStyles = this.convertStyles(
      this.applyStyles(this.applOverlayStyles),
    );
    return settings;
  }

  makeClasses() {
    const { appearance, settings } = this.data || {};
    let classes = super.makeClasses();
    classes += this.data.endDialog ? ' sendsay-enddialog' : '';
    classes += ` sendsay-animation-${appearance.animation || 'none'}`;
    classes += ` sendsay-${appearance.position || 'center'}`;
    classes += ` sendsay-type-${this.data.type}`;
    if (settings?.canClose) {
      classes += ' sendsay--can-close';
    }
    if (this.steps.length - 1 === this.curStep) { classes += ' sendsay-laststep'; }
    return classes;
  }

  activate(options) {
    this.demo = options && options.demo;
    this.container = options && options.el;
    this.ignoreKeyboard = options && options.ignoreKeyboard;
    this.show(options);
  }

  searchForElements(comparator) {
    const found = [];
    if (!comparator || typeof comparator !== 'function') { return found; }
    const { columns } = this;
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      const { elements } = column;
      for (let j = 0; j < elements.length; j++) {
        // eslint-disable-next-line no-unused-expressions
        comparator(elements[j]) && found.push(elements[j]);
      }
    }
    return found;
  }

  showEndDialog() {
    this.isSubmitted = true;
    this.proceedToNextStep();
  }

  onSubmitFail() {}

  show() {
    this.isShow = true;
    this.makeMediaQuery();
    if (!this.container) { document.querySelector('body').appendChild(this.el); } else {
      this.el.style.position = 'absolute';
      if (!this.noWrapper) { this.el.querySelector('.sendsay-popup').style.position = 'absolute'; }
      this.container.appendChild(this.el);
    }
  }

  hide() {
    this.isShow = false;
    if (this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);

      if (this.mediaQuery) {
        this.mediaQuery.el.remove();
        this.mediaQuery = null;
      }
    }
  }

  submit() {
    const elements = this.searchForElements(element => element instanceof Field || element instanceof Button);
    let isValid = true;
    const data = {};
    let button;

    if (elements) {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element instanceof Field) {
          // if(element.getValue() !== '')
          data[
            element.data.field.id || element.data.field.qid
          ] = element.getValue();
          isValid = element.validate() && isValid;
        }
        if (element instanceof Button) {
          button = element;
        }
      }
    }
    if (isValid) {
      this.extend(this.gainedData, data);
      if (this.steps.length - 2 !== this.curStep) {
        this.proceedToNextStep();
      } else {
        button.el.querySelector('input').classList.add('sendsay-loading');
        this.trigger('sendsay-success', this.gainedData);
      }
    }
    return isValid;
  }

  proceedToNextStep() {
    this.curStep++;
    if (this.curStep !== 0) {
      this.data.appearance.animation = 'none';
    }
    this.render();
  }

  // eslint-disable-next-line no-dupe-class-members
  onSubmitFail() {
    const elements = this.searchForElements(element => element instanceof Button);
    if (elements[0]) {
      elements[0].el.querySelector('input').classList.remove('sendsay-loading');
    }
  }

  showErrorFor(qid, message) {
    const elements = this.searchForElements(element => element instanceof Field);
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (
        element.data.field
        && (element.data.field.qid === qid || element.data.field.id === qid)
      ) {
        element.showErrorMessage(message);
      }
    }
  }

  handleWrapperClick() {
    // this.hide();
  }

  handleWheel(event) {
    const delta = Math.sign(event.wheelDelta);
    if (event.target.classList.contains('sendsay-wrapper')) {
      event.preventDefault();
    } else {
      const el = this.noWrapper
        ? this.el
        : this.el.querySelector('.sendsay-popup');
      if (
        (delta === -1 && el.clientHeight + el.scrollTop === el.scrollHeight)
        || (delta === 1 && el.scrollTop === 0)
      ) { event.preventDefault(); }
    }
    return false;
  }

  handlePopupClick(event) {
    event.stopPropagation();
  }

  handleButtonClick() {
    if (this.isSubmitted) {
      this.hide();
    } else if (this.submit() && this.demo) {
      this.showEndDialog();
    }
  }

  handleKeyPress(event) {
    if (this.ignoreKeyboard) {
      return;
    }
    // eslint-disable-next-line default-case
    switch (event.keyCode) {
      case 13: // Enter
        if (this.isSubmitted) {
          this.hide();
        } else if (this.submit() && this.demo) {
          this.showEndDialog();
        }
        break;
      case 27: // Esc
        this.hide();
        break;
    }
  }

  handleClose() {
    this.hide();
  }
}
