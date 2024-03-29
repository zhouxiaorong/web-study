
var yourObject = (function () {
  var name = "mia";//私有属性
  this.age = "18";//公有属性
  function getName () {//私有方法
    return name;
  }
  this.getAge = function () {//公有方法
    return age;
  }
  return {
    // 公有方法和属性
    total: "0",
    getTotal: function () {
      return total;
    }
  }

})();

var o = {
  f: function () {
    return this.a + this.b;
  }
}
o.a = 3;
o.b = 4;
o.c = 5;
var p = Object.create(o);
p.a = 1;
p.b = 2;
console.log(p.f());//3       




// 对象中
var test1 = {
  name: '大白',
  getName: function () {
    console.log(this.name);
  }
}
//调用
test1.getName();//大白

// 构造函数中
function test2 (name, age) {
  this.name = name;
  this.age = age;
  //公有方法
  this.getName = function () {
    console.log(this.name);
  }
}
// 在原型中
test2.prototype.getAge = function () {
  console.log(this.age);
}
//调用
var test3 = new test2('小白', 12);
test3.getName();//小白
test3.getAge();//12


// 构造函数中
function test5 (name) {
  // 私有属性
  var total = 10;

  // 公有属性
  this.name = name;

  // 私有方法
  function _buyFood () {
    total--;
  }

  // 特权方法,才能访问私有的属性和私有的方法
  this.buy = function () {
    _buyFood();
  }

  this.getTotal = function () {
    return total;
  }
}

// 公有方法, 注意这里不能访问私有成员_total
test5.prototype.getName = function () {
  //console.log(_total); // Uncaught ReferenceError: _total is not defined
  return this.name;
}

var test6 = new test5('大小白');
console.log(test6.getName()); // '大小白'
test6.buy();
console.log(test6.getTotal()); // 9


var test7 = (function () {
  // 私有属性
  var total = 10;

  // 私有方法
  function buyFood () {
    total--;
  }
  // 构造函数
  function test7 (name) {
    this.name = name;
    this.getTotal = function () {
      return total;
    }
  }
  // 公有方法  这里不是test7内部的私有
  test7.prototype.buy = function () {
    console.log(total);
    buyFood();
  }
  test7.prototype.getName = function () {
    return this.name;
  }
  return test7;
})();
var test0 = new test7('大大白');
console.log(test0.getName());//大大白
test0.buy();//10
console.log(test0.getTotal());//9