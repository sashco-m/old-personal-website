import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container  } from 'react-bootstrap';

function SectionTitle(props) {
    return (
      <Row className="mb-2">
        <Container fluid>
          <h1 className="title-shadow">{props.title}</h1>
        </Container>
      </Row>
    );
  }


export default SectionTitle;