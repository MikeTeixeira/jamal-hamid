import React, {Component} from 'react';

class Home extends Component{
  render() {

    return (
      <div className="home-wrapper">
        <div className="banner_text_wrapper">
          <h1 className="slogan left-banner__slogan">Make 2018</h1>
          <h1 className="slogan right-banner__slogan">Your Year</h1>
        <div className="training_package_wrapper">
          <h3 className="training_package__text">Let's Work Together...</h3>
          <button  className="home_banner-cta">Learn More</button>
        </div>
        </div>
        <div className="banner_coat"></div>
      </div>
    )
  }
}

export default Home
