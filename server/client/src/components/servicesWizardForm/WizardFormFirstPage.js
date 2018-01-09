import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import {renderField} from './renderField';
import {Input} from 'react-materialize';


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

const genderOptions = (["Default","Male", "Female"]);

const renderGenderSelector = ({
  input,
  meta: {
    touched,
    error
  }
}) => (
  <div className="input-field col s3" >
    {touched && error && <span>{error}</span>}
    <Input {...input} s={12} type='select' label="Your Gender">
      {genderOptions.map(val => <option value={val} key={val}>{val}</option>)}
    </Input> 
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
      <option value="height">Your Height</option>
      {heightOptions.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
  </div>
)

const WizardFormFirstPage = (props) => {
  const {handleSubmit, nextPage} = props

  return (
    <div className="row" >
      <form className="col s12" onSubmit={handleSubmit}>
        <h1>Personal Questions</h1>
        <div className="row" >
          <div className="input-field col s6">
            <Field className="validate" id="first_name" placeholder="First Name" name="firstName" type="text" component={renderField} />       
          </div>
          <div className="input-field col s6">
            <Field className="validate" placeholder="Last Name" name="lastName" type="text" component={renderField} />       
          </div>
        </div>
        <div className="row" >
          <div className="input-field col s12" >
            <Field className="validate" placeholder="Email" name="email" type="email" component={renderField} />        
          </div>
        </div>
        <div className="row">
          <Field className="validate" placeholder="Your Gender" name="gender" component={renderGenderSelector} />  
        </div>       
        {/* <div className="row" >
          <div className="input-field col s12" >
            <Field name="gender" type="radio" component={renderGenderSelector} />
          </div>
        </div> */}
          {/* <div>
            <Field className="wizardInputField ageInput" placeholder="Your age" name="age" type="number" component={renderField} />
          </div>
          <div className="heightInput">
            <Field className="wizardInputField heightField" placeholder="Your height"  name="height" component={renderHeightSelector} />        
          </div>
          <div className="weightInput">
            <Field className="wizardInputField" placeholder="Your weight" name="weight" type={renderField} component={renderField} label="Weight" />        
          </div> */}
        <div>
          <button type="submit" className="next">Next</button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'questionnaire', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormFirstPage)