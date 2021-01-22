import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextLine from './TextLine';

class TextBox extends React.Component {
  render(){
    return(
      <Container className="textboxSpacer">
        <Row>
          <Col className="woodBorder pa-0 px-0" >
            <Container id="aaa" fluid>
            <div id="messages">
              {this.props.data.messageHistory.map((line) => <TextLine line={line} />)}
            </div>
            </Container>
          </Col>
        </Row>
  </Container>
    );
  }
}

export default TextBox
