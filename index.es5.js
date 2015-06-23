'use strict';

exports.__esModule = true;
exports.load = load;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _stamina = require('stamina');

require('source-map-support').install();

function load(what) {
  if (_ramda2['default'].type(what) === 'Map') return what;else return new Map(what);
}

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQUtnQixJQUFJLEdBQUosSUFBSTs7OztxQkFITixPQUFPOzs7O3VCQUNFLFNBQVM7O0FBSGhDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBOztBQUtoQyxTQUFTLElBQUksQ0FBRSxJQUFJLEVBQUU7QUFDMUIsTUFBSSxtQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLE9BQU8sSUFBSSxDQUFBLEtBQ2xDLE9BQU8sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7Q0FDMUI7O3FCQUVjLFVBQVUsSUFBSSxFQUFFLFNBQVMsRUFBRTt3QkFDL0IsSUFBSTtBQUNYLFFBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUMzQixZQUFRLG1CQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDbkIsV0FBSyxRQUFRO0FBQ1gsWUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3JCLHVCQWJGLFFBQVEsRUFhRyxJQUFJLEVBQUUsSUFBSSxtQkFBZ0IsS0FBSyxVQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUN2RDtBQUNELGNBQUs7QUFBQSxBQUNQLFdBQUssT0FBTztBQUNWLFlBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTs7QUFFcEIsdUJBbkJGLFFBQVEsRUFtQkcsSUFBSSxPQUFLLElBQUksYUFBVSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUU7bUJBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7V0FBQSxDQUMxQixDQUFBO1NBQ0Y7QUFDRCxjQUFLO0FBQUEsQUFDUDtBQUNFLGVBQU8sQ0FBQyxJQUFJLGdCQUFjLElBQUksVUFBSyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUcsQ0FBQTtBQUFBLEtBQ3pEOzs7QUFsQkgsT0FBSyxJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7VUFBbkIsSUFBSTtHQW1CWjtBQUNELFNBQU8sSUFBSSxDQUFBO0NBQ1oiLCJmaWxlIjoiaW5kZXguZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnc291cmNlLW1hcC1zdXBwb3J0JykuaW5zdGFsbCgpXG5cbmltcG9ydCBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHtndWxwVGFza30gZnJvbSAnc3RhbWluYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWQgKHdoYXQpIHtcbiAgaWYgKFIudHlwZSh3aGF0KSA9PT0gJ01hcCcpIHJldHVybiB3aGF0XG4gIGVsc2UgcmV0dXJuIG5ldyBNYXAod2hhdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGd1bHAsIGNhdXNhbGl0eSkge1xuICBmb3IgKGxldCB0YXNrIGluIGNhdXNhbGl0eSkge1xuICAgIGxldCBjYXVzZSA9IGNhdXNhbGl0eVt0YXNrXVxuICAgIHN3aXRjaCAoUi50eXBlKGNhdXNlKSkge1xuICAgICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgICAgaWYgKGd1bHAudGFza3NbY2F1c2VdKSB7XG4gICAgICAgICAgZ3VscFRhc2soZ3VscCwgdGFzaywgYEFsaWFzIGZvciAnJHtjYXVzZX0nLmAsIFtjYXVzZV0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgICAgaWYgKGd1bHAudGFza3NbdGFza10pIHtcbiAgICAgICAgICAvLyBhIHNob3J0aGFuZCBmb3IgZmlsZXMgdHJpZ2dlcmluZyBhbiBleGlzdGluZyB0YXNrIC0gY3JlYXRlcyB0YXNrOndhdGNoXG4gICAgICAgICAgZ3VscFRhc2soZ3VscCwgYCR7dGFza306d2F0Y2hgLCBjYXVzZS50b1N0cmluZygpLCAoKSA9PlxuICAgICAgICAgICAgZ3VscC53YXRjaChjYXVzZSwgW3Rhc2tdKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS53YXJuKGBDYXVzZWxlc3MgJHt0YXNrfTogJHtjYXVzZS50b1N0cmluZygpfWApXG4gICAgfVxuICB9XG4gIHJldHVybiBndWxwXG59XG4iXX0=