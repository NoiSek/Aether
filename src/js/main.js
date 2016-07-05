define(['exports', 'src/dist/inferno.min', 'src/dist/inferno-dom.min'], function (exports, _inferno, _infernoDom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = main;

  var _inferno2 = _interopRequireDefault(_inferno);

  var _infernoDom2 = _interopRequireDefault(_infernoDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  console.log("Before");
  //import Component from 'src/dist/inferno-component.min';

  var bp0 = _inferno2.default.createBlueprint({
    tag: 'div',
    children: {
      arg: 0
    }
  });

  function main() {
    console.log("In");
    _infernoDom2.default.render(bp0('Hello World!'), document.getElementById("neat"));
    console.log("After");
  }

  main();
  console.log("It works!");
});
