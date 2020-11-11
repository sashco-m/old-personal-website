import React, {useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionTitle from './SectionTitle.js';
import CustomCard from './CustomCard.js';
import { Image, Row, Col, Button, Collapse, Card, Container } from 'react-bootstrap';

function About(props) {
    const [open, setOpen] = useState(false);
    const target = useRef(null);
    return (
        <div>
        <Row className="m-1 mt-3">
          <Col xl={3} lg={1} ></Col>
            <Col xl={6} lg={10}>
              <hr className="border"></hr>
                {/*possible title location*/}
                <Row className="mb-4">
                    <Col md={7}>
                    <SectionTitle title="About" />
                    <p>
                      Hello! I'm Sashco Mistelbacher. I'm currently in my <strong>
                        {{'2020': "first","2021":"second","2022":"third","2023":"fourth","2025":"fifth"}[new Date().getUTCFullYear()]}
                      </strong> year as a cs student at uw. 
                      </p>
                      <p>I run a second-hand clothes store called <strong><a target="_blank" href="https://sashco.pythonanywhere.com/">Bash Vintage</a></strong> in
                      my free time. 
                      </p>
                      <p>
                        I mentor FIRST Robotics <strong><a target="_blank" href="https://www.instagram.com/frc4252/">Team 4252</a></strong>.
                    </p>

                    </Col>
                    <Col md={5}>
                        <Image className="mb-4" style={{boxShadow:"5px 5px 15px -1px rgba(0,0,0,0.49)"}} src={props.imgSrc} thumbnail/>
                        <Button variant="primary" size="sm" onClick={()=> setOpen(!open)} aria-controls="hobbytarget" aria-expanded={open} block>Click to {open ? "hide" : "show"} some of my hobbies!</Button>
                    </Col>
                </Row>
            </Col>
          <Col xl={3} lg={1} ></Col>
        </Row>
        {/*Start of hobbies */}
        <Collapse in={open}>
          <Row id="hobbytarget" className="m-1">
            <Col className="" xl={3} lg={1} ></Col>
              <Col className="" lg={10} xl={6}>
                  <hr className="border"></hr>
                  <SectionTitle title="Hobbies" />
              <Row >
              <Col sm={4}>
                <CustomCard 
                    coverImg="https://i.imgur.com/3oqcDP6.jpg" 
                    title="robotics" 
                    description="test for robotics" 
                    link1="https://www.instagram.com/tv/B9mSro9gO8J/?utm_source=ig_web_copy_link" 
                    link1title="Robot Reveal Video" 
                    link2="https://imgur.com/a/VX4x7Lx" 
                    link2title="Photo Album" 
                />
              </Col>
              <Col sm={4}>
                <CustomCard 
                    coverImg="https://i.imgur.com/Kc7LlMF.jpg" 
                    title="Woodworking" 
                    description="test for Woodworking" 
                    link1="https://imgur.com/a/8Xr2Vyh" 
                    link1title="Photo Album" 
                />
              </Col>
              <Col sm={4}>
                <CustomCard 
                    coverImg="https://i.imgur.com/ynJuJ2a.png" 
                    title="Guitar" 
                    description="test for Guitar" 
                />
              </Col>
              </Row>

              </Col>
              <Col className="" lg={1} xl={3}></Col>
          </Row>
          </Collapse>
        </div>
    );
  }


export default About;