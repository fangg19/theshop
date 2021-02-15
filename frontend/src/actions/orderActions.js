import * as actionType from '../constants/actionTypes';
import axios from 'axios';

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionType.ORDER_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/orders`, order, config);

    dispatch({
      type: actionType.ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.ORDER_CREATE_FAIL,

      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
