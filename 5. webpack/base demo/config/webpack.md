
### 目录文件说明
  ├──
  │   ├── 
  │   └── 
  ├── 

### webpack配置文件 - context : 
  * 说明
      解析配置中的 entry loader plugins 中的相对路径（除了output）
      默认值是CWD。推荐将 context 修改为项目的根目录，这样可以使得项目配置独立于CWD。
  * 用法
      module.exports = {
        context: __dirname,
        entry: "./src/index.js"
      };

### webpack配置文件 - entry : 入口起点 
  * 说明
      需要打包的文件，传入文件路径
  * 单个入口语法简写
      module.exports = {
        entry: './src/js/index.js'
      }
  * 多个需要打包的文件
      module.exports = {
        entry: {
          index: './src/js/index.js',
          index2: './src/js/index2.js' 
        }
      }
  
### webpack配置文件 - output : 输出
  * 说明
      配置 output 选项可以控制 webpack 如何向硬盘写入编译文件。
      告诉webpack怎样存储输出结果以及存储到哪里
  * 注意事项
      1.即使可以存在多个入口起点，但只指定一个输出配置。
      2.多个入口起点应使用占位符(substitutions)来确保每个文件具有唯一的名称（例： [name]）
      3.在 webpack 中配置 output 属性的最低要求是，将它的值设置为一个对象，包括 filename 、 path 属性
  * 用法
      const path = require('path')
      module.exports = {
        output: {
          filename: '[name].[chunkhash:8].js',
          path: path.resolve(__dirname, '../dist'),
          publicPath: dev ? './' : '/'
        },
      }
  * 参数说明
      filename: 输出文件的文件名
      path: 所有输出文件的目标路径，打包后文件在硬盘中的存储位置
            是 webpack 构建后输出构建结果的目录，所有文件的输出的路径，必须是绝对路径，
            仅仅告诉 webpack 结果存储在哪里
            比如：output 输出的 js, url-loader 解析的图片，HtmlWebpackPlugin 生成的 html 文件，都会存放在以 path 为基础的目录下
      publicPath: 资源路径 用来指明相对于服务器根路径静态资源存在的位置
                  在生产模式编译下结合一些别的插件替换诸如css中backgroud-image的url的路径
                  输出解析文件的目录，指定资源文件引用的目录 ，打包后浏览器访问服务时的 url 路径中通用的一部分。
                  并不会对生成文件的路径造成影响，主要是对你的页面里面引入的资源的路径做对应的补全，
                  被许多 webpack 的插件用于在生产模式下更新内嵌到 css、html 文件里的 url 值
                  比如：css文件里面引入的图片
  * filename - 通过哈希值解决js缓存问题（在没有修改js要打包的内容时，不会重新打包一个js文件）
      module.exports={
          output:{
              filename:'[name].[chunkhash:8].js',// 增加8位的哈希值: .[chunkhash:8]
          },
      }
  * path - 目标输出目录问题
      配置文件所在目录
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
  * publicPath - 

### webpack配置文件 - mode : 模块
  * 说明
      提供 mode 配置选项，告知 webpack 使用相应模式的内置优化。
  * 代码：
      module.exports = {
        mode: 'development'
      }
  * 参数值说明
      development: 开发模式，不压缩的代码
      production: 压缩模式，被压缩的代码
      none: 退出任何默认优化选项

### webpack配置文件 - Loaders : 加载器
  * 说明
  * 代码
  * 用法
  * 参数说明
  * 注意事项

### webpack配置文件 - plugins : 插件

### webpack配置文件 - module.rules.use.options.limit - url-loader中的limit: 
  * 代码 
      limit: number, 
  * 说明
      1. 低于 number 的图片进行 base64 编码，以减少 http 请求 
      2. number 单位为 bytes
      3. 1 kb == 1024 bytes
      4. 不设置 limit 时 / 值为 0 时所有图片均会进行 base64 编码
  * 例
      设置 8 kb 之内的图片才编码
      module.exports = {
        module: {
          rules:[
            {
              test: /\.(png|jpg)$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192
                  }
                }
              ]
            }
          ]
        }
      };

### webpack配置文件 - : 
### webpack配置文件 - : 
### webpack配置文件 - : 
### webpack配置文件 - : 
### webpack配置文件 - : 
  * 说明
  * 代码
  * 用法
  * 参数说明
  * 注意事项

### webpack 插件 - webpack webpack-cli : 必须
  * npm 安装插件
      npm install --save-dev webpack@4.15.1 webpack-cli
  * 说明
      webpack-cli: 打包

### webpack 插件 - clean-webpack-plugin : 删除输出目录之前旧的文件
  * npm 安装插件
      npm install --save-dev clean-webpack-plugin
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

### webpack 插件 - css-loader style-loader : 输出 css 文件
  * 说明
      Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换
      如果需要在应用中添加 css 文件，就需要使用到 css-loader 和 style-loader
  * 安装插件
      npm install --save-dev css-loader style-loader
  * 插件说明
      css-loader: 遍历 CSS 文件，然后找到 url() 表达式然后处理他们
      style-loader: 把原来的 CSS 代码插入页面中的一个 style 标签中（在 html 中以 style 的方式嵌入 css）
  * 修改 webpack.config.js 文件
      module.exports = {
        module: {
            loaders: [
                { test: /\.css$/, loader: "style-loader!css-loader" }
            ]
        }
      }


### webpack 插件 -  : 
  * 说明
  * npm install --save-dev 
  * 修改 webpack.config.js 文件
          

### 区别
  * npm: --save-dev 、 -save
    -save: 记录到 dependencies 对象中
            浏览器中执行的 js 用到的包存到 dependencies（比如 jQuery 等）
    --save-dev: 安装的包和版本号记录到 package.json 中的 devDependencies 对象中
           打包工具和测试工具用到的包使用 --save-dev 存到 devDependencies （比如 eslint、webpack）    
    
### 插件说明
  * glob
  * url-loader
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
      

  
