import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { Element, Events, Link, scroller, animateScroll as scroll } from "react-scroll";

{/*0px 20px 4px -8px rgba(0,0,0,0.17) */}

function CustomNavbar(props) {
    return (
        <Navbar style={{opacity:"0.95",boxShadow: "0px 20px 4px -8px rgba(0,0,0,0.17)"}} fixed="top" bg="light" expand="lg" className="border">
        <a onClick={props.nameFunc}><Navbar.Brand style={{cursor:"pointer"}}>Sashco Mistelbacher</Navbar.Brand></a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto" >
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} offset={-180}><Nav.Link className="custom-nav">About</Nav.Link></Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} offset={-180}><Nav.Link className="custom-nav">Projects</Nav.Link></Link>
                <Link activeClass="active" to="work" spy={true} smooth={true} duration={500} offset={-180}><Nav.Link className="custom-nav mr-3">Work</Nav.Link></Link>
                <Form inline>
                  <Button variant="outline-secondary" size="sm">Download Résumé</Button>
                </Form>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
  }


export default CustomNavbar;
