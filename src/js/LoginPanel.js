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

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

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

  var bp4 = _inferno2.default.createBlueprint({
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

  var bp5 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'dropdown user-session',
    children: {
      arg: 0
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

  var bp21 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: {
      arg: 0
    },
    children: {
      arg: 1
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
    className: 'left',
    children: {
      arg: 0
    }
  });

  var bp16 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'submit-row',
    children: {
      arg: 0
    }
  });

  var bp15 = _inferno2.default.createBlueprint({
    tag: 'input',
    className: 'user-password',
    attrs: {
      arg: 0
    },
    events: {
      arg: 1
    }
  });

  var bp14 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'user-password-container',
    children: {
      arg: 0
    }
  });

  var bp13 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'user-username',
    children: {
      arg: 0
    }
  });

  var bp12 = _inferno2.default.createBlueprint({
    tag: 'form',
    className: 'login-form',
    events: {
      arg: 0
    },
    children: {
      arg: 1
    }
  });

  var bp11 = _inferno2.default.createBlueprint({
    tag: 'img',
    className: 'user-avatar',
    attrs: {
      arg: 0
    }
  });

  var bp10 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'avatar-mask',
    children: {
      arg: 0
    }
  });

  var bp9 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'avatar-background',
    children: {
      arg: 0
    }
  });

  var bp8 = _inferno2.default.createBlueprint({
    tag: 'div',
    className: 'avatar-container',
    children: {
      arg: 0
    }
  });

  var bp7 = _inferno2.default.createBlueprint({
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
        },
        "activeUser": undefined,
        "activeSession": undefined,
        "password": ""
      };

      // Example User: {"display_name":"captain","language":"en_US.utf8","real_name":"","layout":null,"image":"/var/lib/AccountsService/icons/local/captain-d795e09269c1f3a9efd0f37da33c67ec","home_directory":"/home/captain","name":"captain","logged_in":false,"session":"deepin"}
      // Example Session: {"name":"Deepin","key":"deepin","comment":"Deepin Desktop Environment"}
      return _this;
    }

    _createClass(LoginPanel, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.setDate();
        setInterval(this.setDate.bind(this), 30 * 1000);
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        var _this2 = this;

        var defaultUser = this.findDefaultUser();
        var defaultSession = this.findDefaultSession(defaultUser);

        this.setState({
          "activeUser": defaultUser,
          "activeSession": defaultSession
        });

        // Functions that lightdm needs
        window.show_prompt = function (text, type) {
          if (type === "text") {
            window.notifications.generate(text);
          } else if (type === "password") {
            lightdm.respond(_this2.state.password);
          }
        };
        window.show_message = function (text, type) {
          window.notifications.generate(text, type);
        };
        window.authentication_complete = function () {
          window.notifications.generate("Welcome back.");
          if (lightdm.is_authenticated) {
            lightdm.start_session_sync(_this2.state.activeSession.key);
          }
        };
        window.autologin_timer_expired = function () {
          window.notifications.generate(text, type);
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
        console.log("OLK");
        console.log(typeof user === 'undefined' ? 'undefined' : _typeof(user));
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
      key: 'handleLoginSubmit',
      value: function handleLoginSubmit(event) {
        event.preventDefault();
        lightdm.authenticate(this.state.activeUser.name);
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
          "activeSession": session
        });
      }
    }, {
      key: 'setDate',
      value: function setDate() {
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
        var _this3 = this;

        var date = this.state.date;
        var dateString = false;

        if (date.initialized === true) {
          dateString = bp0([bp1(date.dayName), ', the ', bp2(date.formattedDayValue), ' of ', bp3(date.monthName)]);
        }

        // Cycle through a render pass once in order for the fadeIn animation to play properly.
        if (date.updateDelay === false) {
          setTimeout(function () {
            date.updateDelay = true;
            _this3.setState({
              "date": date
            });
          }, 100);
        }

        return dateString;
      }
    }, {
      key: 'generateSessionDropdown',
      value: function generateSessionDropdown() {
        var _this4 = this;

        // Sort by active, then alphabetical.
        // Doing this requires using sort in reverse.
        var rows = window.lightdm.sessions.sort(function (a, b) {
          return a.name.toUpperCase() > b.name.toUpperCase();
        }).sort(function (a, b) {
          return b.key.toLowerCase() === _this4.state.activeSession.key.toLowerCase() ? 1 : -1;
        }).map(function (session) {
          var classes = ["dropdown-item"];
          var eventHandler = _this4.setActiveSession.bind(_this4, session.key);

          if (session.key === _this4.state.activeSession.key) {
            eventHandler = false;
            classes.push("active");
          }

          return bp4(session.key, classes.join(' '), {
            onclick: eventHandler
          }, session.name);
        });

        return bp5(rows);
      }
    }, {
      key: 'generateSwitchUserButton',
      value: function generateSwitchUserButton() {
        var classes = ['left'];

        var eventHandler = function eventHandler() {
          alert("Not yet implemented! Complain on Github!");
        };

        if (window.lightdm.users.length < 20) {
          eventHandler = false;
          classes.push("disabled");
        }

        return bp6(classes.join(' '), {
          onclick: eventHandler
        }, 'SWITCH USER');
      }
    }, {
      key: 'render',
      value: function render() {
        var dateClasses = ["right", "date"];
        var dateString = this.generateDateString();

        if (this.state.date.initialized === true && this.state.date.updateDelay === true) {
          dateClasses.push("loaded");
        }

        var sessionDropdown = this.generateSessionDropdown();
        var switchUserButton = this.generateSwitchUserButton();

        return bp7([bp8(bp9(bp10(bp11({
          src: this.state.activeUser.image
        })))), bp12({
          onsubmit: this.handleLoginSubmit.bind(this)
        }, [bp13(this.state.activeUser.display_name), bp14(bp15({
          type: 'password',
          placeholder: '*******************',
          value: this.state.password
        }, {
          onchange: this.handlePasswordInput.bind(this)
        })), bp16([bp17(sessionDropdown), bp18(bp19())])]), bp20([switchUserButton, bp21(dateClasses.join(' '), dateString)])]);
      }
    }]);

    return LoginPanel;
  }(_infernoComponent2.default);
});