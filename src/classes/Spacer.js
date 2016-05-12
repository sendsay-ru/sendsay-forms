import {DOMObject} from "./DOMObject.js";


export class Spacer extends DOMObject {
	constructor(data, parent) {
		super(data, parent);
	}

	initialize() {
		this.template = '<div class = "[%classes%]" style="[%style%]">' +
						'</div>';

		this.baseClass = 'sendsay-spacer';
		this.applicableStyles = {
			'height': { param: 'height', postfix: 'px' }
		};		
	}

}