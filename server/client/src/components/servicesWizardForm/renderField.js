import React from 'react';
import {Field} from 'redux-form';
import {Input} from 'react-materialize';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField } from 'redux-form-material-ui';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export const renderField = ({ input, className, label, type, placeholder, size, maxLength, meta: { touched, error } }) => (
  <div>
    <div>
      {touched && error && <span className="error" >{error}</span>}
      <label>{label}</label>
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

export const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => {
  return (
  <MuiThemeProvider>
    <TextField style={{width: '100%'}} hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  </MuiThemeProvider>
  )
}

  const heightOptions = ([
  "4'10","4'11","5'0","5'1","5'2","5'3","5'4","5'5","5'6",
  "5'7","5'8","5'9","5'10","5'11","6'0","6'1","6'2","6'3",
  "6'4","6'5","6'6","6'7","6'8","6'9",
]);

const renderHeightOptions = () => (
  heightOptions.map((val, index) => <MenuItem key={index} value={val} primaryText={val} />)
)


export const renderSelectHeightField = ({ input, label, meta: { touched, error }, children, ...custom }) => {
  return (
    <MuiThemeProvider>
        <SelectField
          floatingLabelText={label}
          errorText={touched && error}
          {...input}
          onChange={(event, index, value) => input.onChange(value)}
          {...custom}>
          {renderHeightOptions()}
          </SelectField>
    </MuiThemeProvider>
  )
}

const genderOptions = (["Male", "Female"]);

const renderGenderOptions = () => {
  return genderOptions.map((val, index) => <MenuItem key={index} value={val} primaryText={val} />)
}

export const renderSelectGenderField = ({ input, label, meta: { touched, error }, children, ...custom }) => {
  return (
    <MuiThemeProvider>
        <SelectField
          floatingLabelText={label}
          errorText={touched && error}
          {...input}
          onChange={(event, index, value) => input.onChange(value)}
          {...custom}>
          {renderGenderOptions()}
          </SelectField>
    </MuiThemeProvider>
  )
}
