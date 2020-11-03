import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/custom-navbar.js';
import CoverImg from './components/CoverImg.js';
import SectionTitle from './components/SectionTitle.js';
import CustomCard from './components/CustomCard.js';
import Footer from './components/Footer.js';
import About from './components/About.js';
import Work from './components/Work.js';

import { Collapse, Button, Card, Col, Container, Image, Row, Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import SectionBody from './components/SectionBody';
import Projects from './components/Projects';
import { Helmet } from 'react-helmet';
import { Element, Events, Link, scroller, animateScroll as scroll } from "react-scroll";

class  App extends React.Component {

  constructor(props){
    super(props);
    this.scrollToTop=this.scrollToTop.bind(this);
  }
  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render(){
  return (
    <div style={{overflowX:"hidden"}}>
      <Helmet>
        <title>Sashco Mistelbacher - Always Curious</title>
      </Helmet>
      {/* NAVBAR TEST*/}
      <Navbar style={{opacity:"0.95",boxShadow: "0px 20px 4px -8px rgba(0,0,0,0.17)"}} fixed="top" bg="light" expand="lg" className="border">
        <a onClick={this.scrollToTop}><Navbar.Brand style={{cursor:"pointer"}}>Sashco Mistelbacher</Navbar.Brand></a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-auto" >
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} offset={-180}><Nav.Link className="custom-nav">About</Nav.Link></Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500} offset={-180}><Nav.Link className="custom-nav">Projects</Nav.Link></Link>
                <Link activeClass="active" to="work" spy={true} smooth={true} duration={500} offset={-180}><Nav.Link className="custom-nav mr-3">Work</Nav.Link></Link>
                <Form inline>
                  <Button variant="outline-dark" size="sm">Download Résumé</Button>
                </Form>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
      {/* NAVBAR TEST*/}
      <CoverImg />
      <Row>
        {/* change this inline style to adjust the position of the main container */}
        <Image style={{marginTop:"-8px",objectFit:"cover",minHeight:"40vh",opacity:"0%"}} src="https://i.imgur.com/jey24yC.jpg" fluid />
        <Container className="border" style={{borderRadius:"40px", backgroundColor:"white",zIndex:"10",boxShadow: "0px -14px 32px -8px rgba(0,0,0,0.72)"}} fluid>
        {/*start of About */}
          <Element name="about">
            <About 
              introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              goal1="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              goal2="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              goal3="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              imgSrc="https://i.imgur.com/VDpuKi9.jpg"
            />
          </Element>
          {/* Start of Projects*/}
          <Element name="projects">
            <Projects 
              projectImg={["https://i.imgur.com/QVjqovc.png","https://i.imgur.com/WVXL1uG.png","https://i.imgur.com/yDISwgp.png","https://i.imgur.com/8gzBwJu.png"]}
              projectLink={["https://sashco.pythonanywhere.com/","https://github.com/sashco-m/Graphical-Database","https://calculator.sashco.repl.co/","https://artportfolio.sashco.repl.co/"]}
              projectTitle={["Python: Bash Vintage","Java: GUI Database","Reactjs: Calculator","HTML/CSS: Art Portfolio"]}
              projectDescription={["Test bash desc","Test tacad description","test calc desc","test artfolio desc"]}
            />
          </Element>
          {/* Start of Work */}
          <Element name="work">
            <Work 
              job1={["Craft Services","Summer 2020","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}
              job2={["Production Assistant","Summer 2019 and 2020","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}
              job3={["Location Support","Summer 2019","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]}
            />
          </Element>
          {/* end of work */}
        {/*end of main container */}
        </Container> 
        <Footer />
      </Row>
    </div>
  );
 }
}

export default App;
