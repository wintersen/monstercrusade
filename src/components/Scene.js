import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import playerSprite from '../assets/temp1.png';
import { ProgressBar } from 'react-bootstrap';

class Scene extends React.Component {
  render(){
    return(
      <Container fluid className="textCenter floor">
        <Row>
          <Col style={{display: 'flex'}} className="justify-content-center">
            <Image src = {playerSprite} className="align-self-end"/>
          </Col>
          <Col style={{display: 'flex'}} className="justify-content-center">
            <Image src = {this.props.enemyImg} className="align-self-end"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProgressBar now={this.props.playerHP}></ProgressBar>
          </Col>
          <Col>
            <ProgressBar now={this.props.enemyHP} variant="danger"></ProgressBar>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Scene
