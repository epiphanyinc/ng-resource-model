const gulp = require('gulp'),
      minify = require('gulp-minify');
      
      
gulp.task('build', function () {
   gulp.src('release/resource-model.js')
   .pipe(minify())
   .pipe(gulp.dest('release/')); 
});

gulp.task('default', ['build']);