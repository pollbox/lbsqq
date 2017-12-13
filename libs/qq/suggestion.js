var
  _ = require('lodash'),
  querystring = require('querystring'),
  makeRequest=require('./makerequest'),
  suggestion
  ;
  /**
    用于获取输入关键字的补完与提示，帮助用户快速输入。本接口为纯HTTP数据接口，需配合前端程序实现Autocomplete（自动完成）的效果。
  */
  /**
  @param key {string} qq地图密钥
  @param keyword {string}  关键字
  @param region {string} 地区
  */
  suggestion=function suggestion(key,keyword,region){
    var url="https://apis.map.qq.com/ws/place/v1/suggestion/";
    region=region||"";
    url+="?"+querystring.stringify({region:region,keyword:keyword,key:key});
    return makeRequest(url).then(result=>{
      // console.log(result);
      return result.data;
    }).catch(result=>{
      return [];
    });
  };

module.exports=suggestion;
