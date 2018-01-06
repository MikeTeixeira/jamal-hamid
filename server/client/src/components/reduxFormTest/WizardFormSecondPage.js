import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import renderField from './renderField'

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
      <form className="personal-form-wrapper" onSubmit={handleSubmit}>
        <h1>Lifestyle Questions</h1>
        <label>Do you smoke? </label>
        <div>
          <label><Field name="smoke" component="input" type="radio" value="yes" />Yes</label>
          <label><Field name="smoke" component="input" type="radio" value="no" />No</label>
        </div>
        <label>Do you drink alcohol? </label>
        <div>
          <label><Field name="alcohol" component="input" type="radio" value="yes" />Yes</label>
          <label><Field name="alcohol" component="input" type="radio" value="no" />No</label>
        </div>
        <label>Describe Your Job: </label>
        <div>
          <label><Field name="jobDescription" component="input" type="radio" value="sedentary" />Sedentary</label>
          <label><Field name="jobDescription" component="input" type="radio" value="active" />Active</label>
          <label><Field name="jobDescription" component="input" type="radio" value="physicallyDemanding" />Physically Demanding</label>
        </div>
        <label>Does your job require you to travel? </label>
        <div>
          <label><Field name="jobTravel" component="input" type="radio" value="yes" />Yes</label>
          <label><Field name="jobTravel" component="input" type="radio" value="no" />No</label>
        </div>
        <label>Is anyone in your family overweight? </label>
        <div>
          <label><Field name="familyOverweight" component="input" type="radio" value="yes"/>Yes</label>
          <label><Field name="familyOverweight" component="input" type="radio" value="no"/>No</label>    
        </div>
        <label>If yes then who? </label>
        <Field name="familyOverweightMember" component={renderField} value="OverweightFamilyMember" />
        <div>
          <label>Sex</label>
          <div>
            <label><Field name="sex" component="input" type="radio" value="male"/>
              Male</label>
            <label><Field name="sex" component="input" type="radio" value="female"/>
              Female</label>
            <Field name="sex" component={renderError}/>
          </div>
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
  form: 'questionnaire', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormSecondPage)