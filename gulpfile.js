var gulp = require('beverage')(require('gulp'))

gulp.task('dev', 'DEVELOP', ['build', 'test:watch', 'build:watch'])
