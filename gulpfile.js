var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    base64 = require('gulp-base64');
    autoprefix = require('gulp-autoprefixer')
    minifycss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps');

var paths = {
  stylus: ['stylus/*.styl']
};

gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
    .pipe(stylus())
    .pipe(base64())
    .pipe(autoprefix('last 2 versions'))
    //.pipe(minifycss({keepBreaks:true}))
    //.pipe(minifycss())
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
});


gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['stylus']);
});

gulp.task('default', ['stylus']);