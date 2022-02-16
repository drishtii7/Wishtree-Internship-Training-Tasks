import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
function Clientapi2(){
    const [clientArr, setClientData]=useState([]);
    const {idapi} = useParams();
    const getCData = ()=>{
        axios.get("http://localhost:4000/Client").then(response=>{
            console.log(response.data);
            setClientData(response.data);
    })
}
useEffect(()=>{
    getCData();
},[])
    return(
        <>
        <div className="container container-fluid alert alert-success">
        <h5 className='text-primary'>Selected Client ID : {idapi}</h5>
        <table className='table table-dark'>
            <tbody>
                <tr>
                <th>Client Name</th>
                <th>Phone</th>
                <th>Area</th>
                </tr>
                
                    {clientArr.map((item)=>{
                        return(
                            parseInt(item.id) === parseInt(idapi) &&
                            (
                                <tr>
                                    <td>{item.clientname}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.area}</td>
                                </tr>
                            )
                        )
                    })}
                
            </tbody>
        </table>
        </div>
        </>
    )
}
export default Clientapi2;