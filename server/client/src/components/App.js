import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';
import { connect } from 'react-redux';
import {AnimatedSwitch, spring} from 'react-router-transition';
import Header from './Header';
import Home from './Home'
import About from './About'
import Services from './Services'
import Testimonials from './Testimonials'
import Questionnare from './services/Questionnare';
import WizardForm from './servicesWizardForm/WizardForm';
import CartWrapper from './checkout/CartWrapper';
import Checkout from './checkout/Checkout';
import BottomFooter from './BottomFooter';

class App extends Component {

  componentDidMount(){
    this.props.cartDataFetched();
  }


  render () {

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1,
  },

  atLeave: {
    opacity: bounce(0),
    scale: bounce(.9),
  },

  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <AnimatedSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
              mapStyles={mapStyles}
              className="switch-wrapper"
            >
              <Route exact={true} path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route exact={true} path='/services' component={Services} />
              <Route path='/testimonials' component={Testimonials} />
              <Route exact={true} path='/services/packages/:id' component={Questionnare}/>
              <Route path='/services/packages/1/testing' component={WizardForm} />
              <Route path='/cart' exact={true} component={CartWrapper} />
              <Route path='/cart/checkout/info' exact={true} component={Checkout} />
            </AnimatedSwitch>
          </div>
        </BrowserRouter>
        <BottomFooter />
      </div>
    )
  }
}

export default connect(null, actions)(App);
