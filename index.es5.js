'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _loadJs = require('./load.js');

var _loadJs2 = _interopRequireDefault(_loadJs);

var _stamina = require('stamina');

require('source-map-support').install();

exports['default'] = function (gulp, causality) {
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
};

module.exports = exports['default'];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztxQkFFYyxPQUFPOzs7O3NCQUNKLFdBQVc7Ozs7dUJBQ0wsU0FBUzs7QUFKaEMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7O3FCQU14QixVQUFVLElBQUksRUFBRSxTQUFTLEVBQUU7d0JBQy9CLElBQUk7QUFDWCxRQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDM0IsWUFBUSxtQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ25CLFdBQUssUUFBUTtBQUNYLFlBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNyQix1QkFSRixRQUFRLEVBUUcsSUFBSSxFQUFFLElBQUksbUJBQWdCLEtBQUssVUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDdkQ7QUFDRCxjQUFLO0FBQUEsQUFDUCxXQUFLLE9BQU87QUFDVixZQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7O0FBRXBCLHVCQWRGLFFBQVEsRUFjRyxJQUFJLE9BQUssSUFBSSxhQUFVLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRTttQkFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztXQUFBLENBQzFCLENBQUE7U0FDRjtBQUNELGNBQUs7QUFBQSxBQUNQO0FBQ0UsZUFBTyxDQUFDLElBQUksZ0JBQWMsSUFBSSxVQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBRyxDQUFBO0FBQUEsS0FDekQ7OztBQWxCSCxPQUFLLElBQUksSUFBSSxJQUFJLFNBQVMsRUFBRTtVQUFuQixJQUFJO0dBbUJaO0FBQ0QsU0FBTyxJQUFJLENBQUE7Q0FDWiIsImZpbGUiOiJpbmRleC5lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCdzb3VyY2UtbWFwLXN1cHBvcnQnKS5pbnN0YWxsKClcblxuaW1wb3J0IFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgbG9hZCBmcm9tICcuL2xvYWQuanMnXG5pbXBvcnQge2d1bHBUYXNrfSBmcm9tICdzdGFtaW5hJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZ3VscCwgY2F1c2FsaXR5KSB7XG4gIGZvciAobGV0IHRhc2sgaW4gY2F1c2FsaXR5KSB7XG4gICAgbGV0IGNhdXNlID0gY2F1c2FsaXR5W3Rhc2tdXG4gICAgc3dpdGNoIChSLnR5cGUoY2F1c2UpKSB7XG4gICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICBpZiAoZ3VscC50YXNrc1tjYXVzZV0pIHtcbiAgICAgICAgICBndWxwVGFzayhndWxwLCB0YXNrLCBgQWxpYXMgZm9yICcke2NhdXNlfScuYCwgW2NhdXNlXSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnQXJyYXknOlxuICAgICAgICBpZiAoZ3VscC50YXNrc1t0YXNrXSkge1xuICAgICAgICAgIC8vIGEgc2hvcnRoYW5kIGZvciBmaWxlcyB0cmlnZ2VyaW5nIGFuIGV4aXN0aW5nIHRhc2sgLSBjcmVhdGVzIHRhc2s6d2F0Y2hcbiAgICAgICAgICBndWxwVGFzayhndWxwLCBgJHt0YXNrfTp3YXRjaGAsIGNhdXNlLnRvU3RyaW5nKCksICgpID0+XG4gICAgICAgICAgICBndWxwLndhdGNoKGNhdXNlLCBbdGFza10pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLndhcm4oYENhdXNlbGVzcyAke3Rhc2t9OiAke2NhdXNlLnRvU3RyaW5nKCl9YClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGd1bHBcbn1cbiJdfQ==