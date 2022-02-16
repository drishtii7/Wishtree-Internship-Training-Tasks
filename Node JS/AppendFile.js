var fs = require('fs');
fs.appendFile('output.txt','Appending data in file',function(err,data)
{
    if(err)
    throw err;
    console.log("Append operation is done");
})