module.exports = function () {
    $.gulp.task('build', $.gulp.series(
        $.gulp.parallel('html-prod','css-prod','js-prod')
    ))
};



