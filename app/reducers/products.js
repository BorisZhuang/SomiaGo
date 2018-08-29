import {combineReducers} from 'redux';
import {ADD_PRODUCT} from '../actions/products';

function addProduct(state, action) {
  const {product} = action;
  const {productId} = product;

  return {
    ...state,
    [productId]: product
  };
}

function addProductId(state, action) {
  const {product} = action;
  const {productId} = product;

  return state.concat(productId);
}

const productsById = (state = {}, action) => {
  switch(action.type) {
    case ADD_PRODUCT:
      return addProduct(state, action);
    default:
      return state;
  }
};

const allProducts = (state = [], action) => {
  switch(action.type) {
    case ADD_PRODUCT:
      return addProductId(state, action);
    default:
      return state;
  }
};

export default productsReducer = combineReducers({
  byId : productsById,
  allIds : allProducts
});
