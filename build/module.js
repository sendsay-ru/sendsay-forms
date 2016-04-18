(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DOMObject2 = require('./DOMObject.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_DOMObject) {
	_inherits(Button, _DOMObject);

	function Button(data) {
		_classCallCheck(this, Button);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this));

		_this.data = data;
		_this.template = '<div class = "sendsay-button" style="[%style%]"">' + '<input type="button"  value=[%value%] />' + '</div>';
		return _this;
	}

	_createClass(Button, [{
		key: 'build',
		value: function build() {
			return _get(Object.getPrototypeOf(Button.prototype), 'build', this).call(this);
		}
	}, {
		key: 'makeSettings',
		value: function makeSettings() {
			var data = this.data,
			    settings = _get(Object.getPrototypeOf(Button.prototype), 'makeSettings', this).call(this);
			settings.value = data.value || 'Unknown';
			return settings;
		}
	}]);

	return Button;
}(_DOMObject2.DOMObject);

},{"./DOMObject.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOMObject = exports.DOMObject = function () {
	function DOMObject() {
		_classCallCheck(this, DOMObject);

		this.template = '<div></div>';
	}

	_createClass(DOMObject, [{
		key: 'makeElement',
		value: function makeElement() {
			var div = document.createElement('div'),
			    element = this.applySettings(this.makeSettings());
			div.innerHTML = element;
			return div.firstChild;
		}
	}, {
		key: 'makeSettings',
		value: function makeSettings() {
			var data = this.data,
			    settings = {};
			settings.style = this.makeStyles();
			return settings;
		}
	}, {
		key: 'applySettings',
		value: function applySettings(settings) {
			var string = this.template;
			for (var key in settings) {
				string = string.replace('[%' + key + '%]', settings[key]);
			}
			return string;
		}
	}, {
		key: 'build',
		value: function build() {
			this.el = this.makeElement();
			this.el.core = this;
			return this.el;
		}
	}, {
		key: 'makeStyles',
		value: function makeStyles() {
			var styleString = '';
			if (this.data && this.data.styles) {
				var styles = this.data.styles;
				for (var key in styles) {
					styleString += key + ':' + styles[key] + ';';
				}
			}
			return styleString;
		}
	}]);

	return DOMObject;
}();

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Field = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DOMObject2 = require('./DOMObject.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = exports.Field = function (_DOMObject) {
	_inherits(Field, _DOMObject);

	function Field(data) {
		_classCallCheck(this, Field);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Field).call(this));

		_this.data = data;
		_this.template = '<div class = "sendsay-field" style="[%style%]"">' + '<label for="[%name%]" class = "sendsay-label">[%label%]</label>' + '<input name="[%name%]" type="text" class="sendsay-input"/>' + '</div>';
		return _this;
	}

	_createClass(Field, [{
		key: 'build',
		value: function build() {
			return _get(Object.getPrototypeOf(Field.prototype), 'build', this).call(this);
		}
	}, {
		key: 'makeSettings',
		value: function makeSettings() {
			var data = this.data,
			    settings = _get(Object.getPrototypeOf(Field.prototype), 'makeSettings', this).call(this);
			settings.name = data.name || '';
			settings.label = data.label || '';

			return settings;
		}
	}]);

	return Field;
}(_DOMObject2.DOMObject);

},{"./DOMObject.js":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = exports.Loader = function () {
	function Loader() {
		_classCallCheck(this, Loader);

		this.request = new XMLHttpRequest();
		this.request.open('GET', 'https://sendsay.ru/form/x_1445438168224221/2/', true);
	}

	_createClass(Loader, [{
		key: 'stateWatcher',
		value: function stateWatcher() {}
	}, {
		key: 'handleSuccess',
		value: function handleSuccess() {
			console.log('success');
		}
	}, {
		key: 'handleFail',
		value: function handleFail() {
			console.log('fail');
		}
	}, {
		key: 'load',
		value: function load() {
			return new Promise(this.promiseHandler.bind(this));
		}
	}, {
		key: 'promiseHandler',
		value: function promiseHandler(resolve, reject) {
			var self = this;
			this.request.onreadystatechange = function () {
				if (self.request.readyState == 4) {
					if (self.request.status == 200) {
						self.handleSuccess();
						resolve(true);
					} else {
						self.handleFail();
						reject(false);
					}
				}
			};
			this.request.send(null);
		}
	}]);

	return Loader;
}();

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Popup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DOMObject2 = require("./DOMObject.js");

var _Field = require("./Field.js");

var _Button = require("./Button.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = exports.Popup = function (_DOMObject) {
	_inherits(Popup, _DOMObject);

	function Popup(data) {
		_classCallCheck(this, Popup);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Popup).call(this));

		_this.data = data;
		_this.template = '<div class = "sendsay-wrapper">' + '<div class = "sendsay-popup" style="[%style%]"">' + '' + '</div>' + '</div>';
		return _this;
	}

	_createClass(Popup, [{
		key: "build",
		value: function build() {
			_get(Object.getPrototypeOf(Popup.prototype), "build", this).call(this);
			var factory = new ElementFactory();
			var popupBody = this.el.querySelector('.sendsay-popup');
			if (this.data.elements) {
				var elements = this.data.elements;
				for (var i = 0; i < elements.length; i++) {
					var newEl = factory.make(elements[i]).build();
					popupBody.appendChild(newEl);
				}
			}
			return this.el;
		}
	}, {
		key: "makeSettings",
		value: function makeSettings() {
			var data = this.data,
			    settings = _get(Object.getPrototypeOf(Popup.prototype), "makeSettings", this).call(this);
			settings.title = data.title || '';
			return settings;
		}
	}, {
		key: "activate",
		value: function activate() {
			setTimeout(this.show.bind(this), this.data.displaySettings && this.data.displaySettings.delay || 1000);
		}
	}, {
		key: "addEvents",
		value: function addEvents() {
			this.el.addEventListener('click', this.handleWrapperClick.bind(this));
			this.el.querySelector('.sendsay-popup').addEventListener('click', this.handlePopupClick.bind(this));
		}
	}, {
		key: "removeEvents",
		value: function removeEvents() {
			this.el.removeEventListener('click', this.handleWrapperClick.bind(this));
			this.el.querySelector('.sendsay-popup').removeEventListener('click', this.handlePopupClick.bind(this));
		}
	}, {
		key: "handleWrapperClick",
		value: function handleWrapperClick() {
			this.hide();
		}
	}, {
		key: "handlePopupClick",
		value: function handlePopupClick(event) {
			event.stopPropagation();
		}
	}, {
		key: "show",
		value: function show() {
			this.build();
			this.addEvents();
			document.querySelector('body').appendChild(this.el);
		}
	}, {
		key: "hide",
		value: function hide() {
			this.removeEvents();
			this.el.parentNode.removeChild(this.el);
		}
	}]);

	return Popup;
}(_DOMObject2.DOMObject);

var Factory = function () {
	function Factory() {
		_classCallCheck(this, Factory);
	}

	_createClass(Factory, [{
		key: "make",
		value: function make() {
			return {};
		}
	}]);

	return Factory;
}();

var ElementFactory = function (_Factory) {
	_inherits(ElementFactory, _Factory);

	function ElementFactory() {
		_classCallCheck(this, ElementFactory);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ElementFactory).call(this));
	}

	_createClass(ElementFactory, [{
		key: "make",
		value: function make(data) {
			switch (data.type) {
				case 'text':
					return new _Field.Field(data);
				case 'button':
					return new _Button.Button(data);
			}
		}
	}]);

	return ElementFactory;
}(Factory);

},{"./Button.js":1,"./DOMObject.js":2,"./Field.js":3}],6:[function(require,module,exports){
'use strict';

var _Popup = require('./classes/Popup.js');

(function () {

	var activatePopup = function activatePopup(id) {
		var popup = new _Popup.Popup({
			elements: [{
				type: 'text',
				label: 'Hello world'
			}, {
				type: 'button',
				value: 'Submit'
			}],
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

},{"./classes/Popup.js":5}]},{},[6,1,2,3,4,5]);
