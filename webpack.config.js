/*
 * @Author: qianqian.zhao
 * @Date: 2020-03-22 18:18:22
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-04-03 17:46:36
 * @Description: webpack配置文件
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src/main.js'),
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist')
  },
  // mode: "development",
  devServer: {
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        // enforce: 'pre', // 表示在所有的loader之前执行
        // use: 'eslint-loader',
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // 启用缓存机制，重复打包时未改变的模块不用二次编译
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        // exclude: /node_modules/, // node_modules内的样式有element内置样式，也有使用了@语法，所以也需要这个loader解析
        // include: /src/, // exclude的优先级高于include
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            // css-loader 配置项
          }
        }, 'sass-loader'],
        // 被加载模块的配置
        // issuer为对加载（进行引入）模块的配置
        // issuer: {
        //   test: /\.js$/,
        //   // include: /src\/views/
        // },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)\??.*$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      },
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, 'src')
    }
  },
  devtool: '#source-map'
}