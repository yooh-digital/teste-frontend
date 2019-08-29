const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

function browser() {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  });
}

function watch() {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/scripts/*.js', gulpJs);
  gulp.watch('src/plugins/*.js', pluginsJs);
  gulp.watch(['src/**/*.html'])
    .on('change', browserSync.reload);
}


function compilaSass() {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('./src/dist'))
    .pipe(browserSync.stream());
}

function gulpJs() {
  return gulp.src('src/scripts/*.js')
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./src/dist'))
    .pipe(browserSync.stream());
}

function pluginsJs() {
  return gulp
    .src([ 
      'node_modules/jquery/dist/jquery.min.js',
      'src/plugins/*.js'
    ])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('./src/dist'))
    .pipe(browserSync.stream());
}

gulp.task('watch', watch);
gulp.task('browser-sync', browser);
gulp.task('sass', compilaSass);
gulp.task('mainjs', gulpJs);
gulp.task('pluginsJs', pluginsJs);
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'mainjs', 'pluginsJs'));

