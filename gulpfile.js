const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sass().on('erro', sass.logError))
        .pipe(gulp.dest('./build/styles'));
        
}

function comprimeImages() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function  watchFiles() {
    gulp.watch('./source/styles/**/*.scss', gulp.series(compilaSass));
    gulp.watch('./source/images/**/*', gulp.series(comprimeImages));
}

exports.default = gulp.series(compilaSass, comprimeImages, watchFiles);