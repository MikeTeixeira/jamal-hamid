import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import {renderField, renderTextField, renderSelectHeightField} from './renderField';
import {Row, Input} from 'react-materialize';
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
      <Row>
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
          <Row>
            <Field className="col s3" component={renderSelectHeightField} label="Your Height" name="height">
            </Field>           
          </Row>
          <Row>
            <Field  placeholder="Your Gender" name="sex" component={renderGenderSelector} />
            {/* <Field  placeholder="Your Height" name="height" component={renderHeightSelector} /> */}
            <div className="input-field col s3">
              <Input type="number" label="Your Age">
                <Field  placeholder="Your Age" name="age" component={renderField} />
              </Input>
            </div>
            <div className="input-field col s3"> 
              <Input  type='text' label="Your Weight">
                <Field id="weight" name="weight" component={renderField} />            
              </Input>
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