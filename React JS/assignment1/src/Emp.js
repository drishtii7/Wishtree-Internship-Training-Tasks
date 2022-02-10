import React, { Component } from 'react';

class Emp extends Component {
    constructor(){
        super();
        this.state = {cStatus:false, Customer: {customercode:'',customername:'',status:'',custtype:''},CustomerData:[], Cdata:[]};
    }
    onChangeHandler = (e) =>{
        let {name, value, checked}=e.target;
        if(name === 'status'){
            value = checked;
            this.setState({cStatus:checked});
        }
        let {Customer} = this.state;
        this.setState({Customer:{...Customer,[name]:value}});
    }
    onSubmitH = (e)=>{
        e.preventDefault();
        console.log(this.state.Customer)
        let { CustomerData, Customer} = this.state;
        let totalCust = CustomerData.length;
        Customer.id = totalCust + 1;
        CustomerData.push(Customer);
        this.setState({CustomerData,cStatus:false});
        this.setState({CData:CustomerData});
        Customer = {customercode:'',customername:'',status:'',custtype:''};
        this.setState({Customer});

    }
    onDelete = (rowIndex)=>{
        let {CustomerData}=this.state;
        CustomerData.splice(rowIndex,1);
        this.setState({CustomerData});
    }
    render(){
        let {Customer, CustomerData, cStatus,CData} = this.state;
    return (
        <>
        <div className='row'>
            <div className='col-md-4'>
            <h5>Customer h</h5>
        <form onSubmit={this.onSubmitH}>
            <div className='form-group'>
                <label>Code</label>
                <input type="text" className='form-control' name="customercode" value={Customer.customercode} onChange={this.onChangeHandler}/>
            </div>
            <div className='form-group'>
                <label>Name</label>
                <input type="text" className='form-control' name="customername" value={Customer.customername} onChange={this.onChangeHandler}/>
            </div>
            <div className='form-group'>
                <label>Status</label>
                <input type="checkbox" className='ml-3' name="status" checked={cStatus} onChange={this.onChangeHandler}/>
            </div>
            <br></br>
            <div className='form-group'>
                <label>Customer Type</label>
                Local : <input type="radio" name="custtype" className='ml-3 pr-3' value="local" onChange={this.onChangeHandler} />
                Central : <input type="radio" name="custtype" className='ml-3 pr-3' value="central" onChange={this.onChangeHandler}/>
            </div>
            <br></br>
            <div className='form-group'>
                <input type="submit" className="btn btn-success"/>
            </div>
        </form>
            </div>
            <div className='col-md-8'>
                <table className='table table-bordered'>
                    <tbody>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Type</th>
                            <th>Action</th>
                            <th>ID</th>
                        </tr>
                        {CustomerData.map((item,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{item.customercode}</td>
                                    <td>{item.customername}</td>
                                    <td><input type="checkbox" checked={item.status} onChange={()=>{}}/></td>
                                    <td>{item.custtype}</td>
                                   
                                    <button  style={{'backgroundColor':'red'}} onClick={()=>this.onDelete(idx)}>Delete</button>
                                    <td>{item.id}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )}
}

export default Emp;