module.exports = () => {
    $.gulp.task('compress', () =>{
        $.gulp.src('app/js/main.js')
        .pipe($.uglify())
        .pipe($.gulp.dest('build/js'))
    })
};