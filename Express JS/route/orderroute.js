const exppress=require('express');


const app=exppress();
const orderRoute=exppress.Router();

let orderModel=require('../Model/Order');


orderRoute.route('/').get(function(req,res){
     
    orderModel.find(function(err,data){
        if(err) 
           throw console.log("error in controller",err);
        else
           res.json(data);

    })
})
orderRoute.route('/addOrder').post(function(req,res){
     
    console.log(req.body);
    let orderData=new orderModel(req.body);
    orderData.save()
    .then(result=>res.status(200).json({'InsertedOrder':true}))
    .catch(err=>res.status(400).send("Someting went wrong...."));
})

orderRoute.route('/orderById/:id').get(function(req,res){
    let id=req.params.id;
   console.log("ID in order :",id);
    orderModel.find({$and:[{uname:id,status:false}]},function(err,order){
        // if(err) throw err;
        res.json(order);
    })
})

orderRoute.route('/orderByName/:id').get(function(req,res){
    let id=req.params.id;
   console.log("ID in order :",id);
    orderModel.find({$and:[{uname:id,status:true}]},function(err,order){
        // if(err) throw err;
        res.json(order);
    })
})

orderRoute.route('/updateOrder/:id').put(function(req,res){
    //res.json("done")
     let id=req.params.id
    let total_price=req.body.total_price;
     orderModel.findOneAndUpdate({uname:id,status:false},{status:true,total_price:total_price}).then(function(data){
        // orderModel.find({userId:id}).then(function(data){
          //   res.send(data)
         //})
         res.send(data);
         
     })
     
 })
 
 



module.exports=orderRoute;