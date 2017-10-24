module.exports = function () {
    $.gulp.task('css-prod', function () {
        return $.gulp.src('app/css/*.css')
            .pipe($.plumber())
            .pipe($.sourcemaps.init())
            .pipe($.autoprefixer({
                browsers: ['last 5 versions'],
                cascade: false
            }))
            .on("error", $.notify.onError({
                message: "Error: <%= error.message %>",
                title: "Style"
            }))
            .pipe($.csso())
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('build/css'));
    });
};