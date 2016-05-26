import {DOMObject} from "./DOMObject.js";
import {Cookies} from "./../Cookies.js";
import {ElementFactory} from "./../ElementFactory.js"




export class Column extends DOMObject {

	constructor(data, parent) {
		super(data, parent);
	}

	initialize() {
		let appearance = this.data.appearance || {};
		this.template = '<div style = "width:100%">' +
						'<div class = "[%classes%]" style="[%style%]"">' +
						'</div></div>';
		this.baseClass = 'sendsay-column';
		this.applicableStyles = {
			'background-color': { param: 'backgroundColor' },
			'padding-bottom': { param: 'paddingBottom', postfix: 'px'},
			'padding-top': { param: 'paddingTop', postfix: 'px'},
			'padding-left': { param: 'paddingLeft', postfix: 'px'},
			'padding-right': { param: 'paddingRight', postfix: 'px'}
		};
	}

	build() {

		super.build();
		this.elements = [];
		let factory = new ElementFactory();
		let popupBody = this.el.querySelector('.sendsay-column');
		if(this.data.elements) {
			let elements = this.data.elements;
			for(var i=0; i < elements.length; i++) {
				let newEl = factory.make(elements[i], this);
				if(newEl) {
					this.elements.push(newEl);
					popupBody.appendChild(newEl.el);
				} 
			}
		}
		return this.el; 
	}

}

