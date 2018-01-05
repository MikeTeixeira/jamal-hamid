//Main file for our Reducers
//Import all of our reducers here
import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
// import formReducer from './formReducer';

export default combineReducers({
  form: formReducer
});