import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
var FontAwesome = require('react-fontawesome');

class Header extends Component  {
  constructor(props){
    super(props);

    this.state = {
      addClass: 'closed' 
    }

    this.onToggle = this.onToggle.bind(this);
    this.handleHasItemsInCart = this.handleHasItemsInCart.bind(this);
  }
  

  onToggle = () => {
    if(this.state.addClass === 'closed'){
      this.setState({
        addClass: 'open'
      })
    } else {
      this.setState({
        addClass: 'closed'
      })
    }
  }

  handleHasItemsInCart(){

  }

  render() {

    const email = 'jamalhamid558@gmail.com';

    console.log(this.props.cartTotal.length);

    const { cartTotal } = this.props; 

    return (
      <div>
        <button onClick={this.onToggle} className="hamburger" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
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
        <nav className="nav">
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
                  { cartTotal ? <span className="cart-totalItems">({cartTotal.length})</span> : "" }
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return { cartTotal: state.cart }
}

export default connect(mapStateToProps)(Header);
