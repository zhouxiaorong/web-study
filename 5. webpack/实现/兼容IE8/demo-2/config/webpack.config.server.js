const merge = require('webpack-merge')
const WebpackBaseConfig = require('./webpack.config.base')

module.exports = merge(WebpackBaseConfig, {
  mode: 'development',
  entry: {
    main: ['babel-polyfill', './config/mock.js', './src/index.js']
    // main: ['./config/mockServer.js', './src/index.js']
  },
  devServer: {
    open: true
  },
})