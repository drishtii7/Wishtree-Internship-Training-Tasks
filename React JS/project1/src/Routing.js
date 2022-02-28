import React from 'react';
import {BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import Userdashboard from './Userdashboard';
import Admindashboard from './Admindashboard';
import Cart from './Cart';
import Cart1 from './Cart1';
import Dashboard1 from './Dashboard1';
import Userdash from './Userdash';
import Ucart from './Ucart';
import Order from './Order';
import Users from './Users';

function Routing(){
    return(
        <>
        <BrowserRouter>
        <ul>
        </ul>
       
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/login/:idapi" element={<Dashboard1/>}/>
            <Route path="/userdashboard" element={<Userdashboard/>}/>
            <Route path="/userdash" element={<Userdash/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/admin" element={<Admindashboard/>}/>
            <Route path="/cart1" element={<Cart1/>}/>
            <Route path="/ucart" element={<Ucart/>}/>
            <Route path="/orders" element={<Order/>}/>
            <Route path="/users" element={<Users/>}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routing;

