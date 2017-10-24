module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src(['blocks/*.pug','!blocks/template.pug'])
            .pipe($.plumber())
            .pipe($.pug({
                pretty: true
            }))
            .on("error", $.notify.onError({
                message: "Error: <%= error.message %>",
                title: "HTML"
            }))
            .pipe($.gulp.dest('app/'));
    });
}