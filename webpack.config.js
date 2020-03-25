/*
 * @Author: qianqian.zhao
 * @Date: 2020-03-22 18:18:22
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-03-25 19:35:50
 * @Description: webpack配置文件
 */

const path = require('path');

module.exports = {
  entry: {
    main: path.join(__dirname, './src/main.js'),
  },
  output: {
    filename: '[name]@[chunkhash].js',
    path: path.join(__dirname, '/dist'),
    publicPath: 'http://localhost:3000/',
  },
  mode: "development",
  devServer: {
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: 'node_modules'
      }
    ]
  }
}