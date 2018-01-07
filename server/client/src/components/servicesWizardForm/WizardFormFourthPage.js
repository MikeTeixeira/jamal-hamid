import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import validate from './validate';
import {renderField, renderRadioSelect} from './renderField';

class WizardFormFourthPage extends Component {
  render(){

    const {handleSubmit, previousPage } = this.props;

    return(
      <div>
        <form className="wizard-form-wrapper" onSubmit={handleSubmit}>
          <h1>Injuries</h1>
            {renderRadioSelect("treatedForAthleticInjury","Have you ever been treated for an athletic injury?")}
          <div>
            <label>If yes, please explain: </label>
            <Field name="athleticInjuryTreatedFor" component="textarea" type="textarea" />
          </div>
            {renderRadioSelect("currentlyInjured","Do you currently have any injuries?")}                        
          <div>
            <label>If yes, please explain: </label>
            <Field name="currentInjury" component="textarea" type="textarea" />          
          </div>
            {renderRadioSelect
              ("diagnosedIllnessOrDisease",
              "Have you ever been diagnosed with a medical illness or disease?"
            )}
          <div>
            <button type="button"  onClick={previousPage}  className="previous">Previous</button>
            <button type="submit" className="next">Next</button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'questionnaire',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(WizardFormFourthPage);