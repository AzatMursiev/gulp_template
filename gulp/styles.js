const {src, dest} = require('gulp')
sass = require('gulp-sass')
autoprefixer = require('gulp-autoprefixer')
sourcemaps = require('gulp-sourcemaps')

module.exports = styles = () => {
    return src(['app/sass/**/*.sass', 'app/sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(dest('build/css'))
    .pipe(browserSync.stream())
}