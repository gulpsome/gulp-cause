/* global expect */

import cause from '../index.js'

describe('cause', () => {
  let gulp = require('gulp')
  gulp.task('task', () => {})
  /*
  beforeEach(() => {
    gulp = require('gulp')
  })
  */

  describe('throws error when', () => {
    it('it is given a type of unsupported cause', () => {
      expect(() => cause(gulp, {task: false})).to.throw(Error)
    })

    it("it is given a task name that doesn't exist", () => {
      expect(() => cause(gulp, {task: 'bad'})).to.throw(Error)
    })
  })

  describe('given a task', () => {
    it('can makes an alias', () => {
      cause(gulp, ['alias', 'task'])
      expect(gulp.tasks['alias']).to.exist
    })
  })

  describe('given a task and stuff for watching,', () => {
    it('make a task:watch task', () => {
      cause(gulp, ['task', ['watching/*']])
      expect(gulp.tasks['task:watch']).to.exist
    })
  })

})
