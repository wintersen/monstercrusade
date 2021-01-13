import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


class Counter extends React.Component {
  constructor(props){
    super(props);
  }


render(){
  return(
      <Container className="textCenter">
        <Row className="justify-content-center mt-4">
          <Col xs="1">
            <div class="killedCircle">
              <span>{this.props.totalKilled}</span>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Counter
