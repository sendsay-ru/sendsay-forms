
import {Popup} from "./classes/Popup.js";
import {Connector} from "./classes/Connector.js";
import {Form} from "./classes/Form.js";
(function() {

	
	var activatePopup  = function(url, options) {
		var connector = new Connector(url);
		var form = new Form(Popup, connector);
	};

	var showPopup = function(data, options) {
		let popup = new Popup(data);
		popup.activate(options);
	} 
	window.SENDSAY = {
		activatePopup: activatePopup,
		showPopup: showPopup
	};
})();