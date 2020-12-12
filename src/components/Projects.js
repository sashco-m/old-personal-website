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

                  <a style={{textDecoration:"none", color:"black"}} target="_blank" rel="noopener noreferrer" href={props.projectLink[0]}>
                    <CustomCard 
                          mark="Python:"
                          markColour="#FFFACD"
                          coverImg={props.projectImg[0]}
                          title={props.projectTitle[0]}
                          description={props.projectDescription[0]}
                      />
                  </a>
                </Col>
                <Col md={6}>
                  <a style={{textDecoration:"none", color:"black"}} target="_blank" rel="noopener noreferrer" href={props.projectLink[1]}>
                    <CustomCard 
                            mark="Java:"
                            markColour="#fed8b1"
                            coverImg={props.projectImg[1]}
                            title={props.projectTitle[1]}
                            description={props.projectDescription[1]}
                            downloadlink={"https://drive.google.com/uc?export=download&id=1QyJ6CG2G0e4ZDi7zP3e13pK6soUqgJ4g"}
                            downloadtitle="Download"
                        />
                  </a>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={6}>
                  <a style={{textDecoration:"none", color:"black"}} target="_blank" rel="noopener noreferrer" href={props.projectLink[2]}>
                    <CustomCard 
                            mark="Reactjs:"
                            markColour="#add8e6"
                            coverImg={props.projectImg[2]}
                            title={props.projectTitle[2]}
                            description={props.projectDescription[2]}
                        />
                </a>
                </Col>
                <Col md={6}>
                  <a style={{textDecoration:"none", color:"black"}} target="_blank" rel="noopener noreferrer" href={props.projectLink[3]}>
                    <CustomCard 
                            mark="HTML/CSS:"
                            markColour="#ffcccb"
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