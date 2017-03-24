const gulp = require('gulp')
const zip = require('gulp-zip')

gulp.task('default', () => {
    gulp.src(['function.js', 'target/debug/slackbot*'])
        .pipe(zip('slackbot.zip'))
        .pipe(gulp.dest('dist'))
})