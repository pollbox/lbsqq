var Promise       = require('bluebird'),
    should        = require('should'),
    _             = require('lodash'),
    suggesion     =require('../../libs/qq/suggestion'),
    config        =require('../config')
    ;


 describe('关键字坐标索引', function () {
    // it('连接情况', function (done) {
    //   suggesion(config.qq.key,'厦门忠轮社').then(data=>{
    //     console.log(data);
    //     done();
    //   })
    // });
    it('地区没地址', function (done) {
      suggesion(config.qq.key,'厦门金尚天涯社区','北京').then(data=>{
        console.log(data);
        done();
      })
    });
 });
