import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/custom-navbar.js';
import CoverImg from './components/CoverImg.js';

import { Card, Col, Container, Image, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <div style={{overflowX:"hidden"}}>
      <CustomNavbar />
      <CoverImg />
      <Row fluid>
        <Image style={{objectFit:"cover",minHeight:"40vh",opacity:"0%"}} src="https://i.imgur.com/jey24yC.jpg" fluid />
        <Container className="border" style={{backgroundColor:"white",zIndex:"10",boxShadow: "0px -14px 32px -8px rgba(0,0,0,0.72)"}} className="" fluid>
          {/*Make an hr compontent*/}
            {/* <Row>
              <Col className="" xl={3} lg={1} ></Col>
                <Col xl={6} lg={10}>
                  <hr className="border"></hr>
                </Col>
              <Col className="" xl={3} lg={1} ></Col>
            </Row> */}


          <Row style={{textAlign:""}} className="m-1" fluid>
            
          <Col className="" xl={3} lg={1} ></Col>
            <Col xl={6} lg={10}>
            <hr className="border"></hr>
              
              <Row>
                <Container fluid>
                  <h1>About</h1>
                </Container>
              </Row>
              <Row className="mb-4">
                <Col md={7}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                  </ul>
                </Col>
                <Col md={5}>
                  
                  <Image src="https://i.imgur.com/VDpuKi9.jpg" thumbnail/>
                  
                </Col>
              </Row>
              
            </Col>
            <Col className="" xl={3} lg={1} ></Col>
          </Row>
          {/*end of about section */}
          <Row className="m-1">
            <Col className="" xl={3} lg={1} ></Col>
              <Col className="" lg={10} xl={6}>
              <Row >
              <Col sm={4}>
                <Card className="mb-3" style={{textAlign:"left"}} > 
                  <Card.Img variant="top" src="https://i.imgur.com/3oqcDP6.jpg" />
                  <Card.Body>
                    <Card.Title>Robotics</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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
                <hr className="border"></hr>
              </Col>
              <Col className="" lg={1} xl={3}></Col>
          </Row>
          
          {/* end of hobbies*/}
          <Row style={{textAlign:""}} className="m-1" fluid>
            
          <Col className="" xl={3} lg={1} ></Col>
            <Col xl={6} lg={10}>
              
              <Row>
                <Container fluid>
                  <h1>Projects</h1>
                </Container>
              </Row>
              <Row className="mb-4">
                <Col md={6}>
                  {/*start of project cards */}
                  <Card className="mb-3" > 
                  <Card.Img variant="top" src="https://i.imgur.com/QVjqovc.png" />
                  <Card.Body>
                    <Card.Title>Small Business: Bash Vintage</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
                <Col md={6}>
                <Card className="mb-3" > 
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
                  <Card className="mb-3" > 
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
                <Card className="mb-3" > 
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
              
            </Col>
            <Col className="" xl={3} lg={1} ></Col>
          </Row>
          {/* end of projects */}

        {/*end of main container */}
        </Container> 


        <Row className="footer border mt-auto p-3" bg="light" style={{width:"100%"}} fluid>
          <Col sm={3}></Col>
          <Col sm={6}>
            <span className="text-muted"> Sashco Mistelbacher 2020</span>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Row>
    </div>
  );
}

export default App;
