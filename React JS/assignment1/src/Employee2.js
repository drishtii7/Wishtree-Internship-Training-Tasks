import React, { Component } from 'react';
class Employee2 extends Component {
  constructor() {
    super();

    this.state = {empid: '',name: '',salary:'',items: [] }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    let items = [...this.state.items];
    items.push({
      empid: this.state.empid,
      name: this.state.name,
      salary: this.state.salary
    });
    this.setState({items, empid: '',name: '',salary:''});
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
   // let items = [...this.state.items];
    let {items} = this.state;
    return (
      <>
      <div>
        <h3>Add a new item to the table:</h3>  
        <form onSubmit={this.handleFormSubmit}>
          <div className='form-group'>
          <label>
          Employee ID:
          <input name="empid" value={this.state.empid} 
            type="text" className="form-control" onChange={this.handleInputChange} />
          </label>
          </div>
          <div className='form-group'>
          <label>
        Name:
          <input name="name" value={this.state.name} 
            type="text" className="form-control" onChange={this.handleInputChange} />
          </label>
          </div>
          <div className='form-group'>
          <label>
        Salary:
          <input name="salary" value={this.state.salary} 
            type="text" className="form-control" onChange={this.handleInputChange} />
          </label>
          </div>
          <button type="submit" value="Submit">Add Item</button>
        </form>
      </div>
      <div id="Table">
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Salary</th>
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.empid}</td>
                  <td>{item.name}</td>
                  <td>{item.salary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </>
    );
  }
}
export default Employee2;