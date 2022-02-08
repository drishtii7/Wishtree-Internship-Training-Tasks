import React, {useState, useEffect} from 'react';
function EmpSelect(){
    const[empArr, setEmpArr] = useState([]);
    const[filtr, setFiltr]=useState("");
    const[loading, setLoading]=useState(true);
    const[dropv,setdropv]=useState([]);
    const [filterArr, setfilterArr]=useState([]);
  useEffect(()=>{
    let empData=[{eid:101,name:'Riya',salary:25000,dept:"Web Development"},
    {eid:102,name:'Shloka',salary:45000,dept:"Tester"},
    {eid:103,name:'Raj',salary:40000,dept:"Tester"},
    {eid:104,name:'Shreya',salary:55000,dept:"Web Development"},
    {eid:105,name:'Parth',salary:30000,dept:"Admin"}];

    let fitData =[...new Set(empData.map(itm=>itm.dept))];
    
    if(loading){
        setEmpArr(empData);
        setdropv(fitData)
        setLoading(false);
        setfilterArr(empData);
    }
})
const onSelectHandle=(event)=>{

    let {options,selectedIndex} = event.target;
    setFiltr(options[selectedIndex].text);
    let newEData=empArr.filter(function (a){return a.dept===options[selectedIndex].text});
    setfilterArr(newEData);
}
    return(
        <>
        <h1>hi</h1>
        <div>
            <h1>List</h1>
            {loading?<span>Loading data ...</span>:null}
            <br>
            </br>
            <select className='dropdown-toggle border border-secondary' onChange={onSelectHandle}>
                {dropv.map((data,idx)=><option key={idx}>{data}</option>)}
            </select>
            <br></br>
            <table className='table table-striped'>
                <tbody>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Salary</th>
                        <th>Department</th>
                    </tr>
                    {filterArr.map((item,idx)=> { 
               return ( 
                    <tr key={idx}>
                        <td>{item.eid}</td> 
                        <td>{item.name}</td> 
                        <td>{item.salary}</td>
                        <td>{item.dept}</td>
                    </tr> 
                    );
             })} 
            </tbody>
            </table>
        </div>
        </>
    )
}
export default EmpSelect;