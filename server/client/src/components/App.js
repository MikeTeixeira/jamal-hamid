import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Services from './Services'
import Testimonials from './Testimonials'
import Questionnare from './services/Questionnare';
import WizardForm from './servicesWizardForm/WizardForm';
import Cart from './checkout/Cart';
import CartWrapper from './checkout/CartWrapper';
import BottomFooter from './BottomFooter';

class App extends Component {

  render () {

    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route exact={true} path='/services' component={Services} />
            <Route path='/testimonials' component={Testimonials} />
            <Route exact={true} path='/services/packages/:id' component={Questionnare}/>
            <Route path='/services/packages/1/testing' component={WizardForm} />
            <Route path='/cart' exact={true} component={CartWrapper} />
          </div>
        </BrowserRouter>
        <BottomFooter />
      </div>
    )
  }
}

export default App
