const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'one.html',
      favicon: './src/3.jpg'
    }),
    new HtmlWebpackPlugin({
      filename: 'two.html',
      publicPath: 'http://www.zxr.cn',
      favicon: './src/3.jpg'
    })
  ]
}