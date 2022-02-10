# plugin 插件

## copy-webpack-plugin 插件

### demo 1: 初识 webpack 4 + copy-webpack-plugin 4.6.0

  1. 初始化生成 `package.json` 文件
    ```
      npm init -y
    ```

  2. 安装插件`webpack`、`webpack-cli`、`copy-webpack-plugin`
    ```
      npm i webpack@4.15.1 webpack-cli@3.1 copy-webpack-plugin@4.6 -D
    ```
    
  3. 新增 `webpack.config.js` 文件
    ```
      const CopyWebpackPlugin = require("copy-webpack-plugin");

      module.exports = {
        plugins: [
          new CopyWebpackPlugin([
            {
              from: 'src',
              to: '',
              // ** 两个星号的意思是在当前路径
              ignore: [
                '**/*.js'
              ]
            }
          ])
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


