import React, {Component} from 'react';
import Formdetails from './Formdetails';
class Form1 extends Component{
    constructor()
    {
        super();
        this.state = {userName:'',password:'',notify:false};
    }
    onInputChange=(event)=>{
        let {name,value}=event.target;
        let {userName, password}= this.state;
        if(name=='userName')
        {
            this.setState({userName:value});
            console.log(userName);
        }
        if(name=='password')
        {
            this.setState({password:value});
            console.log(password);
        }
    }
    onClickHandler=()=>{
        let {notify} = this.state;
        this.setState({notify:true});
    }
    render()
    {
        let {userName, password,notify}= this.state;
        return(
            <>
            <div className='form-group'>
                <label>Username : </label>
                <input type="text" className='form-control' name="userName" value={userName} onChange={this.onInputChange}></input>
            </div>
            <div className='form-group'>
                <label>Password : </label>
                <input type="password" className='form-control' name="password" value={password} onChange={this.onInputChange}></input>
            </div>
            <br></br>
            <div className='form-group'>
                <button className="btn btn-primary" type="submit" onClick={this.onClickHandler}>Submit</button>
            </div>
            <div>
            {notify?<Formdetails username={userName} passw={password}/>:null}
            </div>
            </>
        )
    }
}

export default Form1;