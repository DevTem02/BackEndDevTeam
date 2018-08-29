
var mysql      = require('mysql');
const Originlist=require ('../Auth/Originlist')
var connection = mysql.createConnection({
  host     : 'XXXXX',
  user     : 'XXXX',
  password : 'XXXXX',
  database : 'XXXXX'
});
module.exports = {
    ReturnData: function (sqlQuery, callback) {
   connection.query( sqlQuery ,  (error, results, fields)=> {
     if (error){ throw error};
    return callback(results);
   });}
  }