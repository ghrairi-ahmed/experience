const mongoose=require('mongoose');
const schema=mongoose.Schema


const produitschema = new schema ({

    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
}
)


const product=mongoose.model('produit',produitschema)
module.exports=product