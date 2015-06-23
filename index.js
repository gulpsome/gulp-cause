require('source-map-support').install()

import R from 'ramda'
import {gulpTask} from 'stamina'

export function load (what) {
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

export default function (gulp, causality) {
  for (let task in causality) {
    let cause = causality[task]
    switch (R.type(cause)) {
      case 'String':
        if (gulp.tasks[cause]) {
          gulpTask(gulp, task, `Alias for '${cause}'.`, [cause])
        }
        break
      case 'Array':
        if (gulp.tasks[task]) {
          // a shorthand for files triggering an existing task - creates task:watch
          gulpTask(gulp, `${task}:watch`, cause.toString(), () =>
            gulp.watch(cause, [task])
          )
        }
        break
      default:
        console.warn(`Causeless ${task}: ${cause.toString()}`)
    }
  }
  return gulp
}
