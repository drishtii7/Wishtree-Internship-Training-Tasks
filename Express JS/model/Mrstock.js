const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let Mrstock=new Schema({
    mrno:Number,  //{    type:String  },
    supplier:String,  //{ type:String},
    pname:String,  //{ type:Boolean },
    qty:Number
    
  },{
      collection:'mrstock'
  });


  //exporting my model 
module.exports=mongoose.model('Mrstock',Mrstock);
