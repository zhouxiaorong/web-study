# 选项
## el
  > 挂载点；用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串
  - 语法
    ```js
      new Vue({
        el: '#root'
      })
    ```
  - 说明
    - 定义标签（要接管的 dom），实例属性
    - 也可以先创建Vue实例，之后再通过`vm.$mount('#root')`指定el的值
    ```html
      <div id="root">{{ name }}</div>
      <script>
        new Vue({
        })
        Vue.$mount('#root');
      </script>
    ```

## template  
  - 语法
    ```js
      new Vue({
        template: `模板语法`
      })
    ```
  - 说明
    - 一个字符串模板作为 Vue 实例的标识使用。模板将会替换挂载的元素。挂载元素的内容都将被忽略，除非模板的内容有分发插槽。
    - 如果 Vue 选项中包含渲染函数，该模板将被忽略。


## data
  > 用于存储数据，数据供el所指定的容器去使用，
  - 语法
    - 数据，实例属性
    - 对象式：data 的第一种写法
      ```js
        new Vue({
          data(){
            // ...
          }
        })
      ```
    - 函数式：data 的第二种写法
      ```js
        new Vue({
          data(){
            return {
              // ...
            }
          }
        })
      ```
  - 说明
    - data中的this指向Vue实例对象
    - 定义组件时，data必须写成函数式 →→→ 会报错；也需要避免组件被复用时，数据存在引用关系（一个改变，都改变了）
    - data中所有的属性，最后都出现在了vm身上
    - vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。
    - 当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入到 Vue 的响应式系统中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。当这些数据改变时，视图会进行重渲染
  - 注意事项
    - 一开始为空或不存在的属性，不会触发任何视图的更新
    - 只有当实例被创建时就已经存在于 data 中的 property 才是响应式的（对实例创建后新添加的 propert  的改动不会触发任何视图的更新）
    - 使用 `Object.freeze(vm)` 会阻止修改现有的 *property* ，响应系统无法再追踪 Vue 实例 vm 的变化
  - 数据代理
    - 通过vm对象来代理data对象中属性的操作（读/写）
    - 好处: 更加方便的操作data中的数据
    - 原理
      1. 通过Object.defineProperty()把data对象中所有属性添加到vm上。
      2. 为每一个添加到vm上的属性，都指定一个getter/setter。
      3. 在getter/setter内部去操作（读/写）data中对应的属性。
  - 例
    - 数组，直接赋值时不会监听，dom中值不会更改
	    ```js
			const vm = new Vue({
				el:'#root',
				data:{
					persons:[
						{id:'001',name:'马冬梅',age:30,sex:'女'},
						{id:'002',name:'周冬雨',age:31,sex:'女'},
						{id:'003',name:'周杰伦',age:18,sex:'男'},
						{id:'004',name:'温兆伦',age:19,sex:'男'}
					]
				},
				methods: {
					updateMei(){
						// this.persons[0].name = '张三' //奏效
						// this.persons[0].age = 50 //奏效
						// this.persons[0].sex = '男' //奏效
						// this.persons[0] = {id:'001',name:'李四',age:50,sex:'男'} //不奏效
						this.persons.splice(0,1,{id:'001',name:'王五',age:50,sex:'男'})//奏效
					}
				}
  		}) 
      ```

## methods
  - 语法
    ```js
    new Vue({
      methods:{
        方法名(){
          // ...
        }
      }
    })
    ```
  - 说明 
    - 自定义方法，实例方法
  - 注意事项
    - methods中配置的函数，不要用箭头函数！否则this就不是vm了；
    - methods中配置的函数，都是被Vue所管理的函数
    - 没有缓存机制，***每次都重新计算渲染***
  - this
    - 默认指向vue实例对象或组件实例对象；
    - 为箭头函数时，指向window

## computed
  - 语法
    ```js
      new Vue({
        computed: {
          // 简写
          xx(){
            // return ....;
          },
          xxx(){
            // 当有人读取时,get会被调用，返回值为xxx的值
            get(){
              // return ....;
            },
            // 当xxx被修改时会被调用
            set(value){
            }
          }
        }
      })
    ```
  - 功能说明
    - 要用的属性不存在，要通过已有属性计算得来。
    - 计算属性最终会出现在vm上，直接读取使用即可
    - 原理：底层借助了 *Objcet.defineproperty* 方法提供的*getter*和*setter*。
    - get函数会在**初次读取时**和**所依赖的数据改变时**调用执行
    - 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变。
  - 注意事项
    - 内置缓存，如果 ***依赖的值没有发生改变*** ，就 ***不会重新计算***
  - 与*methods*相比优势 
    - 内部有缓存机制（复用），效率更高，调试方便。
  - 例
    ```html
      <div id="root">
        <div>{{ fName }}</div>
        <div>{{ fullName }}</div>
      </div>
    
      <script>
        new Vue({
          el: '#root',
          data: {
            fName: 'z',
            lName: 'xr'
          },
          computed: {
            fName(){
              return this.fName+'-'+this.lName;
            },
            fullName(){
              get(){
                return this.fName+'-'+this.lName;
              },
              set(value){
                const arr = value.split('-')
                this.fName = arr[0]
                this.lName = arr[1]
              }
            }
          }
        })
      </script>
    ```

