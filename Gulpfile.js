// gulp modules
var del = require('del');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// configuration
var config = require('./config');

// NODE_ENV
var ENV = process.env.ENV || config.environment;
var EXT = process.env.EXT || config.extension;

// clean task
gulp.task('css:clean', function() {
	del(['./dist/assets/css/*']);
});

// copy task
gulp.task('css:copy', function() {
	gulp.src('./bower_components/bourbon/app/assets/stylesheets/**/*').pipe(gulp.dest('./src/assets/sass/bourbon'));
	gulp.src('./bower_components/neat/app/assets/stylesheets/**/*').pipe(gulp.dest('./src/assets/sass/neat'));
});

// build task
gulp.task('css:build', ['css:clean', 'css:copy'], function() {
	return gulp.src('./src/assets/sass/*.' + EXT.trim())
		.pipe($.plumber())
			.pipe($.sourcemaps.init())
				.pipe($.sass({outputStyle: 'expanded'}))
				.pipe($.autoprefixer(['last 2 versions']))
			.pipe($.sourcemaps.write())
		.pipe($.plumber.stop())
		.pipe($.size())			
		.pipe($.if(ENV.trim() === 'production', gulp.dest('./dist/assets/css')))
		.pipe($.plumber())
			.pipe($.rename({suffix: '.min'}))
			.pipe($.if(ENV.trim() === 'production', $.minifyCss({advanced: false})))
		.pipe($.plumber.stop())
		.pipe(gulp.dest('./dist/assets/css'));
});

// watch task
gulp.task('css:watch', ['css:build'], function() {
	gulp.watch('./src/assets/sass/**/*.' + EXT.trim(), ['css:build']);
});

// default task
gulp.task('css', ['css:watch']);