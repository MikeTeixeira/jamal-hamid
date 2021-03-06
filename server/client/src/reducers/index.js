//Main file for our Reducers
//Import all of our reducers here
import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import formActiveReducer from './formActiveReducer';
import cartReducer from '../reducers/cartReducer';

export default combineReducers({
  form: formReducer,
  formActive: formActiveReducer,
  cartItems: cartReducer,
})