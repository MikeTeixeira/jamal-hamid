import React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate';
import axios from 'axios';


const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Indigo',
  'Violet'
]

const renderColorSelector = ({
  input,
  meta: {
    touched,
    error
  }
}) => (
  <div>
    <select {...input}>
      <option value="">Select a color...</option>
      {colors.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
)


class WizardFormThirdPage extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit = (e) => {

    const firstName = e.firstName;
    const lastName = e.lastName;
    const email = e.email;

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
  const {handleSubmit, pristine, previousPage, submitting, onSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
        <div>
          <label>Favorite Color</label>
          <Field name="favoriteColor" component={renderColorSelector}/>
        </div>
        <div>
          <label htmlFor="employed">Employed</label>
          <div>
            <Field name="employed" id="employed" component="input" type="checkbox"/>
          </div>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <Field name="notes" component="textarea" placeholder="Notes"/>
          </div>
        </div>
        <div>
          <button type="button" className="previous" onClick={previousPage}>Previous</button>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </div>
      </form>
    )
  }
}
export default reduxForm({
  form: 'questionnaire', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormThirdPage)