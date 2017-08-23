var
  urllib = require('urllib'),
  _ = require('lodash'),
  Promise = require('bluebird'),
querystring = require('querystring');

module.exports=function makeRequest(url,options){
  options=_.assign({ headers: {'Content-Type': 'application/json'},dataType:'json',timeout:5000},options);
  return new Promise(function (resolve, reject) {
    urllib.request(url,options, function (err,data,res) {
        if(!err && res && res.statusCode===200)
        {
          // console.log(typeof data);
          if(data.status===0)
          {
            return resolve(data);
          }else
          {
          return  reject(new Error(data.message));
          }

        }else
        {
          return reject(err);
        }
      });
  });
};
