'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
//const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');
//const svgstore = require('gulp-svgstore');
const rename = require('gulp-rename');
const posthtml = require('gulp-posthtml');
const include = require('posthtml-include');
const del = require('del');
const server = require('browser-sync').create();

gulp.task('css', function () {
  return gulp.src('source/sass/**/*.scss')
    .pipe(plumber())
    //.pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename({prefix: "", suffix: ""}))
    //.pipe(sourcemap.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});

gulp.task('images', function () {
  return gulp.src('source/images/**/*.{png,jpg,svg}')
    .pipe(imagemin([
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.mozjpeg({ quality: 75, progressive: true }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('build/images'))
    .pipe(server.stream());
});

gulp.task('html', function () {
  return gulp.src('source/*.html')
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest('build'));
});

gulp.task('copy', function () {
  return gulp.src([
    'source/vendor/fonts/**/*.{woff,woff2,eot,ttf,css}',
    'source/vendor/*.css',
    'source/images/**',
    'source/*.ico'
  ], {
    base: 'source'
  })
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function () {
  return del('build');
});

gulp.task('server', function () {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('source/sass/**/*.scss', gulp.series('css'));
  gulp.watch('source/*.html', gulp.series('html', 'refresh'));
  gulp.watch('source/img/**/*.+(jpg|png|svg)', gulp.series('images', 'refresh'));
});

gulp.task('refresh', function (done) {
  server.reload();
  done();
});

gulp.task('build', gulp.series(
  'clean',
  'copy',
  'images',
  'css',
  'html'
));

gulp.task('start', gulp.series('build', 'server'));
