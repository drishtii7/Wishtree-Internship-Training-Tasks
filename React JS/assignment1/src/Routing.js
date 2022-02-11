import React from 'react';
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import Client from './Client';
import Client2 from './Client2';
import Vendor from './Vendor';
import Clientapi from './Clientapi';
import UpdateEmployee from './UpdateEmployee';
function Routing(){
    return(
        <>
        <h2>Routing</h2>
        <br></br>
        <BrowserRouter>
        <ul>
            <li><Link className="btn btn-success" to="/dashboard">Dashboard</Link></li>
            <br></br>
            <li><Link className="btn btn-primary" to="/client">Client</Link></li>
            <br></br>
            <li><Link className="btn btn-warning" to="/vendor">Vendor</Link></li>
            <br></br>
            <li><Link className="btn btn-secondary" to="/clientapi">Client API</Link></li>   
        </ul>
       
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/client" element={<Client/>}/>
            <Route path="/client/:cid/:cname" element={<Client2/>}/>
            <Route path="/vendor" element={<Vendor/>}/>
            <Route path="/clientapi" element={<Clientapi/>}/>
            
            </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routing;

