import React, {useState} from 'react';
import {Link} from 'react-router-dom';
function Client(){
    const CData = [{clientid:1,clientname:"Shloka"},
    {clientid:2,clientname:"Parth"},
    {clientid:3,clientname:"Riya"},
    {clientid:4,clientname:"Raj"},
    {clientid:5,clientname:"Shreya"},
    {clientid:6,clientname:"Drishti"}]
    const [ClientData, setClientData]=useState(CData);
    return(
        <>
        <h4 className='text-primary text-center'>Client List</h4>
        <table className='table table-light'>
                    <tbody>
                        <tr>
                        <th>Client ID</th>
                        <th>Client Name</th>
                        <th>Choose option</th>
                        </tr>
                        {ClientData.map((item,idx)=>{
                            return(
                                <tr key={idx}>
                                <td>{item.clientid}</td>
                                <td>{item.clientname}</td>
                                <td><Link className="btn btn-primary" to={'/client/'+ item.clientid + "/" + item.clientname}>Select</Link></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
        </>
    )
}
export default Client;