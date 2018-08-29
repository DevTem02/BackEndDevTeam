
const fs = require('fs');
module.exports = {
    GetOrigin: function (req, res, next) {
     return   JSON.parse(fs.readFileSync('SiteList.json'));
       }
      //  ,GetServerConfig:(req, res, next)=>{
      //   return   JSON.parse(fs.readFileSync('ServerConfig.json'));
      //  }
  }