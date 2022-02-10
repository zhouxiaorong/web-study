# mode 模块 

## 在 `package.json -> scripts` 命令行中配置

1. 初始化生成 `package.json` 文件
  ```
    npm init -y
  ```

2. 安装插件 `webpack`、` webpack-cli`
  ```
    npm i webpack@4.15.1 webpack-cli@3.1 -D
  ```

3. 修改 `package.json` 文件
  * 说明
    - build: 默认模式
    - dev: 开发模式
    - prod: 生产模式  
    
  ```
    {
      "scripts": {
        "build": "webpack",
        "dev": "webpack -o dist/dev.js --mode=development",
        "prod": "webpack -o dist/prod.js --mode production"
      }
    }
  ```

4. 打包
  ```
    npm run build
  ```
