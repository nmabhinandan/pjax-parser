var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build', function () {
    return gulp.src('lib/index.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch('lib/*.js', ['build']);
})

gulp.task('default', ['build'])
