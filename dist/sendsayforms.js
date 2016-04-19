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
		_this.template = '<div class = "sendsay-button" style="[%style%]"">' + '<input type="button"  value=[%text%] />' + '</div>';
		_this.build();
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
			settings.text = data.text || 'Unknown';
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
				string = string.replace(new RegExp('\\[%' + key + '%\\]', 'g'), settings[key]);
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
		_this.build();
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
	}, {
		key: 'validate',
		value: function validate() {
			return true;
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
	function Loader(id) {
		_classCallCheck(this, Loader);

		this.request = new XMLHttpRequest();
		this.request.open('POST', 'https://sendsay.ru/form/x_1445438168224221/2/', true);
		this.request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		var jsonRequest = '{"id":' + id + ' }';
		this.params = 'apiversion=' + encodeURIComponent(100) + '&json=1&request=' + encodeURIComponent(jsonRequest);
	}

	_createClass(Loader, [{
		key: 'stateWatcher',
		value: function stateWatcher() {}
	}, {
		key: 'handleSuccess',
		value: function handleSuccess() {
			var rawJson = '{' + '"fields": {' + '"q43": {' + '"type": "free",' + '"name": "First field",' + '"questionnaire": "SomeQuest"' + '},' + '"q46": {' + '"type": "free",' + '"name": "Second field",' + '"questionnaire": "SomeQuest"' + '},' + '"q48": {' + '"type": "number",' + '"name": "Third field",' + '"questionnaire": "SomeQuest"' + '}' + '},' + '"name": "Important form",' + '"active": true' + '}';
			var json = JSON.parse(rawJson);
			this.transformAnswer(json);
			console.log('success');
		}
	}, {
		key: 'transformAnswer',
		value: function transformAnswer(json) {
			this.data = {};
			this.data.elements = [];
			this.data.active = json.active || false;
			if (json.fields) {
				var fields = json.fields;
				for (var key in fields) {
					var field = fields[key];
					this.data.elements.push({
						type: field.type,
						name: '_' + field.questionnaire + '_' + key,
						label: field.name
					});
				}
				this.data.elements.push({
					type: 'button',
					text: 'submit'
				});
			}
			if (json.name) this.data.title = json.name;
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
						resolve(this.data);
					} else {
						// self.handleFail();
						// reject(false);
						self.handleSuccess();
						resolve(this.data);
					}
				}
			};
			console.log(this.params);
			this.request.send(this.params);
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
		_this.template = '<div class = "sendsay-wrapper">' + '<div class = "sendsay-popup" style="[%style%]"">' + (data.title ? '<div class = "sendsay-title">[%title%]</div>' : '') + '' + '</div>' + '</div>';
		if (data.active) _this.build();
		return _this;
	}

	_createClass(Popup, [{
		key: "build",
		value: function build() {
			if (!this.data.active) return false;
			_get(Object.getPrototypeOf(Popup.prototype), "build", this).call(this);
			this.elements = [];

			var factory = new ElementFactory();
			var popupBody = this.el.querySelector('.sendsay-popup');
			if (this.data.elements) {
				var elements = this.data.elements;
				for (var i = 0; i < elements.length; i++) {
					var newEl = factory.make(elements[i]);
					if (newEl) {
						this.elements.push(newEl);
						popupBody.appendChild(newEl.el);
					}
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
		value: function activate(options) {

			if (this.data.active) {
				if (!options.instant) {
					setTimeout(this.show.bind(this, options), this.data.displaySettings && this.data.displaySettings.delay || 1000);
				} else {
					this.show(options);
				}
			}
		}
	}, {
		key: "addEvents",
		value: function addEvents() {
			this.el.addEventListener('click', this.handleWrapperClick.bind(this));
			this.el.querySelector('.sendsay-popup').addEventListener('click', this.handlePopupClick.bind(this));
			this.el.querySelector('.sendsay-button input').addEventListener('click', this.handleSubmit.bind(this));
			document.addEventListener('keyup', this.handleKeyPress.bind(this));
		}
	}, {
		key: "removeEvents",
		value: function removeEvents() {
			this.el.removeEventListener('click', this.handleWrapperClick.bind(this));
			this.el.querySelector('.sendsay-popup').removeEventListener('click', this.handlePopupClick.bind(this));
			this.el.querySelector('.sendsay-button input').removeEventListener('click', this.handleSubmit.bind(this));
			document.removeEventListener('keyup', this.handleKeyPress.bind(this));
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
		key: "handleSubmit",
		value: function handleSubmit(event) {
			this.submit();
		}
	}, {
		key: "handleKeyPress",
		value: function handleKeyPress(event) {
			switch (event.keyCode) {
				case 13:
					//Enter
					this.submit();

					break;
				case 27:
					//Esc
					this.hide();
					break;
			}
		}
	}, {
		key: "show",
		value: function show(options) {
			this.build();
			this.addEvents();
			if (!options.el) document.querySelector('body').appendChild(this.el);else {
				this.el.style.position = 'absolute';
				options.el.appendChild(this.el);
			}
		}
	}, {
		key: "hide",
		value: function hide() {
			this.removeEvents();
			if (this.el.parentNode) this.el.parentNode.removeChild(this.el);
		}
	}, {
		key: "submit",
		value: function submit() {
			var elements = this.elements;
			var isValid = true;
			if (elements) {
				for (var i = 1; i < elements.length; i++) {
					var element = elements[i];
					if (element instanceof _Field.Field) isValid = isValid && element.validate();
				}
			}
			if (isValid) {
				console.log('submitted');
				this.hide();
			}
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
				case 'number':
				case 'free':
				case 'field':
					return new _Field.Field(data);
				case 'button':
					return new _Button.Button(data);
			}
		}
	}]);

	return ElementFactory;
}(Factory);

},{"./Button.js":1,"./DOMObject.js":2,"./Field.js":3}],6:[function(require,module,exports){
"use strict";

var _Popup = require("./classes/Popup.js");

var _Loader = require("./classes/Loader.js");

(function () {

	var activatePopup = function activatePopup(id, options) {
		var loader = new _Loader.Loader('p10');
		loader.load().then(function (data) {
			var popup = new _Popup.Popup(loader.data);
			popup.activate(options);
		});
	};

	var showPopup = function showPopup(data, options) {
		var popup = new _Popup.Popup(data);
		popup.activate(options);
	};
	window.SENDSAY = {
		activatePopup: activatePopup,
		showPopup: showPopup
	};
})();

},{"./classes/Loader.js":4,"./classes/Popup.js":5}]},{},[6,1,2,3,4,5]);
