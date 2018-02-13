import axios from 'axios';
import { 
  QUESTIONNAIRE_SUBMIT, 
  NEXT_PAGE, 
  PREVIOUS_PAGE, 
  CART_DATA_FETCHED,
  REMOVE_ITEM_FROM_CART,
  UPDATE_CART_TOTAL,
  UPDATE_CART,
  CHECKOUT_FORM_SUBMIT} from './types';


//----------FORM ACTIONS--------//

//Submit
export const onQuestionnaireSubmit = () => async dispatch => {
  //Setting our default values
  const res = await axios.post("/services/package/questionnaire");

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


//--------CART ACTIONS -----------//

export const cartDataFetched = () => async dispatch =>  {
    const result = await axios.get('/cart/checkout');


    dispatch({type: CART_DATA_FETCHED, cart: result.data});
}

export const updateCartTotal = () => {
  return {
    type: UPDATE_CART_TOTAL
  }
}

export const removeItemFromCart = (itemToRemove) => async dispatch => {
  const result = await axios.delete('/cart/checkout', {data: {itemToRemove}});

  dispatch({type: REMOVE_ITEM_FROM_CART})
}

export const updateCart = (updatedItem) => async dispatch => {
  const result = await axios.put('/cart/checkout', updatedItem);

  dispatch({type: UPDATE_CART, data: result.data})
}

//------------- CHECKOUT ACTIONS -------------------//




