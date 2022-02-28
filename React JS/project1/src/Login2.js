import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
class Login2 extends Component{
    constructor(){
        super();
        this.state={userdata:[],username:'',password:''};
    }
    getUdata(){
        axios.get("http://localhost:8181/login").then(response=>{
            console.log("User data",response.data);
             this.setState({userdata:response.data});
        })
    }
    componentDidMount(){
        this.getUdata();
    }
    onChangeHandler=(event)=>{
        let {name,value}=event.target;
        let {username, password}= this.state;
        if(name=='username')
        {
            this.setState({username:value});
            console.log(username);
        }
        if(name=='password')
        {
            this.setState({password:value});
            console.log(password);
        }
    }
    onSubmit(){
        // console.log("submit", userId,password);
        let {username,password}=this.state;
        userdata.forEach((item)=>{
        if(username ===item.userName && password===item.password && item.adminfound === false)
        {
            console.log("user login");
            // navigate("/userdashboard/"+item.userName);
           navigate("/userdashboard");
        }
       else  if (userId === "admin1" && password=== "adminpwd" && item.adminfound === true){
            console.log("admin dash");
            // navigate("/admin");
        }
        else{
            setMsg("Enter Valid Username or Password");
        }
        })
    }
    render(){
        let {username,password}=this.state;
        return(
            <>
                 <div className='form'>
                 <form onSubmit={this.onSubmit}>
                <h4 className='text-center text-success'>Login Form</h4>
                {/* <div className="container container-fluid alert alert-success">{msg}</div> */}
                <div className="form-group">
                    <label>User</label>
                    <input type="text" className="form-control" name="username" value={username} onChange={this.onChangeHandler} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={this.onChangeHandler}/>
                </div>
                <br></br>
                <div className="form-group">
                    <button type="submit" className='btn btn-success'>Submit</button>
                </div>
            </form>
                 </div>
            </>
        )
    }
}
export default Login2;