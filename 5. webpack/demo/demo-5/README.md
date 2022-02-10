# CSS 处理: 浏览器兼容

## postcss-loader + postcss-preset-env + autoprefixer

## 实现步骤

  1. 初始化生成 `package.json` 文件
    ```
      npm init -y
    ```

  2. 安装插件
    ```
      {
        "devDependencies": {
          "node-sass": "^4.11.0",
          "sass-loader": "^7.1.0",
          "less": "^2.6.1",
          "less-loader": "^2.2.3",
          "less-plugin-clean-css": "^1.5.1",
          "autoprefixer": "^9.8.6",
          "postcss-loader": "^3.0.0",
          "postcss-preset-env": "^6.7.0",
          "css-loader": "^3.6.0",
          "mini-css-extract-plugin": "^1.2.0",
          "optimize-css-assets-webpack-plugin": "^5.0.1",
          "clean-webpack-plugin": "^2.0.0",
          "webpack": "^4.41.6",
          "webpack-cli": "^3.3.11"
        },     
      }
    ```
    
  3. 新增 `src/index.js` 、`src/css/index.css` 文件

  4. 新增 `.browserslistrc` 文件
    ```
      # 所支持的浏览器版本
      # > 1% # 全球使用情况统计选择的浏览器版本
      last 100 version # 每个浏览器的最后 100 个版本
      # Chrome >= 16 # 版本高于 16 的所有谷歌浏览器版本
      # last 5 Firefox versions # 火狐浏览器最后两个版本
      # Safari >= 6
      # not ie < 7 # 排除 ie7 以下的浏览器
    ```
  
  5. 新增 `webpack.config.js` 文件
    ```
      const MiniCssExtractPlugin = require('mini-css-extract-plugin')
      const CleanWebpackPlugin = require('clean-webpack-plugin')
      const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 压缩 css
      
      module.exports = {
        mode: 'production',
        entry: {
          index: './src/index.js',
          index_scss: './src/index_scss.js',
        },
        module: {
          rules: [
            {
              test: /\.css$/,
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
            }
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
          require('autoprefixer')
        ]
      }

    ```

  6. 修改 `package.json` 文件
    ```
      {
        "scripts": {
          "build": "webpack"
        }
      }  
    ```

  7. 打包

    ```
      npm run build
    ```


