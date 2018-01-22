import React, {Component} from 'react';
import Cart from './Cart';
import axios from 'axios';


export default class CartWrapper extends Component {
  constructor(props){
    super(props);

    this.state = {
      cart: [],
      isLoaded: false
    }

    this.renderCartItems = this.renderCartItems.bind(this);
  }

  componentDidMount(){
    axios.get('/cart/checkout').then((response) => {
      this.setState({
        ...this.state,
        cart: response.data.items,
        isLoaded: true
      })
    });
  }

  renderCartItems(){
      return (this.state.cart.map((cartItem, index) => {
        const { price, name } = cartItem;
        return (
          <div>
            <h2>{price}</h2>
            <h3>{name}</h3>
          </div>
          )
        })
      )}

  render(){

    const { isLoaded, cart } = this.state;

    return (
      <div>
        { isLoaded && this.state.cart.length > 0 ? 
            <Cart renderCartItems={this.renderCartItems}/> :  
            <div><h2>You have no items in your cart</h2></div> }
      </div>
    )
  }
}