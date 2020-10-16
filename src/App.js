import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/custom-navbar.js';
import CoverImg from './components/CoverImg.js';

import { Col, Container, Image, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div style={{overflowX:"hidden"}}>
      <CustomNavbar />
      <CoverImg />
      <Row fluid>
        <Image style={{objectFit:"cover",minHeight:"40vh",opacity:"0%"}} src="https://i.imgur.com/jey24yC.jpg" fluid />
        <Container style={{height:"150vh",backgroundColor:"white",zIndex:"10",boxShadow: "0px -14px 32px -8px rgba(0,0,0,0.72)"}} className="" fluid>
          
        <Row style={{textAlign:"center"}} className="" fluid>
            <Col lg={5}>
              <h1 className="m-2" style={{textDecoration:"underline"}}>About</h1>

              <Container className="border m-4 p-2" style={{backgroundColor:"peachpuff"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum dui faucibus. Platea dictumst quisque sagittis purus sit. Quis hendrerit dolor magna eget. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Egestas sed tempus urna et pharetra. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Viverra nibh cras pulvinar mattis nunc sed blandit. Suspendisse in est ante in nibh mauris cursus. Elit pellentesque habitant morbi tristique senectus et.
              </Container>
            </Col>
            <Col lg={7}>
              <h1 className="m-2" style={{textDecoration:"underline"}}>Hobbies</h1>
            </Col>
          </Row>
          

        </Container> 

      </Row>
    </div>
  );
}

export default App;
