(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],2:[function(require,module,exports){
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],3:[function(require,module,exports){
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],4:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],5:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],6:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],7:[function(require,module,exports){
var superPropBase = require("./superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./superPropBase.js":16}],8:[function(require,module,exports){
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],9:[function(require,module,exports){
var setPrototypeOf = require("./setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./setPrototypeOf.js":14}],10:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],11:[function(require,module,exports){
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],12:[function(require,module,exports){
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],13:[function(require,module,exports){
var _typeof = require("@babel/runtime/helpers/typeof")["default"];

var assertThisInitialized = require("./assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./assertThisInitialized.js":3,"@babel/runtime/helpers/typeof":17}],14:[function(require,module,exports){
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],15:[function(require,module,exports){
var arrayWithHoles = require("./arrayWithHoles.js");

var iterableToArrayLimit = require("./iterableToArrayLimit.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableRest = require("./nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayWithHoles.js":2,"./iterableToArrayLimit.js":11,"./nonIterableRest.js":12,"./unsupportedIterableToArray.js":18}],16:[function(require,module,exports){
var getPrototypeOf = require("./getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./getPrototypeOf.js":8}],17:[function(require,module,exports){
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],18:[function(require,module,exports){
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{"./arrayLikeToArray.js":1}],19:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _attributes = require("./attributes");

var ClickTrigger = /*#__PURE__*/function () {
  function ClickTrigger() {
    (0, _classCallCheck2["default"])(this, ClickTrigger);
    this.attributes = [_attributes.ATTRIBUTES.SUBSCRIBE];
  }

  (0, _createClass2["default"])(ClickTrigger, [{
    key: "watch",
    value: function watch(resolve) {
      document.addEventListener('click', function (e) {
        var attr = e.target.getAttribute(_attributes.ATTRIBUTES.SUBSCRIBE);

        if (!attr) {
          return;
        }

        resolve(attr);
      });
    }
  }]);
  return ClickTrigger;
}();

exports["default"] = ClickTrigger;

},{"./attributes":28,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":10}],20:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConditionWatcher = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Cookies = require("./Cookies");

var _utils = require("./utils");

var _ClickTrigger = _interopRequireDefault(require("./ClickTrigger"));

var ConditionWatcher = /*#__PURE__*/function () {
  function ConditionWatcher(rawConditions, _ref) {
    var id = _ref.id,
        formId = _ref.formId,
        login = _ref.login;
    (0, _classCallCheck2["default"])(this, ConditionWatcher);
    this.globCond = rawConditions; // eslint-disable-next-line no-multi-assign

    var conditions = this.conditions = rawConditions.showCondition;
    this.id = id;
    this.login = login;
    this.formId = formId; // eslint-disable-next-line eqeqeq

    this.instant = conditions.instant != undefined ? conditions.instant : true;
    this.pageScroll = parseInt(conditions.onPageScroll, 10) || 0;
    this.onLeave = conditions.onLeave || false;
    this.delay = parseInt(conditions.delay, 10) || 0;
    this.active = rawConditions.active;
    this.leaveWatcher = this.leaveWatcher.bind(this);
    this.scrollWatcher = this.scrollWatcher.bind(this);
  }

  (0, _createClass2["default"])(ConditionWatcher, [{
    key: "watch",
    value: function watch(resolve, reject) {
      var _this = this;

      this.resolve = resolve;
      this.reject = reject;
      this.isDone = false;

      if (!this.active) {
        return;
      }

      var clickTrigger = new _ClickTrigger["default"]();
      clickTrigger.watch(function (attr) {
        if (attr === "".concat(_this.login, "/").concat(_this.formId)) {
          resolve('click');
        }
      });

      if (this.isRejectByCookie()) {
        reject();
        return;
      }

      if (this.instant) {
        resolve('instant');
        return;
      }

      if (this.pageScroll) {
        document.addEventListener('scroll', this.scrollWatcher);
        this.scrollWatcher();

        if (this.isDone) {
          return;
        }
      }

      if (this.onLeave) {
        if (document.body) {
          document.body.addEventListener('mouseleave', this.leaveWatcher);
        } else {
          document.addEventListener('mouseleave', this.leaveWatcher);
        }

        var id = this.id; // eslint-disable-next-line radix

        localStorage["sendsay-form-".concat(id)] = parseInt(localStorage["sendsay-form-".concat(id)]) + 1 || 1;

        window.onbeforeunload = function () {
          // eslint-disable-next-line radix
          localStorage["sendsay-form-".concat(id)] = parseInt(localStorage["sendsay-form-".concat(id)]) - 1 || 0;
        };
      }

      if (this.delay) {
        this.timeoutID = setTimeout(this.delayWatcher.bind(this), this.delay * 1000);
      }
    }
  }, {
    key: "isRejectByCookie",
    value: function isRejectByCookie() {
      if (this.globCond.ignoreCookie) {
        return false;
      }

      if (_Cookies.Cookies.has("__sendsay_forms_".concat(this.id))) {
        if (_Cookies.Cookies.get("__sendsay_forms_".concat(this.id)) === this.globCond.frequency) {
          return true;
        }

        if (this.globCond.frequency) {
          _Cookies.Cookies.set("__sendsay_forms_".concat(this.id), this.globCond.frequency, this.globCond.frequency, '/', (0, _utils.getHostName)());

          return true;
        }

        _Cookies.Cookies.remove("__sendsay_forms_".concat(this.id));
      }

      if ( // eslint-disable-next-line eqeqeq
      this.conditions.multipleSubmit != undefined && !this.conditions.multipleSubmit) {
        if (_Cookies.Cookies.has("__sendsay_forms_submit_".concat(this.id))) {
          return true;
        }
      }

      if (this.conditions.maxCount) {
        if (_Cookies.Cookies.has("__sendsay_forms_count_".concat(this.id)) && +_Cookies.Cookies.get("__sendsay_forms_count_".concat(this.id)) >= +this.conditions.maxCount) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "scrollWatcher",
    value: function scrollWatcher() {
      var curScroll = document.documentElement.scrollTop || window.pageYOffset;
      var maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var showScroll = this.pageScroll;

      if (maxScroll <= 0 || showScroll <= curScroll / maxScroll * 100) {
        this.satisfyCondition('scroll');
      }
    }
  }, {
    key: "leaveWatcher",
    value: function leaveWatcher() {
      var opened = localStorage["sendsay-form-".concat(this.id)];

      if (!opened || parseInt(opened, 10) < 2) {
        this.satisfyCondition('leave');
      }
    }
  }, {
    key: "removeLeaveWatcher",
    value: function removeLeaveWatcher() {
      if (document.body) {
        document.body.removeEventListener('mouseleave', this.leaveWatcher);
      } else {
        document.removeEventListener('mouseleave', this.leaveWatcher);
      }
    }
  }, {
    key: "delayWatcher",
    value: function delayWatcher() {
      this.satisfyCondition('delay');
    }
  }, {
    key: "satisfyCondition",
    value: function satisfyCondition(event) {
      this.isDone = true;
      this.stopWatch();
      this.resolve(event);
    }
  }, {
    key: "stopWatch",
    value: function stopWatch() {
      document.removeEventListener('scroll', this.scrollWatcher);
      this.removeLeaveWatcher();

      if (this.timeoutID) {
        clearTimeout(this.timeoutID);
      }
    }
  }]);
  return ConditionWatcher;
}();

exports.ConditionWatcher = ConditionWatcher;

},{"./ClickTrigger":19,"./Cookies":22,"./utils":47,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":10}],21:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connector = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Connector = /*#__PURE__*/function () {
  function Connector(url) {
    (0, _classCallCheck2["default"])(this, Connector);
    this.url = url;

    var _this$extractID = this.extractID(this.url),
        id = _this$extractID.id,
        login = _this$extractID.login,
        formId = _this$extractID.formId;

    this.id = id;
    this.login = login;
    this.formId = formId;
  }

  (0, _createClass2["default"])(Connector, [{
    key: "extractID",
    value: function extractID(url) {
      var login = '';
      var formId = '';
      var id = '';
      var res = url.match(/[^/s\/]*\/[^/s\/]*\/?$/);

      if (res) {
        var parts = res[0].split('/');

        var _parts = (0, _slicedToArray2["default"])(parts, 2);

        login = _parts[0];
        formId = _parts[1];
        id = "".concat(login, "-").concat(formId);
      }

      return {
        login: login,
        formId: formId,
        id: id
      };
    }
  }, {
    key: "promiseHandler",
    value: function promiseHandler(resolve, reject) {
      var self = this;

      this.request.onreadystatechange = function () {
        if (self.request.readyState === 4) {
          self.pending = false;
          var success = true;

          if (self.request.onReady) {
            success = self.request.onReady.apply(self);
          }

          if (self.request.status === 200 && success) {
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
    key: "load",
    value: function load() {
      if (this.pending) {
        return;
      }

      this.request = new XMLHttpRequest();
      this.request.open('GET', this.url, true);
      this.request.setRequestHeader('Accept', 'application/json'); // eslint-disable-next-line compat/compat

      return new Promise(this.promiseHandler.bind(this)).then(this.handleLoadSuccess.bind(this), this.handleLoadFail.bind(this));
    }
  }, {
    key: "transformAnswer",
    value: function transformAnswer(json) {
      if (json.obj && json.obj.settings) {
        this.data = json.obj.settings;
        this.data.id = this.id;

        if (json.obj.state && +json.obj.state === 1) {
          this.data.active = true;
        }
      }
    }
  }, {
    key: "submit",
    value: function submit(params) {
      if (this.pending) {
        return;
      }

      this.request = new XMLHttpRequest();
      this.request.open('POST', this.url, true);
      this.request.setRequestHeader('Content-Type', 'application/json');
      this.request.setRequestHeader('Accept', 'application/json');
      this.request.onReady = this.handleSubmitResult;
      this.params = JSON.stringify(params); // eslint-disable-next-line compat/compat

      return new Promise(this.promiseHandler.bind(this));
    }
  }, {
    key: "handleSubmitResult",
    value: function handleSubmitResult() {
      var el = document.createElement('div');
      var json;
      el.innerHTML = this.request.responseText;

      try {
        json = JSON.parse(this.request.responseText);
      } catch (e) {
        console.log(e);
        return false;
      }

      this.error = json.errors;

      if (json.errors) {
        return false;
      }

      return true;
    }
  }, {
    key: "handleLoadSuccess",
    value: function handleLoadSuccess() {
      var rawJson = this.request.responseText;
      var json = JSON.parse(rawJson);

      if (!json.errors) {
        this.transformAnswer(json);
      } else {
        this.errors = json.errors;
      }
    }
  }, {
    key: "handleLoadFail",
    value: function handleLoadFail() {}
  }]);
  return Connector;
}();

exports.Connector = Connector;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/slicedToArray":15}],22:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cookies = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Cookies = /*#__PURE__*/function () {
  function Cookies() {
    (0, _classCallCheck2["default"])(this, Cookies);
  }

  (0, _createClass2["default"])(Cookies, null, [{
    key: "get",
    value: function get(sKey) {
      if (!sKey) {
        return null;
      }

      return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*".concat(encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&'), "\\s*\\=\\s*([^;]*).*$)|^.*$")), '$1')) || null;
    }
  }, {
    key: "set",
    value: function set(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
      if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
        return false;
      }

      var sExpires = '';

      if (vEnd) {
        // eslint-disable-next-line default-case
        switch (vEnd.constructor) {
          case Number:
            sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : "; max-age=".concat(vEnd);
            break;

          case String:
            sExpires = "; expires=".concat(vEnd);
            break;

          case Date:
            sExpires = "; expires=".concat(vEnd.toUTCString());
            break;
        }
      }

      document.cookie = "".concat(encodeURIComponent(sKey), "=").concat(encodeURIComponent(sValue)).concat(sExpires).concat(sDomain ? "; domain=".concat(sDomain) : '').concat(sPath ? "; path=".concat(sPath) : '').concat(bSecure ? '; secure' : '');
      return true;
    }
  }, {
    key: "remove",
    value: function remove(sKey, sPath, sDomain) {
      if (!this.has(sKey)) {
        return false;
      }

      document.cookie = "".concat(encodeURIComponent(sKey), "=; expires=Thu, 01 Jan 1970 00:00:00 GMT").concat(sDomain ? "; domain=".concat(sDomain) : '').concat(sPath ? "; path=".concat(sPath) : '');
      return true;
    }
  }, {
    key: "has",
    value: function has(sKey) {
      if (!sKey) {
        return false;
      }

      return new RegExp("(?:^|;\\s*)".concat(encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&'), "\\s*\\=")).test(document.cookie);
    }
  }, {
    key: "keys",
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

exports.Cookies = Cookies;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":10}],23:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementFactory = void 0;

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Field = require("./elements/Field");

var _NumberField = require("./elements/NumberField");

var _Button = require("./elements/Button");

var _Text = require("./elements/Text");

var _Spacer = require("./elements/Spacer");

var _ImageElement = require("./elements/ImageElement");

var _SingleChoiseField = require("./elements/SingleChoiseField");

var _MultipleChoiseField = require("./elements/MultipleChoiseField");

var _DateField = require("./elements/DateField");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Factory = /*#__PURE__*/function () {
  function Factory() {
    (0, _classCallCheck2["default"])(this, Factory);
  }

  (0, _createClass2["default"])(Factory, [{
    key: "make",
    value: function make() {
      return {};
    }
  }]);
  return Factory;
}();

var ElementFactory = /*#__PURE__*/function (_Factory) {
  (0, _inherits2["default"])(ElementFactory, _Factory);

  var _super = _createSuper(ElementFactory);

  function ElementFactory() {
    (0, _classCallCheck2["default"])(this, ElementFactory);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ElementFactory, [{
    key: "make",
    value: function make(data, parent) {
      // eslint-disable-next-line default-case
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

        case 'dateField':
          return new _DateField.DateField(data, parent);

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

        case 'button':
          return new _Button.Button(data, parent);
      }
    }
  }]);
  return ElementFactory;
}(Factory);

exports.ElementFactory = ElementFactory;

},{"./elements/Button":29,"./elements/DateField":33,"./elements/Field":35,"./elements/ImageElement":36,"./elements/MultipleChoiseField":37,"./elements/NumberField":39,"./elements/SingleChoiseField":43,"./elements/Spacer":44,"./elements/Text":45,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],24:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _attributes = require("./attributes");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var EmbeddedFormWatcher = function EmbeddedFormWatcher(activatePopup) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, EmbeddedFormWatcher);
  (0, _defineProperty2["default"])(this, "start", function () {
    _this.checkEmbeddedForms();

    document.addEventListener('DOMContentLoaded', _this.checkEmbeddedForms);

    _this.embeddedFormWatcher();
  });
  (0, _defineProperty2["default"])(this, "checkEmbeddedForms", function () {
    var elements = document.querySelectorAll("[".concat(_attributes.ATTRIBUTES.EMBEDDED, "]"));
    elements.forEach(function (el) {
      var formId = el.getAttribute(_attributes.ATTRIBUTES.EMBEDDED);

      if (!formId || el.hasAttribute(_attributes.ATTRIBUTES.INIT)) {
        return;
      }

      el.setAttribute(_attributes.ATTRIBUTES.INIT, true);

      _this.activatePopup("https://sendsay.ru/form/".concat(formId), {
        el: el
      });
    });
  });
  (0, _defineProperty2["default"])(this, "embeddedFormWatcher", function () {
    var callback = function callback(mutationsList) {
      // eslint-disable-next-line no-restricted-syntax
      var _iterator = _createForOfIteratorHelper(mutationsList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _step.value,
              type = _step$value.type,
              addedNodes = _step$value.addedNodes;

          if (type !== 'childList' || !addedNodes) {
            return;
          }

          _this.checkEmbeddedForms();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    var observer = new MutationObserver(callback);
    observer.observe(document, {
      attributes: false,
      childList: true,
      subtree: true
    });
  });
  this.activatePopup = activatePopup;
};

var _default = EmbeddedFormWatcher;
exports["default"] = _default;

},{"./attributes":28,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/interopRequireDefault":10}],25:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ConditionWatcher = require("./ConditionWatcher");

var _Cookies = require("./Cookies");

var _Popup = require("./elements/Popup");

var _PopupBar = require("./elements/PopupBar");

var _Embedded = require("./elements/Embedded");

var _ToggleablePopup = require("./elements/ToggleablePopup");

var _utils = require("./utils");

var _NotificationService = _interopRequireDefault(require("./NotificationService"));

var _ClickTrigger = _interopRequireDefault(require("./ClickTrigger"));

var Form = /*#__PURE__*/function () {
  function Form(connector, options) {
    (0, _classCallCheck2["default"])(this, Form);
    this.options = options || {};
    this.connector = connector;
    var promise = connector.load();

    if (promise) {
      promise.then(this.handleSuccess.bind(this), this.handleFail.bind(this));
    }
  }

  (0, _createClass2["default"])(Form, [{
    key: "processConditionsSettings",
    value: function processConditionsSettings() {
      var settings = this.connector.data.settings || {};
      var conditions = JSON.parse(JSON.stringify(settings));
      conditions.showCondition = conditions.showCondition || {};

      if (this.options.instant) {
        conditions.showCondition.instant = true;
      }

      if (this.options.ignoreState) {
        conditions.ignoreState = true;
      }

      if (this.options.ignoreCookie) {
        conditions.ignoreCookie = true;
      }

      conditions.active = this.connector.data.active;
      return conditions;
    }
  }, {
    key: "setFrequencyCookie",
    value: function setFrequencyCookie(data) {
      if (!data) {
        return;
      }

      if (data && data.settings && data.settings.frequency) {
        _Cookies.Cookies.set("__sendsay_forms_".concat(data.id), data.settings.frequency, data.settings.frequency, '/', (0, _utils.getHostName)());
      }
    }
  }, {
    key: "setCountCookie",
    value: function setCountCookie(data) {
      if (!data) {
        return;
      }

      var count = +_Cookies.Cookies.get("__sendsay_forms_count_".concat(data.id)) || 0;

      if (data) {
        _Cookies.Cookies.set("__sendsay_forms_count_".concat(data.id), count + 1, 94608000, '/', (0, _utils.getHostName)());
      }
    }
  }, {
    key: "setSubmitCookie",
    value: function setSubmitCookie(data) {
      if (!data) {
        return;
      }

      if (data) {
        _Cookies.Cookies.set("__sendsay_forms_submit_".concat(data.id), true, 94608000, '/', (0, _utils.getHostName)());
      }
    }
  }, {
    key: "handleSuccess",
    value: function handleSuccess() {
      var _this = this;

      var _this$connector = this.connector,
          data = _this$connector.data,
          id = _this$connector.id,
          formId = _this$connector.formId,
          login = _this$connector.login;

      if (this.connector.errors) {
        var clickTrigger = new _ClickTrigger["default"]();
        clickTrigger.watch(function () {
          _NotificationService["default"].show();
        });
        return;
      }

      var conditions = this.processConditionsSettings();
      var watcher = new _ConditionWatcher.ConditionWatcher(conditions, {
        id: id,
        formId: formId,
        login: login
      });
      var DomConstructor = null;
      watcher.watch(function (event) {
        var _this$domObj;

        // eslint-disable-next-line default-case
        switch (data.type) {
          case 'popup':
            DomConstructor = _Popup.Popup;
            break;

          case 'bar':
            DomConstructor = _PopupBar.PopupBar;
            break;

          case 'widget':
            DomConstructor = _ToggleablePopup.ToggleablePopup;
            break;

          case 'embedded':
            DomConstructor = _Embedded.Embedded;
            break;
        }

        if (!DomConstructor || (_this$domObj = _this.domObj) !== null && _this$domObj !== void 0 && _this$domObj.isShow) {
          return;
        }

        _this.domObj = null; // eslint-disable-next-line new-cap

        _this.domObj = new DomConstructor(data);

        _this.domObj.activate(_this.options);

        _this.domObj.el.addEventListener('sendsay-success', _this.handleSubmit.bind(_this));

        _this.setFrequencyCookie(_this.connector.data);

        _this.setCountCookie(_this.connector.data);

        if (data.type === 'widget' && ['scroll', 'delay', 'click'].includes(event)) {
          _this.domObj.handleTogglerClick();
        }
      }, function () {});
    }
  }, {
    key: "handleFail",
    value: function handleFail() {}
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      if (this.options.fakeSubmit) {
        return this.handleSuccessSubmit();
      }

      var params = event.detail.extra;
      var promise = this.connector.submit(params);

      if (promise) {
        promise.then(this.handleSuccessSubmit.bind(this), this.handleFailSubmit.bind(this));
      }
    }
  }, {
    key: "handleSuccessSubmit",
    value: function handleSuccessSubmit() {
      this.domObj.showEndDialog();
      this.setSubmitCookie(this.connector.data);
    }
  }, {
    key: "handleFailSubmit",
    value: function handleFailSubmit() {
      this.domObj.onSubmitFail();
      var error = this.connector.error;

      if (error && (this.findInErrors(error, 'wrong_member_email') || this.findInErrors(error, 'error/email'))) {
        this.domObj.showErrorFor('_member_email', 'Неверный формат email адреса');
      }
    }
  }, {
    key: "findInErrors",
    value: function findInErrors(errors, errorId) {
      for (var i = 0; i < errors.length; i++) {
        if (errors[i].id.includes(errorId)) {
          return true;
        }
      }

      return false;
    }
  }]);
  return Form;
}();

exports.Form = Form;

},{"./ClickTrigger":19,"./ConditionWatcher":20,"./Cookies":22,"./NotificationService":27,"./elements/Embedded":34,"./elements/Popup":40,"./elements/PopupBar":41,"./elements/ToggleablePopup":46,"./utils":47,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":10}],26:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaQuery = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var MediaQuery = /*#__PURE__*/function () {
  function MediaQuery(data, options) {
    (0, _classCallCheck2["default"])(this, MediaQuery);
    this.data = data;
    this.options = options;
    this.makeStyle(data);
  }

  (0, _createClass2["default"])(MediaQuery, [{
    key: "makeStyle",
    value: function makeStyle() {
      var content = '';
      var conditions = this.data.conditions;
      var selectors = this.data.selectors;
      content += "".concat(this.makeMediaCondition(conditions), "{"); // eslint-disable-next-line

      for (var key in selectors) {
        var rules = selectors[key];
        content += this.makeSelectorRule(key, rules);
      }

      content += ' }';
      var styleEl = document.createElement('style');
      styleEl.type = 'text/css';

      if (styleEl.styleSheet) {
        styleEl.styleSheet.cssText = content;
      } else {
        styleEl.appendChild(document.createTextNode(content));
      }

      var children = document.head.querySelectorAll('*');
      styleEl.id = 'sendsay-generated-sheet';
      document.head.appendChild(styleEl, children[children.length - 1]);
      this.el = styleEl;
    }
  }, {
    key: "makeMediaCondition",
    value: function makeMediaCondition(conditions) {
      var condition = '@media ';

      for (var i = 0; i < conditions.length; i++) {
        condition += " ".concat(i === 0 ? '' : 'and', " ").concat(conditions[i]);
      }

      return condition;
    }
  }, {
    key: "makeSelectorRule",
    value: function makeSelectorRule(selector, rules) {
      var result = " ".concat(selector, " { "); // eslint-disable-next-line

      for (var key in rules) {
        var rule = rules[key];
        result += " ".concat(key, ":").concat(rule, ";");
      }

      result += ' } ';
      return result;
    }
  }]);
  return MediaQuery;
}();

exports.MediaQuery = MediaQuery;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":10}],27:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Notification = require("./elements/Notification");

var NotificationService = function NotificationService() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, NotificationService);
  (0, _defineProperty2["default"])(this, "show", function () {
    var _this$domObj;

    if ((_this$domObj = _this.domObj) !== null && _this$domObj !== void 0 && _this$domObj.isShow) {
      return;
    }

    _this.domObj = new _Notification.Notification(_this.options());

    _this.domObj.activate();
  });
  (0, _defineProperty2["default"])(this, "options", function () {
    return {
      active: true,
      appearance: {
        animation: 'slide',
        backgroundColor: '#fff',
        borderRadius: '20',
        labelFontFamily: '"Open Sans",Helvetica,Arial,sans-serif',
        labelFontSize: '14',
        labelTextColor: '#000',
        overlayEnabled: false,
        paddingBottom: '20',
        paddingLeft: '20',
        paddingRight: '20',
        paddingTop: '20',
        position: 'notify',
        textColor: '#000',
        width: 400
      },
      settings: {},
      steps: [],
      toggle: {},
      type: 'widget'
    };
  });
  this.notify = null;
};

var instance = null;

var getInstance = function getInstance() {
  if (!instance) {
    instance = new NotificationService();
  }

  return instance;
};

var _default = getInstance();

exports["default"] = _default;

},{"./elements/Notification":38,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/interopRequireDefault":10}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ATTRIBUTES = void 0;
var ATTRIBUTES = {
  INIT: 'data-sendsay-form-init',
  EMBEDDED: 'data-sendsay-form-embedded',
  SUBSCRIBE: 'data-sendsay-form-subscribe'
};
exports.ATTRIBUTES = ATTRIBUTES;

},{}],29:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _DOMObject2 = require("./DOMObject");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Button = /*#__PURE__*/function (_DOMObject) {
  (0, _inherits2["default"])(Button, _DOMObject);

  var _super = _createSuper(Button);

  function Button() {
    (0, _classCallCheck2["default"])(this, Button);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Button, [{
    key: "initialize",
    value: function initialize() {
      this.template = '<div class = "[%classes%]" style="[%wrapperstyle%]">' + '<input type="button"  value="[%text%]"  style="[%style%]" />' + '</div>';
      this.baseClass = 'sendsay-button';
      this.applicableStyles = {
        'background-color': {
          param: 'backgroundColor'
        },
        'border-radius': {
          param: 'borderRadius',
          postfix: 'px'
        },
        color: {
          param: 'textColor'
        },
        'line-height': {
          param: 'lineHeight',
          postfix: 'em',
          "default": 'normal'
        },
        'font-family': {
          param: 'fontFamily'
        },
        'font-size': {
          param: 'fontSize',
          postfix: 'px'
        }
      };
      this.wrapperApplStyles = {
        'padding-bottom': {
          param: 'paddingBottom',
          postfix: 'px'
        },
        'padding-top': {
          param: 'paddingTop',
          postfix: 'px'
        },
        'padding-left': {
          param: 'paddingLeft',
          postfix: 'px'
        },
        'padding-right': {
          param: 'paddingRight',
          postfix: 'px'
        }
      };
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      if (this.el) {
        this.el.querySelector('input').addEventListener('click', this.handleClick.bind(this));
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.trigger('sendsay-click');
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      if (this.el) {
        this.el.querySelector('input').removeEventListener('click', this.handleClick.bind(this));
      }
    }
  }, {
    key: "makeStyles",
    value: function makeStyles() {
      var data = this.data.appearance || {};
      data.fontFamily = this.escapeStyle(data.fontFamily);
      var styleObj = (0, _get2["default"])((0, _getPrototypeOf2["default"])(Button.prototype), "makeStyles", this).call(this);

      if (data.align === 'justify') {
        styleObj.width = '100%';
      }

      return styleObj;
    }
  }, {
    key: "makeSettings",
    value: function makeSettings() {
      var data = this.data.content || {};
      var settings = (0, _get2["default"])((0, _getPrototypeOf2["default"])(Button.prototype), "makeSettings", this).call(this);
      settings.text = this.escapeHTML(data.text || 'Unknown');
      settings.wrapperstyle = this.makeWrapperStyle();
      return settings;
    }
  }, {
    key: "makeWrapperStyle",
    value: function makeWrapperStyle() {
      var style = {};
      var data = this.data.appearance || {};

      if (data.align !== 'justify') {
        style['text-align'] = data.align;
      }

      style = this.extend(style, this.applyStyles(this.wrapperApplStyles));
      return this.convertStyles(style);
    }
  }]);
  return Button;
}(_DOMObject2.DOMObject);

exports.Button = Button;

},{"./DOMObject":32,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/get":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],30:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _DOMObject2 = require("./DOMObject");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CheckBox = /*#__PURE__*/function (_DOMObject) {
  (0, _inherits2["default"])(CheckBox, _DOMObject);

  var _super = _createSuper(CheckBox);

  function CheckBox() {
    (0, _classCallCheck2["default"])(this, CheckBox);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(CheckBox, [{
    key: "initialize",
    value: function initialize() {
      this.template = "".concat('<div class = "[%classes%]" style="[%style%]"">' + '<input [%checked%] name="[%qid%]" value="[%value%]" type="checkbox" class="sendsay-checkinput"/>').concat(this.data.content.label ? '<label for="[%label%]" class = "sendsay-label">[%label%]</label>' : '', "</div>");
      this.baseClass = 'sendsay-checkbox';
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.applicableStyles = {
        color: {
          param: 'labelTextColor'
        },
        'font-family': {
          param: 'labelFontFamily'
        },
        'font-size': {
          param: 'labelFontSize',
          postfix: 'px'
        }
      };
    }
  }, {
    key: "build",
    value: function build() {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(CheckBox.prototype), "build", this).call(this);
    }
  }, {
    key: "makeSettings",
    value: function makeSettings() {
      var content = this.data.content || {};
      var field = this.data.field || {};
      var appearance = this.data.appearance || {};
      var settings = (0, _get2["default"])((0, _getPrototypeOf2["default"])(CheckBox.prototype), "makeSettings", this).call(this);
      settings.label = this.escapeHTML(content.label || content.name || '');
      settings.qid = field.qid || field.name || '';
      settings.value = content.value || '';
      settings.checked = content.checked ? 'checked' : '';

      if (appearance.hidden) {
        settings.classes += ' sendsay-field-hidden';
      }

      return settings;
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      if (this.el) {
        this.el.querySelector('input').addEventListener('change', this.handleChange);

        if (this.el.querySelector('label')) {
          this.el.querySelector('label').addEventListener('click', this.handleClick);
        }
      }
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      if (this.el) {
        this.el.querySelector('input').removeEventListener('change', this.handleChange);

        if (this.el.querySelector('label')) {
          this.el.querySelector('label').removeEventListener('click', this.handleClick);
        }
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      event.stopPropagation();
      this.trigger('sendsay-change', {
        checked: event.target.checked,
        value: event.target.value
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      event.stopPropagation();
      var input = this.el.querySelector('input');
      input.checked = !input.checked;
      this.trigger('sendsay-change', {
        checked: input.checked,
        value: input.value
      });
    }
  }, {
    key: "makeStyles",
    value: function makeStyles() {
      var styleObj = (0, _get2["default"])((0, _getPrototypeOf2["default"])(CheckBox.prototype), "makeStyles", this).call(this);
      return styleObj;
    }
  }]);
  return CheckBox;
}(_DOMObject2.DOMObject);

exports.CheckBox = CheckBox;

},{"./DOMObject":32,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/get":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],31:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _DOMObject2 = require("./DOMObject");

var _ElementFactory = require("../ElementFactory");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Column = /*#__PURE__*/function (_DOMObject) {
  (0, _inherits2["default"])(Column, _DOMObject);

  var _super = _createSuper(Column);

  function Column() {
    (0, _classCallCheck2["default"])(this, Column);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Column, [{
    key: "initialize",
    value: function initialize() {
      this.template = '<div class = "sendsay-columnwrapper" style = "width:100%; [%wrapperstyle%]">' + '<div class = "[%classes%]" style="[%style%]"">' + '</div></div>';
      this.baseClass = 'sendsay-column';
      this.applicableStyles = {
        'background-color': {
          param: 'backgroundColor'
        },
        'padding-bottom': {
          param: 'paddingBottom',
          postfix: 'px'
        },
        'padding-top': {
          param: 'paddingTop',
          postfix: 'px'
        },
        'padding-left': {
          param: 'paddingLeft',
          postfix: 'px'
        },
        'padding-right': {
          param: 'paddingRight',
          postfix: 'px'
        }
      };
      this.wrapperApplStyles = {
        flex: {
          param: 'flex'
        }
      };
    }
  }, {
    key: "build",
    value: function build() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Column.prototype), "build", this).call(this);
      this.elements = [];
      var factory = new _ElementFactory.ElementFactory();
      var popupBody = this.el.querySelector('.sendsay-column');

      if (this.data.elements) {
        var elements = this.data.elements;

        for (var i = 0; i < elements.length; i++) {
          var newEl = factory.make(elements[i], this);

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
      var settings = (0, _get2["default"])((0, _getPrototypeOf2["default"])(Column.prototype), "makeSettings", this).call(this);
      settings.wrapperstyle = this.makeWrapperStyle();
      return settings;
    }
  }, {
    key: "makeWrapperStyle",
    value: function makeWrapperStyle() {
      var style = {};
      style = this.extend(style, this.applyStyles(this.wrapperApplStyles));
      return this.convertStyles(style);
    }
  }]);
  return Column;
}(_DOMObject2.DOMObject);

exports.Column = Column;

},{"../ElementFactory":23,"./DOMObject":32,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/get":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],32:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMObject = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var DOMObject = /*#__PURE__*/function () {
  function DOMObject(data, parent) {
    (0, _classCallCheck2["default"])(this, DOMObject);
    this.data = data;
    this.parent = parent || null;

    if (parent && parent.general) {
      this.general = this.extend({}, parent.general);
    }

    this.initialize();
    this.render();
  }

  (0, _createClass2["default"])(DOMObject, [{
    key: "escapeHTML",
    value: function escapeHTML(html) {
      var escape = document.createElement('textarea');
      escape.textContent = html;
      return escape.innerHTML;
    }
  }, {
    key: "escapeStyle",
    value: function escapeStyle(style) {
      if (this.style) {
        return style.replace(/"/g, "'");
      }
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.template = '<div></div>';
      this.baseClass = 'sendsay-main';
      this.applicableStyles = {};
    }
  }, {
    key: "makeElement",
    value: function makeElement() {
      var div = document.createElement('div');
      var element = this.applySettings(this.makeSettings());
      div.innerHTML = element;
      return div.firstChild;
    }
  }, {
    key: "makeSettings",
    value: function makeSettings() {
      var settings = {
        classes: this.makeClasses(),
        style: this.convertStyles(this.makeStyles())
      };
      return settings;
    }
  }, {
    key: "makeStyles",
    value: function makeStyles() {
      var styleObj = this.applyStyles(this.applicableStyles);
      return styleObj;
    }
  }, {
    key: "applyStyles",
    value: function applyStyles(mapping) {
      var styles = {};
      var data = this.data.appearance || {};
      var general = this.general && this.general.appearance || {}; // eslint-disable-next-line

      for (var key in mapping) {
        var val = mapping[key];
        var value = data[val.param] || general[val.param];

        if (value !== undefined && (data[val.param] !== undefined || general[val.param] !== undefined)) {
          if (!val.template) {
            styles[key] = value + (val.postfix ? val.postfix : '');
          } else {
            styles[key] = this.processTemplate(val.template, {
              v: value
            });
          }
        } else if (val["default"]) {
          styles[key] = val["default"];
        }
      }

      return styles;
    }
  }, {
    key: "convertStyles",
    value: function convertStyles(toConvert) {
      var styleObj = toConvert;
      var styleStr = ''; // eslint-disable-next-line

      for (var key in styleObj) {
        styleStr += " ".concat(key, ":").concat(styleObj[key], ";");
      }

      return styleStr;
    }
  }, {
    key: "makeClasses",
    value: function makeClasses() {
      return this.baseClass;
    }
  }, {
    key: "applySettings",
    value: function applySettings(settings) {
      return this.processTemplate(this.template, settings);
    }
  }, {
    key: "processTemplate",
    value: function processTemplate(template, settings) {
      // eslint-disable-next-line no-param-reassign
      settings = settings || {};
      var string = template;
      var templateParams = string.match(new RegExp('\\[% *[a-zA-Z0-9\\-]* *%\\]', 'g')) || [];

      for (var i = 0; i < templateParams.length; i++) {
        var param = templateParams[i];
        param = param.substring(2, param.length - 2);
        var paramValue = settings[param.trim()] || '';
        string = string.replace(new RegExp("\\[%".concat(param, "%\\]"), 'g'), paramValue);
      }

      return string;
    }
  }, {
    key: "build",
    value: function build() {
      this.el = this.makeElement();
      this.el.core = this;
      return this.el;
    }
  }, {
    key: "render",
    value: function render() {
      var oldEl = this.el;
      this.removeEvents();
      this.build();
      this.addEvents();

      if (oldEl && oldEl.parentNode) {
        oldEl.parentNode.replaceChild(this.el, oldEl);
      }

      this.afterRender();
    }
  }, {
    key: "afterRender",
    value: function afterRender() {}
  }, {
    key: "addEvents",
    value: function addEvents() {}
  }, {
    key: "addEvent",
    value: function addEvent(event, selector, callback) {
      this._eventAction(true, event, selector, callback);
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {}
  }, {
    key: "removeEvent",
    value: function removeEvent(event, selector, callback) {
      this._eventAction(false, event, selector, callback);
    }
  }, {
    key: "_eventAction",
    value: function _eventAction(toAdd, event, selector, callback) {
      if (!this.el) {
        return;
      }

      if (callback === undefined && typeof selector === 'function') {
        // eslint-disable-next-line no-param-reassign
        callback = selector; // eslint-disable-next-line no-param-reassign

        selector = null;
      }

      var target = selector ? this.el.querySelector(selector) : this.el;

      if (target) {
        // eslint-disable-next-line no-unused-expressions
        toAdd ? target.addEventListener(event, callback) : target.removeEventListener(event, callback);
      }
    }
  }, {
    key: "trigger",
    value: function trigger(eventName, data) {
      var event;
      var extra = {
        extra: data
      };

      if (CustomEvent && typeof CustomEvent === 'function') {
        event = new CustomEvent(eventName, {
          detail: extra
        });
      } else {
        event = document.createEvent('HTMLEvents');
        event.initEvent(eventName, true, true);
        event.detail = extra;
      }

      this.el.dispatchEvent(event);
    }
  }, {
    key: "extend",
    value: function extend(dest, source) {
      // eslint-disable-next-line no-param-reassign
      dest = dest || {}; // eslint-disable-next-line no-param-reassign

      source = source || {}; // eslint-disable-next-line no-restricted-syntax

      for (var key in source) {
        if (dest[key] instanceof Object && source[key] instanceof Object) {
          // eslint-disable-next-line no-param-reassign
          dest[key] = this.extend(dest[key], source[key]);
        } else {
          // eslint-disable-next-line no-param-reassign
          dest[key] = source[key];
        }
      }

      return dest;
    }
  }]);
  return DOMObject;
}();

exports.DOMObject = DOMObject;

},{"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/interopRequireDefault":10}],33:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateField = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Field2 = require("./Field");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DateField = /*#__PURE__*/function (_Field) {
  (0, _inherits2["default"])(DateField, _Field);

  var _super = _createSuper(DateField);

  function DateField() {
    (0, _classCallCheck2["default"])(this, DateField);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(DateField, [{
    key: "initialize",
    value: function initialize() {
      this.template = '<div class = "[%classes%]" style="[%style%]"">' + '<label for="[%label%]" class = "sendsay-label">[%label%]</label>' + '<input name="[%qid%]" placeholder="[%placeholder%]" value="[%value%]" type="text" class="sendsay-input"/>' + '<div type="text" class="sendsay-error"></div>' + '</div>';
      this.baseClass = 'sendsay-field';
      this.applicableStyles = {
        'padding-bottom': {
          param: 'paddingBottom',
          postfix: 'px'
        },
        'padding-top': {
          param: 'paddingTop',
          postfix: 'px'
        },
        'padding-left': {
          param: 'paddingLeft',
          postfix: 'px'
        },
        'padding-right': {
          param: 'paddingRight',
          postfix: 'px'
        },
        color: {
          param: 'labelTextColor'
        },
        'font-family': {
          param: 'labelFontFamily'
        },
        'font-size': {
          param: 'labelFontSize',
          postfix: 'px'
        }
      };
      this.accuracy = this.data.content.accuracy;
      this.dateTemplate = 'dd/dd/dddd'; // eslint-disable-next-line default-case

      switch (this.accuracy) {
        case 'ys':
          this.dateTemplate = 'dd.MM.yyyy hh:mm:ss';
          break;

        case 'ym':
          this.dateTemplate = 'dd.MM.yyyy hh:mm';
          break;

        case 'yh':
          this.dateTemplate = 'dd.MM.yyyy hh';
          break;

        case 'yd':
          this.dateTemplate = 'dd.MM.yyyy';
          break;
      }

      this.types = ['d', 'M', 'm', 'y', 'h', 's'];
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var dateObj = this.extractAndSeparateValue();
      var accuracy = this.accuracy;

      if (dateObj === '') {
        return '';
      }

      var date = '';

      if (dateObj) {
        date = "".concat(this.normalizeValue(dateObj.year, 4), "-").concat(this.normalizeValue(dateObj.month, 2), "-").concat(this.normalizeValue(dateObj.day, 2));

        if (accuracy === 'ys' || accuracy === 'ym' || accuracy === 'yh') {
          date += " ".concat(this.normalizeValue(dateObj.hour, 2));

          if (accuracy === 'ys' || accuracy === 'ym') {
            date += ":".concat(this.normalizeValue(dateObj.minute, 2));

            if (accuracy === 'ys') {
              date += ":".concat(this.normalizeValue(dateObj.second, 2));
            }
          }
        }
      }

      return date;
    }
  }, {
    key: "normalizeValue",
    value: function normalizeValue(value, length) {
      if (value === null) {
        return '00';
      }

      var str = "".concat(value);
      var leng = str.length;

      for (var i = 0; i < length - leng; i++) {
        str = "0".concat(str);
      }

      return str;
    }
  }, {
    key: "validate",
    value: function validate() {
      var isValid = (0, _get2["default"])((0, _getPrototypeOf2["default"])(DateField.prototype), "validate", this).call(this);
      var dateObj = this.extractAndSeparateValue();
      var rawValue = this.el.querySelector('input').value;

      if (rawValue.trim() === '') {
        return true;
      }

      if (!rawValue || !rawValue[rawValue.length - 1].match(/[0-9]/)) {
        isValid = false;
      }

      if (isValid && dateObj) {
        var months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (!dateObj.year) {
          isValid = false;
        }

        if (!dateObj.month || dateObj.month < 1 || dateObj.month > 12) {
          isValid = false;
        }

        if (isValid && (!dateObj.day || dateObj.day < 1 || dateObj.day > months[dateObj.month - 1])) {
          isValid = false;
        }

        if (['yh', 'ym', 'ys'].indexOf(this.accuracy) !== -1) {
          if (dateObj.hour !== null && (dateObj.hour < 0 || dateObj.hour > 23)) {
            isValid = false;
          }

          if (['ym', 'ys'].indexOf(this.accuracy) !== -1) {
            if (dateObj.minute !== null && (dateObj.minute < 0 || dateObj.minute > 59)) {
              isValid = false;
            }

            if (this.accuracy === 'ys') {
              if (dateObj.second !== null && (dateObj.second < 0 || dateObj.second > 59)) {
                isValid = false;
              }
            }
          }
        }
      } else {
        isValid = false;
      }

      if (!isValid) {
        this.showErrorMessage('Введена неверная дата');
      }

      return isValid;
    }
  }, {
    key: "extractAndSeparateValue",
    value: function extractAndSeparateValue() {
      var rawValue = this.el.querySelector('input').value;

      if (rawValue.trim() === '') {
        return '';
      }

      var template = this.dateTemplate;
      var year = template.match(/y+/);
      var month = template.match(/M+/);
      var day = template.match(/d+/);
      var hour = template.match(/h+/);
      var minute = template.match(/m+/);
      var second = template.match(/s+/);
      var dateObj = {};
      dateObj.year = year && +rawValue.substr(year.index, year[0].length);
      dateObj.month = month && +rawValue.substr(month.index, month[0].length);
      dateObj.day = day && +rawValue.substr(day.index, day[0].length);
      dateObj.hour = hour && +rawValue.substr(hour.index, hour[0].length);
      dateObj.minute = minute && +rawValue.substr(minute.index, minute[0].length);
      dateObj.second = second && +rawValue.substr(second.index, second[0].length); // eslint-disable-next-line

      for (var key in dateObj) {
        dateObj[key] = dateObj[key] || null;
      }

      return dateObj;
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(DateField.prototype), "addEvents", this).call(this);
      this.addEvent('keypress', 'input', this.handleKeyPress.bind(this));
      this.addEvent('keydown', 'input', this.handleKeyDown.bind(this));
      this.addEvent('paste', 'input', this.handlePaste.bind(this));
      this.addEvent('drop', 'input', this.handleDrop.bind(this));
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (event.keyCode !== 8 && event.keyCode !== 46) {
        return true;
      }

      var valueArr = event.target.value.split('');
      var start = this.getSelectionStart();
      var end = this.getSelectionEnd();
      var key = event.key;

      if (key === 'Backspace') {
        key = undefined;

        if (start > 0 && start === end) {
          start--;
        }
      } else if (key === 'Delete') {
        key = undefined;

        if (start === end) {
          end++;
        }
      }

      valueArr.splice(start, end - start);
      this.updateInput(valueArr);
      event.stopPropagation();
      event.preventDefault();
      this.setCursor(start);
    }
  }, {
    key: "handlePaste",
    value: function handlePaste(event) {
      var clipboardData = event.clipboardData || window.clipboardData;
      var pastedData = clipboardData.getData('Text');
      var valueArr = event.target.value.split('');
      var start = this.getSelectionStart();
      var end = this.getSelectionEnd(); // eslint-disable-next-line prefer-spread

      valueArr.splice.apply(valueArr, [start, end - start].concat(pastedData.split('')));
      this.updateInput(valueArr);
      var pastedArr = pastedData.replace(/[^\d]/g, '').split('');
      this.setCursor(this.findCursorPosition(event.target.value.split(''), pastedArr, start));
      event.stopPropagation();
      event.preventDefault();
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      var isFull = event.target.value.length === this.dateTemplate.length;
      var start = this.getSelectionStart();
      var end = this.getSelectionEnd();
      var valueArr = event.target.value.split('');
      var key = event.key;

      if (!event.key.match(/\d/)) {
        key = undefined;
      }

      valueArr.splice(start, end - start, key);
      this.updateInput(valueArr);
      event.preventDefault();
      event.stopPropagation();
      this.setCursor(isFull && start === end ? start : this.findCursorPosition(event.target.value.split(''), [key], start));
      return false;
    }
  }, {
    key: "handleDrop",
    value: function handleDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }, {
    key: "updateInput",
    value: function updateInput(formattedArr) {
      var input = this.el.querySelector('input');
      var tempValue = formattedArr.join('').replace(/[^\d]/g, '');
      var res = this.applyDateTemplate(this.dateTemplate, tempValue);
      input.value = res;
    }
  }, {
    key: "applyDateTemplate",
    value: function applyDateTemplate(template, rawNumber) {
      var digits = rawNumber.split('');
      var parts = template.split('');
      var i = 0;

      for (var j = 0; i < parts.length && j < digits.length; i++) {
        if (this.types.indexOf(parts[i]) !== -1) {
          parts[i] = digits[j];
          j++;
        }
      }

      parts.splice(i, 1000);
      return parts.join('');
    }
  }, {
    key: "countBefore",
    value: function countBefore(array, regex, index) {
      var count = 0; // eslint-disable-next-line

      if (index == undefined) {
        index = 100000;
      }

      for (var i = 0; i < index && i < array.length; i++) {
        if (array[i].match(regex)) {
          count++;
        }
      }

      return count;
    }
  }, {
    key: "findCursorPosition",
    value: function findCursorPosition(valueArr, insertedArr, start) {
      var i;
      var j;

      for (i = start, j = 0; i < valueArr.length && j < insertedArr.length; i++) {
        if (valueArr[i] === insertedArr[j]) {
          j++;
        }
      }

      return i;
    }
  }, {
    key: "setCursor",
    value: function setCursor(position) {
      var input = this.el.querySelector('input');
      var value = input.value;

      if (value.length >= position) {
        input.setSelectionRange(position, position);
      }
    }
  }, {
    key: "getSelectionEnd",
    value: function getSelectionEnd() {
      var input = this.el.querySelector('input');
      return input.selectionEnd;
    }
  }, {
    key: "getSelectionStart",
    value: function getSelectionStart() {
      var input = this.el.querySelector('input');
      return input.selectionStart;
    }
  }, {
    key: "selection",
    value: function selection() {
      return window.getSelection() || document.getSelection();
    }
  }]);
  return DateField;
}(_Field2.Field);

exports.DateField = DateField;

},{"./Field":35,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/get":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],34:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Embedded = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Popup2 = require("./Popup");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Embedded = /*#__PURE__*/function (_Popup) {
  (0, _inherits2["default"])(Embedded, _Popup);

  var _super = _createSuper(Embedded);

  function Embedded() {
    (0, _classCallCheck2["default"])(this, Embedded);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Embedded, [{
    key: "initialize",
    value: function initialize() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Embedded.prototype), "initialize", this).call(this);
      this.makeBorder();
      this.makeShadow();
      this.applicableStyles.display = {
        "default": 'none'
      };
    }
  }, {
    key: "makeBorder",
    value: function makeBorder() {
      var _ref = this.data.appearance || {},
          borderEnabled = _ref.borderEnabled,
          borderWidth = _ref.borderWidth,
          borderColor = _ref.borderColor;

      if (borderEnabled) {
        this.applicableStyles.border = {
          "default": "".concat(borderWidth, "px solid ").concat(borderColor)
        };
      }
    }
  }, {
    key: "makeShadow",
    value: function makeShadow() {
      var _ref2 = this.data.appearance || {},
          shadowEnabled = _ref2.shadowEnabled,
          shadowOffsetX = _ref2.shadowOffsetX,
          shadowOffsetY = _ref2.shadowOffsetY,
          shadowBlur = _ref2.shadowBlur,
          shadowSpread = _ref2.shadowSpread,
          shadowColor = _ref2.shadowColor;

      if (shadowEnabled) {
        this.applicableStyles['box-shadow'] = {
          "default": "".concat(shadowOffsetX, "px ").concat(shadowOffsetY, "px ").concat(shadowBlur, "px ").concat(shadowSpread, "px ").concat(shadowColor)
        };
      }
    }
  }, {
    key: "activate",
    value: function activate(options) {
      if (options.el) {
        (0, _get2["default"])((0, _getPrototypeOf2["default"])(Embedded.prototype), "activate", this).call(this, options);
        return;
      }

      var el = document.querySelector("[data-sendsay-form-root=\"".concat(options.formId, "\"]"));

      if (!el) {
        return;
      }

      el.innerHTML = '';
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Embedded.prototype), "activate", this).call(this, _objectSpread(_objectSpread({}, options), {}, {
        el: el
      }));
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      var _this$data$settings;

      var canClose = (_this$data$settings = this.data.settings) === null || _this$data$settings === void 0 ? void 0 : _this$data$settings.canClose;

      if (event.keyCode === 27 && (this.curStep === 0 || this.curStep === 1 && !canClose)) {
        return;
      }

      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Embedded.prototype), "handleKeyPress", this).call(this, event);
    }
  }]);
  return Embedded;
}(_Popup2.Popup);

exports.Embedded = Embedded;

},{"./Popup":40,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/get":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],35:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Field = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _DOMObject2 = require("./DOMObject");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Field = /*#__PURE__*/function (_DOMObject) {
  (0, _inherits2["default"])(Field, _DOMObject);

  var _super = _createSuper(Field);

  function Field() {
    (0, _classCallCheck2["default"])(this, Field);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Field, [{
    key: "initialize",
    value: function initialize() {
      this.template = '<div class = "[%classes%]" style="[%style%]"">' + '<label for="[%label%]" class = "sendsay-label">[%label%]</label>' + '<input name="[%qid%]" placeholder="[%placeholder%]" value="[%value%]" type="text" class="sendsay-input"/>' + '<div type="text" class="sendsay-error"></div>' + '</div>';
      this.baseClass = 'sendsay-field';
      this.applicableStyles = {
        'padding-bottom': {
          param: 'paddingBottom',
          postfix: 'px'
        },
        'padding-top': {
          param: 'paddingTop',
          postfix: 'px'
        },
        'padding-left': {
          param: 'paddingLeft',
          postfix: 'px'
        },
        'padding-right': {
          param: 'paddingRight',
          postfix: 'px'
        },
        color: {
          param: 'labelTextColor'
        },
        'font-family': {
          param: 'labelFontFamily'
        },
        'font-size': {
          param: 'labelFontSize',
          postfix: 'px'
        }
      };
    }
  }, {
    key: "makeSettings",
    value: function makeSettings() {
      var field = this.data.field || {};
      var content = this.data.content || {};
      var appearance = this.data.appearance || {};
      var settings = (0, _get2["default"])((0, _getPrototypeOf2["default"])(Field.prototype), "makeSettings", this).call(this);
      settings.label = this.escapeHTML(content.label || '');
      settings.placeholder = this.escapeHTML(content.placeholder || '');
      settings.qid = field.id || field.qid || '';
      settings.value = field["default"] || '';

      if (appearance.hidden) {
        settings.classes += ' sendsay-field-hidden';
      }

      if (field.required) {
        settings.label += '*';
      }

      return settings;
    }
  }, {
    key: "validate",
    value: function validate() {
      this.removeErrorMessage(); // eslint-disable-next-line eqeqeq

      if (this.data.field.required && this.getValue() == '') {
        this.showErrorMessage('Обязательное поле');
        return false;
      }

      return true;
    }
  }, {
    key: "showErrorMessage",
    value: function showErrorMessage(message) {
      this.el.classList.add('sendsay-field-invalid');
      this.el.querySelector('.sendsay-error').innerHTML = message;
    }
  }, {
    key: "removeErrorMessage",
    value: function removeErrorMessage() {
      this.el.classList.remove('sendsay-field-invalid');
      this.el.querySelector('.sendsay-error').innerHTML = '';
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.el.querySelector('input').value;
    }
  }]);
  return Field;
}(_DOMObject2.DOMObject);

exports.Field = Field;

},{"./DOMObject":32,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/get":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],36:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageElement = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _DOMObject2 = require("./DOMObject");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ImageElement = /*#__PURE__*/function (_DOMObject) {
  (0, _inherits2["default"])(ImageElement, _DOMObject);

  var _super = _createSuper(ImageElement);

  function ImageElement() {
    (0, _classCallCheck2["default"])(this, ImageElement);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ImageElement, [{
    key: "initialize",
    value: function initialize() {
      this.template = '<div class = "[%classes%]" style="[%wrapperstyle%]">' + '<img src="[%url%]" style="[%style%]/>" />' + '</div>';
      this.wrapperApplStyles = {
        'padding-bottom': {
          param: 'paddingBottom',
          postfix: 'px'
        },
        'padding-top': {
          param: 'paddingTop',
          postfix: 'px'
        },
        'padding-left': {
          param: 'paddingLeft',
          postfix: 'px'
        },
        'padding-right': {
          param: 'paddingRight',
          postfix: 'px'
        }
      };
      this.baseClass = 'sendsay-image';
    }
  }, {
    key: "makeStyles",
    value: function makeStyles() {
      var styleObj = (0, _get2["default"])((0, _getPrototypeOf2["default"])(ImageElement.prototype), "makeStyles", this).call(this);
      var data = this.data.appearance || {};

      if (data.extended) {
        styleObj.width = '100%';
      } else {
        styleObj['max-width'] = '100%';
      }

      return styleObj;
    }
  }, {
    key: "makeSettings",
    value: function makeSettings() {
      var data = this.data.content || {};
      var settings = (0, _get2["default"])((0, _getPrototypeOf2["default"])(ImageElement.prototype), "makeSettings", this).call(this);
      settings.wrapperstyle = this.makeWrapperStyle();
      settings.url = data.url;
      return settings;
    }
  }, {
    key: "makeWrapperStyle",
    value: function makeWrapperStyle() {
      var style = {};
      var data = this.data.appearance || {};
      style['text-align'] = data.align;
      style = this.extend(style, this.applyStyles(this.wrapperApplStyles));
      return this.convertStyles(style);
    }
  }]);
  return ImageElement;
}(_DOMObject2.DOMObject);

exports.ImageElement = ImageElement;

},{"./DOMObject":32,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/get":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],37:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultipleChoiseField = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Field2 = require("./Field");

var _CheckBox = require("./CheckBox");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MultipleChoiseField = /*#__PURE__*/function (_Field) {
  (0, _inherits2["default"])(MultipleChoiseField, _Field);

  var _super = _createSuper(MultipleChoiseField);

  function MultipleChoiseField() {
    (0, _classCallCheck2["default"])(this, MultipleChoiseField);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(MultipleChoiseField, [{
    key: "initialize",
    value: function initialize() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(MultipleChoiseField.prototype), "initialize", this).call(this);
      this.template = '<div class = "[%classes%]" style="[%style%]"">' + '<label for="[%label%]" class = "sendsay-label">[%label%]</label>' + '<div class = "sendsay-container"></div>' + '<div type="text" class="sendsay-error"></div>' + '</div>';
      this.curValues = this.data.field["default"] || [];
      this.baseClass = 'sendsay-field';
      this.handleChangeValue = this.handleChangeValue.bind(this);
      this.applicableStyles = {
        'padding-bottom': {
          param: 'paddingBottom',
          postfix: 'px'
        },
        'padding-top': {
          param: 'paddingTop',
          postfix: 'px'
        },
        'padding-left': {
          param: 'paddingLeft',
          postfix: 'px'
        },
        'padding-right': {
          param: 'paddingRight',
          postfix: 'px'
        },
        color: {
          param: 'labelTextColor'
        },
        'font-family': {
          param: 'labelFontFamily'
        },
        'font-size': {
          param: 'labelFontSize',
          postfix: 'px'
        }
      };
    }
  }, {
    key: "build",
    value: function build() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(MultipleChoiseField.prototype), "build", this).call(this);
      this.elements = [];
      var body = this.el.querySelector('.sendsay-container');
      var field = this.data.field || {};

      if (this.data.field.answers) {
        var answers = field.answers; // eslint-disable-next-line

        for (var key in answers) {
          var newEl = new _CheckBox.CheckBox({
            field: {
              qid: field.id || field.qid || ''
            },
            content: {
              label: answers[key],
              value: key,
              checked: this.curValues.indexOf(key) !== -1
            }
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
        if (this.curValues.indexOf(data.value) === -1) {
          this.curValues.push(data.value);
        }
      } else if (this.curValues.indexOf(data.value) !== -1) {
        this.curValues.splice(this.curValues.indexOf(data.value), 1);
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

      if (this.data.field.required && this.getValue().length === 0) {
        this.showErrorMessage('Обязательное поле');
        return false;
      }

      return true;
    }
  }]);
  return MultipleChoiseField;
}(_Field2.Field);

exports.MultipleChoiseField = MultipleChoiseField;

},{"./CheckBox":30,"./Field":35,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/get":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],38:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ToggleablePopup2 = require("./ToggleablePopup");

var _warning = _interopRequireDefault(require("../../icons/warning"));

var _l8n = require("../../l8n");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Notification = /*#__PURE__*/function (_ToggleablePopup) {
  (0, _inherits2["default"])(Notification, _ToggleablePopup);

  var _super = _createSuper(Notification);

  function Notification() {
    (0, _classCallCheck2["default"])(this, Notification);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Notification, [{
    key: "initialize",
    value: function initialize() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Notification.prototype), "initialize", this).call(this);
      this.mobileWith = 280;
    }
  }, {
    key: "build",
    value: function build() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Notification.prototype), "build", this).call(this);
      var popupBody = this.el.querySelector('.sendsay-toggler');
      popupBody.innerHTML = "\n      <div class=\"sendsay-warning\">\n        <div>\n          ".concat(_warning["default"], "\n        </div>\n        <div class=\"sendsay-warning__text\">").concat((0, _l8n.l8n)('notify__form-is-inactive'), "</div>\n      </div>\n    ");
    }
  }, {
    key: "handleTogglerClick",
    value: function handleTogglerClick() {// don't remove
    }
  }]);
  return Notification;
}(_ToggleablePopup2.ToggleablePopup);

