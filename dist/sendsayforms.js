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

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, data, parent));
	}

	_createClass(Button, [{
		key: 'initialize',
		value: function initialize() {
			this.template = '<div class = "[%classes%]" style="[%wrapperstyle%]">' + '<input type="button"  value="[%text%]"  style="[%style%]" />' + '</div>';

			this.baseClass = 'sendsay-button';
			this.applicableStyles = {
				'background-color': { param: 'backgroundColor' },
				'border-radius': { param: 'borderRadius', postfix: 'px' },
				'color': { param: 'textColor' },
				'line-height': { param: 'lineHeighFt', default: 'normal' }
			};
		}
	}, {
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

},{"./DOMObject.js":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CheckBox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DOMObject2 = require('./DOMObject.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = exports.CheckBox = function (_DOMObject) {
	_inherits(CheckBox, _DOMObject);

	function CheckBox(data, parent) {
		_classCallCheck(this, CheckBox);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckBox).call(this, data, parent));
	}

	_createClass(CheckBox, [{
		key: 'initialize',
		value: function initialize() {
			this.template = '<div class = "[%classes%]" style="[%style%]"">' + '<input [%checked%] name="[%qid%]" value="[%value%]" type="checkbox" class="sendsay-checkinput"/>' + (this.data.label ? '<label for="[%label%]" class = "sendsay-label">[%label%]</label>' : '') + '</div>';
			this.baseClass = 'sendsay-checkbox';
			this.handleChange = this.handleChange.bind(this);
			this.handleClick = this.handleClick.bind(this);
		}
	}, {
		key: 'build',
		value: function build() {
			return _get(Object.getPrototypeOf(CheckBox.prototype), 'build', this).call(this);
		}
	}, {
		key: 'makeSettings',
		value: function makeSettings() {
			var data = this.data,
			    settings = _get(Object.getPrototypeOf(CheckBox.prototype), 'makeSettings', this).call(this);

			settings.label = data.label || data.name || '';
			settings.qid = data.qid || data.name || '';
			settings.value = data.value || '';
			settings.checked = data.checked ? 'checked' : '';
			if (data.hidden) {
				settings.classes += ' sendsay-field-hidden';
			}
			return settings;
		}
	}, {
		key: 'addEvents',
		value: function addEvents() {
			if (this.el) {
				this.el.querySelector('input').addEventListener('change', this.handleChange);
				this.el.querySelector('label').addEventListener('click', this.handleClick);
			}
		}
	}, {
		key: 'removeEvents',
		value: function removeEvents() {
			if (this.el) {
				this.el.querySelector('input').removeEventListener('change', this.handleChange);
				this.el.querySelector('label').removeEventListener('click', this.handleClick);
			}
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			event.stopPropagation();
			this.trigger('sendsay-change', {
				checked: event.target.checked,
				value: event.target.value
			});
		}
	}, {
		key: 'handleClick',
		value: function handleClick(event) {

			event.stopPropagation();
			var input = this.el.querySelector('input');
			input.checked = !input.checked;
		}
	}, {
		key: 'makeStyles',
		value: function makeStyles() {
			var styleObj = _get(Object.getPrototypeOf(CheckBox.prototype), 'makeStyles', this).call(this);
			// 	data = this.data;
			// if(this.parent && this.parent.data && this.parent.data.textColor)
			// 	styleObj.color = this.parent.data.textColor;
			return styleObj;
		}
	}]);

	return CheckBox;
}(_DOMObject2.DOMObject);

},{"./DOMObject.js":5}],3:[function(require,module,exports){
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
		key: 'promiseHandler',
		value: function promiseHandler(resolve, reject) {
			var self = this;
			this.request.onreadystatechange = function () {
				if (self.request.readyState == 4) {
					self.pending = false;
					var success = true;
					if (self.request.onReady) success = self.request.onReady.apply(self);
					if (self.request.status == 200 && success) {
						resolve(self.data);
					} else {
						reject(false);
					}
				}
			};
			this.pending = true;
			this.request.send(this.params);
		}
	}, {
		key: 'load',
		value: function load() {
			if (this.pending) return;
			this.request = new XMLHttpRequest();
			this.request.open('GET', this.url, true);
			this.request.setRequestHeader('Content-Type', 'application/json');
			return new Promise(this.promiseHandler.bind(this)).then(this.handleLoadSuccess.bind(this), this.handleLoadFail.bind(this));
		}
	}, {
		key: 'transformAnswer',
		value: function transformAnswer(json) {

			this.data = {
				endDialogMessage: 'Спасибо за заполнение формы!',
				elements: [{
					type: 'text',
					text: '<div style="font-size: 16px; padding-bottom: 10px; font-weight: bold;">Подписка на рассылку</div>'
				}]
			};

			this.data.active = json.state == '1' || false;
			if (json.fields) {
				var fields = json.fields;
				for (var key in fields) {
					var field = fields[key];
					if (field.type !== 'submit') {
						this.data.elements.push({
							type: field.type == 'text' ? 'field' : field.type,
							qid: field.name,
							name: field.name,
							label: field.label,
							subtype: field['data_type'],
							required: field.required == '1'
						});
					}
				}
				this.data.elements.push({
					type: 'button',
					text: 'Подписаться',
					align: 'justify'
				});
			}
			if (json.name) this.data.title = json.name;
		}
	}, {
		key: 'submit',
		value: function submit(params) {
			if (this.pending) return;
			this.request = new XMLHttpRequest();
			this.request.open('POST', this.url, true);
			this.request.setRequestHeader('Content-Type', 'application/json');
			this.request.onReady = this.handleSubmitResult;

			this.params = JSON.stringify(params);

			return new Promise(this.promiseHandler.bind(this));
		}
	}, {
		key: 'handleSubmitResult',
		value: function handleSubmitResult() {

			var el = document.createElement('div');
			el.innerHTML = this.request.responseText;
			var infoEls = el.querySelectorAll('#container div span');
			var info = {
				general: infoEls[0] && infoEls[0].innerHTML && infoEls[0].innerHTML.trim(),
				specific: infoEls[1] && infoEls[1].innerHTML && infoEls[1].innerHTML.trim()
			};
			if (!info.general || info.general === 'Благодарим за заполнение формы') {
				return true;
			} else {
				this.error = info;
				return false;
			}
		}
	}, {
		key: 'handleLoadSuccess',
		value: function handleLoadSuccess() {

			var rawJson = this.request.responseText;
			var json = JSON.parse(rawJson);
			this.transformAnswer(json);
		}
	}, {
		key: 'handleLoadFail',
		value: function handleLoadFail() {}
	}]);

	return Connector;
}();

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookies = exports.Cookies = function () {
    function Cookies() {
        _classCallCheck(this, Cookies);
    }

    _createClass(Cookies, null, [{
        key: 'get',
        value: function get(sKey) {
            if (!sKey) {
                return null;
            }
            return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
        }
    }, {
        key: 'set',
        value: function set(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                return false;
            }
            var sExpires = '';
            if (vEnd) {
                switch (vEnd.constructor) {
                    case Number:
                        sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
                        break;
                    case String:
                        sExpires = '; expires=' + vEnd;
                        break;
                    case Date:
                        sExpires = '; expires=' + vEnd.toUTCString();
                        break;
                }
            }
            document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
            return true;
        }
    }, {
        key: 'remove',
        value: function remove(sKey, sPath, sDomain) {
            if (!this.has(sKey)) {
                return false;
            }
            document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
            return true;
        }
    }, {
        key: 'has',
        value: function has(sKey) {
            if (!sKey) {
                return false;
            }
            return new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=').test(document.cookie);
        }
    }, {
        key: 'keys',
        value: function keys() {
            var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
            for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
                aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
            }
            return aKeys;
        }
    }]);

    return Cookies;
}();

},{}],5:[function(require,module,exports){
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
		this.parent = parent || null;
		this.initialize();
		this.render();
	}

	_createClass(DOMObject, [{
		key: 'initialize',
		value: function initialize() {
			this.template = '<div></div>';
			this.baseClass = 'sendsay-main';
			this.applicableStyles = {};
		}
	}, {
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
			settings = settings || {};
			var string = this.template;
			var templateParams = string.match(new RegExp('\\[% *[a-zA-Z0-9\\-]* *%\\]', 'g')) || [];
			for (var i = 0; i < templateParams.length; i++) {
				var param = templateParams[i];
				param = param.substring(2, param.length - 2);
				var paramValue = settings[param.trim()] || '';
				string = string.replace(new RegExp('\\[%' + param + '%\\]', 'g'), paramValue);
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

},{}],6:[function(require,module,exports){
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

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Field).call(this, data, parent));
	}

	_createClass(Field, [{
		key: 'initialize',
		value: function initialize() {
			this.template = '<div class = "[%classes%]" style="[%style%]"">' + '<label for="[%label%]" class = "sendsay-label">[%label%]</label>' + '<input name="[%qid%]" placeholder="[%placeholder%]" value="[%value%]" type="text" class="sendsay-input"/>' + '<div type="text" class="sendsay-error"></div>' + '</div>';
			this.baseClass = 'sendsay-field';
		}
	}, {
		key: 'makeSettings',
		value: function makeSettings() {
			var data = this.data,
			    settings = _get(Object.getPrototypeOf(Field.prototype), 'makeSettings', this).call(this);
			settings.name = data.name || '';
			settings.label = data.label || data.name || '';
			settings.placeholder = data.placeholder || '';
			settings.qid = data.qid || data.name || '';
			settings.value = data.default || '';
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
			if (this.data.required && this.getValue() == '') {
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

},{"./DOMObject.js":5}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Form = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Cookies = require('./Cookies.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = exports.Form = function () {
	function Form(domConstructor, connector) {
		_classCallCheck(this, Form);

		if (!_Cookies.Cookies.has('__sendsay_forms')) {
			this.domConstructor = domConstructor;
			this.connector = connector;
			var promise = connector.load();
			if (promise) promise.then(this.handleSuccess.bind(this), this.handleFail.bind(this));
		}
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
			var promise = this.connector.submit(params);
			if (promise) promise.then(this.handleSuccessSubmit.bind(this), this.handleFailSubmit.bind(this));
		}
	}, {
		key: 'handleSuccessSubmit',
		value: function handleSuccessSubmit() {
			this.domObj.showEndDialog();
		}
	}, {
		key: 'handleFailSubmit',
		value: function handleFailSubmit() {
			this.domObj.onSubmitFail();
			var error = this.connector.error;
			if (error.specific && error.specific === 'Неправильно заполнено поле email.') this.domObj.showErrorFor('_member_email', 'Неверный формат email адреса');
		}
	}]);

	return Form;
}();

},{"./Cookies.js":4}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ImageElement = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DOMObject2 = require('./DOMObject.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageElement = exports.ImageElement = function (_DOMObject) {
	_inherits(ImageElement, _DOMObject);

	function ImageElement(data, parent) {
		_classCallCheck(this, ImageElement);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageElement).call(this, data, parent));
	}

	_createClass(ImageElement, [{
		key: 'initialize',
		value: function initialize() {
			this.template = '<div class = "[%classes%]" style="[%wrapperstyle%]">' + '<img src="[%url%]" style="[%style%]/>" />' + '</div>';

			this.baseClass = 'sendsay-image';
		}
	}, {
		key: 'makeStyles',
		value: function makeStyles() {
			var styleObj = _get(Object.getPrototypeOf(ImageElement.prototype), 'makeStyles', this).call(this),
			    data = this.data;
			if (data.extended) styleObj.width = '100%';else styleObj['max-width'] = '100%';
			return styleObj;
		}
	}, {
		key: 'makeSettings',
		value: function makeSettings() {
			var data = this.data,
			    settings = _get(Object.getPrototypeOf(ImageElement.prototype), 'makeSettings', this).call(this);
			settings.text = data.text || 'Unknown';
			settings.wrapperstyle = this.makeWrapperStyle();
			settings.url = data.url;
			return settings;
		}
	}, {
		key: 'makeWrapperStyle',
		value: function makeWrapperStyle() {
			var style = {},
			    data = this.data;

			style['text-align'] = data.align;

			return this.convertStyles(style);
		}
	}]);

	return ImageElement;
}(_DOMObject2.DOMObject);

},{"./DOMObject.js":5}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MultipleChoiseField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Field2 = require("./Field.js");

