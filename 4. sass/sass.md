# sass

## 目录
  - [介绍](#介绍)
  - [语法格式](#语法格式)
  - [注释](#注释)
  - [变量](#变量)
  - [嵌套](#嵌套)
  - [混合](#混合)
  - [导入：@import](#导入：@import)
  - [局部文件：_](#局部文件：_)
  - [默认变量值：!default](#默认变量值：!default)
  - [函数](#函数)

## 介绍
  > Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅

  - 特点
    + 完全兼容 CSS3
    + 在 CSS 基础上增加变量、嵌套、混合、导入等功能
    + 通过函数进行颜色值与属性值的运算
    + 提供控制指令 (control directives)等高级功能
    + 自定义输出格式

## 语法格式
  * SCSS
    - 以 `.scss` 作为拓展名  
    - 仅在 CSS3 语法的基础上进行拓展（所有 CSS3 语法在 SCSS 中都是通用的，同时加入 Sass 的特色功能）  
    - 支持大多数 CSS hacks 写法以及浏览器前缀写法(vendor-specific syntax)，以及早期的 IE 滤镜写法

  * SASS
    - 以 `.sass` 作为拓展名  
    - 称为缩进格式，简称 sass ，是一种简化格式  
    - 使用 “缩进” 代替 “花括号” 表示属性属于某个选择器  
    - 使用 “换行” 代替 “分号” 分隔属性

## 注释
  - 标准注释`/* 注释内容 */`
    - 语法为注释内容写在以`/*`开头，以`*/`结尾的代码段中
    - 其注释内容**会**出现在生成的css文件中
      - scss
        ``` scss
        body {
          /* 背景颜色 */
          background-color: #333;
        }
        ```
      - css
        ``` css
        body {
          /* 背景颜色 */
          background-color: #333;
        }
        ```
    - 当注释出现在原生css不允许的地方时（比如在属性或选择器中），这些注释将被抹掉
      - scss
        ``` scss
        body {
          color /* 这块注释内容不会出现在生成的css中 */: #333;
          padding: /* 这块注释内容也不会出现在生成的css中 */ 0;
        }
        ```
      - css
        ``` css
        body {
          color: #333;
          padding: 0;
        }
        ```
  - 静默注释`//`
    - 语法为以`//`开头，注释内容到行末（和js、java等语言中的单行注释的语法相同）
    - 其注释内容**不会**出现在生成的css文件中
      - scss
        ``` scss
        body {
          // 背景颜色
          background-color: #333;
        }
        ```
      - css
        ``` css
        body {
          background-color: #333;
        }
        ```

  [⬆️ 返回顶部](#目录)

## 变量
  * 声明变量
    ``` ccss
      // 变通变量，只在当前层级上有效果
      $变量名: 值;
      // 全局变量
      $变量名: 值 !global;
    ```

  * 引用变量
    ```
      css属性名: $变量名;
    ```

  * 说明
    - 变量用于存储`字符串`、`数字`、`颜色值`、`布尔值`、`列表`、`null值`等信息
    - 当变量值为`null`时，css语句不生效
    - 变量可以重复使用
    - 当变量不存在时，报错
    - 在声明变量时，变量值也可以引用其他变量（后面如果被引用的变量值改变，引用该变量的变量的值不会被改变）

  * 变量名
    - 使用`$`符号声明标识变量（老版本的sass使用`!`来标识变量，改成$是多半因为!highlight-color看起来太丑了）
    - 变量名可以与css中的属性名和选择器名称相同（全凭个人喜好）
    - 变量名单词之间连接可以使用中划线或下划线，这两者并无区别，比如$bg-color和$bg_color实际指向的是同一个变量

  * 变量的作用域
    - 变量的`作用域`只能在当前的块层级上有效果
    - 可以使用 `!global` 关键词将变量的作用域设置成是全局的（只在之后的css代码中生效）

  * 注意点
    - 所有的全局变量我们一般定义在同一个文件，如：`_globals.scss`，然后我们使用 `@include` 来包含该文件。
    
  * 例
    - `sass`源码
      ``` scss
      $width: null;// 值为null，使用该变量的css语句皆不生效
      $bg-color: #333;
      $border: 1px solid $bg-color;

      body {
        width: $width;
        // 未使用!global声明全局变量前使用该变量，为原来的值#333
        background-color: $bg-color;
        border: $border;
      }

      // 全局变量，之后用到该变量时的值都是green了
      .bg-color-green {
        $bg-color: green !global;   
        background-color: $bg-color;
      }

      // 局部作用域，只在 .bg-red 里头有
      .bg-color-red {
        $bg-color: red;
        background-color: $bg-color;
      }

      div {
        // 使用!global声明全局变量后使用该变量，为!global声明的值green
        background-color: $bg-color;
        // 被引用的变量值改变，引用该变量的变量的值不会被改变
        border: $border;
      }
      ```
    - 转化成`css`
      ``` css
      body {
        background-color: #333;
        border: 1px solid #333;
      }

      .bg-color-green {
        background-color: green;
      }

      .bg-color-red {
        background-color: red;
      }

      div {
        background-color: green;
        border: 1px solid #333;
      }
      ```

  [⬆️ 返回顶部](#目录)

## 嵌套
  - 特点
    - 避免重复书写
    - 把子级选择器放到父级选择器里面
  - 选择器嵌套
    - 类似于 HTML 的嵌套规则
    - scss
      ``` scss
      div {
        width: 100px;
        height: 30px;
        color: blue;
        ul {
          li {display:inline-block;}
        }
        p {font-size: 20px;}
      }
      ```
    - css
      ``` css
      div {
        width: 100px;
        height: 30px;
        color: blue;
      }
      div ul li {
        display: inline-block;
      }
      div p {
        font-size: 20px;
      }
      ```
  - 属性嵌套
    - 拥有相同前缀的CSS属性样式也可以使用嵌套属性来编写 
    - 前面相同部分只需敲写一遍
    - 规则
      1. 把属性名从中划线-的地方断开，在根属性后边添加一个冒号`:`
      2. 紧跟一个`{ }`块，把子属性部分写在这个`{ }`块中
      3. 和css选择器嵌套一样，sass会把你的子属性一一解开，把根属性和子属性部分通过中划线-连接起来，最后生成的效果与你手动一遍遍写的css样式一样
    - scss  
      ``` scss
      div {
        font: {
          family: Helvetica, sans-serif;
          size: 18px;
        }
        border: 1px solid #ccc {
          left: 0px;
          right: 0px;
        }
      }
      ```
    - css
      ``` css
      div {
        font-family: Helvetica, sans-serif;
        font-size: 18px;
        border: 1px solid #ccc;
        border-left: 0px;
        border-right: 0px;
      }
      ```
  - 父选择器的标识符`&`
    - 可以放在任何一个选择器可出现的地方
    - 不会像后代选择器那样拼接（去掉了中间的空格）
    - scss
      ``` scss
      div a {
        color: blue;
        // a 后代选择器 p，有空格
        p {color: yellow;}
        // a 添加伪类，无空格
        &:hover { color: red }
        // 在父选择器之前添加选择器
        body.ie & { color: green }
      }
      ```
    - css
      ``` css
      div a {
        color: blue;
      }
      div a p {
        color: yellow;
      }
      div a:hover {
        color: red;
      }
      body.ie div a {
        color: green;
      }
      ```
  - 群组（并级）选择器
    - 对群组中任何一个选择器的元素生效
    - 以逗号分隔的多个选择器（父级或子级）会分别组合
    - 减少工作量，实际生成的css可能比较大，会降低网站的速度
    - scss
      ``` scss
      .nav, .con {
        h1, h2, h3 {color: red;}
      }
      ```
    - css
      ``` css
      .nav h1, .nav h2, .nav h3, .con h1, .con h2, .con h3 {
        color: red;
      }
      ```
  - 子组合选择器和同层组合选择器：>、+和~
    - scss
      ``` scss
      div {
        ~ p {color: red}
        > a {color: green}
        ul > {
          li {color: blue}
        }
        .nav + & {color: yellow}
      }
      ```
    - css
      ``` css
      div ~ p {
        color: red;
      }
      div > a {
        color: green;
      }
      div ul > li {
        color: blue;
      }
      .nav + div {
        color: yellow;
      }
      ```

  [⬆️ 返回顶部](#目录)

## 混合

  [⬆️ 返回顶部](#目录)

## 导入：@import
  - 语法
    ``` scss
      @import filename;
    ```
  - 基本
    - 被导入的文件`_index.scss`
      - 定义变量、混合器
      ``` scss
      $bg-color: #333;
      $color: white;
      $fsize: 16px;
      ```
    - scss文件
      - 导入其他scss文件
      - 导入文件时可以省略`.sass`或`.scss`文件后缀和局部文件的`_`文件前缀
      - 所有在被导入文件中定义的变量和混合器都可以在导入文件中使用
      ``` scss
      @import 'index';
      body {
        background-color: $bg-color;
        color: $color;
        font-size: $fsize;
      }
      ```
    - 最后生成的`css`文件
      - 在生成css文件时就把相关文件导入进来
      - 所有相关的样式被归纳到了同一个css文件中，而无需发起额外的下载请求
      ``` css
      body {
        background-color: #333;
        color: white;
        font-size: 16px;
      }
      ```
  - 嵌套导入
  [⬆️ 返回顶部](#目录)

## 继承

  [⬆️ 返回顶部](#目录)

## 局部文件：_
  - 局部文件的文件名以下划线`_`开头
  - 局部文件只作导入用，不会被单独编译
  - 当`@import`导入局部文件时，可以省略文件名开头的下划线`_`
  - 局部文件可以被多个不同的文件引用

## 默认变量值：!default
  - `!default` 用于变量，设置默认值
  - 如果这个变量之前已经被声明赋值了，那就用它声明的值，否则就用这个默认值
  - scss
    ``` scss
    $text-color: blue;
    $text-color: red;
    $link-color: blue;
    $link-color: red !default;
    $con-color: red !default;
    p {
      color: $text-color;
    }
    a {
      color: $link-color;
    }
    .con {
      color: $con-color;
    }
    ```
  - css
    ``` css
    p {
      color: red;
    }
    a {
      color: blue;
    }
    .con {
      color: red;
    }
    ```

## 函数
