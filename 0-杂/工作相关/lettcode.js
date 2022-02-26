/* 1. 两数之和
  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
  你可以按任意顺序返回答案。
*/
{
  // 1
  {
    // function twoSum (arr, sum) {
    //   for (let a = 0; a < arr.length; a++) {
    //     for (let b = a+1; b < arr.length; b++) {
    //       if (arr[a] + arr[b] === sum) {
    //         return [a, b];
    //       }
    //     }
    //   }
    //   return [];
    // }
    // console.log('start1: '+ new Date().getTime());
    // console.log(twoSum([2, 4, 6, 11, 15], 8));
    // console.log('stop1: '+ new Date().getTime());
  }
  // 2
  {
    // function twoSum (arr, sum) {
    //   for (let a in arr) {
    //     let index = arr.indexOf(sum - arr[a]);
    //     if (index) {
    //       return [a, index];
    //     }
    //   }
    //   return [];
    // }
    // console.log('start2: '+ new Date().getTime());
    // console.log(twoSum([2, 4, 6, 11, 15], 8));
    // console.log('stop2: '+ new Date().getTime());
  }
}
/* 2. 
  给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
  请你将两个数相加，并以相同形式返回一个表示和的链表。
  你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
*/
{
  // 1
  {
    var addTwoNumbers = function(l1, l2) {
      const total1 =  Number(l1.join(''))
      const total2 = Number(l2.join(''))
  
      return `${total1 + total2}`.split('')
    };
    console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
    console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));
    // 输入：l1 = [2,4,3], l2 = [5,6,4]
    // 输出：[7,0,8]
    // 解释：342 + 465 = 807.
  }
}