# webpack 配置 Loader
  * 说明
    - 预处理文件  
      就是通过使用不同的Loader，webpack可以把不同的静态文件都编译成js文件，比如css,sass,less,ES6/7,vue,JSX等。
    - 打包静态资源

## 目录
  - [plugin插件](#plugin插件)
    + [`html-webpack-plugin` 在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中](#htmlwebpackplugin)
    + [`clean-webpack-plugin` 自动清除上一次打包的dist文件](#CleanWebpackPlugin)
 
## plugin插件
  * 说明
    - 可以在webpack运行到某个时刻的时候，帮你做一些事情
    - 使用plugins让打包更便捷
### HtmlWebpackPlugin

  [⬆️ 返回顶部](#目录)

### CleanWebpackPlugin
  - 说明
    + 自动清除上一次打包的dist文件
  - 安装`clean-webpack-plugin`
    ```
      npm i clean-webpack-plugin -D
    ```
  - webpack.config.js
    ```
      const CleanWebpackPlugin = require('clean-webpack-plugin')
      const HtmlWebpackPlugin = require('html-webpack-plugin')
      module.exports = {
        plugins: [
          new HtmlWebpackPlugin({
            // 在打包之后，以.html为模板，把打包生成的js自动引入到这个html文件中
            template: 'src/ndex.html'
          }),
          // 在打包之前，可以删除dist文件夹下的所有内容
          new CleanWebpackPlugin(['dist'])
        ]
      }
    ```

  [⬆️ 返回顶部](#目录)

## entry与output的基础配置
### 在打包多入口文件时的配置
  ```
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    const CleanWebpackPlugin = require('clean-webpack-plugin')
    module.exports = {
      entry: {
        main: './src/main.js',
        index: './src/index.js'
      },
      output: {
        // 将注入到html中的js文件前面加上地址
        publicPath: 'http://www.github.com',
        path: path.resolve(__dirname, 'dist')
        filename: '[name].js'
      },
      plugins: [
        //在打包之后，以.html为模板，把打包生成的js自动引入到这个html文件中
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        }),
        // 在打包之前，可以删除dist文件夹下的所有内容
        new CleanWebpackPlugin(['dist'])
      ]
    }
  ```

  [⬆️ 返回顶部](#目录)
  
###
  
  
  
  [⬆️ 返回顶部](#目录)












    








































































