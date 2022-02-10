
class _date_prototype {
    // constructor: ƒ Date()
    // toString: ƒ toString()
    // toDateString: ƒ toDateString()
    // toTimeString: ƒ toTimeString()
    // toISOString: ƒ toISOString()
    // toUTCString: ƒ toUTCString()
    // toGMTString: ƒ toUTCString()
    // getDate: ƒ getDate()
    // setDate: ƒ setDate()
    // getDay: ƒ getDay()
    // getFullYear: ƒ getFullYear()
    // setFullYear: ƒ setFullYear()
    // getHours: ƒ getHours()
    // setHours: ƒ setHours()
    // getMilliseconds: ƒ getMilliseconds()
    // setMilliseconds: ƒ setMilliseconds()
    // getMinutes: ƒ getMinutes()
    // setMinutes: ƒ setMinutes()
    // getMonth: ƒ getMonth()
    // setMonth: ƒ setMonth()
    // getSeconds: ƒ getSeconds()
    // setSeconds: ƒ setSeconds()
    // getTime: ƒ getTime()
    // setTime: ƒ setTime()
    // getTimezoneOffset: ƒ getTimezoneOffset()
    // getUTCDate: ƒ getUTCDate()
    // setUTCDate: ƒ setUTCDate()
    // getUTCDay: ƒ getUTCDay()
    // getUTCFullYear: ƒ getUTCFullYear()
    // setUTCFullYear: ƒ setUTCFullYear()
    // getUTCHours: ƒ getUTCHours()
    // setUTCHours: ƒ setUTCHours()
    // getUTCMilliseconds: ƒ getUTCMilliseconds()
    // setUTCMilliseconds: ƒ setUTCMilliseconds()
    // getUTCMinutes: ƒ getUTCMinutes()
    // setUTCMinutes: ƒ setUTCMinutes()
    // getUTCMonth: ƒ getUTCMonth()
    // setUTCMonth: ƒ setUTCMonth()
    // getUTCSeconds: ƒ getUTCSeconds()
    // setUTCSeconds: ƒ setUTCSeconds()
    // valueOf: ƒ valueOf()
    // getYear: ƒ getYear()
    // setYear: ƒ setYear()
    // toJSON: ƒ toJSON()
    // toLocaleString: ƒ toLocaleString()
    // toLocaleDateString: ƒ toLocaleDateString()
    // toLocaleTimeString: ƒ toLocaleTimeString()
    // Symbol(Symbol.toPrimitive): ƒ [Symbol.toPrimitive]()

}
// 
{
  var date = new Date();

  // 从 Date 对象返回一周中的某一天 (0 ~ 6)。
  // console.log(date.getDay());// 2

  // 根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。
  // console.log(date.getUTCDay());// 2

  // getTime()	返回 1970 年 1 月 1 日至今的毫秒数。
  // console.log(date.getTime());// 1605605359593

  // getTimezoneOffset()	返回本地时间与格林威治标准时间 (GMT) 的分钟差。
  // console.log(date.getTimezoneOffset());// -480
  
  function getDate(date){
    return date.getFullYear() + '-' +// 从 Date 对象以四位数字返回年份。
           (date.getMonth() + 1) + '-' +// 从 Date 对象返回月份 (0 ~ 11)。
           date.getDate() + ' ' +//  Date 对象返回一个月中的某一天 (1 ~ 31)。
           date.getHours() + ':' +// 返回 Date 对象的小时 (0 ~ 23)。
           date.getMinutes() + ':' + // 返回 Date 对象的分钟 (0 ~ 59)。
           date.getSeconds() + ' ' + // 返回 Date 对象的秒数 (0 ~ 59)。
           date.getMilliseconds();// 返回 Date 对象的毫秒(0 ~ 999)
  }
  // console.log(getDate(date));

  function getUTCDate(date){
    return date.getUTCFullYear() + '-' +// 根据世界时从 Date 对象返回四位数的年份。
           (date.getUTCMonth() + 1) + '-' +// 根据世界时从 Date 对象返回月份 (0 ~ 11)。
           date.getUTCDate() + ' ' +//根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。
           date.getUTCHours() + ':' +// 根据世界时返回 Date 对象的小时 (0 ~ 23)。
           date.getUTCMinutes() + ':' + // 根据世界时返回 Date 对象的分钟 (0 ~ 59)。
           date.getUTCSeconds() + ' ' + // 根据世界时返回 Date 对象的秒钟 (0 ~ 59)。
           date.getUTCMilliseconds();// 根据世界时返回 Date 对象的毫秒(0 ~ 999)。
  }
  // console.log(getUTCDate(date));


  // parse(datestring)	返回1970年1月1日午夜到指定日期（字符串）的毫秒数（datestring 必需。表示日期和时间的字符串。）
  // console.log(Date.parse('2020-11-18 10:51:00'));
  
  // toDateString()	把 Date 对象的日期部分转换为字符串。
  // toISOString()	使用 ISO 标准返回字符串的日期格式。
  // toJSON()	以 JSON 数据格式返回日期字符串。
  // toLocaleDateString()	根据本地时间格式，把 Date 对象的日期部分转换为字符串。
  // toLocaleTimeString()	根据本地时间格式，把 Date 对象的时间部分转换为字符串。
  // toLocaleString()	根据本地时间格式，把 Date 对象转换为字符串。
  // toString()	把 Date 对象转换为字符串。
  // toTimeString()	把 Date 对象的时间部分转换为字符串。
  // toUTCString()	
  // 根据世界时，把 Date 对象转换为字符串。

  function set(){
    // setDate()	设置 Date 对象中月的某一天 (1 ~ 31)。
    // setFullYear()	设置 Date 对象中的年份（四位数字）。
    // setHours()	设置 Date 对象中的小时 (0 ~ 23)。
    // setMilliseconds()	设置 Date 对象中的毫秒 (0 ~ 999)。
    // setMinutes()	设置 Date 对象中的分钟 (0 ~ 59)。
    // setMonth()	设置 Date 对象中月份 (0 ~ 11)。
    // setSeconds()	设置 Date 对象中的秒钟 (0 ~ 59)。
    // setTime()	setTime() 方法以毫秒设置 Date 对象。
    // setUTCDate()	根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。
    // setUTCFullYear()	根据世界时设置 Date 对象中的年份（四位数字）。
    // setUTCHours()	根据世界时设置 Date 对象中的小时 (0 ~ 23)。
    // setUTCMilliseconds()	根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。
    // setUTCMinutes()	根据世界时设置 Date 对象中的分钟 (0 ~ 59)。
    // setUTCMonth()	根据世界时设置 Date 对象中的月份 (0 ~ 11)。
    // setUTCSeconds()	setUTCSeconds() 方法用于根据世界时 (UTC) 设置指定时间的秒字段。
  }
  
  // 实例：
  
  // var today = new Date();
  // var UTCstring = today.toUTCString();
  // UTC()	根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。
  // valueOf()	返回 Date 对象的原始值。
  
}

// 创建 Date 对象
function _new(){
  console.log(new Date());
  console.log(new Date(new Date().getTime()));
  console.log(new Date('2020-5-1 9:00:00'));
  console.log(new Date(2020, 5, 1, 9, 0, 0, 0));
}
// _new();