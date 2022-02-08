import React, {useState} from 'react';
function InterestCalc(){
    const [amt, setAmount] = useState(1);
    const [years, setYears] = useState(1);
    const [rate, setRate] = useState(9);
    const [result, setResult] = useState();
    const [monthpay, setPay] = useState();
    const onSubmit = (e)=>{
        e.preventDefault();
        let interest = (amt*rate*years)/100;
        let total = +amt + +interest;
        console.log("Total",total);
        setPay((total/(years*12)).toFixed(3));
        setResult(interest);
        
    }

return(
    <>
    <div className='row'>
        <div className='col-md-4 border border-2'>
            <h3> Loan Calculator</h3>
            <h3> Interest Rate : 9% </h3>
            <h4> Monthly Payment : Rs {monthpay}</h4>
            <div className='form-group m-3'>
                <label> Amount : </label>
                <input type="text" className='form-control' onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <div className='form-group m-3'>
                <label> Rate : </label>
                <input type="text" className='form-control' onChange={(e)=>setRate(e.target.value)}/>
            </div>
            <div className='form-group m-3'>
                <label> Years : </label>
                <input type="text" className='form-control' onChange={(e)=>setYears(e.target.value)}/>
            </div>
            <button className='btn btn-success' onClick={onSubmit}>Calculate</button>
        </div>
    </div>
    </>
)
}

export default InterestCalc;