var mongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";
mongoClient.connect(url,function(err,db){
    if(err)throw err;
    var dbase=db.db("Student");

    var query={age:24}
    dbase.collection("stud").findOne(query).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
    })
    
})