const {src, dest} = require('gulp')
sass = require('gulp-sass')

module.exports = styles = () => {
    return src('app/sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('build/css'))
    .pipe(browserSync.stream())
}