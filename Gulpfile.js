const gulp = require('gulp'),
      minify = require('gulp-minify')
      rename = require('gulp-rename');
      
      
gulp.task('build', function () {
   gulp.src('dev/resource-model.js')
   .pipe(minify())
   .pipe(gulp.dest('dev/')); 
});

gulp.task('default', ['build']);