import React from 'react';
import axios from 'axios';
import PersonalForm from './PersonalForm';
import LifeStyleForm from './LifeStyleForm';

export default class Questionnare extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      renderPersonalForm: true,
      personalForm: {
        firstName: '',
        lastName: '',
        email: '',
        age: null,
        height: null,
        weight: null
      }
    }

    this.handlePersonalFormInput = this.handlePersonalFormInput.bind(this);
    this.handleOnClickPersonalForm = this.handleOnClickPersonalForm.bind(this);
  }

  onChange = (e) => {
    const state = this.state.personalForm;
    state[e.target.name] = e.target.value;
    this.setState(...state);
    console.log(this.state);
  }

  handleOnClickPersonalForm = () => {
    const renderPersonalForm = this.state.renderPersonalForm;
    if(renderPersonalForm){
      this.setState({renderPersonalForm: false})
    } else if(!renderPersonalForm){
      this.setState({renderPersonalForm: true});
    }
  }

  handlePersonalFormInput = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, age, height, weight } = this.state.personalForm;

    if(!firstName || !lastName || !email || !age || !height || !weight){
      alert('Please fill out the indicated fields');
    } else 

    axios.post("/services/package/questionnaire", {
      firstName,
      lastName,
      email,
      age,
      height,
      weight
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
        <form onSubmit={((e) => this.handlePersonalFormInput(e))}>
          {this.state.renderPersonalForm ? 
          <PersonalForm
          handleOnClickPersonalForm={this.handleOnClickPersonalForm}        
          className="form-1"
          value="1"
          onChange={this.onChange}
           />
           : <LifeStyleForm />
          }
        </form>
        <div className="personal-form-detail-wrapper">
          <div className="personal-form-detail__top">
            <h1>Tell Me About Yourself</h1>
          </div>
          <div className="personal-form-detail__bottom">
            <span className="form-1" ref="formSpanOne" value="1">1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>
      </div>
    )
  }
}