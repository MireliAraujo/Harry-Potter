const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sass().on('erro', sass.logError))
        .pipe(gulp.dest('./build/styles'));
        
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function comprimeImages() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function  watchFiles() {
    gulp.watch('./source/styles/**/*.scss', gulp.series(compilaSass));
    gulp.watch('./source/images/**/*', gulp.series(comprimeImages));
    gulp.watch('./source/scripts/*.js', gulp.series(comprimeJavaScript));
}

exports.default = gulp.series(compilaSass, comprimeImages, comprimeJavaScript ,watchFiles);