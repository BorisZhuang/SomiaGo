import {combineReducers} from 'redux';
import {UPDATE_CALCULATOR} from '../actions/calculator';

const initialState = {
  msrp: 0,
  discount: 0,
  weight: 0,
  shippingRate: 0,
  tax: 0,
  currency: 0,
  profitRate: 0,
  price: 0,
  profit: 0
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
        profitRate: action.profitRate,
        price: action.price,
        profit: action.profit,
      };
    default:
      return state;
  }
}
