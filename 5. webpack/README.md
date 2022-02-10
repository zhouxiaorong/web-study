# webpack# plugin 插件

## clean-webpack-plugin
  - 安装命令: 
    ```
      npm install webpack@4.15.1 webpack-cli@3.1 webpack-dev-server@3.1 --save-dev
    ```

## 目录
  * [`webpack.config.js` 配置](#webpack配置)  
    - [mode 模块](./配置/3.mode模块/README.md)  
    - [output 输出](#output输出)  
    - [devServer](./devServer/README.md)

## 文档
  E:\a_github\笔记\76MB WebpackStudyDemo\README.md

### 实例
  - [Webpack4 渐进式教程](https://github.com/ITxiaohao/webpack4-learn)

### 教程
  - [webpack实战](https://segmentfault.com/a/1190000015020658)
  - [24 个实例入门并掌握「Webpack4」(一)](https://juejin.im/post/5cae0f616fb9a068a93f0613#heading-10)
  - [24 个实例入门并掌握「Webpack4」(二)](https://juejin.im/post/5cb01ab0e51d456e3428c0ca)
  - [24 个实例入门并掌握「Webpack4」(三)](https://juejin.im/post/5cb01f32e51d456e5e035ef7)

## webpack配置


  [⬆️ 返回顶部](#目录)

### entry入口文件
  * 说明
    + 打包项目的入口文件
  * 默认值:   src/index.js

### output输出  
  * 说明  
    - 打包项目的输出文件
    - 未设置 filename 输出文件名时默认输出文件名为 main.js
  * 默认值  
    - 未设置 entry 入口文件时：dist/main.js，
    - 设置 entry 入口文件时：dist/entry中的key值.js
#### filename
  * 说明
    - 自定义打包输出文件名
#### path
  * 说明
    - 输出文件的绝对路径
    
#### publicPath
  * 说明
    基础的路径，它会为我们所有的资源都应用上 publicPath 设置的值，然后再接上资源对应转换出来的路径

  [⬆️ 返回顶部](#目录)

### 其他参数说明
  * [name]
    entry 中的 key 值

