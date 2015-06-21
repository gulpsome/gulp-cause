# gulp-cause

Declarative gulp tasks composition and watching causality.
Better with [beverage](https://github.com/orlin/beverage).

## Use

[![NPM](https://nodei.co/npm/gulp-cause.png?mini=true)](https://www.npmjs.org/package/gulp-cause)

### Vaporware

Note that none of this is implemented yet.
The documentation below only defines what the api would probably soon be like.

Here is an example of how this would work:

```javascript
var gulp = require('gulp');
// create task, two, three, more
require('gulp-cause')(gulp, [
  'alias', 'task',
  'both', {tasks: ['two', 'three']},
  'task', ['src/*'], // shorthand
  'cool', {tasks: ['more'], watch: ['place/*']}
]);
```

The code above instructs `gulp-cause` to:

1. make `alias` of an existing `task`
2. create task `both` to run tasks `two` and `three` in parallel
3. `task:watch` will be created - any `src/*` changes will cause `task` to be run
4. task `cool` watches `place/*` files and can have any name, not just `more:watch`

### Rationale

There must be an even number of causality pairs in the array.  Having two items per line is good for readability.  The left one is always a task name to either be created or invoked - depending on the right-hand-side.  The data is processed one pair of items at a time, thus with each step one can depend on tasks from the previous steps.  If no tasks existed to begin with, then `gulp-cause` couldn't do a thing.

## Dependencies

[![Dependency Status](https://david-dm.org/orlin/gulp-cause.svg)](https://david-dm.org/orlin/gulp-cause)
[![devDependency Status](https://david-dm.org/orlin/gulp-cause/dev-status.svg)](https://david-dm.org/orlin/gulp-cause#info=devDependencies)

## License

[MIT](http://orlin.mit-license.org)
