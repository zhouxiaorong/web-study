

document.write('<h3>start</h3><p></p>')
console.log('start');
document.write('<p>start 1609</p>')

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
    console.log(item)
    document.write(item)
  })
} catch (e) {
  console.log('Promise出错，'+e);
}
