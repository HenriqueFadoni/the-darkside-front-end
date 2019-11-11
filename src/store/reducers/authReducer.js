import * as actionTypes from '../actions/actionTypes';

const initialState = {
  userId: '',
  error: false
}

const registerSuccessful = state => {
  return {
    ...state,
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
    case actionTypes.AUTH_REGISTER_USER_SUCCESS: return registerSuccessful(state);
    case actionTypes.AUTH_REGISTER_USER_FAIL: return registerFail(state);
    default: return state;
  }
}

export default authReducer;