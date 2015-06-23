'use strict';

exports.__esModule = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3FCQUV3QixJQUFJOzs7O3FCQUZkLE9BQU87Ozs7QUFFTixTQUFTLElBQUksQ0FBRSxJQUFJLEVBQUU7QUFDbEMsVUFBUSxtQkFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ2xCLFNBQUssS0FBSztBQUNSLGFBQU8sSUFBSSxDQUFBO0FBQUEsQUFDYixTQUFLLFFBQVE7QUFDWCxhQUFPLElBQUksR0FBRyxDQUFDLG1CQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0FBQUEsQUFDakMsU0FBSyxPQUFPO0FBQ1YsYUFBTyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUFBLEFBQ3RCO0FBQ0UsWUFBTSxJQUFJLEtBQUssaUNBQ25CLElBQUksQ0FBQyxRQUFRLEVBQUUsaUJBQVksbUJBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFXLENBQUE7QUFBQSxHQUNqRDtDQUNGIiwiZmlsZSI6ImxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUiBmcm9tICdyYW1kYSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZCAod2hhdCkge1xuICBzd2l0Y2ggKFIudHlwZSh3aGF0KSkge1xuICAgIGNhc2UgJ01hcCc6XG4gICAgICByZXR1cm4gd2hhdFxuICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICByZXR1cm4gbmV3IE1hcChSLnRvUGFpcnMod2hhdCkpXG4gICAgY2FzZSAnQXJyYXknOlxuICAgICAgcmV0dXJuIG5ldyBNYXAod2hhdClcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEb24ndCBrbm93IGhvdyB0byBjb252ZXJ0IFxcXG4ke3doYXQudG9TdHJpbmcoKX0gb2YgdHlwZSAke1IudHlwZSh3aGF0KX0gdG8gTWFwLmApXG4gIH1cbn1cbiJdfQ==