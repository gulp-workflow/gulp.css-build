// gulp modules
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// configuration
var config = require('./config');

// NODE_ENV
var ENV = process.env.ENV || config.environment;
var EXT = process.env.EXT || config.extension;

// clean task
gulp.task('css:clean', function() {
	gulp.src('./dist/assets/css/*', {read: false}).pipe($.clean());
});

// copy task
gulp.task('css:copy', function() {
	gulp.src('./bower_components/bourbon/app/assets/stylesheets/**/*').pipe(gulp.dest('./dist/assets/sass/bourbon'));
	gulp.src('./bower_components/neat/app/assets/stylesheets/**/*').pipe(gulp.dest('./dist/assets/sass/neat'));
});

//gulp.task('css:build', ['css:clean', 'css:copy'], function() {
//	return gulp.src('./src/assets/js/*.' + EXT.trim())
//		.pipe($.plumber())
//			.pipe($.sourcemaps.init())
//				.pipe()
//				.pipe($.concat('bundle.js'))
//			.pipe($.sourcemaps.write())
//		.pipe($.plumber.stop())
//		.pipe($.size())			
//		.pipe($.if(ENV.trim() == 'production', gulp.dest('./dist/assets/js')))
//		.pipe($.plumber())
//			.pipe($.rename({suffix: '.min'}))
//			.pipe($.if(ENV.trim() == 'production', $.uglify()))
//		.pipe($.plumber.stop())
//		.pipe(gulp.dest('./dist/assets/css'));
//});
//
//gulp.task('css:watch', ['css:build'], function() {
//	gulp.watch('./src/assets/sass/**/*.' + EXT.trim(), ['css:build']);
//});
//
//gulp.task('css', ['css:watch']);