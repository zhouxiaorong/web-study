{
  // // var addTwoNumbers = function(l1, l2) {
  // //     const total1 =  Number(l1.join(''))
  // //     const total2 = Number(l2.join(''))
  // //     return `${total1 + total2}`.split('')
  // // };
  // var sudoku = function (board) {
  //   if (sudoku !== this.constructor) {
  //     throw new Error("必须以构造函数的方式调用");
  //   }
  //   this.board = board;
  //   this.result = board;
  //   this.init();
  //   return this.result;
  // }
  // sudoku.prototype.board = [];// 原数组
  // sudoku.prototype.result = [];// 结果
  // sudoku.prototype.probably = {};// 可能的值
  // sudoku.prototype.init = function () { //
  //   let isContinue = true;
  //   while (isContinue) {
  //     isContinue = this.f_1();
  //   }
  // }
  // sudoku.prototype.f_1 = function (b) { //
  //   this.probably = {};
  //   for (let a = 0; a < 9; a++) {
  //     for (let b = 0; b < 9; b++) {
  //       if (!v[a][b]) { continue; }
  //       this.probably[a + '-' + b] = [];
  //     }
  //   }
  // }
  // // sudoku.prototype.horizontal = function () { //
  // // }
  // // sudoku.prototype.vertical = function () { //
  // // }
  // // sudoku.prototype.lattice = function () { // 格子解
  // // }
  // board = [
  //   ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  //   ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  //   ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  //   ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  //   ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  //   ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  //   ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  //   ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  //   ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  // ];
  // // var sudo = new sudoku(board);
  // // console.log('解：' + sudo);
  // var solveSudoku = function (board) {
  //   function isValid (row, col, val, board) {
  //     let len = board.length
  //     // 行不能重复
  //     for (let i = 0; i < len; i++) {
  //       if (board[row][i] === val) {
  //         return false
  //       }
  //     }
  //     // 列不能重复
  //     for (let i = 0; i < len; i++) {
  //       if (board[i][col] === val) {
  //         return false
  //       }
  //     }
  //     let startRow = Math.floor(row / 3) * 3
  //     let startCol = Math.floor(col / 3) * 3
  //     for (let i = startRow; i < startRow + 3; i++) {
  //       for (let j = startCol; j < startCol + 3; j++) {
  //         if (board[i][j] === val) {
  //           return false
  //         }
  //       }
  //     }
  //     return true
  //   }
  //   function backTracking () {
  //     for (let i = 0; i < board.length; i++) {
  //       for (let j = 0; j < board[0].length; j++) {
  //         if (board[i][j] !== '.') continue
  //         for (let val = 1; val <= 9; val++) {
  //           if (isValid(i, j, `${val}`, board)) {
  //             board[i][j] = `${val}`
  //             if (backTracking()) {
  //               console.log('1');
  //               return true
  //             }
  //             board[i][j] = `.`
  //           }
  //         }
  //         return false
  //       }
  //     }
  //     console.log('2');
  //     return true
  //   }
  //   backTracking()
  //   return board
  // };
  // console.log(solveSudoku(board));
}
{
  // function marrquee (dom) {
  //   var $dom = $(dom);
  //   if ($dom.length <= 0) {
  //     return false;
  //   }
  //   var $p = $dom.find("p");
  //   var p1_width = $p.css('width', 'auto').outerWidth();
  //   var width = $dom.outerWidth();
  //   if (p1_width <= width) {
  //     return false;
  //   }
  //   var text = $dom.text();
  //   $p.append('<span style="padding:0px 60px">' + text + '</span>');
  //   var num = 0;
  //   return setInterval(function () {
  //     if (num == -p1_width) {
  //       //当 span 复制的文本位置与原文本到同一位置时，位置归零（自动向前进1像素）
  //       $p.css({ left: "-1px" });
  //       num = -1;
  //     } else {
  //       //每20毫秒左移1像素
  //       num -= 1;
  //       $p.css({ left: num });
  //     }
  //   }, 20);
  // }
  // var marrquee = function (dom) {
  //   var $dom = $(dom);
  //   if ($dom.length <= 0) {
  //     return false;
  //   }
  //   var $p = $dom.find("p");
  //   var p1_width = $p.css('width', 'auto').outerWidth();
  //   var width = $dom.outerWidth();
  //   p1_width > width && this.marqueeInterval(width, $p, true);
  //   var num = 0;
  //   return setInterval(function () {
  //     if (num == -initialWidth) {
  //       //当 span 复制的文本位置与原文本到同一位置时，位置归零（自动向前进1像素）
  //       $(marqueeClass).css({ left: "-1px" });
  //       num = -1;
  //     } else {
  //       //每20毫秒左移1像素
  //       num -= 1;
  //       $(marqueeClass).css({ left: num });
  //     }
  //   }, 20);
  // }
  // marrquee.prototype.marrqueeTimer = function (width, dom, initialWidth) {
  //   var _this_ = this;
  //   setTimeout(function () {
  //     var addInterval = _this_.marqueeInterval(width, dom, initialWidth);
  //     _this_.interval.push([addInterval, dom]);
  //   }, 0);// marrqueeWaitingTime
  // }
  // marrquee.prototype.marqueeInterval = function (width, dom, initialWidth) {
  //   var fm = this;
  //   var addInterval = undefined;
  //   try {
  //     var num = 0;
  //     addInterval = setInterval(function () {
  //       if (num == -initialWidth) {
  //         //当 span 复制的文本位置与原文本到同一位置时，位置归零（自动向前进1像素）
  //         $(marqueeClass).css({ left: "-1px" });
  //         num = -1;
  //       } else {
  //         //每20毫秒左移1像素
  //         num -= 1;
  //         $(marqueeClass).css({ left: num });
  //       }
  //     }, 20);
  //   } catch (e) {
  //   }
  //   this.interval = addInterval;
  // }
}
{
  var f1 = function () {
    
  }
  var f1 = () => {
    
  }
}
{
  var obj = {a:1}
  var target = {};
  var sources = {a: {b:1}};
  var num = 6;
  var str = "a"
  var bol = true;
  var arr = [1,2]
  ;
  console.log(Object.assign({}, 6, 'a', true, str));
  console.log(sources);


  
  sources.a.b = 2;
  console.log(target);
  console.log(sources);
}