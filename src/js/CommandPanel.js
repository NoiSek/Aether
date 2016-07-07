define(['exports', 'src/dist/js/inferno.min', 'src/dist/js/inferno-component.min'], function (exports, _inferno, _infernoComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CommandPanel = undefined;

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
    attrs: {
      arg: 1
    },
    events: {
      arg: 2
    },
    children: {
      arg: 3
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

  var bp10 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: {
      arg: 0
    },
    children: {
      arg: 1
    }
  });

  var bp9 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'left hostname',
    children: {
      arg: 0
    }
  });

  var bp8 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'bottom',
    children: {
      arg: 0
    }
  });

  var bp7 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'distro-logo'
  });

  var bp6 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'distro-wrapper',
    children: {
      arg: 0
    }
  });

  var bp5 = _inferno2.default.createBlueprint({
    tag: 'div',
    children: {
      arg: 0
    }
  });

  var CommandPanel = exports.CommandPanel = function (_Component) {
    _inherits(CommandPanel, _Component);

    function CommandPanel(props) {
      _classCallCheck(this, CommandPanel);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommandPanel).call(this, props));

      _this.state = {
        "currentTime": undefined,
        "expandedCommands": false,
        "timeInitialized": false
      };
      return _this;
    }

    _createClass(CommandPanel, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        setTimeout(function () {
          _this2.updateClock();
          var timer = setInterval(_this2.updateClock.bind(_this2), 1000);
        }, 1000);
      }
    }, {
      key: 'handleCommand',
      value: function handleCommand(event) {
        var command = event.target.getAttribute('data-command').toLowerCase();
        var disabled = event.target.className.indexOf('disabled') !== -1;

        if (disabled) {
          window.notifications.generate(command + ' is disabled on this system.', "error");
        }

        return false;

        if (command === "shutdown") {
          window.lightdm.shutdown();
        } else if (command === "hibernate") {
          window.lightdm.hibernate();
        } else if (command === "reboot") {
          window.lightdm.restart();
        } else if (command === "sleep") {
          window.lightdm.suspend();
        }
      }
    }, {
      key: 'updateClock',
      value: function updateClock() {
        var _this3 = this;

        var padZeroes = function padZeroes(i) {
          return i < 10 ? "0" + i : i;
        };

        var now = new Date();
        var hours = padZeroes(now.getHours());
        var minutes = padZeroes(now.getMinutes());
        var formattedTime = hours + ':' + minutes;

        this.setState({
          "currentTime": formattedTime
        });

        // Cycle through a render pass once in order for the fadeIn animation to play properly.
        if (this.state.timeInitialized === false) {
          setTimeout(function () {
            _this3.setState({
              "timeInitialized": true
            });
          }, 100);
        }
      }
    }, {
      key: 'generateCommands',
      value: function generateCommands() {
        var _this4 = this;

        var commands = {
          "Shutdown": window.lightdm.can_shutdown,
          "Hibernate": window.lightdm.can_hibernate,
          "Reboot": window.lightdm.can_restart,
          "Sleep": window.lightdm.can_suspend
        };

        var enabledCommands = Object.keys(commands).map(function (key) {
          return commands[key] ? key : false;
        }).filter(function (command) {
          return command !== false;
        });

        if (window.lightdm.can_suspend === false && window.lightdm.can_hibernate === false) {
          // Add the row back and disable it so that the user is aware of what's happening.
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
            'data-command': command
          }, {
            onclick: _this4.handleCommand
          }, [bp1(bp2()), bp3(command)]);
        });

        var classes = ['commands-wrapper'];

        return bp4(classes.join(' '), rows);
      }
    }, {
      key: 'render',
      value: function render() {
        var hostname = window.lightdm.hostname;
        var currentTime = this.state.currentTime;
        var commands = this.generateCommands();

        var currentTimeClasses = ['right', 'clock'];

        if (this.state.timeInitialized) {
          currentTimeClasses.push('loaded');
        }

        return bp5([bp6(bp7()), commands, bp8([bp9(hostname), bp10(currentTimeClasses.join(' '), currentTime)])]);
      }
    }]);

    return CommandPanel;
  }(_infernoComponent2.default);
});