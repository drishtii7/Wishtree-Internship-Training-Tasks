const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Order=new Schema({
    uname:String, 
    product:[],
    status:Boolean, 
    total_price:Number
  },{
      collection:'order'
  }
)
module.exports=mongoose.model('Order',Order);