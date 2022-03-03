https://www.cnblogs.com/chuanq/p/11018914.html




1. ES6提供了默认参数值机制，允许你为参数设置默认值，防止在函数被调用时没有传入这些参数:

const required = () => {throw new Error('Missing parameter')};
const add = (a = required(), b = required()) => a + b; 
add(1, 2) //3
add(1) // Error: Missing parameter.
2,变量的解构赋值

2-1.数组的解构赋值：左边和等号右边的形式要统一，如果不统一解构将失败。

复制代码
let [a,b,c]=[1,2,3];
let [a,[b,c],d]=[1,[2,3],4];

// 解构赋值是允许你使用默认值的

let [foo = true] =[];

console.log(foo); //控制台打印出true

let [a,b="name"]=['小明']

console.log(a+b); //控制台显示“小明name”

null相当于有值，但值为null.undefined相当于什么都没有,如果值不对应就会报undefined
  let [a,b="name"]=['小明',null];

  console.log(a+b); //控制台显示“小明null”

复制代码
2-2. 对象的解构赋值

复制代码
let {foo,bar} = {foo:'Hello',bar:'World'};

console.log(foo+" "+bar); // Hello World

// 如果在解构之前就定义了变量，要在解构的语句外边加一个圆括号

let foo;

({foo} ={foo:'Hello'});

console.log(foo); // Hello
复制代码
2-3. 字符串解构

const [a,b,c,d,e]="Hello";

console.log(a); //H
3,对象方法属性可以简写

复制代码
const o = { 
　　　　method(){ 
　　　　　　return "Hello!"; 
　　　　}
　　　};
 // 等同于 
const o = {
　　　　method: function() {
　　　　　　　return "Hello!";
　　　　　}
 　　　}
复制代码
5, 动态写key名

复制代码
let keys= 'foo';

let obj = { [keys]: true, ['a' + 'bc']: 123};

console.log(obj.foo)    //true

console.log(obj.abc)    //123
复制代码
6. 扩展运算符和rest运算符

对象扩展运算符（…）。它们可以很好的为我们解决参数和对象数组未知情况下的编程

复制代码
function argment(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
}

argment(1,2,3); // 1,2,3，undefined
复制代码
7. 数组赋值,扩展运算符

复制代码
let arr1=['a','b','c'];
let arr2=arr1;
console.log(arr2);   //['a','b','c'] 
arr2.push('d');
console.log(arr1);    //['a','b','c','d'] 
console.log(arr2);    //['a','b','c','d'] 

//声明两个数组arr1和arr2，然后我们把arr1赋值给arr2，然后我们改变arr2的值，你会发现arr1的值也改变了，因为我们这是对内存堆栈的引用，而不是真正的赋值

let arr1=['a','b','c'];
let arr2=[...arr1];　　// 也可合并多个[...arr1, ...arr2, ...arr3]
console.log(arr2);   //['a','b','c'] 
arr2.push('d');       
console.log(arr2);   //['a','b','c','d'] 
console.log(arr1);   //['a','b','c'] 

// 现在控制台预览时，arr1并没有改变
  引用数据类型--名存在栈内存中，值存在于堆内存中，但是栈内存会提供一个引用的地址指向堆内存中的值
　浅拷贝只是改变栈内存指向，深拷贝改变堆值，新开辟栈JSON.parse(JSON.stringify())可以深拷贝，Jquery 的extend，或者递归
　　$.extend( [deep], target, object1 [, objectN ] )

　　deep表示是否深拷贝，为true为深拷贝，为false，则为浅拷贝

　　target Object类型 目标对象，其他对象的成员属性将被附加到该对象上。

　　object1  objectN可选。 Object类型 第一个以及第N个被合并的对象。


　contact, slice都不是真正意义的深拷贝
复制代码
8. 循环输出rest参数和扩展运算符

复制代码
function loopFun1(...arg){
    for(let val of arg){
        console.log(val);
    }
}
function loopFun(reset1,...arg){
     console.log(arg);
　　　// console.log(arg.length);
}
loopFun1(1,2，3);    //1,2,3
loopFun(1,2，3);     //[2,3]

let [a,b,..c]= [1,2,3,4,5]

console.log(a)　　// [1]

console.log(b)　　// [2]
console.log(c)　　// [3,4,5]
复制代码
9,字符串模版

let a='alice';

document.write( `I am ${a} ${1+2} age`);　　//I am alice 3 age 

10. ES6数字操作

Binary,二进制的开始是0（零），然后第二个位置是b（注意这里大小写都可以实现）

