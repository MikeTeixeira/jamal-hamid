import React, {Component} from 'react';
import {Row, Col, Icon} from 'react-materialize';
import ScrollAnimation from 'react-animate-on-scroll';




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
        <div className="home-about-wrapper">
          <Row className="home-about-row" >
            <Col s={4}>
              <Col className="home-about-icon-col" s={1}><Icon className="home-about-icon" medium>fitness_center</Icon></Col>
              <Col className="home-about-content-col" s={2}>
                <h4 className="home-about-title" >Personal Coach</h4>
                <p className="home-about-info">With one on one coaching, It doesn't get any better than that.
                  With a personally customized training plan, we'll work together
                  to achieve your goals.
                </p>
              </Col>
            </Col>
            
            <Col s={4}>
              <Col className="home-about-icon-col" s={1}><Icon className="home-about-icon" medium>restaurant_menu</Icon></Col>
              <Col className="home-about-content-col" s={2}>
                <h4 className="home-about-title" >Custom Nutrition Plan</h4>
                <p className="home-about-info"><strong>You can't get the results you want without proper nutrition.</strong><br/></p>
                  <div>
                    <ul  >
                      <li className="nutrition-plan-benefits">Track your macronutrients</li>
                      <li className="nutrition-plan-benefits">Understand the benefits of consuming different foods</li>
                      <li className="nutrition-plan-benefits">Be social while tracking your macronutrients</li>
                    </ul>
                  </div>
              </Col>
            </Col>
              <Col s={4}>
                <Col 
                className="home-about-icon-col" 
                s={1}><Icon className="home-about-icon" 
                medium>access_time</Icon>
                </Col>
                <Col className="home-about-content-col" s={2}>
                  <h4 className="home-about-title">Guaranteed Results</h4>
                </Col>
              </Col>            
          </Row>
        </div>

        <div className="join-me-banner"></div>

        <Row className="home-services-wrapper">
          <Col s={7}>
            <h3>Ain't no turning back cause we leavin' no stone unturned.</h3>
          </Col>
          <Col className="home-jamal-hamid-service-wrapper" s={5}>
            <ScrollAnimation animateOnce={true} animateIn="fadeInRight">
              <div className="home-jamal-hamid__fadeAnimation"></div>
            </ScrollAnimation>
          </Col>
        </Row>

        <div className="join-me-banner"></div>

        <Row className="home-testimonial-wrapper" >
            <Col className="home-chris-weidman-wrapper" s={6}>
              <ScrollAnimation animateOnce={true} animateIn="fadeInLeft">
              <div className="home-testimonial__fadeAnimation" ></div>
              </ScrollAnimation>
            </Col>   
          <Col s={6}>
            <div className="home-chris-weidman-title">
              <h3>Chris Weidman</h3>
            </div>
              <div className="home-chris-weidman-testimonial">
                <p className="home-chris-weidman-testimonial-text" >
                  <span id="home-test-jamal-hamid" >Jamal Hamid</span> is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                  Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <button>Read More Testimonials</button>
              </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home
