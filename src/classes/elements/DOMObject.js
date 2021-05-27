export class DOMObject {
  constructor(data, parent) {
    this.data = data;
    this.parent = parent || null;
    if (parent && parent.general) { this.general = this.extend({}, parent.general); }
    this.initialize();
    this.render();
  }

  escapeHTML(html) {
    const escape = document.createElement('textarea');
    escape.textContent = html;
    return escape.innerHTML;
  }

  escapeStyle(style) {
    if (this.style) { return style.replace(/"/g, "'"); }
  }

  initialize() {
    this.template = '<div></div>';
    this.baseClass = 'sendsay-main';
    this.applicableStyles = {};
  }

  makeElement() {
    const div = document.createElement('div');
    const element = this.applySettings(this.makeSettings());
    div.innerHTML = element;
    return div.firstChild;
  }

  makeSettings() {
    const settings = {
      classes: this.makeClasses(),
      style: this.convertStyles(this.makeStyles()),
    };
    return settings;
  }

  makeStyles() {
    const styleObj = this.applyStyles(this.applicableStyles);
    return styleObj;
  }

  applyStyles(mapping) {
    const styles = {};
    const data = this.data.appearance || {};
    const general = (this.general && this.general.appearance) || {};

    // eslint-disable-next-line
    for (const key in mapping) {
      const val = mapping[key];
      // eslint-disable-next-line eqeqeq
      if (data[val.param] !== undefined || general[val.param] != undefined) {
        const value = data[val.param] || general[val.param];
        if (!val.template) {
          styles[key] = (data[val.param] || general[val.param])
            + (val.postfix ? val.postfix : '');
        } else {
          styles[key] = this.processTemplate(val.template, { v: value });
        }
      } else if (val.default) {
        styles[key] = val.default;
      }
    }
    return styles;
  }

  convertStyles(toConvert) {
    const styleObj = toConvert;
    let styleStr = '';

    // eslint-disable-next-line
    for (const key in styleObj) { styleStr += ` ${key}:${styleObj[key]};`; }
    return styleStr;
  }

  makeClasses() {
    return this.baseClass;
  }

  applySettings(settings) {
    return this.processTemplate(this.template, settings);
  }

  processTemplate(template, settings) {
    // eslint-disable-next-line no-param-reassign
    settings = settings || {};
    let string = template;
    const templateParams = string.match(new RegExp('\\[% *[a-zA-Z0-9\\-]* *%\\]', 'g')) || [];
    for (let i = 0; i < templateParams.length; i++) {
      let param = templateParams[i];
      param = param.substring(2, param.length - 2);
      const paramValue = settings[param.trim()] || '';
      string = string.replace(
        new RegExp(`\\[%${param}%\\]`, 'g'),
        paramValue,
      );
    }
    return string;
  }

  build() {
    this.el = this.makeElement();
    this.el.core = this;
    return this.el;
  }

  render() {
    const oldEl = this.el;
    this.removeEvents();
    this.build();
    this.addEvents();
    if (oldEl && oldEl.parentNode) { oldEl.parentNode.replaceChild(this.el, oldEl); }
    this.afterRender();
  }

  afterRender() {}

  addEvents() {}

  addEvent(event, selector, callback) {
    this._eventAction(true, event, selector, callback);
  }

  removeEvents() {}

  removeEvent(event, selector, callback) {
    this._eventAction(false, event, selector, callback);
  }

  _eventAction(toAdd, event, selector, callback) {
    if (!this.el) { return; }
    if (callback === undefined && typeof selector === 'function') {
      // eslint-disable-next-line no-param-reassign
      callback = selector;
      // eslint-disable-next-line no-param-reassign
      selector = null;
    }
    const target = selector ? this.el.querySelector(selector) : this.el;
    if (target) {
      // eslint-disable-next-line no-unused-expressions
      toAdd
        ? target.addEventListener(event, callback)
        : target.removeEventListener(event, callback);
    }
  }

  trigger(eventName, data) {
    let event;
    const extra = { extra: data };
    if (CustomEvent && typeof CustomEvent === 'function') {
      event = new CustomEvent(eventName, { detail: extra });
    } else {
      event = document.createEvent('HTMLEvents');
      event.initEvent(eventName, true, true);
      event.detail = extra;
    }

    this.el.dispatchEvent(event);
  }

  extend(dest, source) {
    // eslint-disable-next-line no-param-reassign
    dest = dest || {};
    // eslint-disable-next-line no-param-reassign
    source = source || {};
    // eslint-disable-next-line no-restricted-syntax
    for (const key in source) {
      if (dest[key] instanceof Object && source[key] instanceof Object) {
        // eslint-disable-next-line no-param-reassign
        dest[key] = this.extend(dest[key], source[key]);
      } else {
        // eslint-disable-next-line no-param-reassign
        dest[key] = source[key];
      }
    }
    return dest;
  }
}
