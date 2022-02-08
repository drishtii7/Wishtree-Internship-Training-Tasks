import React, { useState } from 'react';
  
function Form2() {
    const [ecode,setCode] = useState();
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [cssapply, setApply] = useState('');
    const [empData, setEmpData] = useState([]);

    const getStyle = (cssapply) =>{
        return cssapply==='Style' ? {'backgroundColor':'blue','color':'white'} : {'backgroundColor':'yellow'}
    }
    const changeCode = (event) => {
        setCode(event.target.value);
      };

    const changeName = (event) => {
    setName(event.target.value);
    };
  
    const changeStatus = (event) => {
    setStatus(event.target.value);
     };

    const changeCss = (event) => {
    setApply(event.target.value);
    };
 
    const onSubmitHandle = (event) => {
    event.preventDefault();
    const val = {
      ecode,
      name,
      status,
      cssapply
    };
    addRows(val);
    clearState();
     };
  
  const clearState = () => {
    setCode('');
    setName('');
    setStatus('');
    setApply('');
  };
  
  const addRows = (data) => {
    const updatedEmpData = [...empData];
    updatedEmpData.push(data);
    setEmpData(updatedEmpData);
  };


  return (
    <>
    <div>
      <div className='form-group'>
      <label>Employee Code</label>
      <input type="text" className='form-control' value={ecode} onChange={changeCode} />
      </div>
      <div className='form-group'>
      <label>Name</label>
      <input type="text" className='form-control' value={name} onChange={changeName} />
      </div>
      <div className='form-group'>
      <label>Status</label>
      <select className='form-control' onChange={changeStatus}>
          <option value='Active'>Active</option>
          <option value='Disabled'>Disabled</option>
      </select>
      </div>
      <div className='form-group'>
      <label>CSS Apply</label>
      <select className='form-control' onChange={changeCss}>
          <option value='Style'>Style</option>
          <option value='Class'>Class</option>
      </select>
      </div>
      <br></br>
      <button className='btn btn-info' onClick={onSubmitHandle}> Submit</button>
      <br></br>
      <br></br>
      <br></br>
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee Code</th>
            <th>Name</th>
            <th>Status</th>
            <th>Css</th>
          </tr>
        </thead>
        <tbody>
        {empData.map((item,idx)=> { 
               return ( 
                    <tr key={idx}>
                        <td>{item.ecode}</td> 
                        <td>{item.name}</td> 
                        <td>{item.status}</td>
                        <td style={getStyle(item.cssapply)}>{item.cssapply}</td> 
                    </tr> 
                    );
             })} 
    </tbody>
      </table>
    </div>
    </div>
    </>
  );
}
  
export default Form2;