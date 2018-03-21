(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("ReactSwipes", ["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactSwipes"] = factory(require("react"));
	else
		root["ReactSwipes"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(2);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _flipsnap = __webpack_require__(12);

	var _flipsnap2 = _interopRequireDefault(_flipsnap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * flipsnap库——react版本 用于实现轮播图，卡片切换等动效
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * author: http://younth.github.io/
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ReactSwipes = function (_Component) {
	  _inherits(ReactSwipes, _Component);

	  function ReactSwipes() {
	    _classCallCheck(this, ReactSwipes);

	    return _possibleConstructorReturn(this, (ReactSwipes.__proto__ || Object.getPrototypeOf(ReactSwipes)).apply(this, arguments));
	  }

	  _createClass(ReactSwipes, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props,
	          options = _props.options,
	          children = _props.children;

	      var len = children.length;
	      this.swipes = (0, _flipsnap2.default)(this.refs.container, {
	        distance: options.distance,
	        currentPoint: options.currentPoint,
	        autoPlay: options.autoPlay,
	        loop: options.loop
	      });

	      // 各个阶段事件监听
	      this.swipes.element.addEventListener('fstouchstart', function (ev) {
	        options.swTouchstart && options.swTouchstart(ev);
	      }, false);

	      this.swipes.element.addEventListener('fstouchmove', function (ev) {
	        options.swTouchmove && options.swTouchmove(ev);
	      }, false);

	      this.swipes.element.addEventListener('fstouchend', function (ev) {
	        options.swTouchend && options.swTouchend(ev);
	      }, false);
	    }

	    // 注销

	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.swipes.destroy();
	    }
	  }, {
	    key: 'refresh',
	    value: function refresh() {
	      this.swipes.refresh();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          id = _props2.id,
	          className = _props2.className,
	          style = _props2.style,
	          children = _props2.children;
	      // todo 计算 父级包裹元素的宽度

	      return _react2.default.createElement(
	        'div',
	        { style: style.wrapper, className: className, ref: 'container' },
	        _react2.default.Children.map(children, function (child) {
	          // return React.cloneElement(child, {style: style.child});
	          return _react2.default.cloneElement(child);
	        })
	      );
	    }
	  }]);

	  return ReactSwipes;
	}(_react.Component);

	ReactSwipes.propTypes = {
	  swipeOptions: _propTypes2.default.shape({
	    distance: _propTypes2.default.number,
	    currentPoint: _propTypes2.default.number,
	    // continuous: PropTypes.bool,
	    swTouchstart: _propTypes2.default.func,
	    swTouchmove: _propTypes2.default.func,
	    swTouchend: _propTypes2.default.func
	  })
	  // style: PropTypes.shape({
	  //   container: PropTypes.object,
	  //   wrapper: PropTypes.object,
	  //   child: PropTypes.object
	  // }),
	  // id: PropTypes.string,
	  // className: PropTypes.string
	};
	ReactSwipes.defaultProps = {
	  swipeOptions: {},
	  style: {

	    wrapper: {
	      // overflow: 'hidden',
	      // position: 'relative',
	    },

	    child: {
	      // float: 'left',
	      // width: '100%',
	      // position: 'relative',
	      // transitionProperty: 'transform'
	    }
	  },
	  className: ''
	};
	exports.default = ReactSwipes;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(4)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(11)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(5);
	var invariant = __webpack_require__(6);
	var warning = __webpack_require__(7);
	var assign = __webpack_require__(8);

	var ReactPropTypesSecret = __webpack_require__(9);
	var checkPropTypes = __webpack_require__(10);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (process.env.NODE_ENV !== 'production') {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(5);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	if (process.env.NODE_ENV !== 'production') {
	  var invariant = __webpack_require__(6);
	  var warning = __webpack_require__(7);
	  var ReactPropTypesSecret = __webpack_require__(9);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(5);
	var invariant = __webpack_require__(6);
	var ReactPropTypesSecret = __webpack_require__(9);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * flipsnap
	 * 支持自动播放
	 * 支持切换动画
	 */

	// 支持模块化引入
	(function (root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	    module.exports = factory();
	  } else {
	    root.Flipsnap = factory();
	  }
	})(undefined, function () {

	  var div = document.createElement('div');
	  var prefix = ['webkit', 'moz', 'o', 'ms'];
	  var saveProp = {};
	  var support = Flipsnap.support = {};
	  var gestureStart = false;

	  var DISTANCE_THRESHOLD = 5;
	  var ANGLE_THREHOLD = 55;

	  // 功能检测 transform3d transform trasition 3个css3属性的支持程度
	  support.transform3d = hasProp(['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective']);

	  support.transform = hasProp(['transformProperty', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform']);

	  support.transition = hasProp(['transitionProperty', 'WebkitTransitionProperty', 'MozTransitionProperty', 'OTransitionProperty', 'msTransitionProperty']);

	  support.addEventListener = 'addEventListener' in window; // 事件监听属性判断
	  support.mspointer = window.navigator.msPointerEnabled; // IE的指针事件的支持判断
	  support.cssAnimation = (support.transform3d || support.transform) && support.transition; // css动画属性支持判断

	  // 定义事件种类及相关事件对象，包括移动端与pc端
	  var eventTypes = ['touch', 'mouse'];

	  // 所有的事件组合
	  var events = {
	    start: {
	      touch: 'touchstart',
	      mouse: 'mousedown'
	    },
	    move: {
	      touch: 'touchmove',
	      mouse: 'mousemove'
	    },
	    end: {
	      touch: 'touchend',
	      mouse: 'mouseup'
	    }
	  };

	  // 添加事件监听 todo 事件的用途
	  if (support.addEventListener) {
	    document.addEventListener('gesturestart', function () {
	      gestureStart = true;
	    });

	    document.addEventListener('gestureend', function () {
	      gestureStart = false;
	    });
	  }

	  /**
	   * 全局类Flipsnap
	   * init初始化类，不需要在外部引用的时候再次new对象了
	   */
	  function Flipsnap(element, opts) {
	    return this instanceof Flipsnap ? this.init(element, opts) : new Flipsnap(element, opts);
	  }

	  Flipsnap.prototype.init = function (element, opts) {
	    var self = this;

	    // set element
	    self.element = element;
	    if (typeof element === 'string') {
	      self.element = document.querySelector(element);
	    }

	    if (!self.element) {
	      throw new Error('element not found');
	    }

	    if (support.mspointer) {
	      self.element.style.msTouchAction = 'pan-y';
	    }

	    // set opts
	    opts = opts || {};
	    self.distance = opts.distance;
	    self.maxPoint = opts.maxPoint;
	    self.disableTouch = opts.disableTouch === undefined ? false : opts.disableTouch;
	    self.disable3d = opts.disable3d === undefined ? false : opts.disable3d;
	    self.transitionDuration = opts.transitionDuration === undefined ? '350ms' : opts.transitionDuration + 'ms';
	    self.threshold = opts.threshold || 80; //this.cardS.width / 2;

	    self.autoPlay = opts.autoPlay || false;
	    self.interval = 1200;
	    self.loop = opts.loop || false;

	    // set property
	    self.currentPoint = opts.currentPoint || 0; // 当前的Point
	    self.currentX = 0;
	    self.animation = false;
	    self.timerId = null;
	    self.use3d = support.transform3d;
	    if (self.disable3d === true) {
	      self.use3d = false;
	    }

	    // 设置默认属性
	    if (support.cssAnimation) {
	      self._setStyle({
	        transitionProperty: getCSSVal('transform'),
	        transitionTimingFunction: 'cubic-bezier(0,0,0.25,1)',
	        transitionDuration: '0ms',
	        transform: self._getTranslate(0)
	      });
	    } else {
	      self._setStyle({
	        position: 'relative',
	        left: '0px'
	      });
	    }

	    // initilize
	    self.refresh();

	    // 添加事件，这里用 this.handleEvent 处理
	    eventTypes.forEach(function (type) {
	      self.element.addEventListener(events.start[type], self, false);
	    });

	    // 检查自动播放
	    self._checkNeedAutoPlay();

	    return self;
	  };

	  // 事件控制方法
	  Flipsnap.prototype.handleEvent = function (event) {
	    var self = this;
	    // 通过event.type进行条件判断，确定执行Flipsnap的四个内部处理方法中的一个
	    switch (event.type) {
	      // start
	      case events.start.touch:
	        self._touchStart(event, 'touch');break;
	      case events.start.mouse:
	        self._touchStart(event, 'mouse');break;

	      // move
	      case events.move.touch:
	        self._touchMove(event, 'touch');break;
	      case events.move.mouse:
	        self._touchMove(event, 'mouse');break;

	      // end
	      case events.end.touch:
	        self._touchEnd(event, 'touch');break;
	      case events.end.mouse:
	        self._touchEnd(event, 'mouse');break;

	      // click
	      case 'click':
	        self._click(event);break;
	    }
	  };

	  // 对外暴露，重新计算Flipsnap各个值，应用场景：增减item
	  Flipsnap.prototype.refresh = function () {
	    var self = this;

	    // 设置最多可移动次数，既分多少次移动完
	    self._maxPoint = self.maxPoint === undefined ? function () {
	      // 默认为 子item的个数-1
	      var childNodes = self.element.childNodes,
	          itemLength = -1,
	          i = 0,
	          len = childNodes.length,
	          node;
	      for (; i < len; i++) {
	        node = childNodes[i];
	        if (node.nodeType === 1) {
	          itemLength++;
	        }
	      }

	      return itemLength;
	    }() : self.maxPoint;

	    // 设置移动距离
	    if (self.distance === undefined) {
	      if (self._maxPoint < 0) {
	        self._distance = 0;
	      } else {
	        self._distance = self.element.scrollWidth / (self._maxPoint + 1);
	      }
	    } else {
	      self._distance = self.distance;
	    }

	    // 最大x轴偏向值，即最大可移动的距离
	    self._maxX = -self._distance * self._maxPoint;

	    self.moveToPoint();
	  };

	  // 状态判断
	  Flipsnap.prototype.hasNext = function () {
	    var self = this;

	    return self.currentPoint < self._maxPoint;
	  };
	  Flipsnap.prototype.hasPrev = function () {
	    var self = this;

	    return self.currentPoint > 0;
	  };

	  // 跳转下一个方法
	  Flipsnap.prototype.toNext = function (transitionDuration) {
	    var self = this;

	    if (!self.hasNext()) {
	      return;
	    }

	    self.moveToPoint(self.currentPoint + 1, transitionDuration);
	  };
	  Flipsnap.prototype.toPrev = function (transitionDuration) {
	    var self = this;

	    if (!self.hasPrev()) {
	      return;
	    }

	    self.moveToPoint(self.currentPoint - 1, transitionDuration);
	  };

	  // 判定是否需要滑动并触发事件
	  Flipsnap.prototype.moveToPoint = function (point, transitionDuration) {
	    var self = this;

	    // 不在init时候设置 transitionDuration 是为了可以动态改变
	    transitionDuration = transitionDuration === undefined ? self.transitionDuration : transitionDuration + 'ms';

	    // 移动的起始位置
	    var beforePoint = self.currentPoint;

	    // 初始时候未定义 ，取当前的 point 0
	    // not called from `refresh()`
	    if (point === undefined) {
	      point = self.currentPoint;
	    }

	    if (point < 0) {
	      self.currentPoint = 0;
	    } else if (point > self._maxPoint) {
	      // 超过maxPoint
	      self.currentPoint = self.loop ? 0 : self._maxPoint;
	      // self.currentPoint = self._maxPoint;
	    } else {
	      self.currentPoint = parseInt(point, 10);
	    }
	    // 设置 transitionDuration
	    if (support.cssAnimation) {
	      self._setStyle({ transitionDuration: transitionDuration });
	    } else {
	      self.animation = true;
	    }
	    // 指定
	    self._setX(-self.currentPoint * self._distance, transitionDuration);

	    if (beforePoint !== self.currentPoint) {
	      // is move?
	      // `fsmoveend` is deprecated
	      // `fspointmove` is recommend.
	      self._triggerEvent('fsmoveend', true, false);
	      self._triggerEvent('fspointmove', true, false);
	    }
	  };

	  // 移动到指定位置
	  Flipsnap.prototype._setX = function (x, transitionDuration) {
	    var self = this;
	    self.currentX = x;
	    if (support.cssAnimation) {
	      self.element.style[saveProp.transform] = self._getTranslate(x);
	    } else {
	      if (self.animation) {
	        self._animate(x, transitionDuration || self.transitionDuration);
	      } else {
	        self.element.style.left = x + 'px';
	      }
	    }
	  };

	  // 通过touchStart方法记录下触摸开始点开始时间等参数，并触发fstouchstart事件
	  Flipsnap.prototype._touchStart = function (event, type) {
	    var self = this;
	    // 停止自动播放
	    self._clearAutoPlay();
	    // 禁止touch/正在滑动 直接退出
	    if (self.disableTouch || self.scrolling || gestureStart) {
	      return;
	    }

	    // 绑定 touchmove touchend
	    self.element.addEventListener(events.move[type], self, false);
	    document.addEventListener(events.end[type], self, false);

	    var tagName = event.target.tagName;
	    if (type === 'mouse' && tagName !== 'SELECT' && tagName !== 'INPUT' && tagName !== 'TEXTAREA' && tagName !== 'BUTTON') {
	      event.preventDefault();
	    }

	    if (support.cssAnimation) {
	      self._setStyle({ transitionDuration: '0ms' });
	    } else {
	      self.animation = false;
	    }
	    self.scrolling = true; // 标注正在滚动
	    self.moveReady = false;
	    self.startPageX = getPage(event, 'pageX'); // 获取触摸目标在页面中的x坐标
	    self.startPageY = getPage(event, 'pageY');
	    // 每次touchstart的时候，会重新计算 basePageX 初始坐标
	    self.basePageX = self.startPageX;
	    self.directionX = 0;
	    self.startTime = event.timeStamp; // 触发时间戳
	    // 触发 fstouchstart，这个方法是为了暴露给外部使用，当touchstart发生时候，触发
	    self._triggerEvent('fstouchstart', true, false);
	  };

	  Flipsnap.prototype._touchMove = function (event, type) {
	    var self = this;

	    // 是自身的滚动(ing)才处理，否则直接退出
	    if (!self.scrolling || gestureStart) {
	      return;
	    }
	    var pageX = getPage(event, 'pageX');
	    var pageY = getPage(event, 'pageY');
	    var distX;
	    var newX;

	    if (self.moveReady) {
	      // 可移动
	      event.preventDefault();

	      distX = pageX - self.basePageX;
	      newX = self.currentX + distX;
	      if (newX >= 0 || newX < self._maxX) {
	        newX = Math.round(self.currentX + distX / 3);
	      }
	      // 判断方向 1代表右 -1代表左
	      // When distX is 0, use one previous value.
	      // For android firefox. When touchend fired, touchmove also
	      // fired and distX is certainly set to 0. 
	      self.directionX = distX === 0 ? self.directionX : distX > 0 ? -1 : 1;
	      // if they prevent us then stop it
	      var isPrevent = !self._triggerEvent('fstouchmove', true, true, {
	        delta: distX,
	        direction: self.directionX
	      });
	      if (isPrevent) {
	        self._touchAfter({
	          moved: false,
	          originalPoint: self.currentPoint,
	          newPoint: self.currentPoint,
	          cancelled: true
	        });
	      } else {
	        self._setX(newX);
	      }
	    } else {
	      // 防止快速上下滑动时候， 触发 flipsnap 的 swiping
	      // https://github.com/hokaccha/js-flipsnap/pull/36
	      var triangle = getTriangleSide(self.startPageX, self.startPageY, pageX, pageY);
	      if (triangle.z > DISTANCE_THRESHOLD) {
	        if (getAngle(triangle) > ANGLE_THREHOLD) {
	          // 自身的滚动
	          event.preventDefault();
	          self.moveReady = true; // 设置可移动
	          self.element.addEventListener('click', self, true);
	        } else {
	          // 非自身滚动，即浏览器滚动
	          self.scrolling = false;
	        }
	      }
	    }

	    self.basePageX = pageX;
	  };

	  // touchend 事件，计算 newPoint 移动
	  Flipsnap.prototype._touchEnd = function (event, type) {
	    var self = this;
	    // 移除 touchmove touchend 
	    self.element.removeEventListener(events.move[type], self, false);
	    document.removeEventListener(events.end[type], self, false);

	    if (!self.scrolling) {
	      return;
	    }
	    // currentX 为移动的坐标 / 移动的卡片距离
	    var newPoint = -self.currentX / self._distance;
	    newPoint = self.directionX > 0 ? Math.ceil(newPoint) : self.directionX < 0 ? Math.floor(newPoint) : Math.round(newPoint);

	    if (newPoint < 0) {
	      // 小余0不能继续往左，置于0，回到原位置
	      newPoint = 0;
	    } else if (newPoint > self._maxPoint) {
	      // 大于 _maxPoint时候，不能继续往右，回到最后最后一个位置
	      newPoint = self.loop ? 0 : self._maxPoint;
	    }

	    if (Math.abs(self.startPageX - self.basePageX) < self.threshold) {
	      newPoint = self.currentPoint;
	    }
	    // 重置参数
	    self._touchAfter({
	      moved: newPoint !== self.currentPoint,
	      originalPoint: self.currentPoint,
	      newPoint: newPoint,
	      cancelled: false
	    });
	    // 移动到新的point
	    self.moveToPoint(newPoint);
	  };

	  Flipsnap.prototype._click = function (event) {
	    var self = this;

	    event.stopPropagation();
	    event.preventDefault();
	  };

	  // touchend之后的处理，重置参数
	  Flipsnap.prototype._touchAfter = function (params) {
	    var self = this;
	    // 设置本次touch完成
	    self.scrolling = false;
	    self.moveReady = false;

	    setTimeout(function () {
	      self.element.removeEventListener('click', self, true);
	    }, 200);

	    self._triggerEvent('fstouchend', true, false, params);
	  };

	  // 设置css属性
	  Flipsnap.prototype._setStyle = function (styles) {
	    var self = this;
	    var style = self.element.style;

	    for (var prop in styles) {
	      setStyle(style, prop, styles[prop]);
	    }
	  };

	  Flipsnap.prototype._animate = function (x, transitionDuration) {
	    var self = this;

	    var elem = self.element;
	    var begin = +new Date();
	    var from = parseInt(elem.style.left, 10);
	    var to = x;
	    var duration = parseInt(transitionDuration, 10);
	    var easing = function easing(time, duration) {
	      return -(time /= duration) * (time - 2);
	    };

	    if (self.timerId) {
	      clearInterval(self.timerId);
	    }
	    self.timerId = setInterval(function () {
	      var time = new Date() - begin;
	      var pos, now;
	      if (time > duration) {
	        clearInterval(self.timerId);
	        self.timerId = null;
	        now = to;
	      } else {
	        pos = easing(time, duration);
	        now = pos * (to - from) + from;
	      }
	      elem.style.left = now + "px";
	    }, 10);
	  };

	  // 取消在各个节点上的事件监听
	  Flipsnap.prototype.destroy = function () {
	    var self = this;

	    eventTypes.forEach(function (type) {
	      self.element.removeEventListener(events.start[type], self, false);
	    });
	  };

	  // 设置translate 属性值
	  Flipsnap.prototype._getTranslate = function (x) {
	    var self = this;

	    return self.use3d ? 'translate3d(' + x + 'px, 0, 0)' : 'translate(' + x + 'px, 0)';
	  };

	  // 触发事件
	  Flipsnap.prototype._triggerEvent = function (type, bubbles, cancelable, data) {
	    var self = this;

	    var ev = document.createEvent('Event');
	    ev.initEvent(type, bubbles, cancelable);

	    if (data) {
	      for (var d in data) {
	        if (data.hasOwnProperty(d)) {
	          ev[d] = data[d];
	        }
	      }
	    }
	    // js 事件触发器
	    return self.element.dispatchEvent(ev);
	  };

	  Flipsnap.prototype._checkNeedAutoPlay = function () {
	    var self = this;
	    if (self.autoPlay) {
	      self._clearAutoPlay();
	      self.autoPlayTimer = setInterval(function () {
	        if (self.currentPoint === 4) {
	          self.moveToPoint(0, 0);
	          self.currentPoint = 0;
	        } else {
	          self.moveToPoint(self.currentPoint + 1);
	        }
	      }, parseInt(self.interval));
	    }
	  };
	  Flipsnap.prototype._clearAutoPlay = function () {
	    this.autoPlayTimer && clearInterval(this.autoPlayTimer);
	  };

	  // 获取触摸目标在页面中的坐标
	  function getPage(event, page) {
	    return event.changedTouches ? event.changedTouches[0][page] : event[page];
	  }

	  // 属性检测
	  function hasProp(props) {
	    return some(props, function (prop) {
	      return div.style[prop] !== undefined;
	    });
	  }

	  // 设置样式
	  function setStyle(style, prop, val) {
	    var _saveProp = saveProp[prop];
	    if (_saveProp) {
	      style[_saveProp] = val;
	    } else if (style[prop] !== undefined) {
	      saveProp[prop] = prop;
	      style[prop] = val;
	    } else {
	      some(prefix, function (_prefix) {
	        var _prop = ucFirst(_prefix) + ucFirst(prop);
	        if (style[_prop] !== undefined) {
	          saveProp[prop] = _prop;
	          style[_prop] = val;
	          return true;
	        }
	      });
	    }
	  }

	  // 获取属性值
	  function getCSSVal(prop) {
	    if (div.style[prop] !== undefined) {
	      return prop;
	    } else {
	      var ret;
	      some(prefix, function (_prefix) {
	        var _prop = ucFirst(_prefix) + ucFirst(prop);
	        if (div.style[_prop] !== undefined) {
	          ret = '-' + _prefix + '-' + prop;
	          return true;
	        }
	      });
	      return ret;
	    }
	  }

	  // 将首字母变大写
	  function ucFirst(str) {
	    return str.charAt(0).toUpperCase() + str.substr(1);
	  }

	  function some(ary, callback) {
	    // 只要数组内其中一个为true即判定为true
	    for (var i = 0, len = ary.length; i < len; i++) {
	      if (callback(ary[i], i)) {
	        return true;
	      }
	    }
	    return false;
	  }

	  function getTriangleSide(x1, y1, x2, y2) {
	    var x = Math.abs(x1 - x2);
	    var y = Math.abs(y1 - y2);
	    var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

	    return {
	      x: x,
	      y: y,
	      z: z
	    };
	  }

	  function getAngle(triangle) {
	    var cos = triangle.y / triangle.z;
	    var radian = Math.acos(cos);

	    return 180 / (Math.PI / radian);
	  }

	  return Flipsnap;
	});

/***/ })
/******/ ])
});
;