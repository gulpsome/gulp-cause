var gulp = require('beverage')(require('gulp'), {
  "test": {"testsRe": /\.spec\.js$/}
})

gulp.task('dev', 'DEVELOP', ['build', 'build:watch', 'test:watch'])
