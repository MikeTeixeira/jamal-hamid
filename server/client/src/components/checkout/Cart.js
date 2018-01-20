import React, {Component} from 'react';
import {connect} from 'react-redux';

class Cart extends Component {
  constructor(props){
    super(props);

    this.orderTotal = this.orderTotal.bind(this);
  }

  //Gets the total price for the order
  orderTotal(){
    const { cart } = this.props;
    let total = 0;
      if(cart.length > 0){
      cart.map(itemPrice => {
        const { price } = itemPrice;
        total += parseInt(price);
      });
      return total;
    };
    return total;
  }

  render(){
    const { cart } = this.props;

    console.log(cart);
    console.log(this.orderTotal());

    return(
      <form>
        <h1>Your Products</h1>
        { cart.length > 0 ? cart.map((cartItem, id) => {
          const { name, price, quantity } = cartItem;
          return <div key={id}>{name}</div>
        }) : ""}
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {cart: state.cart}
}

export default connect(mapStateToProps)(Cart);

