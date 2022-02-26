// Math

// 语法
{
  // 返回PI
  // console.log(Math.PI);// 3.1415926

  // 返回 num 的平方根
  // var num = 16;
  // console.log(Math.sqrt(num));// 4
}

// 对象属性
{
  // 返回算术常量 e，即自然对数的底数（约等于2.718）
  // console.log(Math.E);// 2.718281828459045
  
  // 返回 2 的自然对数（约等于0.693）。
  // console.log(Math.LN2);// 0.6931471805599453

  // 返回 10 的自然对数（约等于2.302）。
  // console.log(Math.LN10);// 2.302585092994046

  // 	返回以 2 为底的 e 的对数（约等于 1.4426950408889634）。
  // console.log(Math.LOG2E);// 1.4426950408889634

  // 返回以 10 为底的 e 的对数（约等于0.434）。
  // console.log(Math.LOG10E);// 0.4342944819032518

  // 	返回圆周率（约等于3.14159）。
  // console.log(Math.PI);// 3.141592653589793

  // 	返回 2 的平方根的倒数（约等于 0.707）。
  // console.log(Math.SQRT1_2);// 0.7071067811865476

  // 	返回 2 的平方根（约等于 1.414）。
  // console.log(Math.SQRT2);// 1.4142135623730951
}

// 对象方法
{
  // round(x)	四舍五入。
  // console.log(Math.round(3.3));// 3
  // console.log(Math.round(3.5));// 4
  // console.log(Math.round(3.8));// 4
  // console.log(Math.round(-3.3));// -3
  // console.log(Math.round(-3.5));// -3
  // console.log(Math.round(-3.8));// -4

  // ceil(x)	对数进行上舍入。
  // console.log(Math.ceil(3.3));// 4
  // console.log(Math.ceil(-3.3));// -3

  // floor(x)	对 x 进行下舍入。
  // console.log(Math.floor(3.3));// 3
  // console.log(Math.floor(-3.3));// -4
  
  // sqrt(x)	返回数的平方根。
  // console.log(Math.sqrt(16));// 4
  // console.log(Math.sqrt(-16));// NaN
  // console.log(Math.sqrt(0));// 0
  
  // pow(x,y)	返回 x 的 y 次幂。
  // console.log(Math.pow(2, 3));// 8
  // console.log(Math.pow(2, 4));// 16
  // console.log(Math.pow(2, 0));// 1
  // console.log(Math.pow(2));// NaN
  
  // abs(x)	返回 x 的绝对值。
  // console.log(Math.abs(-6));// 6
  // console.log(Math.abs(0));// 0
  // console.log(Math.abs(6));// 6
  
  // random()	返回 0 ~ 1 之间的随机数。
  // console.log(Math.random());//0.2283805585403662

  // max(x,y,z,...,n)	返回 x,y,z,...,n 中的最高值。
  // console.log(Math.max(3, 5, 6, 1, 9, 22));// 22
  // console.log(Math.max());// -Infinity
    
  // min(x,y,z,...,n)	返回 x,y,z,...,n中的最低值。
  // console.log(Math.min(3, 5, 6, 1, 9, 22));// 1

  {
    // log(x)	返回数的自然对数（底为e）。
    // console.log(Math.log(5));// 1.6094379124341003
  
    // sin(x)	返回数的正弦。
    // console.log(Math.sin(16));// -0.2879033166650653
    
    // tan(x)	返回角的正切。
    // console.log(Math.tan(16));// 0.3006322420239034

    // acos(x)	返回 x 的反余弦值。
    // console.log(Math.acos(1));// 0

    // asin(x)	返回 x 的反正弦值。
    // console.log(Math.asin(1));// 1.5707963267948966
  
    // cos(x)	返回数的余弦。
    // console.log(Math.cos(16));// -0.9576594803233847
    
    // exp(x)	返回 Ex 的指数。
    // console.log(Math.exp(16));// 8886110.520507872

    // atan(x)	以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。
    // console.log(Math.atan(16));//1.5083775167989393
    
    // atan2(y,x)	返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。
    // console.log(Math.atan2(3, 5));// 0.5404195002705842
  }

  // es6
  {
    // Math.sign(x)函数：用来判断一个数到底是正数、负数、还是零。
    // console.log(Math.sign(-3));// -1
    // console.log(Math.sign(0));// 0
    // console.log(Math.sign(3));// 1

    // Math.trunc(x)函数：用于去除一个数的小数部分，返回整数部分
    // console.log(Math.trunc(3.112));// 3
    // console.log(Math.trunc(-3.112));// -3

    // Math.hypot(...values) 返回所有参数的平方和的平方根。
    // console.log(Math.hypot(2, 2, 2, 2));// 4
    // console.log(Math.hypot());// 0
    // console.log(Math.hypot(2));// 2

    // Math.fround(x)  返回 x 的单精度浮点数形式的数字。 
    // console.log(Math.fround(0));// 0
    // console.log(Math.fround(1));// 1
    // console.log(Math.fround(1.337));// 1.3370000123977661
    // console.log(Math.fround(1.5));// 1.5
    // console.log(Math.fround(NaN));// NaN

    // Math.cbrt(x)函数：用于计算一个数的立方根
    // console.log(Math.cbrt(0));// 0
    // console.log(Math.cbrt(1));// 1
    // console.log(Math.cbrt(16));// 2.5198420997897464


    // Math.acosh(x) 返回 x 的反双曲余弦。 x:必需，要求反双曲余弦的数字。
    // Math.asinh(x) 返回 x 的反双曲正弦。
    // Math.atanh(x) 返回 x 的反双曲正切。
    // Math.clz32(x) 返回 x 的 32 位二进制整数表示形式的前导 0 的个数。
    // Math.sinh(x) 返回x的双曲正弦。
    // Math.cosh(x) 返回 x 的双曲余弦。
    // Math.expm1(x) 返回 eˆx - 1。
    // Math.imul(x, y) 返回两个参数以 32 位整数形式相乘的结果。
    // Math.log1p(x) 返回 1 + x 的自然对数。
    // Math.log10(x) 返回以 10 为底的x的对数。
    // Math.log2(x) 返回以 2 为底的 x 的对数。
    // Math.tanh(x) 返回 x 的双曲正切
  }
}