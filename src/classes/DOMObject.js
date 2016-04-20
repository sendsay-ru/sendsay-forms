
export class DOMObject {
	constructor() {
		this.template = '<div></div>';
		this.baseClass = 'sendsay-main';
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
				style: this.convertStyles()
			};
		return settings;
	}

	makeStyles() {
		let styleObj = {};
		if(this.data && this.data.styles) {
			let styles = this.data.styles;
			for(var key in styles)
				styleObj[key] = styles[key];
		}
		return styleObj;
	}

	convertStyles() {
		let styleObj = this.makeStyles(),
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