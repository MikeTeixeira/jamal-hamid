import React, {Component} from 'react';


export default class TestimonialClient extends Component {
  constructor(props){
    super(props);

  }

  render(){

    const { clients } = this.props;
  

    return(
      <div className="testimonial-client-wrapper" >
          {clients.map(client => {
            return (
              <div key={client.id} className="testimonials" s={4}>
                <div className="testimonials-left">
                  <p className="testimonial-info" >{client.info}</p>
                </div>
                <div className="testimonials-right">
                  <p className="testimonial-name" >{client.name}</p>
                </div>
              </div>
          )})}
      </div>
    )
  }
}