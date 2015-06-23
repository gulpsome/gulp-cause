'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _stamina = require('stamina');

var _es6ModuleLoader = require('es6-module-loader');

var _es6ModuleLoader2 = _interopRequireDefault(_es6ModuleLoader);

require('source-map-support').install();

_es6ModuleLoader2['default'].System.transpiler = 'babel';

exports['default'] = function (gulp, causality) {
  _es6ModuleLoader2['default'].System['import']('./load.js').then(function (load) {
    var _loop = function (task) {
      var cause = causality[task];
      switch (_ramda2['default'].type(cause)) {
        case 'String':
          if (gulp.tasks[cause]) {
            (0, _stamina.gulpTask)(gulp, task, 'Alias for \'' + cause + '\'.', [cause]);
          }
          break;
        case 'Array':
          if (gulp.tasks[task]) {
            // a shorthand for files triggering an existing task - creates task:watch
            (0, _stamina.gulpTask)(gulp, '' + task + ':watch', cause.toString(), function () {
              return gulp.watch(cause, [task]);
            });
          }
          break;
        default:
          console.warn('Causeless ' + task + ': ' + cause.toString());
      }
    };

    for (var task in causality) {
      _loop(task);
    }
    return gulp;
  });
};

module.exports = exports['default'];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FCQUVjLE9BQU87Ozs7dUJBQ0UsU0FBUzs7K0JBQ2IsbUJBQW1COzs7O0FBSnRDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBOztBQUt2Qyw2QkFBTyxNQUFNLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQTs7cUJBRW5CLFVBQVUsSUFBSSxFQUFFLFNBQVMsRUFBRTtBQUN4QywrQkFBTyxNQUFNLFVBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJLEVBQUU7MEJBQzNDLElBQUk7QUFDWCxVQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDM0IsY0FBUSxtQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ25CLGFBQUssUUFBUTtBQUNYLGNBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNyQix5QkFYSixRQUFRLEVBV0ssSUFBSSxFQUFFLElBQUksbUJBQWdCLEtBQUssVUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7V0FDdkQ7QUFDRCxnQkFBSztBQUFBLEFBQ1AsYUFBSyxPQUFPO0FBQ1YsY0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFOztBQUVwQix5QkFqQkosUUFBUSxFQWlCSyxJQUFJLE9BQUssSUFBSSxhQUFVLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRTtxQkFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUFBLENBQzFCLENBQUE7V0FDRjtBQUNELGdCQUFLO0FBQUEsQUFDUDtBQUNFLGlCQUFPLENBQUMsSUFBSSxnQkFBYyxJQUFJLFVBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFHLENBQUE7QUFBQSxPQUN6RDs7O0FBbEJILFNBQUssSUFBSSxJQUFJLElBQUksU0FBUyxFQUFFO1lBQW5CLElBQUk7S0FtQlo7QUFDRCxXQUFPLElBQUksQ0FBQTtHQUNaLENBQUMsQ0FBQTtDQUNIIiwiZmlsZSI6ImluZGV4LmVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3NvdXJjZS1tYXAtc3VwcG9ydCcpLmluc3RhbGwoKVxuXG5pbXBvcnQgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7Z3VscFRhc2t9IGZyb20gJ3N0YW1pbmEnXG5pbXBvcnQgbG9hZGVyIGZyb20gJ2VzNi1tb2R1bGUtbG9hZGVyJ1xubG9hZGVyLlN5c3RlbS50cmFuc3BpbGVyID0gJ2JhYmVsJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZ3VscCwgY2F1c2FsaXR5KSB7XG4gIGxvYWRlci5TeXN0ZW0uaW1wb3J0KCcuL2xvYWQuanMnKS50aGVuKGZ1bmN0aW9uKGxvYWQpIHtcbiAgICBmb3IgKGxldCB0YXNrIGluIGNhdXNhbGl0eSkge1xuICAgICAgbGV0IGNhdXNlID0gY2F1c2FsaXR5W3Rhc2tdXG4gICAgICBzd2l0Y2ggKFIudHlwZShjYXVzZSkpIHtcbiAgICAgICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgICAgICBpZiAoZ3VscC50YXNrc1tjYXVzZV0pIHtcbiAgICAgICAgICAgIGd1bHBUYXNrKGd1bHAsIHRhc2ssIGBBbGlhcyBmb3IgJyR7Y2F1c2V9Jy5gLCBbY2F1c2VdKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdBcnJheSc6XG4gICAgICAgICAgaWYgKGd1bHAudGFza3NbdGFza10pIHtcbiAgICAgICAgICAgIC8vIGEgc2hvcnRoYW5kIGZvciBmaWxlcyB0cmlnZ2VyaW5nIGFuIGV4aXN0aW5nIHRhc2sgLSBjcmVhdGVzIHRhc2s6d2F0Y2hcbiAgICAgICAgICAgIGd1bHBUYXNrKGd1bHAsIGAke3Rhc2t9OndhdGNoYCwgY2F1c2UudG9TdHJpbmcoKSwgKCkgPT5cbiAgICAgICAgICAgICAgZ3VscC53YXRjaChjYXVzZSwgW3Rhc2tdKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUud2FybihgQ2F1c2VsZXNzICR7dGFza306ICR7Y2F1c2UudG9TdHJpbmcoKX1gKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ3VscFxuICB9KVxufVxuIl19