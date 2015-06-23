/* global expect */

import {load} from '../index.js'

describe('load', () => {
  let anObject = {one: 1, two: 2}
  let expected = new Map([['one', 1], ['two', 2]])

  describe('a Map is returned as is', () => {
    it('given a Map', () => {
      expect(load(expected)).to.eql(expected)
    })
  })

  describe('given a plain js Object', () => {
    it('makes a Map', () => {
      expect(load(anObject)).to.eql(expected)
    })
  })

  describe('an Array of Array pairs', () => {
    it('makes a Map', () => {
      expect(load([['one', 1], ['two', 2]])).to.eql(expected)
    })
  })

})
