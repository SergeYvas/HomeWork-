module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('blocks/*.scss')
            .pipe($.plumber())
            .pipe($.sourcemaps.init())
            .pipe($.sass())
            .pipe($.autoprefixer({
                browsers: ['last 3 versions'],
                cascade: false
            }))
            .on("error", $.notify.onError({
                message: "Error: <%= error.message %>",
                title: "Sass"
            }))
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('app/css'));
    });
};