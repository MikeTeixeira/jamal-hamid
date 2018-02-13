
import { CART_DATA_FETCHED, 
        ADD_TO_CART, 
        ADD_ITEM_FAILURE, 
        ADD_ITEM_SUCCESS,
        REMOVE_ITEM_FROM_CART,
        UPDATE_CART } from '../actions/types';


const initialState = {
  data: [],
  error: null,
  cartTotal: 0
}


export default function(state = initialState, action){
  switch(action.type){
    case CART_DATA_FETCHED:
      return {
        ...state,
        data: action.cart
      }
    case REMOVE_ITEM_FROM_CART:
      const cart = state.data.filter((item) => {
        return item.packageId !== action.cartData.packgeId
      })
        return {
          ...state,
          data: cart,          
        }
    default:
      return state;
  }
}