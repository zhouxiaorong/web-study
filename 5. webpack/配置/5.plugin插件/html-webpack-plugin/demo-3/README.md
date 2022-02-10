# plugin 插件

## html-webpack-plugin 插件

### demo: 多个入口页面

  * 说明
    - 如果是多个`html`页面的话，就需要多次实例化`HtmlWebpackPlugin`

  1. 初始化生成 `package.json` 文件
      ```
        npm init -y
      ```

  2. 安装插件`webpack`、`webpack-cli`、`html-webpack-plugin`
      ```
        npm i webpack@4.15.1 webpack-cli@3.1 html-webpack-plugin -D
      ```

  3. 新增 `src/two/index.html` 文件 
      ```
      ```

  3. 新增 `src/one/index.js` 文件 
      ```
      ```

  3. 新增 `src/two/index.html` 文件 
      ```
      ```

  3. 新增 `src/one/index.js` 文件 
      ```
      ```

  . 新增 `webpack.config.js` 文件
  
    ```
      const HtmlWebpackPlugin = require('html-webpack-plugin')
      module.exports = {
        mode: 'development',
        entry: {
          one: './src/one/index.js',
          two: './src/two/index.js'
        },
        output: {
          filename: 'a_js/[name].[chunkhash:8].js'
        },
        plugins: [
          new HtmlWebpackPlugin({
            title: 'one html',
            filename: 'one.html',
            chunks: ['one'],
            template: 'src/one/index.html'
          }),
          new HtmlWebpackPlugin({
            // title: 'two html',
            filename: 'two.html',
            chunks: ['two'],
            template: 'src/two/index.html'
          })
        ]
      }
    ```

  4. 打包

    ```
      npm run build
    ```


