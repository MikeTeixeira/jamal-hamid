import React from 'react';

export default class Questionnare extends React.Component {

  render() { 
    return (
      <div>
        <form action="/services/package/questionnaire" method="post">
          <label htmlFor="firstName">First Name: </label>
          <input name="firstName" type="text"/>

          <label htmlFor="lastName">Last Name: </label>
          <input name="lastName" type="text"/>

          <label htmlFor="email">Email Address: </label>
          <input name="email" type="email"/>

          <label htmlFor="age">Age: </label>
          <input name="age" type="number" maxLength={2}/>

          <label htmlFor="height" maxLength={3}>Height: </label>
          <input name="height" type="number"/>

          <label htmlFor="weight">Weight: </label>
          <input name="weight" type="number" maxLength={3}/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
}