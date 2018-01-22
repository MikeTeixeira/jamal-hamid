import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Table } from 'react-materialize';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

class Cart extends Component {
  constructor(props){
    super(props);

  }

  render(){

    const { renderCartItems } = this.props;
    console.log(this.props.cart)
    return(
      <form className="cart-container" >
        {renderCartItems()}
      </form>
    )
  }
}

export default Cart;

