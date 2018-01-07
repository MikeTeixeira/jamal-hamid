import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import {renderField, renderRadioSelect} from './renderField'

const renderError = ({
  meta: {
    touched,
    error
  }
}) => touched && error
  ? <span>{error}</span>
  : false

const WizardFormSecondPage = (props) => {
  const {handleSubmit, previousPage} = props
  return (
    <div>
      <form className="wizard-form-wrapper" onSubmit={handleSubmit}>
        <h1>Lifestyle Questions</h1>
        <label>Do you smoke? </label>
        {renderRadioSelect("smoke")}
        <label>Do you drink alcohol? </label>
        {renderRadioSelect("alochol")}
        <label>Describe your job: </label>
        <div>
          <label><Field name="jobDescription" component="input" type="radio" value="sedentary" />Sedentary</label>
          <label><Field name="jobDescription" component="input" type="radio" value="active" />Active</label>
          <label><Field name="jobDescription" component="input" type="radio" value="physicallyDemanding" />Physically Demanding</label>
        </div>
        <label>Does your job require you to travel? </label>
        {renderRadioSelect("jobTravel")}
        <label>Is anyone in your family overweight? </label>
        {renderRadioSelect("familyOverweight")}
        <label>If yes then who? </label>
        <Field name="familyOverweightMember" component={renderField} value="OverweightFamilyMember" />
        <div>
          <button type="button" className="previous" onClick={previousPage}>Previous</button>
          <button type="submit" className="next">Next</button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'questionnaire', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormSecondPage)