import React,{Component} from "react";
import axios from 'axios';
import data1 from './Globaldata';
class Order extends Component{
    constructor(){
        super();
        this.state={Orderdata:[]};
    }
    showOrders=()=>{
        axios.get("http://localhost:8181/order/orderByName/"+data1.obj1).then(response=>{
            console.log("Order data",response.data);
             this.setState({Orderdata:response.data});
        })
    }
    componentDidMount(){
        this.showOrders();
    }
    render(){
        let {Orderdata}=this.state;
        return(
            <>
            <h3 className="text-center">Your Order List :</h3>
          <div className='products'>
           {Orderdata.map((item,idx)=>
                   <>
                   {item.product.map((sub)=>
                   <> 
                   <div className='card' key={idx}>
                       <div>
                           <h3 className='product-name'>{sub.pname}</h3>
                       </div>
                       <br></br>
                       <div>
                           <h3 className='product-desc'>{sub.description}</h3>
                       </div>
                       <br></br>
                       <div>
                           <h3 className='product-price'>Rs. {sub.price}</h3>
                       </div>
                   </div> 
                   </>
                   )}
                   </>
               
           )}
        </div>     
            </>
        )
    }
}
export default Order;