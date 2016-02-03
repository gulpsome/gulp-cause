'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = load;

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dataError(what) {
  throw new Error('Don\'t know how to convert \'' + what + '\' of type ' + _ramda2.default.type(what) + ' to a Map.');
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
  switch (_ramda2.default.type(what)) {
    case 'Map':
      return what;
    case 'Object':
      return new Map(_ramda2.default.toPairs(what));
    case 'Array':
      if (_ramda2.default.type(what[0]) === 'Array' && what[0].length === 2) return new Map(what);else if (evenLength(what)) return atom(what);else dataError(what);
      break;
    default:
      dataError(what);
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBcUJ3Qjs7Ozs7Ozs7QUFuQnhCLFNBQVMsU0FBVCxDQUFvQixJQUFwQixFQUEwQjtBQUN4QixRQUFNLElBQUksS0FBSixtQ0FBd0MsdUJBQWlCLGdCQUFFLElBQUYsQ0FBTyxJQUFQLGdCQUF6RCxDQUFOLENBRHdCO0NBQTFCOztBQUlBLFNBQVMsVUFBVCxDQUFxQixDQUFyQixFQUF3QjtBQUN0QixNQUFJLEVBQUUsTUFBRixHQUFXLENBQVgsS0FBaUIsQ0FBakIsRUFBb0IsT0FBTyxJQUFQLENBQXhCO0NBREY7O0FBSUEsU0FBUyxJQUFULENBQWUsQ0FBZixFQUFrQjs7QUFFaEIsTUFBSSxJQUFJLElBQUksR0FBSixFQUFKLENBRlk7QUFHaEIsTUFBSSxXQUFXLENBQVgsS0FBaUIsRUFBRSxNQUFGLElBQVksQ0FBWixFQUFlO0FBQ2xDLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEVBQUUsTUFBRixFQUFVLElBQUksSUFBSSxDQUFKLEVBQU87QUFDdkMsUUFBRSxHQUFGLENBQU0sRUFBRSxDQUFGLENBQU4sRUFBWSxFQUFFLElBQUksQ0FBSixDQUFkLEVBRHVDO0tBQXpDO0dBREY7QUFLQSxTQUFPLENBQVAsQ0FSZ0I7Q0FBbEI7O0FBV2UsU0FBUyxJQUFULENBQWUsSUFBZixFQUFxQjtBQUNsQyxVQUFRLGdCQUFFLElBQUYsQ0FBTyxJQUFQLENBQVI7QUFDRSxTQUFLLEtBQUw7QUFDRSxhQUFPLElBQVAsQ0FERjtBQURGLFNBR08sUUFBTDtBQUNFLGFBQU8sSUFBSSxHQUFKLENBQVEsZ0JBQUUsT0FBRixDQUFVLElBQVYsQ0FBUixDQUFQLENBREY7QUFIRixTQUtPLE9BQUw7QUFDRSxVQUFJLGdCQUFFLElBQUYsQ0FBTyxLQUFLLENBQUwsQ0FBUCxNQUFvQixPQUFwQixJQUErQixLQUFLLENBQUwsRUFBUSxNQUFSLEtBQW1CLENBQW5CLEVBQXNCLE9BQU8sSUFBSSxHQUFKLENBQVEsSUFBUixDQUFQLENBQXpELEtBQ0ssSUFBSSxXQUFXLElBQVgsQ0FBSixFQUFzQixPQUFPLEtBQUssSUFBTCxDQUFQLENBQXRCLEtBQ0EsVUFBVSxJQUFWLEVBREE7QUFFTCxZQUpGO0FBTEY7QUFXSSxnQkFBVSxJQUFWLEVBREY7QUFWRixHQURrQztDQUFyQiIsImZpbGUiOiJsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFIgZnJvbSAncmFtZGEnXG5cbmZ1bmN0aW9uIGRhdGFFcnJvciAod2hhdCkge1xuICB0aHJvdyBuZXcgRXJyb3IoYERvbid0IGtub3cgaG93IHRvIGNvbnZlcnQgJyR7d2hhdH0nIG9mIHR5cGUgJHtSLnR5cGUod2hhdCl9IHRvIGEgTWFwLmApXG59XG5cbmZ1bmN0aW9uIGV2ZW5MZW5ndGggKGEpIHtcbiAgaWYgKGEubGVuZ3RoICUgMiA9PT0gMCkgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gYXRvbSAoYSkge1xuICAvLyBBcnJheS10by1NYXAgY29udmVyc2lvbiwgd2hlcmUgYSBpcyBhIGZsYXQgYXJyYXkgb2YgZXZlbiBsZW5ndGhcbiAgbGV0IG0gPSBuZXcgTWFwKClcbiAgaWYgKGV2ZW5MZW5ndGgoYSkgJiYgYS5sZW5ndGggPj0gMikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkgPSBpICsgMikge1xuICAgICAgbS5zZXQoYVtpXSwgYVtpICsgMV0pXG4gICAgfVxuICB9XG4gIHJldHVybiBtXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWQgKHdoYXQpIHtcbiAgc3dpdGNoIChSLnR5cGUod2hhdCkpIHtcbiAgICBjYXNlICdNYXAnOlxuICAgICAgcmV0dXJuIHdoYXRcbiAgICBjYXNlICdPYmplY3QnOlxuICAgICAgcmV0dXJuIG5ldyBNYXAoUi50b1BhaXJzKHdoYXQpKVxuICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgIGlmIChSLnR5cGUod2hhdFswXSkgPT09ICdBcnJheScgJiYgd2hhdFswXS5sZW5ndGggPT09IDIpIHJldHVybiBuZXcgTWFwKHdoYXQpXG4gICAgICBlbHNlIGlmIChldmVuTGVuZ3RoKHdoYXQpKSByZXR1cm4gYXRvbSh3aGF0KVxuICAgICAgZWxzZSBkYXRhRXJyb3Iod2hhdClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGFFcnJvcih3aGF0KVxuICB9XG59XG4iXX0=