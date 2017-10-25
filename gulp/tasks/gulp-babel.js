module.exports = () =>{
    $.gulp.task('es6', () => {
        $.gulp.src('app/js/main.js')
            .pipe($.babel({
            presets: ['es2015']
        }))
            .pipe($.rename('js/main.js'))
            .pipe($.gulp.dest('app'))
    })
};
