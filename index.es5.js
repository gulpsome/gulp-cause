'use strict';

exports.__esModule = true;
exports.load = load;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _stamina = require('stamina');

require('source-map-support').install();

function load(what) {
  switch (_ramda2['default'].type(what)) {
    case 'Map':
      return what;
    case 'Object':
      return new Map(_ramda2['default'].toPairs(what));
    case 'Array':
      return new Map(what);
    default:
      throw new Error('Don\'t know how to convert ' + what.toString() + ' of type ' + _ramda2['default'].type(what) + ' to Map.');
  }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQUtnQixJQUFJLEdBQUosSUFBSTs7OztxQkFITixPQUFPOzs7O3VCQUNFLFNBQVM7O0FBSGhDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBOztBQUtoQyxTQUFTLElBQUksQ0FBRSxJQUFJLEVBQUU7QUFDMUIsVUFBUSxtQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ2xCLFNBQUssS0FBSztBQUNSLGFBQU8sSUFBSSxDQUFBO0FBQUEsQUFDYixTQUFLLFFBQVE7QUFDWCxhQUFPLElBQUksR0FBRyxDQUFDLG1CQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBQUEsQUFDakMsU0FBSyxPQUFPO0FBQ1YsYUFBTyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUFBLEFBQ3RCO0FBQ0UsWUFBTSxJQUFJLEtBQUssaUNBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsaUJBQVksbUJBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFXLENBQUE7QUFBQSxHQUNqRDtDQUNGOztxQkFFYyxVQUFVLElBQUksRUFBRSxTQUFTLEVBQUU7d0JBQy9CLElBQUk7QUFDWCxRQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDM0IsWUFBUSxtQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ25CLFdBQUssUUFBUTtBQUNYLFlBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNyQix1QkF0QkYsUUFBUSxFQXNCRyxJQUFJLEVBQUUsSUFBSSxtQkFBZ0IsS0FBSyxVQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtTQUN2RDtBQUNELGNBQUs7QUFBQSxBQUNQLFdBQUssT0FBTztBQUNWLFlBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTs7QUFFcEIsdUJBNUJGLFFBQVEsRUE0QkcsSUFBSSxPQUFLLElBQUksYUFBVSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUU7bUJBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7V0FBQSxDQUMxQixDQUFBO1NBQ0Y7QUFDRCxjQUFLO0FBQUEsQUFDUDtBQUNFLGVBQU8sQ0FBQyxJQUFJLGdCQUFjLElBQUksVUFBSyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUcsQ0FBQTtBQUFBLEtBQ3pEOzs7QUFsQkgsT0FBSyxJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7VUFBbkIsSUFBSTtHQW1CWjtBQUNELFNBQU8sSUFBSSxDQUFBO0NBQ1oiLCJmaWxlIjoiaW5kZXguZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnc291cmNlLW1hcC1zdXBwb3J0JykuaW5zdGFsbCgpXG5cbmltcG9ydCBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHtndWxwVGFza30gZnJvbSAnc3RhbWluYSdcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWQgKHdoYXQpIHtcbiAgc3dpdGNoIChSLnR5cGUod2hhdCkpIHtcbiAgICBjYXNlICdNYXAnOlxuICAgICAgcmV0dXJuIHdoYXRcbiAgICBjYXNlICdPYmplY3QnOlxuICAgICAgcmV0dXJuIG5ldyBNYXAoUi50b1BhaXJzKHdoYXQpKVxuICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgIHJldHVybiBuZXcgTWFwKHdoYXQpXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRG9uJ3Qga25vdyBob3cgdG8gY29udmVydCBcXFxuJHt3aGF0LnRvU3RyaW5nKCl9IG9mIHR5cGUgJHtSLnR5cGUod2hhdCl9IHRvIE1hcC5gKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChndWxwLCBjYXVzYWxpdHkpIHtcbiAgZm9yIChsZXQgdGFzayBpbiBjYXVzYWxpdHkpIHtcbiAgICBsZXQgY2F1c2UgPSBjYXVzYWxpdHlbdGFza11cbiAgICBzd2l0Y2ggKFIudHlwZShjYXVzZSkpIHtcbiAgICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICAgIGlmIChndWxwLnRhc2tzW2NhdXNlXSkge1xuICAgICAgICAgIGd1bHBUYXNrKGd1bHAsIHRhc2ssIGBBbGlhcyBmb3IgJyR7Y2F1c2V9Jy5gLCBbY2F1c2VdKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdBcnJheSc6XG4gICAgICAgIGlmIChndWxwLnRhc2tzW3Rhc2tdKSB7XG4gICAgICAgICAgLy8gYSBzaG9ydGhhbmQgZm9yIGZpbGVzIHRyaWdnZXJpbmcgYW4gZXhpc3RpbmcgdGFzayAtIGNyZWF0ZXMgdGFzazp3YXRjaFxuICAgICAgICAgIGd1bHBUYXNrKGd1bHAsIGAke3Rhc2t9OndhdGNoYCwgY2F1c2UudG9TdHJpbmcoKSwgKCkgPT5cbiAgICAgICAgICAgIGd1bHAud2F0Y2goY2F1c2UsIFt0YXNrXSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUud2FybihgQ2F1c2VsZXNzICR7dGFza306ICR7Y2F1c2UudG9TdHJpbmcoKX1gKVxuICAgIH1cbiAgfVxuICByZXR1cm4gZ3VscFxufVxuIl19