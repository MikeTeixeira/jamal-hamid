import React from 'react';
import {Field} from 'redux-form';

export const renderField = ({ input, label, type, placeholder, size, maxLength, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} size={size} maxLength={maxLength} placeholder={placeholder} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export const renderRadioSelect = (name, description) => {
  return <div>
    <label>{description}</label>
    <label><Field name={name} component="input" type="radio" value="yes"/>Yes</label>
    <label><Field name={name} component="input" type="radio" value="no"/>No</label>
  </div>
};