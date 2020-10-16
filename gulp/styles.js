const {src, dest} = require('gulp')
sass = require('gulp-sass')
sourcemaps = require('gulp-sourcemaps')

module.exports = styles = () => {
    return src('app/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(dest('build/css'))
    .pipe(browserSync.stream())
}