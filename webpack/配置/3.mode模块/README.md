# mode模块

  * 说明：  
      - 提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。
      - 只设置 NODE_ENV,则不会自动设置 mode
      - 默认 `production` 开发模式

## 目录
  - [在 `package.json -> scripts` 命令行中配置](./commandLine/README.md)
  
  - [`development` 模式实例](./development/README.md)

  - [`production` 模式实例](./production/README.md)

## 值说明
  |值           |说明|
  |:------------|:-----|
  |`production`   |压缩模式，被压缩的代码，默认值|
  |`development`  |开发模式，不压缩的代码|
  |`none`         |退出任何默认优化选项|

## 在配置文件 `webpack.config.js` 中提供 `mode` 选项
  ``` webpack.config.js
    module.exports = {
      mode: 'development'
    }
  ```

## 在 `package.json -> scripts` 命令行中配置
  ```
    {
      "scripts": {
        "build": "webpack",
        "dev": "webpack --mode=development",
        "prod": "webpack --mode production",
      },
    }
  ```