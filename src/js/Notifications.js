define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var Notifications = exports.Notifications = function () {
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
});