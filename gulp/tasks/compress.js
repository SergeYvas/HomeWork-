module.exports = function () {
    $.gulp.task('compress', function (cb) {
        $.gulp.src('app/js/*.js')
        .pipe($.uglify())
        .pipe(gulp.dest('buld/js'))
    })
};