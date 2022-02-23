const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let Products=new Schema({
    pname:String,  //{    type:String  },
    description:String,  //{ type:String},
    price:Number  //{ type:Number }
    
  },{
      collection:'products'
  });

  module.exports=mongoose.model('Products',Products);