exports.Notification = Notification;

},{"../../icons/warning":49,"../../l8n":50,"./ToggleablePopup":46,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/get":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],39:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberField = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Field2 = require("./Field");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NumberField = /*#__PURE__*/function (_Field) {
  (0, _inherits2["default"])(NumberField, _Field);

  var _super = _createSuper(NumberField);

  function NumberField() {
    (0, _classCallCheck2["default"])(this, NumberField);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(NumberField, [{
    key: "validate",
    value: function validate() {
      var isValid = (0, _get2["default"])((0, _getPrototypeOf2["default"])(NumberField.prototype), "validate", this).call(this);

      if (isValid) {
        var value = this.getValue(); // eslint-disable-next-line no-restricted-globals

        isValid = !value.match(/[\.xXeE]/) && !isNaN(+value);

        if (!isValid) {
          this.showErrorMessage('Неверный формат целого числа');
        }
      }

      return isValid;
    }
  }]);
  return NumberField;
}(_Field2.Field);

exports.NumberField = NumberField;

},{"./Field":35,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/get":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],40:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popup = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _DOMObject2 = require("./DOMObject");

var _MediaQuery = require("../MediaQuery");

var _Column = require("./Column");

var _Field = require("./Field");

var _Button = require("./Button");

var _close = _interopRequireDefault(require("../../icons/close"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Popup = /*#__PURE__*/function (_DOMObject) {
  (0, _inherits2["default"])(Popup, _DOMObject);

  var _super = _createSuper(Popup);

  function Popup() {
    (0, _classCallCheck2["default"])(this, Popup);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Popup, [{
    key: "initialize",
    value: function initialize() {
      this.isShow = false;
      var appearance = this.data.appearance || {};
      this.noWrapper = !appearance.overlayEnabled;
      this.steps = this.data.steps;
      this.curStep = 0;
      this.gainedData = {};
      this.template = "".concat("".concat(!this.noWrapper ? '<div class = "sendsay-wrapper [%wrapperClasses%]" style="[%overlayStyles%]">' : '', "<div class = \"[%classes%]\" style=\"[%style%]\"\">") + '<div class="sendsay-close sendsay-close--with-icon">').concat(_close["default"], "</div>") + '<div class = "sendsay-content">' + '</div>' + "</div>".concat(!this.noWrapper ? '</div>' : '');
      this.baseClass = 'sendsay-popup';
      this.applicableStyles = {
        'background-color': {
          param: 'backgroundColor'
        },
        'border-radius': {
          param: 'borderRadius',
          postfix: 'px'
        },
        'padding-bottom': {
          param: 'paddingBottom',
          postfix: 'px'
        },
        'padding-top': {
          param: 'paddingTop',
          postfix: 'px'
        },
        'padding-left': {
          param: 'paddingLeft',
          postfix: 'px'
        },
        'padding-right': {
          param: 'paddingRight',
          postfix: 'px'
        },
        width: {
          param: 'width',
          postfix: 'px'
        },
        color: {
          param: 'textColor'
        }
      };
      this.applOverlayStyles = {
        'background-color': {
          param: 'overlayColor'
        }
      };
      appearance.position = appearance.position || 'centered';
      this.general = {};
      this.general.appearance = {};
      this.general.appearance.textColor = this.data.appearance.textColor;
      this.general.appearance.labelTextColor = this.data.appearance.labelTextColor;
      this.general.appearance.labelFontSize = this.data.appearance.labelFontSize;
      this.general.appearance.labelFontFamily = this.escapeStyle(this.data.appearance.labelFontFamily);
    }
  }, {
    key: "makeMediaQuery",
    value: function makeMediaQuery() {
      var appearance = this.data.appearance || {};
      var width = appearance.width;
      var mediaQuery = new _MediaQuery.MediaQuery({
        conditions: ['screen', '(min-width: 320px)', "(max-width:".concat(+width + 100, "px)")],
        selectors: {
          '.sendsay-popup': {
            width: '300px !important',
            '-webkit-flex-direction': 'column',
            '-ms-flex-direction': 'column',
            'flex-direction': 'column',
            animation: 'none'
          },
          '.sendsay-popup.sendsay-left, .sendsay-popup.sendsay-right': {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'none',
            bottom: 'initial'
          },
          '.sendsay-popup .sendsay-content': {
            '-webkit-flex-direction': 'column',
            '-ms-flex-direction': 'column',
            'flex-direction': 'column'
          }
        }
      });
      this.mediaQuery = mediaQuery;
    }
  }, {
    key: "build",
    value: function build() {
      var _this$steps;

      (0, _get2["default"])((0, _getPrototypeOf2["default"])(Popup.prototype), "build", this).call(this);
      this.columns = [];

      if (((_this$steps = this.steps) === null || _this$steps === void 0 ? void 0 : _this$steps.length) > 0) {
        var curStep = this.steps[this.curStep];
        var popupBody = this.el.querySelector('.sendsay-content');

        if (curStep.columns) {
          var columns = curStep.columns;

          for (var i = 0; i < columns.length; i++) {
            var newEl = new _Column.Column(columns[i], this);

            if (newEl) {
              this.columns.push(newEl);
              popupBody.appendChild(newEl.el);
            }
          }
        }
      }

      if (this.demo || this.container) {
        var el = this.el.querySelector('.sendsay-popup');
        this.el.style.position = 'absolute';

        if (el) {
          el.style.position = 'absolute';
        }
      }

      return this.el;
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      if (!this.noWrapper) {
        this.addEvent('click', this.handleWrapperClick.bind(this));
        this.addEvent('click', '.sendsay-popup', this.handlePopupClick.bind(this));
      } else {
        this.addEvent('click', this.handlePopupClick.bind(this));
      }

      this.addEvent('sendsay-click', '.sendsay-button', this.handleButtonClick.bind(this));
      this.addEvent('wheel', this.handleWheel.bind(this));
      this.addEvent('DOMMouseScroll', this.handleWheel.bind(this));
      this.addEvent('click', '.sendsay-close', this.handleClose.bind(this));
      this.addEvent('keyup', this.handleKeyPress.bind(this));
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      if (!this.noWrapper) {
        this.removeEvent('click', this.handleWrapperClick.bind(this));
        this.removeEvent('click', '.sendsay-popup', this.handlePopupClick.bind(this));
      } else {
        this.removeEvent('click', this.handlePopupClick.bind(this));
      }

      this.removeEvent('sendsay-click', '.sendsay-button', this.handleButtonClick.bind(this));
      this.removeEvent('wheel', this.handleWheel.bind(this));
      this.removeEvent('DOMMouseScroll', this.handleWheel.bind(this));
      this.removeEvent('click', '.sendsay-close', this.handleClose.bind(this));
      this.removeEvent('keyup', this.handleKeyPress.bind(this));
    }
  }, {
    key: "makeSettings",
    value: function makeSettings() {
      var settings = (0, _get2["default"])((0, _getPrototypeOf2["default"])(Popup.prototype), "makeSettings", this).call(this);
      settings.wrapperClasses = this.data.noAnimation ? 'sendsay-noanimation' : '';
      settings.overlayStyles = this.convertStyles(this.applyStyles(this.applOverlayStyles));
      return settings;
    }
  }, {
    key: "makeClasses",
    value: function makeClasses() {
      var _ref = this.data || {},
          appearance = _ref.appearance,
          settings = _ref.settings;

      var classes = (0, _get2["default"])((0, _getPrototypeOf2["default"])(Popup.prototype), "makeClasses", this).call(this);
      classes += this.data.endDialog ? ' sendsay-enddialog' : '';
      classes += " sendsay-animation-".concat(appearance.animation || 'none');
      classes += " sendsay-".concat(appearance.position || 'center');
      classes += " sendsay-type-".concat(this.data.type);

      if (settings !== null && settings !== void 0 && settings.canClose) {
        classes += ' sendsay--can-close';
      }

      if (this.steps.length - 1 === this.curStep) {
        classes += ' sendsay-laststep';
      }

      return classes;
    }
  }, {
    key: "activate",
    value: function activate(options) {
      this.demo = options && options.demo;
      this.container = options && options.el;
      this.ignoreKeyboard = options && options.ignoreKeyboard;
      this.show(options);
    }
  }, {
    key: "searchForElements",
    value: function searchForElements(comparator) {
      var found = [];

      if (!comparator || typeof comparator !== 'function') {
        return found;
      }

      var columns = this.columns;

      for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        var elements = column.elements;

        for (var j = 0; j < elements.length; j++) {
          // eslint-disable-next-line no-unused-expressions
          comparator(elements[j]) && found.push(elements[j]);
        }
      }

      return found;
    }
  }, {
    key: "showEndDialog",
    value: function showEndDialog() {
      this.isSubmitted = true;
      this.proceedToNextStep();
    }
  }, {
    key: "onSubmitFail",
    value: // eslint-disable-next-line no-dupe-class-members
    function onSubmitFail() {
      var elements = this.searchForElements(function (element) {
        return element instanceof _Button.Button;
      });

      if (elements[0]) {
        elements[0].el.querySelector('input').classList.remove('sendsay-loading');
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.isShow = true;
      this.makeMediaQuery();

      if (!this.container) {
        document.querySelector('body').appendChild(this.el);
      } else {
        this.el.style.position = 'absolute';

        if (!this.noWrapper) {
          this.el.querySelector('.sendsay-popup').style.position = 'absolute';
        }

        this.container.appendChild(this.el);
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.isShow = false;

      if (this.el.parentNode) {
        this.el.parentNode.removeChild(this.el);

        if (this.mediaQuery) {
          this.mediaQuery.el.remove();
          this.mediaQuery = null;
        }
      }
    }
  }, {
    key: "submit",
    value: function submit() {
      var elements = this.searchForElements(function (element) {
        return element instanceof _Field.Field || element instanceof _Button.Button;
      });
      var isValid = true;
      var data = {};
      var button;

      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];

          if (element instanceof _Field.Field) {
            // if(element.getValue() !== '')
            data[element.data.field.id || element.data.field.qid] = element.getValue();
            isValid = element.validate() && isValid;
          }

          if (element instanceof _Button.Button) {
            button = element;
          }
        }
      }

      if (isValid) {
        this.extend(this.gainedData, data);

        if (this.steps.length - 2 !== this.curStep) {
          this.proceedToNextStep();
        } else {
          button.el.querySelector('input').classList.add('sendsay-loading');
          this.trigger('sendsay-success', this.gainedData);
        }
      }

      return isValid;
    }
  }, {
    key: "proceedToNextStep",
    value: function proceedToNextStep() {
      this.curStep++;

      if (this.curStep !== 0) {
        this.data.appearance.animation = 'none';
      }

      this.render();
    }
  }, {
    key: "showErrorFor",
    value: function showErrorFor(qid, message) {
      var elements = this.searchForElements(function (element) {
        return element instanceof _Field.Field;
      });

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (element.data.field && (element.data.field.qid === qid || element.data.field.id === qid)) {
          element.showErrorMessage(message);
        }
      }
    }
  }, {
    key: "handleWrapperClick",
    value: function handleWrapperClick() {// this.hide();
    }
  }, {
    key: "handleWheel",
    value: function handleWheel(event) {
      var delta = Math.sign(event.wheelDelta);

      if (event.target.classList.contains('sendsay-wrapper')) {
        event.preventDefault();
      } else {
        var el = this.noWrapper ? this.el : this.el.querySelector('.sendsay-popup');

        if (delta === -1 && el.clientHeight + el.scrollTop === el.scrollHeight || delta === 1 && el.scrollTop === 0) {
          event.preventDefault();
        }
      }

      return false;
    }
  }, {
    key: "handlePopupClick",
    value: function handlePopupClick(event) {
      event.stopPropagation();
    }
  }, {
    key: "handleButtonClick",
    value: function handleButtonClick() {
      if (this.isSubmitted) {
        this.hide();
      } else if (this.submit() && this.demo) {
        this.showEndDialog();
      }
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      if (this.ignoreKeyboard) {
        return;
      } // eslint-disable-next-line default-case


      switch (event.keyCode) {
        case 13:
          // Enter
          if (this.isSubmitted) {
            this.hide();
          } else if (this.submit() && this.demo) {
            this.showEndDialog();
          }

          break;

        case 27:
          // Esc
          this.hide();
          break;
      }
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.hide();
    }
  }]);
  return Popup;
}(_DOMObject2.DOMObject);

