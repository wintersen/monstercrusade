import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TextLine(props) {
  return(
      <Row>
        <Col className={props.line.class}>{props.line.text}</Col>
      </Row>
  );
};

export default TextLine
