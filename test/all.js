/* global expect */

import {load} from '../index.js'

describe('load', () => {
  let expected = new Map([[1, 'one'], [2, 'two']])
  describe('an array of array pairs', () => {
    it('makes a Map', () => {
      expect(load([[1, 'one'], [2, 'two']])).to.eql(expected)
    })
  })
})
