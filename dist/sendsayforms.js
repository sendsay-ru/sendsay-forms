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

	function Button(data, parent) {
		_classCallCheck(this, Button);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, data, parent));

		_this.template = '<div class = "[%classes%]" style="[%wrapperstyle%]">' + '<input type="button"  value="[%text%]"  style="[%style%]" />' + '</div>';

		_this.baseClass = 'sendsay-button';
		_this.applicableStyles = {
			'background-color': { param: 'backgroundColor' },
			'border-radius': { param: 'borderRadius', postfix: 'px' },
			'color': { param: 'textColor' },
			'line-height': { param: 'lineHeighFt', default: 'normal' }
		};
		_this.render();
		return _this;
	}

	_createClass(Button, [{
		key: 'addEvents',
		value: function addEvents() {
			if (this.el) {
				this.el.querySelector('input').addEventListener('click', this.handleClick.bind(this));
			}
		}
	}, {
		key: 'handleClick',
		value: function handleClick() {
			this.trigger('sendsay-click');
		}
	}, {
		key: 'removeEvents',
		value: function removeEvents() {
			if (this.el) {
				this.el.querySelector('input').removeEventListener('click', this.handleClick.bind(this));
			}
		}
	}, {
		key: 'makeStyles',
		value: function makeStyles() {
			var styleObj = _get(Object.getPrototypeOf(Button.prototype), 'makeStyles', this).call(this),
			    data = this.data;
			if (data.align === 'justify') styleObj.width = '100%';
			return styleObj;
		}
	}, {
		key: 'makeSettings',
		value: function makeSettings() {
			var data = this.data,
			    settings = _get(Object.getPrototypeOf(Button.prototype), 'makeSettings', this).call(this);
			settings.text = data.text || 'Unknown';
			settings.wrapperstyle = this.makeWrapperStyle();
			return settings;
		}
	}, {
		key: 'makeWrapperStyle',
		value: function makeWrapperStyle() {
			var style = {},
			    data = this.data;

			if (data.align !== 'justify') style['text-align'] = data.align;

			return this.convertStyles(style);
		}
	}]);

	return Button;
}(_DOMObject2.DOMObject);

},{"./DOMObject.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Connector = exports.Connector = function () {
	function Connector(url) {
		_classCallCheck(this, Connector);

		this.url = url;
	}

	_createClass(Connector, [{
		key: 'handleLoadSuccess',
		value: function handleLoadSuccess() {
			var rawJson = '{' + '"fields": {' + '"q43": {' + '"type": "field",' + '"subtype": "int",' + '"name": "First field",' + '"questionnaire": "SomeQuest"' + '},' + '"q46": {' + '"type": "free",' + '"name": "Second field",' + '"questionnaire": "SomeQuest"' + '},' + '"q48": {' + '"type": "number",' + '"name": "Third field",' + '"questionnaire": "SomeQuest"' + '}' + '},' + '"name": "Important form",' + '"active": true' + '}';
			var json = JSON.parse(rawJson);
			this.transformAnswer(json);
		}
	}, {
		key: 'handleLoadFail',
		value: function handleLoadFail() {}
	}, {
		key: 'transformAnswer',
		value: function transformAnswer(json) {
			this.data = {
				backgroundColor: '#000',
				textColor: '#fff',
				endDialogMessage: 'Раз-два-три'
			};
			this.data.elements = [];
			this.data.active = json.active || false;
			if (json.fields) {
				var fields = json.fields;
				for (var key in fields) {
					var field = fields[key];
					this.data.elements.push({
						type: field.type,
						name: '_' + field.questionnaire + '_' + key,
						label: field.name,
						subtype: field.subtype
					});
				}
				this.data.elements.push({
					type: 'button',
					text: 'submit',
					backgroundColor: '#f00'
				});
			}
			if (json.name) this.data.title = json.name;
		}
	}, {
		key: 'load',
		value: function load() {
			this.request = new XMLHttpRequest();
			this.request.open('GET', this.url + '?render=json', true);
			this.request.setRequestHeader('Content-Type', 'application/json');
			return new Promise(this.promiseHandler.bind(this)).then(this.handleLoadSuccess.bind(this), this.handleLoadFail.bind(this));
		}
	}, {
		key: 'submit',
		value: function submit(params) {
			this.request = new XMLHttpRequest();
			this.request.open('POST', this.url, true);
			this.request.setRequestHeader('Content-Type', 'application/json');
			this.params = '';
			for (var key in params) {
				if (this.params === '') this.params += '&';
				this.params += key + '=' + params[key];
			}
			this.params = encodeURIComponent(this.params);

			return new Promise(this.promiseHandler.bind(this));
		}
	}, {
		key: 'promiseHandler',
		value: function promiseHandler(resolve, reject) {
			var self = this;
			this.request.onreadystatechange = function () {
				if (self.request.readyState == 4) {

					if (self.request.status == 200) {

						resolve(this.data);
					} else {
						// reject(false);
						resolve(this.data);
					}
				}
			};
			this.request.send(this.params);
		}
	}]);

	return Connector;
}();

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOMObject = exports.DOMObject = function () {
	function DOMObject(data, parent) {
		_classCallCheck(this, DOMObject);

		this.data = data;
		this.template = '<div></div>';
		this.baseClass = 'sendsay-main';
		this.parent = parent || null;
		this.applicableStyles = {};
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
			    settings = {
				classes: this.makeClasses(),
				style: this.convertStyles(this.makeStyles())
			};
			return settings;
		}
	}, {
		key: 'makeStyles',
		value: function makeStyles() {
			var styleObj = this.applyStyles(this.applicableStyles);
			return styleObj;
		}
	}, {
		key: 'applyStyles',
		value: function applyStyles(mapping) {
			var styles = {},
			    data = this.data;
			for (var key in mapping) {
				var val = mapping[key];
				if (data[val.param] !== undefined) {
					styles[key] = data[val.param] + (val.postfix ? val.postfix : '');
				} else if (val.default) {
					styles[key] = val.default;
				}
			}
			return styles;
		}
	}, {
		key: 'convertStyles',
		value: function convertStyles(toConvert) {
			var styleObj = toConvert,
			    styleStr = '';

			for (var key in styleObj) {
				styleStr += ' ' + key + ':' + styleObj[key] + ';';
			}return styleStr;
		}
	}, {
		key: 'makeClasses',
		value: function makeClasses() {
			return this.baseClass;
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
		key: 'render',
		value: function render() {
			var oldEl = this.el;
			this.removeEvents();
			this.build();
			this.addEvents();
			if (oldEl && oldEl.parentNode) oldEl.parentNode.replaceChild(this.el, oldEl);
		}
	}, {
		key: 'addEvents',
		value: function addEvents() {}
	}, {
		key: 'removeEvents',
		value: function removeEvents() {}
	}, {
		key: 'trigger',
		value: function trigger(eventName, data) {
			var event = void 0,
			    extra = { extra: data };
			if (CustomEvent && typeof CustomEvent === 'function') {
				event = new CustomEvent(eventName, { detail: extra });
			} else {
				event = document.createEvent('HTMLEvents');
				event.initEvent(eventName, true, true);
				event.detail = extra;
			}

			this.el.dispatchEvent(event);
		}
	}, {
		key: 'extend',
		value: function extend(dest, source) {
			for (var key in source) {
				dest[key] = source[key];
			}
			return dest;
		}
	}]);

	return DOMObject;
}();

},{}],4:[function(require,module,exports){
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

	function Field(data, parent) {
		_classCallCheck(this, Field);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Field).call(this, data, parent));

		_this.template = '<div class = "[%classes%]" style="[%style%]"">' + '<label for="[%name%]" class = "sendsay-label">[%label%]</label>' + '<input name="[%name%]" placeholder="[%placeholder%]" type="text" class="sendsay-input"/>' + '<div type="text" class="sendsay-error"></div>' + '</div>';
		_this.baseClass = 'sendsay-field';
		_this.render();
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
			settings.label = data.label || data.name || '';
			settings.placeholder = data.placeholder || '';
			if (data.hidden) {
				settings.classes += ' sendsay-field-hidden';
			}
			if (data.required) {
				settings.label += '*';
			}

			return settings;
		}
	}, {
		key: 'makeStyles',
		value: function makeStyles() {
			var styleObj = _get(Object.getPrototypeOf(Field.prototype), 'makeStyles', this).call(this),
			    data = this.data;
			if (this.parent && this.parent.data && this.parent.data.textColor) styleObj.color = this.parent.data.textColor;
			return styleObj;
		}
	}, {
		key: 'validate',
		value: function validate() {
			this.removeErrorMessage();
			if (this.data.required && this.el.querySelector('input').value == '') {
				this.showErrorMessage("Обязательное поле");
				return false;
			}
			return true;
		}
	}, {
		key: 'showErrorMessage',
		value: function showErrorMessage(message) {
			this.el.classList.add('sendsay-field-invalid');
			this.el.querySelector('.sendsay-error').innerHTML = message;
		}
	}, {
		key: 'removeErrorMessage',
		value: function removeErrorMessage() {
			this.el.classList.remove('sendsay-field-invalid');
			this.el.querySelector('.sendsay-error').innerHTML = '';
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.el.querySelector('input').value;
		}
	}]);

	return Field;
}(_DOMObject2.DOMObject);

},{"./DOMObject.js":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = exports.Form = function () {
	function Form(domConstructor, connector) {
		_classCallCheck(this, Form);

		this.domConstructor = domConstructor;
		this.connector = connector;
		connector.load().then(this.handleSuccess.bind(this), this.handleFail.bind(this));
	}

	_createClass(Form, [{
		key: 'handleSuccess',
		value: function handleSuccess() {
			this.domObj = new this.domConstructor(this.connector.data);
			this.domObj.activate();
			this.domObj.el.addEventListener('sendsay-success', this.handleSubmit.bind(this));
		}
	}, {
		key: 'handleFail',
		value: function handleFail() {}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(event) {

			var params = event.detail.extra;
			this.connector.submit(params).then(this.handleSuccessSubmit.bind(this), this.handleFailSubmit.bind(this));
		}
	}, {
		key: 'handleSuccessSubmit',
		value: function handleSuccessSubmit() {
			console.log('Success submit');
			this.domObj.showEndDialog();
		}
	}, {
		key: 'handleFailSubmit',
		value: function handleFailSubmit() {
			console.log('Fail submit');
		}
	}]);

	return Form;
}();

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NumberField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Field2 = require("./Field.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberField = exports.NumberField = function (_Field) {
	_inherits(NumberField, _Field);

	function NumberField(data, parent) {
		_classCallCheck(this, NumberField);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(NumberField).call(this, data, parent));
	}

	_createClass(NumberField, [{
		key: "validate",
		value: function validate() {
			var isValid = _get(Object.getPrototypeOf(NumberField.prototype), "validate", this).call(this);
			if (isValid) {
				var value = this.getValue();
				isValid = !value.match(/[\.xXeE]/) && !isNaN(+value);
				if (!isValid) this.showErrorMessage("Неверный формат целого числа");
			}
			return isValid;
		}
	}]);

	return NumberField;
}(_Field2.Field);

},{"./Field.js":4}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Popup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DOMObject2 = require("./DOMObject.js");

