import React from 'react';
import { Row, Col } from 'react-materialize';


const About = () => {
  return (
    
    <div className="about-container">
      <Row className="about-top">
        <h1 className="about-me-header">
          Who Am I?
        </h1>
        <Row className="about-top-row1" >
          <Col className="about-top-left-col" s={9}>
          <div className="boxing-gloves"></div>
          </Col>
          <Col className="about-top-right-col" s={3}>
            <p className="about-stats-title" >Basic Info:</p>
            <ul>
              <li className="about-stats-li" >Full Name: Jamal Hamid</li>
              <li className="about-stats-li" >Born: October 12th, 1980</li>
              <li className="about-stats-li" >Height: 6'3</li>
              <li className="about-stats-li" >Residence: New York, Queens</li>
            </ul>
            <p className="about-stats-title" >Fighter History: </p>
            <ul>
              <li className="about-stats-li" >Lorum Ipsum</li>
              <li className="about-stats-li" >Lorum Ipsum</li>
              <li className="about-stats-li" >Lorum Ipsum</li>
              <li className="about-stats-li" >Lorum Ipsum</li>
              <li className="about-stats-li" >Lorum Ipsum</li>
              <li className="about-stats-li" >Lorum Ipsum</li>
              <li className="about-stats-li" >Lorum Ipsum</li>
            </ul>
            <p className="about-stats-title" >Professional Athletes Trained: </p>
            <ul>
              <li className="about-stats-li" >Lorum Ipsum</li>
              <li className="about-stats-li" >Lorum Ipsum</li>
              <li className="about-stats-li" >Lorum Ipsum</li>
              <li className="about-stats-li" >Lorum Ipsum</li>
              <li className="about-stats-li" >Lorum Ipsum</li>
            </ul>
          </Col>
        </Row>
      </Row>
      <div className="about-bottom-wrapper">
        <div className="about-parallex"></div>
        <div className="about-content">
          
        </div>
      </div>
    </div>
  )
}

export default About;