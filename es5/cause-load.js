'use strict';

exports.__esModule = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NhdXNlLWxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tCQXFCd0IsSTs7QUFyQnhCOzs7Ozs7QUFFQSxTQUFTLFNBQVQsQ0FBb0IsSUFBcEIsRUFBMEI7QUFDeEIsUUFBTSxJQUFJLEtBQUosbUNBQXdDLElBQXhDLG1CQUF5RCxnQkFBRSxJQUFGLENBQU8sSUFBUCxDQUF6RCxnQkFBTjtBQUNEOztBQUVELFNBQVMsVUFBVCxDQUFxQixDQUFyQixFQUF3QjtBQUN0QixNQUFJLEVBQUUsTUFBRixHQUFXLENBQVgsS0FBaUIsQ0FBckIsRUFBd0IsT0FBTyxJQUFQO0FBQ3pCOztBQUVELFNBQVMsSUFBVCxDQUFlLENBQWYsRUFBa0I7O0FBRWhCLE1BQUksSUFBSSxJQUFJLEdBQUosRUFBUjtBQUNBLE1BQUksV0FBVyxDQUFYLEtBQWlCLEVBQUUsTUFBRixJQUFZLENBQWpDLEVBQW9DO0FBQ2xDLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxFQUFFLE1BQXRCLEVBQThCLElBQUksSUFBSSxDQUF0QyxFQUF5QztBQUN2QyxRQUFFLEdBQUYsQ0FBTSxFQUFFLENBQUYsQ0FBTixFQUFZLEVBQUUsSUFBSSxDQUFOLENBQVo7QUFDRDtBQUNGO0FBQ0QsU0FBTyxDQUFQO0FBQ0Q7O0FBRWMsU0FBUyxJQUFULENBQWUsSUFBZixFQUFxQjtBQUNsQyxVQUFRLGdCQUFFLElBQUYsQ0FBTyxJQUFQLENBQVI7QUFDRSxTQUFLLEtBQUw7QUFDRSxhQUFPLElBQVA7QUFDRixTQUFLLFFBQUw7QUFDRSxhQUFPLElBQUksR0FBSixDQUFRLGdCQUFFLE9BQUYsQ0FBVSxJQUFWLENBQVIsQ0FBUDtBQUNGLFNBQUssT0FBTDtBQUNFLFVBQUksZ0JBQUUsSUFBRixDQUFPLEtBQUssQ0FBTCxDQUFQLE1BQW9CLE9BQXBCLElBQStCLEtBQUssQ0FBTCxFQUFRLE1BQVIsS0FBbUIsQ0FBdEQsRUFBeUQsT0FBTyxJQUFJLEdBQUosQ0FBUSxJQUFSLENBQVAsQ0FBekQsS0FDSyxJQUFJLFdBQVcsSUFBWCxDQUFKLEVBQXNCLE9BQU8sS0FBSyxJQUFMLENBQVAsQ0FBdEIsS0FDQSxVQUFVLElBQVY7QUFDTDtBQUNGO0FBQ0UsZ0JBQVUsSUFBVjtBQVhKO0FBYUQiLCJmaWxlIjoiY2F1c2UtbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSIGZyb20gJ3JhbWRhJ1xuXG5mdW5jdGlvbiBkYXRhRXJyb3IgKHdoYXQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKGBEb24ndCBrbm93IGhvdyB0byBjb252ZXJ0ICcke3doYXR9JyBvZiB0eXBlICR7Ui50eXBlKHdoYXQpfSB0byBhIE1hcC5gKVxufVxuXG5mdW5jdGlvbiBldmVuTGVuZ3RoIChhKSB7XG4gIGlmIChhLmxlbmd0aCAlIDIgPT09IDApIHJldHVybiB0cnVlXG59XG5cbmZ1bmN0aW9uIGF0b20gKGEpIHtcbiAgLy8gQXJyYXktdG8tTWFwIGNvbnZlcnNpb24sIHdoZXJlIGEgaXMgYSBmbGF0IGFycmF5IG9mIGV2ZW4gbGVuZ3RoXG4gIGxldCBtID0gbmV3IE1hcCgpXG4gIGlmIChldmVuTGVuZ3RoKGEpICYmIGEubGVuZ3RoID49IDIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpID0gaSArIDIpIHtcbiAgICAgIG0uc2V0KGFbaV0sIGFbaSArIDFdKVxuICAgIH1cbiAgfVxuICByZXR1cm4gbVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkICh3aGF0KSB7XG4gIHN3aXRjaCAoUi50eXBlKHdoYXQpKSB7XG4gICAgY2FzZSAnTWFwJzpcbiAgICAgIHJldHVybiB3aGF0XG4gICAgY2FzZSAnT2JqZWN0JzpcbiAgICAgIHJldHVybiBuZXcgTWFwKFIudG9QYWlycyh3aGF0KSlcbiAgICBjYXNlICdBcnJheSc6XG4gICAgICBpZiAoUi50eXBlKHdoYXRbMF0pID09PSAnQXJyYXknICYmIHdoYXRbMF0ubGVuZ3RoID09PSAyKSByZXR1cm4gbmV3IE1hcCh3aGF0KVxuICAgICAgZWxzZSBpZiAoZXZlbkxlbmd0aCh3aGF0KSkgcmV0dXJuIGF0b20od2hhdClcbiAgICAgIGVsc2UgZGF0YUVycm9yKHdoYXQpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRhRXJyb3Iod2hhdClcbiAgfVxufVxuIl19