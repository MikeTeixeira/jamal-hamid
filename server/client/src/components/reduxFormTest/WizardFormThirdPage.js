import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate';
import renderField from './renderField';
import axios from 'axios';


class WizardFormThirdPage extends React.Component {
  constructor(props){
    super(props);

    // this.handleSubmit = this.handleSubmit.bind(this);
  }


  // handleSubmit = (e) => {

  //   const firstName = e.firstName;
  //   const lastName = e.lastName;
  //   const email = e.email;
  //   console.log(e);

  //     axios.post("/services/package/questionnaire", {
  //     firstName,
  //     lastName,
  //     email
  //   }).then(function(response) {
  //     console.log({success: response.status})
  //     alert("success")
  //   }).catch(function(error) {
  //     alert('error')
  //     console.log(error);
  //   })
  // }

  // onSubmit={handleSubmit(this.handleSubmit.bind(this)


  render(){
  const {handleSubmit, pristine, previousPage, submitting, onSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit} className="personal-form-wrapper" >
          <h1>Fitness History</h1>
          <label>Have you been consistently exercising? </label>
          <div>
            <label><Field name="consistentlyExercising" component="input" type="radio" value="yes" />Yes</label>
            <label><Field name="consistentlyExercising" component="input" type="radio" value="No" />No</label>            
          </div>
          <div>
          <label>If so for how long? </label>
            <Field placeholder="3 weeks..." name="exerciseConsistency" component={renderField} />
          </div>
          <div>
            <label>When did you first start thinking about getting in shape? </label>
            <Field placeholder="A few days ago" component={renderField} name="inShapeTimePeriod" />
          </div>
          <div>
            <label>Have you play sports growing up?</label>
            <label><Field name="sportsGrowingUp" component="input" type="radio" value="yes" />Yes</label>
            <label><Field name="sportsGrowingUp" component="input" type="radio" value="no" />No</label>            
          </div>
          <div>
            <label>On a scale of 1-10, how would you rate your current fitness level?</label>
            <Field maxLength="2" size="2" name="fitnessLevelScale" component={renderField} />
          </div>
          <div>
            <button type="button" className="previous" onClick={previousPage}>Previous</button>
            <button type="submit" className="next">Next</button>
            {/* <button type="submit" disabled={pristine || submitting}>Submit</button> */}
          </div>
        </form>
      </div>
    )
  }
}
export default reduxForm({
  form: 'questionnaire', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormThirdPage)