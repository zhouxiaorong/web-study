/** Chalk颜色库
 * chalk.js
 * 可以为 console.log() 的输出信息配置不同的显示颜色和样式
 * 安装4及以下版本, 最新的5版本有点问题
 * 安装: `npm install chalk@4 --save-dev` 
 * 方法
 *   样式api
      reset – 样式重置
      bold – 加粗
      dim – 浅高亮
      italic – 斜体
      underline – 下划线
      inverse – 反转前景和背景色
      hidden – 隐藏内容
      strikethrough – 删除线
      visible – 显示chalk level > 0 的内容
 * 例
 *  console.log(chalk.blue('Hello world!'));
 */
const chalk = require('chalk')
// const Mock = require('mockjs')

// 用户， key: 用户名，value: 用户信息
let users = {
  'admin': {
    id: '001',
    username: 'admin',
    password: '123456',
    roleId: 1
  },
  'zxr': {
    id: '002',
    username: 'zxr',
    password: '123456',
    roleId: 1
  }
}
/*
let usersArr = Mock.mock({
  'users|100': [{
    id: '@id',
    username: '@first()',
    password: '123456',
    roleId: 2
  }]
}).users;

for (const key in usersArr) {
  users[usersArr[key].username] = usersArr[key];
}
 */

/* 
function User (username, password, roleId = 0) {
  this.username = username;
  this.password = password;
  this.roleId = roleId;
}
function addUser (username, password, roleId = 0) {
  if (typeof(obj1) == 'object' && obj1.constructor == User) {
    users.push(user)
  }
}
 */

// const ddd = {
//   id: '@id',
//   name: '@cname()'
// }


module.exports = {
  users,
  userApi: [
    {
      url: '/api/login',
      type: 'post',
      response (req) {
        const { username, password, sign } = req.body;

        let user = users[username];
        let res = {
          'code': 200,
          'message': 'SUCCESS'
        }
        if (user) {
          if (password != user.password) {
            res = {
              'code': 3031,
              'message': '密码错误'
            }
          }
        } else {
          res = {
            'code': 3032,
            'message': '用户不存在'
          }
          // users.push(User(username, password))
        }

        return res;
      }
    },{
      url: '/api/userinfo',
      type: 'post',
      response (req) {
        const { username } = req.body;
        let user = users[username];
        if (user) {
          return {
            'code': 200,
            'message': 'SUCCESS',
            'data': user
          }
        } else {
          return {
            'code': 3032,
            'message': '用户不存在'
          }
        }
      }
    }
  ]
}