var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('lib/'))
});

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(express.static(__dirname + "/frontend/"));
  app.listen(4000);
});

gulp.task('default', ['express'], function() {

});