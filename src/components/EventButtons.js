import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class EventButtons extends React.Component {

  render(){
    return(
      <Container>
        <Row>
          <Col><Button className="rpgButton" block onClick={this.props.onNext}> Continue On </Button></Col>
        </Row>
      </Container>

    );
  }
}

export default EventButtons
