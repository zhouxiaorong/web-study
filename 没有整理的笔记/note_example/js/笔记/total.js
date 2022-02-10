
/**
  isNaN(x) 函数用于检查其参数(x)是否是非数字值。
  可以记忆为 is not a number  通过这个可以得到 如果参数x不是数字返回true、数字就返回false。
  提示 ： isNaN() 函数通常用于检测 parseFloat() 和 parseInt() 的结果，以判断它们表示的是否是合法的数字。
  也可以用 isNaN() 函数来检测算数错误，比如用 0 作除数的情况。
 */
var _isNaN= () => {
  isNaN(123)                 // false  
  isNaN(-1.23)               // false  
  isNaN(5-2)                  // false  
  isNaN(0)                     // false  
  isNaN("Hello")             // true  
  isNaN("2005/12/12")  // true  
  isNaN(0/0)                 // true   
}

/*
    isFinite() 函数用于检查其参数是否是无穷大。
    如果 number 是有限数字（或可转换为有限数字），那么返回 true。否则，如果 number 是 NaN（非数字），或者是正、负无穷大的数，则返回 false。
 */
var _isFinite = () => {
    isFinite(123)                 // true  
    isFinite(-1.23)               // true  
    isFinite(5-2)                  // true  
    isFinite(0)                     // true  
    isFinite("Hello")             // false  
    isFinite("2005/12/12")  // false  
    isFinite(0/0)                 // false  
}