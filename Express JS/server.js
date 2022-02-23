const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');





//created express server
const app=express();


mongoose.connect("mongodb://localhost:27017/shoppingcartDB",{useNewUrlParser:true,useUnifiedTopology:true})
.then(
   ()=>console.log("Connection  Done") )
   .catch(
       (err)=>console.log(err)
)
// All express routes
// method
const loginRoute=require('./route/loginroute');
const productRoute=require('./route/productroute');
const productnewRoute=require('./route/productnewroute');
const userRoute=require('./route/userroute');

// converting incoming data to JSON format
app.use(bodyParser.json());

//enabled CROS
app.use(cors());

//setUp SErver port number 
const port=process.env.PORT || 8181;

//routes configration
// resgister
app.use('/login',loginRoute);
app.use('/products',productRoute);
app.use('/productnew',productnewRoute);
app.use('/userp',userRoute);

const server=app.listen(port,function(){
    console.log("Server Listing on port "+port);
})