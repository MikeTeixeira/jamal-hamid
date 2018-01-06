import React from 'react'

const renderField = ({ input, label, type, placeholder, size, maxLength, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} size={size} maxLength={maxLength} placeholder={placeholder} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

export default renderField