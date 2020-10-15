import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomNavbar from './components/custom-navbar.js';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
  return (
    <div>
      <CustomNavbar />
      <Container style={{marginTop:"-30vh",position:"fixed",zIndex:"-1"}} fluid>
        <div style={{width:"100%",height:"30vh",backgroundColor:"red"}}></div>
      </Container>
      <Container fluid>
      <div style={{marginTop:"35vh",width:"100%",height:"150vh",backgroundColor:"orange",opacity:"50%"}}></div>
      </Container>
    </div>
  );
}

export default App;
