var mongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

mongoClient.connect(url,function(err,db)
{
    if(err) throw err;
    var dbase=db.db("Student");
    dbase.createCollection("stud",function(err,res){
        if(err)throw err;
        console.log("Collection created ")

        db.close();
    })
})