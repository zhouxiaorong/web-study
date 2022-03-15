# vue 内置指令


## v-bind

> 单向绑定解析表达式，可简写为 :xxx

  - 语法
    - `v-bind:xxx="解析表达式"`
    - 简写: `:xxx="解析表达式"`
  - 功能说明
    - 数据单向绑定；数据只能从data流向页面
  - 注意事项
  - 例
    ```html
      <div id="root">
        <div v-bind:vname="name" :vage="age"></div>
      </div>
      <script>
        new Vue({
          el: '#root',
          data: {
            name: 'zxr',
            age: 19
          }
        })
      </script>
    ```

## v-model

  > 双向数据绑定（一个变化另一个也会变化）

  - 语法
    - `v-model:xxx="解析表达式"`
    - `v-model:value="解析表达式"`可以简写成: `v-model="解析表达式"`
  - 功能说明
    - 双向数据绑定；数据不仅能从data流向页面，还可以从页面流向data。
    - v-model只能应用在表单类元素（输入类元素）上（如：input、select等）
    - v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。
  - v-model的三个修饰符：
    - lazy：失去焦点再收集数据
    - number：输入字符串转为有效的数字
    - trim：输入首尾空格过滤
  - 表单数据
    - 说明
      - **type="text"**: v-model收集的是value值，用户输入的就是value值。
      - **type="radio"**: v-model收集的是value值，且要给标签配置value值
      - **type="checkbox"**: 
        - 没有配置value属性时，那么收集的是布尔值（checked；勾选 or 未勾选）
        - v-model的初始值是非数组时，那么收集的就是checked（勾选 or 未勾选，是布尔值）
        - v-model的初始值是数组，那么收集的的就是value组成的数组
    - 例
      ```html
        <!-- 绑定value值，并将该值的首尾空格过滤 -->
        <input type="text" v-model.trim="name">
        
        <!-- 绑定value值，并将该值转为数字 -->
        <input type="number" v-model.number="age">
        
        <!-- 单选，必须给标签配置value值 -->
        男<input type="radio" name="sex" v-model="sex" value="male">
        女<input type="radio" name="sex" v-model="sex" value="female">
      
        <!-- 多选，必须给每个选项配置value值 -->
        学习<input type="checkbox" v-model="hobby" value="study">
        打游戏<input type="checkbox" v-model="hobby" value="game">
        吃饭<input type="checkbox" v-model="hobby" value="eat">
      
        
        <!-- 选择器，必须给每个选择配置value值 -->
        <select v-model="city">
          <option value="">请选择校区</option>
          <option value="beijing">北京</option>
          <option value="shanghai">上海</option>
          <option value="shenzhen">深圳</option>
          <option value="wuhan">武汉</option>
        </select>
      
        <script>
          new Vue({
            data: {
              name:'',
              age:18,
              sex:'female',
              hobby:[],//不为数组时，收集的是布尔值
              city:'beijing',
            }
          })
        </script>
      ```
  - 例
    - 简单数据双向数据绑定：
      ```html
        <div id="root">
          <input type="text" v-model="name"><br/>
        </div>
        <script>
          new Vue({
            el: '#root',
            data: {
              name: 'zxr'
            }
          })
        </script>
      ```

## v-on

