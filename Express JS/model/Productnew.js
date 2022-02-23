const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let Productnew=new Schema({
    pname:String,  //{    type:String  },
    description:String,  //{ type:String},
    price:Number  //{ type:Number }
    
  },{
      collection:'productnew'
  });

  module.exports=mongoose.model('Productnew',Productnew);