import React from 'react';
import axios from 'axios';
import WizardForm from '../reduxFormTest/WizardForm';

export default class Questionnare extends React.Component {

  render() { 
    console.log(this.props);
    return (
      <div className="form-wrapper">
        <WizardForm />
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