import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkSection from './WorkSection.js';
import { Image, Row, Col } from 'react-bootstrap';
import SectionTitle from './SectionTitle.js';

function Work(props) {
    return (
         <Row className="m-1 mb-4">
          <Col xl={3} lg={1} ></Col>
            <Col xl={6} lg={10}>
              <hr className="border"></hr>
              <SectionTitle title="Work Experience" />
          
              {props.job1 && 
                <WorkSection work={props.job1} />
              }
              {props.job2 && 
                <WorkSection work={props.job2} />
              }
              {props.job3 && 
                <WorkSection work={props.job3} />
              }

              <hr className="border"></hr>
            </Col>
          <Col xl={3} lg={1} ></Col>
        </Row>
    );
  }


export default Work;