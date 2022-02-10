# mode 模块 

## development模式
1. 初始化生成 `package.json` 文件
  ```
    npm init -y
  ```

2. 安装插件 `webpack`、` webpack-cli`
  ```
    npm i webpack@4.15.1 webpack-cli@3.1 -D
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
    module.exports = {
      mode: 'development'
    }
  ```

5. 打包
  ```
    npm run build
  ```