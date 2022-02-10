const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    filename: 'js/[name].[chunkhash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'one.html',
      template: './src/index.html',
      base: "https://example.com/path/page.html"
    }),
    new HtmlWebpackPlugin({
      filename: 'two.html',
      template: './src/index.html',
      base: {
        // href: 规定页面中所有相对链接的基准 URL
        href: 'http://qin-api-cs.wasu.tv/',
        // target: 在何处打开页面中所有的链接。 _blank / _parent / _self / _top / framename
        target: 'blank'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'three.html',
      template: './src/index.html',
      base: "https://example.com/path/page.html",
      base: {
        target: 'blank'
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'four.html',
      template: './src/index.html',
      base: "https://example.com/path/page.html",
      base: "blank"
    })
  ]
}