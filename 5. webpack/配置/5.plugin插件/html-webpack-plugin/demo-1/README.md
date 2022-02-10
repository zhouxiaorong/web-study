# plugin 插件

## html-webpack-plugin 插件

### demo 1: 初识
  * 说明
      - 默认入口文件: src/index.js
      - 默认输出文件: dist/main.js
      - 未设置`template`参数时默认自动生成一个`index.html`文件

  1. 初始化生成 `package.json` 文件
    ```
      npm init -y
    ```

  2. 安装插件`webpack`、`webpack-cli`、`html-webpack-plugin`
    ```
      npm i webpack@4.15.1 webpack-cli@3.1 html-webpack-plugin -D
    ```
    
  3. 新增 `webpack.config.js` 文件
    ```
      const htmlWebpackPlugin = require('html-webpack-plugin');
      module.exports = {
        plugins: [
          // 默认自动生成一个 index.html 文件
          new HtmlWebpackPlugin()
        ]
      }
    ```

  4. 打包

    ```
      npm run build
    ```


