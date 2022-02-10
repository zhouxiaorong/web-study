const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    publicPath: 'http://www.zxr.cn',
    filename: 'js/[name].[chunkhash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}