const gulp = require('gulp');
const shell = require('gulp-shell');
const mocha = require('gulp-mocha');

gulp.task('default', function() {
  // place code for your default task here
});
gulp.task('run', shell.task([
    'node index'
]));
gulp.task('test', () =>
	gulp.src('test.js', {read: false})
		// `gulp-mocha` needs filepaths so you can't have any plugins before it
		.pipe(mocha({reporter: 'nyan'}))
);
