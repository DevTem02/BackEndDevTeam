

const exportConn=require('../Routes/ConnectionString/Conn')
module.exports = {
 
 Login:(data,cal)=>{
    const LogData={data}
    exportConn.ReturnData("Select * from UserDetails",(rows, err)=>{
        if (rows){
           return cal(rows)
           //
        }
    })
 }
}