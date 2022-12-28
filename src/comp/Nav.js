import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import Home from './Home';

import About from './About';

import Trip from "./Trips";
import Book from "./Book";
import Contact from "./Contact";
import XaE1 from "./XaE1";
import XaE2 from "./XaE2";
import Featured from "./Featured";

const Navs=[
  {
  path:"/SpaceExodus",
  val:"Home"
},
{
  path:"/trip",
  val:"Trip"
}, {
  path:"/about",
  val:"About"
}, {
  path:"/book",
  val:"Book"
},
{
  path:"/featured",
  val:"Ships"
},
{
  path:"/contact",
  val:"Contact"
}
 ];


const SNav = () => {
return(
  <Router>
    <>
    
    <section  className="d-flex align-items-center bg-black ">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-12 mx-auto">
            
              
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
  <Container>
    <Link to= "/about">
      <Navbar.Brand >GoSpace</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" >
      <Nav className="justify-content-center">
        
      {Navs.map((elem)=>{return(
              <Nav.Item>
                
             < Nav.Link as={Link} to={elem.path}>{elem.val}</Nav.Link>
                               
             </Nav.Item>)
      })}     
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  </div>
  </div>
 </section>
  </>
  <div>
                    <Routes>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/trip" element={<Trip/>}/>
                        <Route path="/book" element={<Book/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/Xae1" element={<XaE1/>}/>
                        <Route path="/Xae2" element={<XaE2/>}/>
                        <Route path="/featured" element={<Featured/>}/>
                        <Route exact path="/SpaceExodus" element={<Home/>}/>
                        <Route render={() => <Navigate to="/SpaceExodus" />} />

                           
                    </Routes>
                </div>
  </Router>
  )
}
  
  export default SNav