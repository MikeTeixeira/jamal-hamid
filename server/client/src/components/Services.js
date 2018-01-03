import React from 'react';
import {Link} from 'react-router-dom';

export default class Services extends React.Component {


  render () {
    return (
      <div>
        <div>
          <h1>Package One</h1>
          <h3>$150.00</h3>
          <button><Link to={"/services/packages/personal-form"}>Click Me</Link></button>
        </div>
        <div>
          <h1>Package Two</h1>
          <h3>$225.00</h3>
          <button><Link to={'/services/packages/personal-form'}>Click me</Link></button>
        </div>
        <div>
          <h1>Package Three</h1>
          <h3>$275.00</h3>
          <button><Link to={'/services/packages/personal-form'}>Click Me</Link></button>
        </div>

      </div>
    )
  }
}