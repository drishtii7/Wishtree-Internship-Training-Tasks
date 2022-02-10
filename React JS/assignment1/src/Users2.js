import React, {Component} from 'react';
import axios from 'axios';
class Users2 extends Component{
    constructor(){
        super();
        this.state={Employees:[]};
    }
    componentDidMount(){
        axios.get("http://localhost:4000/user").then(response=>{
        //console.log(response.data);
        this.setState({Employees:response.data});
    })
        
    }
    render(){
        let {Employees} = this.state;
        console.log(Employees);
        return(
            <>
            <h1>Employee</h1>
           <table className='table table-striped'>
               <tbody>
                   <tr>
                   <th>ID</th>
                   <th>Username</th>
                   <th>Password</th>
                   <th>Status</th>
                   </tr>
                   {Employees.map((item,idx)=>{
                       return(
                           <tr key={idx}>
                               <td>{item.id}</td>
                               <td>{item.username}</td>
                               <td>{item.password}</td>
                               <td>{item.status}</td>
                           </tr>
                       )
                   })}
                   <tr>
                       <td></td>
                   </tr>
               </tbody>
           </table>
            </>
        )
    }
}
export default Users2;