
import {Popup} from "./classes/Popup.js";
import {Loader} from "./classes/Loader.js";
(function() {

	
	var activatePopup  = function(id, options) {
		var loader = new Loader('p10');
		loader.load().then(function(data) {
			let popup = new Popup(loader.data);
			popup.activate(options);
		});
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