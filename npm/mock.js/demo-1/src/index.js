import promise from 'es6-promise'
import axios from 'axios';

// 注意： es6-promise   一定要在 axios 之前注册
promise.polyfill()
// require('es6-promise').polyfill();

document.write('<h3>start</h3><p></p>')

var url = 'http://127.0.0.1:5500/html/node_000000.html';
var data = {
  userName: 'mia',
  password: '111'
}
axios.get(url, data)
  .then(function (response) {
    let $dom = document.getElementsByTagName('p')[0]
    if (typeof response.data == 'object') {
      $dom.innerText = JSON.stringify(response.data);
    } else {
      $dom.innerText = response.data;
    }
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });