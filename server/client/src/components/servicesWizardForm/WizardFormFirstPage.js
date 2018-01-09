import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import {renderField} from './renderField'


const renderError = ({
  meta: {
    touched,
    error
  }
}) => touched && error
  ? <span>{error}</span>
  : false

const heightOptions = ([
  "4'10","4'11","5'0","5'1","5'2","5'3","5'4","5'5","5'6",
  "5'7","5'8","5'9","5'10","5'11","6'0","6'1","6'2","6'3",
  "6'4","6'5","6'6","6'7","6'8","6'9",
]);

const genderOptions = (["Male", "Female"]);

const renderGenderSelector = ({
  input,
  meta: {
    touched,
    error
  }
}) => (
  <div>
    {touched && error && <span className="heightError">{error}</span>}
    <select {...input}>
      <option value="">Your Gender</option>
      {genderOptions.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
  </div>
)

const renderHeightSelector = ({
  input,
  meta: {
    touched,
    error
  }
}) => (
  <div>
    {touched && error && <span className="heightError">{error}</span>}
    <select {...input}>
      <option value="">Your Height</option>
      {heightOptions.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
  </div>
)

const WizardFormFirstPage = (props) => {
  const {handleSubmit, nextPage} = props

  return (
    <form className="wizard-form-wrapper" onSubmit={handleSubmit}>
      <h1>Personal Questions</h1>
      <div className="firstNameInput">
        <Field className="wizardInputField" placeholder="First Name" name="firstName" type="text" component={renderField} />        
      </div>
      <div className="lastNameInput">
        <Field className="wizardInputField" placeholder="Last Name" name="lastName" type="text" component={renderField} />        
      </div>
      <div className="emailInput" >
        <Field className="wizardInputField emailField" placeholder="Email" name="email" type="email" component={renderField} />        
      </div>
      <div className="genderInput">
        <Field name="wizardInputField" placeholder="Your Gender" name="gender" component={renderGenderSelector} />
      </div>
      <div>
        <Field className="wizardInputField ageInput" placeholder="Your age" name="age" type="number" component={renderField} />
      </div>
      <div className="heightInput">
        <Field className="wizardInputField heightField" placeholder="Your height"  name="height" component={renderHeightSelector} />        
      </div>
      <div className="weightInput">
        <Field className="wizardInputField" placeholder="Your weight" name="weight" type={renderField} component={renderField} label="Weight" />        
      </div>
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'questionnaire', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormFirstPage)