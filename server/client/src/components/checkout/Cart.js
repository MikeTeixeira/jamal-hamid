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

    cart.map(itemPrice => {
      const { price } = itemPrice;
      total += parseInt(price);
    });
    return total;
  };

  render(){
    const { cart } = this.props;

    console.log(this.orderTotal());

    return(
      <form>
        <h1>Your Products</h1>
        {/* {cart.map(cartItem => {
          const { name, price, quantity } = cartItem;
          return <div>

          </div>
        })} */}
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {cart: state.cart}
}

export default connect(mapStateToProps)(Cart);

