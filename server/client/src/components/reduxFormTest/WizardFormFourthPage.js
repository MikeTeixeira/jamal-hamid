import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';


const trainingSplitExample = [
  "Ex: Legs", "Ex: Off", 
  "Ex: Back", "Ex: Off", 
  "Ex: Chest", "Ex: Off", 
  "Ex: Arms/Shoulders"
];

const cardioSplitExample = [
  "Ex: Off", "Ex: 20min SSC",
  "Ex: Off", "Ex: 10min HIIT",
  "Ex: Off", "Ex: 20min SSC",
  "Ex: Off"
];

const WizardFormFourthPage = (props) => {
  const {handleSubmit, previousPage } = props;

  return(
    <div>
      <form className="personal-form-wrapper">
      <h1>Fitness Level</h1>
      <div>
        <h3>Current Training Split</h3>
        {trainingSplitExample.map(val => 
        <Field name="trainingSplit" placeholder={val} component={renderField}/> )}
      </div>
      <div>
        <h3>Current Cardio Split</h3>
        {cardioSplitExample.map(val => 
        <Field name="cardioSplit" placeholder={val} component={renderField} />)}
      </div>
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