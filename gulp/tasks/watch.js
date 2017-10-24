module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('blocks/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('blocks/**/*.scss', $.gulp.series('sass'))
    });
};