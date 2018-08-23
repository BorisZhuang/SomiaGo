import {ADD_PRODUCT} from '../actions/products';

const initialState = {
  products: {
    byId: {},
    allIds: []
  }
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PRODUCT:
      return {
        byId: {
          ...state.byId,
          [action.id]: action.product
        },
        allIds: [...state.products.allIds, action.id]
        //allIds: state.products.allIds.concat(action.id)
      };
    default:
      return state;
  }
};

export default reducer;
