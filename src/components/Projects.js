import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCard from './CustomCard.js';
import { Image, Row, Col } from 'react-bootstrap';
import SectionTitle from './SectionTitle.js';

function Projects(props) {
    return (
        <div>
          <Row className="m-1">
          <Col xl={3} lg={1} ></Col>
            <Col xl={6} lg={10}>
              <hr className="border"></hr>
              <SectionTitle title="Projects" />
                  <Row className="mb-4">
                <Col md={6}>
                  <a style={{textDecoration:"none", color:"black"}} target="_blank" href={props.projectLink[0]}>
                    <CustomCard 
                          coverImg={props.projectImg[0]}
                          title={props.projectTitle[0]}
                          description={props.projectDescription[0]}
                      />
                  </a>
                </Col>
                <Col md={6}>
                  <a style={{textDecoration:"none", color:"black"}} target="_blank" href={props.projectLink[1]}>
                    <CustomCard 
                            coverImg={props.projectImg[1]}
                            title={props.projectTitle[1]}
                            description={props.projectDescription[1]}
                        />
                  </a>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={6}>
                  <a style={{textDecoration:"none", color:"black"}} target="_blank" href={props.projectLink[2]}>
                    <CustomCard 
                            coverImg={props.projectImg[2]}
                            title={props.projectTitle[2]}
                            description={props.projectDescription[2]}
                        />
                </a>
                </Col>
                <Col md={6}>
                  <a style={{textDecoration:"none", color:"black"}} target="_blank" href={props.projectLink[3]}>
                    <CustomCard 
                            coverImg={props.projectImg[3]}
                            title={props.projectTitle[3]}
                            description={props.projectDescription[3]}
                        />
                  </a>
                </Col>
              </Row>
            </Col>
          <Col xl={3} lg={1} ></Col>
        </Row>
        </div>
    );
  }


export default Projects;