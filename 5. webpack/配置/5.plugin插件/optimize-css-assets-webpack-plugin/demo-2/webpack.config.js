const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    one: './src/one/index.js',
    two: './src/two/index.js'
  },
  output: {
    filename: 'a_js/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
	optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin({
        // 应优化/最小化的`CSS`文件名称(正则表达式)
        assetNameRegExp: /\one.*\.css$/g,
        // 优化\最小化`CSS`的`CSS`处理器
        cssProcessor: require('cssnano'),
        // 传递给的插件选项`cssProcessor`
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true
              }
            }
          ]
        },
        // 指示插件是否可以将消息打印到控制台
        canPrint: true
      })
    ]
	},
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'a_css/[name].[chunkhash:8].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/one/index.html',
      filename: 'one.html',
      chunks: ['one']
    }),
    new HtmlWebpackPlugin({
      template: 'src/two/index.html',
      filename: 'two.html',
      chunks: ['two']
    }),
  ]
}