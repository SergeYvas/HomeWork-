'use strict';

const gulp = require('gulp'),
      sourcemaps  = require('gulp-sourcemaps'),
      pug  = require('gulp-pug'),
      sass = require('gulp-sass'),
      autoprefixer  = require('gulp-autoprefixer'),
      csso          = require('gulp-csso'),
      notify        = require('gulp-notify'),
      browserSync = require('browser-sync').create();


///////// PUG plugons
gulp.task('pug', function () {
    return gulp.src('blocks*.pug')
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
            baseDir: "./bild"
        }
    });
    browserSync.watch("./bild", browserSync.reload)
});


/////////// WATCHER
gulp.task('watch', function () {
    gulp.watch('app/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('app/sass/**/*.scss', gulp.series('sass'))
});



///////// DEFAULT
gulp.task('default', gulp.series(
    gulp.parallel('pug','sass'),
    gulp.parallel( 'watch', 'server')
));