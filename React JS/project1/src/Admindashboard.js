import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
class Admindashboard extends Component{
    constructor(){
        super();
        this.state = {ProductDetail:[],notify:'',notifyUpdate:'',notifyAdd:'',Products:{id:'',pname:'',description:'',price:''},Mrstock:{mrno:'',supplier:'',pname:'',qty:''},newProd:{},getPid:'',msgUp:''}
    }
    showProducts(){
        axios.get("http://localhost:8181/products").then(response=>{
            console.log("Product data",response.data);
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
    onChangeHandlerStock=(e)=>
    {
        let {name,value}=e.target;
        let {Mrstock}=this.state;
        this.setState({Mrstock:{...Mrstock,[name]:value}});
    }
    onAdd=()=>{
        let {notifyAdd}=this.state;
        this.setState({notifyAdd:true});
    }
    getData(pid){
        axios.get("http://localhost:8181/products/editProduct/"+pid).then(response=>{
            console.log("update data",response.data);
             this.setState({newProd:response.data});
        }).catch(err=>{
            console.log(err)
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
         axios.delete("http://localhost:8181/products/deleteProduct/"+pid).then(response=>{
            console.log("Delete",response);
            this.showProducts();
        })
    }
    onSubmitH = (e)=>{
        e.preventDefault();
        let {newProd,Products,notifyUpdate} = this.state;
       const URL = "http://localhost:8181/products/updateProduct/" + newProd._id;
        axios.put(URL,this.state.newProd).then(response=>{
            console.log(response);
                this.setState({msgUp:'Record has been updated'});
                this.showProducts();
         })
         newProd.pname = '';
         newProd.description ='';
         newProd.price ='';
        //  notifyUpdate=false;
        //  this.setState({notifyUpdate});
         this.setState({newProd});
    }
    onSubmit=(e)=>{
        e.preventDefault();
       // let {notify}=this.state;
       let {newProd,Products} = this.state;
        this.setState({notify:'Product has been successfully added'});
        const URL="http://localhost:8181/products/addProduct";
        axios.post(URL,this.state.Products).then(response=>{
            console.log(response.data);
            this.showProducts();
        })
        Products.pname = '';
         Products.description ='';
         Products.price ='';
         this.setState({...Products});
    }
    onSubmitStock=(e)=>{
        e.preventDefault();
       // let {notify}=this.state;
       let {Mrstock} = this.state;
        // this.setState({notify:'Product has been successfully added'});
        const URL="http://localhost:8181/mrstock/addStock";
        axios.post(URL,this.state.Mrstock).then(response=>{
            console.log(response.data);
        })
    }
    render(){
        let {ProductDetail,Products,notify,notifyUpdate,newProd,notifyAdd,msgUp,Mrstock}=this.state;
        return(
            <>
             <Navbar bg="dark" expand="lg">
                <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link> <Link to="/login" className='btn btn-success'>Log out</Link></Nav.Link>
                </Navbar.Collapse>
                </Container>
                </Navbar>
                <br></br>
             <table className='table table-striped'>
                    <tbody>
                        <tr>
                        {/* <th>Product ID</th> */}
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Product Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                        {ProductDetail.map((item,idx)=>{
                            return(
                                <tr key={idx}>
                                {/* <td>{item._id}</td> */}
                                <td>{item.pname}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td><button className='btn btn-success' onClick={()=>this.onUpdateH(item._id)}>Update</button></td>
                                <td><button className='btn btn-danger' onClick={()=>this.onDeleteH(item._id)}>Delete</button></td>
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
              <h3 className='text-primary'>{msgUp}</h3>
           <form onSubmit={this.onSubmitH}>
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
          <form onSubmit={this.onSubmitStock}>
          <div className='form-group'>
                        <label>Mr no</label>
                        <input type="text" className='form-control' name="mrno" value={Mrstock.mrno} onChange={this.onChangeHandlerStock}/>
                    </div>
                    <div className='form-group'>
                        <label>Supplier</label>
                        <input type="text" className='form-control' name="supplier" value={Mrstock.supplier} onChange={this.onChangeHandlerStock}/>
                    </div>
                    <div className='form-group'>
                        <label>Product Name</label>
                        <input type="text" className='form-control' name="pname" value={Mrstock.pname} onChange={this.onChangeHandlerStock}/>
                    </div>
                    <div className='form-group'>
                        <label>Price</label>
                        <input type="text" className='form-control' name="qty" value={Mrstock.qty} onChange={this.onChangeHandlerStock}/>
                    </div>
                    <div className='form-group'>
                        <button type="submit" className='btn btn-info mt-2'>Submit</button>
                    </div>
          </form>
            </>
        )
    }
}
export default Admindashboard;