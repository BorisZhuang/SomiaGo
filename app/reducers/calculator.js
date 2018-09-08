import {combineReducers} from 'redux';
import {UPDATE_CALCULATOR} from '../actions/calculator';

export default calculatorReducer = (state = {}, action) => {
  switch(action.type) {
    case UPDATE_CALCULATOR:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}
