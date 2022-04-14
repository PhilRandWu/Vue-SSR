/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-13 08:41:20
 * @LastEditTime: 2022-04-13 08:50:10
 * @LastEditors: PhilRandWu
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: resolve('./dist')
    },
    module: {
        rules: [
            {
                test: /.vue$/,
                use: 'vue-loader',
            },
            {
                test: /.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('./public/index.html')
        })
    ]
}
