import React, { Component } from 'react';
import axios from 'axios';
class Temp1 extends Component {
  constructor()
    {
        super();
        this.state = {Employee:[],notify:'',getEid:''}
    }
    componentDidMount(){
      axios.get("http://localhost:4000/Employee").then(response=>{
        // console.log(response.data);
         this.setState({Employee:response.data});
    })
    }
    onChangeHandler =(e)=>{
      let {value}=e.target;
      this.setState({getEid:value});
     }

render(){
  let {Employee, notify}=this.state;
  return(
      <>
      <h3>Update Employee</h3>
      <div>
      <h5>Choose Employee Name : </h5>
          <select onChange={this.onChangeHandler}>
              <option value='0'>All</option>
          {Employee.map((item,idx)=>{
              return(
                  <option key={idx} value={item.id}>{item.ename}</option>
              )
          })}
           </select>
      </div>
      </>
  )
}
}
export default Temp1;