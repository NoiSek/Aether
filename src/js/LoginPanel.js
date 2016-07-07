define(['exports', 'src/dist/js/inferno.min', 'src/dist/js/inferno-component.min'], function (exports, _inferno, _infernoComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LoginPanel = undefined;

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

  var bp22 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: {
      arg: 0
    },
    children: {
      arg: 1
    }
  });

  var bp21 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'left',
    children: {
      arg: 0
    }
  });

  var bp20 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'bottom',
    children: {
      arg: 0
    }
  });

  var bp19 = _inferno2.default.createBlueprint({
    tag: 'input',
    className: 'submit-button',
    attrs: {
      type: 'submit',
      value: 'GO'
    }
  });

  var bp18 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'right',
    children: {
      arg: 0
    }
  });

  var bp17 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'dropdown-item',
    children: {
      arg: 0
    }
  });

  var bp16 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'dropdown-item',
    children: {
      arg: 0
    }
  });

  var bp15 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'dropdown-item active',
    children: {
      arg: 0
    }
  });

  var bp14 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'dropdown user-session',
    children: {
      arg: 0
    }
  });

  var bp13 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'left',
    children: {
      arg: 0
    }
  });

  var bp12 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'submit-row',
    children: {
      arg: 0
    }
  });

  var bp11 = _inferno2.default.createBlueprint({
    tag: 'input',
    className: 'user-password',
    attrs: {
      type: 'password',
      placeholder: '*******************'
    }
  });

  var bp10 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'user-password-container',
    children: {
      arg: 0
    }
  });

  var bp9 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'user-username',
    children: {
      arg: 0
    }
  });

  var bp8 = _inferno2.default.createBlueprint({
    tag: 'form',
    className: 'login-form',
    children: {
      arg: 0
    }
  });

  var bp7 = _inferno2.default.createBlueprint({
    tag: 'img',
    className: 'user-avatar',
    attrs: {
      src: 'src/img/default-user.png'
    }
  });

  var bp6 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'avatar-background',
    children: {
      arg: 0
    }
  });

  var bp5 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'avatar-container',
    children: {
      arg: 0
    }
  });

  var bp4 = _inferno2.default.createBlueprint({
    tag: 'div',
    children: {
      arg: 0
    }
  });

  var LoginPanel = exports.LoginPanel = function (_Component) {
    _inherits(LoginPanel, _Component);

    function LoginPanel(props) {
      _classCallCheck(this, LoginPanel);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoginPanel).call(this, props));

      _this.state = {
        "date": {
          "formattedString": undefined,
          "initialized": false,
          "dayName": undefined,
          "dayValue": undefined,
          "formattedDayValue": undefined,
          "monthName": undefined,
          "monthValue": undefined,
          "updateDelay": false
        }
      };
      return _this;
    }

    _createClass(LoginPanel, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setDate();
        setInterval(this.setDate.bind(this), 30 * 1000);
      }
    }, {
      key: 'setDate',
      value: function setDate() {
        console.log("Running setDate");
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        var now = new Date();

        var dayValue = now.getDate();
        var dayName = dayNames[dayValue];
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
      }
    }, {
      key: 'generateDateString',
      value: function generateDateString() {
        var _this2 = this;

        var date = this.state.date;
        var dateString = false;

        if (date.initialized === true) {
          dateString = bp0([bp1(date.dayName), ', the ', bp2(date.formattedDayValue), ' of ', bp3(date.monthName)]);
        }

        // Cycle through a render pass once in order for the fadeIn animation to play properly.
        if (date.updateDelay === false) {
          setTimeout(function () {
            date.updateDelay = true;
            _this2.setState({
              "date": date
            });
          }, 100);
        }

        return dateString;
      }
    }, {
      key: 'render',
      value: function render() {
        var dateClasses = ["right", "date"];
        var dateString = this.generateDateString();

        if (this.state.date.initialized === true && this.state.date.updateDelay === true) {
          dateClasses.push("loaded");
        }

        return bp4([bp5(bp6(bp7())), bp8([bp9('LannisterX'), bp10(bp11()), bp12([bp13(bp14([bp15('deepin'), bp16('gnome'), bp17('xfce')])), bp18(bp19())])]), bp20([bp21('SWITCH USER'), bp22(dateClasses.join(' '), dateString)])]);
      }
    }]);

    return LoginPanel;
  }(_infernoComponent2.default);
});