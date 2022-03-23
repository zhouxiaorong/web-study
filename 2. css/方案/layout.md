# css 解决方案 - 布局

## 目录
  - [水平居中](#水平居中)
  - [垂直居中](#垂直居中)
  - [水平垂直居中](#水平垂直居中)
  - [两列布局](#两列布局)
  - [三列布局](#三列布局)
  - [等分布局](#等分布局)
  - [Sticky Footer布局](#sticky-footer布局)
  - [全屏布局](#全屏布局)

## flex布局
  >  Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

  - 语法
    ```css
      /* 任何一个容器都可以指定为 Flex 布局。 */
      .box{
        display: flex;
      }
      /* 行内元素也可以使用 Flex 布局。 */
      .box{
        display: inline-flex;
      }
      /* Webkit 内核的浏览器，必须加上-webkit前缀。 */
      .box{
        display: -webkit-flex; /* Safari */
        display: flex;
      }
    ```
  
  - 注意事项
    
    - 设为 `Flex` 布局以后，子元素的`float`、`clear`和`vertical-align`属性将 ***失效***

    - 在弹性盒模型子元素对象中未设置`flex-grow`、`flex-shrink`、`flex-basis`、`flex`属性，并且主轴有剩余量时，主轴无弹性效果
      ```html
        <style>
          div, p {padding: 0px;margin: 0px;}
          div {width: 300px;height: 100px;display: flex;background-color: gray;}
          div p {width:50px;height: 100px;}
          p:nth-of-type(1) {background-color: rgb(190, 26, 26);}
          p:nth-of-type(2) {background-color: rgb(56, 133, 41);}
          p:nth-of-type(3) {background-color: rgb(73, 54, 158);}
        </style>
        <div class="con">
          <!-- 实际宽度: 50px -->
          <p></p>
          <!-- 实际宽度: 50px -->
          <p></p>
          <!-- 实际宽度: 50px -->
          <p></p>
        </div>
      ```

## css
### 容器的属性
#### flex-direction

  > 该属性通过定义flex容器的主轴方向来决定felx子项在flex容器中的位置。

  - 语法
    ```css
    flex-direction: row|row-reverse|column|column-reverse|initial|inherit;
    ```
    
  - 值说明
    
    | 值             | 描述                                 |
    | :------------- | :----------------------------------- |
    | row            | 默认值。主轴为水平方向，起点在左端。 |
    | row-reverse    | 主轴为水平方向，起点在右端。         |
    | column         | 主轴为垂直方向，起点在上方。         |
    | column-reverse | 主轴为垂直方向，起点在下方。         |
    
  - 说明 
    
      - 规定灵活项目的方向。
      - 如果元素不是弹性盒对象的元素，则 flex-direction 属性不起作用。
    
  - 例
    - 设置 <div> 元素内弹性盒元素的方向为相反的顺序：
      ```html
      div{
          display:flex;
          flex-direction:row-reverse;
      }
      ```



#### flex-wrap

  > 该属性控制flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向。

  - 语法
    ```css
    flex-wrap: nowrap|wrap|wrap-reverse|initial|inherit;
    ```
    
  - 值说明
    
    | 值           | 描述                                       |
    | :----------- | :----------------------------------------- |
    | nowrap       | 默认值。不换行、不拆列。                   |
    | wrap         | 换行，第一行在弹性盒对象起始位置           |
    | wrap-reverse | 换行，倒序排列，第一行在弹性盒对象结束位置 |
    
  - 说明 
    
      - 规定灵活项目是否拆行或拆列
      - 如果元素不是弹性盒对象的元素，则 flex-wrap 属性不起作用。
    
  - 例
    - 让弹性盒元素在必要的时候拆行：
      ```css
      display:flex;
      flex-wrap: wrap;
      ```



#### flex-flow

  > 复合属性。设置或检索弹性盒模型对象的子元素排列方式。

  - 语法
    ```css
    flex-flow: flex-direction flex-wrap|initial|inherit;
    ```
    
  - 说明 
    
      - 是 flex-direction 和 flex-wrap 属性的复合属性
      - 用于设置或检索弹性盒模型对象的子元素排列方式。
      - 如果元素不是弹性盒对象的元素，则 flex-flow 属性不起作用。
    
  - 例
    
    - 让弹性盒的元素以相反的顺序显示，且在必要的时候进行拆行：
      ```css
      display:flex;
      flex-flow:row-reverse wrap;
      ```



#### justify-content

  > 设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。

  - 语法
    ```css
    justify-content: flex-start|flex-end|center|space-between|space-around|initial|inherit;
    ```
    
  - 值说明

    | 值            | 描述                                                         |
    | :------------ | :----------------------------------------------------------- |
    | flex-start    | 默认值。从行首起始位置开始排列（左对齐）                     |
    | flex-end      | 从行尾位置开始排列（右对齐）                                 |
    | center        | 居中                                                         |
    | space-between | 两端对齐，项目之间的间隔都相等。                             |
    | space-evenly  | 均匀排列每个元素，每个元素之间的间隔相等                     |
    | space-around  | 每个项目两侧的间隔相等（项目之间的间隔比项目与边框的间隔大一倍） |

  - 说明 
    
    - 使用 `align-content` 属性对齐交叉轴上的各项（垂直）
    
  - 例
    - 设置主轴（横轴）元素两端对齐: `justify-content:space-between;`
      ```html
        <style>
          div, p {padding: 0px;margin: 0px;}
          div {width: 300px;height: 100px;display: flex;justify-content:space-between;}
          div p {width:80px;height: 100px;background-color: cadetblue;}
        </style>
        <div class="con">
          <p></p>
          <p></p>
        </div>
      ```

#### align-items

  > 定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式。

  - 语法
    ```css
    align-items: stretch|center|flex-start|flex-end|baseline|initial|inherit;
    ```
    
  - 值说明

    | 值         | 描述                                                     |
    | :--------- | :------------------------------------------------------- |
    | stretch    | 默认值。如果项目未设置高度或设为auto，将占满整个容器的高 |
    | center     | 元素位于容器的中间。中点对齐；                           |
    | flex-start | 元素位于容器的开头。起点对齐                             |
    | flex-end   | 元素位于容器的结尾。终点对齐                             |
    | baseline   | 项目的第一行文字的基线对齐                               |

  - 说明 
    
    - 定义 `flex` 子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式
    - 使用每个弹性对象元素的 `align-self` 属性可重写 `align-items` 属性
    
  - 例
    - 设置弹性盒模型对象的子元素在侧轴（纵轴）方向上居中对齐
      ```html
        <style>
          div, p {padding: 0px;margin: 0px;}
          div {width: 300px;height: 100px;display: flex;background-color: gray;align-items: center;}
          div p {width:50px;height: 20px;}
          p:nth-of-type(1) {background-color: rgb(190, 26, 26);}
          p:nth-of-type(2) {background-color: rgb(56, 133, 41);}
          p:nth-of-type(3) {background-color: rgb(73, 54, 158);}
        </style>
        <div class="con">
          <p></p>
          <p></p>
          <p></p>
        </div>
      ```



#### align-content

  > 在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）

  - 语法
    ```css
    align-content: stretch|center|flex-start|flex-end|space-between|space-around|initial|inherit;
    ```
    
  - 值说明
    
    | 值            | 描述                                                         |
    | :------------ | :----------------------------------------------------------- |
    | stretch       | 默认值。元素被**拉伸**以适应容器。<br />如果剩余空间是正数：剩余空间被所有行平分，每行尾都有相等值空隙<br />如果剩余空间是负数：该值等效于'flex-start' |
    | center        | 元素所有行紧靠一起，在弹性盒容器的**中心位置**堆叠。<br />如果剩余空间是正数：弹性盒容器侧轴起始、结束两边边界有相等值空隙<br />如果剩余空间是负数：弹性盒容器侧轴会向两个方向溢出的相等距离 |
    | flex-start    | 元素所有行紧靠一起，在弹性盒容器的**起始位置**堆叠。<br />如果剩余空间是正数：空隙在元素和结束位置之间<br />如果剩余空间是负数：弹性盒容器会向结束边界方向溢出 |
    | flex-end      | 元素所有行紧靠一起，在弹性盒容器的**结束位置**堆叠。<br />如果剩余空间是正数：空隙在起始位置和元素之间<br />如果剩余空间是负数：弹性盒容器会向起始边界方向溢出 |
    | space-between | 如果剩余空间是正数：均匀排列每行，首行紧靠起始边界，尾行紧靠结束边界，两两之间的空间相等<br />如果剩余空间是负数或弹性盒容器中只有一行：该值等效于'flex-start' |
    | space-around  | 如果剩余空间是正数：均匀排列每行，每行周围分配相同的空间<br />如果剩余的空间是负数或弹性盒容器中只有一行：该值等效于'center' |
    
  - 说明 
    - 容器内必须有多行的项目，该属性才能渲染出效果
    - 设置多行元素侧轴对齐方式

  - 例
    - 所有行紧靠一起，侧轴居中显示
      ```html
        <style>
          div, p {padding: 0px;margin: 0px;}
          div {width: 300px;height: 100px;display: flex;background-color: lightslategray;flex-wrap: wrap;align-content: center;}
          div p {width:300px;height: 20px;background-color: cadetblue;}
        </style>
        <div class="con">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      ```

### 弹性盒模型对象子元素的属性

#### flex-grow

  > 设置或检索弹性盒主轴方向的扩展比率（倍数）

  - 语法
    ```css
    flex-grow: number|initial|inherit;
    ```
    
  - 说明

    - *number*: 一个数字；规定项目相对于其他灵活的项目进行**扩展的量**。
    - 默认值是 `0`，即如果存在剩余空间，也不放大
    - 如果所有项目的`flex-grow`属性值相同，则它们将等分剩余空间
    - 如果元素不是弹性盒对象的元素，则 flex-grow 属性不起作用

  - 扩展量计算规则
    
    - 当前子元素扩展的量 = 主轴方向剩余的量 / 所有子元素 `flex-grow` 值相加的和 * 当前子元素`flex-grow`值
    
  - 例
    - 让第二个元素的宽度为其他元素的三倍：
      ```html
        <style>
          div, p {margin: 0px;padding: 0px;font-size: 0px;}
          div {width: 300px;height: 100px;display: flex;}
          div p {width: 70px;height: 100%;display: inline-block;}
          p:nth-of-type(1) {flex-grow: 1;background-color: rgb(190, 26, 26);}
          p:nth-of-type(2) {flex-grow: 3;background-color: rgb(56, 133, 41);}
          p:nth-of-type(3) {flex-grow: 1;background-color: rgb(73, 54, 158);}
        </style>
        <div class="con">
          <!-- 实际宽度: 88, 扩展量: 18 -->
          <p></p>
          <!-- 实际宽度: 124, 扩展量: 18 * 3 -->
          <p></p>
          <!-- 实际宽度: 88, 扩展量: 18 -->
          <p></p>
        </div>

        <!-- 计算： -->
        <!-- 主轴方向剩余的量 = 300 - 70 * 3 = 90 -->
        <!-- 所有子元素 `flex-grow` 值相加的和 = 1 + 3 + 1 = 5 -->
        <!-- 第二个元素的宽度扩展的量 = 90 / 5 * 3 = 54-->
      ```



#### flex-shrink

  > 设置或检索弹性盒主轴方向的收缩比率（倍数）

  - 语法
    ```css
    flex-shrink: number|initial|inherit;
    ```

  - 说明
    - *number*: 一个数字；规定项目将相对于其他灵活的项目进行**收缩的量**。
    - 默认值是 `1`；如果没有显示定义该属性，将会自动按照默认值1在所有因子相加之后计算比率来进行空间收缩
    - 如果元素不是弹性盒对象的元素，则 flex-shrink 属性不起作用
    - flex 元素仅在**默认宽度之和大于容器**的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值
- 负值对该属性无效
    
  - 收缩量计算规则
    
  - 当前子元素收缩的量 = 主轴方向超出的量 / 所有子元素 `flex-shrink` 值相加的和 * 当前子元素`flex-shrink`值
  
  - 例
    - 让第二个元素的宽度收缩的量为其他元素的三倍：
      ```html
        <style>
          div, p {margin: 0px;padding: 0px;font-size: 0px;}
          div {width: 300px;height: 100px;display: flex;}
          div p {width: 150px;height: 100%;display: inline-block;}
          p:nth-of-type(1) {flex-shrink: 1;background-color: rgb(190, 26, 26);}
          p:nth-of-type(2) {flex-shrink: 3;background-color: rgb(56, 133, 41);}
          p:nth-of-type(3) {flex-shrink: 1;background-color: rgb(73, 54, 158);}
        </style>
        <div class="con">
          <!-- 实际宽度: 120，收缩量：30 -->
          <p></p>
          <!-- 实际宽度: 60，收缩量：30 * 3 -->
          <p></p>
          <!-- 实际宽度: 120，收缩量：30 -->
          <p></p>
        </div>

        <!-- 计算： -->
        <!-- 主轴方向超出的量 = 150 * 3 - 300 = 150 -->
        <!-- 所有子元素 `flex-shrink` 值相加的和 = 1 + 3 + 1 = 5 -->
        <!-- 第二个元素的宽度收缩的量 = 150 / 5 * 3 = 90-->
      ```



#### flex-basis

  > 设置或检索弹性盒伸缩基准值(初始长度)

  - 语法
    ```css
    flex-basis: number|auto|initial|inherit;
    ```

  - 说明

    - **number**:  一个长度单位或者一个百分比，规定灵活项目的初始长度。
    - **auto**:  默认值; 长度等于灵活项目的长度。如果该项目未指定长度，则长度将根据内容决定。
    - 如果元素不是弹性盒对象的元素，则 `flex-basis` 属性不起作用
    - 相当于在有弹性盒对象的元素中设置`width`值
    - 优先级: `flex-basis` > `width`
  
  - 例
    - 当主轴方向有剩余的量时
      ```html
        <style>
          div, p {margin: 0px;padding: 0px;font-size: 0px;}
          div {width: 300px;height: 100px;display: flex;}
          div p {width: 85px;height: 100%;display: inline-block;flex-grow: 1;}
          p:nth-of-type(1) {background-color: rgb(190, 26, 26);}
          p:nth-of-type(2) {background-color: rgb(56, 133, 41);flex-basis: 70px;}
          p:nth-of-type(3) {background-color: rgb(73, 54, 158);}
        </style>
        <div class="con">
          <!-- 实际宽度: 85 + 20 = 105 -->
          <p></p>
          <!-- 实际宽度: 70 + 20 = 90 -->
          <p></p>
          <!-- 实际宽度: 85 + 20 = 105 -->
          <p></p>
        </div>

        <!-- 计算： -->
        <!-- 主轴方向剩余的量 = 300 - (2*85 + 70) = 60 -->
        <!-- 所有子元素 `flex-grow` 值相加的和 = 1 + 1 + 1 = 3 -->
        <!-- 元素扩展量 = 60 / 3 = 20-->
      ```
    
    - 当主轴方向有超出的量时
      ```html
        <style>
          div, p {margin: 0px;padding: 0px;font-size: 0px;}
          div {width: 300px;height: 100px;display: flex;}
          div p {width: 115px;height: 100%;display: inline-block;flex-shrink: 1;}
          p:nth-of-type(1) {background-color: rgb(190, 26, 26);}
          p:nth-of-type(2) {background-color: rgb(56, 133, 41);flex-basis: 100px;}
          p:nth-of-type(3) {background-color: rgb(73, 54, 158);}
        </style>
        <div class="con">
          <!-- 实际宽度: 115 - 10 = 105 -->
          <p></p>
          <!-- 实际宽度: 100 - 10 = 90 -->
          <p></p>
          <!-- 实际宽度: 115 - 10 = 105 -->
          <p></p>
        </div>

        <!-- 计算： -->
        <!-- 主轴方向超出的量 = (2 * 115 + 100) = 30 -->
        <!-- 所有子元素 `flex-shrink` 值相加的和 = 1 + 1 + 1 = 3 -->
        <!-- 元素收缩量 = 30 / 3 = 10-->
      ```



#### flex

  > 复合属性。设置或检索弹性盒模型对象的子元素如何分配空间

  - 语法

    ```css
    flex: flex-grow flex-shrink flex-basis|auto|initial|inherit;
    ```

  - 值说明

    - 默认值：0 1 auto
    - `auto`:  1 1 auto
    - `none`: 0 0 auto

  - 说明

    - 复合属性；`flex` 属性是 `flex-grow`、`flex-shrink` 和 `flex-basis` 属性的**简写属性**
    - `flex` 属性用于设置或检索弹性盒模型对象的子元素**如何分配空间**
    - 如果元素**不是弹性盒模型对象的子元素**，则 flex 属性**不起作用**

  - 例
    - 让所有弹性盒模型对象的子元素都有相同的长度（忽略它们内部的内容）: `flex: 1`
      ```html
        <style>
          div {width: 300px;height: 100px;display: flex;}
          div p {height: 100px;flex: 1}
        </style>
        <div class="con">
          <!-- 实际宽度: 100 -->
          <p></p>
          <!-- 实际宽度: 100 -->
          <p></p>
          <!-- 实际宽度: 100 -->
          <p></p>
        </div>
      ```
      

#### order

  > 设置或检索弹性盒模型对象的子元素出现的順序。

  - 语法
    ```css
    order: number|initial|inherit;
    ```
  - 说明
    - *number*: 一个数字；规定项目子元素展现**顺序值**。
    - 如果元素不是弹性盒对象的元素，则 `order` 属性不起作用。

  - 例
    - 设置弹性盒对象元素的顺序
      ```html
        <style>
          div {display: flex;}
          p:nth-of-type(1) {order: 1;}
          p:nth-of-type(2) {order: 3;}
          p:nth-of-type(3) {order: 2;}
        </style>
        <div class="con">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        
        <!-- 实际展现效果: 132 -->
      ```



#### align-self

  > 单独定义flex子项在侧轴（纵轴）方向上的对齐方式

  - 语法
    ```css
    align-self: auto|stretch|center|flex-start|flex-end|baseline|initial|inherit;
    ```
    
  - 值说明
    
    | 值         | 描述                                                         |
    | :--------- | :----------------------------------------------------------- |
    | auto       | 默认值。元素继承了它的父容器的 align-items 属性。如果没有父容器则为 "stretch"。 |
    | stretch    | 元素被拉伸以适应容器。如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。 |
    | center     | 元素位于容器的中心。弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。 |
    | flex-start | 元素位于容器的开头。弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。 |
    | flex-end   | 元素位于容器的结尾。弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。 |
    | baseline   | 元素位于容器的基线上。如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。 |
    
  - 说明
    
    - `align-self` 属性可重写灵活容器的 `align-items` 属性。

  - 例
    - 单独设置弹性盒模型对象的子元素在侧轴（纵轴）方向上的对齐方式
      ```html
        <style>
          div, p {padding: 0px;margin: 0px;}
          div {width: 300px;height: 100px;display: flex;background-color: gray;}
          div p {width:50px;height: 20px;}
          p:nth-of-type(1) {background-color: rgb(190, 26, 26);}
          p:nth-of-type(2) {background-color: rgb(56, 133, 41);align-self: center;}
          p:nth-of-type(3) {background-color: rgb(73, 54, 158);align-self: flex-end;}
        </style>
        <div class="con">
          <!-- 侧轴（高）顶部对齐 -->
          <p></p>
          <!-- 侧轴（高）居中 -->
          <p></p>
          <!-- 侧轴（高）底部对齐 -->
          <p></p>
        </div>
      ```


## 水平居中

  [⬆️ 返回顶部](#目录)

## 垂直居中

  [⬆️ 返回顶部](#目录)


## 水平垂直居中

  [⬆️ 返回顶部](#目录)


## 两列布局

  [⬆️ 返回顶部](#目录)


## 三列布局

  [⬆️ 返回顶部](#目录)


## 等分布局

  [⬆️ 返回顶部](#目录)


## Sticky-Footer布局

  [⬆️ 返回顶部](#目录)


## 全屏布局

  [⬆️ 返回顶部](#目录)
