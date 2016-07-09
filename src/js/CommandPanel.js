define(['exports', 'src/dist/js/inferno.min', 'src/dist/js/inferno-component.min', './WallpaperSwitcher', './Clock'], function (exports, _inferno, _infernoComponent, _WallpaperSwitcher, _Clock) {
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
    },
    attrs: {
      arg: 1
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

        return bp5([bp6(_WallpaperSwitcher.WallpaperSwitcher, {
          backgrounds: this.props.backgrounds
        }), commands, bp7([bp8(hostname), bp9(_Clock.Clock)])]);
      }
    }]);

    return CommandPanel;
  }(_infernoComponent2.default);
});