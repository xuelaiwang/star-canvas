const baseConfig = require("./webpack.base.js");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
module.exports = merge([
  baseConfig,
  {
    mode: 'production',
    output: {
      path: path.resolve(__dirname, '../dist'),
      // filename: 'index.js',
      publicPath: 'https://cdn.img.shangjiadao.cn/qingxiao/webindex'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: '../index.html',
        template: 'index.ejs',
        imagePath: 'https://cdn.img.shangjiadao.cn/qingxiao/webindex/'
      }),
    ],
  }
])