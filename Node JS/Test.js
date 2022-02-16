var http=require("http");
http.createServer(function(req,res){
    res.write("Hello Node JS");
    res.end();
}).listen(8080);