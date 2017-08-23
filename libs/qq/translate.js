var
  _ = require('lodash'),
  querystring = require('querystring'),
  makeRequest=require('./makerequest'),
  translate
  ;

  /**
    实现从其它地图供应商坐标系或标准GPS坐标系，批量转换到腾讯地图坐标系。
  */
  /**
  @param key {string} qq地图密钥
  @param type {string}
  输入的locations的坐标类型
可选值为[1,6]之间的整数，每个数字代表的类型说明：
1 GPS坐标
2 sogou经纬度
3 baidu经纬度
4 mapbar经纬度
5 [默认]腾讯、google、高德坐标
6 sogou墨卡托
  @param locations {string} locations=39.12,116.83;30.21,115.43 支持批量转换，
  */
translate=function translate(key,locations,type){
  var url="https://apis.map.qq.com/ws/place/v1/translate/";
  type=type||3;
  url+="?"+querystring.stringify({locations:locations,type:type,key:key});
  return makeRequest(url).then(result=>{
    // console.log(result);
    return result.locations
  })
};
