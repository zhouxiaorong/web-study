# document 


# 数据类型
  > 数据类型指的就是字面量的类型

## 引用数据类型
### Object

## 基本数据类型
    - `String` 字符串
    - `Number` 数值
    - `Boolean` 布尔值
    - `Null` 空值
    - `Undefined` 未定义

### undefined
  - typeof检查类型
    - typeof undefined;// 'undefined'

### null
  - typeof检查类型
    - typeof null;// 'object'

### String
  > 字符串；

  - typeof检查类型
    - typeof 'abc';// 'string'

### Number
  > 数字；包括整数和浮点数
  
  - 特殊的数字
    - `Infinity` 正无穷
    - `-Infinity` 负无穷
    - `NaN` 非法数字（Not A Number）

  - typeof检查类型
    - typeof 3 // 'number'
    - typeof NaN // 'number'
    - typeof Infinity） // 'number'

### Boolean
  > 布尔值；主要用来进行逻辑判断
  - 值: 
    - `true` 真
    - `false` 假
  - typeof 检查类型
    - typeof false // 'boolean'

## 类型转换
  > 将其他的数据类型，转换为 `String`、`Number` 或 `Boolean`

### 转为String
  1. 强制类型转换: 调用被转换数据的`toString()`方法
    - 说明
      - `Number`、`Boolean`、`String`类型数据都可以调用该方法来转换
      - `null` 和 `undefined` 调用该方法时会报错(这两个类型的数据中没有方法)
    - 例
      ```js
        var a = 123;
        a = a.toString();
      ```
  2. 强制类型转换: 调用`String()`函数
    - 说明
      - `null`: 会直接转换为字符串 *"null"*
      - `undefined`: 直接转换为字符串 *"undefined"*
      - `Number`、`Boolean`、`String`也可以使用这个方法转换，但一般使用`toString()`
    - 例
      ```js
        var a = 123;
        a = String(a);
      ```
  3. 隐式的类型转换
    - 说明
      - `为任意的数据类型 +""`即可实现转换，原理和String()函数一样	
    - 例
      ```js
        var a = true;
        a = a + "";
      ```
		

### 转换为Number
  1. 强制类型转换: 调用`Number()`函数
    - 说明
      1. 字符串 --> 数字
        - 如果字符串是一个合法的数字，则直接转换为对应的数字
        - 如果字符串是一个非法的数字，则转换为NaN
        - 如果是一个空串或纯空格的字符串，则转换为0
      2. 布尔值 --> 数字
        - true: 转换为 1
        - false: 转换为 0
      3. 空值 --> 数字
        - null转换为0
      4. 未定义 --> 数字
        - undefined 转换为NaN
    - 例子：
      ```js
      var s = "123";
      s = Number(s);
      ```
        
  2. 强制类型转换: 调用`parseInt()`或`parseFloat()`
    - parseInt()
      - 可以将一个字符串中的有效的整数位提取出来，并转换为Number
      - 例子： 
        ```js
        var a = "123.456px";
        a = parseInt(a); //123
        ```
      - 如果需要可以在parseInt()中指定一个第二个参数，来指定进制	
        
    - parseFloat()
      - 可以将一个字符串中的有效的小数位提取出来，并转换为Number
      - 例子：
        ```js
        var a = "123.456px";
        a = parseFloat(a); //123.456
        ```
        
  3. 隐式的类型转换: 使用一元的`+`来进行隐式的类型转换
    - 例子：
      ```js
      var a = "123";
      a = +a;
      ```
    - 原理和Number()函数一样	
   
### 转换为布尔值
  1. 强制类型转换: 使用Boolean()函数
    - 例子：
      ```js
      var s = "false";
      s = Boolean(s); //true
      ```
    - 转换的情况
      字符串 --> 布尔
        - 除了空串其余全是true
        
      数值 --> 布尔
        - 除了0和NaN其余的全是true
        
      null、undefined ---> 布尔
        - 都是false
        
      对象 ---> 布尔
        - 都是true
  
  2. 隐式类型转换: `!!x`
    - 为任意的数据类型做两次非运算，即可将其转换为布尔值
    - 例子：	
      var a = "hello";
      a = !!a; //true


## 

# 运算符
## typeof运算符
  - 语法：
    - `typeof 变量`
  - 说明
    - 用来检查一个变量的数据类型
    - 它会返回一个用于描述类型的字符串作为结果

## 算数运算符
  - 语法
    `+`: 对两个值进行加法运算并返回结果
    `-`: 对两个值进行减法运算并返回结果
    `*`: 对两个值进行乘法运算并返回结果
    `/`: 对两个值进行除法运算并返回结果
    `%`: 对两个值进行取余运算并返回结果
  - 说明
    - 除了加法以外，对 *非Number* 类型的值进行运算时，都会先转换为Number然后在做运算。
    - 而做加法运算时，如果是两个字符串进行相加，则会做拼串操作，将两个字符连接为一个字符串。
    - 任何值和字符串做加法，都会先转换为字符串，然后再拼串

## 一元运算符
  - `+`
    - 说明
      - 将一个非数字转换为数字
      - 一元运算符只需要一个操作数
      - 一元的 `+` 就是正号，不会对值产生任何影响
    - 例子：
      ```js
      var a = true;
      a = +a;// 1
      ```
  - `-`
  - 就是负号，可以对一个数字进行符号位取反
  - 例子：
    ```js
    var a = 10;
    a = -a; // -10
    ```
    
## 自增
  - 语法: `++`
  - 说明
    - 自增可以使变量在原值的基础上自增1
    - 自增可以使用 前++（++a）后++(a++)
    - 无论是++a 还是 a++都会立即使原变量自增1
      不同的是++a和a++的值是不同的，
        ++a的值是变量的新值（自增后的值）
        a++的值是变量的原值（自增前的值）

## 自减	
  - 语法: `--`
  - 自减可以使变量在原值的基础上自减1
  - 自减可以使用 前--（--a）后--(a--)
  - 无论是--a 还是 a--都会立即使原变量自减1
    不同的是--a和a--的值是不同的，
      --a的值是变量的新值（自减后的值）
      a--的值是变量的原值（自减前的值）
		
		
## 方法
  - `document.write(str)`
    - 会将要输出的内容str写到body标签中，并在页面中显示