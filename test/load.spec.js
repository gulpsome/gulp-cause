/* global assert expect inspect */

require('map.prototype.tojson')

// stands for assert.equal because es6 maps are funky
function ae (actual, expected) {
  assert.deepEqual(actual.toJSON(), expected.toJSON(), `\
actual value ${inspect(actual)} != \
the expected ${inspect(expected)}`)
}

import load from '../load.js'

describe('load', () => {
  let anObject = {'one': 1, 'two': 2}
  let eqlArray = ['one', 1, 'two', 2]
  let expected = new Map([['one', 1], ['two', 2]])

  describe('a Map is returned as is', () => {
    it('given a Map', () => {
      ae(load(expected), expected)
    })
  })

  describe('given a plain js Object', () => {
    it('makes a Map', () => {
      ae(load(anObject), expected)
    })
  })

  describe('an Array of even length', () => {
    it('makes a Map', () => {
      ae(load(eqlArray), expected)
    })
  })

  describe('an Array of Array pairs', () => {
    it('makes a Map', () => {
      ae(load([['one', 1], ['two', 2]]), expected)
    })
  })

  describe('an empty Array', () => {
    it('makes an empty Map', () => {
      ae(load([]), new Map())
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
