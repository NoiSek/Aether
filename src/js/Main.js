define(['exports', 'src/dist/js/inferno.min', 'src/dist/js/inferno-component.min', 'src/dist/js/inferno-dom.min', './Notifications', './CommandPanel', './LoginPanel'], function (exports, _inferno, _infernoComponent, _infernoDom, _Notifications, _CommandPanel, _LoginPanel) {
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
    // Add notifications to the global scope for error handling
    window.notifications = new _Notifications.Notifications();

    _infernoDom2.default.render(bp0(_CommandPanel.CommandPanel), document.getElementById("command-panel"));
    _infernoDom2.default.render(bp1(_LoginPanel.LoginPanel), document.getElementById("login-panel"));
  }
});