let binary = 0B010101;

console.log(binary); //21

八进制的英文单词是Octal，也是以0（零）开始的，然后第二个位置是O（欧），然后跟上八进制的值就可以了。

let b=0o666;

console.log(b); //438

 

数字验证Number.isFinite( xx )

可以使用Number.isFinite( )来进行数字验证，只要是数字，不论是浮点型还是整形都会返回true，其他时候会返回false。

复制代码
let a= 11/4;

console.log(Number.isFinite(a));//true

console.log(Number.isFinite('Hello'));//false

console.log(Number.isFinite(NaN));//false

console.log(Number.isFinite(undefined));//false

NaN是特殊的非数字，可以使用Number.isNaN()来进行验证。

console.log(Number.isNaN(NaN));//true
复制代码
判断是否为整数Number.isInteger(xx)

let a=123.1;

console.log(Number.isInteger(a)); //false
整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)

let a='9.18';

console.log(Number.parseInt(a)); //9

console.log(Number.parseFloat(a));  //9.18
最大安全整数

console .log(Number.MAX_SAFE_INTEGER); Math.pow(2,53)-1;

最小安全整数

console.log(Number.MIN_SAFE_INTEGER);

安全整数判断isSafeInteger( )

let a= Math.pow(2,53)-1;

console.log(Number.isSafeInteger(a));//false
11.es6新特性

11-1, JSON数组格式转换(key为数组序号)

复制代码
let json = {

    '0': 'I',

    '2': 'LOVE',

    '1': 'YOU',

    length:3

}

let arr=Array.from(json);

console.log(arr)    // ["I", "YOU", "LOVE"]

Object.keys(json) //["0", "1", "2", "length"] 获取对象key值

Object.keys(json).map(key=>({
　　key,
　　value: json[key]
}))
 
复制代码
11-2, Array.of()方法：（它负责把一堆文本或者变量转换成数组类似eval）

let arr =Array.of(3,4,5,6);

console.log(arr);　　//[3, 4, 5, 6]
11-3, find( )实例方法:

所谓的实例方法就是并不是以Array对象开始的，而是必须有一个已经存在的数组，然后使用的方法，这就是实例方法。这里的find方法是从数组中查找。在find方法中我们需要传入一个匿名函数，函数需要传入三个参数：

value：表示当前查找的值。

index：表示当前查找的数组索引。

arr：表示当前数组。

复制代码
let arr=[1,2,3,4,5,6,7,8,9];

console.log(arr.find(function(value,index,arr){

    return value > 5;

}))　　// 6
复制代码
11-4, fill( )实例方法：

fill()也是一个实例方法，它的作用是把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。

let arr=[0,1,2,3,4,5,6,7,8,9];

arr.fill('a',2,5);

console.log(arr);　　//[0, 1, "a", "a", "a", 5, 6, 7, 8, 9]
11-5, for...in和for...of区别

for...in

1.循环出来的是index索引，是字符串型的数字；2.遍历顺序有可能不是按照实际数组的内部顺序；

3.使用for in会遍历数组所有的可枚举属性，包括原型上的以及数组自定义的属性；

所以for in更适合遍历对象，不要使用for in遍历数组。,在遍历数组的时候的时候使用for...of；

for...in循环出的是key，for...of循环出的是value；

注意，for...of是ES6新引入的特性。修复了ES5引入的for...in的不足；

for...of不能循环普通的对象，需要通过和Object.keys()搭配使用；

复制代码
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};
let iterable = [3, 5, 7];
iterable.foo = "hello";　//数组中key为数字
for (let i in iterable) {
 console.log(i); // 0, 1, 2, "foo", "arrCustom", "objCustom" 
}
for (let i of iterable) {
 console.log(i); // 3, 5, 7
}
复制代码
11-6，同时输出数组的内容和索引：我们用entries()这个实例方法，配合我们的for…of循环就可以同时输出内容和索引了

复制代码
let arr=['a','b','c']

for (let [index,val] of arr.entries()){

    console.log(index+':'+val);　　//0:a 1:b 2:c

}
复制代码
11-7, entries( )实例方法：

entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。我们来看下面的代码：

复制代码
let arr=['a','b','c']

let list=arr.entries();

console.log(list.next().value); //[0, "a"]

console.log(list.next().value);　//[1, "b"]

console.log(list.next().value);  //[2, "c"] 
复制代码
12. 函数解构

12-1,对象的函数解构

复制代码
let json = {
    a:'1',
    b:'2'
}
function fun({a,b='1'}){
    console.log(a,b);
}
fun(json); //1 2
复制代码
12-2, 数组的函数解构

