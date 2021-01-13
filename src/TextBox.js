import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextLine from './TextLine';

class TextBox extends React.Component {

  componentDidUpdate(){

  }

  render(){
    return(
      <Container>
        <Row>
          <Col>
            <Container id="aaa" fluid>
            <div id="messages">
              {this.props.data.messageHistory.map((line) => <TextLine line={line} />)}
              enemy hp is now {this.props.data.enemy.hp}<br />
              player hp is now {this.props.data.player.hp}<br />
              total killed is {this.props.data.totalKilled}
            </div>
            </Container>
          </Col>
        </Row>


  </Container>

    );
  }
}

export default TextBox
