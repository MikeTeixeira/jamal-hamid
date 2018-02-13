import React, {Component} from 'react';
import Cart from './Cart';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';
import { Container, Button, Col,  } from 'react-materialize';
import Checkout from './Checkout';
import {Link} from 'react-router-dom';



class CartWrapper extends Component {
  constructor(props){
    super(props);

    this.state = {
      cart: [],
      isLoaded: false,
      total: 0
    }

    this.onHandleCartItemDelete = this.onHandleCartItemDelete.bind(this);
    this.onCalculateCartTotal = this.onCalculateCartTotal.bind(this);
    this.onClickRenderCheckout = this.onClickRenderCheckout.bind(this);
  }



  componentDidMount(){
    this.props.cartDataFetched();
  }



  //Component Receives cart data
 componentWillReceiveProps(nextProps){
  if(this.props.cartData !== nextProps.cartData){
    //Map through keys
    let cart = Object.keys(nextProps.cartData).map((data) => {
     return nextProps.cartData[data];
    })
    //Assign new state
    this.setState({
      cart: cart,
      isLoaded: true
      });
  }
 }


  onClickRenderCheckout(){
    return (
      <div>
        <Checkout />
      </div>
    )
  }

  onHandleCartItemDelete(itemToRemove){
    const cart = this.state.cart.filter( 
      (item, index) =>  {return item.packageId != itemToRemove.packageId});
      this.setState({cart: cart});
  };


  onCalculateCartTotal(item){
      let sum = 0;
      this.state.cart.map((cartItem) => {
        return sum += (parseInt(cartItem.price) * cartItem.quantity);
      });

      return "$" + sum + ".00";
    }


  render(){
    const { isLoaded, cart, cartTest } = this.state;

      return (
        isLoaded && this.state.cart.length > 0  ?
            <div className="cart-container">
              <div className="cart-wrapper">
                <Col className="cart-breadcrumb-wrapper" s={12}  >
                </Col>                
                <div className="cart-checkout-header-wrapper">
                  <h3 className="cart-checkout-header" >Your Cart</h3>
                </div>
                {this.state.cart.map((cartItem, index) => {
                  return ( 
                    <Cart
                      onCalculateCartTotal={this.onCalculateCartTotal}
                      onHandleCartItemDelete={this.onHandleCartItemDelete}
                      {...cartItem} 
                      key={index} 
                      />
                )
                })}
              </div>
              <div className="cart-summary">
                <div className="summary-header-wrapper">
                  <h4 className="summary-header">Summary</h4>
                </div>
                <div className="summary-price-wrapper">
                  <div className="summary-price-header"><h5>Cart Total:</h5></div>
                  <div className="summary-price-total"><h5>{this.onCalculateCartTotal()}</h5></div>
                </div>
                <div className="button-holder">
                  <Button onClick={this.onClickRenderCheckout} className="red darken-2 cart-checkout-next">
                    <Link 
                    to={'/cart/checkout/info'}
                    exact="true" >
                    PROCEED TO CHECKOUT
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
             :  
            <div>
              <h2>You have no items in your cart</h2>
            </div> 
          )
        }
      }

const mapStateToProps = state => {
  return {
    cartData: state.cartItems.data.cart
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CartWrapper);
