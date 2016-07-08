define(['exports', 'src/dist/js/inferno.min', 'src/dist/js/inferno-component.min', 'src/dist/js/inferno-dom.min', './Notifications', './CommandPanel', './LoginPanel', './Clock'], function (exports, _inferno, _infernoComponent, _infernoDom, _Notifications, _CommandPanel, _LoginPanel, _Clock) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Main;

  var _inferno2 = _interopRequireDefault(_inferno);

  var _infernoComponent2 = _interopRequireDefault(_infernoComponent);

  var _infernoDom2 = _interopRequireDefault(_infernoDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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
    var backgrounds = ['abstract-1.jpg', 'boko.jpg', 'car.jpg', 'cavern.jpg', 'dark-grass.jpg', 'frosted.jpg', 'jet.png', 'mountains-1.jpg', 'night.png', 'ocean.jpg', 'paper-lanterns.jpg', 'pier.jpg', 'sanfran.jpg', 'space-1.jpg', 'space-3.jpg', 'space-4.jpg', 'tree-2.jpg'];

    // Add notifications to the global scope for error handling
    window.notifications = new _Notifications.Notifications();

    if (typeof Storage !== "undefined") {
      if (localStorage.getItem("wallpaper") === null) {
        localStorage.setItem("wallpaper", "space-1.jpg");
      } else {
        // Stuff
      }
    } else {
      window.notifications.generate("localStorage not supported.", 'error');
    }

    _infernoDom2.default.render(bp0(_CommandPanel.CommandPanel), document.getElementById("command-panel"));
    _infernoDom2.default.render(bp1(_LoginPanel.LoginPanel), document.getElementById("login-panel"));
  }
});