import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/custom-navbar.js';
import CoverImg from './components/CoverImg.js';
import SectionTitle from './components/SectionTitle.js';

import { Collapse, Button, Card, Col, Container, Image, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import SectionBody from './components/SectionBody';

function App() {
  const [open, setOpen] = useState(false);

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

          <Row style={{textAlign:""}} className="m-1" fluid>
            
          <Col className="" xl={3} lg={1} ></Col>
            <Col xl={6} lg={10}>
            <hr className="border"></hr>
              
              <SectionTitle title="About" />
              <Row className="mb-3">
                <Col className="mb-3" md={7}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                  </ul>
                </Col>
                <Col md={5}>
                  
                  <Image className="mb-4" style={{boxShadow:"5px 5px 15px -1px rgba(0,0,0,0.49)"}} src="https://i.imgur.com/VDpuKi9.jpg" thumbnail/>
                  <Button variant="outline-primary" size="sm" onClick={()=> setOpen(!open)} aria-controls="test" aria-expanded={open} block>Click to {open ? "hide" : "show"} some of my hobbies!</Button>

                </Col>
              </Row>
              
              
            </Col>
            <Col className="" xl={3} lg={1} ></Col>
          </Row>
          {/*end of about section */}
          <Collapse in={open}>
          <Row id="test" className="m-1">
            <Col className="" xl={3} lg={1} ></Col>
              <Col className="" lg={10} xl={6}>
              <Row >
              <Col sm={4}>
                <Card className="mb-3" style={{textAlign:"left"}} > 
                  <Card.Img variant="top" src="https://i.imgur.com/3oqcDP6.jpg" />
                  <Card.Body>
                    <Card.Title>Robotics</Card.Title>
                    <Card.Text>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Container fluid>
                    <a target="_blank" href="https://www.instagram.com/tv/B9mSro9gO8J/?utm_source=ig_web_copy_link">Robot Reveal Video</a>
                    </Container>
                    <Container fluid>
                    <a target="_blank" href="https://imgur.com/a/VX4x7Lx">Photo Album</a>
                    </Container>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card className="mb-3" style={{textAlign:"left"}} > 
                  <Card.Img variant="top" src="https://i.imgur.com/Kc7LlMF.jpg" />
                  <Card.Body>
                    <Card.Title>Woodworking</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card className="mb-3" style={{textAlign:"left"}} > 
                  <Card.Img variant="top" src="https://i.imgur.com/ynJuJ2a.png" />
                  <Card.Body>
                    <Card.Title>Guitar</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              </Row>

              </Col>
              <Col className="" lg={1} xl={3}></Col>
          </Row>
          </Collapse>
          {/* end of hobbies*/}
          <Row style={{textAlign:""}} className="m-1" fluid>
            
          <Col className="" xl={3} lg={1} ></Col>
            <Col xl={6} lg={10}>
            <hr className="border"></hr>
              <SectionTitle title="Projects" />
              <Row className="mb-4">
                <Col md={6}>
                  {/*start of project cards */}
                <a style={{textDecoration:"none", color:"black"}} target="_blank" href="https://sashco.pythonanywhere.com/">
                <Card className="mb-3 projects-box"> 
                  <Card.Img variant="top" src="https://i.imgur.com/QVjqovc.png" />
                  <Card.Body>
                    <Card.Title>Small Business: Bash Vintage</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Card.Text>
                  </Card.Body>
                </Card>
                </a>
                </Col>
                <Col md={6}>
                <Card className="mb-3 projects-box" > 
                  <Card.Img variant="top" src="https://i.imgur.com/WVXL1uG.png" />
                  <Card.Body>
                    <Card.Title>Java Travel Agency Database</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Card.Text>
                  </Card.Body>
                </Card>
                
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={6}>
                  {/*start of project cards */}
                  <Card className="mb-3 projects-box" > 
                  <Card.Img variant="top" src="https://i.imgur.com/yDISwgp.png" />
                  <Card.Body>
                    <Card.Title>Calculator in React</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
                <Col md={6}>
                <Card className="mb-3 projects-box" > 
                  <Card.Img variant="top" src="https://i.imgur.com/8gzBwJu.png" />
                  <Card.Body>
                    <Card.Title>Art Portfolio</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Card.Text>
                  </Card.Body>
                </Card>
                
                </Col>
              </Row>
              <hr className="border"></hr>

              
            </Col>
            <Col className="" xl={3} lg={1} ></Col>
          </Row>
          {/* end of projects */}
          <Row style={{textAlign:""}} className="m-1" fluid>
            
            <Col className="" xl={3} lg={1} ></Col>
              <Col xl={6} lg={10}>
                
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
