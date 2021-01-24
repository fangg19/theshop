import * as actionType from '../constants/actionTypes';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case actionType.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case actionType.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
