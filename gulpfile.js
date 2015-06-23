var gulp = require('beverage')(require('gulp'), {
  "test": {"testsRe": /\.spec\.js$/}
})

gulp.task('dev', 'DEVELOP', ['build', 'test:watch', 'build:watch'])
