import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


class Counter extends React.Component {
render(){
  return(
      <Container fluid className="textCenter counter">
        <Row className="justify-content-center pt-4">
          <Col xs="1">
            <div className="killedCircle">
              <span>{this.props.totalKilled}</span>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Counter