复制代码
let arr = ['a','b','c'];

function fun(a,b,c){

   console.log(a,b,c);

}

fun(...arr);    //a,b,c
复制代码
13. in 是用来判断对象或者数组中是否存在某个值的

复制代码
let obj={
    a:'1',
    b:'2'
}
console.log('a' in obj); //true
console.log(0 in arr1); //如果是数组则为索引


// 遍历
let arr=['a','b','c'];
console.log(arr.map(x=>'d')); // d,d,d
arr.some(x=>console.log(x)); //a,b,c   
arr.filter(x=>console.log(x));// a,b,c
复制代码
 14 Object.is( ) 对象比较

console.log(+0 === -0); //true

console.log(NaN === NaN ); //false

console.log(Object.is(+0,-0)); //false

console.log(Object.is(NaN,NaN)); //true

===为同值相等，is()为严格相等。

15. Object.assign( )合并对象

复制代码
//way1
var a={a:'1'};

var b={b:'2'};

var c={c:'3'};

let d=Object.assign(a,b,c)

console.log(d);　　//{a: "1", b: "2", c: "3"}

//way2

const person = { a:1 };

const tools = { b:2 };

const attributes = { c:3 };

const summary = {...person, ...tools, ...attributes}; // {a:1,b:2,c:3}
复制代码
 

16.声明Symbol

var a = new String;

var b = new Number;

var c = new Boolean;

var d = new Array;

var e = new Object;

var f= Symbol();

console.log(typeof(d));

 17.Symbol对象元素(key)的保护作用

复制代码
let obj={name:'hw',skill:'angry'};

let age=Symbol();

obj[age]=18;

for (let item in obj){

　　console.log(obj[item]);    //hw    angry

}

console.log(obj)    //{name: "hw", skill: "angry", Symbol(): 18}
复制代码
18：Set和WeakSet数据结构（Set的数据结构是以数组的形式构建的）

Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。

Set的声明：

let setArr = new Set(['a','b','c','a']);

console.log(setArr);//Set {"a", "b", "c"}
追加add：

setArr.add('d'); //Set {"a", "b", "c", "d"}
删除delete：

用has进行值的查找，返回的是true或者false。

.size相当与length

setArr.clear() //清空

复制代码
for (let item of setArr){ //循环

　　console.log(item);

}

setArr.forEach((value)=>console.log(value));
复制代码
WeakSet的声明（弱）

复制代码
let weakObj=new WeakSet();

let obj={a:'aa',b:'bb'}

weakObj.add(obj);

console.log(weakObj);
复制代码
（总结：在实际开发中Set用的比较多，WeakSet用的并不多，但是他对传入值必须是对象作了很好的判断，我们灵活应用还是有一定的用处的。）

19,map数据结构

Map的灵活性要更好，你可以把它看成一种特殊的键值对，但你的key可以设置成数组，值也可以设置成字符串，让它不规律对应起来。

复制代码
let json = {

    name:'hw',

    skill:'angry'

}

var map=new Map();

map.set(json,'iam');

console.log(map); //当然也可key字符串，value是对象

console.log(map.get(json)); //取值get  -->iam

map.delete(json); //删除delete

console.log(map.size); //0

console .log(map.has('a')) //false

map.clear()
复制代码
 

20. 用Proxy进行预处理

声明Proxy

复制代码
new Proxy({},{});

var pro = new Proxy({

    add: function (val) {

        return val + 10;

    },

    name: 'I am hw'

}, {

get:function(target,key,property){

    console.log('come in Get');

    return target[key];

}

});

console.log(pro.name); //先输出了come in Get。相当于在方法调用前的钩子函数31
复制代码
20-1. get属性

get属性是在你得到某对象属性值时预处理的方法，他接受三个参数

target：得到的目标值

key：目标的key值，相当于对象的属性

property：这个不太常用，用法还在研究中，还请大神指教。

20-2. set属性

set属性是值你要改变Proxy属性值时，进行的预先处理。它接收四个参数。

target:目标值。

key：目标的Key值。

value：要改变的值。

receiver：改变前的原始值。

复制代码
var pro = new Proxy({

    add: function (val) {

    return val + 10;

},

name: 'I am hw'

}, {

get:function(target,key){

console.log('come in Get');

return target[key];

},

set:function(target,key,value,receiver){

    console.log(` setting ${key} = ${value}`);

    return target[key] = value;

}

});

console.log(pro.name);

pro.name='qc';

