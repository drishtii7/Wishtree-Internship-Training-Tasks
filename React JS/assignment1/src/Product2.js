import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Product2 extends Component{
    constructor(){
        super();
        this.state = {ProductDetail:[],notify:'',notifyUpdate:'',notifyAdd:'',Products:{id:'',pname:'',description:'',price:''},newProd:{},getPid:'',msgUp:''}
    }
    showProducts(){
        axios.get("http://localhost:5000/Products").then(response=>{
            console.log(response.data);
             this.setState({ProductDetail:response.data});
        })
    }
    componentDidMount(){
        this.showProducts();
    }
    onChangeHandler=(e)=>
    {
        let {name,value}=e.target;
        let {Products}=this.state;
        this.setState({Products:{...Products,[name]:value}});
    }
    onAdd=()=>{
        let {notifyAdd}=this.state;
        this.setState({notifyAdd:true});
    }
    getData(pid){
        axios.get("http://localhost:5000/Products/"+pid).then(response=>{
            console.log(response.data);
             this.setState({newProd:response.data});
        })
    }
    onUpdateH = (prid)=>{
        let {notifyUpdate}=this.state;
        this.setState({notifyUpdate:true});
        console.log(notifyUpdate);
        this.getData(prid);
        console.log("prid:",prid);
    }
    onChangeHandlerUp =(e)=>{
         
        let {name,value}=e.target;
        this.setState({getPid:value});
        
       this.setState({newProd:{...this.state.newProd,[name]:value}});
       //console.log(value);
       }
       onDeleteH = (pid)=>{
        axios.delete("http://localhost:5000/Products/"+pid).then(response=>{
            console.log("Delete",response);
            this.showProducts();
        })
    }
    onSubmitH = (e)=>{
        e.preventDefault();
        let {newProd} = this.state;
       const URL = "http://localhost:5000/Products/" + newProd.id;
        axios.put(URL,this.state.newProd).then(response=>{
            console.log(response);
                this.setState({msgUp:'Record has been updated'});
                this.showProducts();
         })
    }
    onSubmit=(e)=>{
        e.preventDefault();
       // let {notify}=this.state;
        this.setState({notify:'Product has been successfully added'});
        const URL="http://localhost:5000/Products";
        axios.post(URL,this.state.Products).then(response=>{
            console.log(response.data);
            this.showProducts();
        })
    }
    render(){
        let {ProductDetail,Products,notify,notifyUpdate,newProd,notifyAdd,msgUp}=this.state;
        return(
            <>
             <Link to="/" className='btn btn-success'>Logout</Link>
             <table className='table'>
                    <tbody>
                        <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Product Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                        {ProductDetail.map((item,idx)=>{
                            return(
                                <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.pname}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td><button className='btn btn-success' onClick={()=>this.onUpdateH(item.id)}>Update</button></td>
                                <td><button className='btn btn-danger' onClick={()=>this.onDeleteH(item.id)}>Delete</button></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
                <br></br>
                <button className='btn btn-success' onClick={()=>this.onAdd()}>Add Product</button>
                {notifyAdd === true && <div className='container'>
                <h3 className='text-primary'>{notify}</h3>
           <form onSubmit={this.onSubmit}>
            <div className='form-group'>
                        <label>Product ID</label>
                        <input type="text" className='form-control' name="id" value={Products.id} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <label>Product Name</label>
                        <input type="text" className='form-control' name="pname" value={Products.pname} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <input type="text" className='form-control' name="description" value={Products.description} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <label>Price</label>
                        <input type="text" className='form-control' name="price" value={Products.price} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <button type="submit" className='btn btn-info mt-2'>Submit</button>
                    </div>
                </form>
           </div>}
          {notifyUpdate === true && <div className='container'>
              <h3 className='text-primary bg-success'>{msgUp}</h3>
           <form onSubmit={this.onSubmitH}>
            <div className='form-group'>
                        <label>Product ID</label>
                        <input type="text" className='form-control' name="id" value={newProd.id} onChange={this.onChangeHandlerUp}/>
                    </div>
                    <div className='form-group'>
                        <label>Product Name</label>
                        <input type="text" className='form-control' name="pname" value={newProd.pname} onChange={this.onChangeHandlerUp}/>
                    </div>
                    <div className='form-group'>
                        <label>Description</label>
                        <input type="text" className='form-control' name="description" value={newProd.description} onChange={this.onChangeHandlerUp}/>
                    </div>
                    <div className='form-group'>
                        <label>Price</label>
                        <input type="text" className='form-control' name="price" value={newProd.price} onChange={this.onChangeHandlerUp}/>
                    </div>
                    <div className='form-group'>
                        <button type="submit" className='btn btn-info mt-2'>Submit</button>
                    </div>
                </form>
           </div> } 
          
            </>
        )
    }
}
export default Product2;