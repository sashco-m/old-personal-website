import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/custom-navbar.js';
import CoverImg from './components/CoverImg.js';
import SectionTitle from './components/SectionTitle.js';
import CustomCard from './components/CustomCard.js';
import Footer from './components/Footer.js';
import About from './components/About.js';

import { Collapse, Button, Card, Col, Container, Image, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import SectionBody from './components/SectionBody';
import Projects from './components/Projects';

function App() {
  const [open, setOpen] = useState(false);
  const projectImgs=["https://i.imgur.com/QVjqovc.png","https://i.imgur.com/WVXL1uG.png","https://i.imgur.com/yDISwgp.png","https://i.imgur.com/8gzBwJu.png"]
  const projectLinks=["https://sashco.pythonanywhere.com/","","",""]
  const projectTitles=["Python: Bash Vintage","Java: GUI Database","Reactjs: Calculator","HTML/CSS: Art Portfolio"]
  const projectDescriptions=["Test bash desc","Test tacad description","test calc desc","test artfolio desc"]

  return (
    <div style={{overflowX:"hidden"}}>
      <Helmet>
        <title>Sashco Mistelbacher - Always Curious</title>
      </Helmet>
      <CustomNavbar />
      <CoverImg />
      <Row>
        <Image style={{marginTop:"-8px",objectFit:"cover",minHeight:"40vh",opacity:"0%"}} src="https://i.imgur.com/jey24yC.jpg" fluid />
        <Container className="border" style={{borderRadius:"40px", backgroundColor:"white",zIndex:"10",boxShadow: "0px -14px 32px -8px rgba(0,0,0,0.72)"}} fluid>
        {/*start of main container */}
          <About 
            introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            goal1="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            goal2="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            goal3="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            imgSrc="https://i.imgur.com/VDpuKi9.jpg"
          />
          {/* end of hobbies*/}
          
          <Projects 
            projectImg={["https://i.imgur.com/QVjqovc.png","https://i.imgur.com/WVXL1uG.png","https://i.imgur.com/yDISwgp.png","https://i.imgur.com/8gzBwJu.png"]}
            projectLink={["https://sashco.pythonanywhere.com/","","",""]}
            projectTitle={["Python: Bash Vintage","Java: GUI Database","Reactjs: Calculator","HTML/CSS: Art Portfolio"]}
            projectDescription={["Test bash desc","Test tacad description","test calc desc","test artfolio desc"]}
          />
          {/* end of projects */}
          <Row style={{textAlign:""}} className="m-1" fluid>
            
            <Col className="" xl={3} lg={1} ></Col>
              <Col xl={6} lg={10}>
                <hr className="border"></hr>
                <SectionTitle title="Work" />
                <Row>

                    <Container fluid>
                  <h3>Craft Services</h3>
                    </Container>

                  <Container fluid>
                  <h6 className="text-muted">Summer 2020</h6>
                  </Container>


                  <Container fluid>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </Container>
 
                </Row>
                <Row>

                    <Container fluid>
                  <h3>Production Assistant</h3>
                    </Container>

                  <Container fluid>
                  <h6 className="text-muted">Summer 2019 and 2020</h6>
                  </Container>


                  <Container fluid>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </Container>
 
                </Row>
                <Row>

                    <Container fluid>
                  <h3>Location Support</h3>
                    </Container>

                  <Container fluid>
                  <h6 className="text-muted">Summer 2019</h6>
                  </Container>


                  <Container fluid>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </Container>
 
                </Row>


                <hr className="border"></hr>
              </Col>

                <Col className="" xl={3} lg={1} ></Col>
            </Row>

          {/* end of work */}

        {/*end of main container */}
        </Container> 


        <Row className="footer border mt-auto p-3" bg="light" style={{width:"100%"}} fluid>
          <Col sm={3}></Col>
          <Col sm={6}>
          <span className="text-muted"> Sashco Mistelbacher | {new Date().getUTCDate()}/{new Date().getUTCMonth()+1}/{new Date().getUTCFullYear()} | <Image src="https://i.imgur.com/o22EHo4.png" /></span>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Row>
    </div>
  );
}

export default App;