console.log(pro.name);
复制代码
21. function test(fruit = '默认值') {

// 改写多个||判断

复制代码
const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

    if (redFruits.includes(fruit)) {

        console.log('red');

    }

}
复制代码
22. 数组去重

console.log(new Set([1, 2, 3, 3])); >> [1,2,3]

过滤空值:空值指的是没有具体意义的一些值，比如0，undefined，null，false，空字符串等

let res = [1,2,0,undefined,null,false,''].filter(Boolean); >> 1,2

复制代码
const isRequired = () => {
     throw new Error('param is required'); 
};
 const hello = (name = isRequired()) => {
 console.log(`hello ${name}`) 
}; 
// 抛出一个错误，因为参数没有传 hello()；
// 没有问题 hello('hello')
复制代码
 1，在B.js中export default xxx ，A.js中可以import  ’ 随意名，不加大括号 ’ from 'B.js' 。

　　如果B.js 为单个方法export Funame1， 那么A.js中必须 import {Funname1, Funame2} from B.js不可随意命名

　　ps: 一个模块中只能有一个默认导出export default，但是却可以有任意命名导出（0个、1个、多个）　　

导出方式1，export const A ='a'，2，const A = 'a'; export { A as  myA }  //可以用as对导入、导出模块重命名（myA） 。导出接口的值是动态绑定的

导入变量为只读，不可修改。但导入变量属性能更改，但其他模块引用也会造成更改。如果导入模块不带路径又要配置文件说明。

导入方式2，整体加载发 import * as AB from './ab' 。调用：AB.A； AB.b 。（*表示所有重命名加载到对象AB上，然后调用AB下面的方法）

 

 23. promise使用

复制代码
var promise = new Promise((resolve, reject) => {/* fn 匿名函数 */
    // ... some code
    if (/* 异步操作成功 */){
        resolve(value);
    } else {
        reject(error);
    }
});
//bad
promise.then((value) => {//success}, (error) => {//failure})
//good
Promise.then((data) => { /* success */ }).catch((err) => {/* error */ });
复制代码
//一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法

//一但fn执行完，会立即出发then回调

promise充当异步与回调之间的中介，每一个异步任务立刻返回一个Promise对象。

resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从Pending变为Resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；

reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从Pending变为Rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

then 回调动作的触发时机是 promise 被执行完。我们还可以串联 then 方法执行回调操作，每次 then 调用都会以之前的 then 调用的返回值为参数。

复制代码
function timeout(ms) {
    return new Promise((resolve, reject) => {
　　　　　console.log(1)
        setTimeout(resolve, ms, '4');
        //setTimeout(fn, milliseconds, param1, param2, ...) param1,param2是传给fn的实参
          console.log(2)
    });
}

timeout(2000).then((value) => {
    console.log(value); //done
});  
function fn(){
  console.log(3)
}
fn()
 //Promise对象在创建后立即执行，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行。
复制代码
复制代码
var p1 = Promise.resolve(value);
// 等价于
var p1 = new Promise(resolve => resolve(value));

var p2 = Promise.reject('err');
// 等同于
var p2 = new Promise((resolve, reject) => reject('err'));
复制代码
 

复制代码
参数扩展
1，function fun (a,b, ...arg){}    //arg = 3,4,5收起来
fun(1,2,3,4,5)
2，arr=[...arr1,...arr2]合并展开

//数组方法:
let arr = [1,2,3]
let arr1 = [[1],[2],[3]]
let arr3 = [({price:10,count:2},{price:5,count:4}]
//更新
console.log(arr.map((item, index, arr) => item* 2 ))                //[2,4,6]更新数组
console.log(arr.reduce((pre, next, index, arr) => pre+ next))     //6
console.log(arr1.reduce((pre, next, index) => pre.concat(next))//扁平化二维数组
console.log(arr3,reduce((pre,next, index)=>{return pre+next.price*next.count;},0))//对象叠加计算，原数组第一项添加为0
//过滤
console.log(arr.filter((item, index, arr) => item>1&&item<5))                //2,3
console.log(arr.find(item, index, arr) => item>1&&item<5)               //2当遍历循环到判断到一个为true则跳出循环，输出当前数组元素
console.log(arr.findIndex((item,index)=>{ return item>1&&item<5}))       //1 索引
//判断
console.log(arr.includes(1))                              //true
console.log(arr.some(x=>{return x>1}))                      //true一个满足则为true所有不满足为false即 并集
console.log(arr.every(x=>{return x>1}))                     //false所有满足为true，一个不满足则为false即交集
