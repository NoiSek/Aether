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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(19);
module.exports.default = module.exports;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(18);
module.exports.default = module.exports;

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.addAdditionalSettings = addAdditionalSettings;

var _Settings = __webpack_require__(10);

var Settings = _interopRequireWildcard(_Settings);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function addAdditionalSettings(state) {
  // Define our defaults
  var defaults = {
    "active": false,
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(26);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var _Symbol = _root2.default.Symbol;

exports.default = _Symbol;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(20);

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _getPrototype = __webpack_require__(22);

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isObjectLike = __webpack_require__(27);

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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionTypes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = createStore;

var _isPlainObject = __webpack_require__(5);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(31);

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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = __webpack_require__(7);

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = __webpack_require__(30);

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = __webpack_require__(29);

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = __webpack_require__(28);

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = __webpack_require__(6);

var _compose2 = _interopRequireDefault(_compose);

var _warning = __webpack_require__(8);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(1);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _SystemOperations = __webpack_require__(11);

var SystemOperations = _interopRequireWildcard(_SystemOperations);

var _WallpaperSwitcher = __webpack_require__(35);

var _WallpaperSwitcher2 = _interopRequireDefault(_WallpaperSwitcher);

var _Clock = __webpack_require__(43);

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
          "expandedCommands": true
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(1);

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

      var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

      var now = new Date();

      var dayValue = now.getDate();
      var dayName = dayNames[now.getUTCDay()];
      var monthValue = now.getMonth();
      var monthName = monthNames[monthValue];

      var formattedDayValue = void 0;

      // Because Javascript is terrible, (x <= y <= z) becomes ((x <= y) && (y <= z))
      if (4 <= dayValue && dayValue <= 20 || 24 <= dayValue && dayValue <= 30) {
        formattedDayValue = dayValue + 'th';
      } else {
        formattedDayValue = dayValue + ['st', 'nd', 'rd'][dayValue % 10 - 1];
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
      var dateClasses = ['date'];
      var dateString = this.generateDateString();

      if (this.state.initialized === true) {
        dateClasses.push('loaded');
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(1);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _UserSwitcher = __webpack_require__(40);

var _UserSwitcher2 = _interopRequireDefault(_UserSwitcher);

var _Form = __webpack_require__(36);

var _Form2 = _interopRequireDefault(_Form);

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
      _this.setState({
        "_toggleUpdate": !_this.state._toggleUpdate
      });
    });

    _this.state = {
      "dropdownActive": false,
      "fadeIn": false,
      "password": "",
      "passwordFailed": false,
      "switcherActive": false,
      "_toggleUpdate": false
    };
    return _this;
  }

  _createClass(LoginPanel, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      // Define functions required in the global scope by LightDM.
      window.show_prompt = function (text, type) {
        if (type === 'text') {
          window.notifications.generate(text);
        } else if (type === 'password') {
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
        if (this.state.password.toLowerCase() !== 'password') {
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
        'type': 'AUTH_SET_ACTIVE_SESSION',
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
        "type": 'AUTH_SET_ACTIVE_USER',
        "user": user
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
        classes.push('disabled');
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
      })))), createVNode(16, _Form2.default, {
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimaryReducer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getDefaultState = getDefaultState;

var _SettingsReducer = __webpack_require__(3);

var _SystemOperations = __webpack_require__(11);

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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * inferno-component v1.2.2
 * (c) 2017 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (global.Inferno = global.Inferno || {}, global.Inferno.Component = factory(global.Inferno));
})(undefined, function (inferno) {
    'use strict';

    var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
    var isBrowser = typeof window !== 'undefined' && window.document;

    // this is MUCH faster than .constructor === Array and instanceof Array
    // in Node 7 and the later versions of V8, slower in older versions though
    var isArray = Array.isArray;

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

    function isNull(obj) {
        return obj === null;
    }
    function isTrue(obj) {
        return obj === true;
    }
    function isUndefined(obj) {
        return obj === undefined;
    }

    function throwError(message) {
        if (!message) {
            message = ERROR_MSG;
        }
        throw new Error("Inferno Error: " + message);
    }

    var Lifecycle = function Lifecycle() {
        this.listeners = [];
        this.fastUnmount = true;
    };
    Lifecycle.prototype.addListener = function addListener(callback) {
        this.listeners.push(callback);
    };
    Lifecycle.prototype.trigger = function trigger() {
        var this$1 = this;

        for (var i = 0; i < this.listeners.length; i++) {
            this$1.listeners[i]();
        }
    };

    var noOp = ERROR_MSG;
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
        return inferno.createVNode(4096 /* Void */);
    }
    function createTextVNode(text) {
        return inferno.createVNode(1 /* Text */, null, null, text);
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
                    for (var i = 0; i < queue.length; i++) {
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
        if (isFunction(newState)) {
            newState = newState(component.state, component.props, component.context);
        }
        for (var stateKey in newState) {
            component._pendingState[stateKey] = newState[stateKey];
        }
        if (!component._pendingSetState && isBrowser) {
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
            if (isInvalid(nextInput)) {
                nextInput = createVoidVNode();
            } else if (nextInput === inferno.NO_OP) {
                nextInput = component._lastInput;
                didUpdate = false;
            } else if (isStringOrNumber(nextInput)) {
                nextInput = createTextVNode(nextInput);
            } else if (isArray(nextInput)) {
                if (process.env.NODE_ENV !== 'production') {
                    throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
                }
                throwError();
            }
            var lastInput = component._lastInput;
            var vNode = component._vNode;
            var parentDom = lastInput.dom && lastInput.dom.parentNode || (lastInput.dom = vNode.dom);
            component._lastInput = nextInput;
            if (didUpdate) {
                var subLifecycle = component._lifecycle;
                if (!subLifecycle) {
                    subLifecycle = new Lifecycle();
                } else {
                    subLifecycle.listeners = [];
                }
                component._lifecycle = subLifecycle;
                var childContext = component.getChildContext();
                if (!isNullOrUndef(childContext)) {
                    childContext = Object.assign({}, context, component._childContext, childContext);
                } else {
                    childContext = Object.assign({}, context, component._childContext);
                }
                component._patch(lastInput, nextInput, parentDom, subLifecycle, childContext, component._isSVG, false);
                subLifecycle.trigger();
                component.componentDidUpdate(props, prevState);
                inferno.options.afterUpdate && inferno.options.afterUpdate(vNode);
            }
            var dom = vNode.dom = nextInput.dom;
            var componentToDOMNodeMap = component._componentToDOMNodeMap;
            componentToDOMNodeMap && componentToDOMNodeMap.set(component, nextInput.dom);
            updateParentComponentVNodes(vNode, dom);
            if (!isNullOrUndef(callback)) {
                callback();
            }
        } else if (!isNullOrUndef(callback)) {
            callback();
        }
    }
    var Component$1 = function Component(props, context) {
        this.state = {};
        this.refs = {};
        this._blockRender = false;
        this._ignoreSetState = false;
        this._blockSetState = false;
        this._deferSetState = false;
        this._pendingSetState = false;
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
        this.props = props || inferno.EMPTY_OBJ;
        /** @type {object} */
        this.context = context || {};
    };
    Component$1.prototype.render = function render(nextProps, nextState, nextContext) {};
    Component$1.prototype.forceUpdate = function forceUpdate(callback) {
        if (this._unmounted) {
            return;
        }
        isBrowser && applyState(this, true, callback);
    };
    Component$1.prototype.setState = function setState(newState, callback) {
        if (this._unmounted) {
            return;
        }
        if (!this._blockSetState) {
            if (!this._ignoreSetState) {
                queueStateChanges(this, newState, callback, false);
            }
        } else {
            if (process.env.NODE_ENV !== 'production') {
                throwError('cannot update state via setState() in componentWillUpdate().');
            }
            throwError();
        }
    };
    Component$1.prototype.setStateSync = function setStateSync(newState) {
        if (this._unmounted) {
            return;
        }
        if (!this._blockSetState) {
            if (!this._ignoreSetState) {
                queueStateChanges(this, newState, null, true);
            }
        } else {
            if (process.env.NODE_ENV !== 'production') {
                throwError('cannot update state via setState() in componentWillUpdate().');
            }
            throwError();
        }
    };
    Component$1.prototype.componentWillMount = function componentWillMount() {};
    Component$1.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState, prevContext) {};
    Component$1.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState, context) {
        return true;
    };
    Component$1.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, context) {};
    Component$1.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState, nextContext) {};
    Component$1.prototype.getChildContext = function getChildContext() {};
    Component$1.prototype._updateComponent = function _updateComponent(prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
        if (this._unmounted === true) {
            if (process.env.NODE_ENV !== 'production') {
                throwError(noOp);
            }
            throwError();
        }
        if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ || prevState !== nextState || force) {
            if (prevProps !== nextProps || nextProps === inferno.EMPTY_OBJ) {
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
                inferno.options.beforeRender && inferno.options.beforeRender(this);
                var render = this.render(nextProps, state, context);
                inferno.options.afterRender && inferno.options.afterRender(this);
                return render;
            }
        }
        return inferno.NO_OP;
    };

    return Component$1;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * inferno v1.2.2
 * (c) 2017 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory(global.Inferno = global.Inferno || {});
})(undefined, function (exports) {
    'use strict';

    var NO_OP = '$NO_OP';
    var ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
    var isBrowser = typeof window !== 'undefined' && window.document;

    // this is MUCH faster than .constructor === Array and instanceof Array
    // in Node 7 and the later versions of V8, slower in older versions though
    var isArray = Array.isArray;
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
        throw new Error("Inferno Error: " + message);
    }
    function warning(message) {
        console.warn(message);
    }
    var EMPTY_OBJ = {};

    function applyKey(key, vNode) {
        vNode.key = key;
        return vNode;
    }
    function applyKeyIfMissing(key, vNode) {
        if (isNumber(key)) {
            key = "." + key;
        }
        if (isNull(vNode.key) || vNode.key[0] === '.') {
            return applyKey(key, vNode);
        }
        return vNode;
    }
    function applyKeyPrefix(key, vNode) {
        vNode.key = key + vNode.key;
        return vNode;
    }
    function _normalizeVNodes(nodes, result, index, currentKey) {
        for (; index < nodes.length; index++) {
            var n = nodes[index];
            var key = currentKey + "." + index;
            if (!isInvalid(n)) {
                if (isArray(n)) {
                    _normalizeVNodes(n, result, 0, key);
                } else {
                    if (isStringOrNumber(n)) {
                        n = createTextVNode(n);
                    } else if (isVNode(n) && n.dom || n.key && n.key[0] === '.') {
                        n = cloneVNode(n);
                    }
                    if (isNull(n.key) || n.key[0] === '.') {
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
        var newNodes;
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
        for (var i = 0; i < nodes.length; i++) {
            var n = nodes[i];
            if (isInvalid(n) || isArray(n)) {
                var result = (newNodes || nodes).slice(0, i);
                _normalizeVNodes(nodes, result, i, "");
                return result;
            } else if (isStringOrNumber(n)) {
                if (!newNodes) {
                    newNodes = nodes.slice(0, i);
                }
                newNodes.push(applyKeyIfMissing(i, createTextVNode(n)));
            } else if (isVNode(n) && n.dom || isNull(n.key) && !(n.flags & 64 /* HasNonKeyedChildren */)) {
                if (!newNodes) {
                    newNodes = nodes.slice(0, i);
                }
                newNodes.push(applyKeyIfMissing(i, cloneVNode(n)));
            } else if (newNodes) {
                newNodes.push(applyKeyIfMissing(i, cloneVNode(n)));
            }
        }
        return newNodes || nodes;
    }
    function normalizeChildren(children) {
        if (isArray(children)) {
            return normalizeVNodes(children);
        } else if (isVNode(children) && children.dom) {
            return cloneVNode(children);
        }
        return children;
    }
    function normalizeProps(vNode, props, children) {
        if (!(vNode.flags & 28 /* Component */) && isNullOrUndef(children) && !isNullOrUndef(props.children)) {
            vNode.children = props.children;
        }
        if (props.ref) {
            vNode.ref = props.ref;
            delete props.ref;
        }
        if (props.events) {
            vNode.events = props.events;
        }
        if (!isNullOrUndef(props.key)) {
            vNode.key = props.key;
            delete props.key;
        }
    }
    function copyPropsTo(copyFrom, copyTo) {
        for (var prop in copyFrom) {
            if (isUndefined(copyTo[prop])) {
                copyTo[prop] = copyFrom[prop];
            }
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
        var hasProps = !isNull(props);
        var type = vNode.type;
        var children = vNode.children;
        // convert a wrongly created type back to element
        if (isString(type) && vNode.flags & 28 /* Component */) {
            normalizeElement(type, vNode);
            if (hasProps && props.children) {
                vNode.children = props.children;
                children = props.children;
            }
        }
        if (hasProps) {
            normalizeProps(vNode, props, children);
        }
        if (!isInvalid(children)) {
            vNode.children = normalizeChildren(children);
        }
        if (hasProps && !isInvalid(props.children)) {
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
                        warning('Inferno normalisation(...): Encountered two children with same key, all keys must be unique within its siblings. Duplicated key is:' + item);
                    }
                    return hasDuplicate;
                });
            };
            if (vNode.children && Array.isArray(vNode.children)) {
                verifyKeys(vNode.children);
            }
        }
    }

    var options = {
        recyclingEnabled: true,
        findDOMNodeEnabled: false,
        roots: null,
        createVNode: null,
        beforeRender: null,
        afterRender: null,
        afterMount: null,
        afterUpdate: null,
        beforeUnmount: null
    };

    function createVNode(flags, type, props, children, events, key, ref, noNormalise) {
        if (flags & 16 /* ComponentUnknown */) {
                flags = isStatefulComponent(type) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
            }
        var vNode = {
            children: isUndefined(children) ? null : children,
            dom: null,
            events: events || null,
            flags: flags,
            key: isUndefined(key) ? null : key,
            props: props || null,
            ref: ref || null,
            type: type
        };
        if (!noNormalise) {
            normalize(vNode);
        }
        if (options.createVNode) {
            options.createVNode(vNode);
        }
        return vNode;
    }
    function cloneVNode(vNodeToClone, props) {
        var _children = [],
            len = arguments.length - 2;
        while (len-- > 0) {
            _children[len] = arguments[len + 2];
        }var children = _children;
        if (_children.length > 0 && !isNull(_children[0])) {
            if (!props) {
                props = {};
            }
            if (_children.length === 1) {
                children = _children[0];
            }
            if (isUndefined(props.children)) {
                props.children = children;
            } else {
                if (isArray(children)) {
                    if (isArray(props.children)) {
                        props.children = props.children.concat(children);
                    } else {
                        props.children = [props.children].concat(children);
                    }
                } else {
                    if (isArray(props.children)) {
                        props.children.push(children);
                    } else {
                        props.children = [props.children];
                        props.children.push(children);
                    }
                }
            }
        }
        children = null;
        var newVNode;
        if (isArray(vNodeToClone)) {
            var tmpArray = [];
            for (var i = 0; i < vNodeToClone.length; i++) {
                tmpArray.push(cloneVNode(vNodeToClone[i]));
            }
            newVNode = tmpArray;
        } else {
            var flags = vNodeToClone.flags;
            var events = vNodeToClone.events || props && props.events || null;
            var key = !isNullOrUndef(vNodeToClone.key) ? vNodeToClone.key : props ? props.key : null;
            var ref = vNodeToClone.ref || (props ? props.ref : null);
            if (flags & 28 /* Component */) {
                    newVNode = createVNode(flags, vNodeToClone.type, Object.assign({}, vNodeToClone.props, props), null, events, key, ref, true);
                    var newProps = newVNode.props;
                    if (newProps) {
                        var newChildren = newProps.children;
                        // we need to also clone component children that are in props
                        // as the children may also have been hoisted
                        if (newChildren) {
                            if (isArray(newChildren)) {
                                for (var i$1 = 0; i$1 < newChildren.length; i$1++) {
                                    var child = newChildren[i$1];
                                    if (!isInvalid(child) && isVNode(child)) {
                                        newProps.children[i$1] = cloneVNode(child);
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

    function constructDefaults(string, object, value) {
        /* eslint no-return-assign: 0 */
        string.split(',').forEach(function (i) {
            return object[i] = value;
        });
    }
    var xlinkNS = 'http://www.w3.org/1999/xlink';
    var xmlNS = 'http://www.w3.org/XML/1998/namespace';
    var svgNS = 'http://www.w3.org/2000/svg';
    var strictProps = {};
    var booleanProps = {};
    var namespaces = {};
    var isUnitlessNumber = {};
    var skipProps = {};
    var dehyphenProps = {
        httpEquiv: 'http-equiv',
        acceptCharset: 'accept-charset'
    };
    var probablyKebabProps = /^(accentH|arabicF|capH|font[FSVW]|glyph[NO]|horiz[AO]|panose1|renderingI|strikethrough[PT]|underline[PT]|v[AHIM]|vert[AO]|xH|alignmentB|baselineS|clip[PR]|color[IPR]|dominantB|enableB|fill[OR]|flood[COF]|imageR|letterS|lightingC|marker[EMS]|pointerE|shapeR|stop[CO]|stroke[DLMOW]|text[ADR]|unicodeB|wordS|writingM).*/;
    function kebabize(str, smallLetter, largeLetter) {
        return smallLetter + "-" + largeLetter.toLowerCase();
    }
    var delegatedProps = {};
    constructDefaults('xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type', namespaces, xlinkNS);
    constructDefaults('xml:base,xml:lang,xml:space', namespaces, xmlNS);
    constructDefaults('volume,defaultValue,defaultChecked', strictProps, true);
    constructDefaults('children,childrenType,ref,key,selected,checked,multiple', skipProps, true);
    constructDefaults('onClick,onMouseDown,onMouseUp,onMouseMove,onSubmit,onDblClick,onKeyDown,onKeyUp,onKeyPress', delegatedProps, true);
    constructDefaults('muted,scoped,loop,open,checked,default,capture,disabled,readOnly,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate,hidden', booleanProps, true);
    constructDefaults('animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,', isUnitlessNumber, true);

    var Lifecycle = function Lifecycle() {
        this.listeners = [];
        this.fastUnmount = true;
    };
    Lifecycle.prototype.addListener = function addListener(callback) {
        this.listeners.push(callback);
    };
    Lifecycle.prototype.trigger = function trigger() {
        var this$1 = this;

        for (var i = 0; i < this.listeners.length; i++) {
            this$1.listeners[i]();
        }
    };

    var isiOS = isBrowser && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    var delegatedEvents = new Map();
    function handleEvent(name, lastEvent, nextEvent, dom) {
        var delegatedRoots = delegatedEvents.get(name);
        if (nextEvent) {
            if (!delegatedRoots) {
                delegatedRoots = { items: new Map(), count: 0, docEvent: null };
                var docEvent = attachEventToDocument(name, delegatedRoots);
                delegatedRoots.docEvent = docEvent;
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

    var componentPools = new Map();
    var elementPools = new Map();
    function recycleElement(vNode, lifecycle, context, isSVG) {
        var tag = vNode.type;
        var key = vNode.key;
        var pools = elementPools.get(tag);
        if (!isUndefined(pools)) {
            var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
            if (!isUndefined(pool)) {
                var recycledVNode = pool.pop();
                if (!isUndefined(recycledVNode)) {
                    patchElement(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
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
        if (isUndefined(pools)) {
            pools = {
                nonKeyed: [],
                keyed: new Map()
            };
            elementPools.set(tag, pools);
        }
        if (isNull(key)) {
            pools.nonKeyed.push(vNode);
        } else {
            var pool = pools.keyed.get(key);
            if (isUndefined(pool)) {
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
        if (!isUndefined(pools)) {
            var pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
            if (!isUndefined(pool)) {
                var recycledVNode = pool.pop();
                if (!isUndefined(recycledVNode)) {
                    var flags = vNode.flags;
                    var failed = patchComponent(recycledVNode, vNode, null, lifecycle, context, isSVG, flags & 4 /* ComponentClass */, true);
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
        if (isUndefined(pools)) {
            pools = {
                nonKeyed: [],
                keyed: new Map()
            };
            componentPools.set(type, pools);
        }
        if (isNull(key)) {
            pools.nonKeyed.push(vNode);
        } else {
            var pool = pools.keyed.get(key);
            if (isUndefined(pool)) {
                pool = [];
                pools.keyed.set(key, pool);
            }
            pool.push(vNode);
        }
    }

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
            removeChild(parentDom, vNode.dom);
        }
    }
    var alreadyUnmounted = new WeakMap();
    function unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
        var instance = vNode.children;
        var flags = vNode.flags;
        var isStatefulComponent$$1 = flags & 4;
        var ref = vNode.ref;
        var dom = vNode.dom;
        if (alreadyUnmounted.has(vNode) && !isRecycling && !parentDom) {
            return;
        }
        alreadyUnmounted.set(vNode);
        if (!isRecycling) {
            if (isStatefulComponent$$1) {
                if (!instance._unmounted) {
                    instance._ignoreSetState = true;
                    options.beforeUnmount && options.beforeUnmount(vNode);
                    instance.componentWillUnmount && instance.componentWillUnmount();
                    if (ref && !isRecycling) {
                        ref(null);
                    }
                    instance._unmounted = true;
                    options.findDOMNodeEnabled && componentToDOMNodeMap.delete(instance);
                    var subLifecycle = instance._lifecycle;
                    if (!subLifecycle.fastUnmount) {
                        unmount(instance._lastInput, null, subLifecycle, false, isRecycling);
                    }
                }
            } else {
                if (!isNullOrUndef(ref)) {
                    if (!isNullOrUndef(ref.onComponentWillUnmount)) {
                        ref.onComponentWillUnmount(dom);
                    }
                }
                if (!lifecycle.fastUnmount) {
                    unmount(instance, null, lifecycle, false, isRecycling);
                }
            }
        }
        if (parentDom) {
            var lastInput = instance._lastInput;
            if (isNullOrUndef(lastInput)) {
                lastInput = instance;
            }
            removeChild(parentDom, dom);
        }
        if (options.recyclingEnabled && !isStatefulComponent$$1 && (parentDom || canRecycle)) {
            poolComponent(vNode);
        }
    }
    function unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
        var dom = vNode.dom;
        var ref = vNode.ref;
        var events = vNode.events;
        if (alreadyUnmounted.has(vNode) && !isRecycling && !parentDom) {
            return;
        }
        alreadyUnmounted.set(vNode);
        if (!lifecycle.fastUnmount) {
            if (ref && !isRecycling) {
                unmountRef(ref);
            }
            var children = vNode.children;
            if (!isNullOrUndef(children)) {
                unmountChildren$1(children, lifecycle, isRecycling);
            }
        }
        if (!isNull(events)) {
            for (var name in events) {
                // do not add a hasOwnProperty check here, it affects performance
                patchEvent(name, events[name], null, dom);
                events[name] = null;
            }
        }
        if (parentDom) {
            removeChild(parentDom, dom);
        }
        if (options.recyclingEnabled && (parentDom || canRecycle)) {
            poolElement(vNode);
        }
    }
    function unmountChildren$1(children, lifecycle, isRecycling) {
        if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                if (!isInvalid(child) && isObject(child)) {
                    unmount(child, null, lifecycle, false, isRecycling);
                }
            }
        } else if (isObject(children)) {
            unmount(children, null, lifecycle, false, isRecycling);
        }
    }
    function unmountRef(ref) {
        if (isFunction(ref)) {
            ref(null);
        } else {
            if (isInvalid(ref)) {
                return;
            }
            if (process.env.NODE_ENV !== 'production') {
                throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
            }
            throwError();
        }
    }

    function createClassComponentInstance(vNode, Component, props, context, isSVG) {
        if (isUndefined(context)) {
            context = {};
        }
        var instance = new Component(props, context);
        instance.context = context;
        if (instance.props === EMPTY_OBJ) {
            instance.props = props;
        }
        instance._patch = patch;
        if (options.findDOMNodeEnabled) {
            instance._componentToDOMNodeMap = componentToDOMNodeMap;
        }
        instance._unmounted = false;
        instance._pendingSetState = true;
        instance._isSVG = isSVG;
        if (isFunction(instance.componentWillMount)) {
            instance.componentWillMount();
        }
        var childContext = instance.getChildContext();
        if (!isNullOrUndef(childContext)) {
            instance._childContext = Object.assign({}, context, childContext);
        } else {
            instance._childContext = context;
        }
        options.beforeRender && options.beforeRender(instance);
        var input = instance.render(props, instance.state, context);
        options.afterRender && options.afterRender(instance);
        if (isArray(input)) {
            if (process.env.NODE_ENV !== 'production') {
                throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
            }
            throwError();
        } else if (isInvalid(input)) {
            input = createVoidVNode();
        } else if (isStringOrNumber(input)) {
            input = createTextVNode(input);
        } else {
            if (input.dom) {
                input = cloneVNode(input);
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
        replaceVNode(parentDom, mount(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
    }
    function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
        var shallowUnmount = false;
        // we cannot cache nodeType here as vNode might be re-assigned below
        if (vNode.flags & 28 /* Component */) {
                // if we are accessing a stateful or stateless component, we want to access their last rendered input
                // accessing their DOM node is not useful to us here
                unmount(vNode, null, lifecycle, false, isRecycling);
                vNode = vNode.children._lastInput || vNode.children;
                shallowUnmount = true;
            }
        replaceChild(parentDom, dom, vNode.dom);
        unmount(vNode, null, lifecycle, false, isRecycling);
    }
    function createFunctionalComponentInput(vNode, component, props, context) {
        var input = component(props, context);
        if (isArray(input)) {
            if (process.env.NODE_ENV !== 'production') {
                throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
            }
            throwError();
        } else if (isInvalid(input)) {
            input = createVoidVNode();
        } else if (isStringOrNumber(input)) {
            input = createTextVNode(input);
        } else {
            if (input.dom) {
                input = cloneVNode(input);
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
        if (isNullOrUndef(nextNode)) {
            appendChild(parentDom, newNode);
        } else {
            parentDom.insertBefore(newNode, nextNode);
        }
    }
    function documentCreateElement(tag, isSVG) {
        if (isSVG === true) {
            return document.createElementNS(svgNS, tag);
        } else {
            return document.createElement(tag);
        }
    }
    function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
        unmount(lastNode, null, lifecycle, false, isRecycling);
        var dom = mount(nextNode, null, lifecycle, context, isSVG);
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
        if (!lifecycle.fastUnmount || lifecycle.fastUnmount && options.recyclingEnabled && !isRecycling) {
            removeChildren(null, children, lifecycle, isRecycling);
        }
    }
    function removeChildren(dom, children, lifecycle, isRecycling) {
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (!isInvalid(child)) {
                unmount(child, dom, lifecycle, true, isRecycling);
            }
        }
    }
    function isKeyed(lastChildren, nextChildren) {
        return nextChildren.length && !isNullOrUndef(nextChildren[0]) && !isNullOrUndef(nextChildren[0].key) && lastChildren.length && !isNullOrUndef(lastChildren[0]) && !isNullOrUndef(lastChildren[0].key);
    }

    function isCheckedType(type) {
        return type === 'checkbox' || type === 'radio';
    }
    function isControlled(props) {
        var usesChecked = isCheckedType(props.type);
        return usesChecked ? !isNullOrUndef(props.checked) : !isNullOrUndef(props.value);
    }
    function onTextInputChange(e) {
        var vNode = this.vNode;
        var events = vNode.events || EMPTY_OBJ;
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
        var events = vNode.events || EMPTY_OBJ;
        var event = events.onChange;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    }
    function onCheckboxChange(e) {
        var vNode = this.vNode;
        var events = vNode.events || EMPTY_OBJ;
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
        var inputs = document.querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]");
        [].forEach.call(inputs, function (dom) {
            var inputWrapper = wrappers.get(dom);
            if (inputWrapper) {
                var props = inputWrapper.vNode.props;
                if (props) {
                    dom.checked = inputWrapper.vNode.props.checked;
                }
            }
        });
    }
    function processInput(vNode, dom) {
        var props = vNode.props || EMPTY_OBJ;
        applyValue(vNode, dom);
        if (isControlled(props)) {
            var inputWrapper = wrappers.get(dom);
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
                wrappers.set(dom, inputWrapper);
            }
            inputWrapper.vNode = vNode;
            return true;
        }
        return false;
    }
    function applyValue(vNode, dom) {
        var props = vNode.props || EMPTY_OBJ;
        var type = props.type;
        var value = props.value;
        var checked = props.checked;
        var multiple = props.multiple;
        if (type && type !== dom.type) {
            dom.type = type;
        }
        if (multiple && multiple !== dom.multiple) {
            dom.multiple = multiple;
        }
        if (isCheckedType(type)) {
            if (!isNullOrUndef(value)) {
                dom.value = value;
            }
            dom.checked = checked;
            if (type === 'radio' && props.name) {
                handleAssociatedRadioInputs(props.name);
            }
        } else {
            if (!isNullOrUndef(value) && dom.value !== value) {
                dom.value = value;
            } else if (!isNullOrUndef(checked)) {
                dom.checked = checked;
            }
        }
    }

    function isControlled$1(props) {
        return !isNullOrUndef(props.value);
    }
    function updateChildOptionGroup(vNode, value) {
        var type = vNode.type;
        if (type === 'optgroup') {
            var children = vNode.children;
            if (isArray(children)) {
                for (var i = 0; i < children.length; i++) {
                    updateChildOption(children[i], value);
                }
            } else if (isVNode(children)) {
                updateChildOption(children, value);
            }
        } else {
            updateChildOption(vNode, value);
        }
    }
    function updateChildOption(vNode, value) {
        var props = vNode.props || EMPTY_OBJ;
        var dom = vNode.dom;
        // we do this as multiple may have changed
        dom.value = props.value;
        if (isArray(value) && value.indexOf(props.value) !== -1 || props.value === value) {
            dom.selected = true;
        } else {
            dom.selected = props.selected || false;
        }
    }
    function onSelectChange(e) {
        var vNode = this.vNode;
        var events = vNode.events || EMPTY_OBJ;
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
        applyValue$1(this.vNode, dom);
    }
    function processSelect(vNode, dom) {
        var props = vNode.props || EMPTY_OBJ;
        applyValue$1(vNode, dom);
        if (isControlled$1(props)) {
            var selectWrapper = wrappers.get(dom);
            if (!selectWrapper) {
                selectWrapper = {
                    vNode: vNode
                };
                dom.onchange = onSelectChange.bind(selectWrapper);
                dom.onchange.wrapped = true;
                wrappers.set(dom, selectWrapper);
            }
            selectWrapper.vNode = vNode;
            return true;
        }
        return false;
    }
    function applyValue$1(vNode, dom) {
        var props = vNode.props || EMPTY_OBJ;
        if (props.multiple !== dom.multiple) {
            dom.multiple = props.multiple;
        }
        var children = vNode.children;
        if (!isInvalid(children)) {
            var value = props.value;
            if (isArray(children)) {
                for (var i = 0; i < children.length; i++) {
                    updateChildOptionGroup(children[i], value);
                }
            } else if (isVNode(children)) {
                updateChildOptionGroup(children, value);
            }
        }
    }

    function isControlled$2(props) {
        return !isNullOrUndef(props.value);
    }
    function wrappedOnChange$1(e) {
        var vNode = this.vNode;
        var events = vNode.events || EMPTY_OBJ;
        var event = events.onChange;
        if (event.event) {
            event.event(event.data, e);
        } else {
            event(e);
        }
    }
    function onTextareaInputChange(e) {
        var vNode = this.vNode;
        var events = vNode.events || EMPTY_OBJ;
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
        applyValue$2(this.vNode, dom);
    }
    function processTextarea(vNode, dom) {
        var props = vNode.props || EMPTY_OBJ;
        applyValue$2(vNode, dom);
        var textareaWrapper = wrappers.get(dom);
        if (isControlled$2(props)) {
            if (!textareaWrapper) {
                textareaWrapper = {
                    vNode: vNode
                };
                dom.oninput = onTextareaInputChange.bind(textareaWrapper);
                dom.oninput.wrapped = true;
                if (props.onChange) {
                    dom.onchange = wrappedOnChange$1.bind(textareaWrapper);
                    dom.onchange.wrapped = true;
                }
                wrappers.set(dom, textareaWrapper);
            }
            textareaWrapper.vNode = vNode;
            return true;
        }
        return false;
    }
    function applyValue$2(vNode, dom) {
        var props = vNode.props || EMPTY_OBJ;
        var value = props.value;
        var domValue = dom.value;
        if (domValue !== value) {
            if (!isNullOrUndef(value)) {
                dom.value = value;
            } else if (domValue !== '') {
                dom.value = '';
            }
        }
    }

    var wrappers = new Map();
    function processElement(flags, vNode, dom) {
        if (flags & 512 /* InputElement */) {
                return processInput(vNode, dom);
            }
        if (flags & 2048 /* SelectElement */) {
                return processSelect(vNode, dom);
            }
        if (flags & 1024 /* TextareaElement */) {
                return processTextarea(vNode, dom);
            }
        return false;
    }

    function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
        if (lastVNode !== nextVNode) {
            var lastFlags = lastVNode.flags;
            var nextFlags = nextVNode.flags;
            if (nextFlags & 28 /* Component */) {
                    if (lastFlags & 28 /* Component */) {
                            patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */, isRecycling);
                        } else {
                        replaceVNode(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */), lastVNode, lifecycle, isRecycling);
                    }
                } else if (nextFlags & 3970 /* Element */) {
                    if (lastFlags & 3970 /* Element */) {
                            patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
                        } else {
                        replaceVNode(parentDom, mountElement(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
                    }
                } else if (nextFlags & 1 /* Text */) {
                    if (lastFlags & 1 /* Text */) {
                            patchText(lastVNode, nextVNode);
                        } else {
                        replaceVNode(parentDom, mountText(nextVNode, null), lastVNode, lifecycle, isRecycling);
                    }
                } else if (nextFlags & 4096 /* Void */) {
                    if (lastFlags & 4096 /* Void */) {
                            patchVoid(lastVNode, nextVNode);
                        } else {
                        replaceVNode(parentDom, mountVoid(nextVNode, null), lastVNode, lifecycle, isRecycling);
                    }
                } else {
                // Error case: mount new one replacing old one
                replaceLastChildAndUnmount(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
            }
        }
    }
    function unmountChildren(children, dom, lifecycle, isRecycling) {
        if (isVNode(children)) {
            unmount(children, dom, lifecycle, true, isRecycling);
        } else if (isArray(children)) {
            removeAllChildren(dom, children, lifecycle, isRecycling);
        } else {
            dom.textContent = '';
        }
    }
    function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
        var nextTag = nextVNode.type;
        var lastTag = lastVNode.type;
        if (lastTag !== nextTag) {
            replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
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
                hasControlledValue = processElement(nextFlags, nextVNode, dom);
            }
            // inlined patchProps  -- starts --
            if (lastProps !== nextProps) {
                var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
                var nextPropsOrEmpty = nextProps || EMPTY_OBJ;
                if (nextPropsOrEmpty !== EMPTY_OBJ) {
                    for (var prop in nextPropsOrEmpty) {
                        // do not add a hasOwnProperty check here, it affects performance
                        var nextValue = nextPropsOrEmpty[prop];
                        var lastValue = lastPropsOrEmpty[prop];
                        if (isNullOrUndef(nextValue)) {
                            removeProp(prop, nextValue, dom);
                        } else {
                            patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue);
                        }
                    }
                }
                if (lastPropsOrEmpty !== EMPTY_OBJ) {
                    for (var prop$1 in lastPropsOrEmpty) {
                        // do not add a hasOwnProperty check here, it affects performance
                        if (isNullOrUndef(nextPropsOrEmpty[prop$1])) {
                            removeProp(prop$1, lastPropsOrEmpty[prop$1], dom);
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
                    mountRef(dom, nextRef, lifecycle);
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
        } else if (isInvalid(nextChildren)) {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
        } else if (isInvalid(lastChildren)) {
            if (isStringOrNumber(nextChildren)) {
                setTextContent(dom, nextChildren);
            } else {
                if (isArray(nextChildren)) {
                    mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
                } else {
                    mount(nextChildren, dom, lifecycle, context, isSVG);
                }
            }
        } else if (isStringOrNumber(nextChildren)) {
            if (isStringOrNumber(lastChildren)) {
                updateTextContent(dom, nextChildren);
            } else {
                unmountChildren(lastChildren, dom, lifecycle, isRecycling);
                setTextContent(dom, nextChildren);
            }
        } else if (isArray(nextChildren)) {
            if (isArray(lastChildren)) {
                patchArray = true;
                if (isKeyed(lastChildren, nextChildren)) {
                    patchKeyed = true;
                }
            } else {
                unmountChildren(lastChildren, dom, lifecycle, isRecycling);
                mountArrayChildren(nextChildren, dom, lifecycle, context, isSVG);
            }
        } else if (isArray(lastChildren)) {
            removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
            mount(nextChildren, dom, lifecycle, context, isSVG);
        } else if (isVNode(nextChildren)) {
            if (isVNode(lastChildren)) {
                patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
            } else {
                unmountChildren(lastChildren, dom, lifecycle, isRecycling);
                mount(nextChildren, dom, lifecycle, context, isSVG);
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
        var nextProps = nextVNode.props || EMPTY_OBJ;
        var lastKey = lastVNode.key;
        var nextKey = nextVNode.key;
        var defaultProps = nextType.defaultProps;
        if (!isUndefined(defaultProps)) {
            copyPropsTo(defaultProps, nextProps);
            nextVNode.props = nextProps;
        }
        if (lastType !== nextType) {
            if (isClass) {
                replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
            } else {
                var lastInput = lastVNode.children._lastInput || lastVNode.children;
                var nextInput = createFunctionalComponentInput(nextVNode, nextType, nextProps, context);
                unmount(lastVNode, null, lifecycle, false, isRecycling);
                patch(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling);
                var dom = nextVNode.dom = nextInput.dom;
                nextVNode.children = nextInput;
                mountFunctionalComponentCallbacks(nextVNode.ref, dom, lifecycle);
            }
        } else {
            if (isClass) {
                if (lastKey !== nextKey) {
                    replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
                    return false;
                }
                var instance = lastVNode.children;
                if (instance._unmounted) {
                    if (isNull(parentDom)) {
                        return true;
                    }
                    replaceChild(parentDom, mountComponent(nextVNode, null, lifecycle, context, isSVG, nextVNode.flags & 4 /* ComponentClass */), lastVNode.dom);
                } else {
                    var lastState = instance.state;
                    var nextState = instance.state;
                    var lastProps = instance.props;
                    var childContext = instance.getChildContext();
                    nextVNode.children = instance;
                    instance._isSVG = isSVG;
                    if (!isNullOrUndef(childContext)) {
                        childContext = Object.assign({}, context, childContext);
                    } else {
                        childContext = context;
                    }
                    var lastInput$1 = instance._lastInput;
                    var nextInput$1 = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
                    var didUpdate = true;
                    instance._childContext = childContext;
                    if (isInvalid(nextInput$1)) {
                        nextInput$1 = createVoidVNode();
                    } else if (nextInput$1 === NO_OP) {
                        nextInput$1 = lastInput$1;
                        didUpdate = false;
                    } else if (isStringOrNumber(nextInput$1)) {
                        nextInput$1 = createTextVNode(nextInput$1);
                    } else if (isArray(nextInput$1)) {
                        if (process.env.NODE_ENV !== 'production') {
                            throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
                        }
                        throwError();
                    } else if (isObject(nextInput$1) && nextInput$1.dom) {
                        nextInput$1 = cloneVNode(nextInput$1);
                    }
                    if (nextInput$1.flags & 28 /* Component */) {
                            nextInput$1.parentVNode = nextVNode;
                        } else if (lastInput$1.flags & 28 /* Component */) {
                            lastInput$1.parentVNode = nextVNode;
                        }
                    instance._lastInput = nextInput$1;
                    instance._vNode = nextVNode;
                    if (didUpdate) {
                        var fastUnmount = lifecycle.fastUnmount;
                        var subLifecycle = instance._lifecycle;
                        lifecycle.fastUnmount = subLifecycle.fastUnmount;
                        patch(lastInput$1, nextInput$1, parentDom, lifecycle, childContext, isSVG, isRecycling);
                        subLifecycle.fastUnmount = lifecycle.fastUnmount;
                        lifecycle.fastUnmount = fastUnmount;
                        instance.componentDidUpdate(lastProps, lastState);
                        options.afterUpdate && options.afterUpdate(nextVNode);
                        options.findDOMNodeEnabled && componentToDOMNodeMap.set(instance, nextInput$1.dom);
                    }
                    nextVNode.dom = nextInput$1.dom;
                }
            } else {
                var shouldUpdate = true;
                var lastProps$1 = lastVNode.props;
                var nextHooks = nextVNode.ref;
                var nextHooksDefined = !isNullOrUndef(nextHooks);
                var lastInput$2 = lastVNode.children;
                var nextInput$2 = lastInput$2;
                nextVNode.dom = lastVNode.dom;
                nextVNode.children = lastInput$2;
                if (lastKey !== nextKey) {
                    shouldUpdate = true;
                } else {
                    if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentShouldUpdate)) {
                        shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps$1, nextProps);
                    }
                }
                if (shouldUpdate !== false) {
                    if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentWillUpdate)) {
                        nextHooks.onComponentWillUpdate(lastProps$1, nextProps);
                    }
                    nextInput$2 = nextType(nextProps, context);
                    if (isInvalid(nextInput$2)) {
                        nextInput$2 = createVoidVNode();
                    } else if (isStringOrNumber(nextInput$2) && nextInput$2 !== NO_OP) {
                        nextInput$2 = createTextVNode(nextInput$2);
                    } else if (isArray(nextInput$2)) {
                        if (process.env.NODE_ENV !== 'production') {
                            throwError('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
                        }
                        throwError();
                    } else if (isObject(nextInput$2) && nextInput$2.dom) {
                        nextInput$2 = cloneVNode(nextInput$2);
                    }
                    if (nextInput$2 !== NO_OP) {
                        patch(lastInput$2, nextInput$2, parentDom, lifecycle, context, isSVG, isRecycling);
                        nextVNode.children = nextInput$2;
                        if (nextHooksDefined && !isNullOrUndef(nextHooks.onComponentDidUpdate)) {
                            nextHooks.onComponentDidUpdate(lastProps$1, nextProps);
                        }
                        nextVNode.dom = nextInput$2.dom;
                    }
                }
                if (nextInput$2.flags & 28 /* Component */) {
                        nextInput$2.parentVNode = nextVNode;
                    } else if (lastInput$2.flags & 28 /* Component */) {
                        lastInput$2.parentVNode = nextVNode;
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
                nextChild = nextChildren[i] = cloneVNode(nextChild);
            }
            patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
        }
        if (lastChildrenLength < nextChildrenLength) {
            for (i = commonLength; i < nextChildrenLength; i++) {
                var nextChild$1 = nextChildren[i];
                if (nextChild$1.dom) {
                    nextChild$1 = nextChildren[i] = cloneVNode(nextChild$1);
                }
                appendChild(dom, mount(nextChild$1, null, lifecycle, context, isSVG));
            }
        } else if (nextChildrenLength === 0) {
            removeAllChildren(dom, lastChildren, lifecycle, isRecycling);
        } else if (lastChildrenLength > nextChildrenLength) {
            for (i = commonLength; i < lastChildrenLength; i++) {
                unmount(lastChildren[i], dom, lifecycle, false, isRecycling);
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
        var i;
        var j;
        var aNode;
        var bNode;
        var nextNode;
        var nextPos;
        var node;
        if (aLength === 0) {
            if (bLength !== 0) {
                mountArrayChildren(b, dom, lifecycle, context, isSVG);
            }
            return;
        } else if (bLength === 0) {
            removeAllChildren(dom, a, lifecycle, isRecycling);
            return;
        }
        var aStartNode = a[aStart];
        var bStartNode = b[bStart];
        var aEndNode = a[aEnd];
        var bEndNode = b[bEnd];
        if (bStartNode.dom) {
            b[bStart] = bStartNode = cloneVNode(bStartNode);
        }
        if (bEndNode.dom) {
            b[bEnd] = bEndNode = cloneVNode(bEndNode);
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
                    b[bStart] = bStartNode = cloneVNode(bStartNode);
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
                    b[bEnd] = bEndNode = cloneVNode(bEndNode);
                }
            }
            // Move and sync nodes from right to left.
            if (aEndNode.key === bStartNode.key) {
                patch(aEndNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
                insertOrAppend(dom, bStartNode.dom, aStartNode.dom);
                aEnd--;
                bStart++;
                aEndNode = a[aEnd];
                bStartNode = b[bStart];
                if (bStartNode.dom) {
                    b[bStart] = bStartNode = cloneVNode(bStartNode);
                }
                continue;
            }
            // Move and sync nodes from left to right.
            if (aStartNode.key === bEndNode.key) {
                patch(aStartNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
                nextPos = bEnd + 1;
                nextNode = nextPos < b.length ? b[nextPos].dom : null;
                insertOrAppend(dom, bEndNode.dom, nextNode);
                aStart++;
                bEnd--;
                aStartNode = a[aStart];
                bEndNode = b[bEnd];
                if (bEndNode.dom) {
                    b[bEnd] = bEndNode = cloneVNode(bEndNode);
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
                        b[bStart] = node = cloneVNode(node);
                    }
                    bStart++;
                    insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
                }
            }
        } else if (bStart > bEnd) {
            while (aStart <= aEnd) {
                unmount(a[aStart++], dom, lifecycle, false, isRecycling);
            }
        } else {
            aLength = aEnd - aStart + 1;
            bLength = bEnd - bStart + 1;
            var aNullable = a;
            var sources = new Array(bLength);
            // Mark all nodes as inserted.
            for (i = 0; i < bLength; i++) {
                sources[i] = -1;
            }
            var moved = false;
            var pos = 0;
            var patched = 0;
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
                                    b[j] = bNode = cloneVNode(bNode);
                                }
                                patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                                patched++;
                                aNullable[i] = null;
                                break;
                            }
                        }
                    }
                }
            } else {
                var keyIndex = new Map();
                for (i = bStart; i <= bEnd; i++) {
                    node = b[i];
                    keyIndex.set(node.key, i);
                }
                for (i = aStart; i <= aEnd; i++) {
                    aNode = a[i];
                    if (patched < bLength) {
                        j = keyIndex.get(aNode.key);
                        if (!isUndefined(j)) {
                            bNode = b[j];
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            } else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = cloneVNode(bNode);
                            }
                            patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                            patched++;
                            aNullable[i] = null;
                        }
                    }
                }
            }
            if (aLength === a.length && patched === 0) {
                removeAllChildren(dom, a, lifecycle, isRecycling);
                while (bStart < bLength) {
                    node = b[bStart];
                    if (node.dom) {
                        b[bStart] = node = cloneVNode(node);
                    }
                    bStart++;
                    insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), null);
                }
            } else {
                i = aLength - patched;
                while (i > 0) {
                    aNode = aNullable[aStart++];
                    if (!isNull(aNode)) {
                        unmount(aNode, dom, lifecycle, true, isRecycling);
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
                                b[pos] = node = cloneVNode(node);
                            }
                            nextPos = pos + 1;
                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
                            insertOrAppend(dom, mount(node, dom, lifecycle, context, isSVG), nextNode);
                        } else {
                            if (j < 0 || i !== seq[j]) {
                                pos = i + bStart;
                                node = b[pos];
                                nextPos = pos + 1;
                                nextNode = nextPos < b.length ? b[nextPos].dom : null;
                                insertOrAppend(dom, node.dom, nextNode);
                            } else {
                                j--;
                            }
                        }
                    }
                } else if (patched !== bLength) {
                    for (i = bLength - 1; i >= 0; i--) {
                        if (sources[i] === -1) {
                            pos = i + bStart;
                            node = b[pos];
                            if (node.dom) {
                                b[pos] = node = cloneVNode(node);
                            }
                            nextPos = pos + 1;
                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
                            insertOrAppend(dom, mount(node, null, lifecycle, context, isSVG), nextNode);
                        }
                    }
                }
            }
        }
    }
    // // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
    function lis_algorithm(a) {
        var p = a.slice(0);
        var result = [0];
        var i;
        var j;
        var u;
        var v;
        var c;
        for (i = 0; i < a.length; i++) {
            if (a[i] === -1) {
                continue;
            }
            j = result[result.length - 1];
            if (a[j] < a[i]) {
                p[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while (u < v) {
                c = (u + v) / 2 | 0;
                if (a[result[c]] < a[i]) {
                    u = c + 1;
                } else {
                    v = c;
                }
            }
            if (a[i] < a[result[u]]) {
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
        if (skipProps[prop] || hasControlledValue && prop === 'value') {
            return;
        }
        if (booleanProps[prop]) {
            dom[prop] = !!nextValue;
        } else if (strictProps[prop]) {
            var value = isNullOrUndef(nextValue) ? '' : nextValue;
            if (dom[prop] !== value) {
                dom[prop] = value;
            }
        } else if (lastValue !== nextValue) {
            if (isAttrAnEvent(prop)) {
                patchEvent(prop, lastValue, nextValue, dom);
            } else if (isNullOrUndef(nextValue)) {
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
                    if (!isNullOrUndef(nextHtml)) {
                        dom.innerHTML = nextHtml;
                    }
                }
            } else {
                var dehyphenProp;
                if (dehyphenProps[prop]) {
                    dehyphenProp = dehyphenProps[prop];
                } else if (isSVG && prop.match(probablyKebabProps)) {
                    dehyphenProp = prop.replace(/([a-z])([A-Z]|1)/g, kebabize);
                    dehyphenProps[prop] = dehyphenProp;
                } else {
                    dehyphenProp = prop;
                }
                var ns = namespaces[prop];
                if (ns) {
                    dom.setAttributeNS(ns, dehyphenProp, nextValue);
                } else {
                    dom.setAttribute(dehyphenProp, nextValue);
                }
            }
        }
    }
    function patchEvents(lastEvents, nextEvents, dom) {
        lastEvents = lastEvents || EMPTY_OBJ;
        nextEvents = nextEvents || EMPTY_OBJ;
        if (nextEvents !== EMPTY_OBJ) {
            for (var name in nextEvents) {
                // do not add a hasOwnProperty check here, it affects performance
                patchEvent(name, lastEvents[name], nextEvents[name], dom);
            }
        }
        if (lastEvents !== EMPTY_OBJ) {
            for (var name$1 in lastEvents) {
                // do not add a hasOwnProperty check here, it affects performance
                if (isNullOrUndef(nextEvents[name$1])) {
                    patchEvent(name$1, lastEvents[name$1], null, dom);
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
            if (delegatedProps[name]) {
                handleEvent(name, lastValue, nextValue, dom);
            } else {
                if (lastValue !== nextValue) {
                    if (!isFunction(nextValue) && !isNullOrUndef(nextValue)) {
                        var linkEvent = nextValue.event;
                        if (linkEvent && isFunction(linkEvent)) {
                            if (!dom._data) {
                                dom[nameLowerCase] = function (e) {
                                    linkEvent(e.currentTarget._data, e);
                                };
                            }
                            dom._data = nextValue.data;
                        } else {
                            if (process.env.NODE_ENV !== 'production') {
                                throwError("an event on a VNode \"" + name + "\". was not a function or a valid linkEvent.");
                            }
                            throwError();
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
        if (isString(nextAttrValue)) {
            dom.style.cssText = nextAttrValue;
            return;
        }
        for (var style in nextAttrValue) {
            // do not add a hasOwnProperty check here, it affects performance
            var value = nextAttrValue[style];
            if (isNumber(value) && !isUnitlessNumber[style]) {
                dom.style[style] = value + 'px';
            } else {
                dom.style[style] = value;
            }
        }
        if (!isNullOrUndef(lastAttrValue)) {
            for (var style$1 in lastAttrValue) {
                if (isNullOrUndef(nextAttrValue[style$1])) {
                    dom.style[style$1] = '';
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
        } else if (isAttrAnEvent(prop)) {
            handleEvent(name, lastValue, null, dom);
        } else {
            dom.removeAttribute(prop);
        }
    }

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
                    throwError("mount() received an object that's not a valid VNode, you should stringify it first. Object: \"" + JSON.stringify(vNode) + "\".");
                } else {
                    throwError("mount() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) + "\".");
                }
            }
            throwError();
        }
    }
    function mountText(vNode, parentDom) {
        var dom = document.createTextNode(vNode.children);
        vNode.dom = dom;
        if (parentDom) {
            appendChild(parentDom, dom);
        }
        return dom;
    }
    function mountVoid(vNode, parentDom) {
        var dom = document.createTextNode('');
        vNode.dom = dom;
        if (parentDom) {
            appendChild(parentDom, dom);
        }
        return dom;
    }
    function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
        if (options.recyclingEnabled) {
            var dom$1 = recycleElement(vNode, lifecycle, context, isSVG);
            if (!isNull(dom$1)) {
                if (!isNull(parentDom)) {
                    appendChild(parentDom, dom$1);
                }
                return dom$1;
            }
        }
        var tag = vNode.type;
        var flags = vNode.flags;
        if (isSVG || flags & 128 /* SvgElement */) {
            isSVG = true;
        }
        var dom = documentCreateElement(tag, isSVG);
        var children = vNode.children;
        var props = vNode.props;
        var events = vNode.events;
        var ref = vNode.ref;
        vNode.dom = dom;
        if (!isNull(children)) {
            if (isStringOrNumber(children)) {
                setTextContent(dom, children);
            } else if (isArray(children)) {
                mountArrayChildren(children, dom, lifecycle, context, isSVG);
            } else if (isVNode(children)) {
                mount(children, dom, lifecycle, context, isSVG);
            }
        }
        var hasControlledValue = false;
        if (!(flags & 2 /* HtmlElement */)) {
            hasControlledValue = processElement(flags, vNode, dom);
        }
        if (!isNull(props)) {
            for (var prop in props) {
                // do not add a hasOwnProperty check here, it affects performance
                patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
            }
        }
        if (!isNull(events)) {
            for (var name in events) {
                // do not add a hasOwnProperty check here, it affects performance
                patchEvent(name, null, events[name], dom);
            }
        }
        if (!isNull(ref)) {
            mountRef(dom, ref, lifecycle);
        }
        if (!isNull(parentDom)) {
            appendChild(parentDom, dom);
        }
        return dom;
    }
    function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            // TODO: Verify can string/number be here. might cause de-opt
            if (!isInvalid(child)) {
                if (child.dom) {
                    children[i] = child = cloneVNode(child);
                }
                mount(children[i], dom, lifecycle, context, isSVG);
            }
        }
    }
    function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
        if (options.recyclingEnabled) {
            var dom$1 = recycleComponent(vNode, lifecycle, context, isSVG);
            if (!isNull(dom$1)) {
                if (!isNull(parentDom)) {
                    appendChild(parentDom, dom$1);
                }
                return dom$1;
            }
        }
        var type = vNode.type;
        var props = vNode.props || EMPTY_OBJ;
        var defaultProps = type.defaultProps;
        var ref = vNode.ref;
        var dom;
        if (!isUndefined(defaultProps)) {
            copyPropsTo(defaultProps, props);
            vNode.props = props;
        }
        if (isClass) {
            var instance = createClassComponentInstance(vNode, type, props, context, isSVG);
            // If instance does not have componentWillUnmount specified we can enable fastUnmount
            var input = instance._lastInput;
            var prevFastUnmount = lifecycle.fastUnmount;
            // we store the fastUnmount value, but we set it back to true on the lifecycle
            // we do this so we can determine if the component render has a fastUnmount or not
            lifecycle.fastUnmount = true;
            instance._vNode = vNode;
            vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
            // we now create a lifecycle for this component and store the fastUnmount value
            var subLifecycle = instance._lifecycle = new Lifecycle();
            // children lifecycle can fastUnmount if itself does need unmount callback and within its cycle there was none
            subLifecycle.fastUnmount = isUndefined(instance.componentWillUnmount) && lifecycle.fastUnmount;
            // higher lifecycle can fastUnmount only if previously it was able to and this children doesnt have any
            lifecycle.fastUnmount = prevFastUnmount && subLifecycle.fastUnmount;
            if (!isNull(parentDom)) {
                appendChild(parentDom, dom);
            }
            mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
            options.findDOMNodeEnabled && componentToDOMNodeMap.set(instance, dom);
            vNode.children = instance;
        } else {
            var input$1 = createFunctionalComponentInput(vNode, type, props, context);
            vNode.dom = dom = mount(input$1, null, lifecycle, context, isSVG);
            vNode.children = input$1;
            mountFunctionalComponentCallbacks(ref, dom, lifecycle);
            if (!isNull(parentDom)) {
                appendChild(parentDom, dom);
            }
        }
        return dom;
    }
    function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
        if (ref) {
            if (isFunction(ref)) {
                ref(instance);
            } else {
                if (process.env.NODE_ENV !== 'production') {
                    if (isStringOrNumber(ref)) {
                        throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
                    } else if (isObject(ref) && vNode.flags & 4 /* ComponentClass */) {
                        throwError('functional component lifecycle events are not supported on ES2015 class components.');
                    } else {
                        throwError("a bad value for \"ref\" was used on component: \"" + JSON.stringify(ref) + "\"");
                    }
                }
                throwError();
            }
        }
        var cDM = instance.componentDidMount;
        var afterMount = options.afterMount;
        if (!isUndefined(cDM) || !isNull(afterMount)) {
            lifecycle.addListener(function () {
                afterMount && afterMount(vNode);
                cDM && instance.componentDidMount();
            });
        }
    }
    function mountFunctionalComponentCallbacks(ref, dom, lifecycle) {
        if (ref) {
            if (!isNullOrUndef(ref.onComponentWillMount)) {
                ref.onComponentWillMount();
            }
            if (!isNullOrUndef(ref.onComponentDidMount)) {
                lifecycle.addListener(function () {
                    return ref.onComponentDidMount(dom);
                });
            }
            if (!isNullOrUndef(ref.onComponentWillUnmount)) {
                lifecycle.fastUnmount = false;
            }
        }
    }
    function mountRef(dom, value, lifecycle) {
        if (isFunction(value)) {
            lifecycle.fastUnmount = false;
            lifecycle.addListener(function () {
                return value(dom);
            });
        } else {
            if (isInvalid(value)) {
                return;
            }
            if (process.env.NODE_ENV !== 'production') {
                throwError('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
            }
            throwError();
        }
    }

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
        var props = vNode.props || EMPTY_OBJ;
        var ref = vNode.ref;
        vNode.dom = dom;
        if (isClass) {
            var _isSVG = dom.namespaceURI === svgNS;
            var defaultProps = type.defaultProps;
            if (!isUndefined(defaultProps)) {
                copyPropsTo(defaultProps, props);
                vNode.props = props;
            }
            var instance = createClassComponentInstance(vNode, type, props, context, _isSVG);
            // If instance does not have componentWillUnmount specified we can enable fastUnmount
            var prevFastUnmount = lifecycle.fastUnmount;
            var input = instance._lastInput;
            // we store the fastUnmount value, but we set it back to true on the lifecycle
            // we do this so we can determine if the component render has a fastUnmount or not
            lifecycle.fastUnmount = true;
            instance._vComponent = vNode;
            instance._vNode = vNode;
            hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
            // we now create a lifecycle for this component and store the fastUnmount value
            var subLifecycle = instance._lifecycle = new Lifecycle();
            // children lifecycle can fastUnmount if itself does need unmount callback and within its cycle there was none
            subLifecycle.fastUnmount = isUndefined(instance.componentWillUnmount) && lifecycle.fastUnmount;
            // higher lifecycle can fastUnmount only if previously it was able to and this children doesnt have any
            lifecycle.fastUnmount = prevFastUnmount && subLifecycle.fastUnmount;
            mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
            options.findDOMNodeEnabled && componentToDOMNodeMap.set(instance, dom);
            vNode.children = instance;
        } else {
            var input$1 = createFunctionalComponentInput(vNode, type, props, context);
            hydrate(input$1, dom, lifecycle, context, isSVG);
            vNode.children = input$1;
            vNode.dom = input$1.dom;
            mountFunctionalComponentCallbacks(ref, dom, lifecycle);
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
                warning('Inferno hydration: Server-side markup doesn\'t match client-side markup or Initial render target is not empty');
            }
            var newDom = mountElement(vNode, null, lifecycle, context, isSVG);
            vNode.dom = newDom;
            replaceChild(dom.parentNode, newDom, dom);
            return newDom;
        }
        vNode.dom = dom;
        if (children) {
            hydrateChildren(children, dom, lifecycle, context, isSVG);
        }
        var hasControlledValue = false;
        if (!(flags & 2 /* HtmlElement */)) {
            hasControlledValue = processElement(flags, vNode, dom);
        }
        if (props) {
            for (var prop in props) {
                patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue);
            }
        }
        if (events) {
            for (var name in events) {
                patchEvent(name, null, events[name], dom);
            }
        }
        if (ref) {
            mountRef(dom, ref, lifecycle);
        }
        return dom;
    }
    function hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
        normalizeChildNodes(parentDom);
        var dom = parentDom.firstChild;
        if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                if (!isNull(child) && isObject(child)) {
                    if (dom) {
                        dom = hydrate(child, dom, lifecycle, context, isSVG);
                        dom = dom.nextSibling;
                    } else {
                        mount(child, parentDom, lifecycle, context, isSVG);
                    }
                }
            }
        } else if (isStringOrNumber(children)) {
            if (dom && dom.nodeType === 3) {
                if (dom.nodeValue !== children) {
                    dom.nodeValue = children;
                }
            } else if (children) {
                parentDom.textContent = children;
            }
            dom = dom.nextSibling;
        } else if (isObject(children)) {
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
            var newDom = mountText(vNode, null);
            vNode.dom = newDom;
            replaceChild(dom.parentNode, newDom, dom);
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
                throwError("hydrate() expects a valid VNode, instead it received an object with the type \"" + (typeof vNode === 'undefined' ? 'undefined' : _typeof(vNode)) + "\".");
            }
            throwError();
        }
    }
    function hydrateRoot(input, parentDom, lifecycle) {
        var dom = parentDom && parentDom.firstChild;
        if (dom) {
            hydrate(input, dom, lifecycle, {}, false);
            dom = parentDom.firstChild;
            // clear any other DOM nodes, there should be only a single entry for the root
            while (dom = dom.nextSibling) {
                parentDom.removeChild(dom);
            }
            return true;
        }
        return false;
    }

    // rather than use a Map, like we did before, we can use an array here
    // given there shouldn't be THAT many roots on the page, the difference
    // in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
    var roots = [];
    var componentToDOMNodeMap = new Map();
    options.roots = roots;
    function findDOMNode(ref) {
        if (!options.findDOMNodeEnabled) {
            if (process.env.NODE_ENV !== 'production') {
                throwError('findDOMNode() has been disabled, use Inferno.options.findDOMNodeEnabled = true; enabled findDOMNode(). Warning this can significantly impact performance!');
            }
            throwError();
        }
        var dom = ref && ref.nodeType ? ref : null;
        return componentToDOMNodeMap.get(ref) || dom;
    }
    function getRoot(dom) {
        for (var i = 0; i < roots.length; i++) {
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
        for (var i = 0; i < roots.length; i++) {
            if (roots[i] === root) {
                roots.splice(i, 1);
                return;
            }
        }
    }
    if (process.env.NODE_ENV !== 'production') {
        if (isBrowser && document.body === null) {
            warning('Inferno warning: you cannot initialize inferno without "document.body". Wait on "DOMContentLoaded" event, add script to bottom of body, or use async/defer attributes on script tag.');
        }
    }
    var documentBody = isBrowser ? document.body : null;
    function render(input, parentDom) {
        if (documentBody === parentDom) {
            if (process.env.NODE_ENV !== 'production') {
                throwError('you cannot render() to the "document.body". Use an empty element as a container instead.');
            }
            throwError();
        }
        if (input === NO_OP) {
            return;
        }
        var root = getRoot(parentDom);
        if (isNull(root)) {
            var lifecycle = new Lifecycle();
            if (!isInvalid(input)) {
                if (input.dom) {
                    input = cloneVNode(input);
                }
                if (!hydrateRoot(input, parentDom, lifecycle)) {
                    mount(input, parentDom, lifecycle, {}, false);
                }
                root = setRoot(parentDom, input, lifecycle);
                lifecycle.trigger();
            }
        } else {
            var lifecycle$1 = root.lifecycle;
            lifecycle$1.listeners = [];
            if (isNullOrUndef(input)) {
                unmount(root.input, parentDom, lifecycle$1, false, false);
                removeRoot(root);
            } else {
                if (input.dom) {
                    input = cloneVNode(input);
                }
                patch(root.input, input, parentDom, lifecycle$1, {}, false, false);
            }
            lifecycle$1.trigger();
            root.input = input;
        }
        if (root) {
            var rootInput = root.input;
            if (rootInput && rootInput.flags & 28 /* Component */) {
                return rootInput.children;
            }
        }
    }
    function createRenderer(_parentDom) {
        var parentDom = _parentDom || null;
        return function renderer(lastInput, nextInput) {
            if (!parentDom) {
                parentDom = lastInput;
            }
            render(nextInput, parentDom);
        };
    }

    function linkEvent(data, event) {
        return { data: data, event: event };
    }

    if (process.env.NODE_ENV !== 'production') {
        Object.freeze(EMPTY_OBJ);
        var testFunc = function testFn() {};
        if ((testFunc.name || testFunc.toString()).indexOf('testFn') === -1) {
            warning('It looks like you\'re using a minified copy of the development build ' + 'of Inferno. When deploying Inferno apps to production, make sure to use ' + 'the production build which skips development warnings and is faster. ' + 'See http://infernojs.org for more details.');
        }
    }

    // This will be replaced by rollup
    var version = '1.2.2';

    // we duplicate it so it plays nicely with different module loading systems
    var index = {
        linkEvent: linkEvent,
        // core shapes
        createVNode: createVNode,

        // cloning
        cloneVNode: cloneVNode,

        // used to shared common items between Inferno libs
        NO_OP: NO_OP,
        EMPTY_OBJ: EMPTY_OBJ,

        // DOM
        render: render,
        findDOMNode: findDOMNode,
        createRenderer: createRenderer,
        options: options,
        version: version
    };

    exports['default'] = index;
    exports.linkEvent = linkEvent;
    exports.createVNode = createVNode;
    exports.cloneVNode = cloneVNode;
    exports.NO_OP = NO_OP;
    exports.EMPTY_OBJ = EMPTY_OBJ;
    exports.render = render;
    exports.findDOMNode = findDOMNode;
    exports.createRenderer = createRenderer;
    exports.options = options;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(4);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _getRawTag = __webpack_require__(23);

var _getRawTag2 = _interopRequireDefault(_getRawTag);

var _objectToString = __webpack_require__(24);

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
/* 21 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__(25);

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg2.default)(Object.getPrototypeOf, Object);

exports.default = getPrototype;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(4);

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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _freeGlobal = __webpack_require__(21);

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal2.default || freeSelf || Function('return this')();

exports.default = root;

/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMiddleware;

var _compose = __webpack_require__(6);

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
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineReducers;

var _createStore = __webpack_require__(7);

var _isPlainObject = __webpack_require__(5);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(8);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(32);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(33);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), __webpack_require__(34)(module)))

/***/ }),
/* 33 */
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
/* 34 */
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

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(1);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _WallpaperOperations = __webpack_require__(41);

var WallpaperOperations = _interopRequireWildcard(_WallpaperOperations);

var _Settings = __webpack_require__(10);

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
      var image = Settings.requestSetting('wallpaper', 'space-1.jpg');
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
      Settings.saveSetting('wallpaper', selectedWallpaper);
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
    value: function setWallpaper(newWallpaper) {
      var _this2 = this;

      var preloadedWallpaper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var switcher = this.state.switcher;

      // Fadeout foreground wallpaper to new wallpaper
      var directory = this.state.directory;
      this.cyclerBackground.style.background = 'url(\'' + directory + newWallpaper + '\')';
      this.cyclerBackground.style.backgroundSize = 'cover';
      this.cyclerForeground.className += " fadeout";

      switcher.currentlyFading = true;

      if (preloadedWallpaper !== false) {
        // Preload the next image
        this.cyclerPreloader.style.background = 'url(\'' + directory + preloadedWallpaper + '\')';
      }

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
        classes.push('active');
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPanelForm = undefined;

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _SessionDropdown = __webpack_require__(38);

var _SessionDropdown2 = _interopRequireDefault(_SessionDropdown);

var _PasswordField = __webpack_require__(37);

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createVNode = _inferno2.default.createVNode; // PasswordField -> Required by Components/UserPanel/Form
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(1);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _SessionRow = __webpack_require__(39);

var _SessionRow2 = _interopRequireDefault(_SessionRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // SessionDropdown -> Required by Components/UserPanel/Form
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createVNode = _inferno2.default.createVNode; // SessionRow -> Required by Components/UserPanel/SessionDropdown
// --------------------------------------
// Just a row.

var SessionRow = function SessionRow(props) {
  var classes = ['dropdown-item'];
  var eventHandler = props.setActiveSession.bind(undefined, props.session.key);

  if (props.session.key === props.activeSession.key) {
    eventHandler = props.handleDropdownClick;
    classes.push('active');
  }

  return createVNode(2, 'div', {
    'className': classes.join(' ')
  }, props.session.name, {
    'onClick': eventHandler
  }, props.session.key);
};

exports.default = SessionRow;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(1);

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
        classes.push('active');
      } else if (this.state.fadeOut === true) {
        classes.push('fadeout');
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
/* 41 */
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Main;

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _redux = __webpack_require__(12);

var _Notifications = __webpack_require__(17);

var _Notifications2 = _interopRequireDefault(_Notifications);

var _CommandPanel = __webpack_require__(13);

var _CommandPanel2 = _interopRequireDefault(_CommandPanel);

var _DateDisplay = __webpack_require__(14);

var _DateDisplay2 = _interopRequireDefault(_DateDisplay);

var _UserPanel = __webpack_require__(15);

var _UserPanel2 = _interopRequireDefault(_UserPanel);

var _PrimaryReducer = __webpack_require__(16);

var _SettingsReducer = __webpack_require__(3);

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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inferno = __webpack_require__(0);

var _inferno2 = _interopRequireDefault(_inferno);

var _infernoComponent = __webpack_require__(1);

var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

var _Utils = __webpack_require__(44);

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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var padZeroes = exports.padZeroes = function padZeroes(i) {
  return i < 10 ? "0" + i : i;
};

/***/ })
/******/ ]);