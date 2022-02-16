import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
function Login2() {
    const [userdata,setUser]=useState([]);
const [userId, setUserId] = useState();
const [password, setPassword] = useState();
const [msg,setMsg]=useState('');
    return(
        <>
        <div className='container'>
            <form>
                <h4 className='text-center text-success'>Login Form</h4>
                <div className="container container-fluid alert alert-success"></div>
                <div className="form-group">
                    <label>User</label>
                    <input type="text" className="form-control"  />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"/>
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
export default Login2;