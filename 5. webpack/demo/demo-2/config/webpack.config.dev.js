
module.exports = {
  mode: 'development',
  // context: 'dist/',
  entry: {
    indexd: './src/index.js',
    dev: './src/dev.js'
  },
  output: {
    filename: '[name].[chunkhash:8].js'
  }
};