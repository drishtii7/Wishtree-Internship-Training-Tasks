import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Cart1 extends Component{
    constructor(){
        super();
        this.state={Productorder:[],total:0,showtotal:'',tax:100,shipcharge:125,finalamt:0,showOrder:false,finaldetail:''};
    }
    showProducts=()=>{
        axios.get("http://localhost:8181/productnew").then(response=>{
            console.log("Product data",response.data);
             this.setState({Productorder:response.data});
        })
    }
    componentDidMount(){
        this.showProducts();
    }
    onClickH=()=>{
        let {Productorder,total,tax,shipcharge,finalamt}=this.state;
        this.setState({showtotal:true});
        Productorder.forEach((item)=>{
            console.log(item.price);
            total=total + item.price;
            console.log("total",total);
            this.setState({total});
        })
        finalamt = total + tax + shipcharge;
        this.setState({finalamt});
    }
    onShowOrderH=()=>{
        this.setState({showOrder:true});
    }
    onYes=()=>{
        this.setState({finaldetail:'Your order is placed successfully !!!'});
        this.setState({Productorder:[]});
    }
    render(){
        let {Productorder,total,showtotal,tax,shipcharge,finalamt,finaldetail}=this.state;
        return(
            <>
            <h3>Product Summary {total}</h3>
            <table className='table table-striped'>
            <tbody>
                <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                </tr>
                
                    {Productorder.map((item,idx)=>{
                        return(
                           
                                <tr key={idx}>
                                    <td>{item.pname}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                </tr>
                        )
                    })}
                
            </tbody>
        </table>
            <button className='btn btn-info' onClick={this.onClickH}>View total</button>
            {showtotal===true ? <div className='container container-fluid alert alert-primary'>
            <div>Order amount : {total}</div>
            <div>Sales tax : {tax}</div>
            <div>Shipping charges: {shipcharge}</div>
            <div>Grand total: Rs {finalamt}</div>
            </div>
            :null}
            <center><button className='btn btn-success' onClick={this.onShowOrderH}>Place Order</button> </center>
            {this.state.showOrder?<div>
                <h2>Are you sure you want to place order?</h2>
                <button onClick={this.onYes}>Yes</button>
                <button>No</button>
            </div>:null}
            <h3>{finaldetail}</h3>
            </>
        )
    }
}
export default Cart1;