// 1.
{
  // var a = 1;
  // var b = {
  //   a: 2,
  //   c: {
  //     a: 3,
  //     d: function () {
  //       return this.a;
  //     }
  //   }
  // }
  // console.log(b.c.d());
  // var e = b.c.d;
  // console.log(e());
}
// 2
{
  // var a = { n: 2 }
  // var b = a;
  // a.n = a = { m: 1 };
  // console.log(a);
  // console.log(b);
}
// 3
{
  var a = 1;
  var b = {
    a: 2,
    c: function () {
      a **= 2;
      this.a **= 2;
      console.log(a, this.a);
    }
  }
  b.c(); // 1 4
  var d = b.c;
  d(); // 1 1
  var e = b.c.bind(b);
  e(); // 1 16
}
// 4
{
  function a () {
    b = function () {
      console.log(1);
    }
  }
  a.b = function () {
    console.log(2);
  }
  a.prototype.b = function () {
    console.log(3);
  }
  var b = function () {
    console.log(4);
  }
  function b () {
    console.log(5);
  }
  a.b(); // 
  b();
  a().b();
  b();
  new a.b();
  new a().b();
  new new a().b();
}
// 5
{
  var name = 'lm';
  var obj = function () {
    this.name = 'zxr';
  }
  obj.prototype.getName = function () {
    console.log('name: ' + this.name);
  }
  obj.prototype.getNameDelay = function () {
    setTimeout(this.getName.bind(this), 1000);
  }
  var o = new obj();
  o.getName();
  o.getNameDelay();
}
// 6
{
  function f1 () {
    this.num = 1;
    return null;
  }
  console.log(new f1().num);

  var num = 0;
  function f2 () {
    this.num = 1;
    return {
      num: 2
    };
  }
  console.log(new f2().num);
}
// 7：给定一个字符串，请你找出其中不含有重复字符的连续的最长子串的长度。
{
  function big (text) {
    let num = 0;
    let startIndex = 0;
    const arr = [];
    const len = text.length;
    for (let curIndex = 0; curIndex < len; curIndex++) {
      if (arr.includes(text[curIndex])) {
        if (len - curIndex <= num) {
          break;
        }
        startIndex = curIndex;
        arr.length = 0;
      }
      num = Math.max(num, curIndex - startIndex + 1);
      arr.push(text[curIndex]);
    }
    return num
  };
  console.log(big('abcabeabcde'));
}
// 8 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
{
  // add
  function f (nums1, nums2) {
    let arr = nums1.concat(nums2);
    arr.sort();
    let len = arr.length;
    if (len % 2 == 1) {
      return arr[(len - 1) / 2]
    } else {
      let a = arr[len / 2 - 1];
      let b = arr[len / 2];
      return (a + b) / 2;
    }
  }
  console.log(f([1,2,3],[3,2,6]));
}