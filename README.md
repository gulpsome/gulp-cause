# gulp-cause

Declarative gulp tasks composition and watching causality.
Better with [beverage](https://github.com/gulpsome/beverage).

## Use

[![NPM](https://nodei.co/npm/gulp-cause.png?mini=true)](https://www.npmjs.org/package/gulp-cause)

### Work in Progress

Some of the functionality described below isn't implemented yet.
See the trailing comments in the example about which parts that is.

Here is an example of how this would work:

```javascript
var gulp = require('gulp');
// create task, two, three, more
require('gulp-cause')(gulp, [
  'alias', 'task',
  'both', {parallel: ['two', 'three']}, // not implemented yet
  'sequence', {series: ['both', 'more']}, // not implemented yet
  'task', ['src/*'], // shorthand, works fine in most cases (where watch is needed)
  'two', [['src/*'], fn], // this array is gulp-watch args
  'cool', {tasks: ['more'], watch: ['place/*']} // not implemented yet
]);
```

The code above instructs `gulp-cause` to:

1. make `alias` of an existing `task`
2. create task `both` to run tasks `two` and `three` in parallel
3. create task `sequence` to first run task `both` (declared above), then task `more`
4. `task:watch` will be created - any `src/*` changes will cause `task` to be run
5. `two:watch` uses `gulp-watch` rather than `gulp.watch` - documented further down
6. task `cool` watches `place/*` files and can have any name, not just `more:watch`

### Rationale

There must be an even number of causality pairs in the array.  Having two items per line is good for readability.  The left one is always a task name to either be created or invoked - depending on the right-hand-side.  The data is processed one pair of items at a time, thus with each step one can depend on tasks from the previous steps.  If no tasks existed to begin with, then `gulp-cause` couldn't do a thing.

### Watch

Using `gulp.watch` by default, unless the watch value is more complex than an array of globs to watch.  In such a case, `gulp-cause` will interpret the array as a [gulp-watch](https://github.com/floatdrop/gulp-watch) arguments list to be applied.  See [gulp-npm-test](https://github.com/gulpsome/gulp-npm-test/tree/master) for example.
Which of the two is preferable depends on the use case.

## Test [![Build Status](https://img.shields.io/travis/orlin/gulp-cause.svg?style=flat)](https://travis-ci.org/orlin/gulp-cause)

```sh
npm test
```

## Dependencies

[![Dependency Status](https://david-dm.org/gulpsome/gulp-cause.svg)](https://david-dm.org/gulpsome/gulp-cause)
[![devDependency Status](https://david-dm.org/gulpsome/gulp-cause/dev-status.svg)](https://david-dm.org/gulpsome/gulp-cause#info=devDependencies)

## License

[MIT](http://orlin.mit-license.org)
