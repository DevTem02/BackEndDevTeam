
var mysql      = require('mysql');
const Originlist=require ('../Auth/Originlist')
var connection = mysql.createConnection({
  host     : 'sql9.freemysqlhosting.net',
  user     : 'sql9252946',
  password : 'jZBfawXVrW',
  database : 'sql9252946'
});
module.exports = {
    ReturnData: function (sqlQuery, callback) {
   connection.query( sqlQuery ,  (error, results, fields)=> {
     if (error){ throw error};
    return callback(results);
   });}
  }