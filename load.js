export default function load (what) {
  switch (R.type(what)) {
    case 'Map':
      return what
    case 'Object':
      return new Map(R.toPairs(what))
    case 'Array':
      return new Map(what)
    default:
      throw new Error(`Don't know how to convert \
${what.toString()} of type ${R.type(what)} to Map.`)
  }
}
