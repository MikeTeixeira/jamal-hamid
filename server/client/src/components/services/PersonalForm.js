import React, {Component} from 'react';

export default class PersonalForm extends Component {
  render(){
    const { onChange, handleOnClickPersonalForm } = this.props;
    return (
      <div value="1" id="personal-form" className="personal-form-wrapper">
      <h1>Personal Information</h1>          
        <input autoFocus="true" placeholder="First Name" onChange={((e) => onChange(e))} className="personal-info__input firstName-input" name="firstName" type="text"/>
        <input placeholder="Last Name" onChange={((e) => onChange(e))} className="personal-info__input lastName-input" name="lastName" type="text"/>
        <input placeholder="Email Address" onChange={((e) => onChange(e))} className="personal-info__input email-input" name="email" type="email"/>
        <input placeholder="Age"  onChange={((e) => onChange(e))} className="personal-info__input" name="age" type="number"/>
        <input placeholder="Height" onChange={((e) => onChange(e))} maxLength="3" className="personal-info__input" name="height" type="text"/>
        <label className="personal_info__label weight-label" htmlFor="weight">Weight: </label>
        <input placeholder="Weight" onChange={((e) => onChange(e))} className="personal-info__input" name="weight" type="text" maxLength="3"/>
        <button type="submit">Next</button>
      </div>
    )
  }
}