var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

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
  return gulp.watch(
    ["styles/**/*.scss", "public/javascript/**/*.js"][("sass", "build")]
  );
});
gulp.task("default", ["sass"], function() {
  return;
});
gulp.task("concat", function() {
  return gulp
    .src([
      "public/javascript/**/*.js",
      "public/libs/materialize/dist/js/materialize.js",
      "public/libs/jquery/dist/jquery.js"
    ])
    .pipe(concat("app.bundle.js"))
    .pipe(gulp.dest("public/dist"));
});
gulp.task("minify", function() {
  return gulp
    .src("public/dist/app.bundle.js")
    .pipe(
      uglify({
        mangle: true
      })
    )
    .pipe(rename("app.bundle.min.js"))
    .pipe(gulp.dest("public/dist"));
});
gulp.task("build", ["concat", "minify"]);
