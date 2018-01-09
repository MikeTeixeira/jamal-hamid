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

export const renderRadioSelect = ( name, description, className, id) => {
  return <div>
    <label>{description}</label>
    <Field name={name} id={id} className={className} component="input" type="radio" value="yes"/>
    <label for={id}>Yes</label>
    <Field name={name} id={id} className={className} component="input" type="radio" value="no"/>
    <label for={id}>No</label>
  </div>
};