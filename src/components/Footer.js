import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Row, Col } from 'react-bootstrap';

function Footer(props) {
    return (
        <Row className="footer border mt-auto p-3" bg="light" style={{width:"100%"}} fluid>
          <Col sm={3}></Col>
          <Col sm={6}>
            <span className="text-muted ml-1"> Sashco Mistelbacher | {new Date().getUTCDate()}/{new Date().getUTCMonth()+1}/{new Date().getUTCFullYear()} | <Image src="https://i.imgur.com/o22EHo4.png" /></span>
          </Col>
          <Col sm={3}></Col>
        </Row>
    );
  }


export default Footer;