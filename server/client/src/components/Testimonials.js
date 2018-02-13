import React, {Component} from 'react';
import testimonialData from '../testimonialData/testimonialData.json';
import TestimonialClient from './TestimonialClient';

class Testimonials extends Component {
  constructor(props){
    super(props);

    this.state = {
      testimonials: []
    }

  }

  componentDidMount(){
    this.setState({testimonials: testimonialData});
  }
  
  render(){

    const { testimonials } = this.state;
    return (
      <div className="testimonial-container" >
        <div className="testimonial-content">
          <div className="testimonial-header-wrapper">
            <h1 className="testimonial-header" >What Team Hamid Says</h1>
          </div>
            <TestimonialClient clients={testimonials} />   
        </div>
      </div>
    )
  }
}

export default Testimonials
