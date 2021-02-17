import axios from 'axios';
import * as actionType from '../constants/actionTypes';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: actionType.USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );

    dispatch({
      type: actionType.USER_LOGIN_SUCCESS,
      //The data that gets back from the response of the axios.post function above;
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionType.USER_LOGIN_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({
    type: actionType.USER_LOGOUT,
  });
  dispatch({
    type: actionType.USER_DETAILS_RESET,
  });
  dispatch({
    type: actionType.ORDER_HISTORY_RESET,
  });
  dispatch({
    type: actionType.USER_LIST_RESET,
  });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: actionType.USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    );

    dispatch({
      type: actionType.USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: actionType.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionType.USER_REGISTER_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionType.USER_DETAILS_REQUEST,
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

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: actionType.USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.USER_DETAILS_FAIL,

      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionType.USER_UPDATE_PROFILE_REQUEST,
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

    const { data } = await axios.put(`/api/users/profile`, user, config);

    dispatch({
      type: actionType.USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.USER_UPDATE_PROFILE_FAIL,

      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionType.USER_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users`, config);

    dispatch({
      type: actionType.USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionType.USER_LIST_FAIL,

      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
