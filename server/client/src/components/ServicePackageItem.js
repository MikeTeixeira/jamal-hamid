import React, {Component} from 'react';
import axios from 'axios';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class ServicePackageItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      quantity: 0
    }

    this.onHandleToCart = this.onHandleToCart.bind(this);
    this.onClickHandleQuantity = this.onClickHandleQuantity.bind(this);
  }

    onHandleToCart(e){
      e.preventDefault();

      if(this.state.quantity){

        const { name, price, _id, 
                available, currentlySold, 
                packagesInCart, maxQuantity, 
                cartDataFetched } = this.props;
        const { quantity } = this.state;

        axios.post('/cart/checkout', {
          name, 
          price, 
          _id, 
          quantity,available, currentlySold, packagesInCart, maxQuantity, cartDataFetched })
        .then(function(response){
          console.log({success: response.data });
        }).catch(function(error){
          console.log(error)
        })
      }
    }

    onClickHandleQuantity(){
      return (
        this.setState({
          quantity: this.state.quantity+=1
        })
      )
    }

  render(){

    const { name, price, status, currentlySold, maxQuantity, description, _id } = this.props;
    return (
          <div className="package-wrapper">
            <form id="cartForm" action='/cart/checkout' onSubmit={((e) => this.onHandleToCart(e))} method='post' >
            <div className="package-top">
              <h2 className="package-header">{name}</h2>
              <h3 className="package-price">${price}</h3>
              <input id="quantity" type="hidden" name="quantity" value={this.state.quantity} />
            </div>
            <div className="package-bottom" >
              { currentlySold <= maxQuantity ?
                  <button type='submit' onClick={this.onClickHandleQuantity} className="btn-cta button">Add To Cart</button>
                  : <button disabled={true} className="btn-cta button" >Out of Stock</button> }           
              {/* <Link to="/services/packages/personal-form"><button className="button">Click Me</button></Link> */}
            </div>
            </form>
          </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { cart: state}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, actions)(ServicePackageItem);