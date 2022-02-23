const express=require('express');

// here we using express and route

const app=express();
const productRoute=express.Router();



let productModel=require('../model/Products');



productRoute.route('/').get(function(req,res){
     
     productModel.find(function(err,productdata){
         if(err) 
            throw console.log("error in controller",err);
         else
            res.json(productdata);

     })
 })


// // To add New Product List

productRoute.route('/addProduct').post(function(req,res){
    
     let pdetail=new productModel(req.body);
     console.log(req.body);
     pdetail.save()
     .then(game=>{res.status(200).json({'pdetail':'Product Added Successfully'})})
     .catch(err=>{res.status(400).send("Someting went wrong ....")})
})



productRoute.route('/editProduct/:id').get(function(req,res){
     let id=req.params.id;
     productModel.findById(id,function(err,productdata){

         res.json(productdata);
     })
})



productRoute.route('/updateProduct/:id').put(function(req,res){
        productModel.findById(req.params.id,function(err,productdata){
             if(!productdata)//null   
             {
                 return next(new Error('Unable to find Product'));
             }else
             {
                productdata.pame=req.body.pname;
                productdata.description=req.body.description;
                productdata.price=req.body.price;
                productdata.save()
                 .then(  emp=>{  res.json("Product Updated Sucessfully.")})
                 .catch(err=>{  res.status(400).send("Unable to Update Product")})
             }
        })
})



productRoute.route('/deleteProduct/:id').delete(function(req,res){
     productModel.findByIdAndRemove({_id:req.params.id},function(err,productdata){
          if(err) 
              res.json(err)
          else  
              res.json('Product Deleted Successfully..')
     })
})

// exporting controller

module.exports=productRoute;