# vue 过度与动画

## transition组件
  - 说明
    - 封装组件
    - 可以给任何元素和组件添加进入/离开过渡
    - 应用于 v-if, v-show, 动态组件、组件根节点
    - 当一个元素被 transition 包裹住后，vue 会自动分析元素 css 样式，构建动画流程

## transition-group组件，列表过渡
  - 说明
    - 会以真实元素呈现
    - 默认 `<span></span>`
    - 可以用 [tag](#tag) 属性设置标签名
    - 经常和 `v-for` 指令配合使用
    - 相当于给列表每一项外都套了一层 `<transition></transition>`
  
  - 注意事项
    - 不仅可以进入和离开动画，还可以 *改变定位*
    - 每个元素都要指定```key```值。
    - css 过渡的类将会应用在内部的元素中，而不是这个组/容器本身
  
  - 例
    ```html
    <transition-group tag="ul">
      <!-- ... -->
    </transition-group>

    <!-- 渲染为： -->
    <ul>
      <!-- ... -->
    </ul>
    ```

    ```html
    <transition-group name="list" tag="p">
      <span v-for="item in items" v-bind:key="item">
        {{ item }}
      </span>
    </transition-group>
    ```

## 属性
### name
  > 设置类名前缀

  - 不设置: 默认类名前缀为`v-`
    ```html
    <transition>
      <!-- ... -->
    </transition>
    <style>
    .v-enter {}
    .v-enter-active {}
    .v-enter-to {}
    .v-leave {}
    .v-leave-active {}
    .v-leave-to {}
    </style>
    ```
  
  - 设置: 参数值会替换掉`v-``abc-enter`
    ```html
    <transition name="t-prefix">
      <!-- ... -->
    </transition>
    <style>
    .t-prefix-enter {}
    .t-prefix-enter-active {}
    .t-prefix-enter-to {}
    .t-prefix-leave {}
    .t-prefix-leave-active {}
    .t-prefix-leave-to {}
    </style>
    ```

### appear
  > 设置节点在 **初始渲染** 的过渡

  - 可以自定义 CSS 类名。
    ```html
    <transition appear
                appear-class="类名"
                appear-active-class="类名"
                appear-to-class="类名"
    >
      <!-- ... -->
    </transition>
    ```
  
  - 可以自定义 JavaScript 钩子
    ```html
    <!-- 无论是 appear 还是 v-on:appear 钩子都会生成初始渲染过渡 -->
    <transition appear
                v-on:before-appear="customBeforeAppearHook"
                v-on:appear="customAppearHook"
                v-on:after-appear="customAfterAppearHook"
                v-on:appear-cancelled="customAppearCancelledHook"
    >
      <!-- ... -->
    </transition>
    ```


### duration
  > 设置显性的过渡 **持续时间**   
  > 单位:  **毫秒**

  - 同时设置 显示、隐藏 时长
    ```html
    <!--  -->
    <transition :duration="1000">...</transition>
    ```
  - 分开设置  显示、隐藏 时长
    - **enter**: 显示的时长，leave
    - **leave**: 隐藏的时长
    ```html
    <transition :duration="{enter: 5000, leave: 10000}">
    </transition>
    ```

### type
  > 确定以哪个动画时长为准

  - `type="transition"`: 以 transition 动画时间为准

### mode
  > 设置过渡模式

  - 写法
    ```html
    <transition mode="out-in">
      <!-- ... the buttons ... -->
    </transition>
    ```

  - `in-out`: 
    - 先进入再隐藏
    - 新元素先进行过渡，完成之后当前元素过渡离开
    - 不是经常用到

  - `out-in`: 
    - 先隐藏再进行
    - 当前元素先进行过渡，完成之后新元素过渡进入


### tag
  - 设置 `transition-group` 属性标签名
  - transition-group 会以真实元素呈现

  ```html
  <transition-group tag="ul">
    <!-- ... -->
  </transition-group>

  <!-- 渲染为： -->
  <ul>
    <!-- ... -->
  </ul>
  ```

### enter-class、enter-active-class、enter-to-class、leave-class、leave-active-class、leave-to-class、move-class

  - [自定义类名](#自定义类名)

## 类名
### 直接使用类名
  - 默认类名前缀`v-`
  
  - **v-enter**
    - 进入的起点
    - 在第一帧时添加，第二帧时移除
    - 在元素被插入之前生效，在元素被插入之后的下一帧移除

  - **v-enter-active**
    - 进入过程中
    - 在第一帧时添加，最后一帧移除
    - 从动画的开始到结束 **一直存在**
    - 在元素被插入之前生效，在过渡/动画完成之后移除。
    - 可以定义进入过渡的过程时间，延迟和曲线函数

  - **v-enter-to**
    - 进入的终点
    - 在第二帧时添加，最后一帧移除
    - 在元素被插入之后下一帧生效(与此同时 v-enter 被移除)
    - 在过渡/动画完成之后移除

  - **v-leave**
    - 离开的起点
    - 在第一帧时添加，第二帧时移除
    - 在 **离开过渡被触发时** 立刻生效，下一帧被移除

  - **v-leave-active**
    - 离开过程中
    - 在第一帧时添加，最后一帧移除
    - 在离开过渡被触发时立刻生效，在过渡/动画完成之后移除
    - 可以定义离开过渡的过程时间，延迟和曲线函数
  
  - **v-leave-to**
    - 离开的终点
    - 在第二帧时添加，最后一帧移除
    - 在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除

  - **v-move**
    - `transition-group` 组件专用
    - 在元素的改变定位的过程中应用
    - 设置过渡的切换时机和过渡曲线


### 自定义类名
  - 注意事项
    - 优先级高于普通的类名
    - 适合与第三方 CSS 动画库结合使用（如：Animate.css）
  - 属性说明
    - `enter-class="类名"`: 相当于直接设置`.v-enter:{}`
    - `enter-active-class="类名"`:  相当于直接设置`.v-enter-active:{}`
    - `enter-to-class="类名"`:  相当于直接设置`.v-enter-to:{}`
    - `leave-class="类名"`:  相当于直接设置`.v-leave:{}`
    - `leave-active-class="类名"`:  相当于直接设置`.v-leave-active:{}`
    - `leave-to-class="类名"`:  相当于直接设置`.v-leave-to:{}`
    - `move-class="类名"`:  相当于直接设置`.v-move:{}`
  - 例
    ```html
    <style>
    .t-prefix-enter {}
    .t-prefix-enter-active {}
    .t-prefix-enter-to {}
    .t-prefix-leave {}
    .t-prefix-leave-active {}
    .t-prefix-leave-to {}
    </style>
    <transition enter-class="t-prefix-enter"
                enter-class="t-prefix-enter-active"
                enter-class="t-prefix-enter-to"
                leave-class="t-prefix-leave"
                leave-class="t-prefix-leave-active"
                leave-class="t-prefix-leave-to"
    >
      <!-- ... -->
    </>
    ```

## 绑定动画事件
  - 入场动画事件
    - `@before-enter="beforeEnter"` 事件
    - `@enter="enter"` 事件
      - 当 `@before-enter` 事件结束之后，运行动画效果时
      - 动画效果都写在这个事件中
    - `@after-enter="afterEnter"` 事件
      - 当 done 调用之后， 触发的事件
  
  - 出场动画事件
    - `@before-leave` 事件
    - `@leave` 事件
    - `@after-leave` 事件

  - 说明
    - 可以使用第三方库: velocity.js
    - 可以结合 CSS transitions/animations 使用，也可以单独使用
    - `v-bind:css="false"` 添加该属性时，Vue 会跳过 CSS 的检测
  - 注意事项
    
    - 当只用 JavaScript 过渡的时候，在 enter 和 leave 中必须使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。
  - 例
    ```js
    new Vue({
      methods: {
        beforeEnter: function (el) {
          // ...
        },
        // 当与 CSS 结合使用时，回调函数 done 是可选的
        enter: function (el, done) {
          // ...
          done()
        },
        afterEnter: function (el) {
          // ...
        },
        enterCancelled: function (el) {
          // ...
        },

        beforeLeave: function (el) {
          // ...
        },
        // 当与 CSS 结合使用时，回调函数 done 是可选的
        leave: function (el, done) {
          // ...
          done()
        },
        afterLeave: function (el) {
          // ...
        },
        // leaveCancelled 只用于 v-show 中
        leaveCancelled: function (el) {
          // ...
        }
      }
    })
    ```


## 复用过渡
  1. 将 `<transition>` 或者 `<transition-group>` 作为根组件
  2. 将其他任何子组件放置在其中

## 动态过渡

## 例
  - css过渡
    ```html
    <style>
      /* 可以设置不同的进入和离开动画 */
      /* 设置持续时间和动画函数 */
      .slide-fade-enter-active {
        transition: all .3s ease;
      }
      .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
      }
      .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
      }
    </style>
    <div id="example-1">
      <button @click="show = !show">
        Toggle render
      </button>
      <transition name="slide-fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
    <script>
      new Vue({
        el: '#example-1',
        data: {
          show: true
        }
      })
    </script>
    ```
  
  - css动画（动画中 v-enter 类名在节点插入 DOM 后不会立即删除，而是在 animationend 事件触发时删除）
    ```html
    <style>
      .bounce-enter-active {
        animation: bounce-in .5s;
      }
      .bounce-leave-active {
        animation: bounce-in .5s reverse;
      }
      @keyframes bounce-in {
        0% {
          transform: scale(0);
        }
        50% {
          transform: scale(1.5);
        }
        100% {
          transform: scale(1);
        }
      }
    </style>
    <div id="example-2">
      <button @click="show = !show">Toggle show</button>
      <transition name="bounce">
        <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
      </transition>
    </div>
    <script>
      new Vue({
        el: '#example-2',
        data: {
          show: true
        }
      })
    </script>
    ```
  
  - bb
    ```html
    <style>

    </style>

    <script>

    </script>
    ```



