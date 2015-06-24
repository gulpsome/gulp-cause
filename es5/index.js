'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _stamina = require('stamina');

var _loadJs = require('./load.js');

var _loadJs2 = _interopRequireDefault(_loadJs);

require('source-map-support').install();

function causeless(task, cause, because) {
  throw new Error('Causeless ' + task + ': ' + cause.toString() + ' due to ' + because);
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
            // a shorthand for files triggering an existing task - creates task:watch
            (0, _stamina.gulpTask)(gulp, '' + task + ':watch', cause.toString(), function () {
              return gulp.watch(cause, [task]);
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FCQUVjLE9BQU87Ozs7dUJBQ0UsU0FBUzs7c0JBQ2YsV0FBVzs7OztBQUo1QixPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTs7QUFNdkMsU0FBUyxTQUFTLENBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7QUFDeEMsUUFBTSxJQUFJLEtBQUssZ0JBQWMsSUFBSSxVQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsZ0JBQVcsT0FBTyxDQUFHLENBQUE7Q0FDNUU7O3FCQUVjLFVBQVUsSUFBSSxFQUFFLFNBQVMsRUFBRTs7Ozs7Ozs7O1VBQzlCLElBQUk7VUFBRSxLQUFLOztBQUNuQixjQUFRLG1CQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDbkIsYUFBSyxRQUFRO0FBQ1gsY0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3JCLHlCQVpGLFFBQVEsRUFZRyxJQUFJLEVBQUUsSUFBSSxtQkFBZ0IsS0FBSyxVQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtXQUN2RCxNQUFNO0FBQ0wscUJBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxvQkFBa0IsS0FBSyxxQkFBaUIsQ0FBQTtXQUM5RDtBQUNELGdCQUFLO0FBQUEsQUFDUCxhQUFLLE9BQU87QUFDVixjQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7O0FBRXBCLHlCQXBCRixRQUFRLEVBb0JHLElBQUksT0FBSyxJQUFJLGFBQVUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFO3FCQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQUEsQ0FDMUIsQ0FBQTtXQUNGO0FBQ0QsZ0JBQUs7QUFBQSxBQUNQO0FBQ0UsbUJBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLHlCQUF5QixDQUFDLENBQUE7QUFBQSxPQUNwRDs7O0FBbkJILHlCQUEwQix5QkFBSyxTQUFTLENBQUMsOEhBQUU7O0tBb0IxQzs7Ozs7Ozs7Ozs7Ozs7OztBQUNELFNBQU8sSUFBSSxDQUFBO0NBQ1oiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCdzb3VyY2UtbWFwLXN1cHBvcnQnKS5pbnN0YWxsKClcblxuaW1wb3J0IFIgZnJvbSAncmFtZGEnXG5pbXBvcnQge2d1bHBUYXNrfSBmcm9tICdzdGFtaW5hJ1xuaW1wb3J0IGxvYWQgZnJvbSAnLi9sb2FkLmpzJ1xuXG5mdW5jdGlvbiBjYXVzZWxlc3MgKHRhc2ssIGNhdXNlLCBiZWNhdXNlKSB7XG4gIHRocm93IG5ldyBFcnJvcihgQ2F1c2VsZXNzICR7dGFza306ICR7Y2F1c2UudG9TdHJpbmcoKX0gZHVlIHRvICR7YmVjYXVzZX1gKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZ3VscCwgY2F1c2FsaXR5KSB7XG4gIGZvciAobGV0IFt0YXNrLCBjYXVzZV0gb2YgbG9hZChjYXVzYWxpdHkpKSB7XG4gICAgc3dpdGNoIChSLnR5cGUoY2F1c2UpKSB7XG4gICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICBpZiAoZ3VscC50YXNrc1tjYXVzZV0pIHtcbiAgICAgICAgICBndWxwVGFzayhndWxwLCB0YXNrLCBgQWxpYXMgZm9yICcke2NhdXNlfScuYCwgW2NhdXNlXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYXVzZWxlc3ModGFzaywgY2F1c2UsIGBtaXNzaW5nIHRhc2sgJHtjYXVzZX0gLSBjYW4ndCBhbGlhc2ApXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgICAgaWYgKGd1bHAudGFza3NbdGFza10pIHtcbiAgICAgICAgICAvLyBhIHNob3J0aGFuZCBmb3IgZmlsZXMgdHJpZ2dlcmluZyBhbiBleGlzdGluZyB0YXNrIC0gY3JlYXRlcyB0YXNrOndhdGNoXG4gICAgICAgICAgZ3VscFRhc2soZ3VscCwgYCR7dGFza306d2F0Y2hgLCBjYXVzZS50b1N0cmluZygpLCAoKSA9PlxuICAgICAgICAgICAgZ3VscC53YXRjaChjYXVzZSwgW3Rhc2tdKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY2F1c2VsZXNzKHRhc2ssIGNhdXNlLCAndW5yZWNvZ25pemVkIHZhbHVlIHR5cGUnKVxuICAgIH1cbiAgfVxuICByZXR1cm4gZ3VscFxufVxuIl19