import addContent from './add-content'

const TYPE  = 'index 2'
document.write('<p>'+ TYPE +'</p>')
document.write('<p>'+ TYPE +'</p>')
addContent()

import axios from 'axios';

// var url = '/api/widget?ajax=json&id=ad';
// axios.get(url).then(res => {
//   console.log('widget - res:'+ JSON.stringify(res));
// })
// .catch(function (e) { // 请求失败处理
//   console.log('widget - error:'+ e);
// });
// var url = '/api/widget?ajax=json&id=ad';
var url2 = '/XmlData/Main?ajax=json&id=ad';
axios.get(url2).then(res => {
  console.log('XmlData - res:'+ JSON.stringify(res));
})
.catch(function (e) { // 请求失败处理
  console.log('XmlData - error:'+ e);
});;