const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry: './js/index.js',
	output: {
    filename: 'js/index.js?[hash]',
  },
	module: {
    rules: [
			{
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // use: ['css-loader', 'less-loader']
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'less-loader',
            options: {
              globalVars: {
                "imagePath": process.env.NODE_ENV == 'production' ? '"https://cdn.img.shangjiadao.cn/qingxiao/webindex/image/"' : '"/image/"' 
              },
            }
          }]
        })
      }
    ]
  },
	plugins: [
    new ExtractTextPlugin({
      filename: 'css/index.css?[hash]'
    })
  ],
};