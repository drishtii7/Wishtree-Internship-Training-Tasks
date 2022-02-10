import React, { Component } from 'react';

class Product extends Component {
    constructor() {
        super();
        this.state = {editIndex :-1,pStatus:false, pShowroom:false,pStore:false, Product: { productname: '', category:'', status: '', ptype: '' }, ProductData: [], PData:[]};
    }
    onChangeHandler = (e) => {
        console.log("change ", e.target);
        let { name, value, checked } = e.target;
        if(value ==='showroom')
        {
            this.setState({pShowroom:true,pStore:false})
        }
        if(value ==='store') {
            this.setState({pShowroom:false,pStore:true})
        }
    
        if (name === 'status') {
            value = checked;
            this.setState({pStatus:checked});
        }
        if(name==='category'){
            console.log(name);
        }
        if(value === 'Electrical'){
             console.log(value);
         }
        let { Product } = this.state;
        this.setState({ Product: { ...Product, [name]: value } });
    }
    onSubmit = (e) => {
        e.preventDefault();
        let { ProductData, Product, editIndex } = this.state;
        if(editIndex >= 0){
            ProductData[editIndex] = Product;
        }
        else{
            let totalProd = ProductData.length;
            Product.id = totalProd + 1;
            ProductData.push(Product);
        }
        this.setState({ProductData, pStatus:false});        
        this.setState({PData:ProductData});
        Product = { productname: '', status: '', ptype: '' };
        this.setState({Product});
        this.setState({pShowroom:false,pStore:false,editIndex:-1});
    }
    onDelete = (DeleteIndex)=>{
        let  { PData } = this.state;
        PData.splice(DeleteIndex,1);
        this.setState({PData});
    }
    onEdit = (item, index)=>{
        console.log("Item ", item);
        let  { Product, pStatus, pShowroom, pStore, editIndex } = this.state;
        editIndex = index;
        Product.id = item.id;
        Product.productname = item.productname;
        Product.category = item.category;
        Product.status = item.status;
        Product.ptype = item.ptype;
        pStatus = item.status;
        if(item.ptype ==='showroom')
        {
            pShowroom = true;
            pStore = false;
        }
        if(item.ptype ==='store')
        {
            pStore = true;
            pShowroom = false;
        }
        this.setState({Product, pStatus, pShowroom, pStore, editIndex});
    }
    render() {
        let { Product, pStatus, PData, pShowroom, pStore } = this.state;
        return (
            <>
           <h1>Category : {Product.category}</h1> 
                <div className='row'>
                    <div className="col-md-4">
                        <form onSubmit={this.onSubmit}>
                            <h5>Product Details</h5>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input type="text" className="form-control" name="productname" value={Product.productname} onChange={this.onChangeHandler} />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label>Category</label>
                                <select name="category" onChange={this.onChangeHandler}>
                                    <option  value='Electronics'>Electronics</option>
                                    <option  value='Electrical'>Electrical</option>
                                </select>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label>Status</label>
                                <input type="checkbox" className="ml-3" name="status" checked={pStatus} onChange={this.onChangeHandler} />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label>Type : </label>
                                <span className="ml-5">Showroom :</span> <input type="radio" name="ptype" checked = {pShowroom} className="ml-3 pr-3" value="showroom" onChange={this.onChangeHandler} />
                                <span className="ml-5">Store</span> : <input type="radio" name="ptype" checked = {pStore} className="ml-3 pr-3" value="store" onChange={this.onChangeHandler} />
                            </div>
                            <br></br>
                            <div className="form-group">
                                <input type="submit" className="btn btn-info" />
                            </div>
                        </form>
                    </div>
                    <div className='col-md-8'>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>Product Code</th>
                                    <th>Product Name</th>
                                    <th>Category</th>
                                    <th>Product Status</th>
                                    <th>Product Type</th>
                                </tr>
                                {PData.map((item,idx)=>{
                                    return(
                                        <tr key={idx}>
                                            <td>{item.id}</td>
                                            <td>{item.productname}</td>
                                            <td>{item.category}</td>
                                            <td><input type="checkbox" checked={item.status} onChange={()=>{}}/> </td>
                                            <td>{item.ptype}</td>
                                            <td><button className="btn btn-success" onClick={()=>this.onEdit(item,idx)}>Edit</button></td>
                                            <td><button className="btn btn-danger" onClick={()=>this.onDelete(idx)}>Delete</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default Product;