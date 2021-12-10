const gulp = require('gulp');
const { series } = require('gulp');
const bower = require('gulp-bower');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const merge = require('merge-stream');
const minifyCSS = require('gulp-minify-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const config = {
    bowerDir: './bower_components',
};
gulp.task('bootstrap', function() {
    const style = gulp.src(config.bowerDir + '/bootstrap/scss/bootstrap.scss')
        .pipe(concat('bootstrap.scss'))
        .pipe(gulp.dest('./tmp'));
    // const fonts = gulp.src(config.bowerDir + '/bootstrap/dist/fonts/**/*')
    //     .pipe(gulp.dest('./dist/fonts'));
    const scripts = gulp.src(config.bowerDir + '/bootstrap/dist/js/**/*')
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'));

    return merge(style, scripts);
});

gulp.task('bower', function() {
    return bower(config.bowerDir);
});

gulp.task('clean', () => {
    return del(['dist/css', 'dist/js', 'tmp']);
});

gulp.task('cssmin', () => {
    return gulp.src('dist/css/**/*.css')
    .pipe(minifyCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('styles', () => {
    return gulp.src('./sass/theme.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['sass', 'tmp', config.bowerDir + '/bootstrap/scss/'],
        }).on('error', sass.logError))
        .pipe(concat('bootstrap.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'));
});
gulp.task('default', series('clean', 'bower', 'bootstrap', 'styles', 'cssmin'));