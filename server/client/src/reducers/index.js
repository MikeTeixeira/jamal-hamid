//Main file for our Reducers
//Import all of our reducers here
import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import formActiveReducer from './formActiveReducer';

export default combineReducers({
  form: formReducer,
  formActive: formActiveReducer,
})