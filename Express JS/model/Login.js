const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//list of columns of employee
// here we created my document strcture
let Login=new Schema({
    userName:String,  //{    type:String  },
    password:String,  //{ type:String},
    adminfound:Boolean  //{ type:Number }
    
  },{
      collection:'login'
  });

  //exporting my model 
module.exports=mongoose.model('Login',Login);