const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');
const notify = require('gulp-notify');
// 压缩js
gulp.task('uglify',function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('zip'))
        .pipe(notify({msg:'js压缩'}))
})
// 合并压缩后的js
gulp.task('concat',function(){
    gulp.src('zip/*.js')
        .pipe(concat('min.js'))
        .pipe(gulp.dest('zip'))
        .pipe(notify({msg:'合并js'}))
})
// 压缩css
gulp.task('minify-css',function(){
    gulp.src('css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('zip'))
        .pipe(notify({msg:'css压缩'}))
})
