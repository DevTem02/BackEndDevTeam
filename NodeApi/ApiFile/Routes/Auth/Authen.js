
const Originlist=require ('./Originlist')
const where = require("lodash.where");
module.exports=((req,res,next)=>{
    //  res.header("Access-Control-Allow-Origin",
    //   where(Originlist.GetOrigin().Origin, {"OriginAccess": req.headers.origin})[0].OriginAccess);   

     res.header("Access-Control-Allow-Origin","*");   
     
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept,Authorization");
     next();
});