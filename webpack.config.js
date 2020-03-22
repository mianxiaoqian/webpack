/*
 * @Author: qianqian.zhao
 * @Date: 2020-03-22 18:18:22
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-03-22 18:48:49
 * @Description: webpack配置文件
 */

const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  mode: "development",
  devServer: {
    publicPath: '/dist'
  }
}