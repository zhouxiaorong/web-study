const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin'); // installed via npm
const webpack = require('webpack'); // to access built-in plugins
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      /** 模拟删除文件
       * 默认值: false
       */
      dry: true,

      /** 将日志写入控制台
       * 在 `dry` 为 `true` 时始终启用
       * 默认值: false
       */
      verbose: true,

      /**重建时自动删除所有未使用的网页包资产 
       * 默认值: true
       */
      cleanStaleWebpackAssets: false,

      /**重建时自动删除所有未使用的网页包资产 
       * 默认值: true
       */
      protectWebpackAssets: false,

      // **WARNING**
      //
      // Notes for the below options:
      //
      // They are unsafe...so test initially with dry: true.
      //
      // Relative to webpack's output.path directory.
      // If outside of webpack's output.path directory,
      //    use full path. path.join(process.cwd(), 'build/**/*')
      //
      // These options extend del's pattern matching API.
      // See https://github.com/sindresorhus/del#patterns
      //    for pattern matching documentation

      // Removes files once prior to Webpack compilation
      //   Not included in rebuilds (watch mode)
      //
      // Use !negative patterns to exclude files
      //
      // 
      /** 
       * 默认值: ['**\/*']
       */
      cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*', '!directoryToExclude/**'],
      /** 
       * 禁用`cleanOnceBeforeBuildPatterns`
       */
      cleanOnceBeforeBuildPatterns: [], // disables cleanOnceBeforeBuildPatterns

      /** 
       * 在每次生成（包括监视模式）后删除与此模式匹配的文件。
       * 用于不是由`Webpack`直接创建的文件。
       * 使用`!`排除文件的负模式
       * 默认值: []
       */
      cleanAfterEveryBuildPatterns: ['static*.*', '!static1.js'],

      /** 
       * 允许外部有干净的图案流程.cwd()
       * 需要显式设置`dry`选项
       * 默认值: false
       */
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
};