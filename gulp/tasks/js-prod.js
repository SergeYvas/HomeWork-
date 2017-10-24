module.exports = function () {
    $.gulp.task('js-prod', function () {
        return $.gulp.src('app/js/*.js')
            .pipe($.uglify())
            .pipe($.gulp.dest('build/js'));
    });
};