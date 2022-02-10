const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    // 默认自动生成一个 index.html 文件
    new HtmlWebpackPlugin()

    // new HtmlWebpackPlugin({
    //   // 加载自定义模板（默认为破折号）
    //   template: './index.html'
    // })
  ]
}