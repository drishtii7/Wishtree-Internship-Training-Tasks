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
const orderRoute=require('./route/orderroute');
const mrstockRoute=require('./route/mrstockroute');

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
app.use('/order',orderRoute);
app.use('/mrstock',mrstockRoute);

const server=app.listen(port,function(){
    console.log("Server Listing on port "+port);
})