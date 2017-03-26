/**
 * HYPERPC - The shop of powerful computers.
 *
 * @copyright Copyright (C) HYPERPC,  All rights reserved.
 * @link      https://hyperpc.ru
 * @author    Sergey Kalistratov <kalistratov.s.m@gmail.com>
 */

var gulp   = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('scripts', function () {
    gulp.src([
        './bower_components/jbzoo-jquery-factory/src/widget.js',
        './src/hyperpc.js'
    ])
    .pipe(concat('widget.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});

gulp.task('build', ['scripts']);
