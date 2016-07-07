define(['exports', 'src/dist/js/inferno.min', 'src/dist/js/inferno-component.min'], function (exports, _inferno, _infernoComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Clock = undefined;

  var _inferno2 = _interopRequireDefault(_inferno);

  var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var bp0 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: {
      arg: 0
    },
    children: {
      arg: 1
    }
  });

  var Clock = exports.Clock = function (_Component) {
    _inherits(Clock, _Component);

    function Clock(props) {
      _classCallCheck(this, Clock);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Clock).call(this, props));

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
});