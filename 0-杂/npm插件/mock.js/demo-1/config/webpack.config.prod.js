const merge = require('webpack-merge')
const WebpackBaseConfig = require('./webpack.config.base')

module.exports = merge(WebpackBaseConfig, {
  mode: 'production',
  entry: {
    // main: ['./src/index.js']
    // main: ['babel-polyfill', './src/index.js']
    main: ['babel-polyfill', './config/mock.js', './src/index.js']
  }
})


