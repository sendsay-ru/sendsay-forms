
export class DOMObject {
	constructor() {
		this.template = '<div></div>';
		this.baseClass = 'sendsay-main';
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
			if(data[val.param]) {
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
		let string = this.template;
		for(var key in settings) {
			string = string.replace(new RegExp('\\[%' + key + '%\\]', 'g'), settings[key]);
		}
		return string;
	}

	build() {
		this.el = this.makeElement();
		this.el.core = this;
		return this.el;
	}

	rerender() {
		let old = this.el;
		this.removeEvents();
		if(old.parentNode) {
			old.parentNode.replaceChild(this.build(), old)
		}
		this.addEvents();
	}

	addEvents() {

	}

	removeEvents() {

	}



}