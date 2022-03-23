# vue

## 插件
  - 图表: `npm i echarts`
  - vue动画: [animate.css](https://animate.style/)，跨浏览器动画库；可用于您的 Web 项目。非常适合强调、主页、滑块和注意力引导提示
    - 用法
      - 安装: `npm install animate.css --save`
      - 导入: `import 'animate.css'`
      - 将类 `animate__animated` 与任何动画名称一起添加到元素（不要忘记animate__前缀！
      - 动画名称直接从官网复制
      - 动画时间 **默认1秒**
      
    - **添加延迟** ( 1 到 5 秒)
      - 直接添加class类
        | class名称          | 默认速度时间 |
        | ----------------- | ------------ |
        | animate__delay-1s | 1s           |
        | animate__delay-2s | 2s           |
        | animate__delay-3s | 3s           |
        | animate__delay-4s | 4s           |
        | animate__delay-5s | 5s           |
      
        ```html
          <!-- 添加延迟样式 -->
          <div class="animate__animated animate__backInDown animate__delay-2s">Example</div>
        ```
      - 通过 `--animate-delay` 属性设置延迟时间
      
    - **控制动画的速度**
      - 直接添加class类
        | class名称       | 默认速度时间 |
        | --------------- | ------------ |
        | animate__faster | 500ms        |
        | animate__fast   | 800ms        |
        | animate__slow   | 2s           |
        | animate__slower | 3s           |
      ```html
        <!-- 添加延迟样式 -->
        <div class="animate__animated animate__backInDown animate__slower">Example</div>
      ```
    
      - 通过 `--animate-duration` 属性全局或本地自定义动画持续时间
        ```html
        <style>
        .duration-2 {--animate-duration: 2s;}
        </style>
        <p v-if="show" class="animate__animated animate__backInDown duration-1">11111</p>
        ```

## npm 
  - 安装7版本less-loader: `npm i less-loader@7`
  - 查看所有版本：`npm view less-loader versions`
