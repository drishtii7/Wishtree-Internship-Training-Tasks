const express=require('express');

// here we using express and route

const app=express();
const productnewRoute=express.Router();


// here we required employee model and imporeted
let productnewModel=require('../model/Productnew');



productnewRoute.route('/').get(function(req,res){
     
     productnewModel.find(function(err,productnewdata){
         if(err) 
            throw console.log("error in controller",err);
         else
            res.json(productnewdata);

     })
 })


// // To add New  Employee List

productnewRoute.route('/addProductnew').post(function(req,res){
    
     let pnewdetail=new productnewModel(req.body);
     console.log(req.body);
     pnewdetail.save()
     .then(game=>{res.status(200).json({'pnewdetail':'Product Added Successfully'})})
     .catch(err=>{res.status(400).send("Someting went wrong ....")})
})




module.exports=productnewRoute;