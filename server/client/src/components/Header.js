import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div>
        <Link to={'/'}>Home </Link>
        <Link to={'/about'}>About </Link>
        <Link to={'/services'}> Services </Link>
        <Link to={'/testimonials'}> Testimonials </Link>
        <div className="social_media_wrapper ">
          <a target="_blank" href="https://www.instagram.com/gorillammatechs/">Instagram</a>
        </div>
      </div>
    </nav>
  )
}

export default Header
