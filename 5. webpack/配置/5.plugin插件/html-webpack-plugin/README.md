# plugin 插件

- 项目地址：https://github.com/ampedandwired/html-webpack-plugin
- 安装命令：`npm install html-webpack-plugin --save-dev`

[README](https://github.com/jantimon/html-webpack-harddisk-plugin)。

## 整合 DllPlugin/DllReferencePlugin
- [Usage with DLLs](https://github.com/ampedandwired/html-webpack-plugin/issues/194)
- [add-asset-html-webpack-plugin](https://github.com/simenb/add-asset-html-webpack-plugin)

## 高级配置
为了允许其他插件修改 HTML，html-webpack-plugin 在构建过程中会执行下列事件。

异步
- html-webpack-plugin-before-html-generationtags
- html-webpack-plugin-before-html-processing
- html-webpack-plugin-alter-asset-
- html-webpack-plugin-after-html-processing
- html-webpack-plugin-after-emit

同步
- html-webpack-plugin-alter-chunks


## 增强插件
- [add-asset-html-webpack-plugin](https://github.com/simenb/add-asset-html-webpack-plugin)

## 参考文献
- [Webpack HTML plug-in in a Nutshell](http://www.jonathan-petitcolas.com/2016/01/23/webpack-html-plugin-in-a-nutshell.html)
- [webpack 插件： html-webpack-plugin](http://www.cnblogs.com/haogj/p/5160821.html)

## 目录

### 1.1 `html-webpack-plugin` demo 目录
  - [demo 1: 参数 `title`、`filename` 的使用](./demo-1/README.md) 

  - [demo 2: 参数 `template` 的使用](./demo-2/README.md)

  - [demo 3: 参数 `chunks`、`excludeChunks` 的使用 - 多个入口文件](./demo-3/README.md) 

  - [demo-4: 参数 `publicPath` 的使用](./demo-4/README.md)

  - [demo-5: 参数 `publicPath` 的使用](./demo-5/README.md)
  
  - [demo-6: 参数 `hash` 的使用](./demo-6/README.md)

  - [demo-7: 参数 `base` 的使用](./demo-7/README.md)

  - [demo-8: 参数 `meta` 的使用](./demo-8/README.md)
  
  - [demo-9: 参数 `inject`、`scriptLoading` 的使用](./demo-9/README.md)

  - [demo-10 参数 `favicon` 的使用](./demo-10/README.md)

  - [demo-11 参数 `templateContent` 的使用](./demo-11/README.md)
  
  - [demo-12 参数 `templateParameters` 的使用](./demo-12/README.md)
  
  - [demo-13 参数 `minify` 的使用](./demo-13/README.md)

### 1.2 `html-webpack-plugin` 插件目录
  - [`title`: html文档标题](#1、title)

  - [`filename`: html文件名](#2、filename)

  - [`template` : 模板文件的地址](#3、template)

  - [`chunks`: 指定对应的要引用的入口文件](#4、chunks)

  - [`excludeChunks`: 设置不需要引用的入口文件](#5、excludechunks)
  
### 1.3 `html-webpack-plugin` 支持插件目录

  - [三、`html-webpack-plugin`支持插件](#html-webpack-plugin支持插件)

## `html-webpack-plugin` 插件作用
    1. 在打包结束后，会创建一个 `HTML` 页面文件到你的输出目录
    2. 将 `webpack` 打包生成的 `chunk` 文件自动引入到 `HTML` 中

## `html-webpack-plugin`插件安装
    ```
      npm i html-webpack-plugin -D
    ```

## `html-webpack-plugin` 插件参数说明

### 1、title
  * 类型: 
      String
  * 默认: 
      Webpack App
  * 说明: 
      - 用于生成的`HTML`文档的标题
      - 用于无指定`html`模板时默认自动生成`index.html`文件中的文档标题`title`内容
  * demo
    - [demo 1: 参数 `title`、`filename` 的使用](./demo-1/README.md) 
  * 在`html`模板文件中使用
    ```
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <title><%= htmlWebpackPlugin.options.title %></title>
      </head>
      <body></body>
      </html>
    ```

  [⬆️ 返回顶部](#目录)
 
### 2、filename
  * 类型: 
      String
  * 默认: 
      index.html
  * 说明: 
      - 根据模板文件生成的`html`的文件名
      - 可以设置将`html`文件打包在指定的子目录中，例：
        ```
          const HtmlWebpackPlugin = require('html-webpack-plugin')
          module.exports = {
            plugin: [
              new HtmlWebpackPlugin({
                filename: 'html/admin.html'
              })
            ]
          }
        ```
  * demo
    - [demo 1: 参数 `title`、`filename` 的使用](./demo-1/README.md) 

  [⬆️ 返回顶部](#目录)

### 3、template
  * 类型: 
      String
  * 默认
      src/index.js
  * 模板类型
    - 可以是任意类型的模板，比如 html, jade, ejs, hbs, 等等
    - 使用自定义的模板文件时，需要提前安装对应的 loader， 否则webpack不能正确解析
  * 说明: 
      - 模板文件的地址
      -	`webpack`模板的相对或绝对路径。
      - 设置模板，把打包生成的`js`自动引入到这个`html`文件中
      - 无该参数时默认自动生成一个`index.html`文件
  * 配置`webpack.config.js`案例
    ```
      const HtmlWebpackPlugin = require('html-webpack-plugin')
      module.exports = {
        plugins: [
          new HtmlWebpackPlugin({
            template: './src/index.html'
          })
        ]
      }
    ```
  * demo
    - [demo 2: 参数 `template` 的使用](./demo-2/README.md)

  [⬆️ 返回顶部](#目录)

### 4、chunks
  * 类型: Array
  * 默认: 全部引用（会在生成的`html`文件中引用所有的`js`文件）
  * 说明: 
      - 指定对应的要引用的入口文件
      - 设置将要在`html`文件引用的`js`文件（`entry`入口）
  * `webpack.config.js`配置
    ```
      const HtmlWebpackPlugin = require('html-webpack-plugin')
      module.exports = {
        entry: {
          one: './src/one/index.js',
          two: './src/two/index.js',
          three: './src/three/index.js'
        },
        plugins: [
          new HtmlWebpackPlugin({
            // 将 one two 入口文件生成的`js`文件引用到当前`html`文件中
            chunks: ['one', 'two']
          })
        ]
      }
    ```
  * demo
    - [demo 3: 参数 `chunks`、`excludeChunks` 的使用 - 多个入口文件](./demo-3/README.md) 
   
  [⬆️ 返回顶部](#目录)

### 5、excludeChunks
  * 类型: Array.<string>
  * 默认: ''
  * 说明: 
      - 设置不在`html`中引用的`js`文件（`entry`入口）
  * `webpack.config.js`配置
    ```
      const HtmlWebpackPlugin = require('html-webpack-plugin')
      module.exports = {
        entry: {
          one: './src/one/index.js',
          two: './src/two/index.js',
          three: './src/three/index.js'
        },
        plugins: [
          new HtmlWebpackPlugin({
            // 将除 one 之外的入口文件生成的`js`文件引用到当前`html`文件中
            excludeChunks: ['one']
          })
        ]
      }
    ```
  * demo
    - [demo 3: 参数 `chunks`、`excludeChunks` 的使用 - 多个入口文件](./demo-3/README.md) 

  [⬆️ 返回顶部](#目录)

### 6、publicPath
  * 类型: 
      String|'auto'
  * 默认: 
      'auto'
  * 说明: 
      - 用于脚本和链接标签的`publicPath`
      - 默认或值为'auto'时路径为以打包路径为起点的路径
      - 会在`html`文件中引用的文件的路径前添加`publicPath`参数的值
      - `publicPath`参数无值时会添加
  * demo
      - [demo-4 参数 `publicPath` 的使用](./demo-4/README.md)
      - [demo-5 参数 `publicPath` 的使用](./demo-5/README.md)

  [⬆️ 返回顶部](#目录)

### 7、hash
  * 类型: Boolean
  * 默认: false
  * 说明: 
      - 值为`true`时将唯一的`webpack`编译哈希值附加到所有包含的脚本和CSS文件中。
      - 在链接后台加`?`以及20位的哈希值（生产相应的版本号）
      - 对于清除缓存很有用
  * demo
      - [demo-6 参数 `hash` 的使用](./demo-6/README.md)

  [⬆️ 返回顶部](#目录)

### 8、base
  * 类型: Object|String|false
  * 默认: false
  * 说明: 
      - 注入base标签。例如base: "https://example.com/path/page.html
  * 值说明
    - String: href 参数值
        - base: 'url'
    - Object: href、targer参数值
        - base: {
            // 规定页面中所有相对链接的基准
            href: 'url',
            // 在何处打开页面中所有的链接。
            target: ' _blank / _parent / _self / _top / framename '
          }
  * demo
    - [demo-7 参数 `base` 的使用](./demo-7/README.md)

  [⬆️ 返回顶部](#目录)
     
### 9、meta
  * 类型: 
      Object/Array
  * 默认: 
      {}/[{},{}]
  * 说明: 
      - 允许注入meta-tags。
      - 例如meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
  * demo
    - [demo-8 参数 `meta` 的使用](./demo-8/README.md)

  [⬆️ 返回顶部](#目录)
   
### 10、inject
  * 类型: 
      Boolean|String
  * 默认: 
      true
  * 说明: 
      `true || 'head' || 'body' || false` 将所有资产注入给 `template` 或 `templateContent`   
  * 值说明
      true: 默认, 根据 `scriptLoading` 选项将其添加到头部(`defer`)/身体(`blocking`，默认)
      false: 禁用自动注射
      'head': 将所有 `javascript` 资源放置在 `head` 元素中
      'body': 将所有 `javascript` 资源放置在 `body` 元素的底部
  * demo
    - [demo-9 参数 `inject`、`scriptLoading` 的使用](./demo-9/README.md)


  [⬆️ 返回顶部](#目录)

### 11、scriptLoading
  * 类型: 
      'blocking'|'defer'
  * 默认: 
      'blocking'
  * 说明: 
      - 现代浏览器支持非阻塞javascript加载（'defer'），以提高页面启动性能
      - 值为`defer`时会在`script`引入标签中添加`defer`属性
      - 值为`blocking`时，当`inject`值为`head`时，将脚本放置在 `head` 元素中；否则将脚放置在`body`元素中
      - 值为`defer`时，当`inject`值为`body`时，将脚本放置在 `body` 元素中；否则将脚放置在`head`元素中
  * demo
    - [demo-9 参数 `inject`、`scriptLoading` 的使用](./demo-9/README.md)

  [⬆️ 返回顶部](#目录)
   
### 12、favicon
  * 类型: 
      String
  * 默认: 
      ''
  * 说明: 
      - 将给定的图标图标路径添加到输出HTML
  * demo 
      - [demo-10 参数 `favicon` 的使用](./demo-10/README.md)

  [⬆️ 返回顶部](#目录)
    
### 13、templateContent
  * 类型: 
      string|Function|false
  * 默认: 
      false
  * 说明: 
      - 不能与`template`共存
      - 用于代替 `template` 提供内联模板,可以指定模板的内容
      - 配置值为`function`时，可以直接返回`html`字符串，也可以异步调用返回`html`字符串。
  * demo 
      - [demo-11 参数 `templateContent` 的使用](./demo-11/README.md)

  [⬆️ 返回顶部](#目录)
      
### 14、templateParameters
  * 类型: 
      Boolean|Object|Function
  * 默认: 
      false
  * 说明: 
      - 允许覆盖模板中使用的参数
  * demo 
      - [demo-12 参数 `templateParameters` 的使用](./demo-12/README.md)

  [⬆️ 返回顶部](#目录)
   
### 15、minify
  * 类型: Boolean|Object
  * 默认: `mode`模块是`production`时值为`true`,否则为`false`
  * 说明: 
      - 对`html`文件进行压缩
      - 控制是否以及以何种方式最小化输出
      - 内部集成了[html-minifier](https://github.com/kangax/html-minifier#options-quick-reference) ,这个压缩选项同`html-minify`的压缩选项完全一样
  * 属性值
      - false: 不对生成的`html`文件进行压缩
      - Object: 一个压缩选项
  * demo 
      - [demo-13 参数 `minify` 的使用](./demo-13/README.md)


  [⬆️ 返回顶部](#目录)
    
### 16、cache?
  * 类型: Boolean
  * 默认: true
  * 说明: 
      - 只有在内容变化时才重新打包生成一个新的文件。

  [⬆️ 返回顶部](#目录)

### 17、showErrors
  * 类型: Boolean
  * 默认: true
  * 说明: 
      - 错误详细信息将写入HTML页面
      - 如果`webpack`编译出现错误，`webpack`会将错误信息包裹在一个`pre`标签内，属性的默认值为`true` ，也就是显示错误信息。

  [⬆️ 返回顶部](#目录)

### 18、xhtml
  * 类型: Boolean
  * 默认: false
  * 说明: 
      - 值为true时将`link`标签呈现为自动关闭（符合XHTML）
      - 如果为true ,则以兼容 xhtml 的模式引用文件。

  [⬆️ 返回顶部](#目录)
  
### 19、chunksSortMode?
  * 类型: String|Function
  * 默认: auto
  * 说明: 
      - 设置`script`标签的引用顺序
      - 允许控制在将块包含到HTML中之前应如何对其进行排序
  * 值说明  
      - 'none': 不排序，`chunks`属性顺序无效，按照`entry`入口的顺序排序
      - 'auto': 基于chunk的id进行排序(按插件内置的排序方式)
      - 'manual': 按照`chunks`属性的顺序进行排序，若无则按照`entry`入口的顺序排序
      - {Function}: 指定具体的排序规则
  * demo

  [⬆️ 返回顶部](#目录)

## `html-webpack-plugin` 支持插件

### mini-css-extract-plugin
  * 说明 
    - 如果在`webpack`的输出中有任何`CSS`资产（例如，用`mini-css-extract-plugin`提取的`CSS`），那么这些资产将包含<link>在HTML头中。

  [⬆️ 返回顶部](#目录)



    