var mongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";
mongoClient.connect(url,function(err,db){
    if(err)throw err;
    var dbase=db.db("Student");
    var Stud2=[{id:102,name:"Shreya",age:25,marks:87},{id:103,name:"Shloka",age:23,marks:78}];
    dbase.collection("stud").insertMany(Stud2,function(err,res){
        if(err)throw err;
        console.log("Records are inserted")

        db.close();
        
    })
})