import React from 'react';
import {Link} from 'react-router-dom';
function Dashboard2(){
    return(
        <>
        <Link to="/" className='btn btn-success'>Logout</Link>
        <br></br>
        
        <h5 className="container container-fluid alert alert-success">This is Admin dashboard.</h5>
        </>
    )
}
export default Dashboard2;