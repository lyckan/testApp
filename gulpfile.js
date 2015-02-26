var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var path = require('path');
var server = require('express');

var cssPath = "frontend/assets/styles/css/";
var lessPath = "frontend/assets/styles/less/";

var lr;
function startLivereload() {
 
  lr = require('tiny-lr')();
  lr.listen(35729);
}

gulp.task('express', function() {
  
  var app = server();
  //app.use(require('connect-livereload')());
  app.use(server.static(__dirname + "/frontend/"));
  app.listen(4000);
  //startLivereload();
});

gulp.task('less', function() {
	gulp.src(lessPath + '**/*.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(gulp.dest(cssPath))
		.pipe(livereload())
});
gulp.task('watch', function() {
	livereload.listen();
    gulp.watch(lessPath + '**/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['watch', 'express'], function() {

});



