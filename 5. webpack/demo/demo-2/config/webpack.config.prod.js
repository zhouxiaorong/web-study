
module.exports = {
  mode: 'production',
  // context: 'dist/',
  entry: {
    indexp: './src/index.js',
    prod: './src/prod.js'
  },
  output: {
    // publicPath: '/',
    // path: path.resolve(__dirname, '../dist/production/'),
    filename: '[name].[chunkhash:8].js'
  }
};