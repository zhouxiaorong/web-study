// 调用 node.js 中的路径
const path = require('path')
// 删除输出目中之前旧的文件
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 入口起点，需要打包的文件，传入文件路径 
  entry: {
    index: './src/pages/one/index.js'
  },
  // entry,
  output: {
    // 资源路径 用来指明相对于服务器根路径静态资源存在的位置
    // publicPath: './',
    // 输出文件的文件名
    filename: '[name].[chunkhash:8].js',
    // 指定生成的文件目录
    // path: path.resolve(__dirname, '../dist/')
  },
  // 指定优化模式   development 开发模式    production: 压缩模式  none: 退出任何默认优化选项
  mode: 'development',
  devServer: {
    publicPath: '/dist'
  }
};