const {src, dest} = require('gulp')

module.exports = html = () => {
    return src('app/*.html')
    .pipe(dest('build'))
    .pipe(browserSync.stream())
}