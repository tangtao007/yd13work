const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const rollup = require('gulp-rollup');
const entry = './src/server/**/*.js';
const replace = require('rollup-plugin-replace');
const eslint = require('gulp-eslint');


// 开发环境
function builddev() {
    return watch(entry, {
        ignoreInitial: false
    }, function () {
        gulp.src(entry)
            .pipe(babel({
                babelrc: false, // 让外面到babel配置失效，已当前到配置为准
                plugins: [
                    ["transform-es2015-modules-commonjs"]
                ]
            }))
            .pipe(gulp.dest('dist'));
    });
}

// 上线环境
function buildprod() {
    return gulp.src(entry)
        .pipe(babel({
            babelrc: false, // 让外面到babel配置失效，已当前到配置为准
            ignore: ["./src/server/config/*.js"],
            plugins: [
                ["transform-es2015-modules-commonjs"]
            ]
        }))
        .pipe(gulp.dest('dist'));
}

// 对代码进行检查的环境
function buildlint() {
    return gulp.src(entry)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

// 清洗环境
function buildconfig() {
    return gulp.src(entry)
        .pipe(rollup({
            output: {
                format: "cjs"
            },
            plugins: [
                replace({
                    "process.env.NODE_ENV": JSON.stringify('production')
                })
            ],
            input: "./src/server/config/index.js"
        }))
        .pipe(gulp.dest('./dist'));
}

if (process.env.NODE_EVN == "production") {

}
let build = gulp.series(builddev);
if (process.env.NODE_EVN == "production") {
    build = gulp.series(buildprod, buildconfig);
}

if (process.env.NODE_EVN == "lint") {
    build = gulp.series(buildlint);

}

gulp.task('default', build);