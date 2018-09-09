var webpack = require("webpack");
var path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/js/app.js',
    mode: 'development',
    devServer: {
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
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['es2015', 'react'],
                    plugins: [
                        ['import', [{libraryName: "antd", style: 'css'}]],
                        'react-html-attrs'
                    ]
                }
            },

            exclude: /(node_modules|dist)/
        },
            {
                test: /\.(css)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader', options: {}
                    }
                ],
                exclude: /(dist)/
            }
        ]

    },

    plugins: [],
    output: {
        path: __dirname + "/dist/",
        filename: "bundle.js"
    }
};