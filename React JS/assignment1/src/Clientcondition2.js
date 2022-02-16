import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Clientcondition2 extends Component{
    constructor(){
        super();
        this.state = {Clients:[],notify:false,getId:'',getName:'',getPhone:'',getArea:''};
    }
    componentDidMount(){
        axios.get("http://localhost:5000/Client").then(response=>{
            this.setState({Clients: response.data});
    })
}
    onClickHandler = (values)=>{
    this.setState({notify:true});
    this.setState({getId:values.id})
    this.setState({getName:values.clientname})
    this.setState({getPhone:values.phone})
    this.setState({getArea:values.area})
    }
    render(){
        let {Clients,notify,getId,getName,getPhone,getArea}= this.state;
        return(
            <>
            <h4 className='text-primary text-center'>Client List</h4>
            <h5>ID :{getId}</h5>
            <table className='table table-light'>
                    <tbody>
                        <tr>
                        <th>Client ID</th>
                        <th>Client Name</th>
                        
                        </tr>
                        {Clients.map((item,idx)=>{
                            return(
                                <>
                                <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.clientname}</td>
                                <td><button onClick={()=>this.onClickHandler(item,idx)}>Select</button></td>
                            </tr>
                            {getId===item.id && (
                                <tr>
                                <td>{getId}</td>
                               <td>{getName}</td>
                               <td>{getPhone}</td>
                               <td>{getArea}</td>
                                </tr>
                            )}
                            </>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}
export default Clientcondition2;