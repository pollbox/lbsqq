var
  _ = require('lodash'),
  querystring = require('querystring'),
  makeRequest=require('./makerequest'),
  address
  ;

  /**
    实现从其它地图供应商坐标系或标准GPS坐标系，批量转换到腾讯地图坐标系。
  */
  /**
  @param key {string} qq地图密钥
  @param address {string} 地址（注：地址中请包含城市名称，否则会影响解析效果）

  */
address=function address(key,address){
  var url="https://apis.map.qq.com/ws/place/v1/address/";
  type=type||3;
  url+="?"+querystring.stringify({address:address,key:key});
  return makeRequest(url).then(result=>{
    // console.log(result);
    return result.result
  })
};
