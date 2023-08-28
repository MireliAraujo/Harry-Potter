const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
        
}

function comprimeImages() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}


exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial:false }, gulp.series(compilaSass));
    gulp.watch('./source/images/*', { ignoreInitial:false }, gulp.series(comprimeImages));
}
