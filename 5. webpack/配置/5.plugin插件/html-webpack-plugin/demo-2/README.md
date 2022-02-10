# plugin 插件

## html-webpack-plugin 插件

### demo 2: 多个入口文件

  * 说明
    - 默认入口文件: src/index.js
    - 默认输出文件: dist/main.js
    - 未设置`template`参数时默认自动生成一个`index.html`文件, 所有`js`都将自动引入到这个`html`文件中

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
      const HtmlWebpackPlugin = require('html-webpack-plugin')
      module.exports = {
        mode: 'development',
        entry: {
          one: './src/one/index.js',
          two: './src/two/index.js'
        },
        output: {
          filename: 'a_js/[name].[chunkhash:8].js'
        },
        plugins: [
          new HtmlWebpackPlugin()
        ]
      }
    ```

  4. 打包

    ```
      npm run build
    ```


