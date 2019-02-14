let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let gulp = require('gulp');
let cleanCss = require('gulp-clean-css');
let less = require('gulp-less');
let htmlmin = require('gulp-htmlmin');
var livereload = require('gulp-livereload');

gulp.task('js', function () {
    return gulp.src('src/**/*.js')
        .pipe(concat('built.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'))
})
// gulp.task('default',['minifyjs'])

//less-》css

gulp.task('less', function () {
    return gulp.src('src/css/*.less').pipe(less()).pipe(gulp.dest('src/css'))
})
//指定依赖任务
gulp.task('css', gulp.series('less', function () {
    return gulp.src('src/**/*.css').pipe(concat('built.css')).pipe(gulp.dest('dist/css')).pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'))
}))

gulp.task('htmlmin',function () {
    return gulp.src('index.html').pipe(htmlmin({collapseWhitespace:true})).pipe(gulp.dest('dist'))
})
gulp.task('default', gulp.series('js', 'css','htmlmin'))

gulp.task('watch',gulp.series('default',function () {
    livereload.listen();
    gulp.watch('src/js/*.js',gulp.parallel('js'));
    gulp.watch(['src/css/*.css','src/less/*.less'],gulp.series(['css','less']))
}))

