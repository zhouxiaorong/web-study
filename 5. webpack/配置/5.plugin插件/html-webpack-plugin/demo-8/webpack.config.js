const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      filename: '1.html',
      template: './src/index.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        keywords: '程序员,程序猿,攻城狮'
      }
    }),
    new HtmlWebpackPlugin({
      filename: '2.html',
      template: './src/index.html',
      meta: [{
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },{
        name: 'keywords',
        content: '程序员,程序猿,攻城狮'
      }]
    })
  ]
}