//引入mockjs
import Mock from 'mockjs'

//使用mockjs模拟数据
const url = 'http://127.0.0.1:5500/html/node_000000.html';
Mock.mock(url, {
    "ret":0,
    "data":
      {
        "mtime": "@datetime",//随机生成日期时间
        "score|1-800": 800,//随机生成1-800的数字
        "rank|1-100":  100,//随机生成1-100的数字
        "stars|1-5": 5,//随机生成1-5的数字
        "nickname": "@cname",//随机生成中文名字
      }
});