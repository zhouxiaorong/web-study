# Promise
  > 可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果。主要用于异步计算。

## Promise对象
### 状态
  - Promise 对象有三种状态  
    - `pending`: [待定] 初始状态，不是成功或失败状态。  
    - `fulfilled`: [实现] 意味着操作成功完成。  
    - `rejected`: [被否决] 意味着操作失败。  
  - Promise 对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
  - Promise 对象的状态改变，只有两种可能，这两种情况只要发生，状态就凝固了，不会再变了。
    - 从`pending`变为`fulfilled`
    - 从`pending`变为`rejected`
  - 当promise状态发生改变，就会触发`then()`里的响应函数处理后续步骤；
  
### 参数resolve和reject
  - `resolve`作用:   
    - 将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
  - `reject`作用：  
    - 将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

## 创建
  ``` js
    var promise = new Promise(function(resolve, reject) {
      // 异步处理
      // 处理结束后、调用`resolve`或`reject`
    });
  ```
## 回调
  - 对于已经实例化过的 promise 对象可以调用 promise.then() 方法，传递 resolve 和 reject 方法作为回调。
  ``` js
    promise.then(onFulfilled, onRejected)
    promise.then(onFulfilled).catch(onRejected)
  ```

## 
  - 测试例子1
    ``` js
      var pm = new Promise(function (resolve, reject) {
        reject('reject')
      })

      pm.then((result) => {
        console.log('then 1: '+result)
      },(err) => {
        console.log('then 2: '+err)
      }).catch((err) => {
        console.log('catch: '+err)
      });
    ```