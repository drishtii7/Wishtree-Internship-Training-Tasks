import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom';
class Signup extends Component{
    constructor()
    {
        super();
        this.state = {UserDetail:{userName:'',password:''},notify:'',msg:''};
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
       let {notify,UserDetail}=this.state;
       if(UserDetail.userName == '' || UserDetail.password == ''){
        this.setState({msg:'Username or password cannot be empty !'});
       }
       else{
       notify=true;
        this.setState({notify});
        this.setState({msg:''});
        console.log("notify",notify);
        const URL="http://localhost:8181/login/addUser";
        axios.post(URL,this.state.UserDetail).then(response=>{
            console.log(response.data);
        })
    }
    }
    render(){
        let {UserDetail,notify,msg}=this.state;
        return(
            <>
            <div className='app'>
            <Link to="/" className='btn btn-success'>Home</Link>
             <div className='login-form'>
             <div className='form'>
           <form onSubmit={this.onSubmit}>
           <h6 className='text-danger'>{msg}</h6>
           <h4 className='text-center text-success'>Registration Form</h4>
                    <div className='form-group'>
                        <label>User Name</label>
                        <input type="text" className='form-control' name="userName" value={UserDetail.userName} onChange={this.onChangeHandler}/>
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" className='form-control' name="password" value={UserDetail.password} onChange={this.onChangeHandler}/>
                    </div>
                    <br></br>
                    <div className='form-group'>
                        <button type="submit" className='btn btn-info mt-2'>Submit</button>
                    </div>
                </form>
                <br></br>
               Already have an account?  <Link className="btn btn-success" to="/login">Login</Link>
               <br></br>
               {notify==true?<div className='container conatiner-fluid alert alert-primary'> <span>Account created successfully.</span></div>:null}
           </div>
             </div>
             </div>
            
            </>
        )
    }
}
export default Signup;