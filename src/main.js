
import {Popup} from "./classes/Popup.js";
import {Connector} from "./classes/Connector.js";
import {Form} from "./classes/Form.js";
(function() {

	
	var activatePopup  = function(url, options) {
		loadCss();
		var onLoad = function() {
			var connector = new Connector(url);
			var form = new Form(Popup, connector);
			window.removeEventListener('load', onLoad);
		};

		if (document.readyState === "complete") {
			onLoad();
		} else {
			window.addEventListener('load', onLoad)
		}
	};

	var showPopup = function(data, options) {
		loadCss();
		let popup = new Popup(data);
		popup.activate(options);
	}

	var loadCss = function() {
		var cssId = '_sendsay-styles';  // you could encode the css path itself to generate id..
		if (!document.getElementById(cssId))
		{
		    var head  = document.getElementsByTagName('head')[0];
		    var link  = document.createElement('link');
		    link.id   = cssId;
		    link.rel  = 'stylesheet';
		    link.type = 'text/css';
		    link.href = 'https://0d46bfd887bfcf061429f33315cd9c9f4c9dc35a.googledrive.com/host/0B8TfwS63_P7-RkRrWnBHRG92UzA/sendsayforms.css';
		    link.media = 'all';
		    head.appendChild(link);
		}
	} 
	window.SENDSAY = {
		activatePopup: activatePopup,
		showPopup: showPopup
	};
})();