import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionTitle from './SectionTitle.js';
import { Image, Row, Col } from 'react-bootstrap';

function About(props) {
    return (
        <div>
            <SectionTitle title="About" />
            <Row className="mb-4">
                <Col md={7}>
                    <p>{props.introText}</p>
                    <ul>
                        {props.goals}
                    </ul>
                </Col>
                <Col md={5}>
                    <Image src={props.imgSrc} thumbnail/>
                </Col>
            </Row>
        </div>
    );
  }


export default About;