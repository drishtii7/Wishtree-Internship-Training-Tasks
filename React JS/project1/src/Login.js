import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import data1 from './Globaldata';
function Login() {
const [userdata,setUser]=useState([]);
const [userId, setUserId] = useState();
const [password, setPassword] = useState();
const [uData,setUData]=useState();
const [msg,setMsg]=useState('');
const [notifylogin,setNotify]=useState();
const getUdata = ()=>{
    axios.get("http://localhost:8181/login").then(response=>{
            console.log(response.data);
            setUser(response.data);
            // response.data.forEach((item)=>{
            //     console.log(item.userName);
            // })
    })
}
useEffect(()=>{
    getUdata();
},[])
const navigate = useNavigate();
    const onSubmit =()=>{
        console.log("submit", userId,password);
        let uData = {uname:'',prname:'',descp:'',prductprice:''};
        data1.obj1=userId;
        // console.log("USERNAME",data1.obj1);
        userdata.forEach((item)=>{
        if(userId ===item.userName && password===item.password && item.adminfound === false)
        {
            console.log("user login");
           navigate("/userdash");
        }
       else  if (userId === item.userName && password=== item.password && item.adminfound === true){
            console.log("admin dash");
            navigate("/admin");
        }
        else{
            setMsg("Enter Valid Username or Password");
        }
        })
    }


    return (
        <>
         <div className='app'>
         <Link to="/" className='btn btn-success'>Home</Link>
             <div className='login-form'>
                 <div className='form'>
                 <form onSubmit={onSubmit}>
                <h4 className='text-center text-success'>Login Form</h4>
                <div className="container container-fluid alert alert-success">{msg}</div>
                <div className="form-group">
                    <label>User</label>
                    <input type="text" className="form-control" onChange={(e)=>setUserId(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <br></br>
                <div className="form-group">
                    <button type="submit" className='btn btn-success'>Submit</button>
                </div>
            </form>
            <br></br>
            <Link to="/signup">Register here</Link>
                 </div>
             </div>
         </div>
        </>
    )
}
export default Login;