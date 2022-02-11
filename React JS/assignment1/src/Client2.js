import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
function Client2(){
    const {cid,cname} = useParams();
    return(
        <>
        <div className="container container-fluid alert alert-success">
        <h5 className='text-primary'>Selected Client ID : {cid}</h5>
        <h5 className='text-primary'>Selected Client Name : {cname}</h5>
        </div>
        </>
    )
}
export default Client2;