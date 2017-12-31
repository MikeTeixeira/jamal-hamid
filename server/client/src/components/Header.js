import React, {Component} from 'react'
import {Link} from 'react-router-dom'
var FontAwesome = require('react-fontawesome');

class Header extends Component  {
  constructor(props){
    super(props);

    this.state = {
      addClass: 'closed' 
    }

    this.onToggle = this.onToggle.bind(this);
  }
  

  onToggle = () => {
    console.log('clicked');
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

  render() {
    return (
      <div>
        <button onClick={this.onToggle} className="hamburger" type="button">
          <span className="hamburger-box">
          <span className="hamburger-inner"></span>
          </span>
        </button>
        <nav className={this.state.addClass} >
          <div onClick={(() => this.setState({addClass: 'closed'}))}>
            <li className="nav_li"><Link className="nav_a" to={'/'}> Home </Link></li>
            <li className="nav_li"><Link className="nav_a" to={'/about'}> About </Link></li>
            <li className="nav_li"><Link className="nav_a" to={'/services'}> Services </Link></li>
            <li className="nav_li"><Link className="nav_a" to={'/testimonials'}> Testimonials </Link></li>
          </div>
          <div className="social_media_wrapper ">
            <a target="_blank" 
            href="https://www.instagram.com/gorillammatechs/"
            >
            <FontAwesome name='instagram'  style={{color: 'black'}} size='2x' />
            </a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
