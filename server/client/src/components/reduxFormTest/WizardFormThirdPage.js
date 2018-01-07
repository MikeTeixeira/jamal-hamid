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

  const {handleSubmit, pristine, previousPage, submitting, onSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit} className="wizard-form-wrapper" >
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
            <h1>Fitness Goals</h1>
          <div>
            <label>What are your short term goals?</label>
            <Field name="shortTermGoals" component="textarea" type="textarea" />
          </div>
          <div>
            <label>What are your long term goals? </label>
            <Field name="longTermGoals" component="textarea" type="textarea" />
          </div>
          <div>
            <label>Do you have any upcoming event(s) that you would like to get ready for?</label>
            <label><Field name="hasUpcomingEvent" value="yes" component="input" type="radio" />Yes</label>
            <label><Field name="hasUpcomingEvent" value="yes" component="input" type="radio" />No</label>         
          </div>
          <div>
            <label>If yes, please specify the event(s).</label>
            <Field name="upcomingEvents" type="textarea" component="textarea" />
          </div>
          <h1>Fitness Level</h1>
          <div>
            <label> How much gym experience do you have? </label>
            <Field name="gymExperience" component={renderField} placeholder="Ex: 2 years" />
          </div>
          <div>
            <h3>Current Training Split</h3>
            {trainingSplitExample.map(val => 
            <Field name="trainingSplit" placeholder={val} component={renderField}/> )}
          </div>
          <div>
            <h3>Current Cardio Split</h3>
            {cardioSplitExample.map(val => 
            <Field name="cardioSplit"  placeholder={val} component={renderField} />)}
          </div>
          <div>
            <label>What time of the day do you train?</label>
            <Field name="trainingTimeOfDay" component="input" type="time" />
          </div>
          <div>
            <label>Do you currently play any sports?</label>
            <label><Field name="isCurrentlyPlayingSport" type="radio" value="yes" component="input" />Yes</label>
            <label><Field name="isCurrentlyPlayingSport" type="radio" value="no" component="input" />No</label>          
          </div>
          <div>
            <label>If yes, please specify the sport you play and how often you play.</label>
            <Field name="currentSportPlaying" type="textarea" component="textarea" />
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