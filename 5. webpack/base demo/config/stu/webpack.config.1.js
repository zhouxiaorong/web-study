// 调用 node.js 中的路径
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const glob = require('glob')
const webpack = require('webpack')

const utils = require('../utils')

const dev = Boolean(process.env.NODE_ENV === 'development')

const entry = {}
const htmlPlugins = []

const entries = glob.sync('./src/pages/**/index.js')

const entryfile = ['one', 'two']

for (const path of entries) {
  const chunkName = path.slice('./src/pages/'.length, -'/index.js'.length)
  if (entryfile.indexOf(chunkName) >= 0) {
    const template = path.replace('index.js', 'index.html')
    entry[chunkName] = dev ? [path, template] : path
    htmlPlugins.push(new HtmlWebpackPlugin({
      // 本地模板文件的位置，支持加载器(如handlebars、ejs、undersore、html等)
      template,
      // 输出文件的文件名称
      filename: chunkName + '.html',
      // none | auto| function，默认auto； 允许指定的thunk在插入到html文档前进行排序
      chunksSortMode: 'none',
      /* 
        允许插入到模板中的一些chunk，不配置此项默认会将entry中所有的thunk注入到模板中。
        在配置多个页面时，每个页面注入的thunk应该是不相同的，需要通过该配置为不同页面注入不同的thunk；
      */
      chunks: [chunkName]
    }))
  }
}

module.exports = {
  // 入口起点，需要打包的文件，传入文件路径 
  // entry: {
  //   index: './src/js/index.js',
  //   index2: './src/js/index2.js' 
  // },
  entry,
  output: {
    publicPath:dev ? './' : '/',
    // 输出文件的文件名
    filename: dev ? 'a_js/[name].[chunkhash:8].js' : 'a_js/[name].js',
    // 指定生成的文件目录
    path: path.resolve(__dirname, dev ? '../../dist/dev/' : '../../dist/prod/')
  },
  // 指定优化模式   development 开发模式    production: 压缩模式  none: 退出任何默认优化选项
  mode: dev ? 'development' : 'production',
  
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    },
    minimizer: dev ? [] : [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  //optimization与entry/plugins同级
  // optimization: {
  //   runtimeChunk: {
  //     name: 'manifest'
  //   },
  //   splitChunks: {
  //     maxInitialRequests: 10,
  //     cacheGroups: {
  //         common: {
  //           name: 'common',
  //           //chunks: 'all'
  //         }
  //     }
  //   }
  // },

  plugins:[
    // 删除输出目录之前旧的文件
    new CleanWebpackPlugin(),

    // css 提取
    new MiniCssExtractPlugin({
      filename: dev ? 'a_css/[name].[chunkhash:8].css' : 'a_css/[name].css'
      // filename: utils.assetsPath(dev ? 'a_css/[name].[chunkhash:8].css' : 'a_css/[name].css')
      // filename: '[contenthash].css',
      // chunkFilename: utils.assetsPath(dev ? 'a_css/[name].[chunkhash:8].css' : 'a_css/[name].css')
    }),

    // 生成html文件
    ...htmlPlugins
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "postcss-loader"}
        ]
        // use: [dev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
          test: /\.less$/,
          use : [
              MiniCssExtractPlugin.loader,
              { loader: "css-loader" },
              { loader: "less-loader" }
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

  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    },
  },

  performance: {
    hints: dev ? false : 'warning'
  }
};