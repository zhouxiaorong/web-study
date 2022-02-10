# webpack 配置 Loader
  * 说明
    - 预处理文件  
      就是通过使用不同的Loader，webpack可以把不同的静态文件都编译成js文件，比如css,sass,less,ES6/7,vue,JSX等。
    - 打包静态资源

## 目录
  - [使用Loader打包静态资源](#使用loader打包静态资源)
    + [`file-loader` 加载图片文件](#加载图片文件)
    + [`file-loader` 为字体图标文件配loader](#为字体图标文件配loader)
    + [`url-loader` 将小图片转换成base64格式](#将小图片转换成base64格式)
    + [`css-loader`、`style-loader` 支持加载样式CSS文件](#支持加载样式css文件)
    + [`sass-loader`、`node-sass` 支持加载样式SASS文件](#支持加载样式sass文件)
    + [`postcss-loader`、` autoprefixer` 为CSS样式属性加不同浏览器的前缀](#为css样式属性加不同浏览器的前缀)

## 使用Loader打包静态资源

### 加载图片文件
  - 安装`file-loader` 
    解决CSS等文件中的引入图片路径问题
    ```
       npm install file-loader -D
    ```
  - 在`webpack.config.js`里添加`loader`配置
    ```
      module.exports = {
        //配置模块,主要用来配置不同文件的加载器
        module: {
          //配置模块规则
          rules: [
            {
              //正则匹配要使用相应loader的文件
              test: /\.(png|jpg|gif)$/, 
              use: [
                {
                   //要用到的loader
                  loader: 'file-loader',
                    options: {
                        //palceholder 占位符 （打包后的图片名字，后缀和打包的之前的图片一样）
                        name:'[name].[ext]',
                        //图片打包后的地址
                        outputPath: 'images/' 
                    },
                },
              ],
            },
          ],
        },
      };
    ```

  [⬆️ 返回顶部](#目录)

### 为字体图标文件配loader
  - 说明
    + 在 阿里巴巴矢量图标库中，把需要的字体图标下载到本地，解压
    + 将`iconfont.eot``iconfont.svg``iconfont.ttf``iconfont.woff`文件放入到项目中
    + 在 src 中新建一个放字体图标的文件夹 font。
    + 将iconfont.css文件拷贝到项目中，自己改一下引入字体图标的路径
  - 安装`file-loader`
    ```
      npm i file-loader -D
    ```
  - webpack.config.js
    ```
      module.exports = {
        module: {
          rules: {
            test: /\(eot|svg|ttf|woff)$/,
            use{
              loader: 'file-loader
            }
          }
        }
      }
    ```

  [⬆️ 返回顶部](#目录)

### 将小图片转换成base64格式
  - 安装`url-loader`  
    当图片小于limit的时候会把图片BASE64编码，大于limit参数的时候还是使用file-loader 进行拷贝
    ```
      npm install url-loader -D
    ```
  - 在`webpack.config.js`里添加`loader`配置
    ```
      module.exports = {
        module: {
          rules: [
            {
              test: /\.(png|jpg|gif|bmp/)$/i,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    name:'[name].[ext]',
                    outputPath: 'images/',
                    //小于8192b,就可以转化成base64格式。大于就会打包成文件格式
                    limit: 8192 
                  }
                }
              ]
            }
          ]
        }
      }
    ```

  [⬆️ 返回顶部](#目录)

### 支持加载样式CSS文件
  - 安装`css-loader`、`style-loader`
    ```
      npm install css-loader style-loader -D
    ```
  - 在`webpack.config.js`里添加 loader 配置
    ```
      module.exports = {
        modules: {
          rules: {
            // 匹配以`.css`为后缀的文件
            test: /\.css$/,
            /*
              loader 的执行顺序是从右到左，从下到上
              css-loader: 分析几个 css 文件之间的关系，最终合并为一个css
              style-loader: 在得到 css 生成的内容时，把其挂载到 html 的 head 里，成为内联样式
            */
            use: ['style-loader', 'css-loader']
          }
        }
      }
    ```

  [⬆️ 返回顶部](#目录)

### 支持加载样式SASS文件
  - 安装 `sass-loader`、`node-sass`
    ```
      npm install sass-loader node-sass -D
    ```
  - 在`webpack.config.js`里添加 loader 配置
    ```
      module.exports = {
        module: {
          rules: {
            test: /\.sass$/,
            use: [
              "style-loader",// 将 JS 字符串生成为 style 节点
              "css-loader",// 将 CSS 转化成 CommonJS 模块
              "sass-loader",// 将 Sass 编译成 CSS，默认使用 Node Sass
            ]
          }
        }
      }
    ```

  [⬆️ 返回顶部](#目录)

### 为CSS样式属性加不同浏览器的前缀
  - 兼容  
    为了浏览器的兼容性，有时候我们必须加入-webkit,-ms,-o,-moz这些前缀
      + Trident内核：主要代表为IE浏览器, 前缀为-ms
      + Gecko内核：主要代表为Firefox, 前缀为-moz
      + Presto内核：主要代表为Opera, 前缀为-o
      + Webkit内核：产要代表为Chrome和Safari, 前缀为-webkit
  - 安装`postcss-loader`、`autoprefixer`
    ```
      npm i postcss-loader autoprefixer -D
    ```
  - 在项目根目录下创建 postcss.config.js
    ```
      module.exports = {
        plugins: {
          require('autoprefixer')
        }
      }
    ```
  - 在`webpack.config.js`里添加 loader 配置
    ```
      module.exports = {
        module: {
          rules: {
            test: '/\.scss$/',
            use: [
              "style-loader", // 将 JS 字符串生成为 style 节点
             // 将 CSS 转化成 CommonJS 模块
              {
                loader: "css-loader",
                options: {
                  // 如果sass文件里还引入了另外一个sass文件，另一个文件还会从sass-loader向上解析。如果不加，就直接从css-loader开始解析
                  // 0 => no loaders (default);
                  // 1 => postcss-loader;
                  // 2 => postcss-loader, sass-loader
                  importLoaders: 2,
                  // 开启 css 的模块打包。css 样式不会和其他模块发生耦合冲突
                  modules: true
                }
              }
              "postcss-loader",//注意postcss-loader放置位置，应放在css-loader之后，sass|less|stylus-loader之前。
              "sass-loader"// 将 Sass 编译成 CSS，默认使用 Node Sass
            ]
          }
        }
      }
    ```

  [⬆️ 返回顶部](#目录)
 