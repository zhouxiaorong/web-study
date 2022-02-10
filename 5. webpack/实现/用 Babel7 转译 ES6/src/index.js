// 全局引入
import '@babel/polyfill'
// import 'object-defineproperty-ie8'

// 测试 ES6 语法是否通过 babel 转译
const array = [1, 2, 3]
const isES6 = () => document.write(...array)

isES6()

try {
  const arr = [new Promise(() => {}), new Promise(() => {})]
  arr.map(item => {
    document.write(item)
  })
} catch (e) {
  document.write('Promise出错,'+ e);
}


console.log('start');
document.write('<p>start 0816</p>')

try {
  const fun1 = () => {
    // console.log('fun1');
    document.write('fun1')
  }
  fun1()
} catch (e) {
  console.log('()=>{}出错,'+ e);
}

try {
  const array = [1, 2, 3]
  // console.log(...array);
  document.write(...array)
} catch (e) {
  console.log('...出错,'+e);
}


try {
  const arr = [new Promise(() => {}), new Promise(() => {})]
  arr.map(item => {
    // console.log(item)
    document.write(item)
  })
} catch (e) {
  console.log('Promise出错，'+e);
}

