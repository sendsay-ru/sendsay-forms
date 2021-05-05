export class MediaQuery {
  constructor(data, options) {
    this.data = data;
    this.options = options;
    this.makeStyle(data);
  }

  makeStyle() {
    let content = '';
    const { conditions } = this.data;
    const { selectors } = this.data;
    content += `${this.makeMediaCondition(conditions)}{`;
    // eslint-disable-next-line
    for (const key in selectors) {
      const rules = selectors[key];
      content += this.makeSelectorRule(key, rules);
    }
    content += ' }';

    const styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    if (styleEl.styleSheet) {
      styleEl.styleSheet.cssText = content;
    } else {
      styleEl.appendChild(document.createTextNode(content));
    }
    const children = document.head.querySelectorAll('*');
    styleEl.id = 'sendsay-generated-sheet';
    document.head.appendChild(styleEl, children[children.length - 1]);

    this.el = styleEl;
  }

  makeMediaCondition(conditions) {
    let condition = '@media ';
    for (let i = 0; i < conditions.length; i++) {
      condition += ` ${i === 0 ? '' : 'and'} ${conditions[i]}`;
    }
    return condition;
  }

  makeSelectorRule(selector, rules) {
    let result = ` ${selector} { `;
    // eslint-disable-next-line
    for (const key in rules) {
      const rule = rules[key];
      result += ` ${key}:${rule};`;
    }
    result += ' } ';
    return result;
  }
}
