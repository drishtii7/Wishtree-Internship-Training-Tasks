import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Login from './Login';
import data1 from './Globaldata';
class Userdash extends Component{
    constructor(props){
        super(props);
        // let {uname} = this.props.route.params;
        this.state = {ProductDetails:[],Stockdetails:[],productArr:{id:'',pname:'',description:'',price:''},counter:0,notify:'',newProdid:'',showSearch:'',newProd:[]};
    }
    showProducts(){
        axios.get("http://localhost:8181/products").then(response=>{
            // console.log("Product data",response.data);
             this.setState({ProductDetails:response.data});
        })
        axios.get("http://localhost:8181/mrstock").then(response=>{
             console.log("Stock data",response.data);
             this.setState({Stockdetails:response.data});
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
    placeHandler=()=>
    {
        
         axios.post("http://localhost:8181/order/addOrder",
         {
            "uname":data1.obj1,
            "product":this.state.newProd,
            "status":false,
            "total_price":0
         }).then(res=>{
             console.log(res);

         }).catch(err=>console.log(err));
       
    }
    onClickH=(prid)=>{
        let {ProductDetails,productArr,counter,notify,newProd,Stockdetails}=this.state;
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

                // console.log(productArr);
                const URL="http://localhost:8181/productnew/addProductnew";
                axios.post(URL,productArr).then(response=>{
                // console.log(response.data);
             }).catch(err=>console.log("product error :",err))
            }

        })
    }
    render(){
        let {ProductDetails,counter,notify,newProdid,Stockdetails}=this.state;
        return(
            <>
            {/* <h2>Welcome {data1.obj1}</h2> */}
            <Navbar bg="light" expand="lg">
  <Container fluid>
  <Navbar.Toggle aria-controls="navbarScroll" />
    <form>
              <center><input type="text" className='form-control  ml-2 p-4' value={newProdid} onChange={this.onChangeHandler} placeholder=' search your products here' />
               </center> 
     </form>
    <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#action2">
            <Link to="/ucart" ><span className="glyphicon glyphicon-log-in"></span>
                <button className="btn btn-success me-3" onClick={this.placeHandler}>View Cart </button>
            </Link>
         </Nav.Link>
         <Nav.Link> <Link to="/orders" className='btn btn-warning'>My Orders</Link></Nav.Link>
        {/* <Nav.Link href="#action2"> <Link className="btn btn-primary" to='/cart1'>View Cart</Link></Nav.Link> */}
        <Nav.Link href="#action2"> <Link to="/login" className='btn btn-dark'>Logout</Link></Nav.Link>
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
                           <h4 className='product-desc'>{item.description}</h4>
                       </div>
                       <div>
                           <h3 className='product-price'> Rs. {item.price}</h3>
                       </div>
                       {/* <div>
                       {Stockdetails.map((item2,idx)=>{
                            return(
                                item.pname === item2.pname &&
                                (
                                <tr key={idx}>
                                <td>{item2.qty}</td>
                            </tr>
                                )
                            )
                        })}
                       </div> */}
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
export default Userdash;