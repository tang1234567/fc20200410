/**
 * postcss 测试
 */
	
const conf = {};
conf.rootpath = "D:/PhpStormProjects/reactTest/fc";
conf.projectPath = conf.rootpath +'/dist';
const detailcss = [
	conf.rootpath+'/css/*.css'
];

const gulp = require('gulp'),
	minifycss = require('gulp-clean-css'), // 压缩css
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	postcss = require('gulp-postcss'),
	precss = require('precss'),
	autoprefixer = require('autoprefixer');

const { watch } = require('gulp');

// 处理css
const mergeCss = ()=>{
    return gulp.src(detailcss)
	//.pipe(concat('d.css')) // 合并
	.pipe(postcss([
		autoprefixer({
			// 兼容主流浏览器的版本
			overrideBrowserslist: [
				'last 10 versions',
				'Firefox >= 20',
				'Android >= 4.0',
				'iOS >= 8'
			]
		}),
		precss
	]))
	// .pipe(minifycss()) //压缩
	.pipe(gulp.dest(conf.projectPath))
}

exports.default = gulp.parallel(mergeCss);

// exports.default = function() {
//   // You can use a single task
//   watch(detailcss, mergeCss);
// };

console.log('dist => ', conf.projectPath);