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
                      </strong> year as a cs student at <strong><a target="_blank" href="https://www.google.com/maps/place/University+of+Waterloo/@43.4722854,-80.5448576,15z/data=!4m5!3m4!1s0x0:0xdd9df23996268e17!8m2!3d43.4722854!4d-80.5448576">uw</a></strong>. I'm interested in many things, namely the <strong>internet</strong>, <strong>business</strong> and <strong>art</strong>. Here's a quick list of some recent things I've done:
                      </p>
                      <p>I run a second-hand clothes store called <strong><a target="_blank" href="https://sashco.pythonanywhere.com/">Bash Vintage</a></strong> in
                      my free time. 
                      </p>
                      <p>
                        I mentor FIRST Robotics <strong><a target="_blank" href="https://www.instagram.com/frc4252/">Team 4252</a></strong>.
                    </p>
                    <p>
                      Over the summer, I worked three weeks doing craft on a <strong><a target="_blank" href="https://www.imdb.com/title/tt12717388/?ref_=ttfc_fc_tt">movie</a></strong>.
                    </p>
                    <p>
                      Catch me on <strong><a target="_blank" href="https://github.com/sashco-m">Github</a></strong>, <strong><a target="_blank" href="https://www.linkedin.com/in/sashco-mistelbacher-2b94681b5/">LinkedIn</a></strong> and <strong><a target="_blank" href="https://www.instagram.com/sashco.m/">Instagram</a></strong>.
                    </p>
                    <Row>
                    <Col xl={6}>
                      <h6>Some of my immediate goals:</h6>
                      <ul>
                          <li>participate in upcoming hackathons over the winter</li>
                          <li>make an app with flutter</li>
                          <li>make an amazon affiliate site</li>
                          <li>gain experience working in the tech sector</li>
                      </ul>
                    </Col>
                    <Col xl={6}>
                    <h6>Some of my long-term ideals:</h6>
                      <ul>
                          <li>try to make the world a better place</li>
                          <li>post my song covers on youtube</li>
                          <li>make smart investments</li>
                          <li>buy a tesla someday</li>
                      </ul>
                    </Col>
                    </Row>

                    </Col>
                    <Col md={5}>
                        <Image className="mb-4" style={{boxShadow:"5px 5px 7px 1px rgba(0,0,0,0.56)"}} src={props.imgSrc} alt="Sashco Mistelbacher" thumbnail/>
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
                    title="Robotics" 
                    description="After being the head engineer, I am now a mentor for team 4252. It was a blast building something of your own design, and programming it as well." 
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
                    description="My idea for a valentine's day gift sprouted into a passion I didn't know I had. I enjoy how patience and planning pays off in making something nice." 
                    link1="https://imgur.com/a/8Xr2Vyh" 
                    link1title="Photo Album" 
                />
              </Col>
              <Col sm={4}>
                <CustomCard 
                    coverImg="https://i.imgur.com/D6QMwHb.png" 
                    title="Guitar" 
                    description="I've been playing guitar since 2016, and I hope to eventually make a youtube channel with a collection of my song covers."
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