> 绑定事件监听, 可简写为@

  - 语法
    ```html
      <div v-on:事件名="js表达式">
      <!-- 简写 -->
      <div @事件名="js表达式">
    ```
  - 功能说明
    - 绑定事件监听, 可简写为@
    - 修饰符可以连续写
  - 事件修饰符：
    1. prevent：常用；阻止默认事件
      - 比如a标签的自动跳转事件
    2. stop：常用；阻止事件冒泡
      - 父子都绑定事件时，如果不用`.stop`修饰符阻止，两个都会被调用
    3. once：常用；事件只触发一次
    4. capture：使用事件的捕获模式；
    5. self：只有*event.target*是当前操作的元素时才触发事件；
    6. passive：事件的默认行为立即执行，无需等待事件回调执行完毕；
  - 事件
    - 点击事件
      ```html
        <div id="root">
          <!-- @click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参； -->
          <button @click="showInfo1">点我提示信息1（不传参）</button>
          <button @click="showInfo2($event,66)">点我提示信息2（传参）</button>
        </div>
        <script>
          new Vue({
            el: '#root',
            methods: {
              showInfo1(event){
                // console.log(event.target.innerText)
                // console.log(this) //此处的this是vm
                alert('同学你好！')
              },
              showInfo2(event,number){
                console.log(event,number)
                // console.log(event.target.innerText)
                // console.log(this) //此处的this是vm
                alert('同学你好！！')
              }
            }
          })
        </script>
      ```
    - 按键事件
      - Vue中常用的按键别名
        - 回车 => enter
        - 删除 => delete (捕获“删除”和“退格”键)
        - 退出 => esc
        - 空格 => space
        - 换行 => tab (特殊，必须配合keydown去使用)
        - 上 => up
        - 下 => down
        - 左 => left
        - 右 => right
      - 自定义按键别名
        - `Vue.config.keyCodes.自定义键名 = 键码`
      - 系统修饰键（用法特殊）：ctrl、alt、shift、meta
        1. 配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
        2. 配合keydown使用：正常触发事件。
      - 说明
        - Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）
      - 例
        ```html
          <div id="root">
            <!-- enter -->
            <input type="text" placeholder="按下回车提示输入" @keydown.enter="showInfo">
            <!-- ctrl + enter -->
            <input type="text" placeholder="按下回车提示输入" @keydown.ctrl.enter="showInfo">
            <!-- 自定义按键别名 -->
            <input type="text" placeholder="按下回车提示输入" @keydown.huiche="showInfo">
          </div>
          <script>
            Vue.config.keyCodes.huiche = 13 //定义了一个别名按键
            new Vue({
              el: '#root',
              methods: {
                showInfo(e){
                  console.log(e.target.value)
                }
              }
            })
          </script>
        ```

## v-for

> 遍历数组/对象/字符串

  - 语法
    - `v-for="item in xxx" `
    - `v-for="item of xxx"`
    - `v-for="(item, index) in xxx" ` 
    - `v-for="(item, index) of items"`
    - `v-for="(value, name, index) in object"`

  - 参数
    - item: 循环过程中每一项的内容, 被迭代的数组元素的别名
    - index: 下标
    - name: 对象的键名
    - 可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法
  - 说明
    - 用于展示列表数据，基于一个数组来渲染一个列表
    - 可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）
    - 可以用 v-for 来遍历一个对象的属性（在遍历对象时，会按 Object.keys() 的结果遍历，但是不能保证它的结果在不同的 JavaScript 引擎下都一致。）
    - 可以访问所有父作用域的属性
  - 注意事项
    - 为了提升循环的性能，会给每个结构都打个唯一标识<span style="color:red">:key="yyy"</span>
    - :key 默认 index 值；不推荐用 index 比较费性能
    - 如果不用 *:key* ,<span style="color:blue">默认key值为idnex值</span>
    - 不推荐用 index；比较费性能；而且使用input等输入框时会错乱
  - 例
    - 遍历数值
      ```html
      <!-- v-for 也可以接受整数。在这种情况下，它会把模板重复对应次数 -->
      <span v-for="n in 10">{{ n }} </span>
      ```
    - 遍历数组
      ```html
        <ul>
          <li v-for="(item,index) in persons" :key="index">{{index}}-{{item.name}}</li>
        </ul>
        ↓↓↓↓↓↓↓
        0-张三
        1-李四
      ```
      ```js
        new Vue({
          el: '#root',
          data: {
            persons: [
              {id:1,name="张三"},
              {id:1,name="李四"}
            ]
          }
        })
      ```
    - 遍历对象
      ```html
        <ul>
          <li v-for="(value,key) in person" :key="key">{{key}}-{{value}}</li>
        </ul>
        ↓↓↓↓↓↓↓
        name-zxr
        age-18
      ```
      ```js
        new Vue({
          el: '#root',
          data: {
            person: {
              name: 'zxr',
              age: 18
            }
          }
        })
      ```
    - 遍历字符串
      ```html
        <ul>
          <li v-for="(char,index) in name" :key="index">{{index}}-{{char}}</li>
        </ul>
        ↓↓↓↓↓↓↓
        0-z
        1-x
        2-4
      ```
      ```js
        new Vue({
          el: '#root',
          data: {
            name: 'zxr'
          }
        })
      ```
    - 遍历指定次数
      ```html
        <ul>
          <li v-for="(number,index) in 3" :key="index">{{index}}-{{number}}</li>
        </ul>
        ↓↓↓↓↓↓↓
        0-1
        1-2
        2-3
      ```
      ```js
        new Vue({
          el: '#root',
          data: {
            name: 'zxr'
          }
        })
      ```


