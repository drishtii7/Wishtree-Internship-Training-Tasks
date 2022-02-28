import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Home(){
    return(
        <>
        
        <br></br>
        <Navbar bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse className="justify-content-end">
        <Nav.Link href="#action1"> <Link to="/signup" className='btn btn-success'>Register</Link></Nav.Link>
        
        <Nav.Link href="#action2"> <Link to="/login" className='btn btn-primary'>Log in</Link></Nav.Link>
      {/* </Nav> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
<div className='home-page'>
 <center><h2 className='home-header'>Welcome to shopping cart !</h2></center> 
</div>
        </>
    )
}
export default Home;