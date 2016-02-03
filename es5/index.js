'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

require('source-map-support/register');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _beGoods = require('be-goods');

var _load = require('./load.js');

var _load2 = _interopRequireDefault(_load);

var _util = require('util');

var _gulpWatch = require('gulp-watch');

var _gulpWatch2 = _interopRequireDefault(_gulpWatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function causeless(task, cause, because) {
  throw new Error('Causeless {' + task + ': ' + (0, _util.inspect)(cause) + '} due to ' + because + '.');
}

module.exports = function (gulp, causality) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var _step$value = _slicedToArray(_step.value, 2);

      var task = _step$value[0];
      var cause = _step$value[1];

      switch (_ramda2.default.type(cause)) {
        case 'String':
          if (gulp.tasks[cause]) {
            (0, _beGoods.gulpTask)(gulp, task, 'Alias for \'' + cause + '\'.', [cause]);
          } else {
            causeless(task, cause, 'missing task ' + cause + ' - can\'t alias');
          }
          break;
        case 'Array':
          if (gulp.tasks[task]) {
            (function () {
              // a shorthand for files triggering an existing task - creates task:watch
              var plainWatch = _ramda2.default.type(cause[0]) !== 'Array';
              var helpString = plainWatch ? cause.toString() : cause[0].toString();
              (0, _beGoods.gulpTask)(gulp, task + ':watch', helpString, function () {
                if (plainWatch) gulp.watch(cause, [task]);else _gulpWatch2.default.apply(undefined, _toConsumableArray(cause)); // want gulp-watch (applying cause args)
              });
            })();
          }
          break;
        default:
          causeless(task, cause, 'unrecognized value type');
      }
    };

    for (var _iterator = (0, _load2.default)(causality)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return gulp;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsU0FBUyxTQUFULENBQW9CLElBQXBCLEVBQTBCLEtBQTFCLEVBQWlDLE9BQWpDLEVBQTBDO0FBQ3hDLFFBQU0sSUFBSSxLQUFKLGlCQUF3QixjQUFTLG1CQUFRLEtBQVIsa0JBQTBCLGFBQTNELENBQU4sQ0FEd0M7Q0FBMUM7O0FBSUEsT0FBTyxPQUFQLEdBQWlCLFVBQVUsSUFBVixFQUFnQixTQUFoQixFQUEyQjs7Ozs7Ozs7O1VBQ2hDO1VBQU07O0FBQ2QsY0FBUSxnQkFBRSxJQUFGLENBQU8sS0FBUCxDQUFSO0FBQ0UsYUFBSyxRQUFMO0FBQ0UsY0FBSSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQUosRUFBdUI7QUFDckIsbUNBQVMsSUFBVCxFQUFlLElBQWYsbUJBQW1DLGFBQW5DLEVBQThDLENBQUMsS0FBRCxDQUE5QyxFQURxQjtXQUF2QixNQUVPO0FBQ0wsc0JBQVUsSUFBVixFQUFnQixLQUFoQixvQkFBdUMseUJBQXZDLEVBREs7V0FGUDtBQUtBLGdCQU5GO0FBREYsYUFRTyxPQUFMO0FBQ0UsY0FBSSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQUosRUFBc0I7OztBQUVwQixrQkFBSSxhQUFjLGdCQUFFLElBQUYsQ0FBTyxNQUFNLENBQU4sQ0FBUCxNQUFxQixPQUFyQjtBQUNsQixrQkFBSSxhQUFhLGFBQWEsTUFBTSxRQUFOLEVBQWIsR0FBZ0MsTUFBTSxDQUFOLEVBQVMsUUFBVCxFQUFoQztBQUNqQixxQ0FBUyxJQUFULEVBQWtCLGVBQWxCLEVBQWdDLFVBQWhDLEVBQTRDLFlBQU07QUFDaEQsb0JBQUksVUFBSixFQUFnQixLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQWtCLENBQUMsSUFBRCxDQUFsQixFQUFoQixLQUNLLHdEQUFTLE1BQVQsRUFETDtBQURnRCxlQUFOLENBQTVDO2lCQUpvQjtXQUF0QjtBQVNBLGdCQVZGO0FBUkY7QUFvQkksb0JBQVUsSUFBVixFQUFnQixLQUFoQixFQUF1Qix5QkFBdkIsRUFERjtBQW5CRjs7O0FBREYseUJBQTBCLG9CQUFLLFNBQUwsMkJBQTFCLG9HQUEyQzs7S0FBM0M7Ozs7Ozs7Ozs7Ozs7O0dBRDBDOztBQXlCMUMsU0FBTyxJQUFQLENBekIwQztDQUEzQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJ1xuXG5pbXBvcnQgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7Z3VscFRhc2t9IGZyb20gJ2JlLWdvb2RzJ1xuaW1wb3J0IGxvYWQgZnJvbSAnLi9sb2FkLmpzJ1xuaW1wb3J0IHtpbnNwZWN0fSBmcm9tICd1dGlsJ1xuaW1wb3J0IHdhdGNoIGZyb20gJ2d1bHAtd2F0Y2gnXG5cbmZ1bmN0aW9uIGNhdXNlbGVzcyAodGFzaywgY2F1c2UsIGJlY2F1c2UpIHtcbiAgdGhyb3cgbmV3IEVycm9yKGBDYXVzZWxlc3MgeyR7dGFza306ICR7aW5zcGVjdChjYXVzZSl9fSBkdWUgdG8gJHtiZWNhdXNlfS5gKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChndWxwLCBjYXVzYWxpdHkpIHtcbiAgZm9yIChsZXQgW3Rhc2ssIGNhdXNlXSBvZiBsb2FkKGNhdXNhbGl0eSkpIHtcbiAgICBzd2l0Y2ggKFIudHlwZShjYXVzZSkpIHtcbiAgICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICAgIGlmIChndWxwLnRhc2tzW2NhdXNlXSkge1xuICAgICAgICAgIGd1bHBUYXNrKGd1bHAsIHRhc2ssIGBBbGlhcyBmb3IgJyR7Y2F1c2V9Jy5gLCBbY2F1c2VdKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhdXNlbGVzcyh0YXNrLCBjYXVzZSwgYG1pc3NpbmcgdGFzayAke2NhdXNlfSAtIGNhbid0IGFsaWFzYClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnQXJyYXknOlxuICAgICAgICBpZiAoZ3VscC50YXNrc1t0YXNrXSkge1xuICAgICAgICAgIC8vIGEgc2hvcnRoYW5kIGZvciBmaWxlcyB0cmlnZ2VyaW5nIGFuIGV4aXN0aW5nIHRhc2sgLSBjcmVhdGVzIHRhc2s6d2F0Y2hcbiAgICAgICAgICBsZXQgcGxhaW5XYXRjaCA9IChSLnR5cGUoY2F1c2VbMF0pICE9PSAnQXJyYXknKVxuICAgICAgICAgIGxldCBoZWxwU3RyaW5nID0gcGxhaW5XYXRjaCA/IGNhdXNlLnRvU3RyaW5nKCkgOiBjYXVzZVswXS50b1N0cmluZygpXG4gICAgICAgICAgZ3VscFRhc2soZ3VscCwgYCR7dGFza306d2F0Y2hgLCBoZWxwU3RyaW5nLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGxhaW5XYXRjaCkgZ3VscC53YXRjaChjYXVzZSwgW3Rhc2tdKVxuICAgICAgICAgICAgZWxzZSB3YXRjaCguLi5jYXVzZSkgLy8gd2FudCBndWxwLXdhdGNoIChhcHBseWluZyBjYXVzZSBhcmdzKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNhdXNlbGVzcyh0YXNrLCBjYXVzZSwgJ3VucmVjb2duaXplZCB2YWx1ZSB0eXBlJylcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGd1bHBcbn1cbiJdfQ==