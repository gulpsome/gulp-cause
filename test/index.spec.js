/* global expect */

import cause from '../index.js'

describe('cause', () => {
  let gulp

  beforeEach(() => {
    gulp = require('gulp')
  })

  describe('throws error when', () => {
    it('it is given a type of unsupported cause', () => {
      expect(() => cause(gulp, {task: false})).to.throw(Error)
    })

    it("it is given a task name that doesn't exist", () => {
      expect(() => cause(gulp, {task: 'bad'})).to.throw(Error)
    })
  })

})
