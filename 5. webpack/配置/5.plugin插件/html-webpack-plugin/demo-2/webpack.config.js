const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    one: './src/one/index.js',
    two: './src/two/index.js'
  },
  // output: {
  //   filename: 'a_js/[name].[chunkhash:8].js'
  // },
  plugins: [
    new HtmlWebpackPlugin({
      // title: 生成的`HTML`文档的标题
      title: 'demo 2',
      // filename: 生成的文件名称，默认为`index.html`
      filename: 'one.html',
      template: './src/index.html'
    })
  ]
}