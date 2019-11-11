import * as actionTypes from './actionTypes';
import axios from 'axios';

const registerUserStart = () => {
  return {
    type: actionTypes.AUTH_REGISTER_USER_START
  }
}

const registerSuccessful = () => {
  return {
    type: actionTypes.AUTH_REGISTER_USER_SUCCESS
  }
}

const registerFail = () => {
  return {
    type: actionTypes.AUTH_REGISTER_USER_FAIL
  }
}

export const registerUser = (email, password) => {
  return async dispatch => {
    try {
      const key = process.env.REACT_APP_FIREBASE_API_KEY;
      const path = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
      const subsData = {
        email,
        password,
        returnSecureToken: true
      }
      await axios.post(path, subsData);
      dispatch(registerSuccessful());
      dispatch(registerUserStart());
    }
    catch (error) {
      dispatch(registerFail());
    }
  }
}
