const express=require('express');

// here we using express and route

const app=express();
const loginRoute=express.Router();


// here import
let loginModel=require('../model/Login');



loginRoute.route('/').get(function(req,res){
     
     loginModel.find(function(err,logindata){
         if(err) 
            throw console.log("error in controller",err);
         else
            res.json(logindata);

     })
 })




loginRoute.route('/addUser').post(function(req,res){
    
     let user=new loginModel(req.body);
     console.log(req.body);
     user.save()
     .then(game=>{res.status(200).json({'user':'User Added Successfully'})})
     .catch(err=>{res.status(400).send("Someting went wrong ....")})
})

loginRoute.route('/editUser/:id').get(function(req,res){
    let id=req.params.id;
    loginModel.findById(id,function(err,logindata){

        res.json(logindata);
    })
})

loginRoute.route('/updateUser/:id').put(function(req,res){
   loginModel.findById(req.params.id,function(err,logindata){
        if(!logindata)//null   
        {
            return next(new Error('Unable to find Product'));
        }else
        {
           logindata.userName=req.body.userName;
           logindata.password=req.body.password;
           logindata.adminfound=req.body.adminfound;
           logindata.save()
            .then(  emp=>{  res.json("User Updated Sucessfully.")})
            .catch(err=>{  res.status(400).send("Unable to Update User")})
        }
   })
})

loginRoute.route('/deleteUser/:id').delete(function(req,res){
   loginModel.findByIdAndRemove({_id:req.params.id},function(err,logindata){
        if(err) 
            res.json(err)
        else  
            res.json('User Deleted Successfully..')
   })
})

module.exports=loginRoute;