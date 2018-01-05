//Form Reducer for our Questionnaire form
//Receives all state of the form
import { QUESTIONNAIRE_SUBMIT } from '../actions/types';

const initialState = {}

export default function(state = initialState, action) {
  switch(action.type){
    case QUESTIONNAIRE_SUBMIT:
      return action.payload;
    default:
      return state;
  }
}