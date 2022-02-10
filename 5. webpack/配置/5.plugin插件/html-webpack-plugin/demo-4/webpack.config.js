const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    filename: 'js/[name].[chunkhash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '默认',
      filename: 'html/index-1.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'html/index-2.html',
      title: 'http://www.zxr.cn',
      publicPath: 'http://www.zxr.cn'
    }),
    new HtmlWebpackPlugin({
      filename: 'html/index-3.html',
      title: './',
      publicPath: './'
    }),
    new HtmlWebpackPlugin({
      filename: 'html/index-4.html',
      title: '/',
      publicPath: '/'
    }),
    new HtmlWebpackPlugin({
      filename: 'html/index-5.html',
      title: 'auto',
      publicPath: 'auto'
    }),
    new HtmlWebpackPlugin({
      filename: 'html/index-6.html',
      title: 'http://www.zxr.cn/',
      publicPath: 'http://www.zxr.cn/'
    }),
  ]
}