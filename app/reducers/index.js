import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import productsReducer from "./products";

export default combineReducers({
  products: productsReducer,
  calculator: formReducer
});
