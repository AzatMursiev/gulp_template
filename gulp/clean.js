const gulp = require('gulp')
del = require('del')

module.exports = clean = () => {
    return del('build/*')
}