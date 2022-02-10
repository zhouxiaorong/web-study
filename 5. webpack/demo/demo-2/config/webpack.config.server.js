module.exports = {
  entry: {
    index: './src/index.js',
    server: './src/server.js'
  },
  output: {
    filename: '[name].js'
  },
  devServer: {
    // DevServer启动且第一次构建完成时，自动使用我们的系统默认浏览器去打开网页。
    open: true,
  }
};