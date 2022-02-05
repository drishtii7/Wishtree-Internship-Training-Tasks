import React from 'react';
function Userdetails(props){
    let {userRole} = props;
    return(
        <>
        <h4>UserRole : {userRole}</h4>
        </>
    )
}
export default Userdetails;