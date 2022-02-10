# plugin 插件

## html-webpack-plugin 插件

### demo 4: 参数 `publicPath` 例子

  * 说明
    - 用于脚本和链接标签的`publicPath`
    - 默认或值为'auto'时路径为以打包路径为起点的路径
    - 会在`html`文件中引用的文件的路径前添加`publicPath`参数的值

  1. 初始化生成 `package.json` 文件
      ```
        npm init -y
      ```

  2. 安装插件`webpack`、`webpack-cli`、`html-webpack-plugin`
      ```
        npm i webpack@4.15.1 webpack-cli@3.1 html-webpack-plugin -D
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
        const HtmlWebpackPlugin = require('html-webpack-plugin')

        module.exports = {
          mode: 'development',
          output: {
            filename: 'js/[name].[chunkhash:8].js'
          },
          plugins: [
            new HtmlWebpackPlugin({
              title: '默认',
              filename: 'html/index-1.html'
            }),
            new HtmlWebpackPlugin({
              filename: 'html/index-2.html',
              title: 'http://www.zxr.cn',
              publicPath: 'http://www.zxr.cn'
            }),
            new HtmlWebpackPlugin({
              filename: 'html/index-3.html',
              title: './',
              publicPath: './'
            }),
            new HtmlWebpackPlugin({
              filename: 'html/index-4.html',
              title: '/',
              publicPath: '/'
            }),
            new HtmlWebpackPlugin({
              filename: 'html/index-5.html',
              title: 'auto',
              publicPath: 'auto'
            }),
            new HtmlWebpackPlugin({
              filename: 'html/index-6.html',
              title: 'http://www.zxr.cn/',
              publicPath: 'http://www.zxr.cn/'
            }),
          ]
        }
      ```
  
  5. 打包
    ```
      npm run build
    ```
