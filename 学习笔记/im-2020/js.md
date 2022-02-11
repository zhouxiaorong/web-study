
## 函数
  - **函数说明**
    - 必须先定义，然后才能使用
    - 函数不调用，内部语句就不会执行
    - 语句的封装，可以让代码被复用
    - 具有`一次定义，多次调用`的优点
    - 可以简化问题，让代码更具有可读性
  - **定义函数**
    - `function`: 必须，使用`function`关键字定义函数
    - 函数名: 必须符合js标识符命名规则
    - 圆括号`()`: 必须，里面是形参列表  
    ```js
      function fun1(){
        // 函数体语句
      }
      // 匿名函数
      var fun2 = function(){
        // 函数体语句
      }
    ```
  - **调用函数**
    - 执行函数体中的所有语句，就称为“调用函数”
    - 使用`函数名 + 圆括号对()`调用函数
    - 圆括号`()`: 必须，里面填写实参列表  
    ```js
      fun1();//调用函数fun1
    ```
  - **函数的参数与返回值**
    - 参数
      - 是函数内的一些待定值，在调用函数时，必须传入这些参数的具体值
      - 函数可以没有参数，也可以有多个参数，多个参数之间需要用逗号`,`隔开
      - 定义函数: 圆括号中定义‘形式参数’
      - 调用函数: 圆括号中传入‘实际参数’
      - `arguments`: 类数组对象，表示函数接收到的***实参列表***
    - 返回值
      - 使用关键字`return`表示***函数的返回值***
      - 函数的返回值可以被变量接收
      - 调用一个有返回值的函数，可以被当做一个普通值，从而可以出现在任何可以书写值的地方
      - 调用函数时，一旦遇见`return`语句，就会立即退出函数，将执行权交还给调用者
    - 例
      ```js
      function sum(a, b){
        if(isNaN(a) || isNaN(b)) return 0;
        return parseFloat(a) + parseFloat(b);// 函数的返回值
      }
      var v1 = sum(1, 2) * sum(3, 4);
      var v2 = sum(1, sum(2, 3));
      ```
  - **函数声明的提升**
    - 函数定义在预解析阶段会被提升
      ```js
        fun();// 弹出A
        function fun(){
          alert('A');
        }
        // 等于
        function fun(x){
          alert('A');
        }
        fun();// 弹出A
      ```
    - 如果函数是用函数表达式的写法定义的，则没有提升特性
      ```js
      fun(); // 引发错误
      var fun = function(){
        alert('A');
      }
      ```
    - 函数定义比变量声明优化提升，且变量声明无法覆盖提升的函数
      ```js
      fun();// 弹出 B
      var fun = function(){
        alert('A');
      }
      function fun(){
        alert('B');
      }
      fun();// 弹出 A
      ```
  

## 对象
### 类数组对象
  - 类数组对象`arguments`
    - 所有属性均为从`0`开始的自然数序列
    - 有`length`属性
    - 可以用方括号书写下标访问对象的某个属性值: arguments[x]
    - 不能调用数组的方法
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


