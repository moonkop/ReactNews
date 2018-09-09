var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: './src/js/index.jsx',
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
                query:
                    {
                        presets: ['es2015', 'react'],
                        plugins: ['react-html-attrs']
                    },
            },

            exclude: /node_modules/
        },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader', options: {
                           // module: true,
                           // importLoaders: 1,
                           // localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }
                ]
            }]
    },
    output: {
        path: __dirname + "/dist/",
        filename: "bundle.js"
    }
};