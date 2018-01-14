import React,{Component} from 'react';
import { Row,Col } from 'react-materialize';

export default class BottomFooter extends Component {

  render(){
    return(
      <div className="footer-wrapper">
        <Row className="footer-row" >
          <Col className="footer-col1  footer-col "> Text</Col>
          <Col className="footer-col2  footer-col"> Text</Col>
          <Col className="footer-col3  footer-col"> Text</Col>
        </Row>
        <Row className="footer-row" >
        <Col className="footer-col">Copyright © 2018 Jamal Hamid. All rights reserved. </Col>
        <Col className="footer-col"> </Col>
        </Row>
      </div>
    )
  }
}