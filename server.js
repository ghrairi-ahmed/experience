const express=require('express');
const connectdb=require('./config/connectdb');

const app=express()
connectdb()

app.use('/product',require('/routes/produit'))

require('dotenv').config()
const port=process.env.PORT

app.listen(port,(err)=>err?console.log(err):console.log("server is running" +port));


