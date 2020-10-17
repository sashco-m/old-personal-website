import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

{/*0px 20px 4px -8px rgba(0,0,0,0.17) */}

function CustomNavbar() {
    return (
    <Navbar style={{opacity:"0.95",boxShadow: "0px 20px 4px -8px rgba(0,0,0,0.17)"}} fixed="top" bg="light" expand="lg" className="border">
        <Navbar.Brand href="#home">Sashco Mistelbacher</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto" >
                <Nav.Link href="#resume">Résumé</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#work">Work</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  
    );
  }


export default CustomNavbar;
