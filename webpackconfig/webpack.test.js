const merge = require('webpack-merge');
const baseConfig = require("./webpack.base.js");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = merge([
  baseConfig,
  {
    mode: 'development',
    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: './'
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