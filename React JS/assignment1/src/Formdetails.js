import React, {Component} from 'react';
class Formdetails extends Component{
    constructor(props)
    {
        super();
    }

    render()
    {
       let {username, passw} = this.props;
        return(
            <>
            {
                username.length>0 && passw.length > 6 ? <div className='bg-success text-white'>Successful</div> : <div className='bg-success text-white'>Incomplete</div>
            }
            <h3>{username.length? username: 'Please enter username'}</h3>
            <h3>{passw.length > 6? passw: 'Please enter 6 digit password'}</h3> 
            </>
        )
    }
}
export default Formdetails;