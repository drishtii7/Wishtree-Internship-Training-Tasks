import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Temp extends Component{
    constructor(){
        super();
        this.state = {ProductDetails:[],productArr:{_id:'',pname:'',description:'',price:''},pArr:{_id:101,pname:'dri',description:'d456',price:4000}};
    }
    showProducts(){
        axios.get("http://localhost:8181/products").then(response=>{
            console.log("Product data",response.data);
             this.setState({ProductDetails:response.data});
        })
    }
    componentDidMount(){
        this.showProducts();
    }
    onClickH=(prid)=>{
        let {ProductDetails,productArr}=this.state;
        ProductDetails.forEach((item)=>{
            if(prid === item._id){
                console.log("found cart id",item._id);
                //  productArr._id=item._id;
                //  productArr.pname=item.pname;
                //  productArr.description=item.description;
                //  productArr.price=item.price;
                console.log(productArr);
                const URL="http://localhost:8181/productnew/addProductnew";
                axios.post(URL,productArr).then(response=>{
                console.log(response.data);
        })
            }

        })

        
    }
    render(){
        let {ProductDetails}=this.state;
        return(
            <>
           <div className="container">
            <div className="row">
          
                {ProductDetails.map((item,idx)=>{
                            return(
                                <div className="col-sm border border-dark">
                                <h3>{item._id}</h3>
                                <h3>{item.pname}</h3>
                                <h3>{item.description}</h3>
                                <h3>{item.price}</h3>
                                <button onClick={()=>this.onClickH(item._id)}>Cart button</button>
                                <Link className="btn btn-primary" to={'/userdashboard/'+ item._id}>Add to Cart</Link>
                                </div>
                            )
                        })}
               
            </div>
        </div>
            </>
        )
    }
}
export default Temp;