var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index-1.html',
      templateParameters: {
        params1: 'params1 value',
        params2: 'params2 value'
      }
    }),
  ]
}