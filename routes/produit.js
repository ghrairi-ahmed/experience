const express=require('express');
const productRouter=express.Router();
const product=require('../models/produit')

productRouter.post("/add",async(req,res)=>{
    try {
       let newproduct=new product (req.body)
       let result=await newproduct.save()
       res.send({product:result,msg:"product added succesuflly"})
    } catch (error) {
        console.log(error)
        
    }
})


module.exports = productRouter;