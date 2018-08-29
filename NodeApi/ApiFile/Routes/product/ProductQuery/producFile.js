
 const CallDB=require('../../ConnectionString/Conn')
  
module.exports = {
    ReturnDataTable:(cal)=> {
        CallDB.ReturnData("SELECT * FROM `T_UserDetails`",(rows, err)=>{
            if (rows){
               return cal(rows)
            }
        })
    },
 InsertDate:(data,cal)=>{
    var jsonParsed = JSON.parse(data);
    CallDB.ReturnData("call proc_ins_users ('Hasan1','Hasan1','hasan@emial.com','address','862331212','userID','Password','INS',0)",(rows, err)=>{
        if (rows){
           return cal(rows)
        }
    })
 }
}