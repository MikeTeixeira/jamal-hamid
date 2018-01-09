import React from 'react';
import {Link} from 'react-router-dom';

export default class Services extends React.Component {


  render () {
    return (
      <div className="services-container">
        <div className="services-wrapper" >
          <div className="package-wrapper">
            <div className="package-top">
              <h2>Package One</h2>
              <ul className="package-list-wrapper">
                <li>Custom Training Plan</li>
                <li>Weekly Check-ins</li>
                <li>Testing</li>
                <li>Testing</li>
              </ul>
              <h3 className="package-price">$150.00</h3>
            </div>
            <div className="package-bottom" >
              <button className="button" ><Link to={"/services/packages/personal-form"}>Click Me</Link></button>
            </div>
          </div>
          <div className="package-wrapper">
            <div className="package-top" >
              <h2>Package Two</h2>
              <ul className="package-list-wrapper">
                <li>Custom Training Plan</li>
                <li>Weekly Check-ins</li>
                <li>Testing</li>
                <li>Testing</li>
              </ul>            
              <h3 className="package-price">$225.00</h3>
            </div>
            <div className="package-bottom" >
              <button className="button" ><Link to={'/services/packages/personal-form'}>Click me</Link></button>
            </div>
          </div>
          <div className="package-wrapper">
            <div className="package-top">
              <h2>Package Three</h2>
              <ul className="package-list-wrapper">
                <li>Custom Training Plan</li>
                <li>Weekly Check-ins</li>
                <li>Testing</li>
                <li>Testing</li>
              </ul>
              <h3 className="package-price">$275.00</h3>              
            </div>            
            <div className="package-bottom">
              <button className="button" ><Link to={'/services/packages/personal-form'}>Click Me</Link></button>
            </div>
          </div>
        </div>
        <div className="services-parallex" >

        </div>
      </div>
    )
  }
}