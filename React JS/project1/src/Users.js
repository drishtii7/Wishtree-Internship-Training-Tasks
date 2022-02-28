import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Login from './Login';
import data1 from './Globaldata';
class Users extends Component{
    constructor(){
        super();
        this.state = {UserDetail:[],notify:'',notifyUpdate:'',notifyAdd:'',Users1:{id:'',userName:'',password:'',adminfound:''},newUser:{},getPid:'',msgUp:''}
    }
    showUsers(){
        axios.get("http://localhost:8181/login").then(response=>{
            console.log("User data",response.data);
             this.setState({UserDetail:response.data});
        })
    }
    componentDidMount(){
        this.showUsers();
    }
    onChangeHandler=(e)=>
    {
        let {name,value}=e.target;
        let {Users1}=this.state;
        this.setState({Users1:{...Users1,[name]:value}});
    }
    onAdd=()=>{
        let {notifyAdd}=this.state;
        this.setState({notifyAdd:true});
    }
    getData(pid){
        axios.get("http://localhost:8181/login/editUser/"+pid).then(response=>{
            console.log("update data",response.data);
             this.setState({newUser:response.data});
        }).catch(err=>{
            console.log(err)
        })
    }
    onUpdateH = (prid)=>{
        let {notifyUpdate}=this.state;
        this.setState({notifyUpdate:true});
        console.log(notifyUpdate);
        this.getData(prid);
        console.log("prid:",prid);
    }
    onChangeHandlerUp =(e)=>{
         
        let {name,value}=e.target;
        this.setState({getPid:value});
        
       this.setState({newUser:{...this.state.newUser,[name]:value}});
       //console.log(value);
       }
        onDeleteH = (pid)=>{
         axios.delete("http://localhost:8181/login/deleteUser/"+pid).then(response=>{
            console.log("Delete",response);
            this.showUsers();
        })
    }
    onSubmitH = (e)=>{
        e.preventDefault();
        let {newUser} = this.state;
       const URL = "http://localhost:8181/login/updateUser/" + newUser._id;
        axios.put(URL,this.state.newUser).then(response=>{
            console.log(response);
                this.setState({msgUp:'Record has been updated'});
                this.showUsers();
         })
         newUser.userName = '';
         newUser.password ='';
         newUser.adminfound ='';
        //  notifyUpdate=false;
        //  this.setState({notifyUpdate});
         this.setState({newUser});
    }
    onSubmit=(e)=>{
        e.preventDefault();
       // let {notify}=this.state;
       let {newUser,Users1} = this.state;
        this.setState({notify:'User has been successfully added'});
        const URL="http://localhost:8181/login/addUser";
        axios.post(URL,this.state.Users1).then(response=>{
            console.log(response.data);
            this.showUsers();
        })
        Users1.userName = '';
        Users1.password ='';
        Users1.adminfound ='';
         this.setState({...Users1});
    }
    render(){
        let {UserDetail,Users1,notify,notifyUpdate,newUser,notifyAdd,msgUp}=this.state;
        return(
            <>
            <h2>Users</h2>
            <table className='table table-striped'>
                    <tbody>
                        <tr>
                        {/* <th>Product ID</th> */}
                        <th>User Name</th>
                        <th>Password</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                        {UserDetail.map((item,idx)=>{
                            return(
                                <tr key={idx}>
                                {/* <td>{item._id}</td> */}
                                <td>{item.userName}</td>
                                <td>{item.password}</td>
                                <td><button className='btn btn-success' onClick={()=>this.onUpdateH(item._id)}>Update</button></td>
                                <td><button className='btn btn-danger' onClick={()=>this.onDeleteH(item._id)}>Delete</button></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
                <br></br>
                <button className='btn btn-success' onClick={()=>this.onAdd()}>Add User</button>
                {notifyAdd === true && <div className='container'>
                <h3 className='text-primary'>{notify}</h3>
           <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>UserName</label>
                        <input type="text" className='form-control' name="userName" value={Users1.userName} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="text" className='form-control' name="password" value={Users1.password} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <label>Admin found</label>
                        <input type="text" className='form-control' name="adminfound" value={Users1.adminfound} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <button type="submit" className='btn btn-info mt-2'>Submit</button>
                    </div>
                </form>
           </div>}
          {notifyUpdate === true && <div className='container'>
              <h3 className='text-primary'>{msgUp}</h3>
           <form onSubmit={this.onSubmitH}>
                    <div className='form-group'>
                        <label>User Name</label>
                        <input type="text" className='form-control' name="userName" value={newUser.userName} onChange={this.onChangeHandlerUp}/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="text" className='form-control' name="password" value={newUser.password} onChange={this.onChangeHandlerUp}/>
                    </div>
                    <div className='form-group'>
                        <label>Admin found</label>
                        <input type="text" className='form-control' name="price" value={newUser.adminfound} onChange={this.onChangeHandlerUp}/>
                    </div>
                    <div className='form-group'>
                        <button type="submit" className='btn btn-info mt-2'>Submit</button>
                    </div>
                </form>
           </div> } 
            </>
        )
    }
}
export default Users;