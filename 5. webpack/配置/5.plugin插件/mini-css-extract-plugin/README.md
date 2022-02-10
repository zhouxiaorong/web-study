# plugin 插件

## mini-css-extract-plugin
  - 项目地址: [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
  - 安装命令: 
    ```
      <!-- webpack4 -->
      npm install mini-css-extract-plugin@0 --save-dev
      <!-- webpack5 -->
      npm install mini-css-extract-plugin@1 --save-dev
    ```
  - 功能  
      - CSS样式抽离
      - 为每个引入 `CSS` 的 `JS` 文件创建一个单独的 `CSS` 文件
      - 它支持 `CSS` 和 `SourceMap` 的按需加载。
  
### 文档
    [`mini-css-extract-plugin`说明文档](https://v4.webpack.docschina.org/plugins/mini-css-extract-plugin/)

### 注意点
  - 使用了`mini-css-extract-plugin`的`loader`必须配合`plugin`部分一起使用。否则会报错
  - 有版本兼容问题
      - webpack4 + mini-css-extract-plugin 0.12.0 + css-loader 1.0.1
      - webpack5 + mini-css-extract-plugin 1.3.4 + css-loader 5.x.x
  
### demo
  - [demo 1: webpack4 + mini-css-extract-plugin](./demo-1/README.md) 

  - [demo 2: webpack5 + mini-css-extract-plugin](./demo-2/README.md)

  - [demo 3: 多个页面](./demo-3/README.md) 

### example
  ```
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');


    module.exports = {
      mode: 'development',
      entry: {
        one: './src/one/index.js',
        two: './src/two/index.js'
      },
      output: {
        filename: 'a_js/[name].[chunkhash:8].js'
      },
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
          }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: 'a_css/[name].css',
          chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
          template: 'src/one/index.html',
          filename: 'one.html',
          chunks: ['one']
        }),
        new HtmlWebpackPlugin({
          template: 'src/two/index.html',
          filename: 'two.html',
          chunks: ['two']
        }),
      ]
    }
  ```