import React from 'react';
import PersonalForm from './PersonalForm';
import axios from 'axios';

export default class Questionnare extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      age: null,
      weight: null,
      height: null
    }

    this.handlePersonalFormInput = this.handlePersonalFormInput.bind(this);
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handlePersonalFormInput = (e) => {
    e.preventDefault();

    // const firstName = e.target.elements["firstName"].value;
    // const lastName = e.target.elements["lastName"].value;
    // const email = e.target.elements["email"].value;
    // const age = e.target.elements["age"].value;
    // const height = e.target.elements["height"].value;
    // const weight = e.target.elements["weight"].value;

    const { firstName, lastName, email, age, height, weight } = this.state;

    if(!firstName || !lastName || !email || !age || !height || !weight){
      alert('Please fill out the indicated fields');
    } else 

    axios.post("/services/package/questionnaire", {
      firstName,
      lastName,
      email
    }).then(function(response) {
      console.log({success: response.status})
      console.log(firstName);
      alert("success")
    }).catch(function(error) {
      alert('error')
      console.log(error);
    })
   }

  render() { 
    return (
      <div className="form-wrapper">
        {/* <PersonalForm handlePersonalFormInput={this.handlePersonalFormInput} /> */}
        <form onSubmit={((e) => this.handlePersonalFormInput(e))}>
        <h1>Personal Information</h1>
          <label className="personal_info__label" htmlFor="firstName">First Name: </label>
          <input onChange={this.onChange} className="personal-info__input" name="firstName" type="text"/>

          <label className="personal_info__label" htmlFor="lastName">Last Name: </label>
          <input onChange={this.onChange} className="personal-info__input" name="lastName" type="text"/>

          <label className="personal_info__label" htmlFor="email">Email Address: </label>
          <input onChange={this.onChange} className="personal-info__input" name="email" type="email"/>

          <label className="personal_info__label" htmlFor="age">Age: </label>
          <input onChange={this.onChange} className="personal-info__input" name="age" type="number" maxLength="2"/>

          <label className="personal_info__label" htmlFor="height" maxLength="3"> Height: </label>
          <input onChange={this.onChange} className="personal-info__input" name="height" type="number"/>

          <label className="personal_info__label" htmlFor="weight">Weight: </label>
          <input onChange={this.onChange} className="personal-info__input" name="weight" type="number" maxLength={3}/>
          <button type="submit">Next</button>
        </form>
      </div>
    )
  }
}