const HtmlWebpackPlugin = require('html-webpack-plugin')
const view = process.env.npm_package_config_pages;
const pages = process.env.npm_package_pages_one;


console.log('view:'+view);
console.log('pages:'+pages);

module.exports = {
  mode: 'development',
  entry: {
    one: './src/one/index.js',
    two: './src/two/index.js',
    three: './src/three/index.js'
  },
  output: {
    filename: 'a_js/[name].[chunkhash:8].js'
  },
  plugins: [
    /* 所有参数均默认
      titile文档标题: Webpack App
      filename文件名: index.html
      template模板: 默认自动生成`index.html`文件
      chunks指定入口文件: 所有入口文件均添加到该html文件中
    */
    new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/two/index.html',
      filename: 'two.html',
      chunks: ['two'],
      publicPath: '/'
    }),
    new HtmlWebpackPlugin({
      template: 'src/three/index.html',
      title: 'three html',
      filename: 'three.html',
      chunks: ['two', 'three'],
      publicPath: 'http://www.zxr.cn'
    }),
    new HtmlWebpackPlugin({
      template: 'src/three/index.html',
      filename: 'html/three.html',
      publicPath: 'auto'
    })
  ]
}