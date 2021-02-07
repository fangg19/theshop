import * as actionType from '../constants/actionTypes';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.USER_LOGIN_REQUEST:
      return { loading: true };
    case actionType.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actionType.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case actionType.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.USER_REGISTER_REQUEST:
      return { loading: true };
    case actionType.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actionType.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
