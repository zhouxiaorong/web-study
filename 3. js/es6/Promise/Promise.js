
/* 
  可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果。主要用于异步计算。
*/
{
  var pro = function () {
    new Promise((resolve, reject) => {
      console.log('Promise 1');
      // throw new Error('err 1');
      resolve('resolve 1')
    }).then(res => {
      console.log('then 1: ' + res);
      return new Promise((resolve, reject) => {
        console.log('Promise 2');
        reject('err 2')
      })
    }).then(res => {
      console.log('then 3: ' + res);
      return new Promise((resolve, reject) => {
        console.log('Promise 3');
        reject('err 3')
      })
    }).catch(err => {
      console.log('error: ' + err);
    })
  }
}
{
  var pro = function () {
    new Promise((resolve, reject) => {
      console.log('Promise');
      throw new Error('err');
    }).then(res => {
      console.log('then:' + res);
    }).catch(err => {
      console.log('error: ' + err);
    })
  }
}
{

  var pro = function () {
    //切菜
    function cutUp () {
      console.log('开始切菜。');
      var p = new Promise(function (resolve, reject) {        //做一些异步操作
        setTimeout(function () {
          console.log('切菜完毕！');
          resolve('切好的菜');
        }, 1000);
      });
      return p;
    }

    //烧水
    function boil () {
      console.log('开始烧水。');
      var p = new Promise(function (resolve, reject) {        //做一些异步操作
        setTimeout(function () {
          console.log('烧水完毕！');
          resolve('烧好的水');
        }, 1000);
      });
      return p;
    }

    Promise.all([cutUp(), boil()])
      .then((result) => {
        console.log('准备工作完毕');
        console.log(result);
      })
  }
  // pro();
}


{
  var pro = function () {
    let p1 = new Promise(resolve => {
      setTimeout(() => {
        resolve('I\`m p1 ')
      }, 1000)
    });
    let p2 = new Promise(resolve => {
      setTimeout(() => {
        resolve('I\`m p2 ')
      }, 2000)
    });
    Promise.race([p1, p2])
      .then(value => {
        console.log(value)
      })
  }
}


{
  var pro = function () {
    // Promise 写法
    // 第一步：获取城市列表
    const cityList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{'id': 'c1'},{'id': 'c2'},{'id': 'c3'}])
      }, 500)
    })

    // 第二步：找到城市是北京的id
    cityList.then(res => {
      let findCityId = res.filter(item => {
        if (item.id == 'c1') {
          return item
        }
      })[0].id

      findCompanyId().then(res => {
        // 第三步（2）：根据北京的id -> 找到北京公司的id
        let findPostionId = res.filter(item => {
          if (item.cityId == findCityId) {
            return item
          }
        })[0].id

        // 第四步（2）：传入公司的id
        companyInfo(findPostionId)

      })

    })

    // 第三步（1）：根据北京的id -> 找到北京公司的id
    function findCompanyId () {
      let aaa = new Promise((resolve, reject) => {
        $.ajax({
          url: 'https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-list',
          success (res) {
            resolve(res)
          }
        })
      })
      return aaa
    }

    // 第四步：根据上一个API的id(findPostionId)找到具体公司，然后返回公司详情
    function companyInfo (id) {
      let companyList = new Promise((resolve, reject) => {
        $.ajax({
          url: 'https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/company',
          success (res) {
            let comInfo = res.filter(item => {
              if (id == item.id) {
                return item
              }
            })[0]
            console.log(comInfo)
          }
        })
      })
    }
  }
}

{
  var fun = function (level) {
    var pro = function (level) {
      return new Promise((resolve, reject) => {
        var val;
        if (level == 1) {
          val = [
            { id: 'bj', name: "北京" },
            { id: 'hz', name: "杭州" },
            { id: 'sh', name: "上海" }
          ];
        } else if (level == 2) {
          val = [
            { id: 'bj1', cityId: 'bj' },
            { id: 'bj2', cityId: 'bj' },
            { id: 'bj3', cityId: 'bj' },
            { id: 'hz1', cityId: 'hz' },
            { id: 'hz2', cityId: 'hz' },
            { id: 'hz3', cityId: 'hz' },
            { id: 'sh1', cityId: 'sh' },
            { id: 'sh2', cityId: 'sh' },
            { id: 'sh3', cityId: 'sh' }
          ]
        } else if (level == 3) {
          val = [
            { id: 'bj1', cityId: 'bj', name: "北京公司1" },
            { id: 'bj2', cityId: 'bj', name: "北京公司2" },
            { id: 'bj3', cityId: 'bj', name: "北京公司3" },
            { id: 'hz1', cityId: 'hz', name: "杭州公司1" },
            { id: 'hz2', cityId: 'hz', name: "杭州公司2" },
            { id: 'hz3', cityId: 'hz', name: "杭州公司3" },
            { id: 'sh1', cityId: 'sh', name: "上海公司1" },
            { id: 'sh2', cityId: 'sh', name: "上海公司2" },
            { id: 'sh3', cityId: 'sh', name: "上海公司3" }
          ]
        } else {
          reject('错误：level不符合要求，level：'+level)
        }
        setTimeout(() => {
          resolve(val);
        }, 200)
      })
    }
    // pro(1).then((res) => {
    //   var cityId = res.filter(item => item.name == '杭州')[0].id;
    //   pro(7).then((res) => {
    //     var gsId = res.filter(item => item.cityId == cityId)[0].id;
    //     pro(3).then(res => {
    //       var item = res.filter(item => item.id == gsId)[0];
    //       console.log(item)
    //     })
    //   })
    // }).catch(err => {
    //   console.log('err: '+ err);
    // })
    var getItem = function () {
      var cityId, gsId, item;
      return pro(1).then((res) => {
        cityId = res.filter(item => item.name == '杭州')[0].id;
        return pro(2);
      }).then((res) => {
        gsId = res.filter(item => item.cityId == cityId)[0].id;
        return pro(3)
      }).then(res => {
        item = res.filter(item => item.id == gsId)[0];
        console.log(item);
        return item;
      }).catch(err => {
        item = err;
        console.log(err);
        return err;
      })
    }
    console.log('item: ' + getItem());
  }
  // fun();
}