const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    two: './src/two/index.js',
    one: './src/one/index.js',
    three: './src/three/index.js'
  },
  output: {
    filename: 'js/[name].[chunkhash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/one/index.html',
      filename: 'one.html',
      chunks: ['three', 'two', 'one'],
      chunksSortMode: 'none'
    }),
    new HtmlWebpackPlugin({
      template: 'src/two/index.html',
      filename: 'two.html',
      chunks: ['three', 'two', 'one'],
      chunksSortMode: 'manual'
    }),
    new HtmlWebpackPlugin({
      template: 'src/three/index.html',
      filename: 'three.html',
      chunks: ['three', 'two', 'one'],
      chunksSortMode: 'auto'
    })
  ]
}