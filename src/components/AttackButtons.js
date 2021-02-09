import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class AttackButtons extends React.Component {

  render(){
    return(
      <Container>
        <Row>
          <Col><Button className="rpgButton" block onClick={this.props.onPlayerAttack}> Attack </Button></Col>
          <Col><Button className="rpgButton" block onClick={this.props.onPlayerDefend}> Defend </Button></Col>
          <Col><Button className="rpgButton" block onClick={this.props.onEnd}> End the Crusade </Button></Col>
        </Row>
      </Container>
    );
  }
}

export default AttackButtons
