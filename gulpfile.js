var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("build", function() {
  return gulp
    .src("lib/index.ts")
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write(".", { includeContent: true }))
    .pipe(gulp.dest("."));
});

gulp.task(
  "watch",
  gulp.series("build", function() {
    gulp.watch("lib/*.ts", gulp.series("build"));
  })
);

gulp.task("default", gulp.series("build"));
