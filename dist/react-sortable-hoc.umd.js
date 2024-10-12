(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom', 'prop-types'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.SortableHOC = {}, global.React, global.ReactDOM, global.PropTypes));
})(this, (function (exports, React, reactDom, PropTypes) { 'use strict';

	function _interopNamespaceDefault(e) {
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		}
		n.default = e;
		return Object.freeze(n);
	}

	var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  return module.exports = _extends = Object.assign ? Object.assign.bind() : function (n) {
	    for (var e = 1; e < arguments.length; e++) {
	      var t = arguments[e];
	      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
	    }
	    return n;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
	}
	module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _extends = unwrapExports(_extends_1);

	var readOnlyError = createCommonjsModule(function (module) {
	function _readOnlyError(r) {
	  throw new TypeError('"' + r + '" is read-only');
	}
	module.exports = _readOnlyError, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(readOnlyError);

	var arrayWithHoles = createCommonjsModule(function (module) {
	function _arrayWithHoles(r) {
	  if (Array.isArray(r)) return r;
	}
	module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(arrayWithHoles);

	var iterableToArrayLimit = createCommonjsModule(function (module) {
	function _iterableToArrayLimit(r, l) {
	  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	  if (null != t) {
	    var e,
	      n,
	      i,
	      u,
	      a = [],
	      f = !0,
	      o = !1;
	    try {
	      if (i = (t = t.call(r)).next, 0 === l) {
	        if (Object(t) !== t) return;
	        f = !1;
	      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
	    } catch (r) {
	      o = !0, n = r;
	    } finally {
	      try {
	        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
	      } finally {
	        if (o) throw n;
	      }
	    }
	    return a;
	  }
	}
	module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(iterableToArrayLimit);

	var arrayLikeToArray = createCommonjsModule(function (module) {
	function _arrayLikeToArray(r, a) {
	  (null == a || a > r.length) && (a = r.length);
	  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	  return n;
	}
	module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(arrayLikeToArray);

	var unsupportedIterableToArray = createCommonjsModule(function (module) {
	function _unsupportedIterableToArray(r, a) {
	  if (r) {
	    if ("string" == typeof r) return arrayLikeToArray(r, a);
	    var t = {}.toString.call(r).slice(8, -1);
	    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
	  }
	}
	module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(unsupportedIterableToArray);

	var nonIterableRest = createCommonjsModule(function (module) {
	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(nonIterableRest);

	var slicedToArray = createCommonjsModule(function (module) {
	function _slicedToArray(r, e) {
	  return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
	}
	module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _slicedToArray = unwrapExports(slicedToArray);

	var classCallCheck = createCommonjsModule(function (module) {
	function _classCallCheck(a, n) {
	  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
	}
	module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _classCallCheck = unwrapExports(classCallCheck);

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof(o) {
	  "@babel/helpers - typeof";

	  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
	    return typeof o;
	  } : function (o) {
	    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
	}
	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(_typeof_1);

	var toPrimitive_1 = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];
	function toPrimitive(t, r) {
	  if ("object" != _typeof(t) || !t) return t;
	  var e = t[Symbol.toPrimitive];
	  if (void 0 !== e) {
	    var i = e.call(t, r || "default");
	    if ("object" != _typeof(i)) return i;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return ("string" === r ? String : Number)(t);
	}
	module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(toPrimitive_1);

	var toPropertyKey_1 = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];

	function toPropertyKey(t) {
	  var i = toPrimitive_1(t, "string");
	  return "symbol" == _typeof(i) ? i : i + "";
	}
	module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(toPropertyKey_1);

	var createClass = createCommonjsModule(function (module) {
	function _defineProperties(e, r) {
	  for (var t = 0; t < r.length; t++) {
	    var o = r[t];
	    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey_1(o.key), o);
	  }
	}
	function _createClass(e, r, t) {
	  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
	    writable: !1
	  }), e;
	}
	module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _createClass = unwrapExports(createClass);

	var assertThisInitialized = createCommonjsModule(function (module) {
	function _assertThisInitialized(e) {
	  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  return e;
	}
	module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(assertThisInitialized);

	var possibleConstructorReturn = createCommonjsModule(function (module) {
	var _typeof = _typeof_1["default"];

	function _possibleConstructorReturn(t, e) {
	  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
	  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
	  return assertThisInitialized(t);
	}
	module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

	var getPrototypeOf = createCommonjsModule(function (module) {
	function _getPrototypeOf(t) {
	  return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
	    return t.__proto__ || Object.getPrototypeOf(t);
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
	}
	module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _getPrototypeOf = unwrapExports(getPrototypeOf);

	var setPrototypeOf = createCommonjsModule(function (module) {
	function _setPrototypeOf(t, e) {
	  return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
	    return t.__proto__ = e, t;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
	}
	module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(setPrototypeOf);

	var inherits = createCommonjsModule(function (module) {
	function _inherits(t, e) {
	  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
	  t.prototype = Object.create(e && e.prototype, {
	    constructor: {
	      value: t,
	      writable: !0,
	      configurable: !0
	    }
	  }), Object.defineProperty(t, "prototype", {
	    writable: !1
	  }), e && setPrototypeOf(t, e);
	}
	module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _inherits = unwrapExports(inherits);

	var defineProperty = createCommonjsModule(function (module) {
	function _defineProperty(e, r, t) {
	  return (r = toPropertyKey_1(r)) in e ? Object.defineProperty(e, r, {
	    value: t,
	    enumerable: !0,
	    configurable: !0,
	    writable: !0
	  }) : e[r] = t, e;
	}
	module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _defineProperty = unwrapExports(defineProperty);

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */


	var invariant = function(condition, format, a, b, c, d, e, f) {
	  {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	var invariant_1 = invariant;

	var Manager = function () {
	  function Manager() {
	    _classCallCheck(this, Manager);
	    _defineProperty(this, "refs", {});
	  }
	  return _createClass(Manager, [{
	    key: "add",
	    value: function add(collection, ref) {
	      if (!this.refs[collection]) {
	        this.refs[collection] = [];
	      }
	      this.refs[collection].push(ref);
	    }
	  }, {
	    key: "remove",
	    value: function remove(collection, ref) {
	      var index = this.getIndex(collection, ref);
	      if (index !== -1) {
	        this.refs[collection].splice(index, 1);
	      }
	    }
	  }, {
	    key: "isActive",
	    value: function isActive() {
	      return this.active;
	    }
	  }, {
	    key: "getActive",
	    value: function getActive() {
	      var _this = this;
	      return this.refs[this.active.collection].find(function (_ref) {
	        var node = _ref.node;
	        return node.sortableInfo.index == _this.active.index;
	      });
	    }
	  }, {
	    key: "getIndex",
	    value: function getIndex(collection, ref) {
	      return this.refs[collection].indexOf(ref);
	    }
	  }, {
	    key: "getOrderedRefs",
	    value: function getOrderedRefs() {
	      var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.active.collection;
	      return this.refs[collection].sort(sortByIndex);
	    }
	  }]);
	}();
	function sortByIndex(_ref2, _ref3) {
	  var index1 = _ref2.node.sortableInfo.index;
	  var index2 = _ref3.node.sortableInfo.index;
	  return index1 - index2;
	}

	var arrayWithoutHoles = createCommonjsModule(function (module) {
	function _arrayWithoutHoles(r) {
	  if (Array.isArray(r)) return arrayLikeToArray(r);
	}
	module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(arrayWithoutHoles);

	var iterableToArray = createCommonjsModule(function (module) {
	function _iterableToArray(r) {
	  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
	}
	module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(iterableToArray);

	var nonIterableSpread = createCommonjsModule(function (module) {
	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	unwrapExports(nonIterableSpread);

	var toConsumableArray = createCommonjsModule(function (module) {
	function _toConsumableArray(r) {
	  return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
	}
	module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});

	var _toConsumableArray = unwrapExports(toConsumableArray);

	function arrayMove(array, from, to) {
	  {
	    if (typeof console !== 'undefined') {
	      console.warn("Deprecation warning: arrayMove will no longer be exported by 'react-sortable-hoc' in the next major release. Please install the `array-move` package locally instead. https://www.npmjs.com/package/array-move");
	    }
	  }
	  array = array.slice();
	  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
	  return array;
	}
	function omit(obj, keysToOmit) {
	  return Object.keys(obj).reduce(function (acc, key) {
	    if (keysToOmit.indexOf(key) === -1) {
	      acc[key] = obj[key];
	    }
	    return acc;
	  }, {});
	}
	var events = {
	  end: ['touchend', 'touchcancel', 'mouseup'],
	  move: ['touchmove', 'mousemove'],
	  start: ['touchstart', 'mousedown']
	};
	var vendorPrefix = function () {
	  if (typeof window === 'undefined' || typeof document === 'undefined') {
	    return '';
	  }
	  var styles = window.getComputedStyle(document.documentElement, '') || ['-moz-hidden-iframe'];
	  var pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || styles.OLink === '' && ['', 'o'])[1];
	  switch (pre) {
	    case 'ms':
	      return 'ms';
	    default:
	      return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
	  }
	}();
	function setInlineStyles(node, styles) {
	  Object.keys(styles).forEach(function (key) {
	    node.style[key] = styles[key];
	  });
	}
	function setTranslate3d(node, translate) {
	  node.style["".concat(vendorPrefix, "Transform")] = translate == null ? '' : "translate3d(".concat(translate.x, "px,").concat(translate.y, "px,0)");
	}
	function setTransitionDuration(node, duration) {
	  node.style["".concat(vendorPrefix, "TransitionDuration")] = duration == null ? '' : "".concat(duration, "ms");
	}
	function closest(el, fn) {
	  while (el) {
	    if (fn(el)) {
	      return el;
	    }
	    el = el.parentNode;
	  }
	  return null;
	}
	function limit(min, max, value) {
	  return Math.max(min, Math.min(value, max));
	}
	function getPixelValue(stringValue) {
	  if (stringValue.substr(-2) === 'px') {
	    return parseFloat(stringValue);
	  }
	  return 0;
	}
	function getElementMargin(element) {
	  var style = window.getComputedStyle(element);
	  return {
	    bottom: getPixelValue(style.marginBottom),
	    left: getPixelValue(style.marginLeft),
	    right: getPixelValue(style.marginRight),
	    top: getPixelValue(style.marginTop)
	  };
	}
	function provideDisplayName(prefix, Component) {
	  var componentName = Component.displayName || Component.name;
	  return componentName ? "".concat(prefix, "(").concat(componentName, ")") : prefix;
	}
	function getScrollAdjustedBoundingClientRect(node, scrollDelta) {
	  var boundingClientRect = node.getBoundingClientRect();
	  return {
	    top: boundingClientRect.top + scrollDelta.top,
	    left: boundingClientRect.left + scrollDelta.left
	  };
	}
	function getPosition(event) {
	  if (event.touches && event.touches.length) {
	    return {
	      x: event.touches[0].pageX,
	      y: event.touches[0].pageY
	    };
	  } else if (event.changedTouches && event.changedTouches.length) {
	    return {
	      x: event.changedTouches[0].pageX,
	      y: event.changedTouches[0].pageY
	    };
	  } else {
	    return {
	      x: event.pageX,
	      y: event.pageY
	    };
	  }
	}
	function isTouchEvent(event) {
	  return event.touches && event.touches.length || event.changedTouches && event.changedTouches.length;
	}
	function getEdgeOffset(node, parent) {
	  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
	    left: 0,
	    top: 0
	  };
	  if (!node) {
	    return undefined;
	  }
	  var nodeOffset = {
	    left: offset.left + node.offsetLeft,
	    top: offset.top + node.offsetTop
	  };
	  if (node.parentNode === parent) {
	    return nodeOffset;
	  }
	  return getEdgeOffset(node.parentNode, parent, nodeOffset);
	}
	function getTargetIndex(newIndex, prevIndex, oldIndex) {
	  if (newIndex < oldIndex && newIndex > prevIndex) {
	    return newIndex - 1;
	  } else if (newIndex > oldIndex && newIndex < prevIndex) {
	    return newIndex + 1;
	  } else {
	    return newIndex;
	  }
	}
	function getLockPixelOffset(_ref) {
	  var lockOffset = _ref.lockOffset,
	    width = _ref.width,
	    height = _ref.height;
	  var offsetX = lockOffset;
	  var offsetY = lockOffset;
	  var unit = 'px';
	  if (typeof lockOffset === 'string') {
	    var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);
	    invariant_1(match !== null, 'lockOffset value should be a number or a string of a ' + 'number followed by "px" or "%". Given %s', lockOffset);
	    offsetX = parseFloat(lockOffset);
	    offsetY = parseFloat(lockOffset);
	    unit = match[1];
	  }
	  invariant_1(isFinite(offsetX) && isFinite(offsetY), 'lockOffset value should be a finite. Given %s', lockOffset);
	  if (unit === '%') {
	    offsetX = offsetX * width / 100;
	    offsetY = offsetY * height / 100;
	  }
	  return {
	    x: offsetX,
	    y: offsetY
	  };
	}
	function getLockPixelOffsets(_ref2) {
	  var height = _ref2.height,
	    width = _ref2.width,
	    lockOffset = _ref2.lockOffset;
	  var offsets = Array.isArray(lockOffset) ? lockOffset : [lockOffset, lockOffset];
	  invariant_1(offsets.length === 2, 'lockOffset prop of SortableContainer should be a single ' + 'value or an array of exactly two values. Given %s', lockOffset);
	  var _offsets = _slicedToArray(offsets, 2),
	    minLockOffset = _offsets[0],
	    maxLockOffset = _offsets[1];
	  return [getLockPixelOffset({
	    height: height,
	    lockOffset: minLockOffset,
	    width: width
	  }), getLockPixelOffset({
	    height: height,
	    lockOffset: maxLockOffset,
	    width: width
	  })];
	}
	function isScrollable(el) {
	  var computedStyle = window.getComputedStyle(el);
	  var overflowRegex = /(auto|scroll)/;
	  var properties = ['overflow', 'overflowX', 'overflowY'];
	  return properties.find(function (property) {
	    return overflowRegex.test(computedStyle[property]);
	  });
	}
	function getScrollingParent(el) {
	  if (!(el instanceof HTMLElement)) {
	    return null;
	  } else if (isScrollable(el)) {
	    return el;
	  } else {
	    return getScrollingParent(el.parentNode);
	  }
	}
	function getContainerGridGap(element) {
	  var style = window.getComputedStyle(element);
	  if (style.display === 'grid') {
	    return {
	      x: getPixelValue(style.gridColumnGap),
	      y: getPixelValue(style.gridRowGap)
	    };
	  }
	  return {
	    x: 0,
	    y: 0
	  };
	}
	var KEYCODE = {
	  TAB: 9,
	  ESC: 27,
	  SPACE: 32,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40
	};
	var NodeType = {
	  Anchor: 'A',
	  Button: 'BUTTON',
	  Canvas: 'CANVAS',
	  Input: 'INPUT',
	  Option: 'OPTION',
	  Textarea: 'TEXTAREA',
	  Select: 'SELECT'
	};
	function cloneNode(node) {
	  var selector = 'input, textarea, select, canvas, [contenteditable]';
	  var fields = node.querySelectorAll(selector);
	  var clonedNode = node.cloneNode(true);
	  var clonedFields = _toConsumableArray(clonedNode.querySelectorAll(selector));
	  clonedFields.forEach(function (field, i) {
	    if (field.type !== 'file') {
	      field.value = fields[i].value;
	    }
	    if (field.type === 'radio' && field.name) {
	      field.name = "__sortableClone__".concat(field.name);
	    }
	    if (field.tagName === NodeType.Canvas && fields[i].width > 0 && fields[i].height > 0) {
	      var destCtx = field.getContext('2d');
	      destCtx.drawImage(fields[i], 0, 0);
	    }
	  });
	  return clonedNode;
	}

	function _callSuper$2(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$2() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$2() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct() { return !!t; })(); }
	function sortableHandle(WrappedComponent) {
	  var _WithSortableHandle;
	  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    withRef: false
	  };
	  return _WithSortableHandle = function (_React$Component) {
	    function WithSortableHandle() {
	      var _this;
	      _classCallCheck(this, WithSortableHandle);
	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	      _this = _callSuper$2(this, WithSortableHandle, [].concat(args));
	      _defineProperty(_this, "wrappedInstance", React__namespace.createRef());
	      return _this;
	    }
	    _inherits(WithSortableHandle, _React$Component);
	    return _createClass(WithSortableHandle, [{
	      key: "componentDidMount",
	      value: function componentDidMount() {
	        var node = reactDom.findDOMNode(this);
	        node.sortableHandle = true;
	      }
	    }, {
	      key: "getWrappedInstance",
	      value: function getWrappedInstance() {
	        invariant_1(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call');
	        return this.wrappedInstance.current;
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var ref = config.withRef ? this.wrappedInstance : null;
	        return React__namespace.createElement(WrappedComponent, _extends({
	          ref: ref
	        }, this.props));
	      }
	    }]);
	  }(React__namespace.Component), _defineProperty(_WithSortableHandle, "displayName", provideDisplayName('sortableHandle', WrappedComponent)), _WithSortableHandle;
	}
	function isSortableHandle(node) {
	  return node.sortableHandle != null;
	}

	var AutoScroller = function () {
	  function AutoScroller(container, onScrollCallback) {
	    _classCallCheck(this, AutoScroller);
	    this.container = container;
	    this.onScrollCallback = onScrollCallback;
	  }
	  return _createClass(AutoScroller, [{
	    key: "clear",
	    value: function clear() {
	      if (this.interval == null) {
	        return;
	      }
	      clearInterval(this.interval);
	      this.interval = null;
	    }
	  }, {
	    key: "update",
	    value: function update(_ref) {
	      var _this = this;
	      var translate = _ref.translate,
	        minTranslate = _ref.minTranslate,
	        maxTranslate = _ref.maxTranslate,
	        width = _ref.width,
	        height = _ref.height;
	      var direction = {
	        x: 0,
	        y: 0
	      };
	      var speed = {
	        x: 1,
	        y: 1
	      };
	      var acceleration = {
	        x: 10,
	        y: 10
	      };
	      var _this$container = this.container,
	        scrollTop = _this$container.scrollTop,
	        scrollLeft = _this$container.scrollLeft,
	        scrollHeight = _this$container.scrollHeight,
	        scrollWidth = _this$container.scrollWidth,
	        clientHeight = _this$container.clientHeight,
	        clientWidth = _this$container.clientWidth;
	      var isTop = scrollTop === 0;
	      var isBottom = scrollHeight - scrollTop - clientHeight === 0;
	      var isLeft = scrollLeft === 0;
	      var isRight = scrollWidth - scrollLeft - clientWidth === 0;
	      if (translate.y >= maxTranslate.y - height / 2 && !isBottom) {
	        direction.y = 1;
	        speed.y = acceleration.y * Math.abs((maxTranslate.y - height / 2 - translate.y) / height);
	      } else if (translate.x >= maxTranslate.x - width / 2 && !isRight) {
	        direction.x = 1;
	        speed.x = acceleration.x * Math.abs((maxTranslate.x - width / 2 - translate.x) / width);
	      } else if (translate.y <= minTranslate.y + height / 2 && !isTop) {
	        direction.y = -1;
	        speed.y = acceleration.y * Math.abs((translate.y - height / 2 - minTranslate.y) / height);
	      } else if (translate.x <= minTranslate.x + width / 2 && !isLeft) {
	        direction.x = -1;
	        speed.x = acceleration.x * Math.abs((translate.x - width / 2 - minTranslate.x) / width);
	      }
	      if (this.interval) {
	        this.clear();
	        this.isAutoScrolling = false;
	      }
	      if (direction.x !== 0 || direction.y !== 0) {
	        this.interval = setInterval(function () {
	          _this.isAutoScrolling = true;
	          var offset = {
	            left: speed.x * direction.x,
	            top: speed.y * direction.y
	          };
	          _this.container.scrollTop += offset.top;
	          _this.container.scrollLeft += offset.left;
	          _this.onScrollCallback(offset);
	        }, 5);
	      }
	    }
	  }]);
	}();

	function defaultGetHelperDimensions(_ref) {
	  var node = _ref.node;
	  return {
	    height: node.offsetHeight,
	    width: node.offsetWidth
	  };
	}

	function defaultShouldCancelStart(event) {
	  var interactiveElements = [NodeType.Input, NodeType.Textarea, NodeType.Select, NodeType.Option, NodeType.Button];
	  if (interactiveElements.indexOf(event.target.tagName) !== -1) {
	    return true;
	  }
	  if (closest(event.target, function (el) {
	    return el.contentEditable === 'true';
	  })) {
	    return true;
	  }
	  return false;
	}

	var propTypes$1 = {
	  axis: PropTypes.oneOf(['x', 'y', 'xy']),
	  contentWindow: PropTypes.any,
	  disableAutoscroll: PropTypes.bool,
	  distance: PropTypes.number,
	  getContainer: PropTypes.func,
	  getHelperDimensions: PropTypes.func,
	  helperClass: PropTypes.string,
	  helperContainer: PropTypes.oneOfType([PropTypes.func, typeof HTMLElement === 'undefined' ? PropTypes.any : PropTypes.instanceOf(HTMLElement)]),
	  hideSortableGhost: PropTypes.bool,
	  keyboardSortingTransitionDuration: PropTypes.number,
	  lockAxis: PropTypes.string,
	  lockOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))]),
	  lockToContainerEdges: PropTypes.bool,
	  onSortEnd: PropTypes.func,
	  onSortMove: PropTypes.func,
	  onSortOver: PropTypes.func,
	  onSortStart: PropTypes.func,
	  pressDelay: PropTypes.number,
	  pressThreshold: PropTypes.number,
	  keyCodes: PropTypes.shape({
	    lift: PropTypes.arrayOf(PropTypes.number),
	    drop: PropTypes.arrayOf(PropTypes.number),
	    cancel: PropTypes.arrayOf(PropTypes.number),
	    up: PropTypes.arrayOf(PropTypes.number),
	    down: PropTypes.arrayOf(PropTypes.number)
	  }),
	  shouldCancelStart: PropTypes.func,
	  transitionDuration: PropTypes.number,
	  updateBeforeSortStart: PropTypes.func,
	  useDragHandle: PropTypes.bool,
	  useWindowAsScrollContainer: PropTypes.bool
	};
	var defaultKeyCodes = {
	  lift: [KEYCODE.SPACE],
	  drop: [KEYCODE.SPACE],
	  cancel: [KEYCODE.ESC],
	  up: [KEYCODE.UP, KEYCODE.LEFT],
	  down: [KEYCODE.DOWN, KEYCODE.RIGHT]
	};
	var defaultProps = {
	  axis: 'y',
	  disableAutoscroll: false,
	  distance: 0,
	  getHelperDimensions: defaultGetHelperDimensions,
	  hideSortableGhost: true,
	  lockOffset: '50%',
	  lockToContainerEdges: false,
	  pressDelay: 0,
	  pressThreshold: 5,
	  keyCodes: defaultKeyCodes,
	  shouldCancelStart: defaultShouldCancelStart,
	  transitionDuration: 300,
	  useWindowAsScrollContainer: false
	};
	var omittedProps$1 = Object.keys(propTypes$1);
	function validateProps(props) {
	  invariant_1(!(props.distance && props.pressDelay), 'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.');
	}

	function _finallyRethrows(body, finalizer) {
	  try {
	    var result = body();
	  } catch (e) {
	    return finalizer(true, e);
	  }
	  if (result && result.then) {
	    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
	  }
	  return finalizer(false, result);
	}
	function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
	function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
	function _callSuper$1(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct$1() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct$1() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct() { return !!t; })(); }
	var SortableContext = React__namespace.createContext({
	  manager: {}
	});
	function sortableContainer(WrappedComponent) {
	  var _WithSortableContainer;
	  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    withRef: false
	  };
	  return _WithSortableContainer = function (_React$Component) {
	    function WithSortableContainer(props) {
	      var _this;
	      _classCallCheck(this, WithSortableContainer);
	      _this = _callSuper$1(this, WithSortableContainer, [props]);
	      _defineProperty(_this, "state", {});
	      _defineProperty(_this, "handleStart", function (event) {
	        var _this$props = _this.props,
	          distance = _this$props.distance,
	          shouldCancelStart = _this$props.shouldCancelStart;
	        if (event.button === 2 || shouldCancelStart(event)) {
	          return;
	        }
	        _this.touched = true;
	        _this.position = getPosition(event);
	        var node = closest(event.target, function (el) {
	          return el.sortableInfo != null;
	        });
	        if (node && node.sortableInfo && _this.nodeIsChild(node) && !_this.state.sorting) {
	          var useDragHandle = _this.props.useDragHandle;
	          var _node$sortableInfo = node.sortableInfo,
	            index = _node$sortableInfo.index,
	            collection = _node$sortableInfo.collection,
	            disabled = _node$sortableInfo.disabled;
	          if (disabled) {
	            return;
	          }
	          if (useDragHandle && !closest(event.target, isSortableHandle)) {
	            return;
	          }
	          _this.manager.active = {
	            collection: collection,
	            index: index
	          };
	          if (!isTouchEvent(event) && event.target.tagName === NodeType.Anchor) {
	            event.preventDefault();
	          }
	          if (!distance) {
	            if (_this.props.pressDelay === 0) {
	              _this.handlePress(event);
	            } else {
	              _this.pressTimer = setTimeout(function () {
	                return _this.handlePress(event);
	              }, _this.props.pressDelay);
	            }
	          }
	        }
	      });
	      _defineProperty(_this, "nodeIsChild", function (node) {
	        return node.sortableInfo.manager === _this.manager;
	      });
	      _defineProperty(_this, "handleMove", function (event) {
	        var _this$props2 = _this.props,
	          distance = _this$props2.distance,
	          pressThreshold = _this$props2.pressThreshold;
	        if (!_this.state.sorting && _this.touched && !_this._awaitingUpdateBeforeSortStart) {
	          var position = getPosition(event);
	          var delta = {
	            x: _this.position.x - position.x,
	            y: _this.position.y - position.y
	          };
	          var combinedDelta = Math.abs(delta.x) + Math.abs(delta.y);
	          _this.delta = delta;
	          if (!distance && (!pressThreshold || combinedDelta >= pressThreshold)) {
	            clearTimeout(_this.cancelTimer);
	            _this.cancelTimer = setTimeout(_this.cancel, 0);
	          } else if (distance && combinedDelta >= distance && _this.manager.isActive()) {
	            _this.handlePress(event);
	          }
	        }
	      });
	      _defineProperty(_this, "handleEnd", function () {
	        _this.touched = false;
	        _this.cancel();
	      });
	      _defineProperty(_this, "cancel", function () {
	        var distance = _this.props.distance;
	        var sorting = _this.state.sorting;
	        if (!sorting) {
	          if (!distance) {
	            clearTimeout(_this.pressTimer);
	          }
	          _this.manager.active = null;
	        }
	      });
	      _defineProperty(_this, "handlePress", function (event) {
	        try {
	          var active = _this.manager.getActive();
	          var _temp4 = function () {
	            if (active) {
	              var _temp3 = function _temp3() {
	                var index = _node.sortableInfo.index;
	                var margin = getElementMargin(_node);
	                var gridGap = getContainerGridGap(_this.container);
	                var containerBoundingRect = _this.scrollContainer.getBoundingClientRect();
	                var dimensions = _getHelperDimensions({
	                  index: index,
	                  node: _node,
	                  collection: _collection
	                });
	                _this.node = _node;
	                _this.margin = margin;
	                _this.gridGap = gridGap;
	                _this.width = dimensions.width;
	                _this.height = dimensions.height;
	                _this.marginOffset = {
	                  x: _this.margin.left + _this.margin.right + _this.gridGap.x,
	                  y: Math.max(_this.margin.top, _this.margin.bottom, _this.gridGap.y)
	                };
	                _this.boundingClientRect = _node.getBoundingClientRect();
	                _this.containerBoundingRect = containerBoundingRect;
	                _this.index = index;
	                _this.newIndex = index;
	                _this.axis = {
	                  x: _axis.indexOf('x') >= 0,
	                  y: _axis.indexOf('y') >= 0
	                };
	                _this.offsetEdge = getEdgeOffset(_node, _this.container);
	                if (_isKeySorting) {
	                  _this.initialOffset = getPosition(_objectSpread(_objectSpread({}, event), {}, {
	                    pageX: _this.boundingClientRect.left,
	                    pageY: _this.boundingClientRect.top
	                  }));
	                } else {
	                  _this.initialOffset = getPosition(event);
	                }
	                _this.initialScroll = {
	                  left: _this.scrollContainer.scrollLeft,
	                  top: _this.scrollContainer.scrollTop
	                };
	                _this.initialWindowScroll = {
	                  left: window.pageXOffset,
	                  top: window.pageYOffset
	                };
	                _this.helper = _this.helperContainer.appendChild(cloneNode(_node));
	                setInlineStyles(_this.helper, {
	                  boxSizing: 'border-box',
	                  height: "".concat(_this.height, "px"),
	                  left: "".concat(_this.boundingClientRect.left - margin.left, "px"),
	                  pointerEvents: 'none',
	                  position: 'fixed',
	                  top: "".concat(_this.boundingClientRect.top - margin.top, "px"),
	                  width: "".concat(_this.width, "px")
	                });
	                if (_isKeySorting) {
	                  _this.helper.focus();
	                }
	                if (_hideSortableGhost) {
	                  _this.sortableGhost = _node;
	                  setInlineStyles(_node, {
	                    opacity: 0,
	                    visibility: 'hidden'
	                  });
	                }
	                _this.minTranslate = {};
	                _this.maxTranslate = {};
	                if (_isKeySorting) {
	                  var _ref = _useWindowAsScrollContainer ? {
	                      top: 0,
	                      left: 0,
	                      width: _this.contentWindow.innerWidth,
	                      height: _this.contentWindow.innerHeight
	                    } : _this.containerBoundingRect,
	                    containerTop = _ref.top,
	                    containerLeft = _ref.left,
	                    containerWidth = _ref.width,
	                    containerHeight = _ref.height;
	                  var containerBottom = containerTop + containerHeight;
	                  var containerRight = containerLeft + containerWidth;
	                  if (_this.axis.x) {
	                    _this.minTranslate.x = containerLeft - _this.boundingClientRect.left;
	                    _this.maxTranslate.x = containerRight - (_this.boundingClientRect.left + _this.width);
	                  }
	                  if (_this.axis.y) {
	                    _this.minTranslate.y = containerTop - _this.boundingClientRect.top;
	                    _this.maxTranslate.y = containerBottom - (_this.boundingClientRect.top + _this.height);
	                  }
	                } else {
	                  if (_this.axis.x) {
	                    _this.minTranslate.x = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.left) - _this.boundingClientRect.left - _this.width / 2;
	                    _this.maxTranslate.x = (_useWindowAsScrollContainer ? _this.contentWindow.innerWidth : containerBoundingRect.left + containerBoundingRect.width) - _this.boundingClientRect.left - _this.width / 2;
	                  }
	                  if (_this.axis.y) {
	                    _this.minTranslate.y = (_useWindowAsScrollContainer ? 0 : containerBoundingRect.top) - _this.boundingClientRect.top - _this.height / 2;
	                    _this.maxTranslate.y = (_useWindowAsScrollContainer ? _this.contentWindow.innerHeight : containerBoundingRect.top + containerBoundingRect.height) - _this.boundingClientRect.top - _this.height / 2;
	                  }
	                }
	                if (_helperClass) {
	                  _helperClass.split(' ').forEach(function (className) {
	                    return _this.helper.classList.add(className);
	                  });
	                }
	                _this.listenerNode = event.touches ? event.target : _this.contentWindow;
	                if (_isKeySorting) {
	                  _this.listenerNode.addEventListener('wheel', _this.handleKeyEnd, true);
	                  _this.listenerNode.addEventListener('mousedown', _this.handleKeyEnd, true);
	                  _this.listenerNode.addEventListener('keydown', _this.handleKeyDown);
	                } else {
	                  events.move.forEach(function (eventName) {
	                    return _this.listenerNode.addEventListener(eventName, _this.handleSortMove, false);
	                  });
	                  events.end.forEach(function (eventName) {
	                    return _this.listenerNode.addEventListener(eventName, _this.handleSortEnd, false);
	                  });
	                }
	                _this.setState({
	                  sorting: true,
	                  sortingIndex: index
	                });
	                if (_onSortStart) {
	                  _onSortStart({
	                    node: _node,
	                    index: index,
	                    collection: _collection,
	                    isKeySorting: _isKeySorting,
	                    nodes: _this.manager.getOrderedRefs(),
	                    helper: _this.helper
	                  }, event);
	                }
	                if (_isKeySorting) {
	                  _this.keyMove(0);
	                }
	              };
	              var _this$props3 = _this.props,
	                _axis = _this$props3.axis,
	                _getHelperDimensions = _this$props3.getHelperDimensions,
	                _helperClass = _this$props3.helperClass,
	                _hideSortableGhost = _this$props3.hideSortableGhost,
	                updateBeforeSortStart = _this$props3.updateBeforeSortStart,
	                _onSortStart = _this$props3.onSortStart,
	                _useWindowAsScrollContainer = _this$props3.useWindowAsScrollContainer;
	              var _node = active.node,
	                _collection = active.collection;
	              var _isKeySorting = _this.manager.isKeySorting;
	              var _temp2 = function () {
	                if (typeof updateBeforeSortStart === 'function') {
	                  _this._awaitingUpdateBeforeSortStart = true;
	                  var _temp = _finallyRethrows(function () {
	                    var index = _node.sortableInfo.index;
	                    return Promise.resolve(updateBeforeSortStart({
	                      collection: _collection,
	                      index: index,
	                      node: _node,
	                      isKeySorting: _isKeySorting
	                    }, event)).then(function () {});
	                  }, function (_wasThrown, _result) {
	                    _this._awaitingUpdateBeforeSortStart = false;
	                    if (_wasThrown) throw _result;
	                    return _result;
	                  });
	                  if (_temp && _temp.then) return _temp.then(function () {});
	                }
	              }();
	              return _temp2 && _temp2.then ? _temp2.then(_temp3) : _temp3(_temp2);
	            }
	          }();
	          return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(function () {}) : void 0);
	        } catch (e) {
	          return Promise.reject(e);
	        }
	      });
	      _defineProperty(_this, "handleSortMove", function (event) {
	        var onSortMove = _this.props.onSortMove;
	        if (typeof event.preventDefault === 'function' && event.cancelable) {
	          event.preventDefault();
	        }
	        _this.updateHelperPosition(event);
	        _this.animateNodes();
	        _this.autoscroll();
	        if (onSortMove) {
	          onSortMove(event);
	        }
	      });
	      _defineProperty(_this, "handleSortEnd", function (event) {
	        var _this$props4 = _this.props,
	          hideSortableGhost = _this$props4.hideSortableGhost,
	          onSortEnd = _this$props4.onSortEnd;
	        var _this$manager = _this.manager,
	          collection = _this$manager.active.collection,
	          isKeySorting = _this$manager.isKeySorting;
	        var nodes = _this.manager.getOrderedRefs();
	        if (_this.listenerNode) {
	          if (isKeySorting) {
	            _this.listenerNode.removeEventListener('wheel', _this.handleKeyEnd, true);
	            _this.listenerNode.removeEventListener('mousedown', _this.handleKeyEnd, true);
	            _this.listenerNode.removeEventListener('keydown', _this.handleKeyDown);
	          } else {
	            events.move.forEach(function (eventName) {
	              return _this.listenerNode.removeEventListener(eventName, _this.handleSortMove);
	            });
	            events.end.forEach(function (eventName) {
	              return _this.listenerNode.removeEventListener(eventName, _this.handleSortEnd);
	            });
	          }
	        }
	        _this.helper.parentNode.removeChild(_this.helper);
	        if (hideSortableGhost && _this.sortableGhost) {
	          setInlineStyles(_this.sortableGhost, {
	            opacity: '',
	            visibility: ''
	          });
	        }
	        for (var i = 0, len = nodes.length; i < len; i++) {
	          var _node2 = nodes[i];
	          var el = _node2.node;
	          _node2.edgeOffset = null;
	          _node2.boundingClientRect = null;
	          setTranslate3d(el, null);
	          setTransitionDuration(el, null);
	          _node2.translate = null;
	        }
	        _this.autoScroller.clear();
	        _this.manager.active = null;
	        _this.manager.isKeySorting = false;
	        _this.setState({
	          sorting: false,
	          sortingIndex: null
	        });
	        if (typeof onSortEnd === 'function') {
	          onSortEnd({
	            collection: collection,
	            newIndex: _this.newIndex,
	            oldIndex: _this.index,
	            isKeySorting: isKeySorting,
	            nodes: nodes
	          }, event);
	        }
	        _this.touched = false;
	      });
	      _defineProperty(_this, "autoscroll", function () {
	        var disableAutoscroll = _this.props.disableAutoscroll;
	        var isKeySorting = _this.manager.isKeySorting;
	        if (disableAutoscroll) {
	          _this.autoScroller.clear();
	          return;
	        }
	        if (isKeySorting) {
	          var translate = _objectSpread({}, _this.translate);
	          var scrollX = 0;
	          var scrollY = 0;
	          if (_this.axis.x) {
	            translate.x = Math.min(_this.maxTranslate.x, Math.max(_this.minTranslate.x, _this.translate.x));
	            scrollX = _this.translate.x - translate.x;
	          }
	          if (_this.axis.y) {
	            translate.y = Math.min(_this.maxTranslate.y, Math.max(_this.minTranslate.y, _this.translate.y));
	            scrollY = _this.translate.y - translate.y;
	          }
	          _this.translate = translate;
	          setTranslate3d(_this.helper, _this.translate);
	          _this.scrollContainer.scrollLeft += scrollX;
	          _this.scrollContainer.scrollTop += scrollY;
	          return;
	        }
	        _this.autoScroller.update({
	          height: _this.height,
	          maxTranslate: _this.maxTranslate,
	          minTranslate: _this.minTranslate,
	          translate: _this.translate,
	          width: _this.width
	        });
	      });
	      _defineProperty(_this, "onAutoScroll", function (offset) {
	        _this.translate.x += offset.left;
	        _this.translate.y += offset.top;
	        _this.animateNodes();
	      });
	      _defineProperty(_this, "handleKeyDown", function (event) {
	        var keyCode = event.keyCode;
	        var _this$props5 = _this.props,
	          shouldCancelStart = _this$props5.shouldCancelStart,
	          _this$props5$keyCodes = _this$props5.keyCodes,
	          customKeyCodes = _this$props5$keyCodes === void 0 ? {} : _this$props5$keyCodes;
	        var keyCodes = _objectSpread(_objectSpread({}, defaultKeyCodes), customKeyCodes);
	        if (_this.manager.active && !_this.manager.isKeySorting || !_this.manager.active && (!keyCodes.lift.includes(keyCode) || shouldCancelStart(event) || !_this.isValidSortingTarget(event))) {
	          return;
	        }
	        event.stopPropagation();
	        event.preventDefault();
	        if (keyCodes.lift.includes(keyCode) && !_this.manager.active) {
	          _this.keyLift(event);
	        } else if (keyCodes.drop.includes(keyCode) && _this.manager.active) {
	          _this.keyDrop(event);
	        } else if (keyCodes.cancel.includes(keyCode)) {
	          _this.newIndex = _this.manager.active.index;
	          _this.keyDrop(event);
	        } else if (keyCodes.up.includes(keyCode)) {
	          _this.keyMove(-1);
	        } else if (keyCodes.down.includes(keyCode)) {
	          _this.keyMove(1);
	        }
	      });
	      _defineProperty(_this, "keyLift", function (event) {
	        var target = event.target;
	        var node = closest(target, function (el) {
	          return el.sortableInfo != null;
	        });
	        var _node$sortableInfo2 = node.sortableInfo,
	          index = _node$sortableInfo2.index,
	          collection = _node$sortableInfo2.collection;
	        _this.initialFocusedNode = target;
	        _this.manager.isKeySorting = true;
	        _this.manager.active = {
	          index: index,
	          collection: collection
	        };
	        _this.handlePress(event);
	      });
	      _defineProperty(_this, "keyMove", function (shift) {
	        var nodes = _this.manager.getOrderedRefs();
	        var lastIndex = nodes[nodes.length - 1].node.sortableInfo.index;
	        var newIndex = _this.newIndex + shift;
	        var prevIndex = _this.newIndex;
	        if (newIndex < 0 || newIndex > lastIndex) {
	          return;
	        }
	        _this.prevIndex = prevIndex;
	        _this.newIndex = newIndex;
	        var targetIndex = getTargetIndex(_this.newIndex, _this.prevIndex, _this.index);
	        var target = nodes.find(function (_ref2) {
	          var node = _ref2.node;
	          return node.sortableInfo.index === targetIndex;
	        });
	        var targetNode = target.node;
	        var scrollDelta = _this.containerScrollDelta;
	        var targetBoundingClientRect = target.boundingClientRect || getScrollAdjustedBoundingClientRect(targetNode, scrollDelta);
	        var targetTranslate = target.translate || {
	          x: 0,
	          y: 0
	        };
	        var targetPosition = {
	          top: targetBoundingClientRect.top + targetTranslate.y - scrollDelta.top,
	          left: targetBoundingClientRect.left + targetTranslate.x - scrollDelta.left
	        };
	        var shouldAdjustForSize = prevIndex < newIndex;
	        var sizeAdjustment = {
	          x: shouldAdjustForSize && _this.axis.x ? targetNode.offsetWidth - _this.width : 0,
	          y: shouldAdjustForSize && _this.axis.y ? targetNode.offsetHeight - _this.height : 0
	        };
	        _this.handleSortMove({
	          pageX: targetPosition.left + sizeAdjustment.x,
	          pageY: targetPosition.top + sizeAdjustment.y,
	          ignoreTransition: shift === 0
	        });
	      });
	      _defineProperty(_this, "keyDrop", function (event) {
	        _this.handleSortEnd(event);
	        if (_this.initialFocusedNode) {
	          _this.initialFocusedNode.focus();
	        }
	      });
	      _defineProperty(_this, "handleKeyEnd", function (event) {
	        if (_this.manager.active) {
	          _this.keyDrop(event);
	        }
	      });
	      _defineProperty(_this, "isValidSortingTarget", function (event) {
	        var useDragHandle = _this.props.useDragHandle;
	        var target = event.target;
	        var node = closest(target, function (el) {
	          return el.sortableInfo != null;
	        });
	        return node && node.sortableInfo && !node.sortableInfo.disabled && (useDragHandle ? isSortableHandle(target) : target.sortableInfo);
	      });
	      var manager = new Manager();
	      validateProps(props);
	      _this.manager = manager;
	      _this.wrappedInstance = React__namespace.createRef();
	      _this.sortableContextValue = {
	        manager: manager
	      };
	      _this.events = {
	        end: _this.handleEnd,
	        move: _this.handleMove,
	        start: _this.handleStart
	      };
	      return _this;
	    }
	    _inherits(WithSortableContainer, _React$Component);
	    return _createClass(WithSortableContainer, [{
	      key: "componentDidMount",
	      value: function componentDidMount() {
	        var _this2 = this;
	        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
	        var container = this.getContainer();
	        Promise.resolve(container).then(function (containerNode) {
	          _this2.container = containerNode;
	          _this2.document = _this2.container.ownerDocument || document;
	          var contentWindow = _this2.props.contentWindow || _this2.document.defaultView || window;
	          _this2.contentWindow = typeof contentWindow === 'function' ? contentWindow() : contentWindow;
	          _this2.scrollContainer = useWindowAsScrollContainer ? _this2.document.scrollingElement || _this2.document.documentElement : getScrollingParent(_this2.container) || _this2.container;
	          _this2.autoScroller = new AutoScroller(_this2.scrollContainer, _this2.onAutoScroll);
	          Object.keys(_this2.events).forEach(function (key) {
	            return events[key].forEach(function (eventName) {
	              return _this2.container.addEventListener(eventName, _this2.events[key], false);
	            });
	          });
	          _this2.container.addEventListener('keydown', _this2.handleKeyDown);
	        });
	      }
	    }, {
	      key: "componentWillUnmount",
	      value: function componentWillUnmount() {
	        var _this3 = this;
	        if (this.helper && this.helper.parentNode) {
	          this.helper.parentNode.removeChild(this.helper);
	        }
	        if (!this.container) {
	          return;
	        }
	        Object.keys(this.events).forEach(function (key) {
	          return events[key].forEach(function (eventName) {
	            return _this3.container.removeEventListener(eventName, _this3.events[key]);
	          });
	        });
	        this.container.removeEventListener('keydown', this.handleKeyDown);
	      }
	    }, {
	      key: "updateHelperPosition",
	      value: function updateHelperPosition(event) {
	        var _this$props6 = this.props,
	          lockAxis = _this$props6.lockAxis,
	          lockOffset = _this$props6.lockOffset,
	          lockToContainerEdges = _this$props6.lockToContainerEdges,
	          transitionDuration = _this$props6.transitionDuration,
	          _this$props6$keyboard = _this$props6.keyboardSortingTransitionDuration,
	          keyboardSortingTransitionDuration = _this$props6$keyboard === void 0 ? transitionDuration : _this$props6$keyboard;
	        var isKeySorting = this.manager.isKeySorting;
	        var ignoreTransition = event.ignoreTransition;
	        var offset = getPosition(event);
	        var translate = {
	          x: offset.x - this.initialOffset.x,
	          y: offset.y - this.initialOffset.y
	        };
	        translate.y -= window.pageYOffset - this.initialWindowScroll.top;
	        translate.x -= window.pageXOffset - this.initialWindowScroll.left;
	        this.translate = translate;
	        if (lockToContainerEdges) {
	          var _getLockPixelOffsets = getLockPixelOffsets({
	              height: this.height,
	              lockOffset: lockOffset,
	              width: this.width
	            }),
	            _getLockPixelOffsets2 = _slicedToArray(_getLockPixelOffsets, 2),
	            minLockOffset = _getLockPixelOffsets2[0],
	            maxLockOffset = _getLockPixelOffsets2[1];
	          var minOffset = {
	            x: this.width / 2 - minLockOffset.x,
	            y: this.height / 2 - minLockOffset.y
	          };
	          var maxOffset = {
	            x: this.width / 2 - maxLockOffset.x,
	            y: this.height / 2 - maxLockOffset.y
	          };
	          translate.x = limit(this.minTranslate.x + minOffset.x, this.maxTranslate.x - maxOffset.x, translate.x);
	          translate.y = limit(this.minTranslate.y + minOffset.y, this.maxTranslate.y - maxOffset.y, translate.y);
	        }
	        if (lockAxis === 'x') {
	          translate.y = 0;
	        } else if (lockAxis === 'y') {
	          translate.x = 0;
	        }
	        if (isKeySorting && keyboardSortingTransitionDuration && !ignoreTransition) {
	          setTransitionDuration(this.helper, keyboardSortingTransitionDuration);
	        }
	        setTranslate3d(this.helper, translate);
	      }
	    }, {
	      key: "animateNodes",
	      value: function animateNodes() {
	        var _this$props7 = this.props,
	          transitionDuration = _this$props7.transitionDuration,
	          hideSortableGhost = _this$props7.hideSortableGhost,
	          onSortOver = _this$props7.onSortOver;
	        var containerScrollDelta = this.containerScrollDelta,
	          windowScrollDelta = this.windowScrollDelta;
	        var nodes = this.manager.getOrderedRefs();
	        var sortingOffset = {
	          left: this.offsetEdge.left + this.translate.x + containerScrollDelta.left,
	          top: this.offsetEdge.top + this.translate.y + containerScrollDelta.top
	        };
	        var isKeySorting = this.manager.isKeySorting;
	        var prevIndex = this.newIndex;
	        this.newIndex = null;
	        for (var i = 0, len = nodes.length; i < len; i++) {
	          var _node3 = nodes[i].node;
	          var index = _node3.sortableInfo.index;
	          var width = _node3.offsetWidth;
	          var height = _node3.offsetHeight;
	          var offset = {
	            height: this.height > height ? height / 2 : this.height / 2,
	            width: this.width > width ? width / 2 : this.width / 2
	          };
	          var mustShiftBackward = isKeySorting && index > this.index && index <= prevIndex;
	          var mustShiftForward = isKeySorting && index < this.index && index >= prevIndex;
	          var translate = {
	            x: 0,
	            y: 0
	          };
	          var edgeOffset = nodes[i].edgeOffset;
	          if (!edgeOffset) {
	            edgeOffset = getEdgeOffset(_node3, this.container);
	            nodes[i].edgeOffset = edgeOffset;
	            if (isKeySorting) {
	              nodes[i].boundingClientRect = getScrollAdjustedBoundingClientRect(_node3, containerScrollDelta);
	            }
	          }
	          var nextNode = i < nodes.length - 1 && nodes[i + 1];
	          var prevNode = i > 0 && nodes[i - 1];
	          if (nextNode && !nextNode.edgeOffset) {
	            nextNode.edgeOffset = getEdgeOffset(nextNode.node, this.container);
	            if (isKeySorting) {
	              nextNode.boundingClientRect = getScrollAdjustedBoundingClientRect(nextNode.node, containerScrollDelta);
	            }
	          }
	          if (index === this.index) {
	            if (hideSortableGhost) {
	              this.sortableGhost = _node3;
	              setInlineStyles(_node3, {
	                opacity: 0,
	                visibility: 'hidden'
	              });
	            }
	            continue;
	          }
	          if (transitionDuration) {
	            setTransitionDuration(_node3, transitionDuration);
	          }
	          if (this.axis.x) {
	            if (this.axis.y) {
	              if (mustShiftForward || index < this.index && (sortingOffset.left + windowScrollDelta.left - offset.width <= edgeOffset.left && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height || sortingOffset.top + windowScrollDelta.top + offset.height <= edgeOffset.top)) {
	                translate.x = this.width + this.marginOffset.x;
	                if (edgeOffset.left + translate.x > this.containerBoundingRect.width - offset.width * 2) {
	                  if (nextNode) {
	                    translate.x = nextNode.edgeOffset.left - edgeOffset.left;
	                    translate.y = nextNode.edgeOffset.top - edgeOffset.top;
	                  }
	                }
	                if (this.newIndex === null) {
	                  this.newIndex = index;
	                }
	              } else if (mustShiftBackward || index > this.index && (sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top || sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top + height)) {
	                translate.x = -(this.width + this.marginOffset.x);
	                if (edgeOffset.left + translate.x < this.containerBoundingRect.left + offset.width) {
	                  if (prevNode) {
	                    translate.x = prevNode.edgeOffset.left - edgeOffset.left;
	                    translate.y = prevNode.edgeOffset.top - edgeOffset.top;
	                  }
	                }
	                this.newIndex = index;
	              }
	            } else {
	              if (mustShiftBackward || index > this.index && sortingOffset.left + windowScrollDelta.left + offset.width >= edgeOffset.left) {
	                translate.x = -(this.width + this.marginOffset.x);
	                this.newIndex = index;
	              } else if (mustShiftForward || index < this.index && sortingOffset.left + windowScrollDelta.left <= edgeOffset.left + offset.width) {
	                translate.x = this.width + this.marginOffset.x;
	                if (this.newIndex == null) {
	                  this.newIndex = index;
	                }
	              }
	            }
	          } else if (this.axis.y) {
	            if (mustShiftBackward || index > this.index && sortingOffset.top + windowScrollDelta.top + offset.height >= edgeOffset.top) {
	              translate.y = -(this.height + this.marginOffset.y);
	              this.newIndex = index;
	            } else if (mustShiftForward || index < this.index && sortingOffset.top + windowScrollDelta.top <= edgeOffset.top + offset.height) {
	              translate.y = this.height + this.marginOffset.y;
	              if (this.newIndex == null) {
	                this.newIndex = index;
	              }
	            }
	          }
	          setTranslate3d(_node3, translate);
	          nodes[i].translate = translate;
	        }
	        if (this.newIndex == null) {
	          this.newIndex = this.index;
	        }
	        if (isKeySorting) {
	          this.newIndex = prevIndex;
	        }
	        var oldIndex = isKeySorting ? this.prevIndex : prevIndex;
	        if (onSortOver && this.newIndex !== oldIndex) {
	          onSortOver({
	            collection: this.manager.active.collection,
	            index: this.index,
	            newIndex: this.newIndex,
	            oldIndex: oldIndex,
	            isKeySorting: isKeySorting,
	            nodes: nodes,
	            helper: this.helper
	          });
	        }
	      }
	    }, {
	      key: "getWrappedInstance",
	      value: function getWrappedInstance() {
	        invariant_1(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call');
	        return this.wrappedInstance.current;
	      }
	    }, {
	      key: "getContainer",
	      value: function getContainer() {
	        var getContainer = this.props.getContainer;
	        if (typeof getContainer !== 'function') {
	          return reactDom.findDOMNode(this);
	        }
	        return getContainer(config.withRef ? this.getWrappedInstance() : undefined);
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var ref = config.withRef ? this.wrappedInstance : null;
	        return React__namespace.createElement(SortableContext.Provider, {
	          value: this.sortableContextValue
	        }, React__namespace.createElement(WrappedComponent, _extends({
	          ref: ref
	        }, omit(this.props, omittedProps$1))));
	      }
	    }, {
	      key: "helperContainer",
	      get: function get() {
	        var helperContainer = this.props.helperContainer;
	        if (typeof helperContainer === 'function') {
	          return helperContainer();
	        }
	        return this.props.helperContainer || this.document.body;
	      }
	    }, {
	      key: "containerScrollDelta",
	      get: function get() {
	        var useWindowAsScrollContainer = this.props.useWindowAsScrollContainer;
	        if (useWindowAsScrollContainer) {
	          return {
	            left: 0,
	            top: 0
	          };
	        }
	        return {
	          left: this.scrollContainer.scrollLeft - this.initialScroll.left,
	          top: this.scrollContainer.scrollTop - this.initialScroll.top
	        };
	      }
	    }, {
	      key: "windowScrollDelta",
	      get: function get() {
	        return {
	          left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
	          top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
	        };
	      }
	    }]);
	  }(React__namespace.Component), _defineProperty(_WithSortableContainer, "displayName", provideDisplayName('sortableList', WrappedComponent)), _defineProperty(_WithSortableContainer, "defaultProps", defaultProps), _defineProperty(_WithSortableContainer, "propTypes", propTypes$1), _WithSortableContainer;
	}

	function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
	function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
	var propTypes = {
	  index: PropTypes.number.isRequired,
	  collection: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	  disabled: PropTypes.bool
	};
	var omittedProps = Object.keys(propTypes);
	function sortableElement(WrappedComponent) {
	  var _WithSortableElement;
	  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    withRef: false
	  };
	  return _WithSortableElement = function (_React$Component) {
	    function WithSortableElement() {
	      var _this;
	      _classCallCheck(this, WithSortableElement);
	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	      _this = _callSuper(this, WithSortableElement, [].concat(args));
	      _defineProperty(_this, "wrappedInstance", React__namespace.createRef());
	      return _this;
	    }
	    _inherits(WithSortableElement, _React$Component);
	    return _createClass(WithSortableElement, [{
	      key: "componentDidMount",
	      value: function componentDidMount() {
	        this.register();
	      }
	    }, {
	      key: "componentDidUpdate",
	      value: function componentDidUpdate(prevProps) {
	        if (this.node) {
	          if (prevProps.index !== this.props.index) {
	            this.node.sortableInfo.index = this.props.index;
	          }
	          if (prevProps.disabled !== this.props.disabled) {
	            this.node.sortableInfo.disabled = this.props.disabled;
	          }
	        }
	        if (prevProps.collection !== this.props.collection) {
	          this.unregister(prevProps.collection);
	          this.register();
	        }
	      }
	    }, {
	      key: "componentWillUnmount",
	      value: function componentWillUnmount() {
	        this.unregister();
	      }
	    }, {
	      key: "register",
	      value: function register() {
	        var _this$props = this.props,
	          collection = _this$props.collection,
	          disabled = _this$props.disabled,
	          index = _this$props.index;
	        var node = reactDom.findDOMNode(this);
	        node.sortableInfo = {
	          collection: collection,
	          disabled: disabled,
	          index: index,
	          manager: this.context.manager
	        };
	        this.node = node;
	        this.ref = {
	          node: node
	        };
	        this.context.manager.add(collection, this.ref);
	      }
	    }, {
	      key: "unregister",
	      value: function unregister() {
	        var collection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.collection;
	        this.context.manager.remove(collection, this.ref);
	      }
	    }, {
	      key: "getWrappedInstance",
	      value: function getWrappedInstance() {
	        invariant_1(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call');
	        return this.wrappedInstance.current;
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var ref = config.withRef ? this.wrappedInstance : null;
	        return React__namespace.createElement(WrappedComponent, _extends({
	          ref: ref
	        }, omit(this.props, omittedProps)));
	      }
	    }]);
	  }(React__namespace.Component), _defineProperty(_WithSortableElement, "displayName", provideDisplayName('sortableElement', WrappedComponent)), _defineProperty(_WithSortableElement, "contextType", SortableContext), _defineProperty(_WithSortableElement, "propTypes", propTypes), _defineProperty(_WithSortableElement, "defaultProps", {
	    collection: 0
	  }), _WithSortableElement;
	}

	exports.SortableContainer = sortableContainer;
	exports.SortableElement = sortableElement;
	exports.SortableHandle = sortableHandle;
	exports.arrayMove = arrayMove;
	exports.sortableContainer = sortableContainer;
	exports.sortableElement = sortableElement;
	exports.sortableHandle = sortableHandle;

}));
