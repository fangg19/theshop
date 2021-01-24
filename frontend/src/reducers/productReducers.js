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

export const productDetailsReducer = (
  state = { product: { revies: [] } },
  action
) => {
  switch (action.type) {
    case actionType.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case actionType.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case actionType.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
