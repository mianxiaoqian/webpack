/*
 * @Author: qianqian.zhao
 * @Date: 2020-03-22 18:18:22
 * @LastEditors: qianqian.zhao
 * @LastEditTime: 2020-04-02 22:35:11
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
        // 以下配置为对被加载模块的配置
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            // css-loader 配置项
          }
        }],
        exclude: /node_modules/,
        include: /src/, // exclude的优先级高于include
        // use: ['style-loader', {
        //   loader: 'css-loader',
        //   options: {
        //     // css-loader 配置项
        //   }
        // }],
        // 被加载模块的配置
        // resource: {
        //   test: /\.css$/,
        //   exclude: /node_modules/,
        //   include: /src/, // exclude的优先级高于include
        // },
        // issuer为对加载（进行引入）模块的配置
        issuer: {
          test: /\.js$/,
          // include: /src\/views/
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
      // {
      //   test: /\.vue$/,
      //   use: ['vue-loader']
      // }
      // {
      //   test: /\.js$/,
      //   enforce: 'pre', // 表示在所有的loader之前执行
      //   // use: 'eslint-loader',
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       cacheDirectory: true, // 启用缓存机制，重复打包时未改变的模块不用二次编译
      //       presetd: [
      //         ['env', {modules: false}]
      //       ]
      //     }
      //   }
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js'
      // 'vue': resolve('node_modules/vue/dist/vue.esm.js')
    }
  },
  devtool: '#source-map'
}