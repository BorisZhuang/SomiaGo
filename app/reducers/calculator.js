import {combineReducers} from 'redux';
import {UPDATE_CALCULATOR} from '../actions/calculator';

const initialState = {
  msrp: '',
  discount: '',
  weight: '',
  shippingRate: '',
  tax: '',
  currency: '',
  profitRate: ''
}

export default calculatorReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_CALCULATOR:
      return {
        ...state,
        msrp: action.msrp,
        discount: action.discount,
        weight: action.weight,
        shippingRate: action.shippingRate,
        tax: action.tax,
        currency: action.currency,
        profitRate: action.profitRate
      };
    default:
      return state;
  }
}
