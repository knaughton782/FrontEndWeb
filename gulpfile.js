var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");

gulp.task("sass", function() {
  return gulp
    .src("styles/styles.scss")
    .pipe(
      sass({
        outputStyle: "expanded"
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest("public/css"));
});
gulp.task("watch", function() {
  return gulp.watch("styles/**/*.scss", ["sass"]);
});
gulp.task("default", ["sass"], function() {
  return;
});
