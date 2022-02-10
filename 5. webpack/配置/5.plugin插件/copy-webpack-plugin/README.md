# plugin 插件

## copy-webpack-plugin
  - 项目地址: [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)
  - 安装命令: 
    ```
      npm install copy-webpack-plugin --save-dev
    ```
  - 功能  
    - 将单个文件或整个目录（已存在）复制到构建目录。
    - 在webpack中拷贝文件和文件夹

### demo
  - [demo 1: webpack 4 + copy-webpack-plugin 4.6.0](./demo-1/README.md)

  - [demo 2: webpack 5 + copy-webpack-plugin 7.0.0 / 6.4.1](./demo-2/README.md)

  - [demo 3: webpack 4 + copy-webpack-plugin 6.4.1](./demo-3/README.md)

### 目录
  - [参数 `patterns.from`](#patterns中参数from)

  - [参数 `patterns.to`](#patterns中参数to)

  - [参数 `patterns.context`](#patterns中参数context)

  - [参数 `patterns.globOptions`](#patterns中参数globOptions)

  - [参数 `patterns.filter`](#patterns中参数filter)

  - [参数 `patterns.toType`](#patterns中参数toType)

  - [参数 `patterns.force`](#patterns中参数force)

  - [参数 `patterns.transform`](#patterns中参数transform)

  - [参数 `patterns.noErrorOnMissing`](#patterns中参数noErrorOnMissing)

  - [参数 `patterns.info`](#patterns中参数info)

### ℹ️ 注意点 ℹ️
  - `webpack-copy-plugin` 不能复制从构建过程中生成的文件；而是在构建过程中复制源树中已经存在的文件。
  - 如果要 `webpack-dev-server` 在开发过程中将文件写入输出目录，可以使用 `writeToDisk` 选项或强制执行 `write-file-webpack-plugin`。
  - 可以从 `Asset Objects` 获取原始源文件名。

### 在`webpack.config.js` - `plugins`中配置
  ```
    const CopyPlugin = require("copy-webpack-plugin");

    module.exports = {
      plugins: [
        new CopyPlugin({
          patterns: [
            { from: "source", to: "dest" },
            { from: "other", to: "public" },
          ],
        }),
      ],
    };
  ```

### patterns中参数from
  - 类型: string
  - 默认值: undefined
  - 说明:
      - 定义要拷贝的源文件
  - 例
    ```
      from：__dirname+'/src/components'
    ```

  [⬆️ 返回顶部](#copy-webpack-plugin)

#### patterns中参数to
  - 类型: String|Function
  - 默认值: compiler.options.output
  - 说明:
      - 输出路径（定义要拷贝到的目标文件夹）
  - 例
    ```   
      to: __dirname+'/dist'
    ```

  [⬆️ 返回顶部](#copy-webpack-plugin)

#### patterns中参数context
  - 类型: String
  - 默认值: options.context|compiler.options.context
  - 说明:
      - 可选
      - 确定如何解释from路径的路径。
  - 例
    ```   
    ```

  [⬆️ 返回顶部](#copy-webpack-plugin)

#### patterns中参数globOptions
  - ignore: 要排队的文件，支持模糊搜索
    ```
      const CopyWebpackPlugin = require("copy-webpack-plugin");

      module.exports = {
        plugins: [
          new CopyWebpackPlugin({
            patterns: [
              {
                from: 'src',
                to: '',
                globOptions: {
                  // ** 两个星号的意思是在当前路径
                  ignore: [
                    '**/*.js'
                  ]
                }
              }
            ]
          })
        ]
      }
    ```
  [⬆️ 返回顶部](#copy-webpack-plugin)

#### patterns中参数filter

  [⬆️ 返回顶部](#copy-webpack-plugin)

#### patterns中参数toType
file 或者 dir                        可选，默认是文件
  [⬆️ 返回顶部](#copy-webpack-plugin)

#### patterns中参数force
 强制覆盖前面的插件            可选，默认是文件
  [⬆️ 返回顶部](#copy-webpack-plugin)

#### patterns中参数transform

  [⬆️ 返回顶部](#copy-webpack-plugin)

#### patterns中参数noErrorOnMissing

  [⬆️ 返回顶部](#copy-webpack-plugin)

#### patterns中参数info

  [⬆️ 返回顶部](#copy-webpack-plugin)
