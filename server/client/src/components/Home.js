import React, {Component} from 'react';
import {Row, Col, Icon} from 'react-materialize';

class Home extends Component{
  render() {

    return (
      <div>
        <div className="home-wrapper-banner">
          <div className="banner_text_wrapper">
            <h1 className="slogan left-banner__slogan">Make 2018</h1>
            <h1 className="slogan right-banner__slogan">Your Year</h1>
          <div className="training_package_wrapper">
            <h3 className="training_package__text">Let's Work Together...</h3>
            <button  className=" button home_banner-cta">Learn More</button>
          </div>
          </div>
          <div className="banner_coat"></div>
        </div>
        <div className="home-services-wrapper">
          <Row className="home-services-row" >
            <Col s={4}>
              <Col className="home-services-icon-col" s={1}><Icon className="home-services-icon" medium>fitness_center</Icon></Col>
              <Col className="home-services-content-col" s={2}>
                <h4 className="home-services-title" >Personal Coach</h4>
                <p className="home-services-info">With one on one coaching, It doesn't get any better than that.
                  With a personally customized training plan, we'll work together
                  to achieve your goals.
                </p>
              </Col>
            </Col>
            <Col s={4}>
              <Col className="home-services-icon-col" s={1}><Icon className="home-services-icon" medium>restaurant_menu</Icon></Col>
              <Col className="home-services-content-col" s={2}>
                <h4 className="home-services-title" >Custom Nutrition Plan</h4>
                <p className="home-services-info"><strong>You can't get the results you want without proper nutrition.</strong><br/>
                  <h5>You'll learn how to: </h5>
                  <ul  >
                    <li className="nutrition-plan-benefits">Track your macronutrients</li>
                    <li className="nutrition-plan-benefits">Understand the benefits of consuming different foods</li>
                    <li className="nutrition-plan-benefits">Be social while tracking your macronutrients</li>
                  </ul>
                </p>
              </Col>
            </Col>
              <Col s={4}>
                <Col 
                className="home-services-icon-col" 
                s={1}><Icon className="home-services-icon" 
                medium>access_time</Icon>
                </Col>
                <Col className="home-services-content-col" s={2}>
                  <h4 className="home-services-title">Guaranteed Results</h4>
                </Col>
              </Col>            
          </Row>
        </div>
        <div className="join-me-banner">
        </div>     
      </div>
    )
  }
}

export default Home
