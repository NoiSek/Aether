define(['exports', 'src/dist/js/inferno.min', 'src/dist/js/inferno-component.min', 'src/dist/js/inferno-dom.min', './Notifications', './LoginPanel'], function (exports, _inferno, _infernoComponent, _infernoDom, _Notifications, _LoginPanel) {
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

  function initClock() {
    // This causes the clock to render one second later than the date does,
    // but it looks nicer for them to fade in seperately, so I'm leaving it.
    var timer = setInterval(updateClock, 1000);
  }

  function updateClock() {
    var padZeroes = function padZeroes(i) {
      return i < 10 ? "0" + i : i;
    };

    var now = new Date();
    var hours = padZeroes(now.getHours());
    var minutes = padZeroes(now.getMinutes());
    var formattedTime = hours + ':' + minutes;

    var clock = document.querySelectorAll(".clock")[0];

    clock.innerText = formattedTime;

    if (clock.className.indexOf("loaded") === -1) {
      clock.className += " loaded";
    }
  }

  function setHostname() {
    var hostname = document.querySelectorAll(".hostname")[0];
    hostname.innerText = window.lightdm.hostname;
  }

  var bp0 = _inferno2.default.createBlueprint({
    tag: {
      arg: 0
    }
  });

  function Main() {
    setHostname();
    initClock();
    _infernoDom2.default.render(bp0(_LoginPanel.LoginPanel), document.getElementById("inferno-mount"));

    // Add notifications to the global scope for error handling
    window.notifications = new _Notifications.Notifications();
  }
});