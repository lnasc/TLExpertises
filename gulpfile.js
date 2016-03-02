var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  server = require('gulp-express');

gulp.task('server', function() {
  return server.run(['server/app.js']);
});

gulp.task('default', ['server'], function() {
  //gulp.watch("js/**/*.js", ["babel"])
});