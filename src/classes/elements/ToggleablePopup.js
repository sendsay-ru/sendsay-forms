import { Popup } from './Popup';
import { Text } from './Text';
import { MediaQuery } from '../MediaQuery';

export class ToggleablePopup extends Popup {
  initialize() {
    const appearance = this.data.appearance || {};
    const opened = this.data.openedByDefault;

    this.noWrapper = !appearance.overlayEnabled;
    this.steps = this.data.steps;
    this.curStep = 0;
    this.gainedData = {};

    this.template =
      `${
        !this.noWrapper
          ? '<div class="sendsay-wrapper [%wrapperClasses%]" style="[%overlayStyles%]">'
          : ''
      }<div class="[%classes%]" style="[%style%]">` +
      '<div class="sendsay-close">×</div>' +
      '<div class="sendsay-toggler">' +
      '<span class="sendsay-toggler-desktop">[%toggle%]</span>' +
      '<span class="sendsay-toggler-mobile">[%toggle%]</span>' +
      '</div>' +
      '<form action="" method="POST">' +
      '<div class="sendsay-content">' +
      '</div>' +
      '</form>' +
      `</div>${!this.noWrapper ? '</div>' : ''}`;

    this.baseClass = `sendsay-popup ${opened ? 'sendsay-animation-none' : ''}`;

    this.applicableStyles = {
      'background-color': { param: 'backgroundColor' },
      'padding-bottom': { param: 'paddingBottom', postfix: 'px' },
      'padding-top': { param: 'paddingTop', postfix: 'px' },
      'padding-left': { param: 'paddingLeft', postfix: 'px' },
      'padding-right': { param: 'paddingRight', postfix: 'px' },
      color: { param: 'textColor' },
      width: { param: 'width', prefix: 'px' },
      'border-radius': {
        param: 'borderRadius',
        template: '[%v%]px [%v%]px 0px 0px',
      },
    };

    this.maintextApplStyle = {
      'font-family': { param: 'font-family' },
      'font-size': { param: 'fontSize', postfix: 'px' },
      'text-align': { param: 'text-align', postfix: 'px' },
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
      this.data.appearance.labelFontFamily
    );

    this.mobileWith = 150;
  }

  makeMediaQuery() {
    const appearance = this.data.appearance || {};
    const { width } = appearance;

    const mediaQuery = new MediaQuery({
      conditions: ['screen', '(min-width: 320px)', `(max-width:${+width + 100}px)`],
      selectors: {
        '.sendsay-popup.sendsay-type-widget': {
          width: `${this.mobileWith}px !important`,
          '-webkit-flex-direction': 'column',
          '-ms-flex-direction': 'column',
          'flex-direction': 'column',
          animation: 'none',
          bottom: '50px',
          right: '50px',
          'border-radius': '0px !important',
        },
        '.sendsay-popup.sendsay-type-widget .sendsay-content': {
          display: 'none',
          transition: 'none',
        },
        '.sendsay-popup.sendsay-type-widget .sendsay-toggler ': {
          'font-size': '14px !important',
        },
        '.sendsay-popup.sendsay-type-widget.sendsay-opened  .sendsay-toggler': {
          display: 'none',
        },
        '.sendsay-popup.sendsay-type-widget.sendsay-opened .sendsay-content': {
          display: 'block',
          transition: 'none',
        },
        '.sendsay-popup.sendsay-type-widget.sendsay-opened': {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bottom: 'initial',
          right: 'initial',
          width: '300px !important',
        },
        '.sendsay-popup.sendsay-type-widget.sendsay-opened .sendsay-close': {
          display: 'block',
        },
        '.sendsay-popup.sendsay-type-widget.sendsay-right .sendsay-toggler .sendsay-toggler-mobile, .sendsay-popup.sendsay-type-widget.sendsay-left .sendsay-toggler .sendsay-toggler-mobile':
          {
            display: 'block',
          },
        '.sendsay-popup.sendsay-type-widget.sendsay-right .sendsay-toggler .sendsay-toggler-desktop, .sendsay-popup.sendsay-type-widget.sendsay-left .sendsay-toggler .sendsay-toggler-desktop':
          {
            display: 'none',
          },
      },
    });
    this.mediaQuery = mediaQuery;
  }

  makeSettings() {
    const settings = super.makeSettings();

    settings.toggle = new Text(this.data.toggle).build().outerHTML;

    return settings;
  }

  addEvents() {
    super.addEvents();
    this.addEvent('click', '.sendsay-toggler', this.handleTogglerClick.bind(this));
    this.addEvent('sendsay-form-image-load', '.sendsay-image', this.setSaneMaxHeight.bind(this));
  }

  removeEvents() {
    super.removeEvents();
    this.removeEvent('click', '.sendsay-toggler', this.handleTogglerClick.bind(this));
    this.removeEvent('sendsay-form-image-load', '.sendsay-image', this.setSaneMaxHeight.bind(this));
  }

  handleTogglerClick() {
    const el = this.noWrapper ? this.el : this.el.querySelector('.sendsay-popup');
    const contentEl = el.querySelector('.sendsay-content');

    if (el.classList.contains('sendsay-opened')) {
      el.classList.remove('sendsay-opened');
      contentEl.style.maxHeight = '0px';
    } else {
      el.classList.add('sendsay-opened');
      this.setSaneMaxHeight();
    }
  }

  submit() {
    const temp = super.submit();
    this.setSaneMaxHeight();
    return temp;
  }

  setSaneMaxHeight() {
    const el = this.noWrapper ? this.el : this.el.querySelector('.sendsay-popup');
    const contentEl = el.querySelector('.sendsay-content');
    contentEl.style.maxHeight = `${contentEl.scrollHeight}px`;
  }

  showErrorFor(qid, messageId) {
    super.showErrorFor(qid, messageId);
    this.setSaneMaxHeight();
  }

  handleClose() {
    const el = this.noWrapper ? this.el : this.el.querySelector('.sendsay-popup');
    const contentEl = el.querySelector('.sendsay-content');

    if (el.classList.contains('sendsay-opened') && this.steps.length - 1 !== this.curStep) {
      el.classList.remove('sendsay-opened');
      contentEl.style.maxHeight = `${0}px`;
    } else {
      this.hide();
    }
  }

  makeClasses() {
    let classes = super.makeClasses();
    if (this.curStep !== 0) {
      classes += ' sendsay-opened';
    }
    return classes;
  }

  show() {
    super.show();

    if (this.data.openedByDefault) {
      this.handleTogglerClick();
    }
  }

  afterRender() {
    if (this.curStep !== 0) {
      this.setSaneMaxHeight();
    }
  }

  proceedToNextStep() {
    let temp;
    const self = this;
    this.curStep++;
    if (this.curStep !== 0) {
      temp = this.data.appearance.animation;
      this.data.appearance.animation = 'none';
    }
    this.render();
    setTimeout(() => {
      self.data.appearance.animation = temp;
      if (self.noWrapper) {
        self.el.className = self.makeClasses();
      } else {
        self.el.querySelector('.sendsay-popup').className = self.makeClasses();
      }
    }, 100);
  }
}
