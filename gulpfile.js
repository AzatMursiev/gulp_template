const {parallel, series, watch} = require('gulp')

styles = require('./gulp/styles')
html = require('./gulp/html')
scripts = require('./gulp/scripts')
images = require('./gulp/images')
clean = require('./gulp/clean')

browserSync = require('browser-sync').create()

watchFiles = () => {
    browserSync.init({
        server: 'build', notify: false
    })
    watch('app/sass/**/*.scss', styles)
    watch('app/*.html', html)
    watch('app/img/**/*', images)
    watch('app/js/**/*.js', scripts)
}

module.exports.default = series(clean, parallel(styles, html, images, scripts), watchFiles)