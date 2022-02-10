const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'a_css/[name].css',
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