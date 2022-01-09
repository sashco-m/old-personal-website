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
        <title>Sashco Mistelbacher</title>
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
        {/* end of about*/}
        {/* Start of Work */}
        <Element name="work">
          {/*
            <Work 
              job1={["Craft Services","Summer 2020",
                     "Craft is the food department for the film crew. You have a great opportunity to bond with your coworkers and that was the best part for me. I worked on two movies and commercial. Fun gig.",
                    ["Learned to work in a small team","Operate in a hectic environment",'Work long shifts, being among the first to show up and leave.']]}
              job2={["Production Assistant","Summer 2019 and 2020",
                     "Production assistants are the backbone for getting anything done on a filmset. We set up the work environment, putting up tents, tables, chairs etc. We move and keep track of equipment, and make sure poeple don't accidentally wander into frame. You are very independent with this job, so it requires solid knowledge of how the filmsite works and what you should be doing at any given time. Glad to have worked on two commercials as a PA.",
                     ["Lots of people are happy walking into frame. You have to be a good communicator to convince those people to do otherwise.",
                     "Trusted with driving production company vehicles and expensive equipment.",'Be able to handle messing up and learn quickly from your mistakes.']]}
              job3={["Location Support","Summer 2019","What an LSP (Location Support Personnel) does is arrive early to a filmsite, and make sure it is clear when the production arrives. Basically, you place cones in parking spots as cars leave, and make sure no new cars park in the reserved area. I'm happy to have learned from a tough job.",
                    ["Long shifts, usually over 12 hours.","You have to be comfortable being alone in an unfamiliar place",
                    "Must be a good communicator. Some people get really angry when you tell them they can't park somewhere downtown.",
                    "Need to be independent and have initiative, as you do not have any direct oversight."]]}
            />
          */}
          <Work 
              job1={["Software Engineer at Lean Payments","May - August 2021",
                     "I had the opportunity to help build the Lean Payments' B2B payments platform. Like any good learning experience, I was thrown right into the deep end and was able to see the entire software development process. We spent the first month designing the architecture with AWS in mind; answering questions such as what type of DB would we use and its schema, push vs pull message queues, our use cases and sequence of endpoints, etc. The next 3 months came the implementation, where I was tasked with the backend. Along the way I learned so many skills, from UML and SQL/noSQL, to JWT authorization and DNS migration. Couldn't have asked for a better place to learn with mentorship always available.",
                    ["Learned to design serverless applications, synchronous vs asynchronous, UML sequence diagrams","Implemented the platform backend, utilizing many AWS services including Lambda, API gateway, DynamoDB, Aurora RDS, Cognito, Route53, Cloudformation, Cloudfront, S3, to name a few", "Moved the marketing website off of an Apache server and onto S3 + Cloudfront, for fast response times", "In order to have the root domain point to the Cloudfront CDN, we had to migrate our DNS records to Route53 to make use of its special @ record... in the process I missed the MX records and took down company email!"]]}
            />
          </Element>
          {/* end of work */}
          {/* Start of Projects*/}
          <Element name="projects">
            <Projects 
              projectImg={["https://i.imgur.com/Sigs75v.png","https://i.imgur.com/sl7AMum.png","https://i.imgur.com/pxxn17a.png","https://i.imgur.com/JXl5GrG.png","https://i.imgur.com/y1intd3.png","https://i.imgur.com/A4jR81l.png"]}
              projectLink={["https://forthrightserpentinebase.sashco.repl.co/","http://memorablesuddenproblems.sashco.repl.co/login","https://sashco.pythonanywhere.com/","https://github.com/sashco-m/Graphical-Database","https://calculator.sashco.repl.co/","https://artportfolio.sashco.repl.co/"]}
              projectTitle={[" Uni Student Lifesaver"," Money Manager"," Bash Vintage"," GUI Database"," Calculator"," Art Portfolio"]}
              projectDescription={["Our submission to QHacks 2021 is a simple yet powerful event management app, which utilizes Vonage's SMS API to send reminders. It also supports exporting events to an .ics file to upload to other calendar software. A lot of time was put into a minimalistic design and straightforward user experience, which I think we nailed.",
                                   "Our submission to Hack The North 2021. It utilizes Microsoft's Azure machine learning OCR API to read details off of receipts, and Vonage's SMS API to send the user text-message reminders about billing dates. It was challenging to implement every function in only 36 hours, but we did it and ended up with something great.",
                                   "An online vintage clothes store that I began operating in 2019. I've shipped packages all across Canada, from Vancouver to Montreal. Utilizes MySQL to store encrypted user data and current items. Supports session cookies to remember user login and add items to cart. This iteration of the website was built using flask, as my final project for CS50.",
                                   "I co-developed this database as a final project for my highschool CS course. Utilizes a heavily modified Java Swing Toolkit, including custom button shapes, images and hovering. It contains all essential CRUD operations, with a JList and JListListener to show and display selected items. Click the link to download and try for yourself!",
                                   "My first experiment with React. It helped solidify the concepts of state and function vs. class components. The skills gained from this simple calculator helped make this personal website!",
                                   "I was commissioned by a talented artist to build a website to showcase his art. I achieved my goal of learning more about layered animations in CSS, and utilized them effectively to create a unique, modern and minimalistic UI."]}
              noteTitle={["Login:", "Login:","","Note:","Note:",""]}
              note={["It may take a minute to load. Test account provided with username and password 'test'.","It may take a minute to load. Test account provided with username and password 'test'.","","Converted to an .exe using launch4j. It will prompt you to download a JRE if not already installed.","May take a minute to load.",""]}
              link1={["https://devpost.com/software/uni-student-s-lifesaver","https://devpost.com/software/expenditure-manager-fp1w8i"]}
              link1title={["Devpost Submission","Devpost Submission"]}
            />
          </Element>
          {/*end of projects */}
        {/*end of main container */}
        </Container> 
        <Footer />
      </Row>
    </div>
  );
 }
}

export default App;
