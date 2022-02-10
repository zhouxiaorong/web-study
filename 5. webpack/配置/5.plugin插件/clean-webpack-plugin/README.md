# plugin 插件

## clean-webpack-plugin
  - 项目地址: [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin)
  - 安装命令: 
    ```
      npm install clean-webpack-plugin --save-dev
    ```
  - 说明:
    - 默认删除 <PROJECT_DIR>/dist/ 目录下的所有文件

## 参数

### dry
  - 默认值: false
  - 说明:
      - dry为true时，模拟删除，加删除，不会真的删掉文件

### verbose
  - 默认值: false
  - 说明:
      - verbose为true时 显示日志， 当dry为true时，总是会打印日志，不管verbose是什么值

### cleanStaleWebpackAssets
  - 默认值: true
  - 说明:
      - 自动删除未被使用的webpack资源

### cleanOnceBeforeBuildPatterns
  - 默认值: false
  - 说明:
      - 打包前做的一些事，忽略掉不需要删除的文件，相当于exclude,被忽略的文件需要在开头加上 "!"号，数组中必须带有"**/*"通配符，否则dist下的文件都不会被删除

### dry
  - 默认值: false
  - 说明:

#

#

#

# 删除指定文件/文件夹 path.resolve(__dirname, 'test6')

cleanOnceBeforeBuildPatterns: [

path.resolve(__dirname, 'test6'),

"**/*", "!1.js", "!images",

path.resolve(__dirname, 'test5')

],

作者：幕木_
链接：https://www.imooc.com/article/289614
来源：慕课网