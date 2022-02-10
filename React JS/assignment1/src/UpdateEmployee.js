import React, {Component} from 'react';
import axios from 'axios';
class UpdateEmployee extends Component{
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
    console.log(value);
    }
    onSelect=(e)=>{
        this.getData(e.target.value);
    }
     onSubmit = (e)=>{
        e.preventDefault();
        const {newEmp} = this.state;
       const URL = "http://localhost:4000/Employee/" + newEmp.id;
        axios.put(URL,this.state.newEmp).then(response=>{
            console.log(response);
             if(response.statusText === "OK")
             {
                this.setState({notify:'Record has been updated'});
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
            </>
        )
    }
}
export default UpdateEmployee;