const {src, dest} = require('gulp')

module.exports = scripts = () => {
    return src('app/js/**/*.js')
    .pipe(dest('build/js'))
    .pipe(browserSync.stream())
}