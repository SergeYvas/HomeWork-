'use strict';

const gulp = require('gulp'),
      sourcemaps  = require('gulp-sourcemaps'),
      pug  = require('gulp-pug'),
      sass = require('gulp-sass'),
      autoprefixer  = require('gulp-autoprefixer'),
      csso          = require('gulp-csso'),
      notify        = require('gulp-notify'),
      plumber       = require('gulp-plumber'),
      browserSync = require('browser-sync').create();


///////// PUG plugons
gulp.task('pug', function () {
    return gulp.src(['blocks/*.pug','!blocks/template.pug'])
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .on("error", notify.onError({
            message: "Error: <%= error.message %>",
            title: "HTML"
        }))
        .pipe(gulp.dest('app/'));
});


///////// SASS plugins
gulp.task('sass', function () {
    return gulp.src('blocks/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .on("error", notify.onError({
            message: "Error: <%= error.message %>",
            title: "Style"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css'));

});

gulp.task('css-prod', function () {
    return gulp.src('css/*.css')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            browsers: ['last 5 versions'],
            cascade: false
        }))
        .on("error", notify.onError({
            message: "Error: <%= error.message %>",
            title: "Style"
        }))
        .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'));

});

gulp.task('html-prod', function () {
    return gulp.src('app/*.html')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .on("error", notify.onError({
            message: "Error: <%= error.message %>",
            title: "html"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/'));

});


/////////// BROWSER-SYNC
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
    browserSync.watch("app/", browserSync.reload)
});


/////////// WATCHER
gulp.task('watch', function () {
    gulp.watch('blocks/**/*.pug', gulp.series('pug'));
    gulp.watch('blocks/**/*.scss', gulp.series('sass'))
});



///////// DEFAULT
gulp.task('default', gulp.series(
    gulp.parallel('pug','sass'),
    gulp.parallel( 'watch', 'server')
));