import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class ServicePackageItem extends Component {
  constructor(props){
    super(props);

    this.handleToCart = this.handleToCart.bind(this);
    this.onHandleToCart = this.onHandleToCart.bind(this);
  }


  handleToCart(e){
    const { handleAddToCart, name, price, quantity, status, _id } = this.props;

    if(status && quantity > 0){


      const userCart = {name,price,quantity,_id};
        return handleAddToCart(userCart);
      }
    }

    onHandleToCart(e){
      e.preventDefault();

      const { name, price } = this.props;

      axios.post('/cart/checkout', {name, price}).then(function(response){
        console.log({success: response.data })
      }).catch(function(error){
        console.log(error)
      })
    }

  render(){

    const { name, price, status, quantity, description, handleAddToCart, _id } = this.props;

    return (
          <div className="package-wrapper">
            <form method='post' action='/cart/checkout' onSubmit={((e) => this.onHandleToCart(e))} >
            <input type="hidden" name={name} />
            <div className="package-top">
              <h2 className="package-header">{name}</h2>
              <h3 className="package-price">${price}</h3>
              <input type="hidden" name={price} />
            </div>
            <div className="package-bottom" >
                <button type='submit' className="btn-cta button">Add To Cart</button>           
              {/* <Link to="/services/packages/personal-form"><button className="button">Click Me</button></Link> */}
            </div>
            </form>
          </div>
    )
  }
}