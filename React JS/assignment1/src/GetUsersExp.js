import React, {Component} from 'react';
import axios from 'axios';
import Employee from './Employee';
class GetUsersExp extends Component{
    constructor(){
        super();
        this.state = {Users1:[]};
    }
    componentDidMount(){
        
        axios.get("http://localhost:8081/listUsers").then(response=>{
            console.log(response.data.user1);
            this.setState({Users1: response.data.user1});
    })
}
render(){
    return(
        <>
         <table className="table table-striped">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Password</th>
                    </tr>
                    <tr>
                        <td>{this.state.Users1.id}</td>
                        <td>{this.state.Users1.name}</td>
                        <td>{this.state.Users1.password}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
}
export default GetUsersExp;