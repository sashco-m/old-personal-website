import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CustomNavbar from './components/custom-navbar.js';
import CoverImg from './components/CoverImg.js';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
  return (
    <div>
      <CustomNavbar />
      <CoverImg />
      <Row fluid>
        <Image style={{objectFit:"cover",minHeight:"40vh",opacity:"0%"}} src="https://i.imgur.com/jey24yC.jpg" fluid />
        <div style={{width:"100%",height:"150vh",backgroundColor:"white",zIndex:"10"}}>
          <p style={{textAlign:"center"}}>
            Test of the text!
          </p>
        </div>
      </Row>
    </div>
  );
}

export default App;
