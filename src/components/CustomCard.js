import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Row, Card, Container } from 'react-bootstrap';

function CustomCard(props) {
    return (
        <Card className="mb-3 projects-box" style={{textAlign:"left"}} > 
            <Card.Img variant="top" src={props.coverImg} />
                <Card.Body>
                    <Card.Title>{props.mark && <mark style={{backgroundColor: props.markColour}}>{props.mark}</mark>}{props.title}</Card.Title>
                    <Card.Text>
                    <p>{props.description}</p>
                    {props.link1 && <Container fluid><a target="_blank" href={props.link1}>{props.link1title}</a></Container>}
                    {props.link2 && <Container fluid><a target="_blank" href={props.link2}>{props.link2title}</a></Container>}
                    {props.downloadlink && <Container fluid><a href={props.downloadlink} download>{props.downloadtitle}</a></Container>}
                </Card.Text>
            </Card.Body>
        </Card>
    );
  }


export default CustomCard;