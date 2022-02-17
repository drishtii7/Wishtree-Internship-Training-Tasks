var express=require('express');

var app=express();

var fs=require("fs");
//http://localhost:8081/listUsers
app.get('/listUsers',function(req,res){
    fs.readFile("users1.json",function(err,data){
        console.log(data);
        res.header('Content-Type', 'application/json');
            // res.header('Accept', 'application/json');
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
            res.header('Access-Control-Allow-Credentials', 'true');
            // res.header('GET', 'POST', 'OPTIONS')
        res.end(data);
    })
})




//http://localhost:8081/3
app.get('/:id',function(req,res){
    fs.readFile("users1.json",function(err,data){
        var users=JSON.parse(data);
        var user=users["user"+req.params.id]
        console.log(user)
        res.end(JSON.stringify(user));
    })
})

var server=app.listen(8081,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("Server is runing on http://%s:%s",host,port);
})