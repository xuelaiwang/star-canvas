const merge = require('webpack-merge');
const baseConfig = require("./webpackconfig/webpack.base.js");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = merge([
  baseConfig,
  {
    mode: 'development',
    output: {
      path: path.resolve(__dirname, '/'),
      // filename: 'index.js',
    },
    devServer: {
      contentBase: './',
      port: 80,
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: '../index.html',
        template: 'index.ejs',
        imagePath: './'
      }),
    ],
  }
])