import React,{Component} from 'react';
import {Row, Col} from 'react-materialize';
import validate from './validate';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {renderField} from '../servicesWizardForm/renderField';
import * as actions from '../../actions';
import {bindActionCreators} from 'redux';

class CheckoutForm extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <h2>Billing Details</h2>
        <form action="">
          <Row s={10} >
            <Col s={5}>
              <Field 
                name="firstName" 
                label="First Name:"
                component={renderField} 
              />
            </Col>
            <Col s={5} >
              <Field
                name="lastName"
                label="Last Name:"
                component={renderField} 
              />
            </Col>
          </Row>
          <Row s={10}>
            <Col s={10} >
              <Field
                name="email"
                label="Email Address:"
                component={renderField}
              />
            </Col>
          </Row>
          <Row s={10} >
            <Col s={5} >
              <Field
                name="address"
                label="Address:"
                component={renderField}
              />
            </Col>
            <Col s={5} >
              <Field
                name="townOrCity"
                label="Town or City:"
                component={renderField}
              />
            </Col>
          </Row>
          <Row s={10}>
            <Col s={5}>
              <Field
                name="zipcode"
                label="Zipcode:"
                component={renderField}
              />
            </Col>
            <Col s={5}>
              <Field
                name="state"
                label="State:"
                component={renderField}
              />
            </Col>
          </Row>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'checkout',
  destroyOnUnmouont: false,
  forceUnregisterOnUnmount: true,
})(CheckoutForm);