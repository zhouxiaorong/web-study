# plugin 插件

## html-webpack-plugin 插件

### demo 4: 参数 `meta` 例子

  * 说明
    - 值为`true`时将唯一的`webpack`编译哈希值附加到所有包含的脚本和CSS文件中
    - 在链接后台加`?`以及20位的哈希值（生产相应的版本号）
    - 对于清除缓存很有用

  1. 初始化生成 `package.json` 文件
      ```
        npm init -y
      ```

  2. 安装插件`webpack`、`webpack-cli`、`html-webpack-plugin`
      ```
        npm i webpack@4.15.1 webpack-cli@3.1 webpack-dev-server@3.1 html-webpack-plugin -D
      ```

  3. 修改 `package.json` 文件
      ```
        {
          "scripts": {
            "build": "webpack"
          }
        }
      ```

  4. 新增 `webpack.config.js` 文件
      ```
        const HtmlWebpackPlugin = require('html-webpack-plugin')

        module.exports = {
          mode: 'development',
          output: {
            filename: 'js/[name].[chunkhash:8].js'
          },
          plugins: [
            new HtmlWebpackPlugin({
              hash: true
            })
          ]
        }
      ```

  5. 打包

    ```
      npm run build
    ```