exports.Popup = Popup;

},{"../../icons/close":48,"../MediaQuery":26,"./Button":29,"./Column":31,"./DOMObject":32,"./Field":35,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/get":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],41:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopupBar = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Popup2 = require("./Popup");

var _MediaQuery = require("../MediaQuery");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PopupBar = /*#__PURE__*/function (_Popup) {
  (0, _inherits2["default"])(PopupBar, _Popup);

  var _super = _createSuper(PopupBar);

  function PopupBar() {
    (0, _classCallCheck2["default"])(this, PopupBar);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(PopupBar, [{
    key: "initialize",
    value: function initialize() {
      var appearance = this.data.appearance || {};
      this.noWrapper = false;
      this.noWrapper = !appearance.overlayEnabled;
      this.steps = this.data.steps;
      this.curStep = 0;
      this.gainedData = {};
      this.template = "".concat(!this.noWrapper ? '<div class = "sendsay-wrapper [%wrapperClasses%]"  style="[%overlayStyles%]">' : '', "<div class = \"[%classes%]\" style=\"[%style%]\"\">") + '<div class = "sendsay-close">×</div>' + '<div class = "sendsay-content">' + '</div>' + "</div>".concat(!this.noWrapper ? '</div>' : '');
      this.baseClass = 'sendsay-popup';
      this.applicableStyles = {
        'background-color': {
          param: 'backgroundColor'
        },
        'padding-bottom': {
          param: 'paddingBottom',
          postfix: 'px'
        },
        'padding-top': {
          param: 'paddingTop',
          postfix: 'px'
        },
        'padding-left': {
          param: 'paddingLeft',
          postfix: 'px'
        },
        'padding-right': {
          param: 'paddingRight',
          postfix: 'px'
        },
        color: {
          param: 'textColor'
        }
      };
      this.maintextApplStyle = {
        'font-family': {
          param: 'font-family'
        },
        'font-size': {
          param: 'fontSize',
          postfix: 'px'
        },
        'text-align': {
          param: 'text-align',
          postfix: 'px'
        }
      };
      this.applOverlayStyles = {
        'background-color': {
          param: 'overlayColor'
        }
      };
      appearance.position = appearance.position || 'centered';
      this.general = {};
      this.general.appearance = {};
      this.general.appearance.textColor = this.data.appearance.textColor;
      this.general.appearance.labelTextColor = this.data.appearance.labelTextColor;
      this.general.appearance.labelFontSize = this.data.appearance.labelFontSize;
      this.general.appearance.labelFontFamily = this.escapeStyle(this.data.appearance.labelFontFamily);
    }
  }, {
    key: "makeMediaQuery",
    value: function makeMediaQuery() {
      var width = 800;
      var mediaQuery = new _MediaQuery.MediaQuery({
        conditions: ['screen', '(min-width: 320px)', "(max-width:".concat(+width + 100, "px)")],
        selectors: {
          '.sendsay-popup': {
            width: '300px !important',
            '-webkit-flex-direction': 'column',
            '-ms-flex-direction': 'column',
            'flex-direction': 'column',
            animation: 'none'
          },
          '.sendsay-popup.sendsay-type-bar.sendsay-top, .sendsay-popup.sendsay-type-bar.sendsay-bottom': {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'none',
            bottom: 'initial'
          },
          '.sendsay-column': {
            height: 'auto !important',
            'flex-direction': 'column'
          },
          '.sendsay-popup.sendsay-type-bar.sendsay-top  .sendsay-column > *, .sendsay-popup.sendsay-type-bar.sendsay-bottom .sendsay-column > *': {
            'padding-bottom': '20px',
            'padding-left': '0px'
          },
          '.sendsay-popup.sendsay-type-bar.sendsay-top.sendsay-animation-slidetop': {
            animation: 'none'
          },
          '.sendsay-popup.sendsay-type-bar.sendsay-bottom.sendsay-animation-slidebottom': {
            animation: 'none'
          }
        }
      });
      this.mediaQuery = mediaQuery;
    }
  }]);
  return PopupBar;
}(_Popup2.Popup);

exports.PopupBar = PopupBar;

},{"../MediaQuery":26,"./Popup":40,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],42:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _DOMObject2 = require("./DOMObject");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RadioButton = /*#__PURE__*/function (_DOMObject) {
  (0, _inherits2["default"])(RadioButton, _DOMObject);

  var _super = _createSuper(RadioButton);

  function RadioButton() {
    (0, _classCallCheck2["default"])(this, RadioButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(RadioButton, [{
    key: "initialize",
    value: function initialize() {
      this.template = "".concat('<div class = "[%classes%]" style="[%style%]">' + '<input [%checked%] name="[%qid%]" value="[%value%]" type="radio" class="sendsay-radioinput"/>').concat(this.data.content.label ? '<label for="[%qid%]" class = "sendsay-label">[%label%]</label>' : '', "</div>");
      this.baseClass = 'sendsay-radio';
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.applicableStyles = {
        color: {
          param: 'labelTextColor'
        },
        'font-family': {
          param: 'labelFontFamily'
        },
        'font-size': {
          param: 'labelFontSize',
          postfix: 'px'
        }
      };
    }
  }, {
    key: "build",
    value: function build() {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(RadioButton.prototype), "build", this).call(this);
    }
  }, {
    key: "makeSettings",
    value: function makeSettings() {
      var data = this.data;
      var settings = (0, _get2["default"])((0, _getPrototypeOf2["default"])(RadioButton.prototype), "makeSettings", this).call(this);
      var content = data.content || {};
      var field = data.field || {};
      var appearance = data.appearance || {};
      settings.label = this.escapeHTML(content.label || '');
      settings.qid = field.qid || '';
      settings.value = content.value || '';
      settings.checked = content.checked ? 'checked' : '';

      if (appearance.hidden) {
        settings.classes += ' sendsay-field-hidden';
      }

      return settings;
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      if (this.el) {
        this.el.querySelector('input').addEventListener('change', this.handleChange);

        if (this.data.content.label) {
          this.el.querySelector('label').addEventListener('click', this.handleClick);
        }
      }
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      if (this.el) {
        this.el.querySelector('input').removeEventListener('change', this.handleChange);

        if (this.data.content.label) {
          this.el.querySelector('label').removeEventListener('click', this.handleClick);
        }
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      event.stopPropagation();
      this.trigger('sendsay-change', {
        checked: event.target.checked,
        value: event.target.value
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      event.stopPropagation();
      var input = this.el.querySelector('input');
      input.checked = true;
      this.trigger('sendsay-change', {
        checked: input.checked,
        value: input.value
      });
    }
  }]);
  return RadioButton;
}(_DOMObject2.DOMObject);

exports.RadioButton = RadioButton;

},{"./DOMObject":32,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/get":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],43:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleChoiseField = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Field2 = require("./Field");

var _RadioButton = require("./RadioButton");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SingleChoiseField = /*#__PURE__*/function (_Field) {
  (0, _inherits2["default"])(SingleChoiseField, _Field);

  var _super = _createSuper(SingleChoiseField);

  function SingleChoiseField() {
    (0, _classCallCheck2["default"])(this, SingleChoiseField);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SingleChoiseField, [{
    key: "initialize",
    value: function initialize() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(SingleChoiseField.prototype), "initialize", this).call(this);
      this.template = '<div class = "[%classes%]" style="[%style%]"">' + '<label for="[%label%]" class = "sendsay-label">[%label%]</label>' + '<div class = "sendsay-container"></div>' + '<div type="text" class="sendsay-error"></div>' + '</div>';
      var field = this.data.field || {};
      this.curValue = field["default"] || '';
      this.baseClass = 'sendsay-field';
      this.handleChangeValue = this.handleChangeValue.bind(this);
      this.applicableStyles = {
        'padding-bottom': {
          param: 'paddingBottom',
          postfix: 'px'
        },
        'padding-top': {
          param: 'paddingTop',
          postfix: 'px'
        },
        'padding-left': {
          param: 'paddingLeft',
          postfix: 'px'
        },
        'padding-right': {
          param: 'paddingRight',
          postfix: 'px'
        },
        color: {
          param: 'labelTextColor'
        },
        'font-family': {
          param: 'labelFontFamily'
        },
        'font-size': {
          param: 'labelFontSize',
          postfix: 'px'
        }
      };
    }
  }, {
    key: "build",
    value: function build() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(SingleChoiseField.prototype), "build", this).call(this);
      this.elements = [];
      var field = this.data.field || {};
      var body = this.el.querySelector('.sendsay-container');

      if (field.answers) {
        var answers = field.answers; // eslint-disable-next-line

        for (var key in answers) {
          var newEl = new _RadioButton.RadioButton({
            field: {
              qid: field.id || field.qid || ''
            },
            content: {
              label: answers[key],
              value: key,
              checked: key === this.curValue
            }
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

exports.SingleChoiseField = SingleChoiseField;

},{"./Field":35,"./RadioButton":42,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/get":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],44:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spacer = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _DOMObject2 = require("./DOMObject");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Spacer = /*#__PURE__*/function (_DOMObject) {
  (0, _inherits2["default"])(Spacer, _DOMObject);

  var _super = _createSuper(Spacer);

  function Spacer() {
    (0, _classCallCheck2["default"])(this, Spacer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Spacer, [{
    key: "initialize",
    value: function initialize() {
      this.template = '<div class = "[%classes%]" style="[%style%]"></div>';
      this.baseClass = 'sendsay-spacer';
      this.applicableStyles = {
        height: {
          param: 'height',
          postfix: 'px'
        }
      };
    }
  }]);
  return Spacer;
}(_DOMObject2.DOMObject);

exports.Spacer = Spacer;

},{"./DOMObject":32,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],45:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _DOMObject2 = require("./DOMObject");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Text = /*#__PURE__*/function (_DOMObject) {
  (0, _inherits2["default"])(Text, _DOMObject);

  var _super = _createSuper(Text);

  function Text() {
    (0, _classCallCheck2["default"])(this, Text);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Text, [{
    key: "initialize",
    value: function initialize() {
      this.template = '<div class = "sendsay-text" style="[%style%]"">[%text%]</div>';
      this.baseClass = 'sendsay-text';
      this.applicableStyles = {
        'text-align': {
          param: 'align',
          "default": 'left'
        },
        'line-height': {
          param: 'lineHeight',
          "default": 'normal'
        },
        'padding-bottom': {
          param: 'paddingBottom',
          postfix: 'px'
        },
        'padding-top': {
          param: 'paddingTop',
          postfix: 'px'
        },
        'padding-left': {
          param: 'paddingLeft',
          postfix: 'px'
        },
        'padding-right': {
          param: 'paddingRight',
          postfix: 'px'
        },
        color: {
          param: 'textColor'
        }
      };
    }
  }, {
    key: "build",
    value: function build() {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(Text.prototype), "build", this).call(this);
    }
  }, {
    key: "makeSettings",
    value: function makeSettings() {
      var content = this.data.content || {};
      var settings = (0, _get2["default"])((0, _getPrototypeOf2["default"])(Text.prototype), "makeSettings", this).call(this);
      settings.text = content.text || '';
      return settings;
    }
  }]);
  return Text;
}(_DOMObject2.DOMObject);

exports.Text = Text;

},{"./DOMObject":32,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/get":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],46:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleablePopup = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _Popup2 = require("./Popup");

var _Text = require("./Text");

var _MediaQuery = require("../MediaQuery");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ToggleablePopup = /*#__PURE__*/function (_Popup) {
  (0, _inherits2["default"])(ToggleablePopup, _Popup);

  var _super = _createSuper(ToggleablePopup);

  function ToggleablePopup() {
    (0, _classCallCheck2["default"])(this, ToggleablePopup);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ToggleablePopup, [{
    key: "initialize",
    value: function initialize() {
      var appearance = this.data.appearance || {};
      this.noWrapper = !appearance.overlayEnabled;
      this.steps = this.data.steps;
      this.curStep = 0;
      this.gainedData = {};
      this.template = "".concat(!this.noWrapper ? '<div class = "sendsay-wrapper [%wrapperClasses%]"  style="[%overlayStyles%]">' : '', "<div class = \"[%classes%]\" style=\"[%style%]\"\">") + '<div class = "sendsay-close">×</div>' + '<div class = "sendsay-toggler">' + '<span class="sendsay-toggler-desktop">[%toggle%]</span>' + '<span class="sendsay-toggler-mobile">[%toggle%]</span>' + '</div>' + '<div class = "sendsay-content">' + '</div>' + "</div>".concat(!this.noWrapper ? '</div>' : '');
      this.baseClass = 'sendsay-popup';
      this.applicableStyles = {
        'background-color': {
          param: 'backgroundColor'
        },
        'padding-bottom': {
          param: 'paddingBottom',
          postfix: 'px'
        },
        'padding-top': {
          param: 'paddingTop',
          postfix: 'px'
        },
        'padding-left': {
          param: 'paddingLeft',
          postfix: 'px'
        },
        'padding-right': {
          param: 'paddingRight',
          postfix: 'px'
        },
        color: {
          param: 'textColor'
        },
        width: {
          param: 'width',
          prefix: 'px'
        },
        'border-radius': {
          param: 'borderRadius',
          template: '[%v%]px [%v%]px 0px 0px'
        }
      };
      this.maintextApplStyle = {
        'font-family': {
          param: 'font-family'
        },
        'font-size': {
          param: 'fontSize',
          postfix: 'px'
        },
        'text-align': {
          param: 'text-align',
          postfix: 'px'
        }
      };
      this.applOverlayStyles = {
        'background-color': {
          param: 'overlayColor'
        }
      };
      appearance.position = appearance.position || 'centered';
      this.general = {};
      this.general.appearance = {};
      this.general.appearance.textColor = this.data.appearance.textColor;
      this.general.appearance.labelTextColor = this.data.appearance.labelTextColor;
      this.general.appearance.labelFontSize = this.data.appearance.labelFontSize;
      this.general.appearance.labelFontFamily = this.escapeStyle(this.data.appearance.labelFontFamily);
      this.mobileWith = 150;
    }
  }, {
    key: "makeMediaQuery",
    value: function makeMediaQuery() {
      var appearance = this.data.appearance || {};
      var width = appearance.width;
      var mediaQuery = new _MediaQuery.MediaQuery({
        conditions: ['screen', '(min-width: 320px)', "(max-width:".concat(+width + 100, "px)")],
        selectors: {
          '.sendsay-popup.sendsay-type-widget': {
            width: "".concat(this.mobileWith, "px !important"),
            '-webkit-flex-direction': 'column',
            '-ms-flex-direction': 'column',
            'flex-direction': 'column',
            animation: 'none',
            bottom: '50px',
            right: '50px',
            'border-radius': '0px !important'
          },
          '.sendsay-popup.sendsay-type-widget .sendsay-content': {
            display: 'none',
            transition: 'none'
          },
          '.sendsay-popup.sendsay-type-widget .sendsay-toggler ': {
            'font-size': '14px !important'
          },
          '.sendsay-popup.sendsay-type-widget.sendsay-opened  .sendsay-toggler': {
            display: 'none'
          },
          '.sendsay-popup.sendsay-type-widget.sendsay-opened .sendsay-content': {
            display: 'block',
            transition: 'none'
          },
          '.sendsay-popup.sendsay-type-widget.sendsay-opened': {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bottom: 'initial',
            right: 'initial',
            width: '300px !important'
          },
          '.sendsay-popup.sendsay-type-widget.sendsay-opened .sendsay-close': {
            display: 'block'
          },
          '.sendsay-popup.sendsay-type-widget.sendsay-right .sendsay-toggler .sendsay-toggler-mobile, .sendsay-popup.sendsay-type-widget.sendsay-left .sendsay-toggler .sendsay-toggler-mobile': {
            display: 'block'
          },
          '.sendsay-popup.sendsay-type-widget.sendsay-right .sendsay-toggler .sendsay-toggler-desktop, .sendsay-popup.sendsay-type-widget.sendsay-left .sendsay-toggler .sendsay-toggler-desktop': {
            display: 'none'
          }
        }
      });
      this.mediaQuery = mediaQuery;
    }
  }, {
    key: "makeSettings",
    value: function makeSettings() {
      var settings = (0, _get2["default"])((0, _getPrototypeOf2["default"])(ToggleablePopup.prototype), "makeSettings", this).call(this);
      settings.toggle = new _Text.Text(this.data.toggle).build().outerHTML;
      return settings;
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(ToggleablePopup.prototype), "addEvents", this).call(this);
      this.addEvent('click', '.sendsay-toggler', this.handleTogglerClick.bind(this));
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(ToggleablePopup.prototype), "removeEvents", this).call(this);
      this.removeEvent('click', '.sendsay-toggler', this.handleTogglerClick.bind(this));
    }
  }, {
    key: "handleTogglerClick",
    value: function handleTogglerClick() {
      var el = this.noWrapper ? this.el : this.el.querySelector('.sendsay-popup');
      var contentEl = el.querySelector('.sendsay-content');

      if (el.classList.contains('sendsay-opened')) {
        el.classList.remove('sendsay-opened');
        contentEl.style.maxHeight = "".concat(0, "px");
      } else {
        el.classList.add('sendsay-opened');
        this.setSaneMaxHeight();
      }
    }
  }, {
    key: "submit",
    value: function submit() {
      var temp = (0, _get2["default"])((0, _getPrototypeOf2["default"])(ToggleablePopup.prototype), "submit", this).call(this);
      this.setSaneMaxHeight();
      return temp;
    }
  }, {
    key: "setSaneMaxHeight",
    value: function setSaneMaxHeight() {
      var el = this.noWrapper ? this.el : this.el.querySelector('.sendsay-popup');
      var contentEl = el.querySelector('.sendsay-content');
      contentEl.style.maxHeight = "".concat(contentEl.scrollHeight, "px");
    }
  }, {
    key: "showErrorFor",
    value: function showErrorFor(qid, message) {
      (0, _get2["default"])((0, _getPrototypeOf2["default"])(ToggleablePopup.prototype), "showErrorFor", this).call(this, qid, message);
      this.setSaneMaxHeight();
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      var el = this.noWrapper ? this.el : this.el.querySelector('.sendsay-popup');
      var contentEl = el.querySelector('.sendsay-content');

      if (el.classList.contains('sendsay-opened') && this.steps.length - 1 !== this.curStep) {
        el.classList.remove('sendsay-opened');
        contentEl.style.maxHeight = "".concat(0, "px");
      } else {
        this.hide();
      }
    }
  }, {
    key: "makeClasses",
    value: function makeClasses() {
      var classes = (0, _get2["default"])((0, _getPrototypeOf2["default"])(ToggleablePopup.prototype), "makeClasses", this).call(this);

      if (this.curStep !== 0) {
        classes += ' sendsay-opened';
      }

      return classes;
    }
  }, {
    key: "afterRender",
    value: function afterRender() {
      if (this.curStep !== 0) {
        this.setSaneMaxHeight();
      }
    }
  }, {
    key: "proceedToNextStep",
    value: function proceedToNextStep() {
      var temp;
      var self = this;
      this.curStep++;

      if (this.curStep !== 0) {
        temp = this.data.appearance.animation;
        this.data.appearance.animation = 'none';
      }

      this.render();
      setTimeout(function () {
        self.data.appearance.animation = temp;

        if (self.noWrapper) {
          self.el.className = self.makeClasses();
        } else {
          self.el.querySelector('.sendsay-popup').className = self.makeClasses();
        }
      }, 100);
    }
  }]);
  return ToggleablePopup;
}(_Popup2.Popup);

exports.ToggleablePopup = ToggleablePopup;

},{"../MediaQuery":26,"./Popup":40,"./Text":45,"@babel/runtime/helpers/classCallCheck":4,"@babel/runtime/helpers/createClass":5,"@babel/runtime/helpers/get":7,"@babel/runtime/helpers/getPrototypeOf":8,"@babel/runtime/helpers/inherits":9,"@babel/runtime/helpers/interopRequireDefault":10,"@babel/runtime/helpers/possibleConstructorReturn":13}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHostName = getHostName;

function getHostName() {
  try {
    // eslint-disable-next-line
    var match = location.hostname.match(/(^|\.)[a-zA-Z0-9\-]+\.{0,1}[a-zA-Z0-9\-]*$/);

    if (match) {
      var domain = match[0];

      if (domain[0] !== '.') {
        domain = ".".concat(domain);
      }

      return domain;
    }
  } catch (e) {
    // eslint-disable-next-line
    return location.hostname;
  } // eslint-disable-next-line


  return location.hostname;
}

},{}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var closeIcon = "\n  <svg viewBox=\"0 0 20 20\" fill=\"none\" class=\"sendsay-close__svg\" stroke=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M1 1L19 19\" stroke-width=\"2\"/>\n  <path d=\"M19 1L1 19\" stroke-width=\"2\"/>\n  </svg>\n";
var _default = closeIcon;
exports["default"] = _default;

},{}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var warningIcon = "\n  <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20Z\" fill=\"url(#paint0_linear)\"/>\n  <g filter=\"url(#filter0_di)\">\n  <path d=\"M29 17C30.6568 17 32 18.3432 32 20V20C32 21.6569 30.6568 23 29 23L11 23C9.34312 23 7.99997 21.6569 7.99997 20V20C7.99997 18.3432 9.34312 17 11 17L29 17Z\" fill=\"white\"/>\n  </g>\n  <defs>\n  <filter id=\"filter0_di\" x=\"3.99997\" y=\"15\" width=\"32\" height=\"14\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n  <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n  <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"/>\n  <feOffset dy=\"2\"/>\n  <feGaussianBlur stdDeviation=\"2\"/>\n  <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\"/>\n  <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow\"/>\n  <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow\" result=\"shape\"/>\n  <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/>\n  <feOffset dy=\"-1\"/>\n  <feGaussianBlur stdDeviation=\"0.5\"/>\n  <feComposite in2=\"hardAlpha\" operator=\"arithmetic\" k2=\"-1\" k3=\"1\"/>\n  <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.72549 0 0 0 0 0.273725 0 0 0 0 0.0196078 0 0 0 0.25 0\"/>\n  <feBlend mode=\"normal\" in2=\"shape\" result=\"effect2_innerShadow\"/>\n  </filter>\n  <linearGradient id=\"paint0_linear\" x1=\"26.5\" y1=\"36\" x2=\"15.75\" y2=\"-5.25\" gradientUnits=\"userSpaceOnUse\">\n  <stop stop-color=\"#F14800\"/>\n  <stop offset=\"1\" stop-color=\"#FFD771\"/>\n  </linearGradient>\n  </defs>\n  </svg>\n";
var _default = warningIcon;
exports["default"] = _default;

},{}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.l8n = l8n;

var _ru = require("./locales/ru");

var _en = require("./locales/en");

function getLang() {
  var lang = 'ru';

  if (navigator) {
    var systemLang = (navigator.language || navigator.systemLanguage || navigator.userLanguage || '').substr(0, 2).toLowerCase();

    if (systemLang && systemLang !== 'ru') {
      lang = 'en';
    }
  }

  return lang;
}

function l8n(key) {
  return (getLang() === 'en' ? _en.en[key] : _ru.ru[key]) || key;
}

},{"./locales/en":51,"./locales/ru":52}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.en = void 0;
var en = {
  'notify__form-is-inactive': 'The subscription form is currently inactive'
};
exports.en = en;

},{}],52:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ru = void 0;
var ru = {
  'notify__form-is-inactive': 'Извините, форма подписки сейчас неактивна'
};
exports.ru = ru;

},{}],53:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Popup = require("./classes/elements/Popup");

