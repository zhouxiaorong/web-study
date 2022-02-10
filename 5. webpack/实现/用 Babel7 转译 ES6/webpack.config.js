const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: {
    main: ['./src/index.js']
    // main: ['object-defineproperty-ie8', './src/index.js']
    // main: ['babel-polyfill', './src/index.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 使用正则来匹配 js 文件
        exclude: /node_modules/, // 排除依赖包文件夹
        use: {
          loader: 'babel-loader' // 使用 babel-loader,
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          ie8: true,
        }
      })
    ]
  }
}