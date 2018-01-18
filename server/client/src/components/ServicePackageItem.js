import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class ServicePackageItem extends Component {
  constructor(props){
    super(props);

    this.handleToCart = this.handleToCart.bind(this);
  }

  // shouldComponentUpdate(nextProps){
  //   return (this.props.addToCart !== nextProps.payload);
  // }

  handleToCart(event){
    const { handleAddToCart, name, price, quantity, status } = this.props;

    while(status && quantity > 0){
      const userCart = {
        name,
        price,
        quantity 
      }
    return handleAddToCart(userCart);
    }
  }

  render(){

    const { name, price, status, quantity, description, handleAddToCart, _id } = this.props;


    return (
          <div className="package-wrapper">
            <div className="package-top">
              <h2 className="package-header">{name}</h2>
              <h3 className="package-price">${price}</h3>
            </div>
            <div className="package-bottom" >
              <button onClick={((e) => this.handleToCart(e))} className="btn-cta button" >Add To Cart</button>
              {/* <Link to="/services/packages/personal-form"><button className="button">Click Me</button></Link> */}
            </div>
          </div>
    )
  }
}