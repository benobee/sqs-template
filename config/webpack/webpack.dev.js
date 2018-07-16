const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './test'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "../../test/index.html"
        })
    ]
});

module.exports = config;