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
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


import ReactGA from 'react-ga';

class  App extends React.Component {

  constructor(props){
    super(props);
    ReactGA.initialize('UA-166186688-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.scrollToTop=this.scrollToTop.bind(this);
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  render(){
  return (
    <div style={{overflowX:"hidden"}}>

      <Helmet>
        <title>Sashco Mistelbacher - Always Curious</title>
      </Helmet>
      <CustomNavbar nameFunc={this.scrollToTop} />
      <CoverImg />
      <Row>
        {/* change this inline style to adjust the position of the main container */}
        <Image style={{marginTop:"-8px",objectFit:"cover",minHeight:"40vh",opacity:"0%"}} src="https://i.imgur.com/OZiqzXD.jpg" fluid /> 
        <Container className="border" style={{borderTopLeftRadius:"40px",borderTopRightRadius:"40px", backgroundColor:"white",zIndex:"10",boxShadow: "0px -14px 32px -8px rgba(0,0,0,0.72)"}} fluid>
        {/*start of About */}
          <Element name="about">
            <About 
              imgSrc="https://i.imgur.com/VDpuKi9.jpg"
            />
          </Element>
          {/* Start of Projects*/}
          <Element name="projects">
            <Projects 
              projectImg={["https://i.imgur.com/pxxn17a.png","https://i.imgur.com/JXl5GrG.png","https://i.imgur.com/y1intd3.png","https://i.imgur.com/A4jR81l.png"]}
              projectLink={["https://sashco.pythonanywhere.com/","https://github.com/sashco-m/Graphical-Database","https://calculator.sashco.repl.co/","https://artportfolio.sashco.repl.co/"]}
              projectTitle={["Python: Bash Vintage","Java: GUI Database","Reactjs: Calculator","HTML/CSS: Art Portfolio"]}
              projectDescription={["An online vintage clothes store that I began operating in 2019. I've shipped packages all across Canada, from Vancouver to Montreal. This iteration of the website was built using flask, as my final project for CS50.",
                                   "I built this database with a friend as a final project for my highschool CS course. Despite Java's steep learning curve, I made something I was really proud of. It has all the CRUD operations, as well as a list to display every element. Click the link to download and try for yourself!",
                                   "My first experiment with React. It helped solidify the concepts of state and components. The skills gained from this simple calculator helped make this personal website!",
                                   "I was commissioned by a friend to build a website to show off his art. I achieved my goal of learning more about layered animations in css."]}
            />
          </Element>
          {/* Start of Work */}
          <Element name="work">
            <Work 
              job1={["Craft Services","Summer 2020",
                     "Craft is the food department for the film crew. You have a great opportunity to bond with your coworkers and that was the best part for me. I worked on two movies and commercial. Fun gig.",
                    ["Learned to work in a small team","Operate in a hectic environment",'Work long shifts, being among the first to show up and leave.']]}
              job2={["Production Assistant","Summer 2019 and 2020",
                     "Production assistants are the backbone for getting anything done on a filmset. We set up the work environment, putting up tents, tables, chairs etc. We move and keep track of equipment, and make sure poeple don't accidentally wander into frame. You are very independent with this job, so it requires solid knowledge of how the filmsite works and what you should be doing at any given time. Glad to have worked on two commercials as a PA.",
                     ["Lots of people are happy walking into frame. You have to be a good communicator to convince those people to do otherwise.",
                     "Trusted with driving production company vehicles and expensive equipment.",'Be able to handle messing up and learn quickly from your mistakes.']]}
              job3={["Location Support","Summer 2019","What an LSP (Location Support Personnel) does is arrive early to a filmsite, and make sure it is clear when the production arrives. Basically, you place cones in parking spots as cars leave, and make sure no new cars park in the reserved area. Definitely my least favourite thing I've done, but I'm happy to have learned from a tough job.",
                    ["Long shifts, usually over 12 hours.","You have to be comfortable being alone in an unfamiliar place",
                    "Must be a good communicator. Some people get really angry when you tell them they can't park somewhere downtown.",
                    "Need to be independent and have initiative, as you do not have any direct oversight."]]}
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
