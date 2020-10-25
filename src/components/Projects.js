import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Row, Col } from 'react-bootstrap';

function Projects(props) {
    return (
        <div>
          <Row className="mb-4">
            <Col md={6}>
              <a style={{textDecoration:"none", color:"black"}} target="_blank" href={props.projectlink1}>

              </a>
            </Col>
            <Col md={6}>
              <a style={{textDecoration:"none", color:"black"}} target="_blank" href={props.projectlink2}>

              </a>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col md={6}>
              <a style={{textDecoration:"none", color:"black"}} target="_blank" href={props.projectlink3}>

             </a>
            </Col>
            <Col md={6}>
              <a style={{textDecoration:"none", color:"black"}} target="_blank" href={props.projectlink4}>

              </a>
            </Col>
          </Row>
        </div>
    );
  }


export default Projects;