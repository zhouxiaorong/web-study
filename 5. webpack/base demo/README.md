https://github.com/wallstreetcn/webpack-and-spa-guide
https://v4.webpack.docschina.org/

### 目录文件说明
  ├── dist                      打包输出目录，只需部署这个目录到生产环境
  ├── config              // 项目开发环境配置
  │   ├── webpack.config.js            webpack 配置文件
  ├── node_modules              npm 安装的依赖包都在这里面
  ├── src                       源代码
  │   ├── components            可以复用的模块放在这里面
  │   ├── index.html            入口 html
  │   ├── index.js              入口 js
  │   ├── shared                公共函数库
  │   └── views                 页面放这里
  ├── package.json              项目配置信息，包依赖信息等

### npm
  1. 本地安装 webpack 
        * npm install webpack@4.15.1 --save-dev
          （--save-dev是本地安装）

  2. 查看 webpack 版本 
        * webpack -v
          （查看 webpack 版本号，若出现版本号，说明安装成功）

  3. 创建package.json文件 
      * npm init -y
        （在项目目录中自动生成 package.json 
  4. 通过 webpack 插件 clean-webpack-plugin 删除输出目中之前旧的文件
      * npm install --save-dev clean-webpack-plugin
      * 修改 webpack.config.js 文件
          用法一
              const {CleanWebpackPlugin} = require('clean-webpack-plugin');
              module.exports={
                  plugins:[
                      new CleanWebpackPlugin()        
                  ]
              }
          用法二
              const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin ;
              module.exports={
                  plugins:[
                      new CleanWebpackPlugin()        
                  ]
              }

### webpack.config.js
  * entry 入口起点 - 单个/多个入口文件
      需要打包的文件，传入文件路径
        单个入口语法简写
          module.exports = {
            entry: './src/js/index.js'
          }
        多个需要打包的文件
          module.exports = {
            entry: {
              index: './src/js/index.js' 
              index2: './src/js/index2.js' 
            },
          }
  * output 输出
      配置 output 选项可以控制 webpack 如何向硬盘写入编译文件。
      注意: 
        1.即使可以存在多个入口起点，但只指定一个输出配置。
        2.多个入口起点应使用占位符(substitutions)来确保每个文件具有唯一的名称（例： [name]）
        3.在 webpack 中配置 output 属性的最低要求是，将它的值设置为一个对象，包括 filename 、 path 属性
      代码：
          const path = require('path')
          module.exports = {
            output: {
              filename: '[name].[chunkhash:8].js',
              path: path.resolve(__dirname, '../dist')
            },
          }
  * output - filename - JS缓存问题的处理
      通过哈希值解决JS缓存问题(在没有修改JS要打包的内容时，不会重新打包一个JS文件)，修改webpack.config.js文件，具体代码如下：
          module.exports={
              output:{
                  filename:'[name].[chunkhash:8].js',// 增加8位的哈希值: .[chunkhash:8]
              },
          }
  * output - path - 目标输出目录问题
      webpack.config.js 配置文件所在目录
          module.exports = {
            output: {
              path: __dirname + 'dist'
            },
          }
      调用 node.js 中的路径
          const path = require('path')
          module.exports = {
            output: {
              path: path.resolve(__dirname, '../dist')
            },
          }
  * mode 模块
      提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。
      代码：
        module.exports = {
          mode: 'development'
        }
      mode 值:
        development: 开发模式，不压缩的代码
        production: 压缩模式，被压缩的代码
        none: 退出任何默认优化选项
  * plugins - 删除输出目中之前旧的文件
      1.webpack 插件 clean-webpack-plugin 
          npm install --save-dev clean-webpack-plugin
      2.修改 webpack.config.js 文件
          const {CleanWebpackPlugin} = require('clean-webpack-plugin');// 选一
          const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;// 选一
          module.exports = {
            plugins:[
              new CleanWebpackPlugin()
            ]
          }
  * module - 输出 css 文件
      Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换
      如果需要在应用中添加 css 文件，就需要使用到 css-loader 和 style-loader
      * npm install css-loader
          css-loader 会遍历 CSS 文件，然后找到 url() 表达式然后处理他们
      * npm install style-loader
          style-loader 会把原来的 CSS 代码插入页面中的一个 style 标签中。
      * 修改 webpack.config.js 文件
          module.exports = {
            module: {
                loaders: [
                    { test: /\.css$/, loader: "style-loader!css-loader" }
                ]
            }
          }
          
