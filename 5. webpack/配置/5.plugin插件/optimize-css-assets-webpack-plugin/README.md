# plugin 插件

## optimize-css-assets-webpack-plugin
  - 项目地址: [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)
  - 安装命令: 
    ```
      npm install optimize-css-assets-webpack-plugin --save-dev
    ```
  - 功能  
      - 优化/最小化`CSS`文件
  
### demo
  - [demo 1: 初识](./demo-1/README.md) 
  - [demo 2: 只优化部分`CSS`文件](./demo-1/README.md) 

### 参数
  - `assetNameRegExp`: 
      - 一个正则表达式，默认为/\.css$/g
      - 指示应优化\最小化的`css`文件名称。
      - 所提供的正则表达式针对`ExtractTextPlugin`配置中实例所导出文件的文件名而不是源CSS文件的文件名运行。
  - `cssProcessor`: 
      - 默认为cssnano
      - 用于优化\最小化`CSS`的`CSS`处理器。
      - 这应该是遵循`cssnano.process`界面的函数（接收`CSS`和`options`参数并返回`Promise`）。
  - `cssProcessorOptions`: 
      - 默认为{}
      - 传递给的选项`cssProcessor`
  - `cssProcessorPluginOptions`: 
      - 默认为{}
      - 传递给的插件选项`cssProcessor`
  - `canPrint`: 
      - 一个布尔值，默认为 true
      - 指示插件是否可以将消息打印到控制台

### 在`webpack.config.js` - `plugins`中配置
  ```
    module.exports = {
      plugins: [
        new OptimizeCssAssetsWebpackPlugin()
      ]
    }
  ```

### 在`webpack.config.js` - `optimization`中配置
  ```
    module.exports = {
      optimization: {
        minimizer: [
          new OptimizeCssAssetsWebpackPlugin({})
        ]
      },
    }
  ```
