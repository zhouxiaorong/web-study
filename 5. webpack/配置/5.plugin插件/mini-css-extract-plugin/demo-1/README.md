# plugin 插件

## mini-css-extract-plugin 插件

### demo 1: 初识 webpack 4 mini-css-extract-plugin 0
  * 说明

  1. 初始化生成 `package.json` 文件
    ```
      npm init -y
    ```

  2. 安装插件`webpack`、`webpack-cli`、`html-webpack-plugin`
    ```
      npm i webpack@4.15.1 webpack-cli@3.1 mini-css-extract-plugin -D
    ```
    
  3. 新增 `webpack.config.js` 文件
    ```
      const MiniCssExtractPlugin = require("mini-css-extract-plugin");
      module.exports = {
        module: {
          rules:[{
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader'
            ]
          }]
        },
        plugins: [
          new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
          })
        ]
      }
    ```

  4. 修改 `package.json` 文件
    {
      "scripts": {
        "build": "webpack"
      }
    }  

  5. 打包

    ```
      npm run build
    ```


