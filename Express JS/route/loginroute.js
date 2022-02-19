const express=require('express');

// here we using express and route

const app=express();
const loginRoute=express.Router();


// here we required employee model and imporeted
let loginModel=require('../model/Login');



loginRoute.route('/').get(function(req,res){
     
     loginModel.find(function(err,logindata){
         if(err) 
            throw console.log("error in controller",err);
         else
            res.json(logindata);

     })
 })


// // To add New  Employee List

loginRoute.route('/addUser').post(function(req,res){
    
     let user=new loginModel(req.body);
     console.log(req.body);
     user.save()
     .then(game=>{res.status(200).json({'user':'User Added Successfully'})})
     .catch(err=>{res.status(400).send("Someting went wrong ....")})
})

// // To get Employee Details By Employee ID

// employeeRoute.route('/editEmployee/:id').get(function(req,res){
//      let id=req.params.id;
//      employeeModel.findById(id,function(err,employee){

//          res.json(employee);
//      })
// })

// // To update Employee Details

// employeeRoute.route('/updateEmployee/:id').put(function(req,res){
//         employeeModel.findById(req.params.id,function(err,employee){
//              if(!employee)//null   
//              {
//                  return next(new Error('Unable to find Employee'));
//              }else
//              {
//                  employee.firstName=req.body.firstName;
//                  employee.lastName=req.body.lastName;
//                  employee.email=req.body.email;
//                  employee.phone=req.body.phone;
//                  employee.save()
//                  .then(  emp=>{  res.json("Employee Updated Sucessfully.")})
//                  .catch(err=>{  res.status(400).send("Unable to Update Employee")})
//              }
//         })
// })

// // To Delete The employee

// employeeRoute.route('/deleteEmployee/:id').delete(function(req,res){
//      employeeModel.findByIdAndRemove({_id:req.params.id},function(err,employee){
//           if(err) 
//               res.json(err)
//           else  
//               res.json('Employee Deleted Successfully..')
//      })
// })

// exporting controller

module.exports=loginRoute;