
// 1 - 使用var和不使用var的区别(全局变量/局部变量)   https://blog.csdn.net/czh500/article/details/80429133
{
    //代码报错。可见没有var关键字，变量的声明不会提前，没有”预编译”的过程。
    alert(a); //a is not defined
    a = 1;
    //var a = 1;


    //案例1(参考网址https://blog.csdn.net/aitangyong/article/details/40817587)
    /*
     function TestClass() {  
     //没有使用var关键字定义的是全局变量  
     val = 1;  
     alert(val);  
     //全局变量会存放在window对象中  
     alert(window.val);  
    
     }
     //调用TestClass构造函数  
     test = new TestClass();  
     //再次验证是一个全局变量  
     alert("val=" + val);
     */

    function TestClass() {
        val = 1;
        alert(val); //1  
        alert(window.val); //undefined  

        var val = 10;
        alert(val); //10  
        alert(window.val); //undefined  
    }

    var test = new TestClass();

    // 	alert(val);//js报错，变量未定义  

    //案例2

    var n1 = 1;
    n2 = 2;

    function f1() {
        var n3 = 3;
        n4 = 4;
    }

    console.log("n1=" + n1);
    console.log("n2=" + n2);
    // 	console.log("n3="+n3) //Error: n3 is not defined
    // 	console.log("n4="+n4) //Error: n4 is not defined
    console.log("=======================");
    f1();
    console.log("n1=" + n1);
    console.log("n2=" + n2);
    // 	console.log("n3="+n3); //Error: n3 is not defined
    console.log("n4=" + n4);

    /*
    说明：
    1.使用var声明变量，在方法内部是局部变量，在方法外部是全局变量
    2.没有使用var声明的变量，在方法内部或外部都是全局变量，但如果是在方
    法内部声明，在方法外部使用之前需要先调用方法，告知系统声明了全局变量后方可在方法外部使用。
    在函数作用域内 加var定义的变量是局部变量,不加var定义的就成了全局变量
    在function内部， 加var的是局部变量， 不加var的则是全局变量；
    在function外部， 不管有没有使用var声明变量，都是全局变量，在function外部,var关
    键字一般可以省略，但是为了书写规范和维护方便以及可读性好，我个人不建议省略var关键字!
    */
}