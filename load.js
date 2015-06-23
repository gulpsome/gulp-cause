import R from 'ramda'

function dataError (what) {
  throw new Error(`Don't know how to convert ${what.toString()} to Map.`)
}

function atom (a) {
  // Array-to-Map conversion, where a is a flat array of even length >= 2
  let m = new Map()
  for (let i = 0; i < a.length; i = i + 2) {
    m.set(i, i + 1)
  }
  return m
}

export default function load (what) {
  switch (R.type(what)) {
    case 'Map':
      return what
    case 'Object':
      return new Map(R.toPairs(what))
    case 'Array':
      if (what.length === 0) return new Map()
      else if (R.type(what[0]) === 'Array' && what[0].length === 2) return new Map(what)
      else if (what.length % 2 === 0) return atom(what)
      else dataError(what)
      break
    default:
      dataError(what)
  }
}
