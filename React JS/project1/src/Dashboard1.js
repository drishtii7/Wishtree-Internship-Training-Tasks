import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
class Dashboard1 extends Component{
    constructor(props){
        super(props);
        // let {uname} = this.props.route.params;
        this.state = {ProductDetails:[],productArr:{id:'',pname:'',description:'',price:''},counter:0,notify:'',newProdid:'',showSearch:'',newProd:[]};
    }
    showProducts(){
        axios.get("http://localhost:8181/products").then(response=>{
            console.log("Product data",response.data);
             this.setState({ProductDetails:response.data});
        })
    }
    componentDidMount(){
        this.showProducts();
    }
    onChangeHandler=(e)=>{
        let {value}=e.target;
        let {newProdid,ProductDetails}=this.state;
        // console.log(value);
        this.setState({newProdid:value});
        console.log(newProdid);
        ProductDetails.forEach((item)=>{
            if(newProdid === item.pname){
                console.log("found details");
            }
        })
    }
    onClickHandler=()=>{
        this.setState({showSearch:true});
    }
    onClickH=(prid)=>{
        let {ProductDetails,productArr,counter,notify,newProd}=this.state;
        ProductDetails.forEach((item)=>{
            if(prid === item._id){
                console.log("found cart id",item._id);
                this.setState({notify:true});
                counter=counter+1;
                this.setState({counter});
                productArr.id=item._id;
                 productArr.pname=item.pname;
                 productArr.description=item.description;
                 productArr.price=item.price;
                 newProd.push({"_id":item._id,"pname":item.pname,"description":item.description,"price":item.price});
                 this.setState({...newProd});
                 console.log("new prod",newProd);
                 // productArr.push({""}) this.setstsa({...productarr})

                console.log(productArr);
                const URL="http://localhost:8181/productnew/addProductnew";
                axios.post(URL,productArr).then(response=>{
                console.log(response.data);
             }).catch(err=>console.log("product error :",err))
            }

        })
    }
    render(){
        // const {navigate}=this.props.navigation;
        // const user_name = navigate.getParam('uname','NO-User');
        let {ProductDetails,counter,notify,newProdid,showSearch}=this.state;
        return(
            <>
            {/* <div>{JSON.stringify(user_name)}</div> */}
            <h2>{this.props.match.params.id}</h2>
            <Navbar bg="light" expand="lg">
  <Container fluid>
  <Navbar.Toggle aria-controls="navbarScroll" />
    {/* <Navbar.Collapse id="navbarScroll"> */}
    <form>
              <center><input type="text" className='form-control  ml-2 p-4' value={newProdid} onChange={this.onChangeHandler} placeholder=' search your products here' />
               {/* <button onClick={this.onClickHandler}>Search</button> */}
               </center> 
     </form>
    <Navbar.Collapse className="justify-content-end">
      {/* <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      > */}
        
        <Nav.Link href="#action2"> <Link className="btn btn-primary" to='/cart1'>View Cart</Link></Nav.Link>
        <Nav.Link href="#action2"> <Link to="/" className='btn btn-dark'>Logout</Link></Nav.Link>
      {/* </Nav> */}
    </Navbar.Collapse>
  </Container>
  </Navbar>
           <div className="container">
           {notify===true?<h3 className='text-primary'>{counter} item added successfully.</h3>:null}
        </div>
        <div className='products'>
           {ProductDetails.map((item)=>{
               return(
                   <>
                  {(newProdid === item.pname) || (newProdid === 'All') || (newProdid === '') ? <div className='card'>
                       <div>
                           <h3 className='product-name'>{item.pname}</h3>
                       </div>
                       <div>
                           <h3 className='product-desc'>{item.description}</h3>
                       </div>
                       <div>
                           <h3 className='product-price'>{item.price}</h3>
                       </div>
                       <div>
                           <button className='product-add-button' onClick={()=>this.onClickH(item._id)}>Add to cart</button>
                       </div>
                   </div> : null}
                   </>
               )
           })}
        </div>
            </>
        )
    }
}
export default Dashboard1;