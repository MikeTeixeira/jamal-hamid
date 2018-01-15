import React,{Component} from 'react';
import { Row,Col } from 'react-materialize';

export default class BottomFooter extends Component {

  render(){
    return(
      <div className="footer-wrapper">
        <Row className="footer-row" >
          <Col className="footer-col1  footer-col "></Col>
          <Col className="footer-col2  footer-col"></Col>
          <Col className="footer-col3  footer-col"></Col>
        </Row>
        <Row className="footer-row" >
        <Col className="footer-col">Copyright © 2018 Jamal Hamid. All rights reserved. </Col>
        <Col className="footer-col">
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </Col>
        </Row>
      </div>
    )
  }
}