### package.json
    "start": "webpack --config config/webpack.config.js"


### 插件说明
  * npm install 插件名 --save-dev 
      --save-dev: 本地安装
  
  * clean-webpack-plugin
        删除输出目中之前旧的文件
  * glob
  * url-loader
  * css-loader
        遍历 CSS 文件，找到 url() 表达式然后处理他们
  * style-loader
        把原来的 CSS 代码插入页面中的一个 style 标签中
  * webpack webpack-cli
        打包

  * eslint
        给项目加上语法报错和代码规范检查 (需要同时安装 eslint eslint-config-enough babel-eslint eslint-loader )
        安装 eslint 用来检查语法报错，当书写 js 时，有错误的地方会出现提示。
  * eslint-config-enough
        配置文件，它规定了代码规范，要使它生效，要在 package.json 中添加内容：
        {
          "eslintConfig": {
            "extends": "enough",
            "env": {
              "browser": true,
              "node": true
            }
          }
        }
  * babel-eslint
        eslint-config-enough 依赖的语法解析库，替代 eslint 默认的解析库以支持还未标准化的语法。比如 import()。
  * eslint-loader
        用于在 webpack 编译的时候检查代码，如果有错误，webpack 会报错。


  * optimize-css-assets-webpack-plugin: 压缩并优化 css 代码
      配置： 
        optimization: {
          minimizer: [new OptimizeCSSAssetsPlugin()];
        }
      安装
        npm install optimize-css-assets-webpack-plugin --save-dev
        npm install cssnano --save-dev
      使用
        * 普通压缩
            const optimizeCss = require('optimize-css-assets-webpack-plugin');
            plugins: [
                new optimizeCss()
            ]
        * 使用 cssnano 配置规则
            npm install cssnano --save-dev
            const optimizeCss = require('optimize-css-assets-webpack-plugin');
            plugins: [
                new optimizeCss({
                        cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
                        cssProcessorOptions: { 
                          discardComments: { removeAll: true } 
                        },
                        canPrint: true //是否将插件信息打印到控制台
                    })
            ]
      注意点：
        1. 默认使用了 cssnano 来作 css 优化
      优点：
        1. 压缩代码
        2. 删除代码中无用的注释
        3. 去除冗余的 css
        4. 优化 css 的书写顺序
        5. 优化代码 margin: 10px 20px 10px 20px; =>margin:10px 20px;
        6. 大大减小了 css 的文件大小
      

  

### 区别
  * --save-dev 、 -save
    -save: 记录到 dependencies 对象中
            浏览器中执行的 js 用到的包存到 dependencies（比如 jQuery 等）
    --save-dev: 安装的包和版本号记录到 package.json 中的 devDependencies 对象中
           打包工具和测试工具用到的包使用 --save-dev 存到 devDependencies （比如 eslint、webpack）


### npm err
  1. npm cache clean --force
  2. clean node_modules package-lock.json
  3. npm install


### package.json
  * devDependencies
      开发环境依赖
  * script 
      "stu1dev": "cross-env NODE_ENV=development webpack --config config/stu/webpack.config.1.js",
      "stu1prod": "cross-env NODE_ENV=production webpack --config config/stu/webpack.config.1.js",
      "dev": "cross-env NODE_ENV=development webpack --config config/webpack.config.js",
      "prod": "cross-env NODE_ENV=production webpack --config config/webpack.config.js"