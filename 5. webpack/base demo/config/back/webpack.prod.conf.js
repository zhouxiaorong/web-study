/* production: 压缩模式 */

module.exports = {
  mode: 'production',
  output: {
    publicPath: '/',
    // 输出文件的文件名
    filename: 'a_js/[name].js',
    // 指定生成的文件目录
    path: path.resolve(__dirname, '../dist/production/')
  },
}