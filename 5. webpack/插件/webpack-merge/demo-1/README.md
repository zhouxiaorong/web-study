# webpack 插件 

## webpack-meger

### demo-1: 初识
  
  - 说明

  1. 初始化生成 `package.json` 文件
    ```
      npm init -y
    ```

  2. 安装插件`webpack`、`webpack-cli`、`copy-webpack-plugin`
    ```
      npm i webpack@4.15.1 webpack-cli@3.1 webpack-merge -D
    ```
    
  3. 新增 `webpack.config.js` 文件
    ```
      const merge = require('webpack-merge')

      const exports1 = {
        mode: 'development',
        entry: {
          index: './src/index.js'
        }
      }
      const exports2 = {
        entry: {
          index: './src/index3.js',
          index2: './src/index2.js'
        },
        output: {
          filename: '[name].[chunkhash:8].js'
        }
      }
      module.exports = merge(
        exports1,
        exports2
      )
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


