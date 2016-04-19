
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
				style: this.makeStyles()
			};
		return settings;
	}

	makeStyles() {
		let styleString = '';
		if(this.data && this.data.styles) {
			let styles = this.data.styles;
			for(var key in styles)
				styleString += key + ':' + styles[key] + ';';
		}
		return styleString;
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