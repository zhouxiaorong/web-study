const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src',
        to: '',
        // ** 两个星号的意思是在当前路径
        ignore: [
          '**/*.js'
        ]
      }
    ])
  ]
}