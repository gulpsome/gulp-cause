'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsU0FBUyxTQUFTLENBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7QUFDeEMsUUFBTSxJQUFJLEtBQUssaUJBQWUsSUFBSSxVQUFLLFVBSmpDLE9BQU8sRUFJa0MsS0FBSyxDQUFDLGlCQUFZLE9BQU8sT0FBSSxDQUFBO0NBQzdFOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxJQUFJLEVBQUUsU0FBUyxFQUFFOzs7Ozs7Ozs7VUFDaEMsSUFBSTtVQUFFLEtBQUs7O0FBQ25CLGNBQVEsZ0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNuQixhQUFLLFFBQVE7QUFDWCxjQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDckIseUJBZEYsUUFBUSxFQWNHLElBQUksRUFBRSxJQUFJLG1CQUFnQixLQUFLLFVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1dBQ3ZELE1BQU07QUFDTCxxQkFBUyxDQUFDLElBQUksRUFBRSxLQUFLLG9CQUFrQixLQUFLLHFCQUFpQixDQUFBO1dBQzlEO0FBQ0QsZ0JBQUs7QUFBQSxBQUNQLGFBQUssT0FBTztBQUNWLGNBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTs7O0FBRXBCLGtCQUFJLFVBQVUsR0FBSSxnQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssT0FBTyxBQUFDLENBQUE7QUFDL0Msa0JBQUksVUFBVSxHQUFHLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO0FBQ3BFLDJCQXhCRixRQUFRLEVBd0JHLElBQUksRUFBSyxJQUFJLGFBQVUsVUFBVSxFQUFFLFlBQU07QUFDaEQsb0JBQUksVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxLQUNwQyx3REFBUyxLQUFLLEVBQUMsQ0FBQTtBQUFBLGVBQ3JCLENBQUMsQ0FBQTs7V0FDSDtBQUNELGdCQUFLO0FBQUEsQUFDUDtBQUNFLG1CQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSx5QkFBeUIsQ0FBQyxDQUFBO0FBQUEsT0FDcEQ7OztBQXRCSCx5QkFBMEIsb0JBQUssU0FBUyxDQUFDLDhIQUFFOztLQXVCMUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDRCxTQUFPLElBQUksQ0FBQTtDQUNaLENBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlcidcblxuaW1wb3J0IFIgZnJvbSAncmFtZGEnXG5pbXBvcnQge2d1bHBUYXNrfSBmcm9tICdiZS1nb29kcydcbmltcG9ydCBsb2FkIGZyb20gJy4vbG9hZC5qcydcbmltcG9ydCB7aW5zcGVjdH0gZnJvbSAndXRpbCdcbmltcG9ydCB3YXRjaCBmcm9tICdndWxwLXdhdGNoJ1xuXG5mdW5jdGlvbiBjYXVzZWxlc3MgKHRhc2ssIGNhdXNlLCBiZWNhdXNlKSB7XG4gIHRocm93IG5ldyBFcnJvcihgQ2F1c2VsZXNzIHske3Rhc2t9OiAke2luc3BlY3QoY2F1c2UpfX0gZHVlIHRvICR7YmVjYXVzZX0uYClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZ3VscCwgY2F1c2FsaXR5KSB7XG4gIGZvciAobGV0IFt0YXNrLCBjYXVzZV0gb2YgbG9hZChjYXVzYWxpdHkpKSB7XG4gICAgc3dpdGNoIChSLnR5cGUoY2F1c2UpKSB7XG4gICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICBpZiAoZ3VscC50YXNrc1tjYXVzZV0pIHtcbiAgICAgICAgICBndWxwVGFzayhndWxwLCB0YXNrLCBgQWxpYXMgZm9yICcke2NhdXNlfScuYCwgW2NhdXNlXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXVzZWxlc3ModGFzaywgY2F1c2UsIGBtaXNzaW5nIHRhc2sgJHtjYXVzZX0gLSBjYW4ndCBhbGlhc2ApXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgICAgaWYgKGd1bHAudGFza3NbdGFza10pIHtcbiAgICAgICAgICAvLyBhIHNob3J0aGFuZCBmb3IgZmlsZXMgdHJpZ2dlcmluZyBhbiBleGlzdGluZyB0YXNrIC0gY3JlYXRlcyB0YXNrOndhdGNoXG4gICAgICAgICAgbGV0IHBsYWluV2F0Y2ggPSAoUi50eXBlKGNhdXNlWzBdKSAhPT0gJ0FycmF5JylcbiAgICAgICAgICBsZXQgaGVscFN0cmluZyA9IHBsYWluV2F0Y2ggPyBjYXVzZS50b1N0cmluZygpIDogY2F1c2VbMF0udG9TdHJpbmcoKVxuICAgICAgICAgIGd1bHBUYXNrKGd1bHAsIGAke3Rhc2t9OndhdGNoYCwgaGVscFN0cmluZywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBsYWluV2F0Y2gpIGd1bHAud2F0Y2goY2F1c2UsIFt0YXNrXSlcbiAgICAgICAgICAgIGVsc2Ugd2F0Y2goLi4uY2F1c2UpIC8vIHdhbnQgZ3VscC13YXRjaCAoYXBwbHlpbmcgY2F1c2UgYXJncylcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjYXVzZWxlc3ModGFzaywgY2F1c2UsICd1bnJlY29nbml6ZWQgdmFsdWUgdHlwZScpXG4gICAgfVxuICB9XG4gIHJldHVybiBndWxwXG59XG4iXX0=