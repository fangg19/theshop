import * as actionType from '../constants/actionTypes';

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case actionType.CART_ADD_ITEM: {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        //if the item doesn't exist, we'll push it into the state
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    }

    case actionType.CART_REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    }

    case actionType.CART_SAVE_SHIPPING_ADDRESS: {
      return {
        ...state,
        shippingAddress: action.payload,
      };
    }

    case actionType.CART_SAVE_PAYMENT_METHOD: {
      return {
        ...state,
        paymentMethod: action.payload,
      };
    }

    default:
      return state;
  }
};
