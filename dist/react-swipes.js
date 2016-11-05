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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _flipsnap = __webpack_require__(2);

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
	        distance: options.distance
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
	  swipeOptions: _react.PropTypes.shape({
	    distance: _react.PropTypes.number,
	    // continuous: PropTypes.bool,
	    swTouchstart: _react.PropTypes.func,
	    swTouchmove: _react.PropTypes.func,
	    swTouchend: _react.PropTypes.func
	  })
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * flipsnap.js
	 *
	 * @version  0.6.3
	 * @url http://hokaccha.github.com/js-flipsnap/
	 *
	 * Copyright 2011 PixelGrid, Inc.
	 * Licensed under the MIT License:
	 * http://www.opensource.org/licenses/mit-license.php
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
	    self.threshold = opts.threshold || 0;

	    // set property
	    self.currentPoint = 0; // 当前的Point
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

	    var beforePoint = self.currentPoint;

	    // 初始时候未定义 ，取当前的 point 0
	    // not called from `refresh()`
	    if (point === undefined) {
	      point = self.currentPoint;
	    }

	    if (point < 0) {
	      self.currentPoint = 0;
	    } else if (point > self._maxPoint) {
	      self.currentPoint = self._maxPoint;
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

	    var newPoint = -self.currentX / self._distance;
	    newPoint = self.directionX > 0 ? Math.ceil(newPoint) : self.directionX < 0 ? Math.floor(newPoint) : Math.round(newPoint);

	    if (newPoint < 0) {
	      // 小余0不能继续往左，置于0，回到原位置
	      newPoint = 0;
	    } else if (newPoint > self._maxPoint) {
	      // 大于 _maxPoint时候，不能继续往右，回到最后最后一个位置
	      newPoint = self._maxPoint;
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

/***/ }
/******/ ])
});
;