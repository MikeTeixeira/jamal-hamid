import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import validate from './validate';
import {renderField, renderRadioSelect} from './renderField';
import axios from 'axios';

class WizardFormFifthPage extends Component {
  constructor(props){
    super(props);

  }


  handleSubmit = (e) => {

    const firstName = e.firstName;
    const lastName = e.lastName;
    const email = e.email;
    console.log(e);

      axios.post("/services/package/questionnaire", {
      firstName,
      lastName,
      email
    }).then(function(response) {
      console.log({success: response.status})
      alert("success")
    }).catch(function(error) {
      alert('error')
      console.log(error);
    })
  }

  render(){

    const {handleSubmit, previousPage, pristine, submitting } = this.props;

    return(
      <form className="wizard-form-wrapper" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
        <h1>Nutrition Questions</h1>
        {renderRadioSelect("hasTrackedMacros","Do you or have you ever tracked your calories/macronutrients?")}
        <div>
          {renderRadioSelect("knowsCurrentMacros", "Do you currently know your daily caloric intake?")}
          <label>If yes, please explain: </label>
          <Field
            name="currentMacros" 
            component="textarea" 
            type="textarea" 
            placeholder="Ex: 2500 calories, 150 protein, 290 carbohydrates, 71 fat"
          />
        </div>
        <div>
          {renderRadioSelect("isCurrentlyTakingSupplements", "Are you currently taking any supplements?")}
          <label>If yes, please list the supplements: </label>
          <Field 
            name="currentSupplementsTaking" 
            component="textarea" 
            type="textarea"
            placeholder="Fish oil, whey protein, multi-vitamins, creatine, flax-seed, mass-gainer, etc..." /> 
        </div> 
        <div>
          {renderRadioSelect("isAllergic", "Are you allergic to any particular foods?")}
          <Field 
            name="isAllergicTo" 
            component="textarea" 
            type="textarea"
            placeholder="Ex: Dairy..." 
          /> 
        </div>  
        <div>
          <button type="button" onClick={previousPage} className="previous">Previous</button>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'questionnaire',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(WizardFormFifthPage);