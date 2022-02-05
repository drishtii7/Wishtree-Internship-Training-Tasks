import React, {Component} from 'react';
class Employee extends Component{
    constructor()
    {
        super();
        this.state = {Empdata :[
            {empid:101,empname:'Riya',salary:40000},
            {empid:102,empname:'Parth',salary:35000},
            {empid:103,empname:'Shreya',salary:50000}
        ]}
    }
    render(){
        return(
            <>
            <h3>Employee Table</h3>
            <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                    {this.state.Empdata.map((value,idx)=>{
                        return(
                               <tr>
                                   <td>{value.empid}</td>
                                   <td>{value.empname}</td>
                                   <td>{value.salary}</td>
                               </tr>

                           )
                    })}
                </tbody>
            </table>
            </>
        )
    }
}
export default Employee;
