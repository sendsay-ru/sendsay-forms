
import {Popup} from "./classes/Popup.js";
import {Loader} from "./classes/Loader.js";
(function() {

	
	var activatePopup  = function(id) {
		var loader = new Loader('p10');
		loader.load().then(function(data) {
			let popup = new Popup(loader.data);
			popup.activate();
		});
	};

	var showPopup = function(data) {
		let popup = new Popup(data);
		popup.activate();
	} 
	window.SENDSAY = {
		activatePopup: activatePopup,
		showPopup: showPopup
	};
})();