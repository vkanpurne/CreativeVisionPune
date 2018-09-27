var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css');
	uglify = require('gulp-uglify'),
	notify = require('gulp-notify'),
	concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer')
    
var path = {
  
    /* Path for Careerfest */
    scss_dev: ['sass/*.scss', 'sass/**/*.scss'],
    css: 'css',
    cssmin: ['css/careerfest.css']
};

/* Careerfest sass compile Task */
gulp.task('sass', function() {
	gulp.src(path.scss_dev)
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(gulp.dest(path.css))
	.pipe(notify({
		message: "Your Careerfest scss file is now modified!"
	}));
});

/* Wedding minify-css Task */
gulp.task('min-css', function() {
	gulp.src(path.cssmin)
	.pipe(cleanCSS())
	.pipe(gulp.dest(path.css))
	.pipe(notify({
		message: "Your Careerfest css file got minified!"
	}));
});

//Caerrerfest watch task 
gulp.task('watch', function() {
	gulp.watch(path.scss_dev, ['sass']);
});

/* Gulp tasks */
gulp.task('default', ['watch']);
//gulp.task('production', ['cv-sass', 'min-css']);