/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toArray = toArray;
exports.isStatefulComponent = isStatefulComponent;
exports.isStringOrNumber = isStringOrNumber;
exports.isNullOrUndef = isNullOrUndef;
exports.isInvalid = isInvalid;
exports.isFunction = isFunction;
exports.isAttrAnEvent = isAttrAnEvent;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isNull = isNull;
exports.isTrue = isTrue;
exports.isUndefined = isUndefined;
exports.isObject = isObject;
exports.throwError = throwError;
exports.warning = warning;
exports.Lifecycle = Lifecycle;
exports.copyPropsTo = copyPropsTo;
var NO_OP = exports.NO_OP = '$NO_OP';
var ERROR_MSG = exports.ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
var isBrowser = exports.isBrowser = typeof window !== 'undefined' && window.document;
function toArray(children) {
    return isArray(children) ? children : children ? [children] : children;
}
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = exports.isArray = Array.isArray;
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
function isStringOrNumber(obj) {
    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    return type === 'string' || type === 'number';
}
function isNullOrUndef(obj) {
    return isUndefined(obj) || isNull(obj);
}
function isInvalid(obj) {
    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
}
function isFunction(obj) {
    return typeof obj === 'function';
}
function isAttrAnEvent(attr) {
    return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
}
function isString(obj) {
    return typeof obj === 'string';
}
function isNumber(obj) {
    return typeof obj === 'number';
}
function isNull(obj) {
    return obj === null;
}
function isTrue(obj) {
    return obj === true;
}
function isUndefined(obj) {
    return obj === undefined;
}
function isObject(o) {
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error('Inferno Error: ' + message);
}
function warning(message) {
    console.warn(message);
}
function Lifecycle() {
    this.listeners = [];
}
Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger() {
    for (var i = 0, len = this.listeners.length; i < len; i++) {
        this.listeners[i]();
    }
};
function copyPropsTo(copyFrom, copyTo) {
    for (var prop in copyFrom) {
        if (isUndefined(copyTo[prop])) {
            copyTo[prop] = copyFrom[prop];
        }
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.internal_normalize = exports.internal_isUnitlessNumber = exports.options = exports.createRenderer = exports.findDOMNode = exports.render = exports.EMPTY_OBJ = exports.NO_OP = exports.cloneVNode = exports.createVNode = exports.linkEvent = exports.version = undefined;

var _constants = __webpack_require__(10);

Object.defineProperty(exports, 'internal_isUnitlessNumber', {
    enumerable: true,
    get: function get() {
        return _constants.isUnitlessNumber;
    }
});

var _normalization = __webpack_require__(15);

Object.defineProperty(exports, 'internal_normalize', {
    enumerable: true,
    get: function get() {
        return _normalization.normalize;
    }
});

var _infernoShared = __webpack_require__(0);

var _VNodes = __webpack_require__(6);

var _linkEvent = __webpack_require__(25);

var _linkEvent2 = _interopRequireDefault(_linkEvent);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

var _rendering = __webpack_require__(8);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV !== 'production') {
    var testFunc = function testFn() {};
    if ((testFunc.name || testFunc.toString()).indexOf('testFn') === -1) {
        (0, _infernoShared.warning)('It looks like you\'re using a minified copy of the development build ' + 'of Inferno. When deploying Inferno apps to production, make sure to use ' + 'the production build which skips development warnings and is faster. ' + 'See http://infernojs.org for more details.');
    }
}
// This will be replaced by rollup
var version = exports.version = 'VERSION';
// we duplicate it so it plays nicely with different module loading systems
exports.default = {
    linkEvent: _linkEvent2.default,
    // core shapes
    createVNode: _VNodes.createVNode,
    // cloning
    cloneVNode: _VNodes.cloneVNode,
    // used to shared common items between Inferno libs
    NO_OP: _infernoShared.NO_OP,
    EMPTY_OBJ: _utils.EMPTY_OBJ,
    // DOM
    render: _rendering.render,
    findDOMNode: _rendering.findDOMNode,
    createRenderer: _rendering.createRenderer,
    options: _options2.default,
    version: version
};
exports.linkEvent = _linkEvent2.default;
exports.createVNode = _VNodes.createVNode;
exports.cloneVNode = _VNodes.cloneVNode;
exports.NO_OP = _infernoShared.NO_OP;
exports.EMPTY_OBJ = _utils.EMPTY_OBJ;
exports.render = _rendering.render;
exports.findDOMNode = _rendering.findDOMNode;
exports.createRenderer = _rendering.createRenderer;
exports.options = _options2.default;
// Internal stuff that only core inferno-* packages use
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EMPTY_OBJ = undefined;
exports.createClassComponentInstance = createClassComponentInstance;
exports.replaceLastChildAndUnmount = replaceLastChildAndUnmount;
exports.replaceVNode = replaceVNode;
exports.createFunctionalComponentInput = createFunctionalComponentInput;
exports.setTextContent = setTextContent;
exports.updateTextContent = updateTextContent;
exports.appendChild = appendChild;
exports.insertOrAppend = insertOrAppend;
exports.documentCreateElement = documentCreateElement;
exports.replaceWithNewNode = replaceWithNewNode;
exports.replaceChild = replaceChild;
exports.removeChild = removeChild;
exports.removeAllChildren = removeAllChildren;
exports.removeChildren = removeChildren;
exports.isKeyed = isKeyed;

var _infernoShared = __webpack_require__(0);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

var _VNodes = __webpack_require__(6);

var _constants = __webpack_require__(10);

var _mounting = __webpack_require__(11);

var _patching = __webpack_require__(7);

var _rendering = __webpack_require__(8);

var _unmounting = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
var EMPTY_OBJ = exports.EMPTY_OBJ = {};
if (process.env.NODE_ENV !== 'production') {
    Object.freeze(EMPTY_OBJ);
}
function createClassComponentInstance(vNode, Component, props, context, isSVG) {
    if ((0, _infernoShared.isUndefined)(context)) {
        context = EMPTY_OBJ; // Context should not be mutable
    }
    var instance = new Component(props, context);
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    instance._patch = _patching.patch;
    if (_options2.default.findDOMNodeEnabled) {
        instance._componentToDOMNodeMap = _rendering.componentToDOMNodeMap;
    }
    instance._unmounted = false;
    instance._pendingSetState = true;
    instance._isSVG = isSVG;
    if ((0, _infernoShared.isFunction)(instance.componentWillMount)) {
        instance.componentWillMount();
    }
    var childContext = instance.getChildContext();
    if ((0, _infernoShared.isNullOrUndef)(childContext)) {
        instance._childContext = context;
    } else {
        instance._childContext = Object.assign({}, context, childContext);
    }
    _options2.default.beforeRender && _options2.default.beforeRender(instance);
    var input = instance.render(props, instance.state, context);
    _options2.default.afterRender && _options2.default.afterRender(instance);
    if ((0, _infernoShared.isArray)(input)) {
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.throwError)('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
        }
        (0, _infernoShared.throwError)();
    } else if ((0, _infernoShared.isInvalid)(input)) {
        input = (0, _VNodes.createVoidVNode)();
    } else if ((0, _infernoShared.isStringOrNumber)(input)) {
        input = (0, _VNodes.createTextVNode)(input);
    } else {
        if (input.dom) {
            input = (0, _VNodes.cloneVNode)(input);
        }
        if (input.flags & 28 /* Component */) {
                // if we have an input that is also a component, we run into a tricky situation
                // where the root vNode needs to always have the correct DOM entry
                // so we break monomorphism on our input and supply it our vNode as parentVNode
                // we can optimise this in the future, but this gets us out of a lot of issues
                input.parentVNode = vNode;
            }
    }
    instance._pendingSetState = false;
    instance._lastInput = input;
    return instance;
}
function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
    replaceVNode(parentDom, (0, _mounting.mount)(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
}
function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
    var shallowUnmount = false;
    // we cannot cache nodeType here as vNode might be re-assigned below
    if (vNode.flags & 28 /* Component */) {
            // if we are accessing a stateful or stateless component, we want to access their last rendered input
            // accessing their DOM node is not useful to us here
            (0, _unmounting.unmount)(vNode, null, lifecycle, false, isRecycling);
            vNode = vNode.children._lastInput || vNode.children;
            shallowUnmount = true;
        }
    replaceChild(parentDom, dom, vNode.dom);
    (0, _unmounting.unmount)(vNode, null, lifecycle, false, isRecycling);
}
function createFunctionalComponentInput(vNode, component, props, context) {
    var input = component(props, context);
    if ((0, _infernoShared.isArray)(input)) {
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.throwError)('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
        }
        (0, _infernoShared.throwError)();
    } else if ((0, _infernoShared.isInvalid)(input)) {
        input = (0, _VNodes.createVoidVNode)();
    } else if ((0, _infernoShared.isStringOrNumber)(input)) {
        input = (0, _VNodes.createTextVNode)(input);
    } else {
        if (input.dom) {
            input = (0, _VNodes.cloneVNode)(input);
        }
        if (input.flags & 28 /* Component */) {
                // if we have an input that is also a component, we run into a tricky situation
                // where the root vNode needs to always have the correct DOM entry
                // so we break monomorphism on our input and supply it our vNode as parentVNode
                // we can optimise this in the future, but this gets us out of a lot of issues
                input.parentVNode = vNode;
            }
    }
    return input;
}
function setTextContent(dom, text) {
    if (text !== '') {
        dom.textContent = text;
    } else {
        dom.appendChild(document.createTextNode(''));
    }
}
function updateTextContent(dom, text) {
    dom.firstChild.nodeValue = text;
}
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
function insertOrAppend(parentDom, newNode, nextNode) {
    if ((0, _infernoShared.isNullOrUndef)(nextNode)) {
        appendChild(parentDom, newNode);
    } else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(_constants.svgNS, tag);
    } else {
        return document.createElement(tag);
    }
}
function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    (0, _unmounting.unmount)(lastNode, null, lifecycle, false, isRecycling);
    var dom = (0, _mounting.mount)(nextNode, null, lifecycle, context, isSVG);
    nextNode.dom = dom;
    replaceChild(parentDom, dom, lastNode.dom);
}
function replaceChild(parentDom, nextDom, lastDom) {
    if (!parentDom) {
        parentDom = lastDom.parentNode;
    }
    parentDom.replaceChild(nextDom, lastDom);
}
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
function removeAllChildren(dom, children, lifecycle, isRecycling) {
    dom.textContent = '';
    if (!_options2.default.recyclingEnabled || _options2.default.recyclingEnabled && !isRecycling) {
        removeChildren(null, children, lifecycle, isRecycling);
    }
}
function removeChildren(dom, children, lifecycle, isRecycling) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        if (!(0, _infernoShared.isInvalid)(child)) {
            (0, _unmounting.unmount)(child, dom, lifecycle, true, isRecycling);
        }
    }
}
function isKeyed(lastChildren, nextChildren) {
    return nextChildren.length && !(0, _infernoShared.isNullOrUndef)(nextChildren[0]) && !(0, _infernoShared.isNullOrUndef)(nextChildren[0].key) && lastChildren.length && !(0, _infernoShared.isNullOrUndef)(lastChildren[0]) && !(0, _infernoShared.isNullOrUndef)(lastChildren[0].key);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
function defaultClearTimeout() {
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
})();
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
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
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
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
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
    while (len) {
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

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    recyclingEnabled: false,
    findDOMNodeEnabled: false,
    roots: null,
    createVNode: null,
    beforeRender: null,
    afterRender: null,
    afterMount: null,
    afterUpdate: null,
    beforeUnmount: null
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Make sure u use EMPTY_OBJ from 'inferno', otherwise it'll be a different reference


var _inferno = __webpack_require__(1);

var _infernoShared = __webpack_require__(23);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var noOp = _infernoShared.ERROR_MSG;
if (process.env.NODE_ENV !== 'production') {
    noOp = 'Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.';
}
var componentCallbackQueue = new Map();
// when a components root VNode is also a component, we can run into issues
// this will recursively look for vNode.parentNode if the VNode is a component
function updateParentComponentVNodes(vNode, dom) {
    if (vNode.flags & 28 /* Component */) {
            var parentVNode = vNode.parentVNode;
            if (parentVNode) {
                parentVNode.dom = dom;
                updateParentComponentVNodes(parentVNode, dom);
            }
        }
}
// this is in shapes too, but we don't want to import from shapes as it will pull in a duplicate of createVNode
function createVoidVNode() {
    return (0, _inferno.createVNode)(4096 /* Void */);
}
function createTextVNode(text) {
    return (0, _inferno.createVNode)(1 /* Text */, null, null, text);
}
function addToQueue(component, force, callback) {
    // TODO this function needs to be revised and improved on
    var queue = componentCallbackQueue.get(component);
    if (!queue) {
        queue = [];
        componentCallbackQueue.set(component, queue);
        Promise.resolve().then(function () {
            componentCallbackQueue.delete(component);
            applyState(component, force, function () {
                for (var i = 0, len = queue.length; i < len; i++) {
                    queue[i]();
                }
            });
        });
    }
    if (callback) {
        queue.push(callback);
    }
}
function queueStateChanges(component, newState, callback, sync) {
    if ((0, _infernoShared.isFunction)(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    for (var stateKey in newState) {
        component._pendingState[stateKey] = newState[stateKey];
    }
    if (!component._pendingSetState && _infernoShared.isBrowser) {
        if (sync || component._blockRender) {
            component._pendingSetState = true;
            applyState(component, false, callback);
        } else {
            addToQueue(component, false, callback);
        }
    } else {
        component.state = Object.assign({}, component.state, component._pendingState);
        component._pendingState = {};
    }
}
function applyState(component, force, callback) {
    if ((!component._deferSetState || force) && !component._blockRender && !component._unmounted) {
        component._pendingSetState = false;
        var pendingState = component._pendingState;
        var prevState = component.state;
        var nextState = Object.assign({}, prevState, pendingState);
        var props = component.props;
        var context = component.context;
        component._pendingState = {};
        var nextInput = component._updateComponent(prevState, nextState, props, props, context, force, true);
        var didUpdate = true;
        if ((0, _infernoShared.isInvalid)(nextInput)) {
            nextInput = createVoidVNode();
        } else if (nextInput === _infernoShared.NO_OP) {
            nextInput = component._lastInput;
            didUpdate = false;
        } else if ((0, _infernoShared.isStringOrNumber)(nextInput)) {
            nextInput = createTextVNode(nextInput);
        } else if ((0, _infernoShared.isArray)(nextInput)) {
            if (process.env.NODE_ENV !== 'production') {
                (0, _infernoShared.throwError)('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
            }
            (0, _infernoShared.throwError)();
        }
        var lastInput = component._lastInput;
        var vNode = component._vNode;
        var parentDom = lastInput.dom && lastInput.dom.parentNode || (lastInput.dom = vNode.dom);
        component._lastInput = nextInput;
        if (didUpdate) {
            var subLifecycle = component._lifecycle;
            if (!subLifecycle) {
                subLifecycle = new _infernoShared.Lifecycle();
            } else {
                subLifecycle.listeners = [];
            }
            component._lifecycle = subLifecycle;
            var childContext = component.getChildContext();
            if ((0, _infernoShared.isNullOrUndef)(childContext)) {
                childContext = component._childContext;
            } else {
                childContext = Object.assign({}, context, component._childContext, childContext);
            }
            component._patch(lastInput, nextInput, parentDom, subLifecycle, childContext, component._isSVG, false);
            subLifecycle.trigger();
            component.componentDidUpdate(props, prevState);
            _inferno.options.afterUpdate && _inferno.options.afterUpdate(vNode);
        }
        var dom = vNode.dom = nextInput.dom;
        var componentToDOMNodeMap = component._componentToDOMNodeMap;
        componentToDOMNodeMap && componentToDOMNodeMap.set(component, nextInput.dom);
        updateParentComponentVNodes(vNode, dom);
        if (!(0, _infernoShared.isNullOrUndef)(callback)) {
            callback();
        }
    } else if (!(0, _infernoShared.isNullOrUndef)(callback)) {
        callback();
    }
}

var Component = function () {
    function Component(props, context) {
        _classCallCheck(this, Component);

        this.state = {};
        this.refs = {};
        this._blockRender = false;
        this._ignoreSetState = false;
        this._blockSetState = false;
        this._deferSetState = false;
        this._pendingSetState = false;
        this._syncSetState = true;
        this._pendingState = {};
        this._lastInput = null;
        this._vNode = null;
        this._unmounted = true;
        this._lifecycle = null;
        this._childContext = null;
        this._patch = null;
        this._isSVG = false;
        this._componentToDOMNodeMap = null;
        /** @type {object} */
        this.props = props || _inferno.EMPTY_OBJ;
        /** @type {object} */
        this.context = context || _inferno.EMPTY_OBJ; // context should not be mutable
    }

    _createClass(Component, [{
        key: 'render',
        value: function render(nextProps, nextState, nextContext) {}
    }, {
        key: 'forceUpdate',
        value: function forceUpdate(callback) {
            if (this._unmounted) {
                return;
            }
            _infernoShared.isBrowser && applyState(this, true, callback);
        }
    }, {
        key: 'setState',
        value: function setState(newState, callback) {
            if (this._unmounted) {
                return;
            }
            if (!this._blockSetState) {
                if (!this._ignoreSetState) {
                    queueStateChanges(this, newState, callback, this._syncSetState);
                }
            } else {
                if (process.env.NODE_ENV !== 'production') {
                    (0, _infernoShared.throwError)('cannot update state via setState() in componentWillUpdate().');
                }
                (0, _infernoShared.throwError)();
            }
        }
    }, {
        key: 'setStateSync',
        value: function setStateSync(newState) {
            if (this._unmounted) {
                return;
            }
            if (!this._blockSetState) {
                if (!this._ignoreSetState) {
                    queueStateChanges(this, newState, null, true);
                }
            } else {
                if (process.env.NODE_ENV !== 'production') {
                    (0, _infernoShared.throwError)('cannot update state via setState() in componentWillUpdate().');
                }
                (0, _infernoShared.throwError)();
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState, prevContext) {}
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, context) {
            return true;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, context) {}
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState, nextContext) {}
    }, {
        key: 'getChildContext',
        value: function getChildContext() {}
    }, {
        key: '_updateComponent',
        value: function _updateComponent(prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
            if (this._unmounted === true) {
                if (process.env.NODE_ENV !== 'production') {
                    (0, _infernoShared.throwError)(noOp);
                }
                (0, _infernoShared.throwError)();
            }
            if (prevProps !== nextProps || nextProps === _inferno.EMPTY_OBJ || prevState !== nextState || force) {
                if (prevProps !== nextProps || nextProps === _inferno.EMPTY_OBJ) {
                    if (!fromSetState) {
                        this._blockRender = true;
                        this.componentWillReceiveProps(nextProps, context);
                        this._blockRender = false;
                    }
                    if (this._pendingSetState) {
                        nextState = Object.assign({}, nextState, this._pendingState);
                        this._pendingSetState = false;
                        this._pendingState = {};
                    }
                }
                var shouldUpdate = this.shouldComponentUpdate(nextProps, nextState, context);
                if (shouldUpdate !== false || force) {
                    this._blockSetState = true;
                    this.componentWillUpdate(nextProps, nextState, context);
                    this._blockSetState = false;
                    this.props = nextProps;
                    var state = this.state = nextState;
                    this.context = context;
                    _inferno.options.beforeRender && _inferno.options.beforeRender(this);
                    var render = this.render(nextProps, state, context);
                    _inferno.options.afterRender && _inferno.options.afterRender(this);
                    return render;
                }
            }
            return _infernoShared.NO_OP;
        }
    }]);

    return Component;
}();

exports.default = Component;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createVNode = createVNode;
exports.cloneVNode = cloneVNode;
exports.createVoidVNode = createVoidVNode;
exports.createTextVNode = createTextVNode;
exports.isVNode = isVNode;

var _infernoShared = __webpack_require__(0);

var _normalization = __webpack_require__(15);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createVNode(flags, type, props, children, events, key, ref, noNormalise) {
    if (flags & 16 /* ComponentUnknown */) {
            flags = (0, _infernoShared.isStatefulComponent)(type) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
        }
    var vNode = {
        children: (0, _infernoShared.isUndefined)(children) ? null : children,
        dom: null,
        events: events || null,
        flags: flags,
        key: (0, _infernoShared.isUndefined)(key) ? null : key,
        props: props || null,
        ref: ref || null,
        type: type
    };
    if (!noNormalise) {
        (0, _normalization.normalize)(vNode);
    }
    if (_options2.default.createVNode) {
        _options2.default.createVNode(vNode);
    }
    return vNode;
}
function cloneVNode(vNodeToClone, props) {
    for (var _len = arguments.length, _children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        _children[_key - 2] = arguments[_key];
    }

    var children = _children;
    if (_children.length > 0 && !(0, _infernoShared.isNull)(_children[0])) {
        if (!props) {
            props = {};
        }
        if (_children.length === 1) {
            children = _children[0];
        }
        if ((0, _infernoShared.isUndefined)(props.children)) {
            props.children = children;
        } else {
            if ((0, _infernoShared.isArray)(children)) {
                if ((0, _infernoShared.isArray)(props.children)) {
                    props.children = props.children.concat(children);
                } else {
                    props.children = [props.children].concat(children);
                }
            } else {
                if ((0, _infernoShared.isArray)(props.children)) {
                    props.children.push(children);
                } else {
                    props.children = [props.children];
                    props.children.push(children);
                }
            }
        }
    }
    children = null;
    var newVNode = void 0;
    if ((0, _infernoShared.isArray)(vNodeToClone)) {
        var tmpArray = [];
        for (var i = 0, len = vNodeToClone.length; i < len; i++) {
            tmpArray.push(cloneVNode(vNodeToClone[i]));
        }
        newVNode = tmpArray;
    } else {
        var flags = vNodeToClone.flags;
        var events = vNodeToClone.events || props && props.events || null;
        var key = !(0, _infernoShared.isNullOrUndef)(vNodeToClone.key) ? vNodeToClone.key : props ? props.key : null;
        var ref = vNodeToClone.ref || (props ? props.ref : null);
        if (flags & 28 /* Component */) {
                newVNode = createVNode(flags, vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), null, events, key, ref, true);
                var newProps = newVNode.props;
                if (newProps) {
                    var newChildren = newProps.children;
                    // we need to also clone component children that are in props
                    // as the children may also have been hoisted
                    if (newChildren) {
                        if ((0, _infernoShared.isArray)(newChildren)) {
                            for (var _i = 0, _len2 = newChildren.length; _i < _len2; _i++) {
                                var child = newChildren[_i];
                                if (!(0, _infernoShared.isInvalid)(child) && isVNode(child)) {
                                    newProps.children[_i] = cloneVNode(child);
                                }
                            }
                        } else if (isVNode(newChildren)) {
                            newProps.children = cloneVNode(newChildren);
                        }
                    }
                }
                newVNode.children = null;
            } else if (flags & 3970 /* Element */) {
                children = props && props.children || vNodeToClone.children;
                newVNode = createVNode(flags, vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), children, events, key, ref, !children);
            } else if (flags & 1 /* Text */) {
                newVNode = createTextVNode(vNodeToClone.children);
            }
    }
    return newVNode;
}
function createVoidVNode() {
    return createVNode(4096 /* Void */);
}
function createTextVNode(text) {
    return createVNode(1 /* Text */, null, null, text, null, null, null, true);
}
function isVNode(o) {
    return !!o.flags;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.patch = patch;
exports.patchElement = patchElement;
exports.patchComponent = patchComponent;
exports.patchText = patchText;
exports.patchVoid = patchVoid;
exports.patchNonKeyedChildren = patchNonKeyedChildren;
exports.patchKeyedChildren = patchKeyedChildren;
exports.patchProp = patchProp;
exports.patchEvents = patchEvents;
exports.patchEvent = patchEvent;
exports.patchStyle = patchStyle;

var _infernoShared = __webpack_require__(0);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

var _VNodes = __webpack_require__(6);

var _constants = __webpack_require__(10);

var _delegation = __webpack_require__(24);

var _mounting = __webpack_require__(11);

var _utils = __webpack_require__(2);

var _rendering = __webpack_require__(8);

var _unmounting = __webpack_require__(12);

var _processElement = __webpack_require__(9);

var _processElement2 = _interopRequireDefault(_processElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    if (lastVNode !== nextVNode) {
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        if (nextFlags & 28 /* Component */) {
                if (lastFlags & 28 /* Component */) {
                        patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */, isRecycling);
                    } else {
                    (0, _utils.replaceVNode)(parentDom, (0, _mounting.mountComponent)(nextVNode, null, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 3970 /* Element */) {
                if (lastFlags & 3970 /* Element */) {
                        patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
                    } else {
                    (0, _utils.replaceVNode)(parentDom, (0, _mounting.mountElement)(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 1 /* Text */) {
                if (lastFlags & 1 /* Text */) {
                        patchText(lastVNode, nextVNode);
                    } else {
                    (0, _utils.replaceVNode)(parentDom, (0, _mounting.mountText)(nextVNode, null), lastVNode, lifecycle, isRecycling);
                }
            } else if (nextFlags & 4096 /* Void */) {
                if (lastFlags & 4096 /* Void */) {
                        patchVoid(lastVNode, nextVNode);
                    } else {
                    (0, _utils.replaceVNode)(parentDom, (0, _mounting.mountVoid)(nextVNode, null), lastVNode, lifecycle, isRecycling);
                }
            } else {
            // Error case: mount new one replacing old one
            (0, _utils.replaceLastChildAndUnmount)(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function unmountChildren(children, dom, lifecycle, isRecycling) {
    if ((0, _VNodes.isVNode)(children)) {
        (0, _unmounting.unmount)(children, dom, lifecycle, true, isRecycling);
    } else if ((0, _infernoShared.isArray)(children)) {
        (0, _utils.removeAllChildren)(dom, children, lifecycle, isRecycling);
    } else {
        dom.textContent = '';
    }
}
function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    var nextTag = nextVNode.type;
    var lastTag = lastVNode.type;
    if (lastTag !== nextTag) {
        (0, _utils.replaceWithNewNode)(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
    } else {
        var dom = lastVNode.dom;
        var lastProps = lastVNode.props;
        var nextProps = nextVNode.props;
        var lastChildren = lastVNode.children;
        var nextChildren = nextVNode.children;
        var lastFlags = lastVNode.flags;
        var nextFlags = nextVNode.flags;
        var lastRef = lastVNode.ref;
        var nextRef = nextVNode.ref;
        var lastEvents = lastVNode.events;
        var nextEvents = nextVNode.events;
        nextVNode.dom = dom;
        if (isSVG || nextFlags & 128 /* SvgElement */) {
            isSVG = true;
        }
        if (lastChildren !== nextChildren) {
            patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        var hasControlledValue = false;
        if (!(nextFlags & 2 /* HtmlElement */)) {
            hasControlledValue = (0, _processElement2.default)(nextFlags, nextVNode, dom, false);
        }
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            var lastPropsOrEmpty = lastProps || _utils.EMPTY_OBJ;
            var nextPropsOrEmpty = nextProps || _utils.EMPTY_OBJ;
            if (nextPropsOrEmpty !== _utils.EMPTY_OBJ) {
                for (var prop in nextPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    var nextValue = nextPropsOrEmpty[prop];
                    var lastValue = lastPropsOrEmpty[prop];
                    if ((0, _infernoShared.isNullOrUndef)(nextValue)) {
                        removeProp(prop, nextValue, dom);
                    } else {
                        patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue);
                    }
                }
            }
            if (lastPropsOrEmpty !== _utils.EMPTY_OBJ) {
                for (var _prop in lastPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    if ((0, _infernoShared.isNullOrUndef)(nextPropsOrEmpty[_prop])) {
                        removeProp(_prop, lastPropsOrEmpty[_prop], dom);
                    }
                }
            }
        }
        // inlined patchProps  -- ends --
        if (lastEvents !== nextEvents) {
            patchEvents(lastEvents, nextEvents, dom);
        }
        if (nextRef) {
            if (lastRef !== nextRef || isRecycling) {
                (0, _mounting.mountRef)(dom, nextRef, lifecycle);
            }
        }
    }
}
function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var patchArray = false;
    var patchKeyed = false;
    if (nextFlags & 64 /* HasNonKeyedChildren */) {
            patchArray = true;
        } else if (lastFlags & 32 /* HasKeyedChildren */ && nextFlags & 32 /* HasKeyedChildren */) {
        patchKeyed = true;
        patchArray = true;
    } else if ((0, _infernoShared.isInvalid)(nextChildren)) {
        unmountChildren(lastChildren, dom, lifecycle, isRecycling);
    } else if ((0, _infernoShared.isInvalid)(lastChildren)) {
        if ((0, _infernoShared.isStringOrNumber)(nextChildren)) {
            (0, _utils.setTextContent)(dom, nextChildren);
        } else {
            if ((0, _infernoShared.isArray)(nextChildren)) {
                (0, _mounting.mountArrayChildren)(nextChildren, dom, lifecycle, context, isSVG);
            } else {
                (0, _mounting.mount)(nextChildren, dom, lifecycle, context, isSVG);
            }
        }
    } else if ((0, _infernoShared.isStringOrNumber)(nextChildren)) {
        if ((0, _infernoShared.isStringOrNumber)(lastChildren)) {
            (0, _utils.updateTextContent)(dom, nextChildren);
        } else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            (0, _utils.setTextContent)(dom, nextChildren);
        }
    } else if ((0, _infernoShared.isArray)(nextChildren)) {
        if ((0, _infernoShared.isArray)(lastChildren)) {
            patchArray = true;
            if ((0, _utils.isKeyed)(lastChildren, nextChildren)) {
                patchKeyed = true;
            }
        } else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            (0, _mounting.mountArrayChildren)(nextChildren, dom, lifecycle, context, isSVG);
        }
    } else if ((0, _infernoShared.isArray)(lastChildren)) {
        (0, _utils.removeAllChildren)(dom, lastChildren, lifecycle, isRecycling);
        (0, _mounting.mount)(nextChildren, dom, lifecycle, context, isSVG);
    } else if ((0, _VNodes.isVNode)(nextChildren)) {
        if ((0, _VNodes.isVNode)(lastChildren)) {
            patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        } else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            (0, _mounting.mount)(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    if (patchArray) {
        if (patchKeyed) {
            patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        } else {
            patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
    var lastType = lastVNode.type;
    var nextType = nextVNode.type;
    var nextProps = nextVNode.props || _utils.EMPTY_OBJ;
    var lastKey = lastVNode.key;
    var nextKey = nextVNode.key;
    var defaultProps = nextType.defaultProps;
    if (!(0, _infernoShared.isUndefined)(defaultProps)) {
        // When defaultProps are used we need to create new Object
        var props = nextVNode.props || {};
        (0, _infernoShared.copyPropsTo)(defaultProps, props);
        nextVNode.props = props;
    }
    if (lastType !== nextType) {
        if (isClass) {
            (0, _utils.replaceWithNewNode)(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        } else {
            var lastInput = lastVNode.children._lastInput || lastVNode.children;
            var nextInput = (0, _utils.createFunctionalComponentInput)(nextVNode, nextType, nextProps, context);
            (0, _unmounting.unmount)(lastVNode, null, lifecycle, false, isRecycling);
            patch(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling);
            var dom = nextVNode.dom = nextInput.dom;
            nextVNode.children = nextInput;
            (0, _mounting.mountFunctionalComponentCallbacks)(nextVNode.ref, dom, lifecycle);
        }
    } else {
        if (isClass) {
            if (lastKey !== nextKey) {
                (0, _utils.replaceWithNewNode)(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
                return false;
            }
            var instance = lastVNode.children;
            if (instance._unmounted) {
                if ((0, _infernoShared.isNull)(parentDom)) {
                    return true;
                }
                (0, _utils.replaceChild)(parentDom, (0, _mounting.mountComponent)(nextVNode, null, lifecycle, context, isSVG, nextVNode.flags & 4 /* ComponentClass */), lastVNode.dom);
            } else {
                var lastState = instance.state;
                var nextState = instance.state;
                var lastProps = instance.props;
                var childContext = instance.getChildContext();
                nextVNode.children = instance;
                instance._isSVG = isSVG;
                instance._syncSetState = false;
                if ((0, _infernoShared.isNullOrUndef)(childContext)) {
                    childContext = context;
                } else {
                    childContext = Object.assign({}, context, childContext);
                }
                var _lastInput = instance._lastInput;
                var _nextInput = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
                var didUpdate = true;
                instance._childContext = childContext;
                if ((0, _infernoShared.isInvalid)(_nextInput)) {
                    _nextInput = (0, _VNodes.createVoidVNode)();
                } else if (_nextInput === _infernoShared.NO_OP) {
                    _nextInput = _lastInput;
                    didUpdate = false;
                } else if ((0, _infernoShared.isStringOrNumber)(_nextInput)) {
                    _nextInput = (0, _VNodes.createTextVNode)(_nextInput);
                } else if ((0, _infernoShared.isArray)(_nextInput)) {
                    if (process.env.NODE_ENV !== 'production') {
                        (0, _infernoShared.throwError)('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
                    }
                    (0, _infernoShared.throwError)();
                } else if ((0, _infernoShared.isObject)(_nextInput) && _nextInput.dom) {
                    _nextInput = (0, _VNodes.cloneVNode)(_nextInput);
                }
                if (_nextInput.flags & 28 /* Component */) {
                        _nextInput.parentVNode = nextVNode;
                    } else if (_lastInput.flags & 28 /* Component */) {
                        _lastInput.parentVNode = nextVNode;
                    }
                instance._lastInput = _nextInput;
                instance._vNode = nextVNode;
                if (didUpdate) {
                    patch(_lastInput, _nextInput, parentDom, lifecycle, childContext, isSVG, isRecycling);
                    instance.componentDidUpdate(lastProps, lastState);
                    _options2.default.afterUpdate && _options2.default.afterUpdate(nextVNode);
                    _options2.default.findDOMNodeEnabled && _rendering.componentToDOMNodeMap.set(instance, _nextInput.dom);
                }
                instance._syncSetState = true;
                nextVNode.dom = _nextInput.dom;
            }
        } else {
            var shouldUpdate = true;
            var _lastProps = lastVNode.props;
            var nextHooks = nextVNode.ref;
            var nextHooksDefined = !(0, _infernoShared.isNullOrUndef)(nextHooks);
            var _lastInput2 = lastVNode.children;
            var _nextInput2 = _lastInput2;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = _lastInput2;
            if (lastKey !== nextKey) {
                shouldUpdate = true;
            } else {
                if (nextHooksDefined && !(0, _infernoShared.isNullOrUndef)(nextHooks.onComponentShouldUpdate)) {
                    shouldUpdate = nextHooks.onComponentShouldUpdate(_lastProps, nextProps);
                }
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && !(0, _infernoShared.isNullOrUndef)(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(_lastProps, nextProps);
                }
                _nextInput2 = nextType(nextProps, context);
                if ((0, _infernoShared.isInvalid)(_nextInput2)) {
                    _nextInput2 = (0, _VNodes.createVoidVNode)();
                } else if ((0, _infernoShared.isStringOrNumber)(_nextInput2) && _nextInput2 !== _infernoShared.NO_OP) {
                    _nextInput2 = (0, _VNodes.createTextVNode)(_nextInput2);
                } else if ((0, _infernoShared.isArray)(_nextInput2)) {
                    if (process.env.NODE_ENV !== 'production') {
                        (0, _infernoShared.throwError)('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
                    }
                    (0, _infernoShared.throwError)();
                } else if ((0, _infernoShared.isObject)(_nextInput2) && _nextInput2.dom) {
                    _nextInput2 = (0, _VNodes.cloneVNode)(_nextInput2);
                }
                if (_nextInput2 !== _infernoShared.NO_OP) {
                    patch(_lastInput2, _nextInput2, parentDom, lifecycle, context, isSVG, isRecycling);
                    nextVNode.children = _nextInput2;
                    if (nextHooksDefined && !(0, _infernoShared.isNullOrUndef)(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(_lastProps, nextProps);
                    }
                    nextVNode.dom = _nextInput2.dom;
                }
            }
            if (_nextInput2.flags & 28 /* Component */) {
                    _nextInput2.parentVNode = nextVNode;
                } else if (_lastInput2.flags & 28 /* Component */) {
                    _lastInput2.parentVNode = nextVNode;
                }
        }
    }
    return false;
}
function patchText(lastVNode, nextVNode) {
    var nextText = nextVNode.children;
    var dom = lastVNode.dom;
    nextVNode.dom = dom;
    if (lastVNode.children !== nextText) {
        dom.nodeValue = nextText;
    }
}
function patchVoid(lastVNode, nextVNode) {
    nextVNode.dom = lastVNode.dom;
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    var lastChildrenLength = lastChildren.length;
    var nextChildrenLength = nextChildren.length;
    var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    var i = 0;
    for (; i < commonLength; i++) {
        var nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = (0, _VNodes.cloneVNode)(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            var _nextChild = nextChildren[i];
            if (_nextChild.dom) {
                _nextChild = nextChildren[i] = (0, _VNodes.cloneVNode)(_nextChild);
            }
            (0, _utils.appendChild)(dom, (0, _mounting.mount)(_nextChild, null, lifecycle, context, isSVG));
        }
    } else if (nextChildrenLength === 0) {
        (0, _utils.removeAllChildren)(dom, lastChildren, lifecycle, isRecycling);
    } else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            (0, _unmounting.unmount)(lastChildren[i], dom, lifecycle, false, isRecycling);
        }
    }
}
function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling) {
    var aLength = a.length;
    var bLength = b.length;
    var aEnd = aLength - 1;
    var bEnd = bLength - 1;
    var aStart = 0;
    var bStart = 0;
    var i = void 0;
    var j = void 0;
    var aNode = void 0;
    var bNode = void 0;
    var nextNode = void 0;
    var nextPos = void 0;
    var node = void 0;
    if (aLength === 0) {
        if (bLength !== 0) {
            (0, _mounting.mountArrayChildren)(b, dom, lifecycle, context, isSVG);
        }
        return;
    } else if (bLength === 0) {
        (0, _utils.removeAllChildren)(dom, a, lifecycle, isRecycling);
        return;
    }
    var aStartNode = a[aStart];
    var bStartNode = b[bStart];
    var aEndNode = a[aEnd];
    var bEndNode = b[bEnd];
    if (bStartNode.dom) {
        b[bStart] = bStartNode = (0, _VNodes.cloneVNode)(bStartNode);
    }
    if (bEndNode.dom) {
        b[bEnd] = bEndNode = (0, _VNodes.cloneVNode)(bEndNode);
    }
    // Step 1
    /* eslint no-constant-condition: 0 */
    outer: while (true) {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            aStart++;
            bStart++;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aStartNode = a[aStart];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = (0, _VNodes.cloneVNode)(bStartNode);
            }
        }
        // Sync nodes with the same key at the end.
        while (aEndNode.key === bEndNode.key) {
            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            aEnd--;
            bEnd--;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aEndNode = a[aEnd];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = (0, _VNodes.cloneVNode)(bEndNode);
            }
        }
        // Move and sync nodes from right to left.
        if (aEndNode.key === bStartNode.key) {
            patch(aEndNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            (0, _utils.insertOrAppend)(dom, bStartNode.dom, aStartNode.dom);
            aEnd--;
            bStart++;
            aEndNode = a[aEnd];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = (0, _VNodes.cloneVNode)(bStartNode);
            }
            continue;
        }
        // Move and sync nodes from left to right.
        if (aStartNode.key === bEndNode.key) {
            patch(aStartNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            (0, _utils.insertOrAppend)(dom, bEndNode.dom, nextNode);
            aStart++;
            bEnd--;
            aStartNode = a[aStart];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = (0, _VNodes.cloneVNode)(bEndNode);
            }
            continue;
        }
        break;
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = (0, _VNodes.cloneVNode)(node);
                }
                bStart++;
                (0, _utils.insertOrAppend)(dom, (0, _mounting.mount)(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    } else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            (0, _unmounting.unmount)(a[aStart++], dom, lifecycle, false, isRecycling);
        }
    } else {
        aLength = aEnd - aStart + 1;
        bLength = bEnd - bStart + 1;
        var sources = new Array(bLength);
        // Mark all nodes as inserted.
        for (i = 0; i < bLength; i++) {
            sources[i] = -1;
        }
        var moved = false;
        var pos = 0;
        var patched = 0;
        // When sizes are small, just loop them through
        if (bLength <= 4 || aLength * bLength <= 16) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            } else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = (0, _VNodes.cloneVNode)(bNode);
                            }
                            patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                            patched++;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        } else {
            var keyIndex = new Map();
            // Map keys by their index in array
            for (i = bStart; i <= bEnd; i++) {
                node = b[i];
                keyIndex.set(node.key, i);
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    j = keyIndex.get(aNode.key);
                    if (!(0, _infernoShared.isUndefined)(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        } else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = (0, _VNodes.cloneVNode)(bNode);
                        }
                        patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (aLength === a.length && patched === 0) {
            (0, _utils.removeAllChildren)(dom, a, lifecycle, isRecycling);
            while (bStart < bLength) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = (0, _VNodes.cloneVNode)(node);
                }
                bStart++;
                (0, _utils.insertOrAppend)(dom, (0, _mounting.mount)(node, null, lifecycle, context, isSVG), null);
            }
        } else {
            i = aLength - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (!(0, _infernoShared.isNull)(aNode)) {
                    (0, _unmounting.unmount)(aNode, dom, lifecycle, true, isRecycling);
                    i--;
                }
            }
            if (moved) {
                var seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = (0, _VNodes.cloneVNode)(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        (0, _utils.insertOrAppend)(dom, (0, _mounting.mount)(node, dom, lifecycle, context, isSVG), nextNode);
                    } else {
                        if (j < 0 || i !== seq[j]) {
                            pos = i + bStart;
                            node = b[pos];
                            nextPos = pos + 1;
                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
                            (0, _utils.insertOrAppend)(dom, node.dom, nextNode);
                        } else {
                            j--;
                        }
                    }
                }
            } else if (patched !== bLength) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = (0, _VNodes.cloneVNode)(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        (0, _utils.insertOrAppend)(dom, (0, _mounting.mount)(node, null, lifecycle, context, isSVG), nextNode);
                    }
                }
            }
        }
    }
}
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    var p = arr.slice(0);
    var result = [0];
    var i = void 0;
    var j = void 0;
    var u = void 0;
    var v = void 0;
    var c = void 0;
    var len = arr.length;
    for (i = 0; i < len; i++) {
        var arrI = arr[i];
        if (arrI === -1) {
            continue;
        }
        j = result[result.length - 1];
        if (arr[j] < arrI) {
            p[i] = j;
            result.push(i);
            continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
            c = (u + v) / 2 | 0;
            if (arr[result[c]] < arrI) {
                u = c + 1;
            } else {
                v = c;
            }
        }
        if (arrI < arr[result[u]]) {
            if (u > 0) {
                p[i] = result[u - 1];
            }
            result[u] = i;
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue) {
    if (_constants.skipProps[prop] || hasControlledValue && prop === 'value') {
        return;
    }
    if (_constants.booleanProps[prop]) {
        dom[prop] = !!nextValue;
    } else if (_constants.strictProps[prop]) {
        var value = (0, _infernoShared.isNullOrUndef)(nextValue) ? '' : nextValue;
        if (dom[prop] !== value) {
            dom[prop] = value;
        }
    } else if (lastValue !== nextValue) {
        if ((0, _infernoShared.isAttrAnEvent)(prop)) {
            patchEvent(prop, lastValue, nextValue, dom);
        } else if ((0, _infernoShared.isNullOrUndef)(nextValue)) {
            dom.removeAttribute(prop);
        } else if (prop === 'className') {
            if (isSVG) {
                dom.setAttribute('class', nextValue);
            } else {
                dom.className = nextValue;
            }
        } else if (prop === 'style') {
            patchStyle(lastValue, nextValue, dom);
        } else if (prop === 'dangerouslySetInnerHTML') {
            var lastHtml = lastValue && lastValue.__html;
            var nextHtml = nextValue && nextValue.__html;
            if (lastHtml !== nextHtml) {
                if (!(0, _infernoShared.isNullOrUndef)(nextHtml)) {
                    dom.innerHTML = nextHtml;
                }
            }
        } else {
            var ns = _constants.namespaces[prop];
            if (ns) {
                dom.setAttributeNS(ns, prop, nextValue);
            } else {
                dom.setAttribute(prop, nextValue);
            }
        }
    }
}
function patchEvents(lastEvents, nextEvents, dom) {
    lastEvents = lastEvents || _utils.EMPTY_OBJ;
    nextEvents = nextEvents || _utils.EMPTY_OBJ;
    if (nextEvents !== _utils.EMPTY_OBJ) {
        for (var _name in nextEvents) {
            // do not add a hasOwnProperty check here, it affects performance
            patchEvent(_name, lastEvents[_name], nextEvents[_name], dom);
        }
    }
    if (lastEvents !== _utils.EMPTY_OBJ) {
        for (var _name2 in lastEvents) {
            // do not add a hasOwnProperty check here, it affects performance
            if ((0, _infernoShared.isNullOrUndef)(nextEvents[_name2])) {
                patchEvent(_name2, lastEvents[_name2], null, dom);
            }
        }
    }
}
function patchEvent(name, lastValue, nextValue, dom) {
    if (lastValue !== nextValue) {
        var nameLowerCase = name.toLowerCase();
        var domEvent = dom[nameLowerCase];
        // if the function is wrapped, that means it's been controlled by a wrapper
        if (domEvent && domEvent.wrapped) {
            return;
        }
        if (_constants.delegatedProps[name]) {
            (0, _delegation.handleEvent)(name, lastValue, nextValue, dom);
        } else {
            if (lastValue !== nextValue) {
                if (!(0, _infernoShared.isFunction)(nextValue) && !(0, _infernoShared.isNullOrUndef)(nextValue)) {
                    var linkEvent = nextValue.event;
                    if (linkEvent && (0, _infernoShared.isFunction)(linkEvent)) {
                        if (!dom._data) {
                            dom[nameLowerCase] = function (e) {
                                linkEvent(e.currentTarget._data, e);
                            };
                        }
                        dom._data = nextValue.data;
                    } else {
                        if (process.env.NODE_ENV !== 'production') {
                            (0, _infernoShared.throwError)('an event on a VNode "' + name + '". was not a function or a valid linkEvent.');
                        }
                        (0, _infernoShared.throwError)();
                    }
                } else {
                    dom[nameLowerCase] = nextValue;
                }
            }
        }
    }
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    if ((0, _infernoShared.isString)(nextAttrValue)) {
        dom.style.cssText = nextAttrValue;
        return;
    }
    for (var style in nextAttrValue) {
        // do not add a hasOwnProperty check here, it affects performance
        var value = nextAttrValue[style];
        if ((0, _infernoShared.isNumber)(value) && !_constants.isUnitlessNumber[style]) {
            dom.style[style] = value + 'px';
        } else {
            dom.style[style] = value;
        }
    }
    if (!(0, _infernoShared.isNullOrUndef)(lastAttrValue)) {
        for (var _style in lastAttrValue) {
            if ((0, _infernoShared.isNullOrUndef)(nextAttrValue[_style])) {
                dom.style[_style] = '';
            }
        }
    }
}
function removeProp(prop, lastValue, dom) {
    if (prop === 'className') {
        dom.removeAttribute('class');
    } else if (prop === 'value') {
        dom.value = '';
    } else if (prop === 'style') {
        dom.removeAttribute('style');
    } else if ((0, _infernoShared.isAttrAnEvent)(prop)) {
        (0, _delegation.handleEvent)(name, lastValue, null, dom);
    } else {
        dom.removeAttribute(prop);
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.componentToDOMNodeMap = exports.roots = undefined;
exports.findDOMNode = findDOMNode;
exports.render = render;
exports.createRenderer = createRenderer;

var _infernoShared = __webpack_require__(0);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

var _VNodes = __webpack_require__(6);

var _hydration = __webpack_require__(26);

var _hydration2 = _interopRequireDefault(_hydration);

var _mounting = __webpack_require__(11);

var _patching = __webpack_require__(7);

var _unmounting = __webpack_require__(12);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// rather than use a Map, like we did before, we can use an array here
// given there shouldn't be THAT many roots on the page, the difference
// in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
var roots = exports.roots = [];
var componentToDOMNodeMap = exports.componentToDOMNodeMap = new Map();
_options2.default.roots = roots;
function findDOMNode(ref) {
    if (!_options2.default.findDOMNodeEnabled) {
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.throwError)('findDOMNode() has been disabled, use Inferno.options.findDOMNodeEnabled = true; enabled findDOMNode(). Warning this can significantly impact performance!');
        }
        (0, _infernoShared.throwError)();
    }
    var dom = ref && ref.nodeType ? ref : null;
    return componentToDOMNodeMap.get(ref) || dom;
}
function getRoot(dom) {
    for (var i = 0, len = roots.length; i < len; i++) {
        var root = roots[i];
        if (root.dom === dom) {
            return root;
        }
    }
    return null;
}
function setRoot(dom, input, lifecycle) {
    var root = {
        dom: dom,
        input: input,
        lifecycle: lifecycle
    };
    roots.push(root);
    return root;
}
function removeRoot(root) {
    for (var i = 0, len = roots.length; i < len; i++) {
        if (roots[i] === root) {
            roots.splice(i, 1);
            return;
        }
    }
}
if (process.env.NODE_ENV !== 'production') {
    if (_infernoShared.isBrowser && document.body === null) {
        (0, _infernoShared.warning)('Inferno warning: you cannot initialize inferno without "document.body". Wait on "DOMContentLoaded" event, add script to bottom of body, or use async/defer attributes on script tag.');
    }
}
var documentBody = _infernoShared.isBrowser ? document.body : null;
function render(input, parentDom) {
    if (documentBody === parentDom) {
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.throwError)('you cannot render() to the "document.body". Use an empty element as a container instead.');
        }
        (0, _infernoShared.throwError)();
    }
    if (input === _infernoShared.NO_OP) {
        return;
    }
    var root = getRoot(parentDom);
    if ((0, _infernoShared.isNull)(root)) {
        var lifecycle = new _infernoShared.Lifecycle();
        if (!(0, _infernoShared.isInvalid)(input)) {
            if (input.dom) {
                input = (0, _VNodes.cloneVNode)(input);
            }
            if (!(0, _hydration2.default)(input, parentDom, lifecycle)) {
                (0, _mounting.mount)(input, parentDom, lifecycle, _utils.EMPTY_OBJ, false);
            }
            root = setRoot(parentDom, input, lifecycle);
            lifecycle.trigger();
        }
    } else {
        var _lifecycle = root.lifecycle;
        _lifecycle.listeners = [];
        if ((0, _infernoShared.isNullOrUndef)(input)) {
            (0, _unmounting.unmount)(root.input, parentDom, _lifecycle, false, false);
            removeRoot(root);
        } else {
            if (input.dom) {
                input = (0, _VNodes.cloneVNode)(input);
            }
            (0, _patching.patch)(root.input, input, parentDom, _lifecycle, _utils.EMPTY_OBJ, false, false);
        }
        _lifecycle.trigger();
        root.input = input;
    }
    if (root) {
        var rootInput = root.input;
        if (rootInput && rootInput.flags & 28 /* Component */) {
            return rootInput.children;
        }
    }
}
function createRenderer(parentDom) {
    return function renderer(lastInput, nextInput) {
        if (!parentDom) {
            parentDom = lastInput;
        }
        render(nextInput, parentDom);
    };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wrappers = undefined;
exports.default = processElement;

var _InputWrapper = __webpack_require__(27);

var _SelectWrapper = __webpack_require__(28);

var _TextareaWrapper = __webpack_require__(29);

var wrappers = exports.wrappers = new Map();
function processElement(flags, vNode, dom, mounting) {
    if (flags & 512 /* InputElement */) {
            return (0, _InputWrapper.processInput)(vNode, dom);
        }
    if (flags & 2048 /* SelectElement */) {
            return (0, _SelectWrapper.processSelect)(vNode, dom);
        }
    if (flags & 1024 /* TextareaElement */) {
            return (0, _TextareaWrapper.processTextarea)(vNode, dom, mounting);
        }
    return false;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function constructDefaults(string, object, value) {
    /* eslint no-return-assign: 0 */
    var array = string.split(',');
    for (var i = 0, len = array.length; i < len; i++) {
        object[array[i]] = value;
    }
}
var xlinkNS = exports.xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = exports.xmlNS = 'http://www.w3.org/XML/1998/namespace';
var svgNS = exports.svgNS = 'http://www.w3.org/2000/svg';
var strictProps = exports.strictProps = {};
var booleanProps = exports.booleanProps = {};
var namespaces = exports.namespaces = {};
var isUnitlessNumber = exports.isUnitlessNumber = {};
var skipProps = exports.skipProps = {};
var delegatedProps = exports.delegatedProps = {};
constructDefaults('xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type', namespaces, xlinkNS);
constructDefaults('xml:base,xml:lang,xml:space', namespaces, xmlNS);
constructDefaults('volume,defaultChecked', strictProps, true);
constructDefaults('children,childrenType,defaultValue,ref,key,selected,checked,multiple', skipProps, true);
constructDefaults('onClick,onMouseDown,onMouseUp,onMouseMove,onSubmit,onDblClick,onKeyDown,onKeyUp,onKeyPress', delegatedProps, true);
constructDefaults('muted,scoped,loop,open,checked,default,capture,disabled,readOnly,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate,hidden', booleanProps, true);
constructDefaults('animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,', isUnitlessNumber, true);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.mount = mount;
exports.mountText = mountText;
exports.mountVoid = mountVoid;
exports.mountElement = mountElement;
exports.mountArrayChildren = mountArrayChildren;
exports.mountComponent = mountComponent;
exports.mountClassComponentCallbacks = mountClassComponentCallbacks;
exports.mountFunctionalComponentCallbacks = mountFunctionalComponentCallbacks;
exports.mountRef = mountRef;

var _infernoShared = __webpack_require__(0);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

var _VNodes = __webpack_require__(6);

var _patching = __webpack_require__(7);

var _recycling = __webpack_require__(14);

var _rendering = __webpack_require__(8);

var _utils = __webpack_require__(2);

var _processElement = __webpack_require__(9);

var _processElement2 = _interopRequireDefault(_processElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mount(vNode, parentDom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 3970 /* Element */) {
            return mountElement(vNode, parentDom, lifecycle, context, isSVG);
        } else if (flags & 28 /* Component */) {
            return mountComponent(vNode, parentDom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
        } else if (flags & 4096 /* Void */) {
            return mountVoid(vNode, parentDom);
        } else if (flags & 1 /* Text */) {
            return mountText(vNode, parentDom);
        } else {
        if (process.env.NODE_ENV !== 'production') {
            if ((typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) === 'object') {
                (0, _infernoShared.throwError)('mount() received an object that\'s not a valid VNode, you should stringify it first. Object: "' + JSON.stringify(vNode) + '".');
            } else {
                (0, _infernoShared.throwError)('mount() expects a valid VNode, instead it received an object with the type "' + (typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) + '".');
            }
        }
        (0, _infernoShared.throwError)();
    }
}
function mountText(vNode, parentDom) {
    var dom = document.createTextNode(vNode.children);
    vNode.dom = dom;
    if (parentDom) {
        (0, _utils.appendChild)(parentDom, dom);
    }
    return dom;
}
function mountVoid(vNode, parentDom) {
    var dom = document.createTextNode('');
    vNode.dom = dom;
    if (parentDom) {
        (0, _utils.appendChild)(parentDom, dom);
    }
    return dom;
}
function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    if (_options2.default.recyclingEnabled) {
        var _dom = (0, _recycling.recycleElement)(vNode, lifecycle, context, isSVG);
        if (!(0, _infernoShared.isNull)(_dom)) {
            if (!(0, _infernoShared.isNull)(parentDom)) {
                (0, _utils.appendChild)(parentDom, _dom);
            }
            return _dom;
        }
    }
    var tag = vNode.type;
    var flags = vNode.flags;
    if (isSVG || flags & 128 /* SvgElement */) {
        isSVG = true;
    }
    var dom = (0, _utils.documentCreateElement)(tag, isSVG);
    var children = vNode.children;
    var props = vNode.props;
    var events = vNode.events;
    var ref = vNode.ref;
    vNode.dom = dom;
    if (!(0, _infernoShared.isNull)(children)) {
        if ((0, _infernoShared.isStringOrNumber)(children)) {
            (0, _utils.setTextContent)(dom, children);
        } else if ((0, _infernoShared.isArray)(children)) {
            mountArrayChildren(children, dom, lifecycle, context, isSVG);
        } else if ((0, _VNodes.isVNode)(children)) {
            mount(children, dom, lifecycle, context, isSVG);
        }
    }
    var hasControlledValue = false;
    if (!(flags & 2 /* HtmlElement */)) {
        hasControlledValue = (0, _processElement2.default)(flags, vNode, dom, true);
    }
    if (!(0, _infernoShared.isNull)(props)) {
        for (var prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            (0, _patching.patchProp)(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
    }
    if (!(0, _infernoShared.isNull)(events)) {
        for (var name in events) {
            // do not add a hasOwnProperty check here, it affects performance
            (0, _patching.patchEvent)(name, null, events[name], dom);
        }
    }
    if (!(0, _infernoShared.isNull)(ref)) {
        mountRef(dom, ref, lifecycle);
    }
    if (!(0, _infernoShared.isNull)(parentDom)) {
        (0, _utils.appendChild)(parentDom, dom);
    }
    return dom;
}
function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (var i = 0, len = children.length; i < len; i++) {
        var child = children[i];
        // TODO: Verify can string/number be here. might cause de-opt
        if (!(0, _infernoShared.isInvalid)(child)) {
            if (child.dom) {
                children[i] = child = (0, _VNodes.cloneVNode)(child);
            }
            mount(children[i], dom, lifecycle, context, isSVG);
        }
    }
}
function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    if (_options2.default.recyclingEnabled) {
        var _dom2 = (0, _recycling.recycleComponent)(vNode, lifecycle, context, isSVG);
        if (!(0, _infernoShared.isNull)(_dom2)) {
            if (!(0, _infernoShared.isNull)(parentDom)) {
                (0, _utils.appendChild)(parentDom, _dom2);
            }
            return _dom2;
        }
    }
    var type = vNode.type;
    var defaultProps = type.defaultProps;
    var props = void 0;
    if (!(0, _infernoShared.isUndefined)(defaultProps)) {
        // When defaultProps are used we need to create new Object
        props = vNode.props || {};
        (0, _infernoShared.copyPropsTo)(defaultProps, props);
        vNode.props = props;
    } else {
        props = vNode.props || _utils.EMPTY_OBJ;
    }
    var ref = vNode.ref;
    var dom = void 0;
    if (isClass) {
        var instance = (0, _utils.createClassComponentInstance)(vNode, type, props, context, isSVG);
        var input = instance._lastInput;
        instance._vNode = vNode;
        vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
        if (!(0, _infernoShared.isNull)(parentDom)) {
            (0, _utils.appendChild)(parentDom, dom);
        }
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        _options2.default.findDOMNodeEnabled && _rendering.componentToDOMNodeMap.set(instance, dom);
        vNode.children = instance;
    } else {
        var _input = (0, _utils.createFunctionalComponentInput)(vNode, type, props, context);
        vNode.dom = dom = mount(_input, null, lifecycle, context, isSVG);
        vNode.children = _input;
        mountFunctionalComponentCallbacks(ref, dom, lifecycle);
        if (!(0, _infernoShared.isNull)(parentDom)) {
            (0, _utils.appendChild)(parentDom, dom);
        }
    }
    return dom;
}
function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (ref) {
        if ((0, _infernoShared.isFunction)(ref)) {
            ref(instance);
        } else {
            if (process.env.NODE_ENV !== 'production') {
                if ((0, _infernoShared.isStringOrNumber)(ref)) {
                    (0, _infernoShared.throwError)('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
                } else if ((0, _infernoShared.isObject)(ref) && vNode.flags & 4 /* ComponentClass */) {
                    (0, _infernoShared.throwError)('functional component lifecycle events are not supported on ES2015 class components.');
                } else {
                    (0, _infernoShared.throwError)('a bad value for "ref" was used on component: "' + JSON.stringify(ref) + '"');
                }
            }
            (0, _infernoShared.throwError)();
        }
    }
    var cDM = instance.componentDidMount;
    var afterMount = _options2.default.afterMount;
    if (!(0, _infernoShared.isUndefined)(cDM) || !(0, _infernoShared.isNull)(afterMount)) {
        lifecycle.addListener(function () {
            afterMount && afterMount(vNode);
            cDM && instance.componentDidMount();
            instance._syncSetState = true;
        });
    } else {
        instance._syncSetState = true;
    }
}
function mountFunctionalComponentCallbacks(ref, dom, lifecycle) {
    if (ref) {
        if (!(0, _infernoShared.isNullOrUndef)(ref.onComponentWillMount)) {
            ref.onComponentWillMount();
        }
        if (!(0, _infernoShared.isNullOrUndef)(ref.onComponentDidMount)) {
            lifecycle.addListener(function () {
                return ref.onComponentDidMount(dom);
            });
        }
    }
}
function mountRef(dom, value, lifecycle) {
    if ((0, _infernoShared.isFunction)(value)) {
        lifecycle.addListener(function () {
            return value(dom);
        });
    } else {
        if ((0, _infernoShared.isInvalid)(value)) {
            return;
        }
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.throwError)('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        (0, _infernoShared.throwError)();
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unmount = unmount;
exports.unmountComponent = unmountComponent;
exports.unmountElement = unmountElement;

var _infernoShared = __webpack_require__(0);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

var _patching = __webpack_require__(7);

var _recycling = __webpack_require__(14);

var _rendering = __webpack_require__(8);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
            unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling);
        } else if (flags & 3970 /* Element */) {
            unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling);
        } else if (flags & (1 /* Text */ | 4096 /* Void */)) {
        unmountVoidOrText(vNode, parentDom);
    }
}
function unmountVoidOrText(vNode, parentDom) {
    if (parentDom) {
        (0, _utils.removeChild)(parentDom, vNode.dom);
    }
}
var alreadyUnmounted = new WeakMap();
function unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var instance = vNode.children;
    var flags = vNode.flags;
    var isStatefulComponent = flags & 4 /* ComponentClass */;
    var ref = vNode.ref;
    var dom = vNode.dom;
    if (alreadyUnmounted.has(vNode) && !isRecycling && !parentDom) {
        return;
    }
    alreadyUnmounted.set(vNode, true);
    if (!isRecycling) {
        if (isStatefulComponent) {
            if (!instance._unmounted) {
                instance._ignoreSetState = true;
                _options2.default.beforeUnmount && _options2.default.beforeUnmount(vNode);
                instance.componentWillUnmount && instance.componentWillUnmount();
                if (ref && !isRecycling) {
                    ref(null);
                }
                instance._unmounted = true;
                _options2.default.findDOMNodeEnabled && _rendering.componentToDOMNodeMap.delete(instance);
                var subLifecycle = instance._lifecycle;
                unmount(instance._lastInput, null, subLifecycle, false, isRecycling);
            }
        } else {
            if (!(0, _infernoShared.isNullOrUndef)(ref)) {
                if (!(0, _infernoShared.isNullOrUndef)(ref.onComponentWillUnmount)) {
                    ref.onComponentWillUnmount(dom);
                }
            }
            unmount(instance, null, lifecycle, false, isRecycling);
        }
    }
    if (parentDom) {
        var lastInput = instance._lastInput;
        if ((0, _infernoShared.isNullOrUndef)(lastInput)) {
            lastInput = instance;
        }
        (0, _utils.removeChild)(parentDom, dom);
    }
    if (_options2.default.recyclingEnabled && !isStatefulComponent && (parentDom || canRecycle)) {
        (0, _recycling.poolComponent)(vNode);
    }
}
function unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    var dom = vNode.dom;
    var ref = vNode.ref;
    var events = vNode.events;
    if (alreadyUnmounted.has(vNode) && !isRecycling && !parentDom) {
        return;
    }
    alreadyUnmounted.set(vNode, true);
    if (ref && !isRecycling) {
        unmountRef(ref);
    }
    var children = vNode.children;
    if (!(0, _infernoShared.isNullOrUndef)(children)) {
        unmountChildren(children, lifecycle, isRecycling);
    }
    if (!(0, _infernoShared.isNull)(events)) {
        for (var name in events) {
            // do not add a hasOwnProperty check here, it affects performance
            (0, _patching.patchEvent)(name, events[name], null, dom);
            events[name] = null;
        }
    }
    if (parentDom) {
        (0, _utils.removeChild)(parentDom, dom);
    }
    if (_options2.default.recyclingEnabled && (parentDom || canRecycle)) {
        (0, _recycling.poolElement)(vNode);
    }
}
function unmountChildren(children, lifecycle, isRecycling) {
    if ((0, _infernoShared.isArray)(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!(0, _infernoShared.isInvalid)(child) && (0, _infernoShared.isObject)(child)) {
                unmount(child, null, lifecycle, false, isRecycling);
            }
        }
    } else if ((0, _infernoShared.isObject)(children)) {
        unmount(children, null, lifecycle, false, isRecycling);
    }
}
function unmountRef(ref) {
    if ((0, _infernoShared.isFunction)(ref)) {
        ref(null);
    } else {
        if ((0, _infernoShared.isInvalid)(ref)) {
            return;
        }
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.throwError)('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        (0, _infernoShared.throwError)();
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.addAdditionalSettings = addAdditionalSettings;

var _Settings = __webpack_require__(16);

var Settings = _interopRequireWildcard(_Settings);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function addAdditionalSettings(state) {
  // Define our defaults
  var defaults = {
    "distro": "archlinux",

    "avatar_enabled": true,
    "avatar_size": "200px",
    "avatar_shape": "circle",

    "font_dpi": 1.0,
    "font_color": "#222222",
    "font_family": "Open Sans",
    "font_scale": 1.0,

    "date_enabled": true,
    "date_format": "%A, the %o of %B"
  };

  var settings = {};

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(defaults)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      settings[key] = Settings.requestSetting(key, defaults[key]);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return _extends({}, state, { "settings": settings });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recycleElement = recycleElement;
exports.poolElement = poolElement;
exports.recycleComponent = recycleComponent;
exports.poolComponent = poolComponent;

var _infernoShared = __webpack_require__(0);

var _patching = __webpack_require__(7);

var componentPools = new Map();
var elementPools = new Map();
function recycleElement(vNode, lifecycle, context, isSVG) {
    var tag = vNode.type;
    var key = vNode.key;
    var pools = elementPools.get(tag);
    if (!(0, _infernoShared.isUndefined)(pools)) {
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!(0, _infernoShared.isUndefined)(pool)) {
            var recycledVNode = pool.pop();
            if (!(0, _infernoShared.isUndefined)(recycledVNode)) {
                (0, _patching.patchElement)(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
                return vNode.dom;
            }
        }
    }
    return null;
}
function poolElement(vNode) {
    var tag = vNode.type;
    var key = vNode.key;
    var pools = elementPools.get(tag);
    if ((0, _infernoShared.isUndefined)(pools)) {
        pools = {
            nonKeyed: [],
            keyed: new Map()
        };
        elementPools.set(tag, pools);
    }
    if ((0, _infernoShared.isNull)(key)) {
        pools.nonKeyed.push(vNode);
    } else {
        var pool = pools.keyed.get(key);
        if ((0, _infernoShared.isUndefined)(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
function recycleComponent(vNode, lifecycle, context, isSVG) {
    var type = vNode.type;
    var key = vNode.key;
    var pools = componentPools.get(type);
    if (!(0, _infernoShared.isUndefined)(pools)) {
        var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!(0, _infernoShared.isUndefined)(pool)) {
            var recycledVNode = pool.pop();
            if (!(0, _infernoShared.isUndefined)(recycledVNode)) {
                var flags = vNode.flags;
                var failed = (0, _patching.patchComponent)(recycledVNode, vNode, null, lifecycle, context, isSVG, flags & 4 /* ComponentClass */, true);
                if (!failed) {
                    return vNode.dom;
                }
            }
        }
    }
    return null;
}
function poolComponent(vNode) {
    var type = vNode.type;
    var key = vNode.key;
    var hooks = vNode.ref;
    var nonRecycleHooks = hooks && (hooks.onComponentWillMount || hooks.onComponentWillUnmount || hooks.onComponentDidMount || hooks.onComponentWillUpdate || hooks.onComponentDidUpdate);
    if (nonRecycleHooks) {
        return;
    }
    var pools = componentPools.get(type);
    if ((0, _infernoShared.isUndefined)(pools)) {
        pools = {
            nonKeyed: [],
            keyed: new Map()
        };
        componentPools.set(type, pools);
    }
    if ((0, _infernoShared.isNull)(key)) {
        pools.nonKeyed.push(vNode);
    } else {
        var pool = pools.keyed.get(key);
        if ((0, _infernoShared.isUndefined)(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeVNodes = normalizeVNodes;
exports.normalize = normalize;

var _infernoShared = __webpack_require__(0);

var _VNodes = __webpack_require__(6);

function applyKey(key, vNode) {
    vNode.key = key;
    return vNode;
}
function applyKeyIfMissing(key, vNode) {
    if ((0, _infernoShared.isNumber)(key)) {
        key = '.' + key;
    }
    if ((0, _infernoShared.isNull)(vNode.key) || vNode.key[0] === '.') {
        return applyKey(key, vNode);
    }
    return vNode;
}
function applyKeyPrefix(key, vNode) {
    vNode.key = key + vNode.key;
    return vNode;
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (var len = nodes.length; index < len; index++) {
        var n = nodes[index];
        var key = currentKey + '.' + index;
        if (!(0, _infernoShared.isInvalid)(n)) {
            if ((0, _infernoShared.isArray)(n)) {
                _normalizeVNodes(n, result, 0, key);
            } else {
                if ((0, _infernoShared.isStringOrNumber)(n)) {
                    n = (0, _VNodes.createTextVNode)(n);
                } else if ((0, _VNodes.isVNode)(n) && n.dom || n.key && n.key[0] === '.') {
                    n = (0, _VNodes.cloneVNode)(n);
                }
                if ((0, _infernoShared.isNull)(n.key) || n.key[0] === '.') {
                    n = applyKey(key, n);
                } else {
                    n = applyKeyPrefix(currentKey, n);
                }
                result.push(n);
            }
        }
    }
}
function normalizeVNodes(nodes) {
    var newNodes = void 0;
    // we assign $ which basically means we've flagged this array for future note
    // if it comes back again, we need to clone it, as people are using it
    // in an immutable way
    // tslint:disable
    if (nodes['$']) {
        nodes = nodes.slice();
    } else {
        nodes['$'] = true;
    }
    // tslint:enable
    for (var i = 0, len = nodes.length; i < len; i++) {
        var n = nodes[i];
        if ((0, _infernoShared.isInvalid)(n) || (0, _infernoShared.isArray)(n)) {
            var result = (newNodes || nodes).slice(0, i);
            _normalizeVNodes(nodes, result, i, '');
            return result;
        } else if ((0, _infernoShared.isStringOrNumber)(n)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, (0, _VNodes.createTextVNode)(n)));
        } else if ((0, _VNodes.isVNode)(n) && n.dom || (0, _infernoShared.isNull)(n.key) && !(n.flags & 64 /* HasNonKeyedChildren */)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, (0, _VNodes.cloneVNode)(n)));
        } else if (newNodes) {
            newNodes.push(applyKeyIfMissing(i, (0, _VNodes.cloneVNode)(n)));
        }
    }
    return newNodes || nodes;
}
function normalizeChildren(children) {
    if ((0, _infernoShared.isArray)(children)) {
        return normalizeVNodes(children);
    } else if ((0, _VNodes.isVNode)(children) && children.dom) {
        return (0, _VNodes.cloneVNode)(children);
    }
    return children;
}
function normalizeProps(vNode, props, children) {
    if (!(vNode.flags & 28 /* Component */) && (0, _infernoShared.isNullOrUndef)(children) && !(0, _infernoShared.isNullOrUndef)(props.children)) {
        vNode.children = props.children;
    }
    if (props.ref) {
        vNode.ref = props.ref;
        delete props.ref;
    }
    if (props.events) {
        vNode.events = props.events;
    }
    if (!(0, _infernoShared.isNullOrUndef)(props.key)) {
        vNode.key = props.key;
        delete props.key;
    }
}
function normalizeElement(type, vNode) {
    if (type === 'svg') {
        vNode.flags = 128 /* SvgElement */;
    } else if (type === 'input') {
        vNode.flags = 512 /* InputElement */;
    } else if (type === 'select') {
        vNode.flags = 2048 /* SelectElement */;
    } else if (type === 'textarea') {
        vNode.flags = 1024 /* TextareaElement */;
    } else if (type === 'media') {
        vNode.flags = 256 /* MediaElement */;
    } else {
        vNode.flags = 2 /* HtmlElement */;
    }
}
function normalize(vNode) {
    var props = vNode.props;
    var hasProps = !(0, _infernoShared.isNull)(props);
    var type = vNode.type;
    var children = vNode.children;
    // convert a wrongly created type back to element
    if ((0, _infernoShared.isString)(type) && vNode.flags & 28 /* Component */) {
        normalizeElement(type, vNode);
        if (hasProps && props.children) {
            vNode.children = props.children;
            children = props.children;
        }
    }
    if (hasProps) {
        normalizeProps(vNode, props, children);
    }
    if (!(0, _infernoShared.isInvalid)(children)) {
        vNode.children = normalizeChildren(children);
    }
    if (hasProps && !(0, _infernoShared.isInvalid)(props.children)) {
        props.children = normalizeChildren(props.children);
    }
    if (process.env.NODE_ENV !== 'production') {
        // This code will be stripped out from production CODE
        // It will help users to track errors in their applications.
        var verifyKeys = function verifyKeys(vNodes) {
            var keyValues = vNodes.map(function (vnode) {
                return vnode.key;
            });
            keyValues.some(function (item, idx) {
                var hasDuplicate = keyValues.indexOf(item) !== idx;
                if (hasDuplicate) {
                    (0, _infernoShared.warning)('Inferno normalisation(...): Encountered two children with same key, all keys must be unique within its siblings. Duplicated key is:' + item);
                }
                return hasDuplicate;
            });
        };
        if (vNode.children && Array.isArray(vNode.children)) {
            verifyKeys(vNode.children);
        }
    }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestSetting = requestSetting;
exports.saveSetting = saveSetting;
// Settings -> Required by Reducers/PrimaryReducer
// --------------------------------------
// Handles manipulation of greeter settings, and
// provides wrapper functions around localstorage.

var LOCALSTORAGE_ENABLED = exports.LOCALSTORAGE_ENABLED = typeof Storage !== "undefined";

if (!LOCALSTORAGE_ENABLED) {
  window.notifications.generate("localStorage not supported.", 'error');
  throw "localStorage not supported. Theme unable to function.";
}

function requestSetting(setting) {
  var defaultSetting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  var result = localStorage.getItem(setting);

  if (result === null || result === undefined) {
    return defaultSetting;
  } else {
    return result;
  }
}

function saveSetting(setting) {
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  localStorage.setItem(setting, value);
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCommand = handleCommand;
exports.findInitialUser = findInitialUser;
exports.findInitialSession = findInitialSession;
exports.findSession = findSession;
// SystemOperations -> Required by Reducers/PrimaryReducer
// --------------------------------------
// Wraps LightDM system operations, and handles the heavy
// lifting of the more complex LightDM requests.

function executeCommand(message, boundFunction) {
  window.notifications.generate(message);

  setTimeout(function () {
    boundFunction();
  }, 1000);

  return true;
}

function handleCommand(command) {
  // What the hell is this, right?
  if (command === "shutdown" && window.lightdm.can_shutdown) {
    return executeCommand("Shutting down", window.lightdm.shutdown);
  } else if (command === "hibernate" && window.lightdm.can_hibernate) {
    return executeCommand("Hibernating system.", window.lightdm.hibernate);
  } else if (command === "reboot" && window.lightdm.can_restart) {
    return executeCommand("Rebooting system.", window.lightdm.restart);
  } else if (command === "sleep" && window.lightdm.can_suspend) {
    return executeCommand("Suspending system.", window.lightdm.suspend);
  }

  // If we have gotten this far, it's because the command is disabled or doesn't exist.
  window.notifications.generate(command + " is disabled on this system.", "error");
}

function findInitialUser() {
  // Are we currently in a lock screen?
  if (window.lightdm.lock_hint === true) {
    // Default to the very first logged in user.
    return window.lightdm.users.filter(function (user) {
      return user.logged_in;
    })[0];
  } else {
    if (window.lightdm.select_user_hint !== undefined && window.lightdm.select_user_hint !== null) {
      return window.lightdm.users.filter(function (user) {
        return user.username === window.lightdm.select_user_hint;
      })[0];
    } else {
      return window.lightdm.users[0];
    }
  }
}

function findInitialSession(user) {
  var userSession = user === undefined ? undefined : user.session;

  return this.findSession(userSession) || this.findSession(window.lightdm.default_session) || window.lightdm.sessions[0];
}

function findSession(sessionName) {
  if (sessionName === undefined || sessionName === null) {
    return false;
  }

  return window.lightdm.sessions.filter(function (session) {
    return session.name.toLowerCase() === sessionName.toLowerCase() || session.key.toLowerCase() === sessionName.toLowerCase();
  })[0];
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(5);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _SystemOperations = __webpack_require__(17);

var SystemOperations = _interopRequireWildcard(_SystemOperations);

var _WallpaperSwitcher = __webpack_require__(36);

var _WallpaperSwitcher2 = _interopRequireDefault(_WallpaperSwitcher);

var _Clock = __webpack_require__(30);

var _Clock2 = _interopRequireDefault(_Clock);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // CommandPanel -> Required by Main
// --------------------------------------
// The system management half of the greeter logic.
// Displays system info and handles Sleep, Shutdown, etc.

var createVNode = _inferno2.default.createVNode;

var CommandPanel = function (_Component) {
  _inherits(CommandPanel, _Component);

  function CommandPanel(props) {
    _classCallCheck(this, CommandPanel);

    var _this = _possibleConstructorReturn(this, (CommandPanel.__proto__ || Object.getPrototypeOf(CommandPanel)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(CommandPanel, [{
    key: 'handleCommand',
    value: function handleCommand(command, disabled, event) {
      event.preventDefault();

      if (disabled !== false) {
        window.notifications.generate(command + ' is disabled on this system.', "error");
        return false;
      }

      SystemOperations.handleCommand(command);
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

        return createVNode(2, 'div', {
          'className': classes.join(' ')
        }, [createVNode(2, 'div', {
          'className': 'icon-wrapper'
        }, createVNode(2, 'div', {
          'className': 'icon'
        })), createVNode(2, 'div', {
          'className': 'text'
        }, command)], {
          'onClick': _this2.handleCommand.bind(_this2, command, disabled)
        });
      });

      var classes = ['commands-wrapper'];

      return createVNode(2, 'div', {
        'className': classes.join(' ')
      }, rows);
    }
  }, {
    key: 'render',
    value: function render() {
      var hostname = window.lightdm.hostname;
      var commands = this.generateCommands();

      return createVNode(2, 'div', null, [createVNode(16, _WallpaperSwitcher2.default), commands, createVNode(2, 'div', {
        'className': 'bottom'
      }, [createVNode(2, 'div', {
        'className': 'left hostname'
      }, hostname), createVNode(16, _Clock2.default)])]);
    }
  }]);

  return CommandPanel;
}(_infernoComponent2.default);

exports.default = CommandPanel;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(5);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // DateDisplay -> Required by Main
// --------------------------------------
// Displays date below the login window.

var createVNode = _inferno2.default.createVNode;

var DateDisplay = function (_Component) {
  _inherits(DateDisplay, _Component);

  function DateDisplay(props) {
    _classCallCheck(this, DateDisplay);

    var _this = _possibleConstructorReturn(this, (DateDisplay.__proto__ || Object.getPrototypeOf(DateDisplay)).call(this, props));

    _this.state = {
      "formattedString": undefined,
      "initialized": false,
      "dayName": undefined,
      "dayValue": undefined,
      "formattedDayValue": undefined,
      "monthName": undefined,
      "monthValue": undefined
    };
    return _this;
  }

  _createClass(DateDisplay, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      // Wait two seconds, so that the clock can render first and they fade in sequentially rather than in parallel.
      setTimeout(function () {
        _this2.setDate();
      }, 2000);
    }
  }, {
    key: 'generateDateString',
    value: function generateDateString() {
      var dateString = createVNode(2, 'span', null, [createVNode(2, 'em', null, this.state.dayName), ', the ', createVNode(2, 'em', null, this.state.formattedDayValue), ' of ', createVNode(2, 'em', null, this.state.monthName)]);

      return dateString;
    }
  }, {
    key: 'setDate',
    value: function setDate() {
      var _this3 = this;

      var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      var now = new Date();

      var dayValue = now.getDate();
      var dayName = dayNames[now.getUTCDay()];
      var monthValue = now.getMonth();
      var monthName = monthNames[monthValue];

      var formattedDayValue = void 0;

      // Because Javascript is terrible, (x <= y <= z) becomes ((x <= y) && (y <= z))
      if (4 <= dayValue && dayValue <= 20 || 24 <= dayValue && dayValue <= 30) {
        formattedDayValue = dayValue + "th";
      } else {
        formattedDayValue = dayValue + ["st", "nd", "rd"][dayValue % 10 - 1];
      }

      var formattedDateString = '<em>' + dayName + '</em>, the <em>' + formattedDayValue + '</em> of <em>' + monthName + '</em>';

      this.setState({
        "formattedString": formattedDateString,
        "initialized": true,
        "dayName": dayName,
        "dayValue": dayValue,
        "formattedDayValue": formattedDayValue,
        "monthName": monthName,
        "monthValue": monthValue
      });

      setTimeout(function () {
        _this3.setDate();
      }, 30 * 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var dateClasses = ["date"];
      var dateString = this.generateDateString();

      if (this.state.initialized === true) {
        dateClasses.push("loaded");
      }

      return createVNode(2, 'div', {
        'className': dateClasses.join(' ')
      }, dateString);
    }
  }]);

  return DateDisplay;
}(_infernoComponent2.default);

exports.default = DateDisplay;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(5);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _UserSwitcher = __webpack_require__(35);

var _UserSwitcher2 = _interopRequireDefault(_UserSwitcher);

var _UserPanelForm = __webpack_require__(34);

var _UserPanelForm2 = _interopRequireDefault(_UserPanelForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // UserPanel -> Required by Main
// --------------------------------------
// The login management half of the greeter logic.

var FADE_IN_DURATION = 200;
var ERROR_SHAKE_DURATION = 600;

var createVNode = _inferno2.default.createVNode;

var LoginPanel = function (_Component) {
  _inherits(LoginPanel, _Component);

  function LoginPanel(props) {
    _classCallCheck(this, LoginPanel);

    var _this = _possibleConstructorReturn(this, (LoginPanel.__proto__ || Object.getPrototypeOf(LoginPanel)).call(this, props));

    _this.store = _this.props.store;
    _this.storeState = _this.store.getState();

    _this.unsubscribe = _this.store.subscribe(function () {
      _this.storeState = _this.store.getState();
    });

    _this.state = {
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
          window.lightdm.start_session_sync(_this2.storeState.session.key);
        } else {
          _this2.rejectPassword();
        }
      };

      window.autologin_timer_expired = function () {
        window.notifications.generate("Autologin expired.");
      };
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

      if (window.debug === true) {
        if (this.state.password.toLowerCase() !== "password") {
          this.rejectPassword();
        } else {
          window.notifications.generate('You are now logged in as ' + this.storeState.user.display_name + ' to ' + this.storeState.session.name + '.', 'success');
          this.setState({
            "password": ""
          });
        }
      } else {
        window.lightdm.authenticate(this.storeState.user.username);
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
          return user.username !== _this3.storeState.user.username;
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
      this.store.dispatch({
        'type': 'SET_ACTIVE_SESSION',
        'session': session
      });

      this.setState({
        "dropdownActive": false
      });
    }
  }, {
    key: 'setActiveUser',
    value: function setActiveUser(user, isBypass) {
      var _this4 = this;

      this.store.dispatch({
        'type': 'SET_ACTIVE_USER',
        'user': user
      });

      // Fade in, except when switching between 1 of 2 users.
      if (isBypass === false || isBypass === undefined) {
        this.setState({
          "fadeIn": true,
          "switcherActive": false
        });

        setTimeout(function () {
          _this4.setState({
            "fadeIn": false
          });
        }, FADE_IN_DURATION);
      } else {
        this.setState({
          "switcherActive": false
        });
      }
    }
  }, {
    key: 'rejectPassword',
    value: function rejectPassword() {
      var _this5 = this;

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
  }, {
    key: 'generateSwitchUserButton',
    value: function generateSwitchUserButton() {
      var classes = ['left'];

      if (window.lightdm.users.length < 2) {
        classes.push("disabled");
      }

      return createVNode(2, 'div', {
        'className': classes.join(' ')
      }, 'SWITCH USER', {
        'onClick': this.handleSwitcherClick.bind(this)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var loginPanelClasses = ['login-panel-main'];

      if (this.state.fadeIn === true) {
        loginPanelClasses.push('fadein');
      }

      if (this.state.switcherActive === true) {
        loginPanelClasses.push('fadeout');
      }

      var switchUserButton = this.generateSwitchUserButton();

      return createVNode(2, 'div', {
        'className': 'login-panel-contents'
      }, [createVNode(2, 'div', {
        'className': loginPanelClasses.join(' ')
      }, [createVNode(2, 'div', {
        'className': 'avatar-container'
      }, createVNode(2, 'div', {
        'className': 'avatar-background'
      }, createVNode(2, 'div', {
        'className': 'avatar-mask'
      }, createVNode(2, 'img', {
        'className': 'user-avatar',
        'src': this.storeState.user.image
      })))), createVNode(16, _UserPanelForm2.default, {
        'activeSession': this.storeState.session,
        'activeUser': this.storeState.user,
        'dropdownActive': this.state.dropdownActive,
        'password': this.state.password,
        'passwordFailed': this.state.passwordFailed,
        'handleLoginSubmit': this.handleLoginSubmit.bind(this),
        'handleDropdownClick': this.handleDropdownClick.bind(this),
        'handleDropdownLeave': this.handleDropdownLeave.bind(this),
        'handlePasswordInput': this.handlePasswordInput.bind(this),
        'setActiveSession': this.setActiveSession.bind(this)
      }), createVNode(2, 'div', {
        'className': 'bottom'
      }, switchUserButton)]), createVNode(16, _UserSwitcher2.default, {
        'active': this.state.switcherActive,
        'activeUser': this.storeState.user,
        'setActiveUser': this.setActiveUser.bind(this)
      })]);
    }
  }]);

  return LoginPanel;
}(_infernoComponent2.default);

exports.default = LoginPanel;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimaryReducer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getDefaultState = getDefaultState;

var _SettingsReducer = __webpack_require__(13);

var _SystemOperations = __webpack_require__(17);

var SystemOperations = _interopRequireWildcard(_SystemOperations);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getDefaultState() {
  return {
    "info": {
      "hostname": window.lightdm.hostname,
      "language": window.lightdm.language
    },
    "user": SystemOperations.findInitialUser(),
    "session": SystemOperations.findInitialSession()
  };
}

var PrimaryReducer = exports.PrimaryReducer = function PrimaryReducer(state, action) {
  if (action.type.startsWith("SETTINGS")) {
    return (0, _SettingsReducer.SettingsReducer)(state, action);
  }

  switch (action.type) {
    case "AUTH_SET_ACTIVE_SESSION":
      var session = action.session;

      if ((typeof session === "undefined" ? "undefined" : _typeof(session)) === _typeof(String())) {
        session = SystemOperations.findSession(session);
      }

      return _extends({}, state, { "session": session });

    case "AUTH_SET_ACTIVE_USER":
      return _extends({}, state, { "user": action.user });

    default:
      return state;
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toArray = toArray;
exports.isStatefulComponent = isStatefulComponent;
exports.isStringOrNumber = isStringOrNumber;
exports.isNullOrUndef = isNullOrUndef;
exports.isInvalid = isInvalid;
exports.isFunction = isFunction;
exports.isAttrAnEvent = isAttrAnEvent;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isNull = isNull;
exports.isTrue = isTrue;
exports.isUndefined = isUndefined;
exports.isObject = isObject;
exports.throwError = throwError;
exports.warning = warning;
exports.Lifecycle = Lifecycle;
exports.copyPropsTo = copyPropsTo;
var NO_OP = exports.NO_OP = '$NO_OP';
var ERROR_MSG = exports.ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
var isBrowser = exports.isBrowser = typeof window !== 'undefined' && window.document;
function toArray(children) {
    return isArray(children) ? children : children ? [children] : children;
}
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
var isArray = exports.isArray = Array.isArray;
function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
function isStringOrNumber(obj) {
    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
    return type === 'string' || type === 'number';
}
function isNullOrUndef(obj) {
    return isUndefined(obj) || isNull(obj);
}
function isInvalid(obj) {
    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
}
function isFunction(obj) {
    return typeof obj === 'function';
}
function isAttrAnEvent(attr) {
    return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
}
function isString(obj) {
    return typeof obj === 'string';
}
function isNumber(obj) {
    return typeof obj === 'number';
}
function isNull(obj) {
    return obj === null;
}
function isTrue(obj) {
    return obj === true;
}
function isUndefined(obj) {
    return obj === undefined;
}
function isObject(o) {
    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error('Inferno Error: ' + message);
}
function warning(message) {
    console.warn(message);
}
function Lifecycle() {
    this.listeners = [];
}
Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger() {
    for (var i = 0, len = this.listeners.length; i < len; i++) {
        this.listeners[i]();
    }
};
function copyPropsTo(copyFrom, copyTo) {
    for (var prop in copyFrom) {
        if (isUndefined(copyTo[prop])) {
            copyTo[prop] = copyFrom[prop];
        }
    }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleEvent = handleEvent;

var _infernoShared = __webpack_require__(0);

var isiOS = _infernoShared.isBrowser && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var delegatedEvents = new Map();
function handleEvent(name, lastEvent, nextEvent, dom) {
    var delegatedRoots = delegatedEvents.get(name);
    if (nextEvent) {
        if (!delegatedRoots) {
            delegatedRoots = { items: new Map(), count: 0, docEvent: null };
            delegatedRoots.docEvent = attachEventToDocument(name, delegatedRoots);
            delegatedEvents.set(name, delegatedRoots);
        }
        if (!lastEvent) {
            delegatedRoots.count++;
            if (isiOS && name === 'onClick') {
                trapClickOnNonInteractiveElement(dom);
            }
        }
        delegatedRoots.items.set(dom, nextEvent);
    } else if (delegatedRoots) {
        if (delegatedRoots.items.has(dom)) {
            delegatedRoots.count--;
            delegatedRoots.items.delete(dom);
            if (delegatedRoots.count === 0) {
                document.removeEventListener(normalizeEventName(name), delegatedRoots.docEvent);
                delegatedEvents.delete(name);
            }
        }
    }
}
function dispatchEvent(event, dom, items, count, eventData) {
    var eventsToTrigger = items.get(dom);
    if (eventsToTrigger) {
        count--;
        // linkEvent object
        eventData.dom = dom;
        if (eventsToTrigger.event) {
            eventsToTrigger.event(eventsToTrigger.data, event);
        } else {
            eventsToTrigger(event);
        }
        if (eventData.stopPropagation) {
            return;
        }
    }
    if (count > 0) {
        var parentDom = dom.parentNode;
        if (parentDom || parentDom === document.body) {
            dispatchEvent(event, parentDom, items, count, eventData);
        }
    }
}
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function attachEventToDocument(name, delegatedRoots) {
    var docEvent = function docEvent(event) {
        var eventData = {
            stopPropagation: false,
            dom: document
        };
        // we have to do this as some browsers recycle the same Event between calls
        // so we need to make the property configurable
        Object.defineProperty(event, 'currentTarget', {
            configurable: true,
            get: function get() {
                return eventData.dom;
            }
        });
        event.stopPropagation = function () {
            eventData.stopPropagation = true;
        };
        var count = delegatedRoots.count;
        if (count > 0) {
            dispatchEvent(event, event.target, delegatedRoots.items, count, eventData);
        }
    };
    document.addEventListener(normalizeEventName(name), docEvent);
    return docEvent;
}
function emptyFn() {}
function trapClickOnNonInteractiveElement(dom) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
    // Just set it using the onclick property so that we don't have to manage any
    // bookkeeping for it. Not sure if we need to clear it when the listener is
    // removed.
    // TODO: Only do this for the relevant Safaris maybe?
    dom.onclick = emptyFn;
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = linkEvent;
function linkEvent(data, event) {
    return { data: data, event: event };
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.normalizeChildNodes = normalizeChildNodes;
exports.default = hydrateRoot;

var _infernoShared = __webpack_require__(0);

var _options = __webpack_require__(4);

var _options2 = _interopRequireDefault(_options);

var _constants = __webpack_require__(10);

var _mounting = __webpack_require__(11);

var _patching = __webpack_require__(7);

var _rendering = __webpack_require__(8);

var _utils = __webpack_require__(2);

var _processElement = __webpack_require__(9);

var _processElement2 = _interopRequireDefault(_processElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function normalizeChildNodes(parentDom) {
    var dom = parentDom.firstChild;
    while (dom) {
        if (dom.nodeType === 8) {
            if (dom.data === '!') {
                var placeholder = document.createTextNode('');
                parentDom.replaceChild(placeholder, dom);
                dom = dom.nextSibling;
            } else {
                var lastDom = dom.previousSibling;
                parentDom.removeChild(dom);
                dom = lastDom || parentDom.firstChild;
            }
        } else {
            dom = dom.nextSibling;
        }
    }
}
function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    var type = vNode.type;
    var ref = vNode.ref;
    vNode.dom = dom;
    var defaultProps = type.defaultProps;
    var props = void 0;
    if (!(0, _infernoShared.isUndefined)(defaultProps)) {
        // When defaultProps are used we need to create new Object
        props = vNode.props || {};
        (0, _infernoShared.copyPropsTo)(defaultProps, props);
        vNode.props = props;
    } else {
        props = vNode.props || _utils.EMPTY_OBJ;
    }
    if (isClass) {
        var _isSVG = dom.namespaceURI === _constants.svgNS;
        var instance = (0, _utils.createClassComponentInstance)(vNode, type, props, context, _isSVG);
        var input = instance._lastInput;
        instance._vComponent = vNode;
        instance._vNode = vNode;
        hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
        (0, _mounting.mountClassComponentCallbacks)(vNode, ref, instance, lifecycle);
        _options2.default.findDOMNodeEnabled && _rendering.componentToDOMNodeMap.set(instance, dom);
        vNode.children = instance;
    } else {
        var _input = (0, _utils.createFunctionalComponentInput)(vNode, type, props, context);
        hydrate(_input, dom, lifecycle, context, isSVG);
        vNode.children = _input;
        vNode.dom = _input.dom;
        (0, _mounting.mountFunctionalComponentCallbacks)(ref, dom, lifecycle);
    }
    return dom;
}
function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    var tag = vNode.type;
    var children = vNode.children;
    var props = vNode.props;
    var events = vNode.events;
    var flags = vNode.flags;
    var ref = vNode.ref;
    if (isSVG || flags & 128 /* SvgElement */) {
        isSVG = true;
    }
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== tag) {
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.warning)('Inferno hydration: Server-side markup doesn\'t match client-side markup or Initial render target is not empty');
        }
        var newDom = (0, _mounting.mountElement)(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        (0, _utils.replaceChild)(dom.parentNode, newDom, dom);
        return newDom;
    }
    vNode.dom = dom;
    if (children) {
        hydrateChildren(children, dom, lifecycle, context, isSVG);
    }
    var hasControlledValue = false;
    if (!(flags & 2 /* HtmlElement */)) {
        hasControlledValue = (0, _processElement2.default)(flags, vNode, dom, false);
    }
    if (props) {
        for (var prop in props) {
            (0, _patching.patchProp)(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
    }
    if (events) {
        for (var name in events) {
            (0, _patching.patchEvent)(name, null, events[name], dom);
        }
    }
    if (ref) {
        (0, _mounting.mountRef)(dom, ref, lifecycle);
    }
    return dom;
}
function hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
    normalizeChildNodes(parentDom);
    var dom = parentDom.firstChild;
    if ((0, _infernoShared.isArray)(children)) {
        for (var i = 0, len = children.length; i < len; i++) {
            var child = children[i];
            if (!(0, _infernoShared.isNull)(child) && (0, _infernoShared.isObject)(child)) {
                if (dom) {
                    dom = hydrate(child, dom, lifecycle, context, isSVG);
                    dom = dom.nextSibling;
                } else {
                    (0, _mounting.mount)(child, parentDom, lifecycle, context, isSVG);
                }
            }
        }
    } else if ((0, _infernoShared.isStringOrNumber)(children)) {
        if (dom && dom.nodeType === 3) {
            if (dom.nodeValue !== children) {
                dom.nodeValue = children;
            }
        } else if (children) {
            parentDom.textContent = children;
        }
        dom = dom.nextSibling;
    } else if ((0, _infernoShared.isObject)(children)) {
        hydrate(children, dom, lifecycle, context, isSVG);
        dom = dom.nextSibling;
    }
    // clear any other DOM nodes, there should be only a single entry for the root
    while (dom) {
        var nextSibling = dom.nextSibling;
        parentDom.removeChild(dom);
        dom = nextSibling;
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        var newDom = (0, _mounting.mountText)(vNode, null);
        vNode.dom = newDom;
        (0, _utils.replaceChild)(dom.parentNode, newDom, dom);
        return newDom;
    }
    var text = vNode.children;
    if (dom.nodeValue !== text) {
        dom.nodeValue = text;
    }
    vNode.dom = dom;
    return dom;
}
function hydrateVoid(vNode, dom) {
    vNode.dom = dom;
    return dom;
}
function hydrate(vNode, dom, lifecycle, context, isSVG) {
    var flags = vNode.flags;
    if (flags & 28 /* Component */) {
            return hydrateComponent(vNode, dom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
        } else if (flags & 3970 /* Element */) {
            return hydrateElement(vNode, dom, lifecycle, context, isSVG);
        } else if (flags & 1 /* Text */) {
            return hydrateText(vNode, dom);
        } else if (flags & 4096 /* Void */) {
            return hydrateVoid(vNode, dom);
        } else {
        if (process.env.NODE_ENV !== 'production') {
            (0, _infernoShared.throwError)('hydrate() expects a valid VNode, instead it received an object with the type "' + (typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) + '".');
        }
        (0, _infernoShared.throwError)();
    }
}
function hydrateRoot(input, parentDom, lifecycle) {
    var dom = parentDom && parentDom.firstChild;
    if (dom) {
        hydrate(input, dom, lifecycle, _utils.EMPTY_OBJ, false);
        dom = parentDom.firstChild;
        // clear any other DOM nodes, there should be only a single entry for the root
        while (dom = dom.nextSibling) {
            parentDom.removeChild(dom);
        }
        return true;
    }
    return false;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.processInput = processInput;
exports.applyValue = applyValue;

var _infernoShared = __webpack_require__(0);

var _processElement = __webpack_require__(9);

var _utils = __webpack_require__(2);

function isCheckedType(type) {
    return type === 'checkbox' || type === 'radio';
}
function isControlled(props) {
    var usesChecked = isCheckedType(props.type);
    return usesChecked ? !(0, _infernoShared.isNullOrUndef)(props.checked) : !(0, _infernoShared.isNullOrUndef)(props.value);
}
function onTextInputChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || _utils.EMPTY_OBJ;
    var dom = vNode.dom;
    if (events.onInput) {
        var event = events.onInput;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (events.oninput) {
        events.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events
    // so we need to get it from the context of `this` again
    applyValue(this.vNode, dom);
}
function wrappedOnChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || _utils.EMPTY_OBJ;
    var event = events.onChange;
    if (event.event) {
        event.event(event.data, e);
    } else {
        event(e);
    }
}
function onCheckboxChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || _utils.EMPTY_OBJ;
    var dom = vNode.dom;
    if (events.onClick) {
        var event = events.onClick;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (events.onclick) {
        events.onclick(e);
    }
    // the user may have updated the vNode from the above onClick events
    // so we need to get it from the context of `this` again
    applyValue(this.vNode, dom);
}
function handleAssociatedRadioInputs(name) {
    var inputs = document.querySelectorAll('input[type="radio"][name="' + name + '"]');
    [].forEach.call(inputs, function (dom) {
        var inputWrapper = _processElement.wrappers.get(dom);
        if (inputWrapper) {
            var props = inputWrapper.vNode.props;
            if (props) {
                dom.checked = inputWrapper.vNode.props.checked;
            }
        }
    });
}
function processInput(vNode, dom) {
    var props = vNode.props || _utils.EMPTY_OBJ;
    applyValue(vNode, dom);
    if (isControlled(props)) {
        var inputWrapper = _processElement.wrappers.get(dom);
        if (!inputWrapper) {
            inputWrapper = {
                vNode: vNode
            };
            if (isCheckedType(props.type)) {
                dom.onclick = onCheckboxChange.bind(inputWrapper);
                dom.onclick.wrapped = true;
            } else {
                dom.oninput = onTextInputChange.bind(inputWrapper);
                dom.oninput.wrapped = true;
            }
            if (props.onChange) {
                dom.onchange = wrappedOnChange.bind(inputWrapper);
                dom.onchange.wrapped = true;
            }
            _processElement.wrappers.set(dom, inputWrapper);
        }
        inputWrapper.vNode = vNode;
        return true;
    }
    return false;
}
function applyValue(vNode, dom) {
    var props = vNode.props || _utils.EMPTY_OBJ;
    var type = props.type;
    var value = props.value;
    var checked = props.checked;
    var multiple = props.multiple;
    var defaultValue = props.defaultValue;
    var hasValue = !(0, _infernoShared.isNullOrUndef)(value);
    if (type && type !== dom.type) {
        dom.type = type;
    }
    if (multiple && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!(0, _infernoShared.isNullOrUndef)(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + '';
    }
    if (isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        dom.checked = checked;
        if (type === 'radio' && props.name) {
            handleAssociatedRadioInputs(props.name);
        }
    } else {
        if (hasValue && dom.value !== value) {
            dom.value = value;
        } else if (!(0, _infernoShared.isNullOrUndef)(checked)) {
            dom.checked = checked;
        }
    }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.processSelect = processSelect;
exports.applyValue = applyValue;

var _infernoShared = __webpack_require__(0);

var _VNodes = __webpack_require__(6);

var _processElement = __webpack_require__(9);

var _utils = __webpack_require__(2);

function isControlled(props) {
    return !(0, _infernoShared.isNullOrUndef)(props.value);
}
function updateChildOptionGroup(vNode, value) {
    var type = vNode.type;
    if (type === 'optgroup') {
        var children = vNode.children;
        if ((0, _infernoShared.isArray)(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        } else if ((0, _VNodes.isVNode)(children)) {
            updateChildOption(children, value);
        }
    } else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    var props = vNode.props || _utils.EMPTY_OBJ;
    var dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if ((0, _infernoShared.isArray)(value) && value.indexOf(props.value) !== -1 || props.value === value) {
        dom.selected = true;
    } else {
        dom.selected = props.selected || false;
    }
}
function onSelectChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || _utils.EMPTY_OBJ;
    var dom = vNode.dom;
    if (events.onChange) {
        var event = events.onChange;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (events.onchange) {
        events.onchange(e);
    }
    // the user may have updated the vNode from the above onChange events
    // so we need to get it from the context of `this` again
    applyValue(this.vNode, dom);
}
function processSelect(vNode, dom) {
    var props = vNode.props || _utils.EMPTY_OBJ;
    applyValue(vNode, dom);
    if (isControlled(props)) {
        var selectWrapper = _processElement.wrappers.get(dom);
        if (!selectWrapper) {
            selectWrapper = {
                vNode: vNode
            };
            dom.onchange = onSelectChange.bind(selectWrapper);
            dom.onchange.wrapped = true;
            _processElement.wrappers.set(dom, selectWrapper);
        }
        selectWrapper.vNode = vNode;
        return true;
    }
    return false;
}
function applyValue(vNode, dom) {
    var props = vNode.props || _utils.EMPTY_OBJ;
    if (props.multiple !== dom.multiple) {
        dom.multiple = props.multiple;
    }
    var children = vNode.children;
    if (!(0, _infernoShared.isInvalid)(children)) {
        var value = props.value;
        if ((0, _infernoShared.isArray)(children)) {
            for (var i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        } else if ((0, _VNodes.isVNode)(children)) {
            updateChildOptionGroup(children, value);
        }
    }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.processTextarea = processTextarea;
exports.applyValue = applyValue;

var _infernoShared = __webpack_require__(0);

var _processElement = __webpack_require__(9);

var _utils = __webpack_require__(2);

function isControlled(props) {
    return !(0, _infernoShared.isNullOrUndef)(props.value);
}
function wrappedOnChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || _utils.EMPTY_OBJ;
    var event = events.onChange;
    if (event.event) {
        event.event(event.data, e);
    } else {
        event(e);
    }
}
function onTextareaInputChange(e) {
    var vNode = this.vNode;
    var events = vNode.events || _utils.EMPTY_OBJ;
    var dom = vNode.dom;
    if (events.onInput) {
        var event = events.onInput;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    } else if (events.oninput) {
        events.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events
    // so we need to get it from the context of `this` again
    applyValue(this.vNode, dom, false);
}
function processTextarea(vNode, dom, mounting) {
    var props = vNode.props || _utils.EMPTY_OBJ;
    applyValue(vNode, dom, mounting);
    var textareaWrapper = _processElement.wrappers.get(dom);
    if (isControlled(props)) {
        if (!textareaWrapper) {
            textareaWrapper = {
                vNode: vNode
            };
            dom.oninput = onTextareaInputChange.bind(textareaWrapper);
            dom.oninput.wrapped = true;
            if (props.onChange) {
                dom.onchange = wrappedOnChange.bind(textareaWrapper);
                dom.onchange.wrapped = true;
            }
            _processElement.wrappers.set(dom, textareaWrapper);
        }
        textareaWrapper.vNode = vNode;
        return true;
    }
    return false;
}
function applyValue(vNode, dom, mounting) {
    var props = vNode.props || _utils.EMPTY_OBJ;
    var value = props.value;
    var domValue = dom.value;
    if ((0, _infernoShared.isNullOrUndef)(value)) {
        if (mounting) {
            var defaultValue = props.defaultValue;
            if (!(0, _infernoShared.isNullOrUndef)(defaultValue)) {
                if (defaultValue !== domValue) {
                    dom.value = defaultValue;
                }
            } else if (domValue !== '') {
                dom.value = '';
            }
        }
    } else {
        /* There is value so keep it controlled */
        if (domValue !== value) {
            dom.value = value;
        }
    }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(5);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _Utils = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Clock -> Required by Components/CommandPanel
// --------------------------------------
// Just a clock.

var createVNode = _inferno2.default.createVNode;

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
    key: 'updateClock',
    value: function updateClock() {
      var _this3 = this;

      var now = new Date();
      var hours = (0, _Utils.padZeroes)(now.getHours());
      var minutes = (0, _Utils.padZeroes)(now.getMinutes());
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

      return createVNode(2, 'div', {
        'className': classes.join(' ')
      }, currentTime);
    }
  }]);

  return Clock;
}(_infernoComponent2.default);

exports.default = Clock;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createVNode = _inferno2.default.createVNode; // PasswordField -> Required by Components/UserPanelForm
// --------------------------------------
// Simple password input field.

var PasswordField = function PasswordField(props) {
  var classes = ['user-password'];

  if (props.passwordFailed === true) {
    classes.push('error');
  }

  return createVNode(512, 'input', {
    'type': 'password',
    'placeholder': '*******************',
    'className': classes.join(' '),
    'value': props.password
  }, null, {
    'onInput': props.handlePasswordInput
  });
};

exports.default = PasswordField;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(5);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _SessionRow = __webpack_require__(33);

var _SessionRow2 = _interopRequireDefault(_SessionRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // SessionDropdown -> Required by Components/UserPanelForm
// --------------------------------------
// Displays session rows as a dropdown to handle
// session switching.

var createVNode = _inferno2.default.createVNode;

var SessionDropdown = function (_Component) {
  _inherits(SessionDropdown, _Component);

  function SessionDropdown(props) {
    _classCallCheck(this, SessionDropdown);

    var _this = _possibleConstructorReturn(this, (SessionDropdown.__proto__ || Object.getPrototypeOf(SessionDropdown)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(SessionDropdown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Sort by active, then alphabetical.
      // Doing this requires using sort in reverse.
      var rows = window.lightdm.sessions.sort(function (a, b) {
        return a.name.toUpperCase() > b.name.toUpperCase();
      }).sort(function (a, b) {
        return b.key.toLowerCase() === _this2.props.activeSession.key.toLowerCase() ? 1 : -1;
      }).map(function (session) {
        return createVNode(16, _SessionRow2.default, {
          'activeSession': _this2.props.activeSession,
          'session': session,
          'handleDropdownClick': _this2.props.handleDropdownClick,
          'handleDropdownLeave': _this2.props.handleDropdownLeave,
          'setActiveSession': _this2.props.setActiveSession
        });
      });

      var classes = ['dropdown', 'user-session'];

      if (this.props.dropdownActive === true) {
        classes.push('active');
      }

      return createVNode(2, 'div', {
        'className': classes.join(' ')
      }, rows, {
        'onMouseLeave': this.props.handleDropdownLeave
      });
    }
  }]);

  return SessionDropdown;
}(_infernoComponent2.default);

exports.default = SessionDropdown;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createVNode = _inferno2.default.createVNode; // SessionRow -> Required by Components/SessionDropdown
// --------------------------------------
// Just a row.

var SessionRow = function SessionRow(props) {
  var classes = ["dropdown-item"];
  var eventHandler = props.setActiveSession.bind(undefined, props.session.key);

  if (props.session.key === props.activeSession.key) {
    eventHandler = props.handleDropdownClick;
    classes.push("active");
  }

  return createVNode(2, "div", {
    "className": classes.join(' ')
  }, props.session.name, {
    "onClick": eventHandler
  }, props.session.key);
};

exports.default = SessionRow;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPanelForm = undefined;

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _SessionDropdown = __webpack_require__(32);

var _SessionDropdown2 = _interopRequireDefault(_SessionDropdown);

var _PasswordField = __webpack_require__(31);

var _PasswordField2 = _interopRequireDefault(_PasswordField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createVNode = _inferno2.default.createVNode; // UserPanelForm -> Required by Components/UserPanel
// --------------------------------------
// The form displayed within the User Panel to handle
// user input for the authentication process.

var UserPanelForm = exports.UserPanelForm = function UserPanelForm(props) {
  return createVNode(2, 'form', {
    'className': 'login-form'
  }, [createVNode(2, 'div', {
    'className': 'user-username'
  }, props.activeUser.display_name), createVNode(2, 'div', {
    'className': 'user-password-container'
  }, createVNode(16, _PasswordField2.default, {
    'password': props.password,
    'passwordFailed': props.passwordFailed,
    'handlePasswordInput': props.handlePasswordInput
  })), createVNode(2, 'div', {
    'className': 'submit-row-container'
  }, createVNode(2, 'div', {
    'className': 'submit-row'
  }, [createVNode(2, 'div', {
    'className': 'left'
  }, createVNode(16, _SessionDropdown2.default, {
    'activeSession': props.activeSession,
    'dropdownActive': props.dropdownActive,
    'handleDropdownClick': props.handleDropdownClick,
    'handleDropdownLeave': props.handleDropdownLeave,
    'setActiveSession': props.setActiveSession
  })), createVNode(2, 'div', {
    'className': 'right'
  }, createVNode(512, 'input', {
    'type': 'submit',
    'value': 'GO',
    'className': 'submit-button'
  }))]))], {
    'onSubmit': props.handleLoginSubmit
  });
};

exports.default = UserPanelForm;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(5);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // UserSwitcher -> Required by Components/UserPanel
// --------------------------------------
// Handles (poorly) the task of switching between
// multiple users on the same system.

var FADE_DURATION = 200;

var createVNode = _inferno2.default.createVNode;

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

        return createVNode(2, 'li', {
          'className': classes.join(' ')
        }, [createVNode(2, 'div', {
          'className': 'avatar-background'
        }, createVNode(2, 'div', {
          'className': 'avatar-mask'
        }, createVNode(2, 'img', {
          'className': 'user-avatar',
          'src': user.image
        }))), createVNode(2, 'div', {
          'className': 'avatar-name'
        }, [createVNode(2, 'div', {
          'className': 'username'
        }, user.display_name), createVNode(2, 'div', {
          'className': 'real-name'
        }, user.real_name)])], {
          'onClick': _this3.handleUserClick.bind(_this3, index)
        });
      });

      // Very hacky. Add an extra copy of the last element to the beginning of the list
      // if the first element in the list is currently selected.
      if (activeIndex === 0) {
        var user = window.lightdm.users[window.lightdm.users.length - 1];
        avatars.splice(0, 0, createVNode(2, 'li', {
          'className': 'avatar-container previous'
        }, [createVNode(2, 'div', {
          'className': 'avatar-background'
        }, createVNode(2, 'div', {
          'className': 'avatar-mask'
        }, createVNode(2, 'img', {
          'className': 'user-avatar',
          'src': user.image
        }))), createVNode(2, 'div', {
          'className': 'avatar-name'
        }, [createVNode(2, 'div', {
          'className': 'username'
        }, user.display_name), createVNode(2, 'div', {
          'className': 'real-name'
        }, user.real_name)])], {
          'onClick': this.handleUserClick.bind(this, window.lightdm.users.length - 1)
        }));
      }

      // Very hacky. Add an extra copy of the first element to the end of the list
      // if the last element in the list is currently selected.
      if (activeIndex === window.lightdm.users.length - 1) {
        var _user = window.lightdm.users[0];
        avatars.push(createVNode(2, 'li', {
          'className': 'avatar-container next'
        }, [createVNode(2, 'div', {
          'className': 'avatar-background'
        }, createVNode(2, 'div', {
          'className': 'avatar-mask'
        }, createVNode(2, 'img', {
          'className': 'user-avatar',
          'src': _user.image
        }))), createVNode(2, 'div', {
          'className': 'avatar-name'
        }, [createVNode(2, 'div', {
          'className': 'username'
        }, _user.display_name), createVNode(2, 'div', {
          'className': 'real-name'
        }, _user.real_name)])], {
          'onClick': this.handleUserClick.bind(this, 0)
        }));
      }

      return createVNode(2, 'ul', {
        'className': 'avatar-slider'
      }, avatars);
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = ['login-panel-switcher'];

      var userList = this.generateUserList();
      var userCount = window.lightdm.users.length;

      if (this.props.active === true) {
        classes.push("active");
      } else if (this.state.fadeOut === true) {
        classes.push("fadeout");
      }

      return createVNode(2, 'div', {
        'className': classes.join(' ')
      }, [createVNode(2, 'div', {
        'className': 'header'
      }, ['User ', createVNode(2, 'em', null, this.state.selectedUserIndex + 1), ' of ', createVNode(2, 'em', null, userCount)]), userList, createVNode(2, 'div', {
        'className': 'bottom'
      }, createVNode(2, 'div', {
        'className': 'left'
      }, 'BACK'), {
        'onClick': this.handleBackButton.bind(this)
      })]);
    }
  }]);

  return UserSwitcher;
}(_infernoComponent2.default);

exports.default = UserSwitcher;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(5);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _WallpaperOperations = __webpack_require__(37);

var WallpaperOperations = _interopRequireWildcard(_WallpaperOperations);

var _Settings = __webpack_require__(16);

var Settings = _interopRequireWildcard(_Settings);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // WallpaperSwitcher -> Required by Components/CommandPanel
// --------------------------------------
// Serves to handle wallpaper switching through DOM manipulation.

var FADEOUT_TIME = 600;

var createVNode = _inferno2.default.createVNode;

var WallpaperSwitcher = function (_Component) {
  _inherits(WallpaperSwitcher, _Component);

  function WallpaperSwitcher(props) {
    _classCallCheck(this, WallpaperSwitcher);

    var _this = _possibleConstructorReturn(this, (WallpaperSwitcher.__proto__ || Object.getPrototypeOf(WallpaperSwitcher)).call(this, props));

    var wallpaperDirectory = WallpaperOperations.getWallpaperDirectory();
    var wallpapers = WallpaperOperations.getWallpapers(wallpaperDirectory);

    _this.cyclerBackground = undefined;
    _this.cyclerForeground = undefined;

    _this.state = {
      "directory": wallpaperDirectory,
      "wallpapers": wallpapers,
      "selectedWallpaper": undefined,
      "savedWallpaper": undefined,
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
      var directory = this.state.directory;
      var image = Settings.requestSetting("wallpaper", "space-1.jpg");
      var cyclerBackground = document.querySelectorAll('.wallpaper-background')[0];
      var cyclerForeground = document.querySelectorAll('.wallpaper-foreground')[0];

      cyclerForeground.style.background = 'url(\'' + directory + image + '\')';
      cyclerForeground.style.backgroundSize = "cover";

      this.setState({
        "savedWallpaper": image,
        "cyclerBackground": cyclerBackground,
        "cyclerForeground": cyclerForeground
      });
    }
  }, {
    key: 'acceptWallpaper',
    value: function acceptWallpaper() {
      var selectedWallpaper = this.state.selectedWallpaper;
      var switcher = this.state.switcher;

      // Due diligence.
      Settings.saveSetting("wallpaper", selectedWallpaper);
      window.notifications.generate("This wallpaper has been saved as your default background.", 'success');

      // Reset switcher state
      switcher.active = false;
      switcher.index = 0;

      this.setState({
        "selectedWallpaper": selectedWallpaper,
        "savedWallpaper": selectedWallpaper,
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

      var wallpapers = this.state.wallpapers;
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
      var savedWallpaper = this.state.savedWallpaper;
      var switcher = this.state.switcher;

      // Reset switcher state
      switcher.active = false;
      switcher.index = 0;

      this.setState({
        "switcher": switcher
      });

      this.setWallpaper(savedWallpaper);

      window.notifications.generate("Wallpaper reset to default, no changes saved.");
    }
  }, {
    key: 'setWallpaper',
    value: function setWallpaper(newWallpaper) {
      var _this2 = this;

      var switcher = this.state.switcher;

      // Fadeout foreground wallpaper to new wallpaper
      var directory = this.state.directory;
      this.cyclerBackground.style.background = 'url(\'' + directory + newWallpaper + '\')';
      this.cyclerBackground.style.backgroundSize = 'cover';
      this.cyclerForeground.className += " fadeout";

      switcher.currentlyFading = true;

      setTimeout(function () {
        // Cycle new wallpaper back to the front, make it visible again.
        _this2.cyclerForeground.style.background = 'url(\'' + directory + newWallpaper + '\')';
        _this2.cyclerForeground.style.backgroundSize = 'cover';
        _this2.cyclerForeground.className = _this2.state.cyclerForeground.className.replace(" fadeout", "");

        var switcher = _this2.state.switcher;
        switcher.currentlyFading = false;

        _this2.setState({
          "selectedWallpaper": newWallpaper,
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

      return createVNode(2, 'div', {
        'className': 'options-wrapper'
      }, createVNode(2, 'div', {
        'className': classes.join(' ')
      }, [createVNode(2, 'div', {
        'className': 'button-reject'
      }, '\u2715', {
        'onClick': this.rejectWallpaper.bind(this)
      }), createVNode(2, 'div', {
        'className': 'button-accept'
      }, '\u2713', {
        'onClick': this.acceptWallpaper.bind(this)
      })]));
    }
  }, {
    key: 'render',
    value: function render() {
      var options = this.generateOptions();

      return createVNode(2, 'div', {
        'className': 'distro-wrapper'
      }, [createVNode(2, 'div', {
        'className': 'distro-logo'
      }, null, {
        'onClick': this.handleSwitcherActivation.bind(this)
      }), options]);
    }
  }]);

  return WallpaperSwitcher;
}(_infernoComponent2.default);

exports.default = WallpaperSwitcher;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWallpaperDirectory = getWallpaperDirectory;
exports.getWallpapers = getWallpapers;
// WallpaperOperations -> Required by Components/WallpaperSwitcher
// --------------------------------------
// LightDM related Wallpaper config / fetching.

function getWallpaperDirectory() {
  // Return the test folder when debugging.
  if (window.debug === true) {
    return "src/test/wallpapers/";
  }

  var wallpapersDirectory = window.config.get_str("branding", "background_images");

  // Do NOT allow the default wallpaper directory to set, as this will prevent the default provided backgrounds from
  // being used 100% of the time in a stock install.
  if (wallpapersDirectory == "/usr/share/backgrounds" || wallpapersDirectory == "/usr/share/backgrounds/") {
    wallpapersDirectory = "/usr/share/lightdm-webkit/themes/lightdm-webkit-theme-aether/src/img/wallpapers/";
  }

  return wallpapersDirectory;
}

function getWallpapers(directory) {
  // If we're in test mode, we stick to a static rotation of three default wallpapers.
  // In production, it is possible that a user will change what wallpapers are available.
  if (window.debug === true) {
    return ['boko.jpg', 'mountains-2.png', 'space-1.jpg'];
  }

  var wallpapers = void 0;

  wallpapers = window.greeterutil.dirlist(directory);
  wallpapers = wallpapers.map(function (e, i, a) {
    return e.split("/").pop();
  });

  return wallpapers;
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var padZeroes = exports.padZeroes = function padZeroes(i) {
  return i < 10 ? "0" + i : i;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Main;

var _inferno = __webpack_require__(1);

var _inferno2 = _interopRequireDefault(_inferno);

var _redux = __webpack_require__(46);

var _Notifications = __webpack_require__(22);

var _Notifications2 = _interopRequireDefault(_Notifications);

var _CommandPanel = __webpack_require__(18);

var _CommandPanel2 = _interopRequireDefault(_CommandPanel);

var _DateDisplay = __webpack_require__(19);

var _DateDisplay2 = _interopRequireDefault(_DateDisplay);

var _UserPanel = __webpack_require__(20);

var _UserPanel2 = _interopRequireDefault(_UserPanel);

var _PrimaryReducer = __webpack_require__(21);

var _SettingsReducer = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createVNode = _inferno2.default.createVNode;
function Main() {
  var initialState = (0, _PrimaryReducer.getDefaultState)();
  initialState = (0, _SettingsReducer.addAdditionalSettings)(initialState);

  var store = (0, _redux.createStore)(_PrimaryReducer.PrimaryReducer, initialState);

  _inferno2.default.render(createVNode(16, _CommandPanel2.default, {
    'store': store
  }), document.getElementById("command-panel"));
  _inferno2.default.render(createVNode(16, _UserPanel2.default, {
    'store': store
  }), document.getElementById("user-panel"));
  _inferno2.default.render(createVNode(16, _DateDisplay2.default, {
    'store': store
  }), document.getElementById("date-display"));
}

window.onload = function (e) {
  // Add notifications to the global scope for error handling
  window.notifications = new _Notifications2.default();

  Main();
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(53);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var _Symbol = _root2.default.Symbol;

exports.default = _Symbol;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(47);

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _getPrototype = __webpack_require__(49);

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isObjectLike = __webpack_require__(54);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0, _isObjectLike2.default)(value) || (0, _baseGetTag2.default)(value) != objectTag) {
    return false;
  }
  var proto = (0, _getPrototype2.default)(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

exports.default = isPlainObject;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionTypes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = createStore;

var _isPlainObject = __webpack_require__(41);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(58);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2.default)(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2.default] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2.default] = observable, _ref2;
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = __webpack_require__(43);

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = __webpack_require__(57);

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = __webpack_require__(56);

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = __webpack_require__(55);

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = __webpack_require__(42);

var _compose2 = _interopRequireDefault(_compose);

var _warning = __webpack_require__(44);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning2.default)('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2.default;
exports.combineReducers = _combineReducers2.default;
exports.bindActionCreators = _bindActionCreators2.default;
exports.applyMiddleware = _applyMiddleware2.default;
exports.compose = _compose2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(40);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _getRawTag = __webpack_require__(50);

var _getRawTag2 = _interopRequireDefault(_getRawTag);

var _objectToString = __webpack_require__(51);

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag2.default)(value) : (0, _objectToString2.default)(value);
}

exports.default = baseGetTag;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

exports.default = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__(52);

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg2.default)(Object.getPrototypeOf, Object);

exports.default = getPrototype;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(40);

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

exports.default = getRawTag;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

exports.default = objectToString;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _freeGlobal = __webpack_require__(48);

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal2.default || freeSelf || Function('return this')();

exports.default = root;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

exports.default = isObjectLike;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMiddleware;

var _compose = __webpack_require__(42);

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2.default.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineReducers;

var _createStore = __webpack_require__(43);

var _isPlainObject = __webpack_require__(41);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(44);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2.default)(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning2.default)('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (process.env.NODE_ENV !== 'production') {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        (0, _warning2.default)(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(59);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(60);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var root; /* global window */

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(45), __webpack_require__(61)(module)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjgwODk1YmY3MzczNDUyY2E0ZWYiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL34vaW5mZXJuby1zaGFyZWQvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvY29yZS9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby1jb21wb25lbnQvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9jb3JlL1ZOb2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vcGF0Y2hpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3JlbmRlcmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vd3JhcHBlcnMvcHJvY2Vzc0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vbW91bnRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3VubW91bnRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9SZWR1Y2Vycy9TZXR0aW5nc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3JlY3ljbGluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9jb3JlL25vcm1hbGl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Mb2dpYy9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0xvZ2ljL1N5c3RlbU9wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Db21wb25lbnRzL0NvbW1hbmRQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Db21wb25lbnRzL0RhdGVEaXNwbGF5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0NvbXBvbmVudHMvVXNlclBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L1JlZHVjZXJzL1ByaW1hcnlSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvVXRpbHMvTm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8tY29tcG9uZW50L34vaW5mZXJuby1zaGFyZWQvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vZXZlbnRzL2RlbGVnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2V2ZW50cy9saW5rRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2h5ZHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vd3JhcHBlcnMvSW5wdXRXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9TZWxlY3RXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9UZXh0YXJlYVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Db21wb25lbnRzL0Nsb2NrLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0NvbXBvbmVudHMvUGFzc3dvcmRGaWVsZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Db21wb25lbnRzL1Nlc3Npb25Ecm9wZG93bi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Db21wb25lbnRzL1Nlc3Npb25Sb3cuanN4Iiwid2VicGFjazovLy8uL3NyYy9lczYvQ29tcG9uZW50cy9Vc2VyUGFuZWxGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0NvbXBvbmVudHMvVXNlclN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0NvbXBvbmVudHMvV2FsbHBhcGVyU3dpdGNoZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9lczYvTG9naWMvV2FsbHBhcGVyT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L1V0aWxzL1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvTWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvZXMvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2VzL2NyZWF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9lcy9hcHBseU1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9lcy9iaW5kQWN0aW9uQ3JlYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9lcy9jb21iaW5lUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbInRvQXJyYXkiLCJpc1N0YXRlZnVsQ29tcG9uZW50IiwiaXNTdHJpbmdPck51bWJlciIsImlzTnVsbE9yVW5kZWYiLCJpc0ludmFsaWQiLCJpc0Z1bmN0aW9uIiwiaXNBdHRyQW5FdmVudCIsImlzU3RyaW5nIiwiaXNOdW1iZXIiLCJpc051bGwiLCJpc1RydWUiLCJpc1VuZGVmaW5lZCIsImlzT2JqZWN0IiwidGhyb3dFcnJvciIsIndhcm5pbmciLCJMaWZlY3ljbGUiLCJjb3B5UHJvcHNUbyIsIk5PX09QIiwiRVJST1JfTVNHIiwiaXNCcm93c2VyIiwid2luZG93IiwiZG9jdW1lbnQiLCJjaGlsZHJlbiIsImlzQXJyYXkiLCJBcnJheSIsIm8iLCJwcm90b3R5cGUiLCJyZW5kZXIiLCJvYmoiLCJ0eXBlIiwiYXR0ciIsImxlbmd0aCIsInVuZGVmaW5lZCIsIm1lc3NhZ2UiLCJFcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwibGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJjYWxsYmFjayIsInB1c2giLCJ0cmlnZ2VyIiwiaSIsImxlbiIsImNvcHlGcm9tIiwiY29weVRvIiwicHJvcCIsImlzVW5pdGxlc3NOdW1iZXIiLCJub3JtYWxpemUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJ0ZXN0RnVuYyIsInRlc3RGbiIsIm5hbWUiLCJ0b1N0cmluZyIsImluZGV4T2YiLCJ2ZXJzaW9uIiwibGlua0V2ZW50IiwiY3JlYXRlVk5vZGUiLCJjbG9uZVZOb2RlIiwiRU1QVFlfT0JKIiwiZmluZERPTU5vZGUiLCJjcmVhdGVSZW5kZXJlciIsIm9wdGlvbnMiLCJjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlIiwicmVwbGFjZUxhc3RDaGlsZEFuZFVubW91bnQiLCJyZXBsYWNlVk5vZGUiLCJjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQiLCJzZXRUZXh0Q29udGVudCIsInVwZGF0ZVRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRPckFwcGVuZCIsImRvY3VtZW50Q3JlYXRlRWxlbWVudCIsInJlcGxhY2VXaXRoTmV3Tm9kZSIsInJlcGxhY2VDaGlsZCIsInJlbW92ZUNoaWxkIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJyZW1vdmVDaGlsZHJlbiIsImlzS2V5ZWQiLCJPYmplY3QiLCJmcmVlemUiLCJ2Tm9kZSIsIkNvbXBvbmVudCIsInByb3BzIiwiY29udGV4dCIsImlzU1ZHIiwiaW5zdGFuY2UiLCJfcGF0Y2giLCJmaW5kRE9NTm9kZUVuYWJsZWQiLCJfY29tcG9uZW50VG9ET01Ob2RlTWFwIiwiX3VubW91bnRlZCIsIl9wZW5kaW5nU2V0U3RhdGUiLCJfaXNTVkciLCJjb21wb25lbnRXaWxsTW91bnQiLCJjaGlsZENvbnRleHQiLCJnZXRDaGlsZENvbnRleHQiLCJfY2hpbGRDb250ZXh0IiwiYXNzaWduIiwiYmVmb3JlUmVuZGVyIiwiaW5wdXQiLCJzdGF0ZSIsImFmdGVyUmVuZGVyIiwiZG9tIiwiZmxhZ3MiLCJwYXJlbnRWTm9kZSIsIl9sYXN0SW5wdXQiLCJsYXN0SW5wdXQiLCJuZXh0SW5wdXQiLCJwYXJlbnREb20iLCJsaWZlY3ljbGUiLCJpc1JlY3ljbGluZyIsInNoYWxsb3dVbm1vdW50IiwiY29tcG9uZW50IiwidGV4dCIsInRleHRDb250ZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwibmV3Tm9kZSIsIm5leHROb2RlIiwiaW5zZXJ0QmVmb3JlIiwidGFnIiwiY3JlYXRlRWxlbWVudE5TIiwiY3JlYXRlRWxlbWVudCIsImxhc3ROb2RlIiwibmV4dERvbSIsImxhc3REb20iLCJwYXJlbnROb2RlIiwicmVjeWNsaW5nRW5hYmxlZCIsImNoaWxkIiwibGFzdENoaWxkcmVuIiwibmV4dENoaWxkcmVuIiwia2V5IiwibW9kdWxlIiwiZXhwb3J0cyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwibmV4dFRpY2siLCJhcmdzIiwiYXJndW1lbnRzIiwiSXRlbSIsImFycmF5IiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbnMiLCJub29wIiwib24iLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJyb290cyIsImFmdGVyTW91bnQiLCJhZnRlclVwZGF0ZSIsImJlZm9yZVVubW91bnQiLCJub09wIiwiY29tcG9uZW50Q2FsbGJhY2tRdWV1ZSIsIk1hcCIsInVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2RlcyIsImNyZWF0ZVZvaWRWTm9kZSIsImNyZWF0ZVRleHRWTm9kZSIsImFkZFRvUXVldWUiLCJmb3JjZSIsImdldCIsInNldCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImRlbGV0ZSIsImFwcGx5U3RhdGUiLCJxdWV1ZVN0YXRlQ2hhbmdlcyIsIm5ld1N0YXRlIiwic3luYyIsInN0YXRlS2V5IiwiX3BlbmRpbmdTdGF0ZSIsIl9ibG9ja1JlbmRlciIsIl9kZWZlclNldFN0YXRlIiwicGVuZGluZ1N0YXRlIiwicHJldlN0YXRlIiwibmV4dFN0YXRlIiwiX3VwZGF0ZUNvbXBvbmVudCIsImRpZFVwZGF0ZSIsIl92Tm9kZSIsInN1YkxpZmVjeWNsZSIsIl9saWZlY3ljbGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnRUb0RPTU5vZGVNYXAiLCJyZWZzIiwiX2lnbm9yZVNldFN0YXRlIiwiX2Jsb2NrU2V0U3RhdGUiLCJfc3luY1NldFN0YXRlIiwibmV4dFByb3BzIiwibmV4dENvbnRleHQiLCJwcmV2UHJvcHMiLCJwcmV2Q29udGV4dCIsImZyb21TZXRTdGF0ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJzaG91bGRVcGRhdGUiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJjb21wb25lbnRXaWxsVXBkYXRlIiwiaXNWTm9kZSIsImV2ZW50cyIsInJlZiIsIm5vTm9ybWFsaXNlIiwidk5vZGVUb0Nsb25lIiwiX2NoaWxkcmVuIiwibmV3Vk5vZGUiLCJ0bXBBcnJheSIsIm5ld1Byb3BzIiwibmV3Q2hpbGRyZW4iLCJwYXRjaCIsInBhdGNoRWxlbWVudCIsInBhdGNoQ29tcG9uZW50IiwicGF0Y2hUZXh0IiwicGF0Y2hWb2lkIiwicGF0Y2hOb25LZXllZENoaWxkcmVuIiwicGF0Y2hLZXllZENoaWxkcmVuIiwicGF0Y2hQcm9wIiwicGF0Y2hFdmVudHMiLCJwYXRjaEV2ZW50IiwicGF0Y2hTdHlsZSIsImxhc3RWTm9kZSIsIm5leHRWTm9kZSIsImxhc3RGbGFncyIsIm5leHRGbGFncyIsInVubW91bnRDaGlsZHJlbiIsIm5leHRUYWciLCJsYXN0VGFnIiwibGFzdFByb3BzIiwibGFzdFJlZiIsIm5leHRSZWYiLCJsYXN0RXZlbnRzIiwibmV4dEV2ZW50cyIsInBhdGNoQ2hpbGRyZW4iLCJoYXNDb250cm9sbGVkVmFsdWUiLCJsYXN0UHJvcHNPckVtcHR5IiwibmV4dFByb3BzT3JFbXB0eSIsIm5leHRWYWx1ZSIsImxhc3RWYWx1ZSIsInJlbW92ZVByb3AiLCJwYXRjaEFycmF5IiwicGF0Y2hLZXllZCIsImlzQ2xhc3MiLCJsYXN0VHlwZSIsIm5leHRUeXBlIiwibGFzdEtleSIsIm5leHRLZXkiLCJkZWZhdWx0UHJvcHMiLCJsYXN0U3RhdGUiLCJuZXh0SG9va3MiLCJuZXh0SG9va3NEZWZpbmVkIiwib25Db21wb25lbnRTaG91bGRVcGRhdGUiLCJvbkNvbXBvbmVudFdpbGxVcGRhdGUiLCJvbkNvbXBvbmVudERpZFVwZGF0ZSIsIm5leHRUZXh0IiwibGFzdENoaWxkcmVuTGVuZ3RoIiwibmV4dENoaWxkcmVuTGVuZ3RoIiwiY29tbW9uTGVuZ3RoIiwibmV4dENoaWxkIiwiYSIsImIiLCJhTGVuZ3RoIiwiYkxlbmd0aCIsImFFbmQiLCJiRW5kIiwiYVN0YXJ0IiwiYlN0YXJ0IiwiaiIsImFOb2RlIiwiYk5vZGUiLCJuZXh0UG9zIiwibm9kZSIsImFTdGFydE5vZGUiLCJiU3RhcnROb2RlIiwiYUVuZE5vZGUiLCJiRW5kTm9kZSIsIm91dGVyIiwic291cmNlcyIsIm1vdmVkIiwicG9zIiwicGF0Y2hlZCIsImtleUluZGV4Iiwic2VxIiwibGlzX2FsZ29yaXRobSIsImFyciIsInAiLCJzbGljZSIsInJlc3VsdCIsInUiLCJ2IiwiYyIsImFyckkiLCJ2YWx1ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImxhc3RIdG1sIiwiX19odG1sIiwibmV4dEh0bWwiLCJpbm5lckhUTUwiLCJucyIsInNldEF0dHJpYnV0ZU5TIiwibmFtZUxvd2VyQ2FzZSIsInRvTG93ZXJDYXNlIiwiZG9tRXZlbnQiLCJ3cmFwcGVkIiwiZXZlbnQiLCJfZGF0YSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhIiwibGFzdEF0dHJWYWx1ZSIsIm5leHRBdHRyVmFsdWUiLCJzdHlsZSIsImNzc1RleHQiLCJub2RlVHlwZSIsImdldFJvb3QiLCJyb290Iiwic2V0Um9vdCIsInJlbW92ZVJvb3QiLCJzcGxpY2UiLCJib2R5IiwiZG9jdW1lbnRCb2R5Iiwicm9vdElucHV0IiwicmVuZGVyZXIiLCJwcm9jZXNzRWxlbWVudCIsIndyYXBwZXJzIiwibW91bnRpbmciLCJjb25zdHJ1Y3REZWZhdWx0cyIsInN0cmluZyIsIm9iamVjdCIsInNwbGl0IiwieGxpbmtOUyIsInhtbE5TIiwic3ZnTlMiLCJzdHJpY3RQcm9wcyIsImJvb2xlYW5Qcm9wcyIsIm5hbWVzcGFjZXMiLCJza2lwUHJvcHMiLCJkZWxlZ2F0ZWRQcm9wcyIsIm1vdW50IiwibW91bnRUZXh0IiwibW91bnRWb2lkIiwibW91bnRFbGVtZW50IiwibW91bnRBcnJheUNoaWxkcmVuIiwibW91bnRDb21wb25lbnQiLCJtb3VudENsYXNzQ29tcG9uZW50Q2FsbGJhY2tzIiwibW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzIiwibW91bnRSZWYiLCJKU09OIiwic3RyaW5naWZ5IiwiY0RNIiwiY29tcG9uZW50RGlkTW91bnQiLCJvbkNvbXBvbmVudFdpbGxNb3VudCIsIm9uQ29tcG9uZW50RGlkTW91bnQiLCJ1bm1vdW50IiwidW5tb3VudENvbXBvbmVudCIsInVubW91bnRFbGVtZW50IiwiY2FuUmVjeWNsZSIsInVubW91bnRWb2lkT3JUZXh0IiwiYWxyZWFkeVVubW91bnRlZCIsIldlYWtNYXAiLCJoYXMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIm9uQ29tcG9uZW50V2lsbFVubW91bnQiLCJ1bm1vdW50UmVmIiwiYWRkQWRkaXRpb25hbFNldHRpbmdzIiwiU2V0dGluZ3MiLCJkZWZhdWx0cyIsInNldHRpbmdzIiwia2V5cyIsInJlcXVlc3RTZXR0aW5nIiwicmVjeWNsZUVsZW1lbnQiLCJwb29sRWxlbWVudCIsInJlY3ljbGVDb21wb25lbnQiLCJwb29sQ29tcG9uZW50IiwiY29tcG9uZW50UG9vbHMiLCJlbGVtZW50UG9vbHMiLCJwb29scyIsInBvb2wiLCJub25LZXllZCIsImtleWVkIiwicmVjeWNsZWRWTm9kZSIsInBvcCIsImZhaWxlZCIsImhvb2tzIiwibm9uUmVjeWNsZUhvb2tzIiwibm9ybWFsaXplVk5vZGVzIiwiYXBwbHlLZXkiLCJhcHBseUtleUlmTWlzc2luZyIsImFwcGx5S2V5UHJlZml4IiwiX25vcm1hbGl6ZVZOb2RlcyIsIm5vZGVzIiwiaW5kZXgiLCJjdXJyZW50S2V5IiwibiIsIm5ld05vZGVzIiwibm9ybWFsaXplQ2hpbGRyZW4iLCJub3JtYWxpemVQcm9wcyIsIm5vcm1hbGl6ZUVsZW1lbnQiLCJoYXNQcm9wcyIsInZlcmlmeUtleXMiLCJ2Tm9kZXMiLCJrZXlWYWx1ZXMiLCJtYXAiLCJ2bm9kZSIsInNvbWUiLCJpdGVtIiwiaWR4IiwiaGFzRHVwbGljYXRlIiwic2F2ZVNldHRpbmciLCJMT0NBTFNUT1JBR0VfRU5BQkxFRCIsIlN0b3JhZ2UiLCJub3RpZmljYXRpb25zIiwiZ2VuZXJhdGUiLCJzZXR0aW5nIiwiZGVmYXVsdFNldHRpbmciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImhhbmRsZUNvbW1hbmQiLCJmaW5kSW5pdGlhbFVzZXIiLCJmaW5kSW5pdGlhbFNlc3Npb24iLCJmaW5kU2Vzc2lvbiIsImV4ZWN1dGVDb21tYW5kIiwiYm91bmRGdW5jdGlvbiIsImNvbW1hbmQiLCJsaWdodGRtIiwiY2FuX3NodXRkb3duIiwic2h1dGRvd24iLCJjYW5faGliZXJuYXRlIiwiaGliZXJuYXRlIiwiY2FuX3Jlc3RhcnQiLCJyZXN0YXJ0IiwiY2FuX3N1c3BlbmQiLCJzdXNwZW5kIiwibG9ja19oaW50IiwidXNlcnMiLCJmaWx0ZXIiLCJ1c2VyIiwibG9nZ2VkX2luIiwic2VsZWN0X3VzZXJfaGludCIsInVzZXJuYW1lIiwidXNlclNlc3Npb24iLCJzZXNzaW9uIiwiZGVmYXVsdF9zZXNzaW9uIiwic2Vzc2lvbnMiLCJzZXNzaW9uTmFtZSIsIlN5c3RlbU9wZXJhdGlvbnMiLCJDb21tYW5kUGFuZWwiLCJkaXNhYmxlZCIsInByZXZlbnREZWZhdWx0IiwiY29tbWFuZHMiLCJlbmFibGVkQ29tbWFuZHMiLCJleHBhbmRlZCIsInNldFN0YXRlIiwicm93cyIsImNsYXNzZXMiLCJqb2luIiwiYmluZCIsImhvc3RuYW1lIiwiZ2VuZXJhdGVDb21tYW5kcyIsIkRhdGVEaXNwbGF5Iiwic2V0RGF0ZSIsImRhdGVTdHJpbmciLCJkYXlOYW1lIiwiZm9ybWF0dGVkRGF5VmFsdWUiLCJtb250aE5hbWUiLCJkYXlOYW1lcyIsIm1vbnRoTmFtZXMiLCJub3ciLCJEYXRlIiwiZGF5VmFsdWUiLCJnZXREYXRlIiwiZ2V0VVRDRGF5IiwibW9udGhWYWx1ZSIsImdldE1vbnRoIiwiZm9ybWF0dGVkRGF0ZVN0cmluZyIsImRhdGVDbGFzc2VzIiwiZ2VuZXJhdGVEYXRlU3RyaW5nIiwiaW5pdGlhbGl6ZWQiLCJGQURFX0lOX0RVUkFUSU9OIiwiRVJST1JfU0hBS0VfRFVSQVRJT04iLCJMb2dpblBhbmVsIiwic3RvcmUiLCJzdG9yZVN0YXRlIiwiZ2V0U3RhdGUiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInNob3dfcHJvbXB0IiwicmVzcG9uZCIsInBhc3N3b3JkIiwic2hvd19tZXNzYWdlIiwiYXV0aGVudGljYXRpb25fY29tcGxldGUiLCJpc19hdXRoZW50aWNhdGVkIiwic3RhcnRfc2Vzc2lvbl9zeW5jIiwicmVqZWN0UGFzc3dvcmQiLCJhdXRvbG9naW5fdGltZXJfZXhwaXJlZCIsImRlYnVnIiwiZGlzcGxheV9uYW1lIiwiYXV0aGVudGljYXRlIiwib3RoZXJVc2VyIiwic2V0QWN0aXZlVXNlciIsInRhcmdldCIsImRpc3BhdGNoIiwiaXNCeXBhc3MiLCJoYW5kbGVTd2l0Y2hlckNsaWNrIiwibG9naW5QYW5lbENsYXNzZXMiLCJmYWRlSW4iLCJzd2l0Y2hlckFjdGl2ZSIsInN3aXRjaFVzZXJCdXR0b24iLCJnZW5lcmF0ZVN3aXRjaFVzZXJCdXR0b24iLCJpbWFnZSIsImRyb3Bkb3duQWN0aXZlIiwicGFzc3dvcmRGYWlsZWQiLCJoYW5kbGVMb2dpblN1Ym1pdCIsImhhbmRsZURyb3Bkb3duQ2xpY2siLCJoYW5kbGVEcm9wZG93bkxlYXZlIiwiaGFuZGxlUGFzc3dvcmRJbnB1dCIsInNldEFjdGl2ZVNlc3Npb24iLCJnZXREZWZhdWx0U3RhdGUiLCJsYW5ndWFnZSIsIlByaW1hcnlSZWR1Y2VyIiwiYWN0aW9uIiwic3RhcnRzV2l0aCIsIlN0cmluZyIsIk5vdGlmaWNhdGlvbnMiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm90aWZpY2F0aW9uIiwiaW5uZXJUZXh0IiwiaGFuZGxlRXZlbnQiLCJpc2lPUyIsIm5hdmlnYXRvciIsInBsYXRmb3JtIiwidGVzdCIsImRlbGVnYXRlZEV2ZW50cyIsImxhc3RFdmVudCIsIm5leHRFdmVudCIsImRlbGVnYXRlZFJvb3RzIiwiaXRlbXMiLCJjb3VudCIsImRvY0V2ZW50IiwiYXR0YWNoRXZlbnRUb0RvY3VtZW50IiwidHJhcENsaWNrT25Ob25JbnRlcmFjdGl2ZUVsZW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibm9ybWFsaXplRXZlbnROYW1lIiwiZGlzcGF0Y2hFdmVudCIsImV2ZW50RGF0YSIsImV2ZW50c1RvVHJpZ2dlciIsInN0b3BQcm9wYWdhdGlvbiIsInN1YnN0ciIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVtcHR5Rm4iLCJvbmNsaWNrIiwibm9ybWFsaXplQ2hpbGROb2RlcyIsImh5ZHJhdGVSb290IiwicGxhY2Vob2xkZXIiLCJuZXh0U2libGluZyIsInByZXZpb3VzU2libGluZyIsImh5ZHJhdGVDb21wb25lbnQiLCJuYW1lc3BhY2VVUkkiLCJfdkNvbXBvbmVudCIsImh5ZHJhdGUiLCJoeWRyYXRlRWxlbWVudCIsInRhZ05hbWUiLCJuZXdEb20iLCJoeWRyYXRlQ2hpbGRyZW4iLCJoeWRyYXRlVGV4dCIsImh5ZHJhdGVWb2lkIiwicHJvY2Vzc0lucHV0IiwiYXBwbHlWYWx1ZSIsImlzQ2hlY2tlZFR5cGUiLCJpc0NvbnRyb2xsZWQiLCJ1c2VzQ2hlY2tlZCIsImNoZWNrZWQiLCJvblRleHRJbnB1dENoYW5nZSIsIm9uSW5wdXQiLCJvbmlucHV0Iiwid3JhcHBlZE9uQ2hhbmdlIiwib25DaGFuZ2UiLCJvbkNoZWNrYm94Q2hhbmdlIiwib25DbGljayIsImhhbmRsZUFzc29jaWF0ZWRSYWRpb0lucHV0cyIsImlucHV0cyIsImZvckVhY2giLCJpbnB1dFdyYXBwZXIiLCJvbmNoYW5nZSIsIm11bHRpcGxlIiwiZGVmYXVsdFZhbHVlIiwiaGFzVmFsdWUiLCJwcm9jZXNzU2VsZWN0IiwidXBkYXRlQ2hpbGRPcHRpb25Hcm91cCIsInVwZGF0ZUNoaWxkT3B0aW9uIiwic2VsZWN0ZWQiLCJvblNlbGVjdENoYW5nZSIsInNlbGVjdFdyYXBwZXIiLCJwcm9jZXNzVGV4dGFyZWEiLCJvblRleHRhcmVhSW5wdXRDaGFuZ2UiLCJ0ZXh0YXJlYVdyYXBwZXIiLCJkb21WYWx1ZSIsIkNsb2NrIiwidXBkYXRlQ2xvY2siLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJmb3JtYXR0ZWRUaW1lIiwiY3VycmVudFRpbWUiLCJQYXNzd29yZEZpZWxkIiwiU2Vzc2lvbkRyb3Bkb3duIiwic29ydCIsInRvVXBwZXJDYXNlIiwiYWN0aXZlU2Vzc2lvbiIsIlNlc3Npb25Sb3ciLCJldmVudEhhbmRsZXIiLCJVc2VyUGFuZWxGb3JtIiwiYWN0aXZlVXNlciIsIkZBREVfRFVSQVRJT04iLCJVc2VyU3dpdGNoZXIiLCJzZWxlY3RlZFVzZXIiLCJhY3RpdmVJbmRleCIsInNlbGVjdGVkVXNlckluZGV4IiwiYXZhdGFycyIsInJlYWxfbmFtZSIsImhhbmRsZVVzZXJDbGljayIsInVzZXJMaXN0IiwiZ2VuZXJhdGVVc2VyTGlzdCIsInVzZXJDb3VudCIsImFjdGl2ZSIsImZhZGVPdXQiLCJoYW5kbGVCYWNrQnV0dG9uIiwiV2FsbHBhcGVyT3BlcmF0aW9ucyIsIkZBREVPVVRfVElNRSIsIldhbGxwYXBlclN3aXRjaGVyIiwid2FsbHBhcGVyRGlyZWN0b3J5IiwiZ2V0V2FsbHBhcGVyRGlyZWN0b3J5Iiwid2FsbHBhcGVycyIsImdldFdhbGxwYXBlcnMiLCJjeWNsZXJCYWNrZ3JvdW5kIiwiY3ljbGVyRm9yZWdyb3VuZCIsImRpcmVjdG9yeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsInNlbGVjdGVkV2FsbHBhcGVyIiwic3dpdGNoZXIiLCJjdXJyZW50bHlGYWRpbmciLCJuZXdXYWxscGFwZXIiLCJzZXRXYWxscGFwZXIiLCJjeWNsZVdhbGxwYXBlciIsInNhdmVkV2FsbHBhcGVyIiwicmVwbGFjZSIsInJlamVjdFdhbGxwYXBlciIsImFjY2VwdFdhbGxwYXBlciIsImdlbmVyYXRlT3B0aW9ucyIsImhhbmRsZVN3aXRjaGVyQWN0aXZhdGlvbiIsIndhbGxwYXBlcnNEaXJlY3RvcnkiLCJjb25maWciLCJnZXRfc3RyIiwiZ3JlZXRlcnV0aWwiLCJkaXJsaXN0IiwicGFkWmVyb2VzIiwiTWFpbiIsImluaXRpYWxTdGF0ZSIsImdldEVsZW1lbnRCeUlkIiwib25sb2FkIiwiU3ltYm9sIiwib2JqZWN0VGFnIiwiZnVuY1Byb3RvIiwiRnVuY3Rpb24iLCJvYmplY3RQcm90byIsImZ1bmNUb1N0cmluZyIsImhhc093blByb3BlcnR5Iiwib2JqZWN0Q3RvclN0cmluZyIsImlzUGxhaW5PYmplY3QiLCJwcm90byIsIkN0b3IiLCJjb25zdHJ1Y3RvciIsImNvbXBvc2UiLCJfbGVuIiwiZnVuY3MiLCJfa2V5IiwiYXJnIiwibGFzdCIsInJlc3QiLCJyZWR1Y2VSaWdodCIsImNvbXBvc2VkIiwiZiIsImNyZWF0ZVN0b3JlIiwiQWN0aW9uVHlwZXMiLCJJTklUIiwicmVkdWNlciIsInByZWxvYWRlZFN0YXRlIiwiZW5oYW5jZXIiLCJfcmVmMiIsImN1cnJlbnRSZWR1Y2VyIiwiY3VycmVudFN0YXRlIiwiY3VycmVudExpc3RlbmVycyIsIm5leHRMaXN0ZW5lcnMiLCJpc0Rpc3BhdGNoaW5nIiwiZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycyIsImxpc3RlbmVyIiwiaXNTdWJzY3JpYmVkIiwicmVwbGFjZVJlZHVjZXIiLCJuZXh0UmVkdWNlciIsIm9ic2VydmFibGUiLCJfcmVmIiwib3V0ZXJTdWJzY3JpYmUiLCJvYnNlcnZlciIsIlR5cGVFcnJvciIsIm9ic2VydmVTdGF0ZSIsIm5leHQiLCJlcnJvciIsImciLCJldmFsIiwiaXNDcnVzaGVkIiwiY29tYmluZVJlZHVjZXJzIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiYXBwbHlNaWRkbGV3YXJlIiwibnVsbFRhZyIsInVuZGVmaW5lZFRhZyIsInN5bVRvU3RyaW5nVGFnIiwidG9TdHJpbmdUYWciLCJiYXNlR2V0VGFnIiwiZnJlZUdsb2JhbCIsImdsb2JhbCIsImdldFByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwibmF0aXZlT2JqZWN0VG9TdHJpbmciLCJnZXRSYXdUYWciLCJpc093biIsInVubWFza2VkIiwib2JqZWN0VG9TdHJpbmciLCJvdmVyQXJnIiwiZnVuYyIsInRyYW5zZm9ybSIsImZyZWVTZWxmIiwic2VsZiIsImlzT2JqZWN0TGlrZSIsIl9leHRlbmRzIiwic291cmNlIiwibWlkZGxld2FyZXMiLCJfZGlzcGF0Y2giLCJjaGFpbiIsIm1pZGRsZXdhcmVBUEkiLCJtaWRkbGV3YXJlIiwiYmluZEFjdGlvbkNyZWF0b3IiLCJhY3Rpb25DcmVhdG9yIiwiYWN0aW9uQ3JlYXRvcnMiLCJib3VuZEFjdGlvbkNyZWF0b3JzIiwiZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2UiLCJhY3Rpb25UeXBlIiwiYWN0aW9uTmFtZSIsImdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UiLCJpbnB1dFN0YXRlIiwicmVkdWNlcnMiLCJ1bmV4cGVjdGVkS2V5Q2FjaGUiLCJyZWR1Y2VyS2V5cyIsImFyZ3VtZW50TmFtZSIsIm1hdGNoIiwidW5leHBlY3RlZEtleXMiLCJhc3NlcnRSZWR1Y2VyU2FuaXR5IiwiTWF0aCIsInJhbmRvbSIsInN1YnN0cmluZyIsImZpbmFsUmVkdWNlcnMiLCJmaW5hbFJlZHVjZXJLZXlzIiwic2FuaXR5RXJyb3IiLCJjb21iaW5hdGlvbiIsIndhcm5pbmdNZXNzYWdlIiwiaGFzQ2hhbmdlZCIsInByZXZpb3VzU3RhdGVGb3JLZXkiLCJuZXh0U3RhdGVGb3JLZXkiLCJlcnJvck1lc3NhZ2UiLCJyZXF1aXJlIiwiX3BvbnlmaWxsIiwiX3BvbnlmaWxsMiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfX2VzTW9kdWxlIiwic3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsIiwiX1N5bWJvbCIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiZW51bWVyYWJsZSIsImwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1FDN0RnQkEsTyxHQUFBQSxPO1FBTUFDLG1CLEdBQUFBLG1CO1FBR0FDLGdCLEdBQUFBLGdCO1FBSUFDLGEsR0FBQUEsYTtRQUdBQyxTLEdBQUFBLFM7UUFHQUMsVSxHQUFBQSxVO1FBR0FDLGEsR0FBQUEsYTtRQUdBQyxRLEdBQUFBLFE7UUFHQUMsUSxH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LGNBQVAsQ0FBc0I3YixNQUF0QixFQUE4QixRQUE5QixFQUF3QztBQUN2Q3VxQixlQUFZLElBRDJCO0FBRXZDOW1CLFFBQUssZUFBVztBQUNmLFdBQU96RCxPQUFPd3FCLENBQWQ7QUFDQTtBQUpzQyxHQUF4QztBQU1BOXRCLFNBQU9tZixjQUFQLENBQXNCN2IsTUFBdEIsRUFBOEIsSUFBOUIsRUFBb0M7QUFDbkN1cUIsZUFBWSxJQUR1QjtBQUVuQzltQixRQUFLLGVBQVc7QUFDZixXQUFPekQsT0FBTzVGLENBQWQ7QUFDQTtBQUprQyxHQUFwQztBQU1BNEYsU0FBT29xQixlQUFQLEdBQXlCLENBQXpCO0FBQ0E7QUFDRCxRQUFPcHFCLE1BQVA7QUFDQSxDQXJCRCxDIiwiZmlsZSI6IkFldGhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiODA4OTViZjczNzM0NTJjYTRlZiIsImV4cG9ydCBjb25zdCBOT19PUCA9ICckTk9fT1AnO1xuZXhwb3J0IGNvbnN0IEVSUk9SX01TRyA9ICdhIHJ1bnRpbWUgZXJyb3Igb2NjdXJlZCEgVXNlIEluZmVybm8gaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgdG8gZmluZCB0aGUgZXJyb3IuJztcbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQ7XG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICAgIHJldHVybiBpc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogKGNoaWxkcmVuID8gW2NoaWxkcmVuXSA6IGNoaWxkcmVuKTtcbn1cbi8vIHRoaXMgaXMgTVVDSCBmYXN0ZXIgdGhhbiAuY29uc3RydWN0b3IgPT09IEFycmF5IGFuZCBpbnN0YW5jZW9mIEFycmF5XG4vLyBpbiBOb2RlIDcgYW5kIHRoZSBsYXRlciB2ZXJzaW9ucyBvZiBWOCwgc2xvd2VyIGluIG9sZGVyIHZlcnNpb25zIHRob3VnaFxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RhdGVmdWxDb21wb25lbnQobykge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQoby5wcm90b3R5cGUpICYmICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZS5yZW5kZXIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nT3JOdW1iZXIob2JqKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbE9yVW5kZWYob2JqKSB7XG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKG9iaikgfHwgaXNOdWxsKG9iaik7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNJbnZhbGlkKG9iaikge1xuICAgIHJldHVybiBpc051bGwob2JqKSB8fCBvYmogPT09IGZhbHNlIHx8IGlzVHJ1ZShvYmopIHx8IGlzVW5kZWZpbmVkKG9iaik7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0F0dHJBbkV2ZW50KGF0dHIpIHtcbiAgICByZXR1cm4gYXR0clswXSA9PT0gJ28nICYmIGF0dHJbMV0gPT09ICduJyAmJiBhdHRyLmxlbmd0aCA+IDM7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1RydWUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCc7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dFcnJvcihtZXNzYWdlKSB7XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBFUlJPUl9NU0c7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgSW5mZXJubyBFcnJvcjogJHttZXNzYWdlfWApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBMaWZlY3ljbGUoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbn1cbkxpZmVjeWNsZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xufTtcbkxpZmVjeWNsZS5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIHRyaWdnZXIoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2ldKCk7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBjb3B5UHJvcHNUbyhjb3B5RnJvbSwgY29weVRvKSB7XG4gICAgZm9yIChsZXQgcHJvcCBpbiBjb3B5RnJvbSkge1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQoY29weVRvW3Byb3BdKSkge1xuICAgICAgICAgICAgY29weVRvW3Byb3BdID0gY29weUZyb21bcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vfi9pbmZlcm5vLXNoYXJlZC9kaXN0LWVzL2luZGV4LmpzIiwiaW1wb3J0IHsgd2FybmluZywgTk9fT1AgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSwgY2xvbmVWTm9kZSB9IGZyb20gJy4vY29yZS9WTm9kZXMnO1xuaW1wb3J0IGxpbmtFdmVudCBmcm9tICcuL0RPTS9ldmVudHMvbGlua0V2ZW50JztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vY29yZS9vcHRpb25zJztcbmltcG9ydCB7IHJlbmRlciwgZmluZERPTU5vZGUsIGNyZWF0ZVJlbmRlcmVyIH0gZnJvbSAnLi9ET00vcmVuZGVyaW5nJztcbmltcG9ydCB7IEVNUFRZX09CSiB9IGZyb20gJy4vRE9NL3V0aWxzJztcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgdGVzdEZ1bmMgPSBmdW5jdGlvbiB0ZXN0Rm4oKSB7IH07XG4gICAgaWYgKCh0ZXN0RnVuYy5uYW1lIHx8IHRlc3RGdW5jLnRvU3RyaW5nKCkpLmluZGV4T2YoJ3Rlc3RGbicpID09PSAtMSkge1xuICAgICAgICB3YXJuaW5nKCgnSXQgbG9va3MgbGlrZSB5b3VcXCdyZSB1c2luZyBhIG1pbmlmaWVkIGNvcHkgb2YgdGhlIGRldmVsb3BtZW50IGJ1aWxkICcgK1xuICAgICAgICAgICAgJ29mIEluZmVybm8uIFdoZW4gZGVwbG95aW5nIEluZmVybm8gYXBwcyB0byBwcm9kdWN0aW9uLCBtYWtlIHN1cmUgdG8gdXNlICcgK1xuICAgICAgICAgICAgJ3RoZSBwcm9kdWN0aW9uIGJ1aWxkIHdoaWNoIHNraXBzIGRldmVsb3BtZW50IHdhcm5pbmdzIGFuZCBpcyBmYXN0ZXIuICcgK1xuICAgICAgICAgICAgJ1NlZSBodHRwOi8vaW5mZXJub2pzLm9yZyBmb3IgbW9yZSBkZXRhaWxzLicpKTtcbiAgICB9XG59XG4vLyBUaGlzIHdpbGwgYmUgcmVwbGFjZWQgYnkgcm9sbHVwXG5leHBvcnQgY29uc3QgdmVyc2lvbiA9ICdWRVJTSU9OJztcbi8vIHdlIGR1cGxpY2F0ZSBpdCBzbyBpdCBwbGF5cyBuaWNlbHkgd2l0aCBkaWZmZXJlbnQgbW9kdWxlIGxvYWRpbmcgc3lzdGVtc1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxpbmtFdmVudCxcbiAgICAvLyBjb3JlIHNoYXBlc1xuICAgIGNyZWF0ZVZOb2RlLFxuICAgIC8vIGNsb25pbmdcbiAgICBjbG9uZVZOb2RlLFxuICAgIC8vIHVzZWQgdG8gc2hhcmVkIGNvbW1vbiBpdGVtcyBiZXR3ZWVuIEluZmVybm8gbGlic1xuICAgIE5PX09QLFxuICAgIEVNUFRZX09CSixcbiAgICAvLyBET01cbiAgICByZW5kZXIsXG4gICAgZmluZERPTU5vZGUsXG4gICAgY3JlYXRlUmVuZGVyZXIsXG4gICAgb3B0aW9ucyxcbiAgICB2ZXJzaW9uXG59O1xuZXhwb3J0IHsgXG4vLyBQdWJsaWMgbWV0aG9kc1xubGlua0V2ZW50LCBcbi8vIGNvcmUgc2hhcGVzXG5jcmVhdGVWTm9kZSwgXG4vLyBjbG9uaW5nXG5jbG9uZVZOb2RlLCBcbi8vIHVzZWQgdG8gc2hhcmVkIGNvbW1vbiBpdGVtcyBiZXR3ZWVuIEluZmVybm8gbGlic1xuTk9fT1AsIEVNUFRZX09CSiwgXG4vLyBET01cbnJlbmRlciwgZmluZERPTU5vZGUsIGNyZWF0ZVJlbmRlcmVyLCBvcHRpb25zIH07XG4vLyBJbnRlcm5hbCBzdHVmZiB0aGF0IG9ubHkgY29yZSBpbmZlcm5vLSogcGFja2FnZXMgdXNlXG5leHBvcnQgeyBpc1VuaXRsZXNzTnVtYmVyIGFzIGludGVybmFsX2lzVW5pdGxlc3NOdW1iZXIgfSBmcm9tICcuL0RPTS9jb25zdGFudHMnO1xuLy8gTWFpbmx5IGZvciB0ZXN0aW5nXG5leHBvcnQgeyBub3JtYWxpemUgYXMgaW50ZXJuYWxfbm9ybWFsaXplIH0gZnJvbSAnLi9jb3JlL25vcm1hbGl6YXRpb24nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvaW5kZXguanMiLCJpbXBvcnQgeyBpc0FycmF5LCBpc0Z1bmN0aW9uLCBpc0ludmFsaWQsIGlzTnVsbE9yVW5kZWYsIGlzU3RyaW5nT3JOdW1iZXIsIGlzVW5kZWZpbmVkLCB0aHJvd0Vycm9yIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vY29yZS9vcHRpb25zJztcbmltcG9ydCB7IGNsb25lVk5vZGUsIGNyZWF0ZVRleHRWTm9kZSwgY3JlYXRlVm9pZFZOb2RlIH0gZnJvbSAnLi4vY29yZS9WTm9kZXMnO1xuaW1wb3J0IHsgc3ZnTlMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJy4vbW91bnRpbmcnO1xuaW1wb3J0IHsgcGF0Y2ggfSBmcm9tICcuL3BhdGNoaW5nJztcbmltcG9ydCB7IGNvbXBvbmVudFRvRE9NTm9kZU1hcCB9IGZyb20gJy4vcmVuZGVyaW5nJztcbmltcG9ydCB7IHVubW91bnQgfSBmcm9tICcuL3VubW91bnRpbmcnO1xuLy8gV2UgbmVlZCBFTVBUWV9PQkogZGVmaW5lZCBpbiBvbmUgcGxhY2UuXG4vLyBJdHMgdXNlZCBmb3IgY29tcGFyaXNvbiBzbyB3ZSBjYW50IGlubGluZSBpdCBpbnRvIHNoYXJlZFxuZXhwb3J0IGNvbnN0IEVNUFRZX09CSiA9IHt9O1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBPYmplY3QuZnJlZXplKEVNUFRZX09CSik7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2xhc3NDb21wb25lbnRJbnN0YW5jZSh2Tm9kZSwgQ29tcG9uZW50LCBwcm9wcywgY29udGV4dCwgaXNTVkcpIHtcbiAgICBpZiAoaXNVbmRlZmluZWQoY29udGV4dCkpIHtcbiAgICAgICAgY29udGV4dCA9IEVNUFRZX09CSjsgLy8gQ29udGV4dCBzaG91bGQgbm90IGJlIG11dGFibGVcbiAgICB9XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KTtcbiAgICBpbnN0YW5jZS5jb250ZXh0ID0gY29udGV4dDtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMgPT09IEVNUFRZX09CSikge1xuICAgICAgICBpbnN0YW5jZS5wcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICBpbnN0YW5jZS5fcGF0Y2ggPSBwYXRjaDtcbiAgICBpZiAob3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQpIHtcbiAgICAgICAgaW5zdGFuY2UuX2NvbXBvbmVudFRvRE9NTm9kZU1hcCA9IGNvbXBvbmVudFRvRE9NTm9kZU1hcDtcbiAgICB9XG4gICAgaW5zdGFuY2UuX3VubW91bnRlZCA9IGZhbHNlO1xuICAgIGluc3RhbmNlLl9wZW5kaW5nU2V0U3RhdGUgPSB0cnVlO1xuICAgIGluc3RhbmNlLl9pc1NWRyA9IGlzU1ZHO1xuICAgIGlmIChpc0Z1bmN0aW9uKGluc3RhbmNlLmNvbXBvbmVudFdpbGxNb3VudCkpIHtcbiAgICAgICAgaW5zdGFuY2UuY29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGluc3RhbmNlLmdldENoaWxkQ29udGV4dCgpO1xuICAgIGlmIChpc051bGxPclVuZGVmKGNoaWxkQ29udGV4dCkpIHtcbiAgICAgICAgaW5zdGFuY2UuX2NoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbnN0YW5jZS5fY2hpbGRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwgY2hpbGRDb250ZXh0KTtcbiAgICB9XG4gICAgb3B0aW9ucy5iZWZvcmVSZW5kZXIgJiYgb3B0aW9ucy5iZWZvcmVSZW5kZXIoaW5zdGFuY2UpO1xuICAgIGxldCBpbnB1dCA9IGluc3RhbmNlLnJlbmRlcihwcm9wcywgaW5zdGFuY2Uuc3RhdGUsIGNvbnRleHQpO1xuICAgIG9wdGlvbnMuYWZ0ZXJSZW5kZXIgJiYgb3B0aW9ucy5hZnRlclJlbmRlcihpbnN0YW5jZSk7XG4gICAgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzSW52YWxpZChpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBjcmVhdGVUZXh0Vk5vZGUoaW5wdXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlucHV0LmRvbSkge1xuICAgICAgICAgICAgaW5wdXQgPSBjbG9uZVZOb2RlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXQuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgYW4gaW5wdXQgdGhhdCBpcyBhbHNvIGEgY29tcG9uZW50LCB3ZSBydW4gaW50byBhIHRyaWNreSBzaXR1YXRpb25cbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZSByb290IHZOb2RlIG5lZWRzIHRvIGFsd2F5cyBoYXZlIHRoZSBjb3JyZWN0IERPTSBlbnRyeVxuICAgICAgICAgICAgLy8gc28gd2UgYnJlYWsgbW9ub21vcnBoaXNtIG9uIG91ciBpbnB1dCBhbmQgc3VwcGx5IGl0IG91ciB2Tm9kZSBhcyBwYXJlbnRWTm9kZVxuICAgICAgICAgICAgLy8gd2UgY2FuIG9wdGltaXNlIHRoaXMgaW4gdGhlIGZ1dHVyZSwgYnV0IHRoaXMgZ2V0cyB1cyBvdXQgb2YgYSBsb3Qgb2YgaXNzdWVzXG4gICAgICAgICAgICBpbnB1dC5wYXJlbnRWTm9kZSA9IHZOb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluc3RhbmNlLl9wZW5kaW5nU2V0U3RhdGUgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5fbGFzdElucHV0ID0gaW5wdXQ7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VMYXN0Q2hpbGRBbmRVbm1vdW50KGxhc3RJbnB1dCwgbmV4dElucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgbW91bnQobmV4dElucHV0LCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbGFzdElucHV0LCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBkb20sIHZOb2RlLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgbGV0IHNoYWxsb3dVbm1vdW50ID0gZmFsc2U7XG4gICAgLy8gd2UgY2Fubm90IGNhY2hlIG5vZGVUeXBlIGhlcmUgYXMgdk5vZGUgbWlnaHQgYmUgcmUtYXNzaWduZWQgYmVsb3dcbiAgICBpZiAodk5vZGUuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIGFjY2Vzc2luZyBhIHN0YXRlZnVsIG9yIHN0YXRlbGVzcyBjb21wb25lbnQsIHdlIHdhbnQgdG8gYWNjZXNzIHRoZWlyIGxhc3QgcmVuZGVyZWQgaW5wdXRcbiAgICAgICAgLy8gYWNjZXNzaW5nIHRoZWlyIERPTSBub2RlIGlzIG5vdCB1c2VmdWwgdG8gdXMgaGVyZVxuICAgICAgICB1bm1vdW50KHZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIHZOb2RlID0gdk5vZGUuY2hpbGRyZW4uX2xhc3RJbnB1dCB8fCB2Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgc2hhbGxvd1VubW91bnQgPSB0cnVlO1xuICAgIH1cbiAgICByZXBsYWNlQ2hpbGQocGFyZW50RG9tLCBkb20sIHZOb2RlLmRvbSk7XG4gICAgdW5tb3VudCh2Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dCh2Tm9kZSwgY29tcG9uZW50LCBwcm9wcywgY29udGV4dCkge1xuICAgIGxldCBpbnB1dCA9IGNvbXBvbmVudChwcm9wcywgY29udGV4dCk7XG4gICAgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzSW52YWxpZChpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihpbnB1dCkpIHtcbiAgICAgICAgaW5wdXQgPSBjcmVhdGVUZXh0Vk5vZGUoaW5wdXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlucHV0LmRvbSkge1xuICAgICAgICAgICAgaW5wdXQgPSBjbG9uZVZOb2RlKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXQuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgYW4gaW5wdXQgdGhhdCBpcyBhbHNvIGEgY29tcG9uZW50LCB3ZSBydW4gaW50byBhIHRyaWNreSBzaXR1YXRpb25cbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZSByb290IHZOb2RlIG5lZWRzIHRvIGFsd2F5cyBoYXZlIHRoZSBjb3JyZWN0IERPTSBlbnRyeVxuICAgICAgICAgICAgLy8gc28gd2UgYnJlYWsgbW9ub21vcnBoaXNtIG9uIG91ciBpbnB1dCBhbmQgc3VwcGx5IGl0IG91ciB2Tm9kZSBhcyBwYXJlbnRWTm9kZVxuICAgICAgICAgICAgLy8gd2UgY2FuIG9wdGltaXNlIHRoaXMgaW4gdGhlIGZ1dHVyZSwgYnV0IHRoaXMgZ2V0cyB1cyBvdXQgb2YgYSBsb3Qgb2YgaXNzdWVzXG4gICAgICAgICAgICBpbnB1dC5wYXJlbnRWTm9kZSA9IHZOb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbnB1dDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRUZXh0Q29udGVudChkb20sIHRleHQpIHtcbiAgICBpZiAodGV4dCAhPT0gJycpIHtcbiAgICAgICAgZG9tLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUZXh0Q29udGVudChkb20sIHRleHQpIHtcbiAgICBkb20uZmlyc3RDaGlsZC5ub2RlVmFsdWUgPSB0ZXh0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKSB7XG4gICAgcGFyZW50RG9tLmFwcGVuZENoaWxkKGRvbSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0T3JBcHBlbmQocGFyZW50RG9tLCBuZXdOb2RlLCBuZXh0Tm9kZSkge1xuICAgIGlmIChpc051bGxPclVuZGVmKG5leHROb2RlKSkge1xuICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIG5ld05vZGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGFyZW50RG9tLmluc2VydEJlZm9yZShuZXdOb2RlLCBuZXh0Tm9kZSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRvY3VtZW50Q3JlYXRlRWxlbWVudCh0YWcsIGlzU1ZHKSB7XG4gICAgaWYgKGlzU1ZHID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIHRhZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlV2l0aE5ld05vZGUobGFzdE5vZGUsIG5leHROb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgdW5tb3VudChsYXN0Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgIGNvbnN0IGRvbSA9IG1vdW50KG5leHROb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICBuZXh0Tm9kZS5kb20gPSBkb207XG4gICAgcmVwbGFjZUNoaWxkKHBhcmVudERvbSwgZG9tLCBsYXN0Tm9kZS5kb20pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIG5leHREb20sIGxhc3REb20pIHtcbiAgICBpZiAoIXBhcmVudERvbSkge1xuICAgICAgICBwYXJlbnREb20gPSBsYXN0RG9tLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHBhcmVudERvbS5yZXBsYWNlQ2hpbGQobmV4dERvbSwgbGFzdERvbSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2hpbGQocGFyZW50RG9tLCBkb20pIHtcbiAgICBwYXJlbnREb20ucmVtb3ZlQ2hpbGQoZG9tKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbGxDaGlsZHJlbihkb20sIGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgZG9tLnRleHRDb250ZW50ID0gJyc7XG4gICAgaWYgKCFvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQgfHwgKG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCAmJiAhaXNSZWN5Y2xpbmcpKSB7XG4gICAgICAgIHJlbW92ZUNoaWxkcmVuKG51bGwsIGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2hpbGRyZW4oZG9tLCBjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICBpZiAoIWlzSW52YWxpZChjaGlsZCkpIHtcbiAgICAgICAgICAgIHVubW91bnQoY2hpbGQsIGRvbSwgbGlmZWN5Y2xlLCB0cnVlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaXNLZXllZChsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbikge1xuICAgIHJldHVybiBuZXh0Q2hpbGRyZW4ubGVuZ3RoICYmICFpc051bGxPclVuZGVmKG5leHRDaGlsZHJlblswXSkgJiYgIWlzTnVsbE9yVW5kZWYobmV4dENoaWxkcmVuWzBdLmtleSlcbiAgICAgICAgJiYgbGFzdENoaWxkcmVuLmxlbmd0aCAmJiAhaXNOdWxsT3JVbmRlZihsYXN0Q2hpbGRyZW5bMF0pICYmICFpc051bGxPclVuZGVmKGxhc3RDaGlsZHJlblswXS5rZXkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3V0aWxzLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlY3ljbGluZ0VuYWJsZWQ6IGZhbHNlLFxuICAgIGZpbmRET01Ob2RlRW5hYmxlZDogZmFsc2UsXG4gICAgcm9vdHM6IG51bGwsXG4gICAgY3JlYXRlVk5vZGU6IG51bGwsXG4gICAgYmVmb3JlUmVuZGVyOiBudWxsLFxuICAgIGFmdGVyUmVuZGVyOiBudWxsLFxuICAgIGFmdGVyTW91bnQ6IG51bGwsXG4gICAgYWZ0ZXJVcGRhdGU6IG51bGwsXG4gICAgYmVmb3JlVW5tb3VudDogbnVsbFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL2NvcmUvb3B0aW9ucy5qcyIsIi8vIE1ha2Ugc3VyZSB1IHVzZSBFTVBUWV9PQkogZnJvbSAnaW5mZXJubycsIG90aGVyd2lzZSBpdCdsbCBiZSBhIGRpZmZlcmVudCByZWZlcmVuY2VcbmltcG9ydCB7IEVNUFRZX09CSiwgY3JlYXRlVk5vZGUsIG9wdGlvbnMgfSBmcm9tICdpbmZlcm5vJztcbmltcG9ydCB7IEVSUk9SX01TRywgaXNBcnJheSwgaXNCcm93c2VyLCBpc0Z1bmN0aW9uLCBpc0ludmFsaWQsIGlzTnVsbE9yVW5kZWYsIGlzU3RyaW5nT3JOdW1iZXIsIExpZmVjeWNsZSwgTk9fT1AsIHRocm93RXJyb3IgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5sZXQgbm9PcCA9IEVSUk9SX01TRztcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbm9PcCA9ICdJbmZlcm5vIEVycm9yOiBDYW4gb25seSB1cGRhdGUgYSBtb3VudGVkIG9yIG1vdW50aW5nIGNvbXBvbmVudC4gVGhpcyB1c3VhbGx5IG1lYW5zIHlvdSBjYWxsZWQgc2V0U3RhdGUoKSBvciBmb3JjZVVwZGF0ZSgpIG9uIGFuIHVubW91bnRlZCBjb21wb25lbnQuIFRoaXMgaXMgYSBuby1vcC4nO1xufVxuY29uc3QgY29tcG9uZW50Q2FsbGJhY2tRdWV1ZSA9IG5ldyBNYXAoKTtcbi8vIHdoZW4gYSBjb21wb25lbnRzIHJvb3QgVk5vZGUgaXMgYWxzbyBhIGNvbXBvbmVudCwgd2UgY2FuIHJ1biBpbnRvIGlzc3Vlc1xuLy8gdGhpcyB3aWxsIHJlY3Vyc2l2ZWx5IGxvb2sgZm9yIHZOb2RlLnBhcmVudE5vZGUgaWYgdGhlIFZOb2RlIGlzIGEgY29tcG9uZW50XG5mdW5jdGlvbiB1cGRhdGVQYXJlbnRDb21wb25lbnRWTm9kZXModk5vZGUsIGRvbSkge1xuICAgIGlmICh2Tm9kZS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICBjb25zdCBwYXJlbnRWTm9kZSA9IHZOb2RlLnBhcmVudFZOb2RlO1xuICAgICAgICBpZiAocGFyZW50Vk5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudFZOb2RlLmRvbSA9IGRvbTtcbiAgICAgICAgICAgIHVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2RlcyhwYXJlbnRWTm9kZSwgZG9tKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIHRoaXMgaXMgaW4gc2hhcGVzIHRvbywgYnV0IHdlIGRvbid0IHdhbnQgdG8gaW1wb3J0IGZyb20gc2hhcGVzIGFzIGl0IHdpbGwgcHVsbCBpbiBhIGR1cGxpY2F0ZSBvZiBjcmVhdGVWTm9kZVxuZnVuY3Rpb24gY3JlYXRlVm9pZFZOb2RlKCkge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZSg0MDk2IC8qIFZvaWQgKi8pO1xufVxuZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlKHRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGUoMSAvKiBUZXh0ICovLCBudWxsLCBudWxsLCB0ZXh0KTtcbn1cbmZ1bmN0aW9uIGFkZFRvUXVldWUoY29tcG9uZW50LCBmb3JjZSwgY2FsbGJhY2spIHtcbiAgICAvLyBUT0RPIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV2aXNlZCBhbmQgaW1wcm92ZWQgb25cbiAgICBsZXQgcXVldWUgPSBjb21wb25lbnRDYWxsYmFja1F1ZXVlLmdldChjb21wb25lbnQpO1xuICAgIGlmICghcXVldWUpIHtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgY29tcG9uZW50Q2FsbGJhY2tRdWV1ZS5zZXQoY29tcG9uZW50LCBxdWV1ZSk7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50Q2FsbGJhY2tRdWV1ZS5kZWxldGUoY29tcG9uZW50KTtcbiAgICAgICAgICAgIGFwcGx5U3RhdGUoY29tcG9uZW50LCBmb3JjZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBxdWV1ZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZVtpXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHF1ZXVlLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHF1ZXVlU3RhdGVDaGFuZ2VzKGNvbXBvbmVudCwgbmV3U3RhdGUsIGNhbGxiYWNrLCBzeW5jKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24obmV3U3RhdGUpKSB7XG4gICAgICAgIG5ld1N0YXRlID0gbmV3U3RhdGUoY29tcG9uZW50LnN0YXRlLCBjb21wb25lbnQucHJvcHMsIGNvbXBvbmVudC5jb250ZXh0KTtcbiAgICB9XG4gICAgZm9yIChsZXQgc3RhdGVLZXkgaW4gbmV3U3RhdGUpIHtcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGVbc3RhdGVLZXldID0gbmV3U3RhdGVbc3RhdGVLZXldO1xuICAgIH1cbiAgICBpZiAoIWNvbXBvbmVudC5fcGVuZGluZ1NldFN0YXRlICYmIGlzQnJvd3Nlcikge1xuICAgICAgICBpZiAoc3luYyB8fCBjb21wb25lbnQuX2Jsb2NrUmVuZGVyKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICBhcHBseVN0YXRlKGNvbXBvbmVudCwgZmFsc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZFRvUXVldWUoY29tcG9uZW50LCBmYWxzZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb21wb25lbnQuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnQuc3RhdGUsIGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlKTtcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGUgPSB7fTtcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseVN0YXRlKGNvbXBvbmVudCwgZm9yY2UsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCghY29tcG9uZW50Ll9kZWZlclNldFN0YXRlIHx8IGZvcmNlKSAmJiAhY29tcG9uZW50Ll9ibG9ja1JlbmRlciAmJiAhY29tcG9uZW50Ll91bm1vdW50ZWQpIHtcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgcGVuZGluZ1N0YXRlID0gY29tcG9uZW50Ll9wZW5kaW5nU3RhdGU7XG4gICAgICAgIGNvbnN0IHByZXZTdGF0ZSA9IGNvbXBvbmVudC5zdGF0ZTtcbiAgICAgICAgY29uc3QgbmV4dFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCBwZW5kaW5nU3RhdGUpO1xuICAgICAgICBjb25zdCBwcm9wcyA9IGNvbXBvbmVudC5wcm9wcztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNvbXBvbmVudC5jb250ZXh0O1xuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZSA9IHt9O1xuICAgICAgICBsZXQgbmV4dElucHV0ID0gY29tcG9uZW50Ll91cGRhdGVDb21wb25lbnQocHJldlN0YXRlLCBuZXh0U3RhdGUsIHByb3BzLCBwcm9wcywgY29udGV4dCwgZm9yY2UsIHRydWUpO1xuICAgICAgICBsZXQgZGlkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKGlzSW52YWxpZChuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICBuZXh0SW5wdXQgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXh0SW5wdXQgPT09IE5PX09QKSB7XG4gICAgICAgICAgICBuZXh0SW5wdXQgPSBjb21wb25lbnQuX2xhc3RJbnB1dDtcbiAgICAgICAgICAgIGRpZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIobmV4dElucHV0KSkge1xuICAgICAgICAgICAgbmV4dElucHV0ID0gY3JlYXRlVGV4dFZOb2RlKG5leHRJbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ2EgdmFsaWQgSW5mZXJubyBWTm9kZSAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZCBmcm9tIGEgY29tcG9uZW50IHJlbmRlci4gWW91IG1heSBoYXZlIHJldHVybmVkIGFuIGFycmF5IG9yIGFuIGludmFsaWQgb2JqZWN0LicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxhc3RJbnB1dCA9IGNvbXBvbmVudC5fbGFzdElucHV0O1xuICAgICAgICBjb25zdCB2Tm9kZSA9IGNvbXBvbmVudC5fdk5vZGU7XG4gICAgICAgIGNvbnN0IHBhcmVudERvbSA9IChsYXN0SW5wdXQuZG9tICYmIGxhc3RJbnB1dC5kb20ucGFyZW50Tm9kZSkgfHwgKGxhc3RJbnB1dC5kb20gPSB2Tm9kZS5kb20pO1xuICAgICAgICBjb21wb25lbnQuX2xhc3RJbnB1dCA9IG5leHRJbnB1dDtcbiAgICAgICAgaWYgKGRpZFVwZGF0ZSkge1xuICAgICAgICAgICAgbGV0IHN1YkxpZmVjeWNsZSA9IGNvbXBvbmVudC5fbGlmZWN5Y2xlO1xuICAgICAgICAgICAgaWYgKCFzdWJMaWZlY3ljbGUpIHtcbiAgICAgICAgICAgICAgICBzdWJMaWZlY3ljbGUgPSBuZXcgTGlmZWN5Y2xlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJMaWZlY3ljbGUubGlzdGVuZXJzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuX2xpZmVjeWNsZSA9IHN1YkxpZmVjeWNsZTtcbiAgICAgICAgICAgIGxldCBjaGlsZENvbnRleHQgPSBjb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0KCk7XG4gICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihjaGlsZENvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29tcG9uZW50Ll9jaGlsZENvbnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCBjb21wb25lbnQuX2NoaWxkQ29udGV4dCwgY2hpbGRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbXBvbmVudC5fcGF0Y2gobGFzdElucHV0LCBuZXh0SW5wdXQsIHBhcmVudERvbSwgc3ViTGlmZWN5Y2xlLCBjaGlsZENvbnRleHQsIGNvbXBvbmVudC5faXNTVkcsIGZhbHNlKTtcbiAgICAgICAgICAgIHN1YkxpZmVjeWNsZS50cmlnZ2VyKCk7XG4gICAgICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKHByb3BzLCBwcmV2U3RhdGUpO1xuICAgICAgICAgICAgb3B0aW9ucy5hZnRlclVwZGF0ZSAmJiBvcHRpb25zLmFmdGVyVXBkYXRlKHZOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkb20gPSB2Tm9kZS5kb20gPSBuZXh0SW5wdXQuZG9tO1xuICAgICAgICBjb25zdCBjb21wb25lbnRUb0RPTU5vZGVNYXAgPSBjb21wb25lbnQuX2NvbXBvbmVudFRvRE9NTm9kZU1hcDtcbiAgICAgICAgY29tcG9uZW50VG9ET01Ob2RlTWFwICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5zZXQoY29tcG9uZW50LCBuZXh0SW5wdXQuZG9tKTtcbiAgICAgICAgdXBkYXRlUGFyZW50Q29tcG9uZW50Vk5vZGVzKHZOb2RlLCBkb20pO1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpc051bGxPclVuZGVmKGNhbGxiYWNrKSkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLnJlZnMgPSB7fTtcbiAgICAgICAgdGhpcy5fYmxvY2tSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faWdub3JlU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fYmxvY2tTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9kZWZlclNldFN0YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BlbmRpbmdTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zeW5jU2V0U3RhdGUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wZW5kaW5nU3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5fbGFzdElucHV0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdk5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLl91bm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9saWZlY3ljbGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9jaGlsZENvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLl9wYXRjaCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2lzU1ZHID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFRvRE9NTm9kZU1hcCA9IG51bGw7XG4gICAgICAgIC8qKiBAdHlwZSB7b2JqZWN0fSAqL1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgICAgICAvKiogQHR5cGUge29iamVjdH0gKi9cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dCB8fCBFTVBUWV9PQko7IC8vIGNvbnRleHQgc2hvdWxkIG5vdCBiZSBtdXRhYmxlXG4gICAgfVxuICAgIHJlbmRlcihuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHtcbiAgICB9XG4gICAgZm9yY2VVcGRhdGUoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlzQnJvd3NlciAmJiBhcHBseVN0YXRlKHRoaXMsIHRydWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc2V0U3RhdGUobmV3U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLl91bm1vdW50ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2Jsb2NrU2V0U3RhdGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faWdub3JlU2V0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZVN0YXRlQ2hhbmdlcyh0aGlzLCBuZXdTdGF0ZSwgY2FsbGJhY2ssIHRoaXMuX3N5bmNTZXRTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ2Nhbm5vdCB1cGRhdGUgc3RhdGUgdmlhIHNldFN0YXRlKCkgaW4gY29tcG9uZW50V2lsbFVwZGF0ZSgpLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldFN0YXRlU3luYyhuZXdTdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fdW5tb3VudGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9ibG9ja1NldFN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2lnbm9yZVNldFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcXVldWVTdGF0ZUNoYW5nZXModGhpcywgbmV3U3RhdGUsIG51bGwsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdjYW5ub3QgdXBkYXRlIHN0YXRlIHZpYSBzZXRTdGF0ZSgpIGluIGNvbXBvbmVudFdpbGxVcGRhdGUoKS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgcHJldkNvbnRleHQpIHtcbiAgICB9XG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgY29udGV4dCkge1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xuICAgIH1cbiAgICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgfVxuICAgIF91cGRhdGVDb21wb25lbnQocHJldlN0YXRlLCBuZXh0U3RhdGUsIHByZXZQcm9wcywgbmV4dFByb3BzLCBjb250ZXh0LCBmb3JjZSwgZnJvbVNldFN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLl91bm1vdW50ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihub09wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHByZXZQcm9wcyAhPT0gbmV4dFByb3BzIHx8IG5leHRQcm9wcyA9PT0gRU1QVFlfT0JKKSB8fCBwcmV2U3RhdGUgIT09IG5leHRTdGF0ZSB8fCBmb3JjZSkge1xuICAgICAgICAgICAgaWYgKHByZXZQcm9wcyAhPT0gbmV4dFByb3BzIHx8IG5leHRQcm9wcyA9PT0gRU1QVFlfT0JKKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmcm9tU2V0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tSZW5kZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BlbmRpbmdTZXRTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBuZXh0U3RhdGUsIHRoaXMuX3BlbmRpbmdTdGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZW5kaW5nU3RhdGUgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzaG91bGRVcGRhdGUgPSB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgY29udGV4dCk7XG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlICE9PSBmYWxzZSB8fCBmb3JjZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrU2V0U3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVSZW5kZXIgJiYgb3B0aW9ucy5iZWZvcmVSZW5kZXIodGhpcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVuZGVyID0gdGhpcy5yZW5kZXIobmV4dFByb3BzLCBzdGF0ZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hZnRlclJlbmRlciAmJiBvcHRpb25zLmFmdGVyUmVuZGVyKHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5PX09QO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby1jb21wb25lbnQvZGlzdC1lcy9pbmRleC5qcyIsImltcG9ydCB7IGlzQXJyYXksIGlzSW52YWxpZCwgaXNOdWxsLCBpc051bGxPclVuZGVmLCBpc1N0YXRlZnVsQ29tcG9uZW50LCBpc1VuZGVmaW5lZCB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJy4vbm9ybWFsaXphdGlvbic7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOb2RlKGZsYWdzLCB0eXBlLCBwcm9wcywgY2hpbGRyZW4sIGV2ZW50cywga2V5LCByZWYsIG5vTm9ybWFsaXNlKSB7XG4gICAgaWYgKGZsYWdzICYgMTYgLyogQ29tcG9uZW50VW5rbm93biAqLykge1xuICAgICAgICBmbGFncyA9IGlzU3RhdGVmdWxDb21wb25lbnQodHlwZSkgPyA0IC8qIENvbXBvbmVudENsYXNzICovIDogOCAvKiBDb21wb25lbnRGdW5jdGlvbiAqLztcbiAgICB9XG4gICAgY29uc3Qgdk5vZGUgPSB7XG4gICAgICAgIGNoaWxkcmVuOiBpc1VuZGVmaW5lZChjaGlsZHJlbikgPyBudWxsIDogY2hpbGRyZW4sXG4gICAgICAgIGRvbTogbnVsbCxcbiAgICAgICAgZXZlbnRzOiBldmVudHMgfHwgbnVsbCxcbiAgICAgICAgZmxhZ3MsXG4gICAgICAgIGtleTogaXNVbmRlZmluZWQoa2V5KSA/IG51bGwgOiBrZXksXG4gICAgICAgIHByb3BzOiBwcm9wcyB8fCBudWxsLFxuICAgICAgICByZWY6IHJlZiB8fCBudWxsLFxuICAgICAgICB0eXBlXG4gICAgfTtcbiAgICBpZiAoIW5vTm9ybWFsaXNlKSB7XG4gICAgICAgIG5vcm1hbGl6ZSh2Tm9kZSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmNyZWF0ZVZOb2RlKSB7XG4gICAgICAgIG9wdGlvbnMuY3JlYXRlVk5vZGUodk5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gdk5vZGU7XG59XG5leHBvcnQgZnVuY3Rpb24gY2xvbmVWTm9kZSh2Tm9kZVRvQ2xvbmUsIHByb3BzLCAuLi5fY2hpbGRyZW4pIHtcbiAgICBsZXQgY2hpbGRyZW4gPSBfY2hpbGRyZW47XG4gICAgaWYgKF9jaGlsZHJlbi5sZW5ndGggPiAwICYmICFpc051bGwoX2NoaWxkcmVuWzBdKSkge1xuICAgICAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgICAgICBwcm9wcyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9jaGlsZHJlblswXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNVbmRlZmluZWQocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4uY29uY2F0KGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gW3Byb3BzLmNoaWxkcmVuXS5jb25jYXQoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbi5wdXNoKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gW3Byb3BzLmNoaWxkcmVuXTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4ucHVzaChjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgICBsZXQgbmV3Vk5vZGU7XG4gICAgaWYgKGlzQXJyYXkodk5vZGVUb0Nsb25lKSkge1xuICAgICAgICBjb25zdCB0bXBBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdk5vZGVUb0Nsb25lLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0bXBBcnJheS5wdXNoKGNsb25lVk5vZGUodk5vZGVUb0Nsb25lW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3Vk5vZGUgPSB0bXBBcnJheTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGZsYWdzID0gdk5vZGVUb0Nsb25lLmZsYWdzO1xuICAgICAgICBjb25zdCBldmVudHMgPSB2Tm9kZVRvQ2xvbmUuZXZlbnRzIHx8IChwcm9wcyAmJiBwcm9wcy5ldmVudHMpIHx8IG51bGw7XG4gICAgICAgIGNvbnN0IGtleSA9ICFpc051bGxPclVuZGVmKHZOb2RlVG9DbG9uZS5rZXkpID8gdk5vZGVUb0Nsb25lLmtleSA6IChwcm9wcyA/IHByb3BzLmtleSA6IG51bGwpO1xuICAgICAgICBjb25zdCByZWYgPSB2Tm9kZVRvQ2xvbmUucmVmIHx8IChwcm9wcyA/IHByb3BzLnJlZiA6IG51bGwpO1xuICAgICAgICBpZiAoZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIG5ld1ZOb2RlID0gY3JlYXRlVk5vZGUoZmxhZ3MsIHZOb2RlVG9DbG9uZS50eXBlLCBPYmplY3QuYXNzaWduKHt9LCB2Tm9kZVRvQ2xvbmUucHJvcHMsIHByb3BzKSwgbnVsbCwgZXZlbnRzLCBrZXksIHJlZiwgdHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IG5ld1ZOb2RlLnByb3BzO1xuICAgICAgICAgICAgaWYgKG5ld1Byb3BzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q2hpbGRyZW4gPSBuZXdQcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGFsc28gY2xvbmUgY29tcG9uZW50IGNoaWxkcmVuIHRoYXQgYXJlIGluIHByb3BzXG4gICAgICAgICAgICAgICAgLy8gYXMgdGhlIGNoaWxkcmVuIG1heSBhbHNvIGhhdmUgYmVlbiBob2lzdGVkXG4gICAgICAgICAgICAgICAgaWYgKG5ld0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KG5ld0NoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG5ld0NoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBuZXdDaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSW52YWxpZChjaGlsZCkgJiYgaXNWTm9kZShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHMuY2hpbGRyZW5baV0gPSBjbG9uZVZOb2RlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNWTm9kZShuZXdDaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzLmNoaWxkcmVuID0gY2xvbmVWTm9kZShuZXdDaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWTm9kZS5jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gKHByb3BzICYmIHByb3BzLmNoaWxkcmVuKSB8fCB2Tm9kZVRvQ2xvbmUuY2hpbGRyZW47XG4gICAgICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVZOb2RlKGZsYWdzLCB2Tm9kZVRvQ2xvbmUudHlwZSwgT2JqZWN0LmFzc2lnbih7fSwgdk5vZGVUb0Nsb25lLnByb3BzLCBwcm9wcyksIGNoaWxkcmVuLCBldmVudHMsIGtleSwgcmVmLCAhY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVRleHRWTm9kZSh2Tm9kZVRvQ2xvbmUuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdWTm9kZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWb2lkVk5vZGUoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlKDQwOTYgLyogVm9pZCAqLyk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlKHRleHQpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGUoMSAvKiBUZXh0ICovLCBudWxsLCBudWxsLCB0ZXh0LCBudWxsLCBudWxsLCBudWxsLCB0cnVlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1ZOb2RlKG8pIHtcbiAgICByZXR1cm4gISFvLmZsYWdzO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvY29yZS9WTm9kZXMuanMiLCJpbXBvcnQgeyBjb3B5UHJvcHNUbywgaXNBcnJheSwgaXNBdHRyQW5FdmVudCwgaXNGdW5jdGlvbiwgaXNJbnZhbGlkLCBpc051bGwsIGlzTnVsbE9yVW5kZWYsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTdHJpbmcsIGlzU3RyaW5nT3JOdW1iZXIsIGlzVW5kZWZpbmVkLCBOT19PUCwgdGhyb3dFcnJvciB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL2NvcmUvb3B0aW9ucyc7XG5pbXBvcnQgeyBjbG9uZVZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUsIGNyZWF0ZVZvaWRWTm9kZSwgaXNWTm9kZSB9IGZyb20gJy4uL2NvcmUvVk5vZGVzJztcbmltcG9ydCB7IGJvb2xlYW5Qcm9wcywgZGVsZWdhdGVkUHJvcHMsIGlzVW5pdGxlc3NOdW1iZXIsIG5hbWVzcGFjZXMsIHNraXBQcm9wcywgc3RyaWN0UHJvcHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBoYW5kbGVFdmVudCB9IGZyb20gJy4vZXZlbnRzL2RlbGVnYXRpb24nO1xuaW1wb3J0IHsgbW91bnQsIG1vdW50QXJyYXlDaGlsZHJlbiwgbW91bnRDb21wb25lbnQsIG1vdW50RWxlbWVudCwgbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzLCBtb3VudFJlZiwgbW91bnRUZXh0LCBtb3VudFZvaWQgfSBmcm9tICcuL21vdW50aW5nJztcbmltcG9ydCB7IGFwcGVuZENoaWxkLCBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQsIGluc2VydE9yQXBwZW5kLCBpc0tleWVkLCByZW1vdmVBbGxDaGlsZHJlbiwgcmVwbGFjZUNoaWxkLCByZXBsYWNlTGFzdENoaWxkQW5kVW5tb3VudCwgcmVwbGFjZVZOb2RlLCByZXBsYWNlV2l0aE5ld05vZGUsIHNldFRleHRDb250ZW50LCB1cGRhdGVUZXh0Q29udGVudCwgRU1QVFlfT0JKIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBjb21wb25lbnRUb0RPTU5vZGVNYXAgfSBmcm9tICcuL3JlbmRlcmluZyc7XG5pbXBvcnQgeyB1bm1vdW50IH0gZnJvbSAnLi91bm1vdW50aW5nJztcbmltcG9ydCBwcm9jZXNzRWxlbWVudCBmcm9tICcuL3dyYXBwZXJzL3Byb2Nlc3NFbGVtZW50JztcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIGlmIChsYXN0Vk5vZGUgIT09IG5leHRWTm9kZSkge1xuICAgICAgICBjb25zdCBsYXN0RmxhZ3MgPSBsYXN0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIGNvbnN0IG5leHRGbGFncyA9IG5leHRWTm9kZS5mbGFncztcbiAgICAgICAgaWYgKG5leHRGbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgaWYgKGxhc3RGbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgIHBhdGNoQ29tcG9uZW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIG5leHRGbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8sIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50Q29tcG9uZW50KG5leHRWTm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgbmV4dEZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLyksIGxhc3RWTm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV4dEZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgICAgICBpZiAobGFzdEZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hFbGVtZW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50RWxlbWVudChuZXh0Vk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBsYXN0Vk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5leHRGbGFncyAmIDEgLyogVGV4dCAqLykge1xuICAgICAgICAgICAgaWYgKGxhc3RGbGFncyAmIDEgLyogVGV4dCAqLykge1xuICAgICAgICAgICAgICAgIHBhdGNoVGV4dChsYXN0Vk5vZGUsIG5leHRWTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudFRleHQobmV4dFZOb2RlLCBudWxsKSwgbGFzdFZOb2RlLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXh0RmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgICAgIGlmIChsYXN0RmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRjaFZvaWQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgbW91bnRWb2lkKG5leHRWTm9kZSwgbnVsbCksIGxhc3RWTm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBFcnJvciBjYXNlOiBtb3VudCBuZXcgb25lIHJlcGxhY2luZyBvbGQgb25lXG4gICAgICAgICAgICByZXBsYWNlTGFzdENoaWxkQW5kVW5tb3VudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiB1bm1vdW50Q2hpbGRyZW4oY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICB1bm1vdW50KGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgdHJ1ZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEVsZW1lbnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICBjb25zdCBuZXh0VGFnID0gbmV4dFZOb2RlLnR5cGU7XG4gICAgY29uc3QgbGFzdFRhZyA9IGxhc3RWTm9kZS50eXBlO1xuICAgIGlmIChsYXN0VGFnICE9PSBuZXh0VGFnKSB7XG4gICAgICAgIHJlcGxhY2VXaXRoTmV3Tm9kZShsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBkb20gPSBsYXN0Vk5vZGUuZG9tO1xuICAgICAgICBjb25zdCBsYXN0UHJvcHMgPSBsYXN0Vk5vZGUucHJvcHM7XG4gICAgICAgIGNvbnN0IG5leHRQcm9wcyA9IG5leHRWTm9kZS5wcm9wcztcbiAgICAgICAgY29uc3QgbGFzdENoaWxkcmVuID0gbGFzdFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICBjb25zdCBuZXh0Q2hpbGRyZW4gPSBuZXh0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgIGNvbnN0IGxhc3RGbGFncyA9IGxhc3RWTm9kZS5mbGFncztcbiAgICAgICAgY29uc3QgbmV4dEZsYWdzID0gbmV4dFZOb2RlLmZsYWdzO1xuICAgICAgICBjb25zdCBsYXN0UmVmID0gbGFzdFZOb2RlLnJlZjtcbiAgICAgICAgY29uc3QgbmV4dFJlZiA9IG5leHRWTm9kZS5yZWY7XG4gICAgICAgIGNvbnN0IGxhc3RFdmVudHMgPSBsYXN0Vk5vZGUuZXZlbnRzO1xuICAgICAgICBjb25zdCBuZXh0RXZlbnRzID0gbmV4dFZOb2RlLmV2ZW50cztcbiAgICAgICAgbmV4dFZOb2RlLmRvbSA9IGRvbTtcbiAgICAgICAgaWYgKGlzU1ZHIHx8IChuZXh0RmxhZ3MgJiAxMjggLyogU3ZnRWxlbWVudCAqLykpIHtcbiAgICAgICAgICAgIGlzU1ZHID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdENoaWxkcmVuICE9PSBuZXh0Q2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHBhdGNoQ2hpbGRyZW4obGFzdEZsYWdzLCBuZXh0RmxhZ3MsIGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaGFzQ29udHJvbGxlZFZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmICghKG5leHRGbGFncyAmIDIgLyogSHRtbEVsZW1lbnQgKi8pKSB7XG4gICAgICAgICAgICBoYXNDb250cm9sbGVkVmFsdWUgPSBwcm9jZXNzRWxlbWVudChuZXh0RmxhZ3MsIG5leHRWTm9kZSwgZG9tLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5saW5lZCBwYXRjaFByb3BzICAtLSBzdGFydHMgLS1cbiAgICAgICAgaWYgKGxhc3RQcm9wcyAhPT0gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0UHJvcHNPckVtcHR5ID0gbGFzdFByb3BzIHx8IEVNUFRZX09CSjtcbiAgICAgICAgICAgIGNvbnN0IG5leHRQcm9wc09yRW1wdHkgPSBuZXh0UHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wc09yRW1wdHkgIT09IEVNUFRZX09CSikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gbmV4dFByb3BzT3JFbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSBuZXh0UHJvcHNPckVtcHR5W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0VmFsdWUgPSBsYXN0UHJvcHNPckVtcHR5W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihuZXh0VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVQcm9wKHByb3AsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoUHJvcChwcm9wLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tLCBpc1NWRywgaGFzQ29udHJvbGxlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsYXN0UHJvcHNPckVtcHR5ICE9PSBFTVBUWV9PQkopIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGxhc3RQcm9wc09yRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dFByb3BzT3JFbXB0eVtwcm9wXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVByb3AocHJvcCwgbGFzdFByb3BzT3JFbXB0eVtwcm9wXSwgZG9tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpbmxpbmVkIHBhdGNoUHJvcHMgIC0tIGVuZHMgLS1cbiAgICAgICAgaWYgKGxhc3RFdmVudHMgIT09IG5leHRFdmVudHMpIHtcbiAgICAgICAgICAgIHBhdGNoRXZlbnRzKGxhc3RFdmVudHMsIG5leHRFdmVudHMsIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRSZWYpIHtcbiAgICAgICAgICAgIGlmIChsYXN0UmVmICE9PSBuZXh0UmVmIHx8IGlzUmVjeWNsaW5nKSB7XG4gICAgICAgICAgICAgICAgbW91bnRSZWYoZG9tLCBuZXh0UmVmLCBsaWZlY3ljbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hDaGlsZHJlbihsYXN0RmxhZ3MsIG5leHRGbGFncywgbGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICBsZXQgcGF0Y2hBcnJheSA9IGZhbHNlO1xuICAgIGxldCBwYXRjaEtleWVkID0gZmFsc2U7XG4gICAgaWYgKG5leHRGbGFncyAmIDY0IC8qIEhhc05vbktleWVkQ2hpbGRyZW4gKi8pIHtcbiAgICAgICAgcGF0Y2hBcnJheSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKChsYXN0RmxhZ3MgJiAzMiAvKiBIYXNLZXllZENoaWxkcmVuICovKSAmJiAobmV4dEZsYWdzICYgMzIgLyogSGFzS2V5ZWRDaGlsZHJlbiAqLykpIHtcbiAgICAgICAgcGF0Y2hLZXllZCA9IHRydWU7XG4gICAgICAgIHBhdGNoQXJyYXkgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQobmV4dENoaWxkcmVuKSkge1xuICAgICAgICB1bm1vdW50Q2hpbGRyZW4obGFzdENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQobGFzdENoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudChkb20sIG5leHRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheShuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgbW91bnRBcnJheUNoaWxkcmVuKG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdW50KG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIobGFzdENoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXBkYXRlVGV4dENvbnRlbnQoZG9tLCBuZXh0Q2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdW5tb3VudENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50KGRvbSwgbmV4dENoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5KG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkobGFzdENoaWxkcmVuKSkge1xuICAgICAgICAgICAgcGF0Y2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaXNLZXllZChsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBwYXRjaEtleWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBtb3VudEFycmF5Q2hpbGRyZW4obmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQXJyYXkobGFzdENoaWxkcmVuKSkge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGxhc3RDaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIG1vdW50KG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNWTm9kZShuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChpc1ZOb2RlKGxhc3RDaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHBhdGNoKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBtb3VudChuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhdGNoQXJyYXkpIHtcbiAgICAgICAgaWYgKHBhdGNoS2V5ZWQpIHtcbiAgICAgICAgICAgIHBhdGNoS2V5ZWRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXRjaE5vbktleWVkQ2hpbGRyZW4obGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoQ29tcG9uZW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzQ2xhc3MsIGlzUmVjeWNsaW5nKSB7XG4gICAgY29uc3QgbGFzdFR5cGUgPSBsYXN0Vk5vZGUudHlwZTtcbiAgICBjb25zdCBuZXh0VHlwZSA9IG5leHRWTm9kZS50eXBlO1xuICAgIGNvbnN0IG5leHRQcm9wcyA9IG5leHRWTm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgbGFzdEtleSA9IGxhc3RWTm9kZS5rZXk7XG4gICAgY29uc3QgbmV4dEtleSA9IG5leHRWTm9kZS5rZXk7XG4gICAgY29uc3QgZGVmYXVsdFByb3BzID0gbmV4dFR5cGUuZGVmYXVsdFByb3BzO1xuICAgIGlmICghaXNVbmRlZmluZWQoZGVmYXVsdFByb3BzKSkge1xuICAgICAgICAvLyBXaGVuIGRlZmF1bHRQcm9wcyBhcmUgdXNlZCB3ZSBuZWVkIHRvIGNyZWF0ZSBuZXcgT2JqZWN0XG4gICAgICAgIGNvbnN0IHByb3BzID0gbmV4dFZOb2RlLnByb3BzIHx8IHt9O1xuICAgICAgICBjb3B5UHJvcHNUbyhkZWZhdWx0UHJvcHMsIHByb3BzKTtcbiAgICAgICAgbmV4dFZOb2RlLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGlmIChsYXN0VHlwZSAhPT0gbmV4dFR5cGUpIHtcbiAgICAgICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgICAgIHJlcGxhY2VXaXRoTmV3Tm9kZShsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0SW5wdXQgPSBsYXN0Vk5vZGUuY2hpbGRyZW4uX2xhc3RJbnB1dCB8fCBsYXN0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICBjb25zdCBuZXh0SW5wdXQgPSBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQobmV4dFZOb2RlLCBuZXh0VHlwZSwgbmV4dFByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHVubW91bnQobGFzdFZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBwYXRjaChsYXN0SW5wdXQsIG5leHRJbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBjb25zdCBkb20gPSBuZXh0Vk5vZGUuZG9tID0gbmV4dElucHV0LmRvbTtcbiAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IG5leHRJbnB1dDtcbiAgICAgICAgICAgIG1vdW50RnVuY3Rpb25hbENvbXBvbmVudENhbGxiYWNrcyhuZXh0Vk5vZGUucmVmLCBkb20sIGxpZmVjeWNsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgICAgICBpZiAobGFzdEtleSAhPT0gbmV4dEtleSkge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VXaXRoTmV3Tm9kZShsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBsYXN0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UuX3VubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIGlmIChpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVwbGFjZUNoaWxkKHBhcmVudERvbSwgbW91bnRDb21wb25lbnQobmV4dFZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBuZXh0Vk5vZGUuZmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovKSwgbGFzdFZOb2RlLmRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0U3RhdGUgPSBpbnN0YW5jZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSBpbnN0YW5jZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0UHJvcHMgPSBpbnN0YW5jZS5wcm9wcztcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRDb250ZXh0ID0gaW5zdGFuY2UuZ2V0Q2hpbGRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgbmV4dFZOb2RlLmNoaWxkcmVuID0gaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX2lzU1ZHID0gaXNTVkc7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX3N5bmNTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmKGNoaWxkQ29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIGNoaWxkQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJbnB1dCA9IGluc3RhbmNlLl9sYXN0SW5wdXQ7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRJbnB1dCA9IGluc3RhbmNlLl91cGRhdGVDb21wb25lbnQobGFzdFN0YXRlLCBuZXh0U3RhdGUsIGxhc3RQcm9wcywgbmV4dFByb3BzLCBjb250ZXh0LCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGxldCBkaWRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9jaGlsZENvbnRleHQgPSBjaGlsZENvbnRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKGlzSW52YWxpZChuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCA9IGNyZWF0ZVZvaWRWTm9kZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0SW5wdXQgPT09IE5PX09QKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCA9IGxhc3RJbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgZGlkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIobmV4dElucHV0KSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQgPSBjcmVhdGVUZXh0Vk5vZGUobmV4dElucHV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNBcnJheShuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KG5leHRJbnB1dCkgJiYgbmV4dElucHV0LmRvbSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQgPSBjbG9uZVZOb2RlKG5leHRJbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXh0SW5wdXQuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0LnBhcmVudFZOb2RlID0gbmV4dFZOb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsYXN0SW5wdXQuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdElucHV0LnBhcmVudFZOb2RlID0gbmV4dFZOb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fbGFzdElucHV0ID0gbmV4dElucHV0O1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl92Tm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgICAgICBpZiAoZGlkVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoKGxhc3RJbnB1dCwgbmV4dElucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2hpbGRDb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb21wb25lbnREaWRVcGRhdGUobGFzdFByb3BzLCBsYXN0U3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmFmdGVyVXBkYXRlICYmIG9wdGlvbnMuYWZ0ZXJVcGRhdGUobmV4dFZOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLnNldChpbnN0YW5jZSwgbmV4dElucHV0LmRvbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9zeW5jU2V0U3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG5leHRWTm9kZS5kb20gPSBuZXh0SW5wdXQuZG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHNob3VsZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBsYXN0UHJvcHMgPSBsYXN0Vk5vZGUucHJvcHM7XG4gICAgICAgICAgICBjb25zdCBuZXh0SG9va3MgPSBuZXh0Vk5vZGUucmVmO1xuICAgICAgICAgICAgY29uc3QgbmV4dEhvb2tzRGVmaW5lZCA9ICFpc051bGxPclVuZGVmKG5leHRIb29rcyk7XG4gICAgICAgICAgICBjb25zdCBsYXN0SW5wdXQgPSBsYXN0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICBsZXQgbmV4dElucHV0ID0gbGFzdElucHV0O1xuICAgICAgICAgICAgbmV4dFZOb2RlLmRvbSA9IGxhc3RWTm9kZS5kb207XG4gICAgICAgICAgICBuZXh0Vk5vZGUuY2hpbGRyZW4gPSBsYXN0SW5wdXQ7XG4gICAgICAgICAgICBpZiAobGFzdEtleSAhPT0gbmV4dEtleSkge1xuICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEhvb2tzRGVmaW5lZCAmJiAhaXNOdWxsT3JVbmRlZihuZXh0SG9va3Mub25Db21wb25lbnRTaG91bGRVcGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IG5leHRIb29rcy5vbkNvbXBvbmVudFNob3VsZFVwZGF0ZShsYXN0UHJvcHMsIG5leHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEhvb2tzRGVmaW5lZCAmJiAhaXNOdWxsT3JVbmRlZihuZXh0SG9va3Mub25Db21wb25lbnRXaWxsVXBkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SG9va3Mub25Db21wb25lbnRXaWxsVXBkYXRlKGxhc3RQcm9wcywgbmV4dFByb3BzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV4dElucHV0ID0gbmV4dFR5cGUobmV4dFByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBpZiAoaXNJbnZhbGlkKG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0ID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIobmV4dElucHV0KSAmJiBuZXh0SW5wdXQgIT09IE5PX09QKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCA9IGNyZWF0ZVRleHRWTm9kZShuZXh0SW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0FycmF5KG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ2EgdmFsaWQgSW5mZXJubyBWTm9kZSAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZCBmcm9tIGEgY29tcG9uZW50IHJlbmRlci4gWW91IG1heSBoYXZlIHJldHVybmVkIGFuIGFycmF5IG9yIGFuIGludmFsaWQgb2JqZWN0LicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNPYmplY3QobmV4dElucHV0KSAmJiBuZXh0SW5wdXQuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCA9IGNsb25lVk5vZGUobmV4dElucHV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5leHRJbnB1dCAhPT0gTk9fT1ApIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2gobGFzdElucHV0LCBuZXh0SW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0Vk5vZGUuY2hpbGRyZW4gPSBuZXh0SW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0SG9va3NEZWZpbmVkICYmICFpc051bGxPclVuZGVmKG5leHRIb29rcy5vbkNvbXBvbmVudERpZFVwZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRIb29rcy5vbkNvbXBvbmVudERpZFVwZGF0ZShsYXN0UHJvcHMsIG5leHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV4dFZOb2RlLmRvbSA9IG5leHRJbnB1dC5kb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5leHRJbnB1dC5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgIG5leHRJbnB1dC5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxhc3RJbnB1dC5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgIGxhc3RJbnB1dC5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hUZXh0KGxhc3RWTm9kZSwgbmV4dFZOb2RlKSB7XG4gICAgY29uc3QgbmV4dFRleHQgPSBuZXh0Vk5vZGUuY2hpbGRyZW47XG4gICAgY29uc3QgZG9tID0gbGFzdFZOb2RlLmRvbTtcbiAgICBuZXh0Vk5vZGUuZG9tID0gZG9tO1xuICAgIGlmIChsYXN0Vk5vZGUuY2hpbGRyZW4gIT09IG5leHRUZXh0KSB7XG4gICAgICAgIGRvbS5ub2RlVmFsdWUgPSBuZXh0VGV4dDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hWb2lkKGxhc3RWTm9kZSwgbmV4dFZOb2RlKSB7XG4gICAgbmV4dFZOb2RlLmRvbSA9IGxhc3RWTm9kZS5kb207XG59XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hOb25LZXllZENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgY29uc3QgbGFzdENoaWxkcmVuTGVuZ3RoID0gbGFzdENoaWxkcmVuLmxlbmd0aDtcbiAgICBjb25zdCBuZXh0Q2hpbGRyZW5MZW5ndGggPSBuZXh0Q2hpbGRyZW4ubGVuZ3RoO1xuICAgIGNvbnN0IGNvbW1vbkxlbmd0aCA9IGxhc3RDaGlsZHJlbkxlbmd0aCA+IG5leHRDaGlsZHJlbkxlbmd0aCA/IG5leHRDaGlsZHJlbkxlbmd0aCA6IGxhc3RDaGlsZHJlbkxlbmd0aDtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yICg7IGkgPCBjb21tb25MZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbmV4dENoaWxkID0gbmV4dENoaWxkcmVuW2ldO1xuICAgICAgICBpZiAobmV4dENoaWxkLmRvbSkge1xuICAgICAgICAgICAgbmV4dENoaWxkID0gbmV4dENoaWxkcmVuW2ldID0gY2xvbmVWTm9kZShuZXh0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHBhdGNoKGxhc3RDaGlsZHJlbltpXSwgbmV4dENoaWxkLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgaWYgKGxhc3RDaGlsZHJlbkxlbmd0aCA8IG5leHRDaGlsZHJlbkxlbmd0aCkge1xuICAgICAgICBmb3IgKGkgPSBjb21tb25MZW5ndGg7IGkgPCBuZXh0Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5leHRDaGlsZCA9IG5leHRDaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChuZXh0Q2hpbGQuZG9tKSB7XG4gICAgICAgICAgICAgICAgbmV4dENoaWxkID0gbmV4dENoaWxkcmVuW2ldID0gY2xvbmVWTm9kZShuZXh0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBwZW5kQ2hpbGQoZG9tLCBtb3VudChuZXh0Q2hpbGQsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChuZXh0Q2hpbGRyZW5MZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBsYXN0Q2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChsYXN0Q2hpbGRyZW5MZW5ndGggPiBuZXh0Q2hpbGRyZW5MZW5ndGgpIHtcbiAgICAgICAgZm9yIChpID0gY29tbW9uTGVuZ3RoOyBpIDwgbGFzdENoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHVubW91bnQobGFzdENoaWxkcmVuW2ldLCBkb20sIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEtleWVkQ2hpbGRyZW4oYSwgYiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIGxldCBhTGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgbGV0IGJMZW5ndGggPSBiLmxlbmd0aDtcbiAgICBsZXQgYUVuZCA9IGFMZW5ndGggLSAxO1xuICAgIGxldCBiRW5kID0gYkxlbmd0aCAtIDE7XG4gICAgbGV0IGFTdGFydCA9IDA7XG4gICAgbGV0IGJTdGFydCA9IDA7XG4gICAgbGV0IGk7XG4gICAgbGV0IGo7XG4gICAgbGV0IGFOb2RlO1xuICAgIGxldCBiTm9kZTtcbiAgICBsZXQgbmV4dE5vZGU7XG4gICAgbGV0IG5leHRQb3M7XG4gICAgbGV0IG5vZGU7XG4gICAgaWYgKGFMZW5ndGggPT09IDApIHtcbiAgICAgICAgaWYgKGJMZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIG1vdW50QXJyYXlDaGlsZHJlbihiLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZiAoYkxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGEsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBhU3RhcnROb2RlID0gYVthU3RhcnRdO1xuICAgIGxldCBiU3RhcnROb2RlID0gYltiU3RhcnRdO1xuICAgIGxldCBhRW5kTm9kZSA9IGFbYUVuZF07XG4gICAgbGV0IGJFbmROb2RlID0gYltiRW5kXTtcbiAgICBpZiAoYlN0YXJ0Tm9kZS5kb20pIHtcbiAgICAgICAgYltiU3RhcnRdID0gYlN0YXJ0Tm9kZSA9IGNsb25lVk5vZGUoYlN0YXJ0Tm9kZSk7XG4gICAgfVxuICAgIGlmIChiRW5kTm9kZS5kb20pIHtcbiAgICAgICAgYltiRW5kXSA9IGJFbmROb2RlID0gY2xvbmVWTm9kZShiRW5kTm9kZSk7XG4gICAgfVxuICAgIC8vIFN0ZXAgMVxuICAgIC8qIGVzbGludCBuby1jb25zdGFudC1jb25kaXRpb246IDAgKi9cbiAgICBvdXRlcjogd2hpbGUgKHRydWUpIHtcbiAgICAgICAgLy8gU3luYyBub2RlcyB3aXRoIHRoZSBzYW1lIGtleSBhdCB0aGUgYmVnaW5uaW5nLlxuICAgICAgICB3aGlsZSAoYVN0YXJ0Tm9kZS5rZXkgPT09IGJTdGFydE5vZGUua2V5KSB7XG4gICAgICAgICAgICBwYXRjaChhU3RhcnROb2RlLCBiU3RhcnROb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIGFTdGFydCsrO1xuICAgICAgICAgICAgYlN0YXJ0Kys7XG4gICAgICAgICAgICBpZiAoYVN0YXJ0ID4gYUVuZCB8fCBiU3RhcnQgPiBiRW5kKSB7XG4gICAgICAgICAgICAgICAgYnJlYWsgb3V0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhU3RhcnROb2RlID0gYVthU3RhcnRdO1xuICAgICAgICAgICAgYlN0YXJ0Tm9kZSA9IGJbYlN0YXJ0XTtcbiAgICAgICAgICAgIGlmIChiU3RhcnROb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgIGJbYlN0YXJ0XSA9IGJTdGFydE5vZGUgPSBjbG9uZVZOb2RlKGJTdGFydE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFN5bmMgbm9kZXMgd2l0aCB0aGUgc2FtZSBrZXkgYXQgdGhlIGVuZC5cbiAgICAgICAgd2hpbGUgKGFFbmROb2RlLmtleSA9PT0gYkVuZE5vZGUua2V5KSB7XG4gICAgICAgICAgICBwYXRjaChhRW5kTm9kZSwgYkVuZE5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgYUVuZC0tO1xuICAgICAgICAgICAgYkVuZC0tO1xuICAgICAgICAgICAgaWYgKGFTdGFydCA+IGFFbmQgfHwgYlN0YXJ0ID4gYkVuZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrIG91dGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYUVuZE5vZGUgPSBhW2FFbmRdO1xuICAgICAgICAgICAgYkVuZE5vZGUgPSBiW2JFbmRdO1xuICAgICAgICAgICAgaWYgKGJFbmROb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgIGJbYkVuZF0gPSBiRW5kTm9kZSA9IGNsb25lVk5vZGUoYkVuZE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmUgYW5kIHN5bmMgbm9kZXMgZnJvbSByaWdodCB0byBsZWZ0LlxuICAgICAgICBpZiAoYUVuZE5vZGUua2V5ID09PSBiU3RhcnROb2RlLmtleSkge1xuICAgICAgICAgICAgcGF0Y2goYUVuZE5vZGUsIGJTdGFydE5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBiU3RhcnROb2RlLmRvbSwgYVN0YXJ0Tm9kZS5kb20pO1xuICAgICAgICAgICAgYUVuZC0tO1xuICAgICAgICAgICAgYlN0YXJ0Kys7XG4gICAgICAgICAgICBhRW5kTm9kZSA9IGFbYUVuZF07XG4gICAgICAgICAgICBiU3RhcnROb2RlID0gYltiU3RhcnRdO1xuICAgICAgICAgICAgaWYgKGJTdGFydE5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgYltiU3RhcnRdID0gYlN0YXJ0Tm9kZSA9IGNsb25lVk5vZGUoYlN0YXJ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlIGFuZCBzeW5jIG5vZGVzIGZyb20gbGVmdCB0byByaWdodC5cbiAgICAgICAgaWYgKGFTdGFydE5vZGUua2V5ID09PSBiRW5kTm9kZS5rZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGFTdGFydE5vZGUsIGJFbmROb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIG5leHRQb3MgPSBiRW5kICsgMTtcbiAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBiRW5kTm9kZS5kb20sIG5leHROb2RlKTtcbiAgICAgICAgICAgIGFTdGFydCsrO1xuICAgICAgICAgICAgYkVuZC0tO1xuICAgICAgICAgICAgYVN0YXJ0Tm9kZSA9IGFbYVN0YXJ0XTtcbiAgICAgICAgICAgIGJFbmROb2RlID0gYltiRW5kXTtcbiAgICAgICAgICAgIGlmIChiRW5kTm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICBiW2JFbmRdID0gYkVuZE5vZGUgPSBjbG9uZVZOb2RlKGJFbmROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoYVN0YXJ0ID4gYUVuZCkge1xuICAgICAgICBpZiAoYlN0YXJ0IDw9IGJFbmQpIHtcbiAgICAgICAgICAgIG5leHRQb3MgPSBiRW5kICsgMTtcbiAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgd2hpbGUgKGJTdGFydCA8PSBiRW5kKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IGJbYlN0YXJ0XTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgYltiU3RhcnRdID0gbm9kZSA9IGNsb25lVk5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJTdGFydCsrO1xuICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbW91bnQobm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyksIG5leHROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChiU3RhcnQgPiBiRW5kKSB7XG4gICAgICAgIHdoaWxlIChhU3RhcnQgPD0gYUVuZCkge1xuICAgICAgICAgICAgdW5tb3VudChhW2FTdGFydCsrXSwgZG9tLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFMZW5ndGggPSBhRW5kIC0gYVN0YXJ0ICsgMTtcbiAgICAgICAgYkxlbmd0aCA9IGJFbmQgLSBiU3RhcnQgKyAxO1xuICAgICAgICBjb25zdCBzb3VyY2VzID0gbmV3IEFycmF5KGJMZW5ndGgpO1xuICAgICAgICAvLyBNYXJrIGFsbCBub2RlcyBhcyBpbnNlcnRlZC5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc291cmNlc1tpXSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtb3ZlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgcG9zID0gMDtcbiAgICAgICAgbGV0IHBhdGNoZWQgPSAwO1xuICAgICAgICAvLyBXaGVuIHNpemVzIGFyZSBzbWFsbCwganVzdCBsb29wIHRoZW0gdGhyb3VnaFxuICAgICAgICBpZiAoKGJMZW5ndGggPD0gNCkgfHwgKGFMZW5ndGggKiBiTGVuZ3RoIDw9IDE2KSkge1xuICAgICAgICAgICAgZm9yIChpID0gYVN0YXJ0OyBpIDw9IGFFbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGFOb2RlID0gYVtpXTtcbiAgICAgICAgICAgICAgICBpZiAocGF0Y2hlZCA8IGJMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gYlN0YXJ0OyBqIDw9IGJFbmQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYk5vZGUgPSBiW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFOb2RlLmtleSA9PT0gYk5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlc1tqIC0gYlN0YXJ0XSA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA+IGopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJOb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiW2pdID0gYk5vZGUgPSBjbG9uZVZOb2RlKGJOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2goYU5vZGUsIGJOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRjaGVkKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtpXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBrZXlJbmRleCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIC8vIE1hcCBrZXlzIGJ5IHRoZWlyIGluZGV4IGluIGFycmF5XG4gICAgICAgICAgICBmb3IgKGkgPSBiU3RhcnQ7IGkgPD0gYkVuZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IGJbaV07XG4gICAgICAgICAgICAgICAga2V5SW5kZXguc2V0KG5vZGUua2V5LCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRyeSB0byBwYXRjaCBzYW1lIGtleXNcbiAgICAgICAgICAgIGZvciAoaSA9IGFTdGFydDsgaSA8PSBhRW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhTm9kZSA9IGFbaV07XG4gICAgICAgICAgICAgICAgaWYgKHBhdGNoZWQgPCBiTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGogPSBrZXlJbmRleC5nZXQoYU5vZGUua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChqKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYk5vZGUgPSBiW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlc1tqIC0gYlN0YXJ0XSA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zID4gaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYk5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYltqXSA9IGJOb2RlID0gY2xvbmVWTm9kZShiTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaChhTm9kZSwgYk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hlZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYVtpXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmFzdC1wYXRoOiBpZiBub3RoaW5nIHBhdGNoZWQgcmVtb3ZlIGFsbCBvbGQgYW5kIGFkZCBhbGwgbmV3XG4gICAgICAgIGlmIChhTGVuZ3RoID09PSBhLmxlbmd0aCAmJiBwYXRjaGVkID09PSAwKSB7XG4gICAgICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGEsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgd2hpbGUgKGJTdGFydCA8IGJMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gYltiU3RhcnRdO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICBiW2JTdGFydF0gPSBub2RlID0gY2xvbmVWTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYlN0YXJ0Kys7XG4gICAgICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBtb3VudChub2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpID0gYUxlbmd0aCAtIHBhdGNoZWQ7XG4gICAgICAgICAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICBhTm9kZSA9IGFbYVN0YXJ0KytdO1xuICAgICAgICAgICAgICAgIGlmICghaXNOdWxsKGFOb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICB1bm1vdW50KGFOb2RlLCBkb20sIGxpZmVjeWNsZSwgdHJ1ZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VxID0gbGlzX2FsZ29yaXRobShzb3VyY2VzKTtcbiAgICAgICAgICAgICAgICBqID0gc2VxLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gYkxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VzW2ldID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gaSArIGJTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBiW3Bvc107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiW3Bvc10gPSBub2RlID0gY2xvbmVWTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3MgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIG1vdW50KG5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyksIG5leHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqIDwgMCB8fCBpICE9PSBzZXFbal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBpICsgYlN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBiW3Bvc107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcyA9IHBvcyArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBub2RlLmRvbSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGF0Y2hlZCAhPT0gYkxlbmd0aCkge1xuICAgICAgICAgICAgICAgIC8vIHdoZW4gcGF0Y2hlZCBjb3VudCBkb2Vzbid0IG1hdGNoIGIgbGVuZ3RoIHdlIG5lZWQgdG8gaW5zZXJ0IHRob3NlIG5ldyBvbmVzXG4gICAgICAgICAgICAgICAgLy8gbG9vcCBiYWNrd2FyZHMgc28gd2UgY2FuIHVzZSBpbnNlcnRCZWZvcmVcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBiTGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZXNbaV0gPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBpICsgYlN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGJbcG9zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbcG9zXSA9IG5vZGUgPSBjbG9uZVZOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFBvcyA9IHBvcyArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0Tm9kZSA9IG5leHRQb3MgPCBiLmxlbmd0aCA/IGJbbmV4dFBvc10uZG9tIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbW91bnQobm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyksIG5leHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xvbmdlc3RfaW5jcmVhc2luZ19zdWJzZXF1ZW5jZVxuZnVuY3Rpb24gbGlzX2FsZ29yaXRobShhcnIpIHtcbiAgICBjb25zdCBwID0gYXJyLnNsaWNlKDApO1xuICAgIGNvbnN0IHJlc3VsdCA9IFswXTtcbiAgICBsZXQgaTtcbiAgICBsZXQgajtcbiAgICBsZXQgdTtcbiAgICBsZXQgdjtcbiAgICBsZXQgYztcbiAgICBjb25zdCBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsZXQgYXJySSA9IGFycltpXTtcbiAgICAgICAgaWYgKGFyckkgPT09IC0xKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBqID0gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGFycltqXSA8IGFyckkpIHtcbiAgICAgICAgICAgIHBbaV0gPSBqO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB1ID0gMDtcbiAgICAgICAgdiA9IHJlc3VsdC5sZW5ndGggLSAxO1xuICAgICAgICB3aGlsZSAodSA8IHYpIHtcbiAgICAgICAgICAgIGMgPSAoKHUgKyB2KSAvIDIpIHwgMDtcbiAgICAgICAgICAgIGlmIChhcnJbcmVzdWx0W2NdXSA8IGFyckkpIHtcbiAgICAgICAgICAgICAgICB1ID0gYyArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2ID0gYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJySSA8IGFycltyZXN1bHRbdV1dKSB7XG4gICAgICAgICAgICBpZiAodSA+IDApIHtcbiAgICAgICAgICAgICAgICBwW2ldID0gcmVzdWx0W3UgLSAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdFt1XSA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdSA9IHJlc3VsdC5sZW5ndGg7XG4gICAgdiA9IHJlc3VsdFt1IC0gMV07XG4gICAgd2hpbGUgKHUtLSA+IDApIHtcbiAgICAgICAgcmVzdWx0W3VdID0gdjtcbiAgICAgICAgdiA9IHBbdl07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hQcm9wKHByb3AsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20sIGlzU1ZHLCBoYXNDb250cm9sbGVkVmFsdWUpIHtcbiAgICBpZiAoc2tpcFByb3BzW3Byb3BdIHx8IGhhc0NvbnRyb2xsZWRWYWx1ZSAmJiBwcm9wID09PSAndmFsdWUnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGJvb2xlYW5Qcm9wc1twcm9wXSkge1xuICAgICAgICBkb21bcHJvcF0gPSAhIW5leHRWYWx1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RyaWN0UHJvcHNbcHJvcF0pIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpc051bGxPclVuZGVmKG5leHRWYWx1ZSkgPyAnJyA6IG5leHRWYWx1ZTtcbiAgICAgICAgaWYgKGRvbVtwcm9wXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGRvbVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGxhc3RWYWx1ZSAhPT0gbmV4dFZhbHVlKSB7XG4gICAgICAgIGlmIChpc0F0dHJBbkV2ZW50KHByb3ApKSB7XG4gICAgICAgICAgICBwYXRjaEV2ZW50KHByb3AsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzTnVsbE9yVW5kZWYobmV4dFZhbHVlKSkge1xuICAgICAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgICAgaWYgKGlzU1ZHKSB7XG4gICAgICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBuZXh0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9tLmNsYXNzTmFtZSA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBwYXRjaFN0eWxlKGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RIdG1sID0gbGFzdFZhbHVlICYmIGxhc3RWYWx1ZS5fX2h0bWw7XG4gICAgICAgICAgICBjb25zdCBuZXh0SHRtbCA9IG5leHRWYWx1ZSAmJiBuZXh0VmFsdWUuX19odG1sO1xuICAgICAgICAgICAgaWYgKGxhc3RIdG1sICE9PSBuZXh0SHRtbCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihuZXh0SHRtbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLmlubmVySFRNTCA9IG5leHRIdG1sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5zID0gbmFtZXNwYWNlc1twcm9wXTtcbiAgICAgICAgICAgIGlmIChucykge1xuICAgICAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGVOUyhucywgcHJvcCwgbmV4dFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUocHJvcCwgbmV4dFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEV2ZW50cyhsYXN0RXZlbnRzLCBuZXh0RXZlbnRzLCBkb20pIHtcbiAgICBsYXN0RXZlbnRzID0gbGFzdEV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgbmV4dEV2ZW50cyA9IG5leHRFdmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIGlmIChuZXh0RXZlbnRzICE9PSBFTVBUWV9PQkopIHtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBuZXh0RXZlbnRzKSB7XG4gICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lLCBsYXN0RXZlbnRzW25hbWVdLCBuZXh0RXZlbnRzW25hbWVdLCBkb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChsYXN0RXZlbnRzICE9PSBFTVBUWV9PQkopIHtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBsYXN0RXZlbnRzKSB7XG4gICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dEV2ZW50c1tuYW1lXSkpIHtcbiAgICAgICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUsIGxhc3RFdmVudHNbbmFtZV0sIG51bGwsIGRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hFdmVudChuYW1lLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tKSB7XG4gICAgaWYgKGxhc3RWYWx1ZSAhPT0gbmV4dFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5hbWVMb3dlckNhc2UgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGRvbUV2ZW50ID0gZG9tW25hbWVMb3dlckNhc2VdO1xuICAgICAgICAvLyBpZiB0aGUgZnVuY3Rpb24gaXMgd3JhcHBlZCwgdGhhdCBtZWFucyBpdCdzIGJlZW4gY29udHJvbGxlZCBieSBhIHdyYXBwZXJcbiAgICAgICAgaWYgKGRvbUV2ZW50ICYmIGRvbUV2ZW50LndyYXBwZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsZWdhdGVkUHJvcHNbbmFtZV0pIHtcbiAgICAgICAgICAgIGhhbmRsZUV2ZW50KG5hbWUsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGxhc3RWYWx1ZSAhPT0gbmV4dFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKG5leHRWYWx1ZSkgJiYgIWlzTnVsbE9yVW5kZWYobmV4dFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rRXZlbnQgPSBuZXh0VmFsdWUuZXZlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaW5rRXZlbnQgJiYgaXNGdW5jdGlvbihsaW5rRXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRvbS5fZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVtuYW1lTG93ZXJDYXNlXSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtFdmVudChlLmN1cnJlbnRUYXJnZXQuX2RhdGEsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb20uX2RhdGEgPSBuZXh0VmFsdWUuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcihgYW4gZXZlbnQgb24gYSBWTm9kZSBcIiR7bmFtZX1cIi4gd2FzIG5vdCBhIGZ1bmN0aW9uIG9yIGEgdmFsaWQgbGlua0V2ZW50LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb21bbmFtZUxvd2VyQ2FzZV0gPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gV2UgYXJlIGFzc3VtaW5nIGhlcmUgdGhhdCB3ZSBjb21lIGZyb20gcGF0Y2hQcm9wIHJvdXRpbmVcbi8vIC1uZXh0QXR0clZhbHVlIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZFxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoU3R5bGUobGFzdEF0dHJWYWx1ZSwgbmV4dEF0dHJWYWx1ZSwgZG9tKSB7XG4gICAgaWYgKGlzU3RyaW5nKG5leHRBdHRyVmFsdWUpKSB7XG4gICAgICAgIGRvbS5zdHlsZS5jc3NUZXh0ID0gbmV4dEF0dHJWYWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGxldCBzdHlsZSBpbiBuZXh0QXR0clZhbHVlKSB7XG4gICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV4dEF0dHJWYWx1ZVtzdHlsZV07XG4gICAgICAgIGlmIChpc051bWJlcih2YWx1ZSkgJiYgIWlzVW5pdGxlc3NOdW1iZXJbc3R5bGVdKSB7XG4gICAgICAgICAgICBkb20uc3R5bGVbc3R5bGVdID0gdmFsdWUgKyAncHgnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9tLnN0eWxlW3N0eWxlXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXNOdWxsT3JVbmRlZihsYXN0QXR0clZhbHVlKSkge1xuICAgICAgICBmb3IgKGxldCBzdHlsZSBpbiBsYXN0QXR0clZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihuZXh0QXR0clZhbHVlW3N0eWxlXSkpIHtcbiAgICAgICAgICAgICAgICBkb20uc3R5bGVbc3R5bGVdID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiByZW1vdmVQcm9wKHByb3AsIGxhc3RWYWx1ZSwgZG9tKSB7XG4gICAgaWYgKHByb3AgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3AgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgZG9tLnZhbHVlID0gJyc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3AgPT09ICdzdHlsZScpIHtcbiAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBdHRyQW5FdmVudChwcm9wKSkge1xuICAgICAgICBoYW5kbGVFdmVudChuYW1lLCBsYXN0VmFsdWUsIG51bGwsIGRvbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb20ucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS9wYXRjaGluZy5qcyIsImltcG9ydCB7IGlzQnJvd3NlciwgaXNJbnZhbGlkLCBpc051bGwsIGlzTnVsbE9yVW5kZWYsIExpZmVjeWNsZSwgTk9fT1AsIHRocm93RXJyb3IsIHdhcm5pbmcgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9jb3JlL29wdGlvbnMnO1xuaW1wb3J0IHsgY2xvbmVWTm9kZSB9IGZyb20gJy4uL2NvcmUvVk5vZGVzJztcbmltcG9ydCBoeWRyYXRlUm9vdCBmcm9tICcuL2h5ZHJhdGlvbic7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJy4vbW91bnRpbmcnO1xuaW1wb3J0IHsgcGF0Y2ggfSBmcm9tICcuL3BhdGNoaW5nJztcbmltcG9ydCB7IHVubW91bnQgfSBmcm9tICcuL3VubW91bnRpbmcnO1xuaW1wb3J0IHsgRU1QVFlfT0JKIH0gZnJvbSAnLi91dGlscyc7XG4vLyByYXRoZXIgdGhhbiB1c2UgYSBNYXAsIGxpa2Ugd2UgZGlkIGJlZm9yZSwgd2UgY2FuIHVzZSBhbiBhcnJheSBoZXJlXG4vLyBnaXZlbiB0aGVyZSBzaG91bGRuJ3QgYmUgVEhBVCBtYW55IHJvb3RzIG9uIHRoZSBwYWdlLCB0aGUgZGlmZmVyZW5jZVxuLy8gaW4gcGVyZm9ybWFuY2UgaXMgaHVnZTogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81ODAyYTY5MTMzMGFiMDk5MDBhMWEyZGFcbmV4cG9ydCBjb25zdCByb290cyA9IFtdO1xuZXhwb3J0IGNvbnN0IGNvbXBvbmVudFRvRE9NTm9kZU1hcCA9IG5ldyBNYXAoKTtcbm9wdGlvbnMucm9vdHMgPSByb290cztcbmV4cG9ydCBmdW5jdGlvbiBmaW5kRE9NTm9kZShyZWYpIHtcbiAgICBpZiAoIW9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdmaW5kRE9NTm9kZSgpIGhhcyBiZWVuIGRpc2FibGVkLCB1c2UgSW5mZXJuby5vcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCA9IHRydWU7IGVuYWJsZWQgZmluZERPTU5vZGUoKS4gV2FybmluZyB0aGlzIGNhbiBzaWduaWZpY2FudGx5IGltcGFjdCBwZXJmb3JtYW5jZSEnKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxuICAgIGNvbnN0IGRvbSA9IHJlZiAmJiByZWYubm9kZVR5cGUgPyByZWYgOiBudWxsO1xuICAgIHJldHVybiBjb21wb25lbnRUb0RPTU5vZGVNYXAuZ2V0KHJlZikgfHwgZG9tO1xufVxuZnVuY3Rpb24gZ2V0Um9vdChkb20pIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcm9vdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IHJvb3RzW2ldO1xuICAgICAgICBpZiAocm9vdC5kb20gPT09IGRvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzZXRSb290KGRvbSwgaW5wdXQsIGxpZmVjeWNsZSkge1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGRvbSxcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIGxpZmVjeWNsZVxuICAgIH07XG4gICAgcm9vdHMucHVzaChyb290KTtcbiAgICByZXR1cm4gcm9vdDtcbn1cbmZ1bmN0aW9uIHJlbW92ZVJvb3Qocm9vdCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSByb290cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAocm9vdHNbaV0gPT09IHJvb3QpIHtcbiAgICAgICAgICAgIHJvb3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGlzQnJvd3NlciAmJiBkb2N1bWVudC5ib2R5ID09PSBudWxsKSB7XG4gICAgICAgIHdhcm5pbmcoJ0luZmVybm8gd2FybmluZzogeW91IGNhbm5vdCBpbml0aWFsaXplIGluZmVybm8gd2l0aG91dCBcImRvY3VtZW50LmJvZHlcIi4gV2FpdCBvbiBcIkRPTUNvbnRlbnRMb2FkZWRcIiBldmVudCwgYWRkIHNjcmlwdCB0byBib3R0b20gb2YgYm9keSwgb3IgdXNlIGFzeW5jL2RlZmVyIGF0dHJpYnV0ZXMgb24gc2NyaXB0IHRhZy4nKTtcbiAgICB9XG59XG5jb25zdCBkb2N1bWVudEJvZHkgPSBpc0Jyb3dzZXIgPyBkb2N1bWVudC5ib2R5IDogbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoaW5wdXQsIHBhcmVudERvbSkge1xuICAgIGlmIChkb2N1bWVudEJvZHkgPT09IHBhcmVudERvbSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcigneW91IGNhbm5vdCByZW5kZXIoKSB0byB0aGUgXCJkb2N1bWVudC5ib2R5XCIuIFVzZSBhbiBlbXB0eSBlbGVtZW50IGFzIGEgY29udGFpbmVyIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbiAgICBpZiAoaW5wdXQgPT09IE5PX09QKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHJvb3QgPSBnZXRSb290KHBhcmVudERvbSk7XG4gICAgaWYgKGlzTnVsbChyb290KSkge1xuICAgICAgICBjb25zdCBsaWZlY3ljbGUgPSBuZXcgTGlmZWN5Y2xlKCk7XG4gICAgICAgIGlmICghaXNJbnZhbGlkKGlucHV0KSkge1xuICAgICAgICAgICAgaWYgKGlucHV0LmRvbSkge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gY2xvbmVWTm9kZShpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWh5ZHJhdGVSb290KGlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSkpIHtcbiAgICAgICAgICAgICAgICBtb3VudChpbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIEVNUFRZX09CSiwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcm9vdCA9IHNldFJvb3QocGFyZW50RG9tLCBpbnB1dCwgbGlmZWN5Y2xlKTtcbiAgICAgICAgICAgIGxpZmVjeWNsZS50cmlnZ2VyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGxpZmVjeWNsZSA9IHJvb3QubGlmZWN5Y2xlO1xuICAgICAgICBsaWZlY3ljbGUubGlzdGVuZXJzID0gW107XG4gICAgICAgIGlmIChpc051bGxPclVuZGVmKGlucHV0KSkge1xuICAgICAgICAgICAgdW5tb3VudChyb290LmlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIHJlbW92ZVJvb3Qocm9vdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaW5wdXQuZG9tKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBjbG9uZVZOb2RlKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGNoKHJvb3QuaW5wdXQsIGlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgRU1QVFlfT0JKLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGxpZmVjeWNsZS50cmlnZ2VyKCk7XG4gICAgICAgIHJvb3QuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG4gICAgaWYgKHJvb3QpIHtcbiAgICAgICAgY29uc3Qgcm9vdElucHV0ID0gcm9vdC5pbnB1dDtcbiAgICAgICAgaWYgKHJvb3RJbnB1dCAmJiAocm9vdElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3RJbnB1dC5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZW5kZXJlcihwYXJlbnREb20pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVuZGVyZXIobGFzdElucHV0LCBuZXh0SW5wdXQpIHtcbiAgICAgICAgaWYgKCFwYXJlbnREb20pIHtcbiAgICAgICAgICAgIHBhcmVudERvbSA9IGxhc3RJbnB1dDtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXIobmV4dElucHV0LCBwYXJlbnREb20pO1xuICAgIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vcmVuZGVyaW5nLmpzIiwiaW1wb3J0IHsgcHJvY2Vzc0lucHV0IH0gZnJvbSAnLi9JbnB1dFdyYXBwZXInO1xuaW1wb3J0IHsgcHJvY2Vzc1NlbGVjdCB9IGZyb20gJy4vU2VsZWN0V3JhcHBlcic7XG5pbXBvcnQgeyBwcm9jZXNzVGV4dGFyZWEgfSBmcm9tICcuL1RleHRhcmVhV3JhcHBlcic7XG5leHBvcnQgY29uc3Qgd3JhcHBlcnMgPSBuZXcgTWFwKCk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9jZXNzRWxlbWVudChmbGFncywgdk5vZGUsIGRvbSwgbW91bnRpbmcpIHtcbiAgICBpZiAoZmxhZ3MgJiA1MTIgLyogSW5wdXRFbGVtZW50ICovKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzSW5wdXQodk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGlmIChmbGFncyAmIDIwNDggLyogU2VsZWN0RWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gcHJvY2Vzc1NlbGVjdCh2Tm9kZSwgZG9tKTtcbiAgICB9XG4gICAgaWYgKGZsYWdzICYgMTAyNCAvKiBUZXh0YXJlYUVsZW1lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NUZXh0YXJlYSh2Tm9kZSwgZG9tLCBtb3VudGluZyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9wcm9jZXNzRWxlbWVudC5qcyIsImZ1bmN0aW9uIGNvbnN0cnVjdERlZmF1bHRzKHN0cmluZywgb2JqZWN0LCB2YWx1ZSkge1xuICAgIC8qIGVzbGludCBuby1yZXR1cm4tYXNzaWduOiAwICovXG4gICAgY29uc3QgYXJyYXkgPSBzdHJpbmcuc3BsaXQoJywnKTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgb2JqZWN0W2FycmF5W2ldXSA9IHZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCB4bGlua05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnO1xuZXhwb3J0IGNvbnN0IHhtbE5TID0gJ2h0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZSc7XG5leHBvcnQgY29uc3Qgc3ZnTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuZXhwb3J0IGNvbnN0IHN0cmljdFByb3BzID0ge307XG5leHBvcnQgY29uc3QgYm9vbGVhblByb3BzID0ge307XG5leHBvcnQgY29uc3QgbmFtZXNwYWNlcyA9IHt9O1xuZXhwb3J0IGNvbnN0IGlzVW5pdGxlc3NOdW1iZXIgPSB7fTtcbmV4cG9ydCBjb25zdCBza2lwUHJvcHMgPSB7fTtcbmV4cG9ydCBjb25zdCBkZWxlZ2F0ZWRQcm9wcyA9IHt9O1xuY29uc3RydWN0RGVmYXVsdHMoJ3hsaW5rOmhyZWYseGxpbms6YXJjcm9sZSx4bGluazphY3R1YXRlLHhsaW5rOnJvbGUseGxpbms6dGl0bGVmLHhsaW5rOnR5cGUnLCBuYW1lc3BhY2VzLCB4bGlua05TKTtcbmNvbnN0cnVjdERlZmF1bHRzKCd4bWw6YmFzZSx4bWw6bGFuZyx4bWw6c3BhY2UnLCBuYW1lc3BhY2VzLCB4bWxOUyk7XG5jb25zdHJ1Y3REZWZhdWx0cygndm9sdW1lLGRlZmF1bHRDaGVja2VkJywgc3RyaWN0UHJvcHMsIHRydWUpO1xuY29uc3RydWN0RGVmYXVsdHMoJ2NoaWxkcmVuLGNoaWxkcmVuVHlwZSxkZWZhdWx0VmFsdWUscmVmLGtleSxzZWxlY3RlZCxjaGVja2VkLG11bHRpcGxlJywgc2tpcFByb3BzLCB0cnVlKTtcbmNvbnN0cnVjdERlZmF1bHRzKCdvbkNsaWNrLG9uTW91c2VEb3duLG9uTW91c2VVcCxvbk1vdXNlTW92ZSxvblN1Ym1pdCxvbkRibENsaWNrLG9uS2V5RG93bixvbktleVVwLG9uS2V5UHJlc3MnLCBkZWxlZ2F0ZWRQcm9wcywgdHJ1ZSk7XG5jb25zdHJ1Y3REZWZhdWx0cygnbXV0ZWQsc2NvcGVkLGxvb3Asb3BlbixjaGVja2VkLGRlZmF1bHQsY2FwdHVyZSxkaXNhYmxlZCxyZWFkT25seSxyZXF1aXJlZCxhdXRvcGxheSxjb250cm9scyxzZWFtbGVzcyxyZXZlcnNlZCxhbGxvd2Z1bGxzY3JlZW4sbm92YWxpZGF0ZSxoaWRkZW4nLCBib29sZWFuUHJvcHMsIHRydWUpO1xuY29uc3RydWN0RGVmYXVsdHMoJ2FuaW1hdGlvbkl0ZXJhdGlvbkNvdW50LGJvcmRlckltYWdlT3V0c2V0LGJvcmRlckltYWdlU2xpY2UsYm9yZGVySW1hZ2VXaWR0aCxib3hGbGV4LGJveEZsZXhHcm91cCxib3hPcmRpbmFsR3JvdXAsY29sdW1uQ291bnQsZmxleCxmbGV4R3JvdyxmbGV4UG9zaXRpdmUsZmxleFNocmluayxmbGV4TmVnYXRpdmUsZmxleE9yZGVyLGdyaWRSb3csZ3JpZENvbHVtbixmb250V2VpZ2h0LGxpbmVDbGFtcCxsaW5lSGVpZ2h0LG9wYWNpdHksb3JkZXIsb3JwaGFucyx0YWJTaXplLHdpZG93cyx6SW5kZXgsem9vbSxmaWxsT3BhY2l0eSxmbG9vZE9wYWNpdHksc3RvcE9wYWNpdHksc3Ryb2tlRGFzaGFycmF5LHN0cm9rZURhc2hvZmZzZXQsc3Ryb2tlTWl0ZXJsaW1pdCxzdHJva2VPcGFjaXR5LHN0cm9rZVdpZHRoLCcsIGlzVW5pdGxlc3NOdW1iZXIsIHRydWUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2NvbnN0YW50cy5qcyIsImltcG9ydCB7IGNvcHlQcm9wc1RvLCBpc0FycmF5LCBpc0Z1bmN0aW9uLCBpc0ludmFsaWQsIGlzTnVsbCwgaXNOdWxsT3JVbmRlZiwgaXNPYmplY3QsIGlzU3RyaW5nT3JOdW1iZXIsIGlzVW5kZWZpbmVkLCB0aHJvd0Vycm9yIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vY29yZS9vcHRpb25zJztcbmltcG9ydCB7IGNsb25lVk5vZGUsIGlzVk5vZGUgfSBmcm9tICcuLi9jb3JlL1ZOb2Rlcyc7XG5pbXBvcnQgeyBwYXRjaEV2ZW50LCBwYXRjaFByb3AgfSBmcm9tICcuL3BhdGNoaW5nJztcbmltcG9ydCB7IHJlY3ljbGVDb21wb25lbnQsIHJlY3ljbGVFbGVtZW50IH0gZnJvbSAnLi9yZWN5Y2xpbmcnO1xuaW1wb3J0IHsgY29tcG9uZW50VG9ET01Ob2RlTWFwIH0gZnJvbSAnLi9yZW5kZXJpbmcnO1xuaW1wb3J0IHsgYXBwZW5kQ2hpbGQsIGNyZWF0ZUNsYXNzQ29tcG9uZW50SW5zdGFuY2UsIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dCwgZG9jdW1lbnRDcmVhdGVFbGVtZW50LCBzZXRUZXh0Q29udGVudCwgRU1QVFlfT0JKIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgcHJvY2Vzc0VsZW1lbnQgZnJvbSAnLi93cmFwcGVycy9wcm9jZXNzRWxlbWVudCc7XG5leHBvcnQgZnVuY3Rpb24gbW91bnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGNvbnN0IGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgaWYgKGZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgIHJldHVybiBtb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIHJldHVybiBtb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBmbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDQwOTYgLyogVm9pZCAqLykge1xuICAgICAgICByZXR1cm4gbW91bnRWb2lkKHZOb2RlLCBwYXJlbnREb20pO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDEgLyogVGV4dCAqLykge1xuICAgICAgICByZXR1cm4gbW91bnRUZXh0KHZOb2RlLCBwYXJlbnREb20pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygdk5vZGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihgbW91bnQoKSByZWNlaXZlZCBhbiBvYmplY3QgdGhhdCdzIG5vdCBhIHZhbGlkIFZOb2RlLCB5b3Ugc2hvdWxkIHN0cmluZ2lmeSBpdCBmaXJzdC4gT2JqZWN0OiBcIiR7SlNPTi5zdHJpbmdpZnkodk5vZGUpfVwiLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihgbW91bnQoKSBleHBlY3RzIGEgdmFsaWQgVk5vZGUsIGluc3RlYWQgaXQgcmVjZWl2ZWQgYW4gb2JqZWN0IHdpdGggdGhlIHR5cGUgXCIke3R5cGVvZiB2Tm9kZX1cIi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50VGV4dCh2Tm9kZSwgcGFyZW50RG9tKSB7XG4gICAgY29uc3QgZG9tID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodk5vZGUuY2hpbGRyZW4pO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAocGFyZW50RG9tKSB7XG4gICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtb3VudFZvaWQodk5vZGUsIHBhcmVudERvbSkge1xuICAgIGNvbnN0IGRvbSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgaWYgKHBhcmVudERvbSkge1xuICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5leHBvcnQgZnVuY3Rpb24gbW91bnRFbGVtZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICBpZiAob3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkKSB7XG4gICAgICAgIGNvbnN0IGRvbSA9IHJlY3ljbGVFbGVtZW50KHZOb2RlLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgaWYgKCFpc051bGwoZG9tKSkge1xuICAgICAgICAgICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb207XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdGFnID0gdk5vZGUudHlwZTtcbiAgICBjb25zdCBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChpc1NWRyB8fCAoZmxhZ3MgJiAxMjggLyogU3ZnRWxlbWVudCAqLykpIHtcbiAgICAgICAgaXNTVkcgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBkb20gPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQodGFnLCBpc1NWRyk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICBjb25zdCBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgIGNvbnN0IGV2ZW50cyA9IHZOb2RlLmV2ZW50cztcbiAgICBjb25zdCByZWYgPSB2Tm9kZS5yZWY7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIGlmICghaXNOdWxsKGNoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50KGRvbSwgY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBtb3VudEFycmF5Q2hpbGRyZW4oY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNWTm9kZShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIG1vdW50KGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBoYXNDb250cm9sbGVkVmFsdWUgPSBmYWxzZTtcbiAgICBpZiAoIShmbGFncyAmIDIgLyogSHRtbEVsZW1lbnQgKi8pKSB7XG4gICAgICAgIGhhc0NvbnRyb2xsZWRWYWx1ZSA9IHByb2Nlc3NFbGVtZW50KGZsYWdzLCB2Tm9kZSwgZG9tLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKCFpc051bGwocHJvcHMpKSB7XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBwYXRjaFByb3AocHJvcCwgbnVsbCwgcHJvcHNbcHJvcF0sIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFpc051bGwoZXZlbnRzKSkge1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIGV2ZW50cykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIHBhdGNoRXZlbnQobmFtZSwgbnVsbCwgZXZlbnRzW25hbWVdLCBkb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXNOdWxsKHJlZikpIHtcbiAgICAgICAgbW91bnRSZWYoZG9tLCByZWYsIGxpZmVjeWNsZSk7XG4gICAgfVxuICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50QXJyYXlDaGlsZHJlbihjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxldCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAvLyBUT0RPOiBWZXJpZnkgY2FuIHN0cmluZy9udW1iZXIgYmUgaGVyZS4gbWlnaHQgY2F1c2UgZGUtb3B0XG4gICAgICAgIGlmICghaXNJbnZhbGlkKGNoaWxkKSkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmRvbSkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuW2ldID0gY2hpbGQgPSBjbG9uZVZOb2RlKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vdW50KGNoaWxkcmVuW2ldLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50Q29tcG9uZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzQ2xhc3MpIHtcbiAgICBpZiAob3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkKSB7XG4gICAgICAgIGNvbnN0IGRvbSA9IHJlY3ljbGVDb21wb25lbnQodk5vZGUsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICBpZiAoIWlzTnVsbChkb20pKSB7XG4gICAgICAgICAgICBpZiAoIWlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgICAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0eXBlID0gdk5vZGUudHlwZTtcbiAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICBsZXQgcHJvcHM7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChkZWZhdWx0UHJvcHMpKSB7XG4gICAgICAgIC8vIFdoZW4gZGVmYXVsdFByb3BzIGFyZSB1c2VkIHdlIG5lZWQgdG8gY3JlYXRlIG5ldyBPYmplY3RcbiAgICAgICAgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCB7fTtcbiAgICAgICAgY29weVByb3BzVG8oZGVmYXVsdFByb3BzLCBwcm9wcyk7XG4gICAgICAgIHZOb2RlLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICB9XG4gICAgY29uc3QgcmVmID0gdk5vZGUucmVmO1xuICAgIGxldCBkb207XG4gICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlKHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGluc3RhbmNlLl9sYXN0SW5wdXQ7XG4gICAgICAgIGluc3RhbmNlLl92Tm9kZSA9IHZOb2RlO1xuICAgICAgICB2Tm9kZS5kb20gPSBkb20gPSBtb3VudChpbnB1dCwgbnVsbCwgbGlmZWN5Y2xlLCBpbnN0YW5jZS5fY2hpbGRDb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBtb3VudENsYXNzQ29tcG9uZW50Q2FsbGJhY2tzKHZOb2RlLCByZWYsIGluc3RhbmNlLCBsaWZlY3ljbGUpO1xuICAgICAgICBvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCAmJiBjb21wb25lbnRUb0RPTU5vZGVNYXAuc2V0KGluc3RhbmNlLCBkb20pO1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQodk5vZGUsIHR5cGUsIHByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgdk5vZGUuZG9tID0gZG9tID0gbW91bnQoaW5wdXQsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IGlucHV0O1xuICAgICAgICBtb3VudEZ1bmN0aW9uYWxDb21wb25lbnRDYWxsYmFja3MocmVmLCBkb20sIGxpZmVjeWNsZSk7XG4gICAgICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50Q2xhc3NDb21wb25lbnRDYWxsYmFja3Modk5vZGUsIHJlZiwgaW5zdGFuY2UsIGxpZmVjeWNsZSkge1xuICAgIGlmIChyZWYpIHtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ocmVmKSkge1xuICAgICAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIocmVmKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdzdHJpbmcgXCJyZWZzXCIgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gSW5mZXJubyAxLjAuIFVzZSBjYWxsYmFjayBcInJlZnNcIiBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChyZWYpICYmICh2Tm9kZS5mbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ2Z1bmN0aW9uYWwgY29tcG9uZW50IGxpZmVjeWNsZSBldmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgb24gRVMyMDE1IGNsYXNzIGNvbXBvbmVudHMuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGBhIGJhZCB2YWx1ZSBmb3IgXCJyZWZcIiB3YXMgdXNlZCBvbiBjb21wb25lbnQ6IFwiJHtKU09OLnN0cmluZ2lmeShyZWYpfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNETSA9IGluc3RhbmNlLmNvbXBvbmVudERpZE1vdW50O1xuICAgIGNvbnN0IGFmdGVyTW91bnQgPSBvcHRpb25zLmFmdGVyTW91bnQ7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChjRE0pIHx8ICFpc051bGwoYWZ0ZXJNb3VudCkpIHtcbiAgICAgICAgbGlmZWN5Y2xlLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgIGFmdGVyTW91bnQgJiYgYWZ0ZXJNb3VudCh2Tm9kZSk7XG4gICAgICAgICAgICBjRE0gJiYgaW5zdGFuY2UuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICAgICAgICAgIGluc3RhbmNlLl9zeW5jU2V0U3RhdGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGluc3RhbmNlLl9zeW5jU2V0U3RhdGUgPSB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtb3VudEZ1bmN0aW9uYWxDb21wb25lbnRDYWxsYmFja3MocmVmLCBkb20sIGxpZmVjeWNsZSkge1xuICAgIGlmIChyZWYpIHtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHJlZi5vbkNvbXBvbmVudFdpbGxNb3VudCkpIHtcbiAgICAgICAgICAgIHJlZi5vbkNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihyZWYub25Db21wb25lbnREaWRNb3VudCkpIHtcbiAgICAgICAgICAgIGxpZmVjeWNsZS5hZGRMaXN0ZW5lcigoKSA9PiByZWYub25Db21wb25lbnREaWRNb3VudChkb20pKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtb3VudFJlZihkb20sIHZhbHVlLCBsaWZlY3ljbGUpIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgbGlmZWN5Y2xlLmFkZExpc3RlbmVyKCgpID0+IHZhbHVlKGRvbSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlzSW52YWxpZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignc3RyaW5nIFwicmVmc1wiIGFyZSBub3Qgc3VwcG9ydGVkIGluIEluZmVybm8gMS4wLiBVc2UgY2FsbGJhY2sgXCJyZWZzXCIgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL21vdW50aW5nLmpzIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNGdW5jdGlvbiwgaXNJbnZhbGlkLCBpc051bGwsIGlzTnVsbE9yVW5kZWYsIGlzT2JqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vY29yZS9vcHRpb25zJztcbmltcG9ydCB7IHBhdGNoRXZlbnQgfSBmcm9tICcuL3BhdGNoaW5nJztcbmltcG9ydCB7IHBvb2xDb21wb25lbnQsIHBvb2xFbGVtZW50IH0gZnJvbSAnLi9yZWN5Y2xpbmcnO1xuaW1wb3J0IHsgY29tcG9uZW50VG9ET01Ob2RlTWFwIH0gZnJvbSAnLi9yZW5kZXJpbmcnO1xuaW1wb3J0IHsgcmVtb3ZlQ2hpbGQgfSBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2FuUmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBjb25zdCBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChmbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICB1bm1vdW50Q29tcG9uZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2FuUmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICB1bm1vdW50RWxlbWVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAoMSAvKiBUZXh0ICovIHwgNDA5NiAvKiBWb2lkICovKSkge1xuICAgICAgICB1bm1vdW50Vm9pZE9yVGV4dCh2Tm9kZSwgcGFyZW50RG9tKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1bm1vdW50Vm9pZE9yVGV4dCh2Tm9kZSwgcGFyZW50RG9tKSB7XG4gICAgaWYgKHBhcmVudERvbSkge1xuICAgICAgICByZW1vdmVDaGlsZChwYXJlbnREb20sIHZOb2RlLmRvbSk7XG4gICAgfVxufVxuY29uc3QgYWxyZWFkeVVubW91bnRlZCA9IG5ldyBXZWFrTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICBjb25zdCBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGNvbnN0IGlzU3RhdGVmdWxDb21wb25lbnQgPSBmbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi87XG4gICAgY29uc3QgcmVmID0gdk5vZGUucmVmO1xuICAgIGNvbnN0IGRvbSA9IHZOb2RlLmRvbTtcbiAgICBpZiAoYWxyZWFkeVVubW91bnRlZC5oYXModk5vZGUpICYmICFpc1JlY3ljbGluZyAmJiAhcGFyZW50RG9tKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWxyZWFkeVVubW91bnRlZC5zZXQodk5vZGUsIHRydWUpO1xuICAgIGlmICghaXNSZWN5Y2xpbmcpIHtcbiAgICAgICAgaWYgKGlzU3RhdGVmdWxDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGlmICghaW5zdGFuY2UuX3VubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9pZ25vcmVTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVVbm1vdW50ICYmIG9wdGlvbnMuYmVmb3JlVW5tb3VudCh2Tm9kZSk7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcG9uZW50V2lsbFVubW91bnQgJiYgaW5zdGFuY2UuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVmICYmICFpc1JlY3ljbGluZykge1xuICAgICAgICAgICAgICAgICAgICByZWYobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluc3RhbmNlLl91bm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5kZWxldGUoaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1YkxpZmVjeWNsZSA9IGluc3RhbmNlLl9saWZlY3ljbGU7XG4gICAgICAgICAgICAgICAgdW5tb3VudChpbnN0YW5jZS5fbGFzdElucHV0LCBudWxsLCBzdWJMaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYocmVmKSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihyZWYub25Db21wb25lbnRXaWxsVW5tb3VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmLm9uQ29tcG9uZW50V2lsbFVubW91bnQoZG9tKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bm1vdW50KGluc3RhbmNlLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmVudERvbSkge1xuICAgICAgICBsZXQgbGFzdElucHV0ID0gaW5zdGFuY2UuX2xhc3RJbnB1dDtcbiAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYobGFzdElucHV0KSkge1xuICAgICAgICAgICAgbGFzdElucHV0ID0gaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVtb3ZlQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkICYmICFpc1N0YXRlZnVsQ29tcG9uZW50ICYmIChwYXJlbnREb20gfHwgY2FuUmVjeWNsZSkpIHtcbiAgICAgICAgcG9vbENvbXBvbmVudCh2Tm9kZSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRFbGVtZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2FuUmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBjb25zdCBkb20gPSB2Tm9kZS5kb207XG4gICAgY29uc3QgcmVmID0gdk5vZGUucmVmO1xuICAgIGNvbnN0IGV2ZW50cyA9IHZOb2RlLmV2ZW50cztcbiAgICBpZiAoYWxyZWFkeVVubW91bnRlZC5oYXModk5vZGUpICYmICFpc1JlY3ljbGluZyAmJiAhcGFyZW50RG9tKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWxyZWFkeVVubW91bnRlZC5zZXQodk5vZGUsIHRydWUpO1xuICAgIGlmIChyZWYgJiYgIWlzUmVjeWNsaW5nKSB7XG4gICAgICAgIHVubW91bnRSZWYocmVmKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICBpZiAoIWlzTnVsbE9yVW5kZWYoY2hpbGRyZW4pKSB7XG4gICAgICAgIHVubW91bnRDaGlsZHJlbihjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGlmICghaXNOdWxsKGV2ZW50cykpIHtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUsIGV2ZW50c1tuYW1lXSwgbnVsbCwgZG9tKTtcbiAgICAgICAgICAgIGV2ZW50c1tuYW1lXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmVudERvbSkge1xuICAgICAgICByZW1vdmVDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQgJiYgKHBhcmVudERvbSB8fCBjYW5SZWN5Y2xlKSkge1xuICAgICAgICBwb29sRWxlbWVudCh2Tm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudENoaWxkcmVuKGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmICghaXNJbnZhbGlkKGNoaWxkKSAmJiBpc09iamVjdChjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICB1bm1vdW50KGNoaWxkLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoY2hpbGRyZW4pKSB7XG4gICAgICAgIHVubW91bnQoY2hpbGRyZW4sIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1bm1vdW50UmVmKHJlZikge1xuICAgIGlmIChpc0Z1bmN0aW9uKHJlZikpIHtcbiAgICAgICAgcmVmKG51bGwpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlzSW52YWxpZChyZWYpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ3N0cmluZyBcInJlZnNcIiBhcmUgbm90IHN1cHBvcnRlZCBpbiBJbmZlcm5vIDEuMC4gVXNlIGNhbGxiYWNrIFwicmVmc1wiIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS91bm1vdW50aW5nLmpzIiwiaW1wb3J0ICogYXMgU2V0dGluZ3MgZnJvbSBcIi4uL0xvZ2ljL1NldHRpbmdzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBZGRpdGlvbmFsU2V0dGluZ3Moc3RhdGUpIHtcbiAgLy8gRGVmaW5lIG91ciBkZWZhdWx0c1xuICBsZXQgZGVmYXVsdHMgPSB7XG4gICAgXCJkaXN0cm9cIjogXCJhcmNobGludXhcIixcblxuICAgIFwiYXZhdGFyX2VuYWJsZWRcIjogdHJ1ZSxcbiAgICBcImF2YXRhcl9zaXplXCI6IFwiMjAwcHhcIixcbiAgICBcImF2YXRhcl9zaGFwZVwiOiBcImNpcmNsZVwiLFxuXG4gICAgXCJmb250X2RwaVwiOiAxLjAsXG4gICAgXCJmb250X2NvbG9yXCI6IFwiIzIyMjIyMlwiLFxuICAgIFwiZm9udF9mYW1pbHlcIjogXCJPcGVuIFNhbnNcIixcbiAgICBcImZvbnRfc2NhbGVcIjogMS4wLFxuXG4gICAgXCJkYXRlX2VuYWJsZWRcIjogdHJ1ZSxcbiAgICBcImRhdGVfZm9ybWF0XCI6IFwiJUEsIHRoZSAlbyBvZiAlQlwiXG4gIH07XG5cbiAgbGV0IHNldHRpbmdzID0ge307XG5cbiAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGRlZmF1bHRzKSkge1xuICAgIHNldHRpbmdzW2tleV0gPSBTZXR0aW5ncy5yZXF1ZXN0U2V0dGluZyhrZXksIGRlZmF1bHRzW2tleV0pO1xuICB9XG5cbiAgcmV0dXJuIHsgLi4uc3RhdGUsIFwic2V0dGluZ3NcIjogc2V0dGluZ3MgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvUmVkdWNlcnMvU2V0dGluZ3NSZWR1Y2VyLmpzIiwiaW1wb3J0IHsgaXNOdWxsLCBpc1VuZGVmaW5lZCB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCB7IHBhdGNoQ29tcG9uZW50LCBwYXRjaEVsZW1lbnQgfSBmcm9tICcuL3BhdGNoaW5nJztcbmNvbnN0IGNvbXBvbmVudFBvb2xzID0gbmV3IE1hcCgpO1xuY29uc3QgZWxlbWVudFBvb2xzID0gbmV3IE1hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIHJlY3ljbGVFbGVtZW50KHZOb2RlLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgY29uc3QgdGFnID0gdk5vZGUudHlwZTtcbiAgICBjb25zdCBrZXkgPSB2Tm9kZS5rZXk7XG4gICAgY29uc3QgcG9vbHMgPSBlbGVtZW50UG9vbHMuZ2V0KHRhZyk7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChwb29scykpIHtcbiAgICAgICAgY29uc3QgcG9vbCA9IGtleSA9PT0gbnVsbCA/IHBvb2xzLm5vbktleWVkIDogcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3ljbGVkVk5vZGUgPSBwb29sLnBvcCgpO1xuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChyZWN5Y2xlZFZOb2RlKSkge1xuICAgICAgICAgICAgICAgIHBhdGNoRWxlbWVudChyZWN5Y2xlZFZOb2RlLCB2Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZOb2RlLmRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwb29sRWxlbWVudCh2Tm9kZSkge1xuICAgIGNvbnN0IHRhZyA9IHZOb2RlLnR5cGU7XG4gICAgY29uc3Qga2V5ID0gdk5vZGUua2V5O1xuICAgIGxldCBwb29scyA9IGVsZW1lbnRQb29scy5nZXQodGFnKTtcbiAgICBpZiAoaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIHBvb2xzID0ge1xuICAgICAgICAgICAgbm9uS2V5ZWQ6IFtdLFxuICAgICAgICAgICAga2V5ZWQ6IG5ldyBNYXAoKVxuICAgICAgICB9O1xuICAgICAgICBlbGVtZW50UG9vbHMuc2V0KHRhZywgcG9vbHMpO1xuICAgIH1cbiAgICBpZiAoaXNOdWxsKGtleSkpIHtcbiAgICAgICAgcG9vbHMubm9uS2V5ZWQucHVzaCh2Tm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgcG9vbCA9IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIHBvb2wgPSBbXTtcbiAgICAgICAgICAgIHBvb2xzLmtleWVkLnNldChrZXksIHBvb2wpO1xuICAgICAgICB9XG4gICAgICAgIHBvb2wucHVzaCh2Tm9kZSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlY3ljbGVDb21wb25lbnQodk5vZGUsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICBjb25zdCB0eXBlID0gdk5vZGUudHlwZTtcbiAgICBjb25zdCBrZXkgPSB2Tm9kZS5rZXk7XG4gICAgY29uc3QgcG9vbHMgPSBjb21wb25lbnRQb29scy5nZXQodHlwZSk7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChwb29scykpIHtcbiAgICAgICAgY29uc3QgcG9vbCA9IGtleSA9PT0gbnVsbCA/IHBvb2xzLm5vbktleWVkIDogcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3ljbGVkVk5vZGUgPSBwb29sLnBvcCgpO1xuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChyZWN5Y2xlZFZOb2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgICAgICAgICAgICAgY29uc3QgZmFpbGVkID0gcGF0Y2hDb21wb25lbnQocmVjeWNsZWRWTm9kZSwgdk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFmYWlsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZOb2RlLmRvbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gcG9vbENvbXBvbmVudCh2Tm9kZSkge1xuICAgIGNvbnN0IHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIGNvbnN0IGtleSA9IHZOb2RlLmtleTtcbiAgICBjb25zdCBob29rcyA9IHZOb2RlLnJlZjtcbiAgICBjb25zdCBub25SZWN5Y2xlSG9va3MgPSBob29rcyAmJiAoaG9va3Mub25Db21wb25lbnRXaWxsTW91bnQgfHxcbiAgICAgICAgaG9va3Mub25Db21wb25lbnRXaWxsVW5tb3VudCB8fFxuICAgICAgICBob29rcy5vbkNvbXBvbmVudERpZE1vdW50IHx8XG4gICAgICAgIGhvb2tzLm9uQ29tcG9uZW50V2lsbFVwZGF0ZSB8fFxuICAgICAgICBob29rcy5vbkNvbXBvbmVudERpZFVwZGF0ZSk7XG4gICAgaWYgKG5vblJlY3ljbGVIb29rcykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBwb29scyA9IGNvbXBvbmVudFBvb2xzLmdldCh0eXBlKTtcbiAgICBpZiAoaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIHBvb2xzID0ge1xuICAgICAgICAgICAgbm9uS2V5ZWQ6IFtdLFxuICAgICAgICAgICAga2V5ZWQ6IG5ldyBNYXAoKVxuICAgICAgICB9O1xuICAgICAgICBjb21wb25lbnRQb29scy5zZXQodHlwZSwgcG9vbHMpO1xuICAgIH1cbiAgICBpZiAoaXNOdWxsKGtleSkpIHtcbiAgICAgICAgcG9vbHMubm9uS2V5ZWQucHVzaCh2Tm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgcG9vbCA9IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIHBvb2wgPSBbXTtcbiAgICAgICAgICAgIHBvb2xzLmtleWVkLnNldChrZXksIHBvb2wpO1xuICAgICAgICB9XG4gICAgICAgIHBvb2wucHVzaCh2Tm9kZSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3JlY3ljbGluZy5qcyIsImltcG9ydCB7IGlzQXJyYXksIGlzSW52YWxpZCwgaXNOdWxsLCBpc051bGxPclVuZGVmLCBpc051bWJlciwgaXNTdHJpbmcsIGlzU3RyaW5nT3JOdW1iZXIsIHdhcm5pbmcgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgeyBjbG9uZVZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUsIGlzVk5vZGUgfSBmcm9tICcuL1ZOb2Rlcyc7XG5mdW5jdGlvbiBhcHBseUtleShrZXksIHZOb2RlKSB7XG4gICAgdk5vZGUua2V5ID0ga2V5O1xuICAgIHJldHVybiB2Tm9kZTtcbn1cbmZ1bmN0aW9uIGFwcGx5S2V5SWZNaXNzaW5nKGtleSwgdk5vZGUpIHtcbiAgICBpZiAoaXNOdW1iZXIoa2V5KSkge1xuICAgICAgICBrZXkgPSBgLiR7a2V5fWA7XG4gICAgfVxuICAgIGlmIChpc051bGwodk5vZGUua2V5KSB8fCB2Tm9kZS5rZXlbMF0gPT09ICcuJykge1xuICAgICAgICByZXR1cm4gYXBwbHlLZXkoa2V5LCB2Tm9kZSk7XG4gICAgfVxuICAgIHJldHVybiB2Tm9kZTtcbn1cbmZ1bmN0aW9uIGFwcGx5S2V5UHJlZml4KGtleSwgdk5vZGUpIHtcbiAgICB2Tm9kZS5rZXkgPSBrZXkgKyB2Tm9kZS5rZXk7XG4gICAgcmV0dXJuIHZOb2RlO1xufVxuZnVuY3Rpb24gX25vcm1hbGl6ZVZOb2Rlcyhub2RlcywgcmVzdWx0LCBpbmRleCwgY3VycmVudEtleSkge1xuICAgIGZvciAobGV0IGxlbiA9IG5vZGVzLmxlbmd0aDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICAgICAgbGV0IG4gPSBub2Rlc1tpbmRleF07XG4gICAgICAgIGNvbnN0IGtleSA9IGAke2N1cnJlbnRLZXl9LiR7aW5kZXh9YDtcbiAgICAgICAgaWYgKCFpc0ludmFsaWQobikpIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KG4pKSB7XG4gICAgICAgICAgICAgICAgX25vcm1hbGl6ZVZOb2RlcyhuLCByZXN1bHQsIDAsIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihuKSkge1xuICAgICAgICAgICAgICAgICAgICBuID0gY3JlYXRlVGV4dFZOb2RlKG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKG4pICYmIG4uZG9tIHx8IChuLmtleSAmJiBuLmtleVswXSA9PT0gJy4nKSkge1xuICAgICAgICAgICAgICAgICAgICBuID0gY2xvbmVWTm9kZShuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzTnVsbChuLmtleSkgfHwgbi5rZXlbMF0gPT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBuID0gYXBwbHlLZXkoa2V5LCBuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBhcHBseUtleVByZWZpeChjdXJyZW50S2V5LCBuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVk5vZGVzKG5vZGVzKSB7XG4gICAgbGV0IG5ld05vZGVzO1xuICAgIC8vIHdlIGFzc2lnbiAkIHdoaWNoIGJhc2ljYWxseSBtZWFucyB3ZSd2ZSBmbGFnZ2VkIHRoaXMgYXJyYXkgZm9yIGZ1dHVyZSBub3RlXG4gICAgLy8gaWYgaXQgY29tZXMgYmFjayBhZ2Fpbiwgd2UgbmVlZCB0byBjbG9uZSBpdCwgYXMgcGVvcGxlIGFyZSB1c2luZyBpdFxuICAgIC8vIGluIGFuIGltbXV0YWJsZSB3YXlcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZVxuICAgIGlmIChub2Rlc1snJCddKSB7XG4gICAgICAgIG5vZGVzID0gbm9kZXMuc2xpY2UoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG5vZGVzWyckJ10gPSB0cnVlO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZW5hYmxlXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IG5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG4gPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKGlzSW52YWxpZChuKSB8fCBpc0FycmF5KG4pKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSAobmV3Tm9kZXMgfHwgbm9kZXMpLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgX25vcm1hbGl6ZVZOb2Rlcyhub2RlcywgcmVzdWx0LCBpLCBgYCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIobikpIHtcbiAgICAgICAgICAgIGlmICghbmV3Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICBuZXdOb2RlcyA9IG5vZGVzLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Tm9kZXMucHVzaChhcHBseUtleUlmTWlzc2luZyhpLCBjcmVhdGVUZXh0Vk5vZGUobikpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoaXNWTm9kZShuKSAmJiBuLmRvbSkgfHwgKGlzTnVsbChuLmtleSkgJiYgIShuLmZsYWdzICYgNjQgLyogSGFzTm9uS2V5ZWRDaGlsZHJlbiAqLykpKSB7XG4gICAgICAgICAgICBpZiAoIW5ld05vZGVzKSB7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZXMgPSBub2Rlcy5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld05vZGVzLnB1c2goYXBwbHlLZXlJZk1pc3NpbmcoaSwgY2xvbmVWTm9kZShuKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld05vZGVzKSB7XG4gICAgICAgICAgICBuZXdOb2Rlcy5wdXNoKGFwcGx5S2V5SWZNaXNzaW5nKGksIGNsb25lVk5vZGUobikpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3Tm9kZXMgfHwgbm9kZXM7XG59XG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbikge1xuICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplVk5vZGVzKGNoaWxkcmVuKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNWTm9kZShjaGlsZHJlbikgJiYgY2hpbGRyZW4uZG9tKSB7XG4gICAgICAgIHJldHVybiBjbG9uZVZOb2RlKGNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcHModk5vZGUsIHByb3BzLCBjaGlsZHJlbikge1xuICAgIGlmICghKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSAmJiBpc051bGxPclVuZGVmKGNoaWxkcmVuKSAmJiAhaXNOdWxsT3JVbmRlZihwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gICAgaWYgKHByb3BzLnJlZikge1xuICAgICAgICB2Tm9kZS5yZWYgPSBwcm9wcy5yZWY7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5yZWY7XG4gICAgfVxuICAgIGlmIChwcm9wcy5ldmVudHMpIHtcbiAgICAgICAgdk5vZGUuZXZlbnRzID0gcHJvcHMuZXZlbnRzO1xuICAgIH1cbiAgICBpZiAoIWlzTnVsbE9yVW5kZWYocHJvcHMua2V5KSkge1xuICAgICAgICB2Tm9kZS5rZXkgPSBwcm9wcy5rZXk7XG4gICAgICAgIGRlbGV0ZSBwcm9wcy5rZXk7XG4gICAgfVxufVxuZnVuY3Rpb24gbm9ybWFsaXplRWxlbWVudCh0eXBlLCB2Tm9kZSkge1xuICAgIGlmICh0eXBlID09PSAnc3ZnJykge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDEyOCAvKiBTdmdFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnaW5wdXQnKSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gNTEyIC8qIElucHV0RWxlbWVudCAqLztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAyMDQ4IC8qIFNlbGVjdEVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICd0ZXh0YXJlYScpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAxMDI0IC8qIFRleHRhcmVhRWxlbWVudCAqLztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ21lZGlhJykge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDI1NiAvKiBNZWRpYUVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDIgLyogSHRtbEVsZW1lbnQgKi87XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZSh2Tm9kZSkge1xuICAgIGNvbnN0IHByb3BzID0gdk5vZGUucHJvcHM7XG4gICAgY29uc3QgaGFzUHJvcHMgPSAhaXNOdWxsKHByb3BzKTtcbiAgICBjb25zdCB0eXBlID0gdk5vZGUudHlwZTtcbiAgICBsZXQgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICAvLyBjb252ZXJ0IGEgd3JvbmdseSBjcmVhdGVkIHR5cGUgYmFjayB0byBlbGVtZW50XG4gICAgaWYgKGlzU3RyaW5nKHR5cGUpICYmICh2Tm9kZS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykpIHtcbiAgICAgICAgbm9ybWFsaXplRWxlbWVudCh0eXBlLCB2Tm9kZSk7XG4gICAgICAgIGlmIChoYXNQcm9wcyAmJiBwcm9wcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc1Byb3BzKSB7XG4gICAgICAgIG5vcm1hbGl6ZVByb3BzKHZOb2RlLCBwcm9wcywgY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAoIWlzSW52YWxpZChjaGlsZHJlbikpIHtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbik7XG4gICAgfVxuICAgIGlmIChoYXNQcm9wcyAmJiAhaXNJbnZhbGlkKHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IG5vcm1hbGl6ZUNoaWxkcmVuKHByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgLy8gVGhpcyBjb2RlIHdpbGwgYmUgc3RyaXBwZWQgb3V0IGZyb20gcHJvZHVjdGlvbiBDT0RFXG4gICAgICAgIC8vIEl0IHdpbGwgaGVscCB1c2VycyB0byB0cmFjayBlcnJvcnMgaW4gdGhlaXIgYXBwbGljYXRpb25zLlxuICAgICAgICBjb25zdCB2ZXJpZnlLZXlzID0gZnVuY3Rpb24gKHZOb2Rlcykge1xuICAgICAgICAgICAgY29uc3Qga2V5VmFsdWVzID0gdk5vZGVzLm1hcChmdW5jdGlvbiAodm5vZGUpIHsgcmV0dXJuIHZub2RlLmtleTsgfSk7XG4gICAgICAgICAgICBrZXlWYWx1ZXMuc29tZShmdW5jdGlvbiAoaXRlbSwgaWR4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzRHVwbGljYXRlID0ga2V5VmFsdWVzLmluZGV4T2YoaXRlbSkgIT09IGlkeDtcbiAgICAgICAgICAgICAgICBpZiAoaGFzRHVwbGljYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoJ0luZmVybm8gbm9ybWFsaXNhdGlvbiguLi4pOiBFbmNvdW50ZXJlZCB0d28gY2hpbGRyZW4gd2l0aCBzYW1lIGtleSwgYWxsIGtleXMgbXVzdCBiZSB1bmlxdWUgd2l0aGluIGl0cyBzaWJsaW5ncy4gRHVwbGljYXRlZCBrZXkgaXM6JyArIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzRHVwbGljYXRlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh2Tm9kZS5jaGlsZHJlbiAmJiBBcnJheS5pc0FycmF5KHZOb2RlLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdmVyaWZ5S2V5cyh2Tm9kZS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9jb3JlL25vcm1hbGl6YXRpb24uanMiLCIvLyBTZXR0aW5ncyAtPiBSZXF1aXJlZCBieSBSZWR1Y2Vycy9QcmltYXJ5UmVkdWNlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEhhbmRsZXMgbWFuaXB1bGF0aW9uIG9mIGdyZWV0ZXIgc2V0dGluZ3MsIGFuZFxuLy8gcHJvdmlkZXMgd3JhcHBlciBmdW5jdGlvbnMgYXJvdW5kIGxvY2Fsc3RvcmFnZS5cblxuZXhwb3J0IGNvbnN0IExPQ0FMU1RPUkFHRV9FTkFCTEVEID0gKHR5cGVvZihTdG9yYWdlKSAhPT0gXCJ1bmRlZmluZWRcIik7XG5cbmlmICghTE9DQUxTVE9SQUdFX0VOQUJMRUQpIHtcbiAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUoXCJsb2NhbFN0b3JhZ2Ugbm90IHN1cHBvcnRlZC5cIiwgJ2Vycm9yJyk7XG4gIHRocm93KFwibG9jYWxTdG9yYWdlIG5vdCBzdXBwb3J0ZWQuIFRoZW1lIHVuYWJsZSB0byBmdW5jdGlvbi5cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0U2V0dGluZyhzZXR0aW5nLCBkZWZhdWx0U2V0dGluZz11bmRlZmluZWQpIHtcbiAgbGV0IHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNldHRpbmcpO1xuXG4gIGlmIChyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZGVmYXVsdFNldHRpbmc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVNldHRpbmcoc2V0dGluZywgdmFsdWU9dW5kZWZpbmVkKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNldHRpbmcsIHZhbHVlKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvTG9naWMvU2V0dGluZ3MuanMiLCIvLyBTeXN0ZW1PcGVyYXRpb25zIC0+IFJlcXVpcmVkIGJ5IFJlZHVjZXJzL1ByaW1hcnlSZWR1Y2VyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gV3JhcHMgTGlnaHRETSBzeXN0ZW0gb3BlcmF0aW9ucywgYW5kIGhhbmRsZXMgdGhlIGhlYXZ5XG4vLyBsaWZ0aW5nIG9mIHRoZSBtb3JlIGNvbXBsZXggTGlnaHRETSByZXF1ZXN0cy5cblxuZnVuY3Rpb24gZXhlY3V0ZUNvbW1hbmQobWVzc2FnZSwgYm91bmRGdW5jdGlvbikge1xuICB3aW5kb3cubm90aWZpY2F0aW9ucy5nZW5lcmF0ZShtZXNzYWdlKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBib3VuZEZ1bmN0aW9uKCk7XG4gIH0sIDEwMDApO1xuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ29tbWFuZChjb21tYW5kKSB7XG4gIC8vIFdoYXQgdGhlIGhlbGwgaXMgdGhpcywgcmlnaHQ/XG4gIGlmIChjb21tYW5kID09PSBcInNodXRkb3duXCIgJiYgd2luZG93LmxpZ2h0ZG0uY2FuX3NodXRkb3duKSB7XG4gICAgcmV0dXJuIGV4ZWN1dGVDb21tYW5kKFwiU2h1dHRpbmcgZG93blwiLCB3aW5kb3cubGlnaHRkbS5zaHV0ZG93bik7XG4gIH0gZWxzZSBpZiAoY29tbWFuZCA9PT0gXCJoaWJlcm5hdGVcIiAmJiB3aW5kb3cubGlnaHRkbS5jYW5faGliZXJuYXRlKSB7XG4gICAgcmV0dXJuIGV4ZWN1dGVDb21tYW5kKFwiSGliZXJuYXRpbmcgc3lzdGVtLlwiLCB3aW5kb3cubGlnaHRkbS5oaWJlcm5hdGUpO1xuICB9IGVsc2UgaWYgKGNvbW1hbmQgPT09IFwicmVib290XCIgJiYgd2luZG93LmxpZ2h0ZG0uY2FuX3Jlc3RhcnQpIHtcbiAgICByZXR1cm4gZXhlY3V0ZUNvbW1hbmQoXCJSZWJvb3Rpbmcgc3lzdGVtLlwiLCB3aW5kb3cubGlnaHRkbS5yZXN0YXJ0KTtcbiAgfSBlbHNlIGlmIChjb21tYW5kID09PSBcInNsZWVwXCIgJiYgd2luZG93LmxpZ2h0ZG0uY2FuX3N1c3BlbmQpIHtcbiAgICByZXR1cm4gZXhlY3V0ZUNvbW1hbmQoXCJTdXNwZW5kaW5nIHN5c3RlbS5cIiwgd2luZG93LmxpZ2h0ZG0uc3VzcGVuZCk7XG4gIH1cblxuICAvLyBJZiB3ZSBoYXZlIGdvdHRlbiB0aGlzIGZhciwgaXQncyBiZWNhdXNlIHRoZSBjb21tYW5kIGlzIGRpc2FibGVkIG9yIGRvZXNuJ3QgZXhpc3QuXG4gIHdpbmRvdy5ub3RpZmljYXRpb25zLmdlbmVyYXRlKGAke2NvbW1hbmR9IGlzIGRpc2FibGVkIG9uIHRoaXMgc3lzdGVtLmAsIFwiZXJyb3JcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW5pdGlhbFVzZXIoKSB7XG4gIC8vIEFyZSB3ZSBjdXJyZW50bHkgaW4gYSBsb2NrIHNjcmVlbj9cbiAgaWYgKHdpbmRvdy5saWdodGRtLmxvY2tfaGludCA9PT0gdHJ1ZSkge1xuICAgIC8vIERlZmF1bHQgdG8gdGhlIHZlcnkgZmlyc3QgbG9nZ2VkIGluIHVzZXIuXG4gICAgcmV0dXJuIHdpbmRvdy5saWdodGRtLnVzZXJzLmZpbHRlcigodXNlcikgPT4gdXNlci5sb2dnZWRfaW4pWzBdO1xuICB9XG5cbiAgZWxzZSB7XG4gICAgaWYgKHdpbmRvdy5saWdodGRtLnNlbGVjdF91c2VyX2hpbnQgIT09IHVuZGVmaW5lZCAmJiB3aW5kb3cubGlnaHRkbS5zZWxlY3RfdXNlcl9oaW50ICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gd2luZG93LmxpZ2h0ZG0udXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB1c2VyLnVzZXJuYW1lID09PSB3aW5kb3cubGlnaHRkbS5zZWxlY3RfdXNlcl9oaW50KVswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHdpbmRvdy5saWdodGRtLnVzZXJzWzBdO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEluaXRpYWxTZXNzaW9uKHVzZXIpIHtcbiAgbGV0IHVzZXJTZXNzaW9uID0gKHVzZXIgPT09IHVuZGVmaW5lZCkgPyB1bmRlZmluZWQgOiB1c2VyLnNlc3Npb247XG5cbiAgcmV0dXJuIChcbiAgICB0aGlzLmZpbmRTZXNzaW9uKHVzZXJTZXNzaW9uKSB8fFxuICAgIHRoaXMuZmluZFNlc3Npb24od2luZG93LmxpZ2h0ZG0uZGVmYXVsdF9zZXNzaW9uKSB8fFxuICAgIHdpbmRvdy5saWdodGRtLnNlc3Npb25zWzBdXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kU2Vzc2lvbihzZXNzaW9uTmFtZSkge1xuICBpZiAoc2Vzc2lvbk5hbWUgPT09IHVuZGVmaW5lZCB8fCBzZXNzaW9uTmFtZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB3aW5kb3cubGlnaHRkbS5zZXNzaW9ucy5maWx0ZXIoKHNlc3Npb24pID0+XG4gICAgKHNlc3Npb24ubmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZXNzaW9uTmFtZS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgIChzZXNzaW9uLmtleS50b0xvd2VyQ2FzZSgpID09PSBzZXNzaW9uTmFtZS50b0xvd2VyQ2FzZSgpKVxuICApWzBdO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Mb2dpYy9TeXN0ZW1PcGVyYXRpb25zLmpzIiwiLy8gQ29tbWFuZFBhbmVsIC0+IFJlcXVpcmVkIGJ5IE1haW5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGUgc3lzdGVtIG1hbmFnZW1lbnQgaGFsZiBvZiB0aGUgZ3JlZXRlciBsb2dpYy5cbi8vIERpc3BsYXlzIHN5c3RlbSBpbmZvIGFuZCBoYW5kbGVzIFNsZWVwLCBTaHV0ZG93biwgZXRjLlxuXG5pbXBvcnQgSW5mZXJubyBmcm9tICdpbmZlcm5vJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnaW5mZXJuby1jb21wb25lbnQnO1xuXG5pbXBvcnQgKiBhcyBTeXN0ZW1PcGVyYXRpb25zIGZyb20gXCIuLi9Mb2dpYy9TeXN0ZW1PcGVyYXRpb25zXCI7XG5pbXBvcnQgV2FsbHBhcGVyU3dpdGNoZXIgZnJvbSBcIi4vV2FsbHBhcGVyU3dpdGNoZXJcIjtcbmltcG9ydCBDbG9jayBmcm9tICcuL0Nsb2NrJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tYW5kUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIGhhbmRsZUNvbW1hbmQoY29tbWFuZCwgZGlzYWJsZWQsIGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChkaXNhYmxlZCAhPT0gZmFsc2UpIHtcbiAgICAgIHdpbmRvdy5ub3RpZmljYXRpb25zLmdlbmVyYXRlKGAke2NvbW1hbmR9IGlzIGRpc2FibGVkIG9uIHRoaXMgc3lzdGVtLmAsIFwiZXJyb3JcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgU3lzdGVtT3BlcmF0aW9ucy5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuICB9XG5cblxuICBnZW5lcmF0ZUNvbW1hbmRzKCkge1xuICAgIGxldCBjb21tYW5kcyA9IHtcbiAgICAgIFwiU2h1dGRvd25cIjogd2luZG93LmxpZ2h0ZG0uY2FuX3NodXRkb3duLFxuICAgICAgXCJSZWJvb3RcIjogd2luZG93LmxpZ2h0ZG0uY2FuX3Jlc3RhcnQsXG4gICAgICBcIkhpYmVybmF0ZVwiOiB3aW5kb3cubGlnaHRkbS5jYW5faGliZXJuYXRlLFxuICAgICAgXCJTbGVlcFwiOiB3aW5kb3cubGlnaHRkbS5jYW5fc3VzcGVuZFxuICAgIH07XG5cbiAgICAvLyBGaWx0ZXIgb3V0IGNvbW1hbmRzIHdlIGNhbid0IGV4ZWN1dGUuXG4gICAgbGV0IGVuYWJsZWRDb21tYW5kcyA9IChcbiAgICAgIE9iamVjdC5rZXlzKGNvbW1hbmRzKVxuICAgICAgLm1hcCgoa2V5KSA9PiBjb21tYW5kc1trZXldID8ga2V5IDogZmFsc2UpXG4gICAgICAuZmlsdGVyKChjb21tYW5kKSA9PiBjb21tYW5kICE9PSBmYWxzZSlcbiAgICApO1xuXG4gICAgLy8gQXJlIGJvdGggaGliZXJuYXRpb24gYW5kIHN1c3BlbmQgZGlzYWJsZWQ/XG4gICAgLy8gQWRkIHRoZSByb3cgYmFjayBhbmQgZGlzYWJsZSBpdCBzbyB0aGF0IHRoZSB1c2VyIGlzIGF3YXJlIG9mIHdoYXQncyBoYXBwZW5pbmcuXG4gICAgaWYgKHdpbmRvdy5saWdodGRtLmNhbl9zdXNwZW5kID09PSBmYWxzZSAmJiB3aW5kb3cubGlnaHRkbS5jYW5faGliZXJuYXRlID09PSBmYWxzZSkge1xuICAgICAgZW5hYmxlZENvbW1hbmRzLnB1c2goXCJTbGVlcC5kaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICAvLyBTYXZlIG91cnNlbHZlcyBzb21lIHdvcmssIHdoZW4gYWxsIGZvdXIgY29tbWFuZHMgYXJlIGVuYWJsZWRcbiAgICAvLyByZW5kZXJpbmcgc2hvdWxkIGJlIGhhbHRlZCwgYW5kIHRoZSBsb2dvIHNob3VsZCBiZSBtb3ZlZCB1cC5cbiAgICBsZXQgZXhwYW5kZWQgPSAoZW5hYmxlZENvbW1hbmRzLmxlbmd0aCA+IDMpO1xuICAgIGlmIChleHBhbmRlZCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICdleHBhbmRlZENvbW1hbmRzJzogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHJvd3MgPSBlbmFibGVkQ29tbWFuZHMubWFwKChjb21tYW5kKSA9PiB7XG4gICAgICBsZXQgZGlzYWJsZWQgPSBjb21tYW5kLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy4nKVsxXSB8fCBmYWxzZTtcbiAgICAgIGNvbW1hbmQgPSBjb21tYW5kLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy4nKVswXTtcblxuICAgICAgbGV0IGNsYXNzZXMgPSBbJ2NvbW1hbmQnLCBjb21tYW5kLCBkaXNhYmxlZF0uZmlsdGVyKChlKSA9PiBlKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzLmpvaW4oJyAnKSB9IG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNvbW1hbmQuYmluZCh0aGlzLCBjb21tYW5kLCBkaXNhYmxlZCkgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24td3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+eyBjb21tYW5kIH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgbGV0IGNsYXNzZXMgPSBbJ2NvbW1hbmRzLXdyYXBwZXInXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMuam9pbignICcpIH0+XG4gICAgICAgIHsgcm93cyB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGhvc3RuYW1lID0gd2luZG93LmxpZ2h0ZG0uaG9zdG5hbWU7XG4gICAgbGV0IGNvbW1hbmRzID0gdGhpcy5nZW5lcmF0ZUNvbW1hbmRzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFdhbGxwYXBlclN3aXRjaGVyIC8+XG4gICAgICAgIHsgY29tbWFuZHMgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCBob3N0bmFtZVwiPnsgaG9zdG5hbWUgfTwvZGl2PlxuICAgICAgICAgIDxDbG9jayAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvQ29tcG9uZW50cy9Db21tYW5kUGFuZWwuanN4IiwiLy8gRGF0ZURpc3BsYXkgLT4gUmVxdWlyZWQgYnkgTWFpblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERpc3BsYXlzIGRhdGUgYmVsb3cgdGhlIGxvZ2luIHdpbmRvdy5cblxuaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlRGlzcGxheSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBcImZvcm1hdHRlZFN0cmluZ1wiOiB1bmRlZmluZWQsXG4gICAgICBcImluaXRpYWxpemVkXCI6IGZhbHNlLFxuICAgICAgXCJkYXlOYW1lXCI6IHVuZGVmaW5lZCxcbiAgICAgIFwiZGF5VmFsdWVcIjogdW5kZWZpbmVkLFxuICAgICAgXCJmb3JtYXR0ZWREYXlWYWx1ZVwiOiB1bmRlZmluZWQsXG4gICAgICBcIm1vbnRoTmFtZVwiOiB1bmRlZmluZWQsXG4gICAgICBcIm1vbnRoVmFsdWVcIjogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuXG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vIFdhaXQgdHdvIHNlY29uZHMsIHNvIHRoYXQgdGhlIGNsb2NrIGNhbiByZW5kZXIgZmlyc3QgYW5kIHRoZXkgZmFkZSBpbiBzZXF1ZW50aWFsbHkgcmF0aGVyIHRoYW4gaW4gcGFyYWxsZWwuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldERhdGUoKTtcbiAgICB9LCAyMDAwKTtcbiAgfVxuXG5cbiAgZ2VuZXJhdGVEYXRlU3RyaW5nKCkge1xuICAgIGxldCBkYXRlU3RyaW5nID0gKFxuICAgICAgPHNwYW4+XG4gICAgICAgIDxlbT57IHRoaXMuc3RhdGUuZGF5TmFtZSB9PC9lbT4sIHRoZSA8ZW0+eyB0aGlzLnN0YXRlLmZvcm1hdHRlZERheVZhbHVlIH08L2VtPiBvZiA8ZW0+eyB0aGlzLnN0YXRlLm1vbnRoTmFtZSB9PC9lbT5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuXG4gICAgcmV0dXJuIGRhdGVTdHJpbmc7XG4gIH1cblxuXG4gIHNldERhdGUoKSB7XG4gICAgbGV0IGRheU5hbWVzID0gW1xuICAgICAgXCJTdW5kYXlcIixcbiAgICAgIFwiTW9uZGF5XCIsXG4gICAgICBcIlR1ZXNkYXlcIixcbiAgICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgICBcIlRodXJzZGF5XCIsXG4gICAgICBcIkZyaWRheVwiLFxuICAgICAgXCJTYXR1cmRheVwiXG4gICAgXTtcblxuICAgIGxldCBtb250aE5hbWVzID0gW1xuICAgICAgXCJKYW51YXJ5XCIsXG4gICAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgICBcIk1hcmNoXCIsXG4gICAgICBcIkFwcmlsXCIsXG4gICAgICBcIk1heVwiLFxuICAgICAgXCJKdW5lXCIsXG4gICAgICBcIkp1bHlcIixcbiAgICAgIFwiQXVndXN0XCIsXG4gICAgICBcIlNlcHRlbWJlclwiLFxuICAgICAgXCJPY3RvYmVyXCIsXG4gICAgICBcIk5vdmVtYmVyXCIsXG4gICAgICBcIkRlY2VtYmVyXCJcbiAgICBdO1xuXG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgICBsZXQgZGF5VmFsdWUgPSBub3cuZ2V0RGF0ZSgpO1xuICAgIGxldCBkYXlOYW1lID0gZGF5TmFtZXNbbm93LmdldFVUQ0RheSgpXTtcbiAgICBsZXQgbW9udGhWYWx1ZSA9IG5vdy5nZXRNb250aCgpO1xuICAgIGxldCBtb250aE5hbWUgPSBtb250aE5hbWVzW21vbnRoVmFsdWVdO1xuXG4gICAgbGV0IGZvcm1hdHRlZERheVZhbHVlO1xuXG4gICAgLy8gQmVjYXVzZSBKYXZhc2NyaXB0IGlzIHRlcnJpYmxlLCAoeCA8PSB5IDw9IHopIGJlY29tZXMgKCh4IDw9IHkpICYmICh5IDw9IHopKVxuICAgIGlmICggKCg0IDw9IGRheVZhbHVlKSAmJiAoZGF5VmFsdWUgPD0gMjApKSB8fCAoKDI0IDw9IGRheVZhbHVlKSAmJiAoZGF5VmFsdWUgPD0gMzApKSApIHtcbiAgICAgIGZvcm1hdHRlZERheVZhbHVlID0gZGF5VmFsdWUgKyBcInRoXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1hdHRlZERheVZhbHVlID0gZGF5VmFsdWUgKyBbXCJzdFwiLCBcIm5kXCIsIFwicmRcIl1bZGF5VmFsdWUgJSAxMCAtIDFdO1xuICAgIH1cblxuICAgIGxldCBmb3JtYXR0ZWREYXRlU3RyaW5nID0gYDxlbT4ke2RheU5hbWV9PC9lbT4sIHRoZSA8ZW0+JHtmb3JtYXR0ZWREYXlWYWx1ZX08L2VtPiBvZiA8ZW0+JHttb250aE5hbWV9PC9lbT5gO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBcImZvcm1hdHRlZFN0cmluZ1wiOiBmb3JtYXR0ZWREYXRlU3RyaW5nLFxuICAgICAgXCJpbml0aWFsaXplZFwiOiB0cnVlLFxuICAgICAgXCJkYXlOYW1lXCI6IGRheU5hbWUsXG4gICAgICBcImRheVZhbHVlXCI6IGRheVZhbHVlLFxuICAgICAgXCJmb3JtYXR0ZWREYXlWYWx1ZVwiOiBmb3JtYXR0ZWREYXlWYWx1ZSxcbiAgICAgIFwibW9udGhOYW1lXCI6IG1vbnRoTmFtZSxcbiAgICAgIFwibW9udGhWYWx1ZVwiOiBtb250aFZhbHVlXG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0ZSgpO1xuICAgIH0sIDMwICogMTAwMCk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZGF0ZUNsYXNzZXMgPSBbXCJkYXRlXCJdO1xuICAgIGxldCBkYXRlU3RyaW5nID0gdGhpcy5nZW5lcmF0ZURhdGVTdHJpbmcoKTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmluaXRpYWxpemVkID09PSB0cnVlKSB7XG4gICAgICBkYXRlQ2xhc3Nlcy5wdXNoKFwibG9hZGVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGRhdGVDbGFzc2VzLmpvaW4oJyAnKSB9PlxuICAgICAgICB7IGRhdGVTdHJpbmcgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Db21wb25lbnRzL0RhdGVEaXNwbGF5LmpzeCIsIi8vIFVzZXJQYW5lbCAtPiBSZXF1aXJlZCBieSBNYWluXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhlIGxvZ2luIG1hbmFnZW1lbnQgaGFsZiBvZiB0aGUgZ3JlZXRlciBsb2dpYy5cblxuaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcblxuaW1wb3J0IFVzZXJTd2l0Y2hlciBmcm9tICcuL1VzZXJTd2l0Y2hlcic7XG5pbXBvcnQgVXNlclBhbmVsRm9ybSBmcm9tICcuL1VzZXJQYW5lbEZvcm0nO1xuXG5jb25zdCBGQURFX0lOX0RVUkFUSU9OID0gMjAwO1xuY29uc3QgRVJST1JfU0hBS0VfRFVSQVRJT04gPSA2MDA7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5QYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdG9yZSA9IHRoaXMucHJvcHMuc3RvcmU7XG4gICAgdGhpcy5zdG9yZVN0YXRlID0gdGhpcy5zdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHRoaXMuc3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc3RvcmVTdGF0ZSA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBcImRyb3Bkb3duQWN0aXZlXCI6IGZhbHNlLFxuICAgICAgXCJmYWRlSW5cIjogZmFsc2UsXG4gICAgICBcInBhc3N3b3JkXCI6IFwiXCIsXG4gICAgICBcInBhc3N3b3JkRmFpbGVkXCI6IGZhbHNlLFxuICAgICAgXCJzd2l0Y2hlckFjdGl2ZVwiOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgLy8gRGVmaW5lIGZ1bmN0aW9ucyByZXF1aXJlZCBpbiB0aGUgZ2xvYmFsIHNjb3BlIGJ5IExpZ2h0RE0uXG4gICAgd2luZG93LnNob3dfcHJvbXB0ID0gKHRleHQsIHR5cGUpID0+IHtcbiAgICAgIGlmICh0eXBlID09PSBcInRleHRcIikge1xuICAgICAgICB3aW5kb3cubm90aWZpY2F0aW9ucy5nZW5lcmF0ZSh0ZXh0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgIHdpbmRvdy5saWdodGRtLnJlc3BvbmQodGhpcy5zdGF0ZS5wYXNzd29yZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5zaG93X21lc3NhZ2UgPSAodGV4dCwgdHlwZSkgPT4ge1xuICAgICAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUodGV4dCwgdHlwZSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hdXRoZW50aWNhdGlvbl9jb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cubGlnaHRkbS5pc19hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgIHdpbmRvdy5saWdodGRtLnN0YXJ0X3Nlc3Npb25fc3luYyh0aGlzLnN0b3JlU3RhdGUuc2Vzc2lvbi5rZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZWplY3RQYXNzd29yZCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYXV0b2xvZ2luX3RpbWVyX2V4cGlyZWQgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cubm90aWZpY2F0aW9ucy5nZW5lcmF0ZShcIkF1dG9sb2dpbiBleHBpcmVkLlwiKTtcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlRHJvcGRvd25DbGljayhldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJkcm9wZG93bkFjdGl2ZVwiOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEcm9wZG93bkxlYXZlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBcImRyb3Bkb3duQWN0aXZlXCI6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVMb2dpblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAod2luZG93LmRlYnVnID09PSB0cnVlKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5wYXNzd29yZC50b0xvd2VyQ2FzZSgpICE9PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgdGhpcy5yZWplY3RQYXNzd29yZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUoYFlvdSBhcmUgbm93IGxvZ2dlZCBpbiBhcyAke3RoaXMuc3RvcmVTdGF0ZS51c2VyLmRpc3BsYXlfbmFtZX0gdG8gJHt0aGlzLnN0b3JlU3RhdGUuc2Vzc2lvbi5uYW1lfS5gLCAnc3VjY2VzcycpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBcInBhc3N3b3JkXCI6IFwiXCJcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICB3aW5kb3cubGlnaHRkbS5hdXRoZW50aWNhdGUodGhpcy5zdG9yZVN0YXRlLnVzZXIudXNlcm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN3aXRjaGVyQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAod2luZG93LmxpZ2h0ZG0udXNlcnMubGVuZ3RoIDwgMikge1xuICAgICAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUoXCJZb3UgYXJlIHRoZSBvbmx5IHVzZXIgdGhhdCBpcyBhYmxlIHRvIGxvZyBpbiBvbiB0aGlzIHN5c3RlbS5cIiwgJ2Vycm9yJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cubGlnaHRkbS51c2Vycy5sZW5ndGggPT09IDIpIHtcbiAgICAgIC8vIE5vIHBvaW50IGluIHNob3dpbmcgdGhlbSB0aGUgc3dpdGNoZXIgaWYgdGhlcmUgaXMgb25seSBvbmUgb3RoZXIgdXNlci4gU3dpdGNoIGltbWVkaWF0ZWx5LlxuICAgICAgbGV0IG90aGVyVXNlciA9IHdpbmRvdy5saWdodGRtLnVzZXJzLmZpbHRlcigodXNlcikgPT4ge1xuICAgICAgICByZXR1cm4gdXNlci51c2VybmFtZSAhPT0gdGhpcy5zdG9yZVN0YXRlLnVzZXIudXNlcm5hbWU7XG4gICAgICB9KVswXTtcblxuICAgICAgdGhpcy5zZXRBY3RpdmVVc2VyKG90aGVyVXNlciwgdHJ1ZSk7XG4gICAgICB3aW5kb3cubm90aWZpY2F0aW9ucy5nZW5lcmF0ZShcIlVzZXIgaGFzIGJlZW4gYXV0b21hdGljYWxseSBzd2l0Y2hlZCB0byB0aGUgb25seSBvdGhlciB1c2VyIG9uIHRoaXMgc3lzdGVtLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFwic3dpdGNoZXJBY3RpdmVcIjogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUGFzc3dvcmRJbnB1dChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJwYXNzd29yZFwiOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIHNldEFjdGl2ZVNlc3Npb24oc2Vzc2lvbikge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgJ3R5cGUnOiAnU0VUX0FDVElWRV9TRVNTSU9OJyxcbiAgICAgICdzZXNzaW9uJzogc2Vzc2lvblxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBcImRyb3Bkb3duQWN0aXZlXCI6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBzZXRBY3RpdmVVc2VyKHVzZXIsIGlzQnlwYXNzKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh7XG4gICAgICAndHlwZSc6ICdTRVRfQUNUSVZFX1VTRVInLFxuICAgICAgJ3VzZXInOiB1c2VyXG4gICAgfSk7XG5cbiAgICAvLyBGYWRlIGluLCBleGNlcHQgd2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiAxIG9mIDIgdXNlcnMuXG4gICAgaWYgKGlzQnlwYXNzID09PSBmYWxzZSB8fCBpc0J5cGFzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgXCJmYWRlSW5cIjogdHJ1ZSxcbiAgICAgICAgXCJzd2l0Y2hlckFjdGl2ZVwiOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBcImZhZGVJblwiOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH0sIEZBREVfSU5fRFVSQVRJT04pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgXCJzd2l0Y2hlckFjdGl2ZVwiOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVqZWN0UGFzc3dvcmQoKSB7XG4gICAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUoXCJQYXNzd29yZCBpbmNvcnJlY3QsIHBsZWFzZSB0cnkgYWdhaW4uXCIsICdlcnJvcicpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBcInBhc3N3b3JkXCI6IFwiXCIsXG4gICAgICBcInBhc3N3b3JkRmFpbGVkXCI6IHRydWVcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFwicGFzc3dvcmRGYWlsZWRcIjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0sIEVSUk9SX1NIQUtFX0RVUkFUSU9OKTtcbiAgfVxuXG4gIGdlbmVyYXRlU3dpdGNoVXNlckJ1dHRvbigpIHtcbiAgICBsZXQgY2xhc3NlcyA9IFsnbGVmdCddO1xuXG4gICAgaWYgKHdpbmRvdy5saWdodGRtLnVzZXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgIGNsYXNzZXMucHVzaChcImRpc2FibGVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMuam9pbignICcpIH0gb25DbGljaz17IHRoaXMuaGFuZGxlU3dpdGNoZXJDbGljay5iaW5kKHRoaXMpIH0+U1dJVENIIFVTRVI8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBsb2dpblBhbmVsQ2xhc3NlcyA9IFsnbG9naW4tcGFuZWwtbWFpbiddO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuZmFkZUluID09PSB0cnVlKSB7XG4gICAgICBsb2dpblBhbmVsQ2xhc3Nlcy5wdXNoKCdmYWRlaW4nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zd2l0Y2hlckFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgbG9naW5QYW5lbENsYXNzZXMucHVzaCgnZmFkZW91dCcpO1xuICAgIH1cblxuICAgIGxldCBzd2l0Y2hVc2VyQnV0dG9uID0gdGhpcy5nZW5lcmF0ZVN3aXRjaFVzZXJCdXR0b24oKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXBhbmVsLWNvbnRlbnRzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgbG9naW5QYW5lbENsYXNzZXMuam9pbignICcpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLW1hc2tcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInVzZXItYXZhdGFyXCIgc3JjPXsgdGhpcy5zdG9yZVN0YXRlLnVzZXIuaW1hZ2UgfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxVc2VyUGFuZWxGb3JtXG4gICAgICAgICAgICBhY3RpdmVTZXNzaW9uPXsgdGhpcy5zdG9yZVN0YXRlLnNlc3Npb24gfVxuICAgICAgICAgICAgYWN0aXZlVXNlcj17IHRoaXMuc3RvcmVTdGF0ZS51c2VyIH1cbiAgICAgICAgICAgIGRyb3Bkb3duQWN0aXZlPXsgdGhpcy5zdGF0ZS5kcm9wZG93bkFjdGl2ZSB9XG4gICAgICAgICAgICBwYXNzd29yZD17IHRoaXMuc3RhdGUucGFzc3dvcmQgfVxuICAgICAgICAgICAgcGFzc3dvcmRGYWlsZWQ9eyB0aGlzLnN0YXRlLnBhc3N3b3JkRmFpbGVkIH1cbiAgICAgICAgICAgIGhhbmRsZUxvZ2luU3VibWl0PXsgdGhpcy5oYW5kbGVMb2dpblN1Ym1pdC5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgIGhhbmRsZURyb3Bkb3duQ2xpY2s9eyB0aGlzLmhhbmRsZURyb3Bkb3duQ2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgICAgICBoYW5kbGVEcm9wZG93bkxlYXZlPXsgdGhpcy5oYW5kbGVEcm9wZG93bkxlYXZlLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgaGFuZGxlUGFzc3dvcmRJbnB1dD17IHRoaXMuaGFuZGxlUGFzc3dvcmRJbnB1dC5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgIHNldEFjdGl2ZVNlc3Npb249eyB0aGlzLnNldEFjdGl2ZVNlc3Npb24uYmluZCh0aGlzKSB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxuICAgICAgICAgICAgeyBzd2l0Y2hVc2VyQnV0dG9uIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxVc2VyU3dpdGNoZXJcbiAgICAgICAgICBhY3RpdmU9eyB0aGlzLnN0YXRlLnN3aXRjaGVyQWN0aXZlIH1cbiAgICAgICAgICBhY3RpdmVVc2VyPXsgdGhpcy5zdG9yZVN0YXRlLnVzZXIgfVxuICAgICAgICAgIHNldEFjdGl2ZVVzZXI9eyB0aGlzLnNldEFjdGl2ZVVzZXIuYmluZCh0aGlzKSB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0NvbXBvbmVudHMvVXNlclBhbmVsLmpzeCIsImltcG9ydCB7IFNldHRpbmdzUmVkdWNlciB9IGZyb20gXCIuL1NldHRpbmdzUmVkdWNlclwiO1xuaW1wb3J0ICogYXMgU3lzdGVtT3BlcmF0aW9ucyBmcm9tIFwiLi4vTG9naWMvU3lzdGVtT3BlcmF0aW9uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFN0YXRlKCkge1xuICByZXR1cm4ge1xuICAgIFwiaW5mb1wiOiB7XG4gICAgICBcImhvc3RuYW1lXCI6IHdpbmRvdy5saWdodGRtLmhvc3RuYW1lLFxuICAgICAgXCJsYW5ndWFnZVwiOiB3aW5kb3cubGlnaHRkbS5sYW5ndWFnZVxuICAgIH0sXG4gICAgXCJ1c2VyXCI6IFN5c3RlbU9wZXJhdGlvbnMuZmluZEluaXRpYWxVc2VyKCksXG4gICAgXCJzZXNzaW9uXCI6IFN5c3RlbU9wZXJhdGlvbnMuZmluZEluaXRpYWxTZXNzaW9uKClcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFByaW1hcnlSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgaWYgKGFjdGlvbi50eXBlLnN0YXJ0c1dpdGgoXCJTRVRUSU5HU1wiKSkge1xuICAgIHJldHVybiBTZXR0aW5nc1JlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBcIkFVVEhfU0VUX0FDVElWRV9TRVNTSU9OXCI6XG4gICAgICB2YXIgc2Vzc2lvbiA9IGFjdGlvbi5zZXNzaW9uO1xuXG4gICAgICBpZiAodHlwZW9mIHNlc3Npb24gPT09IHR5cGVvZiBTdHJpbmcoKSkge1xuICAgICAgICBzZXNzaW9uID0gU3lzdGVtT3BlcmF0aW9ucy5maW5kU2Vzc2lvbihzZXNzaW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIFwic2Vzc2lvblwiOiBzZXNzaW9uIH07XG5cbiAgICBjYXNlIFwiQVVUSF9TRVRfQUNUSVZFX1VTRVJcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBcInVzZXJcIjogYWN0aW9uLnVzZXIgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L1JlZHVjZXJzL1ByaW1hcnlSZWR1Y2VyLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vdGlmaWNhdGlvbnMtY29udGFpbmVyJylbMF07XG4gIH1cblxuICBnZW5lcmF0ZShtZXNzYWdlLCB0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdHlwZSA9IFwiXCI7XG4gICAgfVxuXG4gICAgbGV0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBgbm90aWZpY2F0aW9uICR7dHlwZX1gO1xuICAgIG5vdGlmaWNhdGlvbi5pbm5lclRleHQgPSBtZXNzYWdlO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgKz0gXCIgZmFkZW91dFwiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKG5vdGlmaWNhdGlvbik7XG4gICAgICB9LCA1MDApO1xuICAgIH0sIDUwMDApO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9VdGlscy9Ob3RpZmljYXRpb25zLmpzIiwiZXhwb3J0IGNvbnN0IE5PX09QID0gJyROT19PUCc7XG5leHBvcnQgY29uc3QgRVJST1JfTVNHID0gJ2EgcnVudGltZSBlcnJvciBvY2N1cmVkISBVc2UgSW5mZXJubyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCB0byBmaW5kIHRoZSBlcnJvci4nO1xuZXhwb3J0IGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudDtcbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiAoY2hpbGRyZW4gPyBbY2hpbGRyZW5dIDogY2hpbGRyZW4pO1xufVxuLy8gdGhpcyBpcyBNVUNIIGZhc3RlciB0aGFuIC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgYW5kIGluc3RhbmNlb2YgQXJyYXlcbi8vIGluIE5vZGUgNyBhbmQgdGhlIGxhdGVyIHZlcnNpb25zIG9mIFY4LCBzbG93ZXIgaW4gb2xkZXIgdmVyc2lvbnMgdGhvdWdoXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5leHBvcnQgZnVuY3Rpb24gaXNTdGF0ZWZ1bENvbXBvbmVudChvKSB7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZSkgJiYgIWlzVW5kZWZpbmVkKG8ucHJvdG90eXBlLnJlbmRlcik7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmdPck51bWJlcihvYmopIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIG9iajtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcic7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsT3JVbmRlZihvYmopIHtcbiAgICByZXR1cm4gaXNVbmRlZmluZWQob2JqKSB8fCBpc051bGwob2JqKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0ludmFsaWQob2JqKSB7XG4gICAgcmV0dXJuIGlzTnVsbChvYmopIHx8IG9iaiA9PT0gZmFsc2UgfHwgaXNUcnVlKG9iaikgfHwgaXNVbmRlZmluZWQob2JqKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQXR0ckFuRXZlbnQoYXR0cikge1xuICAgIHJldHVybiBhdHRyWzBdID09PSAnbycgJiYgYXR0clsxXSA9PT0gJ24nICYmIGF0dHIubGVuZ3RoID4gMztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdudW1iZXInO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJ1ZShvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB0cnVlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0Jztcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0Vycm9yKG1lc3NhZ2UpIHtcbiAgICBpZiAoIW1lc3NhZ2UpIHtcbiAgICAgICAgbWVzc2FnZSA9IEVSUk9SX01TRztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbmZlcm5vIEVycm9yOiAke21lc3NhZ2V9YCk7XG59XG5leHBvcnQgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gICAgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIExpZmVjeWNsZSgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xufVxuTGlmZWN5Y2xlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG59O1xuTGlmZWN5Y2xlLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gdHJpZ2dlcigpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbaV0oKTtcbiAgICB9XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlQcm9wc1RvKGNvcHlGcm9tLCBjb3B5VG8pIHtcbiAgICBmb3IgKGxldCBwcm9wIGluIGNvcHlGcm9tKSB7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChjb3B5VG9bcHJvcF0pKSB7XG4gICAgICAgICAgICBjb3B5VG9bcHJvcF0gPSBjb3B5RnJvbVtwcm9wXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby1jb21wb25lbnQvfi9pbmZlcm5vLXNoYXJlZC9kaXN0LWVzL2luZGV4LmpzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuY29uc3QgaXNpT1MgPSBpc0Jyb3dzZXIgJiYgISFuYXZpZ2F0b3IucGxhdGZvcm0gJiYgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKTtcbmNvbnN0IGRlbGVnYXRlZEV2ZW50cyA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFdmVudChuYW1lLCBsYXN0RXZlbnQsIG5leHRFdmVudCwgZG9tKSB7XG4gICAgbGV0IGRlbGVnYXRlZFJvb3RzID0gZGVsZWdhdGVkRXZlbnRzLmdldChuYW1lKTtcbiAgICBpZiAobmV4dEV2ZW50KSB7XG4gICAgICAgIGlmICghZGVsZWdhdGVkUm9vdHMpIHtcbiAgICAgICAgICAgIGRlbGVnYXRlZFJvb3RzID0geyBpdGVtczogbmV3IE1hcCgpLCBjb3VudDogMCwgZG9jRXZlbnQ6IG51bGwgfTtcbiAgICAgICAgICAgIGRlbGVnYXRlZFJvb3RzLmRvY0V2ZW50ID0gYXR0YWNoRXZlbnRUb0RvY3VtZW50KG5hbWUsIGRlbGVnYXRlZFJvb3RzKTtcbiAgICAgICAgICAgIGRlbGVnYXRlZEV2ZW50cy5zZXQobmFtZSwgZGVsZWdhdGVkUm9vdHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGFzdEV2ZW50KSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cy5jb3VudCsrO1xuICAgICAgICAgICAgaWYgKGlzaU9TICYmIG5hbWUgPT09ICdvbkNsaWNrJykge1xuICAgICAgICAgICAgICAgIHRyYXBDbGlja09uTm9uSW50ZXJhY3RpdmVFbGVtZW50KGRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVsZWdhdGVkUm9vdHMuaXRlbXMuc2V0KGRvbSwgbmV4dEV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVsZWdhdGVkUm9vdHMpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlZFJvb3RzLml0ZW1zLmhhcyhkb20pKSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cy5jb3VudC0tO1xuICAgICAgICAgICAgZGVsZWdhdGVkUm9vdHMuaXRlbXMuZGVsZXRlKGRvbSk7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVkUm9vdHMuY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5vcm1hbGl6ZUV2ZW50TmFtZShuYW1lKSwgZGVsZWdhdGVkUm9vdHMuZG9jRXZlbnQpO1xuICAgICAgICAgICAgICAgIGRlbGVnYXRlZEV2ZW50cy5kZWxldGUobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGV2ZW50LCBkb20sIGl0ZW1zLCBjb3VudCwgZXZlbnREYXRhKSB7XG4gICAgY29uc3QgZXZlbnRzVG9UcmlnZ2VyID0gaXRlbXMuZ2V0KGRvbSk7XG4gICAgaWYgKGV2ZW50c1RvVHJpZ2dlcikge1xuICAgICAgICBjb3VudC0tO1xuICAgICAgICAvLyBsaW5rRXZlbnQgb2JqZWN0XG4gICAgICAgIGV2ZW50RGF0YS5kb20gPSBkb207XG4gICAgICAgIGlmIChldmVudHNUb1RyaWdnZXIuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50c1RvVHJpZ2dlci5ldmVudChldmVudHNUb1RyaWdnZXIuZGF0YSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRzVG9UcmlnZ2VyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnREYXRhLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgY29uc3QgcGFyZW50RG9tID0gZG9tLnBhcmVudE5vZGU7XG4gICAgICAgIGlmIChwYXJlbnREb20gfHwgcGFyZW50RG9tID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGV2ZW50LCBwYXJlbnREb20sIGl0ZW1zLCBjb3VudCwgZXZlbnREYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUV2ZW50TmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBhdHRhY2hFdmVudFRvRG9jdW1lbnQobmFtZSwgZGVsZWdhdGVkUm9vdHMpIHtcbiAgICBjb25zdCBkb2NFdmVudCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBldmVudERhdGEgPSB7XG4gICAgICAgICAgICBzdG9wUHJvcGFnYXRpb246IGZhbHNlLFxuICAgICAgICAgICAgZG9tOiBkb2N1bWVudFxuICAgICAgICB9O1xuICAgICAgICAvLyB3ZSBoYXZlIHRvIGRvIHRoaXMgYXMgc29tZSBicm93c2VycyByZWN5Y2xlIHRoZSBzYW1lIEV2ZW50IGJldHdlZW4gY2FsbHNcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byBtYWtlIHRoZSBwcm9wZXJ0eSBjb25maWd1cmFibGVcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAnY3VycmVudFRhcmdldCcsIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnREYXRhLmRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGV2ZW50RGF0YS5zdG9wUHJvcGFnYXRpb24gPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb3VudCA9IGRlbGVnYXRlZFJvb3RzLmNvdW50O1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICBkaXNwYXRjaEV2ZW50KGV2ZW50LCBldmVudC50YXJnZXQsIGRlbGVnYXRlZFJvb3RzLml0ZW1zLCBjb3VudCwgZXZlbnREYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihub3JtYWxpemVFdmVudE5hbWUobmFtZSksIGRvY0V2ZW50KTtcbiAgICByZXR1cm4gZG9jRXZlbnQ7XG59XG5mdW5jdGlvbiBlbXB0eUZuKCkgeyB9XG5mdW5jdGlvbiB0cmFwQ2xpY2tPbk5vbkludGVyYWN0aXZlRWxlbWVudChkb20pIHtcbiAgICAvLyBNb2JpbGUgU2FmYXJpIGRvZXMgbm90IGZpcmUgcHJvcGVybHkgYnViYmxlIGNsaWNrIGV2ZW50cyBvblxuICAgIC8vIG5vbi1pbnRlcmFjdGl2ZSBlbGVtZW50cywgd2hpY2ggbWVhbnMgZGVsZWdhdGVkIGNsaWNrIGxpc3RlbmVycyBkbyBub3RcbiAgICAvLyBmaXJlLiBUaGUgd29ya2Fyb3VuZCBmb3IgdGhpcyBidWcgaW52b2x2ZXMgYXR0YWNoaW5nIGFuIGVtcHR5IGNsaWNrXG4gICAgLy8gbGlzdGVuZXIgb24gdGhlIHRhcmdldCBub2RlLlxuICAgIC8vIGh0dHA6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDEwLzA5L2NsaWNrX2V2ZW50X2RlbC5odG1sXG4gICAgLy8gSnVzdCBzZXQgaXQgdXNpbmcgdGhlIG9uY2xpY2sgcHJvcGVydHkgc28gdGhhdCB3ZSBkb24ndCBoYXZlIHRvIG1hbmFnZSBhbnlcbiAgICAvLyBib29ra2VlcGluZyBmb3IgaXQuIE5vdCBzdXJlIGlmIHdlIG5lZWQgdG8gY2xlYXIgaXQgd2hlbiB0aGUgbGlzdGVuZXIgaXNcbiAgICAvLyByZW1vdmVkLlxuICAgIC8vIFRPRE86IE9ubHkgZG8gdGhpcyBmb3IgdGhlIHJlbGV2YW50IFNhZmFyaXMgbWF5YmU/XG4gICAgZG9tLm9uY2xpY2sgPSBlbXB0eUZuO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2V2ZW50cy9kZWxlZ2F0aW9uLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlua0V2ZW50KGRhdGEsIGV2ZW50KSB7XG4gICAgcmV0dXJuIHsgZGF0YSwgZXZlbnQgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS9ldmVudHMvbGlua0V2ZW50LmpzIiwiaW1wb3J0IHsgY29weVByb3BzVG8sIGlzQXJyYXksIGlzTnVsbCwgaXNPYmplY3QsIGlzU3RyaW5nT3JOdW1iZXIsIGlzVW5kZWZpbmVkLCB0aHJvd0Vycm9yLCB3YXJuaW5nIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vY29yZS9vcHRpb25zJztcbmltcG9ydCB7IHN2Z05TIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgbW91bnQsIG1vdW50Q2xhc3NDb21wb25lbnRDYWxsYmFja3MsIG1vdW50RWxlbWVudCwgbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzLCBtb3VudFJlZiwgbW91bnRUZXh0IH0gZnJvbSAnLi9tb3VudGluZyc7XG5pbXBvcnQgeyBwYXRjaEV2ZW50LCBwYXRjaFByb3AgfSBmcm9tICcuL3BhdGNoaW5nJztcbmltcG9ydCB7IGNvbXBvbmVudFRvRE9NTm9kZU1hcCB9IGZyb20gJy4vcmVuZGVyaW5nJztcbmltcG9ydCB7IGNyZWF0ZUNsYXNzQ29tcG9uZW50SW5zdGFuY2UsIGNyZWF0ZUZ1bmN0aW9uYWxDb21wb25lbnRJbnB1dCwgcmVwbGFjZUNoaWxkLCBFTVBUWV9PQkogfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBwcm9jZXNzRWxlbWVudCBmcm9tICcuL3dyYXBwZXJzL3Byb2Nlc3NFbGVtZW50JztcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDaGlsZE5vZGVzKHBhcmVudERvbSkge1xuICAgIGxldCBkb20gPSBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICB3aGlsZSAoZG9tKSB7XG4gICAgICAgIGlmIChkb20ubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgICAgIGlmIChkb20uZGF0YSA9PT0gJyEnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgICAgICAgcGFyZW50RG9tLnJlcGxhY2VDaGlsZChwbGFjZWhvbGRlciwgZG9tKTtcbiAgICAgICAgICAgICAgICBkb20gPSBkb20ubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0RG9tID0gZG9tLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgICAgICBwYXJlbnREb20ucmVtb3ZlQ2hpbGQoZG9tKTtcbiAgICAgICAgICAgICAgICBkb20gPSBsYXN0RG9tIHx8IHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaHlkcmF0ZUNvbXBvbmVudCh2Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc0NsYXNzKSB7XG4gICAgY29uc3QgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgY29uc3QgcmVmID0gdk5vZGUucmVmO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBjb25zdCBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICBsZXQgcHJvcHM7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChkZWZhdWx0UHJvcHMpKSB7XG4gICAgICAgIC8vIFdoZW4gZGVmYXVsdFByb3BzIGFyZSB1c2VkIHdlIG5lZWQgdG8gY3JlYXRlIG5ldyBPYmplY3RcbiAgICAgICAgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCB7fTtcbiAgICAgICAgY29weVByb3BzVG8oZGVmYXVsdFByb3BzLCBwcm9wcyk7XG4gICAgICAgIHZOb2RlLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICB9XG4gICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgY29uc3QgX2lzU1ZHID0gZG9tLm5hbWVzcGFjZVVSSSA9PT0gc3ZnTlM7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gY3JlYXRlQ2xhc3NDb21wb25lbnRJbnN0YW5jZSh2Tm9kZSwgdHlwZSwgcHJvcHMsIGNvbnRleHQsIF9pc1NWRyk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gaW5zdGFuY2UuX2xhc3RJbnB1dDtcbiAgICAgICAgaW5zdGFuY2UuX3ZDb21wb25lbnQgPSB2Tm9kZTtcbiAgICAgICAgaW5zdGFuY2UuX3ZOb2RlID0gdk5vZGU7XG4gICAgICAgIGh5ZHJhdGUoaW5wdXQsIGRvbSwgbGlmZWN5Y2xlLCBpbnN0YW5jZS5fY2hpbGRDb250ZXh0LCBfaXNTVkcpO1xuICAgICAgICBtb3VudENsYXNzQ29tcG9uZW50Q2FsbGJhY2tzKHZOb2RlLCByZWYsIGluc3RhbmNlLCBsaWZlY3ljbGUpO1xuICAgICAgICBvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCAmJiBjb21wb25lbnRUb0RPTU5vZGVNYXAuc2V0KGluc3RhbmNlLCBkb20pO1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQodk5vZGUsIHR5cGUsIHByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgaHlkcmF0ZShpbnB1dCwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnB1dDtcbiAgICAgICAgdk5vZGUuZG9tID0gaW5wdXQuZG9tO1xuICAgICAgICBtb3VudEZ1bmN0aW9uYWxDb21wb25lbnRDYWxsYmFja3MocmVmLCBkb20sIGxpZmVjeWNsZSk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBoeWRyYXRlRWxlbWVudCh2Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgY29uc3QgdGFnID0gdk5vZGUudHlwZTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIGNvbnN0IHByb3BzID0gdk5vZGUucHJvcHM7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzO1xuICAgIGNvbnN0IGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgY29uc3QgcmVmID0gdk5vZGUucmVmO1xuICAgIGlmIChpc1NWRyB8fCAoZmxhZ3MgJiAxMjggLyogU3ZnRWxlbWVudCAqLykpIHtcbiAgICAgICAgaXNTVkcgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZG9tLm5vZGVUeXBlICE9PSAxIHx8IGRvbS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09IHRhZykge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgd2FybmluZygnSW5mZXJubyBoeWRyYXRpb246IFNlcnZlci1zaWRlIG1hcmt1cCBkb2VzblxcJ3QgbWF0Y2ggY2xpZW50LXNpZGUgbWFya3VwIG9yIEluaXRpYWwgcmVuZGVyIHRhcmdldCBpcyBub3QgZW1wdHknKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEb20gPSBtb3VudEVsZW1lbnQodk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB2Tm9kZS5kb20gPSBuZXdEb207XG4gICAgICAgIHJlcGxhY2VDaGlsZChkb20ucGFyZW50Tm9kZSwgbmV3RG9tLCBkb20pO1xuICAgICAgICByZXR1cm4gbmV3RG9tO1xuICAgIH1cbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGh5ZHJhdGVDaGlsZHJlbihjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgbGV0IGhhc0NvbnRyb2xsZWRWYWx1ZSA9IGZhbHNlO1xuICAgIGlmICghKGZsYWdzICYgMiAvKiBIdG1sRWxlbWVudCAqLykpIHtcbiAgICAgICAgaGFzQ29udHJvbGxlZFZhbHVlID0gcHJvY2Vzc0VsZW1lbnQoZmxhZ3MsIHZOb2RlLCBkb20sIGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIHBhdGNoUHJvcChwcm9wLCBudWxsLCBwcm9wc1twcm9wXSwgZG9tLCBpc1NWRywgaGFzQ29udHJvbGxlZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUsIG51bGwsIGV2ZW50c1tuYW1lXSwgZG9tKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocmVmKSB7XG4gICAgICAgIG1vdW50UmVmKGRvbSwgcmVmLCBsaWZlY3ljbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gaHlkcmF0ZUNoaWxkcmVuKGNoaWxkcmVuLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICBub3JtYWxpemVDaGlsZE5vZGVzKHBhcmVudERvbSk7XG4gICAgbGV0IGRvbSA9IHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoIWlzTnVsbChjaGlsZCkgJiYgaXNPYmplY3QoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvbSkge1xuICAgICAgICAgICAgICAgICAgICBkb20gPSBoeWRyYXRlKGNoaWxkLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICAgICAgICAgICAgICBkb20gPSBkb20ubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtb3VudChjaGlsZCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihjaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGRvbSAmJiBkb20ubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIGlmIChkb20ubm9kZVZhbHVlICE9PSBjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGRvbS5ub2RlVmFsdWUgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgcGFyZW50RG9tLnRleHRDb250ZW50ID0gY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChjaGlsZHJlbikpIHtcbiAgICAgICAgaHlkcmF0ZShjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICAvLyBjbGVhciBhbnkgb3RoZXIgRE9NIG5vZGVzLCB0aGVyZSBzaG91bGQgYmUgb25seSBhIHNpbmdsZSBlbnRyeSBmb3IgdGhlIHJvb3RcbiAgICB3aGlsZSAoZG9tKSB7XG4gICAgICAgIGNvbnN0IG5leHRTaWJsaW5nID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICBwYXJlbnREb20ucmVtb3ZlQ2hpbGQoZG9tKTtcbiAgICAgICAgZG9tID0gbmV4dFNpYmxpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gaHlkcmF0ZVRleHQodk5vZGUsIGRvbSkge1xuICAgIGlmIChkb20ubm9kZVR5cGUgIT09IDMpIHtcbiAgICAgICAgY29uc3QgbmV3RG9tID0gbW91bnRUZXh0KHZOb2RlLCBudWxsKTtcbiAgICAgICAgdk5vZGUuZG9tID0gbmV3RG9tO1xuICAgICAgICByZXBsYWNlQ2hpbGQoZG9tLnBhcmVudE5vZGUsIG5ld0RvbSwgZG9tKTtcbiAgICAgICAgcmV0dXJuIG5ld0RvbTtcbiAgICB9XG4gICAgY29uc3QgdGV4dCA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIGlmIChkb20ubm9kZVZhbHVlICE9PSB0ZXh0KSB7XG4gICAgICAgIGRvbS5ub2RlVmFsdWUgPSB0ZXh0O1xuICAgIH1cbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGVWb2lkKHZOb2RlLCBkb20pIHtcbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGUodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGNvbnN0IGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgaWYgKGZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIHJldHVybiBoeWRyYXRlQ29tcG9uZW50KHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgIHJldHVybiBoeWRyYXRlRWxlbWVudCh2Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgcmV0dXJuIGh5ZHJhdGVUZXh0KHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDQwOTYgLyogVm9pZCAqLykge1xuICAgICAgICByZXR1cm4gaHlkcmF0ZVZvaWQodk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihgaHlkcmF0ZSgpIGV4cGVjdHMgYSB2YWxpZCBWTm9kZSwgaW5zdGVhZCBpdCByZWNlaXZlZCBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBcIiR7dHlwZW9mIHZOb2RlfVwiLmApO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoeWRyYXRlUm9vdChpbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUpIHtcbiAgICBsZXQgZG9tID0gcGFyZW50RG9tICYmIHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgIGlmIChkb20pIHtcbiAgICAgICAgaHlkcmF0ZShpbnB1dCwgZG9tLCBsaWZlY3ljbGUsIEVNUFRZX09CSiwgZmFsc2UpO1xuICAgICAgICBkb20gPSBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICAgICAgLy8gY2xlYXIgYW55IG90aGVyIERPTSBub2RlcywgdGhlcmUgc2hvdWxkIGJlIG9ubHkgYSBzaW5nbGUgZW50cnkgZm9yIHRoZSByb290XG4gICAgICAgIHdoaWxlIChkb20gPSBkb20ubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vaHlkcmF0aW9uLmpzIiwiaW1wb3J0IHsgaXNOdWxsT3JVbmRlZiB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCB7IHdyYXBwZXJzIH0gZnJvbSAnLi9wcm9jZXNzRWxlbWVudCc7XG5pbXBvcnQgeyBFTVBUWV9PQkogfSBmcm9tICcuLi91dGlscyc7XG5mdW5jdGlvbiBpc0NoZWNrZWRUeXBlKHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ2NoZWNrYm94JyB8fCB0eXBlID09PSAncmFkaW8nO1xufVxuZnVuY3Rpb24gaXNDb250cm9sbGVkKHByb3BzKSB7XG4gICAgY29uc3QgdXNlc0NoZWNrZWQgPSBpc0NoZWNrZWRUeXBlKHByb3BzLnR5cGUpO1xuICAgIHJldHVybiB1c2VzQ2hlY2tlZCA/ICFpc051bGxPclVuZGVmKHByb3BzLmNoZWNrZWQpIDogIWlzTnVsbE9yVW5kZWYocHJvcHMudmFsdWUpO1xufVxuZnVuY3Rpb24gb25UZXh0SW5wdXRDaGFuZ2UoZSkge1xuICAgIGxldCB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbklucHV0KSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzLm9uSW5wdXQ7XG4gICAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudHMub25pbnB1dCkge1xuICAgICAgICBldmVudHMub25pbnB1dChlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25JbnB1dCBldmVudHNcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIGFwcGx5VmFsdWUodGhpcy52Tm9kZSwgZG9tKTtcbn1cbmZ1bmN0aW9uIHdyYXBwZWRPbkNoYW5nZShlKSB7XG4gICAgbGV0IHZOb2RlID0gdGhpcy52Tm9kZTtcbiAgICBjb25zdCBldmVudHMgPSB2Tm9kZS5ldmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzLm9uQ2hhbmdlO1xuICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICBldmVudC5ldmVudChldmVudC5kYXRhLCBlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGV2ZW50KGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG9uQ2hlY2tib3hDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZOb2RlID0gdGhpcy52Tm9kZTtcbiAgICBjb25zdCBldmVudHMgPSB2Tm9kZS5ldmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIGNvbnN0IGRvbSA9IHZOb2RlLmRvbTtcbiAgICBpZiAoZXZlbnRzLm9uQ2xpY2spIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHMub25DbGljaztcbiAgICAgICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5ldmVudChldmVudC5kYXRhLCBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50KGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50cy5vbmNsaWNrKSB7XG4gICAgICAgIGV2ZW50cy5vbmNsaWNrKGUpO1xuICAgIH1cbiAgICAvLyB0aGUgdXNlciBtYXkgaGF2ZSB1cGRhdGVkIHRoZSB2Tm9kZSBmcm9tIHRoZSBhYm92ZSBvbkNsaWNrIGV2ZW50c1xuICAgIC8vIHNvIHdlIG5lZWQgdG8gZ2V0IGl0IGZyb20gdGhlIGNvbnRleHQgb2YgYHRoaXNgIGFnYWluXG4gICAgYXBwbHlWYWx1ZSh0aGlzLnZOb2RlLCBkb20pO1xufVxuZnVuY3Rpb24gaGFuZGxlQXNzb2NpYXRlZFJhZGlvSW5wdXRzKG5hbWUpIHtcbiAgICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cIiR7bmFtZX1cIl1gKTtcbiAgICBbXS5mb3JFYWNoLmNhbGwoaW5wdXRzLCAoZG9tKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0V3JhcHBlciA9IHdyYXBwZXJzLmdldChkb20pO1xuICAgICAgICBpZiAoaW5wdXRXcmFwcGVyKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGlucHV0V3JhcHBlci52Tm9kZS5wcm9wcztcbiAgICAgICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgICAgIGRvbS5jaGVja2VkID0gaW5wdXRXcmFwcGVyLnZOb2RlLnByb3BzLmNoZWNrZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzSW5wdXQodk5vZGUsIGRvbSkge1xuICAgIGNvbnN0IHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGFwcGx5VmFsdWUodk5vZGUsIGRvbSk7XG4gICAgaWYgKGlzQ29udHJvbGxlZChwcm9wcykpIHtcbiAgICAgICAgbGV0IGlucHV0V3JhcHBlciA9IHdyYXBwZXJzLmdldChkb20pO1xuICAgICAgICBpZiAoIWlucHV0V3JhcHBlcikge1xuICAgICAgICAgICAgaW5wdXRXcmFwcGVyID0ge1xuICAgICAgICAgICAgICAgIHZOb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGlzQ2hlY2tlZFR5cGUocHJvcHMudHlwZSkpIHtcbiAgICAgICAgICAgICAgICBkb20ub25jbGljayA9IG9uQ2hlY2tib3hDaGFuZ2UuYmluZChpbnB1dFdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGRvbS5vbmNsaWNrLndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9tLm9uaW5wdXQgPSBvblRleHRJbnB1dENoYW5nZS5iaW5kKGlucHV0V3JhcHBlcik7XG4gICAgICAgICAgICAgICAgZG9tLm9uaW5wdXQud3JhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBkb20ub25jaGFuZ2UgPSB3cmFwcGVkT25DaGFuZ2UuYmluZChpbnB1dFdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGRvbS5vbmNoYW5nZS53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZXJzLnNldChkb20sIGlucHV0V3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRXcmFwcGVyLnZOb2RlID0gdk5vZGU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlWYWx1ZSh2Tm9kZSwgZG9tKSB7XG4gICAgY29uc3QgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgdHlwZSA9IHByb3BzLnR5cGU7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICBjb25zdCBjaGVja2VkID0gcHJvcHMuY2hlY2tlZDtcbiAgICBjb25zdCBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlO1xuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZTtcbiAgICBjb25zdCBoYXNWYWx1ZSA9ICFpc051bGxPclVuZGVmKHZhbHVlKTtcbiAgICBpZiAodHlwZSAmJiB0eXBlICE9PSBkb20udHlwZSkge1xuICAgICAgICBkb20udHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIGlmIChtdWx0aXBsZSAmJiBtdWx0aXBsZSAhPT0gZG9tLm11bHRpcGxlKSB7XG4gICAgICAgIGRvbS5tdWx0aXBsZSA9IG11bHRpcGxlO1xuICAgIH1cbiAgICBpZiAoIWlzTnVsbE9yVW5kZWYoZGVmYXVsdFZhbHVlKSAmJiAhaGFzVmFsdWUpIHtcbiAgICAgICAgZG9tLmRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZSArICcnO1xuICAgIH1cbiAgICBpZiAoaXNDaGVja2VkVHlwZSh0eXBlKSkge1xuICAgICAgICBpZiAoaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIGRvbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGRvbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdyYWRpbycgJiYgcHJvcHMubmFtZSkge1xuICAgICAgICAgICAgaGFuZGxlQXNzb2NpYXRlZFJhZGlvSW5wdXRzKHByb3BzLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaGFzVmFsdWUgJiYgZG9tLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgZG9tLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWlzTnVsbE9yVW5kZWYoY2hlY2tlZCkpIHtcbiAgICAgICAgICAgIGRvbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9JbnB1dFdyYXBwZXIuanMiLCJpbXBvcnQgeyBpc0FycmF5LCBpc0ludmFsaWQsIGlzTnVsbE9yVW5kZWYgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgeyBpc1ZOb2RlIH0gZnJvbSAnLi4vLi4vY29yZS9WTm9kZXMnO1xuaW1wb3J0IHsgd3JhcHBlcnMgfSBmcm9tICcuL3Byb2Nlc3NFbGVtZW50JztcbmltcG9ydCB7IEVNUFRZX09CSiB9IGZyb20gJy4uL3V0aWxzJztcbmZ1bmN0aW9uIGlzQ29udHJvbGxlZChwcm9wcykge1xuICAgIHJldHVybiAhaXNOdWxsT3JVbmRlZihwcm9wcy52YWx1ZSk7XG59XG5mdW5jdGlvbiB1cGRhdGVDaGlsZE9wdGlvbkdyb3VwKHZOb2RlLCB2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIGlmICh0eXBlID09PSAnb3B0Z3JvdXAnKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb24oY2hpbGRyZW5baV0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb24oY2hpbGRyZW4sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb24odk5vZGUsIHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVDaGlsZE9wdGlvbih2Tm9kZSwgdmFsdWUpIHtcbiAgICBjb25zdCBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBkb20gPSB2Tm9kZS5kb207XG4gICAgLy8gd2UgZG8gdGhpcyBhcyBtdWx0aXBsZSBtYXkgaGF2ZSBjaGFuZ2VkXG4gICAgZG9tLnZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgaWYgKChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKHByb3BzLnZhbHVlKSAhPT0gLTEpIHx8IHByb3BzLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICBkb20uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9tLnNlbGVjdGVkID0gcHJvcHMuc2VsZWN0ZWQgfHwgZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gb25TZWxlY3RDaGFuZ2UoZSkge1xuICAgIGNvbnN0IHZOb2RlID0gdGhpcy52Tm9kZTtcbiAgICBjb25zdCBldmVudHMgPSB2Tm9kZS5ldmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIGNvbnN0IGRvbSA9IHZOb2RlLmRvbTtcbiAgICBpZiAoZXZlbnRzLm9uQ2hhbmdlKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzLm9uQ2hhbmdlO1xuICAgICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRzLm9uY2hhbmdlKSB7XG4gICAgICAgIGV2ZW50cy5vbmNoYW5nZShlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25DaGFuZ2UgZXZlbnRzXG4gICAgLy8gc28gd2UgbmVlZCB0byBnZXQgaXQgZnJvbSB0aGUgY29udGV4dCBvZiBgdGhpc2AgYWdhaW5cbiAgICBhcHBseVZhbHVlKHRoaXMudk5vZGUsIGRvbSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1NlbGVjdCh2Tm9kZSwgZG9tKSB7XG4gICAgY29uc3QgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgYXBwbHlWYWx1ZSh2Tm9kZSwgZG9tKTtcbiAgICBpZiAoaXNDb250cm9sbGVkKHByb3BzKSkge1xuICAgICAgICBsZXQgc2VsZWN0V3JhcHBlciA9IHdyYXBwZXJzLmdldChkb20pO1xuICAgICAgICBpZiAoIXNlbGVjdFdyYXBwZXIpIHtcbiAgICAgICAgICAgIHNlbGVjdFdyYXBwZXIgPSB7XG4gICAgICAgICAgICAgICAgdk5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb20ub25jaGFuZ2UgPSBvblNlbGVjdENoYW5nZS5iaW5kKHNlbGVjdFdyYXBwZXIpO1xuICAgICAgICAgICAgZG9tLm9uY2hhbmdlLndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgd3JhcHBlcnMuc2V0KGRvbSwgc2VsZWN0V3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0V3JhcHBlci52Tm9kZSA9IHZOb2RlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VmFsdWUodk5vZGUsIGRvbSkge1xuICAgIGNvbnN0IHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGlmIChwcm9wcy5tdWx0aXBsZSAhPT0gZG9tLm11bHRpcGxlKSB7XG4gICAgICAgIGRvbS5tdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIGlmICghaXNJbnZhbGlkKGNoaWxkcmVuKSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNoaWxkT3B0aW9uR3JvdXAoY2hpbGRyZW5baV0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb25Hcm91cChjaGlsZHJlbiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3dyYXBwZXJzL1NlbGVjdFdyYXBwZXIuanMiLCJpbXBvcnQgeyBpc051bGxPclVuZGVmIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuaW1wb3J0IHsgd3JhcHBlcnMgfSBmcm9tICcuL3Byb2Nlc3NFbGVtZW50JztcbmltcG9ydCB7IEVNUFRZX09CSiB9IGZyb20gJy4uL3V0aWxzJztcbmZ1bmN0aW9uIGlzQ29udHJvbGxlZChwcm9wcykge1xuICAgIHJldHVybiAhaXNOdWxsT3JVbmRlZihwcm9wcy52YWx1ZSk7XG59XG5mdW5jdGlvbiB3cmFwcGVkT25DaGFuZ2UoZSkge1xuICAgIGxldCB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50cy5vbkNoYW5nZTtcbiAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudChlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBvblRleHRhcmVhSW5wdXRDaGFuZ2UoZSkge1xuICAgIGxldCB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbklucHV0KSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzLm9uSW5wdXQ7XG4gICAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudHMub25pbnB1dCkge1xuICAgICAgICBldmVudHMub25pbnB1dChlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25JbnB1dCBldmVudHNcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIGFwcGx5VmFsdWUodGhpcy52Tm9kZSwgZG9tLCBmYWxzZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1RleHRhcmVhKHZOb2RlLCBkb20sIG1vdW50aW5nKSB7XG4gICAgY29uc3QgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgYXBwbHlWYWx1ZSh2Tm9kZSwgZG9tLCBtb3VudGluZyk7XG4gICAgbGV0IHRleHRhcmVhV3JhcHBlciA9IHdyYXBwZXJzLmdldChkb20pO1xuICAgIGlmIChpc0NvbnRyb2xsZWQocHJvcHMpKSB7XG4gICAgICAgIGlmICghdGV4dGFyZWFXcmFwcGVyKSB7XG4gICAgICAgICAgICB0ZXh0YXJlYVdyYXBwZXIgPSB7XG4gICAgICAgICAgICAgICAgdk5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb20ub25pbnB1dCA9IG9uVGV4dGFyZWFJbnB1dENoYW5nZS5iaW5kKHRleHRhcmVhV3JhcHBlcik7XG4gICAgICAgICAgICBkb20ub25pbnB1dC53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIGRvbS5vbmNoYW5nZSA9IHdyYXBwZWRPbkNoYW5nZS5iaW5kKHRleHRhcmVhV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2hhbmdlLndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcHBlcnMuc2V0KGRvbSwgdGV4dGFyZWFXcmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0YXJlYVdyYXBwZXIudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVZhbHVlKHZOb2RlLCBkb20sIG1vdW50aW5nKSB7XG4gICAgY29uc3QgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICBjb25zdCBkb21WYWx1ZSA9IGRvbS52YWx1ZTtcbiAgICBpZiAoaXNOdWxsT3JVbmRlZih2YWx1ZSkpIHtcbiAgICAgICAgaWYgKG1vdW50aW5nKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYoZGVmYXVsdFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IGRvbVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbS52YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb21WYWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBkb20udmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLyogVGhlcmUgaXMgdmFsdWUgc28ga2VlcCBpdCBjb250cm9sbGVkICovXG4gICAgICAgIGlmIChkb21WYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGRvbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3dyYXBwZXJzL1RleHRhcmVhV3JhcHBlci5qcyIsIi8vIENsb2NrIC0+IFJlcXVpcmVkIGJ5IENvbXBvbmVudHMvQ29tbWFuZFBhbmVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSnVzdCBhIGNsb2NrLlxuXG5pbXBvcnQgSW5mZXJubyBmcm9tICdpbmZlcm5vJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnaW5mZXJuby1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBwYWRaZXJvZXMgfSBmcm9tIFwiLi4vVXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvY2sgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBcImN1cnJlbnRUaW1lXCI6IHVuZGVmaW5lZCxcbiAgICAgIFwiaW5pdGlhbGl6ZWRcIjogZmFsc2VcbiAgICB9O1xuICB9XG5cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQ2xvY2soKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBcImluaXRpYWxpemVkXCI6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sIDEwMDApO1xuICB9XG5cblxuICB1cGRhdGVDbG9jaygpIHtcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgaG91cnMgPSBwYWRaZXJvZXMobm93LmdldEhvdXJzKCkpO1xuICAgIGxldCBtaW51dGVzID0gcGFkWmVyb2VzKG5vdy5nZXRNaW51dGVzKCkpO1xuICAgIGxldCBmb3JtYXR0ZWRUaW1lID0gYCR7aG91cnN9OiR7bWludXRlc31gO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBcImN1cnJlbnRUaW1lXCI6IGZvcm1hdHRlZFRpbWVcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVDbG9jaygpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBbJ3JpZ2h0JywgJ2Nsb2NrJ107XG4gICAgbGV0IGN1cnJlbnRUaW1lID0gdGhpcy5zdGF0ZS5jdXJyZW50VGltZTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmluaXRpYWxpemVkID09PSB0cnVlKSB7XG4gICAgICBjbGFzc2VzLnB1c2goJ2xvYWRlZCcpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzZXMuam9pbignICcpIH0+XG4gICAgICAgIHsgY3VycmVudFRpbWUgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Db21wb25lbnRzL0Nsb2NrLmpzeCIsIi8vIFBhc3N3b3JkRmllbGQgLT4gUmVxdWlyZWQgYnkgQ29tcG9uZW50cy9Vc2VyUGFuZWxGb3JtXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2ltcGxlIHBhc3N3b3JkIGlucHV0IGZpZWxkLlxuXG5pbXBvcnQgSW5mZXJubyBmcm9tICdpbmZlcm5vJztcblxuXG5jb25zdCBQYXNzd29yZEZpZWxkID0gKHByb3BzKSA9PiB7XG4gIGxldCBjbGFzc2VzID0gWyd1c2VyLXBhc3N3b3JkJ107XG5cbiAgaWYgKHByb3BzLnBhc3N3b3JkRmFpbGVkID09PSB0cnVlKSB7XG4gICAgY2xhc3Nlcy5wdXNoKCdlcnJvcicpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICBwbGFjZWhvbGRlcj1cIioqKioqKioqKioqKioqKioqKipcIlxuICAgICAgY2xhc3NOYW1lPXsgY2xhc3Nlcy5qb2luKCcgJykgfVxuICAgICAgdmFsdWU9eyBwcm9wcy5wYXNzd29yZCB9XG4gICAgICBvbklucHV0PXsgcHJvcHMuaGFuZGxlUGFzc3dvcmRJbnB1dCB9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkRmllbGQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0NvbXBvbmVudHMvUGFzc3dvcmRGaWVsZC5qc3giLCIvLyBTZXNzaW9uRHJvcGRvd24gLT4gUmVxdWlyZWQgYnkgQ29tcG9uZW50cy9Vc2VyUGFuZWxGb3JtXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRGlzcGxheXMgc2Vzc2lvbiByb3dzIGFzIGEgZHJvcGRvd24gdG8gaGFuZGxlXG4vLyBzZXNzaW9uIHN3aXRjaGluZy5cblxuaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcblxuaW1wb3J0IFNlc3Npb25Sb3cgZnJvbSAnLi9TZXNzaW9uUm93JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXNzaW9uRHJvcGRvd24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBTb3J0IGJ5IGFjdGl2ZSwgdGhlbiBhbHBoYWJldGljYWwuXG4gICAgLy8gRG9pbmcgdGhpcyByZXF1aXJlcyB1c2luZyBzb3J0IGluIHJldmVyc2UuXG4gICAgbGV0IHJvd3MgPSAoXG4gICAgICB3aW5kb3cubGlnaHRkbS5zZXNzaW9uc1xuICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuIGEubmFtZS50b1VwcGVyQ2FzZSgpID4gYi5uYW1lLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuIChiLmtleS50b0xvd2VyQ2FzZSgpID09PSB0aGlzLnByb3BzLmFjdGl2ZVNlc3Npb24ua2V5LnRvTG93ZXJDYXNlKCkpID8gMSA6IC0xO1xuICAgICAgfSlcbiAgICAgIC5tYXAoKHNlc3Npb24pID0+IChcbiAgICAgICAgPFNlc3Npb25Sb3dcbiAgICAgICAgICBhY3RpdmVTZXNzaW9uPXsgdGhpcy5wcm9wcy5hY3RpdmVTZXNzaW9uIH1cbiAgICAgICAgICBzZXNzaW9uPXsgc2Vzc2lvbiB9XG4gICAgICAgICAgaGFuZGxlRHJvcGRvd25DbGljaz17IHRoaXMucHJvcHMuaGFuZGxlRHJvcGRvd25DbGljayB9XG4gICAgICAgICAgaGFuZGxlRHJvcGRvd25MZWF2ZT17IHRoaXMucHJvcHMuaGFuZGxlRHJvcGRvd25MZWF2ZSB9XG4gICAgICAgICAgc2V0QWN0aXZlU2Vzc2lvbj17IHRoaXMucHJvcHMuc2V0QWN0aXZlU2Vzc2lvbiB9XG4gICAgICAgIC8+XG4gICAgICApKVxuICAgICk7XG5cbiAgICBsZXQgY2xhc3NlcyA9IFsnZHJvcGRvd24nLCAndXNlci1zZXNzaW9uJ107XG5cbiAgICBpZiAodGhpcy5wcm9wcy5kcm9wZG93bkFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzLmpvaW4oJyAnKSB9IG9uTW91c2VMZWF2ZT17IHRoaXMucHJvcHMuaGFuZGxlRHJvcGRvd25MZWF2ZSB9PlxuICAgICAgICB7IHJvd3MgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Db21wb25lbnRzL1Nlc3Npb25Ecm9wZG93bi5qc3giLCIvLyBTZXNzaW9uUm93IC0+IFJlcXVpcmVkIGJ5IENvbXBvbmVudHMvU2Vzc2lvbkRyb3Bkb3duXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSnVzdCBhIHJvdy5cblxuaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XG5cblxuY29uc3QgU2Vzc2lvblJvdyA9IChwcm9wcykgPT4ge1xuICBsZXQgY2xhc3NlcyA9IFtcImRyb3Bkb3duLWl0ZW1cIl07XG4gIGxldCBldmVudEhhbmRsZXIgPSBwcm9wcy5zZXRBY3RpdmVTZXNzaW9uLmJpbmQodGhpcywgcHJvcHMuc2Vzc2lvbi5rZXkpO1xuXG4gIGlmIChwcm9wcy5zZXNzaW9uLmtleSA9PT0gcHJvcHMuYWN0aXZlU2Vzc2lvbi5rZXkpIHtcbiAgICBldmVudEhhbmRsZXIgPSBwcm9wcy5oYW5kbGVEcm9wZG93bkNsaWNrO1xuICAgIGNsYXNzZXMucHVzaChcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzLmpvaW4oJyAnKSB9IGtleT17IHByb3BzLnNlc3Npb24ua2V5IH0gb25DbGljaz17IGV2ZW50SGFuZGxlciB9PlxuICAgICAgeyBwcm9wcy5zZXNzaW9uLm5hbWUgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBTZXNzaW9uUm93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Db21wb25lbnRzL1Nlc3Npb25Sb3cuanN4IiwiLy8gVXNlclBhbmVsRm9ybSAtPiBSZXF1aXJlZCBieSBDb21wb25lbnRzL1VzZXJQYW5lbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoZSBmb3JtIGRpc3BsYXllZCB3aXRoaW4gdGhlIFVzZXIgUGFuZWwgdG8gaGFuZGxlXG4vLyB1c2VyIGlucHV0IGZvciB0aGUgYXV0aGVudGljYXRpb24gcHJvY2Vzcy5cblxuaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XG5cbmltcG9ydCBTZXNzaW9uRHJvcGRvd24gZnJvbSAnLi9TZXNzaW9uRHJvcGRvd24nO1xuaW1wb3J0IFBhc3N3b3JkRmllbGQgZnJvbSAnLi9QYXNzd29yZEZpZWxkJztcblxuXG5leHBvcnQgY29uc3QgVXNlclBhbmVsRm9ybSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxmb3JtIGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIiBvblN1Ym1pdD17IHByb3BzLmhhbmRsZUxvZ2luU3VibWl0IH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItdXNlcm5hbWVcIj57IHByb3BzLmFjdGl2ZVVzZXIuZGlzcGxheV9uYW1lIH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wYXNzd29yZC1jb250YWluZXJcIj5cbiAgICAgICAgPFBhc3N3b3JkRmllbGRcbiAgICAgICAgICBwYXNzd29yZD17IHByb3BzLnBhc3N3b3JkIH1cbiAgICAgICAgICBwYXNzd29yZEZhaWxlZD17IHByb3BzLnBhc3N3b3JkRmFpbGVkIH1cbiAgICAgICAgICBoYW5kbGVQYXNzd29yZElucHV0PXsgcHJvcHMuaGFuZGxlUGFzc3dvcmRJbnB1dCB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LXJvdy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICA8U2Vzc2lvbkRyb3Bkb3duXG4gICAgICAgICAgICAgIGFjdGl2ZVNlc3Npb249eyBwcm9wcy5hY3RpdmVTZXNzaW9uIH1cbiAgICAgICAgICAgICAgZHJvcGRvd25BY3RpdmU9eyBwcm9wcy5kcm9wZG93bkFjdGl2ZSB9XG4gICAgICAgICAgICAgIGhhbmRsZURyb3Bkb3duQ2xpY2s9eyBwcm9wcy5oYW5kbGVEcm9wZG93bkNsaWNrIH1cbiAgICAgICAgICAgICAgaGFuZGxlRHJvcGRvd25MZWF2ZT17IHByb3BzLmhhbmRsZURyb3Bkb3duTGVhdmUgfVxuICAgICAgICAgICAgICBzZXRBY3RpdmVTZXNzaW9uPXsgcHJvcHMuc2V0QWN0aXZlU2Vzc2lvbiB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHT1wiIGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b25cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQYW5lbEZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0NvbXBvbmVudHMvVXNlclBhbmVsRm9ybS5qc3giLCIvLyBVc2VyU3dpdGNoZXIgLT4gUmVxdWlyZWQgYnkgQ29tcG9uZW50cy9Vc2VyUGFuZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBIYW5kbGVzIChwb29ybHkpIHRoZSB0YXNrIG9mIHN3aXRjaGluZyBiZXR3ZWVuXG4vLyBtdWx0aXBsZSB1c2VycyBvbiB0aGUgc2FtZSBzeXN0ZW0uXG5cbmltcG9ydCBJbmZlcm5vIGZyb20gJ2luZmVybm8nO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XG5cbmNvbnN0IEZBREVfRFVSQVRJT04gPSAyMDA7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgXCJmYWRlT3V0XCI6IGZhbHNlLFxuICAgICAgXCJzZWxlY3RlZFVzZXJcIjogdGhpcy5wcm9wcy5hY3RpdmVVc2VyLFxuICAgICAgXCJzZWxlY3RlZFVzZXJJbmRleFwiOiB3aW5kb3cubGlnaHRkbS51c2Vycy5pbmRleE9mKHRoaXMucHJvcHMuYWN0aXZlVXNlcilcbiAgICB9O1xuICB9XG5cblxuICBoYW5kbGVCYWNrQnV0dG9uKGV2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5zZXRBY3RpdmVVc2VyKHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2VyKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJmYWRlT3V0XCI6IHRydWVcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFwiZmFkZU91dFwiOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfSwgRkFERV9EVVJBVElPTik7XG4gIH1cblxuXG4gIGhhbmRsZVVzZXJDbGljayhpbmRleCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJzZWxlY3RlZFVzZXJcIjogd2luZG93LmxpZ2h0ZG0udXNlcnNbaW5kZXhdLFxuICAgICAgXCJzZWxlY3RlZFVzZXJJbmRleFwiOiBpbmRleFxuICAgIH0pO1xuICB9XG5cblxuICBnZW5lcmF0ZVVzZXJMaXN0KCkge1xuICAgIGxldCBhY3RpdmVJbmRleCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2VySW5kZXg7XG5cbiAgICBsZXQgYXZhdGFycyA9IHdpbmRvdy5saWdodGRtLnVzZXJzLm1hcCgodXNlciwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBjbGFzc2VzID0gWydhdmF0YXItY29udGFpbmVyJ107XG5cbiAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdhY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSBhY3RpdmVJbmRleCAtIDEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdwcmV2aW91cycpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5kZXggPT09IGFjdGl2ZUluZGV4ICsgMSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goJ25leHQnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17IGNsYXNzZXMuam9pbignICcpIH0gb25DbGljaz17IHRoaXMuaGFuZGxlVXNlckNsaWNrLmJpbmQodGhpcywgaW5kZXgpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItbWFza1wiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInVzZXItYXZhdGFyXCIgc3JjPXsgdXNlci5pbWFnZSB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1uYW1lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJuYW1lXCI+eyB1c2VyLmRpc3BsYXlfbmFtZSB9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlYWwtbmFtZVwiPnsgdXNlci5yZWFsX25hbWUgfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIFZlcnkgaGFja3kuIEFkZCBhbiBleHRyYSBjb3B5IG9mIHRoZSBsYXN0IGVsZW1lbnQgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdFxuICAgIC8vIGlmIHRoZSBmaXJzdCBlbGVtZW50IGluIHRoZSBsaXN0IGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IDApIHtcbiAgICAgIGxldCB1c2VyID0gd2luZG93LmxpZ2h0ZG0udXNlcnNbd2luZG93LmxpZ2h0ZG0udXNlcnMubGVuZ3RoIC0gMV07XG4gICAgICBhdmF0YXJzLnNwbGljZSgwLCAwLFxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdhdmF0YXItY29udGFpbmVyIHByZXZpb3VzJyBvbkNsaWNrPXsgdGhpcy5oYW5kbGVVc2VyQ2xpY2suYmluZCh0aGlzLCB3aW5kb3cubGlnaHRkbS51c2Vycy5sZW5ndGggLSAxKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLWJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLW1hc2tcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1c2VyLWF2YXRhclwiIHNyYz17IHVzZXIuaW1hZ2UgfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItbmFtZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPnsgdXNlci5kaXNwbGF5X25hbWUgfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFsLW5hbWVcIj57IHVzZXIucmVhbF9uYW1lIH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVmVyeSBoYWNreS4gQWRkIGFuIGV4dHJhIGNvcHkgb2YgdGhlIGZpcnN0IGVsZW1lbnQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgIC8vIGlmIHRoZSBsYXN0IGVsZW1lbnQgaW4gdGhlIGxpc3QgaXMgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgIGlmIChhY3RpdmVJbmRleCA9PT0gd2luZG93LmxpZ2h0ZG0udXNlcnMubGVuZ3RoIC0gMSkge1xuICAgICAgbGV0IHVzZXIgPSB3aW5kb3cubGlnaHRkbS51c2Vyc1swXTtcbiAgICAgIGF2YXRhcnMucHVzaChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nYXZhdGFyLWNvbnRhaW5lciBuZXh0JyBvbkNsaWNrPXsgdGhpcy5oYW5kbGVVc2VyQ2xpY2suYmluZCh0aGlzLCAwKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLWJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLW1hc2tcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1c2VyLWF2YXRhclwiIHNyYz17IHVzZXIuaW1hZ2UgfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItbmFtZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPnsgdXNlci5kaXNwbGF5X25hbWUgfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFsLW5hbWVcIj57IHVzZXIucmVhbF9uYW1lIH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJhdmF0YXItc2xpZGVyXCI+XG4gICAgICAgIHsgYXZhdGFycyB9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2xhc3NlcyA9IFsnbG9naW4tcGFuZWwtc3dpdGNoZXInXTtcblxuICAgIGxldCB1c2VyTGlzdCA9IHRoaXMuZ2VuZXJhdGVVc2VyTGlzdCgpO1xuICAgIGxldCB1c2VyQ291bnQgPSB3aW5kb3cubGlnaHRkbS51c2Vycy5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIGNsYXNzZXMucHVzaChcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZmFkZU91dCA9PT0gdHJ1ZSkge1xuICAgICAgY2xhc3Nlcy5wdXNoKFwiZmFkZW91dFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzLmpvaW4oJyAnKSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlVzZXIgPGVtPnsgdGhpcy5zdGF0ZS5zZWxlY3RlZFVzZXJJbmRleCArIDEgfTwvZW0+IG9mIDxlbT57IHVzZXJDb3VudCB9PC9lbT48L2Rpdj5cbiAgICAgICAgeyB1c2VyTGlzdCB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCIgb25DbGljaz17IHRoaXMuaGFuZGxlQmFja0J1dHRvbi5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+QkFDSzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvQ29tcG9uZW50cy9Vc2VyU3dpdGNoZXIuanN4IiwiLy8gV2FsbHBhcGVyU3dpdGNoZXIgLT4gUmVxdWlyZWQgYnkgQ29tcG9uZW50cy9Db21tYW5kUGFuZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZXJ2ZXMgdG8gaGFuZGxlIHdhbGxwYXBlciBzd2l0Y2hpbmcgdGhyb3VnaCBET00gbWFuaXB1bGF0aW9uLlxuXG5pbXBvcnQgSW5mZXJubyBmcm9tICdpbmZlcm5vJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnaW5mZXJuby1jb21wb25lbnQnO1xuXG5pbXBvcnQgKiBhcyBXYWxscGFwZXJPcGVyYXRpb25zIGZyb20gXCIuLi9Mb2dpYy9XYWxscGFwZXJPcGVyYXRpb25zXCI7XG5pbXBvcnQgKiBhcyBTZXR0aW5ncyBmcm9tIFwiLi4vTG9naWMvU2V0dGluZ3NcIjtcblxuY29uc3QgRkFERU9VVF9USU1FID0gNjAwO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGxwYXBlclN3aXRjaGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgd2FsbHBhcGVyRGlyZWN0b3J5ID0gV2FsbHBhcGVyT3BlcmF0aW9ucy5nZXRXYWxscGFwZXJEaXJlY3RvcnkoKTtcbiAgICBsZXQgd2FsbHBhcGVycyA9IFdhbGxwYXBlck9wZXJhdGlvbnMuZ2V0V2FsbHBhcGVycyh3YWxscGFwZXJEaXJlY3RvcnkpO1xuXG4gICAgdGhpcy5jeWNsZXJCYWNrZ3JvdW5kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY3ljbGVyRm9yZWdyb3VuZCA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBcImRpcmVjdG9yeVwiOiB3YWxscGFwZXJEaXJlY3RvcnksXG4gICAgICBcIndhbGxwYXBlcnNcIjogd2FsbHBhcGVycyxcbiAgICAgIFwic2VsZWN0ZWRXYWxscGFwZXJcIjogdW5kZWZpbmVkLFxuICAgICAgXCJzYXZlZFdhbGxwYXBlclwiOiB1bmRlZmluZWQsXG4gICAgICBcInN3aXRjaGVyXCI6IHtcbiAgICAgICAgXCJhY3RpdmVcIjogZmFsc2UsXG4gICAgICAgIFwiY3VycmVudGx5RmFkaW5nXCI6IGZhbHNlLFxuICAgICAgICBcImluZGV4XCI6IDBcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgLy8gU2V0IGJhY2tncm91bmQgd2FsbHBhcGVyXG4gICAgbGV0IGRpcmVjdG9yeSA9IHRoaXMuc3RhdGUuZGlyZWN0b3J5O1xuICAgIGxldCBpbWFnZSA9IFNldHRpbmdzLnJlcXVlc3RTZXR0aW5nKFwid2FsbHBhcGVyXCIsIFwic3BhY2UtMS5qcGdcIik7XG4gICAgbGV0IGN5Y2xlckJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2FsbHBhcGVyLWJhY2tncm91bmQnKVswXTtcbiAgICBsZXQgY3ljbGVyRm9yZWdyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53YWxscGFwZXItZm9yZWdyb3VuZCcpWzBdO1xuXG4gICAgY3ljbGVyRm9yZWdyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgnJHtkaXJlY3Rvcnl9JHtpbWFnZX0nKWA7XG4gICAgY3ljbGVyRm9yZWdyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJzYXZlZFdhbGxwYXBlclwiOiBpbWFnZSxcbiAgICAgIFwiY3ljbGVyQmFja2dyb3VuZFwiOiBjeWNsZXJCYWNrZ3JvdW5kLFxuICAgICAgXCJjeWNsZXJGb3JlZ3JvdW5kXCI6IGN5Y2xlckZvcmVncm91bmRcbiAgICB9KTtcbiAgfVxuXG5cbiAgYWNjZXB0V2FsbHBhcGVyKCkge1xuICAgIGxldCBzZWxlY3RlZFdhbGxwYXBlciA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRXYWxscGFwZXI7XG4gICAgbGV0IHN3aXRjaGVyID0gdGhpcy5zdGF0ZS5zd2l0Y2hlcjtcblxuICAgIC8vIER1ZSBkaWxpZ2VuY2UuXG4gICAgU2V0dGluZ3Muc2F2ZVNldHRpbmcoXCJ3YWxscGFwZXJcIiwgc2VsZWN0ZWRXYWxscGFwZXIpO1xuICAgIHdpbmRvdy5ub3RpZmljYXRpb25zLmdlbmVyYXRlKFwiVGhpcyB3YWxscGFwZXIgaGFzIGJlZW4gc2F2ZWQgYXMgeW91ciBkZWZhdWx0IGJhY2tncm91bmQuXCIsICdzdWNjZXNzJyk7XG5cbiAgICAvLyBSZXNldCBzd2l0Y2hlciBzdGF0ZVxuICAgIHN3aXRjaGVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHN3aXRjaGVyLmluZGV4ID0gMDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJzZWxlY3RlZFdhbGxwYXBlclwiOiBzZWxlY3RlZFdhbGxwYXBlcixcbiAgICAgIFwic2F2ZWRXYWxscGFwZXJcIjogc2VsZWN0ZWRXYWxscGFwZXIsXG4gICAgICBcInN3aXRjaGVyXCI6IHN3aXRjaGVyXG4gICAgfSk7XG4gIH1cblxuXG4gIGN5Y2xlV2FsbHBhcGVyKCkge1xuICAgIC8vIFByZXZlbnQgYW5pbWF0aW9uIHRyYW5zaXRpb25zIHN0YWNraW5nIGFuZCBjYXVzaW5nIGlzc3Vlcy5cbiAgICBpZiAodGhpcy5zdGF0ZS5zd2l0Y2hlci5jdXJyZW50bHlGYWRpbmcgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgd2FsbHBhcGVycyA9IHRoaXMuc3RhdGUud2FsbHBhcGVycztcbiAgICBsZXQgc3dpdGNoZXIgPSB0aGlzLnN0YXRlLnN3aXRjaGVyO1xuICAgIGxldCBpbmRleCA9IChzd2l0Y2hlci5pbmRleCArIHdhbGxwYXBlcnMubGVuZ3RoICsgMSkgJSB3YWxscGFwZXJzLmxlbmd0aDtcbiAgICBsZXQgbmV3V2FsbHBhcGVyID0gd2FsbHBhcGVyc1tpbmRleF07XG5cbiAgICB0aGlzLnNldFdhbGxwYXBlcihuZXdXYWxscGFwZXIpO1xuXG4gICAgc3dpdGNoZXIuaW5kZXggPSBpbmRleDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJzd2l0Y2hlclwiOiBzd2l0Y2hlclxuICAgIH0pO1xuICB9XG5cblxuICBoYW5kbGVTd2l0Y2hlckFjdGl2YXRpb24oKSB7XG4gICAgbGV0IHN3aXRjaGVyID0gdGhpcy5zdGF0ZS5zd2l0Y2hlcjtcbiAgICBzd2l0Y2hlci5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuY3ljbGVXYWxscGFwZXIoKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJzd2l0Y2hlclwiOiBzd2l0Y2hlclxuICAgIH0pO1xuICB9XG5cblxuICByZWplY3RXYWxscGFwZXIoKSB7XG4gICAgbGV0IHNhdmVkV2FsbHBhcGVyID0gdGhpcy5zdGF0ZS5zYXZlZFdhbGxwYXBlcjtcbiAgICBsZXQgc3dpdGNoZXIgPSB0aGlzLnN0YXRlLnN3aXRjaGVyO1xuXG4gICAgLy8gUmVzZXQgc3dpdGNoZXIgc3RhdGVcbiAgICBzd2l0Y2hlci5hY3RpdmUgPSBmYWxzZTtcbiAgICBzd2l0Y2hlci5pbmRleCA9IDA7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFwic3dpdGNoZXJcIjogc3dpdGNoZXJcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0V2FsbHBhcGVyKHNhdmVkV2FsbHBhcGVyKTtcblxuICAgIHdpbmRvdy5ub3RpZmljYXRpb25zLmdlbmVyYXRlKFwiV2FsbHBhcGVyIHJlc2V0IHRvIGRlZmF1bHQsIG5vIGNoYW5nZXMgc2F2ZWQuXCIpO1xuICB9XG5cblxuICBzZXRXYWxscGFwZXIobmV3V2FsbHBhcGVyKSB7XG4gICAgbGV0IHN3aXRjaGVyID0gdGhpcy5zdGF0ZS5zd2l0Y2hlcjtcblxuICAgIC8vIEZhZGVvdXQgZm9yZWdyb3VuZCB3YWxscGFwZXIgdG8gbmV3IHdhbGxwYXBlclxuICAgIGxldCBkaXJlY3RvcnkgPSB0aGlzLnN0YXRlLmRpcmVjdG9yeTtcbiAgICB0aGlzLmN5Y2xlckJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJyR7ZGlyZWN0b3J5fSR7bmV3V2FsbHBhcGVyfScpYDtcbiAgICB0aGlzLmN5Y2xlckJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgIHRoaXMuY3ljbGVyRm9yZWdyb3VuZC5jbGFzc05hbWUgKz0gXCIgZmFkZW91dFwiO1xuXG4gICAgc3dpdGNoZXIuY3VycmVudGx5RmFkaW5nID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gQ3ljbGUgbmV3IHdhbGxwYXBlciBiYWNrIHRvIHRoZSBmcm9udCwgbWFrZSBpdCB2aXNpYmxlIGFnYWluLlxuICAgICAgdGhpcy5jeWNsZXJGb3JlZ3JvdW5kLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke2RpcmVjdG9yeX0ke25ld1dhbGxwYXBlcn0nKWA7XG4gICAgICB0aGlzLmN5Y2xlckZvcmVncm91bmQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgICAgdGhpcy5jeWNsZXJGb3JlZ3JvdW5kLmNsYXNzTmFtZSA9IHRoaXMuc3RhdGUuY3ljbGVyRm9yZWdyb3VuZC5jbGFzc05hbWUucmVwbGFjZShcIiBmYWRlb3V0XCIsIFwiXCIpO1xuXG4gICAgICBsZXQgc3dpdGNoZXIgPSB0aGlzLnN0YXRlLnN3aXRjaGVyO1xuICAgICAgc3dpdGNoZXIuY3VycmVudGx5RmFkaW5nID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBcInNlbGVjdGVkV2FsbHBhcGVyXCI6IG5ld1dhbGxwYXBlcixcbiAgICAgICAgXCJzd2l0Y2hlclwiOiBzd2l0Y2hlclxuICAgICAgfSk7XG4gICAgfSwgRkFERU9VVF9USU1FKTtcbiAgfVxuXG5cbiAgZ2VuZXJhdGVPcHRpb25zKCkge1xuICAgIGxldCBjbGFzc2VzID0gWydvcHRpb25zJ107XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zd2l0Y2hlci5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIGNsYXNzZXMucHVzaChcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J29wdGlvbnMtd3JhcHBlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3Nlcy5qb2luKCcgJykgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1yZWplY3RcIiBvbkNsaWNrPXsgdGhpcy5yZWplY3RXYWxscGFwZXIuYmluZCh0aGlzKSB9ID7inJU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1hY2NlcHRcIiBvbkNsaWNrPXsgdGhpcy5hY2NlcHRXYWxscGFwZXIuYmluZCh0aGlzKSB9ID7inJM8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLmdlbmVyYXRlT3B0aW9ucygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzdHJvLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXN0cm8tbG9nb1wiIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZVN3aXRjaGVyQWN0aXZhdGlvbi5iaW5kKHRoaXMpIH0+PC9kaXY+XG4gICAgICAgIHsgb3B0aW9ucyB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0NvbXBvbmVudHMvV2FsbHBhcGVyU3dpdGNoZXIuanN4IiwiLy8gV2FsbHBhcGVyT3BlcmF0aW9ucyAtPiBSZXF1aXJlZCBieSBDb21wb25lbnRzL1dhbGxwYXBlclN3aXRjaGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTGlnaHRETSByZWxhdGVkIFdhbGxwYXBlciBjb25maWcgLyBmZXRjaGluZy5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdhbGxwYXBlckRpcmVjdG9yeSgpIHtcbiAgLy8gUmV0dXJuIHRoZSB0ZXN0IGZvbGRlciB3aGVuIGRlYnVnZ2luZy5cbiAgaWYgKHdpbmRvdy5kZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBcInNyYy90ZXN0L3dhbGxwYXBlcnMvXCI7XG4gIH1cblxuICBsZXQgd2FsbHBhcGVyc0RpcmVjdG9yeSA9IHdpbmRvdy5jb25maWcuZ2V0X3N0cihcImJyYW5kaW5nXCIsIFwiYmFja2dyb3VuZF9pbWFnZXNcIik7XG5cbiAgLy8gRG8gTk9UIGFsbG93IHRoZSBkZWZhdWx0IHdhbGxwYXBlciBkaXJlY3RvcnkgdG8gc2V0LCBhcyB0aGlzIHdpbGwgcHJldmVudCB0aGUgZGVmYXVsdCBwcm92aWRlZCBiYWNrZ3JvdW5kcyBmcm9tXG4gIC8vIGJlaW5nIHVzZWQgMTAwJSBvZiB0aGUgdGltZSBpbiBhIHN0b2NrIGluc3RhbGwuXG4gIGlmICh3YWxscGFwZXJzRGlyZWN0b3J5ID09IFwiL3Vzci9zaGFyZS9iYWNrZ3JvdW5kc1wiIHx8IHdhbGxwYXBlcnNEaXJlY3RvcnkgPT0gXCIvdXNyL3NoYXJlL2JhY2tncm91bmRzL1wiKSB7XG4gICAgd2FsbHBhcGVyc0RpcmVjdG9yeSA9IFwiL3Vzci9zaGFyZS9saWdodGRtLXdlYmtpdC90aGVtZXMvbGlnaHRkbS13ZWJraXQtdGhlbWUtYWV0aGVyL3NyYy9pbWcvd2FsbHBhcGVycy9cIjtcbiAgfVxuXG4gIHJldHVybiB3YWxscGFwZXJzRGlyZWN0b3J5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2FsbHBhcGVycyhkaXJlY3RvcnkpIHtcbiAgLy8gSWYgd2UncmUgaW4gdGVzdCBtb2RlLCB3ZSBzdGljayB0byBhIHN0YXRpYyByb3RhdGlvbiBvZiB0aHJlZSBkZWZhdWx0IHdhbGxwYXBlcnMuXG4gIC8vIEluIHByb2R1Y3Rpb24sIGl0IGlzIHBvc3NpYmxlIHRoYXQgYSB1c2VyIHdpbGwgY2hhbmdlIHdoYXQgd2FsbHBhcGVycyBhcmUgYXZhaWxhYmxlLlxuICBpZiAod2luZG93LmRlYnVnID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIFsnYm9rby5qcGcnLCAnbW91bnRhaW5zLTIucG5nJywgJ3NwYWNlLTEuanBnJ107XG4gIH1cblxuICBsZXQgd2FsbHBhcGVycztcblxuICB3YWxscGFwZXJzID0gd2luZG93LmdyZWV0ZXJ1dGlsLmRpcmxpc3QoZGlyZWN0b3J5KTtcbiAgd2FsbHBhcGVycyA9IHdhbGxwYXBlcnMubWFwKChlLCBpLCBhKSA9PiBlLnNwbGl0KFwiL1wiKS5wb3AoKSk7XG5cbiAgcmV0dXJuIHdhbGxwYXBlcnM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0xvZ2ljL1dhbGxwYXBlck9wZXJhdGlvbnMuanMiLCJleHBvcnQgY29uc3QgcGFkWmVyb2VzID0gKGkpID0+IHtcbiAgcmV0dXJuIChpIDwgMTApID8gXCIwXCIgKyBpIDogaTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L1V0aWxzL1V0aWxzLmpzIiwiaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi9VdGlscy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBDb21tYW5kUGFuZWwgZnJvbSAnLi9Db21wb25lbnRzL0NvbW1hbmRQYW5lbCc7XG5pbXBvcnQgRGF0ZURpc3BsYXkgZnJvbSAnLi9Db21wb25lbnRzL0RhdGVEaXNwbGF5JztcbmltcG9ydCBVc2VyUGFuZWwgZnJvbSAnLi9Db21wb25lbnRzL1VzZXJQYW5lbCc7XG5cbmltcG9ydCB7IGdldERlZmF1bHRTdGF0ZSwgUHJpbWFyeVJlZHVjZXIgfSBmcm9tICcuL1JlZHVjZXJzL1ByaW1hcnlSZWR1Y2VyJztcbmltcG9ydCB7IGFkZEFkZGl0aW9uYWxTZXR0aW5ncyB9IGZyb20gJy4vUmVkdWNlcnMvU2V0dGluZ3NSZWR1Y2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgbGV0IGluaXRpYWxTdGF0ZSA9IGdldERlZmF1bHRTdGF0ZSgpO1xuICBpbml0aWFsU3RhdGUgPSBhZGRBZGRpdGlvbmFsU2V0dGluZ3MoaW5pdGlhbFN0YXRlKTtcblxuICBsZXQgc3RvcmUgPSBjcmVhdGVTdG9yZShQcmltYXJ5UmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICBJbmZlcm5vLnJlbmRlcig8Q29tbWFuZFBhbmVsIHN0b3JlPXsgc3RvcmUgfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21tYW5kLXBhbmVsXCIpKTtcbiAgSW5mZXJuby5yZW5kZXIoPFVzZXJQYW5lbCBzdG9yZT17IHN0b3JlIH0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1wYW5lbFwiKSk7XG4gIEluZmVybm8ucmVuZGVyKDxEYXRlRGlzcGxheSBzdG9yZT17IHN0b3JlIH0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZS1kaXNwbGF5XCIpKTtcbn1cblxud2luZG93Lm9ubG9hZCA9IChlKSA9PiB7XG4gIC8vIEFkZCBub3RpZmljYXRpb25zIHRvIHRoZSBnbG9iYWwgc2NvcGUgZm9yIGVycm9yIGhhbmRsaW5nXG4gIHdpbmRvdy5ub3RpZmljYXRpb25zID0gbmV3IE5vdGlmaWNhdGlvbnMoKTtcblxuICBNYWluKCk7XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L01haW4uanN4IiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC1lcy9fU3ltYm9sLmpzIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgZ2V0UHJvdG90eXBlIGZyb20gJy4vX2dldFByb3RvdHlwZS5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc1BsYWluT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gtZXMvaXNQbGFpbk9iamVjdC5qcyIsIi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICB2YXIgbGFzdCA9IGZ1bmNzW2Z1bmNzLmxlbmd0aCAtIDFdO1xuICB2YXIgcmVzdCA9IGZ1bmNzLnNsaWNlKDAsIC0xKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVzdC5yZWR1Y2VSaWdodChmdW5jdGlvbiAoY29tcG9zZWQsIGYpIHtcbiAgICAgIHJldHVybiBmKGNvbXBvc2VkKTtcbiAgICB9LCBsYXN0LmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yZWR1eC9lcy9jb21wb3NlLmpzIiwiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0ICQkb2JzZXJ2YWJsZSBmcm9tICdzeW1ib2wtb2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG5leHBvcnQgdmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiAnQEByZWR1eC9JTklUJ1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbmhhbmNlciBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJvcGVyYWJpbGl0eSBwb2ludCBmb3Igb2JzZXJ2YWJsZS9yZWFjdGl2ZSBsaWJyYXJpZXMuXG4gICAqIEByZXR1cm5zIHtvYnNlcnZhYmxlfSBBIG1pbmltYWwgb2JzZXJ2YWJsZSBvZiBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1vYnNlcnZhYmxlXG4gICAqL1xuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHsgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlIH07XG4gICAgICB9XG4gICAgfSwgX3JlZlskJG9ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfVxuXG4gIC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyWyQkb2JzZXJ2YWJsZV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlZHV4L2VzL2NyZWF0ZVN0b3JlLmpzIiwiLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlZHV4L2VzL3V0aWxzL3dhcm5pbmcuanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwiaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4vY3JlYXRlU3RvcmUnO1xuaW1wb3J0IGNvbWJpbmVSZWR1Y2VycyBmcm9tICcuL2NvbWJpbmVSZWR1Y2Vycyc7XG5pbXBvcnQgYmluZEFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYmluZEFjdGlvbkNyZWF0b3JzJztcbmltcG9ydCBhcHBseU1pZGRsZXdhcmUgZnJvbSAnLi9hcHBseU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAnLi9jb21wb3NlJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4vdXRpbHMvd2FybmluZyc7XG5cbi8qXG4qIFRoaXMgaXMgYSBkdW1teSBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgZnVuY3Rpb24gbmFtZSBoYXMgYmVlbiBhbHRlcmVkIGJ5IG1pbmlmaWNhdGlvbi5cbiogSWYgdGhlIGZ1bmN0aW9uIGhhcyBiZWVuIG1pbmlmaWVkIGFuZCBOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLCB3YXJuIHRoZSB1c2VyLlxuKi9cbmZ1bmN0aW9uIGlzQ3J1c2hlZCgpIHt9XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBpc0NydXNoZWQubmFtZSA9PT0gJ3N0cmluZycgJiYgaXNDcnVzaGVkLm5hbWUgIT09ICdpc0NydXNoZWQnKSB7XG4gIHdhcm5pbmcoJ1lvdSBhcmUgY3VycmVudGx5IHVzaW5nIG1pbmlmaWVkIGNvZGUgb3V0c2lkZSBvZiBOT0RFX0VOViA9PT0gXFwncHJvZHVjdGlvblxcJy4gJyArICdUaGlzIG1lYW5zIHRoYXQgeW91IGFyZSBydW5uaW5nIGEgc2xvd2VyIGRldmVsb3BtZW50IGJ1aWxkIG9mIFJlZHV4LiAnICsgJ1lvdSBjYW4gdXNlIGxvb3NlLWVudmlmeSAoaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvbG9vc2UtZW52aWZ5KSBmb3IgYnJvd3NlcmlmeSAnICsgJ29yIERlZmluZVBsdWdpbiBmb3Igd2VicGFjayAoaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMDAzMDAzMSkgJyArICd0byBlbnN1cmUgeW91IGhhdmUgdGhlIGNvcnJlY3QgY29kZSBmb3IgeW91ciBwcm9kdWN0aW9uIGJ1aWxkLicpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBiaW5kQWN0aW9uQ3JlYXRvcnMsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVkdXgvZXMvaW5kZXguanMiLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5pbXBvcnQgZ2V0UmF3VGFnIGZyb20gJy4vX2dldFJhd1RhZy5qcyc7XG5pbXBvcnQgb2JqZWN0VG9TdHJpbmcgZnJvbSAnLi9fb2JqZWN0VG9TdHJpbmcuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUdldFRhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnJlZUdsb2JhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzIiwiaW1wb3J0IG92ZXJBcmcgZnJvbSAnLi9fb3ZlckFyZy5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQcm90b3R5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC1lcy9fZ2V0UHJvdG90eXBlLmpzIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhd1RhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19nZXRSYXdUYWcuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanMiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3ZlckFyZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19vdmVyQXJnLmpzIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19yb290LmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qcyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0b3JlIGVuaGFuY2VyIHRoYXQgYXBwbGllcyBtaWRkbGV3YXJlIHRvIHRoZSBkaXNwYXRjaCBtZXRob2RcbiAqIG9mIHRoZSBSZWR1eCBzdG9yZS4gVGhpcyBpcyBoYW5keSBmb3IgYSB2YXJpZXR5IG9mIHRhc2tzLCBzdWNoIGFzIGV4cHJlc3NpbmdcbiAqIGFzeW5jaHJvbm91cyBhY3Rpb25zIGluIGEgY29uY2lzZSBtYW5uZXIsIG9yIGxvZ2dpbmcgZXZlcnkgYWN0aW9uIHBheWxvYWQuXG4gKlxuICogU2VlIGByZWR1eC10aHVua2AgcGFja2FnZSBhcyBhbiBleGFtcGxlIG9mIHRoZSBSZWR1eCBtaWRkbGV3YXJlLlxuICpcbiAqIEJlY2F1c2UgbWlkZGxld2FyZSBpcyBwb3RlbnRpYWxseSBhc3luY2hyb25vdXMsIHRoaXMgc2hvdWxkIGJlIHRoZSBmaXJzdFxuICogc3RvcmUgZW5oYW5jZXIgaW4gdGhlIGNvbXBvc2l0aW9uIGNoYWluLlxuICpcbiAqIE5vdGUgdGhhdCBlYWNoIG1pZGRsZXdhcmUgd2lsbCBiZSBnaXZlbiB0aGUgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBmdW5jdGlvbnNcbiAqIGFzIG5hbWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBtaWRkbGV3YXJlcyBUaGUgbWlkZGxld2FyZSBjaGFpbiB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHN0b3JlIGVuaGFuY2VyIGFwcGx5aW5nIHRoZSBtaWRkbGV3YXJlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1pZGRsZXdhcmVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjcmVhdGVTdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpO1xuICAgICAgdmFyIF9kaXNwYXRjaCA9IHN0b3JlLmRpc3BhdGNoO1xuICAgICAgdmFyIGNoYWluID0gW107XG5cbiAgICAgIHZhciBtaWRkbGV3YXJlQVBJID0ge1xuICAgICAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUsXG4gICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gX2Rpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjaGFpbiA9IG1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbiAobWlkZGxld2FyZSkge1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKTtcbiAgICAgIH0pO1xuICAgICAgX2Rpc3BhdGNoID0gY29tcG9zZS5hcHBseSh1bmRlZmluZWQsIGNoYWluKShzdG9yZS5kaXNwYXRjaCk7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RvcmUsIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlZHV4L2VzL2FwcGx5TWlkZGxld2FyZS5qcyIsImZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCAnICsgKGFjdGlvbkNyZWF0b3JzID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdGlvbkNyZWF0b3JzKSArICcuICcgKyAnRGlkIHlvdSB3cml0ZSBcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXCIgaW5zdGVhZCBvZiBcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cIj8nKTtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWN0aW9uQ3JlYXRvcnMpO1xuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVkdXgvZXMvYmluZEFjdGlvbkNyZWF0b3JzLmpzIiwiaW1wb3J0IHsgQWN0aW9uVHlwZXMgfSBmcm9tICcuL2NyZWF0ZVN0b3JlJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4vdXRpbHMvd2FybmluZyc7XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uTmFtZSA9IGFjdGlvblR5cGUgJiYgJ1wiJyArIGFjdGlvblR5cGUudG9TdHJpbmcoKSArICdcIicgfHwgJ2FuIGFjdGlvbic7XG5cbiAgcmV0dXJuICdHaXZlbiBhY3Rpb24gJyArIGFjdGlvbk5hbWUgKyAnLCByZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQuICcgKyAnVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLic7XG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuSU5JVCA/ICdwcmVsb2FkZWRTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnIDogJ3ByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyJztcblxuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgJyArICd0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuJztcbiAgfVxuXG4gIGlmICghaXNQbGFpbk9iamVjdChpbnB1dFN0YXRlKSkge1xuICAgIHJldHVybiAnVGhlICcgKyBhcmd1bWVudE5hbWUgKyAnIGhhcyB1bmV4cGVjdGVkIHR5cGUgb2YgXCInICsge30udG9TdHJpbmcuY2FsbChpbnB1dFN0YXRlKS5tYXRjaCgvXFxzKFthLXp8QS1aXSspLylbMV0gKyAnXCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgJyArICgna2V5czogXCInICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyAnXCInKTtcbiAgfVxuXG4gIHZhciB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICFyZWR1Y2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XTtcbiAgfSk7XG5cbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcblxuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAnVW5leHBlY3RlZCAnICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyAnICcgKyAoJ1wiJyArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiIGZvdW5kIGluICcgKyBhcmd1bWVudE5hbWUgKyAnLiAnKSArICdFeHBlY3RlZCB0byBmaW5kIG9uZSBvZiB0aGUga25vd24gcmVkdWNlciBrZXlzIGluc3RlYWQ6ICcgKyAoJ1wiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTYW5pdHkocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiAnICsgJ0lmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCAnICsgJ2V4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgJyArICdub3QgYmUgdW5kZWZpbmVkLicpO1xuICAgIH1cblxuICAgIHZhciB0eXBlID0gJ0BAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05fJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogdHlwZSB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkIHdoZW4gcHJvYmVkIHdpdGggYSByYW5kb20gdHlwZS4gJyArICgnRG9uXFwndCB0cnkgdG8gaGFuZGxlICcgKyBBY3Rpb25UeXBlcy5JTklUICsgJyBvciBvdGhlciBhY3Rpb25zIGluIFwicmVkdXgvKlwiICcpICsgJ25hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlICcgKyAnY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgJyArICdpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgJyArICdhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQuJyk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2FybmluZygnTm8gcmVkdWNlciBwcm92aWRlZCBmb3Iga2V5IFwiJyArIGtleSArICdcIicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB7fTtcbiAgfVxuXG4gIHZhciBzYW5pdHlFcnJvcjtcbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2FuaXR5KGZpbmFsUmVkdWNlcnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2FuaXR5RXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKCkge1xuICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgICBpZiAoc2FuaXR5RXJyb3IpIHtcbiAgICAgIHRocm93IHNhbml0eUVycm9yO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgd2FybmluZ01lc3NhZ2UgPSBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKHN0YXRlLCBmaW5hbFJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSk7XG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgd2FybmluZyh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tpXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1trZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtrZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2Uoa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIG5leHRTdGF0ZVtrZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVkdXgvZXMvY29tYmluZVJlZHVjZXJzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9wb255ZmlsbCA9IHJlcXVpcmUoJy4vcG9ueWZpbGwnKTtcblxudmFyIF9wb255ZmlsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb255ZmlsbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIHJvb3Q7IC8qIGdsb2JhbCB3aW5kb3cgKi9cblxuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gbW9kdWxlO1xufSBlbHNlIHtcbiAgcm9vdCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG59XG5cbnZhciByZXN1bHQgPSAoMCwgX3BvbnlmaWxsMlsnZGVmYXVsdCddKShyb290KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJlc3VsdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHN5bWJvbE9ic2VydmFibGVQb255ZmlsbDtcbmZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBfU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBfU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKF9TeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBfU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRfU3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvcG9ueWZpbGwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==