var _Field = require("./Field.js");

var _NumberField = require("./NumberField.js");

var _Button = require("./Button.js");

var _Text = require("./Text.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = exports.Popup = function (_DOMObject) {
	_inherits(Popup, _DOMObject);

	function Popup(data, parent) {
		_classCallCheck(this, Popup);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Popup).call(this, data, parent));

		_this.template = '<div class = "sendsay-wrapper [%wrapperClasses%]">' + '<div class = "[%classes%]" style="[%style%]"">' + '' + '</div>' + '</div>';

		_this.baseClass = 'sendsay-popup';
		_this.applicableStyles = {
			'background-color': { param: 'backgroundColor' },
			'border-radius': { param: 'borderRadius', postfix: 'px' },
			'padding-bottom': { param: 'paddingBottom', postfix: 'px' },
			'padding-top': { param: 'paddingTop', postfix: 'px' },
			'padding-left': { param: 'paddingLeft', postfix: 'px' },
			'padding-right': { param: 'paddingRight', postfix: 'px' }
		};
		_this.makeEndDialogData();
		if (data.active) _this.render();
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
					var newEl = factory.make(elements[i], this);
					if (newEl) {
						if (newEl.data.type == 'button') newEl.el.addEventListener('sendsay-click', this.handleButtonClick.bind(this));

						this.elements.push(newEl);
						popupBody.appendChild(newEl.el);
					}
				}
			}
			if (this.demo) this.el.style.position = 'absolute';
			return this.el;
		}
	}, {
		key: "addEvents",
		value: function addEvents() {
			if (this.el) {
				this.el.addEventListener('click', this.handleWrapperClick.bind(this));
				this.el.querySelector('.sendsay-popup').addEventListener('click', this.handlePopupClick.bind(this));
				document.addEventListener('keyup', this.handleKeyPress.bind(this));
			}
		}
	}, {
		key: "removeEvents",
		value: function removeEvents() {
			if (this.el) {
				this.el.removeEventListener('click', this.handleWrapperClick.bind(this));
				this.el.querySelector('.sendsay-popup').removeEventListener('click', this.handlePopupClick.bind(this));
				document.removeEventListener('keyup', this.handleKeyPress.bind(this));
			}
		}
	}, {
		key: "makeSettings",
		value: function makeSettings() {
			var settings = _get(Object.getPrototypeOf(Popup.prototype), "makeSettings", this).call(this);
			settings.wrapperClasses = this.data.noAnimation ? 'sendsay-noanimation' : '';
			return settings;
		}
	}, {
		key: "makeClasses",
		value: function makeClasses() {
			var classes = _get(Object.getPrototypeOf(Popup.prototype), "makeClasses", this).call(this);
			classes += this.data.endDialog ? ' sendsay-enddialog' : '';
			return classes;
		}
	}, {
		key: "activate",
		value: function activate(options) {
			this.demo = options && options.demo;
			if (this.data.active) {
				if (!options || !options.instant) {
					setTimeout(this.show.bind(this, options), this.data.displaySettings && this.data.displaySettings.delay || 1000);
				} else {
					this.show(options);
				}
			}
		}
	}, {
		key: "makeEndDialogData",
		value: function makeEndDialogData() {
			var data = this.data;
			this.submitData = this.extend({
				noAnimation: true,
				endDialog: true
			}, data);
			delete this.submitData.elements;
			var button = void 0;
			for (var i = 0; i < data.elements.length; i++) {
				var element = data.elements[i];
				if (element.type == 'button') {
					button = this.extend({}, element);
					button.text = 'Закрыть';
				}
			}
			this.submitData.elements = [{
				type: 'text',
				text: data.endDialogMessage || 'Спасибо за заполнение формы',
				paddingTop: '10',
				paddingBottom: '20'
			}, button];
		}
	}, {
		key: "showEndDialog",
		value: function showEndDialog() {
			this.data = this.submitData;
			this.render();
		}
	}, {
		key: "show",
		value: function show(options) {

			if (!options || !options.el) document.querySelector('body').appendChild(this.el);else {
				this.el.style.position = 'absolute';
				options.el.appendChild(this.el);
			}
		}
	}, {
		key: "hide",
		value: function hide() {
			if (this.el.parentNode) this.el.parentNode.removeChild(this.el);
		}
	}, {
		key: "submit",
		value: function submit() {
			var elements = this.elements;
			var isValid = true,
			    data = {};

			if (elements) {
				for (var i = 0; i < elements.length; i++) {
					var element = elements[i];
					if (element instanceof _Field.Field) {

						data[element.data.name] = element.getValue();
						isValid = element.validate() && isValid;
					}
				}
			}
			this.isSubmitted = isValid;
			if (isValid) {
				this.trigger('sendsay-success', data);
			}
			return isValid;
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
		key: "handleButtonClick",
		value: function handleButtonClick(event) {
			if (this.isSubmitted) this.hide();else {
				if (this.submit() && this.demo) this.showEndDialog();
			}
		}
	}, {
		key: "handleKeyPress",
		value: function handleKeyPress(event) {
			switch (event.keyCode) {
				case 13:
					//Enter
					if (this.isSubmitted) this.hide();else {
						if (this.submit() && this.demo) this.showEndDialog();
					}
					break;
				case 27:
					//Esc
					this.hide();
					break;
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
		value: function make(data, parent) {
			switch (data.type) {
				case 'text':
					return new _Text.Text(data, parent);
				case 'number':
					return new _NumberField.NumberField(data, parent);
				case 'free':
					return new _Field.Field(data, parent);
				case 'field':
					switch (data.subtype) {
						case 'int':
							return new _NumberField.NumberField(data, parent);
						case 'free':
						default:
							return new _Field.Field(data, parent);
					}
					break;
				case 'button':
					return new _Button.Button(data, parent);
			}
		}
	}]);

	return ElementFactory;
}(Factory);

},{"./Button.js":1,"./DOMObject.js":3,"./Field.js":4,"./NumberField.js":6,"./Text.js":8}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Text = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DOMObject2 = require('./DOMObject.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = exports.Text = function (_DOMObject) {
	_inherits(Text, _DOMObject);

	function Text(data, parent) {
		_classCallCheck(this, Text);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Text).call(this, data, parent));

		_this.template = '<div class = "sendsay-text" style="[%style%]"">' + '[%text%]' + '</div>';
		_this.baseClass = 'sendsay-text';
		_this.applicableStyles = {
			'text-align': { param: 'align', default: 'left' },
			'line-height': { param: 'lineHeight', default: 'normal' },
			'padding-bottom': { param: 'paddingBottom', postfix: 'px' },
			'padding-top': { param: 'paddingTop', postfix: 'px' },
			'padding-left': { param: 'paddingLeft', postfix: 'px' },
			'padding-right': { param: 'paddingRight', postfix: 'px' }

		};
		_this.render();
		return _this;
	}

	_createClass(Text, [{
		key: 'build',
		value: function build() {
			return _get(Object.getPrototypeOf(Text.prototype), 'build', this).call(this);
		}
	}, {
		key: 'makeSettings',
		value: function makeSettings() {
			var data = this.data,
			    settings = _get(Object.getPrototypeOf(Text.prototype), 'makeSettings', this).call(this);
			settings.text = data.text || '';
			return settings;
		}
	}, {
		key: 'makeStyles',
		value: function makeStyles() {
			var styleObj = _get(Object.getPrototypeOf(Text.prototype), 'makeStyles', this).call(this),
			    data = this.data;
			if (this.parent && this.parent.data && this.parent.data.textColor) styleObj.color = this.parent.data.textColor;
			return styleObj;
		}
	}]);

	return Text;
}(_DOMObject2.DOMObject);

},{"./DOMObject.js":3}],9:[function(require,module,exports){
"use strict";

var _Popup = require("./classes/Popup.js");

var _Connector = require("./classes/Connector.js");

var _Form = require("./classes/Form.js");

(function () {

	var activatePopup = function activatePopup(url, options) {
		var connector = new _Connector.Connector(url);
		var form = new _Form.Form(_Popup.Popup, connector);
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

},{"./classes/Connector.js":2,"./classes/Form.js":5,"./classes/Popup.js":7}]},{},[9,1,2,3,4,5,6,7,8]);
