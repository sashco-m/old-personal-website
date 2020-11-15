import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container  } from 'react-bootstrap';

function WorkSection(props) {
  let respList = props.work[3].map((item,index)=>{
    return <li key={index}>{item}</li>
  })

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
          <ul>
            {respList}
          </ul>
      </Container>
    </Row>
    );
  }


export default WorkSection;