## watch
  - 语法
    - `watch: { [key: string]: string | Function | Object | Array }`
    - 第一种写法: 
      ```js
        var vm = new Vue({
          watch: {
            xx: {
            immediate:true, // true: 初始化时handler会被调用 false: 默认，不会被调用
            deep:true, // 监听对象内部值的变化
            // 当xx发生改变时会被调用 newValue: 新的值  oldValue: 旧的值，初始化调用时为 undefined
            handler(newValue,oldValue){
              console.log('isHot被修改了',newValue,oldValue)
            }
            }
          }
        })
      ```
    - 第二种写法
      ```js
        vm.$watch('isHot',{
          immediate:true, //初始化时让handler调用一下
          //handler什么时候调用？当isHot发生改变时。
          handler(newValue,oldValue){
            console.log('isHot被修改了',newValue,oldValue)
          }
        })
      ```
    - 简写
      ```js
        vm.$watch('xx',(newValue,oldValue)=>{
          console.log('xx被修改了',newValue,oldValue,this)
        }) 
      ```
  
  - 参数
    - *immediate*: true: 初始化时handler会被调用 false: 默认，不会被调用
    - *deep*: true: 监听对象内部值的变化 false: 默认，不监听

  - 深度监视：
    1. Vue中的watch默认不监测对象内部值的改变（一层）。
    2. 配置deep:true可以监测对象内部值改变（多层）。

  - 功能说明
    - 当被监视的属性变化时, 回调函数自动调用, 进行相关操作
    - 监视的属性必须存在，才能进行监视！！

  - 注意事项
    - 有缓存，和 ***不相关*** 的内容改变时，页面 ***不会重新渲染***
    - Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以！
    - 使用watch时根据数据的具体结构，决定是否采用深度监视。
    - 不能使用箭头函数来定义 watch 函数
      > 箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。

  - **computed** 和 **watch** 之间的区别
    1. computed能完成的功能，watch都可以完成。
    2. watch能完成的功能，computed不一定能完成
    3. watch可以进行异步操作；computed不可以
    


    
## filters
  > 过滤器
  - 语法
    - 注册过滤器：Vue.filter(name,callback) 或 new Vue{filters:{}}
    - 使用过滤器：{{ xxx | 过滤器名}}  或  v-bind:属性 = "xxx | 过滤器名"
    - `xx | 过滤器名(参数)`
    - 全局过滤器
      ```js
        Vue.filter('过滤器名',function(value){
          return value.slice(0,4)
        })
      ```
    - 局部过滤器
      ```js
        new Vue({
          filters:{
            // 第一个value值固定，参数从第二个开始传入
            过滤器名(value,str='默认值'){
              // console.log('@',value)
              return dayjs(value).format(str)
            }
          }
        })
      ```
  - 功能说明
    - 对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）。
    - 过滤器也可以接收额外参数、多个过滤器也可以串联
    - 并没有改变原本的数据, 是产生新的对应的数据
  - 例
    ```html
			<!-- 过滤器 -->
			<h3>现在是：{{time | timeFormater}}</h3>
			<!-- 过滤器（传参） -->
			<h3>现在是：{{time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
		```

      <script>
            
        //全局过滤器
        Vue.filter('mySlice',function(value){
          return value.slice(0,4)
        })
    
        //局部过滤器
        new Vue({
          filters:{
            timeFormater(value,str='YYYY年MM月DD日 HH:mm:ss'){
              // console.log('@',value)
              return dayjs(value).format(str)
            }
          }
        })
      </script>
    ```



## render

## renderError

## propsData

## parent
## mixins
    - Vue.mixin();
## extends
## provide / inject

## name
## delimiters
## functional
## model
## inheritAttrs
## comments

## directives
  > 自定义指令
  
  - [自定义指令](#自定义指令)

## components
  > 局部注册组件
  
  - [组件](vue-6-组件.md)

## props
  > 用于接收来自父组件的数据
  
  - [组件间通信，父传子](vue-10-组件通信.md#父传子：props)

