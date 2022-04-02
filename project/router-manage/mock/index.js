/** 生成随机数据，拦截 Ajax 请求
 * Mock.js；
 * 安装：`npm install mockjs --save`
 */
const Mock = require('mockjs')
/** 解析 POST 数据
 * 安装：`npm install express --save`
 * Node.js 里的 express 模块
  var express = require('express')
  // 解析JSON格式 application/json
     devServer.app.use(express.json())
  // 解析文本格式 application/x-www-form-urlencoded
     devServer.app.use(express.urlencoded({ extended: true }))
 */
var express = require('express')
/** 解析 POST 数据
 * 安装：`npm install body-parser --save`
 * Node.js 里的 body-parser 模块
 * const bodyParser = require('body-parser')
  解析JSON格式 application/json
     devServer.app.use(bodyParser.json())； // body
  解析文本格式 application/x-www-form-urlencoded
     devServer.app.use(bodyParser.urlencoded({ extended: true }))
 */
// const bodyParser = require('body-parser')
/** 监控文件变化
 * Node.js 里的 chokidar 模块
 */
const chokidar = require('chokidar')
const path = require('path')
/** chalk.js；Chalk颜色库；可以为 console.log() 的输出信息配置不同的显示颜色和样式 */
const chalk = require('chalk')

/** 拼接路径
 * path.join(path1，path2，path3.......)
 * 将路径片段使用特定的分隔符（window：\）连接起来形成路径，并规范化生成的路径
 * process.cwd(): 当前 Node.js 进程执行时的工作目录(xxxxx\router-manage)
 * mockDir: xxxxx\router-manage\mock
 */
const mockDir = path.join(process.cwd(), 'mock')


/** 初始化模拟服务器 */
function initMockServer (app) {
  const permission = require('./mockapi/permission')
  const { userApi } = require('./mockapi/user')
  let arr = [...permission, ...userApi];
  let mockStartIndex = app._router.stack.length;
  arr.forEach(function (v) {
    const { url, type, response } = v;
    
    app[type](url, (req, res) => {
      // 调用函数生成响应数据，解析成模拟数据并返回它
      res.send(Mock.mock(response(req, res)));
    });
  })
  return {
    mockStartIndex, 
    mockRoutesLength: app._router.stack.length
  }
}

/**监控 router-manage/mock 目录下所有 .js 文件变化
 * chokidar.watch(paths, [options])
 * paths
    一个字符串或者是一个数组，描述监听的文件或者文件夹的路径
* options: 配置项
  - persistent:bollean,与原生fs.watch一样,表示是否保护进程不退出持久监听，默认值为true
  - ignored:string,所要忽略监听的文件或者文件夹,用正则匹配来筛选 
  - ignoreInitial:bollean,表示是否对增加文件或者增加文件夹的时候进行发送事件，默认值为false表示add/addDir会触发事件
  - cwd:string类型，没有默认值，类似于appBasepath，监听的paths所相对的路径。
  - usePolling:bollean，表示是否使用前面提到的fs.watchFile()进行轮询操作，由于轮询会导致cpu飙升，所以此选项通常在需要通过网络监视文件的时候才设置为true即使用fs.watchFile()，默认值为false
  - depth:number类型,没有默认值，如果设定则表示限定了会递归监听多少个子目录。
*/
function chokidarWatch (app, mockStartIndex, mockRoutesLength) {
  chokidar.watch(mockDir, {
    ignoreInitial: true, 
    ignored: /.md/   // 忽略文件  用正则匹配来筛选
  }).on('all', (event, path) => {
    console.log("event", chalk.blue(event), 'path', path)
    if (event === 'change' || event === 'add') {
      try {
        app._router.stack.splice(mockStartIndex, mockRoutesLength)

        deleteRequireCache();

        initMockServer(app);

        console.log(chalk.blue(`模拟服务器重新加载成功，${path}`))
      } catch (error) {
        console.log(chalk.red('模拟服务器重新加载失败', error))
      }
    }
  })
}

/** 清除当前监控目录下的所有文件的 require 缓存
 * require有缓存机制，在第一次调用 `require(path)` 的时候缓存下来了，不清除不会拿到最新的文件数据
 * require.resolve： 相当于把相对路径转化成绝对路径
 * delete require.cache[缓存文件全路径]
 */
function deleteRequireCache () {
  Object.keys(require.cache).forEach(i => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)]
    }
  })
}

module.exports = (middlewares, devServer) => {
  // 解析JSON格式 application/json
  devServer.app.use(express.json())
  // 解析文本格式 application/x-www-form-urlencoded
  devServer.app.use(express.urlencoded({ extended: true }))

  let { mockStartIndex, mockRoutesLength } = initMockServer(devServer.app);
  
  chokidarWatch(devServer.app, mockStartIndex, mockRoutesLength);

  return middlewares;
}