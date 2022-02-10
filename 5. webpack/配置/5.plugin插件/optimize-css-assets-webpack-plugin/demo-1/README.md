# plugin 插件

### optimize-css-assets-webpack-plugin 插件

#### demo 1: 初识
  * 说明

  1. 初始化生成 `package.json` 文件
    ```
      npm init -y
    ```

  2. 安装插件`webpack`、`webpack-cli`、`html-webpack-plugin`
    ```
      npm i webpack@4.15.1 webpack-cli@3.1 mini-css-extract-plugin@0.12.0 css-loader@1.0.1 optimize-css-assets-webpack-plugin -D
    ```
    
  3. 新增 `webpack.config.js` 文件
    ```
      const MiniCssExtractPlugin = require('mini-css-extract-plugin')
      const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

      module.exports = {
        module: {
          rules: [
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
          ]
        },
        plugins: [
          new MiniCssExtractPlugin(),
          new OptimizeCssAssetsWebpackPlugin()
        ]
      }

    ```

  4. 修改 `package.json` 文件
    ```
      {
        "scripts": {
          "build": "webpack"
        }
      }  
    ```

  5. 打包

    ```
      npm run build
    ```


