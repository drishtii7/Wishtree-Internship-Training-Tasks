import React from 'react';
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import Client from './Client';
import Client2 from './Client2';
import Vendor from './Vendor';
import Clientapi from './Clientapi';
import Clientapi2 from './Clientapi2';
import Login from './Login';
import Login3 from './Login3';
import Signup from './Signup';
import Dashboard2 from './Dashboard2';
function Routing(){
    return(
        <>
        <BrowserRouter>
        <ul>
            {/* <li><Link className="btn btn-success" to="/dashboard">Dashboard</Link></li> */}
            {/* <br></br> */}
            {/* <li><Link className="btn btn-primary" to="/client">Client</Link></li> */}
            {/* <br></br> */}
            {/* <li><Link className="btn btn-warning" to="/vendor">Vendor</Link></li> */}
            {/* <br></br> */}
            {/* <li><Link className="btn btn-secondary" to="/clientapi">Client API</Link></li>    */}
        </ul>
       
        <Routes>
            <Route path="/" element={<Login3/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/dashboard2" element={<Dashboard2/>}/>
            <Route path="/signup" element={<Signup/>}/>
            {/* <Route path="/client" element={<Client/>}/> */}
            {/* <Route path="/client/:cid/:cname" element={<Client2/>}/> */}
          {/* <Route path="/vendor" element={<Vendor/>}/> */}
            {/* <Route path="/clientapi" element={<Clientapi/>}/> */}
            {/* <Route path="/clientapi/:idapi" element={<Clientapi2/>}/> */}
            </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routing;

