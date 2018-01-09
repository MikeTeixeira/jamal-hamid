import React from 'react';
import {Field} from 'redux-form';

export const renderField = ({ input, className, label, type, placeholder, size, maxLength, meta: { touched, error } }) => (
  <div>
    <div>
      {touched && error && <span className="error" >{error}</span>}
      <input {...input} className={className} size={size} maxLength={maxLength} placeholder={placeholder}/>
    </div>
  </div>
);

export const renderRadioSelect = ( name, description, className) => {
  return <div>
    <label>{description}</label>
    <label><Field name={name} className={className} component="input" type="radio" value="yes"/>Yes</label>
    <label><Field name={name} component="input" type="radio" value="no"/>No</label>
  </div>
};