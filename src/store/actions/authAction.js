import * as actionTypes from './actionTypes';
import axios from 'axios';

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
  return dispatch => {
    const key = process.env.REACT_APP_FIREBASE_API_KEY;
    const path = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
    const subsData = {
      email,
      password,
      returnSecureToken: true
    }
    axios.post(path, subsData)
      .then(() => {
        dispatch(registerSuccessful());
      })
      .catch(() => {
        dispatch(registerFail());
      });
  }
}
