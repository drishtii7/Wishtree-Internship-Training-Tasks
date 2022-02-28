import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import data1 from './Globaldata';
class Ucart extends Component{
    constructor(){
        super();
        this.state={Productorder:[],total:0,showtotal:'',address:'',phone:'',msg:'',tax:100,shipcharge:125,finalamt:0,showOrder:false,finaldetail:''};
    }
    showProducts=()=>{
        axios.get("http://localhost:8181/order/orderById/"+data1.obj1).then(response=>{
            console.log("Product data",response.data);
             this.setState({Productorder:response.data});
        })
    }
    componentDidMount(){
        this.showProducts();
    }
    onChangeHandlerad=(e)=>
    {
        let {value}=e.target;
        this.setState({address:value});
        console.log("address",value);
    }
    onChangeHandlerphone=(e)=>
    {
        let {value}=e.target;
        this.setState({phone:value});
        console.log("phone",value);
    }
    onOrder=()=>{
        let {finalamt,address,phone}=this.state;
        if(address == '' || phone==''){
            this.setState({msg:'Address or phone cannot be empty'});
        }
        else{
       this.setState({showOrder:true});
        this.setState({finaldetail:'Your order is placed successfully !!!'});
        this.setState({showtotal:false});
        axios.put("http://localhost:8181/order/updateOrder/"+data1.obj1, {
        total_price: finalamt
        })
        .then((response) => {
             console.log(response);
             this.showProducts();
        })
        .catch((error) => {
            console.log(error);
        });
    }
    }
    onClickH=()=>{
        let {Productorder,total,tax,shipcharge,finalamt}=this.state;
        this.setState({showtotal:true});
        Productorder.forEach((item)=>{
            item.product.map((subitem)=>{
                // console.log("subitem",subitem.price);
                total=total + subitem.price;
                // console.log("total",total);
                this.setState({total});
            })
        })
        finalamt = total + tax + shipcharge;
        this.setState({finalamt});
    }
    onShowOrderH=()=>{
        let {Productorder,total,tax,shipcharge,finalamt}=this.state;
        this.setState({showtotal:true});
        Productorder.forEach((item)=>{
            item.product.map((subitem)=>{
                // console.log("subitem",subitem.price);
                total=total + subitem.price;
                // console.log("total",total);
                this.setState({total});
            })
        })
        finalamt = total + tax + shipcharge;
        this.setState({finalamt});
    }
    render(){
        let {Productorder,total,showtotal,tax,shipcharge,finalamt,finaldetail,address,phone,msg}=this.state;
        return(
            <>
            <h4>Your Cart Items :</h4>
        <table className='table table-striped'>
        <tbody>
        <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                </tr>
        {
              Productorder.map((item,idx)=>
              <>
                   {
                       item.product.map((sub)=>
                       <>
                        <tr key={idx}>
                          <td>{sub.pname}</td>
                          <td>{sub.description}</td>
                          <td>{sub.price}</td>
                          </tr>

                       </>
                       )
                   }
                </>
              )
          }
          </tbody>
          </table>      
            <center><button className='btn btn-success' onClick={this.onShowOrderH}>Place Order</button> </center>
            {showtotal===true ?<> <div className='container container-fluid alert alert-primary'>
            <div>Order amount : {total}</div>
            <div>Sales tax : {tax}</div>
            <div>Shipping charges: {shipcharge}</div>
            <div>Grand total: Rs {finalamt}</div>
            </div>
            <center>
                <h4 className='text-danger'>{msg}</h4>
                <div className='form'>
            <form>
            <div className='form-group'>
              <label>Address</label>
             <input type="text" className='form-control' name="address" value={address} onChange={this.onChangeHandlerad}/>
          </div>
            <div className='form-group'>
             <label>Phone</label>
            <input type="text" className='form-control' name="phone" value={phone} onChange={this.onChangeHandlerphone}/>
             </div>
            </form>
            <button className='btn btn-info mt-2' onClick={this.onOrder}>Submit</button>
            </div>
            </center>
            </>
            :null}
            <center>
            <h3>{finaldetail}</h3>
            {this.state.showOrder?<>
            <p>Address : {address}</p>
            <p> Phone : {phone}</p>
            </>:null}
            </center>
            </>
        )
    }
}
export default Ucart;