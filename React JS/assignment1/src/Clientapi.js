import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Clientapi extends Component{
    constructor(){
        super();
        this.state = {Clients:[]};
    }
    componentDidMount(){
        axios.get("http://localhost:4000/Client").then(response=>{
            this.setState({Clients: response.data});
    })
}
    render(){
        let {Clients}= this.state;
        return(
            <>
            <h4 className='text-primary text-center'>Client List</h4>
            <table className='table table-light'>
                    <tbody>
                        <tr>
                        <th>Client ID</th>
                        <th>Client Name</th>
                        <th>Phone</th>
                        <th>Area</th>
                        </tr>
                        {Clients.map((item,idx)=>{
                            return(
                                <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.clientname}</td>
                                <td>{item.phone}</td>
                                <td>{item.area}</td>
                                <td><Link className="btn btn-primary" to={'/clientapi/'+ item.id}>Select</Link></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}
export default Clientapi;