var _PopupBar = require("./classes/elements/PopupBar");

var _ToggleablePopup = require("./classes/elements/ToggleablePopup");

var _Embedded = require("./classes/elements/Embedded");

var _Connector = require("./classes/Connector");

var _Form = require("./classes/Form");

var _EmbeddedFormWatcher = _interopRequireDefault(require("./classes/EmbeddedFormWatcher"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULT_CONFIG = {
  forms: {
    css: {
      url: 'https://image.sendsay.ru/app/js/forms/forms.css'
    }
  }
};

(function () {
  var _window$SENDSAY_FORMS, _window;

  var config = _objectSpread(_objectSpread({}, DEFAULT_CONFIG), ((_window$SENDSAY_FORMS = (_window = window).SENDSAY_FORMS_CONFIG) === null || _window$SENDSAY_FORMS === void 0 ? void 0 : _window$SENDSAY_FORMS.call(_window)) || {});

  var loadCss = function loadCss(callback) {
    var cssId = '_sendsay-styles';

    if (!document.getElementById(cssId)) {
      var link = document.createElement('link');
      var loaded = false;
      link.id = cssId;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = config.forms.css.url;
      link.media = 'all';
      var sibling = document.querySelector('#sendsay-generated-sheet');

      if (sibling) {
        document.head.insertBefore(link, sibling);
      } else {
        document.head.appendChild(link);
      }

      link.addEventListener('load', function () {
        link.removeEventListener('load', callback);

        if (!loaded) {
          loaded = true;
          callback();
        }
      });
    } else if (typeof callback === 'function') {
      callback();
    }
  };

  var activatePopup = function activatePopup(url, options) {
    loadCss(function () {
      var connector = new _Connector.Connector(url);
      var form = new _Form.Form(connector, options);
      return form;
    });
  };

  var showPopup = function showPopup(data, options) {
    loadCss(function () {
      var DomConstructor; // eslint-disable-next-line default-case

      switch (data.type) {
        case 'popup':
          DomConstructor = _Popup.Popup;
          break;

        case 'bar':
          DomConstructor = _PopupBar.PopupBar;
          break;

        case 'widget':
          DomConstructor = _ToggleablePopup.ToggleablePopup;
          break;

        case 'embedded':
          DomConstructor = _Embedded.Embedded;
          break;
      }

      var popup = new DomConstructor(data);
      popup.activate(options);
    });
  };

  var embeddedFormWatcher = new _EmbeddedFormWatcher["default"](activatePopup);
  embeddedFormWatcher.start();
  window.SENDSAY = {
    config: config,
    activatePopup: activatePopup,
    showPopup: showPopup
  };
})();

},{"./classes/Connector":21,"./classes/EmbeddedFormWatcher":24,"./classes/Form":25,"./classes/elements/Embedded":34,"./classes/elements/Popup":40,"./classes/elements/PopupBar":41,"./classes/elements/ToggleablePopup":46,"@babel/runtime/helpers/defineProperty":6,"@babel/runtime/helpers/interopRequireDefault":10}]},{},[53,28,19,20,21,22,23,29,30,31,33,32,34,35,36,37,38,39,40,41,42,43,44,45,46,24,25,26,27,47]);
