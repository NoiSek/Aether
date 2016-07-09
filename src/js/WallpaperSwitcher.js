define(['exports', 'src/dist/js/inferno.min', 'src/dist/js/inferno-component.min'], function (exports, _inferno, _infernoComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.WallpaperSwitcher = undefined;

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

  var FADEOUT_TIME = 600;

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

  var WallpaperSwitcher = exports.WallpaperSwitcher = function (_Component) {
    _inherits(WallpaperSwitcher, _Component);

    function WallpaperSwitcher(props) {
      _classCallCheck(this, WallpaperSwitcher);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WallpaperSwitcher).call(this, props));

      _this.state = {
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

          var wallpaperImage = localStorage.getItem("wallpaper");
          var wallpaperBackground = document.querySelectorAll('.wallpaper-background')[0];
          var wallpaperForeground = document.querySelectorAll('.wallpaper-foreground')[0];

          wallpaperForeground.style.background = 'url(\'src/img/backgrounds/' + wallpaperImage + '\')';
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
        window.notifications.generate("This wallpaper has been saved as your default background.");

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

        var backgrounds = this.props.backgrounds;
        var switcher = this.state.switcher;
        var index = (switcher.index + backgrounds.length + 1) % backgrounds.length;
        var newWallpaper = backgrounds[index];

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
        this.state.wallpaperBackground.style.background = 'url(\'src/img/backgrounds/' + newWallpaper + '\')';
        this.state.wallpaperBackground.style.backgroundSize = 'cover';
        this.state.wallpaperForeground.className += " fadeout";

        switcher.currentlyFading = true;

        setTimeout(function () {
          // Cycle new wallpaper back to the front, make it visible again.
          _this2.state.wallpaperForeground.style.background = 'url(\'src/img/backgrounds/' + newWallpaper + '\')';
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
});