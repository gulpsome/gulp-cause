'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _stamina = require('stamina');

var _loadJs = require('./load.js');

var _loadJs2 = _interopRequireDefault(_loadJs);

var _util = require('util');

var _gulpWatch = require('gulp-watch');

var _gulpWatch2 = _interopRequireDefault(_gulpWatch);

require('source-map-support').install();

function causeless(task, cause, because) {
  throw new Error('Causeless {' + task + ': ' + (0, _util.inspect)(cause) + '} due to ' + because + '.');
}

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
          } else {
            causeless(task, cause, 'missing task ' + cause + ' - can\'t alias');
          }
          break;
        case 'Array':
          if (gulp.tasks[task]) {
            (function () {
              // a shorthand for files triggering an existing task - creates task:watch
              var plainWatch = _ramda2['default'].type(cause[0]) !== 'Array';
              var helpString = plainWatch ? cause.toString() : cause[0].toString();
              (0, _stamina.gulpTask)(gulp, '' + task + ':watch', helpString, function () {
                if (plainWatch) gulp.watch(cause, [task]);else _gulpWatch2['default'].apply(undefined, _toConsumableArray(cause));
              });
            })();
          }
          break;
        default:
          causeless(task, cause, 'unrecognized value type');
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
// want gulp-watch (applying cause args)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7cUJBRWMsT0FBTzs7Ozt1QkFDRSxTQUFTOztzQkFDZixXQUFXOzs7O29CQUNOLE1BQU07O3lCQUNWLFlBQVk7Ozs7QUFOOUIsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7O0FBUXZDLFNBQVMsU0FBUyxDQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO0FBQ3hDLFFBQU0sSUFBSSxLQUFLLGlCQUFlLElBQUksVUFBSyxVQUpqQyxPQUFPLEVBSWtDLEtBQUssQ0FBQyxpQkFBWSxPQUFPLE9BQUksQ0FBQTtDQUM3RTs7cUJBRWMsVUFBVSxJQUFJLEVBQUUsU0FBUyxFQUFFOzs7Ozs7Ozs7VUFDOUIsSUFBSTtVQUFFLEtBQUs7O0FBQ25CLGNBQVEsbUJBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNuQixhQUFLLFFBQVE7QUFDWCxjQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDckIseUJBZEYsUUFBUSxFQWNHLElBQUksRUFBRSxJQUFJLG1CQUFnQixLQUFLLFVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1dBQ3ZELE1BQU07QUFDTCxxQkFBUyxDQUFDLElBQUksRUFBRSxLQUFLLG9CQUFrQixLQUFLLHFCQUFpQixDQUFBO1dBQzlEO0FBQ0QsZ0JBQUs7QUFBQSxBQUNQLGFBQUssT0FBTztBQUNWLGNBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTs7O0FBRXBCLGtCQUFJLFVBQVUsR0FBSSxtQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxBQUFDLENBQUE7QUFDL0Msa0JBQUksVUFBVSxHQUFHLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO0FBQ3BFLDJCQXhCRixRQUFRLEVBd0JHLElBQUksT0FBSyxJQUFJLGFBQVUsVUFBVSxFQUFFLFlBQU07QUFDaEQsb0JBQUksVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxLQUNwQywyREFBUyxLQUFLLEVBQUMsQ0FBQTtlQUNyQixDQUFDLENBQUE7O1dBQ0g7QUFDRCxnQkFBSztBQUFBLEFBQ1A7QUFDRSxtQkFBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUseUJBQXlCLENBQUMsQ0FBQTtBQUFBLE9BQ3BEOzs7QUF0QkgseUJBQTBCLHlCQUFLLFNBQVMsQ0FBQyw4SEFBRTs7S0F1QjFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0QsU0FBTyxJQUFJLENBQUE7Q0FDWiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3NvdXJjZS1tYXAtc3VwcG9ydCcpLmluc3RhbGwoKVxuXG5pbXBvcnQgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7Z3VscFRhc2t9IGZyb20gJ3N0YW1pbmEnXG5pbXBvcnQgbG9hZCBmcm9tICcuL2xvYWQuanMnXG5pbXBvcnQge2luc3BlY3R9IGZyb20gJ3V0aWwnXG5pbXBvcnQgd2F0Y2ggZnJvbSAnZ3VscC13YXRjaCdcblxuZnVuY3Rpb24gY2F1c2VsZXNzICh0YXNrLCBjYXVzZSwgYmVjYXVzZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoYENhdXNlbGVzcyB7JHt0YXNrfTogJHtpbnNwZWN0KGNhdXNlKX19IGR1ZSB0byAke2JlY2F1c2V9LmApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChndWxwLCBjYXVzYWxpdHkpIHtcbiAgZm9yIChsZXQgW3Rhc2ssIGNhdXNlXSBvZiBsb2FkKGNhdXNhbGl0eSkpIHtcbiAgICBzd2l0Y2ggKFIudHlwZShjYXVzZSkpIHtcbiAgICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICAgIGlmIChndWxwLnRhc2tzW2NhdXNlXSkge1xuICAgICAgICAgIGd1bHBUYXNrKGd1bHAsIHRhc2ssIGBBbGlhcyBmb3IgJyR7Y2F1c2V9Jy5gLCBbY2F1c2VdKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhdXNlbGVzcyh0YXNrLCBjYXVzZSwgYG1pc3NpbmcgdGFzayAke2NhdXNlfSAtIGNhbid0IGFsaWFzYClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnQXJyYXknOlxuICAgICAgICBpZiAoZ3VscC50YXNrc1t0YXNrXSkge1xuICAgICAgICAgIC8vIGEgc2hvcnRoYW5kIGZvciBmaWxlcyB0cmlnZ2VyaW5nIGFuIGV4aXN0aW5nIHRhc2sgLSBjcmVhdGVzIHRhc2s6d2F0Y2hcbiAgICAgICAgICBsZXQgcGxhaW5XYXRjaCA9IChSLnR5cGUoY2F1c2VbMF0pICE9PSAnQXJyYXknKVxuICAgICAgICAgIGxldCBoZWxwU3RyaW5nID0gcGxhaW5XYXRjaCA/IGNhdXNlLnRvU3RyaW5nKCkgOiBjYXVzZVswXS50b1N0cmluZygpXG4gICAgICAgICAgZ3VscFRhc2soZ3VscCwgYCR7dGFza306d2F0Y2hgLCBoZWxwU3RyaW5nLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGxhaW5XYXRjaCkgZ3VscC53YXRjaChjYXVzZSwgW3Rhc2tdKVxuICAgICAgICAgICAgZWxzZSB3YXRjaCguLi5jYXVzZSkgLy8gd2FudCBndWxwLXdhdGNoIChhcHBseWluZyBjYXVzZSBhcmdzKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNhdXNlbGVzcyh0YXNrLCBjYXVzZSwgJ3VucmVjb2duaXplZCB2YWx1ZSB0eXBlJylcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGd1bHBcbn1cbiJdfQ==