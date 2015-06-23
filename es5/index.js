'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _stamina = require('stamina');

var _loadJs = require('./load.js');

var _loadJs2 = _interopRequireDefault(_loadJs);

require('source-map-support').install();

exports['default'] = function (gulp, causality) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function () {
      var _step$value = _slicedToArray(_step.value, 2);

      var task = _step$value[0];
      var cause = _step$value[1];

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

    for (var _iterator = (0, _loadJs2['default'])(causality)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return gulp;
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7cUJBRWMsT0FBTzs7Ozt1QkFDRSxTQUFTOztzQkFDZixXQUFXOzs7O0FBSjVCLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBOztxQkFNeEIsVUFBVSxJQUFJLEVBQUUsU0FBUyxFQUFFOzs7Ozs7Ozs7VUFDOUIsSUFBSTtVQUFFLEtBQUs7O0FBQ25CLGNBQVEsbUJBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNuQixhQUFLLFFBQVE7QUFDWCxjQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDckIseUJBUkYsUUFBUSxFQVFHLElBQUksRUFBRSxJQUFJLG1CQUFnQixLQUFLLFVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1dBQ3ZEO0FBQ0QsZ0JBQUs7QUFBQSxBQUNQLGFBQUssT0FBTztBQUNWLGNBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTs7QUFFcEIseUJBZEYsUUFBUSxFQWNHLElBQUksT0FBSyxJQUFJLGFBQVUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFO3FCQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQUEsQ0FDMUIsQ0FBQTtXQUNGO0FBQ0QsZ0JBQUs7QUFBQSxBQUNQO0FBQ0UsaUJBQU8sQ0FBQyxJQUFJLGdCQUFjLElBQUksVUFBSyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUcsQ0FBQTtBQUFBLE9BQ3pEOzs7QUFqQkgseUJBQTBCLHlCQUFLLFNBQVMsQ0FBQyw4SEFBRTs7S0FrQjFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0QsU0FBTyxJQUFJLENBQUE7Q0FDWiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3NvdXJjZS1tYXAtc3VwcG9ydCcpLmluc3RhbGwoKVxuXG5pbXBvcnQgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7Z3VscFRhc2t9IGZyb20gJ3N0YW1pbmEnXG5pbXBvcnQgbG9hZCBmcm9tICcuL2xvYWQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChndWxwLCBjYXVzYWxpdHkpIHtcbiAgZm9yIChsZXQgW3Rhc2ssIGNhdXNlXSBvZiBsb2FkKGNhdXNhbGl0eSkpIHtcbiAgICBzd2l0Y2ggKFIudHlwZShjYXVzZSkpIHtcbiAgICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICAgIGlmIChndWxwLnRhc2tzW2NhdXNlXSkge1xuICAgICAgICAgIGd1bHBUYXNrKGd1bHAsIHRhc2ssIGBBbGlhcyBmb3IgJyR7Y2F1c2V9Jy5gLCBbY2F1c2VdKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdBcnJheSc6XG4gICAgICAgIGlmIChndWxwLnRhc2tzW3Rhc2tdKSB7XG4gICAgICAgICAgLy8gYSBzaG9ydGhhbmQgZm9yIGZpbGVzIHRyaWdnZXJpbmcgYW4gZXhpc3RpbmcgdGFzayAtIGNyZWF0ZXMgdGFzazp3YXRjaFxuICAgICAgICAgIGd1bHBUYXNrKGd1bHAsIGAke3Rhc2t9OndhdGNoYCwgY2F1c2UudG9TdHJpbmcoKSwgKCkgPT5cbiAgICAgICAgICAgIGd1bHAud2F0Y2goY2F1c2UsIFt0YXNrXSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUud2FybihgQ2F1c2VsZXNzICR7dGFza306ICR7Y2F1c2UudG9TdHJpbmcoKX1gKVxuICAgIH1cbiAgfVxuICByZXR1cm4gZ3VscFxufVxuIl19