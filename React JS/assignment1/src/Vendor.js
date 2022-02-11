import React, {useState} from 'react';
function Vendor(){
    const VData = [{venid:1,vname:"Yash",contact:9909943356,address:"Ahmedabad"},
    {venid:2,vname:"Sakshi",contact:9909946756,address:"Pune"},
    {venid:3,vname:"Sahil",contact:9909943896,address:"Gandhinagar"},
    {venid:4,vname:"Rujuta",contact:9909943365,address:"Surat"},
    {venid:5,vname:"Kevin",contact:9909943397,address:"Ahmedabad"},
    {venid:6,vname:"Parth",contact:9909943328,address:"Pune"},
    {venid:7,vname:"Smruti",contact:9909943305,address:"Ahmedabad"}]
    const [VendorData, setVendorData]=useState(VData);
    return(
        <>
        <h4 className="text-center">Vendor List</h4>
        <br></br>
        <table className='table table-striped'>
                    <tbody>
                        <tr>
                        <th>Vendor ID</th>
                        <th>Vendor Name</th>
                        <th>Contact No</th>
                        <th>City</th>
                        </tr>
                        {VendorData.map((item,idx)=>{
                            return(
                                <tr key={idx}>
                                <td>{item.venid}</td>
                                <td>{item.vname}</td>
                                <td>{item.contact}</td>
                                <td>{item.address}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
        </>
    )
}
export default Vendor;