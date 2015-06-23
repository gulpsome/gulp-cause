'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _slicedToArrayLoose(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _stamina = require('stamina');

var _loadJs = require('./load.js');

var _loadJs2 = _interopRequireDefault(_loadJs);

require('source-map-support').install();

exports['default'] = function (gulp, causality) {
  var _loop = function () {
    if (_isArray) {
      if (_i >= _iterator.length) return 'break';
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) return 'break';
      _ref = _i.value;
    }

    var _ref2 = _slicedToArrayLoose(_ref, 2);

    var task = _ref2[0];
    var cause = _ref2[1];

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

  for (var _iterator = (0, _loadJs2['default'])(causality), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    var _ret = _loop();

    if (_ret === 'break') break;
  }
  return gulp;
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FCQUVjLE9BQU87Ozs7dUJBQ0UsU0FBUzs7c0JBQ2YsV0FBVzs7OztBQUo1QixPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTs7cUJBTXhCLFVBQVUsSUFBSSxFQUFFLFNBQVMsRUFBRTs7Ozs7Ozs7Ozs7OztRQUM5QixJQUFJO1FBQUUsS0FBSzs7QUFDbkIsWUFBUSxtQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ25CLFdBQUssUUFBUTtBQUNYLFlBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNyQix1QkFSRixRQUFRLEVBUUcsSUFBSSxFQUFFLElBQUksbUJBQWdCLEtBQUssVUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDdkQ7QUFDRCxjQUFLO0FBQUEsQUFDUCxXQUFLLE9BQU87QUFDVixZQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7O0FBRXBCLHVCQWRGLFFBQVEsRUFjRyxJQUFJLE9BQUssSUFBSSxhQUFVLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRTttQkFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztXQUFBLENBQzFCLENBQUE7U0FDRjtBQUNELGNBQUs7QUFBQSxBQUNQO0FBQ0UsZUFBTyxDQUFDLElBQUksZ0JBQWMsSUFBSSxVQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBRyxDQUFBO0FBQUEsS0FDekQ7OztBQWpCSCx1QkFBMEIseUJBQUssU0FBUyxDQUFDLGtIQUFFOzs7Ozs7R0FrQjFDO0FBQ0QsU0FBTyxJQUFJLENBQUE7Q0FDWiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ3NvdXJjZS1tYXAtc3VwcG9ydCcpLmluc3RhbGwoKVxuXG5pbXBvcnQgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7Z3VscFRhc2t9IGZyb20gJ3N0YW1pbmEnXG5pbXBvcnQgbG9hZCBmcm9tICcuL2xvYWQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChndWxwLCBjYXVzYWxpdHkpIHtcbiAgZm9yIChsZXQgW3Rhc2ssIGNhdXNlXSBvZiBsb2FkKGNhdXNhbGl0eSkpIHtcbiAgICBzd2l0Y2ggKFIudHlwZShjYXVzZSkpIHtcbiAgICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICAgIGlmIChndWxwLnRhc2tzW2NhdXNlXSkge1xuICAgICAgICAgIGd1bHBUYXNrKGd1bHAsIHRhc2ssIGBBbGlhcyBmb3IgJyR7Y2F1c2V9Jy5gLCBbY2F1c2VdKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdBcnJheSc6XG4gICAgICAgIGlmIChndWxwLnRhc2tzW3Rhc2tdKSB7XG4gICAgICAgICAgLy8gYSBzaG9ydGhhbmQgZm9yIGZpbGVzIHRyaWdnZXJpbmcgYW4gZXhpc3RpbmcgdGFzayAtIGNyZWF0ZXMgdGFzazp3YXRjaFxuICAgICAgICAgIGd1bHBUYXNrKGd1bHAsIGAke3Rhc2t9OndhdGNoYCwgY2F1c2UudG9TdHJpbmcoKSwgKCkgPT5cbiAgICAgICAgICAgIGd1bHAud2F0Y2goY2F1c2UsIFt0YXNrXSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUud2FybihgQ2F1c2VsZXNzICR7dGFza306ICR7Y2F1c2UudG9TdHJpbmcoKX1gKVxuICAgIH1cbiAgfVxuICByZXR1cm4gZ3VscFxufVxuIl19