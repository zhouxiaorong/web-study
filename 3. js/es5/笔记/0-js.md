# JavaScript
  > JavaScript是函数级作用域编程语言

## 目录
  - [basic](#basic)
    - [作用域](#作用域)
    - [闭包](#闭包)
    - [立即执行函数iife](#立即执行函数iife)
  - [对象](#对象)
    - [类数组对象](#类数组对象)
  - [数据类型](#数据类型)
    - [数组](#数组)
  - [算法](#算法)
    - [递归](#递归)
  
## basic

### 作用域
  - ***局部变量***
    - 在`function`内部中定义的变量，只在其函数内部有意义
      ```js
        function fun(){
          // fun函数就是a的‘作用域’
          var a = 10;
          console.log(a);
        }
        fun();//输出：10
        console.log(a);// 报错：VM75:6 Uncaught ReferenceError: a is not defined
      ```
    - 形参也是局部变量
      ```JS
      var a = 10;
      function fun(a){
        a++;
        console.log(a);
      }
      fun(5);// 输出：6
      console.log(a);// 输出：10
      ``` 
  - ***全局变量***
    - 变量没有定义在任何函数的内部，就是`全局变量`
    - 全局变量在**任何**函数内都可以被访问和更改
      ```js
      var a = 10;//全局变量
      function fun(){
        a++;
        console.log(a);//输出：11
      }
      fun();
      console.log(a);//输出：11
      ```
    - 在函数中初次给变量赋值时，如果不加var，则会定义全局变量
      ```js
      function fun(){
        a = 5;// 全局变量
        console.log(a);//输出：5
      }
      fun();
      console.log(a);//输出：5
      ```
  - ***遮蔽效应***
    - 如果函数中定义了和全局同名的变量，则函数内的变量会将全局的变量‘遮蔽’
    ```js
    var a = 10;//全局变量
    function fun(){
      var a = 5;//局部变量
      a++;
      console.log(a);
    }
    fun();//输出：6
    console.log(a);//输出：10
    ```
  - ***变量提升***
    ```js
    var a = 10;
    function fun(){
      a++;
      var a = 5;
      console.log(a);
    }
    fun();// 输出：5
    console.log(a);// 输出：10
    ```
  - ***作用域链***
    - 在函数嵌套中，变量会从内到外逐层寻找它的定义
    ```js
    var a = 3;
    var b = 4;
    function fun1(){
      var c = 5;
      function fun2(){
        var a = 6;
        var d = 7;
        console.log(a, b, c, d);
      }
      fun2();
    }
    fun1();// 输出：6, 4, 5, 7
    ```

### 闭包
  > 闭包是函数本身和该函数声明时所处的环境状态的组合  
  > 每次创建函数时都会创建闭包  
  - 功能: 
    - 记忆性
      > 当闭包产生时，函数所处环境的状态会始终保持在内存中，不会在外层函数调用后被自动清除
      > 能够记住其定义时所处的环境，即使函数不在其定义的环境中被调用，也能访问其定义时所处环境的变量
      ```js
      function fun1(){
        var a = 5;
        function fun2(){
          return a;
        }
        return fun2;
      }
      var fun3 = fun1();
      console.log(fun3());// 输出：5
      ```
    - 模拟私有变量
  - 注意点
    - 不能滥用闭包，否则会造成网页的性能问题，严重时可能导致内存泄露
      > 所谓内存泄露是指程序中以动态分配的内存由于某种原因未释放或无法释放
  - 相关面试题
    ```js
    function fun(){
      var count = 0;
      return function(){
        count = count + 1;
        console.log(count);
      };
    }
    var fun1 = fun();
    var fun2 = fun();
    fun1();// 1
    fun2();// 1
    fun2();// 2
    fun1();// 2
    ```


### 立即执行函数IIFE
  > IIFE(Immediately Invoked Function Expression)立即调用函数表达式，是一种特殊的JavaScript函数写法  
  > 一旦被定义，就立即被调用
  - 定义
    ```js
    // 第一个圆括号: 将函数变为表达式
    // 第二个圆括号: 运行函数
    (function(){
      // function body
    })();
    (function(){ }());
    +(function(){ })();
    -(function(){ })();
    ```
  - 作用
    - 为变量赋值
      > 当给变量赋值需要一些较为复杂的计算时，使用IIFE显得语法更紧凑
      ```js
      var age = 12;
      var sex = '女';
      var title = (function(){
        if(age < 18){
          return '小朋友';
        }else{
          if(sex == '男'){
            return '先生';
          }else{
            return '女士';
          }
        }
      })();
      console.log(age, sex, title); // 12 女 小朋友
      ```
    - 将全局变量变为局部变量
      > IIFE可以在一些场合将全局变量变为局部变量
      ```js
        // i 为全局变量
        var arr2 = [];
        for(var i = 0; i < 5; i++){
          arr2.push(function(){
            console.log(i);
          })
        }
        arr2[2]();// 5
      ```
      ```js
        var arr = [];
        for(var i = 0; i < 5; i++){
          (function(i){
            // 此时 i 为局部变量
            arr.push(function(){
              console.log(i);
            })
          })(i);
        }
        arr[2]();// 2
      ```


  [⬆️ 返回顶部](#目录)

## 对象
### 类数组对象
  - 类数组对象`arguments`
    - 所有属性均为从`0`开始的自然数序列
    - 有`length`属性
    - 可以用方括号书写下标访问对象的某个属性值: arguments[x]
    - 不能调用数组的方法
    
  [⬆️ 返回顶部](#目录)

## 数据类型
### 数组
  - `sort`方法
    - 排序，参数是一个函数
    - 该函数有两个参数，分别为数组中靠前和先后的项
    - 在该函数中，需要交换位置时返回任意正数，否则就返回负数
    - 例
      ```js
      var arr = [3,5,1,7,2];
      arr.sort(function(a, b){
        return a - b;
      })
      ```

  [⬆️ 返回顶部](#目录)

## 算法
### 递归
  - 说明: 函数的内部语句可以`调用这个函数自身`，从而发起对函数的`一次迭代`。在新的迭代中，又会执行调用函数自身的语句，从而又产生一次迭代。当函数执行到某一次时，不再进行新的迭代，函数被一层一层返回，函数被递归
  - 递归是一种较为`高级的编程技巧`，它把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解。
  - 要素
    - 边界条件：确定递归到何时终止，也称为`递归出口`
    - 递归模式：大问题是如何分解为小问题的，也称为`递归体`
  - 例: 
    ```js 
    // 斐波那契数列
    function fun (x) {
      if (x == 0 || x == 1) { return 1; }
      return fun(x - 1) + fun(x - 2);
    }
    console.log('value:' + fun(9)); // 55
    ```  
    ```js
    // 数组深克隆
    function fun (arr) {
      if (!Array.isArray(arr)) {
        return arr;
      }
      var res = [];
      arr.forEach(function (item) {
        res.push(fun(item));
      })
      return res;
    }
    var arr = [1, 2, [3, 4, [5, 6]]];
    var arr1 = arr;
    console.log(arr == arr1); // true
    var arr2 = fun(arr);
    console.log(arr == arr2); // false
    console.log(arr[2] == arr2[2]); // false
    console.log(arr[2][2] == arr2[2][2]); // false
    ```

  [⬆️ 返回顶部](#目录)