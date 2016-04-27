
export class DOMObject {
	constructor(data, parent) {
		this.data = data;
		this.template = '<div></div>';
		this.baseClass = 'sendsay-main';
		this.parent = parent || null;
		this.applicableStyles = {

		};
	}

	makeElement() {
		let div = document.createElement('div'),
			element = this.applySettings(this.makeSettings());
		div.innerHTML = element;
		return div.firstChild;
	}

	makeSettings() {
		let data = this.data,
			settings = {
				classes: this.makeClasses(),
				style: this.convertStyles(this.makeStyles())
			};
		return settings;
	}

	makeStyles() {
		let styleObj = this.applyStyles(this.applicableStyles);
		return styleObj;
	}

	applyStyles(mapping) {
		let styles = {},
			data = this.data;
		for(var key in mapping) {
			let val = mapping[key];
			if(data[val.param] !== undefined) {
				styles[key] = data[val.param] + (val.postfix ? val.postfix : '');
			} else if(val.default) {
				styles[key] = val.default;
			}
		}
		return styles;
	}

	convertStyles(toConvert) {
		let styleObj = toConvert,
			styleStr = '';

		for(var key in styleObj)
			styleStr += ' ' + key + ':' + styleObj[key] + ';';
		return styleStr;
	}

	makeClasses() {
		return this.baseClass;
	}

	applySettings(settings) {
		settings = settings || {};
		let string = this.template;
		let templateParams = string.match(new RegExp('\\[% *[a-zA-Z0-9\\-]* *%\\]', 'g')) || [];
		for(let i=0; i<templateParams.length; i++) {
			let param = templateParams[i];
			param = param.substring(2, param.length-2);
			let paramValue = settings[param.trim()] || '';
			string = string.replace(new RegExp('\\[%' + param + '%\\]', 'g'), paramValue);
		}
		for(var key in settings) {
			
		}
		return string;
	}

	build() {
		this.el = this.makeElement();
		this.el.core = this;
		return this.el;
	}

	render() {
		let oldEl = this.el;
		this.removeEvents();
		this.build();
		this.addEvents();
		if(oldEl && oldEl.parentNode)
			oldEl.parentNode.replaceChild(this.el, oldEl);
	}

	addEvents() {

	}

	removeEvents() {

	}

	trigger(eventName, data) {
		let event, extra = { extra : data };
		if(CustomEvent && typeof CustomEvent === 'function') {
			event = new CustomEvent(eventName, { detail: extra });
		} else {
			event = document.createEvent('HTMLEvents');
			event.initEvent(eventName, true, true);
			event.detail = extra;
		}

		this.el.dispatchEvent(event);
	}

	extend(dest, source) {
		for(let key in source) {
			dest[key] = source[key];
		}
		return dest;
	}
}