var _CheckBox = require("./CheckBox.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultipleChoiseField = exports.MultipleChoiseField = function (_Field) {
	_inherits(MultipleChoiseField, _Field);

	function MultipleChoiseField(data, parent) {
		_classCallCheck(this, MultipleChoiseField);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MultipleChoiseField).call(this, data, parent));
	}

	_createClass(MultipleChoiseField, [{
		key: "initialize",
		value: function initialize() {
			this.template = '<div class = "[%classes%]" style="[%style%]"">' + '<label for="[%label%]" class = "sendsay-label">[%label%]</label>' + '<div type="text" class="sendsay-error"></div>' + '</div>';
			this.curValues = this.data.default || [];
			this.handleChangeValue = this.handleChangeValue.bind(this);
		}
	}, {
		key: "build",
		value: function build() {
			_get(Object.getPrototypeOf(MultipleChoiseField.prototype), "build", this).call(this);
			this.elements = [];
			var body = this.el;
			if (this.data.answers) {
				var answers = this.data.answers;
				for (var key in answers) {
					var newEl = new _CheckBox.CheckBox({
						qid: this.data.qid || '',
						label: answers[key],
						value: key,
						checked: this.curValues.indexOf(key) !== -1
					}, this);
					if (newEl) {
						newEl.el.addEventListener('sendsay-change', this.handleChangeValue);
						this.elements.push(newEl);
						body.appendChild(newEl.el);
					}
				}
			}
			return this.el;
		}
	}, {
		key: "handleChangeValue",
		value: function handleChangeValue(event) {
			var data = event.detail.extra;
			if (data.checked) {
				if (this.curValues.indexOf(data.value) === -1) this.curValues.push(data.value);
			} else {
				if (this.curValues.indexOf(data.value) !== -1) this.curValues.splice(this.curValues.indexOf(data.value), 1);
			}
		}
	}, {
		key: "getValue",
		value: function getValue() {
			return this.curValues;
		}
	}, {
		key: "validate",
		value: function validate() {
			this.removeErrorMessage();
			if (this.data.required && this.getValue().length > 0) {
				this.showErrorMessage("Обязательное поле");
				return false;
			}
			return true;
		}
	}]);

	return MultipleChoiseField;
}(_Field2.Field);

},{"./CheckBox.js":2,"./Field.js":6}],10:[function(require,module,exports){
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

},{"./Field.js":6}],11:[function(require,module,exports){
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

var _Spacer = require("./Spacer.js");

var _ImageElement = require("./ImageElement.js");

var _SingleChoiseField = require("./SingleChoiseField.js");

var _MultipleChoiseField = require("./MultipleChoiseField.js");

var _Cookies = require("./Cookies.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = exports.Popup = function (_DOMObject) {
	_inherits(Popup, _DOMObject);

	function Popup(data, parent) {
		_classCallCheck(this, Popup);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Popup).call(this, data, parent));
	}

	_createClass(Popup, [{
		key: "initialize",
		value: function initialize() {
			this.noWrapper = false;
			this.template = (!this.noWrapper ? '<div class = "sendsay-wrapper [%wrapperClasses%]">' : '') + '<div class = "[%classes%]" style="[%style%]"">' + '<div class = "sendsay-close">×</div>' + '' + '</div>' + (!this.noWrapper ? '</div>' : '');

			this.baseClass = 'sendsay-popup';
			this.applicableStyles = {
				'background-color': { param: 'backgroundColor' },
				'border-radius': { param: 'borderRadius', postfix: 'px' },
				'padding-bottom': { param: 'paddingBottom', postfix: 'px' },
				'padding-top': { param: 'paddingTop', postfix: 'px' },
				'padding-left': { param: 'paddingLeft', postfix: 'px' },
				'padding-right': { param: 'paddingRight', postfix: 'px' }
			};
			this.data.position = this.data.position || 'center';
			this.makeEndDialogData();
		}
	}, {
		key: "build",
		value: function build() {

			_get(Object.getPrototypeOf(Popup.prototype), "build", this).call(this);
			this.elements = [];
			var factory = new ElementFactory();
			var popupBody = this.el.classList.contains('sendsay-popup') ? this.el : this.el.querySelector('.sendsay-popup');
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
				var popup = this.el.classList.contains('sendsay-popup') ? this.el : this.el.querySelector('.sendsay-popup');
				if (!this.noWrapper) {
					this.el.addEventListener('click', this.handleWrapperClick.bind(this));
					this.el.addEventListener('wheel', this.handleWrapperWheel.bind(this));
					this.el.addEventListener('DOMMouseScroll', this.handleWrapperWheel.bind(this));
				}
				popup.addEventListener('click', this.handlePopupClick.bind(this));
				this.el.querySelector('.sendsay-close').addEventListener('click', this.handleClose.bind(this));
				document.addEventListener('keyup', this.handleKeyPress.bind(this));
			}
		}
	}, {
		key: "removeEvents",
		value: function removeEvents() {
			if (this.el) {
				var popup = this.el.classList.contains('sendsay-popup') ? this.el : this.el.querySelector('.sendsay-popup');
				if (!this.noWrapper) {
					this.el.removeEventListener('click', this.handleWrapperClick.bind(this));
					this.el.removeEventListener('wheel', this.handleWrapperWheel.bind(this));
					this.el.removeEventListener('DOMMouseScroll', this.handleWrapperWheel.bind(this));
				}
				popup.removeEventListener('click', this.handlePopupClick.bind(this));
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
			if (this.data.position) classes += ' sendsay-' + this.data.position;
			return classes;
		}
	}, {
		key: "activate",
		value: function activate(options) {
			this.demo = options && options.demo;
			this.ignoreKeyboard = options && options.ignoreKeyboard;
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
			this.isSubmitted = true;
			this.data = this.submitData;
			this.render();
		}
	}, {
		key: "onSubmitFail",
		value: function onSubmitFail() {}
	}, {
		key: "show",
		value: function show(options) {
			_Cookies.Cookies.set('__sendsay_forms', 'true', 60 * 60);
			if (!options || !options.el) document.querySelector('body').appendChild(this.el);else {
				this.el.style.position = 'absolute';
				if (!this.noWrapper) this.el.querySelector('.sendsay-popup').style.position = 'absolute';
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
			var button = void 0;
			if (elements) {
				for (var i = 0; i < elements.length; i++) {
					var element = elements[i];
					if (element instanceof _Field.Field) {

						data[element.data.qid] = element.getValue();
						isValid = element.validate() && isValid;
					}
					if (element instanceof _Button.Button) {
						button = element;
					}
				}
			}
			if (isValid) {
				button.el.querySelector('input').classList.add('sendsay-loading');
				this.trigger('sendsay-success', data);
			}
			return isValid;
		}
	}, {
		key: "onSubmitFail",
		value: function onSubmitFail() {
			var elements = this.elements;
			if (elements) {
				for (var i = 0; i < elements.length; i++) {
					var element = elements[i];
					if (element instanceof _Button.Button) {
						element.el.querySelector('input').classList.remove('sendsay-loading');
					}
				}
			}
		}
	}, {
		key: "showErrorFor",
		value: function showErrorFor(qid, message) {
			var elements = this.elements;
			for (var i = 0; i < elements.length; i++) {
				var element = elements[i];
				if (element.data.qid == qid) {
					element.showErrorMessage(message);
				}
			}
		}
	}, {
		key: "handleWrapperClick",
		value: function handleWrapperClick() {
			//this.hide();
		}
	}, {
		key: "handleWrapperWheel",
		value: function handleWrapperWheel(event) {

			event.preventDefault();
			return false;
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
			if (!this.ignoreKeyboard) return;
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
	}, {
		key: "handleClose",
		value: function handleClose(event) {
			this.hide();
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
				case 'intField':
					return new _NumberField.NumberField(data, parent);
				case 'textField':
					return new _Field.Field(data, parent);
				case 'radioField':
					return new _SingleChoiseField.SingleChoiseField(data, parent);
				case 'checkboxField':
					return new _MultipleChoiseField.MultipleChoiseField(data, parent);
				case 'int':
					return new _NumberField.NumberField(data, parent);
				case 'free':
					return new _Field.Field(data, parent);
				case 'image':
					return new _ImageElement.ImageElement(data, parent);
				case 'spacer':
					return new _Spacer.Spacer(data, parent);
				case 'field':
					switch (data.subtype) {
						case 'int':
							return new _NumberField.NumberField(data, parent);
						case '1m':
							return new _SingleChoiseField.SingleChoiseField(data, parent);
						case 'nm':
							return new _MultipleChoiseField.MultipleChoiseField(data, parent);
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

},{"./Button.js":1,"./Cookies.js":4,"./DOMObject.js":5,"./Field.js":6,"./ImageElement.js":8,"./MultipleChoiseField.js":9,"./NumberField.js":10,"./SingleChoiseField.js":13,"./Spacer.js":14,"./Text.js":15}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RadioButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _DOMObject2 = require('./DOMObject.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = exports.RadioButton = function (_DOMObject) {
	_inherits(RadioButton, _DOMObject);

	function RadioButton(data, parent) {
		_classCallCheck(this, RadioButton);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(RadioButton).call(this, data, parent));
	}

	_createClass(RadioButton, [{
		key: 'initialize',
		value: function initialize() {
			this.template = '<div class = "[%classes%]" style="[%style%]">' + '<input [%checked%] name="[%qid%]" value="[%value%]" type="radio" class="sendsay-radioinput"/>' + (this.data.label ? '<label for="[%qid%]" class = "sendsay-label">[%label%]</label>' : '') + '</div>';
			this.baseClass = 'sendsay-radio';
			this.handleChange = this.handleChange.bind(this);
			this.handleClick = this.handleClick.bind(this);
		}
	}, {
		key: 'build',
		value: function build() {
			return _get(Object.getPrototypeOf(RadioButton.prototype), 'build', this).call(this);
		}
	}, {
		key: 'makeSettings',
		value: function makeSettings() {
			var data = this.data,
			    settings = _get(Object.getPrototypeOf(RadioButton.prototype), 'makeSettings', this).call(this);

			settings.label = data.label || data.name || '';
			settings.qid = data.qid || data.name || '';
			settings.value = data.value || '';
			settings.checked = data.checked ? 'checked' : '';
			if (data.hidden) {
				settings.classes += ' sendsay-field-hidden';
			}
			return settings;
		}
	}, {
		key: 'addEvents',
		value: function addEvents() {
			if (this.el) {
				this.el.querySelector('input').addEventListener('change', this.handleChange);
				this.el.querySelector('label').addEventListener('click', this.handleClick);
			}
		}
	}, {
		key: 'removeEvents',
		value: function removeEvents() {
			if (this.el) {
				this.el.querySelector('input').removeEventListener('change', this.handleChange);
				this.el.querySelector('label').removeEventListener('click', this.handleClick);
			}
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			event.stopPropagation();
			this.trigger('sendsay-change', {
				checked: event.target.checked,
				value: event.target.value
			});
		}
	}, {
		key: 'handleClick',
		value: function handleClick(event) {

			event.stopPropagation();
			var input = this.el.querySelector('input');
			input.checked = true;
		}
	}, {
		key: 'makeStyles',
		value: function makeStyles() {
			var styleObj = _get(Object.getPrototypeOf(RadioButton.prototype), 'makeStyles', this).call(this);
			// 	data = this.data;
			// if(this.parent && this.parent.data && this.parent.data.textColor)
			// 	styleObj.color = this.parent.data.textColor;
			return styleObj;
		}
	}]);

	return RadioButton;
}(_DOMObject2.DOMObject);

},{"./DOMObject.js":5}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SingleChoiseField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Field2 = require("./Field.js");

var _RadioButton = require("./RadioButton.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleChoiseField = exports.SingleChoiseField = function (_Field) {
	_inherits(SingleChoiseField, _Field);

	function SingleChoiseField(data, parent) {
		_classCallCheck(this, SingleChoiseField);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SingleChoiseField).call(this, data, parent));
	}

	_createClass(SingleChoiseField, [{
		key: "initialize",
		value: function initialize() {
			this.template = '<div class = "[%classes%]" style="[%style%]"">' + '<label for="[%label%]" class = "sendsay-label">[%label%]</label>' + '<div type="text" class="sendsay-error"></div>' + '</div>';
			this.curValue = this.data.default || '';
			this.handleChangeValue = this.handleChangeValue.bind(this);
		}
	}, {
		key: "build",
		value: function build() {
			_get(Object.getPrototypeOf(SingleChoiseField.prototype), "build", this).call(this);
			this.elements = [];
			var body = this.el;
			if (this.data.answers) {
				var answers = this.data.answers;
				for (var key in answers) {
					var newEl = new _RadioButton.RadioButton({
						qid: this.data.qid || '',
						label: answers[key],
						value: key,
						checked: key === this.curValue

					}, this);
					if (newEl) {
						newEl.el.addEventListener('sendsay-change', this.handleChangeValue);
						this.elements.push(newEl);
						body.appendChild(newEl.el);
					}
				}
			}
			return this.el;
		}
	}, {
		key: "handleChangeValue",
		value: function handleChangeValue(event) {
			var data = event.detail.extra;
			this.curValue = data.value;
		}
	}, {
		key: "getValue",
		value: function getValue() {
			return this.curValue;
		}
	}]);

	return SingleChoiseField;
}(_Field2.Field);

},{"./Field.js":6,"./RadioButton.js":12}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Spacer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DOMObject2 = require('./DOMObject.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spacer = exports.Spacer = function (_DOMObject) {
	_inherits(Spacer, _DOMObject);

	function Spacer(data, parent) {
		_classCallCheck(this, Spacer);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Spacer).call(this, data, parent));
	}

	_createClass(Spacer, [{
		key: 'initialize',
		value: function initialize() {
			this.template = '<div class = "[%classes%]" style="[%style%]">' + '</div>';

			this.baseClass = 'sendsay-spacer';
			this.applicableStyles = {
				'height': { param: 'height', postfix: 'px' }
			};
		}
	}]);

	return Spacer;
}(_DOMObject2.DOMObject);

},{"./DOMObject.js":5}],15:[function(require,module,exports){
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

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Text).call(this, data, parent));
	}

	_createClass(Text, [{
		key: 'initialize',
		value: function initialize() {
			this.template = '<div class = "sendsay-text" style="[%style%]"">' + '[%text%]' + '</div>';
			this.baseClass = 'sendsay-text';
			this.applicableStyles = {
				'text-align': { param: 'align', default: 'left' },
				'line-height': { param: 'lineHeight', default: 'normal' },
				'padding-bottom': { param: 'paddingBottom', postfix: 'px' },
				'padding-top': { param: 'paddingTop', postfix: 'px' },
				'padding-left': { param: 'paddingLeft', postfix: 'px' },
				'padding-right': { param: 'paddingRight', postfix: 'px' }

			};
		}
	}, {
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

},{"./DOMObject.js":5}],16:[function(require,module,exports){
"use strict";

var _Popup = require("./classes/Popup.js");

var _Connector = require("./classes/Connector.js");

var _Form = require("./classes/Form.js");

(function () {

	var activatePopup = function activatePopup(url, options) {
		loadCss();
		var onLoad = function onLoad() {
			var connector = new _Connector.Connector(url);
			var form = new _Form.Form(_Popup.Popup, connector);
			window.removeEventListener('load', onLoad);
		};

		if (document.readyState === "complete") {
			onLoad();
		} else {
			window.addEventListener('load', onLoad);
		}
	};

	var showPopup = function showPopup(data, options) {
		//loadCss();
		var popup = new _Popup.Popup(data);
		popup.activate(options);
	};

	var loadCss = function loadCss() {
		var cssId = '_sendsay-styles'; // you could encode the css path itself to generate id..
		if (!document.getElementById(cssId)) {
			var head = document.getElementsByTagName('head')[0];
			var link = document.createElement('link');
			link.id = cssId;
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = 'https://dl.dropbox.com/s/hq9cw3paj4tcube/sendsayforms.css';
			link.media = 'all';
			head.appendChild(link);
		}
	};
	window.SENDSAY = {
		activatePopup: activatePopup,
		showPopup: showPopup
	};
})();

},{"./classes/Connector.js":3,"./classes/Form.js":7,"./classes/Popup.js":11}]},{},[16,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
