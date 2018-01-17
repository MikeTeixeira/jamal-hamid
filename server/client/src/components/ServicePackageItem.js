import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ServicePackageItem extends Component {



  render(){

    const { name, price, status, quantity } = this.props;

    return (
          <div className="package-wrapper">
            <div className="package-top">
              <h2 className="package-header">{name}</h2>
              <ul className="package-list-wrapper">
                <li>Custom Training Plan</li>
                <li>Weekly Check-ins</li>
                <li>Testing</li>
                <li>Testing</li>
              </ul>
              <h3 className="package-price">$150.00</h3>
            </div>
            <div className="package-bottom" >
              <Link to="/services/packages/personal-form"><button className="button">Click Me</button></Link>
            </div>
          </div>
    )
  }
}