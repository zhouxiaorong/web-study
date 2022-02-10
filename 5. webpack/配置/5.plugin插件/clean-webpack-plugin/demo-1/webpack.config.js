const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  plugins: [
    /** 
     * `webpack`的`output.path`目录中的所有文件将被删除一次，但是目录本身不会被删除。
     * 如果使用webpack 4+的默认配置，<PROJECT_DIR> / dist /下的所有内容都将被删除。
     *使用cleanOnceBeforeBuildPatterns覆盖此行为。
     * 
     *在重建期间，所有不再使用的`webpack`资产将被自动删除。
     */
    new CleanWebpackPlugin()
  ]
}