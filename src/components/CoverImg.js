import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Row } from 'react-bootstrap';

function CoverImg() {
    return (
        <Row style={{position:"fixed"}} fluid>
            <Image style={{objectFit:"cover",minHeight:"40vh",width:"100%",height:"100%"}} src="https://i.imgur.com/jey24yC.jpg" fluid />
        </Row>
    );
  }


export default CoverImg;
