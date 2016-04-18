
export class DOMObject {
	constructor() {
		this.template = '<div></div>';
	}

	makeElement() {
		let div = document.createElement('div'),
			element = this.applySettings(this.makeSettings());
		div.innerHTML = element;
		return div.firstChild;
	}

	makeSettings() {
		let data = this.data,
			settings = {};
		settings.style = this.makeStyles();
		return settings;
	}

	applySettings(settings) {
		let string = this.template;
		for(var key in settings) {
			string = string.replace('[%' + key + '%]', settings[key]);
		}
		return string;
	}

	build() {
		this.el = this.makeElement();
		this.el.core = this;
		return this.el;
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
}