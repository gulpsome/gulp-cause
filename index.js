require('source-map-support').install()

import R from 'ramda'
import {gulpTask} from 'stamina'
import load from './load.js'
import {inspect} from 'util'
import watch from 'gulp-watch'

function causeless (task, cause, because) {
  throw new Error(`Causeless {${task}: ${inspect(cause)}} due to ${because}.`)
}

export default function (gulp, causality) {
  for (let [task, cause] of load(causality)) {
    switch (R.type(cause)) {
      case 'String':
        if (gulp.tasks[cause]) {
          gulpTask(gulp, task, `Alias for '${cause}'.`, [cause])
        } else {
          causeless(task, cause, `missing task ${cause} - can't alias`)
        }
        break
      case 'Array':
        if (gulp.tasks[task]) {
          // a shorthand for files triggering an existing task - creates task:watch
          gulpTask(gulp, `${task}:watch`, cause.toString(), () =>
            watch(cause, [task])
          )
        }
        break
      default:
        causeless(task, cause, 'unrecognized value type')
    }
  }
  return gulp
}
