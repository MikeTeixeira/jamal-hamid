import React, {Component} from 'react';
import CheckoutForm from './CheckoutForm';

export default class Checkout extends Component {
  constructor(props){
    super(props);


  }


  render(){
    return(
      <div className="cart-container">
        <div className="cart-wrapper">
          <CheckoutForm />
        </div>
        <div className="cart-summary">
          
        </div>
      </div>
    )
  }
}