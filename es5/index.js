'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

exports.__esModule = true;

exports.default = function (gulp, causality) {
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function causeless(task, cause, because) {
  throw new Error('Causeless {' + task + ': ' + (0, _util.inspect)(cause) + '} due to ' + because + '.');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFZZSxVQUFVLElBQUksRUFBRSxTQUFTLEVBQUU7Ozs7Ozs7OztVQUM5QixJQUFJO1VBQUUsS0FBSzs7QUFDbkIsY0FBUSxnQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ25CLGFBQUssUUFBUTtBQUNYLGNBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNyQix5QkFkRixRQUFRLEVBY0csSUFBSSxFQUFFLElBQUksbUJBQWdCLEtBQUssVUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7V0FDdkQsTUFBTTtBQUNMLHFCQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssb0JBQWtCLEtBQUsscUJBQWlCLENBQUE7V0FDOUQ7QUFDRCxnQkFBSztBQUFBLEFBQ1AsYUFBSyxPQUFPO0FBQ1YsY0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFOzs7QUFFcEIsa0JBQUksVUFBVSxHQUFJLGdCQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxPQUFPLEFBQUMsQ0FBQTtBQUMvQyxrQkFBSSxVQUFVLEdBQUcsVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7QUFDcEUsMkJBeEJGLFFBQVEsRUF3QkcsSUFBSSxFQUFLLElBQUksYUFBVSxVQUFVLEVBQUUsWUFBTTtBQUNoRCxvQkFBSSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLEtBQ3BDLHdEQUFTLEtBQUssRUFBQyxDQUFBO0FBQUEsZUFDckIsQ0FBQyxDQUFBOztXQUNIO0FBQ0QsZ0JBQUs7QUFBQSxBQUNQO0FBQ0UsbUJBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLHlCQUF5QixDQUFDLENBQUE7QUFBQSxPQUNwRDs7O0FBdEJILHlCQUEwQixvQkFBSyxTQUFTLENBQUMsOEhBQUU7O0tBdUIxQzs7Ozs7Ozs7Ozs7Ozs7OztBQUNELFNBQU8sSUFBSSxDQUFBO0NBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTlCRCxTQUFTLFNBQVMsQ0FBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUN4QyxRQUFNLElBQUksS0FBSyxpQkFBZSxJQUFJLFVBQUssVUFKakMsT0FBTyxFQUlrQyxLQUFLLENBQUMsaUJBQVksT0FBTyxPQUFJLENBQUE7Q0FDN0UiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcidcblxuaW1wb3J0IFIgZnJvbSAncmFtZGEnXG5pbXBvcnQge2d1bHBUYXNrfSBmcm9tICdiZS1nb29kcydcbmltcG9ydCBsb2FkIGZyb20gJy4vbG9hZC5qcydcbmltcG9ydCB7aW5zcGVjdH0gZnJvbSAndXRpbCdcbmltcG9ydCB3YXRjaCBmcm9tICdndWxwLXdhdGNoJ1xuXG5mdW5jdGlvbiBjYXVzZWxlc3MgKHRhc2ssIGNhdXNlLCBiZWNhdXNlKSB7XG4gIHRocm93IG5ldyBFcnJvcihgQ2F1c2VsZXNzIHske3Rhc2t9OiAke2luc3BlY3QoY2F1c2UpfX0gZHVlIHRvICR7YmVjYXVzZX0uYClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGd1bHAsIGNhdXNhbGl0eSkge1xuICBmb3IgKGxldCBbdGFzaywgY2F1c2VdIG9mIGxvYWQoY2F1c2FsaXR5KSkge1xuICAgIHN3aXRjaCAoUi50eXBlKGNhdXNlKSkge1xuICAgICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgICAgaWYgKGd1bHAudGFza3NbY2F1c2VdKSB7XG4gICAgICAgICAgZ3VscFRhc2soZ3VscCwgdGFzaywgYEFsaWFzIGZvciAnJHtjYXVzZX0nLmAsIFtjYXVzZV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2F1c2VsZXNzKHRhc2ssIGNhdXNlLCBgbWlzc2luZyB0YXNrICR7Y2F1c2V9IC0gY2FuJ3QgYWxpYXNgKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdBcnJheSc6XG4gICAgICAgIGlmIChndWxwLnRhc2tzW3Rhc2tdKSB7XG4gICAgICAgICAgLy8gYSBzaG9ydGhhbmQgZm9yIGZpbGVzIHRyaWdnZXJpbmcgYW4gZXhpc3RpbmcgdGFzayAtIGNyZWF0ZXMgdGFzazp3YXRjaFxuICAgICAgICAgIGxldCBwbGFpbldhdGNoID0gKFIudHlwZShjYXVzZVswXSkgIT09ICdBcnJheScpXG4gICAgICAgICAgbGV0IGhlbHBTdHJpbmcgPSBwbGFpbldhdGNoID8gY2F1c2UudG9TdHJpbmcoKSA6IGNhdXNlWzBdLnRvU3RyaW5nKClcbiAgICAgICAgICBndWxwVGFzayhndWxwLCBgJHt0YXNrfTp3YXRjaGAsIGhlbHBTdHJpbmcsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwbGFpbldhdGNoKSBndWxwLndhdGNoKGNhdXNlLCBbdGFza10pXG4gICAgICAgICAgICBlbHNlIHdhdGNoKC4uLmNhdXNlKSAvLyB3YW50IGd1bHAtd2F0Y2ggKGFwcGx5aW5nIGNhdXNlIGFyZ3MpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY2F1c2VsZXNzKHRhc2ssIGNhdXNlLCAndW5yZWNvZ25pemVkIHZhbHVlIHR5cGUnKVxuICAgIH1cbiAgfVxuICByZXR1cm4gZ3VscFxufVxuIl19