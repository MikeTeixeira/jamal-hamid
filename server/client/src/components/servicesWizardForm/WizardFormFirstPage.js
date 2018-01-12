import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import {renderField, renderTextField, renderSelectHeightField, renderSelectGenderField} from './renderField';
import {Row, Col, Input} from 'react-materialize';
import MenuItem from 'material-ui/MenuItem';




const renderError = ({
  meta: {
    touched,
    error
  }
}) => touched && error
  ? <span>{error}</span>
  : false


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
    <Input {...input} type='select' label="Your Gender">
      {genderOptions.map(val => <option value={val} key={val}>{val}</option>)}
    </Input> 
  </div>
)

const WizardFormFirstPage = (props) => {
  const {handleSubmit, nextPage} = props

  return (
    <div className="wizardFormOne">
      <Row className="col s12" >
        <form className="col s12" onSubmit={handleSubmit}>
          <h1>Personal Questions</h1>
          <Row>
            <Row className="col s6">
              <Field className="col s6" label="First Name:" name="firstName" component={renderTextField} />
            </Row>
            <Row className="col s6">
                <Field label="Last Name:" className="col s6" name="lastName"  component={renderTextField} />
            </Row>                 
          </Row>
          <Row className="col s12" >
            <Field className="col s12" label="Email Address: " name="email" type="email" component={renderTextField} />       
          </Row>
          <Row className="col s12 wizardFormOneBottomRow" >
            <div className="col s3 testing">
              <Field className="heightField" label="Your Height" name="height" component={renderSelectHeightField} /> 
            </div>
            <div className="col s3 testing ">
              <Field className="genderField" label="Your Gender" name="sex" component={renderSelectGenderField} />
            </div>
            <div className="col s3 testing ">
              <Field  className="ageField" label="Your Age" name="age" component={renderTextField} />          
            </div>
            <div className="col s3 testing">
              <Field className="col s3" label="Your Weight" name="weight"  component={renderTextField} />
            </div>
          </Row>      
          <div>
            <button type="submit" className="next">Next</button>
          </div>
        </form>
      </Row>
    </div>
  )
}

export default reduxForm({
  form: 'questionnaire', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)