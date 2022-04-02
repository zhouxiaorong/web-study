
/** 时间戳转化指定的格式 */
{
  const format = (date = new Date(), fmt = "yyyy-MM-dd hh:mm") => {
    const o = {
      "M+": date.getMonth() + 1,//月份
      "d+": date.getDate(),//日
      "h+": date.getHours(),//时
      "m+": date.getMinutes(),//分
      "s+": date.getSeconds(),//秒
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length))
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1 ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length))))
      }
    }
    return fmt
  }
  // console.log(format());
}
/** 时间戳显示为多少分钟前，多少天前的处理 */
{
  const convertTime=(timestamp)=>{
    timestamp = String(timestamp).padEnd(13, 0)
    // 偏差时间
    const diffValue = new Date().getTime() - timestamp
    // 根据时间偏差计算差异时间量级
    const diff = (diffValue) => {
      // 常量
      const MINUTE = 1000*60
      const HOUR = MINUTE * 60
      const DAY = HOUR * 24
      const MOUTH = DAY * 30
      const YEAR = DAY * 365

      // 计算并返回差异时间的量级
      return {
        diffYear: Math.abs(diffValue / YEAR),
        diffMonth: Math.abs(diffValue / MOUTH),
        diffWeek: Math.abs(diffValue / (7 * DAY)),
        diffDay: Math.abs(diffValue / DAY),
        diffHour: Math.abs(diffValue / HOUR),
        diffMinute: Math.abs(diffValue / MINUTE)
      }
    }
    const { diffYear, diffMonth, diffWeek, diffDay, diffHour, diffMinute} = diff(diffValue);
    // 返回的值
    let value = '';
    if (diffYear >= 1) {
      value = parseInt(diffYear) + '年';
    } else if (diffMonth >= 1) {
      value = parseInt(diffMonth) + '月';
    } else if (diffWeek >= 1) {
      value = parseInt(diffWeek) + '周';
    } else if (diffDay >= 1) {
      value = parseInt(diffDay) + '天';
    } else if (diffHour >= 1) {
      value = parseInt(diffHour) + '小时';
    } else if (diffMinute >= 1) {
      value = parseInt(diffMinute) + '分钟';
    }
    // 表示尚未结束
    const isLast = diffValue > 0
    if (value) {
      return isLast ? `${value}前` : `${value}后`;
    } else {
      return isLast ? '刚刚' : '即将';
    }
  }
  console.log(convertTime(1604590819));
  console.log(convertTime(1614590819));
  console.log(convertTime(1634590819));
  console.log(convertTime(1648437912));
  console.log(convertTime(1694590819));
}
/** 处理DOM渲染 */
{
  String.prototype.interpolate = function (params) {
    const names = Object.keys(params);
    const values = Object.values(params);
    return new Function(...names, `return \`${this}\`;`)(...values);
  };
  
  // 测试
  const tplEle = '<span>${name}</span><span>${age}</span>'
  // console.log(tplEle.interpolate({name:"zxr",age:18}))
}