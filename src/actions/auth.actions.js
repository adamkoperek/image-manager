import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, LOGIN_CANCEL} from "./types";

export const login = (email, password) => ({
  type: LOGIN,
  payload: {
    email,
    password
  }
});

export const loginSuccess = (username, jwt) => ({
  type: LOGIN_SUCCESS,
  payload: {
    username,
    jwt
  }
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: error
});

export const loginCancel = () => ({
  type: LOGIN_CANCEL,
  payload: {}
});

export const logout = () => ({
  type: LOGOUT
});
