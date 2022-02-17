import React, {Component} from 'react';
import axios from 'axios';
import Employee from './Employee';
class Department extends Component{
    constructor(){
        super();
        this.state = {Departments:[], Employee:[],Designation:[], getDId:'',selectedDep:0};
    }
    componentDidMount(){
        axios.get("http://localhost:4000/Employees").then(response=>{
            this.setState({Employee: response.data});
            console.log(response.data);
    })
    axios.get("http://localhost:4000/Department").then(response=>{
            this.setState({Departments: response.data});
    })
    axios.get("http://localhost:4000/Designation").then(response=>{
            this.setState({Designation: response.data});
    })
    }
    onChangeHandler = (e) => {
        let {value} = e.target;
        this.setState({selectedDep:value});
        this.setState({getDId:value});
    }
    render(){
        let {Departments, Employee, getDId,selectedDep,Designation} = this.state;
        return(
            <>
            <div className='row'>
                <div className='col-3 '>
                <h5>Choose Department : </h5>
                <select onChange={this.onChangeHandler}>
                    <option value='0'>All</option>
                {Departments.map((item,idx)=>{
                    return(
                        <option key={idx} value={item.id}>{item.depname}</option>
                    )
                })}
                 </select>
                </div>
                <br></br>
                <br></br>
                <div className='row p-4'>
                    <h4>Employee Details</h4>
                <table className='table table-dark border-light'>
                    <thead className='thead-dark'>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Department Name</th>
                        <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Employee.map((item,idx)=>{
                            return(
                                <>
                                {
                                    (selectedDep==0)?(
                                        <tr key={idx}>
                                        <td>{item.id}</td>
                                        <td>{item.empname}</td>
                                        <td>{item.salary}</td>
                                        <td>{Departments.map((val)=>{
                                                return(
                                                    parseInt(item.departmentID) === parseInt(val.id) &&
                                                    (
                                                        <tr>
                                                            <td>{val.depname}</td>
                                                        </tr>
                                                    )
                                                )
                                            })}</td>
                                            <td>{Designation.map((val2)=>{
                                                return(
                                                    parseInt(item.departmentID) === parseInt(val2.id) &&
                                                    (
                                                        <tr>
                                                            <td>{val2.desigName}</td>
                                                        </tr>
                                                    )
                                                )
                                            })}

                                            </td>
                                    </tr>
                                    ):
                                    parseInt(item.departmentID) === parseInt(getDId) &&
                                    (
                                        <tr key={idx}>
                                            <td>{item.id}</td>
                                            <td>{item.empname}</td>
                                            <td>{item.salary}</td>
                                            <td>{Departments.map((val,idx1)=>{
                                                return(
                                                    parseInt(item.departmentID) === parseInt(val.id) &&
                                                    (
                                                        <tr key={idx1}>
                                                            <td>{val.depname}</td>
                                                        </tr>
                                                    )
                                                )
                                            })}</td>
                                            <td>{Designation.map((val2,idx2)=>{
                                                return(
                                                    parseInt(item.departmentID) === parseInt(val2.id) &&
                                                    (
                                                        <tr key={idx2}>
                                                            <td>{val2.desigName}</td>
                                                        </tr>
                                                    )
                                                )
                                            })}</td>
                                        </tr>
                                    )
                                }
                                </>
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
export default Department;