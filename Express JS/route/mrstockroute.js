const express=require('express');

// here we using express and route

const app=express();
const mrstockRoute=express.Router();



let mrstockModel=require('../model/Mrstock');



mrstockRoute.route('/').get(function(req,res){
     
    mrstockModel.find(function(err,mrstockdata){
         if(err) 
            throw console.log("error in controller",err);
         else
            res.json(mrstockdata);

     })
 })


// // To add New Product List

mrstockRoute.route('/addStock').post(function(req,res){
    
     let prdetail=new mrstockModel(req.body);
     console.log(req.body);
     prdetail.save()
     .then(game=>{res.status(200).json({'prdetail':'Product StockAdded Successfully'})})
     .catch(err=>{res.status(400).send("Someting went wrong ....")})
})







// exporting controller

module.exports=mrstockRoute;