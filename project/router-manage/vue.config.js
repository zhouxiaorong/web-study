
module.exports = {
  // transpileDependencies: true,
  lintOnSave: false,
  
  devServer: {
    port: '5005',
    // before: require('./mock/index'),
    setupMiddlewares: require('./mock/index'),
  },
}