require('source-map-support').install()

import R from 'ramda'
import {gulpTask} from 'stamina'
import load from './load.js'

export default function (gulp, causality) {
  for (let [task, cause] of load(causality)) {
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
