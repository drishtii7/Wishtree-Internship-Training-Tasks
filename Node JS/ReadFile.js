var fs = require('fs');
fs.readFile('MyFile1.txt',function(err,data)
{
    if(err)
    throw err;
    console.log("File data : "+data.toString());
})