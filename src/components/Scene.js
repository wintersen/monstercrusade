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
      <Container className="textCenter">
        <Row>
          <Col>
            <Image src = {playerSprite} />
          </Col>
          <Col>
            <Image src = {this.props.enemyImg} />
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
