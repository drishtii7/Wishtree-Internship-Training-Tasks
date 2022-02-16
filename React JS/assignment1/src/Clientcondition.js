import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Clientcondition extends Component{
    constructor(){
        super();
        this.state = {Clients:[],notify:false,getId:'',getName:'',getPhone:'',getArea:''};
    }
    componentDidMount(){
        axios.get("http://localhost:5000/Client").then(response=>{
            this.setState({Clients: response.data});
    })
}
    onClickHandler = (values,indexR)=>{
    let {Clients}= this.state;
   let i;
   let num = Clients.length;
   let temp=Clients[indexR];
   Clients[num]={};
   for(i=Clients.length;i>=indexR+1;i--){
       if(i==num){
        Clients[num]=Clients[i-1];
        console.log(Clients[i]);
       }
       else{
        Clients[i]=Clients[i-1];
        console.log(Clients[i]);
       }
      
   }
  // Clients[0]=temp;
   
    this.setState({Clients});
    this.setState({notify:true});
    this.setState({getId:values.id})
    this.setState({getName:values.clientname})
    this.setState({getPhone:values.phone})
    this.setState({getArea:values.area})
    //this.setState({ Clients: [...Clients] });
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
                                <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.clientname}</td>
                                <td><button onClick={()=>this.onClickHandler(item,idx)}>Select</button></td>
                            </tr>
                            )
                        })}
                        {notify === true && (
                           
                           <tr>
                               <td>{getPhone}</td>
                               <td>{getArea}</td>
                           </tr>
                       
                   )
                       }
                    </tbody>
                </table>
            </>
        )
    }
}
export default Clientcondition;