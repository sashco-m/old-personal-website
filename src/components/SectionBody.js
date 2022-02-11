import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About.js';
import Projects from './Projects.js';
import Work from './Work.js';
import { Row, Col } from 'react-bootstrap';

function SectionBody(props) {
  const sectionName=props.sectionName;
    return (
        <Row className="m-1">
          <Col xl={3} lg={1} ></Col>
            <Col xl={6} lg={10}>
            <hr className="border"></hr>
          
              {sectionName == "About" &&
                <About />
              }
              {sectionName == "Projects" &&
                <Projects />
              }
              {sectionName == "Work" &&
                <Work />
              }
            </Col>
          <Col xl={3} lg={1} ></Col>
        </Row>
    );
  }


export default SectionBody;