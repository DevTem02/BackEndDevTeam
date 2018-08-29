const CallDB=require('../product/ProductQuery/producFile')
const express=require('express');
const _routes =express.Router();
const multer=require('multer')
_routes.get('/',(req,res,next)=>{
    CallDB.ReturnDataTable((rows)=>{
        if (rows){
            res.json(rows)
        }           
    }) 
})
_routes.post('/',(req,res,next)=>{
    const Data={ Name:req.body}
    CallDB.InsertDate( JSON.stringify( Data ),(rows)=>{
        if (rows){res.json(rows)}           
    }) 
})
module.exports=_routes;