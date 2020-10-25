import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container  } from 'react-bootstrap';

function WorkSection(props) {
    return (
      <Row>
      <Container fluid>
        <h3>{props.work[0]}</h3>
          </Container>
          <Container fluid>
          <h6 className="text-muted">{props.work[1]}</h6>
          </Container>
          <Container fluid>
          <p>{props.work[2]}</p>
      </Container>
    </Row>
    );
  }


export default WorkSection;