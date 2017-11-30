var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', function() {
  // place code for your default task here
  
});
gulp.task('run', shell.task([
    'node index'
  ]));