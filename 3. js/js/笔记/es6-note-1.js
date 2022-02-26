// 'use strict';

{
    /*
        严格模式： 'use strict';
    */
}

// 1- var let const
{
    {
        /*
            var : 
                1. 声明变量
                2. 使用 var 声明变量，在方法内部是局部变量，在方法外部是全局变量 => example_1();
                3. 存在变量提升（即脚本开始运行时，用 var 声明的变量就已经存在了，但是没有值，所以会输出 undefined）
                4. 在代码块之外调用 var 变量时（使用之后），var 声明的变量会返回正确的值
    
            let :
                1. es6 新增，用于声明变量
                2. 其用法类似于var，但是所声明的变量只在 let 命令所在的代码块内有效 => example_1();
                3. let 变量不存在变量提升
                4. 在代码块之外调用 let 变量时，let 声明的变量报错
                5. 不允许在相同作用域内，重复声明同一个变量
                6. 不允许在函数内部重新声明参数
                7. 允许在函数内部的块级作用域内重新声明参数
    
    
            const：
                1. 声明常量
                2. 
    
            let、var区别：
                1. let声明的变量只在所在的代码块内有效，毁在方法外部使用var声明的变量全局有效 => 
                2. let不存在变量提升，var会发生变量提升 => example_1_test();
                3. let不允许在相同作用域内重复声明同一个变量，var允许在相同作用域内重复声明同一个变量
                4. let不允许在函数内部重新声明参数，var允许在函数内部重新声明参数

            暂时性死区：
                1. 在代码块内，使用let命令声明的变量，在声明之前该变量都是不可用的，属于变量的“死区”，只要用到该变量就会报错，这在语法上称为“暂时性死区”（ temporal dead zone ，简称 TDZ ）
                2. 本质:　只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量
            
            typeof: 
                1. typeof运算符不是百分之百安全的
                2. 用 let 声明的变量，在声明之前，“typeof 变量”会出错：ReferenceError错误
                3. 在没有let之前，typeof运算符是百分之百安全的，永远不会报错
                4. 没有被 let 声明的变量，typeof运算符不会报错

            注意点： 
                ES5只有两种声明变量的方法：var命令和function命令。ES6除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6一共有6种声明变量的方法。
        */
    }

    var _var = {
        var_1(){
            var a = 3;
            var b = c;
            var c = 9;
            console.log(b);//undefined
            console.log(a+b);//NaN
            console.log(a+c);//12
        },
        var_2(){
            var a = 3;
            var b = a;
            a = 10;
            console.log(a);// 10
            console.log(b);// 3
        }
    }

    /* 基本用法-变量作用域 */
    var example_base = {
        eb_1(){// 在代码块外使用let、var声明的变量
            {
                let a = 10;
                var b = 1;
            }
            // console.log(a); // 报错 （引用错误：未定义） 【let声明的变量只在所在的代码块内有效】
            console.log(b);// 1 【在方法外部使用var声明的变量全局有效】
        },
        eb_2(){// 在方法外使用let、var声明的变量
            var example_3_1 = () => {
                var a = 2; //
                b = 3;
            }
            example_3_1();
            // console.log(a);// 报错 （引用错误：未定义）【在方法内用 var 声明的变量局部有效】
            console.log(b); // 3 【在方法内不用var声明的变量全局（包括方法外）有效】
        },
        eb_3(){// 在for循环中使用var声明变量i
            /*
            var 声明的变量 i 在全局范围内都有效（所以全局只有一个变量 i）
            每一次循环，变量 i 的值都会发生改变
            循环内，被赋给数组 a的函数内部的console.log(i) //中的i指向全局的i
            所有数组a的成员中的i指向的都是同一个i，导致运行时输出的是最后一轮 i 的值
            */
            var a = [];
            for (var i = 0; i < 10; i++) {
                var b = 3;
                a[i] = function () {
                    console.log(i);
                };
            }
            a[6](); // 10
            i++;
            a[6](); // 11
            console.log(i);// 11
            console.log(b);// 3
        },
        eb_4(){// 在for循环中使用let声明变量i
            /*
                let 声明的变量 i 仅在块级作用域内（本轮循环内）有效，所以每一次循环的其实都是个新的变量
                JavaScript引擎内部会记住上一轮循环的值，初始化本轮的变量j时，就在上一轮循环的基础上进行计算的
            */
            var a = [];
            for (let i = 0; i < 10; i++) {
                a[i] = function () {
                    console.log(i);
                };
            }
            a[6](); // 6
            console.log(j);// 报错 （引用错误：未定义） 【let声明的变量只在代码块内有效】
        },
    }

    /* 变量提升 */
    var example_1 = () => {
        //用 var 声明的变量，会发生变量提升。即脚本开始运行时，用 var 声明的变量就已经存在了，但是没有值，所以会输出 undefined
        console.log(a); //输出 undefined
        //用 let 声明的变量，不会发生变量提升。即在声明它之前，用 let 声明的变量都是不存在的，这时如果用到它，就会抛出一个错误
        console.log(b); //报错
        var a = 'x';
        let b = 'x';
    }

    /* 重复声明 */
    var example_2 = () => {// 
        {
            // {
            //     var a = 10;
            //     var a = 3;
            //     console.log(a);// 3【var允许在相同作用域内重复声明同一个变量】
            // }

            // {
            //     let a = 10;
            //     var b = 1;// 报错【let不允许在相同作用域内重复声明同一个变量】
            // }

            // { 
            //   let a = 10;
            //   let a = 1;// 报错【let不允许在相同作用域内重复声明同一个变量】
            // }
        }

        {
            function func_1(arg) {
                console.log(arg);// 3
                var arg; 
                console.log(arg);// 3
                arg = 'abc';
                console.log(arg);// abc
            }

            // function func_2(arg) {
            //     let arg; // 报错【不能在函数内部重新声明参数】
            // }

            function func_3(arg) {
                {
                    let arg; // 不报错 【允许在函数内部的块级作用域内重新声明参数】
                }
            }
        }
    }


    /* 暂时性死区 */
    class _temporary_dead_zone {
        tdz_1(){
            /*
                ES6 明确规定 如果区块中存在 let和const 命令，则这个区块对这些命令声明的变量从一开始就形成封闭作用域。
                总之，在代码块内， 使用 let 命令声明的变量在声明之前，都属于变量的 “死区”，这时该变量都是不可用的，只要用到该变量就会报错。
                这在语法上称为“暂时性死区”（ temporal dead zone ，简称 TDZ ）。
            */
            var tmp = 123; //全局变量tmp
            if (true) { 
                //TDZ 开始【变量绑定了这个块级作用域】
                // tmp = 'abc' ; // 报错
                // console.log (tmp ); // 报错
                // console.log (typeof tmp) ; // 报错（意味着 typeof 不再是一个百分之百安全的操作）
                console.log (typeof b) ; // undefined 
                console.log (typeof c) ; // undefined 
                let tmp ; // 声明了局部变量 tmp，TDZ 结束
                var b ; 
                console.log (tmp) ; // undefined 
                tmp = 'def' ; 
                console.log(tmp ); // def 
            }
            console.log(tmp);//123
        }
        tdz_2(){
                // typeof tmp;//报错（意味着 typeof 不再是一个百分之百安全的操作）
                typeof exm;//undefined (没有被let声明的变量，为'undefined',)
                let tmp;
        }
        tdz_3(){
            {
                function bar(x = y, y = 2) {
                    return [x, y];
                }
                // console.log(bar()); // 报错 （参数 x 默认值等于另一个参数y，而此时y还没有声明，属于 “死区”）
                console.log(bar(3)); // [ 3, 2 ]
            }
            {
                function bar(x = 2, y = x) {
                    return [x, y];
                }
                console.log(bar()); // [ 2, 2 ]
            }
        }
    }
    var __tdz = new _temporary_dead_zone();


    /* 作用域、函数
        ES5: 
            1. 只有全局作用域和函数作用域
            2. 不能在块级作用域声明函数，只能在顶层作用域和函数作用域之中声明（严格模式中，在if、try等块级作用域中声明函数，会报错）
        ES6: 
            1. 新增块级作用域（块级作用域的出现，实际上使得获得广泛应用的立即执行匿名函数（IIFE）不再必要了）
            2. 允许块级作用域的任意嵌套
            3. 外层作用域无法读取内层作用域的变量
            4. 内层作用域可以定义外层作用域的同名变量
            5. 允许在块级作用域之中声明函数
            6. 块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用

        ES6浏览器 - ES6浏览器关于块级作用域中函数声明的行为方式: （只对ES6的浏览器实现有效，其他环境的实现不用遵守，还是将块级作用域的函数声明当作let处理）
            1. 允许在块级作用域内声明函数
            2. 函数声明类似于var，即会提升到全局作用域或函数作用域的头部
            3. 函数声明会提升到所在的块级作用域的头部
               

        注意点:
            1. 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。=> sf_5()
            2. ES6的块级作用域允许声明函数的规则，只在使用大括号的情况下成立，如果没有使用大括号，就会报错。 => sf_6()
            
    */
    class _scope_function {
        sf_1(){// 在块级作用域外使用let在块级作用域和外层作用域中定义的同名变量
            let a = 'abc';
            {
                let a = 'def';// 内层作用域可以定义外层作用域的同名变量
                let b = 'ghi'
            }
            console.log(a);// abc（外层代码块不受内层代码块中定义的同名变量的影响）
            // console.log(b);// 出错（外层作用域无法读取内层作用域用let声明的变量，
        }
        sf_2(){// 在方法内使用var在全局和方法中的块级作用域中定义的同名变量
            var tmp = new Date();
            function f() {
                console.log(tmp);// undefined（变量提升，导致内层的tmp变量覆盖了外层的tmp变量）
                if (true) {
                    var tmp = "hello world";
                }
                console.log(tmp); // hello world（用var声明的变量，外层代码块受内层代码块的影响）
            }
            f();
        }
        sf_3(){// 在for循环外使用var声明变量i
            // 用来计数的循环变量，在循环结束后并没有消失，泄露成了全局变量。
            var s = 'hello';
            for (var i = 0; i < s.length; i++) { }
            console.log(i); // 5
        }
        sf_4(){// 函数作用域
            function f() {
                console.log('I am outside!'); 
            }(function () {
                if (false) {
                    function f() { console.log('I am inside!'); }
                }
                f();// ES5运行结果:I am inside!  ES6运行结果: I am outside!  chrome运行结果: 报错
            }());

            // 以上代码在ES5中实际运行的是以下代码
            /*function f() {
                console.log('I am outside!');
            }(function () {
                function f() { console.log('I am inside!'); }
                if (false) {
                }
              
                f();
            }());*/

            // 以上代码在 ES6 浏览器中实际运行的是以下代码
            /*function f() {
                console.log('I am outside!');
            }(function () {
                var f = undefined;
                if (false) {
                  function f() { console.log('I am inside!'); }
                }
              
                f();
            }());*/
        }
        sf_5(){// 函数声明与函数表达式
            // 函数声明语句
            {
                let a = 'secret';
                function f() {
                    return a;
                }
            }
            // 函数表达式
            {
                let a = 'secret';
                let f = function () {
                    return a;
                };
            }
        }
        sf_6(){// 在块级作用域(if)中声明函数
            // 不报错
            // 'use strict';  if (true) { function f() {} }
            // 报错
            // 'use strict';  // if (true) function f() {}
        }
    }
    var __sf = new _scope_function();

    /* const 常量
        const
            1. 声明一个只读的常量
            2. 一旦声明，常量的值就不能改变，改变常量的值会报错 => c_1
            3. 一旦声明常量，就必须立即初始化，不能留到以后赋值（对于const来说，只声明不赋值，就会报错） => c_2
            4. const的作用域与let命令相同：只在声明所在的块级作用域内有效。 => c_3
            5. 不提升，存在暂时性死区，只能在声明的位置后面使用 => c_4
            6. 不可重复声明常量 => c_5
            7. 对于复合类型的常量，常量储存的是一个地址（这个地址指向一个对象），不可指向另一个地址，但对象本身的数据是可变的（可以为其添加新属性） => c_6/c_7/c_8

        复合类型: 
            数组: var a = [];
            json: var a = {};

     */
    class _const {
        c_1(){// 改变常量的值会报错
            const PI = 3.1415;
            console.log(PI); // 3.1415
            PI = 3;// 报错（类型错误：赋值给常量变量）
        }
        c_2(){// 声明常量时未赋值
            // const foo;// 报错，(语法错误：const声明中缺少初始值设定项)
        }
        c_3(){// 在块级作用域外使用常量
            if (true) {
                const MAX = 5;
            }
            // console.log(MAX) // 报错（未捕获引用错误：未定义MAX）
        }
        c_4(){// 在常量声明前就调用
            if (true) {
              console.log(MAX); // 报错（ 引用错误：无法在初始化之前访问 “MAX” ）
              const MAX = 5;
            }
        }
        c_5(){// 重复声明常量
            var message = "Hello!";
            let age = 25;
            const MAX = 6;
            // const message = "Goodbye!";// 报错（ 语法错误：无效或意外的标记 ）
            // const age = 30;// 报错（ 语法错误：无效或意外的标记  ）
            // const MAX = 8;// 报错（ 语法错误：无效或意外的标记  ）
        }
        c_6(){// 复合类型常量 - json
            // 常量地址不可变，对象数据可变
            const foo = {};
            foo.prop = 123;
            console.log(foo.prop);// 123
            foo = {}; // 报错（ 类型错误：“foo”是只读的 ）
        }
        c_7(){// 复合类型常量 - 数组
            //常量a是一个数组，这个数组本身是可写的，但是如果将另一个数组赋值给a，就会报错
            const a = [];
            a.push('Hello'); // 可执行
            a.length = 0;    // 可执行
            a = ['Dave'];    // 报错
        }
        c_8(){// 复合类型常量 - 将对象冻结
            // 将常量 foo 指向一个冻结的对象
            const foo = Object.freeze({"data": [1,2,3]});
            // foo.prop = 123;//（ 常规模式：不起作用     严格模式：报错【类型错误：无法添加属性属性，对象不可扩展】 ）
            foo.data.push(4);// 可添加
            console.log(foo.data);// [ 1, 2, 3, 4 ]

            // 将对象彻底冻结的函数。
            var constantize = (obj) => {
                Object.freeze(obj);
                Object.keys(obj).forEach( (key, value) => {
                    if ( typeof obj[key] === 'object' ) {
                        constantize( obj[key] );
                    }
                });
            };
            constantize(foo);
            // foo.data.push(5);//报错（ 类型错误：无法添加属性，对象不可扩展 ）
        }
    }
    var __c = new _const();
    // __c.c_9();

    /** 全局对象的属性
     *  说明:
            1. 全局对象是最顶层的对象，在浏览器环境指的是window对象，在Node.js指的是global对象

     *  ES5:   
            1. 全局对象的属性与全局变量是等价的
            2. 全局对象的属性赋值与全局变量的赋值，是同一件事 => go_1
                注意点：对于Node来说，这一条只对REPL环境适用，模块环境之中，全局变量必须显式声明成global对象的属性。
            3. 未声明的全局变量，自动成为全局对象window的属性(这被认为是JavaScript语言最大的设计败笔之一 ) => go_1
                【 这样的设计带来了两个很大的问题，首先是没法在编译时就报出变量未声明的错误，只有运行时才能知道，其次很容易不知不觉地就创建了全局变量（比如打字出错）。另一方面，从语义上讲，语言的顶层对象是一个有实体含义的对象，也是不合适的 】

     *  ES6: 
            1. var 命令和 function 命令声明的全局变量，依旧是全局对象的属性（为了保持兼容性）
            2. let命令、const命令、class命令声明的全局变量，不属于全局对象的属性（从ES6开始，全局变量将逐步与全局对象的属性脱钩）


        let：
            1. let 用来声明块级变量，当一个变量已经用 let 声明了，当我们再次用let,var进行声明就会报错。
            2. 块 {} 中的 let 只在块中有效
            3. 在 es6 中 var,let 可以一次性声明多个变量，对象或数组的格式为多个变量赋值。

        const：
            1. 可以一次型声明多个常量，const声明一个只读的常量
            2. 一旦声明，常量的值就不能改变
            3. 当声明的常量是一个字面量的对象时，是可以修改常量中的属性值

        全局对象：
            1.  全局对象是最顶层的对象，在浏览器环境指的是window对象，在Node.js指的是global对象
            2. ES5之中，全局对象的属性与全局变量是等价的

     */
    class _global_object {
        go_1(){// windows 全局对象
            window.a = 1;
            console.log(a); // 1
            a = 2;
            console.log(window.a); // 2
        }
        go_2(){
            var a = 1;
            // 如果在 Node 的 REPL 环境，可以写成 global.a// 或者采用通用方法，写成
            console.log(this.a) // 1
            console.log(window.a) // 1 ( 全局变量 a 由 var 命令声明，所以它是全局对象的属性 )
            let b = 1;
            console.log(window.b) // undefined ( 全局变量 b 由 let 命令声明，所以它不是全局对象的属性，返回 undefined )
        }
    }
    var __go = new _global_object();
    // __go.go_2();

}

