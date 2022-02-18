var mongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";
mongoClient.connect(url,function(err,db){
    if(err)throw err;
    var dbase=db.db("Student");
    var Stud1={id:101,name:"Riya",age:24,marks:95};
    dbase.collection("stud").insertOne(Stud1,function(err,res){
        if(err)throw err;
        console.log("Recored is inserted")

        db.close();
        //homework insermany
    })
})
