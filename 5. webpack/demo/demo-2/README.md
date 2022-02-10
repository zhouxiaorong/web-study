# 初识 webpack 配置

## 运行
  - 安装插件
    ```
      npm install
    ```
  - 开发环境运行
      ```
        npm run start
      ```
  - 打包 -> 默认模式 -> production
    ```
      npm run default
    ```
  - 打包 -> evelopment 开发模式
    ```
      npm run dev
    ```
  - 打包 -> production 生产模式
    ```
      npm run prod
    ```

## 开发
  1. 初始化 `webpack` 配置清单 `package.json`
      ```
        npm init -y  
      ```  
  2. 在项目里安装 `webpack`、`webpack-cli`、`webpack-dev-server`
      ```
        npm install webpack@4.15.1 webpack-cli@3.1 webpack-dev-server@3.1 --save-dev
      ```
  3. 修改 `package.json` 文件
      ```
        {
          "scripts": {
            "default": "webpack",
            "dev": "webpack --config config/webpack.config.dev.js",
            "prod": "webpack --config config/webpack.config.prod.js",
            "start": "webpack-dev-server --config config/webpack.config.server.js"
          }
        }
      ```
  4. 新增 `index.html`文件 
      ``` index.html
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
          </head>
          <body>
            <script src="./dist/index.js"></script>
          </body>
          </html>
      ```
  4. 新增 `index.js` 文件  
      ``` index.js
        document.write("hello world")
      ```
  5. 新增 `webpack.config.js` 配置文件
      ```
        module.exports = {
          mode: 'development',
          entry: {
            index: './src/index.js'
          },
          output: {
            filename: '[name].[chunkhash:8].js',
          }
        };
      ```

## 笔记
  - 默认值
    + entry 入口文件默认为 src/index.js
    + output 输出文件，未设置 entry 入口文件时：dist/main.js，设置时：entry 入口文件时默认：dist/entry中的key值.js
    + mode 模式默认为 production 生产模式  
  - webpack 默认配置文件地址为与 package.json 同级目录下的 webpack.config.js 文件

