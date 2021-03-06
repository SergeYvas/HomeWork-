'use strict';

global.$ = {
            gulp : require('gulp'),
      sourcemaps : require('gulp-sourcemaps'),
             pug : require('gulp-pug'),
            sass : require('gulp-sass'),
    autoprefixer : require('gulp-autoprefixer'),
            csso : require('gulp-csso'),
          notify : require('gulp-notify'),
         plumber : require('gulp-plumber'),
     browserSync : require('browser-sync').create(),
          uglify : require('gulp-uglify'),
           babel : require('gulp-babel'),
           rename: require('gulp-rename'),

    path:{
           tasks : require('./gulp/config/tasks.js')
    }
};
$.path.tasks.forEach( (taskPath)=> {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug','sass'),
    $.gulp.parallel( 'watch', 'server')
));