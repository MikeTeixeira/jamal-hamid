import axios from 'axios';
import { QUESTIONNAIRE_SUBMIT } from './types';

//Submit
export const onQuestionnaireSubmit = () => async dispatch => {
  //Setting our default values
  const res = axios.post("/services/package/questionnaire");

  dispatch({type: QUESTIONNAIRE_SUBMIT, payload: res.data });
}