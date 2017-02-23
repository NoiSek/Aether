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
    _this.cyclerPreloader = undefined;

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
      this.cyclerBackground = document.querySelectorAll('.wallpaper-background')[0];
      this.cyclerForeground = document.querySelectorAll('.wallpaper-foreground')[0];
      this.cyclerPreloader = document.querySelectorAll('.wallpaper-preload')[0];

      this.cyclerForeground.style.background = 'url(\'' + directory + image + '\')';
      this.cyclerForeground.style.backgroundSize = "cover";

      this.setState({
        "savedWallpaper": image
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

      var nextIndex = function nextIndex(index) {
        return (index + wallpapers.length + 1) % wallpapers.length;
      };

      var newIndex = nextIndex(switcher.index);
      var newWallpaper = wallpapers[newIndex];

      var preloadedIndex = nextIndex(newIndex);
      var preloadedWallpaper = wallpapers[preloadedIndex];

      this.setWallpaper(newWallpaper, preloadedWallpaper);

      switcher.index = newIndex;

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
    value: function setWallpaper(newWallpaper, preloadedWallpaper) {
      var _this2 = this;

      var switcher = this.state.switcher;

      // Fadeout foreground wallpaper to new wallpaper
      var directory = this.state.directory;
      this.cyclerBackground.style.background = 'url(\'' + directory + newWallpaper + '\')';
      this.cyclerBackground.style.backgroundSize = 'cover';
      this.cyclerForeground.className += " fadeout";

      switcher.currentlyFading = true;

      // Preload the next image
      this.cyclerPreloader.style.background = 'url(\'' + directory + preloadedWallpaper + '\')';

      setTimeout(function () {
        // Cycle new wallpaper back to the front, make it visible again.
        _this2.cyclerForeground.style.background = 'url(\'' + directory + newWallpaper + '\')';
        _this2.cyclerForeground.style.backgroundSize = 'cover';
        _this2.cyclerForeground.className = _this2.cyclerForeground.className.replace(" fadeout", "");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGNmMzk1MWZlZjhhOTk5OWJiZDIiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL34vaW5mZXJuby1zaGFyZWQvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvY29yZS9vcHRpb25zLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby1jb21wb25lbnQvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9jb3JlL1ZOb2Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vcGF0Y2hpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3JlbmRlcmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vd3JhcHBlcnMvcHJvY2Vzc0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vbW91bnRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3VubW91bnRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9SZWR1Y2Vycy9TZXR0aW5nc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3JlY3ljbGluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9jb3JlL25vcm1hbGl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Mb2dpYy9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0xvZ2ljL1N5c3RlbU9wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Db21wb25lbnRzL0NvbW1hbmRQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Db21wb25lbnRzL0RhdGVEaXNwbGF5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0NvbXBvbmVudHMvVXNlclBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L1JlZHVjZXJzL1ByaW1hcnlSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvVXRpbHMvTm90aWZpY2F0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8tY29tcG9uZW50L34vaW5mZXJuby1zaGFyZWQvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vZXZlbnRzL2RlbGVnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2V2ZW50cy9saW5rRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2h5ZHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vd3JhcHBlcnMvSW5wdXRXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9TZWxlY3RXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9UZXh0YXJlYVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Db21wb25lbnRzL0Nsb2NrLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0NvbXBvbmVudHMvUGFzc3dvcmRGaWVsZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Db21wb25lbnRzL1Nlc3Npb25Ecm9wZG93bi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2VzNi9Db21wb25lbnRzL1Nlc3Npb25Sb3cuanN4Iiwid2VicGFjazovLy8uL3NyYy9lczYvQ29tcG9uZW50cy9Vc2VyUGFuZWxGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0NvbXBvbmVudHMvVXNlclN3aXRjaGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L0NvbXBvbmVudHMvV2FsbHBhcGVyU3dpdGNoZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9lczYvTG9naWMvV2FsbHBhcGVyT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXM2L1V0aWxzL1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9lczYvTWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvZXMvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZHV4L2VzL2NyZWF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vcmVkdXgvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gtZXMvX2dldFByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC1lcy9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9lcy9hcHBseU1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9lcy9iaW5kQWN0aW9uQ3JlYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWR1eC9lcy9jb21iaW5lUmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbInRvQXJyYXkiLCJpc1N0YXRlZnVsQ29tcG9uZW50IiwiaXNTdHJpbmdPck51bWJlciIsImlzTnVsbE9yVW5kZWYiLCJpc0ludmFsaWQiLCJpc0Z1bmN0aW9uIiwiaXNBdHRyQW5FdmVudCIsImlzU3RyaW5nIiwiaXNOdW1iZXIiLCJpc051bGwiLCJpc1RydWUiLCJpc1VuZGVmaW5lZCIsImlzT2JqZWN0IiwidGhyb3dFcnJvciIsIndhcm5pbmciLCJMaWZlY3ljbGUiLCJjb3B5UHJvcHNUbyIsIk5PX09QIiwiRVJST1JfTVNHIiwiaXNCcm93c2VyIiwid2luZG93IiwiZG9jdW1lbnQiLCJjaGlsZHJlbiIsImlzQXJyYXkiLCJBcnJheSIsIm8iLCJwcm90b3R5cGUiLCJyZW5kZXIiLCJvYmoiLCJ0eXBlIiwiYXR0ciIsImxlbmd0aCIsInVuZGVmaW5lZCIsIm1lc3NhZ2UiLCJFcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwibGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJjYWxsYmFjayIsInB1c2giLCJ0cmlnZ2VyIiwiaSIsImxlbiIsImNvcHlGcm9tIiwiY29weVRvIiwicHJvcCIsImlzVW5pdGxlc3NOdW1iZXIiLCJub3JtYWxpemUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJ0ZXN0RnVuYyIsInRlc3RGbiIsIm5hbWUiLCJ0b1N0cmluZyIsImluZGV4T2YiLCJ2ZXJzaW9uIiwibGlua0V2ZW50IiwiY3JlYXRlVk5vZGUiLCJjbG9uZVZOb2RlIiwiRU1QVFlfT0JKIiwiZmluZERPTU5vZGUiLCJjcmVhdGVSZW5kZXJlciIsIm9wdGlvbnMiLCJjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlIiwicmVwbGFjZUxhc3RDaGlsZEFuZFVubW91bnQiLCJyZXBsYWNlVk5vZGUiLCJjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQiLCJzZXRUZXh0Q29udGVudCIsInVwZGF0ZVRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRPckFwcGVuZCIsImRvY3VtZW50Q3JlYXRlRWxlbWVudCIsInJlcGxhY2VXaXRoTmV3Tm9kZSIsInJlcGxhY2VDaGlsZCIsInJlbW92ZUNoaWxkIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJyZW1vdmVDaGlsZHJlbiIsImlzS2V5ZWQiLCJPYmplY3QiLCJmcmVlemUiLCJ2Tm9kZSIsIkNvbXBvbmVudCIsInByb3BzIiwiY29udGV4dCIsImlzU1ZHIiwiaW5zdGFuY2UiLCJfcGF0Y2giLCJmaW5kRE9NTm9kZUVuYWJsZWQiLCJfY29tcG9uZW50VG9ET01Ob2RlTWFwIiwiX3VubW91bnRlZCIsIl9wZW5kaW5nU2V0U3RhdGUiLCJfaXNTVkciLCJjb21wb25lbnRXaWxsTW91bnQiLCJjaGlsZENvbnRleHQiLCJnZXRDaGlsZENvbnRleHQiLCJfY2hpbGRDb250ZXh0IiwiYXNzaWduIiwiYmVmb3JlUmVuZGVyIiwiaW5wdXQiLCJzdGF0ZSIsImFmdGVyUmVuZGVyIiwiZG9tIiwiZmxhZ3MiLCJwYXJlbnRWTm9kZSIsIl9sYXN0SW5wdXQiLCJsYXN0SW5wdXQiLCJuZXh0SW5wdXQiLCJwYXJlbnREb20iLCJsaWZlY3ljbGUiLCJpc1JlY3ljbGluZyIsInNoYWxsb3dVbm1vdW50IiwiY29tcG9uZW50IiwidGV4dCIsInRleHRDb250ZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJmaXJzdENoaWxkIiwibm9kZVZhbHVlIiwibmV3Tm9kZSIsIm5leHROb2RlIiwiaW5zZXJ0QmVmb3JlIiwidGFnIiwiY3JlYXRlRWxlbWVudE5TIiwiY3JlYXRlRWxlbWVudCIsImxhc3ROb2RlIiwibmV4dERvbSIsImxhc3REb20iLCJwYXJlbnROb2RlIiwicmVjeWNsaW5nRW5hYmxlZCIsImNoaWxkIiwibGFzdENoaWxkcmVuIiwibmV4dENoaWxkcmVuIiwia2V5IiwibW9kdWxlIiwiZXhwb3J0cyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJlIiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwicnVuIiwibmV4dFRpY2siLCJhcmdzIiwiYXJndW1lbnRzIiwiSXRlbSIsImFycmF5IiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbnMiLCJub29wIiwib24iLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siLCJyb290cyIsImFmdGVyTW91bnQiLCJhZnRlclVwZGF0ZSIsImJlZm9yZVVubW91bnQiLCJub09wIiwiY29tcG9uZW50Q2FsbGJhY2tRdWV1ZSIsIk1hcCIsInVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2RlcyIsImNyZWF0ZVZvaWRWTm9kZSIsImNyZWF0ZVRleHRWTm9kZSIsImFkZFRvUXVldWUiLCJmb3JjZSIsImdldCIsInNldCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImRlbGV0ZSIsImFwcGx5U3RhdGUiLCJxdWV1ZVN0YXRlQ2hhbmdlcyIsIm5ld1N0YXRlIiwic3luYyIsInN0YXRlS2V5IiwiX3BlbmRpbmdTdGF0ZSIsIl9ibG9ja1JlbmRlciIsIl9kZWZlclNldFN0YXRlIiwicGVuZGluZ1N0YXRlIiwicHJldlN0YXRlIiwibmV4dFN0YXRlIiwiX3VwZGF0ZUNvbXBvbmVudCIsImRpZFVwZGF0ZSIsIl92Tm9kZSIsInN1YkxpZmVjeWNsZSIsIl9saWZlY3ljbGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnRUb0RPTU5vZGVNYXAiLCJyZWZzIiwiX2lnbm9yZVNldFN0YXRlIiwiX2Jsb2NrU2V0U3RhdGUiLCJfc3luY1NldFN0YXRlIiwibmV4dFByb3BzIiwibmV4dENvbnRleHQiLCJwcmV2UHJvcHMiLCJwcmV2Q29udGV4dCIsImZyb21TZXRTdGF0ZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJzaG91bGRVcGRhdGUiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJjb21wb25lbnRXaWxsVXBkYXRlIiwiaXNWTm9kZSIsImV2ZW50cyIsInJlZiIsIm5vTm9ybWFsaXNlIiwidk5vZGVUb0Nsb25lIiwiX2NoaWxkcmVuIiwibmV3Vk5vZGUiLCJ0bXBBcnJheSIsIm5ld1Byb3BzIiwibmV3Q2hpbGRyZW4iLCJwYXRjaCIsInBhdGNoRWxlbWVudCIsInBhdGNoQ29tcG9uZW50IiwicGF0Y2hUZXh0IiwicGF0Y2hWb2lkIiwicGF0Y2hOb25LZXllZENoaWxkcmVuIiwicGF0Y2hLZXllZENoaWxkcmVuIiwicGF0Y2hQcm9wIiwicGF0Y2hFdmVudHMiLCJwYXRjaEV2ZW50IiwicGF0Y2hTdHlsZSIsImxhc3RWTm9kZSIsIm5leHRWTm9kZSIsImxhc3RGbGFncyIsIm5leHRGbGFncyIsInVubW91bnRDaGlsZHJlbiIsIm5leHRUYWciLCJsYXN0VGFnIiwibGFzdFByb3BzIiwibGFzdFJlZiIsIm5leHRSZWYiLCJsYXN0RXZlbnRzIiwibmV4dEV2ZW50cyIsInBhdGNoQ2hpbGRyZW4iLCJoYXNDb250cm9sbGVkVmFsdWUiLCJsYXN0UHJvcHNPckVtcHR5IiwibmV4dFByb3BzT3JFbXB0eSIsIm5leHRWYWx1ZSIsImxhc3RWYWx1ZSIsInJlbW92ZVByb3AiLCJwYXRjaEFycmF5IiwicGF0Y2hLZXllZCIsImlzQ2xhc3MiLCJsYXN0VHlwZSIsIm5leHRUeXBlIiwibGFzdEtleSIsIm5leHRLZXkiLCJkZWZhdWx0UHJvcHMiLCJsYXN0U3RhdGUiLCJuZXh0SG9va3MiLCJuZXh0SG9va3NEZWZpbmVkIiwib25Db21wb25lbnRTaG91bGRVcGRhdGUiLCJvbkNvbXBvbmVudFdpbGxVcGRhdGUiLCJvbkNvbXBvbmVudERpZFVwZGF0ZSIsIm5leHRUZXh0IiwibGFzdENoaWxkcmVuTGVuZ3RoIiwibmV4dENoaWxkcmVuTGVuZ3RoIiwiY29tbW9uTGVuZ3RoIiwibmV4dENoaWxkIiwiYSIsImIiLCJhTGVuZ3RoIiwiYkxlbmd0aCIsImFFbmQiLCJiRW5kIiwiYVN0YXJ0IiwiYlN0YXJ0IiwiaiIsImFOb2RlIiwiYk5vZGUiLCJuZXh0UG9zIiwibm9kZSIsImFTdGFydE5vZGUiLCJiU3RhcnROb2RlIiwiYUVuZE5vZGUiLCJiRW5kTm9kZSIsIm91dGVyIiwic291cmNlcyIsIm1vdmVkIiwicG9zIiwicGF0Y2hlZCIsImtleUluZGV4Iiwic2VxIiwibGlzX2FsZ29yaXRobSIsImFyciIsInAiLCJzbGljZSIsInJlc3VsdCIsInUiLCJ2IiwiYyIsImFyckkiLCJ2YWx1ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImxhc3RIdG1sIiwiX19odG1sIiwibmV4dEh0bWwiLCJpbm5lckhUTUwiLCJucyIsInNldEF0dHJpYnV0ZU5TIiwibmFtZUxvd2VyQ2FzZSIsInRvTG93ZXJDYXNlIiwiZG9tRXZlbnQiLCJ3cmFwcGVkIiwiZXZlbnQiLCJfZGF0YSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhIiwibGFzdEF0dHJWYWx1ZSIsIm5leHRBdHRyVmFsdWUiLCJzdHlsZSIsImNzc1RleHQiLCJub2RlVHlwZSIsImdldFJvb3QiLCJyb290Iiwic2V0Um9vdCIsInJlbW92ZVJvb3QiLCJzcGxpY2UiLCJib2R5IiwiZG9jdW1lbnRCb2R5Iiwicm9vdElucHV0IiwicmVuZGVyZXIiLCJwcm9jZXNzRWxlbWVudCIsIndyYXBwZXJzIiwibW91bnRpbmciLCJjb25zdHJ1Y3REZWZhdWx0cyIsInN0cmluZyIsIm9iamVjdCIsInNwbGl0IiwieGxpbmtOUyIsInhtbE5TIiwic3ZnTlMiLCJzdHJpY3RQcm9wcyIsImJvb2xlYW5Qcm9wcyIsIm5hbWVzcGFjZXMiLCJza2lwUHJvcHMiLCJkZWxlZ2F0ZWRQcm9wcyIsIm1vdW50IiwibW91bnRUZXh0IiwibW91bnRWb2lkIiwibW91bnRFbGVtZW50IiwibW91bnRBcnJheUNoaWxkcmVuIiwibW91bnRDb21wb25lbnQiLCJtb3VudENsYXNzQ29tcG9uZW50Q2FsbGJhY2tzIiwibW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzIiwibW91bnRSZWYiLCJKU09OIiwic3RyaW5naWZ5IiwiY0RNIiwiY29tcG9uZW50RGlkTW91bnQiLCJvbkNvbXBvbmVudFdpbGxNb3VudCIsIm9uQ29tcG9uZW50RGlkTW91bnQiLCJ1bm1vdW50IiwidW5tb3VudENvbXBvbmVudCIsInVubW91bnRFbGVtZW50IiwiY2FuUmVjeWNsZSIsInVubW91bnRWb2lkT3JUZXh0IiwiYWxyZWFkeVVubW91bnRlZCIsIldlYWtNYXAiLCJoYXMiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIm9uQ29tcG9uZW50V2lsbFVubW91bnQiLCJ1bm1vdW50UmVmIiwiYWRkQWRkaXRpb25hbFNldHRpbmdzIiwiU2V0dGluZ3MiLCJkZWZhdWx0cyIsInNldHRpbmdzIiwia2V5cyIsInJlcXVlc3RTZXR0aW5nIiwicmVjeWNsZUVsZW1lbnQiLCJwb29sRWxlbWVudCIsInJlY3ljbGVDb21wb25lbnQiLCJwb29sQ29tcG9uZW50IiwiY29tcG9uZW50UG9vbHMiLCJlbGVtZW50UG9vbHMiLCJwb29scyIsInBvb2wiLCJub25LZXllZCIsImtleWVkIiwicmVjeWNsZWRWTm9kZSIsInBvcCIsImZhaWxlZCIsImhvb2tzIiwibm9uUmVjeWNsZUhvb2tzIiwibm9ybWFsaXplVk5vZGVzIiwiYXBwbHlLZXkiLCJhcHBseUtleUlmTWlzc2luZyIsImFwcGx5S2V5UHJlZml4IiwiX25vcm1hbGl6ZVZOb2RlcyIsIm5vZGVzIiwiaW5kZXgiLCJjdXJyZW50S2V5IiwibiIsIm5ld05vZGVzIiwibm9ybWFsaXplQ2hpbGRyZW4iLCJub3JtYWxpemVQcm9wcyIsIm5vcm1hbGl6ZUVsZW1lbnQiLCJoYXNQcm9wcyIsInZlcmlmeUtleXMiLCJ2Tm9kZXMiLCJrZXlWYWx1ZXMiLCJtYXAiLCJ2bm9kZSIsInNvbWUiLCJpdGVtIiwiaWR4IiwiaGFzRHVwbGljYXRlIiwic2F2ZVNldHRpbmciLCJMT0NBTFNUT1JBR0VfRU5BQkxFRCIsIlN0b3JhZ2UiLCJub3RpZmljYXRpb25zIiwiZ2VuZXJhdGUiLCJzZXR0aW5nIiwiZGVmYXVsdFNldHRpbmciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsImhhbmRsZUNvbW1hbmQiLCJmaW5kSW5pdGlhbFVzZXIiLCJmaW5kSW5pdGlhbFNlc3Npb24iLCJmaW5kU2Vzc2lvbiIsImV4ZWN1dGVDb21tYW5kIiwiYm91bmRGdW5jdGlvbiIsImNvbW1hbmQiLCJsaWdodGRtIiwiY2FuX3NodXRkb3duIiwic2h1dGRvd24iLCJjYW5faGliZXJuYXRlIiwiaGliZXJuYXRlIiwiY2FuX3Jlc3RhcnQiLCJyZXN0YXJ0IiwiY2FuX3N1c3BlbmQiLCJzdXNwZW5kIiwibG9ja19oaW50IiwidXNlcnMiLCJmaWx0ZXIiLCJ1c2VyIiwibG9nZ2VkX2luIiwic2VsZWN0X3VzZXJfaGludCIsInVzZXJuYW1lIiwidXNlclNlc3Npb24iLCJzZXNzaW9uIiwiZGVmYXVsdF9zZXNzaW9uIiwic2Vzc2lvbnMiLCJzZXNzaW9uTmFtZSIsIlN5c3RlbU9wZXJhdGlvbnMiLCJDb21tYW5kUGFuZWwiLCJkaXNhYmxlZCIsInByZXZlbnREZWZhdWx0IiwiY29tbWFuZHMiLCJlbmFibGVkQ29tbWFuZHMiLCJleHBhbmRlZCIsInNldFN0YXRlIiwicm93cyIsImNsYXNzZXMiLCJqb2luIiwiYmluZCIsImhvc3RuYW1lIiwiZ2VuZXJhdGVDb21tYW5kcyIsIkRhdGVEaXNwbGF5Iiwic2V0RGF0ZSIsImRhdGVTdHJpbmciLCJkYXlOYW1lIiwiZm9ybWF0dGVkRGF5VmFsdWUiLCJtb250aE5hbWUiLCJkYXlOYW1lcyIsIm1vbnRoTmFtZXMiLCJub3ciLCJEYXRlIiwiZGF5VmFsdWUiLCJnZXREYXRlIiwiZ2V0VVRDRGF5IiwibW9udGhWYWx1ZSIsImdldE1vbnRoIiwiZm9ybWF0dGVkRGF0ZVN0cmluZyIsImRhdGVDbGFzc2VzIiwiZ2VuZXJhdGVEYXRlU3RyaW5nIiwiaW5pdGlhbGl6ZWQiLCJGQURFX0lOX0RVUkFUSU9OIiwiRVJST1JfU0hBS0VfRFVSQVRJT04iLCJMb2dpblBhbmVsIiwic3RvcmUiLCJzdG9yZVN0YXRlIiwiZ2V0U3RhdGUiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsInNob3dfcHJvbXB0IiwicmVzcG9uZCIsInBhc3N3b3JkIiwic2hvd19tZXNzYWdlIiwiYXV0aGVudGljYXRpb25fY29tcGxldGUiLCJpc19hdXRoZW50aWNhdGVkIiwic3RhcnRfc2Vzc2lvbl9zeW5jIiwicmVqZWN0UGFzc3dvcmQiLCJhdXRvbG9naW5fdGltZXJfZXhwaXJlZCIsImRlYnVnIiwiZGlzcGxheV9uYW1lIiwiYXV0aGVudGljYXRlIiwib3RoZXJVc2VyIiwic2V0QWN0aXZlVXNlciIsInRhcmdldCIsImRpc3BhdGNoIiwiaXNCeXBhc3MiLCJoYW5kbGVTd2l0Y2hlckNsaWNrIiwibG9naW5QYW5lbENsYXNzZXMiLCJmYWRlSW4iLCJzd2l0Y2hlckFjdGl2ZSIsInN3aXRjaFVzZXJCdXR0b24iLCJnZW5lcmF0ZVN3aXRjaFVzZXJCdXR0b24iLCJpbWFnZSIsImRyb3Bkb3duQWN0aXZlIiwicGFzc3dvcmRGYWlsZWQiLCJoYW5kbGVMb2dpblN1Ym1pdCIsImhhbmRsZURyb3Bkb3duQ2xpY2siLCJoYW5kbGVEcm9wZG93bkxlYXZlIiwiaGFuZGxlUGFzc3dvcmRJbnB1dCIsInNldEFjdGl2ZVNlc3Npb24iLCJnZXREZWZhdWx0U3RhdGUiLCJsYW5ndWFnZSIsIlByaW1hcnlSZWR1Y2VyIiwiYWN0aW9uIiwic3RhcnRzV2l0aCIsIlN0cmluZyIsIk5vdGlmaWNhdGlvbnMiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm90aWZpY2F0aW9uIiwiaW5uZXJUZXh0IiwiaGFuZGxlRXZlbnQiLCJpc2lPUyIsIm5hdmlnYXRvciIsInBsYXRmb3JtIiwidGVzdCIsImRlbGVnYXRlZEV2ZW50cyIsImxhc3RFdmVudCIsIm5leHRFdmVudCIsImRlbGVnYXRlZFJvb3RzIiwiaXRlbXMiLCJjb3VudCIsImRvY0V2ZW50IiwiYXR0YWNoRXZlbnRUb0RvY3VtZW50IiwidHJhcENsaWNrT25Ob25JbnRlcmFjdGl2ZUVsZW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibm9ybWFsaXplRXZlbnROYW1lIiwiZGlzcGF0Y2hFdmVudCIsImV2ZW50RGF0YSIsImV2ZW50c1RvVHJpZ2dlciIsInN0b3BQcm9wYWdhdGlvbiIsInN1YnN0ciIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVtcHR5Rm4iLCJvbmNsaWNrIiwibm9ybWFsaXplQ2hpbGROb2RlcyIsImh5ZHJhdGVSb290IiwicGxhY2Vob2xkZXIiLCJuZXh0U2libGluZyIsInByZXZpb3VzU2libGluZyIsImh5ZHJhdGVDb21wb25lbnQiLCJuYW1lc3BhY2VVUkkiLCJfdkNvbXBvbmVudCIsImh5ZHJhdGUiLCJoeWRyYXRlRWxlbWVudCIsInRhZ05hbWUiLCJuZXdEb20iLCJoeWRyYXRlQ2hpbGRyZW4iLCJoeWRyYXRlVGV4dCIsImh5ZHJhdGVWb2lkIiwicHJvY2Vzc0lucHV0IiwiYXBwbHlWYWx1ZSIsImlzQ2hlY2tlZFR5cGUiLCJpc0NvbnRyb2xsZWQiLCJ1c2VzQ2hlY2tlZCIsImNoZWNrZWQiLCJvblRleHRJbnB1dENoYW5nZSIsIm9uSW5wdXQiLCJvbmlucHV0Iiwid3JhcHBlZE9uQ2hhbmdlIiwib25DaGFuZ2UiLCJvbkNoZWNrYm94Q2hhbmdlIiwib25DbGljayIsImhhbmRsZUFzc29jaWF0ZWRSYWRpb0lucHV0cyIsImlucHV0cyIsImZvckVhY2giLCJpbnB1dFdyYXBwZXIiLCJvbmNoYW5nZSIsIm11bHRpcGxlIiwiZGVmYXVsdFZhbHVlIiwiaGFzVmFsdWUiLCJwcm9jZXNzU2VsZWN0IiwidXBkYXRlQ2hpbGRPcHRpb25Hcm91cCIsInVwZGF0ZUNoaWxkT3B0aW9uIiwic2VsZWN0ZWQiLCJvblNlbGVjdENoYW5nZSIsInNlbGVjdFdyYXBwZXIiLCJwcm9jZXNzVGV4dGFyZWEiLCJvblRleHRhcmVhSW5wdXRDaGFuZ2UiLCJ0ZXh0YXJlYVdyYXBwZXIiLCJkb21WYWx1ZSIsIkNsb2NrIiwidXBkYXRlQ2xvY2siLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJmb3JtYXR0ZWRUaW1lIiwiY3VycmVudFRpbWUiLCJQYXNzd29yZEZpZWxkIiwiU2Vzc2lvbkRyb3Bkb3duIiwic29ydCIsInRvVXBwZXJDYXNlIiwiYWN0aXZlU2Vzc2lvbiIsIlNlc3Npb25Sb3ciLCJldmVudEhhbmRsZXIiLCJVc2VyUGFuZWxGb3JtIiwiYWN0aXZlVXNlciIsIkZBREVfRFVSQVRJT04iLCJVc2VyU3dpdGNoZXIiLCJzZWxlY3RlZFVzZXIiLCJhY3RpdmVJbmRleCIsInNlbGVjdGVkVXNlckluZGV4IiwiYXZhdGFycyIsInJlYWxfbmFtZSIsImhhbmRsZVVzZXJDbGljayIsInVzZXJMaXN0IiwiZ2VuZXJhdGVVc2VyTGlzdCIsInVzZXJDb3VudCIsImFjdGl2ZSIsImZhZGVPdXQiLCJoYW5kbGVCYWNrQnV0dG9uIiwiV2FsbHBhcGVyT3BlcmF0aW9ucyIsIkZBREVPVVRfVElNRSIsIldhbGxwYXBlclN3aXRjaGVyIiwid2FsbHBhcGVyRGlyZWN0b3J5IiwiZ2V0V2FsbHBhcGVyRGlyZWN0b3J5Iiwid2FsbHBhcGVycyIsImdldFdhbGxwYXBlcnMiLCJjeWNsZXJCYWNrZ3JvdW5kIiwiY3ljbGVyRm9yZWdyb3VuZCIsImN5Y2xlclByZWxvYWRlciIsImRpcmVjdG9yeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsInNlbGVjdGVkV2FsbHBhcGVyIiwic3dpdGNoZXIiLCJjdXJyZW50bHlGYWRpbmciLCJuZXh0SW5kZXgiLCJuZXdJbmRleCIsIm5ld1dhbGxwYXBlciIsInByZWxvYWRlZEluZGV4IiwicHJlbG9hZGVkV2FsbHBhcGVyIiwic2V0V2FsbHBhcGVyIiwiY3ljbGVXYWxscGFwZXIiLCJzYXZlZFdhbGxwYXBlciIsInJlcGxhY2UiLCJyZWplY3RXYWxscGFwZXIiLCJhY2NlcHRXYWxscGFwZXIiLCJnZW5lcmF0ZU9wdGlvbnMiLCJoYW5kbGVTd2l0Y2hlckFjdGl2YXRpb24iLCJ3YWxscGFwZXJzRGlyZWN0b3J5IiwiY29uZmlnIiwiZ2V0X3N0ciIsImdyZWV0ZXJ1dGlsIiwiZGlybGlzdCIsInBhZFplcm9lcyIsIk1haW4iLCJpbml0aWFsU3RhdGUiLCJnZXRFbGVtZW50QnlJZCIsIm9ubG9hZCIsIlN5bWJvbCIsIm9iamVjdFRhZyIsImZ1bmNQcm90byIsIkZ1bmN0aW9uIiwib2JqZWN0UHJvdG8iLCJmdW5jVG9TdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdEN0b3JTdHJpbmciLCJpc1BsYWluT2JqZWN0IiwicHJvdG8iLCJDdG9yIiwiY29uc3RydWN0b3IiLCJjb21wb3NlIiwiX2xlbiIsImZ1bmNzIiwiX2tleSIsImFyZyIsImxhc3QiLCJyZXN0IiwicmVkdWNlUmlnaHQiLCJjb21wb3NlZCIsImYiLCJjcmVhdGVTdG9yZSIsIkFjdGlvblR5cGVzIiwiSU5JVCIsInJlZHVjZXIiLCJwcmVsb2FkZWRTdGF0ZSIsImVuaGFuY2VyIiwiX3JlZjIiLCJjdXJyZW50UmVkdWNlciIsImN1cnJlbnRTdGF0ZSIsImN1cnJlbnRMaXN0ZW5lcnMiLCJuZXh0TGlzdGVuZXJzIiwiaXNEaXNwYXRjaGluZyIsImVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMiLCJsaXN0ZW5lciIsImlzU3Vic2NyaWJlZCIsInJlcGxhY2VSZWR1Y2VyIiwibmV4dFJlZHVjZXIiLCJvYnNlcnZhYmxlIiwiX3JlZiIsIm91dGVyU3Vic2NyaWJlIiwib2JzZXJ2ZXIiLCJUeXBlRXJyb3IiLCJvYnNlcnZlU3RhdGUiLCJuZXh0IiwiZXJyb3IiLCJnIiwiZXZhbCIsImlzQ3J1c2hlZCIsImNvbWJpbmVSZWR1Y2VycyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImFwcGx5TWlkZGxld2FyZSIsIm51bGxUYWciLCJ1bmRlZmluZWRUYWciLCJzeW1Ub1N0cmluZ1RhZyIsInRvU3RyaW5nVGFnIiwiYmFzZUdldFRhZyIsImZyZWVHbG9iYWwiLCJnbG9iYWwiLCJnZXRQcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwiZ2V0UmF3VGFnIiwiaXNPd24iLCJ1bm1hc2tlZCIsIm9iamVjdFRvU3RyaW5nIiwib3ZlckFyZyIsImZ1bmMiLCJ0cmFuc2Zvcm0iLCJmcmVlU2VsZiIsInNlbGYiLCJpc09iamVjdExpa2UiLCJfZXh0ZW5kcyIsInNvdXJjZSIsIm1pZGRsZXdhcmVzIiwiX2Rpc3BhdGNoIiwiY2hhaW4iLCJtaWRkbGV3YXJlQVBJIiwibWlkZGxld2FyZSIsImJpbmRBY3Rpb25DcmVhdG9yIiwiYWN0aW9uQ3JlYXRvciIsImFjdGlvbkNyZWF0b3JzIiwiYm91bmRBY3Rpb25DcmVhdG9ycyIsImdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlIiwiYWN0aW9uVHlwZSIsImFjdGlvbk5hbWUiLCJnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlIiwiaW5wdXRTdGF0ZSIsInJlZHVjZXJzIiwidW5leHBlY3RlZEtleUNhY2hlIiwicmVkdWNlcktleXMiLCJhcmd1bWVudE5hbWUiLCJtYXRjaCIsInVuZXhwZWN0ZWRLZXlzIiwiYXNzZXJ0UmVkdWNlclNhbml0eSIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHJpbmciLCJmaW5hbFJlZHVjZXJzIiwiZmluYWxSZWR1Y2VyS2V5cyIsInNhbml0eUVycm9yIiwiY29tYmluYXRpb24iLCJ3YXJuaW5nTWVzc2FnZSIsImhhc0NoYW5nZWQiLCJwcmV2aW91c1N0YXRlRm9yS2V5IiwibmV4dFN0YXRlRm9yS2V5IiwiZXJyb3JNZXNzYWdlIiwicmVxdWlyZSIsIl9wb255ZmlsbCIsIl9wb255ZmlsbDIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX19lc01vZHVsZSIsInN5bWJvbE9ic2VydmFibGVQb255ZmlsbCIsIl9TeW1ib2wiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImVudW1lcmFibGUiLCJsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztRQzdEZ0JBLE8sR0FBQUEsTztRQU1BQyxtQixHQUFBQSxtQjtRQUdBQyxnQixHQUFBQSxnQjtRQUlBQyxhLEdBQUFBLGE7UUFHQUMsUyxHQUFBQSxTO1FBR0FDLFUsR0FBQUEsVTtRQUdBQyxhLEdBQUFBLGE7UUFHQUMsUSxHQUFBQSxRO1FBR0FDLFEsR0FBQUEsUTtRQUdBQyxNLEdBQUFBLE07UUFHQUMsTSxHQUFBQSxNO1FBR0FDLFcsR0FBQUEsVztRQUdBQyxRLEdBQUFBLFE7UUFHQUMsVSxHQUFBQSxVO1FBTUFDLE8sR0FBQUEsTztRQUdBQyxTLEdBQUFBLFM7UUFXQUMsVyxHQUFBQSxXO0FBbEVULElBQU1DLHdCQUFRLFFBQWQ7QUFDQSxJQUFNQyxnQ0FBWSxvRkFBbEI7QUFDQSxJQUFNQyxnQ0FBWSxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxPQUFPQyxRQUExRDtBQUNBLFNBQVNyQixPQUFULENBQWlCc0IsUUFBakIsRUFBMkI7QUFDOUIsV0FBT0MsUUFBUUQsUUFBUixJQUFvQkEsUUFBcEIsR0FBZ0NBLFdBQVcsQ0FBQ0EsUUFBRCxDQUFYLEdBQXdCQSxRQUEvRDtBQUNIO0FBQ0Q7QUFDQTtBQUNPLElBQU1DLDRCQUFVQyxNQUFNRCxPQUF0QjtBQUNBLFNBQVN0QixtQkFBVCxDQUE2QndCLENBQTdCLEVBQWdDO0FBQ25DLFdBQU8sQ0FBQ2QsWUFBWWMsRUFBRUMsU0FBZCxDQUFELElBQTZCLENBQUNmLFlBQVljLEVBQUVDLFNBQUYsQ0FBWUMsTUFBeEIsQ0FBckM7QUFDSDtBQUNNLFNBQVN6QixnQkFBVCxDQUEwQjBCLEdBQTFCLEVBQStCO0FBQ2xDLFFBQU1DLGNBQWNELEdBQWQseUNBQWNBLEdBQWQsQ0FBTjtBQUNBLFdBQU9DLFNBQVMsUUFBVCxJQUFxQkEsU0FBUyxRQUFyQztBQUNIO0FBQ00sU0FBUzFCLGFBQVQsQ0FBdUJ5QixHQUF2QixFQUE0QjtBQUMvQixXQUFPakIsWUFBWWlCLEdBQVosS0FBb0JuQixPQUFPbUIsR0FBUCxDQUEzQjtBQUNIO0FBQ00sU0FBU3hCLFNBQVQsQ0FBbUJ3QixHQUFuQixFQUF3QjtBQUMzQixXQUFPbkIsT0FBT21CLEdBQVAsS0FBZUEsUUFBUSxLQUF2QixJQUFnQ2xCLE9BQU9rQixHQUFQLENBQWhDLElBQStDakIsWUFBWWlCLEdBQVosQ0FBdEQ7QUFDSDtBQUNNLFNBQVN2QixVQUFULENBQW9CdUIsR0FBcEIsRUFBeUI7QUFDNUIsV0FBTyxPQUFPQSxHQUFQLEtBQWUsVUFBdEI7QUFDSDtBQUNNLFNBQVN0QixhQUFULENBQXVCd0IsSUFBdkIsRUFBNkI7QUFDaEMsV0FBT0EsS0FBSyxDQUFMLE1BQVksR0FBWixJQUFtQkEsS0FBSyxDQUFMLE1BQVksR0FBL0IsSUFBc0NBLEtBQUtDLE1BQUwsR0FBYyxDQUEzRDtBQUNIO0FBQ00sU0FBU3hCLFFBQVQsQ0FBa0JxQixHQUFsQixFQUF1QjtBQUMxQixXQUFPLE9BQU9BLEdBQVAsS0FBZSxRQUF0QjtBQUNIO0FBQ00sU0FBU3BCLFFBQVQsQ0FBa0JvQixHQUFsQixFQUF1QjtBQUMxQixXQUFPLE9BQU9BLEdBQVAsS0FBZSxRQUF0QjtBQUNIO0FBQ00sU0FBU25CLE1BQVQsQ0FBZ0JtQixHQUFoQixFQUFxQjtBQUN4QixXQUFPQSxRQUFRLElBQWY7QUFDSDtBQUNNLFNBQVNsQixNQUFULENBQWdCa0IsR0FBaEIsRUFBcUI7QUFDeEIsV0FBT0EsUUFBUSxJQUFmO0FBQ0g7QUFDTSxTQUFTakIsV0FBVCxDQUFxQmlCLEdBQXJCLEVBQTBCO0FBQzdCLFdBQU9BLFFBQVFJLFNBQWY7QUFDSDtBQUNNLFNBQVNwQixRQUFULENBQWtCYSxDQUFsQixFQUFxQjtBQUN4QixXQUFPLFFBQU9BLENBQVAseUNBQU9BLENBQVAsT0FBYSxRQUFwQjtBQUNIO0FBQ00sU0FBU1osVUFBVCxDQUFvQm9CLE9BQXBCLEVBQTZCO0FBQ2hDLFFBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1ZBLGtCQUFVZixTQUFWO0FBQ0g7QUFDRCxVQUFNLElBQUlnQixLQUFKLHFCQUE0QkQsT0FBNUIsQ0FBTjtBQUNIO0FBQ00sU0FBU25CLE9BQVQsQ0FBaUJtQixPQUFqQixFQUEwQjtBQUM3QkUsWUFBUUMsSUFBUixDQUFhSCxPQUFiO0FBQ0g7QUFDTSxTQUFTbEIsU0FBVCxHQUFxQjtBQUN4QixTQUFLc0IsU0FBTCxHQUFpQixFQUFqQjtBQUNIO0FBQ0R0QixVQUFVVyxTQUFWLENBQW9CWSxXQUFwQixHQUFrQyxTQUFTQSxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUM3RCxTQUFLRixTQUFMLENBQWVHLElBQWYsQ0FBb0JELFFBQXBCO0FBQ0gsQ0FGRDtBQUdBeEIsVUFBVVcsU0FBVixDQUFvQmUsT0FBcEIsR0FBOEIsU0FBU0EsT0FBVCxHQUFtQjtBQUM3QyxTQUFLLElBQUlDLElBQUksQ0FBUixFQUFXQyxNQUFNLEtBQUtOLFNBQUwsQ0FBZU4sTUFBckMsRUFBNkNXLElBQUlDLEdBQWpELEVBQXNERCxHQUF0RCxFQUEyRDtBQUN2RCxhQUFLTCxTQUFMLENBQWVLLENBQWY7QUFDSDtBQUNKLENBSkQ7QUFLTyxTQUFTMUIsV0FBVCxDQUFxQjRCLFFBQXJCLEVBQStCQyxNQUEvQixFQUF1QztBQUMxQyxTQUFLLElBQUlDLElBQVQsSUFBaUJGLFFBQWpCLEVBQTJCO0FBQ3ZCLFlBQUlqQyxZQUFZa0MsT0FBT0MsSUFBUCxDQUFaLENBQUosRUFBK0I7QUFDM0JELG1CQUFPQyxJQUFQLElBQWVGLFNBQVNFLElBQVQsQ0FBZjtBQUNIO0FBQ0o7QUFDSixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQzFCUUMsZ0I7Ozs7Ozs7Ozs4QkFFQUMsUzs7OztBQWhEVDs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQSxJQUFJQyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDdkMsUUFBTUMsV0FBVyxTQUFTQyxNQUFULEdBQWtCLENBQUcsQ0FBdEM7QUFDQSxRQUFJLENBQUNELFNBQVNFLElBQVQsSUFBaUJGLFNBQVNHLFFBQVQsRUFBbEIsRUFBdUNDLE9BQXZDLENBQStDLFFBQS9DLE1BQTZELENBQUMsQ0FBbEUsRUFBcUU7QUFDakUsb0NBQVMsMEVBQ0wsMEVBREssR0FFTCx1RUFGSyxHQUdMLDRDQUhKO0FBSUg7QUFDSjtBQUNEO0FBQ08sSUFBTUMsNEJBQVUsU0FBaEI7QUFDUDtrQkFDZTtBQUNYQyxrQ0FEVztBQUVYO0FBQ0FDLG9DQUhXO0FBSVg7QUFDQUMsa0NBTFc7QUFNWDtBQUNBM0MsK0JBUFc7QUFRWDRDLCtCQVJXO0FBU1g7QUFDQWxDLDZCQVZXO0FBV1htQyx1Q0FYVztBQVlYQyw2Q0FaVztBQWFYQyw4QkFiVztBQWNYUDtBQWRXLEM7UUFrQmZDLFM7UUFFQUMsVztRQUVBQyxVO1FBRUEzQyxLO1FBQU80QyxTO1FBRVBsQyxNO1FBQVFtQyxXO1FBQWFDLGM7UUFBZ0JDLE87QUFDckMsdUQ7Ozs7Ozs7Ozs7Ozs7O1FDL0JnQkMsNEIsR0FBQUEsNEI7UUF5REFDLDBCLEdBQUFBLDBCO1FBR0FDLFksR0FBQUEsWTtRQWFBQyw4QixHQUFBQSw4QjtRQTRCQUMsYyxHQUFBQSxjO1FBUUFDLGlCLEdBQUFBLGlCO1FBR0FDLFcsR0FBQUEsVztRQUdBQyxjLEdBQUFBLGM7UUFRQUMscUIsR0FBQUEscUI7UUFRQUMsa0IsR0FBQUEsa0I7UUFNQUMsWSxHQUFBQSxZO1FBTUFDLFcsR0FBQUEsVztRQUdBQyxpQixHQUFBQSxpQjtRQU1BQyxjLEdBQUFBLGM7UUFRQUMsTyxHQUFBQSxPOztBQTlLaEI7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBO0FBQ0E7QUFDTyxJQUFNbEIsZ0NBQVksRUFBbEI7QUFDUCxJQUFJWixRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDdkM2QixXQUFPQyxNQUFQLENBQWNwQixTQUFkO0FBQ0g7QUFDTSxTQUFTSSw0QkFBVCxDQUFzQ2lCLEtBQXRDLEVBQTZDQyxTQUE3QyxFQUF3REMsS0FBeEQsRUFBK0RDLE9BQS9ELEVBQXdFQyxLQUF4RSxFQUErRTtBQUNsRixRQUFJLGdDQUFZRCxPQUFaLENBQUosRUFBMEI7QUFDdEJBLGtCQUFVeEIsU0FBVixDQURzQixDQUNEO0FBQ3hCO0FBQ0QsUUFBTTBCLFdBQVcsSUFBSUosU0FBSixDQUFjQyxLQUFkLEVBQXFCQyxPQUFyQixDQUFqQjtBQUNBRSxhQUFTRixPQUFULEdBQW1CQSxPQUFuQjtBQUNBLFFBQUlFLFNBQVNILEtBQVQsS0FBbUJ2QixTQUF2QixFQUFrQztBQUM5QjBCLGlCQUFTSCxLQUFULEdBQWlCQSxLQUFqQjtBQUNIO0FBQ0RHLGFBQVNDLE1BQVQ7QUFDQSxRQUFJLGtCQUFRQyxrQkFBWixFQUFnQztBQUM1QkYsaUJBQVNHLHNCQUFUO0FBQ0g7QUFDREgsYUFBU0ksVUFBVCxHQUFzQixLQUF0QjtBQUNBSixhQUFTSyxnQkFBVCxHQUE0QixJQUE1QjtBQUNBTCxhQUFTTSxNQUFULEdBQWtCUCxLQUFsQjtBQUNBLFFBQUksK0JBQVdDLFNBQVNPLGtCQUFwQixDQUFKLEVBQTZDO0FBQ3pDUCxpQkFBU08sa0JBQVQ7QUFDSDtBQUNELFFBQU1DLGVBQWVSLFNBQVNTLGVBQVQsRUFBckI7QUFDQSxRQUFJLGtDQUFjRCxZQUFkLENBQUosRUFBaUM7QUFDN0JSLGlCQUFTVSxhQUFULEdBQXlCWixPQUF6QjtBQUNILEtBRkQsTUFHSztBQUNERSxpQkFBU1UsYUFBVCxHQUF5QmpCLE9BQU9rQixNQUFQLENBQWMsRUFBZCxFQUFrQmIsT0FBbEIsRUFBMkJVLFlBQTNCLENBQXpCO0FBQ0g7QUFDRCxzQkFBUUksWUFBUixJQUF3QixrQkFBUUEsWUFBUixDQUFxQlosUUFBckIsQ0FBeEI7QUFDQSxRQUFJYSxRQUFRYixTQUFTNUQsTUFBVCxDQUFnQnlELEtBQWhCLEVBQXVCRyxTQUFTYyxLQUFoQyxFQUF1Q2hCLE9BQXZDLENBQVo7QUFDQSxzQkFBUWlCLFdBQVIsSUFBdUIsa0JBQVFBLFdBQVIsQ0FBb0JmLFFBQXBCLENBQXZCO0FBQ0EsUUFBSSw0QkFBUWEsS0FBUixDQUFKLEVBQW9CO0FBQ2hCLFlBQUluRCxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDdkMsMkNBQVcsZ0lBQVg7QUFDSDtBQUNEO0FBQ0gsS0FMRCxNQU1LLElBQUksOEJBQVVpRCxLQUFWLENBQUosRUFBc0I7QUFDdkJBLGdCQUFRLDhCQUFSO0FBQ0gsS0FGSSxNQUdBLElBQUkscUNBQWlCQSxLQUFqQixDQUFKLEVBQTZCO0FBQzlCQSxnQkFBUSw2QkFBZ0JBLEtBQWhCLENBQVI7QUFDSCxLQUZJLE1BR0E7QUFDRCxZQUFJQSxNQUFNRyxHQUFWLEVBQWU7QUFDWEgsb0JBQVEsd0JBQVdBLEtBQVgsQ0FBUjtBQUNIO0FBQ0QsWUFBSUEsTUFBTUksS0FBTixHQUFjLEVBQWxCLENBQXFCLGVBQXJCLEVBQXNDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0FKLHNCQUFNSyxXQUFOLEdBQW9CdkIsS0FBcEI7QUFDSDtBQUNKO0FBQ0RLLGFBQVNLLGdCQUFULEdBQTRCLEtBQTVCO0FBQ0FMLGFBQVNtQixVQUFULEdBQXNCTixLQUF0QjtBQUNBLFdBQU9iLFFBQVA7QUFDSDtBQUNNLFNBQVNyQiwwQkFBVCxDQUFvQ3lDLFNBQXBDLEVBQStDQyxTQUEvQyxFQUEwREMsU0FBMUQsRUFBcUVDLFNBQXJFLEVBQWdGekIsT0FBaEYsRUFBeUZDLEtBQXpGLEVBQWdHeUIsV0FBaEcsRUFBNkc7QUFDaEg1QyxpQkFBYTBDLFNBQWIsRUFBd0IscUJBQU1ELFNBQU4sRUFBaUIsSUFBakIsRUFBdUJFLFNBQXZCLEVBQWtDekIsT0FBbEMsRUFBMkNDLEtBQTNDLENBQXhCLEVBQTJFcUIsU0FBM0UsRUFBc0ZHLFNBQXRGLEVBQWlHQyxXQUFqRztBQUNIO0FBQ00sU0FBUzVDLFlBQVQsQ0FBc0IwQyxTQUF0QixFQUFpQ04sR0FBakMsRUFBc0NyQixLQUF0QyxFQUE2QzRCLFNBQTdDLEVBQXdEQyxXQUF4RCxFQUFxRTtBQUN4RSxRQUFJQyxpQkFBaUIsS0FBckI7QUFDQTtBQUNBLFFBQUk5QixNQUFNc0IsS0FBTixHQUFjLEVBQWxCLENBQXFCLGVBQXJCLEVBQXNDO0FBQ2xDO0FBQ0E7QUFDQSxxQ0FBUXRCLEtBQVIsRUFBZSxJQUFmLEVBQXFCNEIsU0FBckIsRUFBZ0MsS0FBaEMsRUFBdUNDLFdBQXZDO0FBQ0E3QixvQkFBUUEsTUFBTTVELFFBQU4sQ0FBZW9GLFVBQWYsSUFBNkJ4QixNQUFNNUQsUUFBM0M7QUFDQTBGLDZCQUFpQixJQUFqQjtBQUNIO0FBQ0RyQyxpQkFBYWtDLFNBQWIsRUFBd0JOLEdBQXhCLEVBQTZCckIsTUFBTXFCLEdBQW5DO0FBQ0EsNkJBQVFyQixLQUFSLEVBQWUsSUFBZixFQUFxQjRCLFNBQXJCLEVBQWdDLEtBQWhDLEVBQXVDQyxXQUF2QztBQUNIO0FBQ00sU0FBUzNDLDhCQUFULENBQXdDYyxLQUF4QyxFQUErQytCLFNBQS9DLEVBQTBEN0IsS0FBMUQsRUFBaUVDLE9BQWpFLEVBQTBFO0FBQzdFLFFBQUllLFFBQVFhLFVBQVU3QixLQUFWLEVBQWlCQyxPQUFqQixDQUFaO0FBQ0EsUUFBSSw0QkFBUWUsS0FBUixDQUFKLEVBQW9CO0FBQ2hCLFlBQUluRCxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDdkMsMkNBQVcsZ0lBQVg7QUFDSDtBQUNEO0FBQ0gsS0FMRCxNQU1LLElBQUksOEJBQVVpRCxLQUFWLENBQUosRUFBc0I7QUFDdkJBLGdCQUFRLDhCQUFSO0FBQ0gsS0FGSSxNQUdBLElBQUkscUNBQWlCQSxLQUFqQixDQUFKLEVBQTZCO0FBQzlCQSxnQkFBUSw2QkFBZ0JBLEtBQWhCLENBQVI7QUFDSCxLQUZJLE1BR0E7QUFDRCxZQUFJQSxNQUFNRyxHQUFWLEVBQWU7QUFDWEgsb0JBQVEsd0JBQVdBLEtBQVgsQ0FBUjtBQUNIO0FBQ0QsWUFBSUEsTUFBTUksS0FBTixHQUFjLEVBQWxCLENBQXFCLGVBQXJCLEVBQXNDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0FKLHNCQUFNSyxXQUFOLEdBQW9CdkIsS0FBcEI7QUFDSDtBQUNKO0FBQ0QsV0FBT2tCLEtBQVA7QUFDSDtBQUNNLFNBQVMvQixjQUFULENBQXdCa0MsR0FBeEIsRUFBNkJXLElBQTdCLEVBQW1DO0FBQ3RDLFFBQUlBLFNBQVMsRUFBYixFQUFpQjtBQUNiWCxZQUFJWSxXQUFKLEdBQWtCRCxJQUFsQjtBQUNILEtBRkQsTUFHSztBQUNEWCxZQUFJaEMsV0FBSixDQUFnQmxELFNBQVMrRixjQUFULENBQXdCLEVBQXhCLENBQWhCO0FBQ0g7QUFDSjtBQUNNLFNBQVM5QyxpQkFBVCxDQUEyQmlDLEdBQTNCLEVBQWdDVyxJQUFoQyxFQUFzQztBQUN6Q1gsUUFBSWMsVUFBSixDQUFlQyxTQUFmLEdBQTJCSixJQUEzQjtBQUNIO0FBQ00sU0FBUzNDLFdBQVQsQ0FBcUJzQyxTQUFyQixFQUFnQ04sR0FBaEMsRUFBcUM7QUFDeENNLGNBQVV0QyxXQUFWLENBQXNCZ0MsR0FBdEI7QUFDSDtBQUNNLFNBQVMvQixjQUFULENBQXdCcUMsU0FBeEIsRUFBbUNVLE9BQW5DLEVBQTRDQyxRQUE1QyxFQUFzRDtBQUN6RCxRQUFJLGtDQUFjQSxRQUFkLENBQUosRUFBNkI7QUFDekJqRCxvQkFBWXNDLFNBQVosRUFBdUJVLE9BQXZCO0FBQ0gsS0FGRCxNQUdLO0FBQ0RWLGtCQUFVWSxZQUFWLENBQXVCRixPQUF2QixFQUFnQ0MsUUFBaEM7QUFDSDtBQUNKO0FBQ00sU0FBUy9DLHFCQUFULENBQStCaUQsR0FBL0IsRUFBb0NwQyxLQUFwQyxFQUEyQztBQUM5QyxRQUFJQSxVQUFVLElBQWQsRUFBb0I7QUFDaEIsZUFBT2pFLFNBQVNzRyxlQUFULG1CQUFnQ0QsR0FBaEMsQ0FBUDtBQUNILEtBRkQsTUFHSztBQUNELGVBQU9yRyxTQUFTdUcsYUFBVCxDQUF1QkYsR0FBdkIsQ0FBUDtBQUNIO0FBQ0o7QUFDTSxTQUFTaEQsa0JBQVQsQ0FBNEJtRCxRQUE1QixFQUFzQ0wsUUFBdEMsRUFBZ0RYLFNBQWhELEVBQTJEQyxTQUEzRCxFQUFzRXpCLE9BQXRFLEVBQStFQyxLQUEvRSxFQUFzRnlCLFdBQXRGLEVBQW1HO0FBQ3RHLDZCQUFRYyxRQUFSLEVBQWtCLElBQWxCLEVBQXdCZixTQUF4QixFQUFtQyxLQUFuQyxFQUEwQ0MsV0FBMUM7QUFDQSxRQUFNUixNQUFNLHFCQUFNaUIsUUFBTixFQUFnQixJQUFoQixFQUFzQlYsU0FBdEIsRUFBaUN6QixPQUFqQyxFQUEwQ0MsS0FBMUMsQ0FBWjtBQUNBa0MsYUFBU2pCLEdBQVQsR0FBZUEsR0FBZjtBQUNBNUIsaUJBQWFrQyxTQUFiLEVBQXdCTixHQUF4QixFQUE2QnNCLFNBQVN0QixHQUF0QztBQUNIO0FBQ00sU0FBUzVCLFlBQVQsQ0FBc0JrQyxTQUF0QixFQUFpQ2lCLE9BQWpDLEVBQTBDQyxPQUExQyxFQUFtRDtBQUN0RCxRQUFJLENBQUNsQixTQUFMLEVBQWdCO0FBQ1pBLG9CQUFZa0IsUUFBUUMsVUFBcEI7QUFDSDtBQUNEbkIsY0FBVWxDLFlBQVYsQ0FBdUJtRCxPQUF2QixFQUFnQ0MsT0FBaEM7QUFDSDtBQUNNLFNBQVNuRCxXQUFULENBQXFCaUMsU0FBckIsRUFBZ0NOLEdBQWhDLEVBQXFDO0FBQ3hDTSxjQUFVakMsV0FBVixDQUFzQjJCLEdBQXRCO0FBQ0g7QUFDTSxTQUFTMUIsaUJBQVQsQ0FBMkIwQixHQUEzQixFQUFnQ2pGLFFBQWhDLEVBQTBDd0YsU0FBMUMsRUFBcURDLFdBQXJELEVBQWtFO0FBQ3JFUixRQUFJWSxXQUFKLEdBQWtCLEVBQWxCO0FBQ0EsUUFBSSxDQUFDLGtCQUFRYyxnQkFBVCxJQUE4QixrQkFBUUEsZ0JBQVIsSUFBNEIsQ0FBQ2xCLFdBQS9ELEVBQTZFO0FBQ3pFakMsdUJBQWUsSUFBZixFQUFxQnhELFFBQXJCLEVBQStCd0YsU0FBL0IsRUFBMENDLFdBQTFDO0FBQ0g7QUFDSjtBQUNNLFNBQVNqQyxjQUFULENBQXdCeUIsR0FBeEIsRUFBNkJqRixRQUE3QixFQUF1Q3dGLFNBQXZDLEVBQWtEQyxXQUFsRCxFQUErRDtBQUNsRSxTQUFLLElBQUlyRSxJQUFJLENBQVIsRUFBV0MsTUFBTXJCLFNBQVNTLE1BQS9CLEVBQXVDVyxJQUFJQyxHQUEzQyxFQUFnREQsR0FBaEQsRUFBcUQ7QUFDakQsWUFBTXdGLFFBQVE1RyxTQUFTb0IsQ0FBVCxDQUFkO0FBQ0EsWUFBSSxDQUFDLDhCQUFVd0YsS0FBVixDQUFMLEVBQXVCO0FBQ25CLHFDQUFRQSxLQUFSLEVBQWUzQixHQUFmLEVBQW9CTyxTQUFwQixFQUErQixJQUEvQixFQUFxQ0MsV0FBckM7QUFDSDtBQUNKO0FBQ0o7QUFDTSxTQUFTaEMsT0FBVCxDQUFpQm9ELFlBQWpCLEVBQStCQyxZQUEvQixFQUE2QztBQUNoRCxXQUFPQSxhQUFhckcsTUFBYixJQUF1QixDQUFDLGtDQUFjcUcsYUFBYSxDQUFiLENBQWQsQ0FBeEIsSUFBMEQsQ0FBQyxrQ0FBY0EsYUFBYSxDQUFiLEVBQWdCQyxHQUE5QixDQUEzRCxJQUNBRixhQUFhcEcsTUFEYixJQUN1QixDQUFDLGtDQUFjb0csYUFBYSxDQUFiLENBQWQsQ0FEeEIsSUFDMEQsQ0FBQyxrQ0FBY0EsYUFBYSxDQUFiLEVBQWdCRSxHQUE5QixDQURsRTtBQUVILEM7Ozs7Ozs7Ozs7QUNqTEQ7QUFDQSxJQUFJcEYsVUFBVXFGLE9BQU9DLE9BQVAsR0FBaUIsRUFBL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUMsZ0JBQUo7QUFDQSxJQUFJQyxrQkFBSjs7QUFFQSxTQUFTQyxnQkFBVCxHQUE0QjtBQUN4QixVQUFNLElBQUl4RyxLQUFKLENBQVUsaUNBQVYsQ0FBTjtBQUNIO0FBQ0QsU0FBU3lHLG1CQUFULEdBQWdDO0FBQzVCLFVBQU0sSUFBSXpHLEtBQUosQ0FBVSxtQ0FBVixDQUFOO0FBQ0g7QUFDQSxhQUFZO0FBQ1QsUUFBSTtBQUNBLFlBQUksT0FBTzBHLFVBQVAsS0FBc0IsVUFBMUIsRUFBc0M7QUFDbENKLCtCQUFtQkksVUFBbkI7QUFDSCxTQUZELE1BRU87QUFDSEosK0JBQW1CRSxnQkFBbkI7QUFDSDtBQUNKLEtBTkQsQ0FNRSxPQUFPRyxDQUFQLEVBQVU7QUFDUkwsMkJBQW1CRSxnQkFBbkI7QUFDSDtBQUNELFFBQUk7QUFDQSxZQUFJLE9BQU9JLFlBQVAsS0FBd0IsVUFBNUIsRUFBd0M7QUFDcENMLGlDQUFxQkssWUFBckI7QUFDSCxTQUZELE1BRU87QUFDSEwsaUNBQXFCRSxtQkFBckI7QUFDSDtBQUNKLEtBTkQsQ0FNRSxPQUFPRSxDQUFQLEVBQVU7QUFDUkosNkJBQXFCRSxtQkFBckI7QUFDSDtBQUNKLENBbkJBLEdBQUQ7QUFvQkEsU0FBU0ksVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUI7QUFDckIsUUFBSVIscUJBQXFCSSxVQUF6QixFQUFxQztBQUNqQztBQUNBLGVBQU9BLFdBQVdJLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBUDtBQUNIO0FBQ0Q7QUFDQSxRQUFJLENBQUNSLHFCQUFxQkUsZ0JBQXJCLElBQXlDLENBQUNGLGdCQUEzQyxLQUFnRUksVUFBcEUsRUFBZ0Y7QUFDNUVKLDJCQUFtQkksVUFBbkI7QUFDQSxlQUFPQSxXQUFXSSxHQUFYLEVBQWdCLENBQWhCLENBQVA7QUFDSDtBQUNELFFBQUk7QUFDQTtBQUNBLGVBQU9SLGlCQUFpQlEsR0FBakIsRUFBc0IsQ0FBdEIsQ0FBUDtBQUNILEtBSEQsQ0FHRSxPQUFNSCxDQUFOLEVBQVE7QUFDTixZQUFJO0FBQ0E7QUFDQSxtQkFBT0wsaUJBQWlCUyxJQUFqQixDQUFzQixJQUF0QixFQUE0QkQsR0FBNUIsRUFBaUMsQ0FBakMsQ0FBUDtBQUNILFNBSEQsQ0FHRSxPQUFNSCxDQUFOLEVBQVE7QUFDTjtBQUNBLG1CQUFPTCxpQkFBaUJTLElBQWpCLENBQXNCLElBQXRCLEVBQTRCRCxHQUE1QixFQUFpQyxDQUFqQyxDQUFQO0FBQ0g7QUFDSjtBQUdKO0FBQ0QsU0FBU0UsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUM7QUFDN0IsUUFBSVYsdUJBQXVCSyxZQUEzQixFQUF5QztBQUNyQztBQUNBLGVBQU9BLGFBQWFLLE1BQWIsQ0FBUDtBQUNIO0FBQ0Q7QUFDQSxRQUFJLENBQUNWLHVCQUF1QkUsbUJBQXZCLElBQThDLENBQUNGLGtCQUFoRCxLQUF1RUssWUFBM0UsRUFBeUY7QUFDckZMLDZCQUFxQkssWUFBckI7QUFDQSxlQUFPQSxhQUFhSyxNQUFiLENBQVA7QUFDSDtBQUNELFFBQUk7QUFDQTtBQUNBLGVBQU9WLG1CQUFtQlUsTUFBbkIsQ0FBUDtBQUNILEtBSEQsQ0FHRSxPQUFPTixDQUFQLEVBQVM7QUFDUCxZQUFJO0FBQ0E7QUFDQSxtQkFBT0osbUJBQW1CUSxJQUFuQixDQUF3QixJQUF4QixFQUE4QkUsTUFBOUIsQ0FBUDtBQUNILFNBSEQsQ0FHRSxPQUFPTixDQUFQLEVBQVM7QUFDUDtBQUNBO0FBQ0EsbUJBQU9KLG1CQUFtQlEsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEJFLE1BQTlCLENBQVA7QUFDSDtBQUNKO0FBSUo7QUFDRCxJQUFJQyxRQUFRLEVBQVo7QUFDQSxJQUFJQyxXQUFXLEtBQWY7QUFDQSxJQUFJQyxZQUFKO0FBQ0EsSUFBSUMsYUFBYSxDQUFDLENBQWxCOztBQUVBLFNBQVNDLGVBQVQsR0FBMkI7QUFDdkIsUUFBSSxDQUFDSCxRQUFELElBQWEsQ0FBQ0MsWUFBbEIsRUFBZ0M7QUFDNUI7QUFDSDtBQUNERCxlQUFXLEtBQVg7QUFDQSxRQUFJQyxhQUFhdkgsTUFBakIsRUFBeUI7QUFDckJxSCxnQkFBUUUsYUFBYUcsTUFBYixDQUFvQkwsS0FBcEIsQ0FBUjtBQUNILEtBRkQsTUFFTztBQUNIRyxxQkFBYSxDQUFDLENBQWQ7QUFDSDtBQUNELFFBQUlILE1BQU1ySCxNQUFWLEVBQWtCO0FBQ2QySDtBQUNIO0FBQ0o7O0FBRUQsU0FBU0EsVUFBVCxHQUFzQjtBQUNsQixRQUFJTCxRQUFKLEVBQWM7QUFDVjtBQUNIO0FBQ0QsUUFBSU0sVUFBVVosV0FBV1MsZUFBWCxDQUFkO0FBQ0FILGVBQVcsSUFBWDs7QUFFQSxRQUFJMUcsTUFBTXlHLE1BQU1ySCxNQUFoQjtBQUNBLFdBQU1ZLEdBQU4sRUFBVztBQUNQMkcsdUJBQWVGLEtBQWY7QUFDQUEsZ0JBQVEsRUFBUjtBQUNBLGVBQU8sRUFBRUcsVUFBRixHQUFlNUcsR0FBdEIsRUFBMkI7QUFDdkIsZ0JBQUkyRyxZQUFKLEVBQWtCO0FBQ2RBLDZCQUFhQyxVQUFiLEVBQXlCSyxHQUF6QjtBQUNIO0FBQ0o7QUFDREwscUJBQWEsQ0FBQyxDQUFkO0FBQ0E1RyxjQUFNeUcsTUFBTXJILE1BQVo7QUFDSDtBQUNEdUgsbUJBQWUsSUFBZjtBQUNBRCxlQUFXLEtBQVg7QUFDQUgsb0JBQWdCUyxPQUFoQjtBQUNIOztBQUVEMUcsUUFBUTRHLFFBQVIsR0FBbUIsVUFBVWIsR0FBVixFQUFlO0FBQzlCLFFBQUljLE9BQU8sSUFBSXRJLEtBQUosQ0FBVXVJLFVBQVVoSSxNQUFWLEdBQW1CLENBQTdCLENBQVg7QUFDQSxRQUFJZ0ksVUFBVWhJLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDdEIsYUFBSyxJQUFJVyxJQUFJLENBQWIsRUFBZ0JBLElBQUlxSCxVQUFVaEksTUFBOUIsRUFBc0NXLEdBQXRDLEVBQTJDO0FBQ3ZDb0gsaUJBQUtwSCxJQUFJLENBQVQsSUFBY3FILFVBQVVySCxDQUFWLENBQWQ7QUFDSDtBQUNKO0FBQ0QwRyxVQUFNNUcsSUFBTixDQUFXLElBQUl3SCxJQUFKLENBQVNoQixHQUFULEVBQWNjLElBQWQsQ0FBWDtBQUNBLFFBQUlWLE1BQU1ySCxNQUFOLEtBQWlCLENBQWpCLElBQXNCLENBQUNzSCxRQUEzQixFQUFxQztBQUNqQ04sbUJBQVdXLFVBQVg7QUFDSDtBQUNKLENBWEQ7O0FBYUE7QUFDQSxTQUFTTSxJQUFULENBQWNoQixHQUFkLEVBQW1CaUIsS0FBbkIsRUFBMEI7QUFDdEIsU0FBS2pCLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtpQixLQUFMLEdBQWFBLEtBQWI7QUFDSDtBQUNERCxLQUFLdEksU0FBTCxDQUFla0ksR0FBZixHQUFxQixZQUFZO0FBQzdCLFNBQUtaLEdBQUwsQ0FBU2tCLEtBQVQsQ0FBZSxJQUFmLEVBQXFCLEtBQUtELEtBQTFCO0FBQ0gsQ0FGRDtBQUdBaEgsUUFBUWtILEtBQVIsR0FBZ0IsU0FBaEI7QUFDQWxILFFBQVFtSCxPQUFSLEdBQWtCLElBQWxCO0FBQ0FuSCxRQUFRQyxHQUFSLEdBQWMsRUFBZDtBQUNBRCxRQUFRb0gsSUFBUixHQUFlLEVBQWY7QUFDQXBILFFBQVFRLE9BQVIsR0FBa0IsRUFBbEIsQyxDQUFzQjtBQUN0QlIsUUFBUXFILFFBQVIsR0FBbUIsRUFBbkI7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQixDQUFFOztBQUVsQnRILFFBQVF1SCxFQUFSLEdBQWFELElBQWI7QUFDQXRILFFBQVFYLFdBQVIsR0FBc0JpSSxJQUF0QjtBQUNBdEgsUUFBUXdILElBQVIsR0FBZUYsSUFBZjtBQUNBdEgsUUFBUXlILEdBQVIsR0FBY0gsSUFBZDtBQUNBdEgsUUFBUTBILGNBQVIsR0FBeUJKLElBQXpCO0FBQ0F0SCxRQUFRMkgsa0JBQVIsR0FBNkJMLElBQTdCO0FBQ0F0SCxRQUFRNEgsSUFBUixHQUFlTixJQUFmOztBQUVBdEgsUUFBUTZILE9BQVIsR0FBa0IsVUFBVXhILElBQVYsRUFBZ0I7QUFDOUIsVUFBTSxJQUFJcEIsS0FBSixDQUFVLGtDQUFWLENBQU47QUFDSCxDQUZEOztBQUlBZSxRQUFROEgsR0FBUixHQUFjLFlBQVk7QUFBRSxXQUFPLEdBQVA7QUFBWSxDQUF4QztBQUNBOUgsUUFBUStILEtBQVIsR0FBZ0IsVUFBVUMsR0FBVixFQUFlO0FBQzNCLFVBQU0sSUFBSS9JLEtBQUosQ0FBVSxnQ0FBVixDQUFOO0FBQ0gsQ0FGRDtBQUdBZSxRQUFRaUksS0FBUixHQUFnQixZQUFXO0FBQUUsV0FBTyxDQUFQO0FBQVcsQ0FBeEMsQzs7Ozs7Ozs7Ozs7O2tCQ25MZTtBQUNYakQsc0JBQWtCLEtBRFA7QUFFWHhDLHdCQUFvQixLQUZUO0FBR1gwRixXQUFPLElBSEk7QUFJWHhILGlCQUFhLElBSkY7QUFLWHdDLGtCQUFjLElBTEg7QUFNWEcsaUJBQWEsSUFORjtBQU9YOEUsZ0JBQVksSUFQRDtBQVFYQyxpQkFBYSxJQVJGO0FBU1hDLG1CQUFlO0FBVEosQzs7Ozs7Ozs7Ozs7OztxakJDQWY7OztBQUNBOztBQUNBOzs7O0FBQ0EsSUFBSUMsK0JBQUo7QUFDQSxJQUFJdEksUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3ZDb0ksV0FBTyx1S0FBUDtBQUNIO0FBQ0QsSUFBTUMseUJBQXlCLElBQUlDLEdBQUosRUFBL0I7QUFDQTtBQUNBO0FBQ0EsU0FBU0MsMkJBQVQsQ0FBcUN4RyxLQUFyQyxFQUE0Q3FCLEdBQTVDLEVBQWlEO0FBQzdDLFFBQUlyQixNQUFNc0IsS0FBTixHQUFjLEVBQWxCLENBQXFCLGVBQXJCLEVBQXNDO0FBQ2xDLGdCQUFNQyxjQUFjdkIsTUFBTXVCLFdBQTFCO0FBQ0EsZ0JBQUlBLFdBQUosRUFBaUI7QUFDYkEsNEJBQVlGLEdBQVosR0FBa0JBLEdBQWxCO0FBQ0FtRiw0Q0FBNEJqRixXQUE1QixFQUF5Q0YsR0FBekM7QUFDSDtBQUNKO0FBQ0o7QUFDRDtBQUNBLFNBQVNvRixlQUFULEdBQTJCO0FBQ3ZCLFdBQU8sMEJBQVksSUFBWixDQUFpQixVQUFqQixDQUFQO0FBQ0g7QUFDRCxTQUFTQyxlQUFULENBQXlCMUUsSUFBekIsRUFBK0I7QUFDM0IsV0FBTywwQkFBWSxDQUFaLENBQWMsVUFBZCxFQUEwQixJQUExQixFQUFnQyxJQUFoQyxFQUFzQ0EsSUFBdEMsQ0FBUDtBQUNIO0FBQ0QsU0FBUzJFLFVBQVQsQ0FBb0I1RSxTQUFwQixFQUErQjZFLEtBQS9CLEVBQXNDdkosUUFBdEMsRUFBZ0Q7QUFDNUM7QUFDQSxRQUFJNkcsUUFBUW9DLHVCQUF1Qk8sR0FBdkIsQ0FBMkI5RSxTQUEzQixDQUFaO0FBQ0EsUUFBSSxDQUFDbUMsS0FBTCxFQUFZO0FBQ1JBLGdCQUFRLEVBQVI7QUFDQW9DLCtCQUF1QlEsR0FBdkIsQ0FBMkIvRSxTQUEzQixFQUFzQ21DLEtBQXRDO0FBQ0E2QyxnQkFBUUMsT0FBUixHQUFrQkMsSUFBbEIsQ0FBdUIsWUFBTTtBQUN6QlgsbUNBQXVCWSxNQUF2QixDQUE4Qm5GLFNBQTlCO0FBQ0FvRix1QkFBV3BGLFNBQVgsRUFBc0I2RSxLQUF0QixFQUE2QixZQUFNO0FBQy9CLHFCQUFLLElBQUlwSixJQUFJLENBQVIsRUFBV0MsTUFBTXlHLE1BQU1ySCxNQUE1QixFQUFvQ1csSUFBSUMsR0FBeEMsRUFBNkNELEdBQTdDLEVBQWtEO0FBQzlDMEcsMEJBQU0xRyxDQUFOO0FBQ0g7QUFDSixhQUpEO0FBS0gsU0FQRDtBQVFIO0FBQ0QsUUFBSUgsUUFBSixFQUFjO0FBQ1Y2RyxjQUFNNUcsSUFBTixDQUFXRCxRQUFYO0FBQ0g7QUFDSjtBQUNELFNBQVMrSixpQkFBVCxDQUEyQnJGLFNBQTNCLEVBQXNDc0YsUUFBdEMsRUFBZ0RoSyxRQUFoRCxFQUEwRGlLLElBQTFELEVBQWdFO0FBQzVELFFBQUksK0JBQVdELFFBQVgsQ0FBSixFQUEwQjtBQUN0QkEsbUJBQVdBLFNBQVN0RixVQUFVWixLQUFuQixFQUEwQlksVUFBVTdCLEtBQXBDLEVBQTJDNkIsVUFBVTVCLE9BQXJELENBQVg7QUFDSDtBQUNELFNBQUssSUFBSW9ILFFBQVQsSUFBcUJGLFFBQXJCLEVBQStCO0FBQzNCdEYsa0JBQVV5RixhQUFWLENBQXdCRCxRQUF4QixJQUFvQ0YsU0FBU0UsUUFBVCxDQUFwQztBQUNIO0FBQ0QsUUFBSSxDQUFDeEYsVUFBVXJCLGdCQUFYLDRCQUFKLEVBQThDO0FBQzFDLFlBQUk0RyxRQUFRdkYsVUFBVTBGLFlBQXRCLEVBQW9DO0FBQ2hDMUYsc0JBQVVyQixnQkFBVixHQUE2QixJQUE3QjtBQUNBeUcsdUJBQVdwRixTQUFYLEVBQXNCLEtBQXRCLEVBQTZCMUUsUUFBN0I7QUFDSCxTQUhELE1BSUs7QUFDRHNKLHVCQUFXNUUsU0FBWCxFQUFzQixLQUF0QixFQUE2QjFFLFFBQTdCO0FBQ0g7QUFDSixLQVJELE1BU0s7QUFDRDBFLGtCQUFVWixLQUFWLEdBQWtCckIsT0FBT2tCLE1BQVAsQ0FBYyxFQUFkLEVBQWtCZSxVQUFVWixLQUE1QixFQUFtQ1ksVUFBVXlGLGFBQTdDLENBQWxCO0FBQ0F6RixrQkFBVXlGLGFBQVYsR0FBMEIsRUFBMUI7QUFDSDtBQUNKO0FBQ0QsU0FBU0wsVUFBVCxDQUFvQnBGLFNBQXBCLEVBQStCNkUsS0FBL0IsRUFBc0N2SixRQUF0QyxFQUFnRDtBQUM1QyxRQUFJLENBQUMsQ0FBQzBFLFVBQVUyRixjQUFYLElBQTZCZCxLQUE5QixLQUF3QyxDQUFDN0UsVUFBVTBGLFlBQW5ELElBQW1FLENBQUMxRixVQUFVdEIsVUFBbEYsRUFBOEY7QUFDMUZzQixrQkFBVXJCLGdCQUFWLEdBQTZCLEtBQTdCO0FBQ0EsWUFBTWlILGVBQWU1RixVQUFVeUYsYUFBL0I7QUFDQSxZQUFNSSxZQUFZN0YsVUFBVVosS0FBNUI7QUFDQSxZQUFNMEcsWUFBWS9ILE9BQU9rQixNQUFQLENBQWMsRUFBZCxFQUFrQjRHLFNBQWxCLEVBQTZCRCxZQUE3QixDQUFsQjtBQUNBLFlBQU16SCxRQUFRNkIsVUFBVTdCLEtBQXhCO0FBQ0EsWUFBTUMsVUFBVTRCLFVBQVU1QixPQUExQjtBQUNBNEIsa0JBQVV5RixhQUFWLEdBQTBCLEVBQTFCO0FBQ0EsWUFBSTlGLFlBQVlLLFVBQVUrRixnQkFBVixDQUEyQkYsU0FBM0IsRUFBc0NDLFNBQXRDLEVBQWlEM0gsS0FBakQsRUFBd0RBLEtBQXhELEVBQStEQyxPQUEvRCxFQUF3RXlHLEtBQXhFLEVBQStFLElBQS9FLENBQWhCO0FBQ0EsWUFBSW1CLFlBQVksSUFBaEI7QUFDQSxZQUFJLDhCQUFVckcsU0FBVixDQUFKLEVBQTBCO0FBQ3RCQSx3QkFBWStFLGlCQUFaO0FBQ0gsU0FGRCxNQUdLLElBQUkvRSxrQ0FBSixFQUF5QjtBQUMxQkEsd0JBQVlLLFVBQVVQLFVBQXRCO0FBQ0F1Ryx3QkFBWSxLQUFaO0FBQ0gsU0FISSxNQUlBLElBQUkscUNBQWlCckcsU0FBakIsQ0FBSixFQUFpQztBQUNsQ0Esd0JBQVlnRixnQkFBZ0JoRixTQUFoQixDQUFaO0FBQ0gsU0FGSSxNQUdBLElBQUksNEJBQVFBLFNBQVIsQ0FBSixFQUF3QjtBQUN6QixnQkFBSTNELFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN2QywrQ0FBVyxnSUFBWDtBQUNIO0FBQ0Q7QUFDSDtBQUNELFlBQU13RCxZQUFZTSxVQUFVUCxVQUE1QjtBQUNBLFlBQU14QixRQUFRK0IsVUFBVWlHLE1BQXhCO0FBQ0EsWUFBTXJHLFlBQWFGLFVBQVVKLEdBQVYsSUFBaUJJLFVBQVVKLEdBQVYsQ0FBY3lCLFVBQWhDLEtBQWdEckIsVUFBVUosR0FBVixHQUFnQnJCLE1BQU1xQixHQUF0RSxDQUFsQjtBQUNBVSxrQkFBVVAsVUFBVixHQUF1QkUsU0FBdkI7QUFDQSxZQUFJcUcsU0FBSixFQUFlO0FBQ1gsZ0JBQUlFLGVBQWVsRyxVQUFVbUcsVUFBN0I7QUFDQSxnQkFBSSxDQUFDRCxZQUFMLEVBQW1CO0FBQ2ZBLCtCQUFlLDhCQUFmO0FBQ0gsYUFGRCxNQUdLO0FBQ0RBLDZCQUFhOUssU0FBYixHQUF5QixFQUF6QjtBQUNIO0FBQ0Q0RSxzQkFBVW1HLFVBQVYsR0FBdUJELFlBQXZCO0FBQ0EsZ0JBQUlwSCxlQUFla0IsVUFBVWpCLGVBQVYsRUFBbkI7QUFDQSxnQkFBSSxrQ0FBY0QsWUFBZCxDQUFKLEVBQWlDO0FBQzdCQSwrQkFBZWtCLFVBQVVoQixhQUF6QjtBQUNILGFBRkQsTUFHSztBQUNERiwrQkFBZWYsT0FBT2tCLE1BQVAsQ0FBYyxFQUFkLEVBQWtCYixPQUFsQixFQUEyQjRCLFVBQVVoQixhQUFyQyxFQUFvREYsWUFBcEQsQ0FBZjtBQUNIO0FBQ0RrQixzQkFBVXpCLE1BQVYsQ0FBaUJtQixTQUFqQixFQUE0QkMsU0FBNUIsRUFBdUNDLFNBQXZDLEVBQWtEc0csWUFBbEQsRUFBZ0VwSCxZQUFoRSxFQUE4RWtCLFVBQVVwQixNQUF4RixFQUFnRyxLQUFoRztBQUNBc0gseUJBQWExSyxPQUFiO0FBQ0F3RSxzQkFBVW9HLGtCQUFWLENBQTZCakksS0FBN0IsRUFBb0MwSCxTQUFwQztBQUNBLDZCQUFRekIsV0FBUixJQUF1QixpQkFBUUEsV0FBUixDQUFvQm5HLEtBQXBCLENBQXZCO0FBQ0g7QUFDRCxZQUFNcUIsTUFBTXJCLE1BQU1xQixHQUFOLEdBQVlLLFVBQVVMLEdBQWxDO0FBQ0EsWUFBTStHLHdCQUF3QnJHLFVBQVV2QixzQkFBeEM7QUFDQTRILGlDQUF5QkEsc0JBQXNCdEIsR0FBdEIsQ0FBMEIvRSxTQUExQixFQUFxQ0wsVUFBVUwsR0FBL0MsQ0FBekI7QUFDQW1GLG9DQUE0QnhHLEtBQTVCLEVBQW1DcUIsR0FBbkM7QUFDQSxZQUFJLENBQUMsa0NBQWNoRSxRQUFkLENBQUwsRUFBOEI7QUFDMUJBO0FBQ0g7QUFDSixLQTFERCxNQTJESyxJQUFJLENBQUMsa0NBQWNBLFFBQWQsQ0FBTCxFQUE4QjtBQUMvQkE7QUFDSDtBQUNKOztJQUNvQjRDLFM7QUFDakIsdUJBQVlDLEtBQVosRUFBbUJDLE9BQW5CLEVBQTRCO0FBQUE7O0FBQ3hCLGFBQUtnQixLQUFMLEdBQWEsRUFBYjtBQUNBLGFBQUtrSCxJQUFMLEdBQVksRUFBWjtBQUNBLGFBQUtaLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxhQUFLYSxlQUFMLEdBQXVCLEtBQXZCO0FBQ0EsYUFBS0MsY0FBTCxHQUFzQixLQUF0QjtBQUNBLGFBQUtiLGNBQUwsR0FBc0IsS0FBdEI7QUFDQSxhQUFLaEgsZ0JBQUwsR0FBd0IsS0FBeEI7QUFDQSxhQUFLOEgsYUFBTCxHQUFxQixJQUFyQjtBQUNBLGFBQUtoQixhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsYUFBS2hHLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxhQUFLd0csTUFBTCxHQUFjLElBQWQ7QUFDQSxhQUFLdkgsVUFBTCxHQUFrQixJQUFsQjtBQUNBLGFBQUt5SCxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsYUFBS25ILGFBQUwsR0FBcUIsSUFBckI7QUFDQSxhQUFLVCxNQUFMLEdBQWMsSUFBZDtBQUNBLGFBQUtLLE1BQUwsR0FBYyxLQUFkO0FBQ0EsYUFBS0gsc0JBQUwsR0FBOEIsSUFBOUI7QUFDQTtBQUNBLGFBQUtOLEtBQUwsR0FBYUEsMkJBQWI7QUFDQTtBQUNBLGFBQUtDLE9BQUwsR0FBZUEsNkJBQWYsQ0FyQndCLENBcUJhO0FBQ3hDOzs7OytCQUNNc0ksUyxFQUFXWixTLEVBQVdhLFcsRUFBYSxDQUN6Qzs7O29DQUNXckwsUSxFQUFVO0FBQ2xCLGdCQUFJLEtBQUtvRCxVQUFULEVBQXFCO0FBQ2pCO0FBQ0g7QUFDRCx3Q0FBYTBHLFdBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QjlKLFFBQXZCLENBQWI7QUFDSDs7O2lDQUNRZ0ssUSxFQUFVaEssUSxFQUFVO0FBQ3pCLGdCQUFJLEtBQUtvRCxVQUFULEVBQXFCO0FBQ2pCO0FBQ0g7QUFDRCxnQkFBSSxDQUFDLEtBQUs4SCxjQUFWLEVBQTBCO0FBQ3RCLG9CQUFJLENBQUMsS0FBS0QsZUFBVixFQUEyQjtBQUN2QmxCLHNDQUFrQixJQUFsQixFQUF3QkMsUUFBeEIsRUFBa0NoSyxRQUFsQyxFQUE0QyxLQUFLbUwsYUFBakQ7QUFDSDtBQUNKLGFBSkQsTUFLSztBQUNELG9CQUFJekssUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3ZDLG1EQUFXLDhEQUFYO0FBQ0g7QUFDRDtBQUNIO0FBQ0o7OztxQ0FDWW9KLFEsRUFBVTtBQUNuQixnQkFBSSxLQUFLNUcsVUFBVCxFQUFxQjtBQUNqQjtBQUNIO0FBQ0QsZ0JBQUksQ0FBQyxLQUFLOEgsY0FBVixFQUEwQjtBQUN0QixvQkFBSSxDQUFDLEtBQUtELGVBQVYsRUFBMkI7QUFDdkJsQixzQ0FBa0IsSUFBbEIsRUFBd0JDLFFBQXhCLEVBQWtDLElBQWxDLEVBQXdDLElBQXhDO0FBQ0g7QUFDSixhQUpELE1BS0s7QUFDRCxvQkFBSXRKLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN2QyxtREFBVyw4REFBWDtBQUNIO0FBQ0Q7QUFDSDtBQUNKOzs7NkNBQ29CLENBQ3BCOzs7MkNBQ2tCMEssUyxFQUFXZixTLEVBQVdnQixXLEVBQWEsQ0FDckQ7Ozs4Q0FDcUJILFMsRUFBV1osUyxFQUFXMUgsTyxFQUFTO0FBQ2pELG1CQUFPLElBQVA7QUFDSDs7O2tEQUN5QnNJLFMsRUFBV3RJLE8sRUFBUyxDQUM3Qzs7OzRDQUNtQnNJLFMsRUFBV1osUyxFQUFXYSxXLEVBQWEsQ0FDdEQ7OzswQ0FDaUIsQ0FDakI7Ozt5Q0FDZ0JkLFMsRUFBV0MsUyxFQUFXYyxTLEVBQVdGLFMsRUFBV3RJLE8sRUFBU3lHLEssRUFBT2lDLFksRUFBYztBQUN2RixnQkFBSSxLQUFLcEksVUFBTCxLQUFvQixJQUF4QixFQUE4QjtBQUMxQixvQkFBSTFDLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN2QyxtREFBV29JLElBQVg7QUFDSDtBQUNEO0FBQ0g7QUFDRCxnQkFBS3NDLGNBQWNGLFNBQWQsSUFBMkJBLGdDQUE1QixJQUF3RGIsY0FBY0MsU0FBdEUsSUFBbUZqQixLQUF2RixFQUE4RjtBQUMxRixvQkFBSStCLGNBQWNGLFNBQWQsSUFBMkJBLGdDQUEvQixFQUF3RDtBQUNwRCx3QkFBSSxDQUFDSSxZQUFMLEVBQW1CO0FBQ2YsNkJBQUtwQixZQUFMLEdBQW9CLElBQXBCO0FBQ0EsNkJBQUtxQix5QkFBTCxDQUErQkwsU0FBL0IsRUFBMEN0SSxPQUExQztBQUNBLDZCQUFLc0gsWUFBTCxHQUFvQixLQUFwQjtBQUNIO0FBQ0Qsd0JBQUksS0FBSy9HLGdCQUFULEVBQTJCO0FBQ3ZCbUgsb0NBQVkvSCxPQUFPa0IsTUFBUCxDQUFjLEVBQWQsRUFBa0I2RyxTQUFsQixFQUE2QixLQUFLTCxhQUFsQyxDQUFaO0FBQ0EsNkJBQUs5RyxnQkFBTCxHQUF3QixLQUF4QjtBQUNBLDZCQUFLOEcsYUFBTCxHQUFxQixFQUFyQjtBQUNIO0FBQ0o7QUFDRCxvQkFBTXVCLGVBQWUsS0FBS0MscUJBQUwsQ0FBMkJQLFNBQTNCLEVBQXNDWixTQUF0QyxFQUFpRDFILE9BQWpELENBQXJCO0FBQ0Esb0JBQUk0SSxpQkFBaUIsS0FBakIsSUFBMEJuQyxLQUE5QixFQUFxQztBQUNqQyx5QkFBSzJCLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSx5QkFBS1UsbUJBQUwsQ0FBeUJSLFNBQXpCLEVBQW9DWixTQUFwQyxFQUErQzFILE9BQS9DO0FBQ0EseUJBQUtvSSxjQUFMLEdBQXNCLEtBQXRCO0FBQ0EseUJBQUtySSxLQUFMLEdBQWF1SSxTQUFiO0FBQ0Esd0JBQU10SCxRQUFRLEtBQUtBLEtBQUwsR0FBYTBHLFNBQTNCO0FBQ0EseUJBQUsxSCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxxQ0FBUWMsWUFBUixJQUF3QixpQkFBUUEsWUFBUixDQUFxQixJQUFyQixDQUF4QjtBQUNBLHdCQUFNeEUsU0FBUyxLQUFLQSxNQUFMLENBQVlnTSxTQUFaLEVBQXVCdEgsS0FBdkIsRUFBOEJoQixPQUE5QixDQUFmO0FBQ0EscUNBQVFpQixXQUFSLElBQXVCLGlCQUFRQSxXQUFSLENBQW9CLElBQXBCLENBQXZCO0FBQ0EsMkJBQU8zRSxNQUFQO0FBQ0g7QUFDSjtBQUNEO0FBQ0g7Ozs7OztrQkFoSGdCd0QsUzs7Ozs7Ozs7Ozs7OztRQy9ITHhCLFcsR0FBQUEsVztRQXNCQUMsVSxHQUFBQSxVO1FBK0VBK0gsZSxHQUFBQSxlO1FBR0FDLGUsR0FBQUEsZTtRQUdBd0MsTyxHQUFBQSxPOztBQTlHaEI7O0FBQ0E7O0FBQ0E7Ozs7OztBQUNPLFNBQVN6SyxXQUFULENBQXFCNkMsS0FBckIsRUFBNEIzRSxJQUE1QixFQUFrQ3VELEtBQWxDLEVBQXlDOUQsUUFBekMsRUFBbUQrTSxNQUFuRCxFQUEyRGhHLEdBQTNELEVBQWdFaUcsR0FBaEUsRUFBcUVDLFdBQXJFLEVBQWtGO0FBQ3JGLFFBQUkvSCxRQUFRLEVBQVosQ0FBZSxzQkFBZixFQUF1QztBQUNuQ0Esb0JBQVEsd0NBQW9CM0UsSUFBcEIsSUFBNEIsQ0FBNUIsQ0FBOEIsb0JBQTlCLEdBQXFELENBQTdELENBQStELHVCQUEvRDtBQUNIO0FBQ0QsUUFBTXFELFFBQVE7QUFDVjVELGtCQUFVLGdDQUFZQSxRQUFaLElBQXdCLElBQXhCLEdBQStCQSxRQUQvQjtBQUVWaUYsYUFBSyxJQUZLO0FBR1Y4SCxnQkFBUUEsVUFBVSxJQUhSO0FBSVY3SCxvQkFKVTtBQUtWNkIsYUFBSyxnQ0FBWUEsR0FBWixJQUFtQixJQUFuQixHQUEwQkEsR0FMckI7QUFNVmpELGVBQU9BLFNBQVMsSUFOTjtBQU9Wa0osYUFBS0EsT0FBTyxJQVBGO0FBUVZ6TTtBQVJVLEtBQWQ7QUFVQSxRQUFJLENBQUMwTSxXQUFMLEVBQWtCO0FBQ2Qsc0NBQVVySixLQUFWO0FBQ0g7QUFDRCxRQUFJLGtCQUFRdkIsV0FBWixFQUF5QjtBQUNyQiwwQkFBUUEsV0FBUixDQUFvQnVCLEtBQXBCO0FBQ0g7QUFDRCxXQUFPQSxLQUFQO0FBQ0g7QUFDTSxTQUFTdEIsVUFBVCxDQUFvQjRLLFlBQXBCLEVBQWtDcEosS0FBbEMsRUFBdUQ7QUFBQSxzQ0FBWHFKLFNBQVc7QUFBWEEsaUJBQVc7QUFBQTs7QUFDMUQsUUFBSW5OLFdBQVdtTixTQUFmO0FBQ0EsUUFBSUEsVUFBVTFNLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0IsQ0FBQywyQkFBTzBNLFVBQVUsQ0FBVixDQUFQLENBQTdCLEVBQW1EO0FBQy9DLFlBQUksQ0FBQ3JKLEtBQUwsRUFBWTtBQUNSQSxvQkFBUSxFQUFSO0FBQ0g7QUFDRCxZQUFJcUosVUFBVTFNLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDeEJULHVCQUFXbU4sVUFBVSxDQUFWLENBQVg7QUFDSDtBQUNELFlBQUksZ0NBQVlySixNQUFNOUQsUUFBbEIsQ0FBSixFQUFpQztBQUM3QjhELGtCQUFNOUQsUUFBTixHQUFpQkEsUUFBakI7QUFDSCxTQUZELE1BR0s7QUFDRCxnQkFBSSw0QkFBUUEsUUFBUixDQUFKLEVBQXVCO0FBQ25CLG9CQUFJLDRCQUFROEQsTUFBTTlELFFBQWQsQ0FBSixFQUE2QjtBQUN6QjhELDBCQUFNOUQsUUFBTixHQUFpQjhELE1BQU05RCxRQUFOLENBQWVtSSxNQUFmLENBQXNCbkksUUFBdEIsQ0FBakI7QUFDSCxpQkFGRCxNQUdLO0FBQ0Q4RCwwQkFBTTlELFFBQU4sR0FBaUIsQ0FBQzhELE1BQU05RCxRQUFQLEVBQWlCbUksTUFBakIsQ0FBd0JuSSxRQUF4QixDQUFqQjtBQUNIO0FBQ0osYUFQRCxNQVFLO0FBQ0Qsb0JBQUksNEJBQVE4RCxNQUFNOUQsUUFBZCxDQUFKLEVBQTZCO0FBQ3pCOEQsMEJBQU05RCxRQUFOLENBQWVrQixJQUFmLENBQW9CbEIsUUFBcEI7QUFDSCxpQkFGRCxNQUdLO0FBQ0Q4RCwwQkFBTTlELFFBQU4sR0FBaUIsQ0FBQzhELE1BQU05RCxRQUFQLENBQWpCO0FBQ0E4RCwwQkFBTTlELFFBQU4sQ0FBZWtCLElBQWYsQ0FBb0JsQixRQUFwQjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0RBLGVBQVcsSUFBWDtBQUNBLFFBQUlvTixpQkFBSjtBQUNBLFFBQUksNEJBQVFGLFlBQVIsQ0FBSixFQUEyQjtBQUN2QixZQUFNRyxXQUFXLEVBQWpCO0FBQ0EsYUFBSyxJQUFJak0sSUFBSSxDQUFSLEVBQVdDLE1BQU02TCxhQUFhek0sTUFBbkMsRUFBMkNXLElBQUlDLEdBQS9DLEVBQW9ERCxHQUFwRCxFQUF5RDtBQUNyRGlNLHFCQUFTbk0sSUFBVCxDQUFjb0IsV0FBVzRLLGFBQWE5TCxDQUFiLENBQVgsQ0FBZDtBQUNIO0FBQ0RnTSxtQkFBV0MsUUFBWDtBQUNILEtBTkQsTUFPSztBQUNELFlBQU1uSSxRQUFRZ0ksYUFBYWhJLEtBQTNCO0FBQ0EsWUFBTTZILFNBQVNHLGFBQWFILE1BQWIsSUFBd0JqSixTQUFTQSxNQUFNaUosTUFBdkMsSUFBa0QsSUFBakU7QUFDQSxZQUFNaEcsTUFBTSxDQUFDLGtDQUFjbUcsYUFBYW5HLEdBQTNCLENBQUQsR0FBbUNtRyxhQUFhbkcsR0FBaEQsR0FBdURqRCxRQUFRQSxNQUFNaUQsR0FBZCxHQUFvQixJQUF2RjtBQUNBLFlBQU1pRyxNQUFNRSxhQUFhRixHQUFiLEtBQXFCbEosUUFBUUEsTUFBTWtKLEdBQWQsR0FBb0IsSUFBekMsQ0FBWjtBQUNBLFlBQUk5SCxRQUFRLEVBQVosQ0FBZSxlQUFmLEVBQWdDO0FBQzVCa0ksMkJBQVcvSyxZQUFZNkMsS0FBWixFQUFtQmdJLGFBQWEzTSxJQUFoQyxFQUFzQ21ELE9BQU9rQixNQUFQLENBQWMsRUFBZCxFQUFrQnNJLGFBQWFwSixLQUEvQixFQUFzQ0EsS0FBdEMsQ0FBdEMsRUFBb0YsSUFBcEYsRUFBMEZpSixNQUExRixFQUFrR2hHLEdBQWxHLEVBQXVHaUcsR0FBdkcsRUFBNEcsSUFBNUcsQ0FBWDtBQUNBLG9CQUFNTSxXQUFXRixTQUFTdEosS0FBMUI7QUFDQSxvQkFBSXdKLFFBQUosRUFBYztBQUNWLHdCQUFNQyxjQUFjRCxTQUFTdE4sUUFBN0I7QUFDQTtBQUNBO0FBQ0Esd0JBQUl1TixXQUFKLEVBQWlCO0FBQ2IsNEJBQUksNEJBQVFBLFdBQVIsQ0FBSixFQUEwQjtBQUN0QixpQ0FBSyxJQUFJbk0sS0FBSSxDQUFSLEVBQVdDLFFBQU1rTSxZQUFZOU0sTUFBbEMsRUFBMENXLEtBQUlDLEtBQTlDLEVBQW1ERCxJQUFuRCxFQUF3RDtBQUNwRCxvQ0FBTXdGLFFBQVEyRyxZQUFZbk0sRUFBWixDQUFkO0FBQ0Esb0NBQUksQ0FBQyw4QkFBVXdGLEtBQVYsQ0FBRCxJQUFxQmtHLFFBQVFsRyxLQUFSLENBQXpCLEVBQXlDO0FBQ3JDMEcsNkNBQVN0TixRQUFULENBQWtCb0IsRUFBbEIsSUFBdUJrQixXQUFXc0UsS0FBWCxDQUF2QjtBQUNIO0FBQ0o7QUFDSix5QkFQRCxNQVFLLElBQUlrRyxRQUFRUyxXQUFSLENBQUosRUFBMEI7QUFDM0JELHFDQUFTdE4sUUFBVCxHQUFvQnNDLFdBQVdpTCxXQUFYLENBQXBCO0FBQ0g7QUFDSjtBQUNKO0FBQ0RILHlCQUFTcE4sUUFBVCxHQUFvQixJQUFwQjtBQUNILGFBdEJELE1BdUJLLElBQUlrRixRQUFRLElBQVosQ0FBaUIsYUFBakIsRUFBZ0M7QUFDakNsRiwyQkFBWThELFNBQVNBLE1BQU05RCxRQUFoQixJQUE2QmtOLGFBQWFsTixRQUFyRDtBQUNBb04sMkJBQVcvSyxZQUFZNkMsS0FBWixFQUFtQmdJLGFBQWEzTSxJQUFoQyxFQUFzQ21ELE9BQU9rQixNQUFQLENBQWMsRUFBZCxFQUFrQnNJLGFBQWFwSixLQUEvQixFQUFzQ0EsS0FBdEMsQ0FBdEMsRUFBb0Y5RCxRQUFwRixFQUE4RitNLE1BQTlGLEVBQXNHaEcsR0FBdEcsRUFBMkdpRyxHQUEzRyxFQUFnSCxDQUFDaE4sUUFBakgsQ0FBWDtBQUNILGFBSEksTUFJQSxJQUFJa0YsUUFBUSxDQUFaLENBQWMsVUFBZCxFQUEwQjtBQUMzQmtJLDJCQUFXOUMsZ0JBQWdCNEMsYUFBYWxOLFFBQTdCLENBQVg7QUFDSDtBQUNKO0FBQ0QsV0FBT29OLFFBQVA7QUFDSDtBQUNNLFNBQVMvQyxlQUFULEdBQTJCO0FBQzlCLFdBQU9oSSxZQUFZLElBQVosQ0FBaUIsVUFBakIsQ0FBUDtBQUNIO0FBQ00sU0FBU2lJLGVBQVQsQ0FBeUIxRSxJQUF6QixFQUErQjtBQUNsQyxXQUFPdkQsWUFBWSxDQUFaLENBQWMsVUFBZCxFQUEwQixJQUExQixFQUFnQyxJQUFoQyxFQUFzQ3VELElBQXRDLEVBQTRDLElBQTVDLEVBQWtELElBQWxELEVBQXdELElBQXhELEVBQThELElBQTlELENBQVA7QUFDSDtBQUNNLFNBQVNrSCxPQUFULENBQWlCM00sQ0FBakIsRUFBb0I7QUFDdkIsV0FBTyxDQUFDLENBQUNBLEVBQUUrRSxLQUFYO0FBQ0gsQzs7Ozs7Ozs7Ozs7O1FDdEdlc0ksSyxHQUFBQSxLO1FBcURBQyxZLEdBQUFBLFk7UUF1SUFDLGMsR0FBQUEsYztRQXVKQUMsUyxHQUFBQSxTO1FBUUFDLFMsR0FBQUEsUztRQUdBQyxxQixHQUFBQSxxQjtRQThCQUMsa0IsR0FBQUEsa0I7UUEwU0FDLFMsR0FBQUEsUztRQW1EQUMsVyxHQUFBQSxXO1FBa0JBQyxVLEdBQUFBLFU7UUF1Q0FDLFUsR0FBQUEsVTs7QUE1eEJoQjs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFDTyxTQUFTVixLQUFULENBQWVXLFNBQWYsRUFBMEJDLFNBQTFCLEVBQXFDN0ksU0FBckMsRUFBZ0RDLFNBQWhELEVBQTJEekIsT0FBM0QsRUFBb0VDLEtBQXBFLEVBQTJFeUIsV0FBM0UsRUFBd0Y7QUFDM0YsUUFBSTBJLGNBQWNDLFNBQWxCLEVBQTZCO0FBQ3pCLFlBQU1DLFlBQVlGLFVBQVVqSixLQUE1QjtBQUNBLFlBQU1vSixZQUFZRixVQUFVbEosS0FBNUI7QUFDQSxZQUFJb0osWUFBWSxFQUFoQixDQUFtQixlQUFuQixFQUFvQztBQUNoQyxvQkFBSUQsWUFBWSxFQUFoQixDQUFtQixlQUFuQixFQUFvQztBQUNoQ1gsdUNBQWVTLFNBQWYsRUFBMEJDLFNBQTFCLEVBQXFDN0ksU0FBckMsRUFBZ0RDLFNBQWhELEVBQTJEekIsT0FBM0QsRUFBb0VDLEtBQXBFLEVBQTJFc0ssWUFBWSxDQUF2RixDQUF5RixvQkFBekYsRUFBK0c3SSxXQUEvRztBQUNILHFCQUZELE1BR0s7QUFDRCw2Q0FBYUYsU0FBYixFQUF3Qiw4QkFBZTZJLFNBQWYsRUFBMEIsSUFBMUIsRUFBZ0M1SSxTQUFoQyxFQUEyQ3pCLE9BQTNDLEVBQW9EQyxLQUFwRCxFQUEyRHNLLFlBQVksQ0FBdkUsQ0FBeUUsb0JBQXpFLENBQXhCLEVBQXdISCxTQUF4SCxFQUFtSTNJLFNBQW5JLEVBQThJQyxXQUE5STtBQUNIO0FBQ0osYUFQRCxNQVFLLElBQUk2SSxZQUFZLElBQWhCLENBQXFCLGFBQXJCLEVBQW9DO0FBQ3JDLG9CQUFJRCxZQUFZLElBQWhCLENBQXFCLGFBQXJCLEVBQW9DO0FBQ2hDWixxQ0FBYVUsU0FBYixFQUF3QkMsU0FBeEIsRUFBbUM3SSxTQUFuQyxFQUE4Q0MsU0FBOUMsRUFBeUR6QixPQUF6RCxFQUFrRUMsS0FBbEUsRUFBeUV5QixXQUF6RTtBQUNILHFCQUZELE1BR0s7QUFDRCw2Q0FBYUYsU0FBYixFQUF3Qiw0QkFBYTZJLFNBQWIsRUFBd0IsSUFBeEIsRUFBOEI1SSxTQUE5QixFQUF5Q3pCLE9BQXpDLEVBQWtEQyxLQUFsRCxDQUF4QixFQUFrRm1LLFNBQWxGLEVBQTZGM0ksU0FBN0YsRUFBd0dDLFdBQXhHO0FBQ0g7QUFDSixhQVBJLE1BUUEsSUFBSTZJLFlBQVksQ0FBaEIsQ0FBa0IsVUFBbEIsRUFBOEI7QUFDL0Isb0JBQUlELFlBQVksQ0FBaEIsQ0FBa0IsVUFBbEIsRUFBOEI7QUFDMUJWLGtDQUFVUSxTQUFWLEVBQXFCQyxTQUFyQjtBQUNILHFCQUZELE1BR0s7QUFDRCw2Q0FBYTdJLFNBQWIsRUFBd0IseUJBQVU2SSxTQUFWLEVBQXFCLElBQXJCLENBQXhCLEVBQW9ERCxTQUFwRCxFQUErRDNJLFNBQS9ELEVBQTBFQyxXQUExRTtBQUNIO0FBQ0osYUFQSSxNQVFBLElBQUk2SSxZQUFZLElBQWhCLENBQXFCLFVBQXJCLEVBQWlDO0FBQ2xDLG9CQUFJRCxZQUFZLElBQWhCLENBQXFCLFVBQXJCLEVBQWlDO0FBQzdCVCxrQ0FBVU8sU0FBVixFQUFxQkMsU0FBckI7QUFDSCxxQkFGRCxNQUdLO0FBQ0QsNkNBQWE3SSxTQUFiLEVBQXdCLHlCQUFVNkksU0FBVixFQUFxQixJQUFyQixDQUF4QixFQUFvREQsU0FBcEQsRUFBK0QzSSxTQUEvRCxFQUEwRUMsV0FBMUU7QUFDSDtBQUNKLGFBUEksTUFRQTtBQUNEO0FBQ0EsbURBQTJCMEksU0FBM0IsRUFBc0NDLFNBQXRDLEVBQWlEN0ksU0FBakQsRUFBNERDLFNBQTVELEVBQXVFekIsT0FBdkUsRUFBZ0ZDLEtBQWhGLEVBQXVGeUIsV0FBdkY7QUFDSDtBQUNKO0FBQ0o7QUFDRCxTQUFTOEksZUFBVCxDQUF5QnZPLFFBQXpCLEVBQW1DaUYsR0FBbkMsRUFBd0NPLFNBQXhDLEVBQW1EQyxXQUFuRCxFQUFnRTtBQUM1RCxRQUFJLHFCQUFRekYsUUFBUixDQUFKLEVBQXVCO0FBQ25CLGlDQUFRQSxRQUFSLEVBQWtCaUYsR0FBbEIsRUFBdUJPLFNBQXZCLEVBQWtDLElBQWxDLEVBQXdDQyxXQUF4QztBQUNILEtBRkQsTUFHSyxJQUFJLDRCQUFRekYsUUFBUixDQUFKLEVBQXVCO0FBQ3hCLHNDQUFrQmlGLEdBQWxCLEVBQXVCakYsUUFBdkIsRUFBaUN3RixTQUFqQyxFQUE0Q0MsV0FBNUM7QUFDSCxLQUZJLE1BR0E7QUFDRFIsWUFBSVksV0FBSixHQUFrQixFQUFsQjtBQUNIO0FBQ0o7QUFDTSxTQUFTNEgsWUFBVCxDQUFzQlUsU0FBdEIsRUFBaUNDLFNBQWpDLEVBQTRDN0ksU0FBNUMsRUFBdURDLFNBQXZELEVBQWtFekIsT0FBbEUsRUFBMkVDLEtBQTNFLEVBQWtGeUIsV0FBbEYsRUFBK0Y7QUFDbEcsUUFBTStJLFVBQVVKLFVBQVU3TixJQUExQjtBQUNBLFFBQU1rTyxVQUFVTixVQUFVNU4sSUFBMUI7QUFDQSxRQUFJa08sWUFBWUQsT0FBaEIsRUFBeUI7QUFDckIsdUNBQW1CTCxTQUFuQixFQUE4QkMsU0FBOUIsRUFBeUM3SSxTQUF6QyxFQUFvREMsU0FBcEQsRUFBK0R6QixPQUEvRCxFQUF3RUMsS0FBeEUsRUFBK0V5QixXQUEvRTtBQUNILEtBRkQsTUFHSztBQUNELFlBQU1SLE1BQU1rSixVQUFVbEosR0FBdEI7QUFDQSxZQUFNeUosWUFBWVAsVUFBVXJLLEtBQTVCO0FBQ0EsWUFBTXVJLFlBQVkrQixVQUFVdEssS0FBNUI7QUFDQSxZQUFNK0MsZUFBZXNILFVBQVVuTyxRQUEvQjtBQUNBLFlBQU04RyxlQUFlc0gsVUFBVXBPLFFBQS9CO0FBQ0EsWUFBTXFPLFlBQVlGLFVBQVVqSixLQUE1QjtBQUNBLFlBQU1vSixZQUFZRixVQUFVbEosS0FBNUI7QUFDQSxZQUFNeUosVUFBVVIsVUFBVW5CLEdBQTFCO0FBQ0EsWUFBTTRCLFVBQVVSLFVBQVVwQixHQUExQjtBQUNBLFlBQU02QixhQUFhVixVQUFVcEIsTUFBN0I7QUFDQSxZQUFNK0IsYUFBYVYsVUFBVXJCLE1BQTdCO0FBQ0FxQixrQkFBVW5KLEdBQVYsR0FBZ0JBLEdBQWhCO0FBQ0EsWUFBSWpCLFNBQVVzSyxZQUFZLEdBQXRCLENBQTBCLGdCQUE5QixFQUFpRDtBQUM3Q3RLLG9CQUFRLElBQVI7QUFDSDtBQUNELFlBQUk2QyxpQkFBaUJDLFlBQXJCLEVBQW1DO0FBQy9CaUksMEJBQWNWLFNBQWQsRUFBeUJDLFNBQXpCLEVBQW9DekgsWUFBcEMsRUFBa0RDLFlBQWxELEVBQWdFN0IsR0FBaEUsRUFBcUVPLFNBQXJFLEVBQWdGekIsT0FBaEYsRUFBeUZDLEtBQXpGLEVBQWdHeUIsV0FBaEc7QUFDSDtBQUNELFlBQUl1SixxQkFBcUIsS0FBekI7QUFDQSxZQUFJLEVBQUVWLFlBQVksQ0FBZCxDQUFnQixpQkFBaEIsQ0FBSixFQUF3QztBQUNwQ1UsaUNBQXFCLDhCQUFlVixTQUFmLEVBQTBCRixTQUExQixFQUFxQ25KLEdBQXJDLEVBQTBDLEtBQTFDLENBQXJCO0FBQ0g7QUFDRDtBQUNBLFlBQUl5SixjQUFjckMsU0FBbEIsRUFBNkI7QUFDekIsZ0JBQU00QyxtQkFBbUJQLDZCQUF6QjtBQUNBLGdCQUFNUSxtQkFBbUI3Qyw2QkFBekI7QUFDQSxnQkFBSTZDLHFDQUFKLEVBQW9DO0FBQ2hDLHFCQUFLLElBQUkxTixJQUFULElBQWlCME4sZ0JBQWpCLEVBQW1DO0FBQy9CO0FBQ0Esd0JBQU1DLFlBQVlELGlCQUFpQjFOLElBQWpCLENBQWxCO0FBQ0Esd0JBQU00TixZQUFZSCxpQkFBaUJ6TixJQUFqQixDQUFsQjtBQUNBLHdCQUFJLGtDQUFjMk4sU0FBZCxDQUFKLEVBQThCO0FBQzFCRSxtQ0FBVzdOLElBQVgsRUFBaUIyTixTQUFqQixFQUE0QmxLLEdBQTVCO0FBQ0gscUJBRkQsTUFHSztBQUNEOEksa0NBQVV2TSxJQUFWLEVBQWdCNE4sU0FBaEIsRUFBMkJELFNBQTNCLEVBQXNDbEssR0FBdEMsRUFBMkNqQixLQUEzQyxFQUFrRGdMLGtCQUFsRDtBQUNIO0FBQ0o7QUFDSjtBQUNELGdCQUFJQyxxQ0FBSixFQUFvQztBQUNoQyxxQkFBSyxJQUFJek4sS0FBVCxJQUFpQnlOLGdCQUFqQixFQUFtQztBQUMvQjtBQUNBLHdCQUFJLGtDQUFjQyxpQkFBaUIxTixLQUFqQixDQUFkLENBQUosRUFBMkM7QUFDdkM2TixtQ0FBVzdOLEtBQVgsRUFBaUJ5TixpQkFBaUJ6TixLQUFqQixDQUFqQixFQUF5Q3lELEdBQXpDO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDRDtBQUNBLFlBQUk0SixlQUFlQyxVQUFuQixFQUErQjtBQUMzQmQsd0JBQVlhLFVBQVosRUFBd0JDLFVBQXhCLEVBQW9DN0osR0FBcEM7QUFDSDtBQUNELFlBQUkySixPQUFKLEVBQWE7QUFDVCxnQkFBSUQsWUFBWUMsT0FBWixJQUF1Qm5KLFdBQTNCLEVBQXdDO0FBQ3BDLHdDQUFTUixHQUFULEVBQWMySixPQUFkLEVBQXVCcEosU0FBdkI7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNELFNBQVN1SixhQUFULENBQXVCVixTQUF2QixFQUFrQ0MsU0FBbEMsRUFBNkN6SCxZQUE3QyxFQUEyREMsWUFBM0QsRUFBeUU3QixHQUF6RSxFQUE4RU8sU0FBOUUsRUFBeUZ6QixPQUF6RixFQUFrR0MsS0FBbEcsRUFBeUd5QixXQUF6RyxFQUFzSDtBQUNsSCxRQUFJNkosYUFBYSxLQUFqQjtBQUNBLFFBQUlDLGFBQWEsS0FBakI7QUFDQSxRQUFJakIsWUFBWSxFQUFoQixDQUFtQix5QkFBbkIsRUFBOEM7QUFDMUNnQix5QkFBYSxJQUFiO0FBQ0gsU0FGRCxNQUdLLElBQUtqQixZQUFZLEVBQWIsQ0FBZ0Isc0JBQWhCLElBQTRDQyxZQUFZLEVBQXhELENBQTJELHNCQUEvRCxFQUF3RjtBQUN6RmlCLHFCQUFhLElBQWI7QUFDQUQscUJBQWEsSUFBYjtBQUNILEtBSEksTUFJQSxJQUFJLDhCQUFVeEksWUFBVixDQUFKLEVBQTZCO0FBQzlCeUgsd0JBQWdCMUgsWUFBaEIsRUFBOEI1QixHQUE5QixFQUFtQ08sU0FBbkMsRUFBOENDLFdBQTlDO0FBQ0gsS0FGSSxNQUdBLElBQUksOEJBQVVvQixZQUFWLENBQUosRUFBNkI7QUFDOUIsWUFBSSxxQ0FBaUJDLFlBQWpCLENBQUosRUFBb0M7QUFDaEMsdUNBQWU3QixHQUFmLEVBQW9CNkIsWUFBcEI7QUFDSCxTQUZELE1BR0s7QUFDRCxnQkFBSSw0QkFBUUEsWUFBUixDQUFKLEVBQTJCO0FBQ3ZCLGtEQUFtQkEsWUFBbkIsRUFBaUM3QixHQUFqQyxFQUFzQ08sU0FBdEMsRUFBaUR6QixPQUFqRCxFQUEwREMsS0FBMUQ7QUFDSCxhQUZELE1BR0s7QUFDRCxxQ0FBTThDLFlBQU4sRUFBb0I3QixHQUFwQixFQUF5Qk8sU0FBekIsRUFBb0N6QixPQUFwQyxFQUE2Q0MsS0FBN0M7QUFDSDtBQUNKO0FBQ0osS0FaSSxNQWFBLElBQUkscUNBQWlCOEMsWUFBakIsQ0FBSixFQUFvQztBQUNyQyxZQUFJLHFDQUFpQkQsWUFBakIsQ0FBSixFQUFvQztBQUNoQywwQ0FBa0I1QixHQUFsQixFQUF1QjZCLFlBQXZCO0FBQ0gsU0FGRCxNQUdLO0FBQ0R5SCw0QkFBZ0IxSCxZQUFoQixFQUE4QjVCLEdBQTlCLEVBQW1DTyxTQUFuQyxFQUE4Q0MsV0FBOUM7QUFDQSx1Q0FBZVIsR0FBZixFQUFvQjZCLFlBQXBCO0FBQ0g7QUFDSixLQVJJLE1BU0EsSUFBSSw0QkFBUUEsWUFBUixDQUFKLEVBQTJCO0FBQzVCLFlBQUksNEJBQVFELFlBQVIsQ0FBSixFQUEyQjtBQUN2QnlJLHlCQUFhLElBQWI7QUFDQSxnQkFBSSxvQkFBUXpJLFlBQVIsRUFBc0JDLFlBQXRCLENBQUosRUFBeUM7QUFDckN5SSw2QkFBYSxJQUFiO0FBQ0g7QUFDSixTQUxELE1BTUs7QUFDRGhCLDRCQUFnQjFILFlBQWhCLEVBQThCNUIsR0FBOUIsRUFBbUNPLFNBQW5DLEVBQThDQyxXQUE5QztBQUNBLDhDQUFtQnFCLFlBQW5CLEVBQWlDN0IsR0FBakMsRUFBc0NPLFNBQXRDLEVBQWlEekIsT0FBakQsRUFBMERDLEtBQTFEO0FBQ0g7QUFDSixLQVhJLE1BWUEsSUFBSSw0QkFBUTZDLFlBQVIsQ0FBSixFQUEyQjtBQUM1QixzQ0FBa0I1QixHQUFsQixFQUF1QjRCLFlBQXZCLEVBQXFDckIsU0FBckMsRUFBZ0RDLFdBQWhEO0FBQ0EsNkJBQU1xQixZQUFOLEVBQW9CN0IsR0FBcEIsRUFBeUJPLFNBQXpCLEVBQW9DekIsT0FBcEMsRUFBNkNDLEtBQTdDO0FBQ0gsS0FISSxNQUlBLElBQUkscUJBQVE4QyxZQUFSLENBQUosRUFBMkI7QUFDNUIsWUFBSSxxQkFBUUQsWUFBUixDQUFKLEVBQTJCO0FBQ3ZCMkcsa0JBQU0zRyxZQUFOLEVBQW9CQyxZQUFwQixFQUFrQzdCLEdBQWxDLEVBQXVDTyxTQUF2QyxFQUFrRHpCLE9BQWxELEVBQTJEQyxLQUEzRCxFQUFrRXlCLFdBQWxFO0FBQ0gsU0FGRCxNQUdLO0FBQ0Q4SSw0QkFBZ0IxSCxZQUFoQixFQUE4QjVCLEdBQTlCLEVBQW1DTyxTQUFuQyxFQUE4Q0MsV0FBOUM7QUFDQSxpQ0FBTXFCLFlBQU4sRUFBb0I3QixHQUFwQixFQUF5Qk8sU0FBekIsRUFBb0N6QixPQUFwQyxFQUE2Q0MsS0FBN0M7QUFDSDtBQUNKO0FBQ0QsUUFBSXNMLFVBQUosRUFBZ0I7QUFDWixZQUFJQyxVQUFKLEVBQWdCO0FBQ1p6QiwrQkFBbUJqSCxZQUFuQixFQUFpQ0MsWUFBakMsRUFBK0M3QixHQUEvQyxFQUFvRE8sU0FBcEQsRUFBK0R6QixPQUEvRCxFQUF3RUMsS0FBeEUsRUFBK0V5QixXQUEvRTtBQUNILFNBRkQsTUFHSztBQUNEb0ksa0NBQXNCaEgsWUFBdEIsRUFBb0NDLFlBQXBDLEVBQWtEN0IsR0FBbEQsRUFBdURPLFNBQXZELEVBQWtFekIsT0FBbEUsRUFBMkVDLEtBQTNFLEVBQWtGeUIsV0FBbEY7QUFDSDtBQUNKO0FBQ0o7QUFDTSxTQUFTaUksY0FBVCxDQUF3QlMsU0FBeEIsRUFBbUNDLFNBQW5DLEVBQThDN0ksU0FBOUMsRUFBeURDLFNBQXpELEVBQW9FekIsT0FBcEUsRUFBNkVDLEtBQTdFLEVBQW9Gd0wsT0FBcEYsRUFBNkYvSixXQUE3RixFQUEwRztBQUM3RyxRQUFNZ0ssV0FBV3RCLFVBQVU1TixJQUEzQjtBQUNBLFFBQU1tUCxXQUFXdEIsVUFBVTdOLElBQTNCO0FBQ0EsUUFBTThMLFlBQVkrQixVQUFVdEssS0FBVixvQkFBbEI7QUFDQSxRQUFNNkwsVUFBVXhCLFVBQVVwSCxHQUExQjtBQUNBLFFBQU02SSxVQUFVeEIsVUFBVXJILEdBQTFCO0FBQ0EsUUFBTThJLGVBQWVILFNBQVNHLFlBQTlCO0FBQ0EsUUFBSSxDQUFDLGdDQUFZQSxZQUFaLENBQUwsRUFBZ0M7QUFDNUI7QUFDQSxZQUFNL0wsUUFBUXNLLFVBQVV0SyxLQUFWLElBQW1CLEVBQWpDO0FBQ0Esd0NBQVkrTCxZQUFaLEVBQTBCL0wsS0FBMUI7QUFDQXNLLGtCQUFVdEssS0FBVixHQUFrQkEsS0FBbEI7QUFDSDtBQUNELFFBQUkyTCxhQUFhQyxRQUFqQixFQUEyQjtBQUN2QixZQUFJRixPQUFKLEVBQWE7QUFDVCwyQ0FBbUJyQixTQUFuQixFQUE4QkMsU0FBOUIsRUFBeUM3SSxTQUF6QyxFQUFvREMsU0FBcEQsRUFBK0R6QixPQUEvRCxFQUF3RUMsS0FBeEUsRUFBK0V5QixXQUEvRTtBQUNILFNBRkQsTUFHSztBQUNELGdCQUFNSixZQUFZOEksVUFBVW5PLFFBQVYsQ0FBbUJvRixVQUFuQixJQUFpQytJLFVBQVVuTyxRQUE3RDtBQUNBLGdCQUFNc0YsWUFBWSwyQ0FBK0I4SSxTQUEvQixFQUEwQ3NCLFFBQTFDLEVBQW9EckQsU0FBcEQsRUFBK0R0SSxPQUEvRCxDQUFsQjtBQUNBLHFDQUFRb0ssU0FBUixFQUFtQixJQUFuQixFQUF5QjNJLFNBQXpCLEVBQW9DLEtBQXBDLEVBQTJDQyxXQUEzQztBQUNBK0gsa0JBQU1uSSxTQUFOLEVBQWlCQyxTQUFqQixFQUE0QkMsU0FBNUIsRUFBdUNDLFNBQXZDLEVBQWtEekIsT0FBbEQsRUFBMkRDLEtBQTNELEVBQWtFeUIsV0FBbEU7QUFDQSxnQkFBTVIsTUFBTW1KLFVBQVVuSixHQUFWLEdBQWdCSyxVQUFVTCxHQUF0QztBQUNBbUosc0JBQVVwTyxRQUFWLEdBQXFCc0YsU0FBckI7QUFDQSw2REFBa0M4SSxVQUFVcEIsR0FBNUMsRUFBaUQvSCxHQUFqRCxFQUFzRE8sU0FBdEQ7QUFDSDtBQUNKLEtBYkQsTUFjSztBQUNELFlBQUlnSyxPQUFKLEVBQWE7QUFDVCxnQkFBSUcsWUFBWUMsT0FBaEIsRUFBeUI7QUFDckIsK0NBQW1CekIsU0FBbkIsRUFBOEJDLFNBQTlCLEVBQXlDN0ksU0FBekMsRUFBb0RDLFNBQXBELEVBQStEekIsT0FBL0QsRUFBd0VDLEtBQXhFLEVBQStFeUIsV0FBL0U7QUFDQSx1QkFBTyxLQUFQO0FBQ0g7QUFDRCxnQkFBTXhCLFdBQVdrSyxVQUFVbk8sUUFBM0I7QUFDQSxnQkFBSWlFLFNBQVNJLFVBQWIsRUFBeUI7QUFDckIsb0JBQUksMkJBQU9rQixTQUFQLENBQUosRUFBdUI7QUFDbkIsMkJBQU8sSUFBUDtBQUNIO0FBQ0QseUNBQWFBLFNBQWIsRUFBd0IsOEJBQWU2SSxTQUFmLEVBQTBCLElBQTFCLEVBQWdDNUksU0FBaEMsRUFBMkN6QixPQUEzQyxFQUFvREMsS0FBcEQsRUFBMkRvSyxVQUFVbEosS0FBVixHQUFrQixDQUE3RSxDQUErRSxvQkFBL0UsQ0FBeEIsRUFBOEhpSixVQUFVbEosR0FBeEk7QUFDSCxhQUxELE1BTUs7QUFDRCxvQkFBTTZLLFlBQVk3TCxTQUFTYyxLQUEzQjtBQUNBLG9CQUFNMEcsWUFBWXhILFNBQVNjLEtBQTNCO0FBQ0Esb0JBQU0ySixZQUFZekssU0FBU0gsS0FBM0I7QUFDQSxvQkFBSVcsZUFBZVIsU0FBU1MsZUFBVCxFQUFuQjtBQUNBMEosMEJBQVVwTyxRQUFWLEdBQXFCaUUsUUFBckI7QUFDQUEseUJBQVNNLE1BQVQsR0FBa0JQLEtBQWxCO0FBQ0FDLHlCQUFTbUksYUFBVCxHQUF5QixLQUF6QjtBQUNBLG9CQUFJLGtDQUFjM0gsWUFBZCxDQUFKLEVBQWlDO0FBQzdCQSxtQ0FBZVYsT0FBZjtBQUNILGlCQUZELE1BR0s7QUFDRFUsbUNBQWVmLE9BQU9rQixNQUFQLENBQWMsRUFBZCxFQUFrQmIsT0FBbEIsRUFBMkJVLFlBQTNCLENBQWY7QUFDSDtBQUNELG9CQUFNWSxhQUFZcEIsU0FBU21CLFVBQTNCO0FBQ0Esb0JBQUlFLGFBQVlyQixTQUFTeUgsZ0JBQVQsQ0FBMEJvRSxTQUExQixFQUFxQ3JFLFNBQXJDLEVBQWdEaUQsU0FBaEQsRUFBMkRyQyxTQUEzRCxFQUFzRXRJLE9BQXRFLEVBQStFLEtBQS9FLEVBQXNGLEtBQXRGLENBQWhCO0FBQ0Esb0JBQUk0SCxZQUFZLElBQWhCO0FBQ0ExSCx5QkFBU1UsYUFBVCxHQUF5QkYsWUFBekI7QUFDQSxvQkFBSSw4QkFBVWEsVUFBVixDQUFKLEVBQTBCO0FBQ3RCQSxpQ0FBWSw4QkFBWjtBQUNILGlCQUZELE1BR0ssSUFBSUEsbUNBQUosRUFBeUI7QUFDMUJBLGlDQUFZRCxVQUFaO0FBQ0FzRyxnQ0FBWSxLQUFaO0FBQ0gsaUJBSEksTUFJQSxJQUFJLHFDQUFpQnJHLFVBQWpCLENBQUosRUFBaUM7QUFDbENBLGlDQUFZLDZCQUFnQkEsVUFBaEIsQ0FBWjtBQUNILGlCQUZJLE1BR0EsSUFBSSw0QkFBUUEsVUFBUixDQUFKLEVBQXdCO0FBQ3pCLHdCQUFJM0QsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3ZDLHVEQUFXLGdJQUFYO0FBQ0g7QUFDRDtBQUNILGlCQUxJLE1BTUEsSUFBSSw2QkFBU3lELFVBQVQsS0FBdUJBLFdBQVVMLEdBQXJDLEVBQTBDO0FBQzNDSyxpQ0FBWSx3QkFBV0EsVUFBWCxDQUFaO0FBQ0g7QUFDRCxvQkFBSUEsV0FBVUosS0FBVixHQUFrQixFQUF0QixDQUF5QixlQUF6QixFQUEwQztBQUN0Q0ksbUNBQVVILFdBQVYsR0FBd0JpSixTQUF4QjtBQUNILHFCQUZELE1BR0ssSUFBSS9JLFdBQVVILEtBQVYsR0FBa0IsRUFBdEIsQ0FBeUIsZUFBekIsRUFBMEM7QUFDM0NHLG1DQUFVRixXQUFWLEdBQXdCaUosU0FBeEI7QUFDSDtBQUNEbksseUJBQVNtQixVQUFULEdBQXNCRSxVQUF0QjtBQUNBckIseUJBQVMySCxNQUFULEdBQWtCd0MsU0FBbEI7QUFDQSxvQkFBSXpDLFNBQUosRUFBZTtBQUNYNkIsMEJBQU1uSSxVQUFOLEVBQWlCQyxVQUFqQixFQUE0QkMsU0FBNUIsRUFBdUNDLFNBQXZDLEVBQWtEZixZQUFsRCxFQUFnRVQsS0FBaEUsRUFBdUV5QixXQUF2RTtBQUNBeEIsNkJBQVM4SCxrQkFBVCxDQUE0QjJDLFNBQTVCLEVBQXVDb0IsU0FBdkM7QUFDQSxzQ0FBUS9GLFdBQVIsSUFBdUIsa0JBQVFBLFdBQVIsQ0FBb0JxRSxTQUFwQixDQUF2QjtBQUNBLHNDQUFRakssa0JBQVIsSUFBOEIsaUNBQXNCdUcsR0FBdEIsQ0FBMEJ6RyxRQUExQixFQUFvQ3FCLFdBQVVMLEdBQTlDLENBQTlCO0FBQ0g7QUFDRGhCLHlCQUFTbUksYUFBVCxHQUF5QixJQUF6QjtBQUNBZ0MsMEJBQVVuSixHQUFWLEdBQWdCSyxXQUFVTCxHQUExQjtBQUNIO0FBQ0osU0FsRUQsTUFtRUs7QUFDRCxnQkFBSTBILGVBQWUsSUFBbkI7QUFDQSxnQkFBTStCLGFBQVlQLFVBQVVySyxLQUE1QjtBQUNBLGdCQUFNaU0sWUFBWTNCLFVBQVVwQixHQUE1QjtBQUNBLGdCQUFNZ0QsbUJBQW1CLENBQUMsa0NBQWNELFNBQWQsQ0FBMUI7QUFDQSxnQkFBTTFLLGNBQVk4SSxVQUFVbk8sUUFBNUI7QUFDQSxnQkFBSXNGLGNBQVlELFdBQWhCO0FBQ0ErSSxzQkFBVW5KLEdBQVYsR0FBZ0JrSixVQUFVbEosR0FBMUI7QUFDQW1KLHNCQUFVcE8sUUFBVixHQUFxQnFGLFdBQXJCO0FBQ0EsZ0JBQUlzSyxZQUFZQyxPQUFoQixFQUF5QjtBQUNyQmpELCtCQUFlLElBQWY7QUFDSCxhQUZELE1BR0s7QUFDRCxvQkFBSXFELG9CQUFvQixDQUFDLGtDQUFjRCxVQUFVRSx1QkFBeEIsQ0FBekIsRUFBMkU7QUFDdkV0RCxtQ0FBZW9ELFVBQVVFLHVCQUFWLENBQWtDdkIsVUFBbEMsRUFBNkNyQyxTQUE3QyxDQUFmO0FBQ0g7QUFDSjtBQUNELGdCQUFJTSxpQkFBaUIsS0FBckIsRUFBNEI7QUFDeEIsb0JBQUlxRCxvQkFBb0IsQ0FBQyxrQ0FBY0QsVUFBVUcscUJBQXhCLENBQXpCLEVBQXlFO0FBQ3JFSCw4QkFBVUcscUJBQVYsQ0FBZ0N4QixVQUFoQyxFQUEyQ3JDLFNBQTNDO0FBQ0g7QUFDRC9HLDhCQUFZb0ssU0FBU3JELFNBQVQsRUFBb0J0SSxPQUFwQixDQUFaO0FBQ0Esb0JBQUksOEJBQVV1QixXQUFWLENBQUosRUFBMEI7QUFDdEJBLGtDQUFZLDhCQUFaO0FBQ0gsaUJBRkQsTUFHSyxJQUFJLHFDQUFpQkEsV0FBakIsS0FBK0JBLG9DQUFuQyxFQUF3RDtBQUN6REEsa0NBQVksNkJBQWdCQSxXQUFoQixDQUFaO0FBQ0gsaUJBRkksTUFHQSxJQUFJLDRCQUFRQSxXQUFSLENBQUosRUFBd0I7QUFDekIsd0JBQUkzRCxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDdkMsdURBQVcsZ0lBQVg7QUFDSDtBQUNEO0FBQ0gsaUJBTEksTUFNQSxJQUFJLDZCQUFTeUQsV0FBVCxLQUF1QkEsWUFBVUwsR0FBckMsRUFBMEM7QUFDM0NLLGtDQUFZLHdCQUFXQSxXQUFYLENBQVo7QUFDSDtBQUNELG9CQUFJQSxvQ0FBSixFQUF5QjtBQUNyQmtJLDBCQUFNbkksV0FBTixFQUFpQkMsV0FBakIsRUFBNEJDLFNBQTVCLEVBQXVDQyxTQUF2QyxFQUFrRHpCLE9BQWxELEVBQTJEQyxLQUEzRCxFQUFrRXlCLFdBQWxFO0FBQ0EySSw4QkFBVXBPLFFBQVYsR0FBcUJzRixXQUFyQjtBQUNBLHdCQUFJMEssb0JBQW9CLENBQUMsa0NBQWNELFVBQVVJLG9CQUF4QixDQUF6QixFQUF3RTtBQUNwRUosa0NBQVVJLG9CQUFWLENBQStCekIsVUFBL0IsRUFBMENyQyxTQUExQztBQUNIO0FBQ0QrQiw4QkFBVW5KLEdBQVYsR0FBZ0JLLFlBQVVMLEdBQTFCO0FBQ0g7QUFDSjtBQUNELGdCQUFJSyxZQUFVSixLQUFWLEdBQWtCLEVBQXRCLENBQXlCLGVBQXpCLEVBQTBDO0FBQ3RDSSxnQ0FBVUgsV0FBVixHQUF3QmlKLFNBQXhCO0FBQ0gsaUJBRkQsTUFHSyxJQUFJL0ksWUFBVUgsS0FBVixHQUFrQixFQUF0QixDQUF5QixlQUF6QixFQUEwQztBQUMzQ0csZ0NBQVVGLFdBQVYsR0FBd0JpSixTQUF4QjtBQUNIO0FBQ0o7QUFDSjtBQUNELFdBQU8sS0FBUDtBQUNIO0FBQ00sU0FBU1QsU0FBVCxDQUFtQlEsU0FBbkIsRUFBOEJDLFNBQTlCLEVBQXlDO0FBQzVDLFFBQU1nQyxXQUFXaEMsVUFBVXBPLFFBQTNCO0FBQ0EsUUFBTWlGLE1BQU1rSixVQUFVbEosR0FBdEI7QUFDQW1KLGNBQVVuSixHQUFWLEdBQWdCQSxHQUFoQjtBQUNBLFFBQUlrSixVQUFVbk8sUUFBVixLQUF1Qm9RLFFBQTNCLEVBQXFDO0FBQ2pDbkwsWUFBSWUsU0FBSixHQUFnQm9LLFFBQWhCO0FBQ0g7QUFDSjtBQUNNLFNBQVN4QyxTQUFULENBQW1CTyxTQUFuQixFQUE4QkMsU0FBOUIsRUFBeUM7QUFDNUNBLGNBQVVuSixHQUFWLEdBQWdCa0osVUFBVWxKLEdBQTFCO0FBQ0g7QUFDTSxTQUFTNEkscUJBQVQsQ0FBK0JoSCxZQUEvQixFQUE2Q0MsWUFBN0MsRUFBMkQ3QixHQUEzRCxFQUFnRU8sU0FBaEUsRUFBMkV6QixPQUEzRSxFQUFvRkMsS0FBcEYsRUFBMkZ5QixXQUEzRixFQUF3RztBQUMzRyxRQUFNNEsscUJBQXFCeEosYUFBYXBHLE1BQXhDO0FBQ0EsUUFBTTZQLHFCQUFxQnhKLGFBQWFyRyxNQUF4QztBQUNBLFFBQU04UCxlQUFlRixxQkFBcUJDLGtCQUFyQixHQUEwQ0Esa0JBQTFDLEdBQStERCxrQkFBcEY7QUFDQSxRQUFJalAsSUFBSSxDQUFSO0FBQ0EsV0FBT0EsSUFBSW1QLFlBQVgsRUFBeUJuUCxHQUF6QixFQUE4QjtBQUMxQixZQUFJb1AsWUFBWTFKLGFBQWExRixDQUFiLENBQWhCO0FBQ0EsWUFBSW9QLFVBQVV2TCxHQUFkLEVBQW1CO0FBQ2Z1TCx3QkFBWTFKLGFBQWExRixDQUFiLElBQWtCLHdCQUFXb1AsU0FBWCxDQUE5QjtBQUNIO0FBQ0RoRCxjQUFNM0csYUFBYXpGLENBQWIsQ0FBTixFQUF1Qm9QLFNBQXZCLEVBQWtDdkwsR0FBbEMsRUFBdUNPLFNBQXZDLEVBQWtEekIsT0FBbEQsRUFBMkRDLEtBQTNELEVBQWtFeUIsV0FBbEU7QUFDSDtBQUNELFFBQUk0SyxxQkFBcUJDLGtCQUF6QixFQUE2QztBQUN6QyxhQUFLbFAsSUFBSW1QLFlBQVQsRUFBdUJuUCxJQUFJa1Asa0JBQTNCLEVBQStDbFAsR0FBL0MsRUFBb0Q7QUFDaEQsZ0JBQUlvUCxhQUFZMUosYUFBYTFGLENBQWIsQ0FBaEI7QUFDQSxnQkFBSW9QLFdBQVV2TCxHQUFkLEVBQW1CO0FBQ2Z1TCw2QkFBWTFKLGFBQWExRixDQUFiLElBQWtCLHdCQUFXb1AsVUFBWCxDQUE5QjtBQUNIO0FBQ0Qsb0NBQVl2TCxHQUFaLEVBQWlCLHFCQUFNdUwsVUFBTixFQUFpQixJQUFqQixFQUF1QmhMLFNBQXZCLEVBQWtDekIsT0FBbEMsRUFBMkNDLEtBQTNDLENBQWpCO0FBQ0g7QUFDSixLQVJELE1BU0ssSUFBSXNNLHVCQUF1QixDQUEzQixFQUE4QjtBQUMvQixzQ0FBa0JyTCxHQUFsQixFQUF1QjRCLFlBQXZCLEVBQXFDckIsU0FBckMsRUFBZ0RDLFdBQWhEO0FBQ0gsS0FGSSxNQUdBLElBQUk0SyxxQkFBcUJDLGtCQUF6QixFQUE2QztBQUM5QyxhQUFLbFAsSUFBSW1QLFlBQVQsRUFBdUJuUCxJQUFJaVAsa0JBQTNCLEVBQStDalAsR0FBL0MsRUFBb0Q7QUFDaEQscUNBQVF5RixhQUFhekYsQ0FBYixDQUFSLEVBQXlCNkQsR0FBekIsRUFBOEJPLFNBQTlCLEVBQXlDLEtBQXpDLEVBQWdEQyxXQUFoRDtBQUNIO0FBQ0o7QUFDSjtBQUNNLFNBQVNxSSxrQkFBVCxDQUE0QjJDLENBQTVCLEVBQStCQyxDQUEvQixFQUFrQ3pMLEdBQWxDLEVBQXVDTyxTQUF2QyxFQUFrRHpCLE9BQWxELEVBQTJEQyxLQUEzRCxFQUFrRXlCLFdBQWxFLEVBQStFO0FBQ2xGLFFBQUlrTCxVQUFVRixFQUFFaFEsTUFBaEI7QUFDQSxRQUFJbVEsVUFBVUYsRUFBRWpRLE1BQWhCO0FBQ0EsUUFBSW9RLE9BQU9GLFVBQVUsQ0FBckI7QUFDQSxRQUFJRyxPQUFPRixVQUFVLENBQXJCO0FBQ0EsUUFBSUcsU0FBUyxDQUFiO0FBQ0EsUUFBSUMsU0FBUyxDQUFiO0FBQ0EsUUFBSTVQLFVBQUo7QUFDQSxRQUFJNlAsVUFBSjtBQUNBLFFBQUlDLGNBQUo7QUFDQSxRQUFJQyxjQUFKO0FBQ0EsUUFBSWpMLGlCQUFKO0FBQ0EsUUFBSWtMLGdCQUFKO0FBQ0EsUUFBSUMsYUFBSjtBQUNBLFFBQUlWLFlBQVksQ0FBaEIsRUFBbUI7QUFDZixZQUFJQyxZQUFZLENBQWhCLEVBQW1CO0FBQ2YsOENBQW1CRixDQUFuQixFQUFzQnpMLEdBQXRCLEVBQTJCTyxTQUEzQixFQUFzQ3pCLE9BQXRDLEVBQStDQyxLQUEvQztBQUNIO0FBQ0Q7QUFDSCxLQUxELE1BTUssSUFBSTRNLFlBQVksQ0FBaEIsRUFBbUI7QUFDcEIsc0NBQWtCM0wsR0FBbEIsRUFBdUJ3TCxDQUF2QixFQUEwQmpMLFNBQTFCLEVBQXFDQyxXQUFyQztBQUNBO0FBQ0g7QUFDRCxRQUFJNkwsYUFBYWIsRUFBRU0sTUFBRixDQUFqQjtBQUNBLFFBQUlRLGFBQWFiLEVBQUVNLE1BQUYsQ0FBakI7QUFDQSxRQUFJUSxXQUFXZixFQUFFSSxJQUFGLENBQWY7QUFDQSxRQUFJWSxXQUFXZixFQUFFSSxJQUFGLENBQWY7QUFDQSxRQUFJUyxXQUFXdE0sR0FBZixFQUFvQjtBQUNoQnlMLFVBQUVNLE1BQUYsSUFBWU8sYUFBYSx3QkFBV0EsVUFBWCxDQUF6QjtBQUNIO0FBQ0QsUUFBSUUsU0FBU3hNLEdBQWIsRUFBa0I7QUFDZHlMLFVBQUVJLElBQUYsSUFBVVcsV0FBVyx3QkFBV0EsUUFBWCxDQUFyQjtBQUNIO0FBQ0Q7QUFDQTtBQUNBQyxXQUFPLE9BQU8sSUFBUCxFQUFhO0FBQ2hCO0FBQ0EsZUFBT0osV0FBV3ZLLEdBQVgsS0FBbUJ3SyxXQUFXeEssR0FBckMsRUFBMEM7QUFDdEN5RyxrQkFBTThELFVBQU4sRUFBa0JDLFVBQWxCLEVBQThCdE0sR0FBOUIsRUFBbUNPLFNBQW5DLEVBQThDekIsT0FBOUMsRUFBdURDLEtBQXZELEVBQThEeUIsV0FBOUQ7QUFDQXNMO0FBQ0FDO0FBQ0EsZ0JBQUlELFNBQVNGLElBQVQsSUFBaUJHLFNBQVNGLElBQTlCLEVBQW9DO0FBQ2hDLHNCQUFNWSxLQUFOO0FBQ0g7QUFDREoseUJBQWFiLEVBQUVNLE1BQUYsQ0FBYjtBQUNBUSx5QkFBYWIsRUFBRU0sTUFBRixDQUFiO0FBQ0EsZ0JBQUlPLFdBQVd0TSxHQUFmLEVBQW9CO0FBQ2hCeUwsa0JBQUVNLE1BQUYsSUFBWU8sYUFBYSx3QkFBV0EsVUFBWCxDQUF6QjtBQUNIO0FBQ0o7QUFDRDtBQUNBLGVBQU9DLFNBQVN6SyxHQUFULEtBQWlCMEssU0FBUzFLLEdBQWpDLEVBQXNDO0FBQ2xDeUcsa0JBQU1nRSxRQUFOLEVBQWdCQyxRQUFoQixFQUEwQnhNLEdBQTFCLEVBQStCTyxTQUEvQixFQUEwQ3pCLE9BQTFDLEVBQW1EQyxLQUFuRCxFQUEwRHlCLFdBQTFEO0FBQ0FvTDtBQUNBQztBQUNBLGdCQUFJQyxTQUFTRixJQUFULElBQWlCRyxTQUFTRixJQUE5QixFQUFvQztBQUNoQyxzQkFBTVksS0FBTjtBQUNIO0FBQ0RGLHVCQUFXZixFQUFFSSxJQUFGLENBQVg7QUFDQVksdUJBQVdmLEVBQUVJLElBQUYsQ0FBWDtBQUNBLGdCQUFJVyxTQUFTeE0sR0FBYixFQUFrQjtBQUNkeUwsa0JBQUVJLElBQUYsSUFBVVcsV0FBVyx3QkFBV0EsUUFBWCxDQUFyQjtBQUNIO0FBQ0o7QUFDRDtBQUNBLFlBQUlELFNBQVN6SyxHQUFULEtBQWlCd0ssV0FBV3hLLEdBQWhDLEVBQXFDO0FBQ2pDeUcsa0JBQU1nRSxRQUFOLEVBQWdCRCxVQUFoQixFQUE0QnRNLEdBQTVCLEVBQWlDTyxTQUFqQyxFQUE0Q3pCLE9BQTVDLEVBQXFEQyxLQUFyRCxFQUE0RHlCLFdBQTVEO0FBQ0EsdUNBQWVSLEdBQWYsRUFBb0JzTSxXQUFXdE0sR0FBL0IsRUFBb0NxTSxXQUFXck0sR0FBL0M7QUFDQTRMO0FBQ0FHO0FBQ0FRLHVCQUFXZixFQUFFSSxJQUFGLENBQVg7QUFDQVUseUJBQWFiLEVBQUVNLE1BQUYsQ0FBYjtBQUNBLGdCQUFJTyxXQUFXdE0sR0FBZixFQUFvQjtBQUNoQnlMLGtCQUFFTSxNQUFGLElBQVlPLGFBQWEsd0JBQVdBLFVBQVgsQ0FBekI7QUFDSDtBQUNEO0FBQ0g7QUFDRDtBQUNBLFlBQUlELFdBQVd2SyxHQUFYLEtBQW1CMEssU0FBUzFLLEdBQWhDLEVBQXFDO0FBQ2pDeUcsa0JBQU04RCxVQUFOLEVBQWtCRyxRQUFsQixFQUE0QnhNLEdBQTVCLEVBQWlDTyxTQUFqQyxFQUE0Q3pCLE9BQTVDLEVBQXFEQyxLQUFyRCxFQUE0RHlCLFdBQTVEO0FBQ0EyTCxzQkFBVU4sT0FBTyxDQUFqQjtBQUNBNUssdUJBQVdrTCxVQUFVVixFQUFFalEsTUFBWixHQUFxQmlRLEVBQUVVLE9BQUYsRUFBV25NLEdBQWhDLEdBQXNDLElBQWpEO0FBQ0EsdUNBQWVBLEdBQWYsRUFBb0J3TSxTQUFTeE0sR0FBN0IsRUFBa0NpQixRQUFsQztBQUNBNks7QUFDQUQ7QUFDQVEseUJBQWFiLEVBQUVNLE1BQUYsQ0FBYjtBQUNBVSx1QkFBV2YsRUFBRUksSUFBRixDQUFYO0FBQ0EsZ0JBQUlXLFNBQVN4TSxHQUFiLEVBQWtCO0FBQ2R5TCxrQkFBRUksSUFBRixJQUFVVyxXQUFXLHdCQUFXQSxRQUFYLENBQXJCO0FBQ0g7QUFDRDtBQUNIO0FBQ0Q7QUFDSDtBQUNELFFBQUlWLFNBQVNGLElBQWIsRUFBbUI7QUFDZixZQUFJRyxVQUFVRixJQUFkLEVBQW9CO0FBQ2hCTSxzQkFBVU4sT0FBTyxDQUFqQjtBQUNBNUssdUJBQVdrTCxVQUFVVixFQUFFalEsTUFBWixHQUFxQmlRLEVBQUVVLE9BQUYsRUFBV25NLEdBQWhDLEdBQXNDLElBQWpEO0FBQ0EsbUJBQU8rTCxVQUFVRixJQUFqQixFQUF1QjtBQUNuQk8sdUJBQU9YLEVBQUVNLE1BQUYsQ0FBUDtBQUNBLG9CQUFJSyxLQUFLcE0sR0FBVCxFQUFjO0FBQ1Z5TCxzQkFBRU0sTUFBRixJQUFZSyxPQUFPLHdCQUFXQSxJQUFYLENBQW5CO0FBQ0g7QUFDREw7QUFDQSwyQ0FBZS9MLEdBQWYsRUFBb0IscUJBQU1vTSxJQUFOLEVBQVksSUFBWixFQUFrQjdMLFNBQWxCLEVBQTZCekIsT0FBN0IsRUFBc0NDLEtBQXRDLENBQXBCLEVBQWtFa0MsUUFBbEU7QUFDSDtBQUNKO0FBQ0osS0FiRCxNQWNLLElBQUk4SyxTQUFTRixJQUFiLEVBQW1CO0FBQ3BCLGVBQU9DLFVBQVVGLElBQWpCLEVBQXVCO0FBQ25CLHFDQUFRSixFQUFFTSxRQUFGLENBQVIsRUFBcUI5TCxHQUFyQixFQUEwQk8sU0FBMUIsRUFBcUMsS0FBckMsRUFBNENDLFdBQTVDO0FBQ0g7QUFDSixLQUpJLE1BS0E7QUFDRGtMLGtCQUFVRSxPQUFPRSxNQUFQLEdBQWdCLENBQTFCO0FBQ0FILGtCQUFVRSxPQUFPRSxNQUFQLEdBQWdCLENBQTFCO0FBQ0EsWUFBTVcsVUFBVSxJQUFJelIsS0FBSixDQUFVMFEsT0FBVixDQUFoQjtBQUNBO0FBQ0EsYUFBS3hQLElBQUksQ0FBVCxFQUFZQSxJQUFJd1AsT0FBaEIsRUFBeUJ4UCxHQUF6QixFQUE4QjtBQUMxQnVRLG9CQUFRdlEsQ0FBUixJQUFhLENBQUMsQ0FBZDtBQUNIO0FBQ0QsWUFBSXdRLFFBQVEsS0FBWjtBQUNBLFlBQUlDLE1BQU0sQ0FBVjtBQUNBLFlBQUlDLFVBQVUsQ0FBZDtBQUNBO0FBQ0EsWUFBS2xCLFdBQVcsQ0FBWixJQUFtQkQsVUFBVUMsT0FBVixJQUFxQixFQUE1QyxFQUFpRDtBQUM3QyxpQkFBS3hQLElBQUkyUCxNQUFULEVBQWlCM1AsS0FBS3lQLElBQXRCLEVBQTRCelAsR0FBNUIsRUFBaUM7QUFDN0I4UCx3QkFBUVQsRUFBRXJQLENBQUYsQ0FBUjtBQUNBLG9CQUFJMFEsVUFBVWxCLE9BQWQsRUFBdUI7QUFDbkIseUJBQUtLLElBQUlELE1BQVQsRUFBaUJDLEtBQUtILElBQXRCLEVBQTRCRyxHQUE1QixFQUFpQztBQUM3QkUsZ0NBQVFULEVBQUVPLENBQUYsQ0FBUjtBQUNBLDRCQUFJQyxNQUFNbkssR0FBTixLQUFjb0ssTUFBTXBLLEdBQXhCLEVBQTZCO0FBQ3pCNEssb0NBQVFWLElBQUlELE1BQVosSUFBc0I1UCxDQUF0QjtBQUNBLGdDQUFJeVEsTUFBTVosQ0FBVixFQUFhO0FBQ1RXLHdDQUFRLElBQVI7QUFDSCw2QkFGRCxNQUdLO0FBQ0RDLHNDQUFNWixDQUFOO0FBQ0g7QUFDRCxnQ0FBSUUsTUFBTWxNLEdBQVYsRUFBZTtBQUNYeUwsa0NBQUVPLENBQUYsSUFBT0UsUUFBUSx3QkFBV0EsS0FBWCxDQUFmO0FBQ0g7QUFDRDNELGtDQUFNMEQsS0FBTixFQUFhQyxLQUFiLEVBQW9CbE0sR0FBcEIsRUFBeUJPLFNBQXpCLEVBQW9DekIsT0FBcEMsRUFBNkNDLEtBQTdDLEVBQW9EeUIsV0FBcEQ7QUFDQXFNO0FBQ0FyQiw4QkFBRXJQLENBQUYsSUFBTyxJQUFQO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNKLFNBekJELE1BMEJLO0FBQ0QsZ0JBQU0yUSxXQUFXLElBQUk1SCxHQUFKLEVBQWpCO0FBQ0E7QUFDQSxpQkFBSy9JLElBQUk0UCxNQUFULEVBQWlCNVAsS0FBSzBQLElBQXRCLEVBQTRCMVAsR0FBNUIsRUFBaUM7QUFDN0JpUSx1QkFBT1gsRUFBRXRQLENBQUYsQ0FBUDtBQUNBMlEseUJBQVNySCxHQUFULENBQWEyRyxLQUFLdEssR0FBbEIsRUFBdUIzRixDQUF2QjtBQUNIO0FBQ0Q7QUFDQSxpQkFBS0EsSUFBSTJQLE1BQVQsRUFBaUIzUCxLQUFLeVAsSUFBdEIsRUFBNEJ6UCxHQUE1QixFQUFpQztBQUM3QjhQLHdCQUFRVCxFQUFFclAsQ0FBRixDQUFSO0FBQ0Esb0JBQUkwUSxVQUFVbEIsT0FBZCxFQUF1QjtBQUNuQkssd0JBQUljLFNBQVN0SCxHQUFULENBQWF5RyxNQUFNbkssR0FBbkIsQ0FBSjtBQUNBLHdCQUFJLENBQUMsZ0NBQVlrSyxDQUFaLENBQUwsRUFBcUI7QUFDakJFLGdDQUFRVCxFQUFFTyxDQUFGLENBQVI7QUFDQVUsZ0NBQVFWLElBQUlELE1BQVosSUFBc0I1UCxDQUF0QjtBQUNBLDRCQUFJeVEsTUFBTVosQ0FBVixFQUFhO0FBQ1RXLG9DQUFRLElBQVI7QUFDSCx5QkFGRCxNQUdLO0FBQ0RDLGtDQUFNWixDQUFOO0FBQ0g7QUFDRCw0QkFBSUUsTUFBTWxNLEdBQVYsRUFBZTtBQUNYeUwsOEJBQUVPLENBQUYsSUFBT0UsUUFBUSx3QkFBV0EsS0FBWCxDQUFmO0FBQ0g7QUFDRDNELDhCQUFNMEQsS0FBTixFQUFhQyxLQUFiLEVBQW9CbE0sR0FBcEIsRUFBeUJPLFNBQXpCLEVBQW9DekIsT0FBcEMsRUFBNkNDLEtBQTdDLEVBQW9EeUIsV0FBcEQ7QUFDQXFNO0FBQ0FyQiwwQkFBRXJQLENBQUYsSUFBTyxJQUFQO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDRDtBQUNBLFlBQUl1UCxZQUFZRixFQUFFaFEsTUFBZCxJQUF3QnFSLFlBQVksQ0FBeEMsRUFBMkM7QUFDdkMsMENBQWtCN00sR0FBbEIsRUFBdUJ3TCxDQUF2QixFQUEwQmpMLFNBQTFCLEVBQXFDQyxXQUFyQztBQUNBLG1CQUFPdUwsU0FBU0osT0FBaEIsRUFBeUI7QUFDckJTLHVCQUFPWCxFQUFFTSxNQUFGLENBQVA7QUFDQSxvQkFBSUssS0FBS3BNLEdBQVQsRUFBYztBQUNWeUwsc0JBQUVNLE1BQUYsSUFBWUssT0FBTyx3QkFBV0EsSUFBWCxDQUFuQjtBQUNIO0FBQ0RMO0FBQ0EsMkNBQWUvTCxHQUFmLEVBQW9CLHFCQUFNb00sSUFBTixFQUFZLElBQVosRUFBa0I3TCxTQUFsQixFQUE2QnpCLE9BQTdCLEVBQXNDQyxLQUF0QyxDQUFwQixFQUFrRSxJQUFsRTtBQUNIO0FBQ0osU0FWRCxNQVdLO0FBQ0Q1QyxnQkFBSXVQLFVBQVVtQixPQUFkO0FBQ0EsbUJBQU8xUSxJQUFJLENBQVgsRUFBYztBQUNWOFAsd0JBQVFULEVBQUVNLFFBQUYsQ0FBUjtBQUNBLG9CQUFJLENBQUMsMkJBQU9HLEtBQVAsQ0FBTCxFQUFvQjtBQUNoQiw2Q0FBUUEsS0FBUixFQUFlak0sR0FBZixFQUFvQk8sU0FBcEIsRUFBK0IsSUFBL0IsRUFBcUNDLFdBQXJDO0FBQ0FyRTtBQUNIO0FBQ0o7QUFDRCxnQkFBSXdRLEtBQUosRUFBVztBQUNQLG9CQUFNSSxNQUFNQyxjQUFjTixPQUFkLENBQVo7QUFDQVYsb0JBQUllLElBQUl2UixNQUFKLEdBQWEsQ0FBakI7QUFDQSxxQkFBS1csSUFBSXdQLFVBQVUsQ0FBbkIsRUFBc0J4UCxLQUFLLENBQTNCLEVBQThCQSxHQUE5QixFQUFtQztBQUMvQix3QkFBSXVRLFFBQVF2USxDQUFSLE1BQWUsQ0FBQyxDQUFwQixFQUF1QjtBQUNuQnlRLDhCQUFNelEsSUFBSTRQLE1BQVY7QUFDQUssK0JBQU9YLEVBQUVtQixHQUFGLENBQVA7QUFDQSw0QkFBSVIsS0FBS3BNLEdBQVQsRUFBYztBQUNWeUwsOEJBQUVtQixHQUFGLElBQVNSLE9BQU8sd0JBQVdBLElBQVgsQ0FBaEI7QUFDSDtBQUNERCxrQ0FBVVMsTUFBTSxDQUFoQjtBQUNBM0wsbUNBQVdrTCxVQUFVVixFQUFFalEsTUFBWixHQUFxQmlRLEVBQUVVLE9BQUYsRUFBV25NLEdBQWhDLEdBQXNDLElBQWpEO0FBQ0EsbURBQWVBLEdBQWYsRUFBb0IscUJBQU1vTSxJQUFOLEVBQVlwTSxHQUFaLEVBQWlCTyxTQUFqQixFQUE0QnpCLE9BQTVCLEVBQXFDQyxLQUFyQyxDQUFwQixFQUFpRWtDLFFBQWpFO0FBQ0gscUJBVEQsTUFVSztBQUNELDRCQUFJK0ssSUFBSSxDQUFKLElBQVM3UCxNQUFNNFEsSUFBSWYsQ0FBSixDQUFuQixFQUEyQjtBQUN2Qlksa0NBQU16USxJQUFJNFAsTUFBVjtBQUNBSyxtQ0FBT1gsRUFBRW1CLEdBQUYsQ0FBUDtBQUNBVCxzQ0FBVVMsTUFBTSxDQUFoQjtBQUNBM0wsdUNBQVdrTCxVQUFVVixFQUFFalEsTUFBWixHQUFxQmlRLEVBQUVVLE9BQUYsRUFBV25NLEdBQWhDLEdBQXNDLElBQWpEO0FBQ0EsdURBQWVBLEdBQWYsRUFBb0JvTSxLQUFLcE0sR0FBekIsRUFBOEJpQixRQUE5QjtBQUNILHlCQU5ELE1BT0s7QUFDRCtLO0FBQ0g7QUFDSjtBQUNKO0FBQ0osYUEzQkQsTUE0QkssSUFBSWEsWUFBWWxCLE9BQWhCLEVBQXlCO0FBQzFCO0FBQ0E7QUFDQSxxQkFBS3hQLElBQUl3UCxVQUFVLENBQW5CLEVBQXNCeFAsS0FBSyxDQUEzQixFQUE4QkEsR0FBOUIsRUFBbUM7QUFDL0Isd0JBQUl1USxRQUFRdlEsQ0FBUixNQUFlLENBQUMsQ0FBcEIsRUFBdUI7QUFDbkJ5USw4QkFBTXpRLElBQUk0UCxNQUFWO0FBQ0FLLCtCQUFPWCxFQUFFbUIsR0FBRixDQUFQO0FBQ0EsNEJBQUlSLEtBQUtwTSxHQUFULEVBQWM7QUFDVnlMLDhCQUFFbUIsR0FBRixJQUFTUixPQUFPLHdCQUFXQSxJQUFYLENBQWhCO0FBQ0g7QUFDREQsa0NBQVVTLE1BQU0sQ0FBaEI7QUFDQTNMLG1DQUFXa0wsVUFBVVYsRUFBRWpRLE1BQVosR0FBcUJpUSxFQUFFVSxPQUFGLEVBQVduTSxHQUFoQyxHQUFzQyxJQUFqRDtBQUNBLG1EQUFlQSxHQUFmLEVBQW9CLHFCQUFNb00sSUFBTixFQUFZLElBQVosRUFBa0I3TCxTQUFsQixFQUE2QnpCLE9BQTdCLEVBQXNDQyxLQUF0QyxDQUFwQixFQUFrRWtDLFFBQWxFO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDSjtBQUNKO0FBQ0Q7QUFDQSxTQUFTK0wsYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEI7QUFDeEIsUUFBTUMsSUFBSUQsSUFBSUUsS0FBSixDQUFVLENBQVYsQ0FBVjtBQUNBLFFBQU1DLFNBQVMsQ0FBQyxDQUFELENBQWY7QUFDQSxRQUFJalIsVUFBSjtBQUNBLFFBQUk2UCxVQUFKO0FBQ0EsUUFBSXFCLFVBQUo7QUFDQSxRQUFJQyxVQUFKO0FBQ0EsUUFBSUMsVUFBSjtBQUNBLFFBQU1uUixNQUFNNlEsSUFBSXpSLE1BQWhCO0FBQ0EsU0FBS1csSUFBSSxDQUFULEVBQVlBLElBQUlDLEdBQWhCLEVBQXFCRCxHQUFyQixFQUEwQjtBQUN0QixZQUFJcVIsT0FBT1AsSUFBSTlRLENBQUosQ0FBWDtBQUNBLFlBQUlxUixTQUFTLENBQUMsQ0FBZCxFQUFpQjtBQUNiO0FBQ0g7QUFDRHhCLFlBQUlvQixPQUFPQSxPQUFPNVIsTUFBUCxHQUFnQixDQUF2QixDQUFKO0FBQ0EsWUFBSXlSLElBQUlqQixDQUFKLElBQVN3QixJQUFiLEVBQW1CO0FBQ2ZOLGNBQUUvUSxDQUFGLElBQU82UCxDQUFQO0FBQ0FvQixtQkFBT25SLElBQVAsQ0FBWUUsQ0FBWjtBQUNBO0FBQ0g7QUFDRGtSLFlBQUksQ0FBSjtBQUNBQyxZQUFJRixPQUFPNVIsTUFBUCxHQUFnQixDQUFwQjtBQUNBLGVBQU82UixJQUFJQyxDQUFYLEVBQWM7QUFDVkMsZ0JBQUssQ0FBQ0YsSUFBSUMsQ0FBTCxJQUFVLENBQVgsR0FBZ0IsQ0FBcEI7QUFDQSxnQkFBSUwsSUFBSUcsT0FBT0csQ0FBUCxDQUFKLElBQWlCQyxJQUFyQixFQUEyQjtBQUN2Qkgsb0JBQUlFLElBQUksQ0FBUjtBQUNILGFBRkQsTUFHSztBQUNERCxvQkFBSUMsQ0FBSjtBQUNIO0FBQ0o7QUFDRCxZQUFJQyxPQUFPUCxJQUFJRyxPQUFPQyxDQUFQLENBQUosQ0FBWCxFQUEyQjtBQUN2QixnQkFBSUEsSUFBSSxDQUFSLEVBQVc7QUFDUEgsa0JBQUUvUSxDQUFGLElBQU9pUixPQUFPQyxJQUFJLENBQVgsQ0FBUDtBQUNIO0FBQ0RELG1CQUFPQyxDQUFQLElBQVlsUixDQUFaO0FBQ0g7QUFDSjtBQUNEa1IsUUFBSUQsT0FBTzVSLE1BQVg7QUFDQThSLFFBQUlGLE9BQU9DLElBQUksQ0FBWCxDQUFKO0FBQ0EsV0FBT0EsTUFBTSxDQUFiLEVBQWdCO0FBQ1pELGVBQU9DLENBQVAsSUFBWUMsQ0FBWjtBQUNBQSxZQUFJSixFQUFFSSxDQUFGLENBQUo7QUFDSDtBQUNELFdBQU9GLE1BQVA7QUFDSDtBQUNNLFNBQVN0RSxTQUFULENBQW1Cdk0sSUFBbkIsRUFBeUI0TixTQUF6QixFQUFvQ0QsU0FBcEMsRUFBK0NsSyxHQUEvQyxFQUFvRGpCLEtBQXBELEVBQTJEZ0wsa0JBQTNELEVBQStFO0FBQ2xGLFFBQUkscUJBQVV4TixJQUFWLEtBQW1Cd04sc0JBQXNCeE4sU0FBUyxPQUF0RCxFQUErRDtBQUMzRDtBQUNIO0FBQ0QsUUFBSSx3QkFBYUEsSUFBYixDQUFKLEVBQXdCO0FBQ3BCeUQsWUFBSXpELElBQUosSUFBWSxDQUFDLENBQUMyTixTQUFkO0FBQ0gsS0FGRCxNQUdLLElBQUksdUJBQVkzTixJQUFaLENBQUosRUFBdUI7QUFDeEIsWUFBTWtSLFFBQVEsa0NBQWN2RCxTQUFkLElBQTJCLEVBQTNCLEdBQWdDQSxTQUE5QztBQUNBLFlBQUlsSyxJQUFJekQsSUFBSixNQUFja1IsS0FBbEIsRUFBeUI7QUFDckJ6TixnQkFBSXpELElBQUosSUFBWWtSLEtBQVo7QUFDSDtBQUNKLEtBTEksTUFNQSxJQUFJdEQsY0FBY0QsU0FBbEIsRUFBNkI7QUFDOUIsWUFBSSxrQ0FBYzNOLElBQWQsQ0FBSixFQUF5QjtBQUNyQnlNLHVCQUFXek0sSUFBWCxFQUFpQjROLFNBQWpCLEVBQTRCRCxTQUE1QixFQUF1Q2xLLEdBQXZDO0FBQ0gsU0FGRCxNQUdLLElBQUksa0NBQWNrSyxTQUFkLENBQUosRUFBOEI7QUFDL0JsSyxnQkFBSTBOLGVBQUosQ0FBb0JuUixJQUFwQjtBQUNILFNBRkksTUFHQSxJQUFJQSxTQUFTLFdBQWIsRUFBMEI7QUFDM0IsZ0JBQUl3QyxLQUFKLEVBQVc7QUFDUGlCLG9CQUFJMk4sWUFBSixDQUFpQixPQUFqQixFQUEwQnpELFNBQTFCO0FBQ0gsYUFGRCxNQUdLO0FBQ0RsSyxvQkFBSTROLFNBQUosR0FBZ0IxRCxTQUFoQjtBQUNIO0FBQ0osU0FQSSxNQVFBLElBQUkzTixTQUFTLE9BQWIsRUFBc0I7QUFDdkIwTSx1QkFBV2tCLFNBQVgsRUFBc0JELFNBQXRCLEVBQWlDbEssR0FBakM7QUFDSCxTQUZJLE1BR0EsSUFBSXpELFNBQVMseUJBQWIsRUFBd0M7QUFDekMsZ0JBQU1zUixXQUFXMUQsYUFBYUEsVUFBVTJELE1BQXhDO0FBQ0EsZ0JBQU1DLFdBQVc3RCxhQUFhQSxVQUFVNEQsTUFBeEM7QUFDQSxnQkFBSUQsYUFBYUUsUUFBakIsRUFBMkI7QUFDdkIsb0JBQUksQ0FBQyxrQ0FBY0EsUUFBZCxDQUFMLEVBQThCO0FBQzFCL04sd0JBQUlnTyxTQUFKLEdBQWdCRCxRQUFoQjtBQUNIO0FBQ0o7QUFDSixTQVJJLE1BU0E7QUFDRCxnQkFBTUUsS0FBSyxzQkFBVzFSLElBQVgsQ0FBWDtBQUNBLGdCQUFJMFIsRUFBSixFQUFRO0FBQ0pqTyxvQkFBSWtPLGNBQUosQ0FBbUJELEVBQW5CLEVBQXVCMVIsSUFBdkIsRUFBNkIyTixTQUE3QjtBQUNILGFBRkQsTUFHSztBQUNEbEssb0JBQUkyTixZQUFKLENBQWlCcFIsSUFBakIsRUFBdUIyTixTQUF2QjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ00sU0FBU25CLFdBQVQsQ0FBcUJhLFVBQXJCLEVBQWlDQyxVQUFqQyxFQUE2QzdKLEdBQTdDLEVBQWtEO0FBQ3JENEosaUJBQWFBLDhCQUFiO0FBQ0FDLGlCQUFhQSw4QkFBYjtBQUNBLFFBQUlBLCtCQUFKLEVBQThCO0FBQzFCLGFBQUssSUFBSTlNLEtBQVQsSUFBaUI4TSxVQUFqQixFQUE2QjtBQUN6QjtBQUNBYix1QkFBV2pNLEtBQVgsRUFBaUI2TSxXQUFXN00sS0FBWCxDQUFqQixFQUFtQzhNLFdBQVc5TSxLQUFYLENBQW5DLEVBQXFEaUQsR0FBckQ7QUFDSDtBQUNKO0FBQ0QsUUFBSTRKLCtCQUFKLEVBQThCO0FBQzFCLGFBQUssSUFBSTdNLE1BQVQsSUFBaUI2TSxVQUFqQixFQUE2QjtBQUN6QjtBQUNBLGdCQUFJLGtDQUFjQyxXQUFXOU0sTUFBWCxDQUFkLENBQUosRUFBcUM7QUFDakNpTSwyQkFBV2pNLE1BQVgsRUFBaUI2TSxXQUFXN00sTUFBWCxDQUFqQixFQUFtQyxJQUFuQyxFQUF5Q2lELEdBQXpDO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDTSxTQUFTZ0osVUFBVCxDQUFvQmpNLElBQXBCLEVBQTBCb04sU0FBMUIsRUFBcUNELFNBQXJDLEVBQWdEbEssR0FBaEQsRUFBcUQ7QUFDeEQsUUFBSW1LLGNBQWNELFNBQWxCLEVBQTZCO0FBQ3pCLFlBQU1pRSxnQkFBZ0JwUixLQUFLcVIsV0FBTCxFQUF0QjtBQUNBLFlBQU1DLFdBQVdyTyxJQUFJbU8sYUFBSixDQUFqQjtBQUNBO0FBQ0EsWUFBSUUsWUFBWUEsU0FBU0MsT0FBekIsRUFBa0M7QUFDOUI7QUFDSDtBQUNELFlBQUksMEJBQWV2UixJQUFmLENBQUosRUFBMEI7QUFDdEIseUNBQVlBLElBQVosRUFBa0JvTixTQUFsQixFQUE2QkQsU0FBN0IsRUFBd0NsSyxHQUF4QztBQUNILFNBRkQsTUFHSztBQUNELGdCQUFJbUssY0FBY0QsU0FBbEIsRUFBNkI7QUFDekIsb0JBQUksQ0FBQywrQkFBV0EsU0FBWCxDQUFELElBQTBCLENBQUMsa0NBQWNBLFNBQWQsQ0FBL0IsRUFBeUQ7QUFDckQsd0JBQU0vTSxZQUFZK00sVUFBVXFFLEtBQTVCO0FBQ0Esd0JBQUlwUixhQUFhLCtCQUFXQSxTQUFYLENBQWpCLEVBQXdDO0FBQ3BDLDRCQUFJLENBQUM2QyxJQUFJd08sS0FBVCxFQUFnQjtBQUNaeE8sZ0NBQUltTyxhQUFKLElBQXFCLFVBQVU3TCxDQUFWLEVBQWE7QUFDOUJuRiwwQ0FBVW1GLEVBQUVtTSxhQUFGLENBQWdCRCxLQUExQixFQUFpQ2xNLENBQWpDO0FBQ0gsNkJBRkQ7QUFHSDtBQUNEdEMsNEJBQUl3TyxLQUFKLEdBQVl0RSxVQUFVd0UsSUFBdEI7QUFDSCxxQkFQRCxNQVFLO0FBQ0QsNEJBQUloUyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDdkMscUZBQW1DRyxJQUFuQztBQUNIO0FBQ0Q7QUFDSDtBQUNKLGlCQWhCRCxNQWlCSztBQUNEaUQsd0JBQUltTyxhQUFKLElBQXFCakUsU0FBckI7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNKO0FBQ0Q7QUFDQTtBQUNPLFNBQVNqQixVQUFULENBQW9CMEYsYUFBcEIsRUFBbUNDLGFBQW5DLEVBQWtENU8sR0FBbEQsRUFBdUQ7QUFDMUQsUUFBSSw2QkFBUzRPLGFBQVQsQ0FBSixFQUE2QjtBQUN6QjVPLFlBQUk2TyxLQUFKLENBQVVDLE9BQVYsR0FBb0JGLGFBQXBCO0FBQ0E7QUFDSDtBQUNELFNBQUssSUFBSUMsS0FBVCxJQUFrQkQsYUFBbEIsRUFBaUM7QUFDN0I7QUFDQSxZQUFNbkIsUUFBUW1CLGNBQWNDLEtBQWQsQ0FBZDtBQUNBLFlBQUksNkJBQVNwQixLQUFULEtBQW1CLENBQUMsNEJBQWlCb0IsS0FBakIsQ0FBeEIsRUFBaUQ7QUFDN0M3TyxnQkFBSTZPLEtBQUosQ0FBVUEsS0FBVixJQUFtQnBCLFFBQVEsSUFBM0I7QUFDSCxTQUZELE1BR0s7QUFDRHpOLGdCQUFJNk8sS0FBSixDQUFVQSxLQUFWLElBQW1CcEIsS0FBbkI7QUFDSDtBQUNKO0FBQ0QsUUFBSSxDQUFDLGtDQUFja0IsYUFBZCxDQUFMLEVBQW1DO0FBQy9CLGFBQUssSUFBSUUsTUFBVCxJQUFrQkYsYUFBbEIsRUFBaUM7QUFDN0IsZ0JBQUksa0NBQWNDLGNBQWNDLE1BQWQsQ0FBZCxDQUFKLEVBQXlDO0FBQ3JDN08sb0JBQUk2TyxLQUFKLENBQVVBLE1BQVYsSUFBbUIsRUFBbkI7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNELFNBQVN6RSxVQUFULENBQW9CN04sSUFBcEIsRUFBMEI0TixTQUExQixFQUFxQ25LLEdBQXJDLEVBQTBDO0FBQ3RDLFFBQUl6RCxTQUFTLFdBQWIsRUFBMEI7QUFDdEJ5RCxZQUFJME4sZUFBSixDQUFvQixPQUFwQjtBQUNILEtBRkQsTUFHSyxJQUFJblIsU0FBUyxPQUFiLEVBQXNCO0FBQ3ZCeUQsWUFBSXlOLEtBQUosR0FBWSxFQUFaO0FBQ0gsS0FGSSxNQUdBLElBQUlsUixTQUFTLE9BQWIsRUFBc0I7QUFDdkJ5RCxZQUFJME4sZUFBSixDQUFvQixPQUFwQjtBQUNILEtBRkksTUFHQSxJQUFJLGtDQUFjblIsSUFBZCxDQUFKLEVBQXlCO0FBQzFCLHFDQUFZUSxJQUFaLEVBQWtCb04sU0FBbEIsRUFBNkIsSUFBN0IsRUFBbUNuSyxHQUFuQztBQUNILEtBRkksTUFHQTtBQUNEQSxZQUFJME4sZUFBSixDQUFvQm5SLElBQXBCO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7Ozs7OztRQ3J6QmVnQixXLEdBQUFBLFc7UUEwQ0FuQyxNLEdBQUFBLE07UUErQ0FvQyxjLEdBQUFBLGM7O0FBdkdoQjs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNb0gsd0JBQVEsRUFBZDtBQUNBLElBQU1tQyx3REFBd0IsSUFBSTdCLEdBQUosRUFBOUI7QUFDUCxrQkFBUU4sS0FBUixHQUFnQkEsS0FBaEI7QUFDTyxTQUFTckgsV0FBVCxDQUFxQndLLEdBQXJCLEVBQTBCO0FBQzdCLFFBQUksQ0FBQyxrQkFBUTdJLGtCQUFiLEVBQWlDO0FBQzdCLFlBQUl4QyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDdkMsMkNBQVcsMkpBQVg7QUFDSDtBQUNEO0FBQ0g7QUFDRCxRQUFNb0QsTUFBTStILE9BQU9BLElBQUlnSCxRQUFYLEdBQXNCaEgsR0FBdEIsR0FBNEIsSUFBeEM7QUFDQSxXQUFPaEIsc0JBQXNCdkIsR0FBdEIsQ0FBMEJ1QyxHQUExQixLQUFrQy9ILEdBQXpDO0FBQ0g7QUFDRCxTQUFTZ1AsT0FBVCxDQUFpQmhQLEdBQWpCLEVBQXNCO0FBQ2xCLFNBQUssSUFBSTdELElBQUksQ0FBUixFQUFXQyxNQUFNd0ksTUFBTXBKLE1BQTVCLEVBQW9DVyxJQUFJQyxHQUF4QyxFQUE2Q0QsR0FBN0MsRUFBa0Q7QUFDOUMsWUFBTThTLE9BQU9ySyxNQUFNekksQ0FBTixDQUFiO0FBQ0EsWUFBSThTLEtBQUtqUCxHQUFMLEtBQWFBLEdBQWpCLEVBQXNCO0FBQ2xCLG1CQUFPaVAsSUFBUDtBQUNIO0FBQ0o7QUFDRCxXQUFPLElBQVA7QUFDSDtBQUNELFNBQVNDLE9BQVQsQ0FBaUJsUCxHQUFqQixFQUFzQkgsS0FBdEIsRUFBNkJVLFNBQTdCLEVBQXdDO0FBQ3BDLFFBQU0wTyxPQUFPO0FBQ1RqUCxnQkFEUztBQUVUSCxvQkFGUztBQUdUVTtBQUhTLEtBQWI7QUFLQXFFLFVBQU0zSSxJQUFOLENBQVdnVCxJQUFYO0FBQ0EsV0FBT0EsSUFBUDtBQUNIO0FBQ0QsU0FBU0UsVUFBVCxDQUFvQkYsSUFBcEIsRUFBMEI7QUFDdEIsU0FBSyxJQUFJOVMsSUFBSSxDQUFSLEVBQVdDLE1BQU13SSxNQUFNcEosTUFBNUIsRUFBb0NXLElBQUlDLEdBQXhDLEVBQTZDRCxHQUE3QyxFQUFrRDtBQUM5QyxZQUFJeUksTUFBTXpJLENBQU4sTUFBYThTLElBQWpCLEVBQXVCO0FBQ25Cckssa0JBQU13SyxNQUFOLENBQWFqVCxDQUFiLEVBQWdCLENBQWhCO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7QUFDRCxJQUFJTyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDdkMsUUFBSSw0QkFBYTlCLFNBQVN1VSxJQUFULEtBQWtCLElBQW5DLEVBQXlDO0FBQ3JDLG9DQUFRLHNMQUFSO0FBQ0g7QUFDSjtBQUNELElBQU1DLGVBQWUsMkJBQVl4VSxTQUFTdVUsSUFBckIsR0FBNEIsSUFBakQ7QUFDTyxTQUFTalUsTUFBVCxDQUFnQnlFLEtBQWhCLEVBQXVCUyxTQUF2QixFQUFrQztBQUNyQyxRQUFJZ1AsaUJBQWlCaFAsU0FBckIsRUFBZ0M7QUFDNUIsWUFBSTVELFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN2QywyQ0FBVywwRkFBWDtBQUNIO0FBQ0Q7QUFDSDtBQUNELFFBQUlpRCw4QkFBSixFQUFxQjtBQUNqQjtBQUNIO0FBQ0QsUUFBSW9QLE9BQU9ELFFBQVExTyxTQUFSLENBQVg7QUFDQSxRQUFJLDJCQUFPMk8sSUFBUCxDQUFKLEVBQWtCO0FBQ2QsWUFBTTFPLFlBQVksOEJBQWxCO0FBQ0EsWUFBSSxDQUFDLDhCQUFVVixLQUFWLENBQUwsRUFBdUI7QUFDbkIsZ0JBQUlBLE1BQU1HLEdBQVYsRUFBZTtBQUNYSCx3QkFBUSx3QkFBV0EsS0FBWCxDQUFSO0FBQ0g7QUFDRCxnQkFBSSxDQUFDLHlCQUFZQSxLQUFaLEVBQW1CUyxTQUFuQixFQUE4QkMsU0FBOUIsQ0FBTCxFQUErQztBQUMzQyxxQ0FBTVYsS0FBTixFQUFhUyxTQUFiLEVBQXdCQyxTQUF4QixvQkFBOEMsS0FBOUM7QUFDSDtBQUNEME8sbUJBQU9DLFFBQVE1TyxTQUFSLEVBQW1CVCxLQUFuQixFQUEwQlUsU0FBMUIsQ0FBUDtBQUNBQSxzQkFBVXJFLE9BQVY7QUFDSDtBQUNKLEtBWkQsTUFhSztBQUNELFlBQU1xRSxhQUFZME8sS0FBSzFPLFNBQXZCO0FBQ0FBLG1CQUFVekUsU0FBVixHQUFzQixFQUF0QjtBQUNBLFlBQUksa0NBQWMrRCxLQUFkLENBQUosRUFBMEI7QUFDdEIscUNBQVFvUCxLQUFLcFAsS0FBYixFQUFvQlMsU0FBcEIsRUFBK0JDLFVBQS9CLEVBQTBDLEtBQTFDLEVBQWlELEtBQWpEO0FBQ0E0Tyx1QkFBV0YsSUFBWDtBQUNILFNBSEQsTUFJSztBQUNELGdCQUFJcFAsTUFBTUcsR0FBVixFQUFlO0FBQ1hILHdCQUFRLHdCQUFXQSxLQUFYLENBQVI7QUFDSDtBQUNELGlDQUFNb1AsS0FBS3BQLEtBQVgsRUFBa0JBLEtBQWxCLEVBQXlCUyxTQUF6QixFQUFvQ0MsVUFBcEMsb0JBQTBELEtBQTFELEVBQWlFLEtBQWpFO0FBQ0g7QUFDREEsbUJBQVVyRSxPQUFWO0FBQ0ErUyxhQUFLcFAsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7QUFDRCxRQUFJb1AsSUFBSixFQUFVO0FBQ04sWUFBTU0sWUFBWU4sS0FBS3BQLEtBQXZCO0FBQ0EsWUFBSTBQLGFBQWNBLFVBQVV0UCxLQUFWLEdBQWtCLEVBQWhDLENBQW1DLGVBQXZDLEVBQXlEO0FBQ3JELG1CQUFPc1AsVUFBVXhVLFFBQWpCO0FBQ0g7QUFDSjtBQUNKO0FBQ00sU0FBU3lDLGNBQVQsQ0FBd0I4QyxTQUF4QixFQUFtQztBQUN0QyxXQUFPLFNBQVNrUCxRQUFULENBQWtCcFAsU0FBbEIsRUFBNkJDLFNBQTdCLEVBQXdDO0FBQzNDLFlBQUksQ0FBQ0MsU0FBTCxFQUFnQjtBQUNaQSx3QkFBWUYsU0FBWjtBQUNIO0FBQ0RoRixlQUFPaUYsU0FBUCxFQUFrQkMsU0FBbEI7QUFDSCxLQUxEO0FBTUgsQzs7Ozs7Ozs7Ozs7Ozs7a0JDMUd1Qm1QLGM7O0FBSnhCOztBQUNBOztBQUNBOztBQUNPLElBQU1DLDhCQUFXLElBQUl4SyxHQUFKLEVBQWpCO0FBQ1EsU0FBU3VLLGNBQVQsQ0FBd0J4UCxLQUF4QixFQUErQnRCLEtBQS9CLEVBQXNDcUIsR0FBdEMsRUFBMkMyUCxRQUEzQyxFQUFxRDtBQUNoRSxRQUFJMVAsUUFBUSxHQUFaLENBQWdCLGtCQUFoQixFQUFvQztBQUNoQyxtQkFBTyxnQ0FBYXRCLEtBQWIsRUFBb0JxQixHQUFwQixDQUFQO0FBQ0g7QUFDRCxRQUFJQyxRQUFRLElBQVosQ0FBaUIsbUJBQWpCLEVBQXNDO0FBQ2xDLG1CQUFPLGtDQUFjdEIsS0FBZCxFQUFxQnFCLEdBQXJCLENBQVA7QUFDSDtBQUNELFFBQUlDLFFBQVEsSUFBWixDQUFpQixxQkFBakIsRUFBd0M7QUFDcEMsbUJBQU8sc0NBQWdCdEIsS0FBaEIsRUFBdUJxQixHQUF2QixFQUE0QjJQLFFBQTVCLENBQVA7QUFDSDtBQUNELFdBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7OztBQ2ZELFNBQVNDLGlCQUFULENBQTJCQyxNQUEzQixFQUFtQ0MsTUFBbkMsRUFBMkNyQyxLQUEzQyxFQUFrRDtBQUM5QztBQUNBLFFBQU0vSixRQUFRbU0sT0FBT0UsS0FBUCxDQUFhLEdBQWIsQ0FBZDtBQUNBLFNBQUssSUFBSTVULElBQUksQ0FBUixFQUFXQyxNQUFNc0gsTUFBTWxJLE1BQTVCLEVBQW9DVyxJQUFJQyxHQUF4QyxFQUE2Q0QsR0FBN0MsRUFBa0Q7QUFDOUMyVCxlQUFPcE0sTUFBTXZILENBQU4sQ0FBUCxJQUFtQnNSLEtBQW5CO0FBQ0g7QUFDSjtBQUNNLElBQU11Qyw0QkFBVSw4QkFBaEI7QUFDQSxJQUFNQyx3QkFBUSxzQ0FBZDtBQUNBLElBQU1DLHdCQUFRLDRCQUFkO0FBQ0EsSUFBTUMsb0NBQWMsRUFBcEI7QUFDQSxJQUFNQyxzQ0FBZSxFQUFyQjtBQUNBLElBQU1DLGtDQUFhLEVBQW5CO0FBQ0EsSUFBTTdULDhDQUFtQixFQUF6QjtBQUNBLElBQU04VCxnQ0FBWSxFQUFsQjtBQUNBLElBQU1DLDBDQUFpQixFQUF2QjtBQUNQWCxrQkFBa0IsMkVBQWxCLEVBQStGUyxVQUEvRixFQUEyR0wsT0FBM0c7QUFDQUosa0JBQWtCLDZCQUFsQixFQUFpRFMsVUFBakQsRUFBNkRKLEtBQTdEO0FBQ0FMLGtCQUFrQix1QkFBbEIsRUFBMkNPLFdBQTNDLEVBQXdELElBQXhEO0FBQ0FQLGtCQUFrQixzRUFBbEIsRUFBMEZVLFNBQTFGLEVBQXFHLElBQXJHO0FBQ0FWLGtCQUFrQiw0RkFBbEIsRUFBZ0hXLGNBQWhILEVBQWdJLElBQWhJO0FBQ0FYLGtCQUFrQixpSkFBbEIsRUFBcUtRLFlBQXJLLEVBQW1MLElBQW5MO0FBQ0FSLGtCQUFrQixpWkFBbEIsRUFBcWFwVCxnQkFBcmEsRUFBdWIsSUFBdmIsRTs7Ozs7Ozs7Ozs7Ozs7O1FDZGdCZ1UsSyxHQUFBQSxLO1FBMEJBQyxTLEdBQUFBLFM7UUFRQUMsUyxHQUFBQSxTO1FBUUFDLFksR0FBQUEsWTtRQXdEQUMsa0IsR0FBQUEsa0I7UUFZQUMsYyxHQUFBQSxjO1FBK0NBQyw0QixHQUFBQSw0QjtRQWlDQUMsaUMsR0FBQUEsaUM7UUFVQUMsUSxHQUFBQSxROztBQWhOaEI7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBQ08sU0FBU1IsS0FBVCxDQUFlN1IsS0FBZixFQUFzQjJCLFNBQXRCLEVBQWlDQyxTQUFqQyxFQUE0Q3pCLE9BQTVDLEVBQXFEQyxLQUFyRCxFQUE0RDtBQUMvRCxRQUFNa0IsUUFBUXRCLE1BQU1zQixLQUFwQjtBQUNBLFFBQUlBLFFBQVEsSUFBWixDQUFpQixhQUFqQixFQUFnQztBQUM1QixtQkFBTzBRLGFBQWFoUyxLQUFiLEVBQW9CMkIsU0FBcEIsRUFBK0JDLFNBQS9CLEVBQTBDekIsT0FBMUMsRUFBbURDLEtBQW5ELENBQVA7QUFDSCxTQUZELE1BR0ssSUFBSWtCLFFBQVEsRUFBWixDQUFlLGVBQWYsRUFBZ0M7QUFDakMsbUJBQU80USxlQUFlbFMsS0FBZixFQUFzQjJCLFNBQXRCLEVBQWlDQyxTQUFqQyxFQUE0Q3pCLE9BQTVDLEVBQXFEQyxLQUFyRCxFQUE0RGtCLFFBQVEsQ0FBcEUsQ0FBc0Usb0JBQXRFLENBQVA7QUFDSCxTQUZJLE1BR0EsSUFBSUEsUUFBUSxJQUFaLENBQWlCLFVBQWpCLEVBQTZCO0FBQzlCLG1CQUFPeVEsVUFBVS9SLEtBQVYsRUFBaUIyQixTQUFqQixDQUFQO0FBQ0gsU0FGSSxNQUdBLElBQUlMLFFBQVEsQ0FBWixDQUFjLFVBQWQsRUFBMEI7QUFDM0IsbUJBQU93USxVQUFVOVIsS0FBVixFQUFpQjJCLFNBQWpCLENBQVA7QUFDSCxTQUZJLE1BR0E7QUFDRCxZQUFJNUQsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3ZDLGdCQUFJLFFBQU8rQixLQUFQLHlDQUFPQSxLQUFQLE9BQWlCLFFBQXJCLEVBQStCO0FBQzNCLGtKQUEyR3NTLEtBQUtDLFNBQUwsQ0FBZXZTLEtBQWYsQ0FBM0c7QUFDSCxhQUZELE1BR0s7QUFDRCx3SUFBaUdBLEtBQWpHLHlDQUFpR0EsS0FBakc7QUFDSDtBQUNKO0FBQ0Q7QUFDSDtBQUNKO0FBQ00sU0FBUzhSLFNBQVQsQ0FBbUI5UixLQUFuQixFQUEwQjJCLFNBQTFCLEVBQXFDO0FBQ3hDLFFBQU1OLE1BQU1sRixTQUFTK0YsY0FBVCxDQUF3QmxDLE1BQU01RCxRQUE5QixDQUFaO0FBQ0E0RCxVQUFNcUIsR0FBTixHQUFZQSxHQUFaO0FBQ0EsUUFBSU0sU0FBSixFQUFlO0FBQ1gsZ0NBQVlBLFNBQVosRUFBdUJOLEdBQXZCO0FBQ0g7QUFDRCxXQUFPQSxHQUFQO0FBQ0g7QUFDTSxTQUFTMFEsU0FBVCxDQUFtQi9SLEtBQW5CLEVBQTBCMkIsU0FBMUIsRUFBcUM7QUFDeEMsUUFBTU4sTUFBTWxGLFNBQVMrRixjQUFULENBQXdCLEVBQXhCLENBQVo7QUFDQWxDLFVBQU1xQixHQUFOLEdBQVlBLEdBQVo7QUFDQSxRQUFJTSxTQUFKLEVBQWU7QUFDWCxnQ0FBWUEsU0FBWixFQUF1Qk4sR0FBdkI7QUFDSDtBQUNELFdBQU9BLEdBQVA7QUFDSDtBQUNNLFNBQVMyUSxZQUFULENBQXNCaFMsS0FBdEIsRUFBNkIyQixTQUE3QixFQUF3Q0MsU0FBeEMsRUFBbUR6QixPQUFuRCxFQUE0REMsS0FBNUQsRUFBbUU7QUFDdEUsUUFBSSxrQkFBUTJDLGdCQUFaLEVBQThCO0FBQzFCLFlBQU0xQixPQUFNLCtCQUFlckIsS0FBZixFQUFzQjRCLFNBQXRCLEVBQWlDekIsT0FBakMsRUFBMENDLEtBQTFDLENBQVo7QUFDQSxZQUFJLENBQUMsMkJBQU9pQixJQUFQLENBQUwsRUFBa0I7QUFDZCxnQkFBSSxDQUFDLDJCQUFPTSxTQUFQLENBQUwsRUFBd0I7QUFDcEIsd0NBQVlBLFNBQVosRUFBdUJOLElBQXZCO0FBQ0g7QUFDRCxtQkFBT0EsSUFBUDtBQUNIO0FBQ0o7QUFDRCxRQUFNbUIsTUFBTXhDLE1BQU1yRCxJQUFsQjtBQUNBLFFBQU0yRSxRQUFRdEIsTUFBTXNCLEtBQXBCO0FBQ0EsUUFBSWxCLFNBQVVrQixRQUFRLEdBQWxCLENBQXNCLGdCQUExQixFQUE2QztBQUN6Q2xCLGdCQUFRLElBQVI7QUFDSDtBQUNELFFBQU1pQixNQUFNLGtDQUFzQm1CLEdBQXRCLEVBQTJCcEMsS0FBM0IsQ0FBWjtBQUNBLFFBQU1oRSxXQUFXNEQsTUFBTTVELFFBQXZCO0FBQ0EsUUFBTThELFFBQVFGLE1BQU1FLEtBQXBCO0FBQ0EsUUFBTWlKLFNBQVNuSixNQUFNbUosTUFBckI7QUFDQSxRQUFNQyxNQUFNcEosTUFBTW9KLEdBQWxCO0FBQ0FwSixVQUFNcUIsR0FBTixHQUFZQSxHQUFaO0FBQ0EsUUFBSSxDQUFDLDJCQUFPakYsUUFBUCxDQUFMLEVBQXVCO0FBQ25CLFlBQUkscUNBQWlCQSxRQUFqQixDQUFKLEVBQWdDO0FBQzVCLHVDQUFlaUYsR0FBZixFQUFvQmpGLFFBQXBCO0FBQ0gsU0FGRCxNQUdLLElBQUksNEJBQVFBLFFBQVIsQ0FBSixFQUF1QjtBQUN4QjZWLCtCQUFtQjdWLFFBQW5CLEVBQTZCaUYsR0FBN0IsRUFBa0NPLFNBQWxDLEVBQTZDekIsT0FBN0MsRUFBc0RDLEtBQXREO0FBQ0gsU0FGSSxNQUdBLElBQUkscUJBQVFoRSxRQUFSLENBQUosRUFBdUI7QUFDeEJ5VixrQkFBTXpWLFFBQU4sRUFBZ0JpRixHQUFoQixFQUFxQk8sU0FBckIsRUFBZ0N6QixPQUFoQyxFQUF5Q0MsS0FBekM7QUFDSDtBQUNKO0FBQ0QsUUFBSWdMLHFCQUFxQixLQUF6QjtBQUNBLFFBQUksRUFBRTlKLFFBQVEsQ0FBVixDQUFZLGlCQUFaLENBQUosRUFBb0M7QUFDaEM4Siw2QkFBcUIsOEJBQWU5SixLQUFmLEVBQXNCdEIsS0FBdEIsRUFBNkJxQixHQUE3QixFQUFrQyxJQUFsQyxDQUFyQjtBQUNIO0FBQ0QsUUFBSSxDQUFDLDJCQUFPbkIsS0FBUCxDQUFMLEVBQW9CO0FBQ2hCLGFBQUssSUFBSXRDLElBQVQsSUFBaUJzQyxLQUFqQixFQUF3QjtBQUNwQjtBQUNBLHFDQUFVdEMsSUFBVixFQUFnQixJQUFoQixFQUFzQnNDLE1BQU10QyxJQUFOLENBQXRCLEVBQW1DeUQsR0FBbkMsRUFBd0NqQixLQUF4QyxFQUErQ2dMLGtCQUEvQztBQUNIO0FBQ0o7QUFDRCxRQUFJLENBQUMsMkJBQU9qQyxNQUFQLENBQUwsRUFBcUI7QUFDakIsYUFBSyxJQUFJL0ssSUFBVCxJQUFpQitLLE1BQWpCLEVBQXlCO0FBQ3JCO0FBQ0Esc0NBQVcvSyxJQUFYLEVBQWlCLElBQWpCLEVBQXVCK0ssT0FBTy9LLElBQVAsQ0FBdkIsRUFBcUNpRCxHQUFyQztBQUNIO0FBQ0o7QUFDRCxRQUFJLENBQUMsMkJBQU8rSCxHQUFQLENBQUwsRUFBa0I7QUFDZGlKLGlCQUFTaFIsR0FBVCxFQUFjK0gsR0FBZCxFQUFtQnhILFNBQW5CO0FBQ0g7QUFDRCxRQUFJLENBQUMsMkJBQU9ELFNBQVAsQ0FBTCxFQUF3QjtBQUNwQixnQ0FBWUEsU0FBWixFQUF1Qk4sR0FBdkI7QUFDSDtBQUNELFdBQU9BLEdBQVA7QUFDSDtBQUNNLFNBQVM0USxrQkFBVCxDQUE0QjdWLFFBQTVCLEVBQXNDaUYsR0FBdEMsRUFBMkNPLFNBQTNDLEVBQXNEekIsT0FBdEQsRUFBK0RDLEtBQS9ELEVBQXNFO0FBQ3pFLFNBQUssSUFBSTVDLElBQUksQ0FBUixFQUFXQyxNQUFNckIsU0FBU1MsTUFBL0IsRUFBdUNXLElBQUlDLEdBQTNDLEVBQWdERCxHQUFoRCxFQUFxRDtBQUNqRCxZQUFJd0YsUUFBUTVHLFNBQVNvQixDQUFULENBQVo7QUFDQTtBQUNBLFlBQUksQ0FBQyw4QkFBVXdGLEtBQVYsQ0FBTCxFQUF1QjtBQUNuQixnQkFBSUEsTUFBTTNCLEdBQVYsRUFBZTtBQUNYakYseUJBQVNvQixDQUFULElBQWN3RixRQUFRLHdCQUFXQSxLQUFYLENBQXRCO0FBQ0g7QUFDRDZPLGtCQUFNelYsU0FBU29CLENBQVQsQ0FBTixFQUFtQjZELEdBQW5CLEVBQXdCTyxTQUF4QixFQUFtQ3pCLE9BQW5DLEVBQTRDQyxLQUE1QztBQUNIO0FBQ0o7QUFDSjtBQUNNLFNBQVM4UixjQUFULENBQXdCbFMsS0FBeEIsRUFBK0IyQixTQUEvQixFQUEwQ0MsU0FBMUMsRUFBcUR6QixPQUFyRCxFQUE4REMsS0FBOUQsRUFBcUV3TCxPQUFyRSxFQUE4RTtBQUNqRixRQUFJLGtCQUFRN0ksZ0JBQVosRUFBOEI7QUFDMUIsWUFBTTFCLFFBQU0saUNBQWlCckIsS0FBakIsRUFBd0I0QixTQUF4QixFQUFtQ3pCLE9BQW5DLEVBQTRDQyxLQUE1QyxDQUFaO0FBQ0EsWUFBSSxDQUFDLDJCQUFPaUIsS0FBUCxDQUFMLEVBQWtCO0FBQ2QsZ0JBQUksQ0FBQywyQkFBT00sU0FBUCxDQUFMLEVBQXdCO0FBQ3BCLHdDQUFZQSxTQUFaLEVBQXVCTixLQUF2QjtBQUNIO0FBQ0QsbUJBQU9BLEtBQVA7QUFDSDtBQUNKO0FBQ0QsUUFBTTFFLE9BQU9xRCxNQUFNckQsSUFBbkI7QUFDQSxRQUFNc1AsZUFBZXRQLEtBQUtzUCxZQUExQjtBQUNBLFFBQUkvTCxjQUFKO0FBQ0EsUUFBSSxDQUFDLGdDQUFZK0wsWUFBWixDQUFMLEVBQWdDO0FBQzVCO0FBQ0EvTCxnQkFBUUYsTUFBTUUsS0FBTixJQUFlLEVBQXZCO0FBQ0Esd0NBQVkrTCxZQUFaLEVBQTBCL0wsS0FBMUI7QUFDQUYsY0FBTUUsS0FBTixHQUFjQSxLQUFkO0FBQ0gsS0FMRCxNQU1LO0FBQ0RBLGdCQUFRRixNQUFNRSxLQUFOLG9CQUFSO0FBQ0g7QUFDRCxRQUFNa0osTUFBTXBKLE1BQU1vSixHQUFsQjtBQUNBLFFBQUkvSCxZQUFKO0FBQ0EsUUFBSXVLLE9BQUosRUFBYTtBQUNULFlBQU12TCxXQUFXLHlDQUE2QkwsS0FBN0IsRUFBb0NyRCxJQUFwQyxFQUEwQ3VELEtBQTFDLEVBQWlEQyxPQUFqRCxFQUEwREMsS0FBMUQsQ0FBakI7QUFDQSxZQUFNYyxRQUFRYixTQUFTbUIsVUFBdkI7QUFDQW5CLGlCQUFTMkgsTUFBVCxHQUFrQmhJLEtBQWxCO0FBQ0FBLGNBQU1xQixHQUFOLEdBQVlBLE1BQU13USxNQUFNM1EsS0FBTixFQUFhLElBQWIsRUFBbUJVLFNBQW5CLEVBQThCdkIsU0FBU1UsYUFBdkMsRUFBc0RYLEtBQXRELENBQWxCO0FBQ0EsWUFBSSxDQUFDLDJCQUFPdUIsU0FBUCxDQUFMLEVBQXdCO0FBQ3BCLG9DQUFZQSxTQUFaLEVBQXVCTixHQUF2QjtBQUNIO0FBQ0Q4USxxQ0FBNkJuUyxLQUE3QixFQUFvQ29KLEdBQXBDLEVBQXlDL0ksUUFBekMsRUFBbUR1QixTQUFuRDtBQUNBLDBCQUFRckIsa0JBQVIsSUFBOEIsaUNBQXNCdUcsR0FBdEIsQ0FBMEJ6RyxRQUExQixFQUFvQ2dCLEdBQXBDLENBQTlCO0FBQ0FyQixjQUFNNUQsUUFBTixHQUFpQmlFLFFBQWpCO0FBQ0gsS0FYRCxNQVlLO0FBQ0QsWUFBTWEsU0FBUSwyQ0FBK0JsQixLQUEvQixFQUFzQ3JELElBQXRDLEVBQTRDdUQsS0FBNUMsRUFBbURDLE9BQW5ELENBQWQ7QUFDQUgsY0FBTXFCLEdBQU4sR0FBWUEsTUFBTXdRLE1BQU0zUSxNQUFOLEVBQWEsSUFBYixFQUFtQlUsU0FBbkIsRUFBOEJ6QixPQUE5QixFQUF1Q0MsS0FBdkMsQ0FBbEI7QUFDQUosY0FBTTVELFFBQU4sR0FBaUI4RSxNQUFqQjtBQUNBa1IsMENBQWtDaEosR0FBbEMsRUFBdUMvSCxHQUF2QyxFQUE0Q08sU0FBNUM7QUFDQSxZQUFJLENBQUMsMkJBQU9ELFNBQVAsQ0FBTCxFQUF3QjtBQUNwQixvQ0FBWUEsU0FBWixFQUF1Qk4sR0FBdkI7QUFDSDtBQUNKO0FBQ0QsV0FBT0EsR0FBUDtBQUNIO0FBQ00sU0FBUzhRLDRCQUFULENBQXNDblMsS0FBdEMsRUFBNkNvSixHQUE3QyxFQUFrRC9JLFFBQWxELEVBQTREdUIsU0FBNUQsRUFBdUU7QUFDMUUsUUFBSXdILEdBQUosRUFBUztBQUNMLFlBQUksK0JBQVdBLEdBQVgsQ0FBSixFQUFxQjtBQUNqQkEsZ0JBQUkvSSxRQUFKO0FBQ0gsU0FGRCxNQUdLO0FBQ0QsZ0JBQUl0QyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDdkMsb0JBQUkscUNBQWlCbUwsR0FBakIsQ0FBSixFQUEyQjtBQUN2QixtREFBVyw4RUFBWDtBQUNILGlCQUZELE1BR0ssSUFBSSw2QkFBU0EsR0FBVCxLQUFrQnBKLE1BQU1zQixLQUFOLEdBQWMsQ0FBaEMsQ0FBa0Msb0JBQXRDLEVBQTZEO0FBQzlELG1EQUFXLHFGQUFYO0FBQ0gsaUJBRkksTUFHQTtBQUNELHNHQUE0RGdSLEtBQUtDLFNBQUwsQ0FBZW5KLEdBQWYsQ0FBNUQ7QUFDSDtBQUNKO0FBQ0Q7QUFDSDtBQUNKO0FBQ0QsUUFBTW9KLE1BQU1uUyxTQUFTb1MsaUJBQXJCO0FBQ0EsUUFBTXZNLGFBQWEsa0JBQVFBLFVBQTNCO0FBQ0EsUUFBSSxDQUFDLGdDQUFZc00sR0FBWixDQUFELElBQXFCLENBQUMsMkJBQU90TSxVQUFQLENBQTFCLEVBQThDO0FBQzFDdEUsa0JBQVV4RSxXQUFWLENBQXNCLFlBQU07QUFDeEI4SSwwQkFBY0EsV0FBV2xHLEtBQVgsQ0FBZDtBQUNBd1MsbUJBQU9uUyxTQUFTb1MsaUJBQVQsRUFBUDtBQUNBcFMscUJBQVNtSSxhQUFULEdBQXlCLElBQXpCO0FBQ0gsU0FKRDtBQUtILEtBTkQsTUFPSztBQUNEbkksaUJBQVNtSSxhQUFULEdBQXlCLElBQXpCO0FBQ0g7QUFDSjtBQUNNLFNBQVM0SixpQ0FBVCxDQUEyQ2hKLEdBQTNDLEVBQWdEL0gsR0FBaEQsRUFBcURPLFNBQXJELEVBQWdFO0FBQ25FLFFBQUl3SCxHQUFKLEVBQVM7QUFDTCxZQUFJLENBQUMsa0NBQWNBLElBQUlzSixvQkFBbEIsQ0FBTCxFQUE4QztBQUMxQ3RKLGdCQUFJc0osb0JBQUo7QUFDSDtBQUNELFlBQUksQ0FBQyxrQ0FBY3RKLElBQUl1SixtQkFBbEIsQ0FBTCxFQUE2QztBQUN6Qy9RLHNCQUFVeEUsV0FBVixDQUFzQjtBQUFBLHVCQUFNZ00sSUFBSXVKLG1CQUFKLENBQXdCdFIsR0FBeEIsQ0FBTjtBQUFBLGFBQXRCO0FBQ0g7QUFDSjtBQUNKO0FBQ00sU0FBU2dSLFFBQVQsQ0FBa0JoUixHQUFsQixFQUF1QnlOLEtBQXZCLEVBQThCbE4sU0FBOUIsRUFBeUM7QUFDNUMsUUFBSSwrQkFBV2tOLEtBQVgsQ0FBSixFQUF1QjtBQUNuQmxOLGtCQUFVeEUsV0FBVixDQUFzQjtBQUFBLG1CQUFNMFIsTUFBTXpOLEdBQU4sQ0FBTjtBQUFBLFNBQXRCO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsWUFBSSw4QkFBVXlOLEtBQVYsQ0FBSixFQUFzQjtBQUNsQjtBQUNIO0FBQ0QsWUFBSS9RLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN2QywyQ0FBVyw4RUFBWDtBQUNIO0FBQ0Q7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7Ozs7UUN2TmUyVSxPLEdBQUFBLE87UUFrQkFDLGdCLEdBQUFBLGdCO1FBNkNBQyxjLEdBQUFBLGM7O0FBckVoQjs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ08sU0FBU0YsT0FBVCxDQUFpQjVTLEtBQWpCLEVBQXdCMkIsU0FBeEIsRUFBbUNDLFNBQW5DLEVBQThDbVIsVUFBOUMsRUFBMERsUixXQUExRCxFQUF1RTtBQUMxRSxRQUFNUCxRQUFRdEIsTUFBTXNCLEtBQXBCO0FBQ0EsUUFBSUEsUUFBUSxFQUFaLENBQWUsZUFBZixFQUFnQztBQUM1QnVSLDZCQUFpQjdTLEtBQWpCLEVBQXdCMkIsU0FBeEIsRUFBbUNDLFNBQW5DLEVBQThDbVIsVUFBOUMsRUFBMERsUixXQUExRDtBQUNILFNBRkQsTUFHSyxJQUFJUCxRQUFRLElBQVosQ0FBaUIsYUFBakIsRUFBZ0M7QUFDakN3UiwyQkFBZTlTLEtBQWYsRUFBc0IyQixTQUF0QixFQUFpQ0MsU0FBakMsRUFBNENtUixVQUE1QyxFQUF3RGxSLFdBQXhEO0FBQ0gsU0FGSSxNQUdBLElBQUlQLFNBQVMsRUFBRSxVQUFGLEdBQWUsSUFBeEIsQ0FBNkIsVUFBN0IsQ0FBSixFQUE4QztBQUMvQzBSLDBCQUFrQmhULEtBQWxCLEVBQXlCMkIsU0FBekI7QUFDSDtBQUNKO0FBQ0QsU0FBU3FSLGlCQUFULENBQTJCaFQsS0FBM0IsRUFBa0MyQixTQUFsQyxFQUE2QztBQUN6QyxRQUFJQSxTQUFKLEVBQWU7QUFDWCxnQ0FBWUEsU0FBWixFQUF1QjNCLE1BQU1xQixHQUE3QjtBQUNIO0FBQ0o7QUFDRCxJQUFNNFIsbUJBQW1CLElBQUlDLE9BQUosRUFBekI7QUFDTyxTQUFTTCxnQkFBVCxDQUEwQjdTLEtBQTFCLEVBQWlDMkIsU0FBakMsRUFBNENDLFNBQTVDLEVBQXVEbVIsVUFBdkQsRUFBbUVsUixXQUFuRSxFQUFnRjtBQUNuRixRQUFNeEIsV0FBV0wsTUFBTTVELFFBQXZCO0FBQ0EsUUFBTWtGLFFBQVF0QixNQUFNc0IsS0FBcEI7QUFDQSxRQUFNdkcsc0JBQXNCdUcsUUFBUSxDQUFwQyxDQUFzQyxvQkFBdEM7QUFDQSxRQUFNOEgsTUFBTXBKLE1BQU1vSixHQUFsQjtBQUNBLFFBQU0vSCxNQUFNckIsTUFBTXFCLEdBQWxCO0FBQ0EsUUFBSTRSLGlCQUFpQkUsR0FBakIsQ0FBcUJuVCxLQUFyQixLQUErQixDQUFDNkIsV0FBaEMsSUFBK0MsQ0FBQ0YsU0FBcEQsRUFBK0Q7QUFDM0Q7QUFDSDtBQUNEc1IscUJBQWlCbk0sR0FBakIsQ0FBcUI5RyxLQUFyQixFQUE0QixJQUE1QjtBQUNBLFFBQUksQ0FBQzZCLFdBQUwsRUFBa0I7QUFDZCxZQUFJOUcsbUJBQUosRUFBeUI7QUFDckIsZ0JBQUksQ0FBQ3NGLFNBQVNJLFVBQWQsRUFBMEI7QUFDdEJKLHlCQUFTaUksZUFBVCxHQUEyQixJQUEzQjtBQUNBLGtDQUFRbEMsYUFBUixJQUF5QixrQkFBUUEsYUFBUixDQUFzQnBHLEtBQXRCLENBQXpCO0FBQ0FLLHlCQUFTK1Msb0JBQVQsSUFBaUMvUyxTQUFTK1Msb0JBQVQsRUFBakM7QUFDQSxvQkFBSWhLLE9BQU8sQ0FBQ3ZILFdBQVosRUFBeUI7QUFDckJ1SCx3QkFBSSxJQUFKO0FBQ0g7QUFDRC9JLHlCQUFTSSxVQUFULEdBQXNCLElBQXRCO0FBQ0Esa0NBQVFGLGtCQUFSLElBQThCLGlDQUFzQjJHLE1BQXRCLENBQTZCN0csUUFBN0IsQ0FBOUI7QUFDQSxvQkFBTTRILGVBQWU1SCxTQUFTNkgsVUFBOUI7QUFDQTBLLHdCQUFRdlMsU0FBU21CLFVBQWpCLEVBQTZCLElBQTdCLEVBQW1DeUcsWUFBbkMsRUFBaUQsS0FBakQsRUFBd0RwRyxXQUF4RDtBQUNIO0FBQ0osU0FiRCxNQWNLO0FBQ0QsZ0JBQUksQ0FBQyxrQ0FBY3VILEdBQWQsQ0FBTCxFQUF5QjtBQUNyQixvQkFBSSxDQUFDLGtDQUFjQSxJQUFJaUssc0JBQWxCLENBQUwsRUFBZ0Q7QUFDNUNqSyx3QkFBSWlLLHNCQUFKLENBQTJCaFMsR0FBM0I7QUFDSDtBQUNKO0FBQ0R1UixvQkFBUXZTLFFBQVIsRUFBa0IsSUFBbEIsRUFBd0J1QixTQUF4QixFQUFtQyxLQUFuQyxFQUEwQ0MsV0FBMUM7QUFDSDtBQUNKO0FBQ0QsUUFBSUYsU0FBSixFQUFlO0FBQ1gsWUFBSUYsWUFBWXBCLFNBQVNtQixVQUF6QjtBQUNBLFlBQUksa0NBQWNDLFNBQWQsQ0FBSixFQUE4QjtBQUMxQkEsd0JBQVlwQixRQUFaO0FBQ0g7QUFDRCxnQ0FBWXNCLFNBQVosRUFBdUJOLEdBQXZCO0FBQ0g7QUFDRCxRQUFJLGtCQUFRMEIsZ0JBQVIsSUFBNEIsQ0FBQ2hJLG1CQUE3QixLQUFxRDRHLGFBQWFvUixVQUFsRSxDQUFKLEVBQW1GO0FBQy9FLHNDQUFjL1MsS0FBZDtBQUNIO0FBQ0o7QUFDTSxTQUFTOFMsY0FBVCxDQUF3QjlTLEtBQXhCLEVBQStCMkIsU0FBL0IsRUFBMENDLFNBQTFDLEVBQXFEbVIsVUFBckQsRUFBaUVsUixXQUFqRSxFQUE4RTtBQUNqRixRQUFNUixNQUFNckIsTUFBTXFCLEdBQWxCO0FBQ0EsUUFBTStILE1BQU1wSixNQUFNb0osR0FBbEI7QUFDQSxRQUFNRCxTQUFTbkosTUFBTW1KLE1BQXJCO0FBQ0EsUUFBSThKLGlCQUFpQkUsR0FBakIsQ0FBcUJuVCxLQUFyQixLQUErQixDQUFDNkIsV0FBaEMsSUFBK0MsQ0FBQ0YsU0FBcEQsRUFBK0Q7QUFDM0Q7QUFDSDtBQUNEc1IscUJBQWlCbk0sR0FBakIsQ0FBcUI5RyxLQUFyQixFQUE0QixJQUE1QjtBQUNBLFFBQUlvSixPQUFPLENBQUN2SCxXQUFaLEVBQXlCO0FBQ3JCeVIsbUJBQVdsSyxHQUFYO0FBQ0g7QUFDRCxRQUFNaE4sV0FBVzRELE1BQU01RCxRQUF2QjtBQUNBLFFBQUksQ0FBQyxrQ0FBY0EsUUFBZCxDQUFMLEVBQThCO0FBQzFCdU8sd0JBQWdCdk8sUUFBaEIsRUFBMEJ3RixTQUExQixFQUFxQ0MsV0FBckM7QUFDSDtBQUNELFFBQUksQ0FBQywyQkFBT3NILE1BQVAsQ0FBTCxFQUFxQjtBQUNqQixhQUFLLElBQUkvSyxJQUFULElBQWlCK0ssTUFBakIsRUFBeUI7QUFDckI7QUFDQSxzQ0FBVy9LLElBQVgsRUFBaUIrSyxPQUFPL0ssSUFBUCxDQUFqQixFQUErQixJQUEvQixFQUFxQ2lELEdBQXJDO0FBQ0E4SCxtQkFBTy9LLElBQVAsSUFBZSxJQUFmO0FBQ0g7QUFDSjtBQUNELFFBQUl1RCxTQUFKLEVBQWU7QUFDWCxnQ0FBWUEsU0FBWixFQUF1Qk4sR0FBdkI7QUFDSDtBQUNELFFBQUksa0JBQVEwQixnQkFBUixLQUE2QnBCLGFBQWFvUixVQUExQyxDQUFKLEVBQTJEO0FBQ3ZELG9DQUFZL1MsS0FBWjtBQUNIO0FBQ0o7QUFDRCxTQUFTMkssZUFBVCxDQUF5QnZPLFFBQXpCLEVBQW1Dd0YsU0FBbkMsRUFBOENDLFdBQTlDLEVBQTJEO0FBQ3ZELFFBQUksNEJBQVF6RixRQUFSLENBQUosRUFBdUI7QUFDbkIsYUFBSyxJQUFJb0IsSUFBSSxDQUFSLEVBQVdDLE1BQU1yQixTQUFTUyxNQUEvQixFQUF1Q1csSUFBSUMsR0FBM0MsRUFBZ0RELEdBQWhELEVBQXFEO0FBQ2pELGdCQUFNd0YsUUFBUTVHLFNBQVNvQixDQUFULENBQWQ7QUFDQSxnQkFBSSxDQUFDLDhCQUFVd0YsS0FBVixDQUFELElBQXFCLDZCQUFTQSxLQUFULENBQXpCLEVBQTBDO0FBQ3RDNFAsd0JBQVE1UCxLQUFSLEVBQWUsSUFBZixFQUFxQnBCLFNBQXJCLEVBQWdDLEtBQWhDLEVBQXVDQyxXQUF2QztBQUNIO0FBQ0o7QUFDSixLQVBELE1BUUssSUFBSSw2QkFBU3pGLFFBQVQsQ0FBSixFQUF3QjtBQUN6QndXLGdCQUFReFcsUUFBUixFQUFrQixJQUFsQixFQUF3QndGLFNBQXhCLEVBQW1DLEtBQW5DLEVBQTBDQyxXQUExQztBQUNIO0FBQ0o7QUFDRCxTQUFTeVIsVUFBVCxDQUFvQmxLLEdBQXBCLEVBQXlCO0FBQ3JCLFFBQUksK0JBQVdBLEdBQVgsQ0FBSixFQUFxQjtBQUNqQkEsWUFBSSxJQUFKO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsWUFBSSw4QkFBVUEsR0FBVixDQUFKLEVBQW9CO0FBQ2hCO0FBQ0g7QUFDRCxZQUFJckwsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3ZDLDJDQUFXLDhFQUFYO0FBQ0g7QUFDRDtBQUNIO0FBQ0osQzs7Ozs7Ozs7Ozs7Ozs7OztRQzFIZXNWLHFCLEdBQUFBLHFCOztBQUZoQjs7SUFBWUMsUTs7OztBQUVMLFNBQVNELHFCQUFULENBQStCcFMsS0FBL0IsRUFBc0M7QUFDM0M7QUFDQSxNQUFJc1MsV0FBVztBQUNiLGNBQVUsV0FERzs7QUFHYixzQkFBa0IsSUFITDtBQUliLG1CQUFlLE9BSkY7QUFLYixvQkFBZ0IsUUFMSDs7QUFPYixnQkFBWSxHQVBDO0FBUWIsa0JBQWMsU0FSRDtBQVNiLG1CQUFlLFdBVEY7QUFVYixrQkFBYyxHQVZEOztBQVliLG9CQUFnQixJQVpIO0FBYWIsbUJBQWU7QUFiRixHQUFmOztBQWdCQSxNQUFJQyxXQUFXLEVBQWY7O0FBbEIyQztBQUFBO0FBQUE7O0FBQUE7QUFvQjNDLHlCQUFnQjVULE9BQU82VCxJQUFQLENBQVlGLFFBQVosQ0FBaEIsOEhBQXVDO0FBQUEsVUFBOUJ0USxHQUE4Qjs7QUFDckN1USxlQUFTdlEsR0FBVCxJQUFnQnFRLFNBQVNJLGNBQVQsQ0FBd0J6USxHQUF4QixFQUE2QnNRLFNBQVN0USxHQUFULENBQTdCLENBQWhCO0FBQ0Q7QUF0QjBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBd0IzQyxzQkFBWWhDLEtBQVosSUFBbUIsWUFBWXVTLFFBQS9CO0FBQ0QsQzs7Ozs7Ozs7Ozs7O1FDdkJlRyxjLEdBQUFBLGM7UUFnQkFDLFcsR0FBQUEsVztRQXVCQUMsZ0IsR0FBQUEsZ0I7UUFtQkFDLGEsR0FBQUEsYTs7QUE5RGhCOztBQUNBOztBQUNBLElBQU1DLGlCQUFpQixJQUFJMU4sR0FBSixFQUF2QjtBQUNBLElBQU0yTixlQUFlLElBQUkzTixHQUFKLEVBQXJCO0FBQ08sU0FBU3NOLGNBQVQsQ0FBd0I3VCxLQUF4QixFQUErQjRCLFNBQS9CLEVBQTBDekIsT0FBMUMsRUFBbURDLEtBQW5ELEVBQTBEO0FBQzdELFFBQU1vQyxNQUFNeEMsTUFBTXJELElBQWxCO0FBQ0EsUUFBTXdHLE1BQU1uRCxNQUFNbUQsR0FBbEI7QUFDQSxRQUFNZ1IsUUFBUUQsYUFBYXJOLEdBQWIsQ0FBaUJyRSxHQUFqQixDQUFkO0FBQ0EsUUFBSSxDQUFDLGdDQUFZMlIsS0FBWixDQUFMLEVBQXlCO0FBQ3JCLFlBQU1DLE9BQU9qUixRQUFRLElBQVIsR0FBZWdSLE1BQU1FLFFBQXJCLEdBQWdDRixNQUFNRyxLQUFOLENBQVl6TixHQUFaLENBQWdCMUQsR0FBaEIsQ0FBN0M7QUFDQSxZQUFJLENBQUMsZ0NBQVlpUixJQUFaLENBQUwsRUFBd0I7QUFDcEIsZ0JBQU1HLGdCQUFnQkgsS0FBS0ksR0FBTCxFQUF0QjtBQUNBLGdCQUFJLENBQUMsZ0NBQVlELGFBQVosQ0FBTCxFQUFpQztBQUM3Qiw0Q0FBYUEsYUFBYixFQUE0QnZVLEtBQTVCLEVBQW1DLElBQW5DLEVBQXlDNEIsU0FBekMsRUFBb0R6QixPQUFwRCxFQUE2REMsS0FBN0QsRUFBb0UsSUFBcEU7QUFDQSx1QkFBT0osTUFBTXFCLEdBQWI7QUFDSDtBQUNKO0FBQ0o7QUFDRCxXQUFPLElBQVA7QUFDSDtBQUNNLFNBQVN5UyxXQUFULENBQXFCOVQsS0FBckIsRUFBNEI7QUFDL0IsUUFBTXdDLE1BQU14QyxNQUFNckQsSUFBbEI7QUFDQSxRQUFNd0csTUFBTW5ELE1BQU1tRCxHQUFsQjtBQUNBLFFBQUlnUixRQUFRRCxhQUFhck4sR0FBYixDQUFpQnJFLEdBQWpCLENBQVo7QUFDQSxRQUFJLGdDQUFZMlIsS0FBWixDQUFKLEVBQXdCO0FBQ3BCQSxnQkFBUTtBQUNKRSxzQkFBVSxFQUROO0FBRUpDLG1CQUFPLElBQUkvTixHQUFKO0FBRkgsU0FBUjtBQUlBMk4scUJBQWFwTixHQUFiLENBQWlCdEUsR0FBakIsRUFBc0IyUixLQUF0QjtBQUNIO0FBQ0QsUUFBSSwyQkFBT2hSLEdBQVAsQ0FBSixFQUFpQjtBQUNiZ1IsY0FBTUUsUUFBTixDQUFlL1csSUFBZixDQUFvQjBDLEtBQXBCO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsWUFBSW9VLE9BQU9ELE1BQU1HLEtBQU4sQ0FBWXpOLEdBQVosQ0FBZ0IxRCxHQUFoQixDQUFYO0FBQ0EsWUFBSSxnQ0FBWWlSLElBQVosQ0FBSixFQUF1QjtBQUNuQkEsbUJBQU8sRUFBUDtBQUNBRCxrQkFBTUcsS0FBTixDQUFZeE4sR0FBWixDQUFnQjNELEdBQWhCLEVBQXFCaVIsSUFBckI7QUFDSDtBQUNEQSxhQUFLOVcsSUFBTCxDQUFVMEMsS0FBVjtBQUNIO0FBQ0o7QUFDTSxTQUFTK1QsZ0JBQVQsQ0FBMEIvVCxLQUExQixFQUFpQzRCLFNBQWpDLEVBQTRDekIsT0FBNUMsRUFBcURDLEtBQXJELEVBQTREO0FBQy9ELFFBQU16RCxPQUFPcUQsTUFBTXJELElBQW5CO0FBQ0EsUUFBTXdHLE1BQU1uRCxNQUFNbUQsR0FBbEI7QUFDQSxRQUFNZ1IsUUFBUUYsZUFBZXBOLEdBQWYsQ0FBbUJsSyxJQUFuQixDQUFkO0FBQ0EsUUFBSSxDQUFDLGdDQUFZd1gsS0FBWixDQUFMLEVBQXlCO0FBQ3JCLFlBQU1DLE9BQU9qUixRQUFRLElBQVIsR0FBZWdSLE1BQU1FLFFBQXJCLEdBQWdDRixNQUFNRyxLQUFOLENBQVl6TixHQUFaLENBQWdCMUQsR0FBaEIsQ0FBN0M7QUFDQSxZQUFJLENBQUMsZ0NBQVlpUixJQUFaLENBQUwsRUFBd0I7QUFDcEIsZ0JBQU1HLGdCQUFnQkgsS0FBS0ksR0FBTCxFQUF0QjtBQUNBLGdCQUFJLENBQUMsZ0NBQVlELGFBQVosQ0FBTCxFQUFpQztBQUM3QixvQkFBTWpULFFBQVF0QixNQUFNc0IsS0FBcEI7QUFDQSxvQkFBTW1ULFNBQVMsOEJBQWVGLGFBQWYsRUFBOEJ2VSxLQUE5QixFQUFxQyxJQUFyQyxFQUEyQzRCLFNBQTNDLEVBQXNEekIsT0FBdEQsRUFBK0RDLEtBQS9ELEVBQXNFa0IsUUFBUSxDQUE5RSxDQUFnRixvQkFBaEYsRUFBc0csSUFBdEcsQ0FBZjtBQUNBLG9CQUFJLENBQUNtVCxNQUFMLEVBQWE7QUFDVCwyQkFBT3pVLE1BQU1xQixHQUFiO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDRCxXQUFPLElBQVA7QUFDSDtBQUNNLFNBQVMyUyxhQUFULENBQXVCaFUsS0FBdkIsRUFBOEI7QUFDakMsUUFBTXJELE9BQU9xRCxNQUFNckQsSUFBbkI7QUFDQSxRQUFNd0csTUFBTW5ELE1BQU1tRCxHQUFsQjtBQUNBLFFBQU11UixRQUFRMVUsTUFBTW9KLEdBQXBCO0FBQ0EsUUFBTXVMLGtCQUFrQkQsVUFBVUEsTUFBTWhDLG9CQUFOLElBQzlCZ0MsTUFBTXJCLHNCQUR3QixJQUU5QnFCLE1BQU0vQixtQkFGd0IsSUFHOUIrQixNQUFNcEkscUJBSHdCLElBSTlCb0ksTUFBTW5JLG9CQUpjLENBQXhCO0FBS0EsUUFBSW9JLGVBQUosRUFBcUI7QUFDakI7QUFDSDtBQUNELFFBQUlSLFFBQVFGLGVBQWVwTixHQUFmLENBQW1CbEssSUFBbkIsQ0FBWjtBQUNBLFFBQUksZ0NBQVl3WCxLQUFaLENBQUosRUFBd0I7QUFDcEJBLGdCQUFRO0FBQ0pFLHNCQUFVLEVBRE47QUFFSkMsbUJBQU8sSUFBSS9OLEdBQUo7QUFGSCxTQUFSO0FBSUEwTix1QkFBZW5OLEdBQWYsQ0FBbUJuSyxJQUFuQixFQUF5QndYLEtBQXpCO0FBQ0g7QUFDRCxRQUFJLDJCQUFPaFIsR0FBUCxDQUFKLEVBQWlCO0FBQ2JnUixjQUFNRSxRQUFOLENBQWUvVyxJQUFmLENBQW9CMEMsS0FBcEI7QUFDSCxLQUZELE1BR0s7QUFDRCxZQUFJb1UsT0FBT0QsTUFBTUcsS0FBTixDQUFZek4sR0FBWixDQUFnQjFELEdBQWhCLENBQVg7QUFDQSxZQUFJLGdDQUFZaVIsSUFBWixDQUFKLEVBQXVCO0FBQ25CQSxtQkFBTyxFQUFQO0FBQ0FELGtCQUFNRyxLQUFOLENBQVl4TixHQUFaLENBQWdCM0QsR0FBaEIsRUFBcUJpUixJQUFyQjtBQUNIO0FBQ0RBLGFBQUs5VyxJQUFMLENBQVUwQyxLQUFWO0FBQ0g7QUFDSixDOzs7Ozs7Ozs7Ozs7UUNoRGU0VSxlLEdBQUFBLGU7UUFtRkE5VyxTLEdBQUFBLFM7O0FBaEloQjs7QUFDQTs7QUFDQSxTQUFTK1csUUFBVCxDQUFrQjFSLEdBQWxCLEVBQXVCbkQsS0FBdkIsRUFBOEI7QUFDMUJBLFVBQU1tRCxHQUFOLEdBQVlBLEdBQVo7QUFDQSxXQUFPbkQsS0FBUDtBQUNIO0FBQ0QsU0FBUzhVLGlCQUFULENBQTJCM1IsR0FBM0IsRUFBZ0NuRCxLQUFoQyxFQUF1QztBQUNuQyxRQUFJLDZCQUFTbUQsR0FBVCxDQUFKLEVBQW1CO0FBQ2ZBLG9CQUFVQSxHQUFWO0FBQ0g7QUFDRCxRQUFJLDJCQUFPbkQsTUFBTW1ELEdBQWIsS0FBcUJuRCxNQUFNbUQsR0FBTixDQUFVLENBQVYsTUFBaUIsR0FBMUMsRUFBK0M7QUFDM0MsZUFBTzBSLFNBQVMxUixHQUFULEVBQWNuRCxLQUFkLENBQVA7QUFDSDtBQUNELFdBQU9BLEtBQVA7QUFDSDtBQUNELFNBQVMrVSxjQUFULENBQXdCNVIsR0FBeEIsRUFBNkJuRCxLQUE3QixFQUFvQztBQUNoQ0EsVUFBTW1ELEdBQU4sR0FBWUEsTUFBTW5ELE1BQU1tRCxHQUF4QjtBQUNBLFdBQU9uRCxLQUFQO0FBQ0g7QUFDRCxTQUFTZ1YsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDeEcsTUFBakMsRUFBeUN5RyxLQUF6QyxFQUFnREMsVUFBaEQsRUFBNEQ7QUFDeEQsU0FBSyxJQUFJMVgsTUFBTXdYLE1BQU1wWSxNQUFyQixFQUE2QnFZLFFBQVF6WCxHQUFyQyxFQUEwQ3lYLE9BQTFDLEVBQW1EO0FBQy9DLFlBQUlFLElBQUlILE1BQU1DLEtBQU4sQ0FBUjtBQUNBLFlBQU0vUixNQUFTZ1MsVUFBVCxTQUF1QkQsS0FBN0I7QUFDQSxZQUFJLENBQUMsOEJBQVVFLENBQVYsQ0FBTCxFQUFtQjtBQUNmLGdCQUFJLDRCQUFRQSxDQUFSLENBQUosRUFBZ0I7QUFDWkosaUNBQWlCSSxDQUFqQixFQUFvQjNHLE1BQXBCLEVBQTRCLENBQTVCLEVBQStCdEwsR0FBL0I7QUFDSCxhQUZELE1BR0s7QUFDRCxvQkFBSSxxQ0FBaUJpUyxDQUFqQixDQUFKLEVBQXlCO0FBQ3JCQSx3QkFBSSw2QkFBZ0JBLENBQWhCLENBQUo7QUFDSCxpQkFGRCxNQUdLLElBQUkscUJBQVFBLENBQVIsS0FBY0EsRUFBRS9ULEdBQWhCLElBQXdCK1QsRUFBRWpTLEdBQUYsSUFBU2lTLEVBQUVqUyxHQUFGLENBQU0sQ0FBTixNQUFhLEdBQWxELEVBQXdEO0FBQ3pEaVMsd0JBQUksd0JBQVdBLENBQVgsQ0FBSjtBQUNIO0FBQ0Qsb0JBQUksMkJBQU9BLEVBQUVqUyxHQUFULEtBQWlCaVMsRUFBRWpTLEdBQUYsQ0FBTSxDQUFOLE1BQWEsR0FBbEMsRUFBdUM7QUFDbkNpUyx3QkFBSVAsU0FBUzFSLEdBQVQsRUFBY2lTLENBQWQsQ0FBSjtBQUNILGlCQUZELE1BR0s7QUFDREEsd0JBQUlMLGVBQWVJLFVBQWYsRUFBMkJDLENBQTNCLENBQUo7QUFDSDtBQUNEM0csdUJBQU9uUixJQUFQLENBQVk4WCxDQUFaO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDTSxTQUFTUixlQUFULENBQXlCSyxLQUF6QixFQUFnQztBQUNuQyxRQUFJSSxpQkFBSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBSUosTUFBTSxHQUFOLENBQUosRUFBZ0I7QUFDWkEsZ0JBQVFBLE1BQU16RyxLQUFOLEVBQVI7QUFDSCxLQUZELE1BR0s7QUFDRHlHLGNBQU0sR0FBTixJQUFhLElBQWI7QUFDSDtBQUNEO0FBQ0EsU0FBSyxJQUFJelgsSUFBSSxDQUFSLEVBQVdDLE1BQU13WCxNQUFNcFksTUFBNUIsRUFBb0NXLElBQUlDLEdBQXhDLEVBQTZDRCxHQUE3QyxFQUFrRDtBQUM5QyxZQUFNNFgsSUFBSUgsTUFBTXpYLENBQU4sQ0FBVjtBQUNBLFlBQUksOEJBQVU0WCxDQUFWLEtBQWdCLDRCQUFRQSxDQUFSLENBQXBCLEVBQWdDO0FBQzVCLGdCQUFNM0csU0FBUyxDQUFDNEcsWUFBWUosS0FBYixFQUFvQnpHLEtBQXBCLENBQTBCLENBQTFCLEVBQTZCaFIsQ0FBN0IsQ0FBZjtBQUNBd1gsNkJBQWlCQyxLQUFqQixFQUF3QnhHLE1BQXhCLEVBQWdDalIsQ0FBaEM7QUFDQSxtQkFBT2lSLE1BQVA7QUFDSCxTQUpELE1BS0ssSUFBSSxxQ0FBaUIyRyxDQUFqQixDQUFKLEVBQXlCO0FBQzFCLGdCQUFJLENBQUNDLFFBQUwsRUFBZTtBQUNYQSwyQkFBV0osTUFBTXpHLEtBQU4sQ0FBWSxDQUFaLEVBQWVoUixDQUFmLENBQVg7QUFDSDtBQUNENlgscUJBQVMvWCxJQUFULENBQWN3WCxrQkFBa0J0WCxDQUFsQixFQUFxQiw2QkFBZ0I0WCxDQUFoQixDQUFyQixDQUFkO0FBQ0gsU0FMSSxNQU1BLElBQUsscUJBQVFBLENBQVIsS0FBY0EsRUFBRS9ULEdBQWpCLElBQTBCLDJCQUFPK1QsRUFBRWpTLEdBQVQsS0FBaUIsRUFBRWlTLEVBQUU5VCxLQUFGLEdBQVUsRUFBWixDQUFlLHlCQUFmLENBQS9DLEVBQTJGO0FBQzVGLGdCQUFJLENBQUMrVCxRQUFMLEVBQWU7QUFDWEEsMkJBQVdKLE1BQU16RyxLQUFOLENBQVksQ0FBWixFQUFlaFIsQ0FBZixDQUFYO0FBQ0g7QUFDRDZYLHFCQUFTL1gsSUFBVCxDQUFjd1gsa0JBQWtCdFgsQ0FBbEIsRUFBcUIsd0JBQVc0WCxDQUFYLENBQXJCLENBQWQ7QUFDSCxTQUxJLE1BTUEsSUFBSUMsUUFBSixFQUFjO0FBQ2ZBLHFCQUFTL1gsSUFBVCxDQUFjd1gsa0JBQWtCdFgsQ0FBbEIsRUFBcUIsd0JBQVc0WCxDQUFYLENBQXJCLENBQWQ7QUFDSDtBQUNKO0FBQ0QsV0FBT0MsWUFBWUosS0FBbkI7QUFDSDtBQUNELFNBQVNLLGlCQUFULENBQTJCbFosUUFBM0IsRUFBcUM7QUFDakMsUUFBSSw0QkFBUUEsUUFBUixDQUFKLEVBQXVCO0FBQ25CLGVBQU93WSxnQkFBZ0J4WSxRQUFoQixDQUFQO0FBQ0gsS0FGRCxNQUdLLElBQUkscUJBQVFBLFFBQVIsS0FBcUJBLFNBQVNpRixHQUFsQyxFQUF1QztBQUN4QyxlQUFPLHdCQUFXakYsUUFBWCxDQUFQO0FBQ0g7QUFDRCxXQUFPQSxRQUFQO0FBQ0g7QUFDRCxTQUFTbVosY0FBVCxDQUF3QnZWLEtBQXhCLEVBQStCRSxLQUEvQixFQUFzQzlELFFBQXRDLEVBQWdEO0FBQzVDLFFBQUksRUFBRTRELE1BQU1zQixLQUFOLEdBQWMsRUFBaEIsQ0FBbUIsZUFBbkIsS0FBdUMsa0NBQWNsRixRQUFkLENBQXZDLElBQWtFLENBQUMsa0NBQWM4RCxNQUFNOUQsUUFBcEIsQ0FBdkUsRUFBc0c7QUFDbEc0RCxjQUFNNUQsUUFBTixHQUFpQjhELE1BQU05RCxRQUF2QjtBQUNIO0FBQ0QsUUFBSThELE1BQU1rSixHQUFWLEVBQWU7QUFDWHBKLGNBQU1vSixHQUFOLEdBQVlsSixNQUFNa0osR0FBbEI7QUFDQSxlQUFPbEosTUFBTWtKLEdBQWI7QUFDSDtBQUNELFFBQUlsSixNQUFNaUosTUFBVixFQUFrQjtBQUNkbkosY0FBTW1KLE1BQU4sR0FBZWpKLE1BQU1pSixNQUFyQjtBQUNIO0FBQ0QsUUFBSSxDQUFDLGtDQUFjakosTUFBTWlELEdBQXBCLENBQUwsRUFBK0I7QUFDM0JuRCxjQUFNbUQsR0FBTixHQUFZakQsTUFBTWlELEdBQWxCO0FBQ0EsZUFBT2pELE1BQU1pRCxHQUFiO0FBQ0g7QUFDSjtBQUNELFNBQVNxUyxnQkFBVCxDQUEwQjdZLElBQTFCLEVBQWdDcUQsS0FBaEMsRUFBdUM7QUFDbkMsUUFBSXJELFNBQVMsS0FBYixFQUFvQjtBQUNoQnFELGNBQU1zQixLQUFOLEdBQWMsR0FBZCxDQUFrQixnQkFBbEI7QUFDSCxLQUZELE1BR0ssSUFBSTNFLFNBQVMsT0FBYixFQUFzQjtBQUN2QnFELGNBQU1zQixLQUFOLEdBQWMsR0FBZCxDQUFrQixrQkFBbEI7QUFDSCxLQUZJLE1BR0EsSUFBSTNFLFNBQVMsUUFBYixFQUF1QjtBQUN4QnFELGNBQU1zQixLQUFOLEdBQWMsSUFBZCxDQUFtQixtQkFBbkI7QUFDSCxLQUZJLE1BR0EsSUFBSTNFLFNBQVMsVUFBYixFQUF5QjtBQUMxQnFELGNBQU1zQixLQUFOLEdBQWMsSUFBZCxDQUFtQixxQkFBbkI7QUFDSCxLQUZJLE1BR0EsSUFBSTNFLFNBQVMsT0FBYixFQUFzQjtBQUN2QnFELGNBQU1zQixLQUFOLEdBQWMsR0FBZCxDQUFrQixrQkFBbEI7QUFDSCxLQUZJLE1BR0E7QUFDRHRCLGNBQU1zQixLQUFOLEdBQWMsQ0FBZCxDQUFnQixpQkFBaEI7QUFDSDtBQUNKO0FBQ00sU0FBU3hELFNBQVQsQ0FBbUJrQyxLQUFuQixFQUEwQjtBQUM3QixRQUFNRSxRQUFRRixNQUFNRSxLQUFwQjtBQUNBLFFBQU11VixXQUFXLENBQUMsMkJBQU92VixLQUFQLENBQWxCO0FBQ0EsUUFBTXZELE9BQU9xRCxNQUFNckQsSUFBbkI7QUFDQSxRQUFJUCxXQUFXNEQsTUFBTTVELFFBQXJCO0FBQ0E7QUFDQSxRQUFJLDZCQUFTTyxJQUFULEtBQW1CcUQsTUFBTXNCLEtBQU4sR0FBYyxFQUFqQyxDQUFvQyxlQUF4QyxFQUEwRDtBQUN0RGtVLHlCQUFpQjdZLElBQWpCLEVBQXVCcUQsS0FBdkI7QUFDQSxZQUFJeVYsWUFBWXZWLE1BQU05RCxRQUF0QixFQUFnQztBQUM1QjRELGtCQUFNNUQsUUFBTixHQUFpQjhELE1BQU05RCxRQUF2QjtBQUNBQSx1QkFBVzhELE1BQU05RCxRQUFqQjtBQUNIO0FBQ0o7QUFDRCxRQUFJcVosUUFBSixFQUFjO0FBQ1ZGLHVCQUFldlYsS0FBZixFQUFzQkUsS0FBdEIsRUFBNkI5RCxRQUE3QjtBQUNIO0FBQ0QsUUFBSSxDQUFDLDhCQUFVQSxRQUFWLENBQUwsRUFBMEI7QUFDdEI0RCxjQUFNNUQsUUFBTixHQUFpQmtaLGtCQUFrQmxaLFFBQWxCLENBQWpCO0FBQ0g7QUFDRCxRQUFJcVosWUFBWSxDQUFDLDhCQUFVdlYsTUFBTTlELFFBQWhCLENBQWpCLEVBQTRDO0FBQ3hDOEQsY0FBTTlELFFBQU4sR0FBaUJrWixrQkFBa0JwVixNQUFNOUQsUUFBeEIsQ0FBakI7QUFDSDtBQUNELFFBQUkyQixRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDdkM7QUFDQTtBQUNBLFlBQU15WCxhQUFhLFNBQWJBLFVBQWEsQ0FBVUMsTUFBVixFQUFrQjtBQUNqQyxnQkFBTUMsWUFBWUQsT0FBT0UsR0FBUCxDQUFXLFVBQVVDLEtBQVYsRUFBaUI7QUFBRSx1QkFBT0EsTUFBTTNTLEdBQWI7QUFBbUIsYUFBakQsQ0FBbEI7QUFDQXlTLHNCQUFVRyxJQUFWLENBQWUsVUFBVUMsSUFBVixFQUFnQkMsR0FBaEIsRUFBcUI7QUFDaEMsb0JBQU1DLGVBQWVOLFVBQVV0WCxPQUFWLENBQWtCMFgsSUFBbEIsTUFBNEJDLEdBQWpEO0FBQ0Esb0JBQUlDLFlBQUosRUFBa0I7QUFDZCxnREFBUSx3SUFBd0lGLElBQWhKO0FBQ0g7QUFDRCx1QkFBT0UsWUFBUDtBQUNILGFBTkQ7QUFPSCxTQVREO0FBVUEsWUFBSWxXLE1BQU01RCxRQUFOLElBQWtCRSxNQUFNRCxPQUFOLENBQWMyRCxNQUFNNUQsUUFBcEIsQ0FBdEIsRUFBcUQ7QUFDakRzWix1QkFBVzFWLE1BQU01RCxRQUFqQjtBQUNIO0FBQ0o7QUFDSixDOzs7Ozs7Ozs7Ozs7O1FDM0pld1gsYyxHQUFBQSxjO1FBVUF1QyxXLEdBQUFBLFc7QUF0QmhCO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1DLHNEQUF3QixPQUFPQyxPQUFQLEtBQW9CLFdBQWxEOztBQUVQLElBQUksQ0FBQ0Qsb0JBQUwsRUFBMkI7QUFDekJsYSxTQUFPb2EsYUFBUCxDQUFxQkMsUUFBckIsQ0FBOEIsNkJBQTlCLEVBQTZELE9BQTdEO0FBQ0EsUUFBTSx1REFBTjtBQUNEOztBQUVNLFNBQVMzQyxjQUFULENBQXdCNEMsT0FBeEIsRUFBMkQ7QUFBQSxNQUExQkMsY0FBMEIsdUVBQVgzWixTQUFXOztBQUNoRSxNQUFJMlIsU0FBU2lJLGFBQWFDLE9BQWIsQ0FBcUJILE9BQXJCLENBQWI7O0FBRUEsTUFBSS9ILFdBQVcsSUFBWCxJQUFtQkEsV0FBVzNSLFNBQWxDLEVBQTZDO0FBQzNDLFdBQU8yWixjQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT2hJLE1BQVA7QUFDRDtBQUNGOztBQUVNLFNBQVMwSCxXQUFULENBQXFCSyxPQUFyQixFQUErQztBQUFBLE1BQWpCMUgsS0FBaUIsdUVBQVhoUyxTQUFXOztBQUNwRDRaLGVBQWFFLE9BQWIsQ0FBcUJKLE9BQXJCLEVBQThCMUgsS0FBOUI7QUFDRCxDOzs7Ozs7Ozs7Ozs7UUNUZStILGEsR0FBQUEsYTtRQWdCQUMsZSxHQUFBQSxlO1FBZ0JBQyxrQixHQUFBQSxrQjtRQVVBQyxXLEdBQUFBLFc7QUF6RGhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLGNBQVQsQ0FBd0JsYSxPQUF4QixFQUFpQ21hLGFBQWpDLEVBQWdEO0FBQzlDaGIsU0FBT29hLGFBQVAsQ0FBcUJDLFFBQXJCLENBQThCeFosT0FBOUI7O0FBRUEyRyxhQUFXLFlBQU07QUFDZndUO0FBQ0QsR0FGRCxFQUVHLElBRkg7O0FBSUEsU0FBTyxJQUFQO0FBQ0Q7O0FBRU0sU0FBU0wsYUFBVCxDQUF1Qk0sT0FBdkIsRUFBZ0M7QUFDckM7QUFDQSxNQUFJQSxZQUFZLFVBQVosSUFBMEJqYixPQUFPa2IsT0FBUCxDQUFlQyxZQUE3QyxFQUEyRDtBQUN6RCxXQUFPSixlQUFlLGVBQWYsRUFBZ0MvYSxPQUFPa2IsT0FBUCxDQUFlRSxRQUEvQyxDQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlILFlBQVksV0FBWixJQUEyQmpiLE9BQU9rYixPQUFQLENBQWVHLGFBQTlDLEVBQTZEO0FBQ2xFLFdBQU9OLGVBQWUscUJBQWYsRUFBc0MvYSxPQUFPa2IsT0FBUCxDQUFlSSxTQUFyRCxDQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlMLFlBQVksUUFBWixJQUF3QmpiLE9BQU9rYixPQUFQLENBQWVLLFdBQTNDLEVBQXdEO0FBQzdELFdBQU9SLGVBQWUsbUJBQWYsRUFBb0MvYSxPQUFPa2IsT0FBUCxDQUFlTSxPQUFuRCxDQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlQLFlBQVksT0FBWixJQUF1QmpiLE9BQU9rYixPQUFQLENBQWVPLFdBQTFDLEVBQXVEO0FBQzVELFdBQU9WLGVBQWUsb0JBQWYsRUFBcUMvYSxPQUFPa2IsT0FBUCxDQUFlUSxPQUFwRCxDQUFQO0FBQ0Q7O0FBRUQ7QUFDQTFiLFNBQU9vYSxhQUFQLENBQXFCQyxRQUFyQixDQUFpQ1ksT0FBakMsbUNBQXdFLE9BQXhFO0FBQ0Q7O0FBRU0sU0FBU0wsZUFBVCxHQUEyQjtBQUNoQztBQUNBLE1BQUk1YSxPQUFPa2IsT0FBUCxDQUFlUyxTQUFmLEtBQTZCLElBQWpDLEVBQXVDO0FBQ3JDO0FBQ0EsV0FBTzNiLE9BQU9rYixPQUFQLENBQWVVLEtBQWYsQ0FBcUJDLE1BQXJCLENBQTRCLFVBQUNDLElBQUQ7QUFBQSxhQUFVQSxLQUFLQyxTQUFmO0FBQUEsS0FBNUIsRUFBc0QsQ0FBdEQsQ0FBUDtBQUNELEdBSEQsTUFLSztBQUNILFFBQUkvYixPQUFPa2IsT0FBUCxDQUFlYyxnQkFBZixLQUFvQ3BiLFNBQXBDLElBQWlEWixPQUFPa2IsT0FBUCxDQUFlYyxnQkFBZixLQUFvQyxJQUF6RixFQUErRjtBQUM3RixhQUFPaGMsT0FBT2tiLE9BQVAsQ0FBZVUsS0FBZixDQUFxQkMsTUFBckIsQ0FBNEIsVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLEtBQUtHLFFBQUwsS0FBa0JqYyxPQUFPa2IsT0FBUCxDQUFlYyxnQkFBM0M7QUFBQSxPQUE1QixFQUF5RixDQUF6RixDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT2hjLE9BQU9rYixPQUFQLENBQWVVLEtBQWYsQ0FBcUIsQ0FBckIsQ0FBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFTSxTQUFTZixrQkFBVCxDQUE0QmlCLElBQTVCLEVBQWtDO0FBQ3ZDLE1BQUlJLGNBQWVKLFNBQVNsYixTQUFWLEdBQXVCQSxTQUF2QixHQUFtQ2tiLEtBQUtLLE9BQTFEOztBQUVBLFNBQ0UsS0FBS3JCLFdBQUwsQ0FBaUJvQixXQUFqQixLQUNBLEtBQUtwQixXQUFMLENBQWlCOWEsT0FBT2tiLE9BQVAsQ0FBZWtCLGVBQWhDLENBREEsSUFFQXBjLE9BQU9rYixPQUFQLENBQWVtQixRQUFmLENBQXdCLENBQXhCLENBSEY7QUFLRDs7QUFFTSxTQUFTdkIsV0FBVCxDQUFxQndCLFdBQXJCLEVBQWtDO0FBQ3ZDLE1BQUlBLGdCQUFnQjFiLFNBQWhCLElBQTZCMGIsZ0JBQWdCLElBQWpELEVBQXVEO0FBQ3JELFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU90YyxPQUFPa2IsT0FBUCxDQUFlbUIsUUFBZixDQUF3QlIsTUFBeEIsQ0FBK0IsVUFBQ00sT0FBRDtBQUFBLFdBQ25DQSxRQUFRamEsSUFBUixDQUFhcVIsV0FBYixPQUErQitJLFlBQVkvSSxXQUFaLEVBQWhDLElBQ0M0SSxRQUFRbFYsR0FBUixDQUFZc00sV0FBWixPQUE4QitJLFlBQVkvSSxXQUFaLEVBRks7QUFBQSxHQUEvQixFQUdMLENBSEssQ0FBUDtBQUlELEM7Ozs7Ozs7Ozs7Ozs7OztBQzdERDs7OztBQUNBOzs7O0FBRUE7O0lBQVlnSixnQjs7QUFDWjs7OztBQUNBOzs7Ozs7Ozs7Ozs7K2VBVkE7QUFDQTtBQUNBO0FBQ0E7Ozs7SUFVcUJDLFk7OztBQUNuQix3QkFBWXhZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWEEsS0FEVzs7QUFHakIsVUFBS2lCLEtBQUwsR0FBYSxFQUFiO0FBSGlCO0FBSWxCOzs7O2tDQUVhZ1csTyxFQUFTd0IsUSxFQUFVL0ksSyxFQUFPO0FBQ3RDQSxZQUFNZ0osY0FBTjs7QUFFQSxVQUFJRCxhQUFhLEtBQWpCLEVBQXdCO0FBQ3RCemMsZUFBT29hLGFBQVAsQ0FBcUJDLFFBQXJCLENBQWlDWSxPQUFqQyxtQ0FBd0UsT0FBeEU7QUFDQSxlQUFPLEtBQVA7QUFDRDs7QUFFRHNCLHVCQUFpQjVCLGFBQWpCLENBQStCTSxPQUEvQjtBQUNEOzs7dUNBR2tCO0FBQUE7O0FBQ2pCLFVBQUkwQixXQUFXO0FBQ2Isb0JBQVkzYyxPQUFPa2IsT0FBUCxDQUFlQyxZQURkO0FBRWIsa0JBQVVuYixPQUFPa2IsT0FBUCxDQUFlSyxXQUZaO0FBR2IscUJBQWF2YixPQUFPa2IsT0FBUCxDQUFlRyxhQUhmO0FBSWIsaUJBQVNyYixPQUFPa2IsT0FBUCxDQUFlTztBQUpYLE9BQWY7O0FBT0E7QUFDQSxVQUFJbUIsa0JBQ0ZoWixPQUFPNlQsSUFBUCxDQUFZa0YsUUFBWixFQUNDaEQsR0FERCxDQUNLLFVBQUMxUyxHQUFEO0FBQUEsZUFBUzBWLFNBQVMxVixHQUFULElBQWdCQSxHQUFoQixHQUFzQixLQUEvQjtBQUFBLE9BREwsRUFFQzRVLE1BRkQsQ0FFUSxVQUFDWixPQUFEO0FBQUEsZUFBYUEsWUFBWSxLQUF6QjtBQUFBLE9BRlIsQ0FERjs7QUFNQTtBQUNBO0FBQ0EsVUFBSWpiLE9BQU9rYixPQUFQLENBQWVPLFdBQWYsS0FBK0IsS0FBL0IsSUFBd0N6YixPQUFPa2IsT0FBUCxDQUFlRyxhQUFmLEtBQWlDLEtBQTdFLEVBQW9GO0FBQ2xGdUIsd0JBQWdCeGIsSUFBaEIsQ0FBcUIsZ0JBQXJCO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLFVBQUl5YixXQUFZRCxnQkFBZ0JqYyxNQUFoQixHQUF5QixDQUF6QztBQUNBLFVBQUlrYyxhQUFhLElBQWpCLEVBQXVCO0FBQ3JCLGFBQUtDLFFBQUwsQ0FBYztBQUNaLDhCQUFvQjtBQURSLFNBQWQ7QUFHRDs7QUFFRCxVQUFJQyxPQUFPSCxnQkFBZ0JqRCxHQUFoQixDQUFvQixVQUFDc0IsT0FBRCxFQUFhO0FBQzFDLFlBQUl3QixXQUFXeEIsUUFBUTFILFdBQVIsR0FBc0IyQixLQUF0QixDQUE0QixHQUE1QixFQUFpQyxDQUFqQyxLQUF1QyxLQUF0RDtBQUNBK0Ysa0JBQVVBLFFBQVExSCxXQUFSLEdBQXNCMkIsS0FBdEIsQ0FBNEIsR0FBNUIsRUFBaUMsQ0FBakMsQ0FBVjs7QUFFQSxZQUFJOEgsVUFBVSxDQUFDLFNBQUQsRUFBWS9CLE9BQVosRUFBcUJ3QixRQUFyQixFQUErQlosTUFBL0IsQ0FBc0MsVUFBQ3BVLENBQUQ7QUFBQSxpQkFBT0EsQ0FBUDtBQUFBLFNBQXRDLENBQWQ7O0FBRUE7QUFBQSx1QkFDbUJ1VixRQUFRQyxJQUFSLENBQWEsR0FBYjtBQURuQjtBQUFBLHVCQUVtQjtBQUZuQjtBQUFBLHVCQUdxQjtBQUhyQjtBQUFBLHVCQUttQjtBQUxuQixXQUs0QmhDLE9BTDVCO0FBQUEscUJBQ2lELE9BQUtOLGFBQUwsQ0FBbUJ1QyxJQUFuQixTQUE4QmpDLE9BQTlCLEVBQXVDd0IsUUFBdkM7QUFEakQ7QUFRRCxPQWRVLENBQVg7O0FBZ0JBLFVBQUlPLFVBQVUsQ0FBQyxrQkFBRCxDQUFkOztBQUVBO0FBQUEscUJBQ21CQSxRQUFRQyxJQUFSLENBQWEsR0FBYjtBQURuQixTQUVNRixJQUZOO0FBS0Q7Ozs2QkFHUTtBQUNQLFVBQUlJLFdBQVduZCxPQUFPa2IsT0FBUCxDQUFlaUMsUUFBOUI7QUFDQSxVQUFJUixXQUFXLEtBQUtTLGdCQUFMLEVBQWY7O0FBRUEsd0ZBR01ULFFBSE47QUFBQSxxQkFJbUI7QUFKbkI7QUFBQSxxQkFLcUI7QUFMckIsU0FLdUNRLFFBTHZDO0FBVUQ7Ozs7OztrQkF6RmtCWCxZOzs7Ozs7Ozs7Ozs7Ozs7QUNUckI7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFMQTtBQUNBO0FBQ0E7Ozs7SUFNcUJhLFc7OztBQUNuQix1QkFBWXJaLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWEEsS0FEVzs7QUFFakIsVUFBS2lCLEtBQUwsR0FBYTtBQUNYLHlCQUFtQnJFLFNBRFI7QUFFWCxxQkFBZSxLQUZKO0FBR1gsaUJBQVdBLFNBSEE7QUFJWCxrQkFBWUEsU0FKRDtBQUtYLDJCQUFxQkEsU0FMVjtBQU1YLG1CQUFhQSxTQU5GO0FBT1gsb0JBQWNBO0FBUEgsS0FBYjtBQUZpQjtBQVdsQjs7Ozt5Q0FHb0I7QUFBQTs7QUFDbkI7QUFDQTRHLGlCQUFXLFlBQU07QUFDZixlQUFLOFYsT0FBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozt5Q0FHb0I7QUFDbkIsVUFBSUMsc0VBRU0sS0FBS3RZLEtBQUwsQ0FBV3VZLE9BRmpCLHdDQUUyQyxLQUFLdlksS0FBTCxDQUFXd1ksaUJBRnRELHNDQUV3RixLQUFLeFksS0FBTCxDQUFXeVksU0FGbkcsR0FBSjs7QUFNQSxhQUFPSCxVQUFQO0FBQ0Q7Ozs4QkFHUztBQUFBOztBQUNSLFVBQUlJLFdBQVcsQ0FDYixRQURhLEVBRWIsUUFGYSxFQUdiLFNBSGEsRUFJYixXQUphLEVBS2IsVUFMYSxFQU1iLFFBTmEsRUFPYixVQVBhLENBQWY7O0FBVUEsVUFBSUMsYUFBYSxDQUNmLFNBRGUsRUFFZixVQUZlLEVBR2YsT0FIZSxFQUlmLE9BSmUsRUFLZixLQUxlLEVBTWYsTUFOZSxFQU9mLE1BUGUsRUFRZixRQVJlLEVBU2YsV0FUZSxFQVVmLFNBVmUsRUFXZixVQVhlLEVBWWYsVUFaZSxDQUFqQjs7QUFlQSxVQUFJQyxNQUFNLElBQUlDLElBQUosRUFBVjs7QUFFQSxVQUFJQyxXQUFXRixJQUFJRyxPQUFKLEVBQWY7QUFDQSxVQUFJUixVQUFVRyxTQUFTRSxJQUFJSSxTQUFKLEVBQVQsQ0FBZDtBQUNBLFVBQUlDLGFBQWFMLElBQUlNLFFBQUosRUFBakI7QUFDQSxVQUFJVCxZQUFZRSxXQUFXTSxVQUFYLENBQWhCOztBQUVBLFVBQUlULDBCQUFKOztBQUVBO0FBQ0EsVUFBTyxLQUFLTSxRQUFOLElBQW9CQSxZQUFZLEVBQWpDLElBQTJDLE1BQU1BLFFBQVAsSUFBcUJBLFlBQVksRUFBaEYsRUFBdUY7QUFDckZOLDRCQUFvQk0sV0FBVyxJQUEvQjtBQUNELE9BRkQsTUFFTztBQUNMTiw0QkFBb0JNLFdBQVcsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUJBLFdBQVcsRUFBWCxHQUFnQixDQUFuQyxDQUEvQjtBQUNEOztBQUVELFVBQUlLLCtCQUE2QlosT0FBN0IsdUJBQXNEQyxpQkFBdEQscUJBQXVGQyxTQUF2RixVQUFKOztBQUVBLFdBQUtaLFFBQUwsQ0FBYztBQUNaLDJCQUFtQnNCLG1CQURQO0FBRVosdUJBQWUsSUFGSDtBQUdaLG1CQUFXWixPQUhDO0FBSVosb0JBQVlPLFFBSkE7QUFLWiw2QkFBcUJOLGlCQUxUO0FBTVoscUJBQWFDLFNBTkQ7QUFPWixzQkFBY1E7QUFQRixPQUFkOztBQVVBMVcsaUJBQVcsWUFBTTtBQUNmLGVBQUs4VixPQUFMO0FBQ0QsT0FGRCxFQUVHLEtBQUssSUFGUjtBQUdEOzs7NkJBR1E7QUFDUCxVQUFJZSxjQUFjLENBQUMsTUFBRCxDQUFsQjtBQUNBLFVBQUlkLGFBQWEsS0FBS2Usa0JBQUwsRUFBakI7O0FBRUEsVUFBSSxLQUFLclosS0FBTCxDQUFXc1osV0FBWCxLQUEyQixJQUEvQixFQUFxQztBQUNuQ0Ysb0JBQVlqZCxJQUFaLENBQWlCLFFBQWpCO0FBQ0Q7O0FBRUQ7QUFBQSxxQkFDbUJpZCxZQUFZcEIsSUFBWixDQUFpQixHQUFqQjtBQURuQixTQUVNTSxVQUZOO0FBS0Q7Ozs7OztrQkEzR2tCRixXOzs7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBUkE7QUFDQTtBQUNBOztBQVFBLElBQU1tQixtQkFBbUIsR0FBekI7QUFDQSxJQUFNQyx1QkFBdUIsR0FBN0I7Ozs7SUFHcUJDLFU7OztBQUNuQixzQkFBWTFhLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFHakIsVUFBSzJhLEtBQUwsR0FBYSxNQUFLM2EsS0FBTCxDQUFXMmEsS0FBeEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtELEtBQUwsQ0FBV0UsUUFBWCxFQUFsQjs7QUFFQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtILEtBQUwsQ0FBV0ksU0FBWCxDQUFxQixZQUFNO0FBQzVDLFlBQUtILFVBQUwsR0FBa0IsTUFBS0QsS0FBTCxDQUFXRSxRQUFYLEVBQWxCO0FBQ0QsS0FGa0IsQ0FBbkI7O0FBSUEsVUFBSzVaLEtBQUwsR0FBYTtBQUNYLHdCQUFrQixLQURQO0FBRVgsZ0JBQVUsS0FGQztBQUdYLGtCQUFZLEVBSEQ7QUFJWCx3QkFBa0IsS0FKUDtBQUtYLHdCQUFrQjtBQUxQLEtBQWI7QUFWaUI7QUFpQmxCOzs7O3lDQUVvQjtBQUFBOztBQUNuQjtBQUNBakYsYUFBT2dmLFdBQVAsR0FBcUIsVUFBQ2xaLElBQUQsRUFBT3JGLElBQVAsRUFBZ0I7QUFDbkMsWUFBSUEsU0FBUyxNQUFiLEVBQXFCO0FBQ25CVCxpQkFBT29hLGFBQVAsQ0FBcUJDLFFBQXJCLENBQThCdlUsSUFBOUI7QUFDRCxTQUZELE1BRU8sSUFBSXJGLFNBQVMsVUFBYixFQUF5QjtBQUM5QlQsaUJBQU9rYixPQUFQLENBQWUrRCxPQUFmLENBQXVCLE9BQUtoYSxLQUFMLENBQVdpYSxRQUFsQztBQUNEO0FBQ0YsT0FORDs7QUFRQWxmLGFBQU9tZixZQUFQLEdBQXNCLFVBQUNyWixJQUFELEVBQU9yRixJQUFQLEVBQWdCO0FBQ3BDVCxlQUFPb2EsYUFBUCxDQUFxQkMsUUFBckIsQ0FBOEJ2VSxJQUE5QixFQUFvQ3JGLElBQXBDO0FBQ0QsT0FGRDs7QUFJQVQsYUFBT29mLHVCQUFQLEdBQWlDLFlBQU07QUFDckMsWUFBSXBmLE9BQU9rYixPQUFQLENBQWVtRSxnQkFBbkIsRUFBcUM7QUFDbkNyZixpQkFBT2tiLE9BQVAsQ0FBZW9FLGtCQUFmLENBQWtDLE9BQUtWLFVBQUwsQ0FBZ0J6QyxPQUFoQixDQUF3QmxWLEdBQTFEO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQUtzWSxjQUFMO0FBQ0Q7QUFDRixPQU5EOztBQVFBdmYsYUFBT3dmLHVCQUFQLEdBQWlDLFlBQU07QUFDckN4ZixlQUFPb2EsYUFBUCxDQUFxQkMsUUFBckIsQ0FBOEIsb0JBQTlCO0FBQ0QsT0FGRDtBQUdEOzs7d0NBRW1CM0csSyxFQUFPO0FBQ3pCLFdBQUtvSixRQUFMLENBQWM7QUFDWiwwQkFBa0I7QUFETixPQUFkO0FBR0Q7Ozt3Q0FFbUJwSixLLEVBQU87QUFDekIsV0FBS29KLFFBQUwsQ0FBYztBQUNaLDBCQUFrQjtBQUROLE9BQWQ7QUFHRDs7O3NDQUVpQnBKLEssRUFBTztBQUN2QkEsWUFBTWdKLGNBQU47O0FBRUEsVUFBSTFjLE9BQU95ZixLQUFQLEtBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLFlBQUksS0FBS3hhLEtBQUwsQ0FBV2lhLFFBQVgsQ0FBb0IzTCxXQUFwQixPQUFzQyxVQUExQyxFQUFzRDtBQUNwRCxlQUFLZ00sY0FBTDtBQUNELFNBRkQsTUFFTztBQUNMdmYsaUJBQU9vYSxhQUFQLENBQXFCQyxRQUFyQiwrQkFBMEQsS0FBS3VFLFVBQUwsQ0FBZ0I5QyxJQUFoQixDQUFxQjRELFlBQS9FLFlBQWtHLEtBQUtkLFVBQUwsQ0FBZ0J6QyxPQUFoQixDQUF3QmphLElBQTFILFFBQW1JLFNBQW5JO0FBQ0EsZUFBSzRhLFFBQUwsQ0FBYztBQUNaLHdCQUFZO0FBREEsV0FBZDtBQUdEO0FBQ0YsT0FURCxNQVdLO0FBQ0g5YyxlQUFPa2IsT0FBUCxDQUFleUUsWUFBZixDQUE0QixLQUFLZixVQUFMLENBQWdCOUMsSUFBaEIsQ0FBcUJHLFFBQWpEO0FBQ0Q7QUFDRjs7O3dDQUVtQnZJLEssRUFBTztBQUFBOztBQUN6QixVQUFJMVQsT0FBT2tiLE9BQVAsQ0FBZVUsS0FBZixDQUFxQmpiLE1BQXJCLEdBQThCLENBQWxDLEVBQXFDO0FBQ25DWCxlQUFPb2EsYUFBUCxDQUFxQkMsUUFBckIsQ0FBOEIsOERBQTlCLEVBQThGLE9BQTlGO0FBQ0EsZUFBTyxLQUFQO0FBQ0QsT0FIRCxNQUdPLElBQUlyYSxPQUFPa2IsT0FBUCxDQUFlVSxLQUFmLENBQXFCamIsTUFBckIsS0FBZ0MsQ0FBcEMsRUFBdUM7QUFDNUM7QUFDQSxZQUFJaWYsWUFBWTVmLE9BQU9rYixPQUFQLENBQWVVLEtBQWYsQ0FBcUJDLE1BQXJCLENBQTRCLFVBQUNDLElBQUQsRUFBVTtBQUNwRCxpQkFBT0EsS0FBS0csUUFBTCxLQUFrQixPQUFLMkMsVUFBTCxDQUFnQjlDLElBQWhCLENBQXFCRyxRQUE5QztBQUNELFNBRmUsRUFFYixDQUZhLENBQWhCOztBQUlBLGFBQUs0RCxhQUFMLENBQW1CRCxTQUFuQixFQUE4QixJQUE5QjtBQUNBNWYsZUFBT29hLGFBQVAsQ0FBcUJDLFFBQXJCLENBQThCLDZFQUE5QjtBQUNELE9BUk0sTUFRQTtBQUNMLGFBQUt5QyxRQUFMLENBQWM7QUFDWiw0QkFBa0I7QUFETixTQUFkO0FBR0Q7QUFDRjs7O3dDQUVtQnBKLEssRUFBTztBQUN6QixXQUFLb0osUUFBTCxDQUFjO0FBQ1osb0JBQVlwSixNQUFNb00sTUFBTixDQUFhbE47QUFEYixPQUFkO0FBR0Q7OztxQ0FFZ0J1SixPLEVBQVM7QUFDeEIsV0FBS3dDLEtBQUwsQ0FBV29CLFFBQVgsQ0FBb0I7QUFDbEIsZ0JBQVEsb0JBRFU7QUFFbEIsbUJBQVc1RDtBQUZPLE9BQXBCOztBQUtBLFdBQUtXLFFBQUwsQ0FBYztBQUNaLDBCQUFrQjtBQUROLE9BQWQ7QUFHRDs7O2tDQUVhaEIsSSxFQUFNa0UsUSxFQUFVO0FBQUE7O0FBQzVCLFdBQUtyQixLQUFMLENBQVdvQixRQUFYLENBQW9CO0FBQ2xCLGdCQUFRLGlCQURVO0FBRWxCLGdCQUFRakU7QUFGVSxPQUFwQjs7QUFLQTtBQUNBLFVBQUlrRSxhQUFhLEtBQWIsSUFBc0JBLGFBQWFwZixTQUF2QyxFQUFrRDtBQUNoRCxhQUFLa2MsUUFBTCxDQUFjO0FBQ1osb0JBQVUsSUFERTtBQUVaLDRCQUFrQjtBQUZOLFNBQWQ7O0FBS0F0VixtQkFBVyxZQUFNO0FBQ2YsaUJBQUtzVixRQUFMLENBQWM7QUFDWixzQkFBVTtBQURFLFdBQWQ7QUFHRCxTQUpELEVBSUcwQixnQkFKSDtBQUtELE9BWEQsTUFXTztBQUNMLGFBQUsxQixRQUFMLENBQWM7QUFDWiw0QkFBa0I7QUFETixTQUFkO0FBR0Q7QUFDRjs7O3FDQUVnQjtBQUFBOztBQUNmOWMsYUFBT29hLGFBQVAsQ0FBcUJDLFFBQXJCLENBQThCLHVDQUE5QixFQUF1RSxPQUF2RTs7QUFFQSxXQUFLeUMsUUFBTCxDQUFjO0FBQ1osb0JBQVksRUFEQTtBQUVaLDBCQUFrQjtBQUZOLE9BQWQ7O0FBS0F0VixpQkFBVyxZQUFNO0FBQ2YsZUFBS3NWLFFBQUwsQ0FBYztBQUNaLDRCQUFrQjtBQUROLFNBQWQ7QUFHRCxPQUpELEVBSUcyQixvQkFKSDtBQUtEOzs7K0NBRTBCO0FBQ3pCLFVBQUl6QixVQUFVLENBQUMsTUFBRCxDQUFkOztBQUVBLFVBQUloZCxPQUFPa2IsT0FBUCxDQUFlVSxLQUFmLENBQXFCamIsTUFBckIsR0FBOEIsQ0FBbEMsRUFBcUM7QUFDbkNxYyxnQkFBUTViLElBQVIsQ0FBYSxVQUFiO0FBQ0Q7O0FBRUQ7QUFBQSxxQkFDbUI0YixRQUFRQyxJQUFSLENBQWEsR0FBYjtBQURuQjtBQUFBLG1CQUNpRCxLQUFLZ0QsbUJBQUwsQ0FBeUIvQyxJQUF6QixDQUE4QixJQUE5QjtBQURqRDtBQUdEOzs7NkJBRVE7QUFDUCxVQUFJZ0Qsb0JBQW9CLENBQUMsa0JBQUQsQ0FBeEI7O0FBRUEsVUFBSSxLQUFLamIsS0FBTCxDQUFXa2IsTUFBWCxLQUFzQixJQUExQixFQUFnQztBQUM5QkQsMEJBQWtCOWUsSUFBbEIsQ0FBdUIsUUFBdkI7QUFDRDs7QUFFRCxVQUFJLEtBQUs2RCxLQUFMLENBQVdtYixjQUFYLEtBQThCLElBQWxDLEVBQXdDO0FBQ3RDRiwwQkFBa0I5ZSxJQUFsQixDQUF1QixTQUF2QjtBQUNEOztBQUVELFVBQUlpZixtQkFBbUIsS0FBS0Msd0JBQUwsRUFBdkI7O0FBRUE7QUFBQSxxQkFDaUI7QUFEakI7QUFBQSxxQkFFcUJKLGtCQUFrQmpELElBQWxCLENBQXVCLEdBQXZCO0FBRnJCO0FBQUEscUJBR3FCO0FBSHJCO0FBQUEscUJBSXVCO0FBSnZCO0FBQUEscUJBS3lCO0FBTHpCO0FBQUEscUJBTTJCLGFBTjNCO0FBQUEsZUFNK0MsS0FBSzJCLFVBQUwsQ0FBZ0I5QyxJQUFoQixDQUFxQnlFO0FBTnBFO0FBQUEseUJBV3dCLEtBQUszQixVQUFMLENBQWdCekMsT0FYeEM7QUFBQSxzQkFZcUIsS0FBS3lDLFVBQUwsQ0FBZ0I5QyxJQVpyQztBQUFBLDBCQWF5QixLQUFLN1csS0FBTCxDQUFXdWIsY0FicEM7QUFBQSxvQkFjbUIsS0FBS3ZiLEtBQUwsQ0FBV2lhLFFBZDlCO0FBQUEsMEJBZXlCLEtBQUtqYSxLQUFMLENBQVd3YixjQWZwQztBQUFBLDZCQWdCNEIsS0FBS0MsaUJBQUwsQ0FBdUJ4RCxJQUF2QixDQUE0QixJQUE1QixDQWhCNUI7QUFBQSwrQkFpQjhCLEtBQUt5RCxtQkFBTCxDQUF5QnpELElBQXpCLENBQThCLElBQTlCLENBakI5QjtBQUFBLCtCQWtCOEIsS0FBSzBELG1CQUFMLENBQXlCMUQsSUFBekIsQ0FBOEIsSUFBOUIsQ0FsQjlCO0FBQUEsK0JBbUI4QixLQUFLMkQsbUJBQUwsQ0FBeUIzRCxJQUF6QixDQUE4QixJQUE5QixDQW5COUI7QUFBQSw0QkFvQjJCLEtBQUs0RCxnQkFBTCxDQUFzQjVELElBQXRCLENBQTJCLElBQTNCO0FBcEIzQjtBQUFBLHFCQXNCcUI7QUF0QnJCLFNBdUJVbUQsZ0JBdkJWO0FBQUEsa0JBMkJlLEtBQUtwYixLQUFMLENBQVdtYixjQTNCMUI7QUFBQSxzQkE0Qm1CLEtBQUt4QixVQUFMLENBQWdCOUMsSUE1Qm5DO0FBQUEseUJBNkJzQixLQUFLK0QsYUFBTCxDQUFtQjNDLElBQW5CLENBQXdCLElBQXhCO0FBN0J0QjtBQWlDRDs7Ozs7O2tCQXBOa0J3QixVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUNYTHFDLGUsR0FBQUEsZTs7QUFIaEI7O0FBQ0E7O0lBQVl4RSxnQjs7OztBQUVMLFNBQVN3RSxlQUFULEdBQTJCO0FBQ2hDLFNBQU87QUFDTCxZQUFRO0FBQ04sa0JBQVkvZ0IsT0FBT2tiLE9BQVAsQ0FBZWlDLFFBRHJCO0FBRU4sa0JBQVluZCxPQUFPa2IsT0FBUCxDQUFlOEY7QUFGckIsS0FESDtBQUtMLFlBQVF6RSxpQkFBaUIzQixlQUFqQixFQUxIO0FBTUwsZUFBVzJCLGlCQUFpQjFCLGtCQUFqQjtBQU5OLEdBQVA7QUFRRDs7QUFFTSxJQUFNb0csMENBQWlCLFNBQWpCQSxjQUFpQixDQUFDaGMsS0FBRCxFQUFRaWMsTUFBUixFQUFtQjtBQUMvQyxNQUFJQSxPQUFPemdCLElBQVAsQ0FBWTBnQixVQUFaLENBQXVCLFVBQXZCLENBQUosRUFBd0M7QUFDdEMsV0FBTyxzQ0FBZ0JsYyxLQUFoQixFQUF1QmljLE1BQXZCLENBQVA7QUFDRDs7QUFFRCxVQUFRQSxPQUFPemdCLElBQWY7QUFDRSxTQUFLLHlCQUFMO0FBQ0UsVUFBSTBiLFVBQVUrRSxPQUFPL0UsT0FBckI7O0FBRUEsVUFBSSxRQUFPQSxPQUFQLHlDQUFPQSxPQUFQLGVBQTBCaUYsUUFBMUIsQ0FBSixFQUF3QztBQUN0Q2pGLGtCQUFVSSxpQkFBaUJ6QixXQUFqQixDQUE2QnFCLE9BQTdCLENBQVY7QUFDRDs7QUFFRCwwQkFBWWxYLEtBQVosSUFBbUIsV0FBV2tYLE9BQTlCOztBQUVGLFNBQUssc0JBQUw7QUFDRSwwQkFBWWxYLEtBQVosSUFBbUIsUUFBUWljLE9BQU9wRixJQUFsQzs7QUFFRjtBQUNFLGFBQU83VyxLQUFQO0FBZEo7QUFnQkQsQ0FyQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNkY29jLGE7QUFDbkIsMkJBQWM7QUFBQTs7QUFDWixTQUFLQyxTQUFMLEdBQWlCcmhCLFNBQVNzaEIsZ0JBQVQsQ0FBMEIsMEJBQTFCLEVBQXNELENBQXRELENBQWpCO0FBQ0Q7Ozs7NkJBRVExZ0IsTyxFQUFTSixJLEVBQU07QUFBQTs7QUFDdEIsVUFBSUEsU0FBU0csU0FBYixFQUF3QjtBQUN0QkgsZUFBTyxFQUFQO0FBQ0Q7O0FBRUQsVUFBSStnQixlQUFldmhCLFNBQVN1RyxhQUFULENBQXVCLEtBQXZCLENBQW5CO0FBQ0FnYixtQkFBYXpPLFNBQWIscUJBQXlDdFMsSUFBekM7QUFDQStnQixtQkFBYUMsU0FBYixHQUF5QjVnQixPQUF6QjtBQUNBLFdBQUt5Z0IsU0FBTCxDQUFlbmUsV0FBZixDQUEyQnFlLFlBQTNCOztBQUVBaGEsaUJBQVcsWUFBTTtBQUNmZ2EscUJBQWF6TyxTQUFiLElBQTBCLFVBQTFCO0FBQ0F2TCxtQkFBVyxZQUFNO0FBQ2YsZ0JBQUs4WixTQUFMLENBQWU5ZCxXQUFmLENBQTJCZ2UsWUFBM0I7QUFDRCxTQUZELEVBRUcsR0FGSDtBQUdELE9BTEQsRUFLRyxJQUxIO0FBTUQ7Ozs7OztrQkFyQmtCSCxhOzs7Ozs7Ozs7Ozs7Ozs7UUNHTHppQixPLEdBQUFBLE87UUFNQUMsbUIsR0FBQUEsbUI7UUFHQUMsZ0IsR0FBQUEsZ0I7UUFJQUMsYSxHQUFBQSxhO1FBR0FDLFMsR0FBQUEsUztRQUdBQyxVLEdBQUFBLFU7UUFHQUMsYSxHQUFBQSxhO1FBR0FDLFEsR0FBQUEsUTtRQUdBQyxRLEdBQUFBLFE7UUFHQUMsTSxHQUFBQSxNO1FBR0FDLE0sR0FBQUEsTTtRQUdBQyxXLEdBQUFBLFc7UUFHQUMsUSxHQUFBQSxRO1FBR0FDLFUsR0FBQUEsVTtRQU1BQyxPLEdBQUFBLE87UUFHQUMsUyxHQUFBQSxTO1FBV0FDLFcsR0FBQUEsVztBQWxFVCxJQUFNQyx3QkFBUSxRQUFkO0FBQ0EsSUFBTUMsZ0NBQVksb0ZBQWxCO0FBQ0EsSUFBTUMsZ0NBQVksT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsT0FBT0MsUUFBMUQ7QUFDQSxTQUFTckIsT0FBVCxDQUFpQnNCLFFBQWpCLEVBQTJCO0FBQzlCLFdBQU9DLFFBQVFELFFBQVIsSUFBb0JBLFFBQXBCLEdBQWdDQSxXQUFXLENBQUNBLFFBQUQsQ0FBWCxHQUF3QkEsUUFBL0Q7QUFDSDtBQUNEO0FBQ0E7QUFDTyxJQUFNQyw0QkFBVUMsTUFBTUQsT0FBdEI7QUFDQSxTQUFTdEIsbUJBQVQsQ0FBNkJ3QixDQUE3QixFQUFnQztBQUNuQyxXQUFPLENBQUNkLFlBQVljLEVBQUVDLFNBQWQsQ0FBRCxJQUE2QixDQUFDZixZQUFZYyxFQUFFQyxTQUFGLENBQVlDLE1BQXhCLENBQXJDO0FBQ0g7QUFDTSxTQUFTekIsZ0JBQVQsQ0FBMEIwQixHQUExQixFQUErQjtBQUNsQyxRQUFNQyxjQUFjRCxHQUFkLHlDQUFjQSxHQUFkLENBQU47QUFDQSxXQUFPQyxTQUFTLFFBQVQsSUFBcUJBLFNBQVMsUUFBckM7QUFDSDtBQUNNLFNBQVMxQixhQUFULENBQXVCeUIsR0FBdkIsRUFBNEI7QUFDL0IsV0FBT2pCLFlBQVlpQixHQUFaLEtBQW9CbkIsT0FBT21CLEdBQVAsQ0FBM0I7QUFDSDtBQUNNLFNBQVN4QixTQUFULENBQW1Cd0IsR0FBbkIsRUFBd0I7QUFDM0IsV0FBT25CLE9BQU9tQixHQUFQLEtBQWVBLFFBQVEsS0FBdkIsSUFBZ0NsQixPQUFPa0IsR0FBUCxDQUFoQyxJQUErQ2pCLFlBQVlpQixHQUFaLENBQXREO0FBQ0g7QUFDTSxTQUFTdkIsVUFBVCxDQUFvQnVCLEdBQXBCLEVBQXlCO0FBQzVCLFdBQU8sT0FBT0EsR0FBUCxLQUFlLFVBQXRCO0FBQ0g7QUFDTSxTQUFTdEIsYUFBVCxDQUF1QndCLElBQXZCLEVBQTZCO0FBQ2hDLFdBQU9BLEtBQUssQ0FBTCxNQUFZLEdBQVosSUFBbUJBLEtBQUssQ0FBTCxNQUFZLEdBQS9CLElBQXNDQSxLQUFLQyxNQUFMLEdBQWMsQ0FBM0Q7QUFDSDtBQUNNLFNBQVN4QixRQUFULENBQWtCcUIsR0FBbEIsRUFBdUI7QUFDMUIsV0FBTyxPQUFPQSxHQUFQLEtBQWUsUUFBdEI7QUFDSDtBQUNNLFNBQVNwQixRQUFULENBQWtCb0IsR0FBbEIsRUFBdUI7QUFDMUIsV0FBTyxPQUFPQSxHQUFQLEtBQWUsUUFBdEI7QUFDSDtBQUNNLFNBQVNuQixNQUFULENBQWdCbUIsR0FBaEIsRUFBcUI7QUFDeEIsV0FBT0EsUUFBUSxJQUFmO0FBQ0g7QUFDTSxTQUFTbEIsTUFBVCxDQUFnQmtCLEdBQWhCLEVBQXFCO0FBQ3hCLFdBQU9BLFFBQVEsSUFBZjtBQUNIO0FBQ00sU0FBU2pCLFdBQVQsQ0FBcUJpQixHQUFyQixFQUEwQjtBQUM3QixXQUFPQSxRQUFRSSxTQUFmO0FBQ0g7QUFDTSxTQUFTcEIsUUFBVCxDQUFrQmEsQ0FBbEIsRUFBcUI7QUFDeEIsV0FBTyxRQUFPQSxDQUFQLHlDQUFPQSxDQUFQLE9BQWEsUUFBcEI7QUFDSDtBQUNNLFNBQVNaLFVBQVQsQ0FBb0JvQixPQUFwQixFQUE2QjtBQUNoQyxRQUFJLENBQUNBLE9BQUwsRUFBYztBQUNWQSxrQkFBVWYsU0FBVjtBQUNIO0FBQ0QsVUFBTSxJQUFJZ0IsS0FBSixxQkFBNEJELE9BQTVCLENBQU47QUFDSDtBQUNNLFNBQVNuQixPQUFULENBQWlCbUIsT0FBakIsRUFBMEI7QUFDN0JFLFlBQVFDLElBQVIsQ0FBYUgsT0FBYjtBQUNIO0FBQ00sU0FBU2xCLFNBQVQsR0FBcUI7QUFDeEIsU0FBS3NCLFNBQUwsR0FBaUIsRUFBakI7QUFDSDtBQUNEdEIsVUFBVVcsU0FBVixDQUFvQlksV0FBcEIsR0FBa0MsU0FBU0EsV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDN0QsU0FBS0YsU0FBTCxDQUFlRyxJQUFmLENBQW9CRCxRQUFwQjtBQUNILENBRkQ7QUFHQXhCLFVBQVVXLFNBQVYsQ0FBb0JlLE9BQXBCLEdBQThCLFNBQVNBLE9BQVQsR0FBbUI7QUFDN0MsU0FBSyxJQUFJQyxJQUFJLENBQVIsRUFBV0MsTUFBTSxLQUFLTixTQUFMLENBQWVOLE1BQXJDLEVBQTZDVyxJQUFJQyxHQUFqRCxFQUFzREQsR0FBdEQsRUFBMkQ7QUFDdkQsYUFBS0wsU0FBTCxDQUFlSyxDQUFmO0FBQ0g7QUFDSixDQUpEO0FBS08sU0FBUzFCLFdBQVQsQ0FBcUI0QixRQUFyQixFQUErQkMsTUFBL0IsRUFBdUM7QUFDMUMsU0FBSyxJQUFJQyxJQUFULElBQWlCRixRQUFqQixFQUEyQjtBQUN2QixZQUFJakMsWUFBWWtDLE9BQU9DLElBQVAsQ0FBWixDQUFKLEVBQStCO0FBQzNCRCxtQkFBT0MsSUFBUCxJQUFlRixTQUFTRSxJQUFULENBQWY7QUFDSDtBQUNKO0FBQ0osQzs7Ozs7Ozs7Ozs7O1FDckVlZ2dCLFcsR0FBQUEsVzs7QUFIaEI7O0FBQ0EsSUFBTUMsUUFBUSw0QkFBYSxDQUFDLENBQUNDLFVBQVVDLFFBQXpCLElBQXFDLG1CQUFtQkMsSUFBbkIsQ0FBd0JGLFVBQVVDLFFBQWxDLENBQW5EO0FBQ0EsSUFBTUUsa0JBQWtCLElBQUkxWCxHQUFKLEVBQXhCO0FBQ08sU0FBU3FYLFdBQVQsQ0FBcUJ4ZixJQUFyQixFQUEyQjhmLFNBQTNCLEVBQXNDQyxTQUF0QyxFQUFpRDljLEdBQWpELEVBQXNEO0FBQ3pELFFBQUkrYyxpQkFBaUJILGdCQUFnQnBYLEdBQWhCLENBQW9CekksSUFBcEIsQ0FBckI7QUFDQSxRQUFJK2YsU0FBSixFQUFlO0FBQ1gsWUFBSSxDQUFDQyxjQUFMLEVBQXFCO0FBQ2pCQSw2QkFBaUIsRUFBRUMsT0FBTyxJQUFJOVgsR0FBSixFQUFULEVBQW9CK1gsT0FBTyxDQUEzQixFQUE4QkMsVUFBVSxJQUF4QyxFQUFqQjtBQUNBSCwyQkFBZUcsUUFBZixHQUEwQkMsc0JBQXNCcGdCLElBQXRCLEVBQTRCZ2dCLGNBQTVCLENBQTFCO0FBQ0FILDRCQUFnQm5YLEdBQWhCLENBQW9CMUksSUFBcEIsRUFBMEJnZ0IsY0FBMUI7QUFDSDtBQUNELFlBQUksQ0FBQ0YsU0FBTCxFQUFnQjtBQUNaRSwyQkFBZUUsS0FBZjtBQUNBLGdCQUFJVCxTQUFTemYsU0FBUyxTQUF0QixFQUFpQztBQUM3QnFnQixpREFBaUNwZCxHQUFqQztBQUNIO0FBQ0o7QUFDRCtjLHVCQUFlQyxLQUFmLENBQXFCdlgsR0FBckIsQ0FBeUJ6RixHQUF6QixFQUE4QjhjLFNBQTlCO0FBQ0gsS0FiRCxNQWNLLElBQUlDLGNBQUosRUFBb0I7QUFDckIsWUFBSUEsZUFBZUMsS0FBZixDQUFxQmxMLEdBQXJCLENBQXlCOVIsR0FBekIsQ0FBSixFQUFtQztBQUMvQitjLDJCQUFlRSxLQUFmO0FBQ0FGLDJCQUFlQyxLQUFmLENBQXFCblgsTUFBckIsQ0FBNEI3RixHQUE1QjtBQUNBLGdCQUFJK2MsZUFBZUUsS0FBZixLQUF5QixDQUE3QixFQUFnQztBQUM1Qm5pQix5QkFBU3VpQixtQkFBVCxDQUE2QkMsbUJBQW1CdmdCLElBQW5CLENBQTdCLEVBQXVEZ2dCLGVBQWVHLFFBQXRFO0FBQ0FOLGdDQUFnQi9XLE1BQWhCLENBQXVCOUksSUFBdkI7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNELFNBQVN3Z0IsYUFBVCxDQUF1QmhQLEtBQXZCLEVBQThCdk8sR0FBOUIsRUFBbUNnZCxLQUFuQyxFQUEwQ0MsS0FBMUMsRUFBaURPLFNBQWpELEVBQTREO0FBQ3hELFFBQU1DLGtCQUFrQlQsTUFBTXhYLEdBQU4sQ0FBVXhGLEdBQVYsQ0FBeEI7QUFDQSxRQUFJeWQsZUFBSixFQUFxQjtBQUNqQlI7QUFDQTtBQUNBTyxrQkFBVXhkLEdBQVYsR0FBZ0JBLEdBQWhCO0FBQ0EsWUFBSXlkLGdCQUFnQmxQLEtBQXBCLEVBQTJCO0FBQ3ZCa1AsNEJBQWdCbFAsS0FBaEIsQ0FBc0JrUCxnQkFBZ0IvTyxJQUF0QyxFQUE0Q0gsS0FBNUM7QUFDSCxTQUZELE1BR0s7QUFDRGtQLDRCQUFnQmxQLEtBQWhCO0FBQ0g7QUFDRCxZQUFJaVAsVUFBVUUsZUFBZCxFQUErQjtBQUMzQjtBQUNIO0FBQ0o7QUFDRCxRQUFJVCxRQUFRLENBQVosRUFBZTtBQUNYLFlBQU0zYyxZQUFZTixJQUFJeUIsVUFBdEI7QUFDQSxZQUFJbkIsYUFBYUEsY0FBY3hGLFNBQVN1VSxJQUF4QyxFQUE4QztBQUMxQ2tPLDBCQUFjaFAsS0FBZCxFQUFxQmpPLFNBQXJCLEVBQWdDMGMsS0FBaEMsRUFBdUNDLEtBQXZDLEVBQThDTyxTQUE5QztBQUNIO0FBQ0o7QUFDSjtBQUNELFNBQVNGLGtCQUFULENBQTRCdmdCLElBQTVCLEVBQWtDO0FBQzlCLFdBQU9BLEtBQUs0Z0IsTUFBTCxDQUFZLENBQVosRUFBZXZQLFdBQWYsRUFBUDtBQUNIO0FBQ0QsU0FBUytPLHFCQUFULENBQStCcGdCLElBQS9CLEVBQXFDZ2dCLGNBQXJDLEVBQXFEO0FBQ2pELFFBQU1HLFdBQVcsU0FBWEEsUUFBVyxDQUFDM08sS0FBRCxFQUFXO0FBQ3hCLFlBQU1pUCxZQUFZO0FBQ2RFLDZCQUFpQixLQURIO0FBRWQxZCxpQkFBS2xGO0FBRlMsU0FBbEI7QUFJQTtBQUNBO0FBQ0EyRCxlQUFPbWYsY0FBUCxDQUFzQnJQLEtBQXRCLEVBQTZCLGVBQTdCLEVBQThDO0FBQzFDc1AsMEJBQWMsSUFENEI7QUFFMUNyWSxlQUYwQyxpQkFFcEM7QUFDRix1QkFBT2dZLFVBQVV4ZCxHQUFqQjtBQUNIO0FBSnlDLFNBQTlDO0FBTUF1TyxjQUFNbVAsZUFBTixHQUF3QixZQUFNO0FBQzFCRixzQkFBVUUsZUFBVixHQUE0QixJQUE1QjtBQUNILFNBRkQ7QUFHQSxZQUFNVCxRQUFRRixlQUFlRSxLQUE3QjtBQUNBLFlBQUlBLFFBQVEsQ0FBWixFQUFlO0FBQ1hNLDBCQUFjaFAsS0FBZCxFQUFxQkEsTUFBTW9NLE1BQTNCLEVBQW1Db0MsZUFBZUMsS0FBbEQsRUFBeURDLEtBQXpELEVBQWdFTyxTQUFoRTtBQUNIO0FBQ0osS0FwQkQ7QUFxQkExaUIsYUFBU2dqQixnQkFBVCxDQUEwQlIsbUJBQW1CdmdCLElBQW5CLENBQTFCLEVBQW9EbWdCLFFBQXBEO0FBQ0EsV0FBT0EsUUFBUDtBQUNIO0FBQ0QsU0FBU2EsT0FBVCxHQUFtQixDQUFHO0FBQ3RCLFNBQVNYLGdDQUFULENBQTBDcGQsR0FBMUMsRUFBK0M7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLFFBQUlnZSxPQUFKLEdBQWNELE9BQWQ7QUFDSCxDOzs7Ozs7Ozs7Ozs7a0JDN0Z1QjVnQixTO0FBQVQsU0FBU0EsU0FBVCxDQUFtQnVSLElBQW5CLEVBQXlCSCxLQUF6QixFQUFnQztBQUMzQyxXQUFPLEVBQUVHLFVBQUYsRUFBUUgsWUFBUixFQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7O1FDTWUwUCxtQixHQUFBQSxtQjtrQkErS1FDLFc7O0FBdkx4Qjs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFDTyxTQUFTRCxtQkFBVCxDQUE2QjNkLFNBQTdCLEVBQXdDO0FBQzNDLFFBQUlOLE1BQU1NLFVBQVVRLFVBQXBCO0FBQ0EsV0FBT2QsR0FBUCxFQUFZO0FBQ1IsWUFBSUEsSUFBSStPLFFBQUosS0FBaUIsQ0FBckIsRUFBd0I7QUFDcEIsZ0JBQUkvTyxJQUFJME8sSUFBSixLQUFhLEdBQWpCLEVBQXNCO0FBQ2xCLG9CQUFNeVAsY0FBY3JqQixTQUFTK0YsY0FBVCxDQUF3QixFQUF4QixDQUFwQjtBQUNBUCwwQkFBVWxDLFlBQVYsQ0FBdUIrZixXQUF2QixFQUFvQ25lLEdBQXBDO0FBQ0FBLHNCQUFNQSxJQUFJb2UsV0FBVjtBQUNILGFBSkQsTUFLSztBQUNELG9CQUFNNWMsVUFBVXhCLElBQUlxZSxlQUFwQjtBQUNBL2QsMEJBQVVqQyxXQUFWLENBQXNCMkIsR0FBdEI7QUFDQUEsc0JBQU13QixXQUFXbEIsVUFBVVEsVUFBM0I7QUFDSDtBQUNKLFNBWEQsTUFZSztBQUNEZCxrQkFBTUEsSUFBSW9lLFdBQVY7QUFDSDtBQUNKO0FBQ0o7QUFDRCxTQUFTRSxnQkFBVCxDQUEwQjNmLEtBQTFCLEVBQWlDcUIsR0FBakMsRUFBc0NPLFNBQXRDLEVBQWlEekIsT0FBakQsRUFBMERDLEtBQTFELEVBQWlFd0wsT0FBakUsRUFBMEU7QUFDdEUsUUFBTWpQLE9BQU9xRCxNQUFNckQsSUFBbkI7QUFDQSxRQUFNeU0sTUFBTXBKLE1BQU1vSixHQUFsQjtBQUNBcEosVUFBTXFCLEdBQU4sR0FBWUEsR0FBWjtBQUNBLFFBQU00SyxlQUFldFAsS0FBS3NQLFlBQTFCO0FBQ0EsUUFBSS9MLGNBQUo7QUFDQSxRQUFJLENBQUMsZ0NBQVkrTCxZQUFaLENBQUwsRUFBZ0M7QUFDNUI7QUFDQS9MLGdCQUFRRixNQUFNRSxLQUFOLElBQWUsRUFBdkI7QUFDQSx3Q0FBWStMLFlBQVosRUFBMEIvTCxLQUExQjtBQUNBRixjQUFNRSxLQUFOLEdBQWNBLEtBQWQ7QUFDSCxLQUxELE1BTUs7QUFDREEsZ0JBQVFGLE1BQU1FLEtBQU4sb0JBQVI7QUFDSDtBQUNELFFBQUkwTCxPQUFKLEVBQWE7QUFDVCxZQUFNakwsU0FBU1UsSUFBSXVlLFlBQUoscUJBQWY7QUFDQSxZQUFNdmYsV0FBVyx5Q0FBNkJMLEtBQTdCLEVBQW9DckQsSUFBcEMsRUFBMEN1RCxLQUExQyxFQUFpREMsT0FBakQsRUFBMERRLE1BQTFELENBQWpCO0FBQ0EsWUFBTU8sUUFBUWIsU0FBU21CLFVBQXZCO0FBQ0FuQixpQkFBU3dmLFdBQVQsR0FBdUI3ZixLQUF2QjtBQUNBSyxpQkFBUzJILE1BQVQsR0FBa0JoSSxLQUFsQjtBQUNBOGYsZ0JBQVE1ZSxLQUFSLEVBQWVHLEdBQWYsRUFBb0JPLFNBQXBCLEVBQStCdkIsU0FBU1UsYUFBeEMsRUFBdURKLE1BQXZEO0FBQ0Esb0RBQTZCWCxLQUE3QixFQUFvQ29KLEdBQXBDLEVBQXlDL0ksUUFBekMsRUFBbUR1QixTQUFuRDtBQUNBLDBCQUFRckIsa0JBQVIsSUFBOEIsaUNBQXNCdUcsR0FBdEIsQ0FBMEJ6RyxRQUExQixFQUFvQ2dCLEdBQXBDLENBQTlCO0FBQ0FyQixjQUFNNUQsUUFBTixHQUFpQmlFLFFBQWpCO0FBQ0gsS0FWRCxNQVdLO0FBQ0QsWUFBTWEsU0FBUSwyQ0FBK0JsQixLQUEvQixFQUFzQ3JELElBQXRDLEVBQTRDdUQsS0FBNUMsRUFBbURDLE9BQW5ELENBQWQ7QUFDQTJmLGdCQUFRNWUsTUFBUixFQUFlRyxHQUFmLEVBQW9CTyxTQUFwQixFQUErQnpCLE9BQS9CLEVBQXdDQyxLQUF4QztBQUNBSixjQUFNNUQsUUFBTixHQUFpQjhFLE1BQWpCO0FBQ0FsQixjQUFNcUIsR0FBTixHQUFZSCxPQUFNRyxHQUFsQjtBQUNBLHlEQUFrQytILEdBQWxDLEVBQXVDL0gsR0FBdkMsRUFBNENPLFNBQTVDO0FBQ0g7QUFDRCxXQUFPUCxHQUFQO0FBQ0g7QUFDRCxTQUFTMGUsY0FBVCxDQUF3Qi9mLEtBQXhCLEVBQStCcUIsR0FBL0IsRUFBb0NPLFNBQXBDLEVBQStDekIsT0FBL0MsRUFBd0RDLEtBQXhELEVBQStEO0FBQzNELFFBQU1vQyxNQUFNeEMsTUFBTXJELElBQWxCO0FBQ0EsUUFBTVAsV0FBVzRELE1BQU01RCxRQUF2QjtBQUNBLFFBQU04RCxRQUFRRixNQUFNRSxLQUFwQjtBQUNBLFFBQU1pSixTQUFTbkosTUFBTW1KLE1BQXJCO0FBQ0EsUUFBTTdILFFBQVF0QixNQUFNc0IsS0FBcEI7QUFDQSxRQUFNOEgsTUFBTXBKLE1BQU1vSixHQUFsQjtBQUNBLFFBQUloSixTQUFVa0IsUUFBUSxHQUFsQixDQUFzQixnQkFBMUIsRUFBNkM7QUFDekNsQixnQkFBUSxJQUFSO0FBQ0g7QUFDRCxRQUFJaUIsSUFBSStPLFFBQUosS0FBaUIsQ0FBakIsSUFBc0IvTyxJQUFJMmUsT0FBSixDQUFZdlEsV0FBWixPQUE4QmpOLEdBQXhELEVBQTZEO0FBQ3pELFlBQUl6RSxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDdkMsd0NBQVEsK0dBQVI7QUFDSDtBQUNELFlBQU1naUIsU0FBUyw0QkFBYWpnQixLQUFiLEVBQW9CLElBQXBCLEVBQTBCNEIsU0FBMUIsRUFBcUN6QixPQUFyQyxFQUE4Q0MsS0FBOUMsQ0FBZjtBQUNBSixjQUFNcUIsR0FBTixHQUFZNGUsTUFBWjtBQUNBLGlDQUFhNWUsSUFBSXlCLFVBQWpCLEVBQTZCbWQsTUFBN0IsRUFBcUM1ZSxHQUFyQztBQUNBLGVBQU80ZSxNQUFQO0FBQ0g7QUFDRGpnQixVQUFNcUIsR0FBTixHQUFZQSxHQUFaO0FBQ0EsUUFBSWpGLFFBQUosRUFBYztBQUNWOGpCLHdCQUFnQjlqQixRQUFoQixFQUEwQmlGLEdBQTFCLEVBQStCTyxTQUEvQixFQUEwQ3pCLE9BQTFDLEVBQW1EQyxLQUFuRDtBQUNIO0FBQ0QsUUFBSWdMLHFCQUFxQixLQUF6QjtBQUNBLFFBQUksRUFBRTlKLFFBQVEsQ0FBVixDQUFZLGlCQUFaLENBQUosRUFBb0M7QUFDaEM4Siw2QkFBcUIsOEJBQWU5SixLQUFmLEVBQXNCdEIsS0FBdEIsRUFBNkJxQixHQUE3QixFQUFrQyxLQUFsQyxDQUFyQjtBQUNIO0FBQ0QsUUFBSW5CLEtBQUosRUFBVztBQUNQLGFBQUssSUFBSXRDLElBQVQsSUFBaUJzQyxLQUFqQixFQUF3QjtBQUNwQixxQ0FBVXRDLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0JzQyxNQUFNdEMsSUFBTixDQUF0QixFQUFtQ3lELEdBQW5DLEVBQXdDakIsS0FBeEMsRUFBK0NnTCxrQkFBL0M7QUFDSDtBQUNKO0FBQ0QsUUFBSWpDLE1BQUosRUFBWTtBQUNSLGFBQUssSUFBSS9LLElBQVQsSUFBaUIrSyxNQUFqQixFQUF5QjtBQUNyQixzQ0FBVy9LLElBQVgsRUFBaUIsSUFBakIsRUFBdUIrSyxPQUFPL0ssSUFBUCxDQUF2QixFQUFxQ2lELEdBQXJDO0FBQ0g7QUFDSjtBQUNELFFBQUkrSCxHQUFKLEVBQVM7QUFDTCxnQ0FBUy9ILEdBQVQsRUFBYytILEdBQWQsRUFBbUJ4SCxTQUFuQjtBQUNIO0FBQ0QsV0FBT1AsR0FBUDtBQUNIO0FBQ0QsU0FBUzZlLGVBQVQsQ0FBeUI5akIsUUFBekIsRUFBbUN1RixTQUFuQyxFQUE4Q0MsU0FBOUMsRUFBeUR6QixPQUF6RCxFQUFrRUMsS0FBbEUsRUFBeUU7QUFDckVrZix3QkFBb0IzZCxTQUFwQjtBQUNBLFFBQUlOLE1BQU1NLFVBQVVRLFVBQXBCO0FBQ0EsUUFBSSw0QkFBUS9GLFFBQVIsQ0FBSixFQUF1QjtBQUNuQixhQUFLLElBQUlvQixJQUFJLENBQVIsRUFBV0MsTUFBTXJCLFNBQVNTLE1BQS9CLEVBQXVDVyxJQUFJQyxHQUEzQyxFQUFnREQsR0FBaEQsRUFBcUQ7QUFDakQsZ0JBQU13RixRQUFRNUcsU0FBU29CLENBQVQsQ0FBZDtBQUNBLGdCQUFJLENBQUMsMkJBQU93RixLQUFQLENBQUQsSUFBa0IsNkJBQVNBLEtBQVQsQ0FBdEIsRUFBdUM7QUFDbkMsb0JBQUkzQixHQUFKLEVBQVM7QUFDTEEsMEJBQU15ZSxRQUFROWMsS0FBUixFQUFlM0IsR0FBZixFQUFvQk8sU0FBcEIsRUFBK0J6QixPQUEvQixFQUF3Q0MsS0FBeEMsQ0FBTjtBQUNBaUIsMEJBQU1BLElBQUlvZSxXQUFWO0FBQ0gsaUJBSEQsTUFJSztBQUNELHlDQUFNemMsS0FBTixFQUFhckIsU0FBYixFQUF3QkMsU0FBeEIsRUFBbUN6QixPQUFuQyxFQUE0Q0MsS0FBNUM7QUFDSDtBQUNKO0FBQ0o7QUFDSixLQWJELE1BY0ssSUFBSSxxQ0FBaUJoRSxRQUFqQixDQUFKLEVBQWdDO0FBQ2pDLFlBQUlpRixPQUFPQSxJQUFJK08sUUFBSixLQUFpQixDQUE1QixFQUErQjtBQUMzQixnQkFBSS9PLElBQUllLFNBQUosS0FBa0JoRyxRQUF0QixFQUFnQztBQUM1QmlGLG9CQUFJZSxTQUFKLEdBQWdCaEcsUUFBaEI7QUFDSDtBQUNKLFNBSkQsTUFLSyxJQUFJQSxRQUFKLEVBQWM7QUFDZnVGLHNCQUFVTSxXQUFWLEdBQXdCN0YsUUFBeEI7QUFDSDtBQUNEaUYsY0FBTUEsSUFBSW9lLFdBQVY7QUFDSCxLQVZJLE1BV0EsSUFBSSw2QkFBU3JqQixRQUFULENBQUosRUFBd0I7QUFDekIwakIsZ0JBQVExakIsUUFBUixFQUFrQmlGLEdBQWxCLEVBQXVCTyxTQUF2QixFQUFrQ3pCLE9BQWxDLEVBQTJDQyxLQUEzQztBQUNBaUIsY0FBTUEsSUFBSW9lLFdBQVY7QUFDSDtBQUNEO0FBQ0EsV0FBT3BlLEdBQVAsRUFBWTtBQUNSLFlBQU1vZSxjQUFjcGUsSUFBSW9lLFdBQXhCO0FBQ0E5ZCxrQkFBVWpDLFdBQVYsQ0FBc0IyQixHQUF0QjtBQUNBQSxjQUFNb2UsV0FBTjtBQUNIO0FBQ0o7QUFDRCxTQUFTVSxXQUFULENBQXFCbmdCLEtBQXJCLEVBQTRCcUIsR0FBNUIsRUFBaUM7QUFDN0IsUUFBSUEsSUFBSStPLFFBQUosS0FBaUIsQ0FBckIsRUFBd0I7QUFDcEIsWUFBTTZQLFNBQVMseUJBQVVqZ0IsS0FBVixFQUFpQixJQUFqQixDQUFmO0FBQ0FBLGNBQU1xQixHQUFOLEdBQVk0ZSxNQUFaO0FBQ0EsaUNBQWE1ZSxJQUFJeUIsVUFBakIsRUFBNkJtZCxNQUE3QixFQUFxQzVlLEdBQXJDO0FBQ0EsZUFBTzRlLE1BQVA7QUFDSDtBQUNELFFBQU1qZSxPQUFPaEMsTUFBTTVELFFBQW5CO0FBQ0EsUUFBSWlGLElBQUllLFNBQUosS0FBa0JKLElBQXRCLEVBQTRCO0FBQ3hCWCxZQUFJZSxTQUFKLEdBQWdCSixJQUFoQjtBQUNIO0FBQ0RoQyxVQUFNcUIsR0FBTixHQUFZQSxHQUFaO0FBQ0EsV0FBT0EsR0FBUDtBQUNIO0FBQ0QsU0FBUytlLFdBQVQsQ0FBcUJwZ0IsS0FBckIsRUFBNEJxQixHQUE1QixFQUFpQztBQUM3QnJCLFVBQU1xQixHQUFOLEdBQVlBLEdBQVo7QUFDQSxXQUFPQSxHQUFQO0FBQ0g7QUFDRCxTQUFTeWUsT0FBVCxDQUFpQjlmLEtBQWpCLEVBQXdCcUIsR0FBeEIsRUFBNkJPLFNBQTdCLEVBQXdDekIsT0FBeEMsRUFBaURDLEtBQWpELEVBQXdEO0FBQ3BELFFBQU1rQixRQUFRdEIsTUFBTXNCLEtBQXBCO0FBQ0EsUUFBSUEsUUFBUSxFQUFaLENBQWUsZUFBZixFQUFnQztBQUM1QixtQkFBT3FlLGlCQUFpQjNmLEtBQWpCLEVBQXdCcUIsR0FBeEIsRUFBNkJPLFNBQTdCLEVBQXdDekIsT0FBeEMsRUFBaURDLEtBQWpELEVBQXdEa0IsUUFBUSxDQUFoRSxDQUFrRSxvQkFBbEUsQ0FBUDtBQUNILFNBRkQsTUFHSyxJQUFJQSxRQUFRLElBQVosQ0FBaUIsYUFBakIsRUFBZ0M7QUFDakMsbUJBQU95ZSxlQUFlL2YsS0FBZixFQUFzQnFCLEdBQXRCLEVBQTJCTyxTQUEzQixFQUFzQ3pCLE9BQXRDLEVBQStDQyxLQUEvQyxDQUFQO0FBQ0gsU0FGSSxNQUdBLElBQUlrQixRQUFRLENBQVosQ0FBYyxVQUFkLEVBQTBCO0FBQzNCLG1CQUFPNmUsWUFBWW5nQixLQUFaLEVBQW1CcUIsR0FBbkIsQ0FBUDtBQUNILFNBRkksTUFHQSxJQUFJQyxRQUFRLElBQVosQ0FBaUIsVUFBakIsRUFBNkI7QUFDOUIsbUJBQU84ZSxZQUFZcGdCLEtBQVosRUFBbUJxQixHQUFuQixDQUFQO0FBQ0gsU0FGSSxNQUdBO0FBQ0QsWUFBSXRELFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN2QyxzSUFBbUcrQixLQUFuRyx5Q0FBbUdBLEtBQW5HO0FBQ0g7QUFDRDtBQUNIO0FBQ0o7QUFDYyxTQUFTdWYsV0FBVCxDQUFxQnJlLEtBQXJCLEVBQTRCUyxTQUE1QixFQUF1Q0MsU0FBdkMsRUFBa0Q7QUFDN0QsUUFBSVAsTUFBTU0sYUFBYUEsVUFBVVEsVUFBakM7QUFDQSxRQUFJZCxHQUFKLEVBQVM7QUFDTHllLGdCQUFRNWUsS0FBUixFQUFlRyxHQUFmLEVBQW9CTyxTQUFwQixvQkFBMEMsS0FBMUM7QUFDQVAsY0FBTU0sVUFBVVEsVUFBaEI7QUFDQTtBQUNBLGVBQU9kLE1BQU1BLElBQUlvZSxXQUFqQixFQUE4QjtBQUMxQjlkLHNCQUFVakMsV0FBVixDQUFzQjJCLEdBQXRCO0FBQ0g7QUFDRCxlQUFPLElBQVA7QUFDSDtBQUNELFdBQU8sS0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7UUMxSGVnZixZLEdBQUFBLFk7UUE0QkFDLFUsR0FBQUEsVTs7QUFyR2hCOztBQUNBOztBQUNBOztBQUNBLFNBQVNDLGFBQVQsQ0FBdUI1akIsSUFBdkIsRUFBNkI7QUFDekIsV0FBT0EsU0FBUyxVQUFULElBQXVCQSxTQUFTLE9BQXZDO0FBQ0g7QUFDRCxTQUFTNmpCLFlBQVQsQ0FBc0J0Z0IsS0FBdEIsRUFBNkI7QUFDekIsUUFBTXVnQixjQUFjRixjQUFjcmdCLE1BQU12RCxJQUFwQixDQUFwQjtBQUNBLFdBQU84akIsY0FBYyxDQUFDLGtDQUFjdmdCLE1BQU13Z0IsT0FBcEIsQ0FBZixHQUE4QyxDQUFDLGtDQUFjeGdCLE1BQU00TyxLQUFwQixDQUF0RDtBQUNIO0FBQ0QsU0FBUzZSLGlCQUFULENBQTJCaGQsQ0FBM0IsRUFBOEI7QUFDMUIsUUFBSTNELFFBQVEsS0FBS0EsS0FBakI7QUFDQSxRQUFNbUosU0FBU25KLE1BQU1tSixNQUFOLG9CQUFmO0FBQ0EsUUFBTTlILE1BQU1yQixNQUFNcUIsR0FBbEI7QUFDQSxRQUFJOEgsT0FBT3lYLE9BQVgsRUFBb0I7QUFDaEIsWUFBTWhSLFFBQVF6RyxPQUFPeVgsT0FBckI7QUFDQSxZQUFJaFIsTUFBTUEsS0FBVixFQUFpQjtBQUNiQSxrQkFBTUEsS0FBTixDQUFZQSxNQUFNRyxJQUFsQixFQUF3QnBNLENBQXhCO0FBQ0gsU0FGRCxNQUdLO0FBQ0RpTSxrQkFBTWpNLENBQU47QUFDSDtBQUNKLEtBUkQsTUFTSyxJQUFJd0YsT0FBTzBYLE9BQVgsRUFBb0I7QUFDckIxWCxlQUFPMFgsT0FBUCxDQUFlbGQsQ0FBZjtBQUNIO0FBQ0Q7QUFDQTtBQUNBMmMsZUFBVyxLQUFLdGdCLEtBQWhCLEVBQXVCcUIsR0FBdkI7QUFDSDtBQUNELFNBQVN5ZixlQUFULENBQXlCbmQsQ0FBekIsRUFBNEI7QUFDeEIsUUFBSTNELFFBQVEsS0FBS0EsS0FBakI7QUFDQSxRQUFNbUosU0FBU25KLE1BQU1tSixNQUFOLG9CQUFmO0FBQ0EsUUFBTXlHLFFBQVF6RyxPQUFPNFgsUUFBckI7QUFDQSxRQUFJblIsTUFBTUEsS0FBVixFQUFpQjtBQUNiQSxjQUFNQSxLQUFOLENBQVlBLE1BQU1HLElBQWxCLEVBQXdCcE0sQ0FBeEI7QUFDSCxLQUZELE1BR0s7QUFDRGlNLGNBQU1qTSxDQUFOO0FBQ0g7QUFDSjtBQUNELFNBQVNxZCxnQkFBVCxDQUEwQnJkLENBQTFCLEVBQTZCO0FBQ3pCLFFBQU0zRCxRQUFRLEtBQUtBLEtBQW5CO0FBQ0EsUUFBTW1KLFNBQVNuSixNQUFNbUosTUFBTixvQkFBZjtBQUNBLFFBQU05SCxNQUFNckIsTUFBTXFCLEdBQWxCO0FBQ0EsUUFBSThILE9BQU84WCxPQUFYLEVBQW9CO0FBQ2hCLFlBQU1yUixRQUFRekcsT0FBTzhYLE9BQXJCO0FBQ0EsWUFBSXJSLE1BQU1BLEtBQVYsRUFBaUI7QUFDYkEsa0JBQU1BLEtBQU4sQ0FBWUEsTUFBTUcsSUFBbEIsRUFBd0JwTSxDQUF4QjtBQUNILFNBRkQsTUFHSztBQUNEaU0sa0JBQU1qTSxDQUFOO0FBQ0g7QUFDSixLQVJELE1BU0ssSUFBSXdGLE9BQU9rVyxPQUFYLEVBQW9CO0FBQ3JCbFcsZUFBT2tXLE9BQVAsQ0FBZTFiLENBQWY7QUFDSDtBQUNEO0FBQ0E7QUFDQTJjLGVBQVcsS0FBS3RnQixLQUFoQixFQUF1QnFCLEdBQXZCO0FBQ0g7QUFDRCxTQUFTNmYsMkJBQVQsQ0FBcUM5aUIsSUFBckMsRUFBMkM7QUFDdkMsUUFBTStpQixTQUFTaGxCLFNBQVNzaEIsZ0JBQVQsZ0NBQXVEcmYsSUFBdkQsUUFBZjtBQUNBLE9BQUdnakIsT0FBSCxDQUFXcmQsSUFBWCxDQUFnQm9kLE1BQWhCLEVBQXdCLFVBQUM5ZixHQUFELEVBQVM7QUFDN0IsWUFBTWdnQixlQUFlLHlCQUFTeGEsR0FBVCxDQUFheEYsR0FBYixDQUFyQjtBQUNBLFlBQUlnZ0IsWUFBSixFQUFrQjtBQUNkLGdCQUFNbmhCLFFBQVFtaEIsYUFBYXJoQixLQUFiLENBQW1CRSxLQUFqQztBQUNBLGdCQUFJQSxLQUFKLEVBQVc7QUFDUG1CLG9CQUFJcWYsT0FBSixHQUFjVyxhQUFhcmhCLEtBQWIsQ0FBbUJFLEtBQW5CLENBQXlCd2dCLE9BQXZDO0FBQ0g7QUFDSjtBQUNKLEtBUkQ7QUFTSDtBQUNNLFNBQVNMLFlBQVQsQ0FBc0JyZ0IsS0FBdEIsRUFBNkJxQixHQUE3QixFQUFrQztBQUNyQyxRQUFNbkIsUUFBUUYsTUFBTUUsS0FBTixvQkFBZDtBQUNBb2dCLGVBQVd0Z0IsS0FBWCxFQUFrQnFCLEdBQWxCO0FBQ0EsUUFBSW1mLGFBQWF0Z0IsS0FBYixDQUFKLEVBQXlCO0FBQ3JCLFlBQUltaEIsZUFBZSx5QkFBU3hhLEdBQVQsQ0FBYXhGLEdBQWIsQ0FBbkI7QUFDQSxZQUFJLENBQUNnZ0IsWUFBTCxFQUFtQjtBQUNmQSwyQkFBZTtBQUNYcmhCO0FBRFcsYUFBZjtBQUdBLGdCQUFJdWdCLGNBQWNyZ0IsTUFBTXZELElBQXBCLENBQUosRUFBK0I7QUFDM0IwRSxvQkFBSWdlLE9BQUosR0FBYzJCLGlCQUFpQjVILElBQWpCLENBQXNCaUksWUFBdEIsQ0FBZDtBQUNBaGdCLG9CQUFJZ2UsT0FBSixDQUFZMVAsT0FBWixHQUFzQixJQUF0QjtBQUNILGFBSEQsTUFJSztBQUNEdE8sb0JBQUl3ZixPQUFKLEdBQWNGLGtCQUFrQnZILElBQWxCLENBQXVCaUksWUFBdkIsQ0FBZDtBQUNBaGdCLG9CQUFJd2YsT0FBSixDQUFZbFIsT0FBWixHQUFzQixJQUF0QjtBQUNIO0FBQ0QsZ0JBQUl6UCxNQUFNNmdCLFFBQVYsRUFBb0I7QUFDaEIxZixvQkFBSWlnQixRQUFKLEdBQWVSLGdCQUFnQjFILElBQWhCLENBQXFCaUksWUFBckIsQ0FBZjtBQUNBaGdCLG9CQUFJaWdCLFFBQUosQ0FBYTNSLE9BQWIsR0FBdUIsSUFBdkI7QUFDSDtBQUNELHFDQUFTN0ksR0FBVCxDQUFhekYsR0FBYixFQUFrQmdnQixZQUFsQjtBQUNIO0FBQ0RBLHFCQUFhcmhCLEtBQWIsR0FBcUJBLEtBQXJCO0FBQ0EsZUFBTyxJQUFQO0FBQ0g7QUFDRCxXQUFPLEtBQVA7QUFDSDtBQUNNLFNBQVNzZ0IsVUFBVCxDQUFvQnRnQixLQUFwQixFQUEyQnFCLEdBQTNCLEVBQWdDO0FBQ25DLFFBQU1uQixRQUFRRixNQUFNRSxLQUFOLG9CQUFkO0FBQ0EsUUFBTXZELE9BQU91RCxNQUFNdkQsSUFBbkI7QUFDQSxRQUFNbVMsUUFBUTVPLE1BQU00TyxLQUFwQjtBQUNBLFFBQU00UixVQUFVeGdCLE1BQU13Z0IsT0FBdEI7QUFDQSxRQUFNYSxXQUFXcmhCLE1BQU1xaEIsUUFBdkI7QUFDQSxRQUFNQyxlQUFldGhCLE1BQU1zaEIsWUFBM0I7QUFDQSxRQUFNQyxXQUFXLENBQUMsa0NBQWMzUyxLQUFkLENBQWxCO0FBQ0EsUUFBSW5TLFFBQVFBLFNBQVMwRSxJQUFJMUUsSUFBekIsRUFBK0I7QUFDM0IwRSxZQUFJMUUsSUFBSixHQUFXQSxJQUFYO0FBQ0g7QUFDRCxRQUFJNGtCLFlBQVlBLGFBQWFsZ0IsSUFBSWtnQixRQUFqQyxFQUEyQztBQUN2Q2xnQixZQUFJa2dCLFFBQUosR0FBZUEsUUFBZjtBQUNIO0FBQ0QsUUFBSSxDQUFDLGtDQUFjQyxZQUFkLENBQUQsSUFBZ0MsQ0FBQ0MsUUFBckMsRUFBK0M7QUFDM0NwZ0IsWUFBSW1nQixZQUFKLEdBQW1CQSxlQUFlLEVBQWxDO0FBQ0g7QUFDRCxRQUFJakIsY0FBYzVqQixJQUFkLENBQUosRUFBeUI7QUFDckIsWUFBSThrQixRQUFKLEVBQWM7QUFDVnBnQixnQkFBSXlOLEtBQUosR0FBWUEsS0FBWjtBQUNIO0FBQ0R6TixZQUFJcWYsT0FBSixHQUFjQSxPQUFkO0FBQ0EsWUFBSS9qQixTQUFTLE9BQVQsSUFBb0J1RCxNQUFNOUIsSUFBOUIsRUFBb0M7QUFDaEM4aUIsd0NBQTRCaGhCLE1BQU05QixJQUFsQztBQUNIO0FBQ0osS0FSRCxNQVNLO0FBQ0QsWUFBSXFqQixZQUFZcGdCLElBQUl5TixLQUFKLEtBQWNBLEtBQTlCLEVBQXFDO0FBQ2pDek4sZ0JBQUl5TixLQUFKLEdBQVlBLEtBQVo7QUFDSCxTQUZELE1BR0ssSUFBSSxDQUFDLGtDQUFjNFIsT0FBZCxDQUFMLEVBQTZCO0FBQzlCcmYsZ0JBQUlxZixPQUFKLEdBQWNBLE9BQWQ7QUFDSDtBQUNKO0FBQ0osQzs7Ozs7Ozs7Ozs7O1FDL0VlZ0IsYSxHQUFBQSxhO1FBa0JBcEIsVSxHQUFBQSxVOztBQTFFaEI7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0EsU0FBU0UsWUFBVCxDQUFzQnRnQixLQUF0QixFQUE2QjtBQUN6QixXQUFPLENBQUMsa0NBQWNBLE1BQU00TyxLQUFwQixDQUFSO0FBQ0g7QUFDRCxTQUFTNlMsc0JBQVQsQ0FBZ0MzaEIsS0FBaEMsRUFBdUM4TyxLQUF2QyxFQUE4QztBQUMxQyxRQUFNblMsT0FBT3FELE1BQU1yRCxJQUFuQjtBQUNBLFFBQUlBLFNBQVMsVUFBYixFQUF5QjtBQUNyQixZQUFNUCxXQUFXNEQsTUFBTTVELFFBQXZCO0FBQ0EsWUFBSSw0QkFBUUEsUUFBUixDQUFKLEVBQXVCO0FBQ25CLGlCQUFLLElBQUlvQixJQUFJLENBQVIsRUFBV0MsTUFBTXJCLFNBQVNTLE1BQS9CLEVBQXVDVyxJQUFJQyxHQUEzQyxFQUFnREQsR0FBaEQsRUFBcUQ7QUFDakRva0Isa0NBQWtCeGxCLFNBQVNvQixDQUFULENBQWxCLEVBQStCc1IsS0FBL0I7QUFDSDtBQUNKLFNBSkQsTUFLSyxJQUFJLHFCQUFRMVMsUUFBUixDQUFKLEVBQXVCO0FBQ3hCd2xCLDhCQUFrQnhsQixRQUFsQixFQUE0QjBTLEtBQTVCO0FBQ0g7QUFDSixLQVZELE1BV0s7QUFDRDhTLDBCQUFrQjVoQixLQUFsQixFQUF5QjhPLEtBQXpCO0FBQ0g7QUFDSjtBQUNELFNBQVM4UyxpQkFBVCxDQUEyQjVoQixLQUEzQixFQUFrQzhPLEtBQWxDLEVBQXlDO0FBQ3JDLFFBQU01TyxRQUFRRixNQUFNRSxLQUFOLG9CQUFkO0FBQ0EsUUFBTW1CLE1BQU1yQixNQUFNcUIsR0FBbEI7QUFDQTtBQUNBQSxRQUFJeU4sS0FBSixHQUFZNU8sTUFBTTRPLEtBQWxCO0FBQ0EsUUFBSyw0QkFBUUEsS0FBUixLQUFrQkEsTUFBTXhRLE9BQU4sQ0FBYzRCLE1BQU00TyxLQUFwQixNQUErQixDQUFDLENBQW5ELElBQXlENU8sTUFBTTRPLEtBQU4sS0FBZ0JBLEtBQTdFLEVBQW9GO0FBQ2hGek4sWUFBSXdnQixRQUFKLEdBQWUsSUFBZjtBQUNILEtBRkQsTUFHSztBQUNEeGdCLFlBQUl3Z0IsUUFBSixHQUFlM2hCLE1BQU0yaEIsUUFBTixJQUFrQixLQUFqQztBQUNIO0FBQ0o7QUFDRCxTQUFTQyxjQUFULENBQXdCbmUsQ0FBeEIsRUFBMkI7QUFDdkIsUUFBTTNELFFBQVEsS0FBS0EsS0FBbkI7QUFDQSxRQUFNbUosU0FBU25KLE1BQU1tSixNQUFOLG9CQUFmO0FBQ0EsUUFBTTlILE1BQU1yQixNQUFNcUIsR0FBbEI7QUFDQSxRQUFJOEgsT0FBTzRYLFFBQVgsRUFBcUI7QUFDakIsWUFBTW5SLFFBQVF6RyxPQUFPNFgsUUFBckI7QUFDQSxZQUFJblIsTUFBTUEsS0FBVixFQUFpQjtBQUNiQSxrQkFBTUEsS0FBTixDQUFZQSxNQUFNRyxJQUFsQixFQUF3QnBNLENBQXhCO0FBQ0gsU0FGRCxNQUdLO0FBQ0RpTSxrQkFBTWpNLENBQU47QUFDSDtBQUNKLEtBUkQsTUFTSyxJQUFJd0YsT0FBT21ZLFFBQVgsRUFBcUI7QUFDdEJuWSxlQUFPbVksUUFBUCxDQUFnQjNkLENBQWhCO0FBQ0g7QUFDRDtBQUNBO0FBQ0EyYyxlQUFXLEtBQUt0Z0IsS0FBaEIsRUFBdUJxQixHQUF2QjtBQUNIO0FBQ00sU0FBU3FnQixhQUFULENBQXVCMWhCLEtBQXZCLEVBQThCcUIsR0FBOUIsRUFBbUM7QUFDdEMsUUFBTW5CLFFBQVFGLE1BQU1FLEtBQU4sb0JBQWQ7QUFDQW9nQixlQUFXdGdCLEtBQVgsRUFBa0JxQixHQUFsQjtBQUNBLFFBQUltZixhQUFhdGdCLEtBQWIsQ0FBSixFQUF5QjtBQUNyQixZQUFJNmhCLGdCQUFnQix5QkFBU2xiLEdBQVQsQ0FBYXhGLEdBQWIsQ0FBcEI7QUFDQSxZQUFJLENBQUMwZ0IsYUFBTCxFQUFvQjtBQUNoQkEsNEJBQWdCO0FBQ1ovaEI7QUFEWSxhQUFoQjtBQUdBcUIsZ0JBQUlpZ0IsUUFBSixHQUFlUSxlQUFlMUksSUFBZixDQUFvQjJJLGFBQXBCLENBQWY7QUFDQTFnQixnQkFBSWlnQixRQUFKLENBQWEzUixPQUFiLEdBQXVCLElBQXZCO0FBQ0EscUNBQVM3SSxHQUFULENBQWF6RixHQUFiLEVBQWtCMGdCLGFBQWxCO0FBQ0g7QUFDREEsc0JBQWMvaEIsS0FBZCxHQUFzQkEsS0FBdEI7QUFDQSxlQUFPLElBQVA7QUFDSDtBQUNELFdBQU8sS0FBUDtBQUNIO0FBQ00sU0FBU3NnQixVQUFULENBQW9CdGdCLEtBQXBCLEVBQTJCcUIsR0FBM0IsRUFBZ0M7QUFDbkMsUUFBTW5CLFFBQVFGLE1BQU1FLEtBQU4sb0JBQWQ7QUFDQSxRQUFJQSxNQUFNcWhCLFFBQU4sS0FBbUJsZ0IsSUFBSWtnQixRQUEzQixFQUFxQztBQUNqQ2xnQixZQUFJa2dCLFFBQUosR0FBZXJoQixNQUFNcWhCLFFBQXJCO0FBQ0g7QUFDRCxRQUFNbmxCLFdBQVc0RCxNQUFNNUQsUUFBdkI7QUFDQSxRQUFJLENBQUMsOEJBQVVBLFFBQVYsQ0FBTCxFQUEwQjtBQUN0QixZQUFNMFMsUUFBUTVPLE1BQU00TyxLQUFwQjtBQUNBLFlBQUksNEJBQVExUyxRQUFSLENBQUosRUFBdUI7QUFDbkIsaUJBQUssSUFBSW9CLElBQUksQ0FBUixFQUFXQyxNQUFNckIsU0FBU1MsTUFBL0IsRUFBdUNXLElBQUlDLEdBQTNDLEVBQWdERCxHQUFoRCxFQUFxRDtBQUNqRG1rQix1Q0FBdUJ2bEIsU0FBU29CLENBQVQsQ0FBdkIsRUFBb0NzUixLQUFwQztBQUNIO0FBQ0osU0FKRCxNQUtLLElBQUkscUJBQVExUyxRQUFSLENBQUosRUFBdUI7QUFDeEJ1bEIsbUNBQXVCdmxCLFFBQXZCLEVBQWlDMFMsS0FBakM7QUFDSDtBQUNKO0FBQ0osQzs7Ozs7Ozs7Ozs7O1FDdERla1QsZSxHQUFBQSxlO1FBc0JBMUIsVSxHQUFBQSxVOztBQTNEaEI7O0FBQ0E7O0FBQ0E7O0FBQ0EsU0FBU0UsWUFBVCxDQUFzQnRnQixLQUF0QixFQUE2QjtBQUN6QixXQUFPLENBQUMsa0NBQWNBLE1BQU00TyxLQUFwQixDQUFSO0FBQ0g7QUFDRCxTQUFTZ1MsZUFBVCxDQUF5Qm5kLENBQXpCLEVBQTRCO0FBQ3hCLFFBQUkzRCxRQUFRLEtBQUtBLEtBQWpCO0FBQ0EsUUFBTW1KLFNBQVNuSixNQUFNbUosTUFBTixvQkFBZjtBQUNBLFFBQU15RyxRQUFRekcsT0FBTzRYLFFBQXJCO0FBQ0EsUUFBSW5SLE1BQU1BLEtBQVYsRUFBaUI7QUFDYkEsY0FBTUEsS0FBTixDQUFZQSxNQUFNRyxJQUFsQixFQUF3QnBNLENBQXhCO0FBQ0gsS0FGRCxNQUdLO0FBQ0RpTSxjQUFNak0sQ0FBTjtBQUNIO0FBQ0o7QUFDRCxTQUFTc2UscUJBQVQsQ0FBK0J0ZSxDQUEvQixFQUFrQztBQUM5QixRQUFJM0QsUUFBUSxLQUFLQSxLQUFqQjtBQUNBLFFBQU1tSixTQUFTbkosTUFBTW1KLE1BQU4sb0JBQWY7QUFDQSxRQUFNOUgsTUFBTXJCLE1BQU1xQixHQUFsQjtBQUNBLFFBQUk4SCxPQUFPeVgsT0FBWCxFQUFvQjtBQUNoQixZQUFNaFIsUUFBUXpHLE9BQU95WCxPQUFyQjtBQUNBLFlBQUloUixNQUFNQSxLQUFWLEVBQWlCO0FBQ2JBLGtCQUFNQSxLQUFOLENBQVlBLE1BQU1HLElBQWxCLEVBQXdCcE0sQ0FBeEI7QUFDSCxTQUZELE1BR0s7QUFDRGlNLGtCQUFNak0sQ0FBTjtBQUNIO0FBQ0osS0FSRCxNQVNLLElBQUl3RixPQUFPMFgsT0FBWCxFQUFvQjtBQUNyQjFYLGVBQU8wWCxPQUFQLENBQWVsZCxDQUFmO0FBQ0g7QUFDRDtBQUNBO0FBQ0EyYyxlQUFXLEtBQUt0Z0IsS0FBaEIsRUFBdUJxQixHQUF2QixFQUE0QixLQUE1QjtBQUNIO0FBQ00sU0FBUzJnQixlQUFULENBQXlCaGlCLEtBQXpCLEVBQWdDcUIsR0FBaEMsRUFBcUMyUCxRQUFyQyxFQUErQztBQUNsRCxRQUFNOVEsUUFBUUYsTUFBTUUsS0FBTixvQkFBZDtBQUNBb2dCLGVBQVd0Z0IsS0FBWCxFQUFrQnFCLEdBQWxCLEVBQXVCMlAsUUFBdkI7QUFDQSxRQUFJa1Isa0JBQWtCLHlCQUFTcmIsR0FBVCxDQUFheEYsR0FBYixDQUF0QjtBQUNBLFFBQUltZixhQUFhdGdCLEtBQWIsQ0FBSixFQUF5QjtBQUNyQixZQUFJLENBQUNnaUIsZUFBTCxFQUFzQjtBQUNsQkEsOEJBQWtCO0FBQ2RsaUI7QUFEYyxhQUFsQjtBQUdBcUIsZ0JBQUl3ZixPQUFKLEdBQWNvQixzQkFBc0I3SSxJQUF0QixDQUEyQjhJLGVBQTNCLENBQWQ7QUFDQTdnQixnQkFBSXdmLE9BQUosQ0FBWWxSLE9BQVosR0FBc0IsSUFBdEI7QUFDQSxnQkFBSXpQLE1BQU02Z0IsUUFBVixFQUFvQjtBQUNoQjFmLG9CQUFJaWdCLFFBQUosR0FBZVIsZ0JBQWdCMUgsSUFBaEIsQ0FBcUI4SSxlQUFyQixDQUFmO0FBQ0E3Z0Isb0JBQUlpZ0IsUUFBSixDQUFhM1IsT0FBYixHQUF1QixJQUF2QjtBQUNIO0FBQ0QscUNBQVM3SSxHQUFULENBQWF6RixHQUFiLEVBQWtCNmdCLGVBQWxCO0FBQ0g7QUFDREEsd0JBQWdCbGlCLEtBQWhCLEdBQXdCQSxLQUF4QjtBQUNBLGVBQU8sSUFBUDtBQUNIO0FBQ0QsV0FBTyxLQUFQO0FBQ0g7QUFDTSxTQUFTc2dCLFVBQVQsQ0FBb0J0Z0IsS0FBcEIsRUFBMkJxQixHQUEzQixFQUFnQzJQLFFBQWhDLEVBQTBDO0FBQzdDLFFBQU05USxRQUFRRixNQUFNRSxLQUFOLG9CQUFkO0FBQ0EsUUFBTTRPLFFBQVE1TyxNQUFNNE8sS0FBcEI7QUFDQSxRQUFNcVQsV0FBVzlnQixJQUFJeU4sS0FBckI7QUFDQSxRQUFJLGtDQUFjQSxLQUFkLENBQUosRUFBMEI7QUFDdEIsWUFBSWtDLFFBQUosRUFBYztBQUNWLGdCQUFNd1EsZUFBZXRoQixNQUFNc2hCLFlBQTNCO0FBQ0EsZ0JBQUksQ0FBQyxrQ0FBY0EsWUFBZCxDQUFMLEVBQWtDO0FBQzlCLG9CQUFJQSxpQkFBaUJXLFFBQXJCLEVBQStCO0FBQzNCOWdCLHdCQUFJeU4sS0FBSixHQUFZMFMsWUFBWjtBQUNIO0FBQ0osYUFKRCxNQUtLLElBQUlXLGFBQWEsRUFBakIsRUFBcUI7QUFDdEI5Z0Isb0JBQUl5TixLQUFKLEdBQVksRUFBWjtBQUNIO0FBQ0o7QUFDSixLQVpELE1BYUs7QUFDRDtBQUNBLFlBQUlxVCxhQUFhclQsS0FBakIsRUFBd0I7QUFDcEJ6TixnQkFBSXlOLEtBQUosR0FBWUEsS0FBWjtBQUNIO0FBQ0o7QUFDSixDOzs7Ozs7Ozs7Ozs7Ozs7QUM5RUQ7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7OzsrZUFQQTtBQUNBO0FBQ0E7Ozs7SUFPcUJzVCxLOzs7QUFDbkIsaUJBQVlsaUIsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUdqQixVQUFLaUIsS0FBTCxHQUFhO0FBQ1gscUJBQWVyRSxTQURKO0FBRVgscUJBQWU7QUFGSixLQUFiO0FBSGlCO0FBT2xCOzs7O3dDQUdtQjtBQUFBOztBQUNsQjRHLGlCQUFXLFlBQU07QUFDZixlQUFLMmUsV0FBTDtBQUNBLGVBQUtySixRQUFMLENBQWM7QUFDWix5QkFBZTtBQURILFNBQWQ7QUFHRCxPQUxELEVBS0csSUFMSDtBQU1EOzs7a0NBR2E7QUFBQTs7QUFDWixVQUFJZSxNQUFNLElBQUlDLElBQUosRUFBVjtBQUNBLFVBQUlzSSxRQUFRLHNCQUFVdkksSUFBSXdJLFFBQUosRUFBVixDQUFaO0FBQ0EsVUFBSUMsVUFBVSxzQkFBVXpJLElBQUkwSSxVQUFKLEVBQVYsQ0FBZDtBQUNBLFVBQUlDLGdCQUFtQkosS0FBbkIsU0FBNEJFLE9BQWhDOztBQUVBLFdBQUt4SixRQUFMLENBQWM7QUFDWix1QkFBZTBKO0FBREgsT0FBZDs7QUFJQWhmLGlCQUFXLFlBQU07QUFDZixlQUFLMmUsV0FBTDtBQUNELE9BRkQsRUFFRyxJQUZIO0FBR0Q7Ozs2QkFHUTtBQUNQLFVBQUluSixVQUFVLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBZDtBQUNBLFVBQUl5SixjQUFjLEtBQUt4aEIsS0FBTCxDQUFXd2hCLFdBQTdCOztBQUVBLFVBQUksS0FBS3hoQixLQUFMLENBQVdzWixXQUFYLEtBQTJCLElBQS9CLEVBQXFDO0FBQ25DdkIsZ0JBQVE1YixJQUFSLENBQWEsUUFBYjtBQUNEOztBQUVEO0FBQUEscUJBQ21CNGIsUUFBUUMsSUFBUixDQUFhLEdBQWI7QUFEbkIsU0FFTXdKLFdBRk47QUFLRDs7Ozs7O2tCQWxEa0JQLEs7Ozs7Ozs7Ozs7Ozs7QUNMckI7Ozs7OztpREFKQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTVEsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFDMWlCLEtBQUQsRUFBVztBQUMvQixNQUFJZ1osVUFBVSxDQUFDLGVBQUQsQ0FBZDs7QUFFQSxNQUFJaFosTUFBTXljLGNBQU4sS0FBeUIsSUFBN0IsRUFBbUM7QUFDakN6RCxZQUFRNWIsSUFBUixDQUFhLE9BQWI7QUFDRDs7QUFFRDtBQUFBLFlBRVMsVUFGVDtBQUFBLG1CQUdnQixxQkFIaEI7QUFBQSxpQkFJZ0I0YixRQUFRQyxJQUFSLENBQWEsR0FBYixDQUpoQjtBQUFBLGFBS1lqWixNQUFNa2I7QUFMbEI7QUFBQSxlQU1jbGIsTUFBTTZjO0FBTnBCO0FBU0QsQ0FoQkQ7O2tCQWtCZTZGLGE7Ozs7Ozs7Ozs7Ozs7OztBQ3BCZjs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7K2VBUkE7QUFDQTtBQUNBO0FBQ0E7Ozs7SUFRcUJDLGU7OztBQUNuQiwyQkFBWTNpQixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtpQixLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUdsQjs7Ozs2QkFHUTtBQUFBOztBQUNQO0FBQ0E7QUFDQSxVQUFJOFgsT0FDRi9jLE9BQU9rYixPQUFQLENBQWVtQixRQUFmLENBQ0N1SyxJQURELENBQ00sVUFBQ2pXLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2QsZUFBT0QsRUFBRXpPLElBQUYsQ0FBTzJrQixXQUFQLEtBQXVCalcsRUFBRTFPLElBQUYsQ0FBTzJrQixXQUFQLEVBQTlCO0FBQ0QsT0FIRCxFQUlDRCxJQUpELENBSU0sVUFBQ2pXLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQ2QsZUFBUUEsRUFBRTNKLEdBQUYsQ0FBTXNNLFdBQU4sT0FBd0IsT0FBS3ZQLEtBQUwsQ0FBVzhpQixhQUFYLENBQXlCN2YsR0FBekIsQ0FBNkJzTSxXQUE3QixFQUF6QixHQUF1RSxDQUF2RSxHQUEyRSxDQUFDLENBQW5GO0FBQ0QsT0FORCxFQU9Db0csR0FQRCxDQU9LLFVBQUN3QyxPQUFEO0FBQUE7QUFBQSwyQkFFZSxPQUFLblksS0FBTCxDQUFXOGlCLGFBRjFCO0FBQUEscUJBR1MzSyxPQUhUO0FBQUEsaUNBSXFCLE9BQUtuWSxLQUFMLENBQVcyYyxtQkFKaEM7QUFBQSxpQ0FLcUIsT0FBSzNjLEtBQUwsQ0FBVzRjLG1CQUxoQztBQUFBLDhCQU1rQixPQUFLNWMsS0FBTCxDQUFXOGM7QUFON0I7QUFBQSxPQVBMLENBREY7O0FBbUJBLFVBQUk5RCxVQUFVLENBQUMsVUFBRCxFQUFhLGNBQWIsQ0FBZDs7QUFFQSxVQUFJLEtBQUtoWixLQUFMLENBQVd3YyxjQUFYLEtBQThCLElBQWxDLEVBQXdDO0FBQ3RDeEQsZ0JBQVE1YixJQUFSLENBQWEsUUFBYjtBQUNEOztBQUVEO0FBQUEscUJBQ21CNGIsUUFBUUMsSUFBUixDQUFhLEdBQWI7QUFEbkIsU0FFTUYsSUFGTjtBQUFBLHdCQUNzRCxLQUFLL1ksS0FBTCxDQUFXNGM7QUFEakU7QUFLRDs7Ozs7O2tCQXhDa0IrRixlOzs7Ozs7Ozs7Ozs7O0FDUHJCOzs7Ozs7aURBSkE7QUFDQTtBQUNBOztBQUtBLElBQU1JLGFBQWEsU0FBYkEsVUFBYSxDQUFDL2lCLEtBQUQsRUFBVztBQUM1QixNQUFJZ1osVUFBVSxDQUFDLGVBQUQsQ0FBZDtBQUNBLE1BQUlnSyxlQUFlaGpCLE1BQU04YyxnQkFBTixDQUF1QjVELElBQXZCLFlBQWtDbFosTUFBTW1ZLE9BQU4sQ0FBY2xWLEdBQWhELENBQW5COztBQUVBLE1BQUlqRCxNQUFNbVksT0FBTixDQUFjbFYsR0FBZCxLQUFzQmpELE1BQU04aUIsYUFBTixDQUFvQjdmLEdBQTlDLEVBQW1EO0FBQ2pEK2YsbUJBQWVoakIsTUFBTTJjLG1CQUFyQjtBQUNBM0QsWUFBUTViLElBQVIsQ0FBYSxRQUFiO0FBQ0Q7O0FBRUQ7QUFBQSxpQkFDbUI0YixRQUFRQyxJQUFSLENBQWEsR0FBYjtBQURuQixLQUVNalosTUFBTW1ZLE9BQU4sQ0FBY2phLElBRnBCO0FBQUEsZUFDMkU4a0I7QUFEM0UsS0FDNkNoakIsTUFBTW1ZLE9BQU4sQ0FBY2xWLEdBRDNEO0FBS0QsQ0FkRDs7a0JBaUJlOGYsVTs7Ozs7Ozs7Ozs7Ozs7QUNuQmY7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7aURBUkE7QUFDQTtBQUNBO0FBQ0E7O0FBUU8sSUFBTUUsd0NBQWdCLFNBQWhCQSxhQUFnQixDQUFDampCLEtBQUQsRUFBVztBQUN0QztBQUFBLGlCQUNrQjtBQURsQjtBQUFBLGlCQUVtQjtBQUZuQixLQUVxQ0EsTUFBTWtqQixVQUFOLENBQWlCeEgsWUFGdEQ7QUFBQSxpQkFHbUI7QUFIbkI7QUFBQSxnQkFLbUIxYixNQUFNa2IsUUFMekI7QUFBQSxzQkFNeUJsYixNQUFNeWMsY0FOL0I7QUFBQSwyQkFPOEJ6YyxNQUFNNmM7QUFQcEM7QUFBQSxpQkFVbUI7QUFWbkI7QUFBQSxpQkFXcUI7QUFYckI7QUFBQSxpQkFZdUI7QUFadkI7QUFBQSxxQkFjNEI3YyxNQUFNOGlCLGFBZGxDO0FBQUEsc0JBZTZCOWlCLE1BQU13YyxjQWZuQztBQUFBLDJCQWdCa0N4YyxNQUFNMmMsbUJBaEJ4QztBQUFBLDJCQWlCa0MzYyxNQUFNNGMsbUJBakJ4QztBQUFBLHdCQWtCK0I1YyxNQUFNOGM7QUFsQnJDO0FBQUEsaUJBcUJ1QjtBQXJCdkI7QUFBQSxZQXNCc0IsUUF0QnRCO0FBQUEsYUFzQnFDLElBdEJyQztBQUFBLGlCQXNCb0Q7QUF0QnBEO0FBQUEsZ0JBQzBDOWMsTUFBTTBjO0FBRGhEO0FBNEJELENBN0JNOztrQkErQlF1RyxhOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ2Y7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFOQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxJQUFNRSxnQkFBZ0IsR0FBdEI7Ozs7SUFHcUJDLFk7OztBQUNuQix3QkFBWXBqQixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1hBLEtBRFc7O0FBR2pCLFVBQUtpQixLQUFMLEdBQWE7QUFDWCxpQkFBVyxLQURBO0FBRVgsc0JBQWdCLE1BQUtqQixLQUFMLENBQVdrakIsVUFGaEI7QUFHWCwyQkFBcUJsbkIsT0FBT2tiLE9BQVAsQ0FBZVUsS0FBZixDQUFxQnhaLE9BQXJCLENBQTZCLE1BQUs0QixLQUFMLENBQVdrakIsVUFBeEM7QUFIVixLQUFiO0FBSGlCO0FBUWxCOzs7O3FDQUdnQnhULEssRUFBTztBQUFBOztBQUN0QixXQUFLMVAsS0FBTCxDQUFXNmIsYUFBWCxDQUF5QixLQUFLNWEsS0FBTCxDQUFXb2lCLFlBQXBDOztBQUVBLFdBQUt2SyxRQUFMLENBQWM7QUFDWixtQkFBVztBQURDLE9BQWQ7O0FBSUF0VixpQkFBVyxZQUFNO0FBQ2YsZUFBS3NWLFFBQUwsQ0FBYztBQUNaLHFCQUFXO0FBREMsU0FBZDtBQUdELE9BSkQsRUFJR3FLLGFBSkg7QUFLRDs7O29DQUdlbk8sSyxFQUFPO0FBQ3JCLFdBQUs4RCxRQUFMLENBQWM7QUFDWix3QkFBZ0I5YyxPQUFPa2IsT0FBUCxDQUFlVSxLQUFmLENBQXFCNUMsS0FBckIsQ0FESjtBQUVaLDZCQUFxQkE7QUFGVCxPQUFkO0FBSUQ7Ozt1Q0FHa0I7QUFBQTs7QUFDakIsVUFBSXNPLGNBQWMsS0FBS3JpQixLQUFMLENBQVdzaUIsaUJBQTdCOztBQUVBLFVBQUlDLFVBQVV4bkIsT0FBT2tiLE9BQVAsQ0FBZVUsS0FBZixDQUFxQmpDLEdBQXJCLENBQXlCLFVBQUNtQyxJQUFELEVBQU85QyxLQUFQLEVBQWlCO0FBQ3RELFlBQUlnRSxVQUFVLENBQUMsa0JBQUQsQ0FBZDs7QUFFQSxZQUFJaEUsVUFBVXNPLFdBQWQsRUFBMkI7QUFDekJ0SyxrQkFBUTViLElBQVIsQ0FBYSxRQUFiO0FBQ0Q7O0FBRUQsWUFBSTRYLFVBQVVzTyxjQUFjLENBQTVCLEVBQStCO0FBQzdCdEssa0JBQVE1YixJQUFSLENBQWEsVUFBYjtBQUNEOztBQUVELFlBQUk0WCxVQUFVc08sY0FBYyxDQUE1QixFQUErQjtBQUM3QnRLLGtCQUFRNWIsSUFBUixDQUFhLE1BQWI7QUFDRDs7QUFFRDtBQUFBLHVCQUNrQjRiLFFBQVFDLElBQVIsQ0FBYSxHQUFiO0FBRGxCO0FBQUEsdUJBRW1CO0FBRm5CO0FBQUEsdUJBR3FCO0FBSHJCO0FBQUEsdUJBSXVCLGFBSnZCO0FBQUEsaUJBSTJDbkIsS0FBS3lFO0FBSmhEO0FBQUEsdUJBT21CO0FBUG5CO0FBQUEsdUJBUXFCO0FBUnJCLFdBUWtDekUsS0FBSzRELFlBUnZDO0FBQUEsdUJBU3FCO0FBVHJCLFdBU21DNUQsS0FBSzJMLFNBVHhDO0FBQUEscUJBQ2dELE9BQUtDLGVBQUwsQ0FBcUJ4SyxJQUFyQixTQUFnQ2xFLEtBQWhDO0FBRGhEO0FBYUQsT0E1QmEsQ0FBZDs7QUE4QkE7QUFDQTtBQUNBLFVBQUlzTyxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsWUFBSXhMLE9BQU85YixPQUFPa2IsT0FBUCxDQUFlVSxLQUFmLENBQXFCNWIsT0FBT2tiLE9BQVAsQ0FBZVUsS0FBZixDQUFxQmpiLE1BQXJCLEdBQThCLENBQW5ELENBQVg7QUFDQTZtQixnQkFBUWpULE1BQVIsQ0FBZSxDQUFmLEVBQWtCLENBQWxCO0FBQUEsdUJBQ2dCO0FBRGhCO0FBQUEsdUJBRW1CO0FBRm5CO0FBQUEsdUJBR3FCO0FBSHJCO0FBQUEsdUJBSXVCLGFBSnZCO0FBQUEsaUJBSTJDdUgsS0FBS3lFO0FBSmhEO0FBQUEsdUJBT21CO0FBUG5CO0FBQUEsdUJBUXFCO0FBUnJCLFdBUWtDekUsS0FBSzRELFlBUnZDO0FBQUEsdUJBU3FCO0FBVHJCLFdBU21DNUQsS0FBSzJMLFNBVHhDO0FBQUEscUJBQ3NELEtBQUtDLGVBQUwsQ0FBcUJ4SyxJQUFyQixDQUEwQixJQUExQixFQUFnQ2xkLE9BQU9rYixPQUFQLENBQWVVLEtBQWYsQ0FBcUJqYixNQUFyQixHQUE4QixDQUE5RDtBQUR0RDtBQWFEOztBQUVEO0FBQ0E7QUFDQSxVQUFJMm1CLGdCQUFnQnRuQixPQUFPa2IsT0FBUCxDQUFlVSxLQUFmLENBQXFCamIsTUFBckIsR0FBOEIsQ0FBbEQsRUFBcUQ7QUFDbkQsWUFBSW1iLFFBQU85YixPQUFPa2IsT0FBUCxDQUFlVSxLQUFmLENBQXFCLENBQXJCLENBQVg7QUFDQTRMLGdCQUFRcG1CLElBQVI7QUFBQSx1QkFDZ0I7QUFEaEI7QUFBQSx1QkFFbUI7QUFGbkI7QUFBQSx1QkFHcUI7QUFIckI7QUFBQSx1QkFJdUIsYUFKdkI7QUFBQSxpQkFJMkMwYSxNQUFLeUU7QUFKaEQ7QUFBQSx1QkFPbUI7QUFQbkI7QUFBQSx1QkFRcUI7QUFSckIsV0FRa0N6RSxNQUFLNEQsWUFSdkM7QUFBQSx1QkFTcUI7QUFUckIsV0FTbUM1RCxNQUFLMkwsU0FUeEM7QUFBQSxxQkFDa0QsS0FBS0MsZUFBTCxDQUFxQnhLLElBQXJCLENBQTBCLElBQTFCLEVBQWdDLENBQWhDO0FBRGxEO0FBYUQ7O0FBRUQ7QUFBQSxxQkFDZ0I7QUFEaEIsU0FFTXNLLE9BRk47QUFLRDs7OzZCQUdRO0FBQ1AsVUFBSXhLLFVBQVUsQ0FBQyxzQkFBRCxDQUFkOztBQUVBLFVBQUkySyxXQUFXLEtBQUtDLGdCQUFMLEVBQWY7QUFDQSxVQUFJQyxZQUFZN25CLE9BQU9rYixPQUFQLENBQWVVLEtBQWYsQ0FBcUJqYixNQUFyQzs7QUFFQSxVQUFJLEtBQUtxRCxLQUFMLENBQVc4akIsTUFBWCxLQUFzQixJQUExQixFQUFnQztBQUM5QjlLLGdCQUFRNWIsSUFBUixDQUFhLFFBQWI7QUFDRCxPQUZELE1BRU8sSUFBSSxLQUFLNkQsS0FBTCxDQUFXOGlCLE9BQVgsS0FBdUIsSUFBM0IsRUFBaUM7QUFDdEMvSyxnQkFBUTViLElBQVIsQ0FBYSxTQUFiO0FBQ0Q7O0FBRUQ7QUFBQSxxQkFDbUI0YixRQUFRQyxJQUFSLENBQWEsR0FBYjtBQURuQjtBQUFBLHFCQUVtQjtBQUZuQiw4Q0FFdUMsS0FBS2hZLEtBQUwsQ0FBV3NpQixpQkFBWCxHQUErQixDQUZ0RSxzQ0FFd0ZNLFNBRnhGLEtBR01GLFFBSE47QUFBQSxxQkFJbUI7QUFKbkI7QUFBQSxxQkFLcUI7QUFMckI7QUFBQSxtQkFJc0MsS0FBS0ssZ0JBQUwsQ0FBc0I5SyxJQUF0QixDQUEyQixJQUEzQjtBQUp0QztBQVNEOzs7Ozs7a0JBdklrQmtLLFk7Ozs7Ozs7Ozs7Ozs7OztBQ1ByQjs7OztBQUNBOzs7O0FBRUE7O0lBQVlhLG1COztBQUNaOztJQUFZM1EsUTs7Ozs7Ozs7OzsrZUFSWjtBQUNBO0FBQ0E7O0FBUUEsSUFBTTRRLGVBQWUsR0FBckI7Ozs7SUFHcUJDLGlCOzs7QUFDbkIsNkJBQVlua0IsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNJQUNYQSxLQURXOztBQUdqQixRQUFJb2tCLHFCQUFxQkgsb0JBQW9CSSxxQkFBcEIsRUFBekI7QUFDQSxRQUFJQyxhQUFhTCxvQkFBb0JNLGFBQXBCLENBQWtDSCxrQkFBbEMsQ0FBakI7O0FBRUEsVUFBS0ksZ0JBQUwsR0FBd0I1bkIsU0FBeEI7QUFDQSxVQUFLNm5CLGdCQUFMLEdBQXdCN25CLFNBQXhCO0FBQ0EsVUFBSzhuQixlQUFMLEdBQXVCOW5CLFNBQXZCOztBQUVBLFVBQUtxRSxLQUFMLEdBQWE7QUFDWCxtQkFBYW1qQixrQkFERjtBQUVYLG9CQUFjRSxVQUZIO0FBR1gsMkJBQXFCMW5CLFNBSFY7QUFJWCx3QkFBa0JBLFNBSlA7QUFLWCxrQkFBWTtBQUNWLGtCQUFVLEtBREE7QUFFViwyQkFBbUIsS0FGVDtBQUdWLGlCQUFTO0FBSEM7QUFMRCxLQUFiO0FBVmlCO0FBcUJsQjs7Ozt5Q0FHb0I7QUFDbkI7QUFDQSxVQUFJK25CLFlBQVksS0FBSzFqQixLQUFMLENBQVcwakIsU0FBM0I7QUFDQSxVQUFJcEksUUFBUWpKLFNBQVNJLGNBQVQsQ0FBd0IsV0FBeEIsRUFBcUMsYUFBckMsQ0FBWjtBQUNBLFdBQUs4USxnQkFBTCxHQUF3QnZvQixTQUFTc2hCLGdCQUFULENBQTBCLHVCQUExQixFQUFtRCxDQUFuRCxDQUF4QjtBQUNBLFdBQUtrSCxnQkFBTCxHQUF3QnhvQixTQUFTc2hCLGdCQUFULENBQTBCLHVCQUExQixFQUFtRCxDQUFuRCxDQUF4QjtBQUNBLFdBQUttSCxlQUFMLEdBQXVCem9CLFNBQVNzaEIsZ0JBQVQsQ0FBMEIsb0JBQTFCLEVBQWdELENBQWhELENBQXZCOztBQUVBLFdBQUtrSCxnQkFBTCxDQUFzQnpVLEtBQXRCLENBQTRCNFUsVUFBNUIsY0FBaURELFNBQWpELEdBQTZEcEksS0FBN0Q7QUFDQSxXQUFLa0ksZ0JBQUwsQ0FBc0J6VSxLQUF0QixDQUE0QjZVLGNBQTVCLEdBQTZDLE9BQTdDOztBQUVBLFdBQUsvTCxRQUFMLENBQWM7QUFDWiwwQkFBa0J5RDtBQUROLE9BQWQ7QUFHRDs7O3NDQUdpQjtBQUNoQixVQUFJdUksb0JBQW9CLEtBQUs3akIsS0FBTCxDQUFXNmpCLGlCQUFuQztBQUNBLFVBQUlDLFdBQVcsS0FBSzlqQixLQUFMLENBQVc4akIsUUFBMUI7O0FBRUE7QUFDQXpSLGVBQVMyQyxXQUFULENBQXFCLFdBQXJCLEVBQWtDNk8saUJBQWxDO0FBQ0E5b0IsYUFBT29hLGFBQVAsQ0FBcUJDLFFBQXJCLENBQThCLDJEQUE5QixFQUEyRixTQUEzRjs7QUFFQTtBQUNBME8sZUFBU2pCLE1BQVQsR0FBa0IsS0FBbEI7QUFDQWlCLGVBQVMvUCxLQUFULEdBQWlCLENBQWpCOztBQUVBLFdBQUs4RCxRQUFMLENBQWM7QUFDWiw2QkFBcUJnTSxpQkFEVDtBQUVaLDBCQUFrQkEsaUJBRk47QUFHWixvQkFBWUM7QUFIQSxPQUFkO0FBS0Q7OztxQ0FHZ0I7QUFDZjtBQUNBLFVBQUksS0FBSzlqQixLQUFMLENBQVc4akIsUUFBWCxDQUFvQkMsZUFBcEIsS0FBd0MsSUFBNUMsRUFBa0Q7QUFDaEQsZUFBTyxLQUFQO0FBQ0Q7O0FBRUQsVUFBSVYsYUFBYSxLQUFLcmpCLEtBQUwsQ0FBV3FqQixVQUE1QjtBQUNBLFVBQUlTLFdBQVcsS0FBSzlqQixLQUFMLENBQVc4akIsUUFBMUI7O0FBRUEsVUFBTUUsWUFBWSxTQUFaQSxTQUFZLENBQUNqUSxLQUFEO0FBQUEsZUFBVyxDQUFDQSxRQUFRc1AsV0FBVzNuQixNQUFuQixHQUE0QixDQUE3QixJQUFrQzJuQixXQUFXM25CLE1BQXhEO0FBQUEsT0FBbEI7O0FBRUEsVUFBSXVvQixXQUFXRCxVQUFVRixTQUFTL1AsS0FBbkIsQ0FBZjtBQUNBLFVBQUltUSxlQUFlYixXQUFXWSxRQUFYLENBQW5COztBQUVBLFVBQUlFLGlCQUFpQkgsVUFBVUMsUUFBVixDQUFyQjtBQUNBLFVBQUlHLHFCQUFxQmYsV0FBV2MsY0FBWCxDQUF6Qjs7QUFFQSxXQUFLRSxZQUFMLENBQWtCSCxZQUFsQixFQUFnQ0Usa0JBQWhDOztBQUVBTixlQUFTL1AsS0FBVCxHQUFpQmtRLFFBQWpCOztBQUVBLFdBQUtwTSxRQUFMLENBQWM7QUFDWixvQkFBWWlNO0FBREEsT0FBZDtBQUdEOzs7K0NBRzBCO0FBQ3pCLFVBQUlBLFdBQVcsS0FBSzlqQixLQUFMLENBQVc4akIsUUFBMUI7QUFDQUEsZUFBU2pCLE1BQVQsR0FBa0IsSUFBbEI7QUFDQSxXQUFLeUIsY0FBTDs7QUFFQSxXQUFLek0sUUFBTCxDQUFjO0FBQ1osb0JBQVlpTTtBQURBLE9BQWQ7QUFHRDs7O3NDQUdpQjtBQUNoQixVQUFJUyxpQkFBaUIsS0FBS3ZrQixLQUFMLENBQVd1a0IsY0FBaEM7QUFDQSxVQUFJVCxXQUFXLEtBQUs5akIsS0FBTCxDQUFXOGpCLFFBQTFCOztBQUVBO0FBQ0FBLGVBQVNqQixNQUFULEdBQWtCLEtBQWxCO0FBQ0FpQixlQUFTL1AsS0FBVCxHQUFpQixDQUFqQjs7QUFFQSxXQUFLOEQsUUFBTCxDQUFjO0FBQ1osb0JBQVlpTTtBQURBLE9BQWQ7O0FBSUEsV0FBS08sWUFBTCxDQUFrQkUsY0FBbEI7O0FBRUF4cEIsYUFBT29hLGFBQVAsQ0FBcUJDLFFBQXJCLENBQThCLCtDQUE5QjtBQUNEOzs7aUNBR1k4TyxZLEVBQWNFLGtCLEVBQW9CO0FBQUE7O0FBQzdDLFVBQUlOLFdBQVcsS0FBSzlqQixLQUFMLENBQVc4akIsUUFBMUI7O0FBRUE7QUFDQSxVQUFJSixZQUFZLEtBQUsxakIsS0FBTCxDQUFXMGpCLFNBQTNCO0FBQ0EsV0FBS0gsZ0JBQUwsQ0FBc0J4VSxLQUF0QixDQUE0QjRVLFVBQTVCLGNBQWlERCxTQUFqRCxHQUE2RFEsWUFBN0Q7QUFDQSxXQUFLWCxnQkFBTCxDQUFzQnhVLEtBQXRCLENBQTRCNlUsY0FBNUIsR0FBNkMsT0FBN0M7QUFDQSxXQUFLSixnQkFBTCxDQUFzQjFWLFNBQXRCLElBQW1DLFVBQW5DOztBQUVBZ1csZUFBU0MsZUFBVCxHQUEyQixJQUEzQjs7QUFFQTtBQUNBLFdBQUtOLGVBQUwsQ0FBcUIxVSxLQUFyQixDQUEyQjRVLFVBQTNCLGNBQWdERCxTQUFoRCxHQUE0RFUsa0JBQTVEOztBQUVBN2hCLGlCQUFXLFlBQU07QUFDZjtBQUNBLGVBQUtpaEIsZ0JBQUwsQ0FBc0J6VSxLQUF0QixDQUE0QjRVLFVBQTVCLGNBQWlERCxTQUFqRCxHQUE2RFEsWUFBN0Q7QUFDQSxlQUFLVixnQkFBTCxDQUFzQnpVLEtBQXRCLENBQTRCNlUsY0FBNUIsR0FBNkMsT0FBN0M7QUFDQSxlQUFLSixnQkFBTCxDQUFzQjFWLFNBQXRCLEdBQWtDLE9BQUswVixnQkFBTCxDQUFzQjFWLFNBQXRCLENBQWdDMFcsT0FBaEMsQ0FBd0MsVUFBeEMsRUFBb0QsRUFBcEQsQ0FBbEM7O0FBRUEsWUFBSVYsV0FBVyxPQUFLOWpCLEtBQUwsQ0FBVzhqQixRQUExQjtBQUNBQSxpQkFBU0MsZUFBVCxHQUEyQixLQUEzQjs7QUFFQSxlQUFLbE0sUUFBTCxDQUFjO0FBQ1osK0JBQXFCcU0sWUFEVDtBQUVaLHNCQUFZSjtBQUZBLFNBQWQ7QUFJRCxPQWJELEVBYUdiLFlBYkg7QUFjRDs7O3NDQUdpQjtBQUNoQixVQUFJbEwsVUFBVSxDQUFDLFNBQUQsQ0FBZDs7QUFFQSxVQUFJLEtBQUsvWCxLQUFMLENBQVc4akIsUUFBWCxDQUFvQmpCLE1BQXBCLEtBQStCLElBQW5DLEVBQXlDO0FBQ3ZDOUssZ0JBQVE1YixJQUFSLENBQWEsUUFBYjtBQUNEOztBQUVEO0FBQUEscUJBQ2lCO0FBRGpCO0FBQUEscUJBRXFCNGIsUUFBUUMsSUFBUixDQUFhLEdBQWI7QUFGckI7QUFBQSxxQkFHcUI7QUFIckI7QUFBQSxtQkFHK0MsS0FBS3lNLGVBQUwsQ0FBcUJ4TSxJQUFyQixDQUEwQixJQUExQjtBQUgvQztBQUFBLHFCQUlxQjtBQUpyQjtBQUFBLG1CQUkrQyxLQUFLeU0sZUFBTCxDQUFxQnpNLElBQXJCLENBQTBCLElBQTFCO0FBSi9DO0FBUUQ7Ozs2QkFHUTtBQUNQLFVBQUl0YSxVQUFVLEtBQUtnbkIsZUFBTCxFQUFkOztBQUVBO0FBQUEscUJBQ2lCO0FBRGpCO0FBQUEscUJBRW1CO0FBRm5CO0FBQUEsbUJBRTJDLEtBQUtDLHdCQUFMLENBQThCM00sSUFBOUIsQ0FBbUMsSUFBbkM7QUFGM0MsVUFHTXRhLE9BSE47QUFNRDs7Ozs7O2tCQWhMa0J1bEIsaUI7Ozs7Ozs7Ozs7OztRQ1RMRSxxQixHQUFBQSxxQjtRQWlCQUUsYSxHQUFBQSxhO0FBckJoQjtBQUNBO0FBQ0E7O0FBRU8sU0FBU0YscUJBQVQsR0FBaUM7QUFDdEM7QUFDQSxNQUFJcm9CLE9BQU95ZixLQUFQLEtBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLFdBQU8sc0JBQVA7QUFDRDs7QUFFRCxNQUFJcUssc0JBQXNCOXBCLE9BQU8rcEIsTUFBUCxDQUFjQyxPQUFkLENBQXNCLFVBQXRCLEVBQWtDLG1CQUFsQyxDQUExQjs7QUFFQTtBQUNBO0FBQ0EsTUFBSUYsdUJBQXVCLHdCQUF2QixJQUFtREEsdUJBQXVCLHlCQUE5RSxFQUF5RztBQUN2R0EsMEJBQXNCLGtGQUF0QjtBQUNEOztBQUVELFNBQU9BLG1CQUFQO0FBQ0Q7O0FBRU0sU0FBU3ZCLGFBQVQsQ0FBdUJJLFNBQXZCLEVBQWtDO0FBQ3ZDO0FBQ0E7QUFDQSxNQUFJM29CLE9BQU95ZixLQUFQLEtBQWlCLElBQXJCLEVBQTJCO0FBQ3pCLFdBQU8sQ0FBQyxVQUFELEVBQWEsaUJBQWIsRUFBZ0MsYUFBaEMsQ0FBUDtBQUNEOztBQUVELE1BQUk2SSxtQkFBSjs7QUFFQUEsZUFBYXRvQixPQUFPaXFCLFdBQVAsQ0FBbUJDLE9BQW5CLENBQTJCdkIsU0FBM0IsQ0FBYjtBQUNBTCxlQUFhQSxXQUFXM08sR0FBWCxDQUFlLFVBQUNsUyxDQUFELEVBQUluRyxDQUFKLEVBQU9xUCxDQUFQO0FBQUEsV0FBYWxKLEVBQUV5TixLQUFGLENBQVEsR0FBUixFQUFhb0QsR0FBYixFQUFiO0FBQUEsR0FBZixDQUFiOztBQUVBLFNBQU9nUSxVQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDbENNLElBQU02QixnQ0FBWSxTQUFaQSxTQUFZLENBQUM3b0IsQ0FBRCxFQUFPO0FBQzlCLFNBQVFBLElBQUksRUFBTCxHQUFXLE1BQU1BLENBQWpCLEdBQXFCQSxDQUE1QjtBQUNELENBRk0sQzs7Ozs7Ozs7Ozs7O2tCQ1dpQjhvQixJOztBQVh4Qjs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7O0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixNQUFJQyxlQUFlLHNDQUFuQjtBQUNBQSxpQkFBZSw0Q0FBc0JBLFlBQXRCLENBQWY7O0FBRUEsTUFBSTFMLFFBQVEsd0RBQTRCMEwsWUFBNUIsQ0FBWjs7QUFFQSxvQkFBUTlwQixNQUFSO0FBQUEsYUFBcUNvZTtBQUFyQyxNQUFpRDFlLFNBQVNxcUIsY0FBVCxDQUF3QixlQUF4QixDQUFqRDtBQUNBLG9CQUFRL3BCLE1BQVI7QUFBQSxhQUFrQ29lO0FBQWxDLE1BQThDMWUsU0FBU3FxQixjQUFULENBQXdCLFlBQXhCLENBQTlDO0FBQ0Esb0JBQVEvcEIsTUFBUjtBQUFBLGFBQW9Db2U7QUFBcEMsTUFBZ0QxZSxTQUFTcXFCLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBaEQ7QUFDRDs7QUFFRHRxQixPQUFPdXFCLE1BQVAsR0FBZ0IsVUFBQzlpQixDQUFELEVBQU87QUFDckI7QUFDQXpILFNBQU9vYSxhQUFQLEdBQXVCLDZCQUF2Qjs7QUFFQWdRO0FBQ0QsQ0FMRCxDOzs7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7QUFFQTtBQUNBLElBQUlJLFVBQVMsZUFBS0EsTUFBbEI7O2tCQUVlQSxPOzs7Ozs7Ozs7Ozs7O0FDTGY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBLElBQUlDLFlBQVksaUJBQWhCOztBQUVBO0FBQ0EsSUFBSUMsWUFBWUMsU0FBU3JxQixTQUF6QjtBQUFBLElBQ0lzcUIsY0FBY2huQixPQUFPdEQsU0FEekI7O0FBR0E7QUFDQSxJQUFJdXFCLGVBQWVILFVBQVV2b0IsUUFBN0I7O0FBRUE7QUFDQSxJQUFJMm9CLGlCQUFpQkYsWUFBWUUsY0FBakM7O0FBRUE7QUFDQSxJQUFJQyxtQkFBbUJGLGFBQWFoakIsSUFBYixDQUFrQmpFLE1BQWxCLENBQXZCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBLFNBQVNvbkIsYUFBVCxDQUF1QnBZLEtBQXZCLEVBQThCO0FBQzVCLE1BQUksQ0FBQyw0QkFBYUEsS0FBYixDQUFELElBQXdCLDBCQUFXQSxLQUFYLEtBQXFCNlgsU0FBakQsRUFBNEQ7QUFDMUQsV0FBTyxLQUFQO0FBQ0Q7QUFDRCxNQUFJUSxRQUFRLDRCQUFhclksS0FBYixDQUFaO0FBQ0EsTUFBSXFZLFVBQVUsSUFBZCxFQUFvQjtBQUNsQixXQUFPLElBQVA7QUFDRDtBQUNELE1BQUlDLE9BQU9KLGVBQWVqakIsSUFBZixDQUFvQm9qQixLQUFwQixFQUEyQixhQUEzQixLQUE2Q0EsTUFBTUUsV0FBOUQ7QUFDQSxTQUFPLE9BQU9ELElBQVAsSUFBZSxVQUFmLElBQTZCQSxnQkFBZ0JBLElBQTdDLElBQ0xMLGFBQWFoakIsSUFBYixDQUFrQnFqQixJQUFsQixLQUEyQkgsZ0JBRDdCO0FBRUQ7O2tCQUVjQyxhOzs7Ozs7Ozs7Ozs7a0JDbERTSSxPO0FBWHhCOzs7Ozs7Ozs7OztBQVdlLFNBQVNBLE9BQVQsR0FBbUI7QUFDaEMsT0FBSyxJQUFJQyxPQUFPMWlCLFVBQVVoSSxNQUFyQixFQUE2QjJxQixRQUFRbHJCLE1BQU1pckIsSUFBTixDQUFyQyxFQUFrREUsT0FBTyxDQUE5RCxFQUFpRUEsT0FBT0YsSUFBeEUsRUFBOEVFLE1BQTlFLEVBQXNGO0FBQ3BGRCxVQUFNQyxJQUFOLElBQWM1aUIsVUFBVTRpQixJQUFWLENBQWQ7QUFDRDs7QUFFRCxNQUFJRCxNQUFNM3FCLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsV0FBTyxVQUFVNnFCLEdBQVYsRUFBZTtBQUNwQixhQUFPQSxHQUFQO0FBQ0QsS0FGRDtBQUdEOztBQUVELE1BQUlGLE1BQU0zcUIsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QixXQUFPMnFCLE1BQU0sQ0FBTixDQUFQO0FBQ0Q7O0FBRUQsTUFBSUcsT0FBT0gsTUFBTUEsTUFBTTNxQixNQUFOLEdBQWUsQ0FBckIsQ0FBWDtBQUNBLE1BQUkrcUIsT0FBT0osTUFBTWhaLEtBQU4sQ0FBWSxDQUFaLEVBQWUsQ0FBQyxDQUFoQixDQUFYO0FBQ0EsU0FBTyxZQUFZO0FBQ2pCLFdBQU9vWixLQUFLQyxXQUFMLENBQWlCLFVBQVVDLFFBQVYsRUFBb0JDLENBQXBCLEVBQXVCO0FBQzdDLGFBQU9BLEVBQUVELFFBQUYsQ0FBUDtBQUNELEtBRk0sRUFFSkgsS0FBSzNpQixLQUFMLENBQVdsSSxTQUFYLEVBQXNCK0gsU0FBdEIsQ0FGSSxDQUFQO0FBR0QsR0FKRDtBQUtELEM7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDS3VCbWpCLFc7O0FBdEN4Qjs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7O0FBTU8sSUFBSUMsb0NBQWM7QUFDdkJDLFFBQU07QUFEaUIsQ0FBbEI7O0FBSVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QmUsU0FBU0YsV0FBVCxDQUFxQkcsT0FBckIsRUFBOEJDLGNBQTlCLEVBQThDQyxRQUE5QyxFQUF3RDtBQUNyRSxNQUFJQyxLQUFKOztBQUVBLE1BQUksT0FBT0YsY0FBUCxLQUEwQixVQUExQixJQUF3QyxPQUFPQyxRQUFQLEtBQW9CLFdBQWhFLEVBQTZFO0FBQzNFQSxlQUFXRCxjQUFYO0FBQ0FBLHFCQUFpQnRyQixTQUFqQjtBQUNEOztBQUVELE1BQUksT0FBT3VyQixRQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ25DLFFBQUksT0FBT0EsUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNsQyxZQUFNLElBQUlyckIsS0FBSixDQUFVLHlDQUFWLENBQU47QUFDRDs7QUFFRCxXQUFPcXJCLFNBQVNMLFdBQVQsRUFBc0JHLE9BQXRCLEVBQStCQyxjQUEvQixDQUFQO0FBQ0Q7O0FBRUQsTUFBSSxPQUFPRCxPQUFQLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ2pDLFVBQU0sSUFBSW5yQixLQUFKLENBQVUsd0NBQVYsQ0FBTjtBQUNEOztBQUVELE1BQUl1ckIsaUJBQWlCSixPQUFyQjtBQUNBLE1BQUlLLGVBQWVKLGNBQW5CO0FBQ0EsTUFBSUssbUJBQW1CLEVBQXZCO0FBQ0EsTUFBSUMsZ0JBQWdCRCxnQkFBcEI7QUFDQSxNQUFJRSxnQkFBZ0IsS0FBcEI7O0FBRUEsV0FBU0MsNEJBQVQsR0FBd0M7QUFDdEMsUUFBSUYsa0JBQWtCRCxnQkFBdEIsRUFBd0M7QUFDdENDLHNCQUFnQkQsaUJBQWlCamEsS0FBakIsRUFBaEI7QUFDRDtBQUNGOztBQUVEOzs7OztBQUtBLFdBQVN1TSxRQUFULEdBQW9CO0FBQ2xCLFdBQU95TixZQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBLFdBQVN2TixTQUFULENBQW1CNE4sUUFBbkIsRUFBNkI7QUFDM0IsUUFBSSxPQUFPQSxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2xDLFlBQU0sSUFBSTdyQixLQUFKLENBQVUscUNBQVYsQ0FBTjtBQUNEOztBQUVELFFBQUk4ckIsZUFBZSxJQUFuQjs7QUFFQUY7QUFDQUYsa0JBQWNwckIsSUFBZCxDQUFtQnVyQixRQUFuQjs7QUFFQSxXQUFPLFNBQVM3TixXQUFULEdBQXVCO0FBQzVCLFVBQUksQ0FBQzhOLFlBQUwsRUFBbUI7QUFDakI7QUFDRDs7QUFFREEscUJBQWUsS0FBZjs7QUFFQUY7QUFDQSxVQUFJMVQsUUFBUXdULGNBQWNwcUIsT0FBZCxDQUFzQnVxQixRQUF0QixDQUFaO0FBQ0FILG9CQUFjalksTUFBZCxDQUFxQnlFLEtBQXJCLEVBQTRCLENBQTVCO0FBQ0QsS0FWRDtBQVdEOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLFdBQVMrRyxRQUFULENBQWtCbUIsTUFBbEIsRUFBMEI7QUFDeEIsUUFBSSxDQUFDLDZCQUFjQSxNQUFkLENBQUwsRUFBNEI7QUFDMUIsWUFBTSxJQUFJcGdCLEtBQUosQ0FBVSxvQ0FBb0MsMENBQTlDLENBQU47QUFDRDs7QUFFRCxRQUFJLE9BQU9vZ0IsT0FBT3pnQixJQUFkLEtBQXVCLFdBQTNCLEVBQXdDO0FBQ3RDLFlBQU0sSUFBSUssS0FBSixDQUFVLHdEQUF3RCxpQ0FBbEUsQ0FBTjtBQUNEOztBQUVELFFBQUkyckIsYUFBSixFQUFtQjtBQUNqQixZQUFNLElBQUkzckIsS0FBSixDQUFVLG9DQUFWLENBQU47QUFDRDs7QUFFRCxRQUFJO0FBQ0YyckIsc0JBQWdCLElBQWhCO0FBQ0FILHFCQUFlRCxlQUFlQyxZQUFmLEVBQTZCcEwsTUFBN0IsQ0FBZjtBQUNELEtBSEQsU0FHVTtBQUNSdUwsc0JBQWdCLEtBQWhCO0FBQ0Q7O0FBRUQsUUFBSXhyQixZQUFZc3JCLG1CQUFtQkMsYUFBbkM7QUFDQSxTQUFLLElBQUlsckIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJTCxVQUFVTixNQUE5QixFQUFzQ1csR0FBdEMsRUFBMkM7QUFDekNMLGdCQUFVSyxDQUFWO0FBQ0Q7O0FBRUQsV0FBTzRmLE1BQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7OztBQVVBLFdBQVMyTCxjQUFULENBQXdCQyxXQUF4QixFQUFxQztBQUNuQyxRQUFJLE9BQU9BLFdBQVAsS0FBdUIsVUFBM0IsRUFBdUM7QUFDckMsWUFBTSxJQUFJaHNCLEtBQUosQ0FBVSw0Q0FBVixDQUFOO0FBQ0Q7O0FBRUR1ckIscUJBQWlCUyxXQUFqQjtBQUNBL00sYUFBUyxFQUFFdGYsTUFBTXNyQixZQUFZQyxJQUFwQixFQUFUO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BLFdBQVNlLFVBQVQsR0FBc0I7QUFDcEIsUUFBSUMsSUFBSjs7QUFFQSxRQUFJQyxpQkFBaUJsTyxTQUFyQjtBQUNBLFdBQU9pTyxPQUFPO0FBQ1o7Ozs7Ozs7O0FBUUFqTyxpQkFBVyxTQUFTQSxTQUFULENBQW1CbU8sUUFBbkIsRUFBNkI7QUFDdEMsWUFBSSxRQUFPQSxRQUFQLHlDQUFPQSxRQUFQLE9BQW9CLFFBQXhCLEVBQWtDO0FBQ2hDLGdCQUFNLElBQUlDLFNBQUosQ0FBYyx3Q0FBZCxDQUFOO0FBQ0Q7O0FBRUQsaUJBQVNDLFlBQVQsR0FBd0I7QUFDdEIsY0FBSUYsU0FBU0csSUFBYixFQUFtQjtBQUNqQkgscUJBQVNHLElBQVQsQ0FBY3hPLFVBQWQ7QUFDRDtBQUNGOztBQUVEdU87QUFDQSxZQUFJdE8sY0FBY21PLGVBQWVHLFlBQWYsQ0FBbEI7QUFDQSxlQUFPLEVBQUV0TyxhQUFhQSxXQUFmLEVBQVA7QUFDRDtBQXZCVyxLQUFQLEVBd0JKa08sbUNBQXFCLFlBQVk7QUFDbEMsYUFBTyxJQUFQO0FBQ0QsS0ExQk0sRUEwQkpBLElBMUJIO0FBMkJEOztBQUVEO0FBQ0E7QUFDQTtBQUNBak4sV0FBUyxFQUFFdGYsTUFBTXNyQixZQUFZQyxJQUFwQixFQUFUOztBQUVBLFNBQU9JLFFBQVE7QUFDYnJNLGNBQVVBLFFBREc7QUFFYmhCLGVBQVdBLFNBRkU7QUFHYkYsY0FBVUEsUUFIRztBQUliZ08sb0JBQWdCQTtBQUpILEdBQVIsRUFLSlQsb0NBQXNCVyxVQUxsQixFQUs4QlgsS0FMckM7QUFNRCxDOzs7Ozs7Ozs7Ozs7a0JDalB1QjFzQixPO0FBTnhCOzs7Ozs7QUFNZSxTQUFTQSxPQUFULENBQWlCbUIsT0FBakIsRUFBMEI7QUFDdkM7QUFDQSxNQUFJLE9BQU9FLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0MsT0FBT0EsUUFBUXVzQixLQUFmLEtBQXlCLFVBQS9ELEVBQTJFO0FBQ3pFdnNCLFlBQVF1c0IsS0FBUixDQUFjenNCLE9BQWQ7QUFDRDtBQUNEO0FBQ0EsTUFBSTtBQUNGO0FBQ0E7QUFDQTtBQUNBLFVBQU0sSUFBSUMsS0FBSixDQUFVRCxPQUFWLENBQU47QUFDQTtBQUNELEdBTkQsQ0FNRSxPQUFPNEcsQ0FBUCxFQUFVLENBQUU7QUFDZDtBQUNELEM7Ozs7Ozs7Ozs7O0FDcEJELElBQUk4bEIsQ0FBSjs7QUFFQTtBQUNBQSxJQUFLLFlBQVc7QUFDZixRQUFPLElBQVA7QUFDQSxDQUZHLEVBQUo7O0FBSUEsSUFBSTtBQUNIO0FBQ0FBLEtBQUlBLEtBQUs1QyxTQUFTLGFBQVQsR0FBTCxJQUFrQyxDQUFDLEdBQUU2QyxJQUFILEVBQVMsTUFBVCxDQUF0QztBQUNBLENBSEQsQ0FHRSxPQUFNL2xCLENBQU4sRUFBUztBQUNWO0FBQ0EsS0FBRyxRQUFPekgsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUFyQixFQUNDdXRCLElBQUl2dEIsTUFBSjtBQUNEOztBQUVEO0FBQ0E7QUFDQTs7QUFFQWtILE9BQU9DLE9BQVAsR0FBaUJvbUIsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7OztBQUlBLFNBQVNFLFNBQVQsR0FBcUIsQ0FBRTs7QUFFdkIsSUFBSTVyQixRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBekIsSUFBeUMsT0FBTzByQixVQUFVdnJCLElBQWpCLEtBQTBCLFFBQW5FLElBQStFdXJCLFVBQVV2ckIsSUFBVixLQUFtQixXQUF0RyxFQUFtSDtBQUNqSCx5QkFBUSxtRkFBbUYsdUVBQW5GLEdBQTZKLG9GQUE3SixHQUFvUCw0RUFBcFAsR0FBbVUsZ0VBQTNVO0FBQ0Q7O1FBRVE0cEIsVztRQUFhNEIsZTtRQUFpQkMsa0I7UUFBb0JDLGU7UUFBaUJ4QyxPOzs7Ozs7Ozs7Ozs7OztBQ2pCNUU7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBLElBQUl5QyxVQUFVLGVBQWQ7QUFBQSxJQUNJQyxlQUFlLG9CQURuQjs7QUFHQTtBQUNBLElBQUlDLGlCQUFpQixtQkFBUyxpQkFBT0MsV0FBaEIsR0FBOEJwdEIsU0FBbkQ7O0FBRUE7Ozs7Ozs7QUFPQSxTQUFTcXRCLFVBQVQsQ0FBb0JyYixLQUFwQixFQUEyQjtBQUN6QixNQUFJQSxTQUFTLElBQWIsRUFBbUI7QUFDakIsV0FBT0EsVUFBVWhTLFNBQVYsR0FBc0JrdEIsWUFBdEIsR0FBcUNELE9BQTVDO0FBQ0Q7QUFDRCxTQUFRRSxrQkFBa0JBLGtCQUFrQm5xQixPQUFPZ1AsS0FBUCxDQUFyQyxHQUNILHlCQUFVQSxLQUFWLENBREcsR0FFSCw4QkFBZUEsS0FBZixDQUZKO0FBR0Q7O2tCQUVjcWIsVTs7Ozs7Ozs7Ozs7Ozs7O0FDM0JmO0FBQ0EsSUFBSUMsYUFBYSxRQUFPQyxNQUFQLHlDQUFPQSxNQUFQLE1BQWlCLFFBQWpCLElBQTZCQSxNQUE3QixJQUF1Q0EsT0FBT3ZxQixNQUFQLEtBQWtCQSxNQUF6RCxJQUFtRXVxQixNQUFwRjs7a0JBRWVELFU7Ozs7Ozs7Ozs7Ozs7O0FDSGY7Ozs7OztBQUVBO0FBQ0EsSUFBSUUsZUFBZSx1QkFBUXhxQixPQUFPeXFCLGNBQWYsRUFBK0J6cUIsTUFBL0IsQ0FBbkI7O2tCQUVld3FCLFk7Ozs7Ozs7Ozs7Ozs7QUNMZjs7Ozs7O0FBRUE7QUFDQSxJQUFJeEQsY0FBY2huQixPQUFPdEQsU0FBekI7O0FBRUE7QUFDQSxJQUFJd3FCLGlCQUFpQkYsWUFBWUUsY0FBakM7O0FBRUE7Ozs7O0FBS0EsSUFBSXdELHVCQUF1QjFELFlBQVl6b0IsUUFBdkM7O0FBRUE7QUFDQSxJQUFJNHJCLGlCQUFpQixtQkFBUyxpQkFBT0MsV0FBaEIsR0FBOEJwdEIsU0FBbkQ7O0FBRUE7Ozs7Ozs7QUFPQSxTQUFTMnRCLFNBQVQsQ0FBbUIzYixLQUFuQixFQUEwQjtBQUN4QixNQUFJNGIsUUFBUTFELGVBQWVqakIsSUFBZixDQUFvQitLLEtBQXBCLEVBQTJCbWIsY0FBM0IsQ0FBWjtBQUFBLE1BQ0l6bkIsTUFBTXNNLE1BQU1tYixjQUFOLENBRFY7O0FBR0EsTUFBSTtBQUNGbmIsVUFBTW1iLGNBQU4sSUFBd0JudEIsU0FBeEI7QUFDQSxRQUFJNnRCLFdBQVcsSUFBZjtBQUNELEdBSEQsQ0FHRSxPQUFPaG5CLENBQVAsRUFBVSxDQUFFOztBQUVkLE1BQUk4SyxTQUFTK2IscUJBQXFCem1CLElBQXJCLENBQTBCK0ssS0FBMUIsQ0FBYjtBQUNBLE1BQUk2YixRQUFKLEVBQWM7QUFDWixRQUFJRCxLQUFKLEVBQVc7QUFDVDViLFlBQU1tYixjQUFOLElBQXdCem5CLEdBQXhCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT3NNLE1BQU1tYixjQUFOLENBQVA7QUFDRDtBQUNGO0FBQ0QsU0FBT3hiLE1BQVA7QUFDRDs7a0JBRWNnYyxTOzs7Ozs7Ozs7Ozs7QUM3Q2Y7QUFDQSxJQUFJM0QsY0FBY2huQixPQUFPdEQsU0FBekI7O0FBRUE7Ozs7O0FBS0EsSUFBSWd1Qix1QkFBdUIxRCxZQUFZem9CLFFBQXZDOztBQUVBOzs7Ozs7O0FBT0EsU0FBU3VzQixjQUFULENBQXdCOWIsS0FBeEIsRUFBK0I7QUFDN0IsU0FBTzBiLHFCQUFxQnptQixJQUFyQixDQUEwQitLLEtBQTFCLENBQVA7QUFDRDs7a0JBRWM4YixjOzs7Ozs7Ozs7Ozs7QUNyQmY7Ozs7Ozs7O0FBUUEsU0FBU0MsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUJDLFNBQXZCLEVBQWtDO0FBQ2hDLFNBQU8sVUFBU3JELEdBQVQsRUFBYztBQUNuQixXQUFPb0QsS0FBS0MsVUFBVXJELEdBQVYsQ0FBTCxDQUFQO0FBQ0QsR0FGRDtBQUdEOztrQkFFY21ELE87Ozs7Ozs7Ozs7Ozs7OztBQ2RmOzs7Ozs7QUFFQTtBQUNBLElBQUlHLFdBQVcsUUFBT0MsSUFBUCx5Q0FBT0EsSUFBUCxNQUFlLFFBQWYsSUFBMkJBLElBQTNCLElBQW1DQSxLQUFLbnJCLE1BQUwsS0FBZ0JBLE1BQW5ELElBQTZEbXJCLElBQTVFOztBQUVBO0FBQ0EsSUFBSTNhLE9BQU8sd0JBQWMwYSxRQUFkLElBQTBCbkUsU0FBUyxhQUFULEdBQXJDOztrQkFFZXZXLEk7Ozs7Ozs7Ozs7Ozs7OztBQ1JmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkEsU0FBUzRhLFlBQVQsQ0FBc0JwYyxLQUF0QixFQUE2QjtBQUMzQixTQUFPQSxTQUFTLElBQVQsSUFBaUIsUUFBT0EsS0FBUCx5Q0FBT0EsS0FBUCxNQUFnQixRQUF4QztBQUNEOztrQkFFY29jLFk7Ozs7Ozs7Ozs7OztrQkNSU3BCLGU7O0FBbEJ4Qjs7Ozs7O0FBRkEsSUFBSXFCLFdBQVdyckIsT0FBT2tCLE1BQVAsSUFBaUIsVUFBVWdiLE1BQVYsRUFBa0I7QUFBRSxPQUFLLElBQUl4ZSxJQUFJLENBQWIsRUFBZ0JBLElBQUlxSCxVQUFVaEksTUFBOUIsRUFBc0NXLEdBQXRDLEVBQTJDO0FBQUUsUUFBSTR0QixTQUFTdm1CLFVBQVVySCxDQUFWLENBQWIsQ0FBMkIsS0FBSyxJQUFJMkYsR0FBVCxJQUFnQmlvQixNQUFoQixFQUF3QjtBQUFFLFVBQUl0ckIsT0FBT3RELFNBQVAsQ0FBaUJ3cUIsY0FBakIsQ0FBZ0NqakIsSUFBaEMsQ0FBcUNxbkIsTUFBckMsRUFBNkNqb0IsR0FBN0MsQ0FBSixFQUF1RDtBQUFFNlksZUFBTzdZLEdBQVAsSUFBY2lvQixPQUFPam9CLEdBQVAsQ0FBZDtBQUE0QjtBQUFFO0FBQUUsR0FBQyxPQUFPNlksTUFBUDtBQUFnQixDQUFoUTs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCZSxTQUFTOE4sZUFBVCxHQUEyQjtBQUN4QyxPQUFLLElBQUl2QyxPQUFPMWlCLFVBQVVoSSxNQUFyQixFQUE2Qnd1QixjQUFjL3VCLE1BQU1pckIsSUFBTixDQUEzQyxFQUF3REUsT0FBTyxDQUFwRSxFQUF1RUEsT0FBT0YsSUFBOUUsRUFBb0ZFLE1BQXBGLEVBQTRGO0FBQzFGNEQsZ0JBQVk1RCxJQUFaLElBQW9CNWlCLFVBQVU0aUIsSUFBVixDQUFwQjtBQUNEOztBQUVELFNBQU8sVUFBVU8sV0FBVixFQUF1QjtBQUM1QixXQUFPLFVBQVVHLE9BQVYsRUFBbUJDLGNBQW5CLEVBQW1DQyxRQUFuQyxFQUE2QztBQUNsRCxVQUFJeE4sUUFBUW1OLFlBQVlHLE9BQVosRUFBcUJDLGNBQXJCLEVBQXFDQyxRQUFyQyxDQUFaO0FBQ0EsVUFBSWlELFlBQVl6USxNQUFNb0IsUUFBdEI7QUFDQSxVQUFJc1AsUUFBUSxFQUFaOztBQUVBLFVBQUlDLGdCQUFnQjtBQUNsQnpRLGtCQUFVRixNQUFNRSxRQURFO0FBRWxCa0Isa0JBQVUsU0FBU0EsUUFBVCxDQUFrQm1CLE1BQWxCLEVBQTBCO0FBQ2xDLGlCQUFPa08sVUFBVWxPLE1BQVYsQ0FBUDtBQUNEO0FBSmlCLE9BQXBCO0FBTUFtTyxjQUFRRixZQUFZeFYsR0FBWixDQUFnQixVQUFVNFYsVUFBVixFQUFzQjtBQUM1QyxlQUFPQSxXQUFXRCxhQUFYLENBQVA7QUFDRCxPQUZPLENBQVI7QUFHQUYsa0JBQVksa0JBQVF0bUIsS0FBUixDQUFjbEksU0FBZCxFQUF5Qnl1QixLQUF6QixFQUFnQzFRLE1BQU1vQixRQUF0QyxDQUFaOztBQUVBLGFBQU9rUCxTQUFTLEVBQVQsRUFBYXRRLEtBQWIsRUFBb0I7QUFDekJvQixrQkFBVXFQO0FBRGUsT0FBcEIsQ0FBUDtBQUdELEtBbkJEO0FBb0JELEdBckJEO0FBc0JELEM7Ozs7Ozs7Ozs7Ozs7OztrQkNwQnVCekIsa0I7QUEzQnhCLFNBQVM2QixpQkFBVCxDQUEyQkMsYUFBM0IsRUFBMEMxUCxRQUExQyxFQUFvRDtBQUNsRCxTQUFPLFlBQVk7QUFDakIsV0FBT0EsU0FBUzBQLGNBQWMzbUIsS0FBZCxDQUFvQmxJLFNBQXBCLEVBQStCK0gsU0FBL0IsQ0FBVCxDQUFQO0FBQ0QsR0FGRDtBQUdEOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQmUsU0FBU2dsQixrQkFBVCxDQUE0QitCLGNBQTVCLEVBQTRDM1AsUUFBNUMsRUFBc0Q7QUFDbkUsTUFBSSxPQUFPMlAsY0FBUCxLQUEwQixVQUE5QixFQUEwQztBQUN4QyxXQUFPRixrQkFBa0JFLGNBQWxCLEVBQWtDM1AsUUFBbEMsQ0FBUDtBQUNEOztBQUVELE1BQUksUUFBTzJQLGNBQVAseUNBQU9BLGNBQVAsT0FBMEIsUUFBMUIsSUFBc0NBLG1CQUFtQixJQUE3RCxFQUFtRTtBQUNqRSxVQUFNLElBQUk1dUIsS0FBSixDQUFVLDRFQUE0RTR1QixtQkFBbUIsSUFBbkIsR0FBMEIsTUFBMUIsVUFBMENBLGNBQTFDLHlDQUEwQ0EsY0FBMUMsQ0FBNUUsSUFBd0ksSUFBeEksR0FBK0ksMEZBQXpKLENBQU47QUFDRDs7QUFFRCxNQUFJalksT0FBTzdULE9BQU82VCxJQUFQLENBQVlpWSxjQUFaLENBQVg7QUFDQSxNQUFJQyxzQkFBc0IsRUFBMUI7QUFDQSxPQUFLLElBQUlydUIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJbVcsS0FBSzlXLE1BQXpCLEVBQWlDVyxHQUFqQyxFQUFzQztBQUNwQyxRQUFJMkYsTUFBTXdRLEtBQUtuVyxDQUFMLENBQVY7QUFDQSxRQUFJbXVCLGdCQUFnQkMsZUFBZXpvQixHQUFmLENBQXBCO0FBQ0EsUUFBSSxPQUFPd29CLGFBQVAsS0FBeUIsVUFBN0IsRUFBeUM7QUFDdkNFLDBCQUFvQjFvQixHQUFwQixJQUEyQnVvQixrQkFBa0JDLGFBQWxCLEVBQWlDMVAsUUFBakMsQ0FBM0I7QUFDRDtBQUNGO0FBQ0QsU0FBTzRQLG1CQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O2tCQ3NCdUJqQyxlOztBQXBFeEI7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBU2tDLDZCQUFULENBQXVDM29CLEdBQXZDLEVBQTRDaWEsTUFBNUMsRUFBb0Q7QUFDbEQsTUFBSTJPLGFBQWEzTyxVQUFVQSxPQUFPemdCLElBQWxDO0FBQ0EsTUFBSXF2QixhQUFhRCxjQUFjLE1BQU1BLFdBQVcxdEIsUUFBWCxFQUFOLEdBQThCLEdBQTVDLElBQW1ELFdBQXBFOztBQUVBLFNBQU8sa0JBQWtCMnRCLFVBQWxCLEdBQStCLGFBQS9CLEdBQStDN29CLEdBQS9DLEdBQXFELHdCQUFyRCxHQUFnRixxRUFBdkY7QUFDRDs7QUFFRCxTQUFTOG9CLHFDQUFULENBQStDQyxVQUEvQyxFQUEyREMsUUFBM0QsRUFBcUUvTyxNQUFyRSxFQUE2RWdQLGtCQUE3RSxFQUFpRztBQUMvRixNQUFJQyxjQUFjdnNCLE9BQU82VCxJQUFQLENBQVl3WSxRQUFaLENBQWxCO0FBQ0EsTUFBSUcsZUFBZWxQLFVBQVVBLE9BQU96Z0IsSUFBUCxLQUFnQix5QkFBWXVyQixJQUF0QyxHQUE2QywrQ0FBN0MsR0FBK0Ysd0NBQWxIOztBQUVBLE1BQUltRSxZQUFZeHZCLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7QUFDNUIsV0FBTyx3RUFBd0UsNERBQS9FO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDLDZCQUFjcXZCLFVBQWQsQ0FBTCxFQUFnQztBQUM5QixXQUFPLFNBQVNJLFlBQVQsR0FBd0IsMkJBQXhCLEdBQXNELEdBQUdqdUIsUUFBSCxDQUFZMEYsSUFBWixDQUFpQm1vQixVQUFqQixFQUE2QkssS0FBN0IsQ0FBbUMsZ0JBQW5DLEVBQXFELENBQXJELENBQXRELEdBQWdILDBEQUFoSCxJQUE4SyxZQUFZRixZQUFZbFQsSUFBWixDQUFpQixNQUFqQixDQUFaLEdBQXVDLEdBQXJOLENBQVA7QUFDRDs7QUFFRCxNQUFJcVQsaUJBQWlCMXNCLE9BQU82VCxJQUFQLENBQVl1WSxVQUFaLEVBQXdCblUsTUFBeEIsQ0FBK0IsVUFBVTVVLEdBQVYsRUFBZTtBQUNqRSxXQUFPLENBQUNncEIsU0FBU25GLGNBQVQsQ0FBd0I3akIsR0FBeEIsQ0FBRCxJQUFpQyxDQUFDaXBCLG1CQUFtQmpwQixHQUFuQixDQUF6QztBQUNELEdBRm9CLENBQXJCOztBQUlBcXBCLGlCQUFlcEwsT0FBZixDQUF1QixVQUFVamUsR0FBVixFQUFlO0FBQ3BDaXBCLHVCQUFtQmpwQixHQUFuQixJQUEwQixJQUExQjtBQUNELEdBRkQ7O0FBSUEsTUFBSXFwQixlQUFlM3ZCLE1BQWYsR0FBd0IsQ0FBNUIsRUFBK0I7QUFDN0IsV0FBTyxpQkFBaUIydkIsZUFBZTN2QixNQUFmLEdBQXdCLENBQXhCLEdBQTRCLE1BQTVCLEdBQXFDLEtBQXRELElBQStELEdBQS9ELElBQXNFLE1BQU0ydkIsZUFBZXJULElBQWYsQ0FBb0IsTUFBcEIsQ0FBTixHQUFvQyxhQUFwQyxHQUFvRG1ULFlBQXBELEdBQW1FLElBQXpJLElBQWlKLDBEQUFqSixJQUErTSxNQUFNRCxZQUFZbFQsSUFBWixDQUFpQixNQUFqQixDQUFOLEdBQWlDLHFDQUFoUCxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTc1QsbUJBQVQsQ0FBNkJOLFFBQTdCLEVBQXVDO0FBQ3JDcnNCLFNBQU82VCxJQUFQLENBQVl3WSxRQUFaLEVBQXNCL0ssT0FBdEIsQ0FBOEIsVUFBVWplLEdBQVYsRUFBZTtBQUMzQyxRQUFJZ2xCLFVBQVVnRSxTQUFTaHBCLEdBQVQsQ0FBZDtBQUNBLFFBQUlvakIsZUFBZTRCLFFBQVFyckIsU0FBUixFQUFtQixFQUFFSCxNQUFNLHlCQUFZdXJCLElBQXBCLEVBQW5CLENBQW5COztBQUVBLFFBQUksT0FBTzNCLFlBQVAsS0FBd0IsV0FBNUIsRUFBeUM7QUFDdkMsWUFBTSxJQUFJdnBCLEtBQUosQ0FBVSxjQUFjbUcsR0FBZCxHQUFvQiw4Q0FBcEIsR0FBcUUsNERBQXJFLEdBQW9JLDZEQUFwSSxHQUFvTSxtQkFBOU0sQ0FBTjtBQUNEOztBQUVELFFBQUl4RyxPQUFPLGtDQUFrQyt2QixLQUFLQyxNQUFMLEdBQWN0dUIsUUFBZCxDQUF1QixFQUF2QixFQUEyQnV1QixTQUEzQixDQUFxQyxDQUFyQyxFQUF3Q3hiLEtBQXhDLENBQThDLEVBQTlDLEVBQWtEK0gsSUFBbEQsQ0FBdUQsR0FBdkQsQ0FBN0M7QUFDQSxRQUFJLE9BQU9nUCxRQUFRcnJCLFNBQVIsRUFBbUIsRUFBRUgsTUFBTUEsSUFBUixFQUFuQixDQUFQLEtBQThDLFdBQWxELEVBQStEO0FBQzdELFlBQU0sSUFBSUssS0FBSixDQUFVLGNBQWNtRyxHQUFkLEdBQW9CLHVEQUFwQixJQUErRSwwQkFBMEIseUJBQVkra0IsSUFBdEMsR0FBNkMsaUNBQTVILElBQWlLLHVFQUFqSyxHQUEyTyxpRUFBM08sR0FBK1MscUVBQS9TLEdBQXVYLHNEQUFqWSxDQUFOO0FBQ0Q7QUFDRixHQVpEO0FBYUQ7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmUsU0FBUzBCLGVBQVQsQ0FBeUJ1QyxRQUF6QixFQUFtQztBQUNoRCxNQUFJRSxjQUFjdnNCLE9BQU82VCxJQUFQLENBQVl3WSxRQUFaLENBQWxCO0FBQ0EsTUFBSVUsZ0JBQWdCLEVBQXBCO0FBQ0EsT0FBSyxJQUFJcnZCLElBQUksQ0FBYixFQUFnQkEsSUFBSTZ1QixZQUFZeHZCLE1BQWhDLEVBQXdDVyxHQUF4QyxFQUE2QztBQUMzQyxRQUFJMkYsTUFBTWtwQixZQUFZN3VCLENBQVosQ0FBVjs7QUFFQSxRQUFJTyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsWUFBN0IsRUFBMkM7QUFDekMsVUFBSSxPQUFPa3VCLFNBQVNocEIsR0FBVCxDQUFQLEtBQXlCLFdBQTdCLEVBQTBDO0FBQ3hDLCtCQUFRLGtDQUFrQ0EsR0FBbEMsR0FBd0MsR0FBaEQ7QUFDRDtBQUNGOztBQUVELFFBQUksT0FBT2dwQixTQUFTaHBCLEdBQVQsQ0FBUCxLQUF5QixVQUE3QixFQUF5QztBQUN2QzBwQixvQkFBYzFwQixHQUFkLElBQXFCZ3BCLFNBQVNocEIsR0FBVCxDQUFyQjtBQUNEO0FBQ0Y7QUFDRCxNQUFJMnBCLG1CQUFtQmh0QixPQUFPNlQsSUFBUCxDQUFZa1osYUFBWixDQUF2Qjs7QUFFQSxNQUFJOXVCLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztBQUN6QyxRQUFJbXVCLHFCQUFxQixFQUF6QjtBQUNEOztBQUVELE1BQUlXLFdBQUo7QUFDQSxNQUFJO0FBQ0ZOLHdCQUFvQkksYUFBcEI7QUFDRCxHQUZELENBRUUsT0FBT2xwQixDQUFQLEVBQVU7QUFDVm9wQixrQkFBY3BwQixDQUFkO0FBQ0Q7O0FBRUQsU0FBTyxTQUFTcXBCLFdBQVQsR0FBdUI7QUFDNUIsUUFBSTdyQixRQUFRMEQsVUFBVWhJLE1BQVYsSUFBb0IsQ0FBcEIsSUFBeUJnSSxVQUFVLENBQVYsTUFBaUIvSCxTQUExQyxHQUFzRCxFQUF0RCxHQUEyRCtILFVBQVUsQ0FBVixDQUF2RTtBQUNBLFFBQUl1WSxTQUFTdlksVUFBVSxDQUFWLENBQWI7O0FBRUEsUUFBSWtvQixXQUFKLEVBQWlCO0FBQ2YsWUFBTUEsV0FBTjtBQUNEOztBQUVELFFBQUlodkIsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3pDLFVBQUlndkIsaUJBQWlCaEIsc0NBQXNDOXFCLEtBQXRDLEVBQTZDMHJCLGFBQTdDLEVBQTREelAsTUFBNUQsRUFBb0VnUCxrQkFBcEUsQ0FBckI7QUFDQSxVQUFJYSxjQUFKLEVBQW9CO0FBQ2xCLCtCQUFRQSxjQUFSO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJQyxhQUFhLEtBQWpCO0FBQ0EsUUFBSXJsQixZQUFZLEVBQWhCO0FBQ0EsU0FBSyxJQUFJckssSUFBSSxDQUFiLEVBQWdCQSxJQUFJc3ZCLGlCQUFpQmp3QixNQUFyQyxFQUE2Q1csR0FBN0MsRUFBa0Q7QUFDaEQsVUFBSTJGLE1BQU0ycEIsaUJBQWlCdHZCLENBQWpCLENBQVY7QUFDQSxVQUFJMnFCLFVBQVUwRSxjQUFjMXBCLEdBQWQsQ0FBZDtBQUNBLFVBQUlncUIsc0JBQXNCaHNCLE1BQU1nQyxHQUFOLENBQTFCO0FBQ0EsVUFBSWlxQixrQkFBa0JqRixRQUFRZ0YsbUJBQVIsRUFBNkIvUCxNQUE3QixDQUF0QjtBQUNBLFVBQUksT0FBT2dRLGVBQVAsS0FBMkIsV0FBL0IsRUFBNEM7QUFDMUMsWUFBSUMsZUFBZXZCLDhCQUE4QjNvQixHQUE5QixFQUFtQ2lhLE1BQW5DLENBQW5CO0FBQ0EsY0FBTSxJQUFJcGdCLEtBQUosQ0FBVXF3QixZQUFWLENBQU47QUFDRDtBQUNEeGxCLGdCQUFVMUUsR0FBVixJQUFpQmlxQixlQUFqQjtBQUNBRixtQkFBYUEsY0FBY0Usb0JBQW9CRCxtQkFBL0M7QUFDRDtBQUNELFdBQU9ELGFBQWFybEIsU0FBYixHQUF5QjFHLEtBQWhDO0FBQ0QsR0E5QkQ7QUErQkQsQzs7Ozs7Ozs7OztBQ2hJRGlDLE9BQU9DLE9BQVAsR0FBaUIsbUJBQUFpcUIsQ0FBUSxFQUFSLENBQWpCLEM7Ozs7Ozs7c0RDQUE7O0FBRUF4dEIsT0FBT21mLGNBQVAsQ0FBc0I1YixPQUF0QixFQUErQixZQUEvQixFQUE2QztBQUMzQ3lMLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUEsSUFBSXllLFlBQVksbUJBQUFELENBQVEsRUFBUixDQUFoQjs7QUFFQSxJQUFJRSxhQUFhQyx1QkFBdUJGLFNBQXZCLENBQWpCOztBQUVBLFNBQVNFLHNCQUFULENBQWdDL3dCLEdBQWhDLEVBQXFDO0FBQUUsU0FBT0EsT0FBT0EsSUFBSWd4QixVQUFYLEdBQXdCaHhCLEdBQXhCLEdBQThCLEVBQUUsV0FBV0EsR0FBYixFQUFyQztBQUEwRDs7QUFFakcsSUFBSTRULElBQUosQyxDQUFVOztBQUdWLElBQUksT0FBTzJhLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0IzYSxTQUFPMmEsSUFBUDtBQUNELENBRkQsTUFFTyxJQUFJLE9BQU8vdUIsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUN4Q29VLFNBQU9wVSxNQUFQO0FBQ0QsQ0FGTSxNQUVBLElBQUksT0FBT211QixNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ3hDL1osU0FBTytaLE1BQVA7QUFDRCxDQUZNLE1BRUEsSUFBSSxJQUFKLEVBQW1DO0FBQ3hDL1osU0FBT2xOLE1BQVA7QUFDRCxDQUZNLE1BRUE7QUFDTGtOLFNBQU91VyxTQUFTLGFBQVQsR0FBUDtBQUNEOztBQUVELElBQUlwWSxTQUFTLENBQUMsR0FBRytlLFdBQVcsU0FBWCxDQUFKLEVBQTJCbGQsSUFBM0IsQ0FBYjtBQUNBak4sUUFBUSxTQUFSLElBQXFCb0wsTUFBckIsQzs7Ozs7Ozs7QUM1QkE7O0FBRUEzTyxPQUFPbWYsY0FBUCxDQUFzQjViLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDO0FBQzVDeUwsUUFBTztBQURxQyxDQUE3QztBQUdBekwsUUFBUSxTQUFSLElBQXFCc3FCLHdCQUFyQjtBQUNBLFNBQVNBLHdCQUFULENBQWtDcmQsSUFBbEMsRUFBd0M7QUFDdkMsS0FBSTdCLE1BQUo7QUFDQSxLQUFJbWYsVUFBVXRkLEtBQUtvVyxNQUFuQjs7QUFFQSxLQUFJLE9BQU9rSCxPQUFQLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ2xDLE1BQUlBLFFBQVEzRSxVQUFaLEVBQXdCO0FBQ3ZCeGEsWUFBU21mLFFBQVEzRSxVQUFqQjtBQUNBLEdBRkQsTUFFTztBQUNOeGEsWUFBU21mLFFBQVEsWUFBUixDQUFUO0FBQ0FBLFdBQVEzRSxVQUFSLEdBQXFCeGEsTUFBckI7QUFDQTtBQUNELEVBUEQsTUFPTztBQUNOQSxXQUFTLGNBQVQ7QUFDQTs7QUFFRCxRQUFPQSxNQUFQO0FBQ0EsRTs7Ozs7Ozs7O0FDdEJEckwsT0FBT0MsT0FBUCxHQUFpQixVQUFTRCxNQUFULEVBQWlCO0FBQ2pDLEtBQUcsQ0FBQ0EsT0FBT3lxQixlQUFYLEVBQTRCO0FBQzNCenFCLFNBQU8wcUIsU0FBUCxHQUFtQixZQUFXLENBQUUsQ0FBaEM7QUFDQTFxQixTQUFPMnFCLEtBQVAsR0FBZSxFQUFmO0FBQ0E7QUFDQSxNQUFHLENBQUMzcUIsT0FBT2hILFFBQVgsRUFBcUJnSCxPQUFPaEgsUUFBUCxHQUFrQixFQUFsQjtBQUNyQjBELFNBQU9tZixjQUFQLENBQXNCN2IsTUFBdEIsRUFBOEIsUUFBOUIsRUFBd0M7QUFDdkM0cUIsZUFBWSxJQUQyQjtBQUV2Q25uQixRQUFLLGVBQVc7QUFDZixXQUFPekQsT0FBTzZxQixDQUFkO0FBQ0E7QUFKc0MsR0FBeEM7QUFNQW51QixTQUFPbWYsY0FBUCxDQUFzQjdiLE1BQXRCLEVBQThCLElBQTlCLEVBQW9DO0FBQ25DNHFCLGVBQVksSUFEdUI7QUFFbkNubkIsUUFBSyxlQUFXO0FBQ2YsV0FBT3pELE9BQU81RixDQUFkO0FBQ0E7QUFKa0MsR0FBcEM7QUFNQTRGLFNBQU95cUIsZUFBUCxHQUF5QixDQUF6QjtBQUNBO0FBQ0QsUUFBT3pxQixNQUFQO0FBQ0EsQ0FyQkQsQyIsImZpbGUiOiJBZXRoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGNmMzk1MWZlZjhhOTk5OWJiZDIiLCJleHBvcnQgY29uc3QgTk9fT1AgPSAnJE5PX09QJztcbmV4cG9ydCBjb25zdCBFUlJPUl9NU0cgPSAnYSBydW50aW1lIGVycm9yIG9jY3VyZWQhIFVzZSBJbmZlcm5vIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50IHRvIGZpbmQgdGhlIGVycm9yLic7XG5leHBvcnQgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50O1xuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IChjaGlsZHJlbiA/IFtjaGlsZHJlbl0gOiBjaGlsZHJlbik7XG59XG4vLyB0aGlzIGlzIE1VQ0ggZmFzdGVyIHRoYW4gLmNvbnN0cnVjdG9yID09PSBBcnJheSBhbmQgaW5zdGFuY2VvZiBBcnJheVxuLy8gaW4gTm9kZSA3IGFuZCB0aGUgbGF0ZXIgdmVyc2lvbnMgb2YgVjgsIHNsb3dlciBpbiBvbGRlciB2ZXJzaW9ucyB0aG91Z2hcbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmV4cG9ydCBmdW5jdGlvbiBpc1N0YXRlZnVsQ29tcG9uZW50KG8pIHtcbiAgICByZXR1cm4gIWlzVW5kZWZpbmVkKG8ucHJvdG90eXBlKSAmJiAhaXNVbmRlZmluZWQoby5wcm90b3R5cGUucmVuZGVyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZ09yTnVtYmVyKG9iaikge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2Ygb2JqO1xuICAgIHJldHVybiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bGxPclVuZGVmKG9iaikge1xuICAgIHJldHVybiBpc1VuZGVmaW5lZChvYmopIHx8IGlzTnVsbChvYmopO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzSW52YWxpZChvYmopIHtcbiAgICByZXR1cm4gaXNOdWxsKG9iaikgfHwgb2JqID09PSBmYWxzZSB8fCBpc1RydWUob2JqKSB8fCBpc1VuZGVmaW5lZChvYmopO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBdHRyQW5FdmVudChhdHRyKSB7XG4gICAgcmV0dXJuIGF0dHJbMF0gPT09ICdvJyAmJiBhdHRyWzFdID09PSAnbicgJiYgYXR0ci5sZW5ndGggPiAzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ251bWJlcic7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNUcnVlKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNVbmRlZmluZWQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93RXJyb3IobWVzc2FnZSkge1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICBtZXNzYWdlID0gRVJST1JfTVNHO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYEluZmVybm8gRXJyb3I6ICR7bWVzc2FnZX1gKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gTGlmZWN5Y2xlKCkge1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG59XG5MaWZlY3ljbGUucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIoY2FsbGJhY2spIHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbn07XG5MaWZlY3ljbGUucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiB0cmlnZ2VyKCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tpXSgpO1xuICAgIH1cbn07XG5leHBvcnQgZnVuY3Rpb24gY29weVByb3BzVG8oY29weUZyb20sIGNvcHlUbykge1xuICAgIGZvciAobGV0IHByb3AgaW4gY29weUZyb20pIHtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGNvcHlUb1twcm9wXSkpIHtcbiAgICAgICAgICAgIGNvcHlUb1twcm9wXSA9IGNvcHlGcm9tW3Byb3BdO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL34vaW5mZXJuby1zaGFyZWQvZGlzdC1lcy9pbmRleC5qcyIsImltcG9ydCB7IHdhcm5pbmcsIE5PX09QIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUsIGNsb25lVk5vZGUgfSBmcm9tICcuL2NvcmUvVk5vZGVzJztcbmltcG9ydCBsaW5rRXZlbnQgZnJvbSAnLi9ET00vZXZlbnRzL2xpbmtFdmVudCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL2NvcmUvb3B0aW9ucyc7XG5pbXBvcnQgeyByZW5kZXIsIGZpbmRET01Ob2RlLCBjcmVhdGVSZW5kZXJlciB9IGZyb20gJy4vRE9NL3JlbmRlcmluZyc7XG5pbXBvcnQgeyBFTVBUWV9PQkogfSBmcm9tICcuL0RPTS91dGlscyc7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IHRlc3RGdW5jID0gZnVuY3Rpb24gdGVzdEZuKCkgeyB9O1xuICAgIGlmICgodGVzdEZ1bmMubmFtZSB8fCB0ZXN0RnVuYy50b1N0cmluZygpKS5pbmRleE9mKCd0ZXN0Rm4nKSA9PT0gLTEpIHtcbiAgICAgICAgd2FybmluZygoJ0l0IGxvb2tzIGxpa2UgeW91XFwncmUgdXNpbmcgYSBtaW5pZmllZCBjb3B5IG9mIHRoZSBkZXZlbG9wbWVudCBidWlsZCAnICtcbiAgICAgICAgICAgICdvZiBJbmZlcm5vLiBXaGVuIGRlcGxveWluZyBJbmZlcm5vIGFwcHMgdG8gcHJvZHVjdGlvbiwgbWFrZSBzdXJlIHRvIHVzZSAnICtcbiAgICAgICAgICAgICd0aGUgcHJvZHVjdGlvbiBidWlsZCB3aGljaCBza2lwcyBkZXZlbG9wbWVudCB3YXJuaW5ncyBhbmQgaXMgZmFzdGVyLiAnICtcbiAgICAgICAgICAgICdTZWUgaHR0cDovL2luZmVybm9qcy5vcmcgZm9yIG1vcmUgZGV0YWlscy4nKSk7XG4gICAgfVxufVxuLy8gVGhpcyB3aWxsIGJlIHJlcGxhY2VkIGJ5IHJvbGx1cFxuZXhwb3J0IGNvbnN0IHZlcnNpb24gPSAnVkVSU0lPTic7XG4vLyB3ZSBkdXBsaWNhdGUgaXQgc28gaXQgcGxheXMgbmljZWx5IHdpdGggZGlmZmVyZW50IG1vZHVsZSBsb2FkaW5nIHN5c3RlbXNcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBsaW5rRXZlbnQsXG4gICAgLy8gY29yZSBzaGFwZXNcbiAgICBjcmVhdGVWTm9kZSxcbiAgICAvLyBjbG9uaW5nXG4gICAgY2xvbmVWTm9kZSxcbiAgICAvLyB1c2VkIHRvIHNoYXJlZCBjb21tb24gaXRlbXMgYmV0d2VlbiBJbmZlcm5vIGxpYnNcbiAgICBOT19PUCxcbiAgICBFTVBUWV9PQkosXG4gICAgLy8gRE9NXG4gICAgcmVuZGVyLFxuICAgIGZpbmRET01Ob2RlLFxuICAgIGNyZWF0ZVJlbmRlcmVyLFxuICAgIG9wdGlvbnMsXG4gICAgdmVyc2lvblxufTtcbmV4cG9ydCB7IFxuLy8gUHVibGljIG1ldGhvZHNcbmxpbmtFdmVudCwgXG4vLyBjb3JlIHNoYXBlc1xuY3JlYXRlVk5vZGUsIFxuLy8gY2xvbmluZ1xuY2xvbmVWTm9kZSwgXG4vLyB1c2VkIHRvIHNoYXJlZCBjb21tb24gaXRlbXMgYmV0d2VlbiBJbmZlcm5vIGxpYnNcbk5PX09QLCBFTVBUWV9PQkosIFxuLy8gRE9NXG5yZW5kZXIsIGZpbmRET01Ob2RlLCBjcmVhdGVSZW5kZXJlciwgb3B0aW9ucyB9O1xuLy8gSW50ZXJuYWwgc3R1ZmYgdGhhdCBvbmx5IGNvcmUgaW5mZXJuby0qIHBhY2thZ2VzIHVzZVxuZXhwb3J0IHsgaXNVbml0bGVzc051bWJlciBhcyBpbnRlcm5hbF9pc1VuaXRsZXNzTnVtYmVyIH0gZnJvbSAnLi9ET00vY29uc3RhbnRzJztcbi8vIE1haW5seSBmb3IgdGVzdGluZ1xuZXhwb3J0IHsgbm9ybWFsaXplIGFzIGludGVybmFsX25vcm1hbGl6ZSB9IGZyb20gJy4vY29yZS9ub3JtYWxpemF0aW9uJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL2luZGV4LmpzIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNGdW5jdGlvbiwgaXNJbnZhbGlkLCBpc051bGxPclVuZGVmLCBpc1N0cmluZ09yTnVtYmVyLCBpc1VuZGVmaW5lZCwgdGhyb3dFcnJvciB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL2NvcmUvb3B0aW9ucyc7XG5pbXBvcnQgeyBjbG9uZVZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUsIGNyZWF0ZVZvaWRWTm9kZSB9IGZyb20gJy4uL2NvcmUvVk5vZGVzJztcbmltcG9ydCB7IHN2Z05TIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICcuL21vdW50aW5nJztcbmltcG9ydCB7IHBhdGNoIH0gZnJvbSAnLi9wYXRjaGluZyc7XG5pbXBvcnQgeyBjb21wb25lbnRUb0RPTU5vZGVNYXAgfSBmcm9tICcuL3JlbmRlcmluZyc7XG5pbXBvcnQgeyB1bm1vdW50IH0gZnJvbSAnLi91bm1vdW50aW5nJztcbi8vIFdlIG5lZWQgRU1QVFlfT0JKIGRlZmluZWQgaW4gb25lIHBsYWNlLlxuLy8gSXRzIHVzZWQgZm9yIGNvbXBhcmlzb24gc28gd2UgY2FudCBpbmxpbmUgaXQgaW50byBzaGFyZWRcbmV4cG9ydCBjb25zdCBFTVBUWV9PQkogPSB7fTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgT2JqZWN0LmZyZWV6ZShFTVBUWV9PQkopO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNsYXNzQ29tcG9uZW50SW5zdGFuY2Uodk5vZGUsIENvbXBvbmVudCwgcHJvcHMsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKGNvbnRleHQpKSB7XG4gICAgICAgIGNvbnRleHQgPSBFTVBUWV9PQko7IC8vIENvbnRleHQgc2hvdWxkIG5vdCBiZSBtdXRhYmxlXG4gICAgfVxuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENvbXBvbmVudChwcm9wcywgY29udGV4dCk7XG4gICAgaW5zdGFuY2UuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgaWYgKGluc3RhbmNlLnByb3BzID09PSBFTVBUWV9PQkopIHtcbiAgICAgICAgaW5zdGFuY2UucHJvcHMgPSBwcm9wcztcbiAgICB9XG4gICAgaW5zdGFuY2UuX3BhdGNoID0gcGF0Y2g7XG4gICAgaWYgKG9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkKSB7XG4gICAgICAgIGluc3RhbmNlLl9jb21wb25lbnRUb0RPTU5vZGVNYXAgPSBjb21wb25lbnRUb0RPTU5vZGVNYXA7XG4gICAgfVxuICAgIGluc3RhbmNlLl91bm1vdW50ZWQgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5fcGVuZGluZ1NldFN0YXRlID0gdHJ1ZTtcbiAgICBpbnN0YW5jZS5faXNTVkcgPSBpc1NWRztcbiAgICBpZiAoaXNGdW5jdGlvbihpbnN0YW5jZS5jb21wb25lbnRXaWxsTW91bnQpKSB7XG4gICAgICAgIGluc3RhbmNlLmNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBpbnN0YW5jZS5nZXRDaGlsZENvbnRleHQoKTtcbiAgICBpZiAoaXNOdWxsT3JVbmRlZihjaGlsZENvbnRleHQpKSB7XG4gICAgICAgIGluc3RhbmNlLl9jaGlsZENvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UuX2NoaWxkQ29udGV4dCA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnRleHQsIGNoaWxkQ29udGV4dCk7XG4gICAgfVxuICAgIG9wdGlvbnMuYmVmb3JlUmVuZGVyICYmIG9wdGlvbnMuYmVmb3JlUmVuZGVyKGluc3RhbmNlKTtcbiAgICBsZXQgaW5wdXQgPSBpbnN0YW5jZS5yZW5kZXIocHJvcHMsIGluc3RhbmNlLnN0YXRlLCBjb250ZXh0KTtcbiAgICBvcHRpb25zLmFmdGVyUmVuZGVyICYmIG9wdGlvbnMuYWZ0ZXJSZW5kZXIoaW5zdGFuY2UpO1xuICAgIGlmIChpc0FycmF5KGlucHV0KSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVGV4dFZOb2RlKGlucHV0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpbnB1dC5kb20pIHtcbiAgICAgICAgICAgIGlucHV0ID0gY2xvbmVWTm9kZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGFuIGlucHV0IHRoYXQgaXMgYWxzbyBhIGNvbXBvbmVudCwgd2UgcnVuIGludG8gYSB0cmlja3kgc2l0dWF0aW9uXG4gICAgICAgICAgICAvLyB3aGVyZSB0aGUgcm9vdCB2Tm9kZSBuZWVkcyB0byBhbHdheXMgaGF2ZSB0aGUgY29ycmVjdCBET00gZW50cnlcbiAgICAgICAgICAgIC8vIHNvIHdlIGJyZWFrIG1vbm9tb3JwaGlzbSBvbiBvdXIgaW5wdXQgYW5kIHN1cHBseSBpdCBvdXIgdk5vZGUgYXMgcGFyZW50Vk5vZGVcbiAgICAgICAgICAgIC8vIHdlIGNhbiBvcHRpbWlzZSB0aGlzIGluIHRoZSBmdXR1cmUsIGJ1dCB0aGlzIGdldHMgdXMgb3V0IG9mIGEgbG90IG9mIGlzc3Vlc1xuICAgICAgICAgICAgaW5wdXQucGFyZW50Vk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnN0YW5jZS5fcGVuZGluZ1NldFN0YXRlID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuX2xhc3RJbnB1dCA9IGlucHV0O1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlTGFzdENoaWxkQW5kVW5tb3VudChsYXN0SW5wdXQsIG5leHRJbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50KG5leHRJbnB1dCwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyksIGxhc3RJbnB1dCwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgZG9tLCB2Tm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIGxldCBzaGFsbG93VW5tb3VudCA9IGZhbHNlO1xuICAgIC8vIHdlIGNhbm5vdCBjYWNoZSBub2RlVHlwZSBoZXJlIGFzIHZOb2RlIG1pZ2h0IGJlIHJlLWFzc2lnbmVkIGJlbG93XG4gICAgaWYgKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIC8vIGlmIHdlIGFyZSBhY2Nlc3NpbmcgYSBzdGF0ZWZ1bCBvciBzdGF0ZWxlc3MgY29tcG9uZW50LCB3ZSB3YW50IHRvIGFjY2VzcyB0aGVpciBsYXN0IHJlbmRlcmVkIGlucHV0XG4gICAgICAgIC8vIGFjY2Vzc2luZyB0aGVpciBET00gbm9kZSBpcyBub3QgdXNlZnVsIHRvIHVzIGhlcmVcbiAgICAgICAgdW5tb3VudCh2Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB2Tm9kZSA9IHZOb2RlLmNoaWxkcmVuLl9sYXN0SW5wdXQgfHwgdk5vZGUuY2hpbGRyZW47XG4gICAgICAgIHNoYWxsb3dVbm1vdW50ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVwbGFjZUNoaWxkKHBhcmVudERvbSwgZG9tLCB2Tm9kZS5kb20pO1xuICAgIHVubW91bnQodk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQodk5vZGUsIGNvbXBvbmVudCwgcHJvcHMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5wdXQgPSBjb21wb25lbnQocHJvcHMsIGNvbnRleHQpO1xuICAgIGlmIChpc0FycmF5KGlucHV0KSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVGV4dFZOb2RlKGlucHV0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpbnB1dC5kb20pIHtcbiAgICAgICAgICAgIGlucHV0ID0gY2xvbmVWTm9kZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGFuIGlucHV0IHRoYXQgaXMgYWxzbyBhIGNvbXBvbmVudCwgd2UgcnVuIGludG8gYSB0cmlja3kgc2l0dWF0aW9uXG4gICAgICAgICAgICAvLyB3aGVyZSB0aGUgcm9vdCB2Tm9kZSBuZWVkcyB0byBhbHdheXMgaGF2ZSB0aGUgY29ycmVjdCBET00gZW50cnlcbiAgICAgICAgICAgIC8vIHNvIHdlIGJyZWFrIG1vbm9tb3JwaGlzbSBvbiBvdXIgaW5wdXQgYW5kIHN1cHBseSBpdCBvdXIgdk5vZGUgYXMgcGFyZW50Vk5vZGVcbiAgICAgICAgICAgIC8vIHdlIGNhbiBvcHRpbWlzZSB0aGlzIGluIHRoZSBmdXR1cmUsIGJ1dCB0aGlzIGdldHMgdXMgb3V0IG9mIGEgbG90IG9mIGlzc3Vlc1xuICAgICAgICAgICAgaW5wdXQucGFyZW50Vk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5wdXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0VGV4dENvbnRlbnQoZG9tLCB0ZXh0KSB7XG4gICAgaWYgKHRleHQgIT09ICcnKSB7XG4gICAgICAgIGRvbS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb20uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGV4dENvbnRlbnQoZG9tLCB0ZXh0KSB7XG4gICAgZG9tLmZpcnN0Q2hpbGQubm9kZVZhbHVlID0gdGV4dDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSkge1xuICAgIHBhcmVudERvbS5hcHBlbmRDaGlsZChkb20pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydE9yQXBwZW5kKHBhcmVudERvbSwgbmV3Tm9kZSwgbmV4dE5vZGUpIHtcbiAgICBpZiAoaXNOdWxsT3JVbmRlZihuZXh0Tm9kZSkpIHtcbiAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBuZXdOb2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBhcmVudERvbS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgbmV4dE5vZGUpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBkb2N1bWVudENyZWF0ZUVsZW1lbnQodGFnLCBpc1NWRykge1xuICAgIGlmIChpc1NWRyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCB0YWcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZVdpdGhOZXdOb2RlKGxhc3ROb2RlLCBuZXh0Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIHVubW91bnQobGFzdE5vZGUsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICBjb25zdCBkb20gPSBtb3VudChuZXh0Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgbmV4dE5vZGUuZG9tID0gZG9tO1xuICAgIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIGRvbSwgbGFzdE5vZGUuZG9tKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ2hpbGQocGFyZW50RG9tLCBuZXh0RG9tLCBsYXN0RG9tKSB7XG4gICAgaWYgKCFwYXJlbnREb20pIHtcbiAgICAgICAgcGFyZW50RG9tID0gbGFzdERvbS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICBwYXJlbnREb20ucmVwbGFjZUNoaWxkKG5leHREb20sIGxhc3REb20pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNoaWxkKHBhcmVudERvbSwgZG9tKSB7XG4gICAgcGFyZW50RG9tLnJlbW92ZUNoaWxkKGRvbSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIGRvbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGlmICghb3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkIHx8IChvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQgJiYgIWlzUmVjeWNsaW5nKSkge1xuICAgICAgICByZW1vdmVDaGlsZHJlbihudWxsLCBjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNoaWxkcmVuKGRvbSwgY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKCFpc0ludmFsaWQoY2hpbGQpKSB7XG4gICAgICAgICAgICB1bm1vdW50KGNoaWxkLCBkb20sIGxpZmVjeWNsZSwgdHJ1ZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGlzS2V5ZWQobGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4pIHtcbiAgICByZXR1cm4gbmV4dENoaWxkcmVuLmxlbmd0aCAmJiAhaXNOdWxsT3JVbmRlZihuZXh0Q2hpbGRyZW5bMF0pICYmICFpc051bGxPclVuZGVmKG5leHRDaGlsZHJlblswXS5rZXkpXG4gICAgICAgICYmIGxhc3RDaGlsZHJlbi5sZW5ndGggJiYgIWlzTnVsbE9yVW5kZWYobGFzdENoaWxkcmVuWzBdKSAmJiAhaXNOdWxsT3JVbmRlZihsYXN0Q2hpbGRyZW5bMF0ua2V5KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS91dGlscy5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICByZWN5Y2xpbmdFbmFibGVkOiBmYWxzZSxcbiAgICBmaW5kRE9NTm9kZUVuYWJsZWQ6IGZhbHNlLFxuICAgIHJvb3RzOiBudWxsLFxuICAgIGNyZWF0ZVZOb2RlOiBudWxsLFxuICAgIGJlZm9yZVJlbmRlcjogbnVsbCxcbiAgICBhZnRlclJlbmRlcjogbnVsbCxcbiAgICBhZnRlck1vdW50OiBudWxsLFxuICAgIGFmdGVyVXBkYXRlOiBudWxsLFxuICAgIGJlZm9yZVVubW91bnQ6IG51bGxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9jb3JlL29wdGlvbnMuanMiLCIvLyBNYWtlIHN1cmUgdSB1c2UgRU1QVFlfT0JKIGZyb20gJ2luZmVybm8nLCBvdGhlcndpc2UgaXQnbGwgYmUgYSBkaWZmZXJlbnQgcmVmZXJlbmNlXG5pbXBvcnQgeyBFTVBUWV9PQkosIGNyZWF0ZVZOb2RlLCBvcHRpb25zIH0gZnJvbSAnaW5mZXJubyc7XG5pbXBvcnQgeyBFUlJPUl9NU0csIGlzQXJyYXksIGlzQnJvd3NlciwgaXNGdW5jdGlvbiwgaXNJbnZhbGlkLCBpc051bGxPclVuZGVmLCBpc1N0cmluZ09yTnVtYmVyLCBMaWZlY3ljbGUsIE5PX09QLCB0aHJvd0Vycm9yIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xubGV0IG5vT3AgPSBFUlJPUl9NU0c7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIG5vT3AgPSAnSW5mZXJubyBFcnJvcjogQ2FuIG9ubHkgdXBkYXRlIGEgbW91bnRlZCBvciBtb3VudGluZyBjb21wb25lbnQuIFRoaXMgdXN1YWxseSBtZWFucyB5b3UgY2FsbGVkIHNldFN0YXRlKCkgb3IgZm9yY2VVcGRhdGUoKSBvbiBhbiB1bm1vdW50ZWQgY29tcG9uZW50LiBUaGlzIGlzIGEgbm8tb3AuJztcbn1cbmNvbnN0IGNvbXBvbmVudENhbGxiYWNrUXVldWUgPSBuZXcgTWFwKCk7XG4vLyB3aGVuIGEgY29tcG9uZW50cyByb290IFZOb2RlIGlzIGFsc28gYSBjb21wb25lbnQsIHdlIGNhbiBydW4gaW50byBpc3N1ZXNcbi8vIHRoaXMgd2lsbCByZWN1cnNpdmVseSBsb29rIGZvciB2Tm9kZS5wYXJlbnROb2RlIGlmIHRoZSBWTm9kZSBpcyBhIGNvbXBvbmVudFxuZnVuY3Rpb24gdXBkYXRlUGFyZW50Q29tcG9uZW50Vk5vZGVzKHZOb2RlLCBkb20pIHtcbiAgICBpZiAodk5vZGUuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgY29uc3QgcGFyZW50Vk5vZGUgPSB2Tm9kZS5wYXJlbnRWTm9kZTtcbiAgICAgICAgaWYgKHBhcmVudFZOb2RlKSB7XG4gICAgICAgICAgICBwYXJlbnRWTm9kZS5kb20gPSBkb207XG4gICAgICAgICAgICB1cGRhdGVQYXJlbnRDb21wb25lbnRWTm9kZXMocGFyZW50Vk5vZGUsIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyB0aGlzIGlzIGluIHNoYXBlcyB0b28sIGJ1dCB3ZSBkb24ndCB3YW50IHRvIGltcG9ydCBmcm9tIHNoYXBlcyBhcyBpdCB3aWxsIHB1bGwgaW4gYSBkdXBsaWNhdGUgb2YgY3JlYXRlVk5vZGVcbmZ1bmN0aW9uIGNyZWF0ZVZvaWRWTm9kZSgpIHtcbiAgICByZXR1cm4gY3JlYXRlVk5vZGUoNDA5NiAvKiBWb2lkICovKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVRleHRWTm9kZSh0ZXh0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlKDEgLyogVGV4dCAqLywgbnVsbCwgbnVsbCwgdGV4dCk7XG59XG5mdW5jdGlvbiBhZGRUb1F1ZXVlKGNvbXBvbmVudCwgZm9yY2UsIGNhbGxiYWNrKSB7XG4gICAgLy8gVE9ETyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJldmlzZWQgYW5kIGltcHJvdmVkIG9uXG4gICAgbGV0IHF1ZXVlID0gY29tcG9uZW50Q2FsbGJhY2tRdWV1ZS5nZXQoY29tcG9uZW50KTtcbiAgICBpZiAoIXF1ZXVlKSB7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIGNvbXBvbmVudENhbGxiYWNrUXVldWUuc2V0KGNvbXBvbmVudCwgcXVldWUpO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudENhbGxiYWNrUXVldWUuZGVsZXRlKGNvbXBvbmVudCk7XG4gICAgICAgICAgICBhcHBseVN0YXRlKGNvbXBvbmVudCwgZm9yY2UsICgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcXVldWUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcXVldWVbaV0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBxdWV1ZS5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG59XG5mdW5jdGlvbiBxdWV1ZVN0YXRlQ2hhbmdlcyhjb21wb25lbnQsIG5ld1N0YXRlLCBjYWxsYmFjaywgc3luYykge1xuICAgIGlmIChpc0Z1bmN0aW9uKG5ld1N0YXRlKSkge1xuICAgICAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlKGNvbXBvbmVudC5zdGF0ZSwgY29tcG9uZW50LnByb3BzLCBjb21wb25lbnQuY29udGV4dCk7XG4gICAgfVxuICAgIGZvciAobGV0IHN0YXRlS2V5IGluIG5ld1N0YXRlKSB7XG4gICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlW3N0YXRlS2V5XSA9IG5ld1N0YXRlW3N0YXRlS2V5XTtcbiAgICB9XG4gICAgaWYgKCFjb21wb25lbnQuX3BlbmRpbmdTZXRTdGF0ZSAmJiBpc0Jyb3dzZXIpIHtcbiAgICAgICAgaWYgKHN5bmMgfHwgY29tcG9uZW50Ll9ibG9ja1JlbmRlcikge1xuICAgICAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU2V0U3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgYXBwbHlTdGF0ZShjb21wb25lbnQsIGZhbHNlLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhZGRUb1F1ZXVlKGNvbXBvbmVudCwgZmFsc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgY29tcG9uZW50LnN0YXRlLCBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZSk7XG4gICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlID0ge307XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlTdGF0ZShjb21wb25lbnQsIGZvcmNlLCBjYWxsYmFjaykge1xuICAgIGlmICgoIWNvbXBvbmVudC5fZGVmZXJTZXRTdGF0ZSB8fCBmb3JjZSkgJiYgIWNvbXBvbmVudC5fYmxvY2tSZW5kZXIgJiYgIWNvbXBvbmVudC5fdW5tb3VudGVkKSB7XG4gICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1NldFN0YXRlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHBlbmRpbmdTdGF0ZSA9IGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlO1xuICAgICAgICBjb25zdCBwcmV2U3RhdGUgPSBjb21wb25lbnQuc3RhdGU7XG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwgcGVuZGluZ1N0YXRlKTtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBjb21wb25lbnQucHJvcHM7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjb21wb25lbnQuY29udGV4dDtcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGUgPSB7fTtcbiAgICAgICAgbGV0IG5leHRJbnB1dCA9IGNvbXBvbmVudC5fdXBkYXRlQ29tcG9uZW50KHByZXZTdGF0ZSwgbmV4dFN0YXRlLCBwcm9wcywgcHJvcHMsIGNvbnRleHQsIGZvcmNlLCB0cnVlKTtcbiAgICAgICAgbGV0IGRpZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgIGlmIChpc0ludmFsaWQobmV4dElucHV0KSkge1xuICAgICAgICAgICAgbmV4dElucHV0ID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV4dElucHV0ID09PSBOT19PUCkge1xuICAgICAgICAgICAgbmV4dElucHV0ID0gY29tcG9uZW50Ll9sYXN0SW5wdXQ7XG4gICAgICAgICAgICBkaWRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgIG5leHRJbnB1dCA9IGNyZWF0ZVRleHRWTm9kZShuZXh0SW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQXJyYXkobmV4dElucHV0KSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXN0SW5wdXQgPSBjb21wb25lbnQuX2xhc3RJbnB1dDtcbiAgICAgICAgY29uc3Qgdk5vZGUgPSBjb21wb25lbnQuX3ZOb2RlO1xuICAgICAgICBjb25zdCBwYXJlbnREb20gPSAobGFzdElucHV0LmRvbSAmJiBsYXN0SW5wdXQuZG9tLnBhcmVudE5vZGUpIHx8IChsYXN0SW5wdXQuZG9tID0gdk5vZGUuZG9tKTtcbiAgICAgICAgY29tcG9uZW50Ll9sYXN0SW5wdXQgPSBuZXh0SW5wdXQ7XG4gICAgICAgIGlmIChkaWRVcGRhdGUpIHtcbiAgICAgICAgICAgIGxldCBzdWJMaWZlY3ljbGUgPSBjb21wb25lbnQuX2xpZmVjeWNsZTtcbiAgICAgICAgICAgIGlmICghc3ViTGlmZWN5Y2xlKSB7XG4gICAgICAgICAgICAgICAgc3ViTGlmZWN5Y2xlID0gbmV3IExpZmVjeWNsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3ViTGlmZWN5Y2xlLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50Ll9saWZlY3ljbGUgPSBzdWJMaWZlY3ljbGU7XG4gICAgICAgICAgICBsZXQgY2hpbGRDb250ZXh0ID0gY29tcG9uZW50LmdldENoaWxkQ29udGV4dCgpO1xuICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYoY2hpbGRDb250ZXh0KSkge1xuICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbXBvbmVudC5fY2hpbGRDb250ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hpbGRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbih7fSwgY29udGV4dCwgY29tcG9uZW50Ll9jaGlsZENvbnRleHQsIGNoaWxkQ29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuX3BhdGNoKGxhc3RJbnB1dCwgbmV4dElucHV0LCBwYXJlbnREb20sIHN1YkxpZmVjeWNsZSwgY2hpbGRDb250ZXh0LCBjb21wb25lbnQuX2lzU1ZHLCBmYWxzZSk7XG4gICAgICAgICAgICBzdWJMaWZlY3ljbGUudHJpZ2dlcigpO1xuICAgICAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZFVwZGF0ZShwcm9wcywgcHJldlN0YXRlKTtcbiAgICAgICAgICAgIG9wdGlvbnMuYWZ0ZXJVcGRhdGUgJiYgb3B0aW9ucy5hZnRlclVwZGF0ZSh2Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZG9tID0gdk5vZGUuZG9tID0gbmV4dElucHV0LmRvbTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50VG9ET01Ob2RlTWFwID0gY29tcG9uZW50Ll9jb21wb25lbnRUb0RPTU5vZGVNYXA7XG4gICAgICAgIGNvbXBvbmVudFRvRE9NTm9kZU1hcCAmJiBjb21wb25lbnRUb0RPTU5vZGVNYXAuc2V0KGNvbXBvbmVudCwgbmV4dElucHV0LmRvbSk7XG4gICAgICAgIHVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2Rlcyh2Tm9kZSwgZG9tKTtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICghaXNOdWxsT3JVbmRlZihjYWxsYmFjaykpIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgdGhpcy5yZWZzID0ge307XG4gICAgICAgIHRoaXMuX2Jsb2NrUmVuZGVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lnbm9yZVNldFN0YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2Jsb2NrU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZGVmZXJTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wZW5kaW5nU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3luY1NldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1N0YXRlID0ge307XG4gICAgICAgIHRoaXMuX2xhc3RJbnB1dCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3ZOb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdW5tb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbGlmZWN5Y2xlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY2hpbGRDb250ZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcGF0Y2ggPSBudWxsO1xuICAgICAgICB0aGlzLl9pc1NWRyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jb21wb25lbnRUb0RPTU5vZGVNYXAgPSBudWxsO1xuICAgICAgICAvKiogQHR5cGUge29iamVjdH0gKi9cbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IEVNUFRZX09CSjtcbiAgICAgICAgLyoqIEB0eXBlIHtvYmplY3R9ICovXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQgfHwgRU1QVFlfT0JKOyAvLyBjb250ZXh0IHNob3VsZCBub3QgYmUgbXV0YWJsZVxuICAgIH1cbiAgICByZW5kZXIobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgfVxuICAgIGZvcmNlVXBkYXRlKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLl91bm1vdW50ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpc0Jyb3dzZXIgJiYgYXBwbHlTdGF0ZSh0aGlzLCB0cnVlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHNldFN0YXRlKG5ld1N0YXRlLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5fdW5tb3VudGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9ibG9ja1NldFN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2lnbm9yZVNldFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcXVldWVTdGF0ZUNoYW5nZXModGhpcywgbmV3U3RhdGUsIGNhbGxiYWNrLCB0aGlzLl9zeW5jU2V0U3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdjYW5ub3QgdXBkYXRlIHN0YXRlIHZpYSBzZXRTdGF0ZSgpIGluIGNvbXBvbmVudFdpbGxVcGRhdGUoKS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRTdGF0ZVN5bmMobmV3U3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fYmxvY2tTZXRTdGF0ZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pZ25vcmVTZXRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlU3RhdGVDaGFuZ2VzKHRoaXMsIG5ld1N0YXRlLCBudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcignY2Fubm90IHVwZGF0ZSBzdGF0ZSB2aWEgc2V0U3RhdGUoKSBpbiBjb21wb25lbnRXaWxsVXBkYXRlKCkuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHByZXZDb250ZXh0KSB7XG4gICAgfVxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgY29udGV4dCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMsIGNvbnRleHQpIHtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHtcbiAgICB9XG4gICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIH1cbiAgICBfdXBkYXRlQ29tcG9uZW50KHByZXZTdGF0ZSwgbmV4dFN0YXRlLCBwcmV2UHJvcHMsIG5leHRQcm9wcywgY29udGV4dCwgZm9yY2UsIGZyb21TZXRTdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fdW5tb3VudGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3Iobm9PcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChwcmV2UHJvcHMgIT09IG5leHRQcm9wcyB8fCBuZXh0UHJvcHMgPT09IEVNUFRZX09CSikgfHwgcHJldlN0YXRlICE9PSBuZXh0U3RhdGUgfHwgZm9yY2UpIHtcbiAgICAgICAgICAgIGlmIChwcmV2UHJvcHMgIT09IG5leHRQcm9wcyB8fCBuZXh0UHJvcHMgPT09IEVNUFRZX09CSikge1xuICAgICAgICAgICAgICAgIGlmICghZnJvbVNldFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrUmVuZGVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wZW5kaW5nU2V0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgbmV4dFN0YXRlLCB0aGlzLl9wZW5kaW5nU3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wZW5kaW5nU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1N0YXRlID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2hvdWxkVXBkYXRlID0gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSAhPT0gZmFsc2UgfHwgZm9yY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja1NldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuYmVmb3JlUmVuZGVyICYmIG9wdGlvbnMuYmVmb3JlUmVuZGVyKHRoaXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbmRlciA9IHRoaXMucmVuZGVyKG5leHRQcm9wcywgc3RhdGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuYWZ0ZXJSZW5kZXIgJiYgb3B0aW9ucy5hZnRlclJlbmRlcih0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOT19PUDtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8tY29tcG9uZW50L2Rpc3QtZXMvaW5kZXguanMiLCJpbXBvcnQgeyBpc0FycmF5LCBpc0ludmFsaWQsIGlzTnVsbCwgaXNOdWxsT3JVbmRlZiwgaXNTdGF0ZWZ1bENvbXBvbmVudCwgaXNVbmRlZmluZWQgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tICcuL25vcm1hbGl6YXRpb24nO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWTm9kZShmbGFncywgdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBldmVudHMsIGtleSwgcmVmLCBub05vcm1hbGlzZSkge1xuICAgIGlmIChmbGFncyAmIDE2IC8qIENvbXBvbmVudFVua25vd24gKi8pIHtcbiAgICAgICAgZmxhZ3MgPSBpc1N0YXRlZnVsQ29tcG9uZW50KHR5cGUpID8gNCAvKiBDb21wb25lbnRDbGFzcyAqLyA6IDggLyogQ29tcG9uZW50RnVuY3Rpb24gKi87XG4gICAgfVxuICAgIGNvbnN0IHZOb2RlID0ge1xuICAgICAgICBjaGlsZHJlbjogaXNVbmRlZmluZWQoY2hpbGRyZW4pID8gbnVsbCA6IGNoaWxkcmVuLFxuICAgICAgICBkb206IG51bGwsXG4gICAgICAgIGV2ZW50czogZXZlbnRzIHx8IG51bGwsXG4gICAgICAgIGZsYWdzLFxuICAgICAgICBrZXk6IGlzVW5kZWZpbmVkKGtleSkgPyBudWxsIDoga2V5LFxuICAgICAgICBwcm9wczogcHJvcHMgfHwgbnVsbCxcbiAgICAgICAgcmVmOiByZWYgfHwgbnVsbCxcbiAgICAgICAgdHlwZVxuICAgIH07XG4gICAgaWYgKCFub05vcm1hbGlzZSkge1xuICAgICAgICBub3JtYWxpemUodk5vZGUpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5jcmVhdGVWTm9kZSkge1xuICAgICAgICBvcHRpb25zLmNyZWF0ZVZOb2RlKHZOb2RlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZOb2RlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lVk5vZGUodk5vZGVUb0Nsb25lLCBwcm9wcywgLi4uX2NoaWxkcmVuKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gX2NoaWxkcmVuO1xuICAgIGlmIChfY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiAhaXNOdWxsKF9jaGlsZHJlblswXSkpIHtcbiAgICAgICAgaWYgKCFwcm9wcykge1xuICAgICAgICAgICAgcHJvcHMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX2NoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSBfY2hpbGRyZW5bMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLmNvbmNhdChjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IFtwcm9wcy5jaGlsZHJlbl0uY29uY2F0KGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4ucHVzaChjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jaGlsZHJlbiA9IFtwcm9wcy5jaGlsZHJlbl07XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuLnB1c2goY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gICAgbGV0IG5ld1ZOb2RlO1xuICAgIGlmIChpc0FycmF5KHZOb2RlVG9DbG9uZSkpIHtcbiAgICAgICAgY29uc3QgdG1wQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHZOb2RlVG9DbG9uZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdG1wQXJyYXkucHVzaChjbG9uZVZOb2RlKHZOb2RlVG9DbG9uZVtpXSkpO1xuICAgICAgICB9XG4gICAgICAgIG5ld1ZOb2RlID0gdG1wQXJyYXk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBmbGFncyA9IHZOb2RlVG9DbG9uZS5mbGFncztcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdk5vZGVUb0Nsb25lLmV2ZW50cyB8fCAocHJvcHMgJiYgcHJvcHMuZXZlbnRzKSB8fCBudWxsO1xuICAgICAgICBjb25zdCBrZXkgPSAhaXNOdWxsT3JVbmRlZih2Tm9kZVRvQ2xvbmUua2V5KSA/IHZOb2RlVG9DbG9uZS5rZXkgOiAocHJvcHMgPyBwcm9wcy5rZXkgOiBudWxsKTtcbiAgICAgICAgY29uc3QgcmVmID0gdk5vZGVUb0Nsb25lLnJlZiB8fCAocHJvcHMgPyBwcm9wcy5yZWYgOiBudWxsKTtcbiAgICAgICAgaWYgKGZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVZOb2RlKGZsYWdzLCB2Tm9kZVRvQ2xvbmUudHlwZSwgT2JqZWN0LmFzc2lnbih7fSwgdk5vZGVUb0Nsb25lLnByb3BzLCBwcm9wcyksIG51bGwsIGV2ZW50cywga2V5LCByZWYsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcbiAgICAgICAgICAgIGlmIChuZXdQcm9wcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NoaWxkcmVuID0gbmV3UHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBhbHNvIGNsb25lIGNvbXBvbmVudCBjaGlsZHJlbiB0aGF0IGFyZSBpbiBwcm9wc1xuICAgICAgICAgICAgICAgIC8vIGFzIHRoZSBjaGlsZHJlbiBtYXkgYWxzbyBoYXZlIGJlZW4gaG9pc3RlZFxuICAgICAgICAgICAgICAgIGlmIChuZXdDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShuZXdDaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBuZXdDaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gbmV3Q2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0ludmFsaWQoY2hpbGQpICYmIGlzVk5vZGUoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzLmNoaWxkcmVuW2ldID0gY2xvbmVWTm9kZShjaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzVk5vZGUobmV3Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9wcy5jaGlsZHJlbiA9IGNsb25lVk5vZGUobmV3Q2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Vk5vZGUuY2hpbGRyZW4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IChwcm9wcyAmJiBwcm9wcy5jaGlsZHJlbikgfHwgdk5vZGVUb0Nsb25lLmNoaWxkcmVuO1xuICAgICAgICAgICAgbmV3Vk5vZGUgPSBjcmVhdGVWTm9kZShmbGFncywgdk5vZGVUb0Nsb25lLnR5cGUsIE9iamVjdC5hc3NpZ24oe30sIHZOb2RlVG9DbG9uZS5wcm9wcywgcHJvcHMpLCBjaGlsZHJlbiwgZXZlbnRzLCBrZXksIHJlZiwgIWNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmbGFncyAmIDEgLyogVGV4dCAqLykge1xuICAgICAgICAgICAgbmV3Vk5vZGUgPSBjcmVhdGVUZXh0Vk5vZGUodk5vZGVUb0Nsb25lLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3Vk5vZGU7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVm9pZFZOb2RlKCkge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZSg0MDk2IC8qIFZvaWQgKi8pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHRWTm9kZSh0ZXh0KSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlKDEgLyogVGV4dCAqLywgbnVsbCwgbnVsbCwgdGV4dCwgbnVsbCwgbnVsbCwgbnVsbCwgdHJ1ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNWTm9kZShvKSB7XG4gICAgcmV0dXJuICEhby5mbGFncztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL2NvcmUvVk5vZGVzLmpzIiwiaW1wb3J0IHsgY29weVByb3BzVG8sIGlzQXJyYXksIGlzQXR0ckFuRXZlbnQsIGlzRnVuY3Rpb24sIGlzSW52YWxpZCwgaXNOdWxsLCBpc051bGxPclVuZGVmLCBpc051bWJlciwgaXNPYmplY3QsIGlzU3RyaW5nLCBpc1N0cmluZ09yTnVtYmVyLCBpc1VuZGVmaW5lZCwgTk9fT1AsIHRocm93RXJyb3IgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9jb3JlL29wdGlvbnMnO1xuaW1wb3J0IHsgY2xvbmVWTm9kZSwgY3JlYXRlVGV4dFZOb2RlLCBjcmVhdGVWb2lkVk5vZGUsIGlzVk5vZGUgfSBmcm9tICcuLi9jb3JlL1ZOb2Rlcyc7XG5pbXBvcnQgeyBib29sZWFuUHJvcHMsIGRlbGVnYXRlZFByb3BzLCBpc1VuaXRsZXNzTnVtYmVyLCBuYW1lc3BhY2VzLCBza2lwUHJvcHMsIHN0cmljdFByb3BzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgaGFuZGxlRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9kZWxlZ2F0aW9uJztcbmltcG9ydCB7IG1vdW50LCBtb3VudEFycmF5Q2hpbGRyZW4sIG1vdW50Q29tcG9uZW50LCBtb3VudEVsZW1lbnQsIG1vdW50RnVuY3Rpb25hbENvbXBvbmVudENhbGxiYWNrcywgbW91bnRSZWYsIG1vdW50VGV4dCwgbW91bnRWb2lkIH0gZnJvbSAnLi9tb3VudGluZyc7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZCwgY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0LCBpbnNlcnRPckFwcGVuZCwgaXNLZXllZCwgcmVtb3ZlQWxsQ2hpbGRyZW4sIHJlcGxhY2VDaGlsZCwgcmVwbGFjZUxhc3RDaGlsZEFuZFVubW91bnQsIHJlcGxhY2VWTm9kZSwgcmVwbGFjZVdpdGhOZXdOb2RlLCBzZXRUZXh0Q29udGVudCwgdXBkYXRlVGV4dENvbnRlbnQsIEVNUFRZX09CSiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgY29tcG9uZW50VG9ET01Ob2RlTWFwIH0gZnJvbSAnLi9yZW5kZXJpbmcnO1xuaW1wb3J0IHsgdW5tb3VudCB9IGZyb20gJy4vdW5tb3VudGluZyc7XG5pbXBvcnQgcHJvY2Vzc0VsZW1lbnQgZnJvbSAnLi93cmFwcGVycy9wcm9jZXNzRWxlbWVudCc7XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2gobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICBpZiAobGFzdFZOb2RlICE9PSBuZXh0Vk5vZGUpIHtcbiAgICAgICAgY29uc3QgbGFzdEZsYWdzID0gbGFzdFZOb2RlLmZsYWdzO1xuICAgICAgICBjb25zdCBuZXh0RmxhZ3MgPSBuZXh0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIGlmIChuZXh0RmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIGlmIChsYXN0RmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRjaENvbXBvbmVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBuZXh0RmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudENvbXBvbmVudChuZXh0Vk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIG5leHRGbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pLCBsYXN0Vk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5leHRGbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICAgICAgaWYgKGxhc3RGbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICAgICAgICAgIHBhdGNoRWxlbWVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudEVsZW1lbnQobmV4dFZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbGFzdFZOb2RlLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXh0RmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgIGlmIChsYXN0RmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRjaFRleHQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgbW91bnRUZXh0KG5leHRWTm9kZSwgbnVsbCksIGxhc3RWTm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV4dEZsYWdzICYgNDA5NiAvKiBWb2lkICovKSB7XG4gICAgICAgICAgICBpZiAobGFzdEZsYWdzICYgNDA5NiAvKiBWb2lkICovKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hWb2lkKGxhc3RWTm9kZSwgbmV4dFZOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50Vm9pZChuZXh0Vk5vZGUsIG51bGwpLCBsYXN0Vk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRXJyb3IgY2FzZTogbW91bnQgbmV3IG9uZSByZXBsYWNpbmcgb2xkIG9uZVxuICAgICAgICAgICAgcmVwbGFjZUxhc3RDaGlsZEFuZFVubW91bnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudENoaWxkcmVuKGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBpZiAoaXNWTm9kZShjaGlsZHJlbikpIHtcbiAgICAgICAgdW5tb3VudChjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIHRydWUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb20udGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hFbGVtZW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgY29uc3QgbmV4dFRhZyA9IG5leHRWTm9kZS50eXBlO1xuICAgIGNvbnN0IGxhc3RUYWcgPSBsYXN0Vk5vZGUudHlwZTtcbiAgICBpZiAobGFzdFRhZyAhPT0gbmV4dFRhZykge1xuICAgICAgICByZXBsYWNlV2l0aE5ld05vZGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgZG9tID0gbGFzdFZOb2RlLmRvbTtcbiAgICAgICAgY29uc3QgbGFzdFByb3BzID0gbGFzdFZOb2RlLnByb3BzO1xuICAgICAgICBjb25zdCBuZXh0UHJvcHMgPSBuZXh0Vk5vZGUucHJvcHM7XG4gICAgICAgIGNvbnN0IGxhc3RDaGlsZHJlbiA9IGxhc3RWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgY29uc3QgbmV4dENoaWxkcmVuID0gbmV4dFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICBjb25zdCBsYXN0RmxhZ3MgPSBsYXN0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIGNvbnN0IG5leHRGbGFncyA9IG5leHRWTm9kZS5mbGFncztcbiAgICAgICAgY29uc3QgbGFzdFJlZiA9IGxhc3RWTm9kZS5yZWY7XG4gICAgICAgIGNvbnN0IG5leHRSZWYgPSBuZXh0Vk5vZGUucmVmO1xuICAgICAgICBjb25zdCBsYXN0RXZlbnRzID0gbGFzdFZOb2RlLmV2ZW50cztcbiAgICAgICAgY29uc3QgbmV4dEV2ZW50cyA9IG5leHRWTm9kZS5ldmVudHM7XG4gICAgICAgIG5leHRWTm9kZS5kb20gPSBkb207XG4gICAgICAgIGlmIChpc1NWRyB8fCAobmV4dEZsYWdzICYgMTI4IC8qIFN2Z0VsZW1lbnQgKi8pKSB7XG4gICAgICAgICAgICBpc1NWRyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RDaGlsZHJlbiAhPT0gbmV4dENoaWxkcmVuKSB7XG4gICAgICAgICAgICBwYXRjaENoaWxkcmVuKGxhc3RGbGFncywgbmV4dEZsYWdzLCBsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGhhc0NvbnRyb2xsZWRWYWx1ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIShuZXh0RmxhZ3MgJiAyIC8qIEh0bWxFbGVtZW50ICovKSkge1xuICAgICAgICAgICAgaGFzQ29udHJvbGxlZFZhbHVlID0gcHJvY2Vzc0VsZW1lbnQobmV4dEZsYWdzLCBuZXh0Vk5vZGUsIGRvbSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlubGluZWQgcGF0Y2hQcm9wcyAgLS0gc3RhcnRzIC0tXG4gICAgICAgIGlmIChsYXN0UHJvcHMgIT09IG5leHRQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbGFzdFByb3BzT3JFbXB0eSA9IGxhc3RQcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgICAgICAgICBjb25zdCBuZXh0UHJvcHNPckVtcHR5ID0gbmV4dFByb3BzIHx8IEVNUFRZX09CSjtcbiAgICAgICAgICAgIGlmIChuZXh0UHJvcHNPckVtcHR5ICE9PSBFTVBUWV9PQkopIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIG5leHRQcm9wc09yRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gbmV4dFByb3BzT3JFbXB0eVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdFZhbHVlID0gbGFzdFByb3BzT3JFbXB0eVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUHJvcChwcm9wLCBuZXh0VmFsdWUsIGRvbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaFByb3AocHJvcCwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGFzdFByb3BzT3JFbXB0eSAhPT0gRU1QVFlfT0JKKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBsYXN0UHJvcHNPckVtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmKG5leHRQcm9wc09yRW1wdHlbcHJvcF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVQcm9wKHByb3AsIGxhc3RQcm9wc09yRW1wdHlbcHJvcF0sIGRvbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5saW5lZCBwYXRjaFByb3BzICAtLSBlbmRzIC0tXG4gICAgICAgIGlmIChsYXN0RXZlbnRzICE9PSBuZXh0RXZlbnRzKSB7XG4gICAgICAgICAgICBwYXRjaEV2ZW50cyhsYXN0RXZlbnRzLCBuZXh0RXZlbnRzLCBkb20pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXh0UmVmKSB7XG4gICAgICAgICAgICBpZiAobGFzdFJlZiAhPT0gbmV4dFJlZiB8fCBpc1JlY3ljbGluZykge1xuICAgICAgICAgICAgICAgIG1vdW50UmVmKGRvbSwgbmV4dFJlZiwgbGlmZWN5Y2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHBhdGNoQ2hpbGRyZW4obGFzdEZsYWdzLCBuZXh0RmxhZ3MsIGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgbGV0IHBhdGNoQXJyYXkgPSBmYWxzZTtcbiAgICBsZXQgcGF0Y2hLZXllZCA9IGZhbHNlO1xuICAgIGlmIChuZXh0RmxhZ3MgJiA2NCAvKiBIYXNOb25LZXllZENoaWxkcmVuICovKSB7XG4gICAgICAgIHBhdGNoQXJyYXkgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICgobGFzdEZsYWdzICYgMzIgLyogSGFzS2V5ZWRDaGlsZHJlbiAqLykgJiYgKG5leHRGbGFncyAmIDMyIC8qIEhhc0tleWVkQ2hpbGRyZW4gKi8pKSB7XG4gICAgICAgIHBhdGNoS2V5ZWQgPSB0cnVlO1xuICAgICAgICBwYXRjaEFycmF5ID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNJbnZhbGlkKG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgdW5tb3VudENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNJbnZhbGlkKGxhc3RDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIobmV4dENoaWxkcmVuKSkge1xuICAgICAgICAgICAgc2V0VGV4dENvbnRlbnQoZG9tLCBuZXh0Q2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkobmV4dENoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgIG1vdW50QXJyYXlDaGlsZHJlbihuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb3VudChuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChpc1N0cmluZ09yTnVtYmVyKGxhc3RDaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHVwZGF0ZVRleHRDb250ZW50KGRvbSwgbmV4dENoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudChkb20sIG5leHRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheShuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChpc0FycmF5KGxhc3RDaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHBhdGNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGlzS2V5ZWQobGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hLZXllZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1bm1vdW50Q2hpbGRyZW4obGFzdENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgbW91bnRBcnJheUNoaWxkcmVuKG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5KGxhc3RDaGlsZHJlbikpIHtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBsYXN0Q2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICBtb3VudChuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzVk5vZGUobmV4dENoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaXNWTm9kZShsYXN0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBwYXRjaChsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1bm1vdW50Q2hpbGRyZW4obGFzdENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgbW91bnQobmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwYXRjaEFycmF5KSB7XG4gICAgICAgIGlmIChwYXRjaEtleWVkKSB7XG4gICAgICAgICAgICBwYXRjaEtleWVkQ2hpbGRyZW4obGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGF0Y2hOb25LZXllZENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaENvbXBvbmVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc0NsYXNzLCBpc1JlY3ljbGluZykge1xuICAgIGNvbnN0IGxhc3RUeXBlID0gbGFzdFZOb2RlLnR5cGU7XG4gICAgY29uc3QgbmV4dFR5cGUgPSBuZXh0Vk5vZGUudHlwZTtcbiAgICBjb25zdCBuZXh0UHJvcHMgPSBuZXh0Vk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGNvbnN0IGxhc3RLZXkgPSBsYXN0Vk5vZGUua2V5O1xuICAgIGNvbnN0IG5leHRLZXkgPSBuZXh0Vk5vZGUua2V5O1xuICAgIGNvbnN0IGRlZmF1bHRQcm9wcyA9IG5leHRUeXBlLmRlZmF1bHRQcm9wcztcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGRlZmF1bHRQcm9wcykpIHtcbiAgICAgICAgLy8gV2hlbiBkZWZhdWx0UHJvcHMgYXJlIHVzZWQgd2UgbmVlZCB0byBjcmVhdGUgbmV3IE9iamVjdFxuICAgICAgICBjb25zdCBwcm9wcyA9IG5leHRWTm9kZS5wcm9wcyB8fCB7fTtcbiAgICAgICAgY29weVByb3BzVG8oZGVmYXVsdFByb3BzLCBwcm9wcyk7XG4gICAgICAgIG5leHRWTm9kZS5wcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICBpZiAobGFzdFR5cGUgIT09IG5leHRUeXBlKSB7XG4gICAgICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgICAgICByZXBsYWNlV2l0aE5ld05vZGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbGFzdElucHV0ID0gbGFzdFZOb2RlLmNoaWxkcmVuLl9sYXN0SW5wdXQgfHwgbGFzdFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgY29uc3QgbmV4dElucHV0ID0gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0KG5leHRWTm9kZSwgbmV4dFR5cGUsIG5leHRQcm9wcywgY29udGV4dCk7XG4gICAgICAgICAgICB1bm1vdW50KGxhc3RWTm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgcGF0Y2gobGFzdElucHV0LCBuZXh0SW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgY29uc3QgZG9tID0gbmV4dFZOb2RlLmRvbSA9IG5leHRJbnB1dC5kb207XG4gICAgICAgICAgICBuZXh0Vk5vZGUuY2hpbGRyZW4gPSBuZXh0SW5wdXQ7XG4gICAgICAgICAgICBtb3VudEZ1bmN0aW9uYWxDb21wb25lbnRDYWxsYmFja3MobmV4dFZOb2RlLnJlZiwgZG9tLCBsaWZlY3ljbGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaXNDbGFzcykge1xuICAgICAgICAgICAgaWYgKGxhc3RLZXkgIT09IG5leHRLZXkpIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlV2l0aE5ld05vZGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbGFzdFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKGluc3RhbmNlLl91bm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIG1vdW50Q29tcG9uZW50KG5leHRWTm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgbmV4dFZOb2RlLmZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLyksIGxhc3RWTm9kZS5kb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdFN0YXRlID0gaW5zdGFuY2Uuc3RhdGU7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFN0YXRlID0gaW5zdGFuY2Uuc3RhdGU7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdFByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkQ29udGV4dCA9IGluc3RhbmNlLmdldENoaWxkQ29udGV4dCgpO1xuICAgICAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IGluc3RhbmNlO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9pc1NWRyA9IGlzU1ZHO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9zeW5jU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihjaGlsZENvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0SW5wdXQgPSBpbnN0YW5jZS5fbGFzdElucHV0O1xuICAgICAgICAgICAgICAgIGxldCBuZXh0SW5wdXQgPSBpbnN0YW5jZS5fdXBkYXRlQ29tcG9uZW50KGxhc3RTdGF0ZSwgbmV4dFN0YXRlLCBsYXN0UHJvcHMsIG5leHRQcm9wcywgY29udGV4dCwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBsZXQgZGlkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fY2hpbGRDb250ZXh0ID0gY2hpbGRDb250ZXh0O1xuICAgICAgICAgICAgICAgIGlmIChpc0ludmFsaWQobmV4dElucHV0KSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmV4dElucHV0ID09PSBOT19PUCkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQgPSBsYXN0SW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgIGRpZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRJbnB1dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0ID0gY3JlYXRlVGV4dFZOb2RlKG5leHRJbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQXJyYXkobmV4dElucHV0KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChuZXh0SW5wdXQpICYmIG5leHRJbnB1dC5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0ID0gY2xvbmVWTm9kZShuZXh0SW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV4dElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dC5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGFzdElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RJbnB1dC5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX2xhc3RJbnB1dCA9IG5leHRJbnB1dDtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fdk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRpZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaChsYXN0SW5wdXQsIG5leHRJbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNoaWxkQ29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcG9uZW50RGlkVXBkYXRlKGxhc3RQcm9wcywgbGFzdFN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5hZnRlclVwZGF0ZSAmJiBvcHRpb25zLmFmdGVyVXBkYXRlKG5leHRWTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5zZXQoaW5zdGFuY2UsIG5leHRJbnB1dC5kb20pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fc3luY1NldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBuZXh0Vk5vZGUuZG9tID0gbmV4dElucHV0LmRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgbGFzdFByb3BzID0gbGFzdFZOb2RlLnByb3BzO1xuICAgICAgICAgICAgY29uc3QgbmV4dEhvb2tzID0gbmV4dFZOb2RlLnJlZjtcbiAgICAgICAgICAgIGNvbnN0IG5leHRIb29rc0RlZmluZWQgPSAhaXNOdWxsT3JVbmRlZihuZXh0SG9va3MpO1xuICAgICAgICAgICAgY29uc3QgbGFzdElucHV0ID0gbGFzdFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICAgICAgbGV0IG5leHRJbnB1dCA9IGxhc3RJbnB1dDtcbiAgICAgICAgICAgIG5leHRWTm9kZS5kb20gPSBsYXN0Vk5vZGUuZG9tO1xuICAgICAgICAgICAgbmV4dFZOb2RlLmNoaWxkcmVuID0gbGFzdElucHV0O1xuICAgICAgICAgICAgaWYgKGxhc3RLZXkgIT09IG5leHRLZXkpIHtcbiAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG5leHRIb29rc0RlZmluZWQgJiYgIWlzTnVsbE9yVW5kZWYobmV4dEhvb2tzLm9uQ29tcG9uZW50U2hvdWxkVXBkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGUgPSBuZXh0SG9va3Mub25Db21wb25lbnRTaG91bGRVcGRhdGUobGFzdFByb3BzLCBuZXh0UHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaG91bGRVcGRhdGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5leHRIb29rc0RlZmluZWQgJiYgIWlzTnVsbE9yVW5kZWYobmV4dEhvb2tzLm9uQ29tcG9uZW50V2lsbFVwZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEhvb2tzLm9uQ29tcG9uZW50V2lsbFVwZGF0ZShsYXN0UHJvcHMsIG5leHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHRJbnB1dCA9IG5leHRUeXBlKG5leHRQcm9wcywgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzSW52YWxpZChuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCA9IGNyZWF0ZVZvaWRWTm9kZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRJbnB1dCkgJiYgbmV4dElucHV0ICE9PSBOT19PUCkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQgPSBjcmVhdGVUZXh0Vk5vZGUobmV4dElucHV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNBcnJheShuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KG5leHRJbnB1dCkgJiYgbmV4dElucHV0LmRvbSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQgPSBjbG9uZVZOb2RlKG5leHRJbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXh0SW5wdXQgIT09IE5PX09QKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoKGxhc3RJbnB1dCwgbmV4dElucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dFZOb2RlLmNoaWxkcmVuID0gbmV4dElucHV0O1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEhvb2tzRGVmaW5lZCAmJiAhaXNOdWxsT3JVbmRlZihuZXh0SG9va3Mub25Db21wb25lbnREaWRVcGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0SG9va3Mub25Db21wb25lbnREaWRVcGRhdGUobGFzdFByb3BzLCBuZXh0UHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5leHRWTm9kZS5kb20gPSBuZXh0SW5wdXQuZG9tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXh0SW5wdXQuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICBuZXh0SW5wdXQucGFyZW50Vk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsYXN0SW5wdXQuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICBsYXN0SW5wdXQucGFyZW50Vk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoVGV4dChsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgIGNvbnN0IG5leHRUZXh0ID0gbmV4dFZOb2RlLmNoaWxkcmVuO1xuICAgIGNvbnN0IGRvbSA9IGxhc3RWTm9kZS5kb207XG4gICAgbmV4dFZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAobGFzdFZOb2RlLmNoaWxkcmVuICE9PSBuZXh0VGV4dCkge1xuICAgICAgICBkb20ubm9kZVZhbHVlID0gbmV4dFRleHQ7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoVm9pZChsYXN0Vk5vZGUsIG5leHRWTm9kZSkge1xuICAgIG5leHRWTm9kZS5kb20gPSBsYXN0Vk5vZGUuZG9tO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoTm9uS2V5ZWRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZykge1xuICAgIGNvbnN0IGxhc3RDaGlsZHJlbkxlbmd0aCA9IGxhc3RDaGlsZHJlbi5sZW5ndGg7XG4gICAgY29uc3QgbmV4dENoaWxkcmVuTGVuZ3RoID0gbmV4dENoaWxkcmVuLmxlbmd0aDtcbiAgICBjb25zdCBjb21tb25MZW5ndGggPSBsYXN0Q2hpbGRyZW5MZW5ndGggPiBuZXh0Q2hpbGRyZW5MZW5ndGggPyBuZXh0Q2hpbGRyZW5MZW5ndGggOiBsYXN0Q2hpbGRyZW5MZW5ndGg7XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoOyBpIDwgY29tbW9uTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG5leHRDaGlsZCA9IG5leHRDaGlsZHJlbltpXTtcbiAgICAgICAgaWYgKG5leHRDaGlsZC5kb20pIHtcbiAgICAgICAgICAgIG5leHRDaGlsZCA9IG5leHRDaGlsZHJlbltpXSA9IGNsb25lVk5vZGUobmV4dENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBwYXRjaChsYXN0Q2hpbGRyZW5baV0sIG5leHRDaGlsZCwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGlmIChsYXN0Q2hpbGRyZW5MZW5ndGggPCBuZXh0Q2hpbGRyZW5MZW5ndGgpIHtcbiAgICAgICAgZm9yIChpID0gY29tbW9uTGVuZ3RoOyBpIDwgbmV4dENoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuZXh0Q2hpbGQgPSBuZXh0Q2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAobmV4dENoaWxkLmRvbSkge1xuICAgICAgICAgICAgICAgIG5leHRDaGlsZCA9IG5leHRDaGlsZHJlbltpXSA9IGNsb25lVk5vZGUobmV4dENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwcGVuZENoaWxkKGRvbSwgbW91bnQobmV4dENoaWxkLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobmV4dENoaWxkcmVuTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgbGFzdENoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobGFzdENoaWxkcmVuTGVuZ3RoID4gbmV4dENoaWxkcmVuTGVuZ3RoKSB7XG4gICAgICAgIGZvciAoaSA9IGNvbW1vbkxlbmd0aDsgaSA8IGxhc3RDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB1bm1vdW50KGxhc3RDaGlsZHJlbltpXSwgZG9tLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hLZXllZENoaWxkcmVuKGEsIGIsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICBsZXQgYUxlbmd0aCA9IGEubGVuZ3RoO1xuICAgIGxldCBiTGVuZ3RoID0gYi5sZW5ndGg7XG4gICAgbGV0IGFFbmQgPSBhTGVuZ3RoIC0gMTtcbiAgICBsZXQgYkVuZCA9IGJMZW5ndGggLSAxO1xuICAgIGxldCBhU3RhcnQgPSAwO1xuICAgIGxldCBiU3RhcnQgPSAwO1xuICAgIGxldCBpO1xuICAgIGxldCBqO1xuICAgIGxldCBhTm9kZTtcbiAgICBsZXQgYk5vZGU7XG4gICAgbGV0IG5leHROb2RlO1xuICAgIGxldCBuZXh0UG9zO1xuICAgIGxldCBub2RlO1xuICAgIGlmIChhTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChiTGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBtb3VudEFycmF5Q2hpbGRyZW4oYiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYgKGJMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBhLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgYVN0YXJ0Tm9kZSA9IGFbYVN0YXJ0XTtcbiAgICBsZXQgYlN0YXJ0Tm9kZSA9IGJbYlN0YXJ0XTtcbiAgICBsZXQgYUVuZE5vZGUgPSBhW2FFbmRdO1xuICAgIGxldCBiRW5kTm9kZSA9IGJbYkVuZF07XG4gICAgaWYgKGJTdGFydE5vZGUuZG9tKSB7XG4gICAgICAgIGJbYlN0YXJ0XSA9IGJTdGFydE5vZGUgPSBjbG9uZVZOb2RlKGJTdGFydE5vZGUpO1xuICAgIH1cbiAgICBpZiAoYkVuZE5vZGUuZG9tKSB7XG4gICAgICAgIGJbYkVuZF0gPSBiRW5kTm9kZSA9IGNsb25lVk5vZGUoYkVuZE5vZGUpO1xuICAgIH1cbiAgICAvLyBTdGVwIDFcbiAgICAvKiBlc2xpbnQgbm8tY29uc3RhbnQtY29uZGl0aW9uOiAwICovXG4gICAgb3V0ZXI6IHdoaWxlICh0cnVlKSB7XG4gICAgICAgIC8vIFN5bmMgbm9kZXMgd2l0aCB0aGUgc2FtZSBrZXkgYXQgdGhlIGJlZ2lubmluZy5cbiAgICAgICAgd2hpbGUgKGFTdGFydE5vZGUua2V5ID09PSBiU3RhcnROb2RlLmtleSkge1xuICAgICAgICAgICAgcGF0Y2goYVN0YXJ0Tm9kZSwgYlN0YXJ0Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBhU3RhcnQrKztcbiAgICAgICAgICAgIGJTdGFydCsrO1xuICAgICAgICAgICAgaWYgKGFTdGFydCA+IGFFbmQgfHwgYlN0YXJ0ID4gYkVuZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrIG91dGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYVN0YXJ0Tm9kZSA9IGFbYVN0YXJ0XTtcbiAgICAgICAgICAgIGJTdGFydE5vZGUgPSBiW2JTdGFydF07XG4gICAgICAgICAgICBpZiAoYlN0YXJ0Tm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICBiW2JTdGFydF0gPSBiU3RhcnROb2RlID0gY2xvbmVWTm9kZShiU3RhcnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBTeW5jIG5vZGVzIHdpdGggdGhlIHNhbWUga2V5IGF0IHRoZSBlbmQuXG4gICAgICAgIHdoaWxlIChhRW5kTm9kZS5rZXkgPT09IGJFbmROb2RlLmtleSkge1xuICAgICAgICAgICAgcGF0Y2goYUVuZE5vZGUsIGJFbmROb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIGFFbmQtLTtcbiAgICAgICAgICAgIGJFbmQtLTtcbiAgICAgICAgICAgIGlmIChhU3RhcnQgPiBhRW5kIHx8IGJTdGFydCA+IGJFbmQpIHtcbiAgICAgICAgICAgICAgICBicmVhayBvdXRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFFbmROb2RlID0gYVthRW5kXTtcbiAgICAgICAgICAgIGJFbmROb2RlID0gYltiRW5kXTtcbiAgICAgICAgICAgIGlmIChiRW5kTm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICBiW2JFbmRdID0gYkVuZE5vZGUgPSBjbG9uZVZOb2RlKGJFbmROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBNb3ZlIGFuZCBzeW5jIG5vZGVzIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAgICAgICAgaWYgKGFFbmROb2RlLmtleSA9PT0gYlN0YXJ0Tm9kZS5rZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGFFbmROb2RlLCBiU3RhcnROb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgYlN0YXJ0Tm9kZS5kb20sIGFTdGFydE5vZGUuZG9tKTtcbiAgICAgICAgICAgIGFFbmQtLTtcbiAgICAgICAgICAgIGJTdGFydCsrO1xuICAgICAgICAgICAgYUVuZE5vZGUgPSBhW2FFbmRdO1xuICAgICAgICAgICAgYlN0YXJ0Tm9kZSA9IGJbYlN0YXJ0XTtcbiAgICAgICAgICAgIGlmIChiU3RhcnROb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgIGJbYlN0YXJ0XSA9IGJTdGFydE5vZGUgPSBjbG9uZVZOb2RlKGJTdGFydE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZSBhbmQgc3luYyBub2RlcyBmcm9tIGxlZnQgdG8gcmlnaHQuXG4gICAgICAgIGlmIChhU3RhcnROb2RlLmtleSA9PT0gYkVuZE5vZGUua2V5KSB7XG4gICAgICAgICAgICBwYXRjaChhU3RhcnROb2RlLCBiRW5kTm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBuZXh0UG9zID0gYkVuZCArIDE7XG4gICAgICAgICAgICBuZXh0Tm9kZSA9IG5leHRQb3MgPCBiLmxlbmd0aCA/IGJbbmV4dFBvc10uZG9tIDogbnVsbDtcbiAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgYkVuZE5vZGUuZG9tLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICBhU3RhcnQrKztcbiAgICAgICAgICAgIGJFbmQtLTtcbiAgICAgICAgICAgIGFTdGFydE5vZGUgPSBhW2FTdGFydF07XG4gICAgICAgICAgICBiRW5kTm9kZSA9IGJbYkVuZF07XG4gICAgICAgICAgICBpZiAoYkVuZE5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgYltiRW5kXSA9IGJFbmROb2RlID0gY2xvbmVWTm9kZShiRW5kTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGFTdGFydCA+IGFFbmQpIHtcbiAgICAgICAgaWYgKGJTdGFydCA8PSBiRW5kKSB7XG4gICAgICAgICAgICBuZXh0UG9zID0gYkVuZCArIDE7XG4gICAgICAgICAgICBuZXh0Tm9kZSA9IG5leHRQb3MgPCBiLmxlbmd0aCA/IGJbbmV4dFBvc10uZG9tIDogbnVsbDtcbiAgICAgICAgICAgIHdoaWxlIChiU3RhcnQgPD0gYkVuZCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBiW2JTdGFydF07XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGJbYlN0YXJ0XSA9IG5vZGUgPSBjbG9uZVZOb2RlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiU3RhcnQrKztcbiAgICAgICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIG1vdW50KG5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoYlN0YXJ0ID4gYkVuZCkge1xuICAgICAgICB3aGlsZSAoYVN0YXJ0IDw9IGFFbmQpIHtcbiAgICAgICAgICAgIHVubW91bnQoYVthU3RhcnQrK10sIGRvbSwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhTGVuZ3RoID0gYUVuZCAtIGFTdGFydCArIDE7XG4gICAgICAgIGJMZW5ndGggPSBiRW5kIC0gYlN0YXJ0ICsgMTtcbiAgICAgICAgY29uc3Qgc291cmNlcyA9IG5ldyBBcnJheShiTGVuZ3RoKTtcbiAgICAgICAgLy8gTWFyayBhbGwgbm9kZXMgYXMgaW5zZXJ0ZWQuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBiTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNvdXJjZXNbaV0gPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbW92ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHBvcyA9IDA7XG4gICAgICAgIGxldCBwYXRjaGVkID0gMDtcbiAgICAgICAgLy8gV2hlbiBzaXplcyBhcmUgc21hbGwsIGp1c3QgbG9vcCB0aGVtIHRocm91Z2hcbiAgICAgICAgaWYgKChiTGVuZ3RoIDw9IDQpIHx8IChhTGVuZ3RoICogYkxlbmd0aCA8PSAxNikpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IGFTdGFydDsgaSA8PSBhRW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhTm9kZSA9IGFbaV07XG4gICAgICAgICAgICAgICAgaWYgKHBhdGNoZWQgPCBiTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IGJTdGFydDsgaiA8PSBiRW5kOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJOb2RlID0gYltqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhTm9kZS5rZXkgPT09IGJOb2RlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXNbaiAtIGJTdGFydF0gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPiBqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiTm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYltqXSA9IGJOb2RlID0gY2xvbmVWTm9kZShiTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoKGFOb2RlLCBiTm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hlZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qga2V5SW5kZXggPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAvLyBNYXAga2V5cyBieSB0aGVpciBpbmRleCBpbiBhcnJheVxuICAgICAgICAgICAgZm9yIChpID0gYlN0YXJ0OyBpIDw9IGJFbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBiW2ldO1xuICAgICAgICAgICAgICAgIGtleUluZGV4LnNldChub2RlLmtleSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUcnkgdG8gcGF0Y2ggc2FtZSBrZXlzXG4gICAgICAgICAgICBmb3IgKGkgPSBhU3RhcnQ7IGkgPD0gYUVuZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUgPSBhW2ldO1xuICAgICAgICAgICAgICAgIGlmIChwYXRjaGVkIDwgYkxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBqID0ga2V5SW5kZXguZ2V0KGFOb2RlLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoaikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJOb2RlID0gYltqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXNbaiAtIGJTdGFydF0gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA+IGopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJOb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbal0gPSBiTm9kZSA9IGNsb25lVk5vZGUoYk5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2goYU5vZGUsIGJOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoZWQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGZhc3QtcGF0aDogaWYgbm90aGluZyBwYXRjaGVkIHJlbW92ZSBhbGwgb2xkIGFuZCBhZGQgYWxsIG5ld1xuICAgICAgICBpZiAoYUxlbmd0aCA9PT0gYS5sZW5ndGggJiYgcGF0Y2hlZCA9PT0gMCkge1xuICAgICAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBhLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIHdoaWxlIChiU3RhcnQgPCBiTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IGJbYlN0YXJ0XTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgYltiU3RhcnRdID0gbm9kZSA9IGNsb25lVk5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJTdGFydCsrO1xuICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbW91bnQobm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyksIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaSA9IGFMZW5ndGggLSBwYXRjaGVkO1xuICAgICAgICAgICAgd2hpbGUgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUgPSBhW2FTdGFydCsrXTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTnVsbChhTm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5tb3VudChhTm9kZSwgZG9tLCBsaWZlY3ljbGUsIHRydWUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlcSA9IGxpc19hbGdvcml0aG0oc291cmNlcyk7XG4gICAgICAgICAgICAgICAgaiA9IHNlcS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGJMZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc291cmNlc1tpXSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcyA9IGkgKyBiU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gYltwb3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYltwb3NdID0gbm9kZSA9IGNsb25lVk5vZGUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zID0gcG9zICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBtb3VudChub2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA8IDAgfHwgaSAhPT0gc2VxW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gaSArIGJTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gYltwb3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3MgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbm9kZS5kb20sIG5leHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGNoZWQgIT09IGJMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHBhdGNoZWQgY291bnQgZG9lc24ndCBtYXRjaCBiIGxlbmd0aCB3ZSBuZWVkIHRvIGluc2VydCB0aG9zZSBuZXcgb25lc1xuICAgICAgICAgICAgICAgIC8vIGxvb3AgYmFja3dhcmRzIHNvIHdlIGNhbiB1c2UgaW5zZXJ0QmVmb3JlXG4gICAgICAgICAgICAgICAgZm9yIChpID0gYkxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VzW2ldID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gaSArIGJTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBiW3Bvc107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiW3Bvc10gPSBub2RlID0gY2xvbmVWTm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3MgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRPckFwcGVuZChkb20sIG1vdW50KG5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyAvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Mb25nZXN0X2luY3JlYXNpbmdfc3Vic2VxdWVuY2VcbmZ1bmN0aW9uIGxpc19hbGdvcml0aG0oYXJyKSB7XG4gICAgY29uc3QgcCA9IGFyci5zbGljZSgwKTtcbiAgICBjb25zdCByZXN1bHQgPSBbMF07XG4gICAgbGV0IGk7XG4gICAgbGV0IGo7XG4gICAgbGV0IHU7XG4gICAgbGV0IHY7XG4gICAgbGV0IGM7XG4gICAgY29uc3QgbGVuID0gYXJyLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGV0IGFyckkgPSBhcnJbaV07XG4gICAgICAgIGlmIChhcnJJID09PSAtMSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaiA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChhcnJbal0gPCBhcnJJKSB7XG4gICAgICAgICAgICBwW2ldID0gajtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdSA9IDA7XG4gICAgICAgIHYgPSByZXN1bHQubGVuZ3RoIC0gMTtcbiAgICAgICAgd2hpbGUgKHUgPCB2KSB7XG4gICAgICAgICAgICBjID0gKCh1ICsgdikgLyAyKSB8IDA7XG4gICAgICAgICAgICBpZiAoYXJyW3Jlc3VsdFtjXV0gPCBhcnJJKSB7XG4gICAgICAgICAgICAgICAgdSA9IGMgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdiA9IGM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyckkgPCBhcnJbcmVzdWx0W3VdXSkge1xuICAgICAgICAgICAgaWYgKHUgPiAwKSB7XG4gICAgICAgICAgICAgICAgcFtpXSA9IHJlc3VsdFt1IC0gMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRbdV0gPSBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHUgPSByZXN1bHQubGVuZ3RoO1xuICAgIHYgPSByZXN1bHRbdSAtIDFdO1xuICAgIHdoaWxlICh1LS0gPiAwKSB7XG4gICAgICAgIHJlc3VsdFt1XSA9IHY7XG4gICAgICAgIHYgPSBwW3ZdO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoUHJvcChwcm9wLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tLCBpc1NWRywgaGFzQ29udHJvbGxlZFZhbHVlKSB7XG4gICAgaWYgKHNraXBQcm9wc1twcm9wXSB8fCBoYXNDb250cm9sbGVkVmFsdWUgJiYgcHJvcCA9PT0gJ3ZhbHVlJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChib29sZWFuUHJvcHNbcHJvcF0pIHtcbiAgICAgICAgZG9tW3Byb3BdID0gISFuZXh0VmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0cmljdFByb3BzW3Byb3BdKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNOdWxsT3JVbmRlZihuZXh0VmFsdWUpID8gJycgOiBuZXh0VmFsdWU7XG4gICAgICAgIGlmIChkb21bcHJvcF0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBkb21bcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChsYXN0VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuICAgICAgICBpZiAoaXNBdHRyQW5FdmVudChwcm9wKSkge1xuICAgICAgICAgICAgcGF0Y2hFdmVudChwcm9wLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc051bGxPclVuZGVmKG5leHRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUocHJvcCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgICAgICAgIGlmIChpc1NWRykge1xuICAgICAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbmV4dFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvbS5jbGFzc05hbWUgPSBuZXh0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgcGF0Y2hTdHlsZShsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0SHRtbCA9IGxhc3RWYWx1ZSAmJiBsYXN0VmFsdWUuX19odG1sO1xuICAgICAgICAgICAgY29uc3QgbmV4dEh0bWwgPSBuZXh0VmFsdWUgJiYgbmV4dFZhbHVlLl9faHRtbDtcbiAgICAgICAgICAgIGlmIChsYXN0SHRtbCAhPT0gbmV4dEh0bWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYobmV4dEh0bWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbS5pbm5lckhUTUwgPSBuZXh0SHRtbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBucyA9IG5hbWVzcGFjZXNbcHJvcF07XG4gICAgICAgICAgICBpZiAobnMpIHtcbiAgICAgICAgICAgICAgICBkb20uc2V0QXR0cmlidXRlTlMobnMsIHByb3AsIG5leHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb20uc2V0QXR0cmlidXRlKHByb3AsIG5leHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hFdmVudHMobGFzdEV2ZW50cywgbmV4dEV2ZW50cywgZG9tKSB7XG4gICAgbGFzdEV2ZW50cyA9IGxhc3RFdmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIG5leHRFdmVudHMgPSBuZXh0RXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBpZiAobmV4dEV2ZW50cyAhPT0gRU1QVFlfT0JKKSB7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gbmV4dEV2ZW50cykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIHBhdGNoRXZlbnQobmFtZSwgbGFzdEV2ZW50c1tuYW1lXSwgbmV4dEV2ZW50c1tuYW1lXSwgZG9tKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobGFzdEV2ZW50cyAhPT0gRU1QVFlfT0JKKSB7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gbGFzdEV2ZW50cykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmKG5leHRFdmVudHNbbmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lLCBsYXN0RXZlbnRzW25hbWVdLCBudWxsLCBkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoRXZlbnQobmFtZSwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSkge1xuICAgIGlmIChsYXN0VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuICAgICAgICBjb25zdCBuYW1lTG93ZXJDYXNlID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBkb21FdmVudCA9IGRvbVtuYW1lTG93ZXJDYXNlXTtcbiAgICAgICAgLy8gaWYgdGhlIGZ1bmN0aW9uIGlzIHdyYXBwZWQsIHRoYXQgbWVhbnMgaXQncyBiZWVuIGNvbnRyb2xsZWQgYnkgYSB3cmFwcGVyXG4gICAgICAgIGlmIChkb21FdmVudCAmJiBkb21FdmVudC53cmFwcGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGVnYXRlZFByb3BzW25hbWVdKSB7XG4gICAgICAgICAgICBoYW5kbGVFdmVudChuYW1lLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChsYXN0VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNGdW5jdGlvbihuZXh0VmFsdWUpICYmICFpc051bGxPclVuZGVmKG5leHRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua0V2ZW50ID0gbmV4dFZhbHVlLmV2ZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlua0V2ZW50ICYmIGlzRnVuY3Rpb24obGlua0V2ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb20uX2RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21bbmFtZUxvd2VyQ2FzZV0gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rRXZlbnQoZS5jdXJyZW50VGFyZ2V0Ll9kYXRhLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tLl9kYXRhID0gbmV4dFZhbHVlLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoYGFuIGV2ZW50IG9uIGEgVk5vZGUgXCIke25hbWV9XCIuIHdhcyBub3QgYSBmdW5jdGlvbiBvciBhIHZhbGlkIGxpbmtFdmVudC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tW25hbWVMb3dlckNhc2VdID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIFdlIGFyZSBhc3N1bWluZyBoZXJlIHRoYXQgd2UgY29tZSBmcm9tIHBhdGNoUHJvcCByb3V0aW5lXG4vLyAtbmV4dEF0dHJWYWx1ZSBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWRcbmV4cG9ydCBmdW5jdGlvbiBwYXRjaFN0eWxlKGxhc3RBdHRyVmFsdWUsIG5leHRBdHRyVmFsdWUsIGRvbSkge1xuICAgIGlmIChpc1N0cmluZyhuZXh0QXR0clZhbHVlKSkge1xuICAgICAgICBkb20uc3R5bGUuY3NzVGV4dCA9IG5leHRBdHRyVmFsdWU7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChsZXQgc3R5bGUgaW4gbmV4dEF0dHJWYWx1ZSkge1xuICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICBjb25zdCB2YWx1ZSA9IG5leHRBdHRyVmFsdWVbc3R5bGVdO1xuICAgICAgICBpZiAoaXNOdW1iZXIodmFsdWUpICYmICFpc1VuaXRsZXNzTnVtYmVyW3N0eWxlXSkge1xuICAgICAgICAgICAgZG9tLnN0eWxlW3N0eWxlXSA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvbS5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzTnVsbE9yVW5kZWYobGFzdEF0dHJWYWx1ZSkpIHtcbiAgICAgICAgZm9yIChsZXQgc3R5bGUgaW4gbGFzdEF0dHJWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dEF0dHJWYWx1ZVtzdHlsZV0pKSB7XG4gICAgICAgICAgICAgICAgZG9tLnN0eWxlW3N0eWxlXSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcmVtb3ZlUHJvcChwcm9wLCBsYXN0VmFsdWUsIGRvbSkge1xuICAgIGlmIChwcm9wID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICBkb20ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wID09PSAndmFsdWUnKSB7XG4gICAgICAgIGRvbS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wID09PSAnc3R5bGUnKSB7XG4gICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQXR0ckFuRXZlbnQocHJvcCkpIHtcbiAgICAgICAgaGFuZGxlRXZlbnQobmFtZSwgbGFzdFZhbHVlLCBudWxsLCBkb20pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vcGF0Y2hpbmcuanMiLCJpbXBvcnQgeyBpc0Jyb3dzZXIsIGlzSW52YWxpZCwgaXNOdWxsLCBpc051bGxPclVuZGVmLCBMaWZlY3ljbGUsIE5PX09QLCB0aHJvd0Vycm9yLCB3YXJuaW5nIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi4vY29yZS9vcHRpb25zJztcbmltcG9ydCB7IGNsb25lVk5vZGUgfSBmcm9tICcuLi9jb3JlL1ZOb2Rlcyc7XG5pbXBvcnQgaHlkcmF0ZVJvb3QgZnJvbSAnLi9oeWRyYXRpb24nO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICcuL21vdW50aW5nJztcbmltcG9ydCB7IHBhdGNoIH0gZnJvbSAnLi9wYXRjaGluZyc7XG5pbXBvcnQgeyB1bm1vdW50IH0gZnJvbSAnLi91bm1vdW50aW5nJztcbmltcG9ydCB7IEVNUFRZX09CSiB9IGZyb20gJy4vdXRpbHMnO1xuLy8gcmF0aGVyIHRoYW4gdXNlIGEgTWFwLCBsaWtlIHdlIGRpZCBiZWZvcmUsIHdlIGNhbiB1c2UgYW4gYXJyYXkgaGVyZVxuLy8gZ2l2ZW4gdGhlcmUgc2hvdWxkbid0IGJlIFRIQVQgbWFueSByb290cyBvbiB0aGUgcGFnZSwgdGhlIGRpZmZlcmVuY2Vcbi8vIGluIHBlcmZvcm1hbmNlIGlzIGh1Z2U6IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNTgwMmE2OTEzMzBhYjA5OTAwYTFhMmRhXG5leHBvcnQgY29uc3Qgcm9vdHMgPSBbXTtcbmV4cG9ydCBjb25zdCBjb21wb25lbnRUb0RPTU5vZGVNYXAgPSBuZXcgTWFwKCk7XG5vcHRpb25zLnJvb3RzID0gcm9vdHM7XG5leHBvcnQgZnVuY3Rpb24gZmluZERPTU5vZGUocmVmKSB7XG4gICAgaWYgKCFvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignZmluZERPTU5vZGUoKSBoYXMgYmVlbiBkaXNhYmxlZCwgdXNlIEluZmVybm8ub3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgPSB0cnVlOyBlbmFibGVkIGZpbmRET01Ob2RlKCkuIFdhcm5pbmcgdGhpcyBjYW4gc2lnbmlmaWNhbnRseSBpbXBhY3QgcGVyZm9ybWFuY2UhJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbiAgICBjb25zdCBkb20gPSByZWYgJiYgcmVmLm5vZGVUeXBlID8gcmVmIDogbnVsbDtcbiAgICByZXR1cm4gY29tcG9uZW50VG9ET01Ob2RlTWFwLmdldChyZWYpIHx8IGRvbTtcbn1cbmZ1bmN0aW9uIGdldFJvb3QoZG9tKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJvb3RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSByb290c1tpXTtcbiAgICAgICAgaWYgKHJvb3QuZG9tID09PSBkb20pIHtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gc2V0Um9vdChkb20sIGlucHV0LCBsaWZlY3ljbGUpIHtcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBkb20sXG4gICAgICAgIGlucHV0LFxuICAgICAgICBsaWZlY3ljbGVcbiAgICB9O1xuICAgIHJvb3RzLnB1c2gocm9vdCk7XG4gICAgcmV0dXJuIHJvb3Q7XG59XG5mdW5jdGlvbiByZW1vdmVSb290KHJvb3QpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcm9vdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHJvb3RzW2ldID09PSByb290KSB7XG4gICAgICAgICAgICByb290cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgZG9jdW1lbnQuYm9keSA9PT0gbnVsbCkge1xuICAgICAgICB3YXJuaW5nKCdJbmZlcm5vIHdhcm5pbmc6IHlvdSBjYW5ub3QgaW5pdGlhbGl6ZSBpbmZlcm5vIHdpdGhvdXQgXCJkb2N1bWVudC5ib2R5XCIuIFdhaXQgb24gXCJET01Db250ZW50TG9hZGVkXCIgZXZlbnQsIGFkZCBzY3JpcHQgdG8gYm90dG9tIG9mIGJvZHksIG9yIHVzZSBhc3luYy9kZWZlciBhdHRyaWJ1dGVzIG9uIHNjcmlwdCB0YWcuJyk7XG4gICAgfVxufVxuY29uc3QgZG9jdW1lbnRCb2R5ID0gaXNCcm93c2VyID8gZG9jdW1lbnQuYm9keSA6IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGlucHV0LCBwYXJlbnREb20pIHtcbiAgICBpZiAoZG9jdW1lbnRCb2R5ID09PSBwYXJlbnREb20pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ3lvdSBjYW5ub3QgcmVuZGVyKCkgdG8gdGhlIFwiZG9jdW1lbnQuYm9keVwiLiBVc2UgYW4gZW1wdHkgZWxlbWVudCBhcyBhIGNvbnRhaW5lciBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG4gICAgaWYgKGlucHV0ID09PSBOT19PUCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCByb290ID0gZ2V0Um9vdChwYXJlbnREb20pO1xuICAgIGlmIChpc051bGwocm9vdCkpIHtcbiAgICAgICAgY29uc3QgbGlmZWN5Y2xlID0gbmV3IExpZmVjeWNsZSgpO1xuICAgICAgICBpZiAoIWlzSW52YWxpZChpbnB1dCkpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5kb20pIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGNsb25lVk5vZGUoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFoeWRyYXRlUm9vdChpbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUpKSB7XG4gICAgICAgICAgICAgICAgbW91bnQoaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBFTVBUWV9PQkosIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvb3QgPSBzZXRSb290KHBhcmVudERvbSwgaW5wdXQsIGxpZmVjeWNsZSk7XG4gICAgICAgICAgICBsaWZlY3ljbGUudHJpZ2dlcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBsaWZlY3ljbGUgPSByb290LmxpZmVjeWNsZTtcbiAgICAgICAgbGlmZWN5Y2xlLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihpbnB1dCkpIHtcbiAgICAgICAgICAgIHVubW91bnQocm9vdC5pbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICByZW1vdmVSb290KHJvb3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlucHV0LmRvbSkge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gY2xvbmVWTm9kZShpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRjaChyb290LmlucHV0LCBpbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIEVNUFRZX09CSiwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBsaWZlY3ljbGUudHJpZ2dlcigpO1xuICAgICAgICByb290LmlucHV0ID0gaW5wdXQ7XG4gICAgfVxuICAgIGlmIChyb290KSB7XG4gICAgICAgIGNvbnN0IHJvb3RJbnB1dCA9IHJvb3QuaW5wdXQ7XG4gICAgICAgIGlmIChyb290SW5wdXQgJiYgKHJvb3RJbnB1dC5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykpIHtcbiAgICAgICAgICAgIHJldHVybiByb290SW5wdXQuY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVuZGVyZXIocGFyZW50RG9tKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlbmRlcmVyKGxhc3RJbnB1dCwgbmV4dElucHV0KSB7XG4gICAgICAgIGlmICghcGFyZW50RG9tKSB7XG4gICAgICAgICAgICBwYXJlbnREb20gPSBsYXN0SW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKG5leHRJbnB1dCwgcGFyZW50RG9tKTtcbiAgICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3JlbmRlcmluZy5qcyIsImltcG9ydCB7IHByb2Nlc3NJbnB1dCB9IGZyb20gJy4vSW5wdXRXcmFwcGVyJztcbmltcG9ydCB7IHByb2Nlc3NTZWxlY3QgfSBmcm9tICcuL1NlbGVjdFdyYXBwZXInO1xuaW1wb3J0IHsgcHJvY2Vzc1RleHRhcmVhIH0gZnJvbSAnLi9UZXh0YXJlYVdyYXBwZXInO1xuZXhwb3J0IGNvbnN0IHdyYXBwZXJzID0gbmV3IE1hcCgpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvY2Vzc0VsZW1lbnQoZmxhZ3MsIHZOb2RlLCBkb20sIG1vdW50aW5nKSB7XG4gICAgaWYgKGZsYWdzICYgNTEyIC8qIElucHV0RWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gcHJvY2Vzc0lucHV0KHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBpZiAoZmxhZ3MgJiAyMDQ4IC8qIFNlbGVjdEVsZW1lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NTZWxlY3Qodk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGlmIChmbGFncyAmIDEwMjQgLyogVGV4dGFyZWFFbGVtZW50ICovKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzVGV4dGFyZWEodk5vZGUsIGRvbSwgbW91bnRpbmcpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vd3JhcHBlcnMvcHJvY2Vzc0VsZW1lbnQuanMiLCJmdW5jdGlvbiBjb25zdHJ1Y3REZWZhdWx0cyhzdHJpbmcsIG9iamVjdCwgdmFsdWUpIHtcbiAgICAvKiBlc2xpbnQgbm8tcmV0dXJuLWFzc2lnbjogMCAqL1xuICAgIGNvbnN0IGFycmF5ID0gc3RyaW5nLnNwbGl0KCcsJyk7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIG9iamVjdFthcnJheVtpXV0gPSB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgeGxpbmtOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJztcbmV4cG9ydCBjb25zdCB4bWxOUyA9ICdodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2UnO1xuZXhwb3J0IGNvbnN0IHN2Z05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmV4cG9ydCBjb25zdCBzdHJpY3RQcm9wcyA9IHt9O1xuZXhwb3J0IGNvbnN0IGJvb2xlYW5Qcm9wcyA9IHt9O1xuZXhwb3J0IGNvbnN0IG5hbWVzcGFjZXMgPSB7fTtcbmV4cG9ydCBjb25zdCBpc1VuaXRsZXNzTnVtYmVyID0ge307XG5leHBvcnQgY29uc3Qgc2tpcFByb3BzID0ge307XG5leHBvcnQgY29uc3QgZGVsZWdhdGVkUHJvcHMgPSB7fTtcbmNvbnN0cnVjdERlZmF1bHRzKCd4bGluazpocmVmLHhsaW5rOmFyY3JvbGUseGxpbms6YWN0dWF0ZSx4bGluazpyb2xlLHhsaW5rOnRpdGxlZix4bGluazp0eXBlJywgbmFtZXNwYWNlcywgeGxpbmtOUyk7XG5jb25zdHJ1Y3REZWZhdWx0cygneG1sOmJhc2UseG1sOmxhbmcseG1sOnNwYWNlJywgbmFtZXNwYWNlcywgeG1sTlMpO1xuY29uc3RydWN0RGVmYXVsdHMoJ3ZvbHVtZSxkZWZhdWx0Q2hlY2tlZCcsIHN0cmljdFByb3BzLCB0cnVlKTtcbmNvbnN0cnVjdERlZmF1bHRzKCdjaGlsZHJlbixjaGlsZHJlblR5cGUsZGVmYXVsdFZhbHVlLHJlZixrZXksc2VsZWN0ZWQsY2hlY2tlZCxtdWx0aXBsZScsIHNraXBQcm9wcywgdHJ1ZSk7XG5jb25zdHJ1Y3REZWZhdWx0cygnb25DbGljayxvbk1vdXNlRG93bixvbk1vdXNlVXAsb25Nb3VzZU1vdmUsb25TdWJtaXQsb25EYmxDbGljayxvbktleURvd24sb25LZXlVcCxvbktleVByZXNzJywgZGVsZWdhdGVkUHJvcHMsIHRydWUpO1xuY29uc3RydWN0RGVmYXVsdHMoJ211dGVkLHNjb3BlZCxsb29wLG9wZW4sY2hlY2tlZCxkZWZhdWx0LGNhcHR1cmUsZGlzYWJsZWQscmVhZE9ubHkscmVxdWlyZWQsYXV0b3BsYXksY29udHJvbHMsc2VhbWxlc3MscmV2ZXJzZWQsYWxsb3dmdWxsc2NyZWVuLG5vdmFsaWRhdGUsaGlkZGVuJywgYm9vbGVhblByb3BzLCB0cnVlKTtcbmNvbnN0cnVjdERlZmF1bHRzKCdhbmltYXRpb25JdGVyYXRpb25Db3VudCxib3JkZXJJbWFnZU91dHNldCxib3JkZXJJbWFnZVNsaWNlLGJvcmRlckltYWdlV2lkdGgsYm94RmxleCxib3hGbGV4R3JvdXAsYm94T3JkaW5hbEdyb3VwLGNvbHVtbkNvdW50LGZsZXgsZmxleEdyb3csZmxleFBvc2l0aXZlLGZsZXhTaHJpbmssZmxleE5lZ2F0aXZlLGZsZXhPcmRlcixncmlkUm93LGdyaWRDb2x1bW4sZm9udFdlaWdodCxsaW5lQ2xhbXAsbGluZUhlaWdodCxvcGFjaXR5LG9yZGVyLG9ycGhhbnMsdGFiU2l6ZSx3aWRvd3MsekluZGV4LHpvb20sZmlsbE9wYWNpdHksZmxvb2RPcGFjaXR5LHN0b3BPcGFjaXR5LHN0cm9rZURhc2hhcnJheSxzdHJva2VEYXNob2Zmc2V0LHN0cm9rZU1pdGVybGltaXQsc3Ryb2tlT3BhY2l0eSxzdHJva2VXaWR0aCwnLCBpc1VuaXRsZXNzTnVtYmVyLCB0cnVlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS9jb25zdGFudHMuanMiLCJpbXBvcnQgeyBjb3B5UHJvcHNUbywgaXNBcnJheSwgaXNGdW5jdGlvbiwgaXNJbnZhbGlkLCBpc051bGwsIGlzTnVsbE9yVW5kZWYsIGlzT2JqZWN0LCBpc1N0cmluZ09yTnVtYmVyLCBpc1VuZGVmaW5lZCwgdGhyb3dFcnJvciB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL2NvcmUvb3B0aW9ucyc7XG5pbXBvcnQgeyBjbG9uZVZOb2RlLCBpc1ZOb2RlIH0gZnJvbSAnLi4vY29yZS9WTm9kZXMnO1xuaW1wb3J0IHsgcGF0Y2hFdmVudCwgcGF0Y2hQcm9wIH0gZnJvbSAnLi9wYXRjaGluZyc7XG5pbXBvcnQgeyByZWN5Y2xlQ29tcG9uZW50LCByZWN5Y2xlRWxlbWVudCB9IGZyb20gJy4vcmVjeWNsaW5nJztcbmltcG9ydCB7IGNvbXBvbmVudFRvRE9NTm9kZU1hcCB9IGZyb20gJy4vcmVuZGVyaW5nJztcbmltcG9ydCB7IGFwcGVuZENoaWxkLCBjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlLCBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQsIGRvY3VtZW50Q3JlYXRlRWxlbWVudCwgc2V0VGV4dENvbnRlbnQsIEVNUFRZX09CSiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHByb2Nlc3NFbGVtZW50IGZyb20gJy4vd3JhcHBlcnMvcHJvY2Vzc0VsZW1lbnQnO1xuZXhwb3J0IGZ1bmN0aW9uIG1vdW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICBjb25zdCBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gbW91bnRFbGVtZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICByZXR1cm4gbW91bnRDb21wb25lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgZmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50Vm9pZCh2Tm9kZSwgcGFyZW50RG9tKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50VGV4dCh2Tm9kZSwgcGFyZW50RG9tKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZOb2RlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoYG1vdW50KCkgcmVjZWl2ZWQgYW4gb2JqZWN0IHRoYXQncyBub3QgYSB2YWxpZCBWTm9kZSwgeW91IHNob3VsZCBzdHJpbmdpZnkgaXQgZmlyc3QuIE9iamVjdDogXCIke0pTT04uc3RyaW5naWZ5KHZOb2RlKX1cIi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoYG1vdW50KCkgZXhwZWN0cyBhIHZhbGlkIFZOb2RlLCBpbnN0ZWFkIGl0IHJlY2VpdmVkIGFuIG9iamVjdCB3aXRoIHRoZSB0eXBlIFwiJHt0eXBlb2Ygdk5vZGV9XCIuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtb3VudFRleHQodk5vZGUsIHBhcmVudERvbSkge1xuICAgIGNvbnN0IGRvbSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZOb2RlLmNoaWxkcmVuKTtcbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgaWYgKHBhcmVudERvbSkge1xuICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIHJldHVybiBkb207XG59XG5leHBvcnQgZnVuY3Rpb24gbW91bnRWb2lkKHZOb2RlLCBwYXJlbnREb20pIHtcbiAgICBjb25zdCBkb20gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50RWxlbWVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgaWYgKG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCkge1xuICAgICAgICBjb25zdCBkb20gPSByZWN5Y2xlRWxlbWVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGlmICghaXNOdWxsKGRvbSkpIHtcbiAgICAgICAgICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZG9tO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRhZyA9IHZOb2RlLnR5cGU7XG4gICAgY29uc3QgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBpZiAoaXNTVkcgfHwgKGZsYWdzICYgMTI4IC8qIFN2Z0VsZW1lbnQgKi8pKSB7XG4gICAgICAgIGlzU1ZHID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgZG9tID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KHRhZywgaXNTVkcpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgY29uc3QgcHJvcHMgPSB2Tm9kZS5wcm9wcztcbiAgICBjb25zdCBldmVudHMgPSB2Tm9kZS5ldmVudHM7XG4gICAgY29uc3QgcmVmID0gdk5vZGUucmVmO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAoIWlzTnVsbChjaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudChkb20sIGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgbW91bnRBcnJheUNoaWxkcmVuKGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBtb3VudChjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaGFzQ29udHJvbGxlZFZhbHVlID0gZmFsc2U7XG4gICAgaWYgKCEoZmxhZ3MgJiAyIC8qIEh0bWxFbGVtZW50ICovKSkge1xuICAgICAgICBoYXNDb250cm9sbGVkVmFsdWUgPSBwcm9jZXNzRWxlbWVudChmbGFncywgdk5vZGUsIGRvbSwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmICghaXNOdWxsKHByb3BzKSkge1xuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgcGF0Y2hQcm9wKHByb3AsIG51bGwsIHByb3BzW3Byb3BdLCBkb20sIGlzU1ZHLCBoYXNDb250cm9sbGVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXNOdWxsKGV2ZW50cykpIHtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUsIG51bGwsIGV2ZW50c1tuYW1lXSwgZG9tKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzTnVsbChyZWYpKSB7XG4gICAgICAgIG1vdW50UmVmKGRvbSwgcmVmLCBsaWZlY3ljbGUpO1xuICAgIH1cbiAgICBpZiAoIWlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtb3VudEFycmF5Q2hpbGRyZW4oY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgLy8gVE9ETzogVmVyaWZ5IGNhbiBzdHJpbmcvbnVtYmVyIGJlIGhlcmUuIG1pZ2h0IGNhdXNlIGRlLW9wdFxuICAgICAgICBpZiAoIWlzSW52YWxpZChjaGlsZCkpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5kb20pIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbltpXSA9IGNoaWxkID0gY2xvbmVWTm9kZShjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb3VudChjaGlsZHJlbltpXSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc0NsYXNzKSB7XG4gICAgaWYgKG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCkge1xuICAgICAgICBjb25zdCBkb20gPSByZWN5Y2xlQ29tcG9uZW50KHZOb2RlLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgaWYgKCFpc051bGwoZG9tKSkge1xuICAgICAgICAgICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb207XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgY29uc3QgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgbGV0IHByb3BzO1xuICAgIGlmICghaXNVbmRlZmluZWQoZGVmYXVsdFByb3BzKSkge1xuICAgICAgICAvLyBXaGVuIGRlZmF1bHRQcm9wcyBhcmUgdXNlZCB3ZSBuZWVkIHRvIGNyZWF0ZSBuZXcgT2JqZWN0XG4gICAgICAgIHByb3BzID0gdk5vZGUucHJvcHMgfHwge307XG4gICAgICAgIGNvcHlQcm9wc1RvKGRlZmF1bHRQcm9wcywgcHJvcHMpO1xuICAgICAgICB2Tm9kZS5wcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgfVxuICAgIGNvbnN0IHJlZiA9IHZOb2RlLnJlZjtcbiAgICBsZXQgZG9tO1xuICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gY3JlYXRlQ2xhc3NDb21wb25lbnRJbnN0YW5jZSh2Tm9kZSwgdHlwZSwgcHJvcHMsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBpbnN0YW5jZS5fbGFzdElucHV0O1xuICAgICAgICBpbnN0YW5jZS5fdk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgdk5vZGUuZG9tID0gZG9tID0gbW91bnQoaW5wdXQsIG51bGwsIGxpZmVjeWNsZSwgaW5zdGFuY2UuX2NoaWxkQ29udGV4dCwgaXNTVkcpO1xuICAgICAgICBpZiAoIWlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgbW91bnRDbGFzc0NvbXBvbmVudENhbGxiYWNrcyh2Tm9kZSwgcmVmLCBpbnN0YW5jZSwgbGlmZWN5Y2xlKTtcbiAgICAgICAgb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLnNldChpbnN0YW5jZSwgZG9tKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0KHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCk7XG4gICAgICAgIHZOb2RlLmRvbSA9IGRvbSA9IG1vdW50KGlucHV0LCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnB1dDtcbiAgICAgICAgbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzKHJlZiwgZG9tLCBsaWZlY3ljbGUpO1xuICAgICAgICBpZiAoIWlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtb3VudENsYXNzQ29tcG9uZW50Q2FsbGJhY2tzKHZOb2RlLCByZWYsIGluc3RhbmNlLCBsaWZlY3ljbGUpIHtcbiAgICBpZiAocmVmKSB7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHJlZikpIHtcbiAgICAgICAgICAgIHJlZihpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZ09yTnVtYmVyKHJlZikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcignc3RyaW5nIFwicmVmc1wiIGFyZSBub3Qgc3VwcG9ydGVkIGluIEluZmVybm8gMS4wLiBVc2UgY2FsbGJhY2sgXCJyZWZzXCIgaW5zdGVhZC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNPYmplY3QocmVmKSAmJiAodk5vZGUuZmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdmdW5jdGlvbmFsIGNvbXBvbmVudCBsaWZlY3ljbGUgZXZlbnRzIGFyZSBub3Qgc3VwcG9ydGVkIG9uIEVTMjAxNSBjbGFzcyBjb21wb25lbnRzLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcihgYSBiYWQgdmFsdWUgZm9yIFwicmVmXCIgd2FzIHVzZWQgb24gY29tcG9uZW50OiBcIiR7SlNPTi5zdHJpbmdpZnkocmVmKX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjRE0gPSBpbnN0YW5jZS5jb21wb25lbnREaWRNb3VudDtcbiAgICBjb25zdCBhZnRlck1vdW50ID0gb3B0aW9ucy5hZnRlck1vdW50O1xuICAgIGlmICghaXNVbmRlZmluZWQoY0RNKSB8fCAhaXNOdWxsKGFmdGVyTW91bnQpKSB7XG4gICAgICAgIGxpZmVjeWNsZS5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICBhZnRlck1vdW50ICYmIGFmdGVyTW91bnQodk5vZGUpO1xuICAgICAgICAgICAgY0RNICYmIGluc3RhbmNlLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgICAgICAgICBpbnN0YW5jZS5fc3luY1NldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpbnN0YW5jZS5fc3luY1NldFN0YXRlID0gdHJ1ZTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzKHJlZiwgZG9tLCBsaWZlY3ljbGUpIHtcbiAgICBpZiAocmVmKSB7XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihyZWYub25Db21wb25lbnRXaWxsTW91bnQpKSB7XG4gICAgICAgICAgICByZWYub25Db21wb25lbnRXaWxsTW91bnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYocmVmLm9uQ29tcG9uZW50RGlkTW91bnQpKSB7XG4gICAgICAgICAgICBsaWZlY3ljbGUuYWRkTGlzdGVuZXIoKCkgPT4gcmVmLm9uQ29tcG9uZW50RGlkTW91bnQoZG9tKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbW91bnRSZWYoZG9tLCB2YWx1ZSwgbGlmZWN5Y2xlKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgIGxpZmVjeWNsZS5hZGRMaXN0ZW5lcigoKSA9PiB2YWx1ZShkb20pKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpc0ludmFsaWQodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ3N0cmluZyBcInJlZnNcIiBhcmUgbm90IHN1cHBvcnRlZCBpbiBJbmZlcm5vIDEuMC4gVXNlIGNhbGxiYWNrIFwicmVmc1wiIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS9tb3VudGluZy5qcyIsImltcG9ydCB7IGlzQXJyYXksIGlzRnVuY3Rpb24sIGlzSW52YWxpZCwgaXNOdWxsLCBpc051bGxPclVuZGVmLCBpc09iamVjdCwgdGhyb3dFcnJvciB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL2NvcmUvb3B0aW9ucyc7XG5pbXBvcnQgeyBwYXRjaEV2ZW50IH0gZnJvbSAnLi9wYXRjaGluZyc7XG5pbXBvcnQgeyBwb29sQ29tcG9uZW50LCBwb29sRWxlbWVudCB9IGZyb20gJy4vcmVjeWNsaW5nJztcbmltcG9ydCB7IGNvbXBvbmVudFRvRE9NTm9kZU1hcCB9IGZyb20gJy4vcmVuZGVyaW5nJztcbmltcG9ydCB7IHJlbW92ZUNoaWxkIH0gZnJvbSAnLi91dGlscyc7XG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgY29uc3QgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBpZiAoZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgdW5tb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgdW5tb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgKDEgLyogVGV4dCAqLyB8IDQwOTYgLyogVm9pZCAqLykpIHtcbiAgICAgICAgdW5tb3VudFZvaWRPclRleHQodk5vZGUsIHBhcmVudERvbSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudFZvaWRPclRleHQodk5vZGUsIHBhcmVudERvbSkge1xuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgcmVtb3ZlQ2hpbGQocGFyZW50RG9tLCB2Tm9kZS5kb20pO1xuICAgIH1cbn1cbmNvbnN0IGFscmVhZHlVbm1vdW50ZWQgPSBuZXcgV2Vha01hcCgpO1xuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRDb21wb25lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIGNvbnN0IGluc3RhbmNlID0gdk5vZGUuY2hpbGRyZW47XG4gICAgY29uc3QgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBjb25zdCBpc1N0YXRlZnVsQ29tcG9uZW50ID0gZmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovO1xuICAgIGNvbnN0IHJlZiA9IHZOb2RlLnJlZjtcbiAgICBjb25zdCBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGFscmVhZHlVbm1vdW50ZWQuaGFzKHZOb2RlKSAmJiAhaXNSZWN5Y2xpbmcgJiYgIXBhcmVudERvbSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFscmVhZHlVbm1vdW50ZWQuc2V0KHZOb2RlLCB0cnVlKTtcbiAgICBpZiAoIWlzUmVjeWNsaW5nKSB7XG4gICAgICAgIGlmIChpc1N0YXRlZnVsQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlLl91bm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5faWdub3JlU2V0U3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuYmVmb3JlVW5tb3VudCAmJiBvcHRpb25zLmJlZm9yZVVubW91bnQodk5vZGUpO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNvbXBvbmVudFdpbGxVbm1vdW50ICYmIGluc3RhbmNlLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlZiAmJiAhaXNSZWN5Y2xpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fdW5tb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCAmJiBjb21wb25lbnRUb0RPTU5vZGVNYXAuZGVsZXRlKGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJMaWZlY3ljbGUgPSBpbnN0YW5jZS5fbGlmZWN5Y2xlO1xuICAgICAgICAgICAgICAgIHVubW91bnQoaW5zdGFuY2UuX2xhc3RJbnB1dCwgbnVsbCwgc3ViTGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHJlZikpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYocmVmLm9uQ29tcG9uZW50V2lsbFVubW91bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZi5vbkNvbXBvbmVudFdpbGxVbm1vdW50KGRvbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdW5tb3VudChpbnN0YW5jZSwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgbGV0IGxhc3RJbnB1dCA9IGluc3RhbmNlLl9sYXN0SW5wdXQ7XG4gICAgICAgIGlmIChpc051bGxPclVuZGVmKGxhc3RJbnB1dCkpIHtcbiAgICAgICAgICAgIGxhc3RJbnB1dCA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZUNoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCAmJiAhaXNTdGF0ZWZ1bENvbXBvbmVudCAmJiAocGFyZW50RG9tIHx8IGNhblJlY3ljbGUpKSB7XG4gICAgICAgIHBvb2xDb21wb25lbnQodk5vZGUpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50RWxlbWVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgY29uc3QgZG9tID0gdk5vZGUuZG9tO1xuICAgIGNvbnN0IHJlZiA9IHZOb2RlLnJlZjtcbiAgICBjb25zdCBldmVudHMgPSB2Tm9kZS5ldmVudHM7XG4gICAgaWYgKGFscmVhZHlVbm1vdW50ZWQuaGFzKHZOb2RlKSAmJiAhaXNSZWN5Y2xpbmcgJiYgIXBhcmVudERvbSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFscmVhZHlVbm1vdW50ZWQuc2V0KHZOb2RlLCB0cnVlKTtcbiAgICBpZiAocmVmICYmICFpc1JlY3ljbGluZykge1xuICAgICAgICB1bm1vdW50UmVmKHJlZik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgaWYgKCFpc051bGxPclVuZGVmKGNoaWxkcmVuKSkge1xuICAgICAgICB1bm1vdW50Q2hpbGRyZW4oY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBpZiAoIWlzTnVsbChldmVudHMpKSB7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lLCBldmVudHNbbmFtZV0sIG51bGwsIGRvbSk7XG4gICAgICAgICAgICBldmVudHNbbmFtZV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgcmVtb3ZlQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkICYmIChwYXJlbnREb20gfHwgY2FuUmVjeWNsZSkpIHtcbiAgICAgICAgcG9vbEVsZW1lbnQodk5vZGUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHVubW91bnRDaGlsZHJlbihjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoIWlzSW52YWxpZChjaGlsZCkgJiYgaXNPYmplY3QoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgdW5tb3VudChjaGlsZCwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KGNoaWxkcmVuKSkge1xuICAgICAgICB1bm1vdW50KGNoaWxkcmVuLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudFJlZihyZWYpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihyZWYpKSB7XG4gICAgICAgIHJlZihudWxsKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpc0ludmFsaWQocmVmKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCdzdHJpbmcgXCJyZWZzXCIgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gSW5mZXJubyAxLjAuIFVzZSBjYWxsYmFjayBcInJlZnNcIiBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vdW5tb3VudGluZy5qcyIsImltcG9ydCAqIGFzIFNldHRpbmdzIGZyb20gXCIuLi9Mb2dpYy9TZXR0aW5nc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQWRkaXRpb25hbFNldHRpbmdzKHN0YXRlKSB7XG4gIC8vIERlZmluZSBvdXIgZGVmYXVsdHNcbiAgbGV0IGRlZmF1bHRzID0ge1xuICAgIFwiZGlzdHJvXCI6IFwiYXJjaGxpbnV4XCIsXG5cbiAgICBcImF2YXRhcl9lbmFibGVkXCI6IHRydWUsXG4gICAgXCJhdmF0YXJfc2l6ZVwiOiBcIjIwMHB4XCIsXG4gICAgXCJhdmF0YXJfc2hhcGVcIjogXCJjaXJjbGVcIixcblxuICAgIFwiZm9udF9kcGlcIjogMS4wLFxuICAgIFwiZm9udF9jb2xvclwiOiBcIiMyMjIyMjJcIixcbiAgICBcImZvbnRfZmFtaWx5XCI6IFwiT3BlbiBTYW5zXCIsXG4gICAgXCJmb250X3NjYWxlXCI6IDEuMCxcblxuICAgIFwiZGF0ZV9lbmFibGVkXCI6IHRydWUsXG4gICAgXCJkYXRlX2Zvcm1hdFwiOiBcIiVBLCB0aGUgJW8gb2YgJUJcIlxuICB9O1xuXG4gIGxldCBzZXR0aW5ncyA9IHt9O1xuXG4gIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhkZWZhdWx0cykpIHtcbiAgICBzZXR0aW5nc1trZXldID0gU2V0dGluZ3MucmVxdWVzdFNldHRpbmcoa2V5LCBkZWZhdWx0c1trZXldKTtcbiAgfVxuXG4gIHJldHVybiB7IC4uLnN0YXRlLCBcInNldHRpbmdzXCI6IHNldHRpbmdzIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L1JlZHVjZXJzL1NldHRpbmdzUmVkdWNlci5qcyIsImltcG9ydCB7IGlzTnVsbCwgaXNVbmRlZmluZWQgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgeyBwYXRjaENvbXBvbmVudCwgcGF0Y2hFbGVtZW50IH0gZnJvbSAnLi9wYXRjaGluZyc7XG5jb25zdCBjb21wb25lbnRQb29scyA9IG5ldyBNYXAoKTtcbmNvbnN0IGVsZW1lbnRQb29scyA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiByZWN5Y2xlRWxlbWVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGNvbnN0IHRhZyA9IHZOb2RlLnR5cGU7XG4gICAgY29uc3Qga2V5ID0gdk5vZGUua2V5O1xuICAgIGNvbnN0IHBvb2xzID0gZWxlbWVudFBvb2xzLmdldCh0YWcpO1xuICAgIGlmICghaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIGNvbnN0IHBvb2wgPSBrZXkgPT09IG51bGwgPyBwb29scy5ub25LZXllZCA6IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHBvb2wpKSB7XG4gICAgICAgICAgICBjb25zdCByZWN5Y2xlZFZOb2RlID0gcG9vbC5wb3AoKTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQocmVjeWNsZWRWTm9kZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRjaEVsZW1lbnQocmVjeWNsZWRWTm9kZSwgdk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2Tm9kZS5kb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gcG9vbEVsZW1lbnQodk5vZGUpIHtcbiAgICBjb25zdCB0YWcgPSB2Tm9kZS50eXBlO1xuICAgIGNvbnN0IGtleSA9IHZOb2RlLmtleTtcbiAgICBsZXQgcG9vbHMgPSBlbGVtZW50UG9vbHMuZ2V0KHRhZyk7XG4gICAgaWYgKGlzVW5kZWZpbmVkKHBvb2xzKSkge1xuICAgICAgICBwb29scyA9IHtcbiAgICAgICAgICAgIG5vbktleWVkOiBbXSxcbiAgICAgICAgICAgIGtleWVkOiBuZXcgTWFwKClcbiAgICAgICAgfTtcbiAgICAgICAgZWxlbWVudFBvb2xzLnNldCh0YWcsIHBvb2xzKTtcbiAgICB9XG4gICAgaWYgKGlzTnVsbChrZXkpKSB7XG4gICAgICAgIHBvb2xzLm5vbktleWVkLnB1c2godk5vZGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IHBvb2wgPSBwb29scy5rZXllZC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHBvb2wpKSB7XG4gICAgICAgICAgICBwb29sID0gW107XG4gICAgICAgICAgICBwb29scy5rZXllZC5zZXQoa2V5LCBwb29sKTtcbiAgICAgICAgfVxuICAgICAgICBwb29sLnB1c2godk5vZGUpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiByZWN5Y2xlQ29tcG9uZW50KHZOb2RlLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgY29uc3QgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgY29uc3Qga2V5ID0gdk5vZGUua2V5O1xuICAgIGNvbnN0IHBvb2xzID0gY29tcG9uZW50UG9vbHMuZ2V0KHR5cGUpO1xuICAgIGlmICghaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIGNvbnN0IHBvb2wgPSBrZXkgPT09IG51bGwgPyBwb29scy5ub25LZXllZCA6IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHBvb2wpKSB7XG4gICAgICAgICAgICBjb25zdCByZWN5Y2xlZFZOb2RlID0gcG9vbC5wb3AoKTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQocmVjeWNsZWRWTm9kZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZhaWxlZCA9IHBhdGNoQ29tcG9uZW50KHJlY3ljbGVkVk5vZGUsIHZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBmbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8sIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmICghZmFpbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2Tm9kZS5kb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvb2xDb21wb25lbnQodk5vZGUpIHtcbiAgICBjb25zdCB0eXBlID0gdk5vZGUudHlwZTtcbiAgICBjb25zdCBrZXkgPSB2Tm9kZS5rZXk7XG4gICAgY29uc3QgaG9va3MgPSB2Tm9kZS5yZWY7XG4gICAgY29uc3Qgbm9uUmVjeWNsZUhvb2tzID0gaG9va3MgJiYgKGhvb2tzLm9uQ29tcG9uZW50V2lsbE1vdW50IHx8XG4gICAgICAgIGhvb2tzLm9uQ29tcG9uZW50V2lsbFVubW91bnQgfHxcbiAgICAgICAgaG9va3Mub25Db21wb25lbnREaWRNb3VudCB8fFxuICAgICAgICBob29rcy5vbkNvbXBvbmVudFdpbGxVcGRhdGUgfHxcbiAgICAgICAgaG9va3Mub25Db21wb25lbnREaWRVcGRhdGUpO1xuICAgIGlmIChub25SZWN5Y2xlSG9va3MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcG9vbHMgPSBjb21wb25lbnRQb29scy5nZXQodHlwZSk7XG4gICAgaWYgKGlzVW5kZWZpbmVkKHBvb2xzKSkge1xuICAgICAgICBwb29scyA9IHtcbiAgICAgICAgICAgIG5vbktleWVkOiBbXSxcbiAgICAgICAgICAgIGtleWVkOiBuZXcgTWFwKClcbiAgICAgICAgfTtcbiAgICAgICAgY29tcG9uZW50UG9vbHMuc2V0KHR5cGUsIHBvb2xzKTtcbiAgICB9XG4gICAgaWYgKGlzTnVsbChrZXkpKSB7XG4gICAgICAgIHBvb2xzLm5vbktleWVkLnB1c2godk5vZGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IHBvb2wgPSBwb29scy5rZXllZC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHBvb2wpKSB7XG4gICAgICAgICAgICBwb29sID0gW107XG4gICAgICAgICAgICBwb29scy5rZXllZC5zZXQoa2V5LCBwb29sKTtcbiAgICAgICAgfVxuICAgICAgICBwb29sLnB1c2godk5vZGUpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS9yZWN5Y2xpbmcuanMiLCJpbXBvcnQgeyBpc0FycmF5LCBpc0ludmFsaWQsIGlzTnVsbCwgaXNOdWxsT3JVbmRlZiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1N0cmluZ09yTnVtYmVyLCB3YXJuaW5nIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuaW1wb3J0IHsgY2xvbmVWTm9kZSwgY3JlYXRlVGV4dFZOb2RlLCBpc1ZOb2RlIH0gZnJvbSAnLi9WTm9kZXMnO1xuZnVuY3Rpb24gYXBwbHlLZXkoa2V5LCB2Tm9kZSkge1xuICAgIHZOb2RlLmtleSA9IGtleTtcbiAgICByZXR1cm4gdk5vZGU7XG59XG5mdW5jdGlvbiBhcHBseUtleUlmTWlzc2luZyhrZXksIHZOb2RlKSB7XG4gICAgaWYgKGlzTnVtYmVyKGtleSkpIHtcbiAgICAgICAga2V5ID0gYC4ke2tleX1gO1xuICAgIH1cbiAgICBpZiAoaXNOdWxsKHZOb2RlLmtleSkgfHwgdk5vZGUua2V5WzBdID09PSAnLicpIHtcbiAgICAgICAgcmV0dXJuIGFwcGx5S2V5KGtleSwgdk5vZGUpO1xuICAgIH1cbiAgICByZXR1cm4gdk5vZGU7XG59XG5mdW5jdGlvbiBhcHBseUtleVByZWZpeChrZXksIHZOb2RlKSB7XG4gICAgdk5vZGUua2V5ID0ga2V5ICsgdk5vZGUua2V5O1xuICAgIHJldHVybiB2Tm9kZTtcbn1cbmZ1bmN0aW9uIF9ub3JtYWxpemVWTm9kZXMobm9kZXMsIHJlc3VsdCwgaW5kZXgsIGN1cnJlbnRLZXkpIHtcbiAgICBmb3IgKGxldCBsZW4gPSBub2Rlcy5sZW5ndGg7IGluZGV4IDwgbGVuOyBpbmRleCsrKSB7XG4gICAgICAgIGxldCBuID0gbm9kZXNbaW5kZXhdO1xuICAgICAgICBjb25zdCBrZXkgPSBgJHtjdXJyZW50S2V5fS4ke2luZGV4fWA7XG4gICAgICAgIGlmICghaXNJbnZhbGlkKG4pKSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheShuKSkge1xuICAgICAgICAgICAgICAgIF9ub3JtYWxpemVWTm9kZXMobiwgcmVzdWx0LCAwLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIobikpIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGNyZWF0ZVRleHRWTm9kZShuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNWTm9kZShuKSAmJiBuLmRvbSB8fCAobi5rZXkgJiYgbi5rZXlbMF0gPT09ICcuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGNsb25lVk5vZGUobik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc051bGwobi5rZXkpIHx8IG4ua2V5WzBdID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGFwcGx5S2V5KGtleSwgbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuID0gYXBwbHlLZXlQcmVmaXgoY3VycmVudEtleSwgbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVZOb2Rlcyhub2Rlcykge1xuICAgIGxldCBuZXdOb2RlcztcbiAgICAvLyB3ZSBhc3NpZ24gJCB3aGljaCBiYXNpY2FsbHkgbWVhbnMgd2UndmUgZmxhZ2dlZCB0aGlzIGFycmF5IGZvciBmdXR1cmUgbm90ZVxuICAgIC8vIGlmIGl0IGNvbWVzIGJhY2sgYWdhaW4sIHdlIG5lZWQgdG8gY2xvbmUgaXQsIGFzIHBlb3BsZSBhcmUgdXNpbmcgaXRcbiAgICAvLyBpbiBhbiBpbW11dGFibGUgd2F5XG4gICAgLy8gdHNsaW50OmRpc2FibGVcbiAgICBpZiAobm9kZXNbJyQnXSkge1xuICAgICAgICBub2RlcyA9IG5vZGVzLnNsaWNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBub2Rlc1snJCddID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gdHNsaW50OmVuYWJsZVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBub2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBuID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChpc0ludmFsaWQobikgfHwgaXNBcnJheShuKSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gKG5ld05vZGVzIHx8IG5vZGVzKS5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIF9ub3JtYWxpemVWTm9kZXMobm9kZXMsIHJlc3VsdCwgaSwgYGApO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG4pKSB7XG4gICAgICAgICAgICBpZiAoIW5ld05vZGVzKSB7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZXMgPSBub2Rlcy5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld05vZGVzLnB1c2goYXBwbHlLZXlJZk1pc3NpbmcoaSwgY3JlYXRlVGV4dFZOb2RlKG4pKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKGlzVk5vZGUobikgJiYgbi5kb20pIHx8IChpc051bGwobi5rZXkpICYmICEobi5mbGFncyAmIDY0IC8qIEhhc05vbktleWVkQ2hpbGRyZW4gKi8pKSkge1xuICAgICAgICAgICAgaWYgKCFuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIG5ld05vZGVzID0gbm9kZXMuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdOb2Rlcy5wdXNoKGFwcGx5S2V5SWZNaXNzaW5nKGksIGNsb25lVk5vZGUobikpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdOb2Rlcykge1xuICAgICAgICAgICAgbmV3Tm9kZXMucHVzaChhcHBseUtleUlmTWlzc2luZyhpLCBjbG9uZVZOb2RlKG4pKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld05vZGVzIHx8IG5vZGVzO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZVZOb2RlcyhjaGlsZHJlbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzVk5vZGUoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmRvbSkge1xuICAgICAgICByZXR1cm4gY2xvbmVWTm9kZShjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbjtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BzKHZOb2RlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgICBpZiAoISh2Tm9kZS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykgJiYgaXNOdWxsT3JVbmRlZihjaGlsZHJlbikgJiYgIWlzTnVsbE9yVW5kZWYocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICAgIGlmIChwcm9wcy5yZWYpIHtcbiAgICAgICAgdk5vZGUucmVmID0gcHJvcHMucmVmO1xuICAgICAgICBkZWxldGUgcHJvcHMucmVmO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXZlbnRzKSB7XG4gICAgICAgIHZOb2RlLmV2ZW50cyA9IHByb3BzLmV2ZW50cztcbiAgICB9XG4gICAgaWYgKCFpc051bGxPclVuZGVmKHByb3BzLmtleSkpIHtcbiAgICAgICAgdk5vZGUua2V5ID0gcHJvcHMua2V5O1xuICAgICAgICBkZWxldGUgcHJvcHMua2V5O1xuICAgIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUVsZW1lbnQodHlwZSwgdk5vZGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAxMjggLyogU3ZnRWxlbWVudCAqLztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDUxMiAvKiBJbnB1dEVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gMjA0OCAvKiBTZWxlY3RFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAndGV4dGFyZWEnKSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gMTAyNCAvKiBUZXh0YXJlYUVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdtZWRpYScpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAyNTYgLyogTWVkaWFFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAyIC8qIEh0bWxFbGVtZW50ICovO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUodk5vZGUpIHtcbiAgICBjb25zdCBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgIGNvbnN0IGhhc1Byb3BzID0gIWlzTnVsbChwcm9wcyk7XG4gICAgY29uc3QgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgbGV0IGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgLy8gY29udmVydCBhIHdyb25nbHkgY3JlYXRlZCB0eXBlIGJhY2sgdG8gZWxlbWVudFxuICAgIGlmIChpc1N0cmluZyh0eXBlKSAmJiAodk5vZGUuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pKSB7XG4gICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodHlwZSwgdk5vZGUpO1xuICAgICAgICBpZiAoaGFzUHJvcHMgJiYgcHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHZOb2RlLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChoYXNQcm9wcykge1xuICAgICAgICBub3JtYWxpemVQcm9wcyh2Tm9kZSwgcHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgaWYgKCFpc0ludmFsaWQoY2hpbGRyZW4pKSB7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAoaGFzUHJvcHMgJiYgIWlzSW52YWxpZChwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBub3JtYWxpemVDaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIC8vIFRoaXMgY29kZSB3aWxsIGJlIHN0cmlwcGVkIG91dCBmcm9tIHByb2R1Y3Rpb24gQ09ERVxuICAgICAgICAvLyBJdCB3aWxsIGhlbHAgdXNlcnMgdG8gdHJhY2sgZXJyb3JzIGluIHRoZWlyIGFwcGxpY2F0aW9ucy5cbiAgICAgICAgY29uc3QgdmVyaWZ5S2V5cyA9IGZ1bmN0aW9uICh2Tm9kZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IHZOb2Rlcy5tYXAoZnVuY3Rpb24gKHZub2RlKSB7IHJldHVybiB2bm9kZS5rZXk7IH0pO1xuICAgICAgICAgICAga2V5VmFsdWVzLnNvbWUoZnVuY3Rpb24gKGl0ZW0sIGlkeCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0R1cGxpY2F0ZSA9IGtleVZhbHVlcy5pbmRleE9mKGl0ZW0pICE9PSBpZHg7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICB3YXJuaW5nKCdJbmZlcm5vIG5vcm1hbGlzYXRpb24oLi4uKTogRW5jb3VudGVyZWQgdHdvIGNoaWxkcmVuIHdpdGggc2FtZSBrZXksIGFsbCBrZXlzIG11c3QgYmUgdW5pcXVlIHdpdGhpbiBpdHMgc2libGluZ3MuIER1cGxpY2F0ZWQga2V5IGlzOicgKyBpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc0R1cGxpY2F0ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodk5vZGUuY2hpbGRyZW4gJiYgQXJyYXkuaXNBcnJheSh2Tm9kZS5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHZlcmlmeUtleXModk5vZGUuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvY29yZS9ub3JtYWxpemF0aW9uLmpzIiwiLy8gU2V0dGluZ3MgLT4gUmVxdWlyZWQgYnkgUmVkdWNlcnMvUHJpbWFyeVJlZHVjZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBIYW5kbGVzIG1hbmlwdWxhdGlvbiBvZiBncmVldGVyIHNldHRpbmdzLCBhbmRcbi8vIHByb3ZpZGVzIHdyYXBwZXIgZnVuY3Rpb25zIGFyb3VuZCBsb2NhbHN0b3JhZ2UuXG5cbmV4cG9ydCBjb25zdCBMT0NBTFNUT1JBR0VfRU5BQkxFRCA9ICh0eXBlb2YoU3RvcmFnZSkgIT09IFwidW5kZWZpbmVkXCIpO1xuXG5pZiAoIUxPQ0FMU1RPUkFHRV9FTkFCTEVEKSB7XG4gIHdpbmRvdy5ub3RpZmljYXRpb25zLmdlbmVyYXRlKFwibG9jYWxTdG9yYWdlIG5vdCBzdXBwb3J0ZWQuXCIsICdlcnJvcicpO1xuICB0aHJvdyhcImxvY2FsU3RvcmFnZSBub3Qgc3VwcG9ydGVkLiBUaGVtZSB1bmFibGUgdG8gZnVuY3Rpb24uXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdFNldHRpbmcoc2V0dGluZywgZGVmYXVsdFNldHRpbmc9dW5kZWZpbmVkKSB7XG4gIGxldCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzZXR0aW5nKTtcblxuICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRTZXR0aW5nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTZXR0aW5nKHNldHRpbmcsIHZhbHVlPXVuZGVmaW5lZCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzZXR0aW5nLCB2YWx1ZSk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0xvZ2ljL1NldHRpbmdzLmpzIiwiLy8gU3lzdGVtT3BlcmF0aW9ucyAtPiBSZXF1aXJlZCBieSBSZWR1Y2Vycy9QcmltYXJ5UmVkdWNlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFdyYXBzIExpZ2h0RE0gc3lzdGVtIG9wZXJhdGlvbnMsIGFuZCBoYW5kbGVzIHRoZSBoZWF2eVxuLy8gbGlmdGluZyBvZiB0aGUgbW9yZSBjb21wbGV4IExpZ2h0RE0gcmVxdWVzdHMuXG5cbmZ1bmN0aW9uIGV4ZWN1dGVDb21tYW5kKG1lc3NhZ2UsIGJvdW5kRnVuY3Rpb24pIHtcbiAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUobWVzc2FnZSk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYm91bmRGdW5jdGlvbigpO1xuICB9LCAxMDAwKTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNvbW1hbmQoY29tbWFuZCkge1xuICAvLyBXaGF0IHRoZSBoZWxsIGlzIHRoaXMsIHJpZ2h0P1xuICBpZiAoY29tbWFuZCA9PT0gXCJzaHV0ZG93blwiICYmIHdpbmRvdy5saWdodGRtLmNhbl9zaHV0ZG93bikge1xuICAgIHJldHVybiBleGVjdXRlQ29tbWFuZChcIlNodXR0aW5nIGRvd25cIiwgd2luZG93LmxpZ2h0ZG0uc2h1dGRvd24pO1xuICB9IGVsc2UgaWYgKGNvbW1hbmQgPT09IFwiaGliZXJuYXRlXCIgJiYgd2luZG93LmxpZ2h0ZG0uY2FuX2hpYmVybmF0ZSkge1xuICAgIHJldHVybiBleGVjdXRlQ29tbWFuZChcIkhpYmVybmF0aW5nIHN5c3RlbS5cIiwgd2luZG93LmxpZ2h0ZG0uaGliZXJuYXRlKTtcbiAgfSBlbHNlIGlmIChjb21tYW5kID09PSBcInJlYm9vdFwiICYmIHdpbmRvdy5saWdodGRtLmNhbl9yZXN0YXJ0KSB7XG4gICAgcmV0dXJuIGV4ZWN1dGVDb21tYW5kKFwiUmVib290aW5nIHN5c3RlbS5cIiwgd2luZG93LmxpZ2h0ZG0ucmVzdGFydCk7XG4gIH0gZWxzZSBpZiAoY29tbWFuZCA9PT0gXCJzbGVlcFwiICYmIHdpbmRvdy5saWdodGRtLmNhbl9zdXNwZW5kKSB7XG4gICAgcmV0dXJuIGV4ZWN1dGVDb21tYW5kKFwiU3VzcGVuZGluZyBzeXN0ZW0uXCIsIHdpbmRvdy5saWdodGRtLnN1c3BlbmQpO1xuICB9XG5cbiAgLy8gSWYgd2UgaGF2ZSBnb3R0ZW4gdGhpcyBmYXIsIGl0J3MgYmVjYXVzZSB0aGUgY29tbWFuZCBpcyBkaXNhYmxlZCBvciBkb2Vzbid0IGV4aXN0LlxuICB3aW5kb3cubm90aWZpY2F0aW9ucy5nZW5lcmF0ZShgJHtjb21tYW5kfSBpcyBkaXNhYmxlZCBvbiB0aGlzIHN5c3RlbS5gLCBcImVycm9yXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEluaXRpYWxVc2VyKCkge1xuICAvLyBBcmUgd2UgY3VycmVudGx5IGluIGEgbG9jayBzY3JlZW4/XG4gIGlmICh3aW5kb3cubGlnaHRkbS5sb2NrX2hpbnQgPT09IHRydWUpIHtcbiAgICAvLyBEZWZhdWx0IHRvIHRoZSB2ZXJ5IGZpcnN0IGxvZ2dlZCBpbiB1c2VyLlxuICAgIHJldHVybiB3aW5kb3cubGlnaHRkbS51c2Vycy5maWx0ZXIoKHVzZXIpID0+IHVzZXIubG9nZ2VkX2luKVswXTtcbiAgfVxuXG4gIGVsc2Uge1xuICAgIGlmICh3aW5kb3cubGlnaHRkbS5zZWxlY3RfdXNlcl9oaW50ICE9PSB1bmRlZmluZWQgJiYgd2luZG93LmxpZ2h0ZG0uc2VsZWN0X3VzZXJfaGludCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5saWdodGRtLnVzZXJzLmZpbHRlcigodXNlcikgPT4gdXNlci51c2VybmFtZSA9PT0gd2luZG93LmxpZ2h0ZG0uc2VsZWN0X3VzZXJfaGludClbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB3aW5kb3cubGlnaHRkbS51c2Vyc1swXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJbml0aWFsU2Vzc2lvbih1c2VyKSB7XG4gIGxldCB1c2VyU2Vzc2lvbiA9ICh1c2VyID09PSB1bmRlZmluZWQpID8gdW5kZWZpbmVkIDogdXNlci5zZXNzaW9uO1xuXG4gIHJldHVybiAoXG4gICAgdGhpcy5maW5kU2Vzc2lvbih1c2VyU2Vzc2lvbikgfHxcbiAgICB0aGlzLmZpbmRTZXNzaW9uKHdpbmRvdy5saWdodGRtLmRlZmF1bHRfc2Vzc2lvbikgfHxcbiAgICB3aW5kb3cubGlnaHRkbS5zZXNzaW9uc1swXVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFNlc3Npb24oc2Vzc2lvbk5hbWUpIHtcbiAgaWYgKHNlc3Npb25OYW1lID09PSB1bmRlZmluZWQgfHwgc2Vzc2lvbk5hbWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gd2luZG93LmxpZ2h0ZG0uc2Vzc2lvbnMuZmlsdGVyKChzZXNzaW9uKSA9PlxuICAgIChzZXNzaW9uLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2Vzc2lvbk5hbWUudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAoc2Vzc2lvbi5rZXkudG9Mb3dlckNhc2UoKSA9PT0gc2Vzc2lvbk5hbWUudG9Mb3dlckNhc2UoKSlcbiAgKVswXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvTG9naWMvU3lzdGVtT3BlcmF0aW9ucy5qcyIsIi8vIENvbW1hbmRQYW5lbCAtPiBSZXF1aXJlZCBieSBNYWluXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gVGhlIHN5c3RlbSBtYW5hZ2VtZW50IGhhbGYgb2YgdGhlIGdyZWV0ZXIgbG9naWMuXG4vLyBEaXNwbGF5cyBzeXN0ZW0gaW5mbyBhbmQgaGFuZGxlcyBTbGVlcCwgU2h1dGRvd24sIGV0Yy5cblxuaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcblxuaW1wb3J0ICogYXMgU3lzdGVtT3BlcmF0aW9ucyBmcm9tIFwiLi4vTG9naWMvU3lzdGVtT3BlcmF0aW9uc1wiO1xuaW1wb3J0IFdhbGxwYXBlclN3aXRjaGVyIGZyb20gXCIuL1dhbGxwYXBlclN3aXRjaGVyXCI7XG5pbXBvcnQgQ2xvY2sgZnJvbSAnLi9DbG9jayc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWFuZFBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICBoYW5kbGVDb21tYW5kKGNvbW1hbmQsIGRpc2FibGVkLCBldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoZGlzYWJsZWQgIT09IGZhbHNlKSB7XG4gICAgICB3aW5kb3cubm90aWZpY2F0aW9ucy5nZW5lcmF0ZShgJHtjb21tYW5kfSBpcyBkaXNhYmxlZCBvbiB0aGlzIHN5c3RlbS5gLCBcImVycm9yXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIFN5c3RlbU9wZXJhdGlvbnMuaGFuZGxlQ29tbWFuZChjb21tYW5kKTtcbiAgfVxuXG5cbiAgZ2VuZXJhdGVDb21tYW5kcygpIHtcbiAgICBsZXQgY29tbWFuZHMgPSB7XG4gICAgICBcIlNodXRkb3duXCI6IHdpbmRvdy5saWdodGRtLmNhbl9zaHV0ZG93bixcbiAgICAgIFwiUmVib290XCI6IHdpbmRvdy5saWdodGRtLmNhbl9yZXN0YXJ0LFxuICAgICAgXCJIaWJlcm5hdGVcIjogd2luZG93LmxpZ2h0ZG0uY2FuX2hpYmVybmF0ZSxcbiAgICAgIFwiU2xlZXBcIjogd2luZG93LmxpZ2h0ZG0uY2FuX3N1c3BlbmRcbiAgICB9O1xuXG4gICAgLy8gRmlsdGVyIG91dCBjb21tYW5kcyB3ZSBjYW4ndCBleGVjdXRlLlxuICAgIGxldCBlbmFibGVkQ29tbWFuZHMgPSAoXG4gICAgICBPYmplY3Qua2V5cyhjb21tYW5kcylcbiAgICAgIC5tYXAoKGtleSkgPT4gY29tbWFuZHNba2V5XSA/IGtleSA6IGZhbHNlKVxuICAgICAgLmZpbHRlcigoY29tbWFuZCkgPT4gY29tbWFuZCAhPT0gZmFsc2UpXG4gICAgKTtcblxuICAgIC8vIEFyZSBib3RoIGhpYmVybmF0aW9uIGFuZCBzdXNwZW5kIGRpc2FibGVkP1xuICAgIC8vIEFkZCB0aGUgcm93IGJhY2sgYW5kIGRpc2FibGUgaXQgc28gdGhhdCB0aGUgdXNlciBpcyBhd2FyZSBvZiB3aGF0J3MgaGFwcGVuaW5nLlxuICAgIGlmICh3aW5kb3cubGlnaHRkbS5jYW5fc3VzcGVuZCA9PT0gZmFsc2UgJiYgd2luZG93LmxpZ2h0ZG0uY2FuX2hpYmVybmF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIGVuYWJsZWRDb21tYW5kcy5wdXNoKFwiU2xlZXAuZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgLy8gU2F2ZSBvdXJzZWx2ZXMgc29tZSB3b3JrLCB3aGVuIGFsbCBmb3VyIGNvbW1hbmRzIGFyZSBlbmFibGVkXG4gICAgLy8gcmVuZGVyaW5nIHNob3VsZCBiZSBoYWx0ZWQsIGFuZCB0aGUgbG9nbyBzaG91bGQgYmUgbW92ZWQgdXAuXG4gICAgbGV0IGV4cGFuZGVkID0gKGVuYWJsZWRDb21tYW5kcy5sZW5ndGggPiAzKTtcbiAgICBpZiAoZXhwYW5kZWQgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAnZXhwYW5kZWRDb21tYW5kcyc6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCByb3dzID0gZW5hYmxlZENvbW1hbmRzLm1hcCgoY29tbWFuZCkgPT4ge1xuICAgICAgbGV0IGRpc2FibGVkID0gY29tbWFuZC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcuJylbMV0gfHwgZmFsc2U7XG4gICAgICBjb21tYW5kID0gY29tbWFuZC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcuJylbMF07XG5cbiAgICAgIGxldCBjbGFzc2VzID0gWydjb21tYW5kJywgY29tbWFuZCwgZGlzYWJsZWRdLmZpbHRlcigoZSkgPT4gZSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3Nlcy5qb2luKCcgJykgfSBvbkNsaWNrPXsgdGhpcy5oYW5kbGVDb21tYW5kLmJpbmQodGhpcywgY29tbWFuZCwgZGlzYWJsZWQpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPnsgY29tbWFuZCB9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIGxldCBjbGFzc2VzID0gWydjb21tYW5kcy13cmFwcGVyJ107XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzLmpvaW4oJyAnKSB9PlxuICAgICAgICB7IHJvd3MgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBob3N0bmFtZSA9IHdpbmRvdy5saWdodGRtLmhvc3RuYW1lO1xuICAgIGxldCBjb21tYW5kcyA9IHRoaXMuZ2VuZXJhdGVDb21tYW5kcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxXYWxscGFwZXJTd2l0Y2hlciAvPlxuICAgICAgICB7IGNvbW1hbmRzIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQgaG9zdG5hbWVcIj57IGhvc3RuYW1lIH08L2Rpdj5cbiAgICAgICAgICA8Q2xvY2sgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0NvbXBvbmVudHMvQ29tbWFuZFBhbmVsLmpzeCIsIi8vIERhdGVEaXNwbGF5IC0+IFJlcXVpcmVkIGJ5IE1haW5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEaXNwbGF5cyBkYXRlIGJlbG93IHRoZSBsb2dpbiB3aW5kb3cuXG5cbmltcG9ydCBJbmZlcm5vIGZyb20gJ2luZmVybm8nO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZURpc3BsYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgXCJmb3JtYXR0ZWRTdHJpbmdcIjogdW5kZWZpbmVkLFxuICAgICAgXCJpbml0aWFsaXplZFwiOiBmYWxzZSxcbiAgICAgIFwiZGF5TmFtZVwiOiB1bmRlZmluZWQsXG4gICAgICBcImRheVZhbHVlXCI6IHVuZGVmaW5lZCxcbiAgICAgIFwiZm9ybWF0dGVkRGF5VmFsdWVcIjogdW5kZWZpbmVkLFxuICAgICAgXCJtb250aE5hbWVcIjogdW5kZWZpbmVkLFxuICAgICAgXCJtb250aFZhbHVlXCI6IHVuZGVmaW5lZFxuICAgIH07XG4gIH1cblxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAvLyBXYWl0IHR3byBzZWNvbmRzLCBzbyB0aGF0IHRoZSBjbG9jayBjYW4gcmVuZGVyIGZpcnN0IGFuZCB0aGV5IGZhZGUgaW4gc2VxdWVudGlhbGx5IHJhdGhlciB0aGFuIGluIHBhcmFsbGVsLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zZXREYXRlKCk7XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuXG4gIGdlbmVyYXRlRGF0ZVN0cmluZygpIHtcbiAgICBsZXQgZGF0ZVN0cmluZyA9IChcbiAgICAgIDxzcGFuPlxuICAgICAgICA8ZW0+eyB0aGlzLnN0YXRlLmRheU5hbWUgfTwvZW0+LCB0aGUgPGVtPnsgdGhpcy5zdGF0ZS5mb3JtYXR0ZWREYXlWYWx1ZSB9PC9lbT4gb2YgPGVtPnsgdGhpcy5zdGF0ZS5tb250aE5hbWUgfTwvZW0+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcblxuICAgIHJldHVybiBkYXRlU3RyaW5nO1xuICB9XG5cblxuICBzZXREYXRlKCkge1xuICAgIGxldCBkYXlOYW1lcyA9IFtcbiAgICAgIFwiU3VuZGF5XCIsXG4gICAgICBcIk1vbmRheVwiLFxuICAgICAgXCJUdWVzZGF5XCIsXG4gICAgICBcIldlZG5lc2RheVwiLFxuICAgICAgXCJUaHVyc2RheVwiLFxuICAgICAgXCJGcmlkYXlcIixcbiAgICAgIFwiU2F0dXJkYXlcIlxuICAgIF07XG5cbiAgICBsZXQgbW9udGhOYW1lcyA9IFtcbiAgICAgIFwiSmFudWFyeVwiLFxuICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgXCJNYXJjaFwiLFxuICAgICAgXCJBcHJpbFwiLFxuICAgICAgXCJNYXlcIixcbiAgICAgIFwiSnVuZVwiLFxuICAgICAgXCJKdWx5XCIsXG4gICAgICBcIkF1Z3VzdFwiLFxuICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgIFwiT2N0b2JlclwiLFxuICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgXCJEZWNlbWJlclwiXG4gICAgXTtcblxuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgbGV0IGRheVZhbHVlID0gbm93LmdldERhdGUoKTtcbiAgICBsZXQgZGF5TmFtZSA9IGRheU5hbWVzW25vdy5nZXRVVENEYXkoKV07XG4gICAgbGV0IG1vbnRoVmFsdWUgPSBub3cuZ2V0TW9udGgoKTtcbiAgICBsZXQgbW9udGhOYW1lID0gbW9udGhOYW1lc1ttb250aFZhbHVlXTtcblxuICAgIGxldCBmb3JtYXR0ZWREYXlWYWx1ZTtcblxuICAgIC8vIEJlY2F1c2UgSmF2YXNjcmlwdCBpcyB0ZXJyaWJsZSwgKHggPD0geSA8PSB6KSBiZWNvbWVzICgoeCA8PSB5KSAmJiAoeSA8PSB6KSlcbiAgICBpZiAoICgoNCA8PSBkYXlWYWx1ZSkgJiYgKGRheVZhbHVlIDw9IDIwKSkgfHwgKCgyNCA8PSBkYXlWYWx1ZSkgJiYgKGRheVZhbHVlIDw9IDMwKSkgKSB7XG4gICAgICBmb3JtYXR0ZWREYXlWYWx1ZSA9IGRheVZhbHVlICsgXCJ0aFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtYXR0ZWREYXlWYWx1ZSA9IGRheVZhbHVlICsgW1wic3RcIiwgXCJuZFwiLCBcInJkXCJdW2RheVZhbHVlICUgMTAgLSAxXTtcbiAgICB9XG5cbiAgICBsZXQgZm9ybWF0dGVkRGF0ZVN0cmluZyA9IGA8ZW0+JHtkYXlOYW1lfTwvZW0+LCB0aGUgPGVtPiR7Zm9ybWF0dGVkRGF5VmFsdWV9PC9lbT4gb2YgPGVtPiR7bW9udGhOYW1lfTwvZW0+YDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJmb3JtYXR0ZWRTdHJpbmdcIjogZm9ybWF0dGVkRGF0ZVN0cmluZyxcbiAgICAgIFwiaW5pdGlhbGl6ZWRcIjogdHJ1ZSxcbiAgICAgIFwiZGF5TmFtZVwiOiBkYXlOYW1lLFxuICAgICAgXCJkYXlWYWx1ZVwiOiBkYXlWYWx1ZSxcbiAgICAgIFwiZm9ybWF0dGVkRGF5VmFsdWVcIjogZm9ybWF0dGVkRGF5VmFsdWUsXG4gICAgICBcIm1vbnRoTmFtZVwiOiBtb250aE5hbWUsXG4gICAgICBcIm1vbnRoVmFsdWVcIjogbW9udGhWYWx1ZVxuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldERhdGUoKTtcbiAgICB9LCAzMCAqIDEwMDApO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGRhdGVDbGFzc2VzID0gW1wiZGF0ZVwiXTtcbiAgICBsZXQgZGF0ZVN0cmluZyA9IHRoaXMuZ2VuZXJhdGVEYXRlU3RyaW5nKCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pbml0aWFsaXplZCA9PT0gdHJ1ZSkge1xuICAgICAgZGF0ZUNsYXNzZXMucHVzaChcImxvYWRlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBkYXRlQ2xhc3Nlcy5qb2luKCcgJykgfT5cbiAgICAgICAgeyBkYXRlU3RyaW5nIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvQ29tcG9uZW50cy9EYXRlRGlzcGxheS5qc3giLCIvLyBVc2VyUGFuZWwgLT4gUmVxdWlyZWQgYnkgTWFpblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoZSBsb2dpbiBtYW5hZ2VtZW50IGhhbGYgb2YgdGhlIGdyZWV0ZXIgbG9naWMuXG5cbmltcG9ydCBJbmZlcm5vIGZyb20gJ2luZmVybm8nO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XG5cbmltcG9ydCBVc2VyU3dpdGNoZXIgZnJvbSAnLi9Vc2VyU3dpdGNoZXInO1xuaW1wb3J0IFVzZXJQYW5lbEZvcm0gZnJvbSAnLi9Vc2VyUGFuZWxGb3JtJztcblxuY29uc3QgRkFERV9JTl9EVVJBVElPTiA9IDIwMDtcbmNvbnN0IEVSUk9SX1NIQUtFX0RVUkFUSU9OID0gNjAwO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RvcmUgPSB0aGlzLnByb3BzLnN0b3JlO1xuICAgIHRoaXMuc3RvcmVTdGF0ZSA9IHRoaXMuc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSB0aGlzLnN0b3JlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlU3RhdGUgPSB0aGlzLnN0b3JlLmdldFN0YXRlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgXCJkcm9wZG93bkFjdGl2ZVwiOiBmYWxzZSxcbiAgICAgIFwiZmFkZUluXCI6IGZhbHNlLFxuICAgICAgXCJwYXNzd29yZFwiOiBcIlwiLFxuICAgICAgXCJwYXNzd29yZEZhaWxlZFwiOiBmYWxzZSxcbiAgICAgIFwic3dpdGNoZXJBY3RpdmVcIjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vIERlZmluZSBmdW5jdGlvbnMgcmVxdWlyZWQgaW4gdGhlIGdsb2JhbCBzY29wZSBieSBMaWdodERNLlxuICAgIHdpbmRvdy5zaG93X3Byb21wdCA9ICh0ZXh0LCB0eXBlKSA9PiB7XG4gICAgICBpZiAodHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUodGV4dCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICB3aW5kb3cubGlnaHRkbS5yZXNwb25kKHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuc2hvd19tZXNzYWdlID0gKHRleHQsIHR5cGUpID0+IHtcbiAgICAgIHdpbmRvdy5ub3RpZmljYXRpb25zLmdlbmVyYXRlKHRleHQsIHR5cGUpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYXV0aGVudGljYXRpb25fY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmxpZ2h0ZG0uaXNfYXV0aGVudGljYXRlZCkge1xuICAgICAgICB3aW5kb3cubGlnaHRkbS5zdGFydF9zZXNzaW9uX3N5bmModGhpcy5zdG9yZVN0YXRlLnNlc3Npb24ua2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVqZWN0UGFzc3dvcmQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmF1dG9sb2dpbl90aW1lcl9leHBpcmVkID0gKCkgPT4ge1xuICAgICAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUoXCJBdXRvbG9naW4gZXhwaXJlZC5cIik7XG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZURyb3Bkb3duQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFwiZHJvcGRvd25BY3RpdmVcIjogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRHJvcGRvd25MZWF2ZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJkcm9wZG93bkFjdGl2ZVwiOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlTG9naW5TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHdpbmRvdy5kZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQudG9Mb3dlckNhc2UoKSAhPT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgIHRoaXMucmVqZWN0UGFzc3dvcmQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5ub3RpZmljYXRpb25zLmdlbmVyYXRlKGBZb3UgYXJlIG5vdyBsb2dnZWQgaW4gYXMgJHt0aGlzLnN0b3JlU3RhdGUudXNlci5kaXNwbGF5X25hbWV9IHRvICR7dGhpcy5zdG9yZVN0YXRlLnNlc3Npb24ubmFtZX0uYCwgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgXCJwYXNzd29yZFwiOiBcIlwiXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgd2luZG93LmxpZ2h0ZG0uYXV0aGVudGljYXRlKHRoaXMuc3RvcmVTdGF0ZS51c2VyLnVzZXJuYW1lKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTd2l0Y2hlckNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHdpbmRvdy5saWdodGRtLnVzZXJzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHdpbmRvdy5ub3RpZmljYXRpb25zLmdlbmVyYXRlKFwiWW91IGFyZSB0aGUgb25seSB1c2VyIHRoYXQgaXMgYWJsZSB0byBsb2cgaW4gb24gdGhpcyBzeXN0ZW0uXCIsICdlcnJvcicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmxpZ2h0ZG0udXNlcnMubGVuZ3RoID09PSAyKSB7XG4gICAgICAvLyBObyBwb2ludCBpbiBzaG93aW5nIHRoZW0gdGhlIHN3aXRjaGVyIGlmIHRoZXJlIGlzIG9ubHkgb25lIG90aGVyIHVzZXIuIFN3aXRjaCBpbW1lZGlhdGVseS5cbiAgICAgIGxldCBvdGhlclVzZXIgPSB3aW5kb3cubGlnaHRkbS51c2Vycy5maWx0ZXIoKHVzZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZXIudXNlcm5hbWUgIT09IHRoaXMuc3RvcmVTdGF0ZS51c2VyLnVzZXJuYW1lO1xuICAgICAgfSlbMF07XG5cbiAgICAgIHRoaXMuc2V0QWN0aXZlVXNlcihvdGhlclVzZXIsIHRydWUpO1xuICAgICAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUoXCJVc2VyIGhhcyBiZWVuIGF1dG9tYXRpY2FsbHkgc3dpdGNoZWQgdG8gdGhlIG9ubHkgb3RoZXIgdXNlciBvbiB0aGlzIHN5c3RlbS5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBcInN3aXRjaGVyQWN0aXZlXCI6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVBhc3N3b3JkSW5wdXQoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFwicGFzc3dvcmRcIjogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICBzZXRBY3RpdmVTZXNzaW9uKHNlc3Npb24pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICd0eXBlJzogJ1NFVF9BQ1RJVkVfU0VTU0lPTicsXG4gICAgICAnc2Vzc2lvbic6IHNlc3Npb25cbiAgICB9KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJkcm9wZG93bkFjdGl2ZVwiOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgc2V0QWN0aXZlVXNlcih1c2VyLCBpc0J5cGFzcykge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgJ3R5cGUnOiAnU0VUX0FDVElWRV9VU0VSJyxcbiAgICAgICd1c2VyJzogdXNlclxuICAgIH0pO1xuXG4gICAgLy8gRmFkZSBpbiwgZXhjZXB0IHdoZW4gc3dpdGNoaW5nIGJldHdlZW4gMSBvZiAyIHVzZXJzLlxuICAgIGlmIChpc0J5cGFzcyA9PT0gZmFsc2UgfHwgaXNCeXBhc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFwiZmFkZUluXCI6IHRydWUsXG4gICAgICAgIFwic3dpdGNoZXJBY3RpdmVcIjogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgXCJmYWRlSW5cIjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9LCBGQURFX0lOX0RVUkFUSU9OKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFwic3dpdGNoZXJBY3RpdmVcIjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlamVjdFBhc3N3b3JkKCkge1xuICAgIHdpbmRvdy5ub3RpZmljYXRpb25zLmdlbmVyYXRlKFwiUGFzc3dvcmQgaW5jb3JyZWN0LCBwbGVhc2UgdHJ5IGFnYWluLlwiLCAnZXJyb3InKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJwYXNzd29yZFwiOiBcIlwiLFxuICAgICAgXCJwYXNzd29yZEZhaWxlZFwiOiB0cnVlXG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBcInBhc3N3b3JkRmFpbGVkXCI6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9LCBFUlJPUl9TSEFLRV9EVVJBVElPTik7XG4gIH1cblxuICBnZW5lcmF0ZVN3aXRjaFVzZXJCdXR0b24oKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBbJ2xlZnQnXTtcblxuICAgIGlmICh3aW5kb3cubGlnaHRkbS51c2Vycy5sZW5ndGggPCAyKSB7XG4gICAgICBjbGFzc2VzLnB1c2goXCJkaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzLmpvaW4oJyAnKSB9IG9uQ2xpY2s9eyB0aGlzLmhhbmRsZVN3aXRjaGVyQ2xpY2suYmluZCh0aGlzKSB9PlNXSVRDSCBVU0VSPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbG9naW5QYW5lbENsYXNzZXMgPSBbJ2xvZ2luLXBhbmVsLW1haW4nXTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmZhZGVJbiA9PT0gdHJ1ZSkge1xuICAgICAgbG9naW5QYW5lbENsYXNzZXMucHVzaCgnZmFkZWluJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUuc3dpdGNoZXJBY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIGxvZ2luUGFuZWxDbGFzc2VzLnB1c2goJ2ZhZGVvdXQnKTtcbiAgICB9XG5cbiAgICBsZXQgc3dpdGNoVXNlckJ1dHRvbiA9IHRoaXMuZ2VuZXJhdGVTd2l0Y2hVc2VyQnV0dG9uKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1wYW5lbC1jb250ZW50c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGxvZ2luUGFuZWxDbGFzc2VzLmpvaW4oJyAnKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItYmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1tYXNrXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1c2VyLWF2YXRhclwiIHNyYz17IHRoaXMuc3RvcmVTdGF0ZS51c2VyLmltYWdlIH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VXNlclBhbmVsRm9ybVxuICAgICAgICAgICAgYWN0aXZlU2Vzc2lvbj17IHRoaXMuc3RvcmVTdGF0ZS5zZXNzaW9uIH1cbiAgICAgICAgICAgIGFjdGl2ZVVzZXI9eyB0aGlzLnN0b3JlU3RhdGUudXNlciB9XG4gICAgICAgICAgICBkcm9wZG93bkFjdGl2ZT17IHRoaXMuc3RhdGUuZHJvcGRvd25BY3RpdmUgfVxuICAgICAgICAgICAgcGFzc3dvcmQ9eyB0aGlzLnN0YXRlLnBhc3N3b3JkIH1cbiAgICAgICAgICAgIHBhc3N3b3JkRmFpbGVkPXsgdGhpcy5zdGF0ZS5wYXNzd29yZEZhaWxlZCB9XG4gICAgICAgICAgICBoYW5kbGVMb2dpblN1Ym1pdD17IHRoaXMuaGFuZGxlTG9naW5TdWJtaXQuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICBoYW5kbGVEcm9wZG93bkNsaWNrPXsgdGhpcy5oYW5kbGVEcm9wZG93bkNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgaGFuZGxlRHJvcGRvd25MZWF2ZT17IHRoaXMuaGFuZGxlRHJvcGRvd25MZWF2ZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgIGhhbmRsZVBhc3N3b3JkSW5wdXQ9eyB0aGlzLmhhbmRsZVBhc3N3b3JkSW5wdXQuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICBzZXRBY3RpdmVTZXNzaW9uPXsgdGhpcy5zZXRBY3RpdmVTZXNzaW9uLmJpbmQodGhpcykgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cbiAgICAgICAgICAgIHsgc3dpdGNoVXNlckJ1dHRvbiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VXNlclN3aXRjaGVyXG4gICAgICAgICAgYWN0aXZlPXsgdGhpcy5zdGF0ZS5zd2l0Y2hlckFjdGl2ZSB9XG4gICAgICAgICAgYWN0aXZlVXNlcj17IHRoaXMuc3RvcmVTdGF0ZS51c2VyIH1cbiAgICAgICAgICBzZXRBY3RpdmVVc2VyPXsgdGhpcy5zZXRBY3RpdmVVc2VyLmJpbmQodGhpcykgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Db21wb25lbnRzL1VzZXJQYW5lbC5qc3giLCJpbXBvcnQgeyBTZXR0aW5nc1JlZHVjZXIgfSBmcm9tIFwiLi9TZXR0aW5nc1JlZHVjZXJcIjtcbmltcG9ydCAqIGFzIFN5c3RlbU9wZXJhdGlvbnMgZnJvbSBcIi4uL0xvZ2ljL1N5c3RlbU9wZXJhdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRTdGF0ZSgpIHtcbiAgcmV0dXJuIHtcbiAgICBcImluZm9cIjoge1xuICAgICAgXCJob3N0bmFtZVwiOiB3aW5kb3cubGlnaHRkbS5ob3N0bmFtZSxcbiAgICAgIFwibGFuZ3VhZ2VcIjogd2luZG93LmxpZ2h0ZG0ubGFuZ3VhZ2VcbiAgICB9LFxuICAgIFwidXNlclwiOiBTeXN0ZW1PcGVyYXRpb25zLmZpbmRJbml0aWFsVXNlcigpLFxuICAgIFwic2Vzc2lvblwiOiBTeXN0ZW1PcGVyYXRpb25zLmZpbmRJbml0aWFsU2Vzc2lvbigpXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBQcmltYXJ5UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZS5zdGFydHNXaXRoKFwiU0VUVElOR1NcIikpIHtcbiAgICByZXR1cm4gU2V0dGluZ3NSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICB9XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJBVVRIX1NFVF9BQ1RJVkVfU0VTU0lPTlwiOlxuICAgICAgdmFyIHNlc3Npb24gPSBhY3Rpb24uc2Vzc2lvbjtcblxuICAgICAgaWYgKHR5cGVvZiBzZXNzaW9uID09PSB0eXBlb2YgU3RyaW5nKCkpIHtcbiAgICAgICAgc2Vzc2lvbiA9IFN5c3RlbU9wZXJhdGlvbnMuZmluZFNlc3Npb24oc2Vzc2lvbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBcInNlc3Npb25cIjogc2Vzc2lvbiB9O1xuXG4gICAgY2FzZSBcIkFVVEhfU0VUX0FDVElWRV9VU0VSXCI6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgXCJ1c2VyXCI6IGFjdGlvbi51c2VyIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9SZWR1Y2Vycy9QcmltYXJ5UmVkdWNlci5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhdGlvbnMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3RpZmljYXRpb25zLWNvbnRhaW5lcicpWzBdO1xuICB9XG5cbiAgZ2VuZXJhdGUobWVzc2FnZSwgdHlwZSkge1xuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHR5cGUgPSBcIlwiO1xuICAgIH1cblxuICAgIGxldCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RpZmljYXRpb24uY2xhc3NOYW1lID0gYG5vdGlmaWNhdGlvbiAke3R5cGV9YDtcbiAgICBub3RpZmljYXRpb24uaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBub3RpZmljYXRpb24uY2xhc3NOYW1lICs9IFwiIGZhZGVvdXRcIjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZChub3RpZmljYXRpb24pO1xuICAgICAgfSwgNTAwKTtcbiAgICB9LCA1MDAwKTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvVXRpbHMvTm90aWZpY2F0aW9ucy5qcyIsImV4cG9ydCBjb25zdCBOT19PUCA9ICckTk9fT1AnO1xuZXhwb3J0IGNvbnN0IEVSUk9SX01TRyA9ICdhIHJ1bnRpbWUgZXJyb3Igb2NjdXJlZCEgVXNlIEluZmVybm8gaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgdG8gZmluZCB0aGUgZXJyb3IuJztcbmV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQ7XG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICAgIHJldHVybiBpc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogKGNoaWxkcmVuID8gW2NoaWxkcmVuXSA6IGNoaWxkcmVuKTtcbn1cbi8vIHRoaXMgaXMgTVVDSCBmYXN0ZXIgdGhhbiAuY29uc3RydWN0b3IgPT09IEFycmF5IGFuZCBpbnN0YW5jZW9mIEFycmF5XG4vLyBpbiBOb2RlIDcgYW5kIHRoZSBsYXRlciB2ZXJzaW9ucyBvZiBWOCwgc2xvd2VyIGluIG9sZGVyIHZlcnNpb25zIHRob3VnaFxuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RhdGVmdWxDb21wb25lbnQobykge1xuICAgIHJldHVybiAhaXNVbmRlZmluZWQoby5wcm90b3R5cGUpICYmICFpc1VuZGVmaW5lZChvLnByb3RvdHlwZS5yZW5kZXIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nT3JOdW1iZXIob2JqKSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiBvYmo7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbE9yVW5kZWYob2JqKSB7XG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKG9iaikgfHwgaXNOdWxsKG9iaik7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNJbnZhbGlkKG9iaikge1xuICAgIHJldHVybiBpc051bGwob2JqKSB8fCBvYmogPT09IGZhbHNlIHx8IGlzVHJ1ZShvYmopIHx8IGlzVW5kZWZpbmVkKG9iaik7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0F0dHJBbkV2ZW50KGF0dHIpIHtcbiAgICByZXR1cm4gYXR0clswXSA9PT0gJ28nICYmIGF0dHJbMV0gPT09ICduJyAmJiBhdHRyLmxlbmd0aCA+IDM7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1RydWUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCc7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dFcnJvcihtZXNzYWdlKSB7XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBFUlJPUl9NU0c7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgSW5mZXJubyBFcnJvcjogJHttZXNzYWdlfWApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBMaWZlY3ljbGUoKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbn1cbkxpZmVjeWNsZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcihjYWxsYmFjaykge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xufTtcbkxpZmVjeWNsZS5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIHRyaWdnZXIoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2ldKCk7XG4gICAgfVxufTtcbmV4cG9ydCBmdW5jdGlvbiBjb3B5UHJvcHNUbyhjb3B5RnJvbSwgY29weVRvKSB7XG4gICAgZm9yIChsZXQgcHJvcCBpbiBjb3B5RnJvbSkge1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQoY29weVRvW3Byb3BdKSkge1xuICAgICAgICAgICAgY29weVRvW3Byb3BdID0gY29weUZyb21bcHJvcF07XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8tY29tcG9uZW50L34vaW5mZXJuby1zaGFyZWQvZGlzdC1lcy9pbmRleC5qcyIsImltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmNvbnN0IGlzaU9TID0gaXNCcm93c2VyICYmICEhbmF2aWdhdG9yLnBsYXRmb3JtICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSk7XG5jb25zdCBkZWxlZ2F0ZWRFdmVudHMgPSBuZXcgTWFwKCk7XG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRXZlbnQobmFtZSwgbGFzdEV2ZW50LCBuZXh0RXZlbnQsIGRvbSkge1xuICAgIGxldCBkZWxlZ2F0ZWRSb290cyA9IGRlbGVnYXRlZEV2ZW50cy5nZXQobmFtZSk7XG4gICAgaWYgKG5leHRFdmVudCkge1xuICAgICAgICBpZiAoIWRlbGVnYXRlZFJvb3RzKSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cyA9IHsgaXRlbXM6IG5ldyBNYXAoKSwgY291bnQ6IDAsIGRvY0V2ZW50OiBudWxsIH07XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cy5kb2NFdmVudCA9IGF0dGFjaEV2ZW50VG9Eb2N1bWVudChuYW1lLCBkZWxlZ2F0ZWRSb290cyk7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRFdmVudHMuc2V0KG5hbWUsIGRlbGVnYXRlZFJvb3RzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxhc3RFdmVudCkge1xuICAgICAgICAgICAgZGVsZWdhdGVkUm9vdHMuY291bnQrKztcbiAgICAgICAgICAgIGlmIChpc2lPUyAmJiBuYW1lID09PSAnb25DbGljaycpIHtcbiAgICAgICAgICAgICAgICB0cmFwQ2xpY2tPbk5vbkludGVyYWN0aXZlRWxlbWVudChkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlbGVnYXRlZFJvb3RzLml0ZW1zLnNldChkb20sIG5leHRFdmVudCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRlbGVnYXRlZFJvb3RzKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZWRSb290cy5pdGVtcy5oYXMoZG9tKSkge1xuICAgICAgICAgICAgZGVsZWdhdGVkUm9vdHMuY291bnQtLTtcbiAgICAgICAgICAgIGRlbGVnYXRlZFJvb3RzLml0ZW1zLmRlbGV0ZShkb20pO1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlZFJvb3RzLmNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihub3JtYWxpemVFdmVudE5hbWUobmFtZSksIGRlbGVnYXRlZFJvb3RzLmRvY0V2ZW50KTtcbiAgICAgICAgICAgICAgICBkZWxlZ2F0ZWRFdmVudHMuZGVsZXRlKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChldmVudCwgZG9tLCBpdGVtcywgY291bnQsIGV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGV2ZW50c1RvVHJpZ2dlciA9IGl0ZW1zLmdldChkb20pO1xuICAgIGlmIChldmVudHNUb1RyaWdnZXIpIHtcbiAgICAgICAgY291bnQtLTtcbiAgICAgICAgLy8gbGlua0V2ZW50IG9iamVjdFxuICAgICAgICBldmVudERhdGEuZG9tID0gZG9tO1xuICAgICAgICBpZiAoZXZlbnRzVG9UcmlnZ2VyLmV2ZW50KSB7XG4gICAgICAgICAgICBldmVudHNUb1RyaWdnZXIuZXZlbnQoZXZlbnRzVG9UcmlnZ2VyLmRhdGEsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50c1RvVHJpZ2dlcihldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50RGF0YS5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudERvbSA9IGRvbS5wYXJlbnROb2RlO1xuICAgICAgICBpZiAocGFyZW50RG9tIHx8IHBhcmVudERvbSA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChldmVudCwgcGFyZW50RG9tLCBpdGVtcywgY291bnQsIGV2ZW50RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBub3JtYWxpemVFdmVudE5hbWUobmFtZSkge1xuICAgIHJldHVybiBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gYXR0YWNoRXZlbnRUb0RvY3VtZW50KG5hbWUsIGRlbGVnYXRlZFJvb3RzKSB7XG4gICAgY29uc3QgZG9jRXZlbnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZXZlbnREYXRhID0ge1xuICAgICAgICAgICAgc3RvcFByb3BhZ2F0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGRvbTogZG9jdW1lbnRcbiAgICAgICAgfTtcbiAgICAgICAgLy8gd2UgaGF2ZSB0byBkbyB0aGlzIGFzIHNvbWUgYnJvd3NlcnMgcmVjeWNsZSB0aGUgc2FtZSBFdmVudCBiZXR3ZWVuIGNhbGxzXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gbWFrZSB0aGUgcHJvcGVydHkgY29uZmlndXJhYmxlXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ2N1cnJlbnRUYXJnZXQnLCB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50RGF0YS5kb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBldmVudERhdGEuc3RvcFByb3BhZ2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY291bnQgPSBkZWxlZ2F0ZWRSb290cy5jb3VudDtcbiAgICAgICAgaWYgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChldmVudCwgZXZlbnQudGFyZ2V0LCBkZWxlZ2F0ZWRSb290cy5pdGVtcywgY291bnQsIGV2ZW50RGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobm9ybWFsaXplRXZlbnROYW1lKG5hbWUpLCBkb2NFdmVudCk7XG4gICAgcmV0dXJuIGRvY0V2ZW50O1xufVxuZnVuY3Rpb24gZW1wdHlGbigpIHsgfVxuZnVuY3Rpb24gdHJhcENsaWNrT25Ob25JbnRlcmFjdGl2ZUVsZW1lbnQoZG9tKSB7XG4gICAgLy8gTW9iaWxlIFNhZmFyaSBkb2VzIG5vdCBmaXJlIHByb3Blcmx5IGJ1YmJsZSBjbGljayBldmVudHMgb25cbiAgICAvLyBub24taW50ZXJhY3RpdmUgZWxlbWVudHMsIHdoaWNoIG1lYW5zIGRlbGVnYXRlZCBjbGljayBsaXN0ZW5lcnMgZG8gbm90XG4gICAgLy8gZmlyZS4gVGhlIHdvcmthcm91bmQgZm9yIHRoaXMgYnVnIGludm9sdmVzIGF0dGFjaGluZyBhbiBlbXB0eSBjbGlja1xuICAgIC8vIGxpc3RlbmVyIG9uIHRoZSB0YXJnZXQgbm9kZS5cbiAgICAvLyBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxMC8wOS9jbGlja19ldmVudF9kZWwuaHRtbFxuICAgIC8vIEp1c3Qgc2V0IGl0IHVzaW5nIHRoZSBvbmNsaWNrIHByb3BlcnR5IHNvIHRoYXQgd2UgZG9uJ3QgaGF2ZSB0byBtYW5hZ2UgYW55XG4gICAgLy8gYm9va2tlZXBpbmcgZm9yIGl0LiBOb3Qgc3VyZSBpZiB3ZSBuZWVkIHRvIGNsZWFyIGl0IHdoZW4gdGhlIGxpc3RlbmVyIGlzXG4gICAgLy8gcmVtb3ZlZC5cbiAgICAvLyBUT0RPOiBPbmx5IGRvIHRoaXMgZm9yIHRoZSByZWxldmFudCBTYWZhcmlzIG1heWJlP1xuICAgIGRvbS5vbmNsaWNrID0gZW1wdHlGbjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS9ldmVudHMvZGVsZWdhdGlvbi5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpbmtFdmVudChkYXRhLCBldmVudCkge1xuICAgIHJldHVybiB7IGRhdGEsIGV2ZW50IH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vZXZlbnRzL2xpbmtFdmVudC5qcyIsImltcG9ydCB7IGNvcHlQcm9wc1RvLCBpc0FycmF5LCBpc051bGwsIGlzT2JqZWN0LCBpc1N0cmluZ09yTnVtYmVyLCBpc1VuZGVmaW5lZCwgdGhyb3dFcnJvciwgd2FybmluZyB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL2NvcmUvb3B0aW9ucyc7XG5pbXBvcnQgeyBzdmdOUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IG1vdW50LCBtb3VudENsYXNzQ29tcG9uZW50Q2FsbGJhY2tzLCBtb3VudEVsZW1lbnQsIG1vdW50RnVuY3Rpb25hbENvbXBvbmVudENhbGxiYWNrcywgbW91bnRSZWYsIG1vdW50VGV4dCB9IGZyb20gJy4vbW91bnRpbmcnO1xuaW1wb3J0IHsgcGF0Y2hFdmVudCwgcGF0Y2hQcm9wIH0gZnJvbSAnLi9wYXRjaGluZyc7XG5pbXBvcnQgeyBjb21wb25lbnRUb0RPTU5vZGVNYXAgfSBmcm9tICcuL3JlbmRlcmluZyc7XG5pbXBvcnQgeyBjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlLCBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQsIHJlcGxhY2VDaGlsZCwgRU1QVFlfT0JKIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgcHJvY2Vzc0VsZW1lbnQgZnJvbSAnLi93cmFwcGVycy9wcm9jZXNzRWxlbWVudCc7XG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGROb2RlcyhwYXJlbnREb20pIHtcbiAgICBsZXQgZG9tID0gcGFyZW50RG9tLmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUgKGRvbSkge1xuICAgICAgICBpZiAoZG9tLm5vZGVUeXBlID09PSA4KSB7XG4gICAgICAgICAgICBpZiAoZG9tLmRhdGEgPT09ICchJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICAgICAgICAgIHBhcmVudERvbS5yZXBsYWNlQ2hpbGQocGxhY2Vob2xkZXIsIGRvbSk7XG4gICAgICAgICAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdERvbSA9IGRvbS5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICAgICAgcGFyZW50RG9tLnJlbW92ZUNoaWxkKGRvbSk7XG4gICAgICAgICAgICAgICAgZG9tID0gbGFzdERvbSB8fCBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGh5ZHJhdGVDb21wb25lbnQodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNDbGFzcykge1xuICAgIGNvbnN0IHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIGNvbnN0IHJlZiA9IHZOb2RlLnJlZjtcbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgY29uc3QgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgbGV0IHByb3BzO1xuICAgIGlmICghaXNVbmRlZmluZWQoZGVmYXVsdFByb3BzKSkge1xuICAgICAgICAvLyBXaGVuIGRlZmF1bHRQcm9wcyBhcmUgdXNlZCB3ZSBuZWVkIHRvIGNyZWF0ZSBuZXcgT2JqZWN0XG4gICAgICAgIHByb3BzID0gdk5vZGUucHJvcHMgfHwge307XG4gICAgICAgIGNvcHlQcm9wc1RvKGRlZmF1bHRQcm9wcywgcHJvcHMpO1xuICAgICAgICB2Tm9kZS5wcm9wcyA9IHByb3BzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgfVxuICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgIGNvbnN0IF9pc1NWRyA9IGRvbS5uYW1lc3BhY2VVUkkgPT09IHN2Z05TO1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGNyZWF0ZUNsYXNzQ29tcG9uZW50SW5zdGFuY2Uodk5vZGUsIHR5cGUsIHByb3BzLCBjb250ZXh0LCBfaXNTVkcpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGluc3RhbmNlLl9sYXN0SW5wdXQ7XG4gICAgICAgIGluc3RhbmNlLl92Q29tcG9uZW50ID0gdk5vZGU7XG4gICAgICAgIGluc3RhbmNlLl92Tm9kZSA9IHZOb2RlO1xuICAgICAgICBoeWRyYXRlKGlucHV0LCBkb20sIGxpZmVjeWNsZSwgaW5zdGFuY2UuX2NoaWxkQ29udGV4dCwgX2lzU1ZHKTtcbiAgICAgICAgbW91bnRDbGFzc0NvbXBvbmVudENhbGxiYWNrcyh2Tm9kZSwgcmVmLCBpbnN0YW5jZSwgbGlmZWN5Y2xlKTtcbiAgICAgICAgb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLnNldChpbnN0YW5jZSwgZG9tKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0KHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCk7XG4gICAgICAgIGh5ZHJhdGUoaW5wdXQsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gaW5wdXQ7XG4gICAgICAgIHZOb2RlLmRvbSA9IGlucHV0LmRvbTtcbiAgICAgICAgbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzKHJlZiwgZG9tLCBsaWZlY3ljbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gaHlkcmF0ZUVsZW1lbnQodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGNvbnN0IHRhZyA9IHZOb2RlLnR5cGU7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICBjb25zdCBwcm9wcyA9IHZOb2RlLnByb3BzO1xuICAgIGNvbnN0IGV2ZW50cyA9IHZOb2RlLmV2ZW50cztcbiAgICBjb25zdCBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGNvbnN0IHJlZiA9IHZOb2RlLnJlZjtcbiAgICBpZiAoaXNTVkcgfHwgKGZsYWdzICYgMTI4IC8qIFN2Z0VsZW1lbnQgKi8pKSB7XG4gICAgICAgIGlzU1ZHID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGRvbS5ub2RlVHlwZSAhPT0gMSB8fCBkb20udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSB0YWcpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHdhcm5pbmcoJ0luZmVybm8gaHlkcmF0aW9uOiBTZXJ2ZXItc2lkZSBtYXJrdXAgZG9lc25cXCd0IG1hdGNoIGNsaWVudC1zaWRlIG1hcmt1cCBvciBJbml0aWFsIHJlbmRlciB0YXJnZXQgaXMgbm90IGVtcHR5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RG9tID0gbW91bnRFbGVtZW50KHZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgdk5vZGUuZG9tID0gbmV3RG9tO1xuICAgICAgICByZXBsYWNlQ2hpbGQoZG9tLnBhcmVudE5vZGUsIG5ld0RvbSwgZG9tKTtcbiAgICAgICAgcmV0dXJuIG5ld0RvbTtcbiAgICB9XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICBoeWRyYXRlQ2hpbGRyZW4oY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgfVxuICAgIGxldCBoYXNDb250cm9sbGVkVmFsdWUgPSBmYWxzZTtcbiAgICBpZiAoIShmbGFncyAmIDIgLyogSHRtbEVsZW1lbnQgKi8pKSB7XG4gICAgICAgIGhhc0NvbnRyb2xsZWRWYWx1ZSA9IHByb2Nlc3NFbGVtZW50KGZsYWdzLCB2Tm9kZSwgZG9tLCBmYWxzZSk7XG4gICAgfVxuICAgIGlmIChwcm9wcykge1xuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICBwYXRjaFByb3AocHJvcCwgbnVsbCwgcHJvcHNbcHJvcF0sIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGV2ZW50cykge1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIGV2ZW50cykge1xuICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lLCBudWxsLCBldmVudHNbbmFtZV0sIGRvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlZikge1xuICAgICAgICBtb3VudFJlZihkb20sIHJlZiwgbGlmZWN5Y2xlKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGVDaGlsZHJlbihjaGlsZHJlbiwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgbm9ybWFsaXplQ2hpbGROb2RlcyhwYXJlbnREb20pO1xuICAgIGxldCBkb20gPSBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKCFpc051bGwoY2hpbGQpICYmIGlzT2JqZWN0KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIGlmIChkb20pIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tID0gaHlkcmF0ZShjaGlsZCwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgICAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW91bnQoY2hpbGQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIoY2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChkb20gJiYgZG9tLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICBpZiAoZG9tLm5vZGVWYWx1ZSAhPT0gY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBkb20ubm9kZVZhbHVlID0gY2hpbGRyZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHBhcmVudERvbS50ZXh0Q29udGVudCA9IGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoY2hpbGRyZW4pKSB7XG4gICAgICAgIGh5ZHJhdGUoY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICB9XG4gICAgLy8gY2xlYXIgYW55IG90aGVyIERPTSBub2RlcywgdGhlcmUgc2hvdWxkIGJlIG9ubHkgYSBzaW5nbGUgZW50cnkgZm9yIHRoZSByb290XG4gICAgd2hpbGUgKGRvbSkge1xuICAgICAgICBjb25zdCBuZXh0U2libGluZyA9IGRvbS5uZXh0U2libGluZztcbiAgICAgICAgcGFyZW50RG9tLnJlbW92ZUNoaWxkKGRvbSk7XG4gICAgICAgIGRvbSA9IG5leHRTaWJsaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGh5ZHJhdGVUZXh0KHZOb2RlLCBkb20pIHtcbiAgICBpZiAoZG9tLm5vZGVUeXBlICE9PSAzKSB7XG4gICAgICAgIGNvbnN0IG5ld0RvbSA9IG1vdW50VGV4dCh2Tm9kZSwgbnVsbCk7XG4gICAgICAgIHZOb2RlLmRvbSA9IG5ld0RvbTtcbiAgICAgICAgcmVwbGFjZUNoaWxkKGRvbS5wYXJlbnROb2RlLCBuZXdEb20sIGRvbSk7XG4gICAgICAgIHJldHVybiBuZXdEb207XG4gICAgfVxuICAgIGNvbnN0IHRleHQgPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICBpZiAoZG9tLm5vZGVWYWx1ZSAhPT0gdGV4dCkge1xuICAgICAgICBkb20ubm9kZVZhbHVlID0gdGV4dDtcbiAgICB9XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBoeWRyYXRlVm9pZCh2Tm9kZSwgZG9tKSB7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIHJldHVybiBkb207XG59XG5mdW5jdGlvbiBoeWRyYXRlKHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICBjb25zdCBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChmbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICByZXR1cm4gaHlkcmF0ZUNvbXBvbmVudCh2Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBmbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gaHlkcmF0ZUVsZW1lbnQodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgIHJldHVybiBoeWRyYXRlVGV4dCh2Tm9kZSwgZG9tKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiA0MDk2IC8qIFZvaWQgKi8pIHtcbiAgICAgICAgcmV0dXJuIGh5ZHJhdGVWb2lkKHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoYGh5ZHJhdGUoKSBleHBlY3RzIGEgdmFsaWQgVk5vZGUsIGluc3RlYWQgaXQgcmVjZWl2ZWQgYW4gb2JqZWN0IHdpdGggdGhlIHR5cGUgXCIke3R5cGVvZiB2Tm9kZX1cIi5gKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaHlkcmF0ZVJvb3QoaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlKSB7XG4gICAgbGV0IGRvbSA9IHBhcmVudERvbSAmJiBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICBpZiAoZG9tKSB7XG4gICAgICAgIGh5ZHJhdGUoaW5wdXQsIGRvbSwgbGlmZWN5Y2xlLCBFTVBUWV9PQkosIGZhbHNlKTtcbiAgICAgICAgZG9tID0gcGFyZW50RG9tLmZpcnN0Q2hpbGQ7XG4gICAgICAgIC8vIGNsZWFyIGFueSBvdGhlciBET00gbm9kZXMsIHRoZXJlIHNob3VsZCBiZSBvbmx5IGEgc2luZ2xlIGVudHJ5IGZvciB0aGUgcm9vdFxuICAgICAgICB3aGlsZSAoZG9tID0gZG9tLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICBwYXJlbnREb20ucmVtb3ZlQ2hpbGQoZG9tKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2h5ZHJhdGlvbi5qcyIsImltcG9ydCB7IGlzTnVsbE9yVW5kZWYgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgeyB3cmFwcGVycyB9IGZyb20gJy4vcHJvY2Vzc0VsZW1lbnQnO1xuaW1wb3J0IHsgRU1QVFlfT0JKIH0gZnJvbSAnLi4vdXRpbHMnO1xuZnVuY3Rpb24gaXNDaGVja2VkVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdjaGVja2JveCcgfHwgdHlwZSA9PT0gJ3JhZGlvJztcbn1cbmZ1bmN0aW9uIGlzQ29udHJvbGxlZChwcm9wcykge1xuICAgIGNvbnN0IHVzZXNDaGVja2VkID0gaXNDaGVja2VkVHlwZShwcm9wcy50eXBlKTtcbiAgICByZXR1cm4gdXNlc0NoZWNrZWQgPyAhaXNOdWxsT3JVbmRlZihwcm9wcy5jaGVja2VkKSA6ICFpc051bGxPclVuZGVmKHByb3BzLnZhbHVlKTtcbn1cbmZ1bmN0aW9uIG9uVGV4dElucHV0Q2hhbmdlKGUpIHtcbiAgICBsZXQgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIGNvbnN0IGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmIChldmVudHMub25JbnB1dCkge1xuICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50cy5vbklucHV0O1xuICAgICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRzLm9uaW5wdXQpIHtcbiAgICAgICAgZXZlbnRzLm9uaW5wdXQoZSk7XG4gICAgfVxuICAgIC8vIHRoZSB1c2VyIG1heSBoYXZlIHVwZGF0ZWQgdGhlIHZOb2RlIGZyb20gdGhlIGFib3ZlIG9uSW5wdXQgZXZlbnRzXG4gICAgLy8gc28gd2UgbmVlZCB0byBnZXQgaXQgZnJvbSB0aGUgY29udGV4dCBvZiBgdGhpc2AgYWdhaW5cbiAgICBhcHBseVZhbHVlKHRoaXMudk5vZGUsIGRvbSk7XG59XG5mdW5jdGlvbiB3cmFwcGVkT25DaGFuZ2UoZSkge1xuICAgIGxldCB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50cy5vbkNoYW5nZTtcbiAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudChlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBvbkNoZWNrYm94Q2hhbmdlKGUpIHtcbiAgICBjb25zdCB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbkNsaWNrKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzLm9uQ2xpY2s7XG4gICAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudHMub25jbGljaykge1xuICAgICAgICBldmVudHMub25jbGljayhlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25DbGljayBldmVudHNcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIGFwcGx5VmFsdWUodGhpcy52Tm9kZSwgZG9tKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUFzc29jaWF0ZWRSYWRpb0lucHV0cyhuYW1lKSB7XG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCIke25hbWV9XCJdYCk7XG4gICAgW10uZm9yRWFjaC5jYWxsKGlucHV0cywgKGRvbSkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dFdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICAgICAgaWYgKGlucHV0V3JhcHBlcikge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBpbnB1dFdyYXBwZXIudk5vZGUucHJvcHM7XG4gICAgICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgICAgICBkb20uY2hlY2tlZCA9IGlucHV0V3JhcHBlci52Tm9kZS5wcm9wcy5jaGVja2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0lucHV0KHZOb2RlLCBkb20pIHtcbiAgICBjb25zdCBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBhcHBseVZhbHVlKHZOb2RlLCBkb20pO1xuICAgIGlmIChpc0NvbnRyb2xsZWQocHJvcHMpKSB7XG4gICAgICAgIGxldCBpbnB1dFdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICAgICAgaWYgKCFpbnB1dFdyYXBwZXIpIHtcbiAgICAgICAgICAgIGlucHV0V3JhcHBlciA9IHtcbiAgICAgICAgICAgICAgICB2Tm9kZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpc0NoZWNrZWRUeXBlKHByb3BzLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2xpY2sgPSBvbkNoZWNrYm94Q2hhbmdlLmJpbmQoaW5wdXRXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBkb20ub25jbGljay53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvbS5vbmlucHV0ID0gb25UZXh0SW5wdXRDaGFuZ2UuYmluZChpbnB1dFdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGRvbS5vbmlucHV0LndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2hhbmdlID0gd3JhcHBlZE9uQ2hhbmdlLmJpbmQoaW5wdXRXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBkb20ub25jaGFuZ2Uud3JhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3cmFwcGVycy5zZXQoZG9tLCBpbnB1dFdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0V3JhcHBlci52Tm9kZSA9IHZOb2RlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VmFsdWUodk5vZGUsIGRvbSkge1xuICAgIGNvbnN0IHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGNvbnN0IHR5cGUgPSBwcm9wcy50eXBlO1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgY29uc3QgY2hlY2tlZCA9IHByb3BzLmNoZWNrZWQ7XG4gICAgY29uc3QgbXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZTtcbiAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgaGFzVmFsdWUgPSAhaXNOdWxsT3JVbmRlZih2YWx1ZSk7XG4gICAgaWYgKHR5cGUgJiYgdHlwZSAhPT0gZG9tLnR5cGUpIHtcbiAgICAgICAgZG9tLnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBpZiAobXVsdGlwbGUgJiYgbXVsdGlwbGUgIT09IGRvbS5tdWx0aXBsZSkge1xuICAgICAgICBkb20ubXVsdGlwbGUgPSBtdWx0aXBsZTtcbiAgICB9XG4gICAgaWYgKCFpc051bGxPclVuZGVmKGRlZmF1bHRWYWx1ZSkgJiYgIWhhc1ZhbHVlKSB7XG4gICAgICAgIGRvbS5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWUgKyAnJztcbiAgICB9XG4gICAgaWYgKGlzQ2hlY2tlZFR5cGUodHlwZSkpIHtcbiAgICAgICAgaWYgKGhhc1ZhbHVlKSB7XG4gICAgICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBkb20uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIGlmICh0eXBlID09PSAncmFkaW8nICYmIHByb3BzLm5hbWUpIHtcbiAgICAgICAgICAgIGhhbmRsZUFzc29jaWF0ZWRSYWRpb0lucHV0cyhwcm9wcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGhhc1ZhbHVlICYmIGRvbS52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGRvbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc051bGxPclVuZGVmKGNoZWNrZWQpKSB7XG4gICAgICAgICAgICBkb20uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vd3JhcHBlcnMvSW5wdXRXcmFwcGVyLmpzIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNJbnZhbGlkLCBpc051bGxPclVuZGVmIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuaW1wb3J0IHsgaXNWTm9kZSB9IGZyb20gJy4uLy4uL2NvcmUvVk5vZGVzJztcbmltcG9ydCB7IHdyYXBwZXJzIH0gZnJvbSAnLi9wcm9jZXNzRWxlbWVudCc7XG5pbXBvcnQgeyBFTVBUWV9PQkogfSBmcm9tICcuLi91dGlscyc7XG5mdW5jdGlvbiBpc0NvbnRyb2xsZWQocHJvcHMpIHtcbiAgICByZXR1cm4gIWlzTnVsbE9yVW5kZWYocHJvcHMudmFsdWUpO1xufVxuZnVuY3Rpb24gdXBkYXRlQ2hpbGRPcHRpb25Hcm91cCh2Tm9kZSwgdmFsdWUpIHtcbiAgICBjb25zdCB0eXBlID0gdk5vZGUudHlwZTtcbiAgICBpZiAodHlwZSA9PT0gJ29wdGdyb3VwJykge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHZOb2RlLmNoaWxkcmVuO1xuICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNoaWxkT3B0aW9uKGNoaWxkcmVuW2ldLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNWTm9kZShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHVwZGF0ZUNoaWxkT3B0aW9uKGNoaWxkcmVuLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHVwZGF0ZUNoaWxkT3B0aW9uKHZOb2RlLCB2YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdXBkYXRlQ2hpbGRPcHRpb24odk5vZGUsIHZhbHVlKSB7XG4gICAgY29uc3QgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgZG9tID0gdk5vZGUuZG9tO1xuICAgIC8vIHdlIGRvIHRoaXMgYXMgbXVsdGlwbGUgbWF5IGhhdmUgY2hhbmdlZFxuICAgIGRvbS52YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgIGlmICgoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUuaW5kZXhPZihwcm9wcy52YWx1ZSkgIT09IC0xKSB8fCBwcm9wcy52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgZG9tLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGRvbS5zZWxlY3RlZCA9IHByb3BzLnNlbGVjdGVkIHx8IGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG9uU2VsZWN0Q2hhbmdlKGUpIHtcbiAgICBjb25zdCB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbkNoYW5nZSkge1xuICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50cy5vbkNoYW5nZTtcbiAgICAgICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5ldmVudChldmVudC5kYXRhLCBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50KGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50cy5vbmNoYW5nZSkge1xuICAgICAgICBldmVudHMub25jaGFuZ2UoZSk7XG4gICAgfVxuICAgIC8vIHRoZSB1c2VyIG1heSBoYXZlIHVwZGF0ZWQgdGhlIHZOb2RlIGZyb20gdGhlIGFib3ZlIG9uQ2hhbmdlIGV2ZW50c1xuICAgIC8vIHNvIHdlIG5lZWQgdG8gZ2V0IGl0IGZyb20gdGhlIGNvbnRleHQgb2YgYHRoaXNgIGFnYWluXG4gICAgYXBwbHlWYWx1ZSh0aGlzLnZOb2RlLCBkb20pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NTZWxlY3Qodk5vZGUsIGRvbSkge1xuICAgIGNvbnN0IHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGFwcGx5VmFsdWUodk5vZGUsIGRvbSk7XG4gICAgaWYgKGlzQ29udHJvbGxlZChwcm9wcykpIHtcbiAgICAgICAgbGV0IHNlbGVjdFdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICAgICAgaWYgKCFzZWxlY3RXcmFwcGVyKSB7XG4gICAgICAgICAgICBzZWxlY3RXcmFwcGVyID0ge1xuICAgICAgICAgICAgICAgIHZOb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9tLm9uY2hhbmdlID0gb25TZWxlY3RDaGFuZ2UuYmluZChzZWxlY3RXcmFwcGVyKTtcbiAgICAgICAgICAgIGRvbS5vbmNoYW5nZS53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHdyYXBwZXJzLnNldChkb20sIHNlbGVjdFdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFdyYXBwZXIudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVZhbHVlKHZOb2RlLCBkb20pIHtcbiAgICBjb25zdCBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBpZiAocHJvcHMubXVsdGlwbGUgIT09IGRvbS5tdWx0aXBsZSkge1xuICAgICAgICBkb20ubXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICBpZiAoIWlzSW52YWxpZChjaGlsZHJlbikpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICAgICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVDaGlsZE9wdGlvbkdyb3VwKGNoaWxkcmVuW2ldLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNWTm9kZShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHVwZGF0ZUNoaWxkT3B0aW9uR3JvdXAoY2hpbGRyZW4sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9TZWxlY3RXcmFwcGVyLmpzIiwiaW1wb3J0IHsgaXNOdWxsT3JVbmRlZiB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCB7IHdyYXBwZXJzIH0gZnJvbSAnLi9wcm9jZXNzRWxlbWVudCc7XG5pbXBvcnQgeyBFTVBUWV9PQkogfSBmcm9tICcuLi91dGlscyc7XG5mdW5jdGlvbiBpc0NvbnRyb2xsZWQocHJvcHMpIHtcbiAgICByZXR1cm4gIWlzTnVsbE9yVW5kZWYocHJvcHMudmFsdWUpO1xufVxuZnVuY3Rpb24gd3JhcHBlZE9uQ2hhbmdlKGUpIHtcbiAgICBsZXQgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIGNvbnN0IGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHMub25DaGFuZ2U7XG4gICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXZlbnQoZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gb25UZXh0YXJlYUlucHV0Q2hhbmdlKGUpIHtcbiAgICBsZXQgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIGNvbnN0IGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmIChldmVudHMub25JbnB1dCkge1xuICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50cy5vbklucHV0O1xuICAgICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRzLm9uaW5wdXQpIHtcbiAgICAgICAgZXZlbnRzLm9uaW5wdXQoZSk7XG4gICAgfVxuICAgIC8vIHRoZSB1c2VyIG1heSBoYXZlIHVwZGF0ZWQgdGhlIHZOb2RlIGZyb20gdGhlIGFib3ZlIG9uSW5wdXQgZXZlbnRzXG4gICAgLy8gc28gd2UgbmVlZCB0byBnZXQgaXQgZnJvbSB0aGUgY29udGV4dCBvZiBgdGhpc2AgYWdhaW5cbiAgICBhcHBseVZhbHVlKHRoaXMudk5vZGUsIGRvbSwgZmFsc2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NUZXh0YXJlYSh2Tm9kZSwgZG9tLCBtb3VudGluZykge1xuICAgIGNvbnN0IHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGFwcGx5VmFsdWUodk5vZGUsIGRvbSwgbW91bnRpbmcpO1xuICAgIGxldCB0ZXh0YXJlYVdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICBpZiAoaXNDb250cm9sbGVkKHByb3BzKSkge1xuICAgICAgICBpZiAoIXRleHRhcmVhV3JhcHBlcikge1xuICAgICAgICAgICAgdGV4dGFyZWFXcmFwcGVyID0ge1xuICAgICAgICAgICAgICAgIHZOb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9tLm9uaW5wdXQgPSBvblRleHRhcmVhSW5wdXRDaGFuZ2UuYmluZCh0ZXh0YXJlYVdyYXBwZXIpO1xuICAgICAgICAgICAgZG9tLm9uaW5wdXQud3JhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAocHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBkb20ub25jaGFuZ2UgPSB3cmFwcGVkT25DaGFuZ2UuYmluZCh0ZXh0YXJlYVdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGRvbS5vbmNoYW5nZS53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdyYXBwZXJzLnNldChkb20sIHRleHRhcmVhV3JhcHBlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dGFyZWFXcmFwcGVyLnZOb2RlID0gdk5vZGU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlWYWx1ZSh2Tm9kZSwgZG9tLCBtb3VudGluZykge1xuICAgIGNvbnN0IHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgY29uc3QgZG9tVmFsdWUgPSBkb20udmFsdWU7XG4gICAgaWYgKGlzTnVsbE9yVW5kZWYodmFsdWUpKSB7XG4gICAgICAgIGlmIChtb3VudGluZykge1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKGRlZmF1bHRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSBkb21WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBkb20udmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZG9tVmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZG9tLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8qIFRoZXJlIGlzIHZhbHVlIHNvIGtlZXAgaXQgY29udHJvbGxlZCAqL1xuICAgICAgICBpZiAoZG9tVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9UZXh0YXJlYVdyYXBwZXIuanMiLCIvLyBDbG9jayAtPiBSZXF1aXJlZCBieSBDb21wb25lbnRzL0NvbW1hbmRQYW5lbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEp1c3QgYSBjbG9jay5cblxuaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcblxuaW1wb3J0IHsgcGFkWmVyb2VzIH0gZnJvbSBcIi4uL1V0aWxzL1V0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb2NrIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgXCJjdXJyZW50VGltZVwiOiB1bmRlZmluZWQsXG4gICAgICBcImluaXRpYWxpemVkXCI6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUNsb2NrKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgXCJpbml0aWFsaXplZFwiOiB0cnVlXG4gICAgICB9KTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG5cbiAgdXBkYXRlQ2xvY2soKSB7XG4gICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGhvdXJzID0gcGFkWmVyb2VzKG5vdy5nZXRIb3VycygpKTtcbiAgICBsZXQgbWludXRlcyA9IHBhZFplcm9lcyhub3cuZ2V0TWludXRlcygpKTtcbiAgICBsZXQgZm9ybWF0dGVkVGltZSA9IGAke2hvdXJzfToke21pbnV0ZXN9YDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJjdXJyZW50VGltZVwiOiBmb3JtYXR0ZWRUaW1lXG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQ2xvY2soKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjbGFzc2VzID0gWydyaWdodCcsICdjbG9jayddO1xuICAgIGxldCBjdXJyZW50VGltZSA9IHRoaXMuc3RhdGUuY3VycmVudFRpbWU7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pbml0aWFsaXplZCA9PT0gdHJ1ZSkge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdsb2FkZWQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjbGFzc2VzLmpvaW4oJyAnKSB9PlxuICAgICAgICB7IGN1cnJlbnRUaW1lIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvQ29tcG9uZW50cy9DbG9jay5qc3giLCIvLyBQYXNzd29yZEZpZWxkIC0+IFJlcXVpcmVkIGJ5IENvbXBvbmVudHMvVXNlclBhbmVsRm9ybVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNpbXBsZSBwYXNzd29yZCBpbnB1dCBmaWVsZC5cblxuaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XG5cblxuY29uc3QgUGFzc3dvcmRGaWVsZCA9IChwcm9wcykgPT4ge1xuICBsZXQgY2xhc3NlcyA9IFsndXNlci1wYXNzd29yZCddO1xuXG4gIGlmIChwcm9wcy5wYXNzd29yZEZhaWxlZCA9PT0gdHJ1ZSkge1xuICAgIGNsYXNzZXMucHVzaCgnZXJyb3InKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCIqKioqKioqKioqKioqKioqKioqXCJcbiAgICAgIGNsYXNzTmFtZT17IGNsYXNzZXMuam9pbignICcpIH1cbiAgICAgIHZhbHVlPXsgcHJvcHMucGFzc3dvcmQgfVxuICAgICAgb25JbnB1dD17IHByb3BzLmhhbmRsZVBhc3N3b3JkSW5wdXQgfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZEZpZWxkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Db21wb25lbnRzL1Bhc3N3b3JkRmllbGQuanN4IiwiLy8gU2Vzc2lvbkRyb3Bkb3duIC0+IFJlcXVpcmVkIGJ5IENvbXBvbmVudHMvVXNlclBhbmVsRm9ybVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERpc3BsYXlzIHNlc3Npb24gcm93cyBhcyBhIGRyb3Bkb3duIHRvIGhhbmRsZVxuLy8gc2Vzc2lvbiBzd2l0Y2hpbmcuXG5cbmltcG9ydCBJbmZlcm5vIGZyb20gJ2luZmVybm8nO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XG5cbmltcG9ydCBTZXNzaW9uUm93IGZyb20gJy4vU2Vzc2lvblJvdyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Vzc2lvbkRyb3Bkb3duIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgLy8gU29ydCBieSBhY3RpdmUsIHRoZW4gYWxwaGFiZXRpY2FsLlxuICAgIC8vIERvaW5nIHRoaXMgcmVxdWlyZXMgdXNpbmcgc29ydCBpbiByZXZlcnNlLlxuICAgIGxldCByb3dzID0gKFxuICAgICAgd2luZG93LmxpZ2h0ZG0uc2Vzc2lvbnNcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiBhLm5hbWUudG9VcHBlckNhc2UoKSA+IGIubmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIHJldHVybiAoYi5rZXkudG9Mb3dlckNhc2UoKSA9PT0gdGhpcy5wcm9wcy5hY3RpdmVTZXNzaW9uLmtleS50b0xvd2VyQ2FzZSgpKSA/IDEgOiAtMTtcbiAgICAgIH0pXG4gICAgICAubWFwKChzZXNzaW9uKSA9PiAoXG4gICAgICAgIDxTZXNzaW9uUm93XG4gICAgICAgICAgYWN0aXZlU2Vzc2lvbj17IHRoaXMucHJvcHMuYWN0aXZlU2Vzc2lvbiB9XG4gICAgICAgICAgc2Vzc2lvbj17IHNlc3Npb24gfVxuICAgICAgICAgIGhhbmRsZURyb3Bkb3duQ2xpY2s9eyB0aGlzLnByb3BzLmhhbmRsZURyb3Bkb3duQ2xpY2sgfVxuICAgICAgICAgIGhhbmRsZURyb3Bkb3duTGVhdmU9eyB0aGlzLnByb3BzLmhhbmRsZURyb3Bkb3duTGVhdmUgfVxuICAgICAgICAgIHNldEFjdGl2ZVNlc3Npb249eyB0aGlzLnByb3BzLnNldEFjdGl2ZVNlc3Npb24gfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgICApO1xuXG4gICAgbGV0IGNsYXNzZXMgPSBbJ2Ryb3Bkb3duJywgJ3VzZXItc2Vzc2lvbiddO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZHJvcGRvd25BY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3Nlcy5qb2luKCcgJykgfSBvbk1vdXNlTGVhdmU9eyB0aGlzLnByb3BzLmhhbmRsZURyb3Bkb3duTGVhdmUgfT5cbiAgICAgICAgeyByb3dzIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvQ29tcG9uZW50cy9TZXNzaW9uRHJvcGRvd24uanN4IiwiLy8gU2Vzc2lvblJvdyAtPiBSZXF1aXJlZCBieSBDb21wb25lbnRzL1Nlc3Npb25Ecm9wZG93blxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEp1c3QgYSByb3cuXG5cbmltcG9ydCBJbmZlcm5vIGZyb20gJ2luZmVybm8nO1xuXG5cbmNvbnN0IFNlc3Npb25Sb3cgPSAocHJvcHMpID0+IHtcbiAgbGV0IGNsYXNzZXMgPSBbXCJkcm9wZG93bi1pdGVtXCJdO1xuICBsZXQgZXZlbnRIYW5kbGVyID0gcHJvcHMuc2V0QWN0aXZlU2Vzc2lvbi5iaW5kKHRoaXMsIHByb3BzLnNlc3Npb24ua2V5KTtcblxuICBpZiAocHJvcHMuc2Vzc2lvbi5rZXkgPT09IHByb3BzLmFjdGl2ZVNlc3Npb24ua2V5KSB7XG4gICAgZXZlbnRIYW5kbGVyID0gcHJvcHMuaGFuZGxlRHJvcGRvd25DbGljaztcbiAgICBjbGFzc2VzLnB1c2goXCJhY3RpdmVcIik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3Nlcy5qb2luKCcgJykgfSBrZXk9eyBwcm9wcy5zZXNzaW9uLmtleSB9IG9uQ2xpY2s9eyBldmVudEhhbmRsZXIgfT5cbiAgICAgIHsgcHJvcHMuc2Vzc2lvbi5uYW1lIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgU2Vzc2lvblJvdztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lczYvQ29tcG9uZW50cy9TZXNzaW9uUm93LmpzeCIsIi8vIFVzZXJQYW5lbEZvcm0gLT4gUmVxdWlyZWQgYnkgQ29tcG9uZW50cy9Vc2VyUGFuZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGUgZm9ybSBkaXNwbGF5ZWQgd2l0aGluIHRoZSBVc2VyIFBhbmVsIHRvIGhhbmRsZVxuLy8gdXNlciBpbnB1dCBmb3IgdGhlIGF1dGhlbnRpY2F0aW9uIHByb2Nlc3MuXG5cbmltcG9ydCBJbmZlcm5vIGZyb20gJ2luZmVybm8nO1xuXG5pbXBvcnQgU2Vzc2lvbkRyb3Bkb3duIGZyb20gJy4vU2Vzc2lvbkRyb3Bkb3duJztcbmltcG9ydCBQYXNzd29yZEZpZWxkIGZyb20gJy4vUGFzc3dvcmRGaWVsZCc7XG5cblxuZXhwb3J0IGNvbnN0IFVzZXJQYW5lbEZvcm0gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCIgb25TdWJtaXQ9eyBwcm9wcy5oYW5kbGVMb2dpblN1Ym1pdCB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXVzZXJuYW1lXCI+eyBwcm9wcy5hY3RpdmVVc2VyLmRpc3BsYXlfbmFtZSB9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcGFzc3dvcmQtY29udGFpbmVyXCI+XG4gICAgICAgIDxQYXNzd29yZEZpZWxkXG4gICAgICAgICAgcGFzc3dvcmQ9eyBwcm9wcy5wYXNzd29yZCB9XG4gICAgICAgICAgcGFzc3dvcmRGYWlsZWQ9eyBwcm9wcy5wYXNzd29yZEZhaWxlZCB9XG4gICAgICAgICAgaGFuZGxlUGFzc3dvcmRJbnB1dD17IHByb3BzLmhhbmRsZVBhc3N3b3JkSW5wdXQgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1yb3ctY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgICAgPFNlc3Npb25Ecm9wZG93blxuICAgICAgICAgICAgICBhY3RpdmVTZXNzaW9uPXsgcHJvcHMuYWN0aXZlU2Vzc2lvbiB9XG4gICAgICAgICAgICAgIGRyb3Bkb3duQWN0aXZlPXsgcHJvcHMuZHJvcGRvd25BY3RpdmUgfVxuICAgICAgICAgICAgICBoYW5kbGVEcm9wZG93bkNsaWNrPXsgcHJvcHMuaGFuZGxlRHJvcGRvd25DbGljayB9XG4gICAgICAgICAgICAgIGhhbmRsZURyb3Bkb3duTGVhdmU9eyBwcm9wcy5oYW5kbGVEcm9wZG93bkxlYXZlIH1cbiAgICAgICAgICAgICAgc2V0QWN0aXZlU2Vzc2lvbj17IHByb3BzLnNldEFjdGl2ZVNlc3Npb24gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR09cIiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUGFuZWxGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VzNi9Db21wb25lbnRzL1VzZXJQYW5lbEZvcm0uanN4IiwiLy8gVXNlclN3aXRjaGVyIC0+IFJlcXVpcmVkIGJ5IENvbXBvbmVudHMvVXNlclBhbmVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSGFuZGxlcyAocG9vcmx5KSB0aGUgdGFzayBvZiBzd2l0Y2hpbmcgYmV0d2VlblxuLy8gbXVsdGlwbGUgdXNlcnMgb24gdGhlIHNhbWUgc3lzdGVtLlxuXG5pbXBvcnQgSW5mZXJubyBmcm9tICdpbmZlcm5vJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnaW5mZXJuby1jb21wb25lbnQnO1xuXG5jb25zdCBGQURFX0RVUkFUSU9OID0gMjAwO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIFwiZmFkZU91dFwiOiBmYWxzZSxcbiAgICAgIFwic2VsZWN0ZWRVc2VyXCI6IHRoaXMucHJvcHMuYWN0aXZlVXNlcixcbiAgICAgIFwic2VsZWN0ZWRVc2VySW5kZXhcIjogd2luZG93LmxpZ2h0ZG0udXNlcnMuaW5kZXhPZih0aGlzLnByb3BzLmFjdGl2ZVVzZXIpXG4gICAgfTtcbiAgfVxuXG5cbiAgaGFuZGxlQmFja0J1dHRvbihldmVudCkge1xuICAgIHRoaXMucHJvcHMuc2V0QWN0aXZlVXNlcih0aGlzLnN0YXRlLnNlbGVjdGVkVXNlcik7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFwiZmFkZU91dFwiOiB0cnVlXG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBcImZhZGVPdXRcIjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0sIEZBREVfRFVSQVRJT04pO1xuICB9XG5cblxuICBoYW5kbGVVc2VyQ2xpY2soaW5kZXgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFwic2VsZWN0ZWRVc2VyXCI6IHdpbmRvdy5saWdodGRtLnVzZXJzW2luZGV4XSxcbiAgICAgIFwic2VsZWN0ZWRVc2VySW5kZXhcIjogaW5kZXhcbiAgICB9KTtcbiAgfVxuXG5cbiAgZ2VuZXJhdGVVc2VyTGlzdCgpIHtcbiAgICBsZXQgYWN0aXZlSW5kZXggPSB0aGlzLnN0YXRlLnNlbGVjdGVkVXNlckluZGV4O1xuXG4gICAgbGV0IGF2YXRhcnMgPSB3aW5kb3cubGlnaHRkbS51c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY2xhc3NlcyA9IFsnYXZhdGFyLWNvbnRhaW5lciddO1xuXG4gICAgICBpZiAoaW5kZXggPT09IGFjdGl2ZUluZGV4KSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlSW5kZXggLSAxKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgncHJldmlvdXMnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluZGV4ID09PSBhY3RpdmVJbmRleCArIDEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCduZXh0Jyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9eyBjbGFzc2VzLmpvaW4oJyAnKSB9IG9uQ2xpY2s9eyB0aGlzLmhhbmRsZVVzZXJDbGljay5iaW5kKHRoaXMsIGluZGV4KSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLWJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLW1hc2tcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1c2VyLWF2YXRhclwiIHNyYz17IHVzZXIuaW1hZ2UgfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXItbmFtZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPnsgdXNlci5kaXNwbGF5X25hbWUgfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFsLW5hbWVcIj57IHVzZXIucmVhbF9uYW1lIH08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICAvLyBWZXJ5IGhhY2t5LiBBZGQgYW4gZXh0cmEgY29weSBvZiB0aGUgbGFzdCBlbGVtZW50IHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RcbiAgICAvLyBpZiB0aGUgZmlyc3QgZWxlbWVudCBpbiB0aGUgbGlzdCBpcyBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSAwKSB7XG4gICAgICBsZXQgdXNlciA9IHdpbmRvdy5saWdodGRtLnVzZXJzW3dpbmRvdy5saWdodGRtLnVzZXJzLmxlbmd0aCAtIDFdO1xuICAgICAgYXZhdGFycy5zcGxpY2UoMCwgMCxcbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nYXZhdGFyLWNvbnRhaW5lciBwcmV2aW91cycgb25DbGljaz17IHRoaXMuaGFuZGxlVXNlckNsaWNrLmJpbmQodGhpcywgd2luZG93LmxpZ2h0ZG0udXNlcnMubGVuZ3RoIC0gMSkgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1tYXNrXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidXNlci1hdmF0YXJcIiBzcmM9eyB1c2VyLmltYWdlIH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLW5hbWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcm5hbWVcIj57IHVzZXIuZGlzcGxheV9uYW1lIH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhbC1uYW1lXCI+eyB1c2VyLnJlYWxfbmFtZSB9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFZlcnkgaGFja3kuIEFkZCBhbiBleHRyYSBjb3B5IG9mIHRoZSBmaXJzdCBlbGVtZW50IHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICAvLyBpZiB0aGUgbGFzdCBlbGVtZW50IGluIHRoZSBsaXN0IGlzIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICBpZiAoYWN0aXZlSW5kZXggPT09IHdpbmRvdy5saWdodGRtLnVzZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgIGxldCB1c2VyID0gd2luZG93LmxpZ2h0ZG0udXNlcnNbMF07XG4gICAgICBhdmF0YXJzLnB1c2goXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J2F2YXRhci1jb250YWluZXIgbmV4dCcgb25DbGljaz17IHRoaXMuaGFuZGxlVXNlckNsaWNrLmJpbmQodGhpcywgMCkgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhci1tYXNrXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidXNlci1hdmF0YXJcIiBzcmM9eyB1c2VyLmltYWdlIH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyLW5hbWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcm5hbWVcIj57IHVzZXIuZGlzcGxheV9uYW1lIH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhbC1uYW1lXCI+eyB1c2VyLnJlYWxfbmFtZSB9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiYXZhdGFyLXNsaWRlclwiPlxuICAgICAgICB7IGF2YXRhcnMgfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNsYXNzZXMgPSBbJ2xvZ2luLXBhbmVsLXN3aXRjaGVyJ107XG5cbiAgICBsZXQgdXNlckxpc3QgPSB0aGlzLmdlbmVyYXRlVXNlckxpc3QoKTtcbiAgICBsZXQgdXNlckNvdW50ID0gd2luZG93LmxpZ2h0ZG0udXNlcnMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICBjbGFzc2VzLnB1c2goXCJhY3RpdmVcIik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmZhZGVPdXQgPT09IHRydWUpIHtcbiAgICAgIGNsYXNzZXMucHVzaChcImZhZGVvdXRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3Nlcy5qb2luKCcgJykgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5Vc2VyIDxlbT57IHRoaXMuc3RhdGUuc2VsZWN0ZWRVc2VySW5kZXggKyAxIH08L2VtPiBvZiA8ZW0+eyB1c2VyQ291bnQgfTwvZW0+PC9kaXY+XG4gICAgICAgIHsgdXNlckxpc3QgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUJhY2tCdXR0b24uYmluZCh0aGlzKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPkJBQ0s8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0NvbXBvbmVudHMvVXNlclN3aXRjaGVyLmpzeCIsIi8vIFdhbGxwYXBlclN3aXRjaGVyIC0+IFJlcXVpcmVkIGJ5IENvbXBvbmVudHMvQ29tbWFuZFBhbmVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VydmVzIHRvIGhhbmRsZSB3YWxscGFwZXIgc3dpdGNoaW5nIHRocm91Z2ggRE9NIG1hbmlwdWxhdGlvbi5cblxuaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2luZmVybm8tY29tcG9uZW50JztcblxuaW1wb3J0ICogYXMgV2FsbHBhcGVyT3BlcmF0aW9ucyBmcm9tIFwiLi4vTG9naWMvV2FsbHBhcGVyT3BlcmF0aW9uc1wiO1xuaW1wb3J0ICogYXMgU2V0dGluZ3MgZnJvbSBcIi4uL0xvZ2ljL1NldHRpbmdzXCI7XG5cbmNvbnN0IEZBREVPVVRfVElNRSA9IDYwMDtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYWxscGFwZXJTd2l0Y2hlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgbGV0IHdhbGxwYXBlckRpcmVjdG9yeSA9IFdhbGxwYXBlck9wZXJhdGlvbnMuZ2V0V2FsbHBhcGVyRGlyZWN0b3J5KCk7XG4gICAgbGV0IHdhbGxwYXBlcnMgPSBXYWxscGFwZXJPcGVyYXRpb25zLmdldFdhbGxwYXBlcnMod2FsbHBhcGVyRGlyZWN0b3J5KTtcblxuICAgIHRoaXMuY3ljbGVyQmFja2dyb3VuZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmN5Y2xlckZvcmVncm91bmQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jeWNsZXJQcmVsb2FkZXIgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgXCJkaXJlY3RvcnlcIjogd2FsbHBhcGVyRGlyZWN0b3J5LFxuICAgICAgXCJ3YWxscGFwZXJzXCI6IHdhbGxwYXBlcnMsXG4gICAgICBcInNlbGVjdGVkV2FsbHBhcGVyXCI6IHVuZGVmaW5lZCxcbiAgICAgIFwic2F2ZWRXYWxscGFwZXJcIjogdW5kZWZpbmVkLFxuICAgICAgXCJzd2l0Y2hlclwiOiB7XG4gICAgICAgIFwiYWN0aXZlXCI6IGZhbHNlLFxuICAgICAgICBcImN1cnJlbnRseUZhZGluZ1wiOiBmYWxzZSxcbiAgICAgICAgXCJpbmRleFwiOiAwXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIC8vIFNldCBiYWNrZ3JvdW5kIHdhbGxwYXBlclxuICAgIGxldCBkaXJlY3RvcnkgPSB0aGlzLnN0YXRlLmRpcmVjdG9yeTtcbiAgICBsZXQgaW1hZ2UgPSBTZXR0aW5ncy5yZXF1ZXN0U2V0dGluZyhcIndhbGxwYXBlclwiLCBcInNwYWNlLTEuanBnXCIpO1xuICAgIHRoaXMuY3ljbGVyQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53YWxscGFwZXItYmFja2dyb3VuZCcpWzBdO1xuICAgIHRoaXMuY3ljbGVyRm9yZWdyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53YWxscGFwZXItZm9yZWdyb3VuZCcpWzBdO1xuICAgIHRoaXMuY3ljbGVyUHJlbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndhbGxwYXBlci1wcmVsb2FkJylbMF07XG5cbiAgICB0aGlzLmN5Y2xlckZvcmVncm91bmQuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJyR7ZGlyZWN0b3J5fSR7aW1hZ2V9JylgO1xuICAgIHRoaXMuY3ljbGVyRm9yZWdyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJzYXZlZFdhbGxwYXBlclwiOiBpbWFnZVxuICAgIH0pO1xuICB9XG5cblxuICBhY2NlcHRXYWxscGFwZXIoKSB7XG4gICAgbGV0IHNlbGVjdGVkV2FsbHBhcGVyID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFdhbGxwYXBlcjtcbiAgICBsZXQgc3dpdGNoZXIgPSB0aGlzLnN0YXRlLnN3aXRjaGVyO1xuXG4gICAgLy8gRHVlIGRpbGlnZW5jZS5cbiAgICBTZXR0aW5ncy5zYXZlU2V0dGluZyhcIndhbGxwYXBlclwiLCBzZWxlY3RlZFdhbGxwYXBlcik7XG4gICAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUoXCJUaGlzIHdhbGxwYXBlciBoYXMgYmVlbiBzYXZlZCBhcyB5b3VyIGRlZmF1bHQgYmFja2dyb3VuZC5cIiwgJ3N1Y2Nlc3MnKTtcblxuICAgIC8vIFJlc2V0IHN3aXRjaGVyIHN0YXRlXG4gICAgc3dpdGNoZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgc3dpdGNoZXIuaW5kZXggPSAwO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBcInNlbGVjdGVkV2FsbHBhcGVyXCI6IHNlbGVjdGVkV2FsbHBhcGVyLFxuICAgICAgXCJzYXZlZFdhbGxwYXBlclwiOiBzZWxlY3RlZFdhbGxwYXBlcixcbiAgICAgIFwic3dpdGNoZXJcIjogc3dpdGNoZXJcbiAgICB9KTtcbiAgfVxuXG5cbiAgY3ljbGVXYWxscGFwZXIoKSB7XG4gICAgLy8gUHJldmVudCBhbmltYXRpb24gdHJhbnNpdGlvbnMgc3RhY2tpbmcgYW5kIGNhdXNpbmcgaXNzdWVzLlxuICAgIGlmICh0aGlzLnN0YXRlLnN3aXRjaGVyLmN1cnJlbnRseUZhZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCB3YWxscGFwZXJzID0gdGhpcy5zdGF0ZS53YWxscGFwZXJzO1xuICAgIGxldCBzd2l0Y2hlciA9IHRoaXMuc3RhdGUuc3dpdGNoZXI7XG5cbiAgICBjb25zdCBuZXh0SW5kZXggPSAoaW5kZXgpID0+IChpbmRleCArIHdhbGxwYXBlcnMubGVuZ3RoICsgMSkgJSB3YWxscGFwZXJzLmxlbmd0aDtcblxuICAgIGxldCBuZXdJbmRleCA9IG5leHRJbmRleChzd2l0Y2hlci5pbmRleCk7XG4gICAgbGV0IG5ld1dhbGxwYXBlciA9IHdhbGxwYXBlcnNbbmV3SW5kZXhdO1xuXG4gICAgbGV0IHByZWxvYWRlZEluZGV4ID0gbmV4dEluZGV4KG5ld0luZGV4KTtcbiAgICBsZXQgcHJlbG9hZGVkV2FsbHBhcGVyID0gd2FsbHBhcGVyc1twcmVsb2FkZWRJbmRleF07XG5cbiAgICB0aGlzLnNldFdhbGxwYXBlcihuZXdXYWxscGFwZXIsIHByZWxvYWRlZFdhbGxwYXBlcik7XG5cbiAgICBzd2l0Y2hlci5pbmRleCA9IG5ld0luZGV4O1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBcInN3aXRjaGVyXCI6IHN3aXRjaGVyXG4gICAgfSk7XG4gIH1cblxuXG4gIGhhbmRsZVN3aXRjaGVyQWN0aXZhdGlvbigpIHtcbiAgICBsZXQgc3dpdGNoZXIgPSB0aGlzLnN0YXRlLnN3aXRjaGVyO1xuICAgIHN3aXRjaGVyLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5jeWNsZVdhbGxwYXBlcigpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBcInN3aXRjaGVyXCI6IHN3aXRjaGVyXG4gICAgfSk7XG4gIH1cblxuXG4gIHJlamVjdFdhbGxwYXBlcigpIHtcbiAgICBsZXQgc2F2ZWRXYWxscGFwZXIgPSB0aGlzLnN0YXRlLnNhdmVkV2FsbHBhcGVyO1xuICAgIGxldCBzd2l0Y2hlciA9IHRoaXMuc3RhdGUuc3dpdGNoZXI7XG5cbiAgICAvLyBSZXNldCBzd2l0Y2hlciBzdGF0ZVxuICAgIHN3aXRjaGVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHN3aXRjaGVyLmluZGV4ID0gMDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgXCJzd2l0Y2hlclwiOiBzd2l0Y2hlclxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRXYWxscGFwZXIoc2F2ZWRXYWxscGFwZXIpO1xuXG4gICAgd2luZG93Lm5vdGlmaWNhdGlvbnMuZ2VuZXJhdGUoXCJXYWxscGFwZXIgcmVzZXQgdG8gZGVmYXVsdCwgbm8gY2hhbmdlcyBzYXZlZC5cIik7XG4gIH1cblxuXG4gIHNldFdhbGxwYXBlcihuZXdXYWxscGFwZXIsIHByZWxvYWRlZFdhbGxwYXBlcikge1xuICAgIGxldCBzd2l0Y2hlciA9IHRoaXMuc3RhdGUuc3dpdGNoZXI7XG5cbiAgICAvLyBGYWRlb3V0IGZvcmVncm91bmQgd2FsbHBhcGVyIHRvIG5ldyB3YWxscGFwZXJcbiAgICBsZXQgZGlyZWN0b3J5ID0gdGhpcy5zdGF0ZS5kaXJlY3Rvcnk7XG4gICAgdGhpcy5jeWNsZXJCYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke2RpcmVjdG9yeX0ke25ld1dhbGxwYXBlcn0nKWA7XG4gICAgdGhpcy5jeWNsZXJCYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgICB0aGlzLmN5Y2xlckZvcmVncm91bmQuY2xhc3NOYW1lICs9IFwiIGZhZGVvdXRcIjtcblxuICAgIHN3aXRjaGVyLmN1cnJlbnRseUZhZGluZyA9IHRydWU7XG5cbiAgICAvLyBQcmVsb2FkIHRoZSBuZXh0IGltYWdlXG4gICAgdGhpcy5jeWNsZXJQcmVsb2FkZXIuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJyR7ZGlyZWN0b3J5fSR7cHJlbG9hZGVkV2FsbHBhcGVyfScpYDtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gQ3ljbGUgbmV3IHdhbGxwYXBlciBiYWNrIHRvIHRoZSBmcm9udCwgbWFrZSBpdCB2aXNpYmxlIGFnYWluLlxuICAgICAgdGhpcy5jeWNsZXJGb3JlZ3JvdW5kLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCcke2RpcmVjdG9yeX0ke25ld1dhbGxwYXBlcn0nKWA7XG4gICAgICB0aGlzLmN5Y2xlckZvcmVncm91bmQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuICAgICAgdGhpcy5jeWNsZXJGb3JlZ3JvdW5kLmNsYXNzTmFtZSA9IHRoaXMuY3ljbGVyRm9yZWdyb3VuZC5jbGFzc05hbWUucmVwbGFjZShcIiBmYWRlb3V0XCIsIFwiXCIpO1xuXG4gICAgICBsZXQgc3dpdGNoZXIgPSB0aGlzLnN0YXRlLnN3aXRjaGVyO1xuICAgICAgc3dpdGNoZXIuY3VycmVudGx5RmFkaW5nID0gZmFsc2U7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBcInNlbGVjdGVkV2FsbHBhcGVyXCI6IG5ld1dhbGxwYXBlcixcbiAgICAgICAgXCJzd2l0Y2hlclwiOiBzd2l0Y2hlclxuICAgICAgfSk7XG4gICAgfSwgRkFERU9VVF9USU1FKTtcbiAgfVxuXG5cbiAgZ2VuZXJhdGVPcHRpb25zKCkge1xuICAgIGxldCBjbGFzc2VzID0gWydvcHRpb25zJ107XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zd2l0Y2hlci5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgIGNsYXNzZXMucHVzaChcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J29wdGlvbnMtd3JhcHBlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgY2xhc3Nlcy5qb2luKCcgJykgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1yZWplY3RcIiBvbkNsaWNrPXsgdGhpcy5yZWplY3RXYWxscGFwZXIuYmluZCh0aGlzKSB9ID7inJU8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1hY2NlcHRcIiBvbkNsaWNrPXsgdGhpcy5hY2NlcHRXYWxscGFwZXIuYmluZCh0aGlzKSB9ID7inJM8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLmdlbmVyYXRlT3B0aW9ucygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzdHJvLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXN0cm8tbG9nb1wiIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZVN3aXRjaGVyQWN0aXZhdGlvbi5iaW5kKHRoaXMpIH0+PC9kaXY+XG4gICAgICAgIHsgb3B0aW9ucyB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0NvbXBvbmVudHMvV2FsbHBhcGVyU3dpdGNoZXIuanN4IiwiLy8gV2FsbHBhcGVyT3BlcmF0aW9ucyAtPiBSZXF1aXJlZCBieSBDb21wb25lbnRzL1dhbGxwYXBlclN3aXRjaGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTGlnaHRETSByZWxhdGVkIFdhbGxwYXBlciBjb25maWcgLyBmZXRjaGluZy5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdhbGxwYXBlckRpcmVjdG9yeSgpIHtcbiAgLy8gUmV0dXJuIHRoZSB0ZXN0IGZvbGRlciB3aGVuIGRlYnVnZ2luZy5cbiAgaWYgKHdpbmRvdy5kZWJ1ZyA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiBcInNyYy90ZXN0L3dhbGxwYXBlcnMvXCI7XG4gIH1cblxuICBsZXQgd2FsbHBhcGVyc0RpcmVjdG9yeSA9IHdpbmRvdy5jb25maWcuZ2V0X3N0cihcImJyYW5kaW5nXCIsIFwiYmFja2dyb3VuZF9pbWFnZXNcIik7XG5cbiAgLy8gRG8gTk9UIGFsbG93IHRoZSBkZWZhdWx0IHdhbGxwYXBlciBkaXJlY3RvcnkgdG8gc2V0LCBhcyB0aGlzIHdpbGwgcHJldmVudCB0aGUgZGVmYXVsdCBwcm92aWRlZCBiYWNrZ3JvdW5kcyBmcm9tXG4gIC8vIGJlaW5nIHVzZWQgMTAwJSBvZiB0aGUgdGltZSBpbiBhIHN0b2NrIGluc3RhbGwuXG4gIGlmICh3YWxscGFwZXJzRGlyZWN0b3J5ID09IFwiL3Vzci9zaGFyZS9iYWNrZ3JvdW5kc1wiIHx8IHdhbGxwYXBlcnNEaXJlY3RvcnkgPT0gXCIvdXNyL3NoYXJlL2JhY2tncm91bmRzL1wiKSB7XG4gICAgd2FsbHBhcGVyc0RpcmVjdG9yeSA9IFwiL3Vzci9zaGFyZS9saWdodGRtLXdlYmtpdC90aGVtZXMvbGlnaHRkbS13ZWJraXQtdGhlbWUtYWV0aGVyL3NyYy9pbWcvd2FsbHBhcGVycy9cIjtcbiAgfVxuXG4gIHJldHVybiB3YWxscGFwZXJzRGlyZWN0b3J5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2FsbHBhcGVycyhkaXJlY3RvcnkpIHtcbiAgLy8gSWYgd2UncmUgaW4gdGVzdCBtb2RlLCB3ZSBzdGljayB0byBhIHN0YXRpYyByb3RhdGlvbiBvZiB0aHJlZSBkZWZhdWx0IHdhbGxwYXBlcnMuXG4gIC8vIEluIHByb2R1Y3Rpb24sIGl0IGlzIHBvc3NpYmxlIHRoYXQgYSB1c2VyIHdpbGwgY2hhbmdlIHdoYXQgd2FsbHBhcGVycyBhcmUgYXZhaWxhYmxlLlxuICBpZiAod2luZG93LmRlYnVnID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIFsnYm9rby5qcGcnLCAnbW91bnRhaW5zLTIucG5nJywgJ3NwYWNlLTEuanBnJ107XG4gIH1cblxuICBsZXQgd2FsbHBhcGVycztcblxuICB3YWxscGFwZXJzID0gd2luZG93LmdyZWV0ZXJ1dGlsLmRpcmxpc3QoZGlyZWN0b3J5KTtcbiAgd2FsbHBhcGVycyA9IHdhbGxwYXBlcnMubWFwKChlLCBpLCBhKSA9PiBlLnNwbGl0KFwiL1wiKS5wb3AoKSk7XG5cbiAgcmV0dXJuIHdhbGxwYXBlcnM7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L0xvZ2ljL1dhbGxwYXBlck9wZXJhdGlvbnMuanMiLCJleHBvcnQgY29uc3QgcGFkWmVyb2VzID0gKGkpID0+IHtcbiAgcmV0dXJuIChpIDwgMTApID8gXCIwXCIgKyBpIDogaTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L1V0aWxzL1V0aWxzLmpzIiwiaW1wb3J0IEluZmVybm8gZnJvbSAnaW5mZXJubyc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IE5vdGlmaWNhdGlvbnMgZnJvbSAnLi9VdGlscy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCBDb21tYW5kUGFuZWwgZnJvbSAnLi9Db21wb25lbnRzL0NvbW1hbmRQYW5lbCc7XG5pbXBvcnQgRGF0ZURpc3BsYXkgZnJvbSAnLi9Db21wb25lbnRzL0RhdGVEaXNwbGF5JztcbmltcG9ydCBVc2VyUGFuZWwgZnJvbSAnLi9Db21wb25lbnRzL1VzZXJQYW5lbCc7XG5cbmltcG9ydCB7IGdldERlZmF1bHRTdGF0ZSwgUHJpbWFyeVJlZHVjZXIgfSBmcm9tICcuL1JlZHVjZXJzL1ByaW1hcnlSZWR1Y2VyJztcbmltcG9ydCB7IGFkZEFkZGl0aW9uYWxTZXR0aW5ncyB9IGZyb20gJy4vUmVkdWNlcnMvU2V0dGluZ3NSZWR1Y2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgbGV0IGluaXRpYWxTdGF0ZSA9IGdldERlZmF1bHRTdGF0ZSgpO1xuICBpbml0aWFsU3RhdGUgPSBhZGRBZGRpdGlvbmFsU2V0dGluZ3MoaW5pdGlhbFN0YXRlKTtcblxuICBsZXQgc3RvcmUgPSBjcmVhdGVTdG9yZShQcmltYXJ5UmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICBJbmZlcm5vLnJlbmRlcig8Q29tbWFuZFBhbmVsIHN0b3JlPXsgc3RvcmUgfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21tYW5kLXBhbmVsXCIpKTtcbiAgSW5mZXJuby5yZW5kZXIoPFVzZXJQYW5lbCBzdG9yZT17IHN0b3JlIH0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlci1wYW5lbFwiKSk7XG4gIEluZmVybm8ucmVuZGVyKDxEYXRlRGlzcGxheSBzdG9yZT17IHN0b3JlIH0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZS1kaXNwbGF5XCIpKTtcbn1cblxud2luZG93Lm9ubG9hZCA9IChlKSA9PiB7XG4gIC8vIEFkZCBub3RpZmljYXRpb25zIHRvIHRoZSBnbG9iYWwgc2NvcGUgZm9yIGVycm9yIGhhbmRsaW5nXG4gIHdpbmRvdy5ub3RpZmljYXRpb25zID0gbmV3IE5vdGlmaWNhdGlvbnMoKTtcblxuICBNYWluKCk7XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXM2L01haW4uanN4IiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC1lcy9fU3ltYm9sLmpzIiwiaW1wb3J0IGJhc2VHZXRUYWcgZnJvbSAnLi9fYmFzZUdldFRhZy5qcyc7XG5pbXBvcnQgZ2V0UHJvdG90eXBlIGZyb20gJy4vX2dldFByb3RvdHlwZS5qcyc7XG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpc1BsYWluT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9sb2Rhc2gtZXMvaXNQbGFpbk9iamVjdC5qcyIsIi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICB2YXIgbGFzdCA9IGZ1bmNzW2Z1bmNzLmxlbmd0aCAtIDFdO1xuICB2YXIgcmVzdCA9IGZ1bmNzLnNsaWNlKDAsIC0xKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVzdC5yZWR1Y2VSaWdodChmdW5jdGlvbiAoY29tcG9zZWQsIGYpIHtcbiAgICAgIHJldHVybiBmKGNvbXBvc2VkKTtcbiAgICB9LCBsYXN0LmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9yZWR1eC9lcy9jb21wb3NlLmpzIiwiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0ICQkb2JzZXJ2YWJsZSBmcm9tICdzeW1ib2wtb2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG5leHBvcnQgdmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiAnQEByZWR1eC9JTklUJ1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbmhhbmNlciBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW50ZXJvcGVyYWJpbGl0eSBwb2ludCBmb3Igb2JzZXJ2YWJsZS9yZWFjdGl2ZSBsaWJyYXJpZXMuXG4gICAqIEByZXR1cm5zIHtvYnNlcnZhYmxlfSBBIG1pbmltYWwgb2JzZXJ2YWJsZSBvZiBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1vYnNlcnZhYmxlXG4gICAqL1xuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHsgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlIH07XG4gICAgICB9XG4gICAgfSwgX3JlZlskJG9ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfVxuXG4gIC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyWyQkb2JzZXJ2YWJsZV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlZHV4L2VzL2NyZWF0ZVN0b3JlLmpzIiwiLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlZHV4L2VzL3V0aWxzL3dhcm5pbmcuanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwiaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4vY3JlYXRlU3RvcmUnO1xuaW1wb3J0IGNvbWJpbmVSZWR1Y2VycyBmcm9tICcuL2NvbWJpbmVSZWR1Y2Vycyc7XG5pbXBvcnQgYmluZEFjdGlvbkNyZWF0b3JzIGZyb20gJy4vYmluZEFjdGlvbkNyZWF0b3JzJztcbmltcG9ydCBhcHBseU1pZGRsZXdhcmUgZnJvbSAnLi9hcHBseU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAnLi9jb21wb3NlJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4vdXRpbHMvd2FybmluZyc7XG5cbi8qXG4qIFRoaXMgaXMgYSBkdW1teSBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgZnVuY3Rpb24gbmFtZSBoYXMgYmVlbiBhbHRlcmVkIGJ5IG1pbmlmaWNhdGlvbi5cbiogSWYgdGhlIGZ1bmN0aW9uIGhhcyBiZWVuIG1pbmlmaWVkIGFuZCBOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLCB3YXJuIHRoZSB1c2VyLlxuKi9cbmZ1bmN0aW9uIGlzQ3J1c2hlZCgpIHt9XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBpc0NydXNoZWQubmFtZSA9PT0gJ3N0cmluZycgJiYgaXNDcnVzaGVkLm5hbWUgIT09ICdpc0NydXNoZWQnKSB7XG4gIHdhcm5pbmcoJ1lvdSBhcmUgY3VycmVudGx5IHVzaW5nIG1pbmlmaWVkIGNvZGUgb3V0c2lkZSBvZiBOT0RFX0VOViA9PT0gXFwncHJvZHVjdGlvblxcJy4gJyArICdUaGlzIG1lYW5zIHRoYXQgeW91IGFyZSBydW5uaW5nIGEgc2xvd2VyIGRldmVsb3BtZW50IGJ1aWxkIG9mIFJlZHV4LiAnICsgJ1lvdSBjYW4gdXNlIGxvb3NlLWVudmlmeSAoaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvbG9vc2UtZW52aWZ5KSBmb3IgYnJvd3NlcmlmeSAnICsgJ29yIERlZmluZVBsdWdpbiBmb3Igd2VicGFjayAoaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMDAzMDAzMSkgJyArICd0byBlbnN1cmUgeW91IGhhdmUgdGhlIGNvcnJlY3QgY29kZSBmb3IgeW91ciBwcm9kdWN0aW9uIGJ1aWxkLicpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBiaW5kQWN0aW9uQ3JlYXRvcnMsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVkdXgvZXMvaW5kZXguanMiLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5pbXBvcnQgZ2V0UmF3VGFnIGZyb20gJy4vX2dldFJhd1RhZy5qcyc7XG5pbXBvcnQgb2JqZWN0VG9TdHJpbmcgZnJvbSAnLi9fb2JqZWN0VG9TdHJpbmcuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUdldFRhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19iYXNlR2V0VGFnLmpzIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuZXhwb3J0IGRlZmF1bHQgZnJlZUdsb2JhbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzIiwiaW1wb3J0IG92ZXJBcmcgZnJvbSAnLi9fb3ZlckFyZy5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQcm90b3R5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC1lcy9fZ2V0UHJvdG90eXBlLmpzIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJhd1RhZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19nZXRSYXdUYWcuanMiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanMiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3ZlckFyZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19vdmVyQXJnLmpzIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL19yb290LmpzIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qcyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0b3JlIGVuaGFuY2VyIHRoYXQgYXBwbGllcyBtaWRkbGV3YXJlIHRvIHRoZSBkaXNwYXRjaCBtZXRob2RcbiAqIG9mIHRoZSBSZWR1eCBzdG9yZS4gVGhpcyBpcyBoYW5keSBmb3IgYSB2YXJpZXR5IG9mIHRhc2tzLCBzdWNoIGFzIGV4cHJlc3NpbmdcbiAqIGFzeW5jaHJvbm91cyBhY3Rpb25zIGluIGEgY29uY2lzZSBtYW5uZXIsIG9yIGxvZ2dpbmcgZXZlcnkgYWN0aW9uIHBheWxvYWQuXG4gKlxuICogU2VlIGByZWR1eC10aHVua2AgcGFja2FnZSBhcyBhbiBleGFtcGxlIG9mIHRoZSBSZWR1eCBtaWRkbGV3YXJlLlxuICpcbiAqIEJlY2F1c2UgbWlkZGxld2FyZSBpcyBwb3RlbnRpYWxseSBhc3luY2hyb25vdXMsIHRoaXMgc2hvdWxkIGJlIHRoZSBmaXJzdFxuICogc3RvcmUgZW5oYW5jZXIgaW4gdGhlIGNvbXBvc2l0aW9uIGNoYWluLlxuICpcbiAqIE5vdGUgdGhhdCBlYWNoIG1pZGRsZXdhcmUgd2lsbCBiZSBnaXZlbiB0aGUgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBmdW5jdGlvbnNcbiAqIGFzIG5hbWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBtaWRkbGV3YXJlcyBUaGUgbWlkZGxld2FyZSBjaGFpbiB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHN0b3JlIGVuaGFuY2VyIGFwcGx5aW5nIHRoZSBtaWRkbGV3YXJlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1pZGRsZXdhcmVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjcmVhdGVTdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpO1xuICAgICAgdmFyIF9kaXNwYXRjaCA9IHN0b3JlLmRpc3BhdGNoO1xuICAgICAgdmFyIGNoYWluID0gW107XG5cbiAgICAgIHZhciBtaWRkbGV3YXJlQVBJID0ge1xuICAgICAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUsXG4gICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gX2Rpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjaGFpbiA9IG1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbiAobWlkZGxld2FyZSkge1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKTtcbiAgICAgIH0pO1xuICAgICAgX2Rpc3BhdGNoID0gY29tcG9zZS5hcHBseSh1bmRlZmluZWQsIGNoYWluKShzdG9yZS5kaXNwYXRjaCk7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RvcmUsIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3JlZHV4L2VzL2FwcGx5TWlkZGxld2FyZS5qcyIsImZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCAnICsgKGFjdGlvbkNyZWF0b3JzID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdGlvbkNyZWF0b3JzKSArICcuICcgKyAnRGlkIHlvdSB3cml0ZSBcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXCIgaW5zdGVhZCBvZiBcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cIj8nKTtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWN0aW9uQ3JlYXRvcnMpO1xuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVkdXgvZXMvYmluZEFjdGlvbkNyZWF0b3JzLmpzIiwiaW1wb3J0IHsgQWN0aW9uVHlwZXMgfSBmcm9tICcuL2NyZWF0ZVN0b3JlJztcbmltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4vdXRpbHMvd2FybmluZyc7XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uTmFtZSA9IGFjdGlvblR5cGUgJiYgJ1wiJyArIGFjdGlvblR5cGUudG9TdHJpbmcoKSArICdcIicgfHwgJ2FuIGFjdGlvbic7XG5cbiAgcmV0dXJuICdHaXZlbiBhY3Rpb24gJyArIGFjdGlvbk5hbWUgKyAnLCByZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQuICcgKyAnVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLic7XG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuSU5JVCA/ICdwcmVsb2FkZWRTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnIDogJ3ByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyJztcblxuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgJyArICd0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuJztcbiAgfVxuXG4gIGlmICghaXNQbGFpbk9iamVjdChpbnB1dFN0YXRlKSkge1xuICAgIHJldHVybiAnVGhlICcgKyBhcmd1bWVudE5hbWUgKyAnIGhhcyB1bmV4cGVjdGVkIHR5cGUgb2YgXCInICsge30udG9TdHJpbmcuY2FsbChpbnB1dFN0YXRlKS5tYXRjaCgvXFxzKFthLXp8QS1aXSspLylbMV0gKyAnXCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgJyArICgna2V5czogXCInICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyAnXCInKTtcbiAgfVxuXG4gIHZhciB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICFyZWR1Y2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XTtcbiAgfSk7XG5cbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcblxuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAnVW5leHBlY3RlZCAnICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyAnICcgKyAoJ1wiJyArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiIGZvdW5kIGluICcgKyBhcmd1bWVudE5hbWUgKyAnLiAnKSArICdFeHBlY3RlZCB0byBmaW5kIG9uZSBvZiB0aGUga25vd24gcmVkdWNlciBrZXlzIGluc3RlYWQ6ICcgKyAoJ1wiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTYW5pdHkocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiAnICsgJ0lmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCAnICsgJ2V4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgJyArICdub3QgYmUgdW5kZWZpbmVkLicpO1xuICAgIH1cblxuICAgIHZhciB0eXBlID0gJ0BAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05fJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogdHlwZSB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkIHdoZW4gcHJvYmVkIHdpdGggYSByYW5kb20gdHlwZS4gJyArICgnRG9uXFwndCB0cnkgdG8gaGFuZGxlICcgKyBBY3Rpb25UeXBlcy5JTklUICsgJyBvciBvdGhlciBhY3Rpb25zIGluIFwicmVkdXgvKlwiICcpICsgJ25hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlICcgKyAnY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgJyArICdpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgJyArICdhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQuJyk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2FybmluZygnTm8gcmVkdWNlciBwcm92aWRlZCBmb3Iga2V5IFwiJyArIGtleSArICdcIicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHZhciB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB7fTtcbiAgfVxuXG4gIHZhciBzYW5pdHlFcnJvcjtcbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2FuaXR5KGZpbmFsUmVkdWNlcnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2FuaXR5RXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKCkge1xuICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgICBpZiAoc2FuaXR5RXJyb3IpIHtcbiAgICAgIHRocm93IHNhbml0eUVycm9yO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgd2FybmluZ01lc3NhZ2UgPSBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKHN0YXRlLCBmaW5hbFJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSk7XG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgd2FybmluZyh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tpXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1trZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtrZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2Uoa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIG5leHRTdGF0ZVtrZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vcmVkdXgvZXMvY29tYmluZVJlZHVjZXJzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9pbmRleCcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9wb255ZmlsbCA9IHJlcXVpcmUoJy4vcG9ueWZpbGwnKTtcblxudmFyIF9wb255ZmlsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb255ZmlsbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIHJvb3Q7IC8qIGdsb2JhbCB3aW5kb3cgKi9cblxuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gbW9kdWxlO1xufSBlbHNlIHtcbiAgcm9vdCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG59XG5cbnZhciByZXN1bHQgPSAoMCwgX3BvbnlmaWxsMlsnZGVmYXVsdCddKShyb290KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJlc3VsdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHN5bWJvbE9ic2VydmFibGVQb255ZmlsbDtcbmZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBfU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBfU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKF9TeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gX1N5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBfU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRfU3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9zeW1ib2wtb2JzZXJ2YWJsZS9saWIvcG9ueWZpbGwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==