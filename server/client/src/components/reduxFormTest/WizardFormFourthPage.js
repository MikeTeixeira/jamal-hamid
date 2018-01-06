import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';


const WizardFormFourthPage = (props) => {
  const {handleSubmit, previousPage } = props;

  return(
    <div>
      <form className="personal-form-wrapper">



      <div>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" className="next">Next</button>
      </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'questionnaire', //Form name is the same
  destroyOnUnmount: false, //preserves form data
  forceUnregisterOnUnmount: true //unregister fields on unmount
})(WizardFormFourthPage);