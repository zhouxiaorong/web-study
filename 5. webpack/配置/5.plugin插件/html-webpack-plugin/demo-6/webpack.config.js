const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    filename: 'js/[name].[chunkhash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true
    })
  ]
}