
/* development 开发模式 */

module.exports = {
  mode: 'development',
  output: {
    publicPath: './',
    // 输出文件的文件名
    filename: 'a_js/[name].[chunkhash:8].js',
    // 指定生成的文件目录
    path: path.resolve(__dirname, '../dist/development/')
  },
}