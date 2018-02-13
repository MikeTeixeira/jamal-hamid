import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';
import * as actions from '../actions';
import { SideNav, SideNavItem, Button } from 'react-materialize';

class Header extends Component  {
  constructor(props) {
    super(props);


    this.state = {
      cart: []
    }
  }


  render() {

    const email = 'jamalhamid558@gmail.com';

    return (
      <div className="header-container">
        <div className="header-test" >
          <div className="contact_wrapper ">
            <div className="contact_info">
              <a href="/contact">
                <FontAwesome className="envelope" name='envelope' style={{color: 'white'}} size='2x'/>
                <p className="contact_email__p">{email}</p>
              </a>
              <a className="social_media__a"  target="_blank" href="https://www.instagram.com/gorillammatechs/">
                <FontAwesome className="social-icon" name='instagram'  style={{color: 'white'}} size='2x' />
              </a>
              <a className="social_media__a" target="_blank" href="http://www.twitter.com">
                <FontAwesome className="social-icon" name='twitter' style={{color: 'white'}} size='2x' />
              </a>
              <a className="social_media__a" target="_blank" href="http://www.facebook.com/">
                <FontAwesome className="social-icon" name='facebook' style={{color: 'white'}} size='2x' />
              </a>
            </div>
          </div>
          <div className="nav">
            <div className="nav_content">
              <div className="logo_wrapper">
                <h1 className="logo">Jamal Hamid</h1>
              </div>
              <div className="nav-link-wrapper">
                <li className="nav_li"><Link className="nav_a" to={'/'}> Home </Link></li>
                <li className="nav_li"><Link className="nav_a" to={'/about'}> About </Link></li>
                <li className="nav_li"><Link className="nav_a" to={'/services'}> Services </Link></li>
                <li className="nav_li"><Link className="nav_a" to={'/testimonials'}> Testimonials </Link></li>
                <div className="cart-header-wrapper">
                    <Link to="/cart"><FontAwesome className="cartIcon-header" style={{color: "black"}} name="shopping-cart" size='2x' /></Link>
                    {this.state.cart.length > 0 ? <span className="cart-totalItems">({this.state.cart.length})</span> : undefined}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {cart: state.cartItems.data.cart}
}

export default connect(mapStateToProps)(Header);
