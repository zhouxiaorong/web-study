# JS Tree Shaking

  - 项目中没有使用的代码会在打包的时候丢掉。
  - JS 的 Tree Shaking 依赖的是 ES6 的模块系统（比如：import 和 export）
  - `mode`模式为`production`时才会优化，`development`模式没有

## 注意点
  - 命令行运行 webpack 打包后，打开打包后生成的 /dist/app.bundle.js 文件。查找我们 a() 函数输出的字符串，如下图所示：
  - 如果将查找内容换成 this is function "c" 或者 this is function "b", 并没有相关查找结果。说明 JS Tree Shaking 成功。

## 代码
  
  - util.js
      ```
        // util.js
        export function a() {
          return 'this is function "a"'
        }

        export function b() {
          return 'this is function "b"'
        }

        export function c() {
          return 'this is function "c"'
        }
      ```

  - app.js
      - 在 app.js 中引用 util.js 的 function a() 函数，按需引入：
      ```
        import { a } from './vendor/util'
        console.log(a())
      ```

  - webpack.config.js
      ```
        module.exports = {
          // mode: 'development',
          entry: {
            app: './src/app.js'
          },
        }
      ```

## 如何处理第三方 JS 库?

  - 说明 
      - 对于经常使用的第三方库（例如 jQuery、lodash 等等），如何实现 Tree Shaking ?
      - 下面以 lodash.js 为例，进行介绍。
      - 在一些对加载速度敏感的项目中使用第三方库，请注意库的写法是否符合 ES 模板系统规范，以方便 webpack 进行 tree shaking。

## lodash.js 普通
  - 安装
    ```
      npm install lodash --save
    ```
  - 在 `app.js` 中引用 `lodash.js` 的一个函数：
    ```
      // app.js
      import { chunk } from 'lodash'
      console.log(chunk([1, 2, 3], 2))
    ```
  - 命令行打包
    ```
      npm run build
    ```
  - 结论
    - 打包后大小是 70kb。显然，只引用了一个函数，不应该这么大。并没有进行 Tree Shaking。
    - lodash.js 使用的是 CommonJS 而不是 ES6 的写法


## lodash-es.js
  - 安装 lodash.js 的 ES 写法的版本
    ```
      npm install lodash-es --save
    ```
  - 在 `app.js` 中引用 `lodash.js` 的一个函数：
    ```
      // app.js
      import { chunk } from 'lodash-es'
      console.log(chunk([1, 2, 3], 2))
    ```
  - 命令行打包
    ```
      npm run build
    ```
  - 结论
    - 打包结果只有 3.5KB（如下图所示）。显然，tree shaking 成功。
    - js tree shaking 利用的是 ES 的模块系统。而 lodash.js 使用的是 CommonJS 而不是 ES6 的写法。所以，安装对应的模块系统即可。