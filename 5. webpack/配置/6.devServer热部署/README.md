# webpack 配置 devServer

  * 说明
    - 资源打包到内存
    - webpack 默认配置文件地址为与 package.json 同级目录下的 webpack.config.js 文件
  * package.json  
    ```
      {
        "scripts": {
          "start": 'webpack-dev-server'
        }
      }
    ```

## 目录
  * [open 是否自动使用我们的系统默认浏览器去打开网页](#open)  

  * [publicpath 服务器所打包资源后的输出路径](#publicpath)  

  * [host 配置 DevServer 的服务器监听地址](#host)  

  * [port 指定了开启服务器的端口号](#port)  
  
  * [contentBase 指定了服务器资源的根目录](#contentbase)  

  * [openPage 打开指定 URL 的网页](#openpage)  

  * [headers 在HTTP响应（response Headers）中注入一些HTTP响应头](#headers)  

  * [historyApiFallback 返回404页面时定向跳转到特定页面](#historyapifallback)  

  * [overlay: 在编译出错的时候，在浏览器页面上显示错误](#overlay)  

  * [stats: 在编译的时候再命令行中输出的内容](#stats)  

  * [compress: 是否对所有服务器资源采用gzip进行压缩](#compress)  

  * [proxy 代理配置](#proxy)  

  * [hot: 模块替换换功能](#hot)  

  * [inline 自动刷新和模块热替换机制](#inline)  

  * [clientLogLevel](#clientloglevel)  

  * [quiet](#quiet)  

  * [watchOptions](#watchoptions)  

  * [other](#other)  

## open  
  - DevServer启动且第一次构建完成时，是否自动使用我们的系统默认浏览器去打开网页。
  - 值说明:
    + true: 自动打开
    + false: 不会自动打开
  - webpack.config.js  
  ```
    module.exports = {
      devServer: {
        open: true
      }
    };
  ```

## publicPath
  - 说明
    + 服务器所打包资源后的输出路径
    + 未设置时会去找 output 中 publicPath 中的值
    + 默认值： '/'
  - webpack.config.js
    ```
      module.exports = {
        devServer: {
          publicPath: '/dist'
        }
      };
    ```

## host
  - 说明
    + 配置 DevServer的服务器监听地址
    + 如果想让局域网的其他设备访问自己的本地服务，则可以在启动DevServer时带上 --host 0.0.0.0
  - host: '0.0.0.0',
    + 局域网内其它机器访问: 本机IP:8080
    + 本机访问: 本机IP:8080 或者 localhost:8080 或者 127.0.0.1:8080
  - webpack.config.js
    ```
      module.exports = {
        devServer: {
          host: '0.0.0.0',
        }
      };
    ```

## port
  - 说明
    + 指定了开启服务器的端口号
  - webpack.config.js
    ```
      module.exports = {
        devServer: {
          port: '8089',
        }
      };
    ```

## contentBase
  - 说明
    + 指定了服务器资源的根目录
    + 如果不配置 contentBase 的话，那么 contentBase 默认是当前执行的目录，一般是项目的根目录
    + 默认是当前的工作目录，当它查不到打包在内存中的资源的时候，它就会到 contentBase 中去找
  - webpack.config.js
    ```
      module.exports = {
        devServer: {
          contentBase: path.join(__dirname, "./"),
        }
      };
    ```

## openPage
  - 说明
    + 打开指定 URL 的网页
    + 默认地址 index.html
  - webpack.config.js
    ```
      module.exports = {
        devServer: {
          openPage: '/stu/index.html',
        }
      };
    ```

## headers
  - 说明
    + 在HTTP响应（response Headers）中注入一些HTTP响应头
  - webpack.config.js
    ```
      module.exports = {
        devServer: {
          headers: {
            'X-foo': '112233',
            'Access-Control-Allow-Origin':'*'
          },
        }
      };
    ```

## historyApiFallback
  - 说明
    + 返回404页面时定向跳转到特定页面
    + 一般是应用在 HTML5中 History API 的单页应用
    + 使用正则来匹配路由
  - 注意点
    + 默认/未配置的均跳转到 index.html 页面
    + .xx结尾的无效 (Cannot GET /xxxx.xx)
  - 默认
    + historyApiFallback: true,
    + 访问不到该路由的时候，会跳转到 index.html 页面 (.xx结尾的无效)
  - webpack.config.js
    ```
      module.exports = {
        devServer: {
          historyApiFallback: {
            // 使用正则来匹配路由
            rewrites: [
              { from: /^\/user/, to: '/pages/user.html' },
              { from: /^\/home/, to: '/home.html' }
            ]
          },
        }
      };
    ```

## overlay
  * 说明
    + 在编译出错的时候，在浏览器页面上显示错误
    + 默认值: false
  - webpack.config.js
    ```
      module.exports = {
        devServer: {
          overlay: true
        }
      };
    ```

## stats
  * 说明
    + 在编译的时候再命令行中输出的内容
    + 只有错误的才会被打印，没有错误就不打印，因此多余的信息就不会显示出来了。
  * 值说明
    + 'errors-only' 表示只打印错误
    + 'minimal'
    + 'normal'
    + 'verbose' 
  - webpack.config.js
    ```
      module.exports = {
        devServer: {
          stats: ''
        }
      };
    ```

## compress
  * 说明
    + 是否对所有服务器资源采用gzip进行压缩
    + 默认值: false
    + 该属性是一个布尔型的值，当他为true的时候，它会对所有服务器资源采用gzip进行压缩。
  * 值说明
    + 'errors-only' 表示只打印错误
    + 'minimal'
    + 'normal'
    + 'verbose' 
  - webpack.config.js
    ```
      module.exports = {
        devServer: {
          compress: true
        }
      };
    ```

## proxy
  - 说明
    + 代理配置
  - webpack.config.js
    ```
      module.exports = {
        devServer: {
          proxy: {
            '/api': {
              target: 'http://news.baidu.com', // 目标接口的域名
              // secure: true,  // https 的时候 使用该参数
              changeOrigin: true,  // 是否跨域
              pathRewrite: {
                '^/api': ''  // 重写路径
              }
            }
          }
        }
      };
    ```

## hot
  * 说明
    + 模块替换换功能
    + DevServer 默认行为是在发现源代码被更新后通过自动刷新整个页面来做到实时预览的，但是开启模块热替换功能后，它是通过在不刷新整个页面的情况下通过使用新模块替换旧模块来做到实时预览的
  - webpack.config.js
    ```
      module.exports = {
        devServer: {
          hot: true
        }
      };
    ```
  - 在 package.json > scripts 命令行中配置，例：
    ```
    {
      "scripts": {
        "dev": "webpack-dev-server --progress --colors --devtool source-map --hot --inline"
      }
    }
    ```

## inline
  * 说明
    + 自动刷新和模块热替换机制
    + 共有2种模式可实现
  * inline: false,
      + 使用iframe模式来重载页面
      + 页面是被嵌入到一个 iframe 页面，并且在模块变化的时候重载页面。
      + iframe 模式的特点有：
          1. 在网页中嵌入了一个iframe，将我们自己的应用代码注入到 这个 iframe中去了。
          2. 在页面头部会有一个 App ready. 这个提示，用于显示构建过程的状态信息。
          3. 加载了 live.bundle.js文件，还同时包含了 socket.io的client代码，进行了 websocket通讯，从而完成了自动编译打包，页面自动刷新功能。
  * inline: true,
      + 使用 inline 模式来刷新页面
      + 在构建变化后的代码会通过代理客户端来控制网页刷新
      + inline模式的特点有：
          1. 构建的消息在控制台中直接显示出来。
          2. socket.io的client代码被打包进bundle.js当中，这样就能和websocket通讯，从而完成自动编译工作，页面就能实现自动刷新功能。
          3. 以后的每一个入口文件都会插入上面的socket的一段代码，这样会使的打包后的bundle.js文件变得臃肿。
  - webpack.config.js
    ```
      module.exports = {
        devServer: {
          inline: false,
        }
      };
    ```


## clientLogLevel
  ```
    clientLogLevel: 'warning',
  ```

## quiet
  ```
    quiet: true, // necessary for FriendlyErrorsPlugin
  ```

## watchOptions
  ```
    watchOptions: {
      poll: false,
    }
  ```
