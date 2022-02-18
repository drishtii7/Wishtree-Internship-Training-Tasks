import React from 'react';
import {Link} from 'react-router-dom';
function Dashboard(){
    return(
        <>
        <Link to="/" className='btn btn-success'>Logout</Link>
        <br></br>
        
        <h5 className="container container-fluid alert alert-success">This is User dashboard.</h5>
        <h5 className="container container-fluid alert alert-success">Login Successfull.</h5>
        </>
    )
}
export default Dashboard;