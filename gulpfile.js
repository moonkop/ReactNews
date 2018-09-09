var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var sourcemaps = require('gulp-sourcemaps');
var extender = require('gulp-html-extend');
var insert = require('gulp-insert');
var gulpFilter = require('gulp-filter');
var clean = require('gulp-clean');
var WebpackDevServer = require('webpack-dev-server');
var Webpack = require('webpack');
var gutil = require("gulp-util");
var webpackConfig = require("./webpack.config.js");

gulp.task('less', function () {
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('minify-css', function () {
    return gulp.src('dist/css/sb-admin-2.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('dev',
    ['less', 'minify-css', 'browserSync']
);

gulp.task('watch', ['less'], function () {
    gulp.watch('src/less/*.less', ['less']);
})

gulp.task('default', ['watch']);

gulp.task('test-dev', function () {

    var webpackOptions = {
        entry: './src/js/app.js',
        mode: 'development',
        module: {
            rules: [{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",

                    query:
                        {
                            presets: ['es2015', 'react'],
                            plugins: ['react-html-attrs']

                        },
                },

                exclude: /node_modules/
            }
            ]
        },

        plugins: [],
        output: {
            path: "/d/WorkSpace/reactTrial2/dist/",
            filename: "bundle.js"
        }
    }

    var serverOptions = {
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: false,
        clientLogLevel: 'info',
        //  hot: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/
        },
        overlay: {
            errors: true,
            warnings: false
        },
        compress: false,
        //   open:true,
        port: 80
    }


    var webpack = Webpack(webpackOptions);
    var server = new WebpackDevServer(webpack, serverOptions);
    server.listen('80', 'localhost',function(err){
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    });


})