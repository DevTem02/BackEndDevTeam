

const express=require('express');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const Auth=require('./ApiFile/Routes/Auth/Authen')
const productRoute=require('./ApiFile/Routes/api/ProductApi')
//const productRoute=require('./ApiFile/Routes/Product/ProductQuery/producFile')
const app=express();
app.use(Auth,(req, res, next) =>{
  next();
});
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/Product',productRoute);

module.exports=app;