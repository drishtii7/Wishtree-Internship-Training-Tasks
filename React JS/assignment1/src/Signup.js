import React, {Component} from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom';
class Signup extends Component{
    constructor()
    {
        super();
        this.state = {UserDetail:{id:'',username:'',password:''},notify:false};
    }
    onChangeHandler=(e)=>
    {
        let {name,value}=e.target;
        let {UserDetail}=this.state;
        UserDetail.adminfound = false;
        this.setState({UserDetail:{...UserDetail,[name]:value}});
    }
    onSubmit=(e)=>{
        e.preventDefault();
       // let {notify}=this.state;
        this.setState({notify:true});
        const URL="http://localhost:4000/UserDetail";
        axios.post(URL,this.state.UserDetail).then(response=>{
            console.log(response.data);
        })
    }
    render(){
        let {UserDetail,notify}=this.state;
        return(
            <>
           <div className='container'>
           <form onSubmit={this.onSubmit}>
            <div className='form-group'>
                        <label>Employee ID</label>
                        <input type="text" className='form-control' name="id" value={UserDetail.id} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <label>User Name</label>
                        <input type="text" className='form-control' name="username" value={UserDetail.username} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" className='form-control' name="password" value={UserDetail.password} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <button type="submit" className='btn btn-info'>Submit</button>
                    </div>
                </form>
               Already have an account?  <Link className="btn btn-success" to="/">Login</Link>
           </div>
            </>
        )
    }
}
export default Signup;