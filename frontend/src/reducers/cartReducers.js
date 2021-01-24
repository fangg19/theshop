import * as actionTypes from '../constants/actionTypes';

export const cartReducer = (state = { cartItmes: [] }, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM: {
      const item = action.payload;
      const existItem = state.cartItmes.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItmes.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        //if the item doesn't exist, we'll push it into the state
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    }
    default:
      return state;
  }
};