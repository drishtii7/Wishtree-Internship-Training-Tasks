var fs = require('fs');
fs.writeFile('output.txt','Creating file for writing',function(err,data)
{
    if(err)
    throw err;
    console.log("Write operation is done");
})