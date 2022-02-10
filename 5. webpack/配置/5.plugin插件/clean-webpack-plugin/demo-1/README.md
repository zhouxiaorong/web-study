# plugin 插件

## clean-webpack-plugin 插件

### demo 1: 初识
  * 说明

  1. 初始化生成 `package.json` 文件
    ```
      npm init -y
    ```

  2. 安装插件`webpack`、`webpack-cli`、`clean-webpack-plugin`
    ```
      npm i webpack@4.15.1 webpack-cli@3.1 clean-webpack-plugin -D
    ```
    
  3. 新增 `webpack.config.js` 文件
    ```
      const CleanWebpackPlugin = require('clean-webpack-plugin');
      module.exports = {
        plugins: [
          new CleanWebpackPlugin()
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


