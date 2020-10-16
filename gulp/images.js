const {src, dest} = require('gulp')
imagemin = require('gulp-imagemin')

module.exports = images = () => {
    return src('app/img/**/*')
    .pipe(imagemin())
    .pipe(dest('build/img'))
}