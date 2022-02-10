const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 压缩 css
// const CleanCSSPlugin = require("less-plugin-clean-css");

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    // index_less: './src/index_less.js',
    index_scss: './src/index_scss.js',
  },
  module: {
    rules: [
      {
        test: /\.(le|sa|sc|c)ss$/, // 针对 .sass .scss 或者 .css 后缀的文件设置 loader
        use: [
          //用来取代style-loader，将css提取成单独的文件而不是作为style标签整合进html中
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                //帮助 `postcss` 找到 `package.json` 中 `browserslist` 里面的配置,通过配置加载指定的 `css` 样式
                require('postcss-preset-env')()
              ]
            }
          },
          'sass-loader'// 使用 sass-loader 将 scss 转为 css
        ]
      },
      // {
      //   test: /\.less$/, 
      //   use: [{
      //     loader: "less-loader",
      //     options: {
      //         plugins: [
      //           new CleanCSSPlugin({
      //             advanced: true
      //           })
      //         ]
      //     }
      //   }]
      // },
      
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g, //一个正则表达式，指示应优化/最小化的资产的名称。提供的正则表达式针对配置中ExtractTextPlugin实例导出的文件的文件名运行，而不是源CSS文件的文件名。默认为/\.css$/g
      cssProcessor: require('cssnano'), //用于优化\最小化 CSS 的 CSS处理器，默认为 cssnano
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } }, //传递给 cssProcessor 的选项，默认为{}
      canPrint: true //一个布尔值，指示插件是否可以将消息打印到控制台，默认为 true
    }),
    // 清除无用 css
    new PurifyCSS({
      paths: glob.sync([
        // 要做 CSS Tree Shaking 的路径文件
        path.resolve(__dirname, './*.html'), // 请注意，我们同样需要对 html 文件进行 tree shaking
        path.resolve(__dirname, './src/*.js')
      ])
    }),
    require('autoprefixer')
  ]
}
