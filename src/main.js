
import {Popup} from "./classes/Popup.js";
(function() {


	var activatePopup  = function(id) {
		let popup = new Popup ({
		elements: [
				{
					type: 'text',
					label: 'Hello world'
				},
				{
					type: 'button',
					value: 'Submit'
				}
			],
			styles: {
				width: '400px'
			},
			displaySettings: {
				delay: 5000
			}
		});
		popup.activate();
	};
	window.SENDSAY = {
		activatePopup: activatePopup
	};
})();