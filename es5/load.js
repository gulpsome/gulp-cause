'use strict';

exports.__esModule = true;
exports['default'] = load;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function dataError(what) {
  throw new Error('Don\'t know how to convert \'' + what + '\' of type ' + _ramda2['default'].type(what) + ' to a Map.');
}

function evenLength(a) {
  if (a.length % 2 === 0) return true;
}

function atom(a) {
  // Array-to-Map conversion, where a is a flat array of even length
  var m = new Map();
  if (evenLength(a) && a.length >= 2) {
    for (var i = 0; i < a.length; i = i + 2) {
      m.set(a[i], a[i + 1]);
    }
  }
  return m;
}

function load(what) {
  switch (_ramda2['default'].type(what)) {
    case 'Map':
      return what;
    case 'Object':
      return new Map(_ramda2['default'].toPairs(what));
    case 'Array':
      if (_ramda2['default'].type(what[0]) === 'Array' && what[0].length === 2) return new Map(what);else if (evenLength(what)) return atom(what);else dataError(what);
      break;
    default:
      dataError(what);
  }
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3FCQXNCd0IsSUFBSTs7OztxQkF0QmQsT0FBTzs7OztBQUVyQixTQUFTLFNBQVMsQ0FBRSxJQUFJLEVBQUU7QUFDeEIsUUFBTSxJQUFJLEtBQUssbUNBQ2QsSUFBSSxtQkFBYSxtQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFhLENBQUE7Q0FDNUM7O0FBRUQsU0FBUyxVQUFVLENBQUUsQ0FBQyxFQUFFO0FBQ3RCLE1BQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFBO0NBQ3BDOztBQUVELFNBQVMsSUFBSSxDQUFFLENBQUMsRUFBRTs7QUFFaEIsTUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTtBQUNqQixNQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtBQUNsQyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUN2QyxPQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDdEI7R0FDRjtBQUNELFNBQU8sQ0FBQyxDQUFBO0NBQ1Q7O0FBRWMsU0FBUyxJQUFJLENBQUUsSUFBSSxFQUFFO0FBQ2xDLFVBQVEsbUJBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNsQixTQUFLLEtBQUs7QUFDUixhQUFPLElBQUksQ0FBQTtBQUFBLEFBQ2IsU0FBSyxRQUFRO0FBQ1gsYUFBTyxJQUFJLEdBQUcsQ0FBQyxtQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUFBLEFBQ2pDLFNBQUssT0FBTztBQUNWLFVBQUksbUJBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxPQUFPLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBLEtBQ3hFLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBLEtBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNwQixZQUFLO0FBQUEsQUFDUDtBQUNFLGVBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUFBLEdBQ2xCO0NBQ0YiLCJmaWxlIjoibG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSIGZyb20gJ3JhbWRhJ1xuXG5mdW5jdGlvbiBkYXRhRXJyb3IgKHdoYXQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKGBEb24ndCBrbm93IGhvdyB0byBjb252ZXJ0IFxcXG4nJHt3aGF0fScgb2YgdHlwZSAke1IudHlwZSh3aGF0KX0gdG8gYSBNYXAuYClcbn1cblxuZnVuY3Rpb24gZXZlbkxlbmd0aCAoYSkge1xuICBpZiAoYS5sZW5ndGggJSAyID09PSAwKSByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBhdG9tIChhKSB7XG4gIC8vIEFycmF5LXRvLU1hcCBjb252ZXJzaW9uLCB3aGVyZSBhIGlzIGEgZmxhdCBhcnJheSBvZiBldmVuIGxlbmd0aFxuICBsZXQgbSA9IG5ldyBNYXAoKVxuICBpZiAoZXZlbkxlbmd0aChhKSAmJiBhLmxlbmd0aCA+PSAyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSA9IGkgKyAyKSB7XG4gICAgICBtLnNldChhW2ldLCBhW2kgKyAxXSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZCAod2hhdCkge1xuICBzd2l0Y2ggKFIudHlwZSh3aGF0KSkge1xuICAgIGNhc2UgJ01hcCc6XG4gICAgICByZXR1cm4gd2hhdFxuICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICByZXR1cm4gbmV3IE1hcChSLnRvUGFpcnMod2hhdCkpXG4gICAgY2FzZSAnQXJyYXknOlxuICAgICAgaWYgKFIudHlwZSh3aGF0WzBdKSA9PT0gJ0FycmF5JyAmJiB3aGF0WzBdLmxlbmd0aCA9PT0gMikgcmV0dXJuIG5ldyBNYXAod2hhdClcbiAgICAgIGVsc2UgaWYgKGV2ZW5MZW5ndGgod2hhdCkpIHJldHVybiBhdG9tKHdoYXQpXG4gICAgICBlbHNlIGRhdGFFcnJvcih3aGF0KVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0YUVycm9yKHdoYXQpXG4gIH1cbn1cbiJdfQ==