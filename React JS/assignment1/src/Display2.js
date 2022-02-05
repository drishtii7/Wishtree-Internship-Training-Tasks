import React, { Component } from 'react';

class Display2 extends Component {
    constructor(props) {
        super();
        this.state = {
            clientData: [
                { clientId: 123, clientName: 'A1 Pvt Ltd', dueAmount: 50000, type: 'local' },
                { clientId: 124, clientName: 'A2 Pvt Ltd', dueAmount: 80000, type: 'central' },
                { clientId: 125, clientName: 'A3 Pvt Ltd', dueAmount: 70000, type: 'local' },
                { clientId: 126, clientName: 'A4 Pvt Ltd', dueAmount: 90000, type: 'local' },
                { clientId: 127, clientName: 'A5 Pvt Ltd', dueAmount: 20000, type: 'central' },
                { clientId: 128, clientName: 'A6 Pvt Ltd', dueAmount: 30000, type: 'local' },
                { clientId: 129, clientName: 'A7 Pvt Ltd', dueAmount: 70000, type: 'central' },
                { clientId: 130, clientName: 'A8 Pvt Ltd', dueAmount: 50000, type: 'local' }
            ], tempclientData:[]
        }
    }
    componentDidMount(){
        let { clientData, tempclientData } = this.state;
        console.log("componentDidMount ", clientData);
        tempclientData = clientData;
        this.setState({tempclientData});
    }

    onDataFilter = (ClientType)=>{
        let { clientData, tempclientData } = this.state;
        if(ClientType === 'all'){
            clientData = tempclientData.filter(item=>{
            return item.type === 'local' || item.type === 'central' ;
            
        })
        this.setState({clientData});
        }
        else{
        clientData = tempclientData.filter(item=>{
            return item.type === ClientType;
        })
        this.setState({clientData});
    }
       
    }
    render() {
        let { clientData } = this.state;
        return (
            <>
                <h1>Grid</h1>
                <button className='btn btn-info mr-3' onClick={()=>this.onDataFilter('local')}>Local</button>
                <button className='btn btn-info mr-3' onClick={()=>this.onDataFilter('central')}>Central</button>
                <button className='btn btn-info' onClick={()=>this.onDataFilter('all')}>All</button>
                <table className='table table-striped'>
                    <tbody>
                        <tr>
                            <th>Client ID</th>
                            <th>Client Name</th>
                            <th>Due Amount</th>
                            <th>Type</th>
                        </tr>
                        {clientData.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{item.clientId}</td>
                                    <td>{item.clientName}</td>
                                    <td>{item.dueAmount}</td>
                                    <td>{item.type}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}

export default Display2;