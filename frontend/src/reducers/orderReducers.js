import * as actionType from '../constants/actionTypes';

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };

    case actionType.ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };

    case actionType.ORDER_CREATE_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case actionType.ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionType.ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case actionType.ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
