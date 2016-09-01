
import {Popup} from "./classes/elements/Popup.js";
import {PopupBar} from "./classes/elements/PopupBar.js";
import {ToggleablePopup} from "./classes/elements/ToggleablePopup.js";
import {Connector} from "./classes/Connector.js";
import {Form} from "./classes/Form.js";
(function() {

	
	var activatePopup  = function(url, options) {

		loadCss(function() {
			var connector = new Connector(url);
			var form = new Form(connector, options);
		});	
	};

	var showPopup = function(data, options) {
		loadCss();
		var domConstructor;
		switch(data.type) {
			case 'popup':
				domConstructor = Popup;
				break;
			case 'bar':
				domConstructor = PopupBar;
				break;
			case 'widget':
				domConstructor = ToggleablePopup;
				break;
		} 
		let popup = new domConstructor(data);
		popup.activate(options);
	}

	var loadCss = function(callback) {
		var cssId = '_sendsay-styles';
		if (!document.getElementById(cssId)) {
		    var head  = document.getElementsByTagName('head')[0];
		    var link  = document.createElement('link');
		    link.id   = cssId;
		    link.rel  = 'stylesheet';
		    link.type = 'text/css';
		    link.href = 'https://app.sendsay.ru/kit/sendsayForms/sendsayforms.css';
		    link.media = 'all';

		    var sibling = document.querySelector('#sendsay-generated-sheet');
		    if(sibling) {
		    	document.head.insertBefore(link, sibling);
		    } else {
		    	document.head.appendChild(link);
		    }
		    link.addEventListener('load', callback);
		} else {
			callback();
		}
	} 
	window.SENDSAY = {
		activatePopup: activatePopup,
		showPopup: showPopup
	};
})();