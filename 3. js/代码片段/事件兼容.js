
/** 兼容IE8以及下浏览器无addEventListener添加事件问题
 * @param {object} obj 要绑定事件的对象
 * @param {string} eventStr 事件(注意：这里不要on)
 * @param {Function} callback 回调函数
 */
function bind(obj , eventStr , callback){
  if(obj.addEventListener){
      //大部分浏览器
      obj.addEventListener(eventStr , callback , false);
  }else{
      //IE8及以下；有this指向问题
      obj.attachEvent("on"+eventStr , function(){
          //在匿名函数中调用回调函数
          callback.call(obj);
      });
  }
}