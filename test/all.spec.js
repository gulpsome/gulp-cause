/* global expect */

import load from '../load.js'

describe('load', () => {
  let anObject = {'one': 1, 'two': 2}
  let eqlArray = ['one', 1, 'two', 2]
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

  describe('an Array of even length', () => {
    it('makes a Map', () => {
      expect(load(eqlArray)).to.eql(expected)
    })
  })

  describe('an Array of Array pairs', () => {
    it('makes a Map', () => {
      expect(load([['one', 1], ['two', 2]])).to.eql(expected)
    })
  })

  describe('an empty Array', () => {
    it('makes an empty Map', () => {
      expect(load([])).to.eql(new Map())
    })
  })

  describe('it throws when given', () => {
    it('an Array of length 1, a special case', () => {
      expect(() => load([1])).to.throw(Error)
    })
    it('an Array of length 3, odd = bad data', () => {
      expect(() => load([1, 2, 3])).to.throw(Error)
    })
  })

})
