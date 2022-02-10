# 初识 webpack

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
            "default": "webpack index.js",
            "dev": "webpack index.js -o bundle_dev.js --mode development",
            "prod": "webpack index.js -o bundle_prod.js --mode production",
            "start": "webpack-dev-server index.js -o bundle.js --open"
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
            <script src="./bundle.js"></script>
          </body>
          </html>
      ```
  4. 新增 `index.js` 文件  
      ``` index.js
        document.write("hello world")
      ```

## 笔记
  - 入口文件必须
  - development: 开发模式 production 生产模式
  - webpack 中 mode 模式默认为 production
  - 不设置`-o 输出文件名`时，默认输出到 dist 文件夹下的 main.js 文件中
  - `webpack-dev-server` 设置 -o 文件夹名/文件名 无效，输出文件只能在当前文件夹下
