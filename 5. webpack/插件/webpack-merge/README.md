# webpack 插件 

## webpack-meger
  
  - 功能
    - 允许连接数组并合并对象，而不是覆盖组合

  - 项目地址
    - [webpack-merge](https://github.com/survivejs/webpack-merge)

  - 下载插件 
    ```
      npm i webpack-meger -D
    ```

### demo
  
  - [demo-1: 初识](./demo-1/README.md)

### 例 1
  ```
    const merge = require("webpack-merge");
    merge(
        {a : [1],b:5,c:20},
        {a : [2],b:10, d: 421}
    )
    //合并后的结果
    {a : [1,2] ,b :10 , c : 20, d : 421}
  ```