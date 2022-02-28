const mongoose=require('mongoose');
const Schema=mongoose.Schema;


let Login=new Schema({
    userName:String,  //{    type:String  },
    password:String,  //{ type:String},
    adminfound:Boolean  //{ type:Boolean }
    
  },{
      collection:'login'
  });


  //exporting my model 
module.exports=mongoose.model('Login',Login);
