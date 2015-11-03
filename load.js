import R from 'ramda'

function dataError (what) {
  throw new Error(`Don't know how to convert '${what}' of type ${R.type(what)} to a Map.`)
}

function evenLength (a) {
  if (a.length % 2 === 0) return true
}

function atom (a) {
  // Array-to-Map conversion, where a is a flat array of even length
  let m = new Map()
  if (evenLength(a) && a.length >= 2) {
    for (let i = 0; i < a.length; i = i + 2) {
      m.set(a[i], a[i + 1])
    }
  }
  return m
}

export default function load (what) {
  // module.exports = function load (what) {
  switch (R.type(what)) {
    case 'Map':
      return what
    case 'Object':
      return new Map(R.toPairs(what))
    case 'Array':
      if (R.type(what[0]) === 'Array' && what[0].length === 2) return new Map(what)
      else if (evenLength(what)) return atom(what)
      else dataError(what)
      break
    default:
      dataError(what)
  }
}