## :key
  - 语法
    - `:key="yyy"`
  - 说明
    - key是vue内部在用的  
    - 给节点一个唯一标识，相当于人类社会中的身份证号
    - `v-for`循环时，如果不写key，key值默认为'index' 
    - 可以用于强制替换元素/组件，而不是重复使用它
  
  - 注意事项
    - key 值要唯一
    - 不推荐用index，比较费性能，不能让vue充分的复用dom节点
    - 不要使用对象或数组之类的非基本类型值作为 v-for 的 key。请用字符串或数值类型的值
    - 有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误

  - 其他
    1. 虚拟DOM中key的作用：

      > key是虚拟DOM对象的标识，当数据发生变化时，Vue会根据【新数据】生成【新的虚拟DOM】, 
      >随后Vue进行【新虚拟DOM】与【旧虚拟DOM】的差异比较，比较规则如下：

    2. 对比规则：
          1. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
          ①.若虚拟DOM中内容没变, 直接使用之前的真实DOM！
          ②.若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM。

            2. 旧虚拟DOM中未找到与新虚拟DOM相同的key:
          
          
        创建新的真实DOM，随后渲染到到页面。
        
    3. 用index作为key可能会引发的问题：
          1. 若对数据进行逆序添加、逆序删除等破坏顺序操作:
            会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。

              2. 如果结构中还包含输入类的DOM：
            
            会产生错误DOM更新 ==> 界面有问题。
        
    4. 开发中如何选择key?:
          1. 最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号、学号等唯一值。
              2. 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，
              使用index作为key是没有问题的。

## v-if,v-else-if,v-else
  > 条件渲染（动态控制节点是否存存在）
  - 语法
    ```js
      <div v-if="表达式"></div>
      <div v-else-if="表达式"></div>
      <div v-else="表达式"></div>
    ```
  - 说明
    - 适用于切换频率较低的场景
    - 不展示的DOM元素直接被移除，元素无法获取到
    ```js
      <div v-if="1 == 1">111</div>
          ↓
      <!----------- ->
    ```
    - v-if可以和v-else-if\v-else一起使用,但要求结构不能被打断
  - 注意事项
    - 不推荐同时使用 v-if 和 v-for，当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级
    - v-else-if、v-else必须 **紧跟** 在带v-if或者v-else-if的元素 **之后** ，结构不能被打断，否则将不会被识别
  - 复用元素
    - Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染
    - 当input标签key值相同时，会被复用，不会清除复用的input标签用户已经输入的内容
      ```html
      <!-- input 标签不复用（添加 key） -->
      <div v-if="loginType === 'username'">
          <label>Username</label>
          <input placeholder="Enter your username" key="ua-input">
      </div>
      <div v-else>
          <label>Email</label>
          <input placeholder="Enter your email address" key="ua-input">
      </div>
      ```

  - 例
    - 用一组时,前端达成条件了,不会判断后面了
      ```js
        <div v-if="3 > 1">111</div>
        <div v-else-if="3 > 2">222</div>
            ↓
        <div>111</div>
      ```
    - 用一组时,不允许被打断,打断后面的无效,会报错
      ```js
        <div v-if="3 > 6">111</div>
        <div>222</div>
        <div v-else-if="3 > 2">333</div>
            ↓
        <div>222</div>
      ```
    - 一直用单个`v-if`时,每个都会单独判断显示
      ```js
        <div v-if="3 > 1">111</div>
        <div v-if="3 > 2">222</div>
            ↓
        <div>111</div>
        <div>222</div>
      ```
    - 有多个需要相同条件,但又不想在外面套一层破坏结构时可以和template一起配合使用
      ```js
        <template v-if="1===1">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </template>
            ↓
        <p>1</p>
        <p>2</p>
        <p>3</p>
      ```


