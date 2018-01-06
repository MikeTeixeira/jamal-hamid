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

const heightOptions = ([
  "4'10","4'11","5'0","5'1","5'2","5'3","5'4","5'5","5'6",
  "5'7","5'8","5'9","5'10","5'11","6'0","6'1","6'2","6'3",
  "6'4","6'5","6'6","6'7","6'8","6'9",
]);

const renderHeightSelector = ({
  input,
  meta: {
    touched,
    error
  }
}) => (
  <div>
    <select {...input}>
      <option value="">Your Height</option>
      {heightOptions.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)

const WizardFormFirstPage = (props) => {
  const {handleSubmit} = props

  return (
    <form className="personal-form-wrapper" onSubmit={handleSubmit}>
      <h1>Personal Questions</h1>
      <Field name="firstName" type="text" component={renderField} label="First Name"/>
      <Field name="lastName" type="text" component={renderField} label="Last Name"/>
      <Field name="email" type="email" component={renderField} label="Email" />
      <div>
        <label><Field name="sex" component="input" type="radio" value="male"/>
          Male</label>
        <label><Field name="sex" component="input" type="radio" value="female"/>
          Female</label>
        <Field name="sex" component={renderError}/>
        </div>
      <div>
      <Field name="age" type="number" component={renderField} label="Age" />
      <Field name="height" component={renderHeightSelector} />
      <Field name="weight" type="number" component={renderField} label="Weight" />
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