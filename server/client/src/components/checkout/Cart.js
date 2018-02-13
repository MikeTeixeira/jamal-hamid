import React, {Component} from 'react';
import { Button, Col, Row } from 'react-materialize';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {bindActionCreators} from 'redux';

class Cart extends Component {
  constructor(props){
    super(props);


    this.state = {
      quantity: props.quantity,
      cart: []
    }

    this.onItemQuantityChange = this.onItemQuantityChange.bind(this);
    this.onRemoveCartItem = this.onRemoveCartItem.bind(this);
  }

  onItemQuantityChange(value){  
    const quantity = parseInt(value);
    const { name, price, packageId, onCalculateCartTotal } = this.props;
    const updatedCart = {name, price, packageId, quantity};
    onCalculateCartTotal(updatedCart);
    axios.put('/cart/checkout', updatedCart).then(function(response){
      console.log({messsage: "Successfully updated user cart", data: response});
    }).catch(function(error){
      console.log(error);
    })
  }

  onRemoveCartItem(e){
    const { name, price, packageId, quantity, onHandleCartItemDelete} = this.props;
    const itemToRemove = {name, price, packageId, quantity};
    onHandleCartItemDelete(itemToRemove);
    axios.delete('/cart/checkout',{data: {itemToRemove}}).then(function(response){
      console.log({message: "Succesffuly removed from cart", data: response});
    }).catch(function(error){
      console.log(error);
    })
  }

  render(){

    const { name, price, quantity, packageId } = this.props;

    return(
      <div className="cart-table">
        <div>
          <Row className="cart-product-header" s={12} >
            <Col s={3} >Product</Col>
            <Col s={2} >Name</Col>
            <Col s={2} >Quantity</Col>
            <Col s={2} >Price</Col>             
          </Row>
          <Row className="cart-product-details" >
            <Col s={3}>
              <h5>Package Image</h5>
              <input type="hidden" name="packageId" value={packageId} />
            </Col>
            <Col s={2}>
              <input type="hidden" name="name" value={name} />
              <p><strong>{name.toUpperCase()}</strong></p>
            </Col>
            <Col s={2}>
              <input 
                style={{width: '30px', textAlign: 'center'}} 
                onChange={((e) => this.onItemQuantityChange(e.target.value))} 
                type="number" 
                name="quantity" 
                defaultValue={quantity} />
            </Col>
            <Col s={2}>
              <p>${price}</p>
              <input type="hidden" name="price" value={price} />
            </Col>
            <Col s={3}>
              <Button onClick={((e) => this.onRemoveCartItem(e))} >Remove</Button>
            </Col>
          </Row>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cartItems.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