## v-show
  > 条件渲染 (动态控制节点是否展示)
  - 语法
    ```html
    <div v-show="表达式"></div>
    ```
  - 说明
    - 适用于切换频率较低的场景
    - v-show 只是简单地切换元素的 CSS 属性 display
    - v-show 不支持 <template> 元素，也不支持 v-else
    - 带有 v-show 的元素始终会被渲染并保留在 DOM 中（不展示的DOM元素未被移除,仅仅是使用样式隐藏掉）
      ```js
        <div v-show="false"></div>
            ↓
        <div style="display:none"></div>
      ```
  - v-show 与 v-if 比较
    - 相同点
      - 都能够控制一个模板标签是否在页面上展示
    - 不同点
      - js表达式结果换为 false时，v-if会从页面上直接移除，而 v-show 则会以 display:none 方式隐藏
    - 说明
      - 一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换
      - 而使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

  - 例
    - 使用表达式
      ```js
        <div v-show="1 === 1"></div>
            ↓
        <div></div>
      ```

## v-text
  - 语法
    - `v-text="表达式"`
  - 作用
    - 向其所在的节点中渲染文本内容。
  - 与插值语法的区别
    - v-text会替换掉节点中的内容，{{xx}}则不会
  - 例
    ```html
      <div id="root">
        <div>你好，{{name}}</div>
        <div v-text="name"></div>
        <div v-text="str"></div>
      </div>
      <script>
        new Vue({
          el:'#root',
          data:{
            name:'zxr',
            str:'<h3>你好啊！</h3>'
          }
        })
      </script>
    
      ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
      
      <div id="root">
        <div>你好，zxr</div>
        <div>zxr</div>
        <div>&lt;h3&gt;你好啊！&lt;/h3&gt;</div>
      </div>
    ```

## v-html
  - 语法
    - `v-html="表达式"`
  - 作用
    - 向其所在的节点中渲染*html结构*。
  - 与插值语法的区别
    - *v-html*会替换掉节点中的内容，{{xx}}则不会
  - 注意事项
    - *v-html*存在性问题;
      1. 在网站上动态渲染任意HTML是非常危险的,容易导致XSS攻击
      2. 一定要在可信的内容上使用*v-html*,永不要用在用户提交的内容上
  - 例
    ```html
      <div id="root">
        <div>你好，{{name}}</div>
        <div v-html="name"></div>
        <div v-html="str"></div>
      </div>
      <script>
        new Vue({
          el:'#root',
          data:{
            name:'zxr',
            str:'<h3>你好啊！</h3>'
          }
        })
      </script>
    
      ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
      
      <div id="root">
        <div>你好，zxr</div>
        <div>zxr</div>
        <div><h3>你好啊！</h3></div>
      </div>
    ```

## v-cloak
  - 语法
    - `v-cloak`
  - 说明
    - 没有值
    - 本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。
    - 使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。
  - 例
    ```html
      <style>
        [v-cloak]{
          display:none;
        }
      </style>
      <div id="root">
        <h2 v-cloak>{{name}}</h2>
      </div>
			<script type="text/javascript" src="/vue.js"></script>
    
      <script type="text/javascript">
        new Vue({
          el:'#root',
          data:{
            name:'zxr'
          }
        })
      </script>
    
      ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    
      // JS阻塞未加载时,不显示模板数据(隐藏),等加载完,会删除v-cloak属性
    ```
    ```js
    ```
    ```js
    ```

## v-once
  - 语法
    - `v-once`
  - 说明
    - 属性,没有值
    - *v-once*所在节点在初次动态渲染后，就视为静态内容了。
    - 以后数据的改变不会引起*v-once*所在结构的更新，可以用于优化性能。
  - 例
    ```js
			<h2 v-once>初始化的n值是:{{n}}</h2>
    ```

## v-pre
  - 语法
    - `v-pre`
  - 说明
    - 属性,没有值
    - 会跳过其所在节点的编译过程,不会解析。
		- 可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。
  - 例
    ```js
      <div v-pre>{{name}}</div>
    
      ↓↓↓↓↓↓↓↓↓↓↓
      // vue不会解析它了
      <div v-pre>{{name}}</div>
    ```



## template
  > 模板占位符；可以包裹一些元素，但并不会真正渲染到页面上
  
  - 在 <template> 上使用 v-for：多个dom元素
    ```html
    <ul>
      <template v-for="item in items">
          <li>{{ item.msg }}</li>
          <li class="divider" role="presentation"></li>
      </template>
    </ul>

    <!-- 渲染为： -->
    <ul>
      <li>{{ item.msg }}</li>
      <li>{{ item.msg }}</li>
      <!-- ... -->
    </ul>
    ```


  