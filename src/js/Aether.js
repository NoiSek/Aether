/******/ (function(modules) { // webpackBootstrap
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
	exports.default = Main;

	var _inferno = __webpack_require__(1);

	var _inferno2 = _interopRequireDefault(_inferno);

	var _infernoComponent = __webpack_require__(2);

	var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

	var _infernoDom = __webpack_require__(3);

	var _infernoDom2 = _interopRequireDefault(_infernoDom);

	var _Notifications = __webpack_require__(4);

	var _Notifications2 = _interopRequireDefault(_Notifications);

	var _CommandPanel = __webpack_require__(5);

	var _CommandPanel2 = _interopRequireDefault(_CommandPanel);

	var _LoginPanel = __webpack_require__(8);

	var _LoginPanel2 = _interopRequireDefault(_LoginPanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bp0 = _inferno2.default.createBlueprint({
	  tag: {
	    arg: 0
	  }
	});

	var bp1 = _inferno2.default.createBlueprint({
	  tag: {
	    arg: 0
	  }
	});

	function Main() {
	  // Add notifications to the global scope for error handling
	  window.notifications = new _Notifications2.default();

	  _infernoDom2.default.render(bp0(_CommandPanel2.default), document.getElementById("command-panel"));
	  _infernoDom2.default.render(bp1(_LoginPanel2.default), document.getElementById("login-panel"));
	}

	Main();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!function (t, e) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t.Inferno = e();
	}(undefined, function () {
	  "use strict";
	  function t(t) {
	    return void 0 === t || n(t);
	  }function e(t) {
	    return "o" === t[0] && "n" === t[1] && t.length > 3;
	  }function n(t) {
	    return null === t;
	  }function r(t) {
	    this.bp = t, this.dom = null, this.instance = null, this.tag = null, this.children = null, this.style = null, this.className = null, this.attrs = null, this.events = null, this.hooks = null, this.key = null, this.clipData = null;
	  }function o(t) {
	    return new r(t);
	  }function s(e, n) {
	    var o = e.tag || null,
	        s = !(!o || void 0 === o.arg),
	        l = t(e.children) ? null : e.children,
	        i = !(!l || void 0 === l.arg),
	        u = e.attrs || null,
	        a = !(!u || void 0 === u.arg),
	        c = e.hooks || null,
	        f = !(!c || void 0 === c.arg),
	        h = e.events || null,
	        y = !(!h || void 0 === h.arg),
	        d = void 0 === e.key ? null : e.key,
	        p = !t(d) && !t(d.arg),
	        m = e.style || null,
	        v = !(!m || void 0 === m.arg),
	        g = void 0 === e.className ? null : e.className,
	        b = !(!g || void 0 === g.arg),
	        w = { lazy: e.lazy || !1, dom: null, pools: { keyed: {}, nonKeyed: [] }, tag: s ? null : o, className: "" !== g && g ? g : null, style: "" !== m && m ? m : null, isComponent: s, hasAttrs: a || !!u, hasHooks: f, hasEvents: y, hasStyle: v || !("" === m || !m), hasClassName: b || !("" === g || !g), childrenType: void 0 === n ? l ? 5 : 0 : n, attrKeys: null, eventKeys: null, isSVG: e.isSVG || !1 };return function () {
	      var t = new r(w);return s === !0 && (t.tag = arguments[o.arg]), i === !0 && (t.children = arguments[l.arg]), a === !0 ? t.attrs = arguments[u.arg] : t.attrs = u, f === !0 && (t.hooks = arguments[c.arg]), y === !0 && (t.events = arguments[h.arg]), p === !0 && (t.key = arguments[d.arg]), v === !0 ? t.style = arguments[m.arg] : t.style = w.style, b === !0 ? t.className = arguments[g.arg] : t.className = w.className, t;
	    };
	  }function l(t, e) {
	    var n = void 0;return n = e === !0 ? document.createElementNS("http://www.w3.org/2000/svg", t) : document.createElement(t);
	  }function i(t, e, n) {
	    if (c) {
	      var r = l(t, n);return e && u(e, r), r;
	    }return null;
	  }function u(n, r) {
	    for (var o = Object.keys(n), s = 0; s < o.length; s++) {
	      var l = o[s],
	          i = n[l];"className" === l ? r.className = i : i === !0 ? r.setAttribute(l, l) : t(i) || i === !1 || e(l) || r.setAttribute(l, i);
	    }
	  }var a = {};a.typeof = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
	    return typeof t === "undefined" ? "undefined" : _typeof(t);
	  } : function (t) {
	    return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
	  }, a.classCallCheck = function (t, e) {
	    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
	  }, a.createClass = function () {
	    function t(t, e) {
	      for (var n = 0; n < e.length; n++) {
	        var r = e[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
	      }
	    }return function (e, n, r) {
	      return n && t(e.prototype, n), r && t(e, r), e;
	    };
	  }(), a.inherits = function (t, e) {
	    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
	  }, a.possibleConstructorReturn = function (t, e) {
	    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
	  };var c = "undefined" != typeof window && window.document;r.prototype = { setAttrs: function setAttrs(t) {
	      return this.attrs = t, this;
	    }, setTag: function setTag(t) {
	      return this.tag = t, this;
	    }, setStyle: function setStyle(t) {
	      return this.style = t, this;
	    }, setClassName: function setClassName(t) {
	      return this.className = t, this;
	    }, setChildren: function setChildren(t) {
	      return this.children = t, this;
	    }, setHooks: function setHooks(t) {
	      return this.hooks = t, this;
	    }, setEvents: function setEvents(t) {
	      return this.events = t, this;
	    }, setKey: function setKey(t) {
	      return this.key = t, this;
	    } };var f = { createBlueprint: s, createVNode: o, universal: { createElement: i } };return f;
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!function (e, t) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e.InfernoComponent = t();
	}(undefined, function () {
	  "use strict";
	  function e(e) {
	    return void 0 === e || t(e);
	  }function t(e) {
	    return null === e;
	  }function n(e, t, n) {
	    e.split(",").forEach(function (e) {
	      return t[e] = n;
	    });
	  }function o() {
	    return { "null": !0, dom: document.createTextNode("") };
	  }function i() {
	    this._listeners = [], this.scrollX = null, this.scrollY = null, this.screenHeight = b, this.screenWidth = _;
	  }function r() {
	    return document.activeElement;
	  }function l(e) {
	    e !== document.body && document.activeElement !== e && e.focus();
	  }function a(e, t, n) {
	    for (var o in t) {
	      e._pendingState[o] = t[o];
	    }if (e._pendingSetState) {
	      var i = e._pendingState,
	          r = e.state;e.state = Object.assign({}, r, i), e._pendingState = {};
	    } else e._pendingSetState = !0, s(e, !1, n);
	  }function s(t, n, a) {
	    if (!t._deferSetState || n) {
	      t._pendingSetState = !1;var s = t._pendingState,
	          u = t.state,
	          d = Object.assign({}, u, s);t._pendingState = {};var p = t._updateComponent(u, d, t.props, t.props, n);p === c ? p = t._lastNode : e(p) && (p = o());var f = t._lastNode,
	          h = f.dom.parentNode,
	          m = r(),
	          w = new i();t._patch(f, p, h, w, t.context, t, null), t._lastNode = p, t._parentNode.dom = p.dom, w.trigger(), e(a) || a(), l(m);
	    }
	  }var u = {};u.typeof = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
	    return typeof e === "undefined" ? "undefined" : _typeof(e);
	  } : function (e) {
	    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
	  }, u.classCallCheck = function (e, t) {
	    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	  }, u.createClass = function () {
	    function e(e, t) {
	      for (var n = 0; n < t.length; n++) {
	        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
	      }
	    }return function (t, n, o) {
	      return n && e(t.prototype, n), o && e(t, o), t;
	    };
	  }(), u.inherits = function (e, t) {
	    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	  }, u.possibleConstructorReturn = function (e, t) {
	    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
	  };var c = "NO_RENDER",
	      d = "undefined" != typeof window && window.document,
	      p = "http://www.w3.org/1999/xlink",
	      f = "http://www.w3.org/XML/1998/namespace",
	      h = {},
	      m = {},
	      w = {},
	      y = {};n("xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type", w, p), n("xml:base,xml:lang,xml:space", w, f), n("volume,value", h, !0), n("muted,scoped,loop,open,checked,default,capture,disabled,selected,readonly,multiple,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate", m, !0), n("animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,", y, !0);var _ = d && window.screen.width,
	      b = d && window.screen.height,
	      S = 0,
	      v = 0,
	      g = 0;d && (window.onscroll = function (e) {
	    S = window.scrollX, v = window.scrollY, g = performance.now();
	  }, window.resize = function (e) {
	    S = window.scrollX, v = window.scrollY, _ = window.screen.width, b = window.screen.height, g = performance.now();
	  }), i.prototype = { refresh: function refresh() {
	      this.scrollX = d && window.scrollX, this.scrollY = d && window.scrollY;
	    }, addListener: function addListener(e) {
	      this._listeners.push(e);
	    }, trigger: function trigger() {
	      for (var e = 0; e < this._listeners.length; e++) {
	        this._listeners[e]();
	      }
	    } };var k = "Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.",
	      x = function () {
	    function t(e) {
	      u.classCallCheck(this, t), this.props = e || {}, this.state = {}, this.refs = {}, this._blockSetState = !1, this._deferSetState = !1, this._pendingSetState = !1, this._pendingState = {}, this._parentNode = null, this._lastNode = null, this._unmounted = !0, this.context = {}, this._patch = null, this._parentComponent = null;
	    }return u.createClass(t, [{ key: "render", value: function value() {} }, { key: "forceUpdate", value: function value(e) {
	        if (this._unmounted) throw Error(k);s(this, !0, e);
	      } }, { key: "setState", value: function value(e, t) {
	        if (this._unmounted) throw Error(k);if (this._blockSetState !== !1) throw Error("Inferno Warning: Cannot update state via setState() in componentWillUpdate()");a(this, e, t);
	      } }, { key: "componentDidMount", value: function value() {} }, { key: "componentWillMount", value: function value() {} }, { key: "componentWillUnmount", value: function value() {} }, { key: "componentDidUpdate", value: function value() {} }, { key: "shouldComponentUpdate", value: function value() {
	        return !0;
	      } }, { key: "componentWillReceiveProps", value: function value() {} }, { key: "componentWillUpdate", value: function value() {} }, { key: "getChildContext", value: function value() {} }, { key: "_updateComponent", value: function value(t, n, o, i, r) {
	        if (this._unmounted === !0) return this._unmounted = !1, !1;if (!e(i) && e(i.children) && (i.children = o.children), o !== i || t !== n || r) {
	          o !== i && (this._blockSetState = !0, this.componentWillReceiveProps(i), this._blockSetState = !1);var l = this.shouldComponentUpdate(i, n);if (l !== !1) {
	            this._blockSetState = !0, this.componentWillUpdate(i, n), this._blockSetState = !1, this.props = i, this.state = n;var a = this.render();return this.componentDidUpdate(o, t), a;
	          }
	        }return c;
	      } }]), t;
	  }();return x;
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!function (e, n) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (n), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e.InfernoDOM = n();
	}(undefined, function () {
	  "use strict";
	  function e(e, t) {
	    if (!o(e)) {
	      var r = n(e);(r && e.length > 0 || !r) && (t = t ? Object.assign({}, t, { children: e }) : { children: e });
	    }return t;
	  }function n(e) {
	    return e instanceof Array;
	  }function t(e) {
	    return void 0 !== e.prototype.render;
	  }function r(e) {
	    return a(e) || s(e);
	  }function o(e) {
	    return void 0 === e || d(e);
	  }function l(e) {
	    return d(e) || e === !1 || e === !0 || void 0 === e;
	  }function i(e) {
	    return "function" == typeof e;
	  }function a(e) {
	    return "string" == typeof e;
	  }function s(e) {
	    return "number" == typeof e;
	  }function d(e) {
	    return null === e;
	  }function c(e) {
	    return e instanceof Promise;
	  }function u(e, n, t) {
	    e.splice(e.indexOf(n), 1, t);
	  }function f(e, t) {
	    if (!l(e)) if (n(e)) for (var r = 0; r < e.length; r++) {
	      var o = e[r];if (!l(o)) {
	        if (o === t) return !0;if (o.children) return f(o.children, t);
	      }
	    } else {
	      if (e === t) return !0;if (e.children) return f(e.children, t);
	    }return !1;
	  }function h(e, n) {
	    var t = n.props.children;return f(t, e) ? h(e, n._parentComponent) : n;
	  }function p(e, n, t, r, l) {
	    if (void 0 !== n) {
	      var i = e.key,
	          a = null === i ? n.pools.nonKeyed : n.pools.keyed[i];if (!o(a)) {
	        var s = a.pop();if (!o(s)) return de(s, e, null, t, r, l, !0, n.isSVG), e.dom;
	      }
	    }return null;
	  }function v(e) {
	    var n = e.bp;if (!o(n)) {
	      var t = e.key,
	          r = n.pools;if (null === t) {
	        var l = r.nonKeyed;l && l.push(e);
	      } else {
	        var i = r.keyed;(i[t] || (i[t] = [])).push(e);
	      }return !0;
	    }return !1;
	  }function m(e, t, r, o, i, a) {
	    if (n(e)) return Q(e, t);if (l(e)) return null;var s = e.bp;if (We) {
	      var d = p(e, s, r, o, i);if (null !== d) return null !== t && t.appendChild(d), d;
	    }return void 0 === s ? w(e, t, r, o, i, a) : C(e, s, t, r, o, i);
	  }function y(e) {
	    "select" === e.tag && J(e);
	  }function g(e, n, t, r) {
	    y(e);var o = e.attrs;if (null === n.attrKeys) {
	      var l = Object.keys(o);n.attrKeys = n.attrKeys ? n.attrKeys.concat(l) : l;
	    }var i = n.attrKeys;j(e, o, i, t, r);
	  }function b(e, n, t) {
	    var r = e.events;null === n.eventKeys && (n.eventKeys = Object.keys(r));var o = n.eventKeys;S(r, o, t);
	  }function C(e, n, t, r, o, l) {
	    var i = e.tag;if (n.isComponent === !0) return T(e, i, e.attrs || {}, e.hooks, e.children, l, t, r, o);var a = A(n.tag, n.isSVG);switch (e.dom = a, n.hasHooks === !0 && Z(e.hooks, r, a), n.lazy === !0 && ge(e, r, a), n.childrenType) {case 1:
	        K(e.children, a, !0);break;case 2:
	        m(e.children, a, r, o, l);break;case 3:
	        N(e, e.children, a, r, o, l);break;case 4:
	        x(e.children, a, r, o, l);break;case 5:
	        _(e, e.children, a, r, o, l);}return n.hasAttrs === !0 && g(e, n, a, l), n.hasClassName === !0 && (a.className = e.className), n.hasStyle === !0 && ce(null, e.style, a), n.hasEvents === !0 && b(e, n, a), null !== t && t.appendChild(a), a;
	  }function w(e, n, t, r, s, d) {
	    var c = e.tag;if (null === c) return Q(e, n);if (i(c)) return T(e, c, e.attrs || {}, e.hooks, e.children, s, n, t, r);if (!a(c) || "" === c) throw Error("Inferno Error: Expected function or string for element tag type");"svg" === c && (d = !0);var u = A(c, d),
	        f = e.children,
	        h = e.attrs,
	        p = e.events,
	        v = e.hooks,
	        m = e.className,
	        g = e.style;return e.dom = u, o(v) || Z(v, t, u), l(f) || _(e, f, u, t, r, s, d), o(h) || (y(e), j(e, h, Object.keys(h), u, s)), o(m) || (u.className = m), o(g) || ce(null, g, u), o(p) || S(p, Object.keys(p), u), null !== n && n.appendChild(u), u;
	  }function k(e, n, t, r, o, i, a) {
	    var s = B();t && t.push(s), e.then(function (e) {
	      var d = m(e, null, r, o, i, a);null === n || l(d) || n.replaceChild(d, s), t && u(t, s, d);
	    }), n.appendChild(s);
	  }function x(e, n, t, r, o) {
	    for (var l = 0; l < e.length; l++) {
	      m(e[l], n, t, r, o);
	    }
	  }function N(e, t, i, a, s, d, u) {
	    for (var f = null, h = !1, p = !1, v = 0; v < t.length; v++) {
	      var y = t[v];if (r(y)) h = !0, f = f || [], f.push(K(y, i, !1));else if (!o(y) && n(y)) {
	        var g = R();h = !0, N(e, y, g, a, s, d, u), D(i, g), f = f || [], f.push(g);
	      } else if (c(y)) k(y, i, f, a, s, d, u);else {
	        var b = m(y, i, a, s, d, u);h || !p && !o(y) && o(y.key) ? (h = !0, f = f || [], f.push(b)) : l(y) ? (h = !0, f = f || [], f.push(b)) : p === !1 && (p = !0);
	      }
	    }null !== f && f.length > 1 && h === !0 && (e.domChildren = f);
	  }function _(e, t, o, l, i, a, s) {
	    n(t) ? N(e, t, o, l, i, a, s) : r(t) ? K(t, o, !0) : c(t) ? k(t, o, null, l, i, a, s) : m(t, o, l, i, a, s);
	  }function O(e, n, t) {
	    !l(e) && a(n) && (e.refs[n] = t);
	  }function S(e, n, t) {
	    for (var r = 0; r < n.length; r++) {
	      var o = n[r];t[o] = e[o];
	    }
	  }function T(n, r, i, a, s, d, c, u, f) {
	    i = e(s, i);var h = void 0;if (t(r)) {
	      var p = new r(i);p._patch = de, !o(d) && i.ref && O(d, i.ref, p);var v = p.getChildContext();o(v) || (f = Object.assign({}, f, v)), p.context = f, p._unmounted = !1, p._parentNode = n, d && (p._parentComponent = d), p._pendingSetState = !0, p.componentWillMount();var y = p.render();p._pendingSetState = !1, l(y) ? (p._lastNode = U(), h = p._lastNode.dom) : (h = m(y, null, u, f, p, !1), p._lastNode = y, p.componentDidMount()), null === c || l(h) || c.appendChild(h), n.dom = h, n.instance = p;
	    } else {
	      o(a) || (o(a.componentWillMount) || a.componentWillMount(null, i), o(a.componentDidMount) || u.addListener(function () {
	        a.componentDidMount(h, i);
	      }));var g = r(i, f);h = m(g, null, u, f, null, !1), n.instance = g, null === c || l(h) || c.appendChild(h), n.dom = h;
	    }return h;
	  }function j(e, n, t, r, o) {
	    for (var l = 0; l < t.length; l++) {
	      var i = t[l];"ref" === i ? O(h(e, o), n[i], r) : fe(i, null, n[i], r);
	    }
	  }function E(e, n, t) {
	    e.split(",").forEach(function (e) {
	      return n[e] = t;
	    });
	  }function M(e) {
	    return !o(e.append);
	  }function D(e, n, t) {
	    o(t) ? M(n) ? n.append(e) : e.appendChild(n) : M(n) ? n.insert(e, t) : M(t) ? e.insertBefore(n, t.childNodes[0] || t.dom) : e.insertBefore(n, t);
	  }function U() {
	    return { "null": !0, dom: document.createTextNode("") };
	  }function W(e, n, t) {
	    o(t) ? e.appendChild(n) : e.insertBefore(n, t);
	  }function A(e, n) {
	    var t = void 0;return t = n === !0 ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
	  }function K(e, n, t) {
	    if (null === n) return document.createTextNode(e);if (t) {
	      if ("" !== e) return n.textContent = e, n.firstChild;var r = document.createTextNode("");return n.appendChild(r), r;
	    }var o = document.createTextNode(e);return n.appendChild(o), o;
	  }function H(e, n, t, r, l, i, a) {
	    var s = null,
	        d = e._lastNode;o(d) || (s = e, e = d), L(e);var c = m(n, null, r, l, i, a);n.dom = c, V(t, c, e.dom), null !== s && (s._lastNode = n);
	  }function V(e, n, t) {
	    M(t) ? t.replaceWith(n) : e.replaceChild(n, t);
	  }function L(e) {
	    if (!l(e) && !r(e)) {
	      var t = e.instance,
	          i = null,
	          a = null;o(t) || (i = t.hooks, a = t.children, void 0 !== t.render && (t.componentWillUnmount(), t._unmounted = !0, L(t._lastNode)));var s = e.hooks || i;o(s) || (o(s.willDetach) || s.willDetach(e.dom), o(s.componentWillUnmount) || s.componentWillUnmount(e.dom, s));var d = e.children || a;if (!o(d)) if (n(d)) for (var c = 0; c < d.length; c++) {
	        L(d[c]);
	      } else L(d);
	    }
	  }function B() {
	    return document.createTextNode("");
	  }function I(e, n) {
	    var t = e.dom;t === n ? t.innerHTML = "" : (n.removeChild(t), We && v(e)), L(e);
	  }function Y(e, n, t) {
	    for (var r = n || Object.keys(e), o = 0; o < r.length; o++) {
	      var l = r[o];t[l] = null;
	    }
	  }function G(e, n, t) {
	    for (var r = 0; r < n.length; r++) {
	      e.insertBefore(n[r], t);
	    }
	  }function X() {
	    return document.activeElement;
	  }function P(e, n) {
	    if (We) {
	      var t = n.length;if (t > 5) for (var r = 0; t > r; r++) {
	        var o = n[r];l(o) || v(o);
	      }
	    }e.textContent = "";
	  }function z(e) {
	    null !== e && e !== document.body && document.activeElement !== e && e.focus();
	  }function R() {
	    var e = [],
	        n = document.createTextNode(""),
	        t = null,
	        r = { dom: n, childNodes: e, appendChild: function appendChild(r) {
	        e.push(r), t && t.insertBefore(r, n);
	      }, removeChild: function removeChild(n) {
	        t && t.removeChild(n), e.splice(e.indexOf(n), 1);
	      }, insertBefore: function insertBefore(n, r) {
	        t && t.insertBefore(n, r), e.splice(e.indexOf(r), 0, n);
	      }, replaceChild: function replaceChild(n, r) {
	        t.replaceChild(n, r), u(e, r, n);
	      }, append: function append(r) {
	        r.appendChild(n), t = r, G(t, e, n);
	      }, insert: function insert(r, o) {
	        r.insertBefore(n, o), t = r, G(t, e, n);
	      }, remove: function remove() {
	        t.removeChild(n);for (var r = 0; r < e.length; r++) {
	          t.removeChild(e[r]);
	        }t = null;
	      }, replaceWith: function replaceWith(r) {
	        t.replaceChild(r, n);for (var o = 0; o < e.length; o++) {
	          t.removeChild(e[o]);
	        }t = null;
	      }, getElementsByTagName: null };return Object.defineProperty(r, "parentNode", { get: function get() {
	        return t;
	      } }), Object.defineProperty(r, "firstChild", { get: function get() {
	        return e[0];
	      } }), r;
	  }function q(e, n) {
	    return n.length && !o(n[0]) && !o(n[0].key) || e.length && !o(e[0]) && !o(e[0].key);
	  }function F(e, n) {
	    if ("option" === e.tag) {
	      var t = e.attrs && e.attrs.value;n[t] ? (e.attrs = e.attrs || {}, e.attrs.selected = "selected", e.dom.selected = !0) : e.dom.selected = !1;
	    } else for (var r = 0, o = e.children.length; o > r; r++) {
	      F(e.children[r], n);
	    }
	  }function J(e) {
	    var t = e.attrs && e.attrs.value,
	        r = {};if (n(t)) for (var o = 0, l = t.length; l > o; o++) {
	      r[t[o]] = t[o];
	    } else r[t] = t;for (var i = 0, a = e.children.length; a > i; i++) {
	      F(e.children[i], r);
	    }e.attrs && e.attrs[t] && delete e.attrs.value;
	  }function Q(e, n) {
	    var t = B();return null !== n && n.appendChild(t), l(e) || (e.dom = t), t;
	  }function Z(e, n, t) {
	    o(e.created) || e.created(t), o(e.attached) || n.addListener(function () {
	      e.attached(t);
	    });
	  }function $(e) {
	    var n = e.attrs.value;o(n) || (e.dom.value = n);
	  }function ee(e, n) {
	    if ("input" === e) {
	      var t = n.attrs.type;if ("text" === t) $(n);else if ("checkbox" === t || "radio" === t) {
	        var r = n.attrs.checked;n.dom.checked = !!r;
	      }
	    } else "textarea" === e && $(n);
	  }function ne(e, t, i, a, s, d, c) {
	    var u = t.children,
	        f = e.children;if (f !== u) {
	      var h = null;e.domChildren && (h = t.domChildren = e.domChildren), l(f) ? r(u) ? ae(i, f, u) : o(u) || (n(u) ? N(t, u, i, a, s, d, c) : m(u, i, a, s, d, c)) : l(u) ? P(i, f) : n(f) ? n(u) ? null === h && f.length > 1 ? ve(f, u, i, a, s, d, c) : q(f, u) ? ve(f, u, i, a, s, d, c) : pe(f, u, i, h || (t.domChildren = []), a, s, d, 0, c) : pe(f, [u], i, h || [], a, s, d, 0) : n(u) ? pe([f], u, i, h || (t.domChildren = [i.firstChild]), a, s, d, 0, c) : r(u) ? ae(i, f, u) : r(f) ? de(f, u, i, a, s, d, null, c) : de(f, u, i, a, s, d, !0, c);
	    }
	  }function te(e, n, t, r) {
	    e && (a(n) && delete e.refs[n], a(t) && (e.refs[t] = r));
	  }function re(e, n, t, r, l) {
	    var i = n.events,
	        a = e.events,
	        s = !o(i),
	        d = !o(a);s ? d ? ue(a, i, t, r, l) : S(i, r, l) : d && Y(a, t, l);
	  }function oe(e, n, t, r, l, i) {
	    "select" === e.tag && J(n);var a = n.attrs,
	        s = e.attrs,
	        d = o(a),
	        c = !o(s);if (!d) for (var u = r || Object.keys(a), f = u.length, p = 0; f > p; p++) {
	      var v = u[p],
	          m = c && s[v],
	          y = a[v];m !== y && ("ref" === v ? te(i, m, y, l) : fe(v, m, y, l));
	    }if (c) for (var g = t || Object.keys(s), b = g.length, C = 0; b > C; C++) {
	      var w = g[C];(d || o(a[w])) && ("ref" === w ? te(h(node, i), s[w], null, l) : l.removeAttribute(w));
	    }
	  }function le(e, n, r, i, a, s, d, c, u) {
	    var f = void 0;i.hasHooks === !0 && (f = n.hooks, f && !o(f.willUpdate) && f.willUpdate(e.dom));var h = n.tag || i.tag,
	        p = e.tag || r.tag;if (p !== h) {
	      if (r.isComponent === !0) {
	        var v = e.instance;i.isComponent === !0 ? H(e, n, a, s, d, c, !1) : t(p) ? ie(v._lastNode, n, a, s, d, c, i.isSVG) : ie(v, n, a, s, d, c, i.isSVG);
	      } else H(e, n, a, s, d, c, i.isSVG);
	    } else if (o(p)) n.dom = e.dom;else if (r.isComponent === !0) {
	      if (i.isComponent === !0) {
	        var y = e.instance;if (!o(y) && y._unmounted) {
	          var g = T(n, p, n.attrs || {}, n.hooks, n.children, y, a, s, d);null !== a && V(a, g, e.dom);
	        } else n.instance = y, n.dom = e.dom, he(!0, n, n.tag, r, i, y, e.attrs || {}, n.attrs || {}, n.hooks, n.children, a, s, d);
	      }
	    } else {
	      var b = e.dom,
	          C = r.childrenType,
	          w = i.childrenType;if (n.dom = b, i.lazy === !0 && u === !1) {
	        var k = e.clipData;if (null === s.scrollY && s.refresh(), n.clipData = k, (k.pending === !0 || k.top - s.scrollY > s.screenHeight) && ke(k, b, e, n, a, s)) return;if (k.bottom < s.scrollY && ke(k, b, e, n, a, s)) return;
	      }if (C > 0 || w > 0) if (5 === w || 5 === C) ne(e, n, b, s, d, c);else {
	        var x = e.children,
	            _ = n.children;0 === C || l(x) ? w > 2 ? N(n, _, b, s, d, c) : m(_, b, s, d, c) : 0 === w || l(_) ? C > 2 ? P(b, x) : I(x, b) : x !== _ && (4 === C && 4 === w ? ve(x, _, b, s, d, c) : 2 === C && 2 === w ? de(x, _, b, s, d, c, !0, !1) : 1 === C && 1 === w ? ae(b, x, _) : ne(e, n, b, s, d, c));
	      }if (r.hasAttrs !== !0 && i.hasAttrs !== !0 || oe(e, n, r.attrKeys, i.attrKeys, b, c), r.hasEvents !== !0 && i.hasEvents !== !0 || re(e, n, r.eventKeys, i.eventKeys, b), r.hasClassName === !0 || i.hasClassName === !0) {
	        var O = n.className;e.className !== O && (o(O) ? b.removeAttribute("class") : b.className = O);
	      }if (r.hasStyle === !0 || i.hasStyle === !0) {
	        var S = n.style;e.style !== S && ce(e.style, S, b);
	      }i.hasHooks !== !0 || o(f.didUpdate) || f.didUpdate(b), ee(h, n);
	    }
	  }function ie(e, n, r, l, a, s, d) {
	    if (c(n)) n.then(function (n) {
	      de(e, n, r, l, a, s, null, !1);
	    });else {
	      var u = n.hooks,
	          f = !o(u);f && !o(u.willUpdate) && u.willUpdate(e.dom);var h = n.tag || (o(n.bp) ? null : n.bp.tag),
	          p = e.tag || (o(e.bp) ? null : e.bp.tag);if ("svg" === h && (d = !0), p !== h) {
	        var v = e.instance;i(p) ? i(h) ? H(e, n, r, l, a, s, d) : t(p) ? ie(v._lastNode, n, r, l, a, s, d) : ie(v, n, r, l, a, s, d) : H(v || e, n, r, l, a, s, d);
	      } else if (o(p)) n.dom = e.dom;else if (i(p)) {
	        if (i(h)) {
	          var m = e._instance;if (!o(m) && m._unmounted) {
	            var y = T(n, p, n.attrs || {}, n.hooks, n.children, m, r, l, a);null !== r && V(r, y, e.dom);
	          } else n.instance = e.instance, n.dom = e.dom, he(!1, n, n.tag, null, null, n.instance, e.attrs || {}, n.attrs || {}, n.hooks, n.children, r, l, a);
	        }
	      } else {
	        var g = e.dom,
	            b = n.className,
	            C = n.style;n.dom = g, ne(e, n, g, l, a, s, d), oe(e, n, null, null, g, s), re(e, n, null, null, g), e.className !== b && (o(b) ? g.removeAttribute("class") : g.className = b), e.style !== C && ce(e.style, C, g), f && !o(u.didUpdate) && u.didUpdate(g), ee(h, n);
	      }
	    }
	  }function ae(e, n, t) {
	    r(n) ? e.firstChild.nodeValue = t : e.textContent = t;
	  }function se(e, n, t, r, o, l, i, a) {
	    var s = e.bp,
	        d = n.bp;void 0 === s || void 0 === d ? ie(e, n, t, r, o, l, i) : le(e, n, s, d, t, r, o, l, a);
	  }function de(e, n, t, i, a, s, d, c) {
	    if (null !== d) se(e, n, t, i, a, s, c, !1);else if (l(e)) m(n, t, i, a, s, c);else if (l(n)) I(e, t);else if (r(e)) {
	      if (r(n)) t.firstChild.nodeValue = n;else {
	        var u = m(n, null, i, a, s, c);n.dom = u, V(t, u, t.firstChild);
	      }
	    } else if (r(n)) {
	      var f = document.createTextNode(n);V(t, f, e.dom);
	    } else if (o(n.null)) se(e, n, t, i, a, s, c, !1);else {
	      var h = void 0;e.dom && (L(e), h = e.dom), V(t, n.dom, h);
	    }
	  }function ce(e, n, t) {
	    if (a(n)) t.style.cssText = n;else if (o(e)) {
	      if (!o(n)) for (var r = Object.keys(n), l = 0; l < r.length; l++) {
	        var i = r[l],
	            d = n[i];s(d) && !Be[i] ? t.style[i] = d + "px" : t.style[i] = d;
	      }
	    } else if (o(n)) t.removeAttribute("style");else {
	      for (var c = Object.keys(n), u = 0; u < c.length; u++) {
	        var f = c[u],
	            h = n[f];s(h) && !Be[f] ? t.style[f] = h + "px" : t.style[f] = h;
	      }for (var p = Object.keys(e), v = 0; v < p.length; v++) {
	        var m = p[v];o(n[m]) && (t.style[m] = "");
	      }
	    }
	  }function ue(e, n, t, r, l) {
	    for (var i = r || Object.keys(n), a = 0; a < i.length; a++) {
	      var s = i[a],
	          d = e[s],
	          c = n[s];d !== c && (l[s] = c);
	    }for (var u = t || Object.keys(e), f = 0; f < u.length; f++) {
	      var h = u[f];o(n[h]) && (l[h] = null);
	    }
	  }function fe(e, n, t, r) {
	    if ("dangerouslySetInnerHTML" === e) {
	      var l = n && n.__html,
	          i = t && t.__html;if (o(i)) throw new Error("Inferno Error: dangerouslySetInnerHTML requires an object with a __html propety containing the innerHTML content");l !== i && (r.innerHTML = i);
	    } else if (He[e]) r[e] = null === t ? "" : t;else if (Ve[e]) r[e] = !!t;else {
	      var a = Le[e];t === !1 || o(t) ? void 0 !== a ? r.removeAttributeNS(a, e) : r.removeAttribute(e) : void 0 !== a ? r.setAttributeNS(a, e, t === !0 ? e : t) : r.setAttribute(e, t === !0 ? e : t);
	    }
	  }function he(n, r, i, a, s, d, c, u, f, h, p, v, m) {
	    if (u = e(h, u), t(i)) {
	      var y = d.props,
	          g = d.state,
	          b = d.state,
	          C = d.getChildContext();o(C) || (m = Object.assign({}, m, C)), d.context = m;var w = d._updateComponent(g, b, y, u);l(w) || w === De || (de(d._lastNode, w, p, v, m, d, null, !1), r.dom = w.dom, d._lastNode = w);
	    } else {
	      var k = !0,
	          x = n && s.hasHooks === !0 || !o(f);if (x && !o(f.componentShouldUpdate) && (k = f.componentShouldUpdate(r.dom, c, u)), k !== !1) {
	        x && !o(f.componentWillUpdate) && f.componentWillUpdate(r.dom, c, u);var N = i(u, m);l(N) || (N.dom = r.dom, de(d, N, p, v, m, null, null, !1), r.instance = N, x && !o(f.componentDidUpdate) && f.componentDidUpdate(r.dom, c, u));
	      }
	    }
	  }function pe(e, t, i, a, s, d, c, u, f) {
	    var h = void 0 === i.append,
	        p = e.length,
	        v = t.length,
	        y = p === v;if (y === !1) if (p > v) for (; p !== v;) {
	      var g = e[p - 1];l(g) || (i.removeChild(a[p - 1 + u]), h && a.splice(p - 1 + u, 1), L(g), p--, e.pop());
	    } else for (; p !== v;) {
	      var b = t[p],
	          C = void 0;e.push(b), C = r(b) ? document.createTextNode(b) : m(b, null, s, d, c, f), l(C) || D(i, C), h && (1 === p && a.push(i.firstChild), a.splice(p + u, 0, C)), p++;
	    }for (var w = 0; v > w; w++) {
	      var k = e[w],
	          x = t[w],
	          N = w + u;if (k === x && l(k)) u--;else if (l(x)) {
	        if (!l(k)) if (n(k) && 0 === k.length) for (var _ = 0; _ < k.length; _++) {
	          I(k[_], i);
	        } else {
	          var O = a[N];o(O) && N--, i.removeChild(a[N]), h && (a.splice(N, 1), u--), L(k);
	        }
	      } else if (l(k)) {
	        if (r(x)) {
	          var S = document.createTextNode(x),
	              T = a[N];if (o(T)) {
	            var j = a[N + 1];D(i, S, j), h && a.splice(N, 1, S);
	          } else D(i, S, T), h && a.splice(N, 0, S);
	        } else {
	          var E = m(x, null, s, d, c, f),
	              M = a[N];if (o(M)) {
	            var U = a[N + 1];D(i, E, U), h && a.splice(N, 1, E);
	          } else D(i, E, M), h && a.splice(N, 0, E);
	        }
	      } else if (r(x)) {
	        if (1 === p) r(k) ? void 0 === i.getElementsByTagName ? i.nodeValue = x : i.firstChild.nodeValue = x : (L(k), i.textContent = x);else {
	          var W = document.createTextNode(x),
	              A = a[N];o(A) ? i.nodeValue = W.nodeValue : r(k) ? A.nodeValue = x : void 0 === A.append ? (h && a.splice(N, 1, W), V(i, W, A)) : (D(i, W, A.firstChild), A.remove(), a.splice(0, a.length, W)), L(k);
	        }
	      } else if (n(x)) {
	        if (q(k, x)) ve(k, x, a[N], s, d, c, f);else if (n(k)) {
	          var K = a[N];if (void 0 === K.append) {
	            if (x.length > 1 && 1 === k.length) {
	              var H = R();H.insert(i, K), H.appendChild(K), h && a.splice(N, 1, H), pe(k, x, H, H.childNodes, s, d, c, 0, f);
	            } else pe(k, x, i, a, s, d, c, 0, f);
	          } else pe(k, x, a[N], a[N].childNodes, s, d, c, 0, f);
	        } else if (x.length > 1) {
	          var B = R();B.appendChild(i.firstChild), D(i, B, i.firstChild), h && a.splice(N, 1, B), pe([k], x, B, B.childNodes, s, d, c, w, f);
	        } else pe([k], x, i, a, s, d, c, w, f);
	      } else n(k) ? pe(k, [x], a, a[N].childNodes, s, d, c, 0, f) : (de(k, x, i, s, d, c, null, f), a[N] = x.dom);
	    }
	  }function ve(e, n, t, r, o, l, i) {
	    for (var a = e.length, s = n.length, d = void 0, c = a - 1, u = s - 1, f = 0, h = 0, p = null, v = null, y = null, g = null, b = void 0, C = void 0, w = 0, k = void 0, x = void 0; c >= f && u >= h && (v = n[h], p = e[f], v.key === p.key);) {
	      de(p, v, t, r, o, l, !0, i), h++, f++;
	    }for (; c >= f && u >= h && (y = n[u], g = e[c], y.key === g.key);) {
	      de(g, y, t, r, o, l, !0, i), u--, c--;
	    }for (; c >= f && u >= h && (y = n[u], p = e[f], y.key === p.key);) {
	      C = s > u + 1 ? n[u + 1].dom : null, de(p, y, t, r, o, l, !0, i), W(t, y.dom, C), u--, f++;
	    }for (; c >= f && u >= h && (v = n[h], g = e[c], v.key === g.key);) {
	      C = e[f].dom, de(g, v, t, r, o, l, !0, i), W(t, v.dom, C), h++, c--;
	    }if (f > c) {
	      if (u >= h) for (C = s > u + 1 ? n[u + 1].dom : null; u >= h; h++) {
	        W(t, m(n[h], null, r, o, l, i), C);
	      }
	    } else if (h > u) for (; c >= f;) {
	      I(e[f++], t);
	    } else {
	      var N = c - f + 1,
	          _ = u - h + 1,
	          O = new Array(_);for (d = 0; _ > d; d++) {
	        O[d] = -1;
	      }var S = !1,
	          T = 0;if (16 >= N * _) for (d = f; c >= d; d++) {
	        var j = !0;for (g = e[d], b = h; u >= b; b++) {
	          if (y = n[b], g.key === y.key) {
	            O[b - h] = d, w > b ? S = !0 : w = b, de(g, y, t, r, o, l, !0, i), j = !1;break;
	          }
	        }j && (I(g, t), T++);
	      } else {
	        var E = new Map();for (d = h; u >= d; d++) {
	          x = n[d], E.set(x.key, d);
	        }for (d = c; d >= f; d--) {
	          g = e[d], b = E.get(g.key), void 0 === b ? (I(g, t), T++) : (y = n[b], O[b - h] = d, w > b ? S = !0 : w = b, de(g, y, t, r, o, l, !0, i));
	        }
	      }if (S) {
	        var M = me(O);for (b = M.length - 1, d = _ - 1; d >= 0; d--) {
	          -1 === O[d] ? (k = d + h, C = s > k + 1 ? n[k + 1].dom : null, W(t, m(n[k], null, r, o, l, i), C)) : 0 > b || d !== M[b] ? (k = d + h, C = s > k + 1 ? n[k + 1].dom : null, W(t, n[k].dom, C)) : b--;
	        }
	      } else if (N - T !== _) for (d = _ - 1; d >= 0; d--) {
	        -1 === O[d] && (k = d + h, C = s > k + 1 ? n[k + 1].dom : null, W(t, m(n[k], null, r, o, l, i), C));
	      }
	    }
	  }function me(e) {
	    var n = e.slice(0),
	        t = [];t.push(0);var r = void 0,
	        o = void 0,
	        l = void 0,
	        i = void 0,
	        a = void 0;for (r = 0; r < e.length; r++) {
	      if (-1 !== e[r]) if (o = t[t.length - 1], e[o] < e[r]) n[r] = o, t.push(r);else {
	        for (l = 0, i = t.length - 1; i > l;) {
	          a = (l + i) / 2 | 0, e[t[a]] < e[r] ? l = a + 1 : i = a;
	        }e[r] < e[t[l]] && (l > 0 && (n[r] = t[l - 1]), t[l] = r);
	      }
	    }for (l = t.length, i = t[l - 1]; l-- > 0;) {
	      t[l] = i, i = n[i];
	    }return t;
	  }function ye() {
	    this._listeners = [], this.scrollX = null, this.scrollY = null, this.screenHeight = Ye, this.screenWidth = Ie;
	  }function ge(e, n, t) {
	    n.addListener(function () {
	      var r = t.getBoundingClientRect();null === n.scrollY && n.refresh(), e.clipData = { top: r.top + n.scrollY, left: r.left + n.scrollX, bottom: r.bottom + n.scrollY, right: r.right + n.scrollX, pending: !1 };
	    });
	  }function be(e) {
	    se(e.lastNode, e.nextNode, e.parentDom, e.lifecycle, null, null, !1, !0), e.clipData.pending = !1;
	  }function Ce() {
	    Re = !0, setTimeout(we, 100);
	  }function we() {
	    ze.forEach(be), ze.clear(), Re = !1;
	  }function ke(e, n, t, r, o, l) {
	    if (performance.now() > Pe + 2e3) {
	      var i = ze.get(n);return void 0 === i ? ze.set(n, { lastNode: t, nextNode: r, parentDom: o, clipData: e, lifecycle: l }) : i.nextNode = r, e.pending = !0, Re === !1 && Ce(), !0;
	    }return we(), !1;
	  }function xe(e, n, t, o, l, i, a) {
	    if (r(e)) {
	      if (3 === n.nodeType && "" !== e) n.nodeValue = e;else {
	        var s = document.createTextNode(e);V(o, s, n), t.splice(t.indexOf(n), 1, s);
	      }
	    } else Oe(e, n, o, l, i, a, !1);
	  }function Ne(e) {
	    for (var n = [], t = e.childNodes, r = t.length, o = 0; r > o;) {
	      var l = t[o];8 === l.nodeType ? (e.removeChild(l), r--) : (n.push(l), o++);
	    }return n;
	  }function _e(n, r, i, a, s, d, c, u, f, h, p) {
	    if (i = e(s, i), !t(r)) {
	      var v = n.instance = r(i);return o(a) || (o(a.componentWillMount) || a.componentWillMount(null, i), o(a.componentDidMount) || u.addListener(function () {
	        a.componentDidMount(d, i);
	      })), Oe(v, d, c, u, f, v, p);
	    }var m = n.instance = new r(i);m._patch = de, !o(h) && i.ref && O(h, i.ref, m);var y = m.getChildContext();o(y) || (f = Object.assign({}, f, y)), m.context = f, m._unmounted = !1, m._parentNode = n, h && (m._parentComponent = h), m._pendingSetState = !0, m.componentWillMount();var g = m.render();m._pendingSetState = !1, l(g) ? m._lastNode = U() : (Oe(g, d, c, u, f, m, p), m._lastNode = g, m.componentDidMount());
	  }function Oe(e, t, l, a, s, d, c) {
	    var u = e.bp,
	        f = e.tag || u.tag;if (i(f)) e.dom = t, _e(e, f, e.attrs || {}, e.hooks, e.children, t, l, a, s, d, c);else if (1 !== t.nodeType || f !== t.tagName.toLowerCase()) ;else {
	      e.dom = t;var h = e.hooks;u.hasHooks !== !0 && o(h) || Z(h, a, t);var p = e.children;if (!o(p)) if (r(p)) t.textContent !== p && (t.textContent = p);else {
	        var v = Ne(t);if (n(p)) {
	          if (e.domChildren = v, v.length === p.length) for (var m = 0; m < p.length; m++) {
	            xe(p[m], v[m], v, t, a, s, d);
	          }
	        } else 1 === v.length && xe(p, v[0], v, t, a, s, d);
	      }var C = e.className,
	          w = e.style;if (o(C) || (t.className = C), o(w) || ce(null, w, t), u && u.hasAttrs === !0) g(e, u, t, d);else {
	        var k = e.attrs;o(k) || (y(e), j(e, k, Object.keys(k), t, d));
	      }if (u && u.hasEvents === !0) b(e, u, t);else {
	        var x = e.events;o(x) || S(x, Object.keys(x), t);
	      }
	    }
	  }function Se(e, n, t) {
	    if (n && 1 === n.nodeType) {
	      var r = n.querySelector("[data-infernoroot]");if (r && r.parentNode === n) return Oe(e, r, n, t, {}, !0), !0;
	    }return n !== qe ? n.textContent = "" : console.warn('Inferno Warning: rendering to the "document.body" is dangerous! Use a dedicated container element instead.'), !1;
	  }function Te(e) {
	    for (var n = 0; n < Fe.length; n++) {
	      var t = Fe[n];if (t.dom === e) return t;
	    }return null;
	  }function je(e) {
	    for (var n = 0; n < Fe.length; n++) {
	      var t = Fe[n];if (t === e) return void Fe.splice(n, 1);
	    }
	  }function Ee(e, n) {
	    var t = Te(n),
	        r = new ye();if (d(t)) {
	      Se(e, n, r) || m(e, n, r, {}, null, !1), r.trigger(), Fe.push({ node: e, dom: n });
	    } else {
	      var o = X();de(t.node, e, n, r, {}, null, null, !1), r.trigger(), null === e && je(t), t.node = e, z(o);
	    }
	  }var Me = {};Me.typeof = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
	    return typeof e === "undefined" ? "undefined" : _typeof(e);
	  } : function (e) {
	    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
	  }, Me.classCallCheck = function (e, n) {
	    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
	  }, Me.createClass = function () {
	    function e(e, n) {
	      for (var t = 0; t < n.length; t++) {
	        var r = n[t];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	      }
	    }return function (n, t, r) {
	      return t && e(n.prototype, t), r && e(n, r), n;
	    };
	  }(), Me.inherits = function (e, n) {
	    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (typeof n === "undefined" ? "undefined" : _typeof(n)));e.prototype = Object.create(n && n.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n);
	  }, Me.possibleConstructorReturn = function (e, n) {
	    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !n || "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) && "function" != typeof n ? e : n;
	  };var De = "NO_RENDER",
	      Ue = "undefined" != typeof window && window.document,
	      We = !0,
	      Ae = "http://www.w3.org/1999/xlink",
	      Ke = "http://www.w3.org/XML/1998/namespace",
	      He = {},
	      Ve = {},
	      Le = {},
	      Be = {};E("xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type", Le, Ae), E("xml:base,xml:lang,xml:space", Le, Ke), E("volume,value", He, !0), E("muted,scoped,loop,open,checked,default,capture,disabled,selected,readonly,multiple,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate", Ve, !0), E("animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,", Be, !0);var Ie = Ue && window.screen.width,
	      Ye = Ue && window.screen.height,
	      Ge = 0,
	      Xe = 0,
	      Pe = 0;Ue && (window.onscroll = function (e) {
	    Ge = window.scrollX, Xe = window.scrollY, Pe = performance.now();
	  }, window.resize = function (e) {
	    Ge = window.scrollX, Xe = window.scrollY, Ie = window.screen.width, Ye = window.screen.height, Pe = performance.now();
	  }), ye.prototype = { refresh: function refresh() {
	      this.scrollX = Ue && window.scrollX, this.scrollY = Ue && window.scrollY;
	    }, addListener: function addListener(e) {
	      this._listeners.push(e);
	    }, trigger: function trigger() {
	      for (var e = 0; e < this._listeners.length; e++) {
	        this._listeners[e]();
	      }
	    } };var ze = new Map(),
	      Re = !1,
	      qe = document.body,
	      Fe = [],
	      Je = { render: Ee };return Je;
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Notifications = function () {
	  function Notifications() {
	    _classCallCheck(this, Notifications);

	    this.container = document.querySelectorAll('.notifications-container')[0];
	  }

	  _createClass(Notifications, [{
	    key: 'generate',
	    value: function generate(message, type) {
	      var _this = this;

	      if (type === undefined) {
	        type = "";
	      }

	      var notification = document.createElement('div');
	      notification.className = 'notification ' + type;
	      notification.innerText = message;
	      this.container.appendChild(notification);

	      setTimeout(function () {
	        notification.className += " fadeout";
	        setTimeout(function () {
	          _this.container.removeChild(notification);
	        }, 500);
	      }, 5000);
	    }
	  }]);

	  return Notifications;
	}();

	exports.default = Notifications;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _inferno = __webpack_require__(1);

	var _inferno2 = _interopRequireDefault(_inferno);

	var _infernoComponent = __webpack_require__(2);

	var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

	var _WallpaperSwitcher = __webpack_require__(6);

	var _WallpaperSwitcher2 = _interopRequireDefault(_WallpaperSwitcher);

	var _Clock = __webpack_require__(7);

	var _Clock2 = _interopRequireDefault(_Clock);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var bp3 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'text',
	  children: {
	    arg: 0
	  }
	});

	var bp2 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'icon'
	});

	var bp1 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'icon-wrapper',
	  children: {
	    arg: 0
	  }
	});

	var bp0 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: {
	    arg: 0
	  },
	  events: {
	    arg: 1
	  },
	  children: {
	    arg: 2
	  }
	});

	var bp4 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: {
	    arg: 0
	  },
	  children: {
	    arg: 1
	  }
	});

	var bp9 = _inferno2.default.createBlueprint({
	  tag: {
	    arg: 0
	  }
	});

	var bp8 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'left hostname',
	  children: {
	    arg: 0
	  }
	});

	var bp7 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'bottom',
	  children: {
	    arg: 0
	  }
	});

	var bp6 = _inferno2.default.createBlueprint({
	  tag: {
	    arg: 0
	  }
	});

	var bp5 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  children: {
	    arg: 0
	  }
	});

	var CommandPanel = function (_Component) {
	  _inherits(CommandPanel, _Component);

	  function CommandPanel(props) {
	    _classCallCheck(this, CommandPanel);

	    var _this = _possibleConstructorReturn(this, (CommandPanel.__proto__ || Object.getPrototypeOf(CommandPanel)).call(this, props));

	    _this.state = {
	      "expandedCommands": false
	    };
	    return _this;
	  }

	  _createClass(CommandPanel, [{
	    key: 'handleCommand',
	    value: function handleCommand(command, disabled, event) {
	      if (disabled !== false) {
	        window.notifications.generate(command + ' is disabled on this system.', "error");
	        return false;
	      }

	      if (command === "shutdown") {
	        window.notifications.generate("Shutting down.");
	        window.lightdm.shutdown();
	      } else if (command === "hibernate") {
	        window.notifications.generate("Hibernating system.");
	        window.lightdm.hibernate();
	      } else if (command === "reboot") {
	        window.notifications.generate("Rebooting system.");
	        window.lightdm.restart();
	      } else if (command === "sleep") {
	        window.notifications.generate("Suspending system.");
	        window.lightdm.suspend();
	      }
	    }
	  }, {
	    key: 'generateCommands',
	    value: function generateCommands() {
	      var _this2 = this;

	      var commands = {
	        "Shutdown": window.lightdm.can_shutdown,
	        "Reboot": window.lightdm.can_restart,
	        "Hibernate": window.lightdm.can_hibernate,
	        "Sleep": window.lightdm.can_suspend
	      };

	      // Filter out commands we can't execute.
	      var enabledCommands = Object.keys(commands).map(function (key) {
	        return commands[key] ? key : false;
	      }).filter(function (command) {
	        return command !== false;
	      });

	      // Are both hibernation and suspend disabled?
	      // Add the row back and disable it so that the user is aware of what's happening.
	      if (window.lightdm.can_suspend === false && window.lightdm.can_hibernate === false) {
	        enabledCommands.push("Sleep.disabled");
	      }

	      // Save ourselves some work, when all four commands are enabled
	      // rendering should be halted, and the logo should be moved up.
	      var expanded = enabledCommands.length > 3;
	      if (expanded === true) {
	        this.setState({
	          'expandedCommands': true
	        });
	      }

	      var rows = enabledCommands.map(function (command) {
	        var disabled = command.toLowerCase().split('.')[1] || false;
	        command = command.toLowerCase().split('.')[0];

	        var classes = ['command', command, disabled].filter(function (e) {
	          return e;
	        });

	        return bp0(classes.join(' '), {
	          onclick: _this2.handleCommand.bind(_this2, command, disabled)
	        }, [bp1(bp2()), bp3(command)]);
	      });

	      var classes = ['commands-wrapper'];

	      return bp4(classes.join(' '), rows);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var hostname = window.lightdm.hostname;
	      var commands = this.generateCommands();

	      return bp5([bp6(_WallpaperSwitcher2.default), commands, bp7([bp8(hostname), bp9(_Clock2.default)])]);
	    }
	  }]);

	  return CommandPanel;
	}(_infernoComponent2.default);

	exports.default = CommandPanel;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WALLPAPERS = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _inferno = __webpack_require__(1);

	var _inferno2 = _interopRequireDefault(_inferno);

	var _infernoComponent = __webpack_require__(2);

	var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FADEOUT_TIME = 600;

	var WALLPAPERS = exports.WALLPAPERS = getWallpapers();

	function getWallpapers() {
	  // If we're in test mode, we stick to a static rotation of three default wallpapers.
	  // In production, it is possible that a user will change what wallpapers are available.
	  var _wallpapers = undefined;

	  if (window.debug === true) {
	    _wallpapers = ['boko.jpg', 'mountains-2.png', 'space-1.jpg'];
	  } else {
	    var wallpapersDirectory = window.config.get_str("branding", "background_images");

	    // Do NOT allow the default wallpaper directory to set, as this will prevent the default provided backgrounds from 
	    // being used 100% of the time in a stock install.
	    if (wallpapersDirectory == "/usr/share/backgrounds" || wallpapersDirectory == "/usr/share/backgrounds/") {
	      wallpapersDirectory = "/usr/share/lightdm-webkit/themes/lightdm-webkit-theme-aether/src/img/backgrounds/";
	    }

	    _wallpapers = window.greeterutil.dirlist(wallpapersDirectory);
	    _wallpapers = _wallpapers.map(function (e, i, a) {
	      return e.split("/").pop();
	    });
	  }

	  return _wallpapers;
	}

	var bp3 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'button-accept',
	  events: {
	    arg: 0
	  },
	  children: {
	    arg: 1
	  }
	});

	var bp2 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'button-reject',
	  events: {
	    arg: 0
	  },
	  children: {
	    arg: 1
	  }
	});

	var bp1 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: {
	    arg: 0
	  },
	  children: {
	    arg: 1
	  }
	});

	var bp0 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'options-wrapper',
	  children: {
	    arg: 0
	  }
	});

	var bp5 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'distro-logo',
	  events: {
	    arg: 0
	  }
	});

	var bp4 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'distro-wrapper',
	  children: {
	    arg: 0
	  }
	});

	var WallpaperSwitcher = function (_Component) {
	  _inherits(WallpaperSwitcher, _Component);

	  function WallpaperSwitcher(props) {
	    _classCallCheck(this, WallpaperSwitcher);

	    var _this = _possibleConstructorReturn(this, (WallpaperSwitcher.__proto__ || Object.getPrototypeOf(WallpaperSwitcher)).call(this, props));

	    var wallpaperDirectory = void 0;

	    // Set background directory
	    if (window.debug === true) {
	      wallpaperDirectory = "src/test/wallpapers/";
	    } else {
	      wallpaperDirectory = "src/img/wallpapers/";
	    }

	    _this.state = {
	      "wallpaperDirectory": wallpaperDirectory,
	      "currentWallpaper": undefined,
	      "establishedWallpaper": undefined,
	      "wallpaperBackground": undefined,
	      "wallpaperForeground": undefined,
	      "switcher": {
	        "active": false,
	        "currentlyFading": false,
	        "index": 0
	      }
	    };
	    return _this;
	  }

	  _createClass(WallpaperSwitcher, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      // Set background wallpaper
	      if (typeof Storage !== "undefined") {
	        // Set a default wallpaper if none found.
	        if (localStorage.getItem("wallpaper") === null) {
	          localStorage.setItem("wallpaper", "abstract.jpg");
	        }

	        var wallpaperDirectory = this.state.wallpaperDirectory;
	        var wallpaperImage = localStorage.getItem("wallpaper");
	        var wallpaperBackground = document.querySelectorAll('.wallpaper-background')[0];
	        var wallpaperForeground = document.querySelectorAll('.wallpaper-foreground')[0];

	        wallpaperForeground.style.background = 'url(\'' + wallpaperDirectory + wallpaperImage + '\')';
	        wallpaperForeground.style.backgroundSize = "cover";

	        this.setState({
	          "establishedWallpaper": wallpaperImage,
	          "wallpaperBackground": wallpaperBackground,
	          "wallpaperForeground": wallpaperForeground
	        });
	      } else {
	        window.notifications.generate("localStorage not supported.", 'error');
	      }
	    }
	  }, {
	    key: 'acceptWallpaper',
	    value: function acceptWallpaper() {
	      var currentWallpaper = this.state.currentWallpaper;
	      var switcher = this.state.switcher;

	      // Due diligence.
	      localStorage.setItem("wallpaper", currentWallpaper);
	      window.notifications.generate("This wallpaper has been saved as your default background.", 'success');

	      // Reset switcher state
	      switcher.active = false;
	      switcher.index = 0;

	      this.setState({
	        "currentWallpaper": currentWallpaper,
	        "establishedWallpaper": currentWallpaper,
	        "switcher": switcher
	      });
	    }
	  }, {
	    key: 'cycleWallpaper',
	    value: function cycleWallpaper() {
	      // Prevent animation transitions stacking and causing issues.
	      if (this.state.switcher.currentlyFading === true) {
	        return false;
	      }

	      var wallpapers = WALLPAPERS;
	      var switcher = this.state.switcher;
	      var index = (switcher.index + wallpapers.length + 1) % wallpapers.length;
	      var newWallpaper = wallpapers[index];

	      this.setWallpaper(newWallpaper);

	      switcher.index = index;

	      this.setState({
	        "switcher": switcher
	      });
	    }
	  }, {
	    key: 'handleSwitcherActivation',
	    value: function handleSwitcherActivation() {
	      var switcher = this.state.switcher;
	      switcher.active = true;
	      this.cycleWallpaper();

	      this.setState({
	        "switcher": switcher
	      });
	    }
	  }, {
	    key: 'rejectWallpaper',
	    value: function rejectWallpaper() {
	      var establishedWallpaper = this.state.establishedWallpaper;
	      var switcher = this.state.switcher;

	      // Reset switcher state
	      switcher.active = false;
	      switcher.index = 0;

	      this.setState({
	        "switcher": switcher
	      });

	      this.setWallpaper(establishedWallpaper);

	      window.notifications.generate("Wallpaper reset to default, no changes saved.");
	    }
	  }, {
	    key: 'setWallpaper',
	    value: function setWallpaper(newWallpaper) {
	      var _this2 = this;

	      var switcher = this.state.switcher;

	      // Fadeout foreground wallpaper to new wallpaper
	      var wallpaperDirectory = this.state.wallpaperDirectory;
	      this.state.wallpaperBackground.style.background = 'url(\'' + wallpaperDirectory + newWallpaper + '\')';
	      this.state.wallpaperBackground.style.backgroundSize = 'cover';
	      this.state.wallpaperForeground.className += " fadeout";

	      switcher.currentlyFading = true;

	      setTimeout(function () {
	        // Cycle new wallpaper back to the front, make it visible again.
	        _this2.state.wallpaperForeground.style.background = 'url(\'' + wallpaperDirectory + newWallpaper + '\')';
	        _this2.state.wallpaperForeground.style.backgroundSize = 'cover';
	        _this2.state.wallpaperForeground.className = _this2.state.wallpaperForeground.className.replace(" fadeout", "");

	        var switcher = _this2.state.switcher;
	        switcher.currentlyFading = false;

	        _this2.setState({
	          "currentWallpaper": newWallpaper,
	          "switcher": switcher
	        });
	      }, FADEOUT_TIME);
	    }
	  }, {
	    key: 'generateOptions',
	    value: function generateOptions() {
	      var classes = ['options'];

	      if (this.state.switcher.active === true) {
	        classes.push("active");
	      }

	      return bp0(bp1(classes.join(' '), [bp2({
	        onclick: this.rejectWallpaper.bind(this)
	      }, '✕'), bp3({
	        onclick: this.acceptWallpaper.bind(this)
	      }, '✓')]));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var options = this.generateOptions();

	      return bp4([bp5({
	        onclick: this.handleSwitcherActivation.bind(this)
	      }), options]);
	    }
	  }]);

	  return WallpaperSwitcher;
	}(_infernoComponent2.default);

	exports.default = WallpaperSwitcher;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _inferno = __webpack_require__(1);

	var _inferno2 = _interopRequireDefault(_inferno);

	var _infernoComponent = __webpack_require__(2);

	var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// For some reason this caused undiagnosable hangs in LightDM-webkit (But not in-browser)
	// until it was separated into its own component.

	var bp0 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: {
	    arg: 0
	  },
	  children: {
	    arg: 1
	  }
	});

	var Clock = function (_Component) {
	  _inherits(Clock, _Component);

	  function Clock(props) {
	    _classCallCheck(this, Clock);

	    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

	    _this.state = {
	      "currentTime": undefined,
	      "initialized": false
	    };
	    return _this;
	  }

	  _createClass(Clock, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      setTimeout(function () {
	        _this2.updateClock();
	        _this2.setState({
	          "initialized": true
	        });
	      }, 1000);
	    }
	  }, {
	    key: 'padZeroes',
	    value: function padZeroes(i) {
	      return i < 10 ? "0" + i : i;
	    }
	  }, {
	    key: 'updateClock',
	    value: function updateClock() {
	      var _this3 = this;

	      var now = new Date();
	      var hours = this.padZeroes(now.getHours());
	      var minutes = this.padZeroes(now.getMinutes());
	      var formattedTime = hours + ':' + minutes;

	      this.setState({
	        "currentTime": formattedTime
	      });

	      setTimeout(function () {
	        _this3.updateClock();
	      }, 1000);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = ['right', 'clock'];
	      var currentTime = this.state.currentTime;

	      if (this.state.initialized === true) {
	        classes.push('loaded');
	      }

	      return bp0(classes.join(' '), currentTime);
	    }
	  }]);

	  return Clock;
	}(_infernoComponent2.default);

	exports.default = Clock;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _inferno = __webpack_require__(1);

	var _inferno2 = _interopRequireDefault(_inferno);

	var _infernoComponent = __webpack_require__(2);

	var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

	var _UserSwitcher = __webpack_require__(9);

	var _UserSwitcher2 = _interopRequireDefault(_UserSwitcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FADE_IN_DURATION = 200;
	var ERROR_SHAKE_DURATION = 600;

	var bp3 = _inferno2.default.createBlueprint({
	  tag: 'em',
	  children: {
	    arg: 0
	  }
	});

	var bp2 = _inferno2.default.createBlueprint({
	  tag: 'em',
	  children: {
	    arg: 0
	  }
	});

	var bp1 = _inferno2.default.createBlueprint({
	  tag: 'em',
	  children: {
	    arg: 0
	  }
	});

	var bp0 = _inferno2.default.createBlueprint({
	  tag: 'span',
	  children: {
	    arg: 0
	  }
	});

	var bp4 = _inferno2.default.createBlueprint({
	  tag: 'input',
	  className: {
	    arg: 0
	  },
	  attrs: {
	    arg: 1
	  },
	  events: {
	    arg: 2
	  }
	});

	var bp5 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  key: {
	    arg: 0
	  },
	  className: {
	    arg: 1
	  },
	  events: {
	    arg: 2
	  },
	  children: {
	    arg: 3
	  }
	});

	var bp6 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: {
	    arg: 0
	  },
	  events: {
	    arg: 1
	  },
	  children: {
	    arg: 2
	  }
	});

	var bp7 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: {
	    arg: 0
	  },
	  events: {
	    arg: 1
	  },
	  children: {
	    arg: 2
	  }
	});

	var bp24 = _inferno2.default.createBlueprint({
	  tag: {
	    arg: 0
	  },
	  attrs: {
	    arg: 1
	  }
	});

	var bp23 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: {
	    arg: 0
	  },
	  children: {
	    arg: 1
	  }
	});

	var bp22 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'bottom',
	  children: {
	    arg: 0
	  }
	});

	var bp21 = _inferno2.default.createBlueprint({
	  tag: 'input',
	  className: 'submit-button',
	  attrs: {
	    type: 'submit',
	    value: 'GO'
	  }
	});

	var bp20 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'right',
	  children: {
	    arg: 0
	  }
	});

	var bp19 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'left',
	  children: {
	    arg: 0
	  }
	});

	var bp18 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'submit-row',
	  children: {
	    arg: 0
	  }
	});

	var bp17 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'submit-row-container',
	  children: {
	    arg: 0
	  }
	});

	var bp16 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'user-password-container',
	  children: {
	    arg: 0
	  }
	});

	var bp15 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'user-username',
	  children: {
	    arg: 0
	  }
	});

	var bp14 = _inferno2.default.createBlueprint({
	  tag: 'form',
	  className: 'login-form',
	  events: {
	    arg: 0
	  },
	  children: {
	    arg: 1
	  }
	});

	var bp13 = _inferno2.default.createBlueprint({
	  tag: 'img',
	  className: 'user-avatar',
	  attrs: {
	    arg: 0
	  }
	});

	var bp12 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'avatar-mask',
	  children: {
	    arg: 0
	  }
	});

	var bp11 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'avatar-background',
	  children: {
	    arg: 0
	  }
	});

	var bp10 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'avatar-container',
	  children: {
	    arg: 0
	  }
	});

	var bp9 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: {
	    arg: 0
	  },
	  children: {
	    arg: 1
	  }
	});

	var bp8 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'login-panel-contents',
	  children: {
	    arg: 0
	  }
	});

	var LoginPanel = function (_Component) {
	  _inherits(LoginPanel, _Component);

	  function LoginPanel(props) {
	    _classCallCheck(this, LoginPanel);

	    var _this = _possibleConstructorReturn(this, (LoginPanel.__proto__ || Object.getPrototypeOf(LoginPanel)).call(this, props));

	    _this.state = {
	      "date": {
	        "formattedString": undefined,
	        "initialized": false,
	        "dayName": undefined,
	        "dayValue": undefined,
	        "formattedDayValue": undefined,
	        "monthName": undefined,
	        "monthValue": undefined
	      },
	      "activeUser": undefined,
	      "activeSession": undefined,
	      "dropdownActive": false,
	      "fadeIn": false,
	      "password": "",
	      "passwordFailed": false,
	      "switcherActive": false
	    };
	    return _this;
	  }

	  _createClass(LoginPanel, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      var defaultUser = this.findDefaultUser();
	      var defaultSession = this.findDefaultSession(defaultUser);

	      this.setState({
	        "activeUser": defaultUser,
	        "activeSession": defaultSession
	      });

	      // Wait two seconds, so that the clock can render first and they fade in sequentially rather than in parallel.
	      setTimeout(function () {
	        _this2.setDate();

	        var date = _this2.state.date;
	        date.initialized = true;

	        _this2.setState({
	          "date": date
	        });
	      }, 2000);

	      // Define functions required in the global scope by LightDM.
	      window.show_prompt = function (text, type) {
	        if (type === "text") {
	          window.notifications.generate(text);
	        } else if (type === "password") {
	          window.lightdm.respond(_this2.state.password);
	        }
	      };
	      window.show_message = function (text, type) {
	        window.notifications.generate(text, type);
	      };
	      window.authentication_complete = function () {
	        if (window.lightdm.is_authenticated) {
	          window.lightdm.start_session_sync(_this2.state.activeSession.key);
	        } else {
	          _this2.rejectPassword();
	        }
	      };
	      window.autologin_timer_expired = function () {
	        window.notifications.generate("Autologin expired.");
	      };
	    }
	  }, {
	    key: 'findDefaultUser',
	    value: function findDefaultUser() {
	      if (window.lightdm.lock_hint === true) {
	        return window.lightdm.users.filter(function (user) {
	          return user.logged_in;
	        })[0];
	      } else {
	        if (this.state.activeUser !== undefined) {
	          return this.state.activeUser;
	        } else if (window.lightdm.select_user !== undefined && window.lightdm.select_user !== null) {
	          window.lightdm.users.filter(function (user) {
	            return user.name === window.lightdm.select_user;
	          })[0];
	        } else {
	          return window.lightdm.users[0];
	        }
	      }
	    }
	  }, {
	    key: 'findDefaultSession',
	    value: function findDefaultSession(user) {
	      return this.findSession(window.lightdm.default_session) || this.findSession(user.session) || window.lightdm.sessions[0];
	    }
	  }, {
	    key: 'findSession',
	    value: function findSession(sessionName) {
	      if (sessionName === undefined) {
	        return false;
	      }
	      return window.lightdm.sessions.filter(function (session) {
	        return session.name.toLowerCase() === sessionName.toLowerCase() || session.key.toLowerCase() === sessionName.toLowerCase();
	      })[0];
	    }
	  }, {
	    key: 'handleDropdownClick',
	    value: function handleDropdownClick(event) {
	      this.setState({
	        "dropdownActive": true
	      });
	    }
	  }, {
	    key: 'handleDropdownLeave',
	    value: function handleDropdownLeave(event) {
	      this.setState({
	        "dropdownActive": false
	      });
	    }
	  }, {
	    key: 'handleLoginSubmit',
	    value: function handleLoginSubmit(event) {
	      event.preventDefault();

	      if (window.debug === false) {
	        window.lightdm.authenticate(this.state.activeUser.name);
	      } else {
	        if (this.state.password.toLowerCase() !== "password") {
	          this.rejectPassword();
	        } else {
	          window.notifications.generate("You are now logged in.", 'success');
	          this.setState({
	            "password": ""
	          });
	        }
	      }
	    }
	  }, {
	    key: 'handleSwitcherClick',
	    value: function handleSwitcherClick(event) {
	      var _this3 = this;

	      if (window.lightdm.users.length < 2) {
	        window.notifications.generate("You are the only user that is able to log in on this system.", 'error');
	        return false;
	      } else if (window.lightdm.users.length === 2) {
	        // No point in showing them the switcher if there is only one other user. Switch immediately.
	        var otherUser = window.lightdm.users.filter(function (user) {
	          return user.name !== _this3.state.activeUser.name;
	        })[0];

	        this.setActiveUser(otherUser, true);
	        window.notifications.generate("User has been automatically switched to the only other user on this system.");
	      } else {
	        this.setState({
	          "switcherActive": true
	        });
	      }
	    }
	  }, {
	    key: 'handlePasswordInput',
	    value: function handlePasswordInput(event) {
	      this.setState({
	        "password": event.target.value
	      });
	    }
	  }, {
	    key: 'setActiveSession',
	    value: function setActiveSession(session) {
	      if ((typeof session === 'undefined' ? 'undefined' : _typeof(session)) === _typeof(String())) {
	        session = this.findSession(session);
	      }

	      this.setState({
	        "activeSession": session,
	        "dropdownActive": false
	      });
	    }
	  }, {
	    key: 'setActiveUser',
	    value: function setActiveUser(user, isBypass) {
	      var _this4 = this;

	      this.setState({
	        "activeUser": user,
	        "switcherActive": false
	      });

	      if (isBypass === false || isBypass === undefined) {
	        this.setState({
	          "fadeIn": true
	        });

	        setTimeout(function () {
	          _this4.setState({
	            "fadeIn": false
	          });
	        }, FADE_IN_DURATION);
	      }
	    }
	  }, {
	    key: 'rejectPassword',
	    value: function rejectPassword() {
	      var _this5 = this;

	      if (this.state.passwordFailed === false) {
	        window.notifications.generate("Password incorrect, please try again.", 'error');

	        this.setState({
	          "password": "",
	          "passwordFailed": true
	        });

	        setTimeout(function () {
	          _this5.setState({
	            "passwordFailed": false
	          });
	        }, ERROR_SHAKE_DURATION);
	      }
	    }
	  }, {
	    key: 'setDate',
	    value: function setDate() {
	      var _this6 = this;

	      var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	      var now = new Date();

	      var dayValue = now.getDate();
	      var dayName = dayNames[now.getUTCDay()];
	      var monthValue = now.getMonth();
	      var monthName = monthNames[monthValue];

	      var formattedDayValue = void 0;

	      if (4 <= dayValue <= 20 || 24 <= dayValue <= 30) {
	        formattedDayValue = dayValue + "th";
	      } else {
	        formattedDayValue = dayValue + ["st", "nd", "rd"][dayValue % 10 - 1];
	      }

	      var formattedDateString = '<em>' + dayName + '</em>, the <em>' + formattedDayValue + '</em> of <em>' + monthName + '</em>';

	      var date = this.state.date;
	      date.formattedString = formattedDateString;
	      date.initialized = true;

	      date.dayName = dayName;
	      date.dayValue = dayValue;
	      date.formattedDayValue = formattedDayValue;
	      date.monthName = monthName;
	      date.monthValue = monthValue;

	      this.setState({
	        "date": date
	      });

	      setTimeout(function () {
	        _this6.setDate();
	      }, 30 * 1000);
	    }
	  }, {
	    key: 'generateDateString',
	    value: function generateDateString() {
	      var date = this.state.date;

	      var dateString = bp0([bp1(date.dayName), ', the ', bp2(date.formattedDayValue), ' of ', bp3(date.monthName)]);

	      return dateString;
	    }
	  }, {
	    key: 'generatePasswordField',
	    value: function generatePasswordField() {
	      var classes = ['user-password'];

	      if (this.state.passwordFailed === true) {
	        classes.push('error');
	      }

	      return bp4(classes.join(' '), {
	        type: 'password',
	        placeholder: '*******************',
	        value: this.state.password
	      }, {
	        onchange: this.handlePasswordInput.bind(this)
	      });
	    }
	  }, {
	    key: 'generateSessionDropdown',
	    value: function generateSessionDropdown() {
	      var _this7 = this;

	      // Sort by active, then alphabetical. 
	      // Doing this requires using sort in reverse.
	      var rows = window.lightdm.sessions.sort(function (a, b) {
	        return a.name.toUpperCase() > b.name.toUpperCase();
	      }).sort(function (a, b) {
	        return b.key.toLowerCase() === _this7.state.activeSession.key.toLowerCase() ? 1 : -1;
	      }).map(function (session) {
	        var classes = ["dropdown-item"];
	        var eventHandler = _this7.setActiveSession.bind(_this7, session.key);

	        if (session.key === _this7.state.activeSession.key) {
	          eventHandler = _this7.handleDropdownClick.bind(_this7);
	          classes.push("active");
	        }

	        return bp5(session.key, classes.join(' '), {
	          onclick: eventHandler
	        }, session.name);
	      });

	      var classes = ['dropdown', 'user-session'];

	      if (this.state.dropdownActive) {
	        classes.push('active');
	      }

	      return bp6(classes.join(' '), {
	        onmouseleave: this.handleDropdownLeave.bind(this)
	      }, rows);
	    }
	  }, {
	    key: 'generateSwitchUserButton',
	    value: function generateSwitchUserButton() {
	      var classes = ['left'];

	      if (window.lightdm.users.length < 2) {
	        classes.push("disabled");
	      }

	      return bp7(classes.join(' '), {
	        onclick: this.handleSwitcherClick.bind(this)
	      }, 'SWITCH USER');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // Do as I say, not as I do. 
	      // Having to generate this many sections is a strong indicator that they should be sub-components instead, 
	      // but they are remaining here for good reason. As a login screen, fewer dependencies to load is preferable to readability.
	      var loginPanelClasses = ['login-panel-main'];
	      var dateClasses = ["right", "date"];
	      var dateString = this.generateDateString();

	      if (this.state.fadeIn === true) {
	        loginPanelClasses.push('fadein');
	      }

	      if (this.state.switcherActive === true) {
	        loginPanelClasses.push('fadeout');
	      }

	      if (this.state.date.initialized === true) {
	        dateClasses.push("loaded");
	      }

	      var passwordField = this.generatePasswordField();
	      var sessionDropdown = this.generateSessionDropdown();
	      var switchUserButton = this.generateSwitchUserButton();

	      return bp8([bp9(loginPanelClasses.join(' '), [bp10(bp11(bp12(bp13({
	        src: this.state.activeUser.image
	      })))), bp14({
	        onsubmit: this.handleLoginSubmit.bind(this)
	      }, [bp15(this.state.activeUser.display_name), bp16(passwordField), bp17(bp18([bp19(sessionDropdown), bp20(bp21())]))]), bp22([switchUserButton, bp23(dateClasses.join(' '), dateString)])]), bp24(_UserSwitcher2.default, {
	        active: this.state.switcherActive,
	        activeUser: this.state.activeUser,
	        date: [this.state.date.initialized, this.generateDateString()],
	        setActiveUser: this.setActiveUser.bind(this)
	      })]);
	    }
	  }]);

	  return LoginPanel;
	}(_infernoComponent2.default);

	exports.default = LoginPanel;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _inferno = __webpack_require__(1);

	var _inferno2 = _interopRequireDefault(_inferno);

	var _infernoComponent = __webpack_require__(2);

	var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// I hope nobody who uses this actually has to switch users regularly, this is terrible.
	var FADE_DURATION = 200;

	var bp6 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'real-name',
	  children: {
	    arg: 0
	  }
	});

	var bp5 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'username',
	  children: {
	    arg: 0
	  }
	});

	var bp4 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'avatar-name',
	  children: {
	    arg: 0
	  }
	});

	var bp3 = _inferno2.default.createBlueprint({
	  tag: 'img',
	  className: 'user-avatar',
	  attrs: {
	    arg: 0
	  }
	});

	var bp2 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'avatar-mask',
	  children: {
	    arg: 0
	  }
	});

	var bp1 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'avatar-background',
	  children: {
	    arg: 0
	  }
	});

	var bp0 = _inferno2.default.createBlueprint({
	  tag: 'li',
	  className: {
	    arg: 0
	  },
	  events: {
	    arg: 1
	  },
	  children: {
	    arg: 2
	  }
	});

	var bp13 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'real-name',
	  children: {
	    arg: 0
	  }
	});

	var bp12 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'username',
	  children: {
	    arg: 0
	  }
	});

	var bp11 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'avatar-name',
	  children: {
	    arg: 0
	  }
	});

	var bp10 = _inferno2.default.createBlueprint({
	  tag: 'img',
	  className: 'user-avatar',
	  attrs: {
	    arg: 0
	  }
	});

	var bp9 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'avatar-mask',
	  children: {
	    arg: 0
	  }
	});

	var bp8 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'avatar-background',
	  children: {
	    arg: 0
	  }
	});

	var bp7 = _inferno2.default.createBlueprint({
	  tag: 'li',
	  className: 'avatar-container previous',
	  events: {
	    arg: 0
	  },
	  children: {
	    arg: 1
	  }
	});

	var bp20 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'real-name',
	  children: {
	    arg: 0
	  }
	});

	var bp19 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'username',
	  children: {
	    arg: 0
	  }
	});

	var bp18 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'avatar-name',
	  children: {
	    arg: 0
	  }
	});

	var bp17 = _inferno2.default.createBlueprint({
	  tag: 'img',
	  className: 'user-avatar',
	  attrs: {
	    arg: 0
	  }
	});

	var bp16 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'avatar-mask',
	  children: {
	    arg: 0
	  }
	});

	var bp15 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'avatar-background',
	  children: {
	    arg: 0
	  }
	});

	var bp14 = _inferno2.default.createBlueprint({
	  tag: 'li',
	  className: 'avatar-container next',
	  events: {
	    arg: 0
	  },
	  children: {
	    arg: 1
	  }
	});

	var bp21 = _inferno2.default.createBlueprint({
	  tag: 'ul',
	  className: 'avatar-slider',
	  children: {
	    arg: 0
	  }
	});

	var bp28 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: {
	    arg: 0
	  },
	  children: {
	    arg: 1
	  }
	});

	var bp27 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'left',
	  children: {
	    arg: 0
	  }
	});

	var bp26 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'bottom',
	  events: {
	    arg: 0
	  },
	  children: {
	    arg: 1
	  }
	});

	var bp25 = _inferno2.default.createBlueprint({
	  tag: 'em',
	  children: {
	    arg: 0
	  }
	});

	var bp24 = _inferno2.default.createBlueprint({
	  tag: 'em',
	  children: {
	    arg: 0
	  }
	});

	var bp23 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: 'header',
	  children: {
	    arg: 0
	  }
	});

	var bp22 = _inferno2.default.createBlueprint({
	  tag: 'div',
	  className: {
	    arg: 0
	  },
	  children: {
	    arg: 1
	  }
	});

	var UserSwitcher = function (_Component) {
	  _inherits(UserSwitcher, _Component);

	  function UserSwitcher(props) {
	    _classCallCheck(this, UserSwitcher);

	    var _this = _possibleConstructorReturn(this, (UserSwitcher.__proto__ || Object.getPrototypeOf(UserSwitcher)).call(this, props));

	    _this.state = {
	      "fadeOut": false,
	      "selectedUser": _this.props.activeUser,
	      "selectedUserIndex": window.lightdm.users.indexOf(_this.props.activeUser)
	    };
	    return _this;
	  }

	  _createClass(UserSwitcher, [{
	    key: 'handleBackButton',
	    value: function handleBackButton(event) {
	      var _this2 = this;

	      this.props.setActiveUser(this.state.selectedUser);

	      this.setState({
	        "fadeOut": true
	      });

	      setTimeout(function () {
	        _this2.setState({
	          "fadeOut": false
	        });
	      }, FADE_DURATION);
	    }
	  }, {
	    key: 'handleUserClick',
	    value: function handleUserClick(index) {
	      this.setState({
	        "selectedUser": window.lightdm.users[index],
	        "selectedUserIndex": index
	      });
	    }
	  }, {
	    key: 'generateUserList',
	    value: function generateUserList() {
	      var _this3 = this;

	      var activeIndex = this.state.selectedUserIndex;

	      var avatars = window.lightdm.users.map(function (user, index) {
	        var classes = ['avatar-container'];

	        if (index === activeIndex) {
	          classes.push('active');
	        }

	        if (index === activeIndex - 1) {
	          classes.push('previous');
	        }

	        if (index === activeIndex + 1) {
	          classes.push('next');
	        }

	        return bp0(classes.join(' '), {
	          onclick: _this3.handleUserClick.bind(_this3, index)
	        }, [bp1(bp2(bp3({
	          src: user.image
	        }))), bp4([bp5(user.display_name), bp6(user.real_name)])]);
	      });

	      // Very hacky. Add an extra copy of the last element to the beginning of the list 
	      // if the first element in the list is currently selected.
	      if (activeIndex === 0) {
	        var user = window.lightdm.users[window.lightdm.users.length - 1];
	        avatars.splice(0, 0, bp7({
	          onclick: this.handleUserClick.bind(this, window.lightdm.users.length - 1)
	        }, [bp8(bp9(bp10({
	          src: user.image
	        }))), bp11([bp12(user.display_name), bp13(user.real_name)])]));
	      }

	      // Very hacky. Add an extra copy of the first element to the end of the list 
	      // if the last element in the list is currently selected.
	      if (activeIndex === window.lightdm.users.length - 1) {
	        var _user = window.lightdm.users[0];
	        avatars.push(bp14({
	          onclick: this.handleUserClick.bind(this, 0)
	        }, [bp15(bp16(bp17({
	          src: _user.image
	        }))), bp18([bp19(_user.display_name), bp20(_user.real_name)])]));
	      }

	      return bp21(avatars);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var classes = ['login-panel-switcher'];
	      var dateClasses = ['right', 'date'];

	      var userList = this.generateUserList();
	      var userCount = window.lightdm.users.length;

	      var _props$date = _slicedToArray(this.props.date, 2);

	      var dateInitialized = _props$date[0];
	      var dateString = _props$date[1];


	      if (this.props.active === true) {
	        classes.push("active");
	      } else if (this.state.fadeOut === true) {
	        classes.push("fadeout");
	      }

	      if (dateInitialized === true) {
	        dateClasses.push('loaded');
	      }

	      return bp22(classes.join(' '), [bp23(['User ', bp24(this.state.selectedUserIndex + 1), ' of ', bp25(userCount)]), userList, bp26({
	        onclick: this.handleBackButton.bind(this)
	      }, [bp27('BACK'), bp28(dateClasses.join(' '), dateString)])]);
	    }
	  }]);

	  return UserSwitcher;
	}(_infernoComponent2.default);

	exports.default = UserSwitcher;

/***/ }
/******/ ]);