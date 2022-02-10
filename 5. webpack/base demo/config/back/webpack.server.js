// 调用 node.js 中的路径
const path = require('path')
// 删除输出目中之前旧的文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')

const utils = require('./utils')

const dev = Boolean(process.env.NODE_ENV === 'development')

const entry = {}
const htmlPlugins = []

const entries = glob.sync('./src/pages/**/index.js')

const entryfile = ['one']

for (const path of entries) {
  const chunkName = path.slice('./src/pages/'.length, -'/index.js'.length)
  if (entryfile.indexOf(chunkName) >= 0) {
    const template = path.replace('index.js', 'index.html')
    entry[chunkName] = dev ? [path, template] : path
    htmlPlugins.push(new HtmlWebpackPlugin({
      template,
      filename: chunkName + '.html',
      chunksSortMode: 'none',
      chunks: [chunkName]
    }))
  }
}

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  // 入口起点，需要打包的文件，传入文件路径 
  entry,
  output: {
    publicPath: './',
    // 输出文件的文件名
    filename: 'a_js/[name].[chunkhash:8].js',
    // 指定生成的文件目录
    path: path.resolve(__dirname, '../dist/development/')
  },
  // 指定优化模式   development 开发模式    production: 压缩模式  none: 退出任何默认优化选项
  mode: 'development',
  plugins:[
    new CleanWebpackPlugin(),

    ...htmlPlugins
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              // root: path.resolve(__dirname, 'src'),
              // attrs: ['img:src', 'link:href']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'url-loader',
            options: {
              name: utils.assetsPath(dev ? '[name].[chunkhash:8].css' : '[name].css',)
            }
          }
        ]
      },

      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: utils.assetsPath('a_images/[name].[hash:7].[ext]')
            }
          }
        ]
      }
    ]
  },
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join('/', 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || 'localhost',
    port: PORT || 8080,
    open: false,
    overlay: true
      ? { warnings: false, errors: true }
      : false,
    publicPath: '/',
    proxy: {
      '/api': {
          target: 'http://localhost:8080',
          pathRewrite: {
              '^/api': '/static/mock'
          }
      }
    },
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: false,
    }
  },
};