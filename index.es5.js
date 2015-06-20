'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztxQkFFYyxPQUFPOzs7O3VCQUNFLFNBQVM7O0FBSGhDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBOztxQkFLeEIsVUFBVSxJQUFJLEVBQUUsU0FBUyxFQUFFO3dCQUUvQixJQUFJO0FBQ1gsUUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzNCLFlBQVEsbUJBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNuQixXQUFLLFFBQVE7QUFDWCxZQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDckIsdUJBVEYsUUFBUSxFQVNHLElBQUksRUFBRSxJQUFJLG1CQUFnQixLQUFLLFVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQ3ZEO0FBQ0QsY0FBSztBQUFBLEFBQ1AsV0FBSyxPQUFPO0FBQ1YsWUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFOztBQUVwQix1QkFmRixRQUFRLEVBZUcsSUFBSSxPQUFLLElBQUksYUFBVSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUU7bUJBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7V0FBQSxDQUMxQixDQUFBO1NBQ0Y7QUFDRCxjQUFLO0FBQUEsQUFDUDtBQUNFLGVBQU8sQ0FBQyxJQUFJLGdCQUFjLElBQUksVUFBSyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUcsQ0FBQTtBQUFBLEtBQ3pEOzs7QUFsQkgsT0FBSyxJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7VUFBbkIsSUFBSTtHQW1CWjs7QUFFRCxTQUFPLElBQUksQ0FBQTtDQUNaIiwiZmlsZSI6ImluZGV4LmVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3NvdXJjZS1tYXAtc3VwcG9ydCcpLmluc3RhbGwoKVxuXG5pbXBvcnQgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7Z3VscFRhc2t9IGZyb20gJ3N0YW1pbmEnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChndWxwLCBjYXVzYWxpdHkpIHtcblxuICBmb3IgKGxldCB0YXNrIGluIGNhdXNhbGl0eSkge1xuICAgIGxldCBjYXVzZSA9IGNhdXNhbGl0eVt0YXNrXVxuICAgIHN3aXRjaCAoUi50eXBlKGNhdXNlKSkge1xuICAgICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgICAgaWYgKGd1bHAudGFza3NbY2F1c2VdKSB7XG4gICAgICAgICAgZ3VscFRhc2soZ3VscCwgdGFzaywgYEFsaWFzIGZvciAnJHtjYXVzZX0nLmAsIFtjYXVzZV0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgICAgaWYgKGd1bHAudGFza3NbdGFza10pIHtcbiAgICAgICAgICAvLyBhIHNob3J0aGFuZCBmb3IgZmlsZXMgdHJpZ2dlcmluZyBhbiBleGlzdGluZyB0YXNrIC0gY3JlYXRlcyB0YXNrOndhdGNoXG4gICAgICAgICAgZ3VscFRhc2soZ3VscCwgYCR7dGFza306d2F0Y2hgLCBjYXVzZS50b1N0cmluZygpLCAoKSA9PlxuICAgICAgICAgICAgZ3VscC53YXRjaChjYXVzZSwgW3Rhc2tdKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS53YXJuKGBDYXVzZWxlc3MgJHt0YXNrfTogJHtjYXVzZS50b1N0cmluZygpfWApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGd1bHBcbn1cbiJdfQ==