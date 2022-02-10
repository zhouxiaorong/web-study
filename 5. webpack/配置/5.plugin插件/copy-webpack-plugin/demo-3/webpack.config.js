const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src',
          to: '',
          globOptions: {
            // ** 两个星号的意思是在当前路径
            ignore: [
              '**/*.js'
            ]
          }
        }
      ]
    })
  ]
}