// 2- 变量的解构赋值
{
    {
        /**
         * 利用var,let结合数组结构，可以一次声明多个变量。
         * 在json数据的提取和变量的交换，以及函数的默认参数传递上可以给与默认值。
         * 解构赋值允许指定默认值，有效的解决了函数返回多个变量的赋值问题，同时也解决了函数参数默认值的问题。
         */
    }

    /** 数组的解构赋值
     *  基本用法
            1. ES6之前，为变量赋值，只能直接指定值
            2. ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

     *  解构赋值说明
            1. 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值
            2. 如果解构不成功，变量的值就等于 undefined（...x 则是 [] ）
            3. 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错
            4. 只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值
            5. 解构赋值允许指定默认值
            6. 默认值可以引用解构赋值的其他变量，但该变量必须已经声明
            7.  如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。


     *  不完全解构
            1. 即等号左边的模式，只匹配一部分的等号右边的数组（这种情况下，解构依然可以成功）
    
     *  注意点
            1. ES6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的

     */
    class _destructuring_array {
        da_1(){// 基本用法
            // （ES6允许）从数组中提取值，按照对应位置，对变量赋值
            var [a, b, c] = [1, 2, 3];
            
            // var、const命令使用数组的解构赋值
            // var [v1, v2, ..., vN ] = array;
            // let [v1, v2, ..., vN ] = array;
            // const [v1, v2, ..., vN ] = array;

            // Set结构使用数组的解构赋值
            let [x, y, z] = new Set(["a", "b", "c"]);
            x // "a"
        }
        da_2(){// 使用嵌套数组进行解构
            let [foo, [[bar], baz]] = [1, [[2], 3]];
            foo // 1
            bar // 2
            baz // 3
            
            let [ , , third] = ["foo", "bar", "baz"];
            third // "baz"

            let [x, , y] = [1, 2, 3];
            x // 1
            y // 3

            let [head, ...tail] = [1, 2, 3, 4];
            head // 1
            tail // [2, 3, 4]

            let [a, b, ...c] = ['a'];
            a // "a"
            b // undefined
            c // []

            var [d] = [];
            d;// undefined （ 解构不成功 ）

            var [e, f] = [1];
            f;// undefined （ 解构不成功 ）
        }
        da_3(){// 不完全解构
            let [x, y] = [1, 2, 3];
            x // 1
            y // 2
            let [a, [b], d] = [1, [2, 3], 4];
            a // 1
            b // 2
            d // 4
        }
        da_4(){// 等号的右边不是数组时
            // 报错（转为对象以后不具备Iterator接口）
            let [a] = 1;
            let [b] = false;
            let [c] = NaN;
            let [d] = undefined;
            let [e] = null;

            // 报错 【本身就不具备Iterator接口】
            let [f] = {};
        }
        da_5(){// 不懂（只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值）
            function* fibs() {
                var a = 0;
                var b = 1;
                while (true) {
                    yield a;
                    [a, b] = [b, a + b];
                }
            }
            var [first, second, third, fourth, fifth, sixth] = fibs();
            console.log(first) // 5
            // 上面代码中，fibs是一个Generator函数，原生具有Iterator接口。解构赋值会依次从这个接口获取值。
        }
        da_6(){// 默认值- 基本用法
            var [foo = true] = [];
            console.log(foo) // true
            [x, y = 'b'] = ['a']; // x='a', y='b'
            [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

            var [x = 1] = [undefined];
            console.log(x) // 1
            var [x = 1] = [null];
            console.log(x) // null （如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined）
        }
        da_7(){// 默认值- 表达式
            // 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
            function f() {
                console.log('aaa');
            }
            let [x = f()] = [1];
            // 上面代码中，因为x能取到值，所以函数f根本不会执行。上面的代码其实等价于下面的代码。
            let a;
            if ([1][0] === undefined) {
                a = f();
            } else {
                a = [1][0];
            }
        }
        da_8(){// 默认值- 引用解构赋值的其他变量
            let [a = 1, b = a] = [];// a=1; b=1
            let [c = 1, d = c] = [2];// c=2; d=2
            let [e = 1, f = e] = [1, 2];// e=1; f=2
            let [g = h, h = 1] = [];// 报错 （引用错误） 【g用到默认值h时，h还没有声明】 ReferenceError
        }
    }
    var __da = new _destructuring_array();

    /** 对象的解构赋值
     *  说明
            1. 解构不仅可以用于数组，还可以用于对象。
            2. 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者 => do_3
            3. 对象的解构可以指定默认值，默认值生效的条件是，对象的属性值严格等于undefined。

     *  对象的解构与数组的不同点
            1. 数组的元素是按次序排列的，变量的取值由它的位置决定
            2. 对象的属性没有次序，变量必须与属性同名，才能取到正确的值

     *  注意点
            1. 解构赋值时，变量的声明和赋值是一体的。对于let和const来说，变量不能重新声明，所以一旦赋值的变量以前声明过，就会报错（var不会报错，因为var命令允许重新声明）=> do_5
     */
    class _destructuring_object {
        do_1(){// 基本用法
            var { foo, bar } = { foo: "aaa", bar: "bbb" };
            console.log(foo); // "aaa"
            console.log(bar) // "bbb"

            // 等号左边的两个变量的次序，与等号右边两个同名属性的次序不一致
            var { bar, foo } = { foo: "aaa", bar: "bbb" };
            console.log(foo) // "aaa"
            console.log(bar) // "bbb"

            // 变量没有对应的同名属性
            var { baz } = { foo: "aaa", bar: "bbb" };
            console.log(baz); // undefined
        }
        do_2(){// 变量名与属性名不一致
            var { foo: baz } = { foo: "aaa", bar: "bbb" };
            console.log(baz); // "aaa"

            let obj = { first: 'hello', last: 'world' };
            let { first: f, last: l } = obj;
            console.log(f); // 'hello'
            console.log(l); // 'world'
        }
        do_3(){
            // 对象的解构赋值是下面形式的简写（参见《对象的扩展》一章）。
            var { foo: a, bar: b } = { foo: "aaa", bar: "bbb" };
        }
        do_4(){// 变量与模式
            var { foo: baz } = { foo: "aaa", bar: "bbb" };
            console.log(baz); // "aaa"
            console.log(foo); // 报错 (错误：loc未定义) （真正被赋值的是变量baz，而不是模式foo）
        }
        do_5(){// 重复声明
            let a;
            // let {a} = {a: 1}; // 报错（ 语法错误：重复声明 a ）
            let b;
            // let {b: b} = {b: 1}; //报错（ 语法错误：重复声明 b ）
            let c;
            // let {c: c} = {c: 1}; //成功 【var命令允许重新声明】


            // 如果没有第二个let命令，就不会报错。
            let d;
            ({d: d} = {d: 1}); // 成功
            let e;
            ({e} = {e: 1}); // 成功
        }
        do_6(){// 嵌套结构对象的解构赋值（变量与模式）
            var obj = {
                p: [
                    "Hello",
                    { y: "World" }
                ]
            };
            var { p: [x, { y }] } = obj;
            console.log(x); // "Hello"
            console.log(y); // "World"
            console.log(p); // 报错 (错误：loc未定义) 【p是模式，不是变量，因此不会被赋值】

            var node = {
                loc: {
                    start: {
                        line: 1,
                        column: 5
                    }
                }
            };
            var { loc: { start : { line }} } = node;// 只有line是变量，loc和start都是模式，不会被赋值。
            console.log(line); // 1 
            console.log(loc);  // (错误：loc未定义) 
            console.log(start); //  (错误：start未定义)
        }
        do_7(){// 嵌套赋值
            let obj = {};
            let arr = [];
            ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
            console.log(obj); // {prop:123}
            console.log(arr); // [true]
        }
        do_8(){// 默认值
            var {x = 3} = {};
            console.log(x); // 3

            var {x, y = 5} = {x: 1};
            console.log(x); // 1
            console.log(y); // 5

            var { message: msg = "Something went wrong" } = {};
            console.log(msg); // "Something went wrong"

            var {x = 3} = {x: undefined};
            console.log(x); // 3

            var {x = 3} = {x: null};
            console.log(x); // null 【x属性等于null，就不严格相等于undefined，导致默认值不会生效】

            var {foo} = {bar: 'baz'};
            console.log(foo); // undefined 【解构失败，变量的值等于undefined】
        }
        do_9(){// 当子对象不存在 
            // 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。
            var {foo: {bar}} = {baz: 'baz'};// 报错 【foo属性这时等于undefined，再取子属性就会报错】

            var _tmp = {baz: 'baz'};
            _tmp.foo.bar // 报错 【foo不存在】
        }
        do_10(){// 解构赋值时不声明
            // 如果要将一个已经声明的变量用于解构赋值，必须非常小心。
            var x; 

            // 错误写法: JavaScript引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免JavaScript将其解释为代码块，才能解决这个问题
            // {x} = {x: 1};//  (语法错误)

            // 正确的写法: 将整个解构赋值语句，放在一个圆括号里面，就可以正确执行
            ({x} = {x: 1});
        }
        do_11(){// 等号左边的模式之中，不放置任何变量名（毫无意义）
            //表达式毫无意义，但是语法是合法的，可以执行
            ({} = [true, false]);
            ({} = 'abc');
            ({} = []);
        }
        do_12(){// 将现有对象的方法，赋值到某个变量
            // 将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上（使用起来就会方便很多）
            let { log, sin, cos } = Math;
        }
    }
    var __do = new _destructuring_object();

    /** 字符串的解构赋值
     *  说明
            1. 解构赋值时，字符串被转换成了一个类似数组的对象
            2. 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值 => da_2
     */
    class _destructuring_string {
        ds_1(){// 字符串的解构赋值
            const [a, b, c, d, e] = 'hello';
            console.log(a); // h
            console.log(b); // e
            console.log(c); // l
            console.log(d); // l
            console.log(e); // o
        }
        ds_2(){// 解构赋值获取字符串的长度
            let {length : len} = 'hello';
            console.log(len); // 5 【类似数组的对象都有一个length属性】
        }
    }
    var __ds = new _destructuring_string();

    /** 数值和布尔值的解构赋值
     
     *  说明
            1. 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
            
        解构赋值的规则: 
            1. 只要等号右边的值不是对象，就先将其转为对象
            2. 由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。=> __dnb.dnb_2

            解构赋值的规则是，。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
            
     */
    class _destructuring_number_boolean {
        dnb_1(){
            // 数值和布尔值的包装对象都有toString属性，因此变量s都能取到值
            let {toString: a} = 123;
            a === Number.prototype.toString // true
            let {toString: b} = true;
            b === Boolean.prototype.toString // true
        }
        dnb_2(){// undefined、null 的解构赋值
            let { prop: x } = undefined; // TypeError
            let { prop: y } = null; // TypeError
        }
    }

    /** 函数参数的解构赋值
     
     *  说明
            1. 允许为变量指定默认值，如果解构失败，变量等于默认值 => df_2
            2. 允许为参数指定默认值，如果没有传入参数，参数等于默认值 => df_3
            3. 当传入的参数值为 undefined 时，就会触发函数参数的默认值 => df_4

     */
    class _destructuring_function {
        df_1(){// 简单例子
            // 例1: 函数 add 的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。
            function add([x, y]){
                return x + y;
            }
            add([1, 2]); // 3

            //例2 => map
            [[1, 2], [3, 4]].map(([a, b]) => a + b);// [ 3, 7 ]
        }
        df_2(){// 为参数中的变量指定默认值 
            //参数是一个对象，通过对这个对象进行解构获取参数值
            function move({x = 0, y = 0} = {}) {
                return [x, y];
            }
            move({x: 3, y: 8}); // [3, 8]
            move({x: 3}); // [3, 0]
            move({}); // [0, 0]
            move(); // [0, 0]
        }
        df_3(){// 为参数指定默认值
            //参数是一个对象，通过对这个对象进行解构获取参数值
            function move({x, y} = { x: 0, y: 0 }) {
                return [x, y];
            }
            move({x: 3, y: 8}); // [3, 8]
            move({x: 3}); // [3, undefined]
            move({}); // [undefined, undefined]
            move(); // [0, 0]

        }
        df_4(){// undefined就会触发函数参数的默认值。
            [1, undefined, 3].map((x = 'yes') => x);// [ 1, 'yes', 3 ]
            [[], [3, 4]].map(([a = 5, b = 6]) => a + b);// [11, 7]
        }
    }

    /** 圆括号的问题
     *  不能使用圆括号的情况
            1. 变量声明语句中，不能带有圆括号 => p_1
            2. 函数参数中，模式不能带有圆括号(函数参数也属于变量声明) => p_2
            3. 赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中 => p_3
        
     *  可以使用圆括号的情况
            1. 赋值语句的非模式部分，可以使用圆括号
     */
    class _parenthesis {
        p_1(){// 变量声明语句中，不能带有圆括号
            // 全部报错 【都是变量声明语句，模式不能使用圆括号】
            // var [(a)] = [1];
            // var {x: (c)} = {};
            // var ({x: c}) = {};
            // var {(x: c)} = {};
            // var {(x): c} = {};
            // var { o: ({ p: p }) } = { o: { p: 2 } };
        }
        p_2(){// 函数参数中，模式不能带有圆括号
            // 报错 【函数参数也属于变量声明，因此不能带有圆括号。】
            // function f([(z)]) { return z; }// 
        }
        p_3(){// 赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中
            // 全部报错 【将整个模式放在圆括号之中，导致报错】
            // ({ p: a }) = { p: 42 };
            // ([a]) = [5];

            // 报错 【将嵌套模式的一层，放在圆括号之中，导致报错】
            // [({ p: a }), { x: c }] = [{}, {}];
        }
        p_4(){// 赋值语句的非模式部分，可以使用圆括号
            // 都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；其次它们的圆括号都不属于模式的一部分。第一行语句中，模式是取数组的第一个成员，跟圆括号无关；第二行语句中，模式是p，而不是d；第三行语句与第一行语句的性质一致。
            [(b)] = [3]; // 正确
            ({ p: (d) } = {}); // 正确
            [(parseInt.prop)] = [3]; // 正确
        }
    }

    /** 用途
     *  交换变量的值
            优点：简洁、易读，语义清晰
     *  从函数返回多个值
            优点：函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。
     *  函数参数的定义
            优点：解构赋值可以方便地将一组参数与变量名对应起来。
     *  提取JSON数据
            优点：可以快速提取JSON数据的值
     *  指定函数参数的默认值
            优点：避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句
     *  遍历Map结构
            优点：任何部署了Iterator接口的对象，都可以用for...of循环遍历。Map结构原生支持Iterator接口，配合变量的解构赋值，获取键名和键值就非常方便
     *  输入模块的指定方法
            优点：加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰。
     */
    class _purpose {
        p_1(){// 交换变量的值
            [x, y] = [y, x];
        }
        p_2(){// 从函数返回多个值
            // 返回一个数组
            function example() {
                return [1, 2, 3];
            }
            var [a, b, c] = example();

            // 返回一个对象
            function example() {
                return {
                    foo: 1,
                    bar: 2
                };
            }
            var { foo, bar } = example();
        }
        p_3(){// 函数参数的定义
            // 参数是一组有次序的值
            function f([x, y, z]) {  }
            f([1, 2, 3]);

            // 参数是一组无次序的值
            function f({x, y, z}) {  }
            f({z: 3, y: 2, x: 1});
        }
        p_4(){// 提取JSON数据
            var jsonData = {
                id: 42,
                status: "OK",
                data: [867, 5309]
            };
            let { id, status, data: number } = jsonData;
            
            console.log(id, status, number);// 42, "OK", [867, 5309]
        }
        p_5(){// 函数参数的默认值
            jQuery.ajax = function (url, {
                async = true,
                beforeSend = function () {},
                cache = true,
                complete = function () {},
                crossDomain = false,
                global = true,
                // ... more config
            }){
                // ... do stuff
            };
            // 指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。
        }
        p_6(){// 遍历Map结构
            var map = new Map();
            map.set('first', 'hello');
            map.set('second', 'world');

            //获取键值对
            for (let [key, value] of map) {
                console.log(key + " is " + value);
            }
            // first is hello
            // second is world

            // 获取键名
            for (let [key] of map) {
                // ...
            }
            // 获取键值
            for (let [,value] of map) {
                // ...
            }
        }
        p_7(){// 输入模块的指定方法
            const { SourceMapConsumer, SourceNode } = require("source-map");
        }
    }
}

// 3- 字符串的扩展
{
    {
        /*
         
        
        */
    }


    /**
     *  字符串的遍历器接口 ( for...of ）
            优点：正确识别大于 0xFFFF 码点的字符 => s_1
     * 
     */
    class _string {
        s_1(){// 字符串的遍历器接口
            var text = String.fromCodePoint(0x20BB7) ;// 𠮷

            //传统的for循环无法识别这样的码点（大于码点为2个字符，都不可打印）
            for(let i = 0; i < text.length; i++){
                console.log(text[i]);
            }
            //�
            //�

            // ES6遍历器接口可以识别大于 0xFFFF 的码点
            for(let i of text){
                console.log(i);
            }
            // 𠮷
        }
        s_2(){
            console.log('abc'.charAt(0));
            console.log('𠮷'.charAt(0));
        }
    }
    var __s = new _string();
    // __s.s_2();
    console.dir(String);
}