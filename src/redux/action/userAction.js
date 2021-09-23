import {
  USER_LOGOUT,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCESS,
} from "./actionType";

export const userSigninAction = (user) => (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNIN_REQUEST,
    });
    dispatch({
      type: USER_SIGNIN_SUCESS,
      payload: user,
    });
    localStorage.setItem("userInfo", JSON.stringify(user));
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: error.message,
    });
  }
};

export const userLogout = () => (dispatch, getState) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
};
