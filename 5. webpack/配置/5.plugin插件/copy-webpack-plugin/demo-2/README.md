# plugin 插件

## copy-webpack-plugin 插件

### demo 2: webpack 5 + copy-webpack-plugin 7.0.0 / 6.4.1
  * 说明

  1. 初始化生成 `package.json` 文件
    ```
      npm init -y
    ```

  2. 安装插件`webpack`、`webpack-cli`、`copy-webpack-plugin`
    ```
      npm i webpack@4.15.1 webpack-cli@3.1 copy-webpack-plugin@6 -D
    ```
    
  3. 新增 `webpack.config.js` 文件
    ```
      const CopyWebpackPlugin = require("copy-webpack-plugin");

      module.exports = {
        plugins: [
          new CopyWebpackPlugin({
            patterns: [
              {
                from: 'src/index.html',
                to: ''
              }
            ]
          })
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


