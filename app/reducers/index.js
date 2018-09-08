import {combineReducers} from 'redux';
import productsReducer from "./products";
import calculatorReducer from "./calculator";

export default combineReducers({
  products: productsReducer,
  calculator: calculatorReducer,
});
