'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = load;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function load(what) {
  switch (_ramda2['default'].type(what)) {
    case 'Map':
      return what;
    case 'Object':
      return new Map(_ramda2['default'].toPairs(what));
    case 'Array':
      return new Map(what);
    default:
      throw new Error('Don\'t know how to convert ' + what.toString() + ' of type ' + _ramda2['default'].type(what) + ' to Map.');
  }
}

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7cUJBRXdCLElBQUk7Ozs7cUJBRmQsT0FBTzs7OztBQUVOLFNBQVMsSUFBSSxDQUFFLElBQUksRUFBRTtBQUNsQyxVQUFRLG1CQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDbEIsU0FBSyxLQUFLO0FBQ1IsYUFBTyxJQUFJLENBQUE7QUFBQSxBQUNiLFNBQUssUUFBUTtBQUNYLGFBQU8sSUFBSSxHQUFHLENBQUMsbUJBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7QUFBQSxBQUNqQyxTQUFLLE9BQU87QUFDVixhQUFPLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQUEsQUFDdEI7QUFDRSxZQUFNLElBQUksS0FBSyxpQ0FDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxpQkFBWSxtQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQVcsQ0FBQTtBQUFBLEdBQ2pEO0NBQ0YiLCJmaWxlIjoibG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSIGZyb20gJ3JhbWRhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkICh3aGF0KSB7XG4gIHN3aXRjaCAoUi50eXBlKHdoYXQpKSB7XG4gICAgY2FzZSAnTWFwJzpcbiAgICAgIHJldHVybiB3aGF0XG4gICAgY2FzZSAnT2JqZWN0JzpcbiAgICAgIHJldHVybiBuZXcgTWFwKFIudG9QYWlycyh3aGF0KSlcbiAgICBjYXNlICdBcnJheSc6XG4gICAgICByZXR1cm4gbmV3IE1hcCh3aGF0KVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERvbid0IGtub3cgaG93IHRvIGNvbnZlcnQgXFxcbiR7d2hhdC50b1N0cmluZygpfSBvZiB0eXBlICR7Ui50eXBlKHdoYXQpfSB0byBNYXAuYClcbiAgfVxufVxuIl19