import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react';
import axios from 'axios';
function Login() {
const [userdata,setUser]=useState([]);
const [userId, setUserId] = useState();
const [password, setPassword] = useState();
const [msg,setMsg]=useState('');
const getUdata = ()=>{
    axios.get("http://localhost:4000/UserInfo").then(response=>{
            //console.log(response.data);
            setUser(response.data);
    })
}
useEffect(()=>{
    getUdata();
},[])
const navigate = useNavigate();
    const onSubmit =()=>{
        console.log("submit", userId,password);
        userdata.forEach((item)=>{
        if(userId ===item.username && password===item.password)
        {
            navigate("/dashboard");
        }
        else{
            setMsg("Enter Valid Username or Password");
        }
        })
    }


    return (
        <>
          <div className='container'>
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
            </div>
        </>
    )
}
export default Login;