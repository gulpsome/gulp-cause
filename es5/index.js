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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FCQUVjLE9BQU87Ozs7dUJBQ0UsU0FBUzs7c0JBQ2YsV0FBVzs7OztBQUo1QixPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTs7cUJBTXhCLFVBQVUsSUFBSSxFQUFFLFNBQVMsRUFBRTs7Ozs7Ozs7O1VBQzlCLElBQUk7VUFBRSxLQUFLOztBQUNuQixjQUFRLG1CQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDbkIsYUFBSyxRQUFRO0FBQ1gsY0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3JCLHlCQVJGLFFBQVEsRUFRRyxJQUFJLEVBQUUsSUFBSSxtQkFBZ0IsS0FBSyxVQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtXQUN2RDtBQUNELGdCQUFLO0FBQUEsQUFDUCxhQUFLLE9BQU87QUFDVixjQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7O0FBRXBCLHlCQWRGLFFBQVEsRUFjRyxJQUFJLE9BQUssSUFBSSxhQUFVLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRTtxQkFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUFBLENBQzFCLENBQUE7V0FDRjtBQUNELGdCQUFLO0FBQUEsQUFDUDtBQUNFLGlCQUFPLENBQUMsSUFBSSxnQkFBYyxJQUFJLFVBQUssS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFHLENBQUE7QUFBQSxPQUN6RDs7O0FBakJILHlCQUEwQix5QkFBSyxTQUFTLENBQUMsOEhBQUU7O0tBa0IxQzs7Ozs7Ozs7Ozs7Ozs7OztBQUNELFNBQU8sSUFBSSxDQUFBO0NBQ1oiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCdzb3VyY2UtbWFwLXN1cHBvcnQnKS5pbnN0YWxsKClcblxuaW1wb3J0IFIgZnJvbSAncmFtZGEnXG5pbXBvcnQge2d1bHBUYXNrfSBmcm9tICdzdGFtaW5hJ1xuaW1wb3J0IGxvYWQgZnJvbSAnLi9sb2FkLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZ3VscCwgY2F1c2FsaXR5KSB7XG4gIGZvciAobGV0IFt0YXNrLCBjYXVzZV0gb2YgbG9hZChjYXVzYWxpdHkpKSB7XG4gICAgc3dpdGNoIChSLnR5cGUoY2F1c2UpKSB7XG4gICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICBpZiAoZ3VscC50YXNrc1tjYXVzZV0pIHtcbiAgICAgICAgICBndWxwVGFzayhndWxwLCB0YXNrLCBgQWxpYXMgZm9yICcke2NhdXNlfScuYCwgW2NhdXNlXSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnQXJyYXknOlxuICAgICAgICBpZiAoZ3VscC50YXNrc1t0YXNrXSkge1xuICAgICAgICAgIC8vIGEgc2hvcnRoYW5kIGZvciBmaWxlcyB0cmlnZ2VyaW5nIGFuIGV4aXN0aW5nIHRhc2sgLSBjcmVhdGVzIHRhc2s6d2F0Y2hcbiAgICAgICAgICBndWxwVGFzayhndWxwLCBgJHt0YXNrfTp3YXRjaGAsIGNhdXNlLnRvU3RyaW5nKCksICgpID0+XG4gICAgICAgICAgICBndWxwLndhdGNoKGNhdXNlLCBbdGFza10pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLndhcm4oYENhdXNlbGVzcyAke3Rhc2t9OiAke2NhdXNlLnRvU3RyaW5nKCl9YClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGd1bHBcbn1cbiJdfQ==