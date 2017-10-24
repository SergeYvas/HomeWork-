module.exports = function () {
     $.gulp.task('html-prod', function () {
        return $.gulp.src('app/*.html')
            .pipe($.plumber())
            .pipe($.sourcemaps.init())
            .on("error", $.notify.onError({
                message: "Error: <%= error.message %>",
                title: "html"
            }))
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('build/'));

    });
};