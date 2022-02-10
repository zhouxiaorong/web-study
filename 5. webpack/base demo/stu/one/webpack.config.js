const path = require('path')

module.exports = {
  // 入口起点，需要打包的文件，传入文件路径 
  entry: {
    index: './stu/one/index.js'
  },
  // entry,
  output: {
    // 输出文件的文件名
    filename: './bundle.js',
  },
  // 指定优化模式   development 开发模式    production: 压缩模式  none: 退出任何默认优化选项
  mode: 'development',
  devServer: {
    // clientLogLevel: 'warning',
    // quiet: true, // necessary for FriendlyErrorsPlugin
    // watchOptions: {
    //   poll: false,
    // }
    publicPath: '/dist',
    /* open: DevServer启动且第一次构建完成时，自动使用我们的系统默认浏览器去打开网页。 */
    open: true,
    /* host: 配置 DevServer的服务器监听地址
        比如想让局域网的其他设备访问自己的本地服务，则可以在启动DevServer时带上 --host 0.0.0.0.
      host: '0.0.0.0',
        局域网内其它机器访问: 本机IP:8080
        本机访问: 本机IP:8080 或者 localhost:8080 或者 127.0.0.1:8080
    */
    // host: '0.0.0.0',
    /* port: 指定了开启服务器的端口号 */
    port: '8089',
    /* contentBase: 
        指定了服务器资源的根目录（如果不配置 contentBase 的话，那么 contentBase 默认是当前执行的目录，一般是项目的根目录）
        默认是当前的工作目录，当它查不到打包在内存中的资源的时候，它就会到 contentBase 中去找
    */
    contentBase: path.join(__dirname, "./"),
    // openPage: 打开指定 URL 的网页
    openPage: 'index.html',// /stu/one/index.html
    // headers: 在HTTP响应（response Headers）中注入一些HTTP响应头
    headers: {
      'X-foo': '112233',
      'Access-Control-Allow-Origin':'*'
    },
    /* historyApiFallback: 返回404页面时定向跳转到特定页面
        一般是应用在 HTML5中 History API 的单页应用
        * 注意点
            1. 默认/未配置的均跳转到 index.html 页面
            2. .xx结尾的无效 (Cannot GET /xxxx.xx)
        * 默认
            historyApiFallback: true,
            访问不到该路由的时候，会跳转到 index.html 页面 (.xx结尾的无效)
        * 使用正则来匹配路由
              historyApiFallback: {
                rewrites: [
                  { from: /^\/user/, to: '/pages/user.html' },
                  { from: /^\/home/, to: '/home.html' }
                ]
              }
    */
    historyApiFallback: {
      // 使用正则来匹配路由
      rewrites: [
        { from: /^\/user/, to: '/pages/user.html' },
        { from: /^\/home/, to: '/home.html' }
      ]
    },
    /* inline: 自动刷新和模块热替换机制 (共有2种模式可实现)
          inline: false,
              使用iframe模式来重载页面
              页面是被嵌入到一个 iframe 页面，并且在模块变化的时候重载页面。
              iframe 模式的特点有：
                  1. 在网页中嵌入了一个iframe，将我们自己的应用代码注入到 这个 iframe中去了。
                  2. 在页面头部会有一个 App ready. 这个提示，用于显示构建过程的状态信息。
                  3. 加载了 live.bundle.js文件，还同时包含了 socket.io的client代码，进行了 websocket通讯，从而完成了自动编译打包，页面自动刷新功能。
          inline: true,
              使用 inline 模式来刷新页面
              在构建变化后的代码会通过代理客户端来控制网页刷新
              inline模式的特点有：
                  1. 构建的消息在控制台中直接显示出来。
                  2. socket.io的client代码被打包进bundle.js当中，这样就能和websocket通讯，从而完成自动编译工作，页面就能实现自动刷新功能。
                  3. 以后的每一个入口文件都会插入上面的socket的一段代码，这样会使的打包后的bundle.js文件变得臃肿。
    */
   inline: false,
    /* hot: 模块替换换功能
        * 说明
            DevServer 默认行为是在发现源代码被更新后通过自动刷新整个页面来做到实时预览的，
            但是开启模块热替换功能后，它是通过在不刷新整个页面的情况下通过使用新模块替换旧模块来做到实时预览的
        * 其他实现方式
            当然我们也可以在scripts命令行中配置，比如我项目中在package.json中的scripts配置如下：
            "scripts": {
              "dev": "webpack-dev-server --progress --colors --devtool source-map --hot --inline",
              "build": "webpack --progress --colors"
            }
    */
    // hot: true,
    /* overlay: 在编译出错的时候，在浏览器页面上显示错误
        * 默认值
            false
        * 
    */
    // overlay: true
    /* stats: 在编译的时候再命令行中输出的内容
        * 值
          'errors-only' 表示只打印错误
          'minimal'
          'normal'
          'verbose' 
        * 说明
            1. 只有错误的才会被打印，没有错误就不打印，因此多余的信息就不会显示出来了。
    */
    //  stats: ''
    /* compress: 是否对所有服务器资源采用gzip进行压缩
        * 默认值
            false
        * 该属性是一个布尔型的值，当他为true的时候，它会对所有服务器资源采用gzip进行压缩。
    */
    compress: true,
    proxy: {
      // '/api': {
      //   target: 'http://news.baidu.com', // 目标接口的域名
      //   // secure: true,  // https 的时候 使用该参数
      //   changeOrigin: true,  // 是否跨域
      //   pathRewrite: {
      //     '^/api': ''  // 重写路径
      //   }
      // },
      '/XmlData': {
        target: 'http://qin-api-cs.wasu.tv', // 目标接口的域名
        // secure: true,  // https 的时候 使用该参数
        changeOrigin: true,  // 是否跨域
        pathRewrite: {
          '^/api': ''  // 重写路径
        }
      }
    }
  }
};