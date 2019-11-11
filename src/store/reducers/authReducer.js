import * as actionTypes from '../actions/actionTypes';

const initialState = {
  userId: '',
  registerSuccess: false,
  error: false
}

const registerStart = state => {
  return {
    ...state,
    registerSuccess: false
  }
}

const registerSuccessful = state => {
  return {
    ...state,
    registerSuccess: true,
    error: false
  }
}

const registerFail = state => {
  return {
    ...state,
    error: true
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_REGISTER_USER_START: return registerStart(state);
    case actionTypes.AUTH_REGISTER_USER_SUCCESS: return registerSuccessful(state);
    case actionTypes.AUTH_REGISTER_USER_FAIL: return registerFail(state);
    default: return state;
  }
}

export default authReducer;