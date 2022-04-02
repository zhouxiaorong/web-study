# mock.js

  - 安装: `npm install mockjs --save-dev`
  - [语法规范](https://github.com/nuysoft/Mock/wiki/Syntax-Specification)
  - [template随机数生成语法](http://mockjs.com/examples.html)
  - 配合 [vue-cli devserver](https://cli.vuejs.org/zh/config/#devserver)
  - 配合 [webpack4: devserver-before](https://v4.webpack.docschina.org/configuration/dev-server/#devserver-before)
  - 配合 [webpack5: devServer.setupmiddlewares实现](https://webpack.js.org/configuration/dev-server/#devserversetupmiddlewares)

## 功能
  - 模拟后端接口
  - 可随机生成大量的数据
  - 可模拟对数据的增删改查
  - 在已有接口文档的情况下，我们可以直接按照接口文档来开发，将相应的字段写好，在接口完成 之后，只需要改变url地址即可


## 基本使用
  1. 在项目根栏目下创建 `mock` 文件夹
  2. 在 `mock` 目录下创建 `index.js`
  3. 编写 `index.js`
    ```js
    // 引入 Mock
    var Mock = require('mockjs')
    // 生成随机id
    let id = Mock.mock('@id');
    // 生成对象
    let obj = Mock.mock({
      id: '@id', // 随机id
    });
    ```
  1. 引入Mock
    ```js
    ```

## Mock方法
### Mock.mock
  
  - 参数说明
    - `rurl`: 可选；表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。例如 /\/domain\/list\.json/、'/domian/list.json'
    - `rtype`: 可选；表示需要拦截的 Ajax 请求类型。例如 GET、POST、PUT、DELETE 等
    - `template`: 可选；表示数据模板，可以是对象或字符串。
    - `function(options)`: 可选；表示用于生成响应数据的函数
    - `options`: 指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性
    
#### Mock.mock( template )
  > 根据数据模板生成模拟数据。
  
  - 例
    ```js
    Mock.mock({
      id: '@id', // 随机id
    })
    ``

#### Mock.mock( rurl, template )
  > 记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回

  - 例
    ```js
    Mock.mock('/userInfo', {
      id: '@id', // 随机id
    })
    ```

#### Mock.mock( rurl, rtype, template )
  > 记录数据模板。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。

  - 例
    ```js
    Mock.mock('/userInfo', 'post', {
      id: '@id', // 随机id
    })
    ```

#### Mock.mock( rurl, function( options ) )
  > 记录用于生成响应数据的函数。  
  > 当拦截到匹配 rurl 的 Ajax 请求时，函数 function(options) 将被执行  
  > 并把执行结果作为响应数据返回。

  - 例
    ```js
    // options: 参数
    Mock.mock('/userInfo', function(options){
      return {
        id: '@id', // 随机id
      }
    })
    ```

#### Mock.mock( rurl, rtype, function( options ) )
  > 记录用于生成响应数据的函数。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。

  - 例
    ```js
    Mock.mock('/userInfo', 'post', function(options){
      return {
        id: '@id', // 随机id
      }
    })
    ```

### Mock.setup
  > 配置拦截 Ajax 请示时的行为；

  - 语法
    ```js
    Mock.setup( settings )
    ```
  - 参数说明
    - `settings`: 配置项集合
    - `timeout`: 配置项中的参数；单位 **毫秒** ；可选；指定被拦截的 Ajax 请求的响应时间，值可以是**正整数**
  - 例
    - 400 毫秒 后才会返回响应内容
      ```js
      Mock.setup({
        timeout: 400
      })
      ```
    - 200-400毫秒区间之后返回响应内容
      ```js
      Mock.setup({
        timeout: '200-600'
      })
      ```

### Mock.Random 
  > 工具类，用于生成各种随机数据。

  ```js
    var Random = Mock.Random
    // 生成邮箱数据
    Random.email()
  ```

### Mock.valid
  > 校验真实数据 data 是否与数据模板 template 匹配。

  - 语法
    ```js
    Mock.valid( template, data )
    ```
  - 参数说明
    - `template`: 必选；表示数据模板，可以是对象或字符串
      - 例如 { 'list|1-10':[{}] }、'@EMAIL'
    - `data`: 必选，表示真实数据
  - 例 
    ```js
    var template = {
      name: 'value1'
    }
    var data = {
      name: 'value2'
    }
    Mock.valid(template, data)
      // =>
      /* [
          {
              "path": [
                  "data",
                  "name"
              ],
              "type": "value",
              "actual": "value2",
              "expected": "value1",
              "action": "equal to",
              "message": "[VALUE] Expect ROOT.name'value is equal to value1, but is value2"
          }
      ] */
    ```

### Mock.toJSONSchema()


## 和vue-cli中devServer搭配使用
### vue-cli@4
  - `vue.config.js`
    ```js
    module.exports = {
      devServer: {
        before: require('./mock/index'),
      },
    }
    ```
  - `mock/index.js`
    ```js
      /** 生成随机数据，拦截 Ajax 请求 */
      const Mock = require('mockjs')
      /** 解析 POST 数据 */
      var express = require('express')
      /** Chalk颜色库 可以为 console.log() 的输出信息配置不同的显示颜色和样式 */
      const chalk = require('chalk')
      const path = require('path')

      /** 拼接路径 */
      const mockDir = path.join(process.cwd(), 'mock')

      /** 初始化模拟服务器 */
      function initMockServer (app) {
        const permission = require('./permission')
        const user = require('./user')
        const arr = [{
                      url: '/api/user',
                      type: 'post', // get / post
                      response (req) {
                        console.log(`path: /api/user, body: ${chalk.blue(JSON.stringify(req.body))}`)
                        console.log(`path: /api/user, query: ${chalk.blue(JSON.stringify(req.query))}`)
                        // Mock.mock 中的 template 数据
                        return {
                          id: '@id',
                          name: '@cname()'
                        };
                      }
                    }];
        
        // 循环配置每个接口
        arr.forEach(function (v) {
          const { url, type, response } = v;
          
          app[type](url, (req, res) => {
            // 调用函数生成响应数据，解析成模拟数据并返回它
            res.send(Mock.mock(response(req, res)));
          });
        })
      }

      // vue-cli@4 使用的是 devServer.before , 只有一个app 参数
      module.exports = (app) => {
        // 解析JSON格式 application/json;如果不设置获取不到body数据
        app.use(express.json())
        // 解析文本格式 application/x-www-form-urlencoded;如果不设置获取不到body数据
        app.use(express.urlencoded({ extended: true }))

        initMockServer(app);
      }
    ```


### vue-cli@5
  - `vue.config.js`
    ```js
    module.exports = {
      devServer: {
        // vue-cli@5中移除了before
        setupMiddlewares: require('./mock/index'),
      },
    }
    ```
  - `mock/index.js`: 不同点
    ```js
      // 与 vue-cli@4 中不同, vue-cli@5 使用的是 devServer.setupMiddlewares , app得用 devServer.app 的方式获取
      module.exports = (middlewares, devServer) => {
        // 初始化模拟服务器
        initMockServer(devServer.app);
        return middlewares;
      }
    ```


