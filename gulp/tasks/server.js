module.exports = function () {
    $.gulp.task('server', function() {
        $.browserSync.init({
            server: {
                baseDir: "app/"
            }
        });
        $.browserSync.watch("app/", $.browserSync.reload)
    });
};