import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
function Cart(){
    const [productArr, setProductData]=useState([]);
    const [newpArr, setPData]=useState([]);
    const [total,setTotal]=useState();
    const [showtotal,setshowTotal]=useState();
    const [tax,setTax]=useState();
    const [shipcharge,setCharge]=useState();
    const [finalamt,setAmt]=useState();
    // const {idapi} = useParams();
    const getPData = ()=>{
        axios.get("http://localhost:8181/productnew").then(response=>{
            console.log(response.data);
            setProductData(response.data);
    })
}
const onClickH=()=>{
    let temptax = 100;
    setTax({temptax});
    let tempcharge = 125;
    setCharge(125);
    console.log(shipcharge);
    let show=1;
    setshowTotal({show});
    console.log("showing",showtotal,show);
    let ttotal=0;
   productArr.forEach((item)=>{
        console.log(item.price);
        ttotal=ttotal + item.price;
        console.log("total",ttotal);
        setTotal({ttotal});
    })
    let amt = ttotal + temptax + tempcharge;
    console.log(amt);
    setAmt({amt});
}

//     const addData =()=>{
//     //     productArr.forEach((item)=>{
//     //         if(item._id === idapi)
//     //         {
//     //             console.log("user login");
               
//     //         }
//     // }
// }
useEffect(()=>{
    getPData();
},[])
    return(
        <>
        <table className='table table-dark'>
            <tbody>
                <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                </tr>
                
                    {productArr.map((item,idx)=>{
                        return(
                           
                                <tr key={idx}>
                                    <td>{item.pname}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                </tr>
                        )
                    })}
                
            </tbody>
        </table>
        <button onClick={onClickH}>View total</button>
        {showtotal===true ? <div className='container container-fluid alert alert-primary'>
            <div>Order amount : {total}</div>
            <div>Sales tax : {tax}</div>
            <div>Shipping charges: {shipcharge}</div>
            <div>Grand total: Rs {finalamt}</div>
            </div>
            :null}
        <Link className="btn btn-primary" to='/order'>Place Order</Link>
        </>
    )
}
export default Cart;