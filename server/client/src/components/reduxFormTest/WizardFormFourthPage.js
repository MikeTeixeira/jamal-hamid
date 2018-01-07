import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

class WizardFormFourthPage extends Component {


  render(){

    const {handleSubmit, previousPage } = this.props;

    return(
      <div>
        <form className="wizard-form-wrapper" onSubmit={handleSubmit}>
          <h1>Injuries</h1>
          <div>
            <label></label>
          </div>
          <div>
            <button type="button"  onClick={previousPage}  className="previous" >Previous</button>
            <button type="submit" className="next">Next</button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'questionnaire',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(WizardFormFourthPage);