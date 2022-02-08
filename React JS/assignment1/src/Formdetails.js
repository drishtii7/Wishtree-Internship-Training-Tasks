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
                username.length>0 && passw.length>6 ? <div className='bg-success text-white'>Successfull Login</div> : username.length<0 ? <div className='bg-danger text-white'>'Please Enter Username'</div> : <div className='bg-danger text-white'>'Please Enter 6 digit password'</div>
            }
            </>
        )
    }
}
export default Formdetails;