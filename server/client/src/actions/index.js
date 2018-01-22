import axios from 'axios';
import { 
  QUESTIONNAIRE_SUBMIT, 
  NEXT_PAGE, 
  PREVIOUS_PAGE, 
  ADD_TO_CART} from './types';


//----------FORM ACTIONS--------//

//Submit
export const onQuestionnaireSubmit = () => async dispatch => {
  //Setting our default values
  const res = axios.post("/services/package/questionnaire");

  dispatch({type: QUESTIONNAIRE_SUBMIT, payload: res.data });
}

export const previousPage = (payload) => {
  return {
    type: PREVIOUS_PAGE,
  }
}

export const nextPage = (payload) => {
  return {
    type: NEXT_PAGE,
  }
}


