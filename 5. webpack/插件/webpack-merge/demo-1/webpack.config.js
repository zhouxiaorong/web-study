
const merge = require('webpack-merge')

const exports1 = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  }
}
const exports2 = {
  entry: {
    index: './src/index3.js',
    index2: './src/index2.js'
  },
  output: {
    filename: '[name].[chunkhash:8].js'
  }
}
module.exports = merge(
  exports1,
  exports2
)