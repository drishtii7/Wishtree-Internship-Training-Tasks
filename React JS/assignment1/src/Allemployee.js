import React, {Component} from 'react';
import axios from 'axios';
import Employee from './Employee';
class Allemployee extends Component{
    constructor()
    {
        super();
        this.state = {Employees:[],notify:'',getEid:'',newEmp:{}}
    }
    showEmployees(){
        axios.get("http://localhost:4000/Employee").then(response=>{
            console.log(response.data);
             this.setState({Employees:response.data});
        })
    }
    getData(eid){
        axios.get("http://localhost:4000/Employee/"+eid).then(response=>{
            console.log(response.data);
             this.setState({newEmp:response.data});
        })
    }
    componentDidMount(){
        this.showEmployees();
    }
     onChangeHandler =(e)=>{
         
     let {name,value}=e.target;
     this.setState({getEid:value});
     
    this.setState({newEmp:{...this.state.newEmp,[name]:value}});
    //console.log(value);
    }
    onUpdateH = (epid)=>{
        this.getData(epid);
        console.log("epid:",epid);
    }
    onDeleteH = (eid)=>{
        axios.delete("http://localhost:4000/Employee/"+eid).then(response=>{
            console.log("Delete",response);
            this.showEmployees();
        })
    }
    onSelect=(e)=>{
        this.getData(e.target.value);
    }
     onSubmit = (e)=>{
        e.preventDefault();
        const {newEmp} = this.state;
       const URL = "http://localhost:4000/Employee/" + newEmp.id;
        axios.put(URL,this.state.newEmp).then(response=>{
            //console.log(response);
             if(response.statusText === "OK")
             {
                this.setState({notify:'Record has been updated'});
                this.showEmployees();
             }
         })
    }
    render(){
        let {Employees, newEmp,notify}=this.state;
        return(
            <>
            <div className='container-fluid alert alert-primary'>Status : {notify}</div>
            <h3>Update Employee</h3>
            <div>
            <h5>Choose Employee Name : </h5>
                <select onChange={this.onSelect}>
                {Employees.map((item,idx)=>{
                    return(
                        <option key={idx} value={item.id}>{item.ename}</option>
                    )
                })}
                 </select>
            </div>
            <div>
            <form onSubmit={this.onSubmit} method="POST">
                    <div className='form-group'>
                        <label>Employee ID</label>
                        <input type="text" className='form-control' name="id" value={newEmp.id} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <label>Employee Name</label>
                        <input type="text" className='form-control' name="ename" value={newEmp.ename} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <label>Address</label>
                        <input type="text" className='form-control' name="address" value={newEmp.address} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <label>City</label>
                        <input type="text" className='form-control' name="city" value={newEmp.city} onChange={this.onChangeHandler}/>
                    </div>
                    <br></br>
                    <div className='form-group'>
                        <button type="submit" className='btn btn-info'>Submit</button>
                    </div>
                </form>
            </div>
            <div>
                <table className='table'>
                    <tbody>
                        <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Employee Address</th>
                        <th>Employee City</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                        {Employees.map((item,idx)=>{
                            return(
                                <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.ename}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td><button className='btn btn-success' onClick={()=>this.onUpdateH(item.id)}>Update</button></td>
                                <td><button className='btn btn-danger' onClick={()=>this.onDeleteH(item.id)}>Delete</button></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}
export default Allemployee;