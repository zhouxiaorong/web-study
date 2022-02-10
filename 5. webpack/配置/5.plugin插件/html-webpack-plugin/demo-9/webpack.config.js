const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    /* 
      inject: 将所有资产注入给 `template` 或 `templateContent`
        true: 默认, 根据 `scriptLoading` 选项将其添加到头部/身体
        false: 禁用自动注射
        'head': 将脚本放置在 `head` 元素中     
        'body': 将所有 `javascript` 资源都将放置在 `body` 元素的底部
      scriptLoading:  现代浏览器支持非阻塞javascript加载（'defer'），以提高页面启动性能
        blocking (默认) / defer
    */
    new HtmlWebpackPlugin({
      title: 'inject: true, scriptLoading: blocking: body',
      filename: '1.html'
    }),
    new HtmlWebpackPlugin({
      title: 'inject: true, scriptLoading: defer: head + defer',
      filename: '5.html',
      scriptLoading: 'defer'
    }),
    new HtmlWebpackPlugin({
      title: 'inject: body, scriptLoading: blocking: body',
      filename: '4.html',
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      title: 'inject: body, scriptLoading: defer: body + defer',
      filename: '8.html',
      inject: 'body',
      scriptLoading: 'defer'
    }),
    new HtmlWebpackPlugin({
      title: 'inject: head, scriptLoading: blocking: head',
      filename: '3.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: 'inject: head, scriptLoading: defer: head + defer',
      filename: '7.html',
      inject: 'head',
      scriptLoading: 'defer'
    }),
    new HtmlWebpackPlugin({
      title: 'inject: false, scriptLoading: blocking: 无',
      filename: '2.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      title: 'inject: false, scriptLoading: defer: 无',
      filename: '6.html',
      inject: false,
      scriptLoading: 'defer'
    }),
  ]
}