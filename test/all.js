/* global expect */

import {load} from '../index.js'

describe('load', () => {
  let expected = new Map([[1, 'one'], [2, 'two']])

  describe('a Map is returned as is', () => {
    it('given a Map', () => {
      expect(load(expected)).to.eql(expected)
    })
  })

  describe('an Array of Array pairs', () => {
    it('makes a Map', () => {
      expect(load([[1, 'one'], [2, 'two']])).to.eql(expected)
    })
  })

})
