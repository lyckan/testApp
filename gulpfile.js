var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var path = require('path');


var cssPath = "frontend/assets/styles";


gulp.task('express', function() {
  console.log("express");

  var express = require('express');

  var app = express();
  app.use(express.static(__dirname + "/frontend/"));
  app.listen(4000);
});

gulp.task('less', function() {
	console.log("less");
});
gulp.task('watch', function() {
	console.log("watch");
    gulp.watch('*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['watch', 'express'], function() {

});