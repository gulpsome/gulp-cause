import 'source-map-support/register'

import R from 'ramda'
import {gulpTask} from 'be-goods'
import load from './cause-load.js'
import {inspect} from 'util'
import watch from 'gulp-watch'

function causeless (task, cause, because) {
  throw new Error(`Causeless {${task}: ${inspect(cause)}} due to ${because}.`)
}

module.exports = function (gulp, causality) {
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
          let plainWatch = (R.type(cause[0]) !== 'Array')
          let helpString = plainWatch ? cause.toString() : cause[0].toString()
          gulpTask(gulp, `${task}:watch`, helpString, () => {
            if (plainWatch) gulp.watch(cause, [task])
            else watch(...cause) // want gulp-watch (applying cause args)
          })
        }
        break
      default:
        causeless(task, cause, 'unrecognized value type')
    }
  }
  return gulp
}
