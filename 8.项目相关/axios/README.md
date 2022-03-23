# adiox

  > 

## 
  ```js
  axios.get('url').then(
    response => {
      console.log('请求成功,数据:'+response.data)
    }
    error => {
      console.log('请求失败')
    }
  )
  ```

## 解决跨域
  1. cors
    配置特殊响应头
  2. jsonp
    借助 script src
    得前端\后端配合
    只能解决 get 请求
  3. 配置代理服务器
    1. nginx
    2